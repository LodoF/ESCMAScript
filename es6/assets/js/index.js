// var _pouchdb = require('../services/_pouchdb.js')._Pouchdb.prototype;
import { OrderController } from '../controller/orderController.js';

const oc = new OrderController('restws.gtdx', 'restws.gtdx');

oc.insterOrder({
  bid: 726,
  sid: 728,
  pid: 1,
  num: 2,
  source: 'pos'
}).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});