"use strict";

function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var _createClass = function() {
    function e(e, n) {
      for (var t = 0; t < n.length; t++) {
        var i = n[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }
    return function(n, t, i) {
      return t && e(n.prototype, t), i && e(n, i), n
    }
  }(),
  Tips = function() {
    function e() {
      _classCallCheck(this, e), this.isLoading = !1
    }
    return _createClass(e, null, [{
      key: "success",
      value: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        if (setTimeout(function() {
            wx.showToast({
              title: e,
              icon: "success",
              mask: !0,
              duration: n
            })
          }, 300), n > 0) return new Promise(function(e, t) {
          setTimeout(function() {
            e()
          }, n)
        })
      }
    }, {
      key: "confirm",
      value: function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "提示";
        return new Promise(function(i, o) {
          wx.showModal({
            title: t,
            content: e,
            showCancel: !0,
            success: function(e) {
              e.confirm ? i(n) : e.cancel && o(n)
            },
            fail: function(e) {
              o(n)
            }
          })
        })
      }
    }, {
      key: "toast",
      value: function(e, n) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "success";
        setTimeout(function() {
          wx.showToast({
            title: e,
            icon: t,
            mask: !0,
            duration: 500
          })
        }, 300), n && setTimeout(function() {
          n()
        }, 500)
      }
    }, {
      key: "alert",
      value: function(e) {
        wx.showToast({
          title: e,
          image: "../images/alert.png",
          mask: !0,
          duration: 1500
        })
      }
    }, {
      key: "error",
      value: function(e, n) {
        wx.showToast({
          title: e,
          image: "../images/error.png",
          mask: !0,
          duration: 1500
        }), n && setTimeout(function() {
          n()
        }, 500)
      }
    }, {
      key: "loading",
      value: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "加载中";
        e.isLoading || (e.isLoading = !0, wx.showLoading({
          title: n,
          mask: !0
        }))
      }
    }, {
      key: "loaded",
      value: function() {
        e.isLoading && (e.isLoading = !1, wx.hideLoading())
      }
    }, {
      key: "share",
      value: function(n, t, i) {
        return {
          title: n,
          path: t,
          desc: i,
          success: function(n) {
            e.toast("分享成功")
          }
        }
      }
    }]), e
  }();
exports.default = Tips, Tips.isLoading = !1;