!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.FFmpeg = t())
    : (e.FFmpeg = t());
})(self, function () {
  return (
    (e = {
      497: (e, t, r) => {
        var n = r(72),
          o = r(306).devDependencies;
        e.exports = {
          corePath:
            "undefined" != typeof process &&
            "development" === process.env.FFMPEG_ENV
              ? n("./ffmpeg-core.js")
              : "./".concat("",
                
                  "./ffmpeg-core.js"
                ),
        };
      },
      663: (e, t, r) => {
        function n(e, t, r, n, o, i, a) {
          try {
            var c = e[i](a),
              s = c.value;
          } catch (e) {
            return void r(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(n, o);
        }
        var o = r(72),
          i = function (e) {
            return new Promise(function (t, r) {
              var n = new FileReader();
              (n.onload = function () {
                t(n.result);
              }),
                (n.onerror = function (e) {
                  var t = e.target.error.code;
                  r(Error("File could not be read! Code=".concat(t)));
                }),
                n.readAsArrayBuffer(e);
            });
          };
        e.exports = (function () {
          var e,
            t =
              ((e = regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((r = t), void 0 !== t)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", new Uint8Array());
                      case 3:
                        if ("string" != typeof t) {
                          e.next = 16;
                          break;
                        }
                        if (!/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t)) {
                          e.next = 8;
                          break;
                        }
                        (r = atob(t.split(",")[1])
                          .split("")
                          .map(function (e) {
                            return e.charCodeAt(0);
                          })),
                          (e.next = 14);
                        break;
                      case 8:
                        return (e.next = 10), fetch(o(t));
                      case 10:
                        return (n = e.sent), (e.next = 13), n.arrayBuffer();
                      case 13:
                        r = e.sent;
                      case 14:
                        e.next = 20;
                        break;
                      case 16:
                        if (!(t instanceof File || t instanceof Blob)) {
                          e.next = 20;
                          break;
                        }
                        return (e.next = 19), i(t);
                      case 19:
                        r = e.sent;
                      case 20:
                        return e.abrupt("return", new Uint8Array(r));
                      case 21:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var t = this,
                  r = arguments;
                return new Promise(function (o, i) {
                  var a = e.apply(t, r);
                  function c(e) {
                    n(a, o, i, c, s, "next", e);
                  }
                  function s(e) {
                    n(a, o, i, c, s, "throw", e);
                  }
                  c(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      },
      452: (e, t, r) => {
        function n(e, t, r, n, o, i, a) {
          try {
            var c = e[i](a),
              s = c.value;
          } catch (e) {
            return void r(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(n, o);
        }
        var o = r(72),
          i = r(185).log;
        e.exports = (function () {
          var e,
            t =
              ((e = regeneratorRuntime.mark(function e(t) {
                var r, n, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = t.corePath), void 0 !== window.createFFmpegCore)
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (
                          i("info", "fetch ffmpeg-core.worker.js script"),
                          (n = o(r)),
                          (e.next = 6),
                          fetch(
                            n.replace("ffmpeg-core.js", "ffmpeg-core.worker.js")
                          )
                        );
                      case 6:
                        return (e.next = 8), e.sent.blob();
                      case 8:
                        return (
                          (a = e.sent),
                          (window.FFMPEG_CORE_WORKER_SCRIPT =
                            URL.createObjectURL(a)),
                          i(
                            "info",
                            "worker object URL=".concat(
                              window.FFMPEG_CORE_WORKER_SCRIPT
                            )
                          ),
                          i(
                            "info",
                            "download ffmpeg-core script (~25 MB) from ".concat(
                              n
                            )
                          ),
                          e.abrupt(
                            "return",
                            new Promise(function (e) {
                              var t = document.createElement("script");
                              (t.src = n),
                                (t.type = "text/javascript"),
                                t.addEventListener("load", function r() {
                                  t.removeEventListener("load", r),
                                    i("info", "initialize ffmpeg-core"),
                                    e(window.createFFmpegCore);
                                }),
                                document
                                  .getElementsByTagName("head")[0]
                                  .appendChild(t);
                            })
                          )
                        );
                      case 13:
                        return (
                          i("info", "ffmpeg-core is loaded already"),
                          e.abrupt(
                            "return",
                            Promise.resolve(window.createFFmpegCore)
                          )
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var t = this,
                  r = arguments;
                return new Promise(function (o, i) {
                  var a = e.apply(t, r);
                  function c(e) {
                    n(a, o, i, c, s, "next", e);
                  }
                  function s(e) {
                    n(a, o, i, c, s, "throw", e);
                  }
                  c(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      },
      698: (e, t, r) => {
        var n = r(497),
          o = r(452),
          i = r(663);
        e.exports = { defaultOptions: n, getCreateFFmpegCore: o, fetchFile: i };
      },
      500: (e) => {
        e.exports = {
          defaultArgs: ["./ffmpeg", "-nostdin", "-y", "-hide_banner"],
          baseOptions: {
            log: !1,
            logger: function () {},
            progress: function () {},
            corePath: "",
          },
        };
      },
      906: (e, t, r) => {
        function n(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return o(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? o(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function i(e, t, r, n, o, i, a) {
          try {
            var c = e[i](a),
              s = c.value;
          } catch (e) {
            return void r(e);
          }
          c.done ? t(s) : Promise.resolve(s).then(n, o);
        }
        function a(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (n, o) {
              var a = e.apply(t, r);
              function c(e) {
                i(a, n, o, c, s, "next", e);
              }
              function s(e) {
                i(a, n, o, c, s, "throw", e);
              }
              c(void 0);
            });
          };
        }
        function c(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(r), !0).forEach(function (t) {
                  u(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function u(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function f(e, t) {
          if (null == e) return {};
          var r,
            n,
            o = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = {},
                i = Object.keys(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                t.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (o[r] = e[r]));
          }
          return o;
        }
        var l = r(500),
          p = l.defaultArgs,
          h = l.baseOptions,
          m = r(185),
          d = m.setLogging,
          g = m.setCustomLogger,
          y = m.log,
          v = r(583),
          b = r(319),
          w = r(698),
          x = w.defaultOptions,
          E = w.getCreateFFmpegCore,
          j = Error(
            "ffmpeg.wasm is not ready, make sure you have completed load()."
          );
        e.exports = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = null,
            r = null,
            o = null,
            i = !1,
            c = s(s(s({}, h), x), e),
            u = c.log,
            l = c.logger,
            m = c.progress,
            w = f(c, ["log", "logger", "progress"]),
            O = function (e) {
              "FFMPEG_END" === e && null !== o && (o(), (o = null), (i = !1));
            },
            F = function (e) {
              var t = e.type,
                r = e.message;
              y(t, r), v(r, m), O(r);
            },
            L = (function () {
              var e = a(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((y("info", "load ffmpeg-core"), null !== t)) {
                            e.next = 13;
                            break;
                          }
                          return (
                            y("info", "loading ffmpeg-core"), (e.next = 5), E(w)
                          );
                        case 5:
                          return (
                            (n = e.sent),
                            (e.next = 8),
                            n({
                              printErr: function (e) {
                                return F({ type: "fferr", message: e });
                              },
                              print: function (e) {
                                return F({ type: "ffout", message: e });
                              },
                            })
                          );
                        case 8:
                          (t = e.sent),
                            (r = t.cwrap("proxy_main", "number", [
                              "number",
                              "number",
                            ])),
                            y("info", "ffmpeg-core loaded"),
                            (e.next = 14);
                          break;
                        case 13:
                          throw Error(
                            "ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time."
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            P = function () {
              return null !== t;
            },
            k = function () {
              for (
                var e = arguments.length, a = new Array(e), c = 0;
                c < e;
                c++
              )
                a[c] = arguments[c];
              if (
                (y("info", "run ffmpeg command: ".concat(a.join(" "))),
                null === t)
              )
                throw j;
              if (i)
                throw Error("ffmpeg.wasm can only run one command at a time");
              return (
                (i = !0),
                new Promise(function (e) {
                  var i = [].concat(n(p), a).filter(function (e) {
                    return 0 !== e.length;
                  });
                  (o = e), r.apply(void 0, n(b(t, i)));
                })
              );
            },
            _ = function (e) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                n[o - 1] = arguments[o];
              if (
                (y(
                  "info",
                  "run FS.".concat(e, " ").concat(
                    n
                      .map(function (e) {
                        return "string" == typeof e
                          ? e
                          : "<".concat(e.length, " bytes binary file>");
                      })
                      .join(" ")
                  )
                ),
                null === t)
              )
                throw j;
              var i = null;
              try {
                var a;
                i = (a = t.FS)[e].apply(a, n);
              } catch (t) {
                throw "readdir" === e
                  ? Error(
                      "ffmpeg.FS('readdir', '".concat(
                        n[0],
                        "') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')"
                      )
                    )
                  : "readFile" === e
                  ? Error(
                      "ffmpeg.FS('readFile', '".concat(
                        n[0],
                        "') error. Check if the path exists"
                      )
                    )
                  : Error("Oops, something went wrong in FS operation.");
              }
              return i;
            };
          return d(u), g(l), { load: L, isLoaded: P, run: k, FS: _ };
        };
      },
      352: (e, t, r) => {
        r(666);
        var n = r(906),
          o = r(698).fetchFile;
        e.exports = { createFFmpeg: n, fetchFile: o };
      },
      185: (e) => {
        var t = !1,
          r = function () {};
        e.exports = {
          logging: t,
          setLogging: function (e) {
            t = e;
          },
          setCustomLogger: function (e) {
            r = e;
          },
          log: function (e, n) {
            r({ type: e, message: n }),
              t && console.log("[".concat(e, "] ").concat(n));
          },
        };
      },
      319: (e) => {
        e.exports = function (e, t) {
          var r = e._malloc(t.length * Uint32Array.BYTES_PER_ELEMENT);
          return (
            t.forEach(function (t, n) {
              var o = e._malloc(t.length + 1);
              e.writeAsciiToMemory(t, o),
                e.setValue(r + Uint32Array.BYTES_PER_ELEMENT * n, o, "i32");
            }),
            [t.length, r]
          );
        };
      },
      583: (e) => {
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var r = 0,
          n = function (e) {
            var r,
              n,
              o =
                ((r = e.split(":")),
                (n = 3),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })(r) ||
                  (function (e, t) {
                    if (
                      "undefined" != typeof Symbol &&
                      Symbol.iterator in Object(e)
                    ) {
                      var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                      try {
                        for (
                          var a, c = e[Symbol.iterator]();
                          !(n = (a = c.next()).done) &&
                          (r.push(a.value), !t || r.length !== t);
                          n = !0
                        );
                      } catch (e) {
                        (o = !0), (i = e);
                      } finally {
                        try {
                          n || null == c.return || c.return();
                        } finally {
                          if (o) throw i;
                        }
                      }
                      return r;
                    }
                  })(r, n) ||
                  (function (e, r) {
                    if (e) {
                      if ("string" == typeof e) return t(e, r);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? t(e, r)
                          : void 0
                      );
                    }
                  })(r, n) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()),
              i = o[0],
              a = o[1],
              c = o[2];
            return 60 * parseFloat(i) * 60 + 60 * parseFloat(a) + parseFloat(c);
          };
        e.exports = function (e, t) {
          if ("string" == typeof e)
            if (e.startsWith("  Duration")) {
              var o = e.split(", ")[0].split(": ")[1],
                i = n(o);
              (0 === r || r > i) && (r = i);
            } else if (e.startsWith("frame")) {
              var a = e.split("time=")[1].split(" ")[0];
              t({ ratio: n(a) / r });
            } else e.startsWith("video:") && (t({ ratio: 1 }), (r = 0));
        };
      },
      666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function s(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            s({}, "");
          } catch (e) {
            s = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function u(e, t, r, n) {
            var o = t && t.prototype instanceof g ? t : g,
              i = Object.create(o.prototype),
              a = new k(n || []);
            return (
              (i._invoke = (function (e, t, r) {
                var n = l;
                return function (o, i) {
                  if (n === h) throw new Error("Generator is already running");
                  if (n === m) {
                    if ("throw" === o) throw i;
                    return S();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var c = F(a, r);
                      if (c) {
                        if (c === d) continue;
                        return c;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === l) throw ((n = m), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = h;
                    var s = f(e, t, r);
                    if ("normal" === s.type) {
                      if (((n = r.done ? m : p), s.arg === d)) continue;
                      return { value: s.arg, done: r.done };
                    }
                    "throw" === s.type &&
                      ((n = m), (r.method = "throw"), (r.arg = s.arg));
                  }
                };
              })(e, r, a)),
              i
            );
          }
          function f(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = u;
          var l = "suspendedStart",
            p = "suspendedYield",
            h = "executing",
            m = "completed",
            d = {};
          function g() {}
          function y() {}
          function v() {}
          var b = {};
          b[i] = function () {
            return this;
          };
          var w = Object.getPrototypeOf,
            x = w && w(w(_([])));
          x && x !== r && n.call(x, i) && (b = x);
          var E = (v.prototype = g.prototype = Object.create(b));
          function j(e) {
            ["next", "throw", "return"].forEach(function (t) {
              s(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function r(o, i, a, c) {
              var s = f(e[o], e, i);
              if ("throw" !== s.type) {
                var u = s.arg,
                  l = u.value;
                return l && "object" == typeof l && n.call(l, "__await")
                  ? t.resolve(l.__await).then(
                      function (e) {
                        r("next", e, a, c);
                      },
                      function (e) {
                        r("throw", e, a, c);
                      }
                    )
                  : t.resolve(l).then(
                      function (e) {
                        (u.value = e), a(u);
                      },
                      function (e) {
                        return r("throw", e, a, c);
                      }
                    );
              }
              c(s.arg);
            }
            var o;
            this._invoke = function (e, n) {
              function i() {
                return new t(function (t, o) {
                  r(e, n, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function F(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  F(e, r),
                  "throw" === r.method)
                )
                  return d;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return d;
            }
            var o = f(n, e.iterator, r.arg);
            if ("throw" === o.type)
              return (
                (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), d
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((r[e.resultName] = i.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  d)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                d);
          }
          function L(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function P(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(L, this),
              this.reset(!0);
          }
          function _(e) {
            if (e) {
              var r = e[i];
              if (r) return r.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (a.next = a);
              }
            }
            return { next: S };
          }
          function S() {
            return { value: t, done: !0 };
          }
          return (
            (y.prototype = E.constructor = v),
            (v.constructor = y),
            (y.displayName = s(v, c, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === y || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, v)
                  : ((e.__proto__ = v), s(e, c, "GeneratorFunction")),
                (e.prototype = Object.create(E)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            j(O.prototype),
            (O.prototype[a] = function () {
              return this;
            }),
            (e.AsyncIterator = O),
            (e.async = function (t, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new O(u(t, r, n, o), i);
              return e.isGeneratorFunction(r)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            j(E),
            s(E, c, "Generator"),
            (E[i] = function () {
              return this;
            }),
            (E.toString = function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = _),
            (k.prototype = {
              constructor: k,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(P),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var s = n.call(a, "catchLoc"),
                      u = n.call(a, "finallyLoc");
                    if (s && u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  d
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), P(r), d;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      P(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: _(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  d
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          Function("r", "regeneratorRuntime = r")(t);
        }
      },
      72: function (e, t, r) {
        var n, o;
        void 0 ===
          (o =
            "function" ==
            typeof (n = function () {
              return function () {
                var e = arguments.length;
                if (0 === e)
                  throw new Error(
                    "resolveUrl requires at least one argument; got none."
                  );
                var t = document.createElement("base");
                if (((t.href = arguments[0]), 1 === e)) return t.href;
                var r = document.getElementsByTagName("head")[0];
                r.insertBefore(t, r.firstChild);
                for (var n, o = document.createElement("a"), i = 1; i < e; i++)
                  (o.href = arguments[i]), (n = o.href), (t.href = n);
                return r.removeChild(t), n;
              };
            })
              ? n.call(t, r, t, e)
              : n) || (e.exports = o);
      },
      306: (e) => {
        "use strict";
        e.exports = JSON.parse(
          '{"name":"@ffmpeg/ffmpeg","version":"0.9.0","description":"FFmpeg WebAssembly version","main":"src/index.js","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.8.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.2.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}'
        );
      },
    }),
    (t = {}),
    (function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { exports: {} });
      return e[n].call(o.exports, o, o.exports, r), o.exports;
    })(352)
  );
  var e, t;
});
//# sourceMappingURL=ffmpeg.min.js.map
