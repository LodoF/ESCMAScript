// let PouchDB = require('pouchdb-core').plugin(require('pouchdb-adapter-websql'));
let PouchDB = require('pouchdb-browser');

export class _Pouchdb {

  /**
   * create Database
   * @param {String} name
   * @param {String} adapter
   */
  createDatabase (name) {
    let db = new PouchDB('mydb');
    return db;
  }

  /**
   * destroy Database
   * @param {Database} db
   */
  destroyDatabase (db) {
    let promise = new Promise(function (resolve, reject) {
      db.destroy().then(function (response) {
        resolve(response);
      }).catch(function (err) {
        reject(new Error(err));
      });
    });
    return promise;
  }

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
}