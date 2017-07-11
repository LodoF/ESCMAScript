'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderCenter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basicHttp = require('./basicHttp.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderCenter = exports.OrderCenter = function () {
  function OrderCenter(host, port, username, password) {
    _classCallCheck(this, OrderCenter);

    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  /**
   * 提交订单
   * @param {String} data 订单body
   */


  _createClass(OrderCenter, [{
    key: 'createOrder',
    value: function createOrder(_ref) {
      var _ref$data = _ref.data,
          data = _ref$data === undefined ? '' : _ref$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/custom/entity/commerce_order?_format=json',
        port: this.port,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        data: data
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
     * 更新订单
     * @param {String} id  订单id
     * @param {String} data  更新内容
     */

  }, {
    key: 'updateOrder',
    value: function updateOrder(_ref2) {
      var id = _ref2.id,
          _ref2$data = _ref2.data,
          data = _ref2$data === undefined ? '' : _ref2$data;

      var options = {
        host: this.host,
        method: 'PATCH',
        path: '/jsonapi/commerce_order/default/' + id + '?_format=api_json',
        port: this.port,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + new Buffer(this.username + ':' + this.password).toString('base64')
        },
        data: data
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
     * 查询订单信息
     * @param {String} id 订单id
     */

  }, {
    key: 'queryOrder',
    value: function queryOrder(_ref3) {
      var id = _ref3.id;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/jsonapi/commerce_order/default/' + id + '?_format=api_json',
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

  return OrderCenter;
}();