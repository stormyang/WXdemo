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
      function n(s, a) {
        try {
          var i = t[s](a),
            o = i.value
        } catch (e) {
          return void r(e)
        }
        if (!i.done) return Promise.resolve(o).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(o)
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
});
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
  _address_list = require("./../components/address_list.js"),
  _address_list2 = _interopRequireDefault(_address_list),
  _address_add = require("./../components/address_add.js"),
  _address_add2 = _interopRequireDefault(_address_add),
  _address_edit = require("./../components/address_edit.js"),
  _address_edit2 = _interopRequireDefault(_address_edit),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _constant = require("./../utils/constant.js"),
  Address = function(e) {
    function t() {
      var e, r, n, s;
      _classCallCheck(this, t);
      for (var a = arguments.length, i = Array(a), o = 0; o < a; o++) i[o] = arguments[o];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.config = {
        navigationBarTitleText: "地址管理"
      }, n.data = {
        addressList: [],
        receiverInfo: {},
        currentPage: 0,
        type: ""
      }, n.$repeat = {}, n.$props = {
        addressList: {
          "xmlns:v-bind": "",
          "v-bind:list.sync": "addressList",
          "xmlns:v-on": ""
        },
        addressAdd: {
          "xmlns:v-on": ""
        },
        addressEdit: {
          "xmlns:v-on": ""
        }
      }, n.$events = {
        addressList: {
          "v-on:currentPage": "getCurrentPage"
        },
        addressAdd: {
          "v-on:currentPage": "getCurrentPage"
        },
        addressEdit: {
          "v-on:currentPage": "getCurrentPage"
        }
      }, n.components = {
        addressList: _address_list2.default,
        addressAdd: _address_add2.default,
        addressEdit: _address_edit2.default
      }, n.computed = {}, n.methods = {
        getCurrentPage: function(e, t) {
          this.currentPage = e, 1 != e && 0 != e && this.receiverInf(t)
        }
      }, n.events = {
        refreshAddList: function(e) {
          this.getUserAddress()
        }
      }, s = r, _possibleConstructorReturn(n, s)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "getUserAddress",
      value: function() {
        function e(e, r) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t, r) {
          var n, s, a, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, s = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, a = s.openid, e.next = 5, _api2.default.getUserAddress({
                  query: {
                    openId: a
                  }
                });
              case 5:
                i = e.sent, 0 == i.data.code ? (this.addressList = i.data.list, this.$invoke("addressList", "refreshList", this.addressList)) : _tip2.default.error(i.data.msg), n.showLoading = !1;
              case 8:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "receiverInf",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, n, s;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.receiverInfoById({
                  query: {
                    id: t
                  }
                });
              case 4:
                s = e.sent, 0 == s.data.code ? (this.receiverInfo = s.data.receiverInfo, this.$invoke("addressEdit", "refresh", this.receiverInfo), console.log("=================================")) : _tip2.default.error(s.data.msg), r.showLoading = !1;
              case 7:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "onLoad",
      value: function(e) {
        this.currentPage = 0, this.getUserAddress(), this.type = void 0 == e.type ? "" : e.type, this.$invoke("addressList", "setOrgType", this.type), wx.hideShareMenu()
      }
    }, {
      key: "onShow",
      value: function() {
        this.getUserAddress()
      }
    }, {
      key: "onUnload",
      value: function() {}
    }]), t
  }(_wepy2.default.page);
Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Address, "pages/address"));