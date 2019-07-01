"use strict";

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}

function _asyncToGenerator(e) {
  return function() {
    var t = e.apply(this, arguments);
    return new Promise(function(e, n) {
      function r(o, i) {
        try {
          var s = t[o](i),
            a = s.value
        } catch (e) {
          return void n(e)
        }
        if (!s.done) return Promise.resolve(a).then(function(e) {
          r("next", e)
        }, function(e) {
          r("throw", e)
        });
        e(a)
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
  _constant = require("./../utils/constant.js"),
  _tip = require("./../utils/tip.js"),
  _tip2 = _interopRequireDefault(_tip),
  _api = require("./../api/api.js"),
  _api2 = _interopRequireDefault(_api),
  _wepySwipeDelete = require("./common/wepy-swipe-delete.js"),
  _wepySwipeDelete2 = _interopRequireDefault(_wepySwipeDelete),
  CollecntionList = function(e) {
    function t() {
      var e, n, r, o;
      _classCallCheck(this, t);
      for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
      return n = r = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), r.props = {
        type: {
          default: 0
        },
        list: {
          type: Object,
          default: []
        }
      }, r.$repeat = {
        list: {
          com: "swipeDelete",
          props: "swipeData"
        }
      }, r.$props = {
        swipeDelete: {
          "xmlns:v-bind": {
            value: "",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          },
          "v-bind:swipeData.once": {
            value: "item",
            type: "item",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          },
          "xmlns:v-on": {
            value: "",
            for: "list",
            item: "item",
            index: "index",
            key: "index"
          }
        }
      }, r.$events = {
        swipeDelete: {
          "v-on:delItem": "handleDelItem"
        }
      }, r.components = {
        swipeDelete: _wepySwipeDelete2.default
      }, r.data = {
        img_domain: _constant.IMG_DOMAIN
      }, r.computed = {}, r.methods = {
        handleDelItem: function(e) {
          console.log(e);
          var t = e.type;
          1 == t ? this.delUserBrowser(e.goodsId) : 2 == t && this.goodsUnFavorite(e.goodsId)
        },
        refreshList: function(e) {
          void 0 != e && (console.log("val.....", e), this.list = e, this.$apply())
        }
      }, r.events = {}, o = n, _possibleConstructorReturn(r, o)
    }
    return _inherits(t, e), _createClass(t, [{
      key: "onLoad",
      value: function() {
        var e = this;
        console.log(e.list)
      }
    }, {
      key: "goodsUnFavorite",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var n, r, o, i, s, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = r.openid, e.next = 5, _api2.default.goodsUnFavorite({
                  query: {
                    openId: o,
                    goodsId: t
                  }
                });
              case 5:
                if (i = e.sent, 0 != i.data.code) {
                  e.next = 22;
                  break
                }
                console.log("===========商品取消收藏成功========="), s = [], a = 0;
              case 10:
                if (!(a < this.list.length)) {
                  e.next = 19;
                  break
                }
                if (this.list[a].goodsId != t) {
                  e.next = 15;
                  break
                }
                return e.abrupt("continue", 16);
              case 15:
                s.push(this.list[a]);
              case 16:
                a++, e.next = 10;
                break;
              case 19:
                this.list = s, e.next = 23;
                break;
              case 22:
                _tip2.default.error(i.data.msg);
              case 23:
                n.$apply();
              case 24:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }, {
      key: "delUserBrowser",
      value: function() {
        function e(e) {
          return t.apply(this, arguments)
        }
        var t = _asyncToGenerator(regeneratorRuntime.mark(function e(t) {
          var n, r, o, i, s, a;
          return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = this, r = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {}, o = r.openid, e.next = 5, _api2.default.delUserBrowser({
                  query: {
                    openId: o,
                    goodsId: t
                  }
                });
              case 5:
                if (i = e.sent, 0 != i.data.code) {
                  e.next = 22;
                  break
                }
                console.log("===========商品取消收藏成功========="), s = [], a = 0;
              case 10:
                if (!(a < this.list.length)) {
                  e.next = 19;
                  break
                }
                if (this.list[a].goodsId != t) {
                  e.next = 15;
                  break
                }
                return e.abrupt("continue", 16);
              case 15:
                s.push(this.list[a]);
              case 16:
                a++, e.next = 10;
                break;
              case 19:
                this.list = s, e.next = 23;
                break;
              case 22:
                _tip2.default.error(i.data.msg);
              case 23:
                n.$apply();
              case 24:
              case "end":
                return e.stop()
            }
          }, e, this)
        }));
        return e
      }()
    }]), t
  }(_wepy2.default.component);
exports.default = CollecntionList;