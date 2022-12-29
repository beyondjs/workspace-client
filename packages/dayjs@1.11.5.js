define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["dayjs","1.11.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module2) {
    !function (t, e) {
      typeof exports == "object" && typeof module2 != "undefined" ? module2.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs = e();
    }(exports, function () {
      "use strict";

      var t = 1e3,
        e = 6e4,
        n = 36e5,
        r = "millisecond",
        i = "second",
        s = "minute",
        u = "hour",
        a = "day",
        o = "week",
        f = "month",
        h = "quarter",
        c = "year",
        d = "date",
        $ = "Invalid Date",
        l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        M = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
        m = function (t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        },
        g = {
          s: m,
          z: function (t2) {
            var e2 = -t2.utcOffset(),
              n2 = Math.abs(e2),
              r2 = Math.floor(n2 / 60),
              i2 = n2 % 60;
            return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
          },
          m: function t2(e2, n2) {
            if (e2.date() < n2.date()) return -t2(n2, e2);
            var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()),
              i2 = e2.clone().add(r2, f),
              s2 = n2 - i2 < 0,
              u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
            return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
          },
          a: function (t2) {
            return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
          },
          p: function (t2) {
            return {
              M: f,
              y: c,
              w: o,
              d: a,
              D: d,
              h: u,
              m: s,
              s: i,
              ms: r,
              Q: h
            }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
          },
          u: function (t2) {
            return t2 === void 0;
          }
        },
        v = "en",
        D = {};
      D[v] = M;
      var p = function (t2) {
          return t2 instanceof _;
        },
        S = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return v;
          if (typeof e2 == "string") {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (v = i2), i2 || !r2 && v;
        },
        w = function (t2, e2) {
          if (p(t2)) return t2.clone();
          var n2 = typeof e2 == "object" ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        },
        O = g;
      O.l = S, O.i = p, O.w = function (t2, e2) {
        return w(t2, {
          locale: e2.$L,
          utc: e2.$u,
          x: e2.$x,
          $offset: e2.$offset
        });
      };
      var _ = function () {
          function M2(t2) {
            this.$L = S(t2.locale, null, true), this.parse(t2);
          }
          var m2 = M2.prototype;
          return m2.parse = function (t2) {
            this.$d = function (t3) {
              var e2 = t3.date,
                n2 = t3.utc;
              if (e2 === null) return new Date(NaN);
              if (O.u(e2)) return new Date();
              if (e2 instanceof Date) return new Date(e2);
              if (typeof e2 == "string" && !/Z$/i.test(e2)) {
                var r2 = e2.match(l);
                if (r2) {
                  var i2 = r2[2] - 1 || 0,
                    s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.$x = t2.x || {}, this.init();
          }, m2.init = function () {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function () {
            return O;
          }, m2.isValid = function () {
            return !(this.$d.toString() === $);
          }, m2.isSame = function (t2, e2) {
            var n2 = w(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function (t2, e2) {
            return w(t2) < this.startOf(e2);
          }, m2.isBefore = function (t2, e2) {
            return this.endOf(e2) < w(t2);
          }, m2.$g = function (t2, e2, n2) {
            return O.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function () {
            return this.$d.getTime();
          }, m2.startOf = function (t2, e2) {
            var n2 = this,
              r2 = !!O.u(e2) || e2,
              h2 = O.p(t2),
              $2 = function (t3, e3) {
                var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
                return r2 ? i2 : i2.endOf(a);
              },
              l2 = function (t3, e3) {
                return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
              },
              y2 = this.$W,
              M3 = this.$M,
              m3 = this.$D,
              g2 = "set" + (this.$u ? "UTC" : "");
            switch (h2) {
              case c:
                return r2 ? $2(1, 0) : $2(31, 11);
              case f:
                return r2 ? $2(1, M3) : $2(0, M3 + 1);
              case o:
                var v2 = this.$locale().weekStart || 0,
                  D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
                return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return l2(g2 + "Hours", 0);
              case u:
                return l2(g2 + "Minutes", 1);
              case s:
                return l2(g2 + "Seconds", 2);
              case i:
                return l2(g2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function (t2) {
            return this.startOf(t2, false);
          }, m2.$set = function (t2, e2) {
            var n2,
              o2 = O.p(t2),
              h2 = "set" + (this.$u ? "UTC" : ""),
              $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2],
              l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === f || o2 === c) {
              var y2 = this.clone().set(d, 1);
              y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else $2 && this.$d[$2](l2);
            return this.init(), this;
          }, m2.set = function (t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function (t2) {
            return this[O.p(t2)]();
          }, m2.add = function (r2, h2) {
            var d2,
              $2 = this;
            r2 = Number(r2);
            var l2 = O.p(h2),
              y2 = function (t2) {
                var e2 = w($2);
                return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
              };
            if (l2 === f) return this.set(f, this.$M + r2);
            if (l2 === c) return this.set(c, this.$y + r2);
            if (l2 === a) return y2(1);
            if (l2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1,
              m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function (t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function (t2) {
            var e2 = this,
              n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || $;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ",
              i2 = O.z(this),
              s2 = this.$H,
              u2 = this.$m,
              a2 = this.$M,
              o2 = n2.weekdays,
              f2 = n2.months,
              h2 = function (t3, n3, i3, s3) {
                return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
              },
              c2 = function (t3) {
                return O.s(s2 % 12 || 12, t3, "0");
              },
              d2 = n2.meridiem || function (t3, e3, n3) {
                var r3 = t3 < 12 ? "AM" : "PM";
                return n3 ? r3.toLowerCase() : r3;
              },
              l2 = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a2 + 1,
                MM: O.s(a2 + 1, 2, "0"),
                MMM: h2(n2.monthsShort, a2, f2, 3),
                MMMM: h2(f2, a2),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h2(n2.weekdaysMin, this.$W, o2, 2),
                ddd: h2(n2.weekdaysShort, this.$W, o2, 3),
                dddd: o2[this.$W],
                H: String(s2),
                HH: O.s(s2, 2, "0"),
                h: c2(1),
                hh: c2(2),
                a: d2(s2, u2, true),
                A: d2(s2, u2, false),
                m: String(u2),
                mm: O.s(u2, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i2
              };
            return r2.replace(y, function (t3, e3) {
              return e3 || l2[t3] || i2.replace(":", "");
            });
          }, m2.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function (r2, d2, $2) {
            var l2,
              y2 = O.p(d2),
              M3 = w(r2),
              m3 = (M3.utcOffset() - this.utcOffset()) * e,
              g2 = this - M3,
              v2 = O.m(this, M3);
            return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
          }, m2.daysInMonth = function () {
            return this.endOf(f).$D;
          }, m2.$locale = function () {
            return D[this.$L];
          }, m2.locale = function (t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(),
              r2 = S(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function () {
            return O.w(this.$d, this);
          }, m2.toDate = function () {
            return new Date(this.valueOf());
          }, m2.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function () {
            return this.$d.toISOString();
          }, m2.toString = function () {
            return this.$d.toUTCString();
          }, M2;
        }(),
        T = _.prototype;
      return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t2) {
        T[t2[1]] = function (e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function (t2, e2) {
        return t2.$i || (t2(e2, _, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p, w.unix = function (t2) {
        return w(1e3 * t2);
      }, w.en = D[v], w.Ls = D, w.p = {}, w;
    });
  }
});

// .beyond/uimport/temp/dayjs.1.11.5.js
var dayjs_1_11_5_exports = {};
__export(dayjs_1_11_5_exports, {
  default: () => dayjs_1_11_5_default
});
__reExport(dayjs_1_11_5_exports, __toESM(require_dayjs_min()));
var import_dayjs = __toESM(require_dayjs_min());
var dayjs_1_11_5_default = import_dayjs.default;
module.exports = __toCommonJS(dayjs_1_11_5_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGVtcC9kYXlqcy4xLjExLjUuanMiXSwibmFtZXMiOlsidCIsImUiLCJleHBvcnRzIiwibW9kdWxlMiIsImRlZmluZSIsImFtZCIsImdsb2JhbFRoaXMiLCJzZWxmIiwiZGF5anMiLCJuIiwiciIsImkiLCJzIiwidSIsImEiLCJvIiwiZiIsImgiLCJjIiwiZCIsIiQiLCJsIiwieSIsIk0iLCJuYW1lIiwid2Vla2RheXMiLCJzcGxpdCIsIm1vbnRocyIsIm0iLCJ0MiIsImUyIiwibjIiLCJyMiIsIlN0cmluZyIsImxlbmd0aCIsIkFycmF5Iiwiam9pbiIsImciLCJ6IiwidXRjT2Zmc2V0IiwiTWF0aCIsImFicyIsImZsb29yIiwiaTIiLCJkYXRlIiwieWVhciIsIm1vbnRoIiwiY2xvbmUiLCJhZGQiLCJzMiIsInUyIiwiY2VpbCIsInAiLCJ3IiwiRCIsIm1zIiwiUSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInYiLCJfIiwiUyIsImEyIiwiYXJncyIsImFyZ3VtZW50cyIsIk8iLCJsb2NhbGUiLCIkTCIsInV0YyIsIiR1IiwieCIsIiR4IiwiJG9mZnNldCIsInBhcnNlIiwibTIiLCJNMiIsInByb3RvdHlwZSIsIiRkIiwidDMiLCJEYXRlIiwiTmFOIiwidGVzdCIsIm1hdGNoIiwic3Vic3RyaW5nIiwiVVRDIiwiaW5pdCIsIiR5IiwiZ2V0RnVsbFllYXIiLCIkTSIsImdldE1vbnRoIiwiJEQiLCJnZXREYXRlIiwiJFciLCJnZXREYXkiLCIkSCIsImdldEhvdXJzIiwiJG0iLCJnZXRNaW51dGVzIiwiJHMiLCJnZXRTZWNvbmRzIiwiJG1zIiwiZ2V0TWlsbGlzZWNvbmRzIiwiJHV0aWxzIiwiaXNWYWxpZCIsInRvU3RyaW5nIiwiaXNTYW1lIiwic3RhcnRPZiIsImVuZE9mIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiJGciLCJzZXQiLCJ1bml4IiwidmFsdWVPZiIsImdldFRpbWUiLCJoMiIsIiQyIiwiZTMiLCJsMiIsInRvRGF0ZSIsImFwcGx5Iiwic2xpY2UiLCJ5MiIsIk0zIiwibTMiLCJnMiIsInYyIiwiJGxvY2FsZSIsIndlZWtTdGFydCIsIkQyIiwiJHNldCIsIm8yIiwibWluIiwiZGF5c0luTW9udGgiLCJnZXQiLCJkMiIsIk51bWJlciIsInJvdW5kIiwic3VidHJhY3QiLCJmb3JtYXQiLCJpbnZhbGlkRGF0ZSIsImYyIiwibjMiLCJpMyIsInMzIiwiYzIiLCJtZXJpZGllbSIsInIzIiwiWVkiLCJZWVlZIiwiTU0iLCJNTU0iLCJtb250aHNTaG9ydCIsIk1NTU0iLCJERCIsImRkIiwid2Vla2RheXNNaW4iLCJkZGQiLCJ3ZWVrZGF5c1Nob3J0IiwiZGRkZCIsIkgiLCJISCIsImhoIiwiQSIsIm1tIiwic3MiLCJTU1MiLCJaIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJkaWZmIiwidG9KU09OIiwidG9JU09TdHJpbmciLCJ0b1VUQ1N0cmluZyIsIlQiLCJmb3JFYWNoIiwiZXh0ZW5kIiwiJGkiLCJpc0RheWpzIiwiZW4iLCJMcyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiZGF5anNfMV8xMV81X2RlZmF1bHQiLCJpbXBvcnRfZGF5anMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBQUEsQ0FBQyxVQUFTQSxHQUFFQyxHQUFFO01BQVcsT0FBT0MsV0FBakIsWUFBMEIsT0FBb0JDLFdBQXBCLGNBQTJCQSxRQUFPRCxVQUFRRCxHQUFFLEdBQUUsT0FBbUJHLFVBQW5CLGNBQTJCQSxPQUFPQyxNQUFJRCxPQUFPSCxDQUFDLElBQUcsS0FBRSxPQUFvQkssY0FBcEIsY0FBK0JBLGFBQVdOLEtBQUdPLE1BQU1DLFFBQU1QLEdBQUU7SUFBQyxFQUFFQyxTQUFNLFlBQVU7TUFBQzs7TUFBYSxJQUFJRixJQUFFO1FBQUlDLElB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IiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGY9XCJtb250aFwiLGg9XCJxdWFydGVyXCIsYz1cInllYXJcIixkPVwiZGF0ZVwiLCQ9XCJJbnZhbGlkIERhdGVcIixsPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpfSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sZz17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGYpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksZik7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmYseTpjLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpofVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sdj1cImVuXCIsRD17fTtEW3ZdPU07dmFyIHA9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffSxTPWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiB2O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJih2PWkpLGl8fCFyJiZ2fSx3PWZ1bmN0aW9uKHQsZSl7aWYocCh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LE89ZztPLmw9UyxPLmk9cCxPLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9Uyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoTy51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKGwpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuJHg9dC54fHx7fSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gT30sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT0kKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj13KHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiB3KHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPHcodCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBPLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIU8udShlKXx8ZSxoPU8ucCh0KSwkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Ty53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTy53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCxnPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goaCl7Y2FzZSBjOnJldHVybiByPyQoMSwwKTokKDMxLDExKTtjYXNlIGY6cmV0dXJuIHI/JCgxLE0pOiQoMCxNKzEpO2Nhc2Ugbzp2YXIgdj10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTx2P3krNzp5KS12O3JldHVybiAkKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gbChnK1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuIGwoZytcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuIGwoZytcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuIGwoZytcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1PLnAodCksaD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksJD0obj17fSxuW2FdPWgrXCJEYXRlXCIsbltkXT1oK1wiRGF0ZVwiLG5bZl09aCtcIk1vbnRoXCIsbltjXT1oK1wiRnVsbFllYXJcIixuW3VdPWgrXCJIb3Vyc1wiLG5bc109aCtcIk1pbnV0ZXNcIixuW2ldPWgrXCJTZWNvbmRzXCIsbltyXT1oK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sbD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWZ8fG89PT1jKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFskXShsKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlICQmJnRoaXMuJGRbJF0obCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW08ucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixoKXt2YXIgZCwkPXRoaXM7cj1OdW1iZXIocik7dmFyIGw9Ty5wKGgpLHk9ZnVuY3Rpb24odCl7dmFyIGU9dygkKTtyZXR1cm4gTy53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLCQpfTtpZihsPT09ZilyZXR1cm4gdGhpcy5zZXQoZix0aGlzLiRNK3IpO2lmKGw9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJHkrcik7aWYobD09PWEpcmV0dXJuIHkoMSk7aWYobD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbbF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIE8udyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fCQ7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Ty56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxmPW4ubW9udGhzLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIE8ucyhzJTEyfHwxMix0LFwiMFwiKX0sZD1uLm1lcmlkaWVtfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfSxsPXtZWTpTdHJpbmcodGhpcy4keSkuc2xpY2UoLTIpLFlZWVk6dGhpcy4keSxNOmErMSxNTTpPLnMoYSsxLDIsXCIwXCIpLE1NTTpoKG4ubW9udGhzU2hvcnQsYSxmLDMpLE1NTU06aChmLGEpLEQ6dGhpcy4kRCxERDpPLnModGhpcy4kRCwyLFwiMFwiKSxkOlN0cmluZyh0aGlzLiRXKSxkZDpoKG4ud2Vla2RheXNNaW4sdGhpcy4kVyxvLDIpLGRkZDpoKG4ud2Vla2RheXNTaG9ydCx0aGlzLiRXLG8sMyksZGRkZDpvW3RoaXMuJFddLEg6U3RyaW5nKHMpLEhIOk8ucyhzLDIsXCIwXCIpLGg6YygxKSxoaDpjKDIpLGE6ZChzLHUsITApLEE6ZChzLHUsITEpLG06U3RyaW5nKHUpLG1tOk8ucyh1LDIsXCIwXCIpLHM6U3RyaW5nKHRoaXMuJHMpLHNzOk8ucyh0aGlzLiRzLDIsXCIwXCIpLFNTUzpPLnModGhpcy4kbXMsMyxcIjBcIiksWjppfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV8fGxbdF18fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCwkKXt2YXIgbCx5PU8ucChkKSxNPXcociksbT0oTS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1NLHY9Ty5tKHRoaXMsTSk7cmV0dXJuIHY9KGw9e30sbFtjXT12LzEyLGxbZl09dixsW2hdPXYvMyxsW29dPShnLW0pLzYwNDhlNSxsW2FdPShnLW0pLzg2NGU1LGxbdV09Zy9uLGxbc109Zy9lLGxbaV09Zy90LGwpW3ldfHxnLCQ/djpPLmEodil9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihmKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9Uyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIE8udyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksVD1fLnByb3RvdHlwZTtyZXR1cm4gdy5wcm90b3R5cGU9VCxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGZdLFtcIiR5XCIsY10sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7VFt0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLHcuZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyx3KSx0LiRpPSEwKSx3fSx3LmxvY2FsZT1TLHcuaXNEYXlqcz1wLHcudW5peD1mdW5jdGlvbih0KXtyZXR1cm4gdygxZTMqdCl9LHcuZW49RFt2XSx3LkxzPUQsdy5wPXt9LHd9KSk7IiwiZXhwb3J0ICogZnJvbSAnZGF5anMnO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnZGF5anMnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==