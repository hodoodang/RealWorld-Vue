(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d2086b7"],
  {
    a55b: function(s, t, e) {
      "use strict";
      e.r(t);
      var a = function() {
          var s = this,
            t = s.$createElement,
            e = s._self._c || t;
          return e("div", { staticClass: "auth-page" }, [
            e("div", { staticClass: "container page" }, [
              e("div", { staticClass: "row" }, [
                e("div", { staticClass: "col-md-6 offset-md-3 col-xs-12" }, [
                  e("h1", { staticClass: "text-xs-center" }, [s._v("Sign in")]),
                  e(
                    "p",
                    { staticClass: "text-xs-center" },
                    [
                      e(
                        "router-link",
                        { attrs: { to: { name: "register" } } },
                        [s._v("Need an account?")]
                      )
                    ],
                    1
                  ),
                  e(
                    "ul",
                    { staticClass: "error-messages" },
                    s._l(s.errors, function(t, a) {
                      return e("li", { key: a }, [
                        s._v(s._s(a) + " " + s._s(s._f("error")(t)))
                      ]);
                    }),
                    0
                  ),
                  e("form", [
                    e("fieldset", { staticClass: "form-group" }, [
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: s.email,
                            expression: "email"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "text", placeholder: "Email" },
                        domProps: { value: s.email },
                        on: {
                          input: function(t) {
                            t.target.composing || (s.email = t.target.value);
                          }
                        }
                      })
                    ]),
                    e("fieldset", { staticClass: "form-group" }, [
                      e("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: s.password,
                            expression: "password"
                          }
                        ],
                        staticClass: "form-control form-control-lg",
                        attrs: { type: "password", placeholder: "Password" },
                        domProps: { value: s.password },
                        on: {
                          input: function(t) {
                            t.target.composing || (s.password = t.target.value);
                          }
                        }
                      })
                    ]),
                    e(
                      "button",
                      { staticClass: "btn btn-lg btn-primary pull-xs-right" },
                      [s._v(" Sign in ")]
                    )
                  ])
                ])
              ])
            ])
          ]);
        },
        r = [],
        o = {
          data: function() {
            return { password: "", email: "", errors: [] };
          },
          methods: {
            login: function() {
              var s = this;
              this.$store
                .dispatch("users/loginUser", {
                  email: this.email,
                  password: this.password
                })
                .then(function() {
                  s.errors = [];
                })
                .catch(function(t) {
                  s.errors.push(t);
                });
            }
          }
        },
        i = o,
        n = e("2877"),
        l = Object(n["a"])(i, a, r, !1, null, null, null);
      t["default"] = l.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d2086b7.3ed8ce74.js.map
