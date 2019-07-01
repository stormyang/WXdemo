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
          var s = t[i](o),
            a = s.value
        } catch (e) {
          return void r(e)
        }
        if (!s.done) return Promise.resolve(a).then(function(e) {
          n("next", e)
        }, function(e) {
          n("throw", e)
        });
        e(a)
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
  _wepySwipeDelete = require("./common/wepy-swipe-delete.js"),
  _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _constant = require("./../utils/constant.js"),
  AddressList = function(e) {
    function t() {
      var e, r, n, i;
      _classCallCheck(this, t);
      for (var o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
      return r = n = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), n.props = {
        addressList: {
          default: [{
            style: 0
          }, {
            style: 0
          }],
          type: Object
        }
      }, n.$repeat = {
        addressList: {
          com: "swipeDelete",
          props: "swipeData"
        }
      }, n.$props = {
        swipeDelete: {
          "xmlns:v-bind": {
            value: "",
            for: "addressList",
            item: "item",
            index: "index",
            key: "index"
          },
          "v-bind:swipeData.once": {
            value: "item",
            type: "item",
            for: "addressList",
            item: "item",
            index: "index",
            key: "index"
          },
          "xmlns:v-on": {
            value: "",
            for: "addressList",
            item: "item",
            index: "index",
            key: "index"
          }
        }
      }, n.$events = {
        swipeDelete: {
          "v-on:delItem": "handleDelItem"
        }
      }, n.components = {
        swipeDelete: _wepySwipeDelete2.default
      }, n.data = {
        receiverInfo: {},
        type: ""
      }, n.methods = {
        add: function() {
          this.$emit("currentPage", 1)
        },
        edit: function(e) {
          var t = e.currentTarget.dataset.id;
          this.$emit("currentPage", 2, t)
        },
        handleDelItem: function(e) {
          this.delUserAddress(e.id), console.log("左滑删除"), console.log(e.id)
        },
        refreshList: function(e) {
          void 0 != e && (console.log("val.....", e), this.addressList = e, this.$apply())
        },
        setOrgType: function(e) {
          this.type = e
        },
        tapSelAddress: function(e) {
          if ("order" == this.type) {
            var t = e.currentTarget.dataset.id;
            console.log("id==" + t), _wepy2.default.setStorageSync(_constant.ADDRESS_ID, t), _wepy2.default.redirectTo({
              url: "/pages/comfire_order?from=selAdd"
            })
          }
        }
      }, i = r, _possibleConstructorReturn(n, i)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "delUserAddress",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var r, n, i;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = this, n = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, e.next = 4, _api2.default.delUserAddress({
                  query: {
                    id: t,
                    type: 2
                  }
                });
              case 4:
                i = e.sent, 0 == i.data.code ? (console.log("删除成功"), this.$emit("currentPage", 0), this.$emit("refreshAddList", "hehe")) : _tip2.default.error(i.data.msg), r.showLoading = !1;
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
      value: function() {}
    }]), t
  }(_wepy2.default.component);
exports.default = AddressList;