(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0d6d35"],
  {
    "73cf": function(t, e, s) {
      "use strict";
      s.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "auth-page" }, [
            s("div", { staticClass: "container page" }, [
              s("div", { staticClass: "row" }, [
                s("div", { staticClass: "col-md-6 offset-md-3 col-xs-12" }, [
                  s("h1", { staticClass: "text-xs-center" }, [t._v("Sign up")]),
                  s(
                    "p",
                    { staticClass: "text-xs-center" },
                    [
                      s("router-link", { attrs: { to: { name: "login" } } }, [
                        t._v(" Have an account? ")
                      ])
                    ],
                    1
                  ),
                  t.errors
                    ? s(
                        "ul",
                        { staticClass: "error-messages" },
                        t._l(t.errors, function(e, a) {
                          return s("li", { key: a }, [
                            t._v(t._s(a) + " " + t._s(t._f("error")(e)))
                          ]);
                        }),
                        0
                      )
                    : t._e(),
                  s(
                    "form",
                    {
                      on: {
                        submit: function(e) {
                          return e.preventDefault(), t.onSubmit(e);
                        }
                      }
                    },
                    [
                      s("fieldset", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.username,
                              expression: "username"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Your Name" },
                          domProps: { value: t.username },
                          on: {
                            input: function(e) {
                              e.target.composing ||
                                (t.username = e.target.value);
                            }
                          }
                        })
                      ]),
                      s("fieldset", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Email" },
                          domProps: { value: t.email },
                          on: {
                            input: function(e) {
                              e.target.composing || (t.email = e.target.value);
                            }
                          }
                        })
                      ]),
                      s("fieldset", { staticClass: "form-group" }, [
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "password", placeholder: "Password" },
                          domProps: { value: t.password },
                          on: {
                            input: function(e) {
                              e.target.composing ||
                                (t.password = e.target.value);
                            }
                          }
                        })
                      ]),
                      s(
                        "button",
                        { staticClass: "btn btn-lg btn-primary pull-xs-right" },
                        [t._v(" Sign up ")]
                      )
                    ]
                  )
                ])
              ])
            ])
          ]);
        },
        r = [],
        o = s("2877"),
        l = {},
        n = Object(o["a"])(l, a, r, !1, null, null, null);
      e["default"] = n.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0d6d35.ee2a0665.js.map
