// let PouchDB = require('pouchdb-core').plugin(require('pouchdb-adapter-websql'));
// let PouchDB = require('pouchdb');

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export class _Pouchdb {

  /**
   * create Database
   * @param {String} name
   * @param {String} adapter
   */
  createDatabase (name) {
    let db = new PouchDB(name, {adapter: 'websql'});
    return db;
  }

  /**
   * destroy Database
   * @param {Database} db
   */
  destroyDatabase (db) {
    let promise = new Promise(function (resolve, reject) {
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
  close (db) {
    let promise = new Promise(function (resolve, reject) {
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
  put (db, doc) {
    let promise = new Promise(function (resolve, reject) {
      db.put(doc, function(err, response) {
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
  get (db, id) {
    let promise = new Promise(function (resolve, reject) {
      db.get(id, function(err, doc) {
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
  bulkGet (db, docs) {
    let promise = new Promise(function (resolve, reject) {
      db.bulkGet({docs: docs}, function(err, result) {
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
  updateDoc (db, doc) {
    let promise = new Promise(function (resolve, reject) {
      db.get(doc._id, function(err, _doc) {
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
  remove (db, id) {
    let promise = new Promise(function (resolve, reject) {
      db.get(id, function(err, _doc) {
        if (err) {
          reject(new Error(err));
        } else {
          db.remove(_doc, function(err, response) {
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
  bulkDocs (db, docs) {
    let promise = new Promise(function (resolve, reject) {
      db.bulkDocs(docs, function(err, response) {
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
  allDocs (db, options) {
    let promise = new Promise(function (resolve, reject) {
      db.allDocs(options, function(err, response) {
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
  changes (db, options, fun) {
    let changes = db.changes(options).on('change', function(change) {
      fun(changes, change);
    }).on('complete', function(info) {
      fun(changes, info);
    }).on('error', function (err) {
      fun(changes, err);
    });
  }

  /**
   * cancel database changes
   * @param {*} changes
   */
  cancelChanges (changes) {
    changes.cancel();
  }

  /**
   * replicate a database
   * @param {*} src
   * @param {*} target
   * @param {JSON} options
   * @param {FUCTION} fun
   */
  replicate (src, target, options, fun) {
    PouchDB.replicate(src, target, options)
    .on('change', function (info) {
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
  sync (src, target, options, fun) {
    PouchDB.sync(src, target, options)
    .on('change', function (info) {
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
  putAttachment (db, doc) {
    let promise = new Promise(function (resolve, reject) {
      db.putAttachment(doc.id, doc.name, doc.attachment, doc.type, function(err, res) {
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
  viewCleanup (db) {
    let promise = new Promise(function(resolve, reject) {
      db.viewCleanup(function(err, result) {
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
  compact (db) {
    let promise = new Promise(function(resolve, reject) {
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
  createIndex (db, fields) {
    let promise = new Promise(function(resolve, reject) {
      db.createIndex({
        index: {
          fields: fields
        }
      }, function(err, result) {
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
  find (db, obj) {
    let promise = new Promise(function(resolve, reject) {
      db.find(obj, function(err, result) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
    return promise;
  }
}