(function(t) {
  function e(e) {
    for (var r, o, a = e[0], c = e[1], l = e[2], d = 0, p = []; d < a.length; d++) (o = a[d]), Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), (i[o] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    u && u(e);
    while (p.length) p.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== i[c] && (r = !1);
      }
      r && (s.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var r = {},
    i = { app: 0 },
    s = [];
  function o(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = r),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var r in t)
          o.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "");
  var a = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var l = 0; l < a.length; l++) e(a[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function(t, e, n) {
    "use strict";
    n("64a9");
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var r = n("2b0e"),
      i = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { attrs: { id: "app" } }, [
          n("h1", [t._v("打印整页")]),
          n("button", { directives: [{ name: "print", rawName: "v-print" }] }, [t._v("打印整页")]),
          n("h1", [t._v("局部打印")]),
          n("div", { attrs: { id: "printDiv1" } }, [t._v("\n    且随疾风前行，身后亦需流心\n  ")]),
          n("button", { directives: [{ name: "print", rawName: "v-print", value: "#printDiv1", expression: "'#printDiv1'" }] }, [t._v("只打印指定 DOM（指令v-print=\"'#printDiv1'\"）")]),
          n("div", { attrs: { id: "printDiv2" } }, [t._v("\n    谎言并不伤人，真相才是快刀\n  ")]),
          n("button", { directives: [{ name: "print", rawName: "v-print", value: t.printObj, expression: "printObj" }] }, [t._v("只打印指定 DOM（对象printObj）")]),
          n("h1", [t._v("Demo源码")]),
          n("a", { attrs: { href: "https://github.com/wudeh/vue-iframe-print/blob/master/src/App.vue", target: "_blank", rel: "noopener noreferrer" } }, [t._v("https://github.com/wudeh/vue-iframe-print/blob/master/src/App.vue")]),
        ]);
      },
      s = [],
      o = {
        name: "app",
        data: function() {
          return { diyHtml: '<h1 style="color: red">自定义测试局部打印</h1>', printObj: { id: "printDiv2", popTitle: "vue-iframe-print", extraCss: "https://www.baidu.com/,https://www.baidu.com/", extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>' } };
        },
        mounted: function() {},
      },
      a = o,
      c = (n("034f"), n("2877")),
      l = Object(c["a"])(a, i, s, !1, null, null, null),
      u = l.exports,
      d = (n("3b2b"), n("a481"), n("7618")),
      p = (n("28a5"), n("4917"), n("d225")),
      h = n("b0b4"),
      f = (function() {
        function t(e) {
          Object(p["a"])(this, t), (this.standards = { strict: "strict", loose: "loose", html5: "html5" }), (this.selectArray = []), (this.counter = 0), (this.settings = { standard: this.standards.html5, extraHead: "", extraCss: "", popTitle: "", addPrintCss: "", endCallback: null, ids: "" }), Object.assign(this.settings, e), this.init();
        }
        return (
          Object(h["a"])(t, [
            {
              key: "init",
              value: function() {
                this.counter++, (this.settings.id = "printArea_".concat(this.counter));
                var t = this.getPrintWindow();
                this.write(t.doc), this.print(t), this.settings.endCallback();
              },
            },
            {
              key: "print",
              value: function(t) {
                var e = this,
                  n = t.win,
                  r = function() {
                    n.focus(), n.print();
                    try {
                      var t = document.getElementById(e.settings.id);
                      t.parentNode.removeChild(t);
                    } catch (r) {
                      console.log(r);
                    }
                  };
                if (window.ActiveXObject)
                  return (
                    console.log("IE Print"),
                    (n.onload = setTimeout(function() {
                      r();
                    }, 0)),
                    !1
                  );
                var i = navigator.userAgent.toLowerCase(),
                  s = i.match(/chrome\/([\d\.]+)/),
                  o = s ? s[1] : "",
                  a = o ? o.split(".")[0] : "";
                if (a < 55) {
                  console.log("chrome49");
                  var c = "",
                    l = document.styleSheets;
                  if (l && l.length > 0)
                    for (var u = 0; u < l.length; u++)
                      try {
                        if (l[u].cssRules || l[u].rules) for (var d = l[u].cssRules || l[u].rules, p = 0; p < d.length; p++) c += d[p].cssText;
                      } catch (m) {
                        console.log(l[u].href + m);
                      }
                  var h = this.settings.ids.replace(new RegExp("#", "g"), ""),
                    f = document.getElementById(h),
                    v = document.createElement("iframe"),
                    g = null;
                  v.setAttribute("style", "position:absolute;width:0px;height:0px;left:-500px;top:-500px;"), document.body.appendChild(v), (g = v.contentWindow.document), g.write('<head><style type="text/css">'.concat(c, "</style></head>")), g.write("<div>" + f.innerHTML + "</div>"), g.close(), v.contentWindow.focus(), v.contentWindow.print(), document.body.removeChild(v);
                } else
                  n.onload = function() {
                    r();
                  };
              },
            },
            {
              key: "write",
              value: function(t, e) {
                t.open(),
                  t.write(
                    ""
                      .concat(this.docType(), "<html>")
                      .concat(this.getHead())
                      .concat(this.getBody(), "</html>")
                  ),
                  t.close();
              },
            },
            {
              key: "docType",
              value: function() {
                if (this.settings.standard === this.standards.html5) return "<!DOCTYPE html>";
                var t = this.settings.standard === this.standards.loose ? " Transitional" : "",
                  e = this.settings.standard === this.standards.loose ? "loose" : "strict";
                return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01'.concat(t, '//EN" "http://www.w3.org/TR/html4/').concat(e, '.dtd">');
              },
            },
            {
              key: "getHead",
              value: function() {
                var t = "",
                  e = "",
                  n = "",
                  r = "";
                this.settings.extraHead &&
                  this.settings.extraHead.replace(/([^,]+)/g, function(e) {
                    t += e;
                  });
                var i = document.querySelectorAll("link");
                if ("object" === Object(d["a"])(i) || i.length > 0)
                  for (var s = 0; s < i.length; s++) {
                    var o = i[s];
                    o.href.indexOf(".css") >= 0 && (e += '<link type="text/css" rel="stylesheet" href="'.concat(o.href, '" >'));
                  }
                var a = document.styleSheets;
                if (a && a.length > 0)
                  for (var c = 0; c < a.length; c++)
                    try {
                      if (a[c].cssRules || a[c].rules) for (var l = a[c].cssRules || a[c].rules, u = 0; u < l.length; u++) r += l[u].cssText;
                    } catch (p) {
                      console.log(a[c].href + p);
                    }
                return (
                  (n = r + this.settings.addPrintCss),
                  this.settings.extraCss &&
                    this.settings.extraCss.replace(/([^,\s]+)/g, function(t) {
                      e += '<link type="text/css" rel="stylesheet" href="'.concat(t, '">');
                    }),
                  "<head><title>"
                    .concat(this.settings.popTitle, "</title>")
                    .concat(t)
                    .concat(e, '<style type="text/css">')
                    .concat(n, "</style></head>")
                );
              },
            },
            {
              key: "getBody",
              value: function() {
                var t = this.settings.ids;
                t = t.replace(new RegExp("#", "g"), "");
                var e = document.getElementById(t),
                  n = this.getFormData(e),
                  r = n.outerHTML;
                return "<body>" + r + "</body>";
              },
            },
            {
              key: "getFormData",
              value: function(t) {
                for (var e = t.querySelectorAll("input,select,textarea"), n = -1, r = 0; r < e.length; r++) {
                  var i = e[r],
                    s = i.getAttribute("type"),
                    o = e[r];
                  if ((s || (s = "SELECT" === i.tagName ? "select" : "TEXTAREA" === i.tagName ? "textarea" : ""), "INPUT" === i.tagName)) "radio" === s ? o.setAttribute("checked", i.checked) : "checkbox" === s ? (i.checked ? o.setAttribute("checked", i.checked) : o.removeAttribute("checked")) : ((o.value = i.value), o.setAttribute("value", i.value));
                  else if ("select" === s) {
                    n++;
                    for (var a = 0; a < t.querySelectorAll("select").length; a++) {
                      var c = t.querySelectorAll("select")[a];
                      if ((!c.getAttribute("newbs") && c.setAttribute("newbs", a), c.getAttribute("newbs") == n)) {
                        var l = t.querySelectorAll("select")[n].selectedIndex;
                        i.options[l].setAttribute("selected", !0);
                      }
                    }
                  } else (o.innerHTML = i.value), o.setAttribute("html", i.value);
                }
                return t;
              },
            },
            {
              key: "getPrintWindow",
              value: function() {
                var t = this.Iframe();
                return { f: t, win: t.contentWindow || t, doc: t.doc };
              },
            },
            {
              key: "Iframe",
              value: function() {
                var t,
                  e = this.settings.id;
                try {
                  (t = document.createElement("iframe")), document.body.appendChild(t), (t.style.border = "0px"), (t.style.position = "absolute"), (t.style.width = "0px"), (t.style.height = "0px"), (t.style.right = "0px"), (t.style.top = "0px"), t.setAttribute("id", e), t.setAttribute("src", new Date().getTime()), (t.doc = null), (t.doc = t.contentDocument ? t.contentDocument : t.contentWindow ? t.contentWindow.document : t.document);
                } catch (n) {
                  throw new Error(n + ". iframes may not be supported in this browser.");
                }
                if (null == t.doc) throw new Error("Cannot find document.");
                return t;
              },
            },
          ]),
          t
        );
      })(),
      v = {
        directiveName: "print",
        bind: function(t, e, n) {
          var r = n.context,
            i = !0,
            s = "";
          t.addEventListener("click", function() {
            r.$nextTick(function() {
              if ("string" === typeof e.value) s = e.value;
              else if ("object" === Object(d["a"])(e.value) && e.value.id) {
                s = e.value.id;
                var t = s.replace(new RegExp("#", "g"), ""),
                  n = document.getElementById(t);
                n || (console.log("id in Error"), (s = ""));
              }
              s ? o() : window.print();
            });
          });
          var o = function() {
            i &&
              ((i = !1),
              new f({
                ids: s,
                standard: "",
                extraHead: e.value.extraHead,
                extraCss: e.value.extraCss,
                addPrintCss: e.value.addPrintCss,
                popTitle: e.value.popTitle,
                endCallback: function() {
                  i = !0;
                },
              }));
          };
        },
        install: function(t) {
          t.directive("print", v);
        },
      },
      g = v;
    (r["a"].config.productionTip = !1),
      r["a"].use(g),
      new r["a"]({
        render: function(t) {
          return t(u);
        },
      }).$mount("#app");
  },
  "64a9": function(t, e, n) {},
});
//# sourceMappingURL=app.47469697.js.map
