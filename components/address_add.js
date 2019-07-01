"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, r) {
      function n(i, o) {
        try {
          var a = t[i](o),
            s = a.value
        } catch (e) {
          return void r(e)
        }
        if (!a.done) return Promise.resolve(s).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(s)
      }
      return n("next")
    })
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
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  _wepyAreaPicker = require("./common/wepy-area-picker.js"),
  _wepyAreaPicker2 = _interopRequireDefault(_wepyAreaPicker),
  AddressAdd = function(e) {
    function t() {
      var e, r, n, i;
      _classCallCheck(this, t);
      for (var o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.data = {
        isDefult: !1,
        province: "",
        city: "",
        area: "",
        provinceCode: "",
        cityCode: "",
        areaCode: ""
      }, n.$repeat = {}, n.$props = {
        areaPicker: {
          "xmlns:v-on": ""
        }
      }, n.$events = {
        areaPicker: {
          "v-on:areaArray": "areaPickerArray"
        }
      }, n.components = {
        areaPicker: _wepyAreaPicker2.default
      }, n.methods = {
        changeCheckBoxState: function() {
          this.isDefult = !this.isDefult
        },
        up: function() {
          this.$emit("upup", "hehe")
        },
        formSubmit: function(e) {
          var t = e.detail.value.receiverName,
            r = e.detail.value.mobile,
            n = e.detail.value.addressDetail;
          return "" == t ? (_tip2.default.alert("输入收件人姓名"), !1) : "" == r ? (_tip2.default.alert("输入联系电话"), !1) : "" == n ? (_tip2.default.alert("输入详细地址"), !1) : void this.addAddress(e.detail.value)
        },
        openAddressPicker: function() {
          this.$invoke("areaPicker", "openAddressPicker")
        },
        areaPickerArray: function(e, t, r) {
          console.log("ddddddddd11111111"), this.province = e, this.city = t, this.area = r, this.provinceCode = e.code, this.cityCode = t.code, this.areaCode = r.code, console.log(this.provinceCode), this.$apply()
        }
      }, i = r, _possibleConstructorReturn(n, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "addAddress",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, n, i, o, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, console.log("=======province======="), console.log(r.province), n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, i = 0, this.isDefult && (i = 1), o = n.openid, e.next = 9, _api2.default.saveAddress({
                  query: {
                    openId: o,
                    address: t,
                    isDef: i,
                    province: r.provinceCode,
                    city: r.cityCode,
                    area: r.areaCode
                  }
                });
              case 9:
                a = e.sent, 0 == a.data.code ? (this.$emit("currentPage", 0), this.$emit("refreshAddList", "hehe")) : _tip2.default.error(a.data.msg), r.showLoading = !1;
              case 12:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onLoad",
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = AddressAdd;