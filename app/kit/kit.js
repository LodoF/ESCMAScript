'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var Kit = exports.Kit = function () {
  function Kit() {
    _classCallCheck(this, Kit);
  }

  _createClass(Kit, [{
    key: 'getUUID',
    value: function getUUID() {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      var radix = 16;
      var out = '';
      var i = -1;
      while (++i < 36) {
        switch (i) {
          case 8:
          case 13:
          case 18:
          case 23:
            out += '-';
            break;
          case 19:
            out += chars[(0 | Math.random() * radix) & 0x3 | 0x8];
            break;
          default:
            out += chars[0 | Math.random() * radix];
        }
      }
      return out;
    }
  }]);

  return Kit;
}();