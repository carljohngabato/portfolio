! function(e, i) {
  "function" == typeof define && define.amd ? define(i) : "object" == typeof exports ? module.exports = i(require, exports, module) : e.ouibounce = i()
}(this, function() {
  return function(e, i) {
    function n(e, i) {
      return "undefined" == typeof e ? i : e
    }

    function o(e) {
      var i = 24 * e * 60 * 60 * 1e3,
        n = new Date;
      return n.setTime(n.getTime() + i),
        "; expires=" + n.toGMTString()
    }

    function t() {
      y.addEventListener("mouseleave", u),
        y.addEventListener("keydown", r)
    }

    function u(e) {
      e.clientY > s || c("viewedOuibounceModal", "true") && !f || (d(),
        v())
    }

    function r(e) {
      b || c("viewedOuibounceModal", "true") && !f || e.metaKey && 76 == e.keyCode && (b = !0,
        d(),
        v())
    }

    function c(e, i) {
      var n = document.cookie.split("; ").reduce(function(e, i) {
        var n = i.split("=");
        return e[n[0]] = n[1],
          e
      }, {});
      return n[e] === i
    }

    function d() {
      e && (e.style.display = "block"),
        a()
    }

    function a(e) {
      var e = e || {};
      "undefined" != typeof e.cookieExpire && (l = o(e.cookieExpire)),
        e.sitewide === !0 && (k = ";path=/"),
        "undefined" != typeof e.cookieDomain && (p = ";domain=" + e.cookieDomain),
        document.cookie = "viewedOuibounceModal=true" + l + p + k,
        y.removeEventListener("mouseleave", u),
        y.removeEventListener("keydown", r)
    }
    var i = i || {},
      f = i.aggressive || !1,
      s = n(i.sensitivity, 20),
      m = n(i.timer, 1e3),
      v = i.callback || function() {},
      l = o(i.cookieExpire) || "",
      p = i.cookieDomain ? ";domain=" + i.cookieDomain : "",
      k = i.sitewide === !0 ? ";path=/" : "",
      y = document.getElementsByTagName("html")[0];
    setTimeout(t, m);
    var b = !1;
    return {
      fire: d,
      disable: a
    }
  }
});