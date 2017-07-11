'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basicHttp = require('./basicHttp.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payment = exports.Payment = function () {
  function Payment(host, port, username, password) {
    _classCallCheck(this, Payment);

    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  /**
   * 支付宝 消费者扫商家二维码
   * @param {String} UUID 支付法人UUID
   * @param {String} data 支付参数
   */


  _createClass(Payment, [{
    key: 'alipayRequestQRCode',
    value: function alipayRequestQRCode(_ref) {
      var UUID = _ref.UUID,
          _ref$data = _ref.data,
          data = _ref$data === undefined ? '' : _ref$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay/requestQRCode?_format=json',
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
     * 支付宝 商家扫消费者二维码
     * @param {String} UUID 支付法人UUID
     * @param {String} data 支付参数
     */

  }, {
    key: 'alipayCapture',
    value: function alipayCapture(_ref2) {
      var UUID = _ref2.UUID,
          _ref2$data = _ref2.data,
          data = _ref2$data === undefined ? '' : _ref2$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay/capture?_format=json',
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
    * 微信 消费者扫商家二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatPayRequestQRCode',
    value: function wechatPayRequestQRCode(_ref3) {
      var UUID = _ref3.UUID,
          _ref3$data = _ref3.data,
          data = _ref3$data === undefined ? '' : _ref3$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/requestQRCode?_format=json',
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
    * 微信 商家扫消费者二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatPayCapture',
    value: function wechatPayCapture(_ref4) {
      var UUID = _ref4.UUID,
          _ref4$data = _ref4.data,
          data = _ref4$data === undefined ? '' : _ref4$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/capture?_format=json',
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
    * 支付宝沙盒 消费者扫商家二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'alipaySandboxRequestQRCode',
    value: function alipaySandboxRequestQRCode(_ref5) {
      var UUID = _ref5.UUID,
          _ref5$data = _ref5.data,
          data = _ref5$data === undefined ? '' : _ref5$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/requestQRCode?_format=json',
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
    * 支付宝沙盒 商家扫消费者二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'alipaySandboxCapture',
    value: function alipaySandboxCapture(_ref6) {
      var UUID = _ref6.UUID,
          _ref6$data = _ref6.data,
          data = _ref6$data === undefined ? '' : _ref6$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/capture?_format=json',
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
    * 微信沙盒 消费者扫商家二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatPaySandboxRequestQRCode',
    value: function wechatPaySandboxRequestQRCode(_ref7) {
      var UUID = _ref7.UUID,
          _ref7$data = _ref7.data,
          data = _ref7$data === undefined ? '' : _ref7$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/requestQRCode?_format=json',
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
    * 微信沙盒 商家扫消费者二维码
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatSandboxPayCapture',
    value: function wechatSandboxPayCapture(_ref8) {
      var UUID = _ref8.UUID,
          _ref8$data = _ref8.data,
          data = _ref8$data === undefined ? '' : _ref8$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/capture?_format=json',
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
    * 支付宝 支付宝退款
    * @param {String} UUID 支付法人UUID
    * @param {String} data 退款body
    */

  }, {
    key: 'alipayRefund',
    value: function alipayRefund(_ref9) {
      var UUID = _ref9.UUID,
          _ref9$data = _ref9.data,
          data = _ref9$data === undefined ? '' : _ref9$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay/refund?_format=json',
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
    * 微信 微信退款
    * @param {String} UUID 支付法人UUID
    * @param {String} data 退款body
    */

  }, {
    key: 'wechatPayRefund',
    value: function wechatPayRefund(_ref10) {
      var UUID = _ref10.UUID,
          _ref10$data = _ref10.data,
          data = _ref10$data === undefined ? '' : _ref10$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/refund?_format=json',
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
    * 支付宝沙盒 支付宝沙盒退款
    * @param {String} UUID 支付法人UUID
    * @param {String} data 退款body
    */

  }, {
    key: 'alipaySandboxRefund',
    value: function alipaySandboxRefund(_ref11) {
      var UUID = _ref11.UUID,
          _ref11$data = _ref11.data,
          data = _ref11$data === undefined ? '' : _ref11$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/refund?_format=json',
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
    * 微信沙盒 微信沙盒退款
    * @param {String} UUID 支付法人UUID
    * @param {String} data 退款body
    */

  }, {
    key: 'wechatPaySandboxRefund',
    value: function wechatPaySandboxRefund(_ref12) {
      var UUID = _ref12.UUID,
          _ref12$data = _ref12.data,
          data = _ref12$data === undefined ? '' : _ref12$data;

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/refund?_format=json',
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
    * 微信 微信更新远程状态
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatPayCheckRemoteState',
    value: function wechatPayCheckRemoteState(UUID) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/checkRemoteState?_format=json',
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
    * 微信沙盒 微信沙盒更新远程状态
    * @param {String} UUID 支付法人UUID
    * @param {String} data 支付参数
    */

  }, {
    key: 'wechatPaySandboxCheckRemoteState',
    value: function wechatPaySandboxCheckRemoteState(UUID) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var options = {
        host: this.host,
        method: 'POST',
        path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/checkRemoteState?_format=json',
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
    * 使用Payment UUID来查询Payment
    * @param {String} UUID Payment UUID
    */

  }, {
    key: 'queryPaymentResultByPUUID',
    value: function queryPaymentResultByPUUID(_ref13) {
      var UUID = _ref13.UUID;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/jsonapi/commerce_payment/payment_default/' + UUID,
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
    * 使用Order UUID来查询Payment
    * @param {String} UUID Payment UUID
    */

  }, {
    key: 'queryPaymentResultByOUUID',
    value: function queryPaymentResultByOUUID(_ref14) {
      var UUID = _ref14.UUID;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/jsonapi/commerce_payment/payment_default?filter[field_oc_order_uuid][value]=' + UUID,
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
    * 查询商家支持的支付手段
    * @param {String} UUID BUSINESS UUID
    */

  }, {
    key: 'queryBussinessAccount',
    value: function queryBussinessAccount(_ref15) {
      var UUID = _ref15.UUID;

      var options = {
        host: this.host,
        method: 'GET',
        path: '/jsonapi/node/account/' + UUID,
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

  return Payment;
}();