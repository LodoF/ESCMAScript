'use strict';

var _orderController = require('../controller/orderController.js');

var oc = new _orderController.OrderController('restws.gtdx', 'restws.gtdx'); // var _pouchdb = require('../services/_pouchdb.js')._Pouchdb.prototype;


oc.insterOrder({
  bid: 726,
  sid: 728,
  pid: 1,
  num: 2,
  source: 'pos'
}).then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
});