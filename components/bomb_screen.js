"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var _createClass = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
    }
    return function(t, r, o) {
      return r && e(t.prototype, r), o && e(t, o), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  bombScreen = function(e) {
    function t() {
      var e, r, o, n;
      _classCallCheck(this, t);
      for (var i = arguments.length, u = Array(i), a = 0; a < i; a++) u[a] = arguments[a];
      return r = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), o.data = {}, o.props = {
        show: {
          default: !1
        },
        types: {
          default: 0
        }
      }, o.events = {}, o.methods = {
        close: function() {
          this.show = !1, this.$emit("close")
        },
        callback: function() {
          this.$emit("callback")
        }
      }, n = r, _possibleConstructorReturn(o, n)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = bombScreen;