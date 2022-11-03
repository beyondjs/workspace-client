define(["@babel/runtime@7.19.0/helpers/esm/extends","react@16.14.0","react-is@16.13.1","hoist-non-react-statics@3.3.2","@babel/runtime@7.19.0/helpers/esm/taggedTemplateLiteral","@babel/runtime@7.19.0/helpers/esm/objectWithoutPropertiesLoose","@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties","@babel/runtime@7.19.0/helpers/esm/arrayWithHoles","@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit","@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.19.0/helpers/esm/nonIterableRest","@babel/runtime@7.19.0/helpers/esm/slicedToArray","@babel/runtime@7.19.0/helpers/esm/typeof","@babel/runtime@7.19.0/helpers/esm/classCallCheck","@babel/runtime@7.19.0/helpers/esm/createClass","@babel/runtime@7.19.0/helpers/esm/setPrototypeOf","@babel/runtime@7.19.0/helpers/esm/inherits","@babel/runtime@7.19.0/helpers/esm/defineProperty","scheduler@0.19.1","react-dom@16.14.0","@babel/runtime@7.19.0/helpers/esm/arrayWithoutHoles","@babel/runtime@7.19.0/helpers/esm/iterableToArray","@babel/runtime@7.19.0/helpers/esm/nonIterableSpread","@babel/runtime@7.19.0/helpers/esm/toConsumableArray","memoize-one@5.2.1"], (dep_0, dep_1, dep_2, dep_3, dep_4, dep_5, dep_6, dep_7, dep_8, dep_9, dep_10, dep_11, dep_12, dep_13, dep_14, dep_15, dep_16, dep_17, dep_18, dep_19, dep_20, dep_21, dep_22, dep_23, dep_24, dep_25) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"],["object-assign","4.1.1"],["prop-types","15.8.1"],["react","16.14.0"],["@emotion/sheet","1.2.0"],["stylis","4.0.13"],["@emotion/weak-memoize","0.3.0"],["@emotion/memoize","0.8.0"],["@emotion/cache","11.10.3"],["react-is","16.13.1"],["hoist-non-react-statics","3.3.2"],["@emotion/react","11.10.4"],["@emotion/utils","1.2.0"],["@emotion/hash","0.9.0"],["@emotion/unitless","0.8.0"],["@emotion/serialize","1.1.0"],["@emotion/use-insertion-effect-with-fallbacks","1.0.0"],["scheduler","0.19.1"],["react-dom","16.14.0"],["react-select","5.4.0"],["memoize-one","5.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/extends", dep_0],["react@16.14.0", dep_1],["react-is@16.13.1", dep_2],["hoist-non-react-statics@3.3.2", dep_3],["@babel/runtime@7.19.0/helpers/esm/taggedTemplateLiteral", dep_4],["@babel/runtime@7.19.0/helpers/esm/objectWithoutPropertiesLoose", dep_5],["@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties", dep_6],["@babel/runtime@7.19.0/helpers/esm/arrayWithHoles", dep_7],["@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit", dep_8],["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray", dep_9],["@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray", dep_10],["@babel/runtime@7.19.0/helpers/esm/nonIterableRest", dep_11],["@babel/runtime@7.19.0/helpers/esm/slicedToArray", dep_12],["@babel/runtime@7.19.0/helpers/esm/typeof", dep_13],["@babel/runtime@7.19.0/helpers/esm/classCallCheck", dep_14],["@babel/runtime@7.19.0/helpers/esm/createClass", dep_15],["@babel/runtime@7.19.0/helpers/esm/setPrototypeOf", dep_16],["@babel/runtime@7.19.0/helpers/esm/inherits", dep_17],["@babel/runtime@7.19.0/helpers/esm/defineProperty", dep_18],["scheduler@0.19.1", dep_19],["react-dom@16.14.0", dep_20],["@babel/runtime@7.19.0/helpers/esm/arrayWithoutHoles", dep_21],["@babel/runtime@7.19.0/helpers/esm/iterableToArray", dep_22],["@babel/runtime@7.19.0/helpers/esm/nonIterableSpread", dep_23],["@babel/runtime@7.19.0/helpers/esm/toConsumableArray", dep_24],["memoize-one@5.2.1", dep_25]]);
const require = dependency => dependencies.get(dependency);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/@emotion/sheet/dist/emotion-sheet.cjs.dev.js


var require_emotion_sheet_cjs_dev = __commonJS({
  "node_modules/@emotion/sheet/dist/emotion-sheet.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function sheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }

    function createStyleElement(options2) {
      var tag = document.createElement("style");
      tag.setAttribute("data-emotion", options2.key);

      if (options2.nonce !== void 0) {
        tag.setAttribute("nonce", options2.nonce);
      }

      tag.appendChild(document.createTextNode(""));
      tag.setAttribute("data-s", "");
      return tag;
    }

    var StyleSheet = /* @__PURE__ */function () {
      function StyleSheet2(options2) {
        var _this = this;

        this._insertTag = function (tag) {
          var before;

          if (_this.tags.length === 0) {
            if (_this.insertionPoint) {
              before = _this.insertionPoint.nextSibling;
            } else if (_this.prepend) {
              before = _this.container.firstChild;
            } else {
              before = _this.before;
            }
          } else {
            before = _this.tags[_this.tags.length - 1].nextSibling;
          }

          _this.container.insertBefore(tag, before);

          _this.tags.push(tag);
        };

        this.isSpeedy = options2.speedy === void 0 ? false : options2.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options2.nonce;
        this.key = options2.key;
        this.container = options2.container;
        this.prepend = options2.prepend;
        this.insertionPoint = options2.insertionPoint;
        this.before = null;
      }

      var _proto = StyleSheet2.prototype;

      _proto.hydrate = function hydrate(nodes) {
        nodes.forEach(this._insertTag);
      };

      _proto.insert = function insert(rule) {
        if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
          this._insertTag(createStyleElement(this));
        }

        var tag = this.tags[this.tags.length - 1];

        if (true) {
          var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

          if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
            console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
          }

          this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
        }

        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);

          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
              console.error('There was a problem inserting the following rule: "' + rule + '"', e);
            }
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }

        this.ctr++;
      };

      _proto.flush = function flush() {
        this.tags.forEach(function (tag) {
          return tag.parentNode && tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;

        if (true) {
          this._alreadyInsertedOrderInsensitiveRule = false;
        }
      };

      return StyleSheet2;
    }();

    exports.StyleSheet = StyleSheet;
  }

}); // node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js


var require_emotion_sheet_cjs = __commonJS({
  "node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_sheet_cjs_dev();
    }
  }

}); // node_modules/stylis/dist/umd/stylis.js


var require_stylis = __commonJS({
  "node_modules/stylis/dist/umd/stylis.js"(exports, module2) {
    (function (e, r) {
      typeof exports === "object" && typeof module2 !== "undefined" ? r(exports) : typeof define === "function" && define.amd ? define(["exports"], r) : (e = e || self, r(e.stylis = {}));
    })(exports, function (e) {
      "use strict";

      var r = "-ms-";
      var a = "-moz-";
      var c = "-webkit-";
      var t = "comm";
      var n = "rule";
      var s = "decl";
      var i = "@page";
      var u = "@media";
      var o = "@import";
      var f = "@charset";
      var l = "@viewport";
      var h = "@supports";
      var p = "@document";
      var v = "@namespace";
      var b = "@keyframes";
      var d = "@font-face";
      var m = "@counter-style";
      var w2 = "@font-feature-values";
      var k = Math.abs;
      var $ = String.fromCharCode;
      var g = Object.assign;

      function x(e2, r2) {
        return (((r2 << 2 ^ O(e2, 0)) << 2 ^ O(e2, 1)) << 2 ^ O(e2, 2)) << 2 ^ O(e2, 3);
      }

      function E(e2) {
        return e2.trim();
      }

      function y(e2, r2) {
        return (e2 = r2.exec(e2)) ? e2[0] : e2;
      }

      function T(e2, r2, a2) {
        return e2.replace(r2, a2);
      }

      function A(e2, r2) {
        return e2.indexOf(r2);
      }

      function O(e2, r2) {
        return e2.charCodeAt(r2) | 0;
      }

      function C(e2, r2, a2) {
        return e2.slice(r2, a2);
      }

      function M(e2) {
        return e2.length;
      }

      function S(e2) {
        return e2.length;
      }

      function R(e2, r2) {
        return r2.push(e2), e2;
      }

      function z(e2, r2) {
        return e2.map(r2).join("");
      }

      e.line = 1;
      e.column = 1;
      e.length = 0;
      e.position = 0;
      e.character = 0;
      e.characters = "";

      function N(r2, a2, c2, t2, n2, s2, i2) {
        return {
          value: r2,
          root: a2,
          parent: c2,
          type: t2,
          props: n2,
          children: s2,
          line: e.line,
          column: e.column,
          length: i2,
          return: ""
        };
      }

      function P(e2, r2) {
        return g(N("", null, null, "", null, null, 0), e2, {
          length: -e2.length
        }, r2);
      }

      function j() {
        return e.character;
      }

      function U() {
        e.character = e.position > 0 ? O(e.characters, --e.position) : 0;
        if (e.column--, e.character === 10) e.column = 1, e.line--;
        return e.character;
      }

      function _() {
        e.character = e.position < e.length ? O(e.characters, e.position++) : 0;
        if (e.column++, e.character === 10) e.column = 1, e.line++;
        return e.character;
      }

      function F() {
        return O(e.characters, e.position);
      }

      function I() {
        return e.position;
      }

      function L(r2, a2) {
        return C(e.characters, r2, a2);
      }

      function D(e2) {
        switch (e2) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;

          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;

          case 58:
            return 3;

          case 34:
          case 39:
          case 40:
          case 91:
            return 2;

          case 41:
          case 93:
            return 1;
        }

        return 0;
      }

      function K(r2) {
        return e.line = e.column = 1, e.length = M(e.characters = r2), e.position = 0, [];
      }

      function V(r2) {
        return e.characters = "", r2;
      }

      function W(r2) {
        return E(L(e.position - 1, Z(r2 === 91 ? r2 + 2 : r2 === 40 ? r2 + 1 : r2)));
      }

      function Y(e2) {
        return V(G(K(e2)));
      }

      function B(r2) {
        while (e.character = F()) if (e.character < 33) _();else break;

        return D(r2) > 2 || D(e.character) > 3 ? "" : " ";
      }

      function G(r2) {
        while (_()) switch (D(e.character)) {
          case 0:
            R(J(e.position - 1), r2);
            break;

          case 2:
            R(W(e.character), r2);
            break;

          default:
            R($(e.character), r2);
        }

        return r2;
      }

      function H(r2, a2) {
        while (--a2 && _()) if (e.character < 48 || e.character > 102 || e.character > 57 && e.character < 65 || e.character > 70 && e.character < 97) break;

        return L(r2, I() + (a2 < 6 && F() == 32 && _() == 32));
      }

      function Z(r2) {
        while (_()) switch (e.character) {
          case r2:
            return e.position;

          case 34:
          case 39:
            if (r2 !== 34 && r2 !== 39) Z(e.character);
            break;

          case 40:
            if (r2 === 41) Z(r2);
            break;

          case 92:
            _();

            break;
        }

        return e.position;
      }

      function q(r2, a2) {
        while (_()) if (r2 + e.character === 47 + 10) break;else if (r2 + e.character === 42 + 42 && F() === 47) break;

        return "/*" + L(a2, e.position - 1) + "*" + $(r2 === 47 ? r2 : _());
      }

      function J(r2) {
        while (!D(F())) _();

        return L(r2, e.position);
      }

      function Q(e2) {
        return V(X("", null, null, null, [""], e2 = K(e2), 0, [0], e2));
      }

      function X(e2, r2, a2, c2, t2, n2, s2, i2, u2) {
        var o2 = 0;
        var f2 = 0;
        var l2 = s2;
        var h2 = 0;
        var p2 = 0;
        var v2 = 0;
        var b2 = 1;
        var d2 = 1;
        var m2 = 1;
        var w3 = 0;
        var k2 = "";
        var g2 = t2;
        var x2 = n2;
        var E2 = c2;
        var y2 = k2;

        while (d2) switch (v2 = w3, w3 = _()) {
          case 40:
            if (v2 != 108 && y2.charCodeAt(l2 - 1) == 58) {
              if (A(y2 += T(W(w3), "&", "&\f"), "&\f") != -1) m2 = -1;
              break;
            }

          case 34:
          case 39:
          case 91:
            y2 += W(w3);
            break;

          case 9:
          case 10:
          case 13:
          case 32:
            y2 += B(v2);
            break;

          case 92:
            y2 += H(I() - 1, 7);
            continue;

          case 47:
            switch (F()) {
              case 42:
              case 47:
                R(re(q(_(), I()), r2, a2), u2);
                break;

              default:
                y2 += "/";
            }

            break;

          case 123 * b2:
            i2[o2++] = M(y2) * m2;

          case 125 * b2:
          case 59:
          case 0:
            switch (w3) {
              case 0:
              case 125:
                d2 = 0;

              case 59 + f2:
                if (p2 > 0 && M(y2) - l2) R(p2 > 32 ? ae(y2 + ";", c2, a2, l2 - 1) : ae(T(y2, " ", "") + ";", c2, a2, l2 - 2), u2);
                break;

              case 59:
                y2 += ";";

              default:
                R(E2 = ee(y2, r2, a2, o2, f2, t2, i2, k2, g2 = [], x2 = [], l2), n2);
                if (w3 === 123) if (f2 === 0) X(y2, r2, E2, E2, g2, n2, l2, i2, x2);else switch (h2) {
                  case 100:
                  case 109:
                  case 115:
                    X(e2, E2, E2, c2 && R(ee(e2, E2, E2, 0, 0, t2, i2, k2, t2, g2 = [], l2), x2), t2, x2, l2, i2, c2 ? g2 : x2);
                    break;

                  default:
                    X(y2, E2, E2, E2, [""], x2, 0, i2, x2);
                }
            }

            o2 = f2 = p2 = 0, b2 = m2 = 1, k2 = y2 = "", l2 = s2;
            break;

          case 58:
            l2 = 1 + M(y2), p2 = v2;

          default:
            if (b2 < 1) {
              if (w3 == 123) --b2;else if (w3 == 125 && b2++ == 0 && U() == 125) continue;
            }

            switch (y2 += $(w3), w3 * b2) {
              case 38:
                m2 = f2 > 0 ? 1 : (y2 += "\f", -1);
                break;

              case 44:
                i2[o2++] = (M(y2) - 1) * m2, m2 = 1;
                break;

              case 64:
                if (F() === 45) y2 += W(_());
                h2 = F(), f2 = l2 = M(k2 = y2 += J(I())), w3++;
                break;

              case 45:
                if (v2 === 45 && M(y2) == 2) b2 = 0;
            }

        }

        return n2;
      }

      function ee(e2, r2, a2, c2, t2, s2, i2, u2, o2, f2, l2) {
        var h2 = t2 - 1;
        var p2 = t2 === 0 ? s2 : [""];
        var v2 = S(p2);

        for (var b2 = 0, d2 = 0, m2 = 0; b2 < c2; ++b2) for (var w3 = 0, $2 = C(e2, h2 + 1, h2 = k(d2 = i2[b2])), g2 = e2; w3 < v2; ++w3) if (g2 = E(d2 > 0 ? p2[w3] + " " + $2 : T($2, /&\f/g, p2[w3]))) o2[m2++] = g2;

        return N(e2, r2, a2, t2 === 0 ? n : u2, o2, f2, l2);
      }

      function re(e2, r2, a2) {
        return N(e2, r2, a2, t, $(j()), C(e2, 2, -2), 0);
      }

      function ae(e2, r2, a2, c2) {
        return N(e2, r2, a2, s, C(e2, 0, c2), C(e2, c2 + 1, -1), c2);
      }

      function ce(e2, t2) {
        switch (x(e2, t2)) {
          case 5103:
            return c + "print-" + e2 + e2;

          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return c + e2 + e2;

          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return c + e2 + a + e2 + r + e2 + e2;

          case 6828:
          case 4268:
            return c + e2 + r + e2 + e2;

          case 6165:
            return c + e2 + r + "flex-" + e2 + e2;

          case 5187:
            return c + e2 + T(e2, /(\w+).+(:[^]+)/, c + "box-$1$2" + r + "flex-$1$2") + e2;

          case 5443:
            return c + e2 + r + "flex-item-" + T(e2, /flex-|-self/, "") + e2;

          case 4675:
            return c + e2 + r + "flex-line-pack" + T(e2, /align-content|flex-|-self/, "") + e2;

          case 5548:
            return c + e2 + r + T(e2, "shrink", "negative") + e2;

          case 5292:
            return c + e2 + r + T(e2, "basis", "preferred-size") + e2;

          case 6060:
            return c + "box-" + T(e2, "-grow", "") + c + e2 + r + T(e2, "grow", "positive") + e2;

          case 4554:
            return c + T(e2, /([^-])(transform)/g, "$1" + c + "$2") + e2;

          case 6187:
            return T(T(T(e2, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e2, "") + e2;

          case 5495:
          case 3959:
            return T(e2, /(image-set\([^]*)/, c + "$1$`$1");

          case 4968:
            return T(T(e2, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + c + e2 + e2;

          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return T(e2, /(.+)-inline(.+)/, c + "$1$2") + e2;

          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (M(e2) - 1 - t2 > 6) switch (O(e2, t2 + 1)) {
              case 109:
                if (O(e2, t2 + 4) !== 45) break;

              case 102:
                return T(e2, /(.+:)(.+)-([^]+)/, "$1" + c + "$2-$3$1" + a + (O(e2, t2 + 3) == 108 ? "$3" : "$2-$3")) + e2;

              case 115:
                return ~A(e2, "stretch") ? ce(T(e2, "stretch", "fill-available"), t2) + e2 : e2;
            }
            break;

          case 4949:
            if (O(e2, t2 + 1) !== 115) break;

          case 6444:
            switch (O(e2, M(e2) - 3 - (~A(e2, "!important") && 10))) {
              case 107:
                return T(e2, ":", ":" + c) + e2;

              case 101:
                return T(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + c + (O(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + c + "$2$3$1" + r + "$2box$3") + e2;
            }

            break;

          case 5936:
            switch (O(e2, t2 + 11)) {
              case 114:
                return c + e2 + r + T(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;

              case 108:
                return c + e2 + r + T(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;

              case 45:
                return c + e2 + r + T(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
            }

            return c + e2 + r + e2 + e2;
        }

        return e2;
      }

      function te(e2, r2) {
        var a2 = "";
        var c2 = S(e2);

        for (var t2 = 0; t2 < c2; t2++) a2 += r2(e2[t2], t2, e2, r2) || "";

        return a2;
      }

      function ne(e2, r2, a2, c2) {
        switch (e2.type) {
          case o:
          case s:
            return e2.return = e2.return || e2.value;

          case t:
            return "";

          case b:
            return e2.return = e2.value + "{" + te(e2.children, c2) + "}";

          case n:
            e2.value = e2.props.join(",");
        }

        return M(a2 = te(e2.children, c2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
      }

      function se(e2) {
        var r2 = S(e2);
        return function (a2, c2, t2, n2) {
          var s2 = "";

          for (var i2 = 0; i2 < r2; i2++) s2 += e2[i2](a2, c2, t2, n2) || "";

          return s2;
        };
      }

      function ie(e2) {
        return function (r2) {
          if (!r2.root) {
            if (r2 = r2.return) e2(r2);
          }
        };
      }

      function ue(e2, t2, i2, u2) {
        if (e2.length > -1) {
          if (!e2.return) switch (e2.type) {
            case s:
              e2.return = ce(e2.value, e2.length);
              break;

            case b:
              return te([P(e2, {
                value: T(e2.value, "@", "@" + c)
              })], u2);

            case n:
              if (e2.length) return z(e2.props, function (t3) {
                switch (y(t3, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return te([P(e2, {
                      props: [T(t3, /:(read-\w+)/, ":" + a + "$1")]
                    })], u2);

                  case "::placeholder":
                    return te([P(e2, {
                      props: [T(t3, /:(plac\w+)/, ":" + c + "input-$1")]
                    }), P(e2, {
                      props: [T(t3, /:(plac\w+)/, ":" + a + "$1")]
                    }), P(e2, {
                      props: [T(t3, /:(plac\w+)/, r + "input-$1")]
                    })], u2);
                }

                return "";
              });
          }
        }
      }

      function oe(e2) {
        switch (e2.type) {
          case n:
            e2.props = e2.props.map(function (r2) {
              return z(Y(r2), function (r3, a2, c2) {
                switch (O(r3, 0)) {
                  case 12:
                    return C(r3, 1, M(r3));

                  case 0:
                  case 40:
                  case 43:
                  case 62:
                  case 126:
                    return r3;

                  case 58:
                    if (c2[++a2] === "global") c2[a2] = "", c2[++a2] = "\f" + C(c2[a2], a2 = 1, -1);

                  case 32:
                    return a2 === 1 ? "" : r3;

                  default:
                    switch (a2) {
                      case 0:
                        e2 = r3;
                        return S(c2) > 1 ? "" : r3;

                      case a2 = S(c2) - 1:
                      case 2:
                        return a2 === 2 ? r3 + e2 + e2 : r3 + e2;

                      default:
                        return r3;
                    }

                }
              });
            });
        }
      }

      e.CHARSET = f;
      e.COMMENT = t;
      e.COUNTER_STYLE = m;
      e.DECLARATION = s;
      e.DOCUMENT = p;
      e.FONT_FACE = d;
      e.FONT_FEATURE_VALUES = w2;
      e.IMPORT = o;
      e.KEYFRAMES = b;
      e.MEDIA = u;
      e.MOZ = a;
      e.MS = r;
      e.NAMESPACE = v;
      e.PAGE = i;
      e.RULESET = n;
      e.SUPPORTS = h;
      e.VIEWPORT = l;
      e.WEBKIT = c;
      e.abs = k;
      e.alloc = K;
      e.append = R;
      e.assign = g;
      e.caret = I;
      e.char = j;
      e.charat = O;
      e.combine = z;
      e.comment = re;
      e.commenter = q;
      e.compile = Q;
      e.copy = P;
      e.dealloc = V;
      e.declaration = ae;
      e.delimit = W;
      e.delimiter = Z;
      e.escaping = H;
      e.from = $;
      e.hash = x;
      e.identifier = J;
      e.indexof = A;
      e.match = y;
      e.middleware = se;
      e.namespace = oe;
      e.next = _;
      e.node = N;
      e.parse = X;
      e.peek = F;
      e.prefix = ce;
      e.prefixer = ue;
      e.prev = U;
      e.replace = T;
      e.ruleset = ee;
      e.rulesheet = ie;
      e.serialize = te;
      e.sizeof = S;
      e.slice = L;
      e.stringify = ne;
      e.strlen = M;
      e.substr = C;
      e.token = D;
      e.tokenize = Y;
      e.tokenizer = G;
      e.trim = E;
      e.whitespace = B;
      Object.defineProperty(e, "__esModule", {
        value: true
      });
    });
  }

}); // node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js


var require_emotion_weak_memoize_cjs_dev = __commonJS({
  "node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var weakMemoize = function weakMemoize2(func) {
      var cache = /* @__PURE__ */new WeakMap();
      return function (arg) {
        if (cache.has(arg)) {
          return cache.get(arg);
        }

        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
      };
    };

    exports.default = weakMemoize;
  }

}); // node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js


var require_emotion_weak_memoize_cjs = __commonJS({
  "node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_weak_memoize_cjs_dev();
    }
  }

}); // node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js


var require_emotion_memoize_cjs_dev = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function memoize(fn) {
      var cache = /* @__PURE__ */Object.create(null);
      return function (arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    exports.default = memoize;
  }

}); // node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js


var require_emotion_memoize_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_memoize_cjs_dev();
    }
  }

}); // node_modules/@emotion/cache/dist/emotion-cache.cjs.dev.js


var require_emotion_cache_cjs_dev = __commonJS({
  "node_modules/@emotion/cache/dist/emotion-cache.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var sheet = require_emotion_sheet_cjs();
    var stylis = require_stylis();
    var weakMemoize = require_emotion_weak_memoize_cjs();
    var memoize = require_emotion_memoize_cjs();

    function _interopDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var weakMemoize__default = /* @__PURE__ */_interopDefault(weakMemoize);

    var memoize__default = /* @__PURE__ */_interopDefault(memoize);

    var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
      var previous = 0;
      var character = 0;

      while (true) {
        previous = character;
        character = stylis.peek();

        if (previous === 38 && character === 12) {
          points[index] = 1;
        }

        if (stylis.token(character)) {
          break;
        }

        stylis.next();
      }

      return stylis.slice(begin, stylis.position);
    };

    var toRules = function toRules2(parsed, points) {
      var index = -1;
      var character = 44;

      do {
        switch (stylis.token(character)) {
          case 0:
            if (character === 38 && stylis.peek() === 12) {
              points[index] = 1;
            }

            parsed[index] += identifierWithPointTracking(stylis.position - 1, points, index);
            break;

          case 2:
            parsed[index] += stylis.delimit(character);
            break;

          case 4:
            if (character === 44) {
              parsed[++index] = stylis.peek() === 58 ? "&\f" : "";
              points[index] = parsed[index].length;
              break;
            }

          default:
            parsed[index] += stylis.from(character);
        }
      } while (character = stylis.next());

      return parsed;
    };

    var getRules = function getRules2(value, points) {
      return stylis.dealloc(toRules(stylis.alloc(value), points));
    };

    var fixedElements = /* @__PURE__ */new WeakMap();

    var compat = function compat2(element) {
      if (element.type !== "rule" || !element.parent || element.length < 1) {
        return;
      }

      var value = element.value,
          parent = element.parent;
      var isImplicitRule = element.column === parent.column && element.line === parent.line;

      while (parent.type !== "rule") {
        parent = parent.parent;
        if (!parent) return;
      }

      if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
        return;
      }

      if (isImplicitRule) {
        return;
      }

      fixedElements.set(element, true);
      var points = [];
      var rules = getRules(value, points);
      var parentRules = parent.props;

      for (var i = 0, k = 0; i < rules.length; i++) {
        for (var j = 0; j < parentRules.length; j++, k++) {
          element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
        }
      }
    };

    var removeLabel = function removeLabel2(element) {
      if (element.type === "decl") {
        var value = element.value;

        if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
          element["return"] = "";
          element.value = "";
        }
      }
    };

    var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";

    var isIgnoringComment = function isIgnoringComment2(element) {
      return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
    };

    var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
      return function (element, index, children) {
        if (element.type !== "rule" || cache.compat) return;
        var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

        if (unsafePseudoClasses) {
          var isNested = element.parent === children[0];
          var commentContainer = isNested ? children[0].children : children;

          for (var i = commentContainer.length - 1; i >= 0; i--) {
            var node = commentContainer[i];

            if (node.line < element.line) {
              break;
            }

            if (node.column < element.column) {
              if (isIgnoringComment(node)) {
                return;
              }

              break;
            }
          }

          unsafePseudoClasses.forEach(function (unsafePseudoClass) {
            console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
          });
        }
      };
    };

    var isImportRule = function isImportRule2(element) {
      return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
    };

    var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
      for (var i = index - 1; i >= 0; i--) {
        if (!isImportRule(children[i])) {
          return true;
        }
      }

      return false;
    };

    var nullifyElement = function nullifyElement2(element) {
      element.type = "";
      element.value = "";
      element["return"] = "";
      element.children = "";
      element.props = "";
    };

    var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
      if (!isImportRule(element)) {
        return;
      }

      if (element.parent) {
        console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
        nullifyElement(element);
      } else if (isPrependedWithRegularRules(index, children)) {
        console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
        nullifyElement(element);
      }
    };

    var isBrowser = typeof document !== "undefined";
    var getServerStylisCache = isBrowser ? void 0 : weakMemoize__default["default"](function () {
      return memoize__default["default"](function () {
        var cache = {};
        return function (name) {
          return cache[name];
        };
      });
    });
    var defaultStylisPlugins = [stylis.prefixer];

    var createCache2 = function createCache3(options2) {
      var key = options2.key;

      if (!key) {
        throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
      }

      if (isBrowser && key === "css") {
        var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(ssrStyles, function (node) {
          var dataEmotionAttribute = node.getAttribute("data-emotion");

          if (dataEmotionAttribute.indexOf(" ") === -1) {
            return;
          }

          document.head.appendChild(node);
          node.setAttribute("data-s", "");
        });
      }

      var stylisPlugins = options2.stylisPlugins || defaultStylisPlugins;

      if (true) {
        if (/[^a-z-]/.test(key)) {
          throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
        }
      }

      var inserted = {};
      var container;
      var nodesToHydrate = [];

      if (isBrowser) {
        container = options2.container || document.head;
        Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function (node) {
          var attrib = node.getAttribute("data-emotion").split(" ");

          for (var i = 1; i < attrib.length; i++) {
            inserted[attrib[i]] = true;
          }

          nodesToHydrate.push(node);
        });
      }

      var _insert;

      var omnipresentPlugins = [compat, removeLabel];

      if (true) {
        omnipresentPlugins.push(createUnsafeSelectorsAlarm({
          get compat() {
            return cache.compat;
          }

        }), incorrectImportAlarm);
      }

      if (isBrowser) {
        var currentSheet;
        var finalizingPlugins = [stylis.stringify, true ? function (element) {
          if (!element.root) {
            if (element["return"]) {
              currentSheet.insert(element["return"]);
            } else if (element.value && element.type !== stylis.COMMENT) {
              currentSheet.insert(element.value + "{}");
            }
          }
        } : stylis.rulesheet(function (rule) {
          currentSheet.insert(rule);
        })];
        var serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

        var stylis$1 = function stylis$12(styles) {
          return stylis.serialize(stylis.compile(styles), serializer);
        };

        _insert = function insert(selector, serialized, sheet2, shouldCache) {
          currentSheet = sheet2;

          if (serialized.map !== void 0) {
            currentSheet = {
              insert: function insert2(rule) {
                sheet2.insert(rule + serialized.map);
              }
            };
          }

          stylis$1(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

          if (shouldCache) {
            cache.inserted[serialized.name] = true;
          }
        };
      } else {
        var _finalizingPlugins = [stylis.stringify];

        var _serializer = stylis.middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

        var _stylis = function _stylis2(styles) {
          return stylis.serialize(stylis.compile(styles), _serializer);
        };

        var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

        var getRules2 = function getRules3(selector, serialized) {
          var name = serialized.name;

          if (serverStylisCache[name] === void 0) {
            serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
          }

          return serverStylisCache[name];
        };

        _insert = function _insert2(selector, serialized, sheet2, shouldCache) {
          var name = serialized.name;
          var rules = getRules2(selector, serialized);

          if (cache.compat === void 0) {
            if (shouldCache) {
              cache.inserted[name] = true;
            }

            if (serialized.map !== void 0) {
              return rules + serialized.map;
            }

            return rules;
          } else {
            if (shouldCache) {
              cache.inserted[name] = rules;
            } else {
              return rules;
            }
          }
        };
      }

      var cache = {
        key,
        sheet: new sheet.StyleSheet({
          key,
          container,
          nonce: options2.nonce,
          speedy: options2.speedy,
          prepend: options2.prepend,
          insertionPoint: options2.insertionPoint
        }),
        nonce: options2.nonce,
        inserted,
        registered: {},
        insert: _insert
      };
      cache.sheet.hydrate(nodesToHydrate);
      return cache;
    };

    exports.default = createCache2;
  }

}); // node_modules/@emotion/cache/dist/emotion-cache.cjs.js


var require_emotion_cache_cjs = __commonJS({
  "node_modules/@emotion/cache/dist/emotion-cache.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_cache_cjs_dev();
    }
  }

}); // node_modules/@babel/runtime/helpers/extends.js


var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module2) {
    function _extends4() {
      module2.exports = _extends4 = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      return _extends4.apply(this, arguments);
    }

    module2.exports = _extends4, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }

}); // node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.dev.js


var require_emotion_react_isolated_hnrs_cjs_dev = __commonJS({
  "node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var hoistNonReactStatics$1 = require("hoist-non-react-statics@3.3.2");

    function _interopDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var hoistNonReactStatics__default = /* @__PURE__ */_interopDefault(hoistNonReactStatics$1);

    var hoistNonReactStatics = function (targetComponent, sourceComponent) {
      return hoistNonReactStatics__default["default"](targetComponent, sourceComponent);
    };

    exports.default = hoistNonReactStatics;
  }

}); // node_modules/@emotion/utils/dist/emotion-utils.cjs.dev.js


var require_emotion_utils_cjs_dev = __commonJS({
  "node_modules/@emotion/utils/dist/emotion-utils.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isBrowser = typeof document !== "undefined";

    function getRegisteredStyles(registered, registeredStyles, classNames2) {
      var rawClassName = "";
      classNames2.split(" ").forEach(function (className) {
        if (registered[className] !== void 0) {
          registeredStyles.push(registered[className] + ";");
        } else {
          rawClassName += className + " ";
        }
      });
      return rawClassName;
    }

    var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
      var className = cache.key + "-" + serialized.name;

      if ((isStringTag === false || isBrowser === false && cache.compat !== void 0) && cache.registered[className] === void 0) {
        cache.registered[className] = serialized.styles;
      }
    };

    var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
      registerStyles(cache, serialized, isStringTag);
      var className = cache.key + "-" + serialized.name;

      if (cache.inserted[serialized.name] === void 0) {
        var stylesForSSR = "";
        var current = serialized;

        do {
          var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);

          if (!isBrowser && maybeStyles !== void 0) {
            stylesForSSR += maybeStyles;
          }

          current = current.next;
        } while (current !== void 0);

        if (!isBrowser && stylesForSSR.length !== 0) {
          return stylesForSSR;
        }
      }
    };

    exports.getRegisteredStyles = getRegisteredStyles;
    exports.insertStyles = insertStyles;
    exports.registerStyles = registerStyles;
  }

}); // node_modules/@emotion/utils/dist/emotion-utils.cjs.js


var require_emotion_utils_cjs = __commonJS({
  "node_modules/@emotion/utils/dist/emotion-utils.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_utils_cjs_dev();
    }
  }

}); // node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js


var require_emotion_hash_cjs_dev = __commonJS({
  "node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function murmur2(str) {
      var h = 0;
      var k,
          i = 0,
          len = str.length;

      for (; len >= 4; ++i, len -= 4) {
        k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
        k ^= k >>> 24;
        h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      }

      switch (len) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 255) << 16;

        case 2:
          h ^= (str.charCodeAt(i + 1) & 255) << 8;

        case 1:
          h ^= str.charCodeAt(i) & 255;
          h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      }

      h ^= h >>> 13;
      h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      return ((h ^ h >>> 15) >>> 0).toString(36);
    }

    exports.default = murmur2;
  }

}); // node_modules/@emotion/hash/dist/emotion-hash.cjs.js


var require_emotion_hash_cjs = __commonJS({
  "node_modules/@emotion/hash/dist/emotion-hash.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_hash_cjs_dev();
    }
  }

}); // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js


var require_emotion_unitless_cjs_dev = __commonJS({
  "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    exports.default = unitlessKeys;
  }

}); // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js


var require_emotion_unitless_cjs = __commonJS({
  "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_unitless_cjs_dev();
    }
  }

}); // node_modules/@emotion/serialize/dist/emotion-serialize.cjs.dev.js


var require_emotion_serialize_cjs_dev = __commonJS({
  "node_modules/@emotion/serialize/dist/emotion-serialize.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var hashString = require_emotion_hash_cjs();
    var unitless = require_emotion_unitless_cjs();
    var memoize = require_emotion_memoize_cjs();

    function _interopDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var hashString__default = /* @__PURE__ */_interopDefault(hashString);

    var unitless__default = /* @__PURE__ */_interopDefault(unitless);

    var memoize__default = /* @__PURE__ */_interopDefault(memoize);

    var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
    var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
    var hyphenateRegex = /[A-Z]|^ms/g;
    var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

    var isCustomProperty = function isCustomProperty2(property) {
      return property.charCodeAt(1) === 45;
    };

    var isProcessableValue = function isProcessableValue2(value) {
      return value != null && typeof value !== "boolean";
    };

    var processStyleName = /* @__PURE__ */memoize__default["default"](function (styleName) {
      return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
    });

    var processStyleValue = function processStyleValue2(key, value) {
      switch (key) {
        case "animation":
        case "animationName":
          {
            if (typeof value === "string") {
              return value.replace(animationRegex, function (match, p1, p2) {
                cursor = {
                  name: p1,
                  styles: p2,
                  next: cursor
                };
                return p1;
              });
            }
          }
      }

      if (unitless__default["default"][key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
        return value + "px";
      }

      return value;
    };

    if (true) {
      contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
      contentValues = ["normal", "none", "initial", "inherit", "unset"];
      oldProcessStyleValue = processStyleValue;
      msPattern = /^-ms-/;
      hyphenPattern = /-(.)/g;
      hyphenatedCache = {};

      processStyleValue = function processStyleValue2(key, value) {
        if (key === "content") {
          if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
            throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
          }
        }

        var processed = oldProcessStyleValue(key, value);

        if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
          hyphenatedCache[key] = true;
          console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function (str, _char) {
            return _char.toUpperCase();
          }) + "?");
        }

        return processed;
      };
    }

    var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";

    function handleInterpolation(mergedProps, registered, interpolation) {
      if (interpolation == null) {
        return "";
      }

      if (interpolation.__emotion_styles !== void 0) {
        if (interpolation.toString() === "NO_COMPONENT_SELECTOR") {
          throw new Error(noComponentSelectorMessage);
        }

        return interpolation;
      }

      switch (typeof interpolation) {
        case "boolean":
          {
            return "";
          }

        case "object":
          {
            if (interpolation.anim === 1) {
              cursor = {
                name: interpolation.name,
                styles: interpolation.styles,
                next: cursor
              };
              return interpolation.name;
            }

            if (interpolation.styles !== void 0) {
              var next = interpolation.next;

              if (next !== void 0) {
                while (next !== void 0) {
                  cursor = {
                    name: next.name,
                    styles: next.styles,
                    next: cursor
                  };
                  next = next.next;
                }
              }

              var styles = interpolation.styles + ";";

              if (interpolation.map !== void 0) {
                styles += interpolation.map;
              }

              return styles;
            }

            return createStringFromObject(mergedProps, registered, interpolation);
          }

        case "function":
          {
            if (mergedProps !== void 0) {
              var previousCursor = cursor;
              var result = interpolation(mergedProps);
              cursor = previousCursor;
              return handleInterpolation(mergedProps, registered, result);
            } else if (true) {
              console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
            }

            break;
          }

        case "string":
          if (true) {
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
              var fakeVarName = "animation" + matched.length;
              matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
              return "${" + fakeVarName + "}";
            });

            if (matched.length) {
              console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\n" + ("css`" + replaced + "`"));
            }
          }

          break;
      }

      if (registered == null) {
        return interpolation;
      }

      var cached = registered[interpolation];
      return cached !== void 0 ? cached : interpolation;
    }

    function createStringFromObject(mergedProps, registered, obj) {
      var string = "";

      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
        }
      } else {
        for (var _key in obj) {
          var value = obj[_key];

          if (typeof value !== "object") {
            if (registered != null && registered[value] !== void 0) {
              string += _key + "{" + registered[value] + "}";
            } else if (isProcessableValue(value)) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
            }
          } else {
            if (_key === "NO_COMPONENT_SELECTOR" && true) {
              throw new Error(noComponentSelectorMessage);
            }

            if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
              for (var _i = 0; _i < value.length; _i++) {
                if (isProcessableValue(value[_i])) {
                  string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
                }
              }
            } else {
              var interpolated = handleInterpolation(mergedProps, registered, value);

              switch (_key) {
                case "animation":
                case "animationName":
                  {
                    string += processStyleName(_key) + ":" + interpolated + ";";
                    break;
                  }

                default:
                  {
                    if (_key === "undefined") {
                      console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                    }

                    string += _key + "{" + interpolated + "}";
                  }
              }
            }
          }
        }
      }

      return string;
    }

    var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
    var sourceMapPattern;

    if (true) {
      sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    }

    var cursor;

    var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
      if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
        return args[0];
      }

      var stringMode = true;
      var styles = "";
      cursor = void 0;
      var strings = args[0];

      if (strings == null || strings.raw === void 0) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings);
      } else {
        if (strings[0] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles += strings[0];
      }

      for (var i = 1; i < args.length; i++) {
        styles += handleInterpolation(mergedProps, registered, args[i]);

        if (stringMode) {
          if (strings[i] === void 0) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }

          styles += strings[i];
        }
      }

      var sourceMap;

      if (true) {
        styles = styles.replace(sourceMapPattern, function (match2) {
          sourceMap = match2;
          return "";
        });
      }

      labelPattern.lastIndex = 0;
      var identifierName = "";
      var match;

      while ((match = labelPattern.exec(styles)) !== null) {
        identifierName += "-" + match[1];
      }

      var name = hashString__default["default"](styles) + identifierName;

      if (true) {
        return {
          name,
          styles,
          map: sourceMap,
          next: cursor,
          toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          }
        };
      }

      return {
        name,
        styles,
        next: cursor
      };
    };

    exports.serializeStyles = serializeStyles;
    var contentValuePattern;
    var contentValues;
    var oldProcessStyleValue;
    var msPattern;
    var hyphenPattern;
    var hyphenatedCache;
  }

}); // node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js


var require_emotion_serialize_cjs = __commonJS({
  "node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_serialize_cjs_dev();
    }
  }

}); // node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.dev.js


var require_emotion_use_insertion_effect_with_fallbacks_cjs_dev = __commonJS({
  "node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var React3 = require("react@16.14.0");

    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = /* @__PURE__ */Object.create(null);

      if (e) {
        Object.keys(e).forEach(function (k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function () {
                return e[k];
              }
            });
          }
        });
      }

      n["default"] = e;
      return Object.freeze(n);
    }

    var React__namespace = /* @__PURE__ */_interopNamespace(React3);

    var isBrowser = typeof document !== "undefined";

    var syncFallback = function syncFallback2(create) {
      return create();
    };

    var useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false;
    var useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;
    var useInsertionEffectWithLayoutFallback = useInsertionEffect || React3.useLayoutEffect;
    exports.useInsertionEffectAlwaysWithSyncFallback = useInsertionEffectAlwaysWithSyncFallback;
    exports.useInsertionEffectWithLayoutFallback = useInsertionEffectWithLayoutFallback;
  }

}); // node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js


var require_emotion_use_insertion_effect_with_fallbacks_cjs = __commonJS({
  "node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_use_insertion_effect_with_fallbacks_cjs_dev();
    }
  }

}); // node_modules/@emotion/react/dist/emotion-element-b63ca7c6.cjs.dev.js


var require_emotion_element_b63ca7c6_cjs_dev = __commonJS({
  "node_modules/@emotion/react/dist/emotion-element-b63ca7c6.cjs.dev.js"(exports) {
    "use strict";

    var React3 = require("react@16.14.0");

    var createCache2 = require_emotion_cache_cjs();

    var _extends4 = require_extends();

    var weakMemoize = require_emotion_weak_memoize_cjs();

    var _isolatedHnrs_dist_emotionReact_isolatedHnrs = require_emotion_react_isolated_hnrs_cjs_dev();

    var utils = require_emotion_utils_cjs();
    var serialize = require_emotion_serialize_cjs();
    var useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();

    function _interopDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var createCache__default = /* @__PURE__ */_interopDefault(createCache2);

    var weakMemoize__default = /* @__PURE__ */_interopDefault(weakMemoize);

    var isBrowser = typeof document !== "undefined";
    var hasOwnProperty = {}.hasOwnProperty;
    var EmotionCacheContext = /* @__PURE__ */React3.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */createCache__default["default"]({
      key: "css"
    }) : null);

    if (true) {
      EmotionCacheContext.displayName = "EmotionCacheContext";
    }

    var CacheProvider2 = EmotionCacheContext.Provider;

    var __unsafe_useEmotionCache = function useEmotionCache() {
      return React3.useContext(EmotionCacheContext);
    };

    exports.withEmotionCache = function withEmotionCache(func) {
      return /* @__PURE__ */React3.forwardRef(function (props, ref) {
        var cache = React3.useContext(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };

    if (!isBrowser) {
      exports.withEmotionCache = function withEmotionCache(func) {
        return function (props) {
          var cache = React3.useContext(EmotionCacheContext);

          if (cache === null) {
            cache = createCache__default["default"]({
              key: "css"
            });
            return /* @__PURE__ */React3.createElement(EmotionCacheContext.Provider, {
              value: cache
            }, func(props, cache));
          } else {
            return func(props, cache);
          }
        };
      };
    }

    var ThemeContext = /* @__PURE__ */React3.createContext({});

    if (true) {
      ThemeContext.displayName = "EmotionThemeContext";
    }

    var useTheme = function useTheme2() {
      return React3.useContext(ThemeContext);
    };

    var getTheme = function getTheme2(outerTheme, theme) {
      if (typeof theme === "function") {
        var mergedTheme = theme(outerTheme);

        if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
          throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
        }

        return mergedTheme;
      }

      if (theme == null || typeof theme !== "object" || Array.isArray(theme)) {
        throw new Error("[ThemeProvider] Please make your theme prop a plain object");
      }

      return _extends4({}, outerTheme, theme);
    };

    var createCacheWithTheme = /* @__PURE__ */weakMemoize__default["default"](function (outerTheme) {
      return weakMemoize__default["default"](function (theme) {
        return getTheme(outerTheme, theme);
      });
    });

    var ThemeProvider = function ThemeProvider2(props) {
      var theme = React3.useContext(ThemeContext);

      if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
      }

      return /* @__PURE__ */React3.createElement(ThemeContext.Provider, {
        value: theme
      }, props.children);
    };

    function withTheme(Component4) {
      var componentName = Component4.displayName || Component4.name || "Component";

      var render = function render2(props, ref) {
        var theme = React3.useContext(ThemeContext);
        return /* @__PURE__ */React3.createElement(Component4, _extends4({
          theme,
          ref
        }, props));
      };

      var WithTheme = /* @__PURE__ */React3.forwardRef(render);
      WithTheme.displayName = "WithTheme(" + componentName + ")";
      return _isolatedHnrs_dist_emotionReact_isolatedHnrs["default"](WithTheme, Component4);
    }

    var getLastPart = function getLastPart2(functionName) {
      var parts = functionName.split(".");
      return parts[parts.length - 1];
    };

    var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line) {
      var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
      if (match) return getLastPart(match[1]);
      match = /^([A-Za-z0-9$.]+)@/.exec(line);
      if (match) return getLastPart(match[1]);
      return void 0;
    };

    var internalReactFunctionNames = /* @__PURE__ */new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);

    var sanitizeIdentifier = function sanitizeIdentifier2(identifier) {
      return identifier.replace(/\$/g, "-");
    };

    var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
      if (!stackTrace) return void 0;
      var lines = stackTrace.split("\n");

      for (var i = 0; i < lines.length; i++) {
        var functionName = getFunctionNameFromStackTraceLine(lines[i]);
        if (!functionName) continue;
        if (internalReactFunctionNames.has(functionName)) break;
        if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
      }

      return void 0;
    };

    var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
    var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";

    var createEmotionProps = function createEmotionProps2(type, props) {
      if (typeof props.css === "string" && props.css.indexOf(":") !== -1) {
        throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
      }

      var newProps = {};

      for (var key in props) {
        if (hasOwnProperty.call(props, key)) {
          newProps[key] = props[key];
        }
      }

      newProps[typePropName] = type;

      if (!!props.css && (typeof props.css !== "object" || typeof props.css.name !== "string" || props.css.name.indexOf("-") === -1)) {
        var label = getLabelFromStackTrace(new Error().stack);
        if (label) newProps[labelPropName] = label;
      }

      return newProps;
    };

    var Insertion = function Insertion2(_ref3) {
      var cache = _ref3.cache,
          serialized = _ref3.serialized,
          isStringTag = _ref3.isStringTag;
      utils.registerStyles(cache, serialized, isStringTag);
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function () {
        return utils.insertStyles(cache, serialized, isStringTag);
      });

      if (!isBrowser && rules !== void 0) {
        var _ref23;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== void 0) {
          serializedNames += " " + next.name;
          next = next.next;
        }

        return /* @__PURE__ */React3.createElement("style", (_ref23 = {}, _ref23["data-emotion"] = cache.key + " " + serializedNames, _ref23.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref23.nonce = cache.sheet.nonce, _ref23));
      }

      return null;
    };

    var Emotion = /* @__PURE__ */exports.withEmotionCache(function (props, cache, ref) {
      var cssProp = props.css;

      if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
        cssProp = cache.registered[cssProp];
      }

      var WrappedComponent = props[typePropName];
      var registeredStyles = [cssProp];
      var className = "";

      if (typeof props.className === "string") {
        className = utils.getRegisteredStyles(cache.registered, registeredStyles, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serialize.serializeStyles(registeredStyles, void 0, React3.useContext(ThemeContext));

      if (serialized.name.indexOf("-") === -1) {
        var labelFromStack = props[labelPropName];

        if (labelFromStack) {
          serialized = serialize.serializeStyles([serialized, "label:" + labelFromStack + ";"]);
        }
      }

      className += cache.key + "-" + serialized.name;
      var newProps = {};

      for (var key in props) {
        if (hasOwnProperty.call(props, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
          newProps[key] = props[key];
        }
      }

      newProps.ref = ref;
      newProps.className = className;
      return /* @__PURE__ */React3.createElement(React3.Fragment, null, /* @__PURE__ */React3.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof WrappedComponent === "string"
      }), /* @__PURE__ */React3.createElement(WrappedComponent, newProps));
    });

    if (true) {
      Emotion.displayName = "EmotionCssPropInternal";
    }

    exports.CacheProvider = CacheProvider2;
    exports.Emotion = Emotion;
    exports.ThemeContext = ThemeContext;
    exports.ThemeProvider = ThemeProvider;
    exports.__unsafe_useEmotionCache = __unsafe_useEmotionCache;
    exports.createEmotionProps = createEmotionProps;
    exports.hasOwnProperty = hasOwnProperty;
    exports.isBrowser = isBrowser;
    exports.useTheme = useTheme;
    exports.withTheme = withTheme;
  }

}); // node_modules/@emotion/react/dist/emotion-react.cjs.dev.js


var require_emotion_react_cjs_dev = __commonJS({
  "node_modules/@emotion/react/dist/emotion-react.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var React3 = require("react@16.14.0");

    require_emotion_cache_cjs();
    var emotionElement = require_emotion_element_b63ca7c6_cjs_dev();
    require_extends();
    require_emotion_weak_memoize_cjs();

    require("hoist-non-react-statics@3.3.2");

    require_emotion_react_isolated_hnrs_cjs_dev();
    var utils = require_emotion_utils_cjs();
    var serialize = require_emotion_serialize_cjs();
    var useInsertionEffectWithFallbacks = require_emotion_use_insertion_effect_with_fallbacks_cjs();
    var pkg = {
      name: "@emotion/react",
      version: "11.10.4",
      main: "dist/emotion-react.cjs.js",
      module: "dist/emotion-react.esm.js",
      browser: {
        "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
      },
      exports: {
        ".": {
          module: {
            worker: "./dist/emotion-react.worker.esm.js",
            browser: "./dist/emotion-react.browser.esm.js",
            "default": "./dist/emotion-react.esm.js"
          },
          "default": "./dist/emotion-react.cjs.js"
        },
        "./jsx-runtime": {
          module: {
            worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
            browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
            "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
          },
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
        },
        "./_isolated-hnrs": {
          module: {
            worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
            browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
            "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
          },
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
        },
        "./jsx-dev-runtime": {
          module: {
            worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
            browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
            "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
          },
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
        },
        "./package.json": "./package.json",
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      },
      types: "types/index.d.ts",
      files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"],
      sideEffects: false,
      author: "Emotion Contributors",
      license: "MIT",
      scripts: {
        "test:typescript": "dtslint types"
      },
      dependencies: {
        "@babel/runtime": "^7.18.3",
        "@emotion/babel-plugin": "^11.10.0",
        "@emotion/cache": "^11.10.0",
        "@emotion/serialize": "^1.1.0",
        "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
        "@emotion/utils": "^1.2.0",
        "@emotion/weak-memoize": "^0.3.0",
        "hoist-non-react-statics": "^3.3.1"
      },
      peerDependencies: {
        "@babel/core": "^7.0.0",
        react: ">=16.8.0"
      },
      peerDependenciesMeta: {
        "@babel/core": {
          optional: true
        },
        "@types/react": {
          optional: true
        }
      },
      devDependencies: {
        "@babel/core": "^7.18.5",
        "@definitelytyped/dtslint": "0.0.112",
        "@emotion/css": "11.10.0",
        "@emotion/css-prettifier": "1.1.0",
        "@emotion/server": "11.10.0",
        "@emotion/styled": "11.10.4",
        "html-tag-names": "^1.1.2",
        react: "16.14.0",
        "svg-tag-names": "^1.1.1",
        typescript: "^4.5.5"
      },
      repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
      publishConfig: {
        access: "public"
      },
      "umd:main": "dist/emotion-react.umd.min.js",
      preconstruct: {
        entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
        umdName: "emotionReact",
        exports: {
          envConditions: ["browser", "worker"],
          extra: {
            "./types/css-prop": "./types/css-prop.d.ts",
            "./macro": "./macro.js"
          }
        }
      }
    };

    var jsx3 = function jsx4(type, props) {
      var args = arguments;

      if (props == null || !emotionElement.hasOwnProperty.call(props, "css")) {
        return React3.createElement.apply(void 0, args);
      }

      var argsLength = args.length;
      var createElementArgArray = new Array(argsLength);
      createElementArgArray[0] = emotionElement.Emotion;
      createElementArgArray[1] = emotionElement.createEmotionProps(type, props);

      for (var i = 2; i < argsLength; i++) {
        createElementArgArray[i] = args[i];
      }

      return React3.createElement.apply(null, createElementArgArray);
    };

    var warnedAboutCssPropForGlobal = false;
    var Global = /* @__PURE__ */emotionElement.withEmotionCache(function (props, cache) {
      if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
        console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
        warnedAboutCssPropForGlobal = true;
      }

      var styles = props.styles;
      var serialized = serialize.serializeStyles([styles], void 0, React3.useContext(emotionElement.ThemeContext));

      if (!emotionElement.isBrowser) {
        var _ref3;

        var serializedNames = serialized.name;
        var serializedStyles = serialized.styles;
        var next = serialized.next;

        while (next !== void 0) {
          serializedNames += " " + next.name;
          serializedStyles += next.styles;
          next = next.next;
        }

        var shouldCache = cache.compat === true;
        var rules = cache.insert("", {
          name: serializedNames,
          styles: serializedStyles
        }, cache.sheet, shouldCache);

        if (shouldCache) {
          return null;
        }

        return /* @__PURE__ */React3.createElement("style", (_ref3 = {}, _ref3["data-emotion"] = cache.key + "-global " + serializedNames, _ref3.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref3.nonce = cache.sheet.nonce, _ref3));
      }

      var sheetRef = React3.useRef();
      useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function () {
        var key = cache.key + "-global";
        var sheet = new cache.sheet.constructor({
          key,
          nonce: cache.sheet.nonce,
          container: cache.sheet.container,
          speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false;
        var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');

        if (cache.sheet.tags.length) {
          sheet.before = cache.sheet.tags[0];
        }

        if (node !== null) {
          rehydrating = true;
          node.setAttribute("data-emotion", key);
          sheet.hydrate([node]);
        }

        sheetRef.current = [sheet, rehydrating];
        return function () {
          sheet.flush();
        };
      }, [cache]);
      useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function () {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0],
            rehydrating = sheetRefCurrent[1];

        if (rehydrating) {
          sheetRefCurrent[1] = false;
          return;
        }

        if (serialized.next !== void 0) {
          utils.insertStyles(cache, serialized.next, true);
        }

        if (sheet.tags.length) {
          var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
          sheet.before = element;
          sheet.flush();
        }

        cache.insert("", serialized, sheet, false);
      }, [cache, serialized.name]);
      return null;
    });

    if (true) {
      Global.displayName = "EmotionGlobal";
    }

    function css5() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return serialize.serializeStyles(args);
    }

    var keyframes2 = function keyframes3() {
      var insertable = css5.apply(void 0, arguments);
      var name = "animation-" + insertable.name;
      return {
        name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
      };
    };

    var classnames = function classnames2(args) {
      var len = args.length;
      var i = 0;
      var cls = "";

      for (; i < len; i++) {
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;

        switch (typeof arg) {
          case "boolean":
            break;

          case "object":
            {
              if (Array.isArray(arg)) {
                toAdd = classnames2(arg);
              } else {
                if (arg.styles !== void 0 && arg.name !== void 0) {
                  console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
                }

                toAdd = "";

                for (var k in arg) {
                  if (arg[k] && k) {
                    toAdd && (toAdd += " ");
                    toAdd += k;
                  }
                }
              }

              break;
            }

          default:
            {
              toAdd = arg;
            }
        }

        if (toAdd) {
          cls && (cls += " ");
          cls += toAdd;
        }
      }

      return cls;
    };

    function merge(registered, css6, className) {
      var registeredStyles = [];
      var rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);

      if (registeredStyles.length < 2) {
        return className;
      }

      return rawClassName + css6(registeredStyles);
    }

    var Insertion = function Insertion2(_ref3) {
      var cache = _ref3.cache,
          serializedArr = _ref3.serializedArr;
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function () {
        var rules2 = "";

        for (var i = 0; i < serializedArr.length; i++) {
          var res = utils.insertStyles(cache, serializedArr[i], false);

          if (!emotionElement.isBrowser && res !== void 0) {
            rules2 += res;
          }
        }

        if (!emotionElement.isBrowser) {
          return rules2;
        }
      });

      if (!emotionElement.isBrowser && rules.length !== 0) {
        var _ref23;

        return /* @__PURE__ */React3.createElement("style", (_ref23 = {}, _ref23["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
          return serialized.name;
        }).join(" "), _ref23.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref23.nonce = cache.sheet.nonce, _ref23));
      }

      return null;
    };

    var ClassNames2 = /* @__PURE__ */emotionElement.withEmotionCache(function (props, cache) {
      var hasRendered = false;
      var serializedArr = [];

      var css6 = function css7() {
        if (hasRendered && true) {
          throw new Error("css can only be used during render");
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var serialized = serialize.serializeStyles(args, cache.registered);
        serializedArr.push(serialized);
        utils.registerStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
      };

      var cx = function cx2() {
        if (hasRendered && true) {
          throw new Error("cx can only be used during render");
        }

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return merge(cache.registered, css6, classnames(args));
      };

      var content = {
        css: css6,
        cx,
        theme: React3.useContext(emotionElement.ThemeContext)
      };
      var ele = props.children(content);
      hasRendered = true;
      return /* @__PURE__ */React3.createElement(React3.Fragment, null, /* @__PURE__ */React3.createElement(Insertion, {
        cache,
        serializedArr
      }), ele);
    });

    if (true) {
      ClassNames2.displayName = "EmotionClassNames";
    }

    if (true) {
      isBrowser = typeof document !== "undefined";
      isJest = typeof jest !== "undefined";

      if (isBrowser && !isJest) {
        globalContext = typeof globalThis !== "undefined" ? globalThis : isBrowser ? window : global;
        globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";

        if (globalContext[globalKey]) {
          console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
        }

        globalContext[globalKey] = true;
      }
    }

    exports.CacheProvider = emotionElement.CacheProvider;
    exports.ThemeContext = emotionElement.ThemeContext;
    exports.ThemeProvider = emotionElement.ThemeProvider;
    exports.__unsafe_useEmotionCache = emotionElement.__unsafe_useEmotionCache;
    exports.useTheme = emotionElement.useTheme;
    Object.defineProperty(exports, "withEmotionCache", {
      enumerable: true,
      get: function () {
        return emotionElement.withEmotionCache;
      }
    });
    exports.withTheme = emotionElement.withTheme;
    exports.ClassNames = ClassNames2;
    exports.Global = Global;
    exports.createElement = jsx3;
    exports.css = css5;
    exports.jsx = jsx3;
    exports.keyframes = keyframes2;
    var isBrowser;
    var isJest;
    var globalContext;
    var globalKey;
  }

}); // node_modules/@emotion/react/dist/emotion-react.cjs.js


var require_emotion_react_cjs = __commonJS({
  "node_modules/@emotion/react/dist/emotion-react.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_react_cjs_dev();
    }
  }

}); // .beyond/uimport/react-select.5.4.0.js


var react_select_5_4_0_exports = {};

__export(react_select_5_4_0_exports, {
  NonceProvider: () => NonceProvider,
  components: () => components,
  createFilter: () => createFilter,
  default: () => react_select_5_4_0_default,
  defaultTheme: () => defaultTheme,
  mergeStyles: () => mergeStyles,
  useStateManager: () => useStateManager
}); // node_modules/react-select/dist/index-a7690a33.esm.js


var import_extends = __toESM(require("@babel/runtime@7.19.0/helpers/esm/extends"));

var import_react = __toESM(require_emotion_react_cjs());

var import_taggedTemplateLiteral = __toESM(require("@babel/runtime@7.19.0/helpers/esm/taggedTemplateLiteral"));

var import_objectWithoutProperties = __toESM(require("@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties"));

var import_slicedToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/slicedToArray"));

var import_typeof = __toESM(require("@babel/runtime@7.19.0/helpers/esm/typeof"));

var import_classCallCheck = __toESM(require("@babel/runtime@7.19.0/helpers/esm/classCallCheck"));

var import_createClass = __toESM(require("@babel/runtime@7.19.0/helpers/esm/createClass"));

var import_inherits = __toESM(require("@babel/runtime@7.19.0/helpers/esm/inherits"));

var import_defineProperty = __toESM(require("@babel/runtime@7.19.0/helpers/esm/defineProperty"));

var import_react2 = require("react@16.14.0");

var import_react_dom = require("react-dom@16.14.0");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self2;
}

function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self2);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];

var noop = function noop2() {};

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === "-") {
    return prefix + name;
  } else {
    return prefix + "__" + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(" ");
}

var cleanValue = function cleanValue2(value) {
  if (isArray(value)) return value.filter(Boolean);
  if ((0, import_typeof.default)(value) === "object" && value !== null) return [value];
  return [];
};

var cleanCommonProps = function cleanCommonProps2(props) {
  props.className;
  props.clearValue;
  props.cx;
  props.getStyles;
  props.getValue;
  props.hasValue;
  props.isMulti;
  props.isRtl;
  props.options;
  props.selectOption;
  props.selectProps;
  props.setValue;
  props.theme;
  var innerProps = (0, import_objectWithoutProperties.default)(props, _excluded$3);
  return _objectSpread2({}, innerProps);
};

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);

    if (typeof _newValue === "string") return _newValue;
  }

  return inputValue;
}

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }

  return el.clientHeight;
}

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}

function scrollTo(el, top) {
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
}

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRx = /(auto|scroll)/;
  if (style.position === "fixed") return document.documentElement;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === "static") {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return document.documentElement;
}

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
}

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

function isTouchCapable() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }

};
var w = typeof window !== "undefined" ? window : {};

if (w.addEventListener && w.removeEventListener) {
  w.addEventListener("p", noop, options);
  w.removeEventListener("p", noop, false);
}

var supportsPassiveEvents = passiveOptionAccessed;

function notNullish(item) {
  return item != null;
}

function isArray(arg) {
  return Array.isArray(arg);
}

function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}

function singleValueAsValue(singleValue) {
  return singleValue;
}

function multiValueAsValue(multiValue) {
  return multiValue;
}

var removeProps = function removeProps2(propsObj) {
  for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    properties[_key - 1] = arguments[_key];
  }

  var propsMap = Object.entries(propsObj).filter(function (_ref3) {
    var _ref23 = (0, import_slicedToArray.default)(_ref3, 1),
        key = _ref23[0];

    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = (0, import_slicedToArray.default)(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    newProps[key] = val;
    return newProps;
  }, {});
};

function getMenuPlacement(_ref3) {
  var maxHeight = _ref3.maxHeight,
      menuEl = _ref3.menuEl,
      minHeight = _ref3.minHeight,
      placement = _ref3.placement,
      shouldScroll = _ref3.shouldScroll,
      isFixedPosition = _ref3.isFixedPosition,
      theme = _ref3.theme;
  var spacing2 = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: "bottom",
    maxHeight
  };
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case "auto":
    case "bottom":
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: "bottom",
          maxHeight
        };
      }

      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: "bottom",
          maxHeight
        };
      }

      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: "bottom",
          maxHeight: constrainedHeight
        };
      }

      if (placement === "auto" || isFixedPosition) {
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing2.controlHeight, maxHeight);
        }

        return {
          placement: "top",
          maxHeight: _constrainedHeight
        };
      }

      if (placement === "bottom") {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }

        return {
          placement: "bottom",
          maxHeight
        };
      }

      break;

    case "top":
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: "top",
          maxHeight
        };
      }

      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: "top",
          maxHeight
        };
      }

      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight;

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: "top",
          maxHeight: _constrainedHeight2
        };
      }

      return {
        placement: "bottom",
        maxHeight
      };

    default:
      throw new Error('Invalid placement provided "'.concat(placement, '".'));
  }

  return defaultState;
}

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: "top",
    top: "bottom"
  };
  return placement ? placementToCSSProp[placement] : "bottom";
}

var coercePlacement = function coercePlacement2(p) {
  return p === "auto" ? "bottom" : p;
};

var menuCSS = function menuCSS2(_ref23) {
  var _ref3;

  var placement = _ref23.placement,
      _ref2$theme = _ref23.theme,
      borderRadius2 = _ref2$theme.borderRadius,
      spacing2 = _ref2$theme.spacing,
      colors2 = _ref2$theme.colors;
  return _ref3 = {
    label: "menu"
  }, (0, import_defineProperty.default)(_ref3, alignToControl(placement), "100%"), (0, import_defineProperty.default)(_ref3, "backgroundColor", colors2.neutral0), (0, import_defineProperty.default)(_ref3, "borderRadius", borderRadius2), (0, import_defineProperty.default)(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), (0, import_defineProperty.default)(_ref3, "marginBottom", spacing2.menuGutter), (0, import_defineProperty.default)(_ref3, "marginTop", spacing2.menuGutter), (0, import_defineProperty.default)(_ref3, "position", "absolute"), (0, import_defineProperty.default)(_ref3, "width", "100%"), (0, import_defineProperty.default)(_ref3, "zIndex", 1), _ref3;
};

var PortalPlacementContext = /* @__PURE__ */(0, import_react2.createContext)({
  getPortalPlacement: null
});

var MenuPlacer = /* @__PURE__ */function (_Component) {
  (0, import_inherits.default)(MenuPlacer2, _Component);

  var _super = _createSuper(MenuPlacer2);

  function MenuPlacer2() {
    var _this;

    (0, import_classCallCheck.default)(this, MenuPlacer2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };
    _this.context = void 0;

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return;
      var isFixedPosition = menuPosition === "fixed";
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll,
        isFixedPosition,
        theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  (0, import_createClass.default)(MenuPlacer2, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);
  return MenuPlacer2;
}(import_react2.Component);

MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("menu", props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var menuListCSS = function menuListCSS2(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit2 = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight,
    overflowY: "auto",
    paddingBottom: baseUnit2,
    paddingTop: baseUnit2,
    position: "relative",
    WebkitOverflowScrolling: "touch"
  };
};

var MenuList = function MenuList2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("menuList", props),
    className: cx({
      "menu-list": true,
      "menu-list--is-multi": isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var noticeCSS = function noticeCSS2(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit2 = _ref5$theme.spacing.baseUnit,
      colors2 = _ref5$theme.colors;
  return {
    color: colors2.neutral40,
    padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px"),
    textAlign: "center"
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;

var NoOptionsMessage = function NoOptionsMessage2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("noOptionsMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--no-options": true
    }, className)
  }, innerProps), children);
};

NoOptionsMessage.defaultProps = {
  children: "No options"
};

var LoadingMessage = function LoadingMessage2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("loadingMessage", props),
    className: cx({
      "menu-notice": true,
      "menu-notice--loading": true
    }, className)
  }, innerProps), children);
};

LoadingMessage.defaultProps = {
  children: "Loading..."
};

var menuPortalCSS = function menuPortalCSS2(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};

var MenuPortal = /* @__PURE__ */function (_Component2) {
  (0, import_inherits.default)(MenuPortal2, _Component2);

  var _super2 = _createSuper(MenuPortal2);

  function MenuPortal2() {
    var _this2;

    (0, import_classCallCheck.default)(this, MenuPortal2);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement);

      if (placement !== initialPlacement) {
        _this2.setState({
          placement
        });
      }
    };

    return _this2;
  }

  (0, import_createClass.default)(MenuPortal2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          controlElement = _this$props2.controlElement,
          cx = _this$props2.cx,
          innerProps = _this$props2.innerProps,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === "fixed";

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset,
        position,
        rect
      };
      var menuWrapper = (0, import_react.jsx)("div", (0, import_extends.default)({
        css: getStyles("menuPortal", state),
        className: cx({
          "menu-portal": true
        }, className)
      }, innerProps), children);
      return (0, import_react.jsx)(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /* @__PURE__ */(0, import_react_dom.createPortal)(menuWrapper, appendTo) : menuWrapper);
    }
  }]);
  return MenuPortal2;
}(import_react2.Component);

var containerCSS = function containerCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled,
      isRtl = _ref3.isRtl;
  return {
    label: "container",
    direction: isRtl ? "rtl" : void 0,
    pointerEvents: isDisabled ? "none" : void 0,
    position: "relative"
  };
};

var SelectContainer = function SelectContainer2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("container", props),
    className: cx({
      "--is-disabled": isDisabled,
      "--is-rtl": isRtl
    }, className)
  }, innerProps), children);
};

var valueContainerCSS = function valueContainerCSS2(_ref23) {
  var spacing2 = _ref23.theme.spacing,
      isMulti = _ref23.isMulti,
      hasValue = _ref23.hasValue,
      controlShouldRenderValue = _ref23.selectProps.controlShouldRenderValue;
  return {
    alignItems: "center",
    display: isMulti && hasValue && controlShouldRenderValue ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px"),
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  };
};

var ValueContainer = function ValueContainer2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("valueContainer", props),
    className: cx({
      "value-container": true,
      "value-container--is-multi": isMulti,
      "value-container--has-value": hasValue
    }, className)
  }, innerProps), children);
};

var indicatorsContainerCSS = function indicatorsContainerCSS2() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
};

var IndicatorsContainer = function IndicatorsContainer2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      getStyles = props.getStyles;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("indicatorsContainer", props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};

var _templateObject;

var _excluded$2 = ["size"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

var _ref2 = false ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Svg = function Svg2(_ref3) {
  var size = _ref3.size,
      props = (0, import_objectWithoutProperties.default)(_ref3, _excluded$2);
  return (0, import_react.jsx)("svg", (0, import_extends.default)({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon2(props) {
  return (0, import_react.jsx)(Svg, (0, import_extends.default)({
    size: 20
  }, props), (0, import_react.jsx)("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};

var DownChevron = function DownChevron2(props) {
  return (0, import_react.jsx)(Svg, (0, import_extends.default)({
    size: 20
  }, props), (0, import_react.jsx)("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

var baseCSS = function baseCSS2(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit2 = _ref3$theme.spacing.baseUnit,
      colors2 = _ref3$theme.colors;
  return {
    label: "indicatorContainer",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    ":hover": {
      color: isFocused ? colors2.neutral80 : colors2.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;

var DropdownIndicator = function DropdownIndicator2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("dropdownIndicator", props),
    className: cx({
      indicator: true,
      "dropdown-indicator": true
    }, className)
  }, innerProps), children || (0, import_react.jsx)(DownChevron, null));
};

var clearIndicatorCSS = baseCSS;

var ClearIndicator = function ClearIndicator2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("clearIndicator", props),
    className: cx({
      indicator: true,
      "clear-indicator": true
    }, className)
  }, innerProps), children || (0, import_react.jsx)(CrossIcon, null));
};

var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit2 = _ref4$theme.spacing.baseUnit,
      colors2 = _ref4$theme.colors;
  return {
    label: "indicatorSeparator",
    alignSelf: "stretch",
    backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
    marginBottom: baseUnit2 * 2,
    marginTop: baseUnit2 * 2,
    width: 1
  };
};

var IndicatorSeparator = function IndicatorSeparator2(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("span", (0, import_extends.default)({}, innerProps, {
    css: getStyles("indicatorSeparator", props),
    className: cx({
      "indicator-separator": true
    }, className)
  }));
};

var loadingDotAnimations = (0, import_react.keyframes)(_templateObject || (_templateObject = (0, import_taggedTemplateLiteral.default)(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));

var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors2 = _ref5$theme.colors,
      baseUnit2 = _ref5$theme.spacing.baseUnit;
  return {
    label: "loadingIndicator",
    color: isFocused ? colors2.neutral60 : colors2.neutral20,
    display: "flex",
    padding: baseUnit2 * 2,
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: "center",
    verticalAlign: "middle"
  };
};

var LoadingDot = function LoadingDot2(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return (0, import_react.jsx)("span", {
    css: /* @__PURE__ */(0, import_react.css)({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: offset ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, false ? "" : ";label:LoadingDot;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFQSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06XG4gIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7XG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkluZGljYXRvckNTUyA9IGJhc2VDU1M7XG5leHBvcnQgY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBEcm9wZG93bkluZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+XG4pID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdjbGVhckluZGljYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpc0Rpc2FibGVkLFxuICB0aGVtZToge1xuICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICBjb2xvcnMsXG4gIH0sXG59OiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gIGFsaWduU2VsZjogJ3N0cmV0Y2gnLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gIG1hcmdpblRvcDogYmFzZVVuaXQgKiAyLFxuICB3aWR0aDogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKX1cbiAgICAgIGNsYXNzTmFtZT17Y3goeyAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUgfSwgY2xhc3NOYW1lKX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaXNGb2N1c2VkLFxuICBzaXplLFxuICB0aGVtZToge1xuICAgIGNvbG9ycyxcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gIH0sXG59OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
  });
};

var LoadingIndicator = function LoadingIndicator2(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("loadingIndicator", props),
    className: cx({
      indicator: true,
      "loading-indicator": true
    }, className)
  }, innerProps), (0, import_react.jsx)(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), (0, import_react.jsx)(LoadingDot, {
    delay: 160,
    offset: true
  }), (0, import_react.jsx)(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};

LoadingIndicator.defaultProps = {
  size: 4
};

var css$1 = function css(_ref3) {
  var isDisabled = _ref3.isDisabled,
      isFocused = _ref3.isFocused,
      _ref$theme = _ref3.theme,
      colors2 = _ref$theme.colors,
      borderRadius2 = _ref$theme.borderRadius,
      spacing2 = _ref$theme.spacing;
  return {
    label: "control",
    alignItems: "center",
    backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
    borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
    borderRadius: borderRadius2,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : void 0,
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: spacing2.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    "&:hover": {
      borderColor: isFocused ? colors2.primary : colors2.neutral30
    }
  };
};

var Control = function Control2(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    ref: innerRef,
    css: getStyles("control", props),
    className: cx({
      control: true,
      "control--is-disabled": isDisabled,
      "control--is-focused": isFocused,
      "control--menu-is-open": menuIsOpen
    }, className)
  }, innerProps), children);
};

var _excluded$1 = ["data"];

var groupCSS = function groupCSS2(_ref3) {
  var spacing2 = _ref3.theme.spacing;
  return {
    paddingBottom: spacing2.baseUnit * 2,
    paddingTop: spacing2.baseUnit * 2
  };
};

var Group = function Group2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("group", props),
    className: cx({
      group: true
    }, className)
  }, innerProps), (0, import_react.jsx)(Heading, (0, import_extends.default)({}, headingProps, {
    selectProps,
    theme,
    getStyles,
    cx
  }), label), (0, import_react.jsx)("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS2(_ref23) {
  var spacing2 = _ref23.theme.spacing;
  return {
    label: "group",
    color: "#999",
    cursor: "default",
    display: "block",
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: spacing2.baseUnit * 3,
    paddingRight: spacing2.baseUnit * 3,
    textTransform: "uppercase"
  };
};

var GroupHeading = function GroupHeading2(props) {
  var getStyles = props.getStyles,
      cx = props.cx,
      className = props.className;

  var _cleanCommonProps = cleanCommonProps(props);

  _cleanCommonProps.data;
  var innerProps = (0, import_objectWithoutProperties.default)(_cleanCommonProps, _excluded$1);
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("groupHeading", props),
    className: cx({
      "group-heading": true
    }, className)
  }, innerProps));
};

var _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];

var inputCSS = function inputCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled,
      value = _ref3.value,
      _ref$theme = _ref3.theme,
      spacing2 = _ref$theme.spacing,
      colors2 = _ref$theme.colors;
  return _objectSpread2({
    margin: spacing2.baseUnit / 2,
    paddingBottom: spacing2.baseUnit / 2,
    paddingTop: spacing2.baseUnit / 2,
    visibility: isDisabled ? "hidden" : "visible",
    color: colors2.neutral80,
    transform: value ? "translateZ(0)" : ""
  }, containerStyle);
};

var spacingStyle = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": _objectSpread2({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, spacingStyle)
};

var inputStyle = function inputStyle2(isHidden) {
  return _objectSpread2({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: "100%"
  }, spacingStyle);
};

var Input = function Input2(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      value = props.value;

  var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      inputClassName = _cleanCommonProps.inputClassName,
      innerProps = (0, import_objectWithoutProperties.default)(_cleanCommonProps, _excluded);

  return (0, import_react.jsx)("div", {
    className: cx({
      "input-container": true
    }, className),
    css: getStyles("input", props),
    "data-value": value || ""
  }, (0, import_react.jsx)("input", (0, import_extends.default)({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS2(_ref3) {
  var _ref$theme = _ref3.theme,
      spacing2 = _ref$theme.spacing,
      borderRadius2 = _ref$theme.borderRadius,
      colors2 = _ref$theme.colors;
  return {
    label: "multiValue",
    backgroundColor: colors2.neutral10,
    borderRadius: borderRadius2 / 2,
    display: "flex",
    margin: spacing2.baseUnit / 2,
    minWidth: 0
  };
};

var multiValueLabelCSS = function multiValueLabelCSS2(_ref23) {
  var _ref2$theme = _ref23.theme,
      borderRadius2 = _ref2$theme.borderRadius,
      colors2 = _ref2$theme.colors,
      cropWithEllipsis = _ref23.cropWithEllipsis;
  return {
    borderRadius: borderRadius2 / 2,
    color: colors2.neutral80,
    fontSize: "85%",
    overflow: "hidden",
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis || cropWithEllipsis === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  };
};

var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing2 = _ref3$theme.spacing,
      borderRadius2 = _ref3$theme.borderRadius,
      colors2 = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: "center",
    borderRadius: borderRadius2 / 2,
    backgroundColor: isFocused ? colors2.dangerLight : void 0,
    display: "flex",
    paddingLeft: spacing2.baseUnit,
    paddingRight: spacing2.baseUnit,
    ":hover": {
      backgroundColor: colors2.dangerLight,
      color: colors2.danger
    }
  };
};

var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return (0, import_react.jsx)("div", innerProps, children);
};

var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;

function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    role: "button"
  }, innerProps), children || (0, import_react.jsx)(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue2(props) {
  var children = props.children,
      className = props.className,
      components2 = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps3 = props.removeProps,
      selectProps = props.selectProps;
  var Container = components2.Container,
      Label = components2.Label,
      Remove = components2.Remove;
  return (0, import_react.jsx)(import_react.ClassNames, null, function (_ref6) {
    var css5 = _ref6.css,
        emotionCx = _ref6.cx;
    return (0, import_react.jsx)(Container, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css5(getStyles("multiValue", props)), cx({
          "multi-value": true,
          "multi-value--is-disabled": isDisabled
        }, className))
      }, innerProps),
      selectProps
    }, (0, import_react.jsx)(Label, {
      data,
      innerProps: {
        className: emotionCx(css5(getStyles("multiValueLabel", props)), cx({
          "multi-value__label": true
        }, className))
      },
      selectProps
    }, children), (0, import_react.jsx)(Remove, {
      data,
      innerProps: _objectSpread2({
        className: emotionCx(css5(getStyles("multiValueRemove", props)), cx({
          "multi-value__remove": true
        }, className)),
        "aria-label": "Remove ".concat(children || "option")
      }, removeProps3),
      selectProps
    }));
  });
};

var optionCSS = function optionCSS2(_ref3) {
  var isDisabled = _ref3.isDisabled,
      isFocused = _ref3.isFocused,
      isSelected = _ref3.isSelected,
      _ref$theme = _ref3.theme,
      spacing2 = _ref$theme.spacing,
      colors2 = _ref$theme.colors;
  return {
    label: "option",
    backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
    color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    ":active": {
      backgroundColor: !isDisabled ? isSelected ? colors2.primary : colors2.primary50 : void 0
    }
  };
};

var Option = function Option2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("option", props),
    className: cx({
      option: true,
      "option--is-disabled": isDisabled,
      "option--is-focused": isFocused,
      "option--is-selected": isSelected
    }, className),
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS2(_ref3) {
  var _ref$theme = _ref3.theme,
      spacing2 = _ref$theme.spacing,
      colors2 = _ref$theme.colors;
  return {
    label: "placeholder",
    color: colors2.neutral50,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2
  };
};

var Placeholder = function Placeholder2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("placeholder", props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css2 = function css3(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref$theme = _ref3.theme,
      spacing2 = _ref$theme.spacing,
      colors2 = _ref$theme.colors;
  return {
    label: "singleValue",
    color: isDisabled ? colors2.neutral40 : colors2.neutral80,
    gridArea: "1 / 1 / 2 / 3",
    marginLeft: spacing2.baseUnit / 2,
    marginRight: spacing2.baseUnit / 2,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };
};

var SingleValue = function SingleValue2(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return (0, import_react.jsx)("div", (0, import_extends.default)({
    css: getStyles("singleValue", props),
    className: cx({
      "single-value": true,
      "single-value--is-disabled": isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator,
  Control,
  DropdownIndicator,
  DownChevron,
  CrossIcon,
  Group,
  GroupHeading,
  IndicatorsContainer,
  IndicatorSeparator,
  Input,
  LoadingIndicator,
  Menu,
  MenuList,
  MenuPortal,
  LoadingMessage,
  NoOptionsMessage,
  MultiValue,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Option,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer
};

var defaultComponents = function defaultComponents2(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
}; // node_modules/react-select/dist/useStateManager-68425271.esm.js


var import_slicedToArray2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/slicedToArray"));

var import_objectWithoutProperties2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties"));

var import_react3 = require("react@16.14.0");

var _excluded2 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

function useStateManager(_ref3) {
  var _ref$defaultInputValu = _ref3.defaultInputValue,
      defaultInputValue = _ref$defaultInputValu === void 0 ? "" : _ref$defaultInputValu,
      _ref$defaultMenuIsOpe = _ref3.defaultMenuIsOpen,
      defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
      _ref$defaultValue = _ref3.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      propsInputValue = _ref3.inputValue,
      propsMenuIsOpen = _ref3.menuIsOpen,
      propsOnChange = _ref3.onChange,
      propsOnInputChange = _ref3.onInputChange,
      propsOnMenuClose = _ref3.onMenuClose,
      propsOnMenuOpen = _ref3.onMenuOpen,
      propsValue = _ref3.value,
      restSelectProps = (0, import_objectWithoutProperties2.default)(_ref3, _excluded2);

  var _useState = (0, import_react3.useState)(propsInputValue !== void 0 ? propsInputValue : defaultInputValue),
      _useState2 = (0, import_slicedToArray2.default)(_useState, 2),
      stateInputValue = _useState2[0],
      setStateInputValue = _useState2[1];

  var _useState3 = (0, import_react3.useState)(propsMenuIsOpen !== void 0 ? propsMenuIsOpen : defaultMenuIsOpen),
      _useState4 = (0, import_slicedToArray2.default)(_useState3, 2),
      stateMenuIsOpen = _useState4[0],
      setStateMenuIsOpen = _useState4[1];

  var _useState5 = (0, import_react3.useState)(propsValue !== void 0 ? propsValue : defaultValue),
      _useState6 = (0, import_slicedToArray2.default)(_useState5, 2),
      stateValue = _useState6[0],
      setStateValue = _useState6[1];

  var onChange2 = (0, import_react3.useCallback)(function (value2, actionMeta) {
    if (typeof propsOnChange === "function") {
      propsOnChange(value2, actionMeta);
    }

    setStateValue(value2);
  }, [propsOnChange]);
  var onInputChange = (0, import_react3.useCallback)(function (value2, actionMeta) {
    var newValue;

    if (typeof propsOnInputChange === "function") {
      newValue = propsOnInputChange(value2, actionMeta);
    }

    setStateInputValue(newValue !== void 0 ? newValue : value2);
  }, [propsOnInputChange]);
  var onMenuOpen = (0, import_react3.useCallback)(function () {
    if (typeof propsOnMenuOpen === "function") {
      propsOnMenuOpen();
    }

    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = (0, import_react3.useCallback)(function () {
    if (typeof propsOnMenuClose === "function") {
      propsOnMenuClose();
    }

    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== void 0 ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== void 0 ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== void 0 ? propsValue : stateValue;
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    inputValue,
    menuIsOpen,
    onChange: onChange2,
    onInputChange,
    onMenuClose,
    onMenuOpen,
    value
  });
} // node_modules/react-select/dist/Select-54ac8379.esm.js


var import_extends2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/extends"));

var import_classCallCheck2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/classCallCheck"));

var import_createClass2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/createClass"));

var import_inherits2 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/inherits"));

var import_toConsumableArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/toConsumableArray"));

var React = __toESM(require("react@16.14.0"));

var import_react4 = require("react@16.14.0");

var import_react5 = __toESM(require_emotion_react_cjs());

var import_memoize_one = __toESM(require("memoize-one@5.2.1"));

var import_objectWithoutProperties3 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties"));

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

var _ref = false ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var A11yText = function A11yText2(props) {
  return (0, import_react5.jsx)("span", (0, import_extends2.default)({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;

    switch (context) {
      case "menu":
        return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");

      case "input":
        return "".concat(props["aria-label"] || "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");

      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";

      default:
        return "";
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? "" : _props$label,
        labels = props.labels,
        isDisabled = props.isDisabled;

    switch (action) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(label, ", deselected.");

      case "clear":
        return "All selected options have been cleared.";

      case "initial-input-focus":
        return "option".concat(labels.length > 1 ? "s" : "", " ").concat(labels.join(","), ", selected.");

      case "select-option":
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");

      default:
        return "";
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
        focused = props.focused,
        options2 = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? "" : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;

    var getArrayIndex = function getArrayIndex2(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : "";
    };

    if (context === "value" && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }

    if (context === "menu") {
      var disabled = isDisabled ? " disabled" : "";
      var status = "".concat(isSelected ? "selected" : "focused").concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options2, focused), ".");
    }

    return "";
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  }
};

var LiveRegion = function LiveRegion2(props) {
  var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps,
      id = props.id;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel4 = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled3 = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options2 = selectProps.options,
      screenReaderStatus2 = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps["aria-label"];
  var ariaLive = selectProps["aria-live"];
  var messages = (0, import_react4.useMemo)(function () {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);
  var ariaSelected = (0, import_react4.useMemo)(function () {
    var message = "";

    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
          selectedOptions = ariaSelection.options,
          removedValue = ariaSelection.removedValue,
          removedValues = ariaSelection.removedValues,
          value = ariaSelection.value;

      var asOption = function asOption2(val) {
        return !Array.isArray(val) ? val : null;
      };

      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel4(selected) : "";
      var multiSelected = selectedOptions || removedValues || void 0;
      var labels = multiSelected ? multiSelected.map(getOptionLabel4) : [];

      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled3(selected, selectValue),
        label,
        labels
      }, ariaSelection);

      message = messages.onChange(onChangeProps);
    }

    return message;
  }, [ariaSelection, messages, isOptionDisabled3, selectValue, getOptionLabel4]);
  var ariaFocused = (0, import_react4.useMemo)(function () {
    var focusMsg = "";
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused,
        label: getOptionLabel4(focused),
        isDisabled: isOptionDisabled3(focused, selectValue),
        isSelected,
        options: options2,
        context: focused === focusedOption ? "menu" : "value",
        selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }

    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel4, isOptionDisabled3, messages, options2, selectValue]);
  var ariaResults = (0, import_react4.useMemo)(function () {
    var resultsMsg = "";

    if (menuIsOpen && options2.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus2({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue,
        resultsMessage
      });
    }

    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options2, screenReaderStatus2]);
  var ariaGuidance = (0, import_react4.useMemo)(function () {
    var guidanceMsg = "";

    if (messages.guidance) {
      var context = focusedValue ? "value" : menuIsOpen ? "menu" : "input";
      guidanceMsg = messages.guidance({
        "aria-label": ariaLabel,
        context,
        isDisabled: focusedOption && isOptionDisabled3(focusedOption, selectValue),
        isMulti,
        isSearchable,
        tabSelectsValue
      });
    }

    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled3, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  var ScreenReaderText = (0, import_react5.jsx)(import_react4.Fragment, null, (0, import_react5.jsx)("span", {
    id: "aria-selection"
  }, ariaSelected), (0, import_react5.jsx)("span", {
    id: "aria-context"
  }, ariaContext));
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus";
  return (0, import_react5.jsx)(import_react4.Fragment, null, (0, import_react5.jsx)(A11yText, {
    id
  }, isInitialFocus && ScreenReaderText), (0, import_react5.jsx)(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};

var diacritics = [{
  base: "A",
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: "AA",
  letters: "\uA732"
}, {
  base: "AE",
  letters: "\xC6\u01FC\u01E2"
}, {
  base: "AO",
  letters: "\uA734"
}, {
  base: "AU",
  letters: "\uA736"
}, {
  base: "AV",
  letters: "\uA738\uA73A"
}, {
  base: "AY",
  letters: "\uA73C"
}, {
  base: "B",
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: "C",
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: "D",
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: "DZ",
  letters: "\u01F1\u01C4"
}, {
  base: "Dz",
  letters: "\u01F2\u01C5"
}, {
  base: "E",
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: "F",
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: "G",
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: "H",
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: "I",
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: "J",
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: "K",
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: "L",
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: "LJ",
  letters: "\u01C7"
}, {
  base: "Lj",
  letters: "\u01C8"
}, {
  base: "M",
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: "N",
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: "NJ",
  letters: "\u01CA"
}, {
  base: "Nj",
  letters: "\u01CB"
}, {
  base: "O",
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: "OI",
  letters: "\u01A2"
}, {
  base: "OO",
  letters: "\uA74E"
}, {
  base: "OU",
  letters: "\u0222"
}, {
  base: "P",
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: "Q",
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: "R",
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: "S",
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: "T",
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: "TZ",
  letters: "\uA728"
}, {
  base: "U",
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: "V",
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: "VY",
  letters: "\uA760"
}, {
  base: "W",
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: "X",
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: "Y",
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: "Z",
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: "a",
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: "aa",
  letters: "\uA733"
}, {
  base: "ae",
  letters: "\xE6\u01FD\u01E3"
}, {
  base: "ao",
  letters: "\uA735"
}, {
  base: "au",
  letters: "\uA737"
}, {
  base: "av",
  letters: "\uA739\uA73B"
}, {
  base: "ay",
  letters: "\uA73D"
}, {
  base: "b",
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: "c",
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: "d",
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: "dz",
  letters: "\u01F3\u01C6"
}, {
  base: "e",
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: "f",
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: "g",
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: "h",
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: "hv",
  letters: "\u0195"
}, {
  base: "i",
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: "j",
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: "k",
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: "l",
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: "lj",
  letters: "\u01C9"
}, {
  base: "m",
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: "n",
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: "nj",
  letters: "\u01CC"
}, {
  base: "o",
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: "oi",
  letters: "\u01A3"
}, {
  base: "ou",
  letters: "\u0223"
}, {
  base: "oo",
  letters: "\uA74F"
}, {
  base: "p",
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: "q",
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: "r",
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: "s",
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: "t",
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: "tz",
  letters: "\uA729"
}, {
  base: "u",
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: "v",
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: "vy",
  letters: "\uA761"
}, {
  base: "w",
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: "x",
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: "y",
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: "z",
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp("[" + diacritics.map(function (d) {
  return d.letters;
}).join("") + "]", "g");
var diacriticToBase = {};

for (i = 0; i < diacritics.length; i++) {
  diacritic = diacritics[i];

  for (j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics2(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = (0, import_memoize_one.default)(stripDiacritics);

var trimString = function trimString2(str) {
  return str.replace(/^\s+|\s+$/g, "");
};

var defaultStringify = function defaultStringify2(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter2(config) {
  return function (option, rawInput) {
    if (option.data.__isNew__) return true;

    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: "any"
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _excluded3 = ["innerRef"];

function DummyInput(_ref3) {
  var innerRef = _ref3.innerRef,
      props = (0, import_objectWithoutProperties3.default)(_ref3, _excluded3);
  var filteredProps = removeProps(props, "onExited", "in", "enter", "exit", "appear");
  return (0, import_react5.jsx)("input", (0, import_extends2.default)({
    ref: innerRef
  }, filteredProps, {
    css: /* @__PURE__ */(0, import_react5.css)({
      label: "dummyInput",
      background: 0,
      border: 0,
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      width: 1,
      color: "transparent",
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, false ? "" : ";label:DummyInput;", false ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll2(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref3) {
  var isEnabled = _ref3.isEnabled,
      onBottomArrive = _ref3.onBottomArrive,
      onBottomLeave = _ref3.onBottomLeave,
      onTopArrive = _ref3.onTopArrive,
      onTopLeave = _ref3.onTopLeave;
  var isBottom = (0, import_react4.useRef)(false);
  var isTop = (0, import_react4.useRef)(false);
  var touchStart = (0, import_react4.useRef)(0);
  var scrollTarget = (0, import_react4.useRef)(null);
  var handleEventDelta = (0, import_react4.useCallback)(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = (0, import_react4.useCallback)(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = (0, import_react4.useCallback)(function (event) {
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = (0, import_react4.useCallback)(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = (0, import_react4.useCallback)(function (el) {
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false;
    el.addEventListener("wheel", onWheel, notPassive);
    el.addEventListener("touchstart", onTouchStart, notPassive);
    el.addEventListener("touchmove", onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = (0, import_react4.useCallback)(function (el) {
    if (!el) return;
    el.removeEventListener("wheel", onWheel, false);
    el.removeEventListener("touchstart", onTouchStart, false);
    el.removeEventListener("touchmove", onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  (0, import_react4.useEffect)(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
var LOCK_STYLES = {
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  height: "100%"
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};

function useScrollLock(_ref3) {
  var isEnabled = _ref3.isEnabled,
      _ref$accountForScroll = _ref3.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = (0, import_react4.useRef)({});
  var scrollTarget = (0, import_react4.useRef)(null);
  var addScrollLock = (0, import_react4.useCallback)(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    if (target && isTouchDevice()) {
      target.addEventListener("touchmove", preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }

    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = (0, import_react4.useCallback)(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    if (target && isTouchDevice()) {
      target.removeEventListener("touchmove", preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener("touchmove", allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  (0, import_react4.useEffect)(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

var blurSelectInput = function blurSelectInput2() {
  return document.activeElement && document.activeElement.blur();
};

var _ref22 = false ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9ICgpID0+XG4gIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmOiBSZWZDYWxsYmFjazxIVE1MRWxlbWVudD4gPSAoZWxlbWVudCkgPT4ge1xuICAgIHNldFNjcm9sbENhcHR1cmVUYXJnZXQoZWxlbWVudCk7XG4gICAgc2V0U2Nyb2xsTG9ja1RhcmdldChlbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtsb2NrRW5hYmxlZCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtibHVyU2VsZWN0SW5wdXR9XG4gICAgICAgICAgY3NzPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAwLCBib3R0b206IDAsIHJpZ2h0OiAwLCB0b3A6IDAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7Y2hpbGRyZW4odGFyZ2V0UmVmKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__2
};

function ScrollManager(_ref3) {
  var children = _ref3.children,
      lockEnabled = _ref3.lockEnabled,
      _ref$captureEnabled = _ref3.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref3.onBottomArrive,
      onBottomLeave = _ref3.onBottomLeave,
      onTopArrive = _ref3.onTopArrive,
      onTopLeave = _ref3.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive,
    onBottomLeave,
    onTopArrive,
    onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef2(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return (0, import_react5.jsx)(import_react4.Fragment, null, lockEnabled && (0, import_react5.jsx)("div", {
    onClick: blurSelectInput,
    css: _ref22
  }), children(targetRef));
}

var formatGroupLabel = function formatGroupLabel2(group) {
  return group.label;
};

var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};

var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};

var isOptionDisabled = function isOptionDisabled2(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css2,
  valueContainer: valueContainerCSS
};

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};

  var styles = _objectSpread2({}, source);

  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;

    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
};
var borderRadius = 4;
var baseUnit = 4;
var controlHeight = 38;
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit,
  controlHeight,
  menuGutter
};
var defaultTheme = {
  borderRadius,
  colors,
  spacing
};
var defaultProps = {
  "aria-live": "polite",
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return "No options";
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function screenReaderStatus(_ref3) {
    var count = _ref3.count;
    return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel2(props, option);
  var value = getOptionValue2(props, option);
  return {
    type: "option",
    data: option,
    isDisabled,
    isSelected,
    label,
    value,
    index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ("options" in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption2) {
        return isFocusable(props, categorizedOption2);
      });
      return categorizedOptions.length > 0 ? {
        type: "group",
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : void 0;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : void 0;
  }).filter(notNullish);
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === "group") {
      optionsAccumulator.push.apply(optionsAccumulator, (0, import_toConsumableArray.default)(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? "" : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label,
    value,
    data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options2) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options2.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options2[0];
}

var getOptionLabel2 = function getOptionLabel3(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue2 = function getOptionValue3(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === "function" ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === "function") {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue2(props, option);
  return selectValue.some(function (i) {
    return getOptionValue2(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions2(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === void 0) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select = /* @__PURE__ */function (_Component) {
  (0, import_inherits2.default)(Select2, _Component);

  var _super = _createSuper(Select2);

  function Select2(_props) {
    var _this;

    (0, import_classCallCheck2.default)(this, Select2);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = "";
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange2 = _this$props.onChange,
          name = _this$props.name;
      actionMeta.name = name;

      _this.ariaOnChange(newValue, actionMeta);

      onChange2(newValue, actionMeta);
    };

    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti,
          inputValue = _this$props2.inputValue;

      _this.onInputChange("", {
        action: "set-value",
        prevInputValue: inputValue
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      }

      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action,
        option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
      var selectValue = _this.state.selectValue;

      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);

      var isDisabled = _this.isOptionDisabled(newValue, selectValue);

      if (deselected) {
        var candidate = _this.getOptionValue(newValue);

        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), "deselect-option", newValue);
      } else if (!isDisabled) {
        if (isMulti) {
          _this.setValue(multiValueAsValue([].concat((0, import_toConsumableArray.default)(selectValue), [newValue])), "select-option", newValue);
        } else {
          _this.setValue(singleValueAsValue(newValue), "select-option");
        }
      } else {
        _this.ariaOnChange(singleValueAsValue(newValue), {
          action: "select-option",
          option: newValue,
          name
        });

        return;
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);

      _this.onChange(newValue, {
        action: "remove-value",
        removedValue
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;

      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
        action: "clear",
        removedValues: selectValue
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);

      _this.onChange(newValue, {
        action: "pop-value",
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel2(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue2(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = "border-box";
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return defaultComponents(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value
        }, actionMeta)
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu("first");
        }
      } else {
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          _this.onMenuClose();
        }
      }

      if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu("first");
      }

      event.preventDefault();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      if (event && event.type === "mousedown" && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.preventDefault();
      _this.openAfterFocus = false;

      if (event.type === "touchend") {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === "boolean") {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === "function") {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref23) {
      var touches = _ref23.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: "input-change",
        prevInputValue
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu("first");
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;

      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange("", {
        action: "input-blur",
        prevInputValue
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === "function") {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      }

      _this.blockOptionHover = true;

      switch (event.key) {
        case "ArrowLeft":
          if (!isMulti || inputValue) return;

          _this.focusValue("previous");

          break;

        case "ArrowRight":
          if (!isMulti || inputValue) return;

          _this.focusValue("next");

          break;

        case "Delete":
        case "Backspace":
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case "Tab":
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case "Enter":
          if (event.keyCode === 229) {
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case "Escape":
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange("", {
              action: "menu-close",
              prevInputValue: inputValue
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case " ":
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu("first");

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case "ArrowUp":
          if (menuIsOpen) {
            _this.focusOption("up");
          } else {
            _this.openMenu("last");
          }

          break;

        case "ArrowDown":
          if (menuIsOpen) {
            _this.focusOption("down");
          } else {
            _this.openMenu("first");
          }

          break;

        case "PageUp":
          if (!menuIsOpen) return;

          _this.focusOption("pageup");

          break;

        case "PageDown":
          if (!menuIsOpen) return;

          _this.focusOption("pagedown");

          break;

        case "Home":
          if (!menuIsOpen) return;

          _this.focusOption("first");

          break;

        case "End":
          if (!menuIsOpen) return;

          _this.focusOption("last");

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    return _this;
  }

  (0, import_createClass2.default)(Select2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        document.addEventListener("scroll", this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;

      if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      }

      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener("scroll", this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === "first" ? 0 : focusableOptions.length - 1;

      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue;
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case "previous":
          if (focusedIndex === 0) {
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case "next":
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options2 = this.getFocusableOptions();
      if (!options2.length) return;
      var nextFocus = 0;
      var focusedIndex = options2.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
      }

      if (direction === "up") {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options2.length - 1;
      } else if (direction === "down") {
        nextFocus = (focusedIndex + 1) % options2.length;
      } else if (direction === "pageup") {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === "pagedown") {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options2.length - 1) nextFocus = options2.length - 1;
      } else if (direction === "last") {
        nextFocus = options2.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options2[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      if (!this.props.theme) {
        return defaultTheme;
      }

      if (typeof this.props.theme === "function") {
        return this.props.theme(defaultTheme);
      }

      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options2 = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue,
        cx,
        getStyles,
        getValue,
        hasValue,
        isMulti,
        isRtl,
        options: options2,
        selectOption,
        selectProps: props,
        setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
          isClearable2 = _this$props7.isClearable,
          isMulti = _this$props7.isMulti;
      if (isClearable2 === void 0) return isMulti;
      return isClearable2;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled3(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === "function") {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel3(data) {
      return this.props.formatGroupLabel(data);
    }
  }, {
    key: "startListeningComposition",
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener("compositionstart", this.onCompositionStart, false);
        document.addEventListener("compositionend", this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener("compositionstart", this.onCompositionStart);
        document.removeEventListener("compositionend", this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener("touchstart", this.onTouchStart, false);
        document.addEventListener("touchmove", this.onTouchMove, false);
        document.addEventListener("touchend", this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener("touchstart", this.onTouchStart);
        document.removeEventListener("touchmove", this.onTouchMove);
        document.removeEventListener("touchend", this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form,
          menuIsOpen = _this$props8.menuIsOpen;

      var _this$getComponents = this.getComponents(),
          Input3 = _this$getComponents.Input;

      var _this$state4 = this.state,
          inputIsHidden = _this$state4.inputIsHidden,
          ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId("input");

      var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
        "aria-autocomplete": "list",
        "aria-expanded": menuIsOpen,
        "aria-haspopup": true,
        "aria-errormessage": this.props["aria-errormessage"],
        "aria-invalid": this.props["aria-invalid"],
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        role: "combobox"
      }, menuIsOpen && {
        "aria-controls": this.getElementId("listbox"),
        "aria-owns": this.getElementId("listbox")
      }), !isSearchable && {
        "aria-readonly": true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus" && {
        "aria-describedby": this.getElementId("live-region")
      } : {
        "aria-describedby": this.getElementId("placeholder")
      });

      if (!isSearchable) {
        return /* @__PURE__ */React.createElement(DummyInput, (0, import_extends2.default)({
          id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex,
          inputMode: "none",
          form,
          value: ""
        }, ariaAttributes));
      }

      return /* @__PURE__ */React.createElement(Input3, (0, import_extends2.default)({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id,
        innerRef: this.getInputRef,
        isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex,
        form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue3 = _this$getComponents2.MultiValue,
          MultiValueContainer2 = _this$getComponents2.MultiValueContainer,
          MultiValueLabel2 = _this$getComponents2.MultiValueLabel,
          MultiValueRemove2 = _this$getComponents2.MultiValueRemove,
          SingleValue3 = _this$getComponents2.SingleValue,
          Placeholder3 = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
          selectValue = _this$state5.selectValue,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /* @__PURE__ */React.createElement(Placeholder3, (0, import_extends2.default)({}, commonProps, {
          key: "placeholder",
          isDisabled,
          isFocused,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), placeholder);
      }

      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /* @__PURE__ */React.createElement(MultiValue3, (0, import_extends2.default)({}, commonProps, {
            components: {
              Container: MultiValueContainer2,
              Label: MultiValueLabel2,
              Remove: MultiValueRemove2
            },
            isFocused: isOptionFocused,
            isDisabled,
            key,
            index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, "value"));
        });
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /* @__PURE__ */React.createElement(SingleValue3, (0, import_extends2.default)({}, commonProps, {
        data: singleValue,
        isDisabled
      }), this.formatOptionLabel(singleValue, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator3 = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator3 || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */React.createElement(ClearIndicator3, (0, import_extends2.default)({}, commonProps, {
        innerProps,
        isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator3 = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator3 || !isLoading) return null;
      var innerProps = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */React.createElement(LoadingIndicator3, (0, import_extends2.default)({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator3 = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator3 = _this$getComponents5.IndicatorSeparator;

      if (!DropdownIndicator3 || !IndicatorSeparator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /* @__PURE__ */React.createElement(IndicatorSeparator3, (0, import_extends2.default)({}, commonProps, {
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator3 = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator3) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */React.createElement(DropdownIndicator3, (0, import_extends2.default)({}, commonProps, {
        innerProps,
        isDisabled,
        isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group3 = _this$getComponents7.Group,
          GroupHeading3 = _this$getComponents7.GroupHeading,
          Menu3 = _this$getComponents7.Menu,
          MenuList3 = _this$getComponents7.MenuList,
          MenuPortal2 = _this$getComponents7.MenuPortal,
          LoadingMessage3 = _this$getComponents7.LoadingMessage,
          NoOptionsMessage3 = _this$getComponents7.NoOptionsMessage,
          Option3 = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage2 = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage2 = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      var render = function render2(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? void 0 : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? void 0 : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId("option"), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /* @__PURE__ */React.createElement(Option3, (0, import_extends2.default)({}, commonProps, {
          innerProps,
          data,
          isDisabled,
          isSelected,
          key: optionId,
          label,
          type,
          value,
          isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : void 0
        }), _this4.formatOptionLabel(props.data, "menu"));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === "group") {
            var _data = item.data,
                options2 = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId("group"), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /* @__PURE__ */React.createElement(Group3, (0, import_extends2.default)({}, commonProps, {
              key: groupId,
              data: _data,
              options: options2,
              Heading: GroupHeading3,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === "option") {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage2({
          inputValue
        });
        if (message === null) return null;
        menuUI = /* @__PURE__ */React.createElement(LoadingMessage3, commonProps, message);
      } else {
        var _message = noOptionsMessage2({
          inputValue
        });

        if (_message === null) return null;
        menuUI = /* @__PURE__ */React.createElement(NoOptionsMessage3, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight,
        maxMenuHeight,
        menuPlacement,
        menuPosition,
        menuShouldScrollIntoView
      };
      var menuElement = /* @__PURE__ */React.createElement(MenuPlacer, (0, import_extends2.default)({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
        return /* @__PURE__ */React.createElement(Menu3, (0, import_extends2.default)({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove,
            id: _this4.getElementId("listbox")
          },
          isLoading,
          placement
        }), /* @__PURE__ */React.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /* @__PURE__ */React.createElement(MenuList3, (0, import_extends2.default)({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading,
            maxHeight,
            focusedOption
          }), menuUI);
        }));
      });
      return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */React.createElement(MenuPortal2, (0, import_extends2.default)({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement,
        menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /* @__PURE__ */React.createElement("input", {
            name,
            type: "hidden",
            value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /* @__PURE__ */React.createElement("input", {
              key: "i-".concat(i),
              name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /* @__PURE__ */React.createElement("input", {
            name,
            type: "hidden"
          });
          return /* @__PURE__ */React.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";

        return /* @__PURE__ */React.createElement("input", {
          name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
          ariaSelection = _this$state6.ariaSelection,
          focusedOption = _this$state6.focusedOption,
          focusedValue = _this$state6.focusedValue,
          isFocused = _this$state6.isFocused,
          selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /* @__PURE__ */React.createElement(LiveRegion, (0, import_extends2.default)({}, commonProps, {
        id: this.getElementId("live-region"),
        ariaSelection,
        focusedOption,
        focusedValue,
        isFocused,
        selectValue,
        focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control3 = _this$getComponents8.Control,
          IndicatorsContainer3 = _this$getComponents8.IndicatorsContainer,
          SelectContainer3 = _this$getComponents8.SelectContainer,
          ValueContainer3 = _this$getComponents8.ValueContainer;

      var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */React.createElement(SelectContainer3, (0, import_extends2.default)({}, commonProps, {
        className,
        innerProps: {
          id,
          onKeyDown: this.onKeyDown
        },
        isDisabled,
        isFocused
      }), this.renderLiveRegion(), /* @__PURE__ */React.createElement(Control3, (0, import_extends2.default)({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled,
        isFocused,
        menuIsOpen
      }), /* @__PURE__ */React.createElement(ValueContainer3, (0, import_extends2.default)({}, commonProps, {
        isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */React.createElement(IndicatorsContainer3, (0, import_extends2.default)({}, commonProps, {
        isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
          ariaSelection = state.ariaSelection,
          isFocused = state.isFocused,
          prevWasFocused = state.prevWasFocused;
      var options2 = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue,
          isMulti = props.isMulti;
      var selectValue = cleanValue(value);
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options2 !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue,
          focusedOption,
          focusedValue,
          clearFocusValueOnUpdate: false
        };
      }

      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: void 0
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;

      if (isFocused && !hasKeptFocus) {
        newAriaSelection = {
          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: "initial-input-focus"
        };
        hasKeptFocus = !prevWasFocused;
      }

      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === "initial-input-focus") {
        newAriaSelection = null;
      }

      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select2;
}(import_react4.Component);

Select.defaultProps = defaultProps;
var diacritic;
var j;
var i; // node_modules/react-select/dist/react-select.esm.js

var import_extends3 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/extends"));

var React2 = __toESM(require("react@16.14.0"));

var import_react6 = require("react@16.14.0");

var import_classCallCheck3 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/classCallCheck"));

var import_createClass3 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/createClass"));

var import_inherits3 = __toESM(require("@babel/runtime@7.19.0/helpers/esm/inherits"));

var import_react7 = __toESM(require_emotion_react_cjs());

var import_cache = __toESM(require_emotion_cache_cjs());

var import_memoize_one2 = __toESM(require("memoize-one@5.2.1"));

var import_slicedToArray3 = require("@babel/runtime@7.19.0/helpers/esm/slicedToArray");

var import_objectWithoutProperties4 = require("@babel/runtime@7.19.0/helpers/esm/objectWithoutProperties");

var import_toConsumableArray2 = require("@babel/runtime@7.19.0/helpers/esm/toConsumableArray");

var import_taggedTemplateLiteral2 = require("@babel/runtime@7.19.0/helpers/esm/taggedTemplateLiteral");

var import_typeof2 = require("@babel/runtime@7.19.0/helpers/esm/typeof");

var import_defineProperty2 = require("@babel/runtime@7.19.0/helpers/esm/defineProperty");

var import_react_dom2 = require("react-dom@16.14.0");

var StateManagedSelect = /* @__PURE__ */(0, import_react6.forwardRef)(function (props, ref) {
  var baseSelectProps = useStateManager(props);
  return /* @__PURE__ */React2.createElement(Select, (0, import_extends3.default)({
    ref
  }, baseSelectProps));
});

var NonceProvider = /* @__PURE__ */function (_Component) {
  (0, import_inherits3.default)(NonceProvider2, _Component);

  var _super = _createSuper(NonceProvider2);

  function NonceProvider2(props) {
    var _this;

    (0, import_classCallCheck3.default)(this, NonceProvider2);
    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce, key) {
      return (0, import_cache.default)({
        nonce,
        key
      });
    };

    _this.createEmotionCache = (0, import_memoize_one2.default)(_this.createEmotionCache);
    return _this;
  }

  (0, import_createClass3.default)(NonceProvider2, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce, this.props.cacheKey);
      return /* @__PURE__ */React2.createElement(import_react7.CacheProvider, {
        value: emotionCache
      }, this.props.children);
    }
  }]);
  return NonceProvider2;
}(import_react6.Component);

var react_select_esm_default = StateManagedSelect; // .beyond/uimport/react-select.5.4.0.js

var react_select_5_4_0_default = react_select_esm_default;
module.exports = __toCommonJS(react_select_5_4_0_exports);
};

code(module, require);
return module.exports;
});

