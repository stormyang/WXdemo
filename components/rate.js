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
  Rate = function(e) {
    function t() {
      var e, r, n, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, s = Array(a), i = 0; i < a; i++) s[i] = arguments[i];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.props = {
        readonly: {
          default: !1
        },
        key: {
          default: 0
        }
      }, n.data = {
        stars: [0, 1, 2, 3, 4],
        normalSrc: "../images/normal.png",
        selectedSrc: "../images/selected.png",
        halfSrc: "../images/half.png"
      }, n.events = {}, n.methods = {
        selectLeft: function(e) {
          var t = e.currentTarget.dataset.key;
          .5 == this.data.key && .5 == e.currentTarget.dataset.key && (this.key = 0), this.key = t, this.$emit("change", this.key)
        },
        selectRight: function(e) {
          var t = e.currentTarget.dataset.key;
          this.key = t, this.$emit("change", this.key)
        }
      }, o = r, _possibleConstructorReturn(n, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = Rate;