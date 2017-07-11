'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataEngine = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basicHttp = require('./basicHttp.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataEngine = exports.DataEngine = function () {
  function DataEngine(host, port, username, password) {
    _classCallCheck(this, DataEngine);

    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  /**
   * 查询商家或门店信息
   * @param {String} id 商家id
   */


  _createClass(DataEngine, [{
    key: 'queryBusiness',
    value: function queryBusiness(_ref) {
      var id = _ref.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/node/' + id + '.json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 获取商家下所有门店列表
     * @param {String} id 商家id
     */

  }, {
    key: 'queryStoreList',
    value: function queryStoreList(_ref2) {
      var id = _ref2.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/node.json?type=stores&og_group_ref=' + id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
    * 获取门店下所有员工
    * @param {String} id 门店id
    */

  }, {
    key: 'queryStoreUser',
    value: function queryStoreUser(_ref3) {
      var id = _ref3.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/user.json?field_store=' + id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 获取用户详细信息
     * @param {*} id 用户id
     */

  }, {
    key: 'queryUserDetail',
    value: function queryUserDetail(_ref4) {
      var id = _ref4.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/user/' + id + '.json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 查询商家分类属性
     * @param {String} id 分类id
     */

  }, {
    key: 'queryCategoryDetail',
    value: function queryCategoryDetail(_ref5) {
      var id = _ref5.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/taxonomy_term.json?vocabulary=' + id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
    * 查询商家下所有产品
    * @param {String} id 商家id
    */

  }, {
    key: 'queryProductList',
    value: function queryProductList(_ref6) {
      var id = _ref6.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/commerce_product.json?og_group_ref=' + id,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 获取某个产品的具体信息
     * @param {String} id 产品id
     */

  }, {
    key: 'queryProductDetail',
    value: function queryProductDetail(_ref7) {
      var id = _ref7.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/commerce_product/' + id + '.json?embed[field_collection_item]=2&embed[commerce_line_item]=2&embed[node]=2',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 获取某销售范围属性
     * @param {String} id  销售范围属性
     */

  }, {
    key: 'queryCollectionItem',
    value: function queryCollectionItem(_ref8) {
      var id = _ref8.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/field_collection_item/' + id + '.json?embed[node]=2',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }

    /**
     * 获取文件属性
     * @param {String} id 文件id
     */

  }, {
    key: 'querFile',
    value: function querFile(_ref9) {
      var id = _ref9.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/file/' + id + '.json',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        port: this.port
      };

      var basicHttp = new _basicHttp.BasicHttp();

      var promise = new Promise(function (resolve, reject) {
        basicHttp.requset(options).then(function (data) {
          resolve(data);
        }, function (err) {
          reject(err);
        });
      });
      return promise;
    }
  }]);

  return DataEngine;
}();