import { BasicHttp } from './basicHttp.js';

export class DataEngine {

  constructor (host, port, username, password) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }

  /**
   * 查询商家或门店信息
   * @param {String} id 商家id
   */
  queryBusiness ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/node/' + id + '.json',
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
   * 获取商家下所有门店列表
   * @param {String} id 商家id
   */
  queryStoreList ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/node.json?type=stores&og_group_ref=' + id,
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
  * 获取门店下所有员工
  * @param {String} id 门店id
  */
  queryStoreUser ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/user.json?field_store=' + id,
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
   * 查询商家分类属性
   * @param {String} id 分类id
   */
  queryCategoryDetail ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/taxonomy_term.json?vocabulary=' + id,
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
  * 查询商家下所有产品
  * @param {String} id 商家id
  */
  queryProductList ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/commerce_product.json?og_group_ref=' + id,
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
   * 获取某个产品的具体信息
   * @param {String} id 产品id
   */
  queryProductDetail ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/commerce_product/' + id + '.json?embed[field_collection_item]=2&embed[commerce_line_item]=2&embed[node]=2',
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
   * 获取某销售范围属性
   * @param {String} id  销售范围属性
   */
  queryCollectionItem ({id}) {
    let options = {
      host: this.host,
      method: 'GET',
      path: '/field_collection_item/' + id + '.json?embed[node]=2',
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
   * 获取文件属性
   * @param {String} id 文件id
   */
  querFile ({id}) {

  }
}