"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, i) {
      function r(o, n) {
        try {
          var a = t[o](n),
            s = a.value
        } catch (e) {
          return void i(e)
        }
        if (!a.done) return Promise.resolve(s).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(s)
      }
      return r("next")
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
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, i, r) {
      return i && e(t.prototype, i), r && e(t, r), t
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
  AddressEdit = function(e) {
    function t() {
      var e, i, r, o;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
      return i = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.data = {
        isDefult: !1,
        isCheck: !1,
        editInfo: {
          default: {},
          type: Object
        },
        id: "",
        province: "",
        city: "",
        area: "",
        provinceCode: "",
        cityCode: "",
        areaCode: ""
      }, r.$repeat = {}, r.$props = {
        areaPicker: {
          "xmlns:v-on": ""
        }
      }, r.$events = {
        areaPicker: {
          "v-on:areaArray": "areaPickerArray"
        }
      }, r.components = {
        areaPicker: _wepyAreaPicker2.default
      }, r.methods = {
        changeCheckBoxState: function() {
          this.isCheck = !this.isCheck, this.isDefult = !this.isDefult
        },
        formSubmit: function(e) {
          var t = e.detail.value.receiverName,
            i = e.detail.value.mobile,
            r = e.detail.value.addressDetail;
          return "" == t ? (_tip2.default.alert("输入收件人姓名"), !1) : "" == i ? (_tip2.default.alert("输入联系电话"), !1) : "" == r ? (_tip2.default.alert("输入详细地址"), !1) : (this.editAddress(e.detail.value), void console.log("form发生了submit事件，携带数据为：", e.detail.value))
        },
        refresh: function(e) {
          console.log(e), void 0 != e && (console.log("val.....", e), this.editInfo = e, this.$apply(), console.log(this.editInfo), this.id = this.editInfo.id, 1 == this.editInfo.defaultFlag && (this.isDefult = !0), this.province = {
            code: this.editInfo.province,
            name: this.editInfo.provinceName
          }, this.city = {
            code: this.editInfo.city,
            name: this.editInfo.cityName
          }, this.area = {
            code: this.editInfo.area,
            name: this.editInfo.areaName
          }, this.$apply())
        },
        openAddressPicker: function() {
          this.$invoke("areaPicker", "openAddressPicker")
        },
        areaPickerArray: function(e, t, i) {
          this.province = e, this.city = t, this.area = i, this.provinceCode = e.code, this.cityCode = t.code, this.areaCode = i.code, this.$apply()
        }
      }, o = i, _possibleConstructorReturn(r, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "editAddress",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var i, r, o, n, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return console.log("保存"), i = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = 0, this.isDefult && (o = 1), n = r.openid, console.log("address:"), console.log("province : " + i.provinceCode + "== city: " + i.cityCode + "== area :" + i.areaCode), e.next = 10, _api2.default.saveAddress({
                  query: {
                    openId: n,
                    id: this.id,
                    address: t,
                    isDef: o,
                    province: i.provinceCode,
                    city: i.cityCode,
                    area: i.areaCode
                  }
                });
              case 10:
                a = e.sent, 0 == a.data.code ? (this.$emit("currentPage", 0), this.$emit("refreshAddList", "hehe"), this.isDefult = !1, this.$apply()) : _tip2.default.error(a.data.msg), i.showLoading = !1;
              case 13:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onShow",
      value: function() {
        console.log("========editInfo=========="), this.province = {
          code: "120000",
          name: "天津市"
        }, this.city = {
          code: "120100",
          name: "天津市"
        }, this.area = {
          code: "120101",
          name: "和平区"
        }, this.$invoke("areaPicker", "setAddressPickerValue", this.province, this.city, this.area)
      }
    }]), t
  }(_wepy2.default.component);
exports.default = AddressEdit;