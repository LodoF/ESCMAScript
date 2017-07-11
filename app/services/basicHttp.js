'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = require('http');

var BasicHttp = exports.BasicHttp = function () {
  function BasicHttp() {
    _classCallCheck(this, BasicHttp);
  }

  _createClass(BasicHttp, [{
    key: 'requset',
    value: function requset(_ref) {
      var host = _ref.host,
          _ref$protocol = _ref.protocol,
          protocol = _ref$protocol === undefined ? 'http:' : _ref$protocol,
          _ref$method = _ref.method,
          method = _ref$method === undefined ? 'GET' : _ref$method,
          _ref$path = _ref.path,
          path = _ref$path === undefined ? '/' : _ref$path,
          headers = _ref.headers,
          _ref$port = _ref.port,
          port = _ref$port === undefined ? 80 : _ref$port,
          _ref$data = _ref.data,
          data = _ref$data === undefined ? '' : _ref$data,
          _ref$timeout = _ref.timeout,
          timeout = _ref$timeout === undefined ? 2 * 1000 : _ref$timeout;

      var options = {
        protocol: protocol,
        host: host,
        method: method,
        path: path,
        port: port,
        headers: headers,
        timeout: timeout
      };
      var promise = new Promise(function (resolve, reject) {
        var req = Http.request(options, function (res) {
          res.setEncoding('utf8');
          res.on('data', function (chunk) {
            resolve(chunk);
          });
          res.on('end', function () {
            //
          });
        });

        req.on('error', function (e) {
          reject(new Error(e));
        });

        req.write(data);
        req.end();
      });

      return promise;
    }
  }]);

  return BasicHttp;
}();