'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var Config = exports.Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, [{
    key: 'ocUrl',
    get: function get() {
      return 'http://newoc.sparkpad-dev.com';
    }
  }, {
    key: 'ocPort',
    get: function get() {
      return 5000;
    }
  }]);

  return Config;
}();