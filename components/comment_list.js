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
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  _constant = require("./../utils/constant.js"),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _rate = require("./rate.js"),
  _rate2 = _interopRequireDefault(_rate),
  CommentList = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.props = {
        list: {
          type: Object,
          default: []
        }
      }, n.data = {
        readonly: !0
      }, n.$repeat = {
        list: {
          com: "rate",
          props: ""
        }
      }, n.$props = {
        rate: {
          "xmlns:v-bind": {
            value: "",
            for: "list",
            item: "item",
            index: "index",
            key: "key"
          },
          "v-bind:readonly.once": {
            value: "readonly",
            for: "list",
            item: "item",
            index: "index",
            key: "key"
          },
          "v-bind:key.once": {
            value: "item.start",
            for: "list",
            item: "item",
            index: "index",
            key: "key"
          }
        }
      }, n.$events = {}, n.components = {
        rate: _rate2.default
      }, n.computed = {}, n.methods = {}, n.events = {}, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = CommentList;