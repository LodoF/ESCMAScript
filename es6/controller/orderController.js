/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Config } from '../kit/config.js';
import { Kit } from '../kit/Kit.js';
import { OrderCenter } from '../services/orderCenter.js';
import { _Pouchdb } from '../services/_pouchdb.js';

export class OrderController extends OrderCenter {

  constructor (username, password) {
    super();
    let config = new Config();
    this.host = config.ocUrl;
    this.port = config.ocPort;
    this.username = username;
    this.password = password;
    this._pouchdb = new _Pouchdb();
    this.db = new _Pouchdb().createDatabase('orderInfo');
  }

  setorder (obj) {
    let kit = new Kit();
    let _order = {
      'data': {
        'uuid': kit.getUUID(),
        'mail': obj.mail,
        'field_crm_customer_id': obj.customer_id, // 客户在CRM里的ID
        'field_de_business_id': obj.bid, // 商家在DE里的ID
        'field_de_store_id': obj.sid, // 商家在DE里门店的ID
        'field_pmt_payment_id': obj.payment_id,
        'field_payment_method': obj.payment_method,
        'field_mkt_discount_id': obj.discount_id, // 商家在MKT里折扣的ID
        'field_discount': obj.discount,
        'field_delivery_fee': obj.delivery_fee,
        'placed': obj.placed, // 订单创建时间，如果这个字段不提供，服务器端会根据当前时间创建
        'completed': obj.completed, // 订单完成时间，可以不填
        'field_canceled': obj.field_canceled, // 订单取消时间，可以不填
        'field_delivering_time': obj.field_delivering_time, // 开始送货时间，可以不填
        'field_delivered': obj.field_delivered, // 订单送达时间，可以不填
        'field_payment_received': obj.field_payment_received, // 收到付款时间，可以不填
        'field_returned': obj.field_returned, // 退货时间，可以不填
        'order_number': obj.pos_type + obj.bid + obj.sid + obj.placed + obj.pid + obj.num, // 订单自定义号码，或者第三方订单号码
        'state': obj.state, // 订单状态，可选值参考以下文档  draft 新订单
        'field_invoice_title': obj.field_invoice_title, // 发票抬头，如果为空，认为不需要开发票
        'field_order_source': obj.source, // 订单来源，可选值参考以下文档
        'field_shipping_contact_number': obj.field_shipping_contact_number, // 送货地址联系电话
        'order_items': obj.order_items,
        'field_shipping': obj.field_shipping
      }
    };
    return _order;
  }

  insterOrder (
    { mail = 'xfang@sparkpad.com', customerId = '', bid, sid, paymentId = '', paymentMethod = '', discountId = '',
      discount = {'number': '0.00', 'currency_code': 'CNY'},
      deliveryfee = {'number': '0.00', 'currency_code': 'CNY'},
      placed = Date.parse(new Date()) / 1000, completed = '', canceled = '', deliveringTime = '',
      delivered = '', paymentReceived = '', returned = '', pid, num, state = 2, invoice = '',
      source, contactNumber = '', orderItems = [], shipping = {}
    }
  ) {
    let obj = {
      mail: mail,
      customer_id: customerId,
      bid: bid,
      sid: sid,
      payment_id: paymentId,
      payment_method: paymentMethod,
      discount_id: discountId,
      discount: discount,
      delivery_fee: deliveryfee,
      placed: placed,
      completed: completed,
      field_canceled: canceled,
      field_delivering_time: deliveringTime,
      field_delivered: delivered,
      field_payment_received: paymentReceived,
      field_returned: returned,
      pid: pid,
      num: num,
      state: state,
      field_invoice_title: invoice,
      source: source,
      field_shipping_contact_number: contactNumber,
      order_items: orderItems,
      field_shipping: shipping
    };

    let order =  this.setorder(obj);
    order._id = order.data.uuid;
    order.createtime = order.data.placed;

    let pouchdb = this._pouchdb;
    let db = this.db;
    let promise = new Promise(function (resolve, reject) {
      pouchdb.put(db, order)
      .then(function(result) {
        resolve(result);
      }, function(err) {
        reject(err);
      });
    });

    return promise;
  }
}