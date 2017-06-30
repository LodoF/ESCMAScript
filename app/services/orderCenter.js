import { BasicHttp } from './basicHttp.js';

export class OrderCenter {

  constructor (host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  /**
   * 提交订单
   * @param {String} data 订单body
   */
  createOrder ({data = ''}) {
    let options = {
      host: this.host,
      method: 'POST',
      path: '/custom/entity/commerce_order?_format=json',
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
   * 更新订单
   * @param {String} id  订单id
   * @param {String} data  更新内容
   */
  updateOrder ({id, data = ''}) {
    let options = {
      host: this.host,
      method: 'PATCH',
      path: '/jsonapi/commerce_order/default/' + id + '?_format=api_json',
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
   * 查询订单信息
   * @param {String} id 订单id
   */
  queryOrder ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/jsonapi/commerce_order/default/' + id + '?_format=api_json',
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