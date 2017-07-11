import { BasicHttp } from './basicHttp.js';

export class Payment {
  constructor (host, port, username, password) {
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
  alipayRequestQRCode ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay/requestQRCode?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  alipayCapture ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay/capture?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPayRequestQRCode ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/requestQRCode?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPayCapture ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/capture?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  alipaySandboxRequestQRCode ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/requestQRCode?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  alipaySandboxCapture ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/capture?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPaySandboxRequestQRCode ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/requestQRCode?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatSandboxPayCapture ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/capture?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  alipayRefund ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay/refund?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPayRefund ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/refund?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  alipaySandboxRefund ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/alipay_sandbox/refund?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPaySandboxRefund ({UUID, data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/refund?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPayCheckRemoteState (UUID, data = '') {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay/checkRemoteState?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
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
  wechatPaySandboxCheckRemoteState (UUID, data = '') {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/commerce/payment_gateway/' + UUID + '/wechat_pay_sandbox/checkRemoteState?_format=json',
      port: this.port,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      data: data
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
        reject(err);
      });
    });

    return promise;
  }

  /**
  * 使用Payment UUID来查询Payment
  * @param {String} UUID Payment UUID
  */
  queryPaymentResultByPUUID ({UUID}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/jsonapi/commerce_payment/payment_default/' + UUID,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      port: this.port
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
        reject(err);
      });
    });

    return promise;
  }

  /**
  * 使用Order UUID来查询Payment
  * @param {String} UUID Payment UUID
  */
  queryPaymentResultByOUUID ({UUID}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/jsonapi/commerce_payment/payment_default?filter[field_oc_order_uuid][value]=' + UUID,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      port: this.port
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
        reject(err);
      });
    });

    return promise;
  }

  /**
  * 查询商家支持的支付手段
  * @param {String} UUID BUSINESS UUID
  */
  queryBussinessAccount ({UUID}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/jsonapi/node/account/' + UUID,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' +  new Buffer(this.username + ':' + this.password).toString('base64')
      },
      port: this.port
    };

    const basicHttp = new BasicHttp();

    let promise = new Promise(function (resolve, reject) {
      basicHttp.requset(options)
      .then(function(data) {
        resolve(data);
      }, function(err) {
        reject(err);
      });
    });

    return promise;
  }
}