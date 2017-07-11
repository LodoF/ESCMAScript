'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../kit/config.js');

var _Kit = require('../kit/Kit.js');

var _orderCenter = require('../services/orderCenter.js');

var _pouchdb = require('../services/_pouchdb.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


var OrderController = exports.OrderController = function (_OrderCenter) {
  _inherits(OrderController, _OrderCenter);

  function OrderController(username, password) {
    _classCallCheck(this, OrderController);

    var _this = _possibleConstructorReturn(this, (OrderController.__proto__ || Object.getPrototypeOf(OrderController)).call(this));

    var config = new _config.Config();
    _this.host = config.ocUrl;
    _this.port = config.ocPort;
    _this.username = username;
    _this.password = password;
    _this._pouchdb = new _pouchdb._Pouchdb();
    _this.db = new _pouchdb._Pouchdb().createDatabase('orderInfo');
    return _this;
  }

  _createClass(OrderController, [{
    key: 'setorder',
    value: function setorder(obj) {
      var kit = new _Kit.Kit();
      var _order = {
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
  }, {
    key: 'insterOrder',
    value: function insterOrder(_ref) {
      var _ref$mail = _ref.mail,
          mail = _ref$mail === undefined ? 'xfang@sparkpad.com' : _ref$mail,
          _ref$customerId = _ref.customerId,
          customerId = _ref$customerId === undefined ? '' : _ref$customerId,
          bid = _ref.bid,
          sid = _ref.sid,
          _ref$paymentId = _ref.paymentId,
          paymentId = _ref$paymentId === undefined ? '' : _ref$paymentId,
          _ref$paymentMethod = _ref.paymentMethod,
          paymentMethod = _ref$paymentMethod === undefined ? '' : _ref$paymentMethod,
          _ref$discountId = _ref.discountId,
          discountId = _ref$discountId === undefined ? '' : _ref$discountId,
          _ref$discount = _ref.discount,
          discount = _ref$discount === undefined ? { 'number': '0.00', 'currency_code': 'CNY' } : _ref$discount,
          _ref$deliveryfee = _ref.deliveryfee,
          deliveryfee = _ref$deliveryfee === undefined ? { 'number': '0.00', 'currency_code': 'CNY' } : _ref$deliveryfee,
          _ref$placed = _ref.placed,
          placed = _ref$placed === undefined ? Date.parse(new Date()) / 1000 : _ref$placed,
          _ref$completed = _ref.completed,
          completed = _ref$completed === undefined ? '' : _ref$completed,
          _ref$canceled = _ref.canceled,
          canceled = _ref$canceled === undefined ? '' : _ref$canceled,
          _ref$deliveringTime = _ref.deliveringTime,
          deliveringTime = _ref$deliveringTime === undefined ? '' : _ref$deliveringTime,
          _ref$delivered = _ref.delivered,
          delivered = _ref$delivered === undefined ? '' : _ref$delivered,
          _ref$paymentReceived = _ref.paymentReceived,
          paymentReceived = _ref$paymentReceived === undefined ? '' : _ref$paymentReceived,
          _ref$returned = _ref.returned,
          returned = _ref$returned === undefined ? '' : _ref$returned,
          pid = _ref.pid,
          num = _ref.num,
          _ref$state = _ref.state,
          state = _ref$state === undefined ? 2 : _ref$state,
          _ref$invoice = _ref.invoice,
          invoice = _ref$invoice === undefined ? '' : _ref$invoice,
          source = _ref.source,
          _ref$contactNumber = _ref.contactNumber,
          contactNumber = _ref$contactNumber === undefined ? '' : _ref$contactNumber,
          _ref$orderItems = _ref.orderItems,
          orderItems = _ref$orderItems === undefined ? [] : _ref$orderItems,
          _ref$shipping = _ref.shipping,
          shipping = _ref$shipping === undefined ? {} : _ref$shipping;

      var obj = {
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

      var order = this.setorder(obj);
      order._id = order.data.uuid;
      order.createtime = order.data.placed;

      var pouchdb = this._pouchdb;
      var db = this.db;
      var promise = new Promise(function (resolve, reject) {
        console.log(pouchdb);
        pouchdb.put(db, order).then(function (result) {
          resolve(result);
        }, function (err) {
          reject(err);
        });
      });

      return promise;
    }
  }]);

  return OrderController;
}(_orderCenter.OrderCenter);