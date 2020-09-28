(function(t) {
  function e(e) {
    for (
      var n, i, l = e[0], o = e[1], c = e[2], u = 0, d = [];
      u < l.length;
      u++
    )
      (i = l[u]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    p && p(e);
    while (d.length) d.shift()();
    return s.push.apply(s, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < s.length; e++) {
      for (var a = s[e], n = !0, i = 1; i < a.length; i++) {
        var o = a[i];
        0 !== r[o] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = l((l.s = a[0]))));
    }
    return t;
  }
  var n = {},
    r = { app: 0 },
    s = [];
  function i(t) {
    return (
      l.p +
      "js/" +
      ({}[t] || t) +
      "." +
      {
        "chunk-2d0a4246": "0d823832",
        "chunk-2d0b3289": "0b176156",
        "chunk-2d0c4856": "8512b04a",
        "chunk-2d0d6d35": "ee2a0665",
        "chunk-2d2086b7": "3ed8ce74",
        "chunk-2d210a0b": "bbbf5825",
        "chunk-2d217357": "14748b4c"
      }[t] +
      ".js"
    );
  }
  function l(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.e = function(t) {
    var e = [],
      a = r[t];
    if (0 !== a)
      if (a) e.push(a[2]);
      else {
        var n = new Promise(function(e, n) {
          a = r[t] = [e, n];
        });
        e.push((a[2] = n));
        var s,
          o = document.createElement("script");
        (o.charset = "utf-8"),
          (o.timeout = 120),
          l.nc && o.setAttribute("nonce", l.nc),
          (o.src = i(t));
        var c = new Error();
        s = function(e) {
          (o.onerror = o.onload = null), clearTimeout(u);
          var a = r[t];
          if (0 !== a) {
            if (a) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                s = e && e.target && e.target.src;
              (c.message =
                "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = n),
                (c.request = s),
                a[1](c);
            }
            r[t] = void 0;
          }
        };
        var u = setTimeout(function() {
          s({ type: "timeout", target: o });
        }, 12e4);
        (o.onerror = o.onload = s), document.head.appendChild(o);
      }
    return Promise.all(e);
  }),
    (l.m = t),
    (l.c = n),
    (l.d = function(t, e, a) {
      l.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (l.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (l.t = function(t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          l.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (l.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return l.d(e, "a", e), e;
    }),
    (l.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (l.p = "/realworld-vue/"),
    (l.oe = function(t) {
      throw (console.error(t), t);
    });
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var u = 0; u < o.length; u++) e(o[u]);
  var p = c;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    a("e623"), a("e379"), a("5dc8"), a("37e1");
    var n = a("2b0e"),
      r = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { attrs: { id: "app" } },
          [a("NavBar"), a("router-view")],
          1
        );
      },
      s = [],
      i = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("nav", { staticClass: "navbar navbar-light" }, [
          a("div", { staticClass: "container" }, [
            a(
              "a",
              { staticClass: "navbar-brand", attrs: { href: "index.html" } },
              [t._v("conduit")]
            ),
            a("ul", { staticClass: "nav navbar-nav pull-xs-right" }, [
              t._m(0),
              t.username
                ? a("li", { staticClass: "nav-item" }, [t._m(1)])
                : t._e(),
              t.username
                ? a(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      a(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/settings" } },
                        [
                          a("i", { staticClass: "ion-gear-a" }),
                          t._v(" Settings ")
                        ]
                      )
                    ],
                    1
                  )
                : t._e(),
              null === t.username
                ? a(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      a(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/login" } },
                        [t._v(" Sign in ")]
                      )
                    ],
                    1
                  )
                : t._e(),
              null === t.username
                ? a(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      a(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/register" } },
                        [t._v(" Sign up ")]
                      )
                    ],
                    1
                  )
                : t._e(),
              t.username
                ? a(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "nav-link",
                          attrs: { to: "`/@${username}`" }
                        },
                        [t._v(" " + t._s(t.username) + " ")]
                      )
                    ],
                    1
                  )
                : t._e()
            ])
          ])
        ]);
      },
      l = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("li", { staticClass: "nav-item" }, [
            a("a", { staticClass: "nav-link active", attrs: { href: "" } }, [
              t._v("Home")
            ])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("a", { staticClass: "nav-link", attrs: { href: "" } }, [
            a("i", { staticClass: "ion-compose" }),
            t._v(" New Post ")
          ]);
        }
      ],
      o = {
        computed: {
          username: function() {
            return this.$store.getters["users/username"];
          }
        }
      },
      c = o,
      u = a("2877"),
      p = Object(u["a"])(c, i, l, !1, null, null, null),
      d = p.exports,
      v = { components: { NavBar: d } },
      f = v,
      h = Object(u["a"])(f, r, s, !1, null, null, null),
      m = h.exports,
      g = (a("d3b7"), a("8c4f")),
      b = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      _ = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "home-page" }, [
            a("div", { staticClass: "banner" }, [
              a("div", { staticClass: "container" }, [
                a("h1", { staticClass: "logo-font" }, [t._v("conduit")]),
                a("p", [t._v("A place to share your knowledge.")])
              ])
            ]),
            a("div", { staticClass: "container page" }, [
              a("div", { staticClass: "row" }, [
                a("div", { staticClass: "col-md-9" }, [
                  a("div", { staticClass: "feed-toggle" }, [
                    a("ul", { staticClass: "nav nav-pills outline-active" }, [
                      a("li", { staticClass: "nav-item" }, [
                        a(
                          "a",
                          {
                            staticClass: "nav-link disabled",
                            attrs: { href: "" }
                          },
                          [t._v("Your Feed")]
                        )
                      ]),
                      a("li", { staticClass: "nav-item" }, [
                        a(
                          "a",
                          {
                            staticClass: "nav-link active",
                            attrs: { href: "" }
                          },
                          [t._v("Global Feed")]
                        )
                      ])
                    ])
                  ]),
                  a("div", { staticClass: "article-preview" }, [
                    a("div", { staticClass: "article-meta" }, [
                      a("a", { attrs: { href: "profile.html" } }, [
                        a("img", {
                          attrs: { src: "http://i.imgur.com/Qr71crq.jpg" }
                        })
                      ]),
                      a("div", { staticClass: "info" }, [
                        a("a", { staticClass: "author", attrs: { href: "" } }, [
                          t._v("Eric Simons")
                        ]),
                        a("span", { staticClass: "date" }, [
                          t._v("January 20th")
                        ])
                      ]),
                      a(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm pull-xs-right"
                        },
                        [a("i", { staticClass: "ion-heart" }), t._v(" 29 ")]
                      )
                    ]),
                    a(
                      "a",
                      { staticClass: "preview-link", attrs: { href: "" } },
                      [
                        a("h1", [t._v("How to build webapps that scale")]),
                        a("p", [t._v("This is the description for the post.")]),
                        a("span", [t._v("Read more...")])
                      ]
                    )
                  ]),
                  a("div", { staticClass: "article-preview" }, [
                    a("div", { staticClass: "article-meta" }, [
                      a("a", { attrs: { href: "profile.html" } }, [
                        a("img", {
                          attrs: { src: "http://i.imgur.com/N4VcUeJ.jpg" }
                        })
                      ]),
                      a("div", { staticClass: "info" }, [
                        a("a", { staticClass: "author", attrs: { href: "" } }, [
                          t._v("Albert Pai")
                        ]),
                        a("span", { staticClass: "date" }, [
                          t._v("January 20th")
                        ])
                      ]),
                      a(
                        "button",
                        {
                          staticClass:
                            "btn btn-outline-primary btn-sm pull-xs-right"
                        },
                        [a("i", { staticClass: "ion-heart" }), t._v(" 32 ")]
                      )
                    ]),
                    a(
                      "a",
                      { staticClass: "preview-link", attrs: { href: "" } },
                      [
                        a("h1", [
                          t._v(
                            " The song you won't ever stop singing. No matter how hard you try. "
                          )
                        ]),
                        a("p", [t._v("This is the description for the post.")]),
                        a("span", [t._v("Read more...")])
                      ]
                    )
                  ])
                ]),
                a("div", { staticClass: "col-md-3" }, [
                  a("div", { staticClass: "sidebar" }, [
                    a("p", [t._v("Popular Tags")]),
                    a("div", { staticClass: "tag-list" }, [
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("programming")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("javascript")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("emberjs")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("angularjs")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("react")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("mean")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("node")]
                      ),
                      a(
                        "a",
                        {
                          staticClass: "tag-pill tag-default",
                          attrs: { href: "" }
                        },
                        [t._v("rails")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]);
        }
      ],
      C = {},
      w = Object(u["a"])(C, b, _, !1, null, null, null),
      k = w.exports;
    n["a"].use(g["a"]);
    var y = [
        { path: "/", name: "Home", component: k },
        {
          path: "/login",
          name: "login",
          component: function() {
            return a.e("chunk-2d2086b7").then(a.bind(null, "a55b"));
          }
        },
        {
          path: "/register",
          name: "register",
          component: function() {
            return a.e("chunk-2d0d6d35").then(a.bind(null, "73cf"));
          }
        },
        {
          path: "/settings",
          name: "settings",
          component: function() {
            return a.e("chunk-2d0b3289").then(a.bind(null, "26d3"));
          }
        },
        {
          path: "/editor",
          name: "editor_new",
          component: function() {
            return a.e("chunk-2d210a0b").then(a.bind(null, "b964"));
          }
        },
        {
          path: "/editor/:article-slug",
          name: "editor_edit",
          component: function() {
            return a.e("chunk-2d0a4246").then(a.bind(null, "04d0"));
          }
        },
        {
          path: "/article/:article-slug",
          name: "article",
          component: function() {
            return a.e("chunk-2d0c4856").then(a.bind(null, "3ad6"));
          }
        },
        {
          path: "/:username",
          name: "profile",
          component: function() {
            return a.e("chunk-2d217357").then(a.bind(null, "c66d"));
          }
        }
      ],
      j = new g["a"]({ routes: y }),
      x = j,
      O = a("2f62"),
      P = (a("96cf"), a("1da1")),
      E = a("bc3a"),
      S = a.n(E),
      T = S.a.create({ baseURL: "https://conduit.example.io/api" });
    function $(t) {
      T.defaults.headers.common["Authorization"] = "Bearer ".concat(t);
    }
    var R = {
      namespaced: !0,
      state: { user: null, profile: null },
      getters: {
        username: function(t) {
          return (t.user && t.user.username) || null;
        }
      },
      mutations: {
        setUser: function(t, e) {
          t.user = e;
        }
      },
      actions: {
        getUser: (function() {
          var t = Object(P["a"])(
            regeneratorRuntime.mark(function t(e) {
              var a, n;
              return regeneratorRuntime.wrap(function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (a = e.commit), (t.next = 3), T.get("/user");
                    case 3:
                      (n = t.sent), a("setUser", n);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          function e(e) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        loginUser: (function() {
          var t = Object(P["a"])(
            regeneratorRuntime.mark(function t(e, a) {
              var n, r, s, i;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (r = a.email),
                          (s = a.password),
                          (t.prev = 2),
                          (t.next = 5),
                          T.post("/users/login", {
                            user: { email: r, password: s }
                          })
                        );
                      case 5:
                        (i = t.sent),
                          i.data.user &&
                            ($(i.data.user.token), n("setUser", i.data.user)),
                          (t.next = 13);
                        break;
                      case 9:
                        throw ((t.prev = 9),
                        (t.t0 = t["catch"](2)),
                        console.error(t.t0),
                        t.t0);
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 9]]
              );
            })
          );
          function e(e, a) {
            return t.apply(this, arguments);
          }
          return e;
        })()
      }
    };
    n["a"].use(O["a"]);
    var U = new O["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: { users: R }
    });
    a("845f");
    (n["a"].config.productionTip = !1),
      new n["a"]({
        router: x,
        store: U,
        render: function(t) {
          return t(m);
        }
      }).$mount("#app");
  },
  "845f": function(t, e, a) {}
});
//# sourceMappingURL=app.c86ecd63.js.map
