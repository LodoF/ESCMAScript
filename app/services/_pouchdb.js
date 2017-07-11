'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let PouchDB = require('pouchdb-core').plugin(require('pouchdb-adapter-websql'));
// let PouchDB = require('pouchdb');

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var _Pouchdb = exports._Pouchdb = function () {
  function _Pouchdb() {
    _classCallCheck(this, _Pouchdb);
  }

  _createClass(_Pouchdb, [{
    key: 'createDatabase',


    /**
     * create Database
     * @param {String} name
     * @param {String} adapter
     */
    value: function createDatabase(name) {
      var db = new PouchDB(name, { adapter: 'websql' });
      return db;
    }

    /**
     * destroy Database
     * @param {Database} db
     */

  }, {
    key: 'destroyDatabase',
    value: function destroyDatabase(db) {
      var promise = new Promise(function (resolve, reject) {
        db.destroy(function (err, response) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(response);
          }
        });
      });
      return promise;
    }

    /**
     * close db
     * @param {*} db
     */

  }, {
    key: 'close',
    value: function close(db) {
      var promise = new Promise(function (resolve, reject) {
        db.close(function () {
          resolve(response);
        });
      });
      return promise;
    }

    /**
     * Create a new document
     * @param {*} db
     * @param {JSON} doc
     */

  }, {
    key: 'put',
    value: function put(db, doc) {
      var promise = new Promise(function (resolve, reject) {
        db.put(doc, function (err, response) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(response);
          }
        });
      });
      return promise;
    }

    /**
     * get document
     * @param {*} db
     * @param {String} id
     */

  }, {
    key: 'get',
    value: function get(db, id) {
      var promise = new Promise(function (resolve, reject) {
        db.get(id, function (err, doc) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(doc);
          }
        });
      });
      return promise;
    }

    /**
     * bulk Get Document
     * @param {*} db
     * @param {Array<JSON>} docs
     */

  }, {
    key: 'bulkGet',
    value: function bulkGet(db, docs) {
      var promise = new Promise(function (resolve, reject) {
        db.bulkGet({ docs: docs }, function (err, result) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(doc);
          }
        });
      });
      return promise;
    }

    /**
     * update document
     * @param {*} db
     * @param {JOSN} doc
     */

  }, {
    key: 'updateDoc',
    value: function updateDoc(db, doc) {
      var promise = new Promise(function (resolve, reject) {
        db.get(doc._id, function (err, _doc) {
          if (err) {
            reject(new Error(err));
          } else {
            doc._rev = _doc._rev;
            db.put(doc, function (err, response) {
              if (err) {
                reject(new Error(err));
              } else {
                resolve(response);
              }
            });
          }
        });
      });
      return promise;
    }

    /**
     * remove document
     * @param {*} db
     * @param {String} id
     */

  }, {
    key: 'remove',
    value: function remove(db, id) {
      var promise = new Promise(function (resolve, reject) {
        db.get(id, function (err, _doc) {
          if (err) {
            reject(new Error(err));
          } else {
            db.remove(_doc, function (err, response) {
              if (err) {
                reject(new Error(err));
              } else {
                resolve(response);
              }
            });
          }
        });
      });
      return promise;
    }

    /**
     *  bulk Create Document
     * @param {*} db
     * @param {Array<JSON>} docs
     */

  }, {
    key: 'bulkDocs',
    value: function bulkDocs(db, docs) {
      var promise = new Promise(function (resolve, reject) {
        db.bulkDocs(docs, function (err, response) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(response);
          }
        });
      });
      return promise;
    }

    /**
     * get All Document
     * @param {*} db
     * @param {JSON} options
     */

  }, {
    key: 'allDocs',
    value: function allDocs(db, options) {
      var promise = new Promise(function (resolve, reject) {
        db.allDocs(options, function (err, response) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(response);
          }
        });
      });
      return promise;
    }

    /**
     * listen to database changes
     * @param {*} db
     * @param {JSON} options
     * @param {FUNCTION} fun
     */

  }, {
    key: 'changes',
    value: function changes(db, options, fun) {
      var changes = db.changes(options).on('change', function (change) {
        fun(changes, change);
      }).on('complete', function (info) {
        fun(changes, info);
      }).on('error', function (err) {
        fun(changes, err);
      });
    }

    /**
     * cancel database changes
     * @param {*} changes
     */

  }, {
    key: 'cancelChanges',
    value: function cancelChanges(changes) {
      changes.cancel();
    }

    /**
     * replicate a database
     * @param {*} src
     * @param {*} target
     * @param {JSON} options
     * @param {FUCTION} fun
     */

  }, {
    key: 'replicate',
    value: function replicate(src, target, options, fun) {
      PouchDB.replicate(src, target, options).on('change', function (info) {
        // handle change
        fun('change', info);
      }).on('paused', function (err) {
        // replication paused (e.g. replication up to date, user went offline)
        fun('paused', err);
      }).on('active', function () {
        // replicate resumed (e.g. new changes replicating, user went back online)
        fun('active');
      }).on('denied', function (err) {
        // a document failed to replicate (e.g. due to permissions)
        fun('denied', err);
      }).on('complete', function (info) {
        // handle complete
        fun('denied', info);
      }).on('error', function (err) {
        // handle error
        fun('denied', err);
      });
    }

    /**
     * sync
     * @param {*} src
     * @param {*} target
     * @param {JSON} options
     * @param {*} fun
     */

  }, {
    key: 'sync',
    value: function sync(src, target, options, fun) {
      PouchDB.sync(src, target, options).on('change', function (info) {
        // handle change
        fun('change', info);
      }).on('paused', function (err) {
        // replication paused (e.g. replication up to date, user went offline)
        fun('paused', err);
      }).on('active', function () {
        // replicate resumed (e.g. new changes replicating, user went back online)
        fun('active');
      }).on('denied', function (err) {
        // a document failed to replicate (e.g. due to permissions)
        fun('denied', err);
      }).on('complete', function (info) {
        // handle complete
        fun('denied', info);
      }).on('error', function (err) {
        // handle error
        fun('denied', err);
      });
    }

    /**
     * save an attachment
     * @param {*} db
     * @param {JSON} doc
     */

  }, {
    key: 'putAttachment',
    value: function putAttachment(db, doc) {
      var promise = new Promise(function (resolve, reject) {
        db.putAttachment(doc.id, doc.name, doc.attachment, doc.type, function (err, res) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(res);
          }
        });
      });
      return promise;
    }

    /**
     * View cleanup
     * @param {*} db
     */

  }, {
    key: 'viewCleanup',
    value: function viewCleanup(db) {
      var promise = new Promise(function (resolve, reject) {
        db.viewCleanup(function (err, result) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        });
      });
      return promise;
    }

    /**
     * Compact the database
     * @param {*} db
     */

  }, {
    key: 'compact',
    value: function compact(db) {
      var promise = new Promise(function (resolve, reject) {
        db.compact(function (err, result) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        });
      });
      return promise;
    }

    /**
     * create index
     * @param {*} db
     * @param {Array} fields
     */

  }, {
    key: 'createIndex',
    value: function createIndex(db, fields) {
      var promise = new Promise(function (resolve, reject) {
        db.createIndex({
          index: {
            fields: fields
          }
        }, function (err, result) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        });
      });
      return promise;
    }

    /**
     * find index
     * @param {*} db
     * @param {JSON} obj
     */

  }, {
    key: 'find',
    value: function find(db, obj) {
      var promise = new Promise(function (resolve, reject) {
        db.find(obj, function (err, result) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        });
      });
      return promise;
    }
  }]);

  return _Pouchdb;
}();