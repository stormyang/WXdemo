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
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }(),
  _wepy = require("./../npm/wepy/lib/wepy.js"),
  _wepy2 = _interopRequireDefault(_wepy),
  Search = function(e) {
    function t() {
      var e, n, r, o;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), u = 0; u < a; u++) i[u] = arguments[u];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.data = {
        search_input_value: "",
        show: 1
      }, r.events = {}, r.methods = {
        searchInput: function(e) {
          this.search_input_value = e.detail.value, this.$apply()
        },
        goBack: function() {
          _wepy2.default.navigateBack({
            delta: 1
          })
        },
        search: function() {
          this.$emit("searchValue", this.search_input_value)
        },
        delText: function() {
          this.search_input_value = "", this.$apply()
        },
        show: function(e) {
          this.show = e, this.$apply()
        }
      }, o = n, _possibleConstructorReturn(r, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = Search;