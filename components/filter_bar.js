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
  _filterSlider = require("./filterSlider.js"),
  _filterSlider2 = _interopRequireDefault(_filterSlider),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  filterBar = function(e) {
    function t() {
      var e, r, n, i;
      _classCallCheck(this, t);
      for (var o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.data = {
        currentType: "",
        arrowType: "",
        flag: !1,
        type: "desc"
      }, n.components = {
        filterSlider: _filterSlider2.default
      }, n.methods = {
        filterSearch: function() {
          _tip2.default.error("暂无筛选类别")
        },
        orderBy: function(e) {
          var t = this;
          if (t.data.currentType == e.target.dataset.current) {
            if ("price" !== e.target.dataset.current) return !1
          } else t.currentType = e.target.dataset.current;
          t.priceOrderBy(e.target.dataset.current), t.$apply()
        }
      }, n.watch = {
        currentType: function(e) {
          this.$emit("currentType", {
            name: e,
            type: "asc"
          })
        },
        arrowType: function(e, t) {
          "" !== t && "" !== e && this.$emit("currentType", {
            name: "price",
            type: e
          })
        }
      }, n.events = {
        filterSku: function(e) {
          console.log("filterBar.sku...." + e), this.setSkuVal(e)
        }
      }, i = r, _possibleConstructorReturn(n, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "priceOrderBy",
      value: function(e) {
        var t = this;
        "price" == e ? "asc" === t.arrowType ? t.arrowType = "desc" : t.arrowType = "asc" : t.arrowType = ""
      }
    }, {
      key: "setSkuVal",
      value: function(e) {
        this.$emit("currentType", {
          name: "sku",
          type: e
        })
      }
    }]), t
  }(_wepy2.default.component);
exports.default = filterBar;