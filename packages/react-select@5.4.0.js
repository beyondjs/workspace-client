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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// node_modules/@emotion/sheet/dist/emotion-sheet.cjs.dev.js
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
});

// node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js
var require_emotion_sheet_cjs = __commonJS({
  "node_modules/@emotion/sheet/dist/emotion-sheet.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_sheet_cjs_dev();
    }
  }
});

// node_modules/stylis/dist/umd/stylis.js
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
});

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.dev.js
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
});

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js
var require_emotion_weak_memoize_cjs = __commonJS({
  "node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_weak_memoize_cjs_dev();
    }
  }
});

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
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
});

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_memoize_cjs_dev();
    }
  }
});

// node_modules/@emotion/cache/dist/emotion-cache.cjs.dev.js
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
});

// node_modules/@emotion/cache/dist/emotion-cache.cjs.js
var require_emotion_cache_cjs = __commonJS({
  "node_modules/@emotion/cache/dist/emotion-cache.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_cache_cjs_dev();
    }
  }
});

// node_modules/@babel/runtime/helpers/extends.js
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
});

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.dev.js
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
});

// node_modules/@emotion/utils/dist/emotion-utils.cjs.dev.js
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
});

// node_modules/@emotion/utils/dist/emotion-utils.cjs.js
var require_emotion_utils_cjs = __commonJS({
  "node_modules/@emotion/utils/dist/emotion-utils.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_utils_cjs_dev();
    }
  }
});

// node_modules/@emotion/hash/dist/emotion-hash.cjs.dev.js
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
});

// node_modules/@emotion/hash/dist/emotion-hash.cjs.js
var require_emotion_hash_cjs = __commonJS({
  "node_modules/@emotion/hash/dist/emotion-hash.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_hash_cjs_dev();
    }
  }
});

// node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js
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
});

// node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
var require_emotion_unitless_cjs = __commonJS({
  "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_unitless_cjs_dev();
    }
  }
});

// node_modules/@emotion/serialize/dist/emotion-serialize.cjs.dev.js
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
});

// node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js
var require_emotion_serialize_cjs = __commonJS({
  "node_modules/@emotion/serialize/dist/emotion-serialize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_serialize_cjs_dev();
    }
  }
});

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.dev.js
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
});

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js
var require_emotion_use_insertion_effect_with_fallbacks_cjs = __commonJS({
  "node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_use_insertion_effect_with_fallbacks_cjs_dev();
    }
  }
});

// node_modules/@emotion/react/dist/emotion-element-b63ca7c6.cjs.dev.js
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
});

// node_modules/@emotion/react/dist/emotion-react.cjs.dev.js
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
});

// node_modules/@emotion/react/dist/emotion-react.cjs.js
var require_emotion_react_cjs = __commonJS({
  "node_modules/@emotion/react/dist/emotion-react.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_react_cjs_dev();
    }
  }
});

// .beyond/uimport/temp/react-select.5.4.0.js
var react_select_5_4_0_exports = {};
__export(react_select_5_4_0_exports, {
  NonceProvider: () => NonceProvider,
  components: () => components,
  createFilter: () => createFilter,
  default: () => react_select_5_4_0_default,
  defaultTheme: () => defaultTheme,
  mergeStyles: () => mergeStyles,
  useStateManager: () => useStateManager
});

// node_modules/react-select/dist/index-a7690a33.esm.js
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
};

// node_modules/react-select/dist/useStateManager-68425271.esm.js
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
}

// node_modules/react-select/dist/Select-54ac8379.esm.js
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
var i;

// node_modules/react-select/dist/react-select.esm.js
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
var react_select_esm_default = StateManagedSelect;

// .beyond/uimport/temp/react-select.5.4.0.js
var react_select_5_4_0_default = react_select_esm_default;
module.exports = __toCommonJS(react_select_5_4_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvRW51bS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1V0aWxpdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QcmVmaXhlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1NlcmlhbGl6ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9NaWRkbGV3YXJlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L2Vtb3Rpb24td2Vhay1tZW1vaXplLmNqcy5kZXYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vd2Vhay1tZW1vaXplL2Rpc3QvZW1vdGlvbi13ZWFrLW1lbW9pemUuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L2Vtb3Rpb24tdXRpbHMuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L2Vtb3Rpb24tdXRpbHMuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9lbW90aW9uLWhhc2guY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvZW1vdGlvbi1oYXNoLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L2Vtb3Rpb24tdW5pdGxlc3MuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L2Vtb3Rpb24tdW5pdGxlc3MuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmNqcy5kZXYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzL2Rpc3QvZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5janMuZGV2LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzL2Rpc3QvZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvZGlzdC9lbW90aW9uLWVsZW1lbnQtYjYzY2E3YzYuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmRldi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvcmVhY3Qtc2VsZWN0LjUuNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L2luZGV4LWE3NjkwYTMzLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvZGlzdC91c2VTdGF0ZU1hbmFnZXItNjg0MjUyNzEuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L1NlbGVjdC01NGFjODM3OS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmVzbS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRhZyIsInNoZWV0IiwiaSIsImRvY3VtZW50Iiwic3R5bGVTaGVldHMiLCJsZW5ndGgiLCJvd25lck5vZGUiLCJvcHRpb25zMiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJrZXkiLCJub25jZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJTdHlsZVNoZWV0IiwiX3RoaXMiLCJfaW5zZXJ0VGFnIiwiYmVmb3JlIiwidGFncyIsImluc2VydGlvblBvaW50IiwibmV4dFNpYmxpbmciLCJwcmVwZW5kIiwiY29udGFpbmVyIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsInB1c2giLCJpc1NwZWVkeSIsInNwZWVkeSIsImN0ciIsIl9wcm90byIsIlN0eWxlU2hlZXQyIiwicHJvdG90eXBlIiwiaHlkcmF0ZSIsIm5vZGVzIiwiZm9yRWFjaCIsImluc2VydCIsInJ1bGUiLCJjcmVhdGVTdHlsZUVsZW1lbnQiLCJpc0ltcG9ydFJ1bGUiLCJjaGFyQ29kZUF0IiwiX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlIiwiY29uc29sZSIsImVycm9yIiwic2hlZXRGb3JUYWciLCJpbnNlcnRSdWxlIiwiY3NzUnVsZXMiLCJlIiwidGVzdCIsImZsdXNoIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwibW9kdWxlMiIsInJlcXVpcmVfZW1vdGlvbl9zaGVldF9janNfZGV2IiwiciIsImEiLCJjIiwidCIsIm4iLCJzIiwidSIsIm8iLCJmIiwibCIsImgiLCJwIiwidiIsImIiLCJkIiwibSIsIncyIiwiayIsIk1hdGgiLCJhYnMiLCIkIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZyIsImFzc2lnbiIsImUyIiwicjIiLCJPIiwidHJpbSIsImV4ZWMiLCJhMiIsInJlcGxhY2UiLCJpbmRleE9mIiwic2xpY2UiLCJtYXAiLCJqb2luIiwiYzIiLCJ0MiIsIm4yIiwiczIiLCJpMiIsInJvb3QiLCJwYXJlbnQiLCJ0eXBlIiwicHJvcHMiLCJjaGlsZHJlbiIsImxpbmUiLCJjb2x1bW4iLCJyZXR1cm4iLCJOIiwiQyIsIk0iLCJFIiwiTCIsIloiLCJWIiwiRyIsIksiLCJGIiwiXyIsIkQiLCJSIiwiSiIsIlciLCJJIiwiWCIsInUyIiwibzIiLCJmMiIsImwyIiwiaDIiLCJwMiIsInYyIiwiYjIiLCJkMiIsIm0yIiwidzMiLCJrMiIsImcyIiwieDIiLCJFMiIsInkyIiwiQSIsIlQiLCJCIiwiSCIsInJlIiwicSIsImFlIiwiZWUiLCJVIiwiUyIsIiQyIiwiaiIsIngiLCJjZSIsInRlIiwiUCIsInoiLCJ0MyIsInkiLCJZIiwicjMiLCJ3ZWFrTWVtb2l6ZSIsImZ1bmMiLCJjYWNoZSIsIldlYWtNYXAiLCJhcmciLCJoYXMiLCJnZXQiLCJyZXQiLCJzZXQiLCJkZWZhdWx0IiwicmVxdWlyZV9lbW90aW9uX3dlYWtfbWVtb2l6ZV9janNfZGV2IiwiZm4iLCJjcmVhdGUiLCJtZW1vaXplIiwicmVxdWlyZV9lbW90aW9uX21lbW9pemVfY2pzX2RldiIsInJlcXVpcmVfZW1vdGlvbl9zaGVldF9janMiLCJzdHlsaXMiLCJyZXF1aXJlX3N0eWxpcyIsInJlcXVpcmVfZW1vdGlvbl93ZWFrX21lbW9pemVfY2pzIiwicmVxdWlyZV9lbW90aW9uX21lbW9pemVfY2pzIiwiX19lc01vZHVsZSIsIndlYWtNZW1vaXplX19kZWZhdWx0IiwibWVtb2l6ZV9fZGVmYXVsdCIsImlkZW50aWZpZXJXaXRoUG9pbnRUcmFja2luZyIsImJlZ2luIiwicG9pbnRzIiwiaW5kZXgiLCJwcmV2aW91cyIsImNoYXJhY3RlciIsInBlZWsiLCJ0b2tlbiIsIm5leHQiLCJwb3NpdGlvbiIsInRvUnVsZXMiLCJwYXJzZWQiLCJkZWxpbWl0IiwiZnJvbSIsImdldFJ1bGVzIiwiZGVhbGxvYyIsImFsbG9jIiwiZml4ZWRFbGVtZW50cyIsImNvbXBhdCIsImVsZW1lbnQiLCJpc0ltcGxpY2l0UnVsZSIsInJ1bGVzIiwicGFyZW50UnVsZXMiLCJyZW1vdmVMYWJlbCIsImlnbm9yZUZsYWciLCJpc0lnbm9yaW5nQ29tbWVudCIsImNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtIiwidW5zYWZlUHNldWRvQ2xhc3NlcyIsIm1hdGNoIiwiaXNOZXN0ZWQiLCJjb21tZW50Q29udGFpbmVyIiwibm9kZSIsInVuc2FmZVBzZXVkb0NsYXNzIiwic3BsaXQiLCJpc1ByZXBlbmRlZFdpdGhSZWd1bGFyUnVsZXMiLCJudWxsaWZ5RWxlbWVudCIsImluY29ycmVjdEltcG9ydEFsYXJtIiwiaXNCcm93c2VyIiwiZ2V0U2VydmVyU3R5bGlzQ2FjaGUiLCJuYW1lIiwiZGVmYXVsdFN0eWxpc1BsdWdpbnMiLCJwcmVmaXhlciIsImNyZWF0ZUNhY2hlMiIsIkVycm9yIiwic3NyU3R5bGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiY2FsbCIsImRhdGFFbW90aW9uQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiaGVhZCIsInN0eWxpc1BsdWdpbnMiLCJpbnNlcnRlZCIsIm5vZGVzVG9IeWRyYXRlIiwiYXR0cmliIiwiX2luc2VydCIsIm9tbmlwcmVzZW50UGx1Z2lucyIsImN1cnJlbnRTaGVldCIsImZpbmFsaXppbmdQbHVnaW5zIiwic3RyaW5naWZ5IiwiQ09NTUVOVCIsInJ1bGVzaGVldCIsInNlcmlhbGl6ZXIiLCJtaWRkbGV3YXJlIiwiY29uY2F0Iiwic3R5bGlzJDEiLCJzdHlsZXMiLCJzZXJpYWxpemUiLCJjb21waWxlIiwic2VsZWN0b3IiLCJzZXJpYWxpemVkIiwic2hlZXQyIiwic2hvdWxkQ2FjaGUiLCJfZmluYWxpemluZ1BsdWdpbnMiLCJfc2VyaWFsaXplciIsIl9zdHlsaXMiLCJzZXJ2ZXJTdHlsaXNDYWNoZSIsImdldFJ1bGVzMiIsInJlZ2lzdGVyZWQiLCJyZXF1aXJlX2Vtb3Rpb25fY2FjaGVfY2pzX2RldiIsIl9leHRlbmRzNCIsImJpbmQiLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGx5IiwiaG9pc3ROb25SZWFjdFN0YXRpY3MkMSIsInJlcXVpcmUiLCJob2lzdE5vblJlYWN0U3RhdGljc19fZGVmYXVsdCIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwicmVnaXN0ZXJlZFN0eWxlcyIsImNsYXNzTmFtZXMyIiwicmF3Q2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwicmVnaXN0ZXJTdHlsZXMiLCJpc1N0cmluZ1RhZyIsImluc2VydFN0eWxlcyIsInN0eWxlc0ZvclNTUiIsImN1cnJlbnQiLCJtYXliZVN0eWxlcyIsImdldFJlZ2lzdGVyZWRTdHlsZXMiLCJyZXF1aXJlX2Vtb3Rpb25fdXRpbHNfY2pzX2RldiIsInN0ciIsImxlbiIsInRvU3RyaW5nIiwibXVybXVyMiIsInJlcXVpcmVfZW1vdGlvbl9oYXNoX2Nqc19kZXYiLCJ1bml0bGVzc0tleXMiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImJvcmRlckltYWdlT3V0c2V0IiwiYm9yZGVySW1hZ2VTbGljZSIsImJvcmRlckltYWdlV2lkdGgiLCJib3hGbGV4IiwiYm94RmxleEdyb3VwIiwiYm94T3JkaW5hbEdyb3VwIiwiY29sdW1uQ291bnQiLCJjb2x1bW5zIiwiZmxleCIsImZsZXhHcm93IiwiZmxleFBvc2l0aXZlIiwiZmxleFNocmluayIsImZsZXhOZWdhdGl2ZSIsImZsZXhPcmRlciIsImdyaWRSb3ciLCJncmlkUm93RW5kIiwiZ3JpZFJvd1NwYW4iLCJncmlkUm93U3RhcnQiLCJncmlkQ29sdW1uIiwiZ3JpZENvbHVtbkVuZCIsImdyaWRDb2x1bW5TcGFuIiwiZ3JpZENvbHVtblN0YXJ0IiwibXNHcmlkUm93IiwibXNHcmlkUm93U3BhbiIsIm1zR3JpZENvbHVtbiIsIm1zR3JpZENvbHVtblNwYW4iLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm9wYWNpdHkiLCJvcmRlciIsIm9ycGhhbnMiLCJ0YWJTaXplIiwid2lkb3dzIiwiekluZGV4Iiwiem9vbSIsIldlYmtpdExpbmVDbGFtcCIsImZpbGxPcGFjaXR5IiwiZmxvb2RPcGFjaXR5Iiwic3RvcE9wYWNpdHkiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0Iiwic3Ryb2tlTWl0ZXJsaW1pdCIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXaWR0aCIsInJlcXVpcmVfZW1vdGlvbl91bml0bGVzc19janNfZGV2IiwiaGFzaFN0cmluZyIsInJlcXVpcmVfZW1vdGlvbl9oYXNoX2NqcyIsInVuaXRsZXNzIiwicmVxdWlyZV9lbW90aW9uX3VuaXRsZXNzX2NqcyIsImhhc2hTdHJpbmdfX2RlZmF1bHQiLCJ1bml0bGVzc19fZGVmYXVsdCIsIklMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SIiwiVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IiLCJoeXBoZW5hdGVSZWdleCIsImFuaW1hdGlvblJlZ2V4IiwiaXNDdXN0b21Qcm9wZXJ0eSIsInByb3BlcnR5IiwiaXNQcm9jZXNzYWJsZVZhbHVlIiwicHJvY2Vzc1N0eWxlTmFtZSIsInN0eWxlTmFtZSIsInRvTG93ZXJDYXNlIiwicHJvY2Vzc1N0eWxlVmFsdWUiLCJwMSIsImN1cnNvciIsImNvbnRlbnRWYWx1ZVBhdHRlcm4iLCJjb250ZW50VmFsdWVzIiwib2xkUHJvY2Vzc1N0eWxlVmFsdWUiLCJtc1BhdHRlcm4iLCJoeXBoZW5QYXR0ZXJuIiwiaHlwaGVuYXRlZENhY2hlIiwiY2hhckF0IiwicHJvY2Vzc2VkIiwiX2NoYXIiLCJ0b1VwcGVyQ2FzZSIsIm5vQ29tcG9uZW50U2VsZWN0b3JNZXNzYWdlIiwibWVyZ2VkUHJvcHMiLCJpbnRlcnBvbGF0aW9uIiwiX19lbW90aW9uX3N0eWxlcyIsImFuaW0iLCJjcmVhdGVTdHJpbmdGcm9tT2JqZWN0IiwicHJldmlvdXNDdXJzb3IiLCJyZXN1bHQiLCJoYW5kbGVJbnRlcnBvbGF0aW9uIiwibWF0Y2hlZCIsInJlcGxhY2VkIiwiZmFrZVZhck5hbWUiLCJjYWNoZWQiLCJvYmoiLCJzdHJpbmciLCJpc0FycmF5IiwiX2tleSIsIl9pIiwiaW50ZXJwb2xhdGVkIiwibGFiZWxQYXR0ZXJuIiwic291cmNlTWFwUGF0dGVybiIsInNlcmlhbGl6ZVN0eWxlcyIsImFyZ3MiLCJzdHJpbmdNb2RlIiwic3RyaW5ncyIsInJhdyIsInNvdXJjZU1hcCIsIm1hdGNoMiIsImxhc3RJbmRleCIsImlkZW50aWZpZXJOYW1lIiwicmVxdWlyZV9lbW90aW9uX3NlcmlhbGl6ZV9janNfZGV2IiwiUmVhY3QzIiwia2V5cyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJmcmVlemUiLCJSZWFjdF9fbmFtZXNwYWNlIiwic3luY0ZhbGxiYWNrIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayIsInVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayIsInVzZUxheW91dEVmZmVjdCIsInJlcXVpcmVfZW1vdGlvbl91c2VfaW5zZXJ0aW9uX2VmZmVjdF93aXRoX2ZhbGxiYWNrc19janNfZGV2IiwicmVxdWlyZV9lbW90aW9uX2NhY2hlX2NqcyIsInJlcXVpcmVfZXh0ZW5kcyIsIl9pc29sYXRlZEhucnNfZGlzdF9lbW90aW9uUmVhY3RfaXNvbGF0ZWRIbnJzIiwicmVxdWlyZV9lbW90aW9uX3JlYWN0X2lzb2xhdGVkX2hucnNfY2pzX2RldiIsInV0aWxzIiwicmVxdWlyZV9lbW90aW9uX3V0aWxzX2NqcyIsInJlcXVpcmVfZW1vdGlvbl9zZXJpYWxpemVfY2pzIiwidXNlSW5zZXJ0aW9uRWZmZWN0V2l0aEZhbGxiYWNrcyIsInJlcXVpcmVfZW1vdGlvbl91c2VfaW5zZXJ0aW9uX2VmZmVjdF93aXRoX2ZhbGxiYWNrc19janMiLCJjcmVhdGVDYWNoZV9fZGVmYXVsdCIsIkVtb3Rpb25DYWNoZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiSFRNTEVsZW1lbnQiLCJkaXNwbGF5TmFtZSIsIkNhY2hlUHJvdmlkZXIyIiwiUHJvdmlkZXIiLCJfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUiLCJ1c2VDb250ZXh0Iiwid2l0aEVtb3Rpb25DYWNoZSIsImZvcndhcmRSZWYiLCJyZWYiLCJUaGVtZUNvbnRleHQiLCJ1c2VUaGVtZSIsImdldFRoZW1lIiwib3V0ZXJUaGVtZSIsInRoZW1lIiwibWVyZ2VkVGhlbWUiLCJjcmVhdGVDYWNoZVdpdGhUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDb21wb25lbnQ0IiwiY29tcG9uZW50TmFtZSIsInJlbmRlciIsIldpdGhUaGVtZSIsImdldExhc3RQYXJ0IiwiZnVuY3Rpb25OYW1lIiwicGFydHMiLCJnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUiLCJpbnRlcm5hbFJlYWN0RnVuY3Rpb25OYW1lcyIsIlNldCIsInNhbml0aXplSWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJnZXRMYWJlbEZyb21TdGFja1RyYWNlIiwic3RhY2tUcmFjZSIsImxpbmVzIiwidHlwZVByb3BOYW1lIiwibGFiZWxQcm9wTmFtZSIsImNyZWF0ZUVtb3Rpb25Qcm9wcyIsImNzcyIsIm5ld1Byb3BzIiwibGFiZWwiLCJzdGFjayIsIkluc2VydGlvbiIsIl9yZWYzIiwiX3JlZjIzIiwic2VyaWFsaXplZE5hbWVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJFbW90aW9uIiwiY3NzUHJvcCIsIldyYXBwZWRDb21wb25lbnQiLCJsYWJlbEZyb21TdGFjayIsIkZyYWdtZW50IiwiQ2FjaGVQcm92aWRlciIsIndpdGhUaGVtZSIsImVtb3Rpb25FbGVtZW50IiwicmVxdWlyZV9lbW90aW9uX2VsZW1lbnRfYjYzY2E3YzZfY2pzX2RldiIsInBrZyIsInZlcnNpb24iLCJtYWluIiwibW9kdWxlIiwiYnJvd3NlciIsIndvcmtlciIsInR5cGVzIiwiZmlsZXMiLCJzaWRlRWZmZWN0cyIsImF1dGhvciIsImxpY2Vuc2UiLCJzY3JpcHRzIiwiZGVwZW5kZW5jaWVzIiwicGVlckRlcGVuZGVuY2llcyIsInJlYWN0IiwicGVlckRlcGVuZGVuY2llc01ldGEiLCJvcHRpb25hbCIsImRldkRlcGVuZGVuY2llcyIsInR5cGVzY3JpcHQiLCJyZXBvc2l0b3J5IiwicHVibGlzaENvbmZpZyIsImFjY2VzcyIsInByZWNvbnN0cnVjdCIsImVudHJ5cG9pbnRzIiwidW1kTmFtZSIsImVudkNvbmRpdGlvbnMiLCJleHRyYSIsImpzeDMiLCJhcmdzTGVuZ3RoIiwiY3JlYXRlRWxlbWVudEFyZ0FycmF5Iiwid2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsIiwiR2xvYmFsIiwic2VyaWFsaXplZFN0eWxlcyIsInNoZWV0UmVmIiwidXNlUmVmIiwiY29uc3RydWN0b3IiLCJyZWh5ZHJhdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzaGVldFJlZkN1cnJlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfbGVuIiwia2V5ZnJhbWVzMiIsImluc2VydGFibGUiLCJjc3M1IiwiY2xhc3NuYW1lcyIsImNscyIsInRvQWRkIiwiY2xhc3NuYW1lczIiLCJjc3M2Iiwic2VyaWFsaXplZEFyciIsInJ1bGVzMiIsInJlcyIsIkNsYXNzTmFtZXMyIiwiaGFzUmVuZGVyZWQiLCJjeCIsIl9sZW4yIiwiX2tleTIiLCJtZXJnZSIsImNvbnRlbnQiLCJlbGUiLCJpc0plc3QiLCJqZXN0IiwiZ2xvYmFsQ29udGV4dCIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJnbG9iYWxLZXkiLCJ3YXJuIiwiQ2xhc3NOYW1lcyIsImpzeCIsImtleWZyYW1lcyIsInJlcXVpcmVfZW1vdGlvbl9yZWFjdF9janNfZGV2IiwiX19leHBvcnQiLCJOb25jZVByb3ZpZGVyIiwiY29tcG9uZW50cyIsImNyZWF0ZUZpbHRlciIsImRlZmF1bHRUaGVtZSIsIm1lcmdlU3R5bGVzIiwidXNlU3RhdGVNYW5hZ2VyIiwiX190b0VTTSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwib3duS2V5cyIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX2dldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsInNlbGYyIiwiUmVmZXJlbmNlRXJyb3IiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiU3VwZXIiLCJOZXdUYXJnZXQiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9leGNsdWRlZCQzIiwibm9vcCIsInByZWZpeCIsInN0YXRlIiwiYXJyIiwiYXBwbHlQcmVmaXhUb05hbWUiLCJjbGVhblZhbHVlIiwiY2xlYW5Db21tb25Qcm9wcyIsImNsZWFyVmFsdWUiLCJnZXRTdHlsZXMiLCJnZXRWYWx1ZSIsImhhc1ZhbHVlIiwiaXNNdWx0aSIsImlzUnRsIiwib3B0aW9ucyIsInNlbGVjdE9wdGlvbiIsInNlbGVjdFByb3BzIiwic2V0VmFsdWUiLCJpbm5lclByb3BzIiwiX29iamVjdFNwcmVhZDIiLCJpbnB1dFZhbHVlIiwiYWN0aW9uTWV0YSIsIm9uSW5wdXRDaGFuZ2UiLCJfbmV3VmFsdWUiLCJlbCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJpc0RvY3VtZW50RWxlbWVudCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJ0b3AiLCJzY3JvbGxUbyIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImV4Y2x1ZGVTdGF0aWNQYXJlbnQiLCJvdmVyZmxvd1J4IiwicGFyZW50RWxlbWVudCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidG8iLCJkdXJhdGlvbiIsImNhbGxiYWNrIiwic3RhcnQiLCJnZXRTY3JvbGxUb3AiLCJjaGFuZ2UiLCJpbmNyZW1lbnQiLCJjdXJyZW50VGltZSIsInZhbCIsImVhc2VPdXRDdWJpYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGVTY3JvbGwiLCJtZW51RWwiLCJmb2N1c2VkRWwiLCJtZW51UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZvY3VzZWRSZWN0Iiwib3ZlclNjcm9sbCIsIm9mZnNldEhlaWdodCIsImJvdHRvbSIsIm1pbiIsIm9mZnNldFRvcCIsInNjcm9sbEhlaWdodCIsIm1heCIsInJlY3QiLCJoZWlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImNyZWF0ZUV2ZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwicGFzc2l2ZU9wdGlvbkFjY2Vzc2VkIiwicGFzc2l2ZSIsInciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN1cHBvcnRzUGFzc2l2ZUV2ZW50cyIsIml0ZW0iLCJtdWx0aVZhbHVlIiwic2luZ2xlVmFsdWUiLCJyZW1vdmVQcm9wcyIsInByb3BzT2JqIiwicHJvcGVydGllcyIsInByb3BzTWFwIiwiZW50cmllcyIsImluY2x1ZGVzIiwicmVkdWNlIiwiX3JlZjQiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJwbGFjZW1lbnQiLCJzaG91bGRTY3JvbGwiLCJpc0ZpeGVkUG9zaXRpb24iLCJzcGFjaW5nMiIsInNwYWNpbmciLCJzY3JvbGxQYXJlbnQiLCJnZXRTY3JvbGxQYXJlbnQiLCJkZWZhdWx0U3RhdGUiLCJvZmZzZXRQYXJlbnQiLCJfc2Nyb2xsUGFyZW50JGdldEJvdW4iLCJfbWVudUVsJGdldEJvdW5kaW5nQ2wiLCJtZW51Qm90dG9tIiwibWVudUhlaWdodCIsIm1lbnVUb3AiLCJfbWVudUVsJG9mZnNldFBhcmVudCQiLCJjb250YWluZXJUb3AiLCJ2aWV3SGVpZ2h0Iiwibm9ybWFsaXplZEhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhcnNlSW50IiwibWFyZ2luVG9wIiwidmlld1NwYWNlQWJvdmUiLCJ2aWV3U3BhY2VCZWxvdyIsInNjcm9sbFNwYWNlQWJvdmUiLCJzY3JvbGxTcGFjZUJlbG93Iiwic2Nyb2xsRG93biIsInNjcm9sbFVwIiwic2Nyb2xsRHVyYXRpb24iLCJhbmltYXRlZFNjcm9sbFRvIiwiY29uc3RyYWluZWRIZWlnaHQiLCJfY29uc3RyYWluZWRIZWlnaHQiLCJzcGFjZUFib3ZlIiwiY29udHJvbEhlaWdodCIsIl9jb25zdHJhaW5lZEhlaWdodDIiLCJwbGFjZW1lbnRUb0NTU1Byb3AiLCJjb2VyY2VQbGFjZW1lbnQiLCJtZW51Q1NTIiwiX3JlZjIkdGhlbWUiLCJib3JkZXJSYWRpdXMyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3JzMiIsImNvbG9ycyIsImFsaWduVG9Db250cm9sIiwibmV1dHJhbDAiLCJtZW51R3V0dGVyIiwiUG9ydGFsUGxhY2VtZW50Q29udGV4dCIsImdldFBvcnRhbFBsYWNlbWVudCIsIk1lbnVQbGFjZXIiLCJfQ29tcG9uZW50IiwiTWVudVBsYWNlcjIiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJtYXhNZW51SGVpZ2h0IiwiY29udGV4dCIsImdldFBsYWNlbWVudCIsIl90aGlzJHByb3BzIiwibWluTWVudUhlaWdodCIsIm1lbnVQbGFjZW1lbnQiLCJtZW51UG9zaXRpb24iLCJtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXciLCJnZXRNZW51UGxhY2VtZW50Iiwic2V0U3RhdGUiLCJnZXRVcGRhdGVkUHJvcHMiLCJwbGFjZXJQcm9wcyIsImltcG9ydF9yZWFjdDIiLCJjb250ZXh0VHlwZSIsIk1lbnUiLCJpbm5lclJlZiIsIm1lbnUiLCJtZW51TGlzdENTUyIsImJhc2VVbml0MiIsImJhc2VVbml0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsIk1lbnVMaXN0Iiwibm90aWNlQ1NTIiwiX3JlZjUiLCJfcmVmNSR0aGVtZSIsImNvbG9yIiwibmV1dHJhbDQwIiwicGFkZGluZyIsInRleHRBbGlnbiIsIm5vT3B0aW9uc01lc3NhZ2VDU1MiLCJsb2FkaW5nTWVzc2FnZUNTUyIsIk5vT3B0aW9uc01lc3NhZ2UiLCJkZWZhdWx0UHJvcHMiLCJMb2FkaW5nTWVzc2FnZSIsIm1lbnVQb3J0YWxDU1MiLCJfcmVmNiIsIm9mZnNldCIsIk1lbnVQb3J0YWwiLCJfQ29tcG9uZW50MiIsIk1lbnVQb3J0YWwyIiwiX3N1cGVyMiIsIl90aGlzMiIsIl9yZWY3IiwiaW5pdGlhbFBsYWNlbWVudCIsIl90aGlzJHByb3BzMiIsImFwcGVuZFRvIiwiY29udHJvbEVsZW1lbnQiLCJpc0ZpeGVkIiwiZ2V0Qm91bmRpbmdDbGllbnRPYmoiLCJzY3JvbGxEaXN0YW5jZSIsIm1lbnVXcmFwcGVyIiwiY29udGFpbmVyQ1NTIiwiaXNEaXNhYmxlZCIsImRpcmVjdGlvbiIsInBvaW50ZXJFdmVudHMiLCJTZWxlY3RDb250YWluZXIiLCJ2YWx1ZUNvbnRhaW5lckNTUyIsImNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSIsImFsaWduSXRlbXMiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJWYWx1ZUNvbnRhaW5lciIsImluZGljYXRvcnNDb250YWluZXJDU1MiLCJhbGlnblNlbGYiLCJJbmRpY2F0b3JzQ29udGFpbmVyIiwiaW5kaWNhdG9ycyIsIl90ZW1wbGF0ZU9iamVjdCIsIl9leGNsdWRlZCQyIiwiX3JlZjIiLCJfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyIsIlN2ZyIsInNpemUiLCJ2aWV3Qm94IiwiZm9jdXNhYmxlIiwiQ3Jvc3NJY29uIiwiRG93bkNoZXZyb24iLCJiYXNlQ1NTIiwiaXNGb2N1c2VkIiwiX3JlZjMkdGhlbWUiLCJuZXV0cmFsNjAiLCJuZXV0cmFsMjAiLCJ0cmFuc2l0aW9uIiwibmV1dHJhbDgwIiwiZHJvcGRvd25JbmRpY2F0b3JDU1MiLCJEcm9wZG93bkluZGljYXRvciIsImluZGljYXRvciIsImNsZWFySW5kaWNhdG9yQ1NTIiwiQ2xlYXJJbmRpY2F0b3IiLCJpbmRpY2F0b3JTZXBhcmF0b3JDU1MiLCJfcmVmNCR0aGVtZSIsImJhY2tncm91bmRDb2xvciIsIm5ldXRyYWwxMCIsIkluZGljYXRvclNlcGFyYXRvciIsImxvYWRpbmdEb3RBbmltYXRpb25zIiwibG9hZGluZ0luZGljYXRvckNTUyIsImZvbnRTaXplIiwibWFyZ2luUmlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiTG9hZGluZ0RvdCIsImRlbGF5IiwiYW5pbWF0aW9uIiwibWFyZ2luTGVmdCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJjc3MkMSIsIl9yZWYkdGhlbWUiLCJuZXV0cmFsNSIsImJvcmRlckNvbG9yIiwicHJpbWFyeSIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJib3hTaGFkb3ciLCJqdXN0aWZ5Q29udGVudCIsIm91dGxpbmUiLCJuZXV0cmFsMzAiLCJDb250cm9sIiwibWVudUlzT3BlbiIsImNvbnRyb2wiLCJfZXhjbHVkZWQkMSIsImdyb3VwQ1NTIiwiR3JvdXAiLCJIZWFkaW5nIiwiaGVhZGluZ1Byb3BzIiwiZ3JvdXAiLCJncm91cEhlYWRpbmdDU1MiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRleHRUcmFuc2Zvcm0iLCJHcm91cEhlYWRpbmciLCJfY2xlYW5Db21tb25Qcm9wcyIsImRhdGEiLCJfZXhjbHVkZWQiLCJpbnB1dENTUyIsIm1hcmdpbiIsInZpc2liaWxpdHkiLCJ0cmFuc2Zvcm0iLCJjb250YWluZXJTdHlsZSIsInNwYWNpbmdTdHlsZSIsImdyaWRBcmVhIiwiZm9udCIsIm1pbldpZHRoIiwiYm9yZGVyIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIndoaXRlU3BhY2UiLCJpbnB1dFN0eWxlIiwiaXNIaWRkZW4iLCJiYWNrZ3JvdW5kIiwiSW5wdXQiLCJpbnB1dENsYXNzTmFtZSIsImlucHV0IiwiZGlzYWJsZWQiLCJtdWx0aVZhbHVlQ1NTIiwibXVsdGlWYWx1ZUxhYmVsQ1NTIiwiY3JvcFdpdGhFbGxpcHNpcyIsInRleHRPdmVyZmxvdyIsIm11bHRpVmFsdWVSZW1vdmVDU1MiLCJkYW5nZXJMaWdodCIsImRhbmdlciIsIk11bHRpVmFsdWVHZW5lcmljIiwiTXVsdGlWYWx1ZUNvbnRhaW5lciIsIk11bHRpVmFsdWVMYWJlbCIsInJvbGUiLCJNdWx0aVZhbHVlIiwiY29tcG9uZW50czIiLCJyZW1vdmVQcm9wczMiLCJDb250YWluZXIiLCJMYWJlbCIsIlJlbW92ZSIsImltcG9ydF9yZWFjdCIsImVtb3Rpb25DeCIsIm9wdGlvbkNTUyIsImlzU2VsZWN0ZWQiLCJwcmltYXJ5MjUiLCJ1c2VyU2VsZWN0IiwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IiLCJwcmltYXJ5NTAiLCJPcHRpb24iLCJvcHRpb24iLCJwbGFjZWhvbGRlckNTUyIsIm5ldXRyYWw1MCIsIlBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXIiLCJjc3MyIiwibWF4V2lkdGgiLCJTaW5nbGVWYWx1ZSIsIk11bHRpVmFsdWVSZW1vdmUiLCJkZWZhdWx0Q29tcG9uZW50cyIsIl9leGNsdWRlZDIiLCJfcmVmJGRlZmF1bHRJbnB1dFZhbHUiLCJkZWZhdWx0SW5wdXRWYWx1ZSIsIl9yZWYkZGVmYXVsdE1lbnVJc09wZSIsImRlZmF1bHRNZW51SXNPcGVuIiwiX3JlZiRkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJwcm9wc0lucHV0VmFsdWUiLCJwcm9wc01lbnVJc09wZW4iLCJwcm9wc09uQ2hhbmdlIiwib25DaGFuZ2UiLCJwcm9wc09uSW5wdXRDaGFuZ2UiLCJwcm9wc09uTWVudUNsb3NlIiwib25NZW51Q2xvc2UiLCJwcm9wc09uTWVudU9wZW4iLCJvbk1lbnVPcGVuIiwicHJvcHNWYWx1ZSIsInJlc3RTZWxlY3RQcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJzdGF0ZUlucHV0VmFsdWUiLCJzZXRTdGF0ZUlucHV0VmFsdWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInN0YXRlTWVudUlzT3BlbiIsInNldFN0YXRlTWVudUlzT3BlbiIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic3RhdGVWYWx1ZSIsInNldFN0YXRlVmFsdWUiLCJvbkNoYW5nZTIiLCJ2YWx1ZTIiLCJuZXdWYWx1ZSIsIl9yZWYiLCJfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxIiwiQTExeVRleHQiLCJkZWZhdWx0QXJpYUxpdmVNZXNzYWdlcyIsImd1aWRhbmNlIiwiaXNTZWFyY2hhYmxlIiwidGFiU2VsZWN0c1ZhbHVlIiwiYWN0aW9uIiwiX3Byb3BzJGxhYmVsIiwibGFiZWxzIiwib25Gb2N1cyIsImZvY3VzZWQiLCJfcHJvcHMkbGFiZWwyIiwic2VsZWN0VmFsdWUiLCJnZXRBcnJheUluZGV4Iiwic3RhdHVzIiwib25GaWx0ZXIiLCJyZXN1bHRzTWVzc2FnZSIsIkxpdmVSZWdpb24iLCJhcmlhU2VsZWN0aW9uIiwiZm9jdXNlZE9wdGlvbiIsImZvY3VzZWRWYWx1ZSIsImZvY3VzYWJsZU9wdGlvbnMiLCJpZCIsImFyaWFMaXZlTWVzc2FnZXMiLCJnZXRPcHRpb25MYWJlbDQiLCJnZXRPcHRpb25MYWJlbCIsImlzT3B0aW9uRGlzYWJsZWQzIiwiaXNPcHRpb25EaXNhYmxlZCIsInNjcmVlblJlYWRlclN0YXR1czIiLCJzY3JlZW5SZWFkZXJTdGF0dXMiLCJhcmlhTGFiZWwiLCJhcmlhTGl2ZSIsIm1lc3NhZ2VzIiwiYXJpYVNlbGVjdGVkIiwibWVzc2FnZSIsInNlbGVjdGVkT3B0aW9ucyIsInJlbW92ZWRWYWx1ZSIsInJlbW92ZWRWYWx1ZXMiLCJhc09wdGlvbiIsInNlbGVjdGVkIiwibXVsdGlTZWxlY3RlZCIsIm9uQ2hhbmdlUHJvcHMiLCJhcmlhRm9jdXNlZCIsImZvY3VzTXNnIiwib25Gb2N1c1Byb3BzIiwiYXJpYVJlc3VsdHMiLCJyZXN1bHRzTXNnIiwiY291bnQiLCJhcmlhR3VpZGFuY2UiLCJndWlkYW5jZU1zZyIsImFyaWFDb250ZXh0IiwiU2NyZWVuUmVhZGVyVGV4dCIsImltcG9ydF9yZWFjdDQiLCJpc0luaXRpYWxGb2N1cyIsImRpYWNyaXRpY3MiLCJiYXNlIiwibGV0dGVycyIsImFueURpYWNyaXRpYyIsIlJlZ0V4cCIsImRpYWNyaXRpY1RvQmFzZSIsImRpYWNyaXRpYyIsInN0cmlwRGlhY3JpdGljcyIsIm1lbW9pemVkU3RyaXBEaWFjcml0aWNzRm9ySW5wdXQiLCJ0cmltU3RyaW5nIiwiZGVmYXVsdFN0cmluZ2lmeSIsImNvbmZpZyIsInJhd0lucHV0IiwiX19pc05ld19fIiwiX2lnbm9yZUNhc2UkaWdub3JlQWNjIiwiaWdub3JlQ2FzZSIsImlnbm9yZUFjY2VudHMiLCJtYXRjaEZyb20iLCJjYW5kaWRhdGUiLCJzdWJzdHIiLCJfZXhjbHVkZWQzIiwiZmlsdGVyZWRQcm9wcyIsImNhcmV0Q29sb3IiLCJjYW5jZWxTY3JvbGwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNFbmFibGVkIiwib25Cb3R0b21BcnJpdmUiLCJvbkJvdHRvbUxlYXZlIiwib25Ub3BBcnJpdmUiLCJvblRvcExlYXZlIiwiaXNCb3R0b20iLCJpc1RvcCIsInRvdWNoU3RhcnQiLCJzY3JvbGxUYXJnZXQiLCJoYW5kbGVFdmVudERlbHRhIiwiZGVsdGEiLCJfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQiLCJpc0RlbHRhUG9zaXRpdmUiLCJhdmFpbGFibGVTY3JvbGwiLCJzaG91bGRDYW5jZWxTY3JvbGwiLCJvbldoZWVsIiwiZGVsdGFZIiwib25Ub3VjaFN0YXJ0IiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJzdGFydExpc3RlbmluZyIsIm5vdFBhc3NpdmUiLCJzdG9wTGlzdGVuaW5nIiwiU1RZTEVfS0VZUyIsIkxPQ0tfU1RZTEVTIiwiYm94U2l6aW5nIiwidG90YWxTY3JvbGwiLCJjdXJyZW50U2Nyb2xsIiwibWF4VG91Y2hQb2ludHMiLCJjYW5Vc2VET00iLCJhY3RpdmVTY3JvbGxMb2NrcyIsImxpc3RlbmVyT3B0aW9ucyIsImNhcHR1cmUiLCJfcmVmJGFjY291bnRGb3JTY3JvbGwiLCJhY2NvdW50Rm9yU2Nyb2xsYmFycyIsIm9yaWdpbmFsU3R5bGVzIiwiYWRkU2Nyb2xsTG9jayIsInRvdWNoU2Nyb2xsVGFyZ2V0IiwidGFyZ2V0U3R5bGUiLCJjdXJyZW50UGFkZGluZyIsImNsaWVudFdpZHRoIiwiYWRqdXN0ZWRQYWRkaW5nIiwiaW5uZXJXaWR0aCIsImlzVG91Y2hEZXZpY2UiLCJwcmV2ZW50VG91Y2hNb3ZlIiwicHJldmVudEluZXJ0aWFTY3JvbGwiLCJhbGxvd1RvdWNoTW92ZSIsInJlbW92ZVNjcm9sbExvY2siLCJibHVyU2VsZWN0SW5wdXQiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsIl9yZWYyMiIsIl9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fMiIsImxvY2tFbmFibGVkIiwiX3JlZiRjYXB0dXJlRW5hYmxlZCIsImNhcHR1cmVFbmFibGVkIiwic2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCIsInVzZVNjcm9sbENhcHR1cmUiLCJzZXRTY3JvbGxMb2NrVGFyZ2V0IiwidXNlU2Nyb2xsTG9jayIsInRhcmdldFJlZiIsIm9uQ2xpY2siLCJmb3JtYXRHcm91cExhYmVsIiwiZ2V0T3B0aW9uTGFiZWwkMSIsImdldE9wdGlvblZhbHVlJDEiLCJkZWZhdWx0U3R5bGVzIiwiY2xlYXJJbmRpY2F0b3IiLCJkcm9wZG93bkluZGljYXRvciIsImdyb3VwSGVhZGluZyIsImluZGljYXRvcnNDb250YWluZXIiLCJpbmRpY2F0b3JTZXBhcmF0b3IiLCJsb2FkaW5nSW5kaWNhdG9yIiwibG9hZGluZ01lc3NhZ2UiLCJtZW51TGlzdCIsIm1lbnVQb3J0YWwiLCJtdWx0aVZhbHVlTGFiZWwiLCJtdWx0aVZhbHVlUmVtb3ZlIiwibm9PcHRpb25zTWVzc2FnZSIsInZhbHVlQ29udGFpbmVyIiwia2V5QXNTdHJpbmciLCJyc0NzcyIsInByaW1hcnk3NSIsIm5ldXRyYWw3MCIsIm5ldXRyYWw5MCIsImJhY2tzcGFjZVJlbW92ZXNWYWx1ZSIsImJsdXJJbnB1dE9uU2VsZWN0IiwiaXNUb3VjaENhcGFibGUiLCJjYXB0dXJlTWVudVNjcm9sbCIsImNsb3NlTWVudU9uU2VsZWN0IiwiY2xvc2VNZW51T25TY3JvbGwiLCJlc2NhcGVDbGVhcnNWYWx1ZSIsImZpbHRlck9wdGlvbiIsImdldE9wdGlvblZhbHVlIiwiaXNMb2FkaW5nIiwibWVudVNob3VsZEJsb2NrU2Nyb2xsIiwiaXNNb2JpbGVEZXZpY2UiLCJvcGVuTWVudU9uRm9jdXMiLCJvcGVuTWVudU9uQ2xpY2siLCJwYWdlU2l6ZSIsInRhYkluZGV4IiwiX2lzT3B0aW9uRGlzYWJsZWQiLCJfaXNPcHRpb25TZWxlY3RlZCIsImdldE9wdGlvbkxhYmVsMiIsImdldE9wdGlvblZhbHVlMiIsImdyb3VwT3JPcHRpb24iLCJncm91cE9yT3B0aW9uSW5kZXgiLCJjYXRlZ29yaXplZE9wdGlvbnMiLCJvcHRpb25JbmRleCIsInRvQ2F0ZWdvcml6ZWRPcHRpb24iLCJjYXRlZ29yaXplZE9wdGlvbjIiLCJpc0ZvY3VzYWJsZSIsImNhdGVnb3JpemVkT3B0aW9uIiwibm90TnVsbGlzaCIsIm9wdGlvbnNBY2N1bXVsYXRvciIsImJ1aWxkRm9jdXNhYmxlT3B0aW9uc0Zyb21DYXRlZ29yaXplZE9wdGlvbnMiLCJidWlsZENhdGVnb3JpemVkT3B0aW9ucyIsIl9wcm9wcyRpbnB1dFZhbHVlIiwic2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyIsIl9maWx0ZXJPcHRpb24iLCJuZXh0U2VsZWN0VmFsdWUiLCJsYXN0U2VsZWN0VmFsdWUiLCJsYXN0Rm9jdXNlZEluZGV4IiwibmV4dEZvY3VzZWRJbmRleCIsImxhc3RGb2N1c2VkT3B0aW9uIiwiaXNPcHRpb25TZWxlY3RlZCIsInNvbWUiLCJoaWRlU2VsZWN0ZWRPcHRpb25zIiwiaW5zdGFuY2VJZCIsIlNlbGVjdCIsIlNlbGVjdDIiLCJfcHJvcHMiLCJpbnB1dElzSGlkZGVuIiwiY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUiLCJwcmV2V2FzRm9jdXNlZCIsImlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSIsInByZXZQcm9wcyIsImJsb2NrT3B0aW9uSG92ZXIiLCJpc0NvbXBvc2luZyIsImNvbW1vblByb3BzIiwiaW5pdGlhbFRvdWNoWCIsImluaXRpYWxUb3VjaFkiLCJpbnN0YW5jZVByZWZpeCIsIm9wZW5BZnRlckZvY3VzIiwic2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUiLCJ1c2VySXNEcmFnZ2luZyIsImNvbnRyb2xSZWYiLCJnZXRDb250cm9sUmVmIiwiZm9jdXNlZE9wdGlvblJlZiIsImdldEZvY3VzZWRPcHRpb25SZWYiLCJtZW51TGlzdFJlZiIsImdldE1lbnVMaXN0UmVmIiwiaW5wdXRSZWYiLCJnZXRJbnB1dFJlZiIsImZvY3VzIiwiZm9jdXNJbnB1dCIsImJsdXJJbnB1dCIsImFyaWFPbkNoYW5nZSIsInByZXZJbnB1dFZhbHVlIiwiX3RoaXMkcHJvcHMzIiwiZGVzZWxlY3RlZCIsIm11bHRpVmFsdWVBc1ZhbHVlIiwic2luZ2xlVmFsdWVBc1ZhbHVlIiwicmVtb3ZlVmFsdWUiLCJuZXdWYWx1ZUFycmF5IiwidmFsdWVUZXJuYXJ5IiwicG9wVmFsdWUiLCJsYXN0U2VsZWN0ZWRWYWx1ZSIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWVQcmVmaXgiLCJjdXN0b20iLCJnZXRFbGVtZW50SWQiLCJnZXRDb21wb25lbnRzIiwiZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zIiwiYnVpbGRGb2N1c2FibGVPcHRpb25zIiwiZ2V0Rm9jdXNhYmxlT3B0aW9ucyIsIm9uTWVudU1vdXNlRG93biIsImJ1dHRvbiIsIm9uTWVudU1vdXNlTW92ZSIsIm9uQ29udHJvbE1vdXNlRG93biIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvcGVuTWVudSIsInRhZ05hbWUiLCJvbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duIiwiX3RoaXMkcHJvcHM0Iiwib25DbGVhckluZGljYXRvck1vdXNlRG93biIsInNldFRpbWVvdXQiLCJvblNjcm9sbCIsIm9uQ29tcG9zaXRpb25TdGFydCIsIm9uQ29tcG9zaXRpb25FbmQiLCJ0b3VjaGVzIiwidG91Y2giLCJjbGllbnRYIiwiZGVsdGFYIiwibW92ZVRocmVzaG9sZCIsIm9uVG91Y2hFbmQiLCJjb250YWlucyIsIm9uQ29udHJvbFRvdWNoRW5kIiwib25DbGVhckluZGljYXRvclRvdWNoRW5kIiwib25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwib25JbnB1dEZvY3VzIiwib25JbnB1dEJsdXIiLCJvbkJsdXIiLCJvbk9wdGlvbkhvdmVyIiwib25LZXlEb3duIiwiX3RoaXMkcHJvcHM1IiwiaXNDbGVhcmFibGUiLCJfdGhpcyRzdGF0ZSIsImZvY3VzVmFsdWUiLCJzaGlmdEtleSIsImtleUNvZGUiLCJmb2N1c09wdGlvbiIsInN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24iLCJzdGFydExpc3RlbmluZ1RvVG91Y2giLCJhdXRvRm9jdXMiLCJfdGhpcyRwcm9wczYiLCJzY3JvbGxJbnRvVmlldyIsInN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbiIsInN0b3BMaXN0ZW5pbmdUb1RvdWNoIiwiX3RoaXMkc3RhdGUyIiwib3BlbkF0SW5kZXgiLCJzZWxlY3RlZEluZGV4IiwiX3RoaXMkc3RhdGUzIiwiZm9jdXNlZEluZGV4IiwibmV4dEZvY3VzIiwiX3RoaXMkcHJvcHM3IiwiaXNDbGVhcmFibGUyIiwiZm9ybWF0T3B0aW9uTGFiZWwiLCJfaW5wdXRWYWx1ZSIsIl9zZWxlY3RWYWx1ZSIsIl90aGlzJHByb3BzOCIsImlucHV0SWQiLCJmb3JtIiwiX3RoaXMkZ2V0Q29tcG9uZW50cyIsIklucHV0MyIsIl90aGlzJHN0YXRlNCIsImFyaWFBdHRyaWJ1dGVzIiwiUmVhY3QiLCJEdW1teUlucHV0IiwiaW5wdXRNb2RlIiwiYXV0b0NhcGl0YWxpemUiLCJhdXRvQ29tcGxldGUiLCJhdXRvQ29ycmVjdCIsInNwZWxsQ2hlY2siLCJfdGhpczMiLCJfdGhpcyRnZXRDb21wb25lbnRzMiIsIk11bHRpVmFsdWUzIiwiTXVsdGlWYWx1ZUNvbnRhaW5lcjIiLCJNdWx0aVZhbHVlTGFiZWwyIiwiTXVsdGlWYWx1ZVJlbW92ZTIiLCJTaW5nbGVWYWx1ZTMiLCJQbGFjZWhvbGRlcjMiLCJfdGhpcyRwcm9wczkiLCJfdGhpcyRzdGF0ZTUiLCJvcHQiLCJpc09wdGlvbkZvY3VzZWQiLCJvbk1vdXNlRG93biIsIl90aGlzJGdldENvbXBvbmVudHMzIiwiQ2xlYXJJbmRpY2F0b3IzIiwiX3RoaXMkcHJvcHMxMCIsIl90aGlzJGdldENvbXBvbmVudHM0IiwiTG9hZGluZ0luZGljYXRvcjMiLCJfdGhpcyRwcm9wczExIiwiX3RoaXMkZ2V0Q29tcG9uZW50czUiLCJEcm9wZG93bkluZGljYXRvcjMiLCJJbmRpY2F0b3JTZXBhcmF0b3IzIiwiX3RoaXMkZ2V0Q29tcG9uZW50czYiLCJfdGhpczQiLCJfdGhpcyRnZXRDb21wb25lbnRzNyIsIkdyb3VwMyIsIkdyb3VwSGVhZGluZzMiLCJNZW51MyIsIk1lbnVMaXN0MyIsIkxvYWRpbmdNZXNzYWdlMyIsIk5vT3B0aW9uc01lc3NhZ2UzIiwiT3B0aW9uMyIsIl90aGlzJHByb3BzMTIiLCJsb2FkaW5nTWVzc2FnZTIiLCJtZW51UG9ydGFsVGFyZ2V0Iiwibm9PcHRpb25zTWVzc2FnZTIiLCJvbk1lbnVTY3JvbGxUb1RvcCIsIm9uTWVudVNjcm9sbFRvQm90dG9tIiwib25Ib3ZlciIsIm9uU2VsZWN0Iiwib3B0aW9uSWQiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VPdmVyIiwibWVudVVJIiwiaGFzT3B0aW9ucyIsIl9kYXRhIiwiZ3JvdXBJbmRleCIsImdyb3VwSWQiLCJoZWFkaW5nSWQiLCJfbWVzc2FnZSIsIm1lbnVQbGFjZW1lbnRQcm9wcyIsIm1lbnVFbGVtZW50IiwiX3JlZjQkcGxhY2VyUHJvcHMiLCJTY3JvbGxNYW5hZ2VyIiwic2Nyb2xsVGFyZ2V0UmVmIiwiaW5zdGFuY2UiLCJfdGhpczUiLCJfdGhpcyRwcm9wczEzIiwiZGVsaW1pdGVyIiwiX3ZhbHVlIiwiX3RoaXMkc3RhdGU2IiwiX3RoaXMkZ2V0Q29tcG9uZW50czgiLCJDb250cm9sMyIsIkluZGljYXRvcnNDb250YWluZXIzIiwiU2VsZWN0Q29udGFpbmVyMyIsIlZhbHVlQ29udGFpbmVyMyIsIl90aGlzJHByb3BzMTQiLCJnZXRDb21tb25Qcm9wcyIsInJlbmRlckxpdmVSZWdpb24iLCJyZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUiLCJyZW5kZXJJbnB1dCIsInJlbmRlckNsZWFySW5kaWNhdG9yIiwicmVuZGVyTG9hZGluZ0luZGljYXRvciIsInJlbmRlckluZGljYXRvclNlcGFyYXRvciIsInJlbmRlckRyb3Bkb3duSW5kaWNhdG9yIiwicmVuZGVyTWVudSIsInJlbmRlckZvcm1GaWVsZCIsIm5ld01lbnVPcHRpb25zU3RhdGUiLCJnZXROZXh0Rm9jdXNlZFZhbHVlIiwiZ2V0TmV4dEZvY3VzZWRPcHRpb24iLCJuZXdJbnB1dElzSGlkZGVuU3RhdGUiLCJuZXdBcmlhU2VsZWN0aW9uIiwiaGFzS2VwdEZvY3VzIiwiU3RhdGVNYW5hZ2VkU2VsZWN0IiwiYmFzZVNlbGVjdFByb3BzIiwiUmVhY3QyIiwiTm9uY2VQcm92aWRlcjIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJlbW90aW9uQ2FjaGUiLCJjYWNoZUtleSIsImltcG9ydF9yZWFjdDciLCJpbXBvcnRfcmVhY3Q2IiwicmVhY3Rfc2VsZWN0X2VzbV9kZWZhdWx0IiwicmVhY3Rfc2VsZWN0XzVfNF8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBQUE7O0lBRUFBLE9BQU9DLGVBQWVDLFNBQVMsY0FBYztNQUFFQyxPQUFPO0lBQUssQ0FBQztJQXlCNUQscUJBQXFCQyxLQUFLO01BQ3hCLElBQUlBLElBQUlDLE9BQU87UUFFYixPQUFPRCxJQUFJQztNQUNiO01BS0EsU0FBU0MsSUFBSSxHQUFHQSxJQUFJQyxTQUFTQyxZQUFZQyxRQUFRSCxLQUFLO1FBQ3BELElBQUlDLFNBQVNDLFlBQVlGLEdBQUdJLGNBQWNOLEtBQUs7VUFFN0MsT0FBT0csU0FBU0MsWUFBWUY7UUFDOUI7TUFDRjtJQUNGO0lBRUEsNEJBQTRCSyxVQUFTO01BQ25DLElBQUlQLE1BQU1HLFNBQVNLLGNBQWMsT0FBTztNQUN4Q1IsSUFBSVMsYUFBYSxnQkFBZ0JGLFNBQVFHLEdBQUc7TUFFNUMsSUFBSUgsU0FBUUksVUFBVSxRQUFXO1FBQy9CWCxJQUFJUyxhQUFhLFNBQVNGLFNBQVFJLEtBQUs7TUFDekM7TUFFQVgsSUFBSVksWUFBWVQsU0FBU1UsZUFBZSxFQUFFLENBQUM7TUFDM0NiLElBQUlTLGFBQWEsVUFBVSxFQUFFO01BQzdCLE9BQU9UO0lBQ1Q7SUFFQSxJQUFJYyxhQUEwQiwyQkFBWTtNQUV4QyxxQkFBb0JQLFVBQVM7UUFDM0IsSUFBSVEsUUFBUTtRQUVaLEtBQUtDLGFBQWEsVUFBVWhCLEtBQUs7VUFDL0IsSUFBSWlCO1VBRUosSUFBSUYsTUFBTUcsS0FBS2IsV0FBVyxHQUFHO1lBQzNCLElBQUlVLE1BQU1JLGdCQUFnQjtjQUN4QkYsU0FBU0YsTUFBTUksZUFBZUM7WUFDaEMsV0FBV0wsTUFBTU0sU0FBUztjQUN4QkosU0FBU0YsTUFBTU8sVUFBVUM7WUFDM0IsT0FBTztjQUNMTixTQUFTRixNQUFNRTtZQUNqQjtVQUNGLE9BQU87WUFDTEEsU0FBU0YsTUFBTUcsS0FBS0gsTUFBTUcsS0FBS2IsU0FBUyxHQUFHZTtVQUM3QztVQUVBTCxNQUFNTyxVQUFVRSxhQUFheEIsS0FBS2lCLE1BQU07VUFFeENGLE1BQU1HLEtBQUtPLEtBQUt6QixHQUFHO1FBQ3JCO1FBRUEsS0FBSzBCLFdBQVduQixTQUFRb0IsV0FBVyxTQUFZLFFBQXdDcEIsU0FBUW9CO1FBQy9GLEtBQUtULE9BQU8sRUFBQztRQUNiLEtBQUtVLE1BQU07UUFDWCxLQUFLakIsUUFBUUosU0FBUUk7UUFFckIsS0FBS0QsTUFBTUgsU0FBUUc7UUFDbkIsS0FBS1ksWUFBWWYsU0FBUWU7UUFDekIsS0FBS0QsVUFBVWQsU0FBUWM7UUFDdkIsS0FBS0YsaUJBQWlCWixTQUFRWTtRQUM5QixLQUFLRixTQUFTO01BQ2hCO01BRUEsSUFBSVksU0FBU0MsWUFBV0M7TUFFeEJGLE9BQU9HLFVBQVUsaUJBQWlCQyxPQUFPO1FBQ3ZDQSxNQUFNQyxRQUFRLEtBQUtsQixVQUFVO01BQy9CO01BRUFhLE9BQU9NLFNBQVMsZ0JBQWdCQyxNQUFNO1FBSXBDLElBQUksS0FBS1IsT0FBTyxLQUFLRixXQUFXLE9BQVEsT0FBTyxHQUFHO1VBQ2hELEtBQUtWLFdBQVdxQixtQkFBbUIsSUFBSSxDQUFDO1FBQzFDO1FBRUEsSUFBSXJDLE1BQU0sS0FBS2tCLEtBQUssS0FBS0EsS0FBS2IsU0FBUztRQUV2QyxJQUFJLE1BQXVDO1VBQ3pDLElBQUlpQyxlQUFlRixLQUFLRyxXQUFXLENBQUMsTUFBTSxNQUFNSCxLQUFLRyxXQUFXLENBQUMsTUFBTTtVQUV2RSxJQUFJRCxnQkFBZ0IsS0FBS0Usc0NBQXNDO1lBSTdEQyxRQUFRQyxNQUFNLHNEQUFzRE4sT0FBTyx3TEFBd0w7VUFDclE7VUFDQSxLQUFLSSx1Q0FBdUMsS0FBS0Esd0NBQXdDLENBQUNGO1FBQzVGO1FBRUEsSUFBSSxLQUFLWixVQUFVO1VBQ2pCLElBQUl6QixRQUFRMEMsWUFBWTNDLEdBQUc7VUFFM0IsSUFBSTtZQUdGQyxNQUFNMkMsV0FBV1IsTUFBTW5DLE1BQU00QyxTQUFTeEMsTUFBTTtVQUM5QyxTQUFTeUMsR0FBUDtZQUNBLElBQTZDLENBQUMsc0hBQXNIQyxLQUFLWCxJQUFJLEdBQUc7Y0FDOUtLLFFBQVFDLE1BQU0sd0RBQXlETixPQUFPLEtBQU1VLENBQUM7WUFDdkY7VUFDRjtRQUNGLE9BQU87VUFDTDlDLElBQUlZLFlBQVlULFNBQVNVLGVBQWV1QixJQUFJLENBQUM7UUFDL0M7UUFFQSxLQUFLUjtNQUNQO01BRUFDLE9BQU9tQixRQUFRLGlCQUFpQjtRQUU5QixLQUFLOUIsS0FBS2dCLFFBQVEsVUFBVWxDLEtBQUs7VUFDL0IsT0FBT0EsSUFBSWlELGNBQWNqRCxJQUFJaUQsV0FBV0MsWUFBWWxELEdBQUc7UUFDekQsQ0FBQztRQUNELEtBQUtrQixPQUFPLEVBQUM7UUFDYixLQUFLVSxNQUFNO1FBRVgsSUFBSSxNQUF1QztVQUN6QyxLQUFLWSx1Q0FBdUM7UUFDOUM7TUFDRjtNQUVBLE9BQU9WO0lBQ1QsR0FBRTtJQUVGaEMsUUFBUWdCLGFBQWFBO0VBQUE7QUFBQTs7O0FDN0pyQjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q3FDLFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVc0Q7SUFDbkI7RUFBQTtBQUFBOzs7Ozs7Ozs7O1VDTldDLElBQUs7TUFBQSxJQUNMQyxJQUFNO01BQUEsSUFDTkMsSUFBUztNQUFBLElBRVRDLElBQVU7TUFBQSxJQUNWQyxJQUFVO01BQUEsSUFDVkMsSUFBYztNQUFBLElBRWR4RCxJQUFPO01BQUEsSUFDUHlELElBQVE7TUFBQSxJQUNSQyxJQUFTO01BQUEsSUFDVEMsSUFBVTtNQUFBLElBQ1ZDLElBQVc7TUFBQSxJQUNYQyxJQUFXO01BQUEsSUFDWEMsSUFBVztNQUFBLElBQ1hDLElBQVk7TUFBQSxJQUNaQyxJQUFZO01BQUEsSUFDWkMsSUFBWTtNQUFBLElBQ1pDLElBQWdCO01BQUEsSUFDaEJDLEtBQXNCO01BQUEsSUNmdEJDLElBQU1DLEtBQUtDO01BQUEsSUFNWEMsSUFBT0MsT0FBT0M7TUFBQSxJQU1kQyxJQUFTaEYsT0FBT2lGO01BT3BCLFdBQWVDLElBQU9DO1FBQzVCLE9BQWMsU0FBVSxJQUFLQyxFQUFPRixJQUFPLE9BQU8sSUFBS0UsRUFBT0YsSUFBTyxPQUFPLElBQUtFLEVBQU9GLElBQU8sT0FBTyxJQUFLRSxFQUFPRixJQUFPO01BQUE7TUFPbkgsV0FBZUE7UUFDckIsT0FBT0EsR0FBTUc7TUFBQTtNQVFQLFdBQWdCSCxJQUFPQztRQUM3QixPQUFRLE1BQVFBLEdBQVFHLEtBQUtKLE9BQVVBLEdBQU0sS0FBS0E7TUFBQTtNQVM1QyxXQUFrQkEsSUFBT0MsSUFBU0k7UUFDeEMsT0FBT0wsR0FBTU0sUUFBUUwsSUFBU0k7TUFBQTtNQVF4QixXQUFrQkwsSUFBT0M7UUFDL0IsT0FBT0QsR0FBTU8sUUFBUU47TUFBQTtNQVFmLFdBQWlCRCxJQUFPQztRQUM5QixPQUFPRCxHQUFNdkMsV0FBV3dDLE1BQVM7TUFBQTtNQVMzQixXQUFpQkQsSUFBT0MsSUFBT0k7UUFDckMsT0FBT0wsR0FBTVEsTUFBTVAsSUFBT0k7TUFBQTtNQU9wQixXQUFpQkw7UUFDdkIsT0FBT0EsR0FBTXpFO01BQUE7TUFPUCxXQUFpQnlFO1FBQ3ZCLE9BQU9BLEdBQU16RTtNQUFBO01BUVAsV0FBaUJ5RSxJQUFPQztRQUM5QixPQUFPQSxHQUFNdEQsS0FBS3FELEtBQVFBO01BQUE7TUFRcEIsV0FBa0JBLElBQU9DO1FBQy9CLE9BQU9ELEdBQU1TLElBQUlSLElBQVVTLEtBQUs7TUFBQTtNQUFBMUMsU0MvR2Y7TUFBQUEsV0FDRTtNQUFBQSxXQUNBO01BQUFBLGFBQ0U7TUFBQUEsY0FDQztNQUFBQSxlQUNDO01BV2pCLFdBQWVpQyxJQUFPSSxJQUFNTSxJQUFRQyxJQUFNQyxJQUFPQyxJQUFVQztRQUNqRSxPQUFPO1VBQUM5RixPQUFPZ0Y7VUFBT2UsTUFBTVg7VUFBTVksUUFBUU47VUFBUU8sTUFBTU47VUFBTU8sT0FBT047VUFBT08sVUFBVU47VUFBVU8sTUFBTXJEO1VBQU1zRCxRQUFRdEQ7VUFBUXpDLFFBQVF3RjtVQUFRUSxRQUFRO1FBQUE7TUFBQTtNQVE5SSxXQUFldkIsSUFBTUM7UUFDM0IsT0FBT0gsRUFBTzBCLEVBQUssSUFBSSxNQUFNLE1BQU0sSUFBSSxNQUFNLE1BQU0sSUFBSXhCLElBQU07VUFBQ3pFLFNBQVN5RSxHQUFLekU7UUFBQSxHQUFTMEU7TUFBQTtNQU0vRSxhQUFTO1FBQ2YsT0FBT2pDO01BQUE7TUFNRCxhQUFTO1FBQ2ZBLGNBQVlBLGFBQVcsSUFBSWtDLEVBQU9sQyxnQkFBY0EsY0FBWTtRQUU1RCxJQUFJQSxZQUFVQSxnQkFBYyxJQUMzQkEsV0FBUyxHQUFHQTtRQUViLE9BQU9BO01BQUE7TUFNRCxhQUFTO1FBQ2ZBLGNBQVlBLGFBQVdBLFdBQVNrQyxFQUFPbEMsY0FBWUEsZ0JBQWM7UUFFakUsSUFBSUEsWUFBVUEsZ0JBQWMsSUFDM0JBLFdBQVMsR0FBR0E7UUFFYixPQUFPQTtNQUFBO01BTUQsYUFBUztRQUNmLE9BQU9rQyxFQUFPbEMsY0FBWUE7TUFBQTtNQU1wQixhQUFTO1FBQ2YsT0FBT0E7TUFBQTtNQVFELFdBQWdCaUMsSUFBT0k7UUFDN0IsT0FBT29CLEVBQU96RCxjQUFZaUMsSUFBT0k7TUFBQTtNQU8zQixXQUFnQkw7UUFDdEIsUUFBUUE7ZUFFRjtlQUFRO2VBQVE7ZUFBUztlQUFTO1lBQ3RDLE9BQU87ZUFFSDtlQUFTO2VBQVM7ZUFBUztlQUFTO2VBQVM7ZUFBUztlQUV0RDtlQUFTO2VBQVU7WUFDdkIsT0FBTztlQUVIO1lBQ0osT0FBTztlQUVIO2VBQVM7ZUFBUztlQUFTO1lBQy9CLE9BQU87ZUFFSDtlQUFTO1lBQ2IsT0FBTztRQUFBO1FBR1QsT0FBTztNQUFBO01BT0QsV0FBZ0JDO1FBQ3RCLE9BQU9qQyxTQUFPQSxXQUFTLEdBQUdBLFdBQVMwRCxFQUFPMUQsZUFBYWlDLEtBQVFqQyxhQUFXLEdBQUc7TUFBQTtNQU92RSxXQUFrQmlDO1FBQ3hCLE9BQU9qQyxlQUFhLElBQUlpQztNQUFBO01BT2xCLFdBQWtCQTtRQUN4QixPQUFPMEIsRUFBS0MsRUFBTTVELGFBQVcsR0FBRzZELEVBQVU1QixPQUFTLEtBQUtBLEtBQU8sSUFBSUEsT0FBUyxLQUFLQSxLQUFPLElBQUlBO01BQUE7TUFPdEYsV0FBbUJEO1FBQ3pCLE9BQU84QixFQUFRQyxFQUFVQyxFQUFNaEM7TUFBQTtNQU96QixXQUFxQkM7UUFDM0IsT0FBT2pDLGNBQVlpRSxLQUNsQixJQUFJakUsY0FBWSxJQUNma0UsU0FFQTtRQUVGLE9BQU9DLEVBQU1sQyxNQUFRLEtBQUtrQyxFQUFNbkUsZUFBYSxJQUFJLEtBQUs7TUFBQTtNQU9oRCxXQUFvQmlDO1FBQzFCLE9BQU9pQyxLQUNOLFFBQVFDLEVBQU1uRTtlQUNSO1lBQUdvRSxFQUFPQyxFQUFXckUsYUFBVyxJQUFJaUM7WUFDeEM7ZUFDSTtZQUFHbUMsRUFBT0UsRUFBUXRFLGNBQVlpQztZQUNsQzs7WUFDUW1DLEVBQU96QyxFQUFLM0IsY0FBWWlDO1FBQUE7UUFHbkMsT0FBT0E7TUFBQTtNQVFELFdBQW1CQSxJQUFPSTtRQUNoQyxTQUFTQSxNQUFTNkIsS0FFakIsSUFBSWxFLGNBQVksTUFBTUEsY0FBWSxPQUFRQSxjQUFZLE1BQU1BLGNBQVksTUFBUUEsY0FBWSxNQUFNQSxjQUFZLElBQzdHO1FBRUYsT0FBTzRELEVBQU0zQixJQUFPc0MsT0FBV2xDLEtBQVEsS0FBSzRCLE9BQVUsTUFBTUMsT0FBVTtNQUFBO01BT2hFLFdBQW9CakM7UUFDMUIsT0FBT2lDLEtBQ04sUUFBUWxFO2VBRUZpQztZQUNKLE9BQU9qQztlQUVIO2VBQVM7WUFDYixJQUFJaUMsT0FBUyxNQUFNQSxPQUFTLElBQzNCNEIsRUFBVTdEO1lBQ1g7ZUFFSTtZQUNKLElBQUlpQyxPQUFTLElBQ1o0QixFQUFVNUI7WUFDWDtlQUVJO1lBQ0ppQztZQUNBO1FBQUE7UUFHSCxPQUFPbEU7TUFBQTtNQVFELFdBQW9CaUMsSUFBTUk7UUFDaEMsT0FBTzZCLEtBRU4sSUFBSWpDLEtBQU9qQyxnQkFBYyxLQUFLLElBQzdCLGVBRVFpQyxLQUFPakMsZ0JBQWMsS0FBSyxNQUFNaUUsUUFBVyxJQUNuRDtRQUVGLE9BQU8sT0FBT0wsRUFBTXZCLElBQU9yQyxhQUFXLEtBQUssTUFBTTJCLEVBQUtNLE9BQVMsS0FBS0EsS0FBT2lDO01BQUE7TUFPckUsV0FBcUJqQztRQUMzQixRQUFRa0MsRUFBTUYsTUFDYkM7UUFFRCxPQUFPTixFQUFNM0IsSUFBT2pDO01BQUE7TUM1T2QsV0FBa0JnQztRQUN4QixPQUFPOEIsRUFBUVUsRUFBTSxJQUFJLE1BQU0sTUFBTSxNQUFNLENBQUMsS0FBS3hDLEtBQVFnQyxFQUFNaEMsS0FBUSxHQUFHLENBQUMsSUFBSUE7TUFBQTtNQWV6RSxXQUFnQkEsSUFBT0MsSUFBTUksSUFBUU0sSUFBTUMsSUFBT0MsSUFBVUMsSUFBUUMsSUFBUTBCO1FBQ2xGLElBQUlDLEtBQVE7UUFDWixJQUFJQyxLQUFTO1FBQ2IsSUFBSUMsS0FBUzlCO1FBQ2IsSUFBSStCLEtBQVM7UUFDYixJQUFJQyxLQUFXO1FBQ2YsSUFBSUMsS0FBVztRQUNmLElBQUlDLEtBQVc7UUFDZixJQUFJQyxLQUFXO1FBQ2YsSUFBSUMsS0FBWTtRQUNoQixJQUFJQyxLQUFZO1FBQ2hCLElBQUlDLEtBQU87UUFDWCxJQUFJQyxLQUFRekM7UUFDWixJQUFJMEMsS0FBV3pDO1FBQ2YsSUFBSTBDLEtBQVk1QztRQUNoQixJQUFJNkMsS0FBYUo7UUFFakIsT0FBT0gsSUFDTixRQUFRRixLQUFXSSxJQUFXQSxLQUFZakI7ZUFFcEM7WUFDSixJQUFJYSxNQUFZLE9BQU9TLEdBQVcvRixXQUFXbUYsS0FBUyxNQUFNLElBQUk7Y0FDL0QsSUFBSWEsRUFBUUQsTUFBY0UsRUFBUXBCLEVBQVFhLEtBQVksS0FBSyxRQUFRLGNBQ2xFRDtjQUNEO1lBQUE7ZUFHRztlQUFTO2VBQVM7WUFDdEJNLE1BQWNsQixFQUFRYTtZQUN0QjtlQUVJO2VBQVE7ZUFBUztlQUFTO1lBQzlCSyxNQUFjRyxFQUFXWjtZQUN6QjtlQUVJO1lBQ0pTLE1BQWNJLEVBQVNyQixNQUFVLEdBQUc7WUFDcEM7ZUFFSTtZQUNKLFFBQVFOO21CQUNGO21CQUFTO2dCQUNiRyxFQUFPeUIsR0FBUUMsRUFBVTVCLEtBQVFLLE1BQVV0QyxJQUFNSSxLQUFTb0M7Z0JBQzFEOztnQkFFQWUsTUFBYztZQUFBO1lBRWhCO2VBRUksTUFBTVI7WUFDVmpDLEdBQU8yQixRQUFXaEIsRUFBTzhCLE1BQWNOO2VBRW5DLE1BQU1GO2VBQWU7ZUFBUztZQUNsQyxRQUFRRzttQkFFRjttQkFBUTtnQkFBS0YsS0FBVzttQkFFeEIsS0FBS047Z0JBQ1QsSUFBSUcsS0FBVyxLQUFNcEIsRUFBTzhCLE1BQWNaLElBQ3pDUixFQUFPVSxLQUFXLEtBQUtpQixHQUFZUCxLQUFhLEtBQUs3QyxJQUFNTixJQUFRdUMsS0FBUyxLQUFLbUIsR0FBWUwsRUFBUUYsSUFBWSxLQUFLLE1BQU0sS0FBSzdDLElBQU1OLElBQVF1QyxLQUFTLElBQUlIO2dCQUM3SjttQkFFSTtnQkFBSWUsTUFBYzs7Z0JBR3RCcEIsRUFBT21CLEtBQVlTLEdBQVFSLElBQVl2RCxJQUFNSSxJQUFRcUMsSUFBT0MsSUFBUS9CLElBQU9HLElBQVFxQyxJQUFNQyxLQUFRLElBQUlDLEtBQVcsSUFBSVYsS0FBUy9CO2dCQUU3SCxJQUFJc0MsT0FBYyxLQUNqQixJQUFJUixPQUFXLEdBQ2RILEVBQU1nQixJQUFZdkQsSUFBTXNELElBQVdBLElBQVdGLElBQU94QyxJQUFVK0IsSUFBUTdCLElBQVF1QyxTQUUvRSxRQUFRVDt1QkFFRjt1QkFBVTt1QkFBVTtvQkFDeEJMLEVBQU14QyxJQUFPdUQsSUFBV0EsSUFBVzVDLE1BQVF5QixFQUFPNEIsR0FBUWhFLElBQU91RCxJQUFXQSxJQUFXLEdBQUcsR0FBRzNDLElBQU9HLElBQVFxQyxJQUFNeEMsSUFBT3lDLEtBQVEsSUFBSVQsS0FBU1UsS0FBVzFDLElBQU8wQyxJQUFVVixJQUFRN0IsSUFBUUosS0FBTzBDLEtBQVFDO29CQUN6TTs7b0JBRUFkLEVBQU1nQixJQUFZRCxJQUFXQSxJQUFXQSxJQUFXLENBQUMsS0FBS0QsSUFBVSxHQUFHdkMsSUFBUXVDO2dCQUFBOztZQUlwRlosS0FBUUMsS0FBU0csS0FBVyxHQUFHRSxLQUFXRSxLQUFZLEdBQUdFLEtBQU9JLEtBQWEsSUFBSVosS0FBUzlCO1lBQzFGO2VBRUk7WUFDSjhCLEtBQVMsSUFBSWxCLEVBQU84QixLQUFhVixLQUFXQzs7WUFFNUMsSUFBSUMsS0FBVztjQUNkLElBQUlHLE1BQWEsT0FDZEgsWUFDTUcsTUFBYSxPQUFPSCxRQUFjLEtBQUtpQixPQUFVLEtBQ3pEOztZQUVGLFFBQVFULE1BQWM3RCxFQUFLd0QsS0FBWUEsS0FBWUg7bUJBRTdDO2dCQUNKRSxLQUFZUCxLQUFTLElBQUksS0FBS2EsTUFBYztnQkFDNUM7bUJBRUk7Z0JBQ0p6QyxHQUFPMkIsUUFBWSxHQUFPYyxNQUFjLEtBQUtOLElBQVdBLEtBQVk7Z0JBQ3BFO21CQUVJO2dCQUVKLElBQUlqQixRQUFXLElBQ2R1QixNQUFjbEIsRUFBUUo7Z0JBRXZCVyxLQUFTWixLQUFRVSxLQUFTQyxLQUFTbEIsRUFBTzBCLEtBQU9JLE1BQWNuQixFQUFXRSxPQUFXWTtnQkFDckY7bUJBRUk7Z0JBQ0osSUFBSUosT0FBYSxNQUFNckIsRUFBTzhCLE9BQWUsR0FDNUNSLEtBQVc7WUFBQTs7UUFJakIsT0FBT25DO01BQUE7TUFpQkQsWUFBa0JiLElBQU9DLElBQU1JLElBQVFNLElBQU9DLElBQVFFLElBQU9DLElBQVEwQixJQUFNQyxJQUFPQyxJQUFVQztRQUNsRyxJQUFJQyxLQUFPakMsS0FBUztRQUNwQixJQUFJa0MsS0FBT2xDLE9BQVcsSUFBSUUsS0FBUSxDQUFDO1FBQ25DLElBQUlpQyxLQUFPbUIsRUFBT3BCO1FBRWxCLFNBQVNFLEtBQUksR0FBR0MsS0FBSSxHQUFHQyxLQUFJLEdBQUdGLEtBQUlyQyxNQUFTcUMsSUFDMUMsU0FBU0csS0FBSSxHQUFHZ0IsS0FBSTFDLEVBQU96QixJQUFPNkMsS0FBTyxHQUFHQSxLQUFPckQsRUFBSXlELEtBQUlsQyxHQUFPaUMsT0FBTUssS0FBSXJELElBQU9tRCxLQUFJSixNQUFRSSxJQUM5RixJQUFJRSxLQUFJMUIsRUFBS3NCLEtBQUksSUFBSUgsR0FBS0ssTUFBSyxNQUFNZ0IsS0FBSVQsRUFBUVMsSUFBRyxRQUFRckIsR0FBS0ssT0FDaEVULEdBQU1RLFFBQU9HO1FBRWhCLE9BQU83QixFQUFLeEIsSUFBT0MsSUFBTUksSUFBUU8sT0FBVyxJQUFJakMsSUFBVThELElBQU1DLElBQU9DLElBQVVDO01BQUE7TUFTM0UsWUFBa0I1QyxJQUFPQyxJQUFNSTtRQUNyQyxPQUFPbUIsRUFBS3hCLElBQU9DLElBQU1JLElBQVEzQixHQUFTaUIsRUFBS3lFLE1BQVMzQyxFQUFPekIsSUFBTyxLQUFJLEdBQUk7TUFBQTtNQVV4RSxZQUFzQkEsSUFBT0MsSUFBTUksSUFBUU07UUFDakQsT0FBT2EsRUFBS3hCLElBQU9DLElBQU1JLElBQVF6QixHQUFhNkMsRUFBT3pCLElBQU8sR0FBR1csS0FBU2MsRUFBT3pCLElBQU9XLEtBQVMsS0FBSSxHQUFJQTtNQUFBO01DckxqRyxZQUFpQlgsSUFBT1k7UUFDOUIsUUFBUXlELEVBQUtyRSxJQUFPWTtlQUVkO1lBQ0osT0FBT25DLElBQVMsV0FBV3VCLEtBQVFBO2VBRS9CO2VBQVc7ZUFBVztlQUFXO2VBQVc7ZUFBVztlQUFXO2VBRWxFO2VBQVc7ZUFBVztlQUFXO2VBQVc7ZUFBVztlQUV2RDtlQUFXO2VBQVc7ZUFBVztlQUFXO2VBQVc7ZUFFdkQ7ZUFBVztlQUFXO2VBQVc7ZUFBVztlQUFXO1lBQzNELE9BQU92QixJQUFTdUIsS0FBUUE7ZUFFcEI7ZUFBVztlQUFXO2VBQVc7ZUFBVztZQUNoRCxPQUFPdkIsSUFBU3VCLEtBQVF4QixJQUFNd0IsS0FBUXpCLElBQUt5QixLQUFRQTtlQUUvQztlQUFXO1lBQ2YsT0FBT3ZCLElBQVN1QixLQUFRekIsSUFBS3lCLEtBQVFBO2VBRWpDO1lBQ0osT0FBT3ZCLElBQVN1QixLQUFRekIsSUFBSyxVQUFVeUIsS0FBUUE7ZUFFM0M7WUFDSixPQUFPdkIsSUFBU3VCLEtBQVEwRCxFQUFRMUQsSUFBTyxrQkFBa0J2QixJQUFTLGFBQWFGLElBQUssZUFBZXlCO2VBRS9GO1lBQ0osT0FBT3ZCLElBQVN1QixLQUFRekIsSUFBSyxlQUFlbUYsRUFBUTFELElBQU8sZUFBZSxNQUFNQTtlQUU1RTtZQUNKLE9BQU92QixJQUFTdUIsS0FBUXpCLElBQUssbUJBQW1CbUYsRUFBUTFELElBQU8sNkJBQTZCLE1BQU1BO2VBRTlGO1lBQ0osT0FBT3ZCLElBQVN1QixLQUFRekIsSUFBS21GLEVBQVExRCxJQUFPLFVBQVUsY0FBY0E7ZUFFaEU7WUFDSixPQUFPdkIsSUFBU3VCLEtBQVF6QixJQUFLbUYsRUFBUTFELElBQU8sU0FBUyxvQkFBb0JBO2VBRXJFO1lBQ0osT0FBT3ZCLElBQVMsU0FBU2lGLEVBQVExRCxJQUFPLFNBQVMsTUFBTXZCLElBQVN1QixLQUFRekIsSUFBS21GLEVBQVExRCxJQUFPLFFBQVEsY0FBY0E7ZUFFOUc7WUFDSixPQUFPdkIsSUFBU2lGLEVBQVExRCxJQUFPLHNCQUFzQixPQUFPdkIsSUFBUyxRQUFRdUI7ZUFFekU7WUFDSixPQUFPMEQsRUFBUUEsRUFBUUEsRUFBUTFELElBQU8sZ0JBQWdCdkIsSUFBUyxPQUFPLGVBQWVBLElBQVMsT0FBT3VCLElBQU8sTUFBTUE7ZUFFOUc7ZUFBVztZQUNmLE9BQU8wRCxFQUFRMUQsSUFBTyxxQkFBcUJ2QixJQUFTLFFBQU87ZUFFdkQ7WUFDSixPQUFPaUYsRUFBUUEsRUFBUTFELElBQU8scUJBQXFCdkIsSUFBUyxnQkFBZ0JGLElBQUssaUJBQWlCLGNBQWMsYUFBYUUsSUFBU3VCLEtBQVFBO2VBRTFJO2VBQVc7ZUFBVztlQUFXO1lBQ3JDLE9BQU8wRCxFQUFRMUQsSUFBTyxtQkFBbUJ2QixJQUFTLFVBQVV1QjtlQUV4RDtlQUFXO2VBQVc7ZUFBVztlQUNqQztlQUFXO2VBQVc7ZUFBVztlQUNqQztlQUFXO2VBQVc7ZUFBVztZQUVyQyxJQUFJMEIsRUFBTzFCLE1BQVMsSUFBSVksS0FBUyxHQUNoQyxRQUFRVixFQUFPRixJQUFPWSxLQUFTO21CQUV6QjtnQkFFSixJQUFJVixFQUFPRixJQUFPWSxLQUFTLE9BQU8sSUFDakM7bUJBRUc7Z0JBQ0osT0FBTzhDLEVBQVExRCxJQUFPLG9CQUFvQixPQUFPdkIsSUFBUyxZQUFpQkQsS0FBTzBCLEVBQU9GLElBQU9ZLEtBQVMsTUFBTSxNQUFNLE9BQU8sWUFBWVo7bUJBRXBJO2dCQUNKLFFBQVF5RCxFQUFRekQsSUFBTyxhQUFhc0UsR0FBT1osRUFBUTFELElBQU8sV0FBVyxtQkFBbUJZLE1BQVVaLEtBQVFBO1lBQUE7WUFFN0c7ZUFFSTtZQUVKLElBQUlFLEVBQU9GLElBQU9ZLEtBQVMsT0FBTyxLQUNqQztlQUVHO1lBQ0osUUFBUVYsRUFBT0YsSUFBTzBCLEVBQU8xQixNQUFTLE1BQU15RCxFQUFRekQsSUFBTyxpQkFBaUI7bUJBRXRFO2dCQUNKLE9BQU8wRCxFQUFRMUQsSUFBTyxLQUFLLE1BQU12QixLQUFVdUI7bUJBRXZDO2dCQUNKLE9BQU8wRCxFQUFRMUQsSUFBTyx5QkFBeUIsT0FBT3ZCLEtBQVV5QixFQUFPRixJQUFPLFFBQVEsS0FBSyxZQUFZLE1BQU0sWUFBaUJ2QixJQUFTLFdBQWdCRixJQUFLLGFBQWF5QjtZQUFBO1lBRTNLO2VBRUk7WUFDSixRQUFRRSxFQUFPRixJQUFPWSxLQUFTO21CQUV6QjtnQkFDSixPQUFPbkMsSUFBU3VCLEtBQVF6QixJQUFLbUYsRUFBUTFELElBQU8sc0JBQXNCLFFBQVFBO21CQUV0RTtnQkFDSixPQUFPdkIsSUFBU3VCLEtBQVF6QixJQUFLbUYsRUFBUTFELElBQU8sc0JBQXNCLFdBQVdBO21CQUV6RTtnQkFDSixPQUFPdkIsSUFBU3VCLEtBQVF6QixJQUFLbUYsRUFBUTFELElBQU8sc0JBQXNCLFFBQVFBO1lBQUE7WUFHNUUsT0FBT3ZCLElBQVN1QixLQUFRekIsSUFBS3lCLEtBQVFBO1FBQUE7UUFHdkMsT0FBT0E7TUFBQTtNQzdHRCxZQUFvQkEsSUFBVUM7UUFDcEMsSUFBSUksS0FBUztRQUNiLElBQUlNLEtBQVN1RCxFQUFPbEU7UUFFcEIsU0FBU1ksS0FBSSxHQUFHQSxLQUFJRCxJQUFRQyxNQUMzQlAsTUFBVUosR0FBU0QsR0FBU1ksS0FBSUEsSUFBR1osSUFBVUMsT0FBYTtRQUUzRCxPQUFPSTtNQUFBO01BVUQsWUFBb0JMLElBQVNDLElBQU9JLElBQVVNO1FBQ3BELFFBQVFYLEdBQVFrQjtlQUNWcEM7ZUFBYUY7WUFBYSxPQUFPb0IsR0FBUXVCLFNBQVN2QixHQUFRdUIsVUFBVXZCLEdBQVEvRTtlQUM1RXlEO1lBQVMsT0FBTztlQUNoQlU7WUFBVyxPQUFPWSxHQUFRdUIsU0FBU3ZCLEdBQVEvRSxRQUFRLE1BQU1zSixHQUFVdkUsR0FBUW9CLFVBQVVULE1BQVk7ZUFDakdoQztZQUFTcUIsR0FBUS9FLFFBQVErRSxHQUFRbUIsTUFBTVQsS0FBSztRQUFBO1FBR2xELE9BQU9nQixFQUFPckIsS0FBV2tFLEdBQVV2RSxHQUFRb0IsVUFBVVQsT0FBYVgsR0FBUXVCLFNBQVN2QixHQUFRL0UsUUFBUSxNQUFNb0YsS0FBVyxNQUFNO01BQUE7TUN2QnBILFlBQXFCTDtRQUMzQixJQUFJQyxLQUFTaUUsRUFBT2xFO1FBRXBCLE9BQU8sVUFBVUssSUFBU00sSUFBT0MsSUFBVUM7VUFDMUMsSUFBSUMsS0FBUztVQUViLFNBQVNDLEtBQUksR0FBR0EsS0FBSWQsSUFBUWMsTUFDM0JELE1BQVVkLEdBQVdlLElBQUdWLElBQVNNLElBQU9DLElBQVVDLE9BQWE7VUFFaEUsT0FBT0M7UUFBQTtNQUFBO01BUUYsWUFBb0JkO1FBQzFCLE9BQU8sVUFBVUM7VUFDaEIsS0FBS0EsR0FBUWU7WUFDWixJQUFJZixLQUFVQSxHQUFRc0IsUUFDckJ2QixHQUFTQzs7UUFBQTtNQUFBO01BVU4sWUFBbUJELElBQVNZLElBQU9HLElBQVUwQjtRQUNuRCxJQUFJekMsR0FBUXpFO1VBQ1gsS0FBS3lFLEdBQVF1QixRQUNaLFFBQVF2QixHQUFRa0I7aUJBQ1Z0QztjQUFhb0IsR0FBUXVCLFNBQVMrQyxHQUFPdEUsR0FBUS9FLE9BQU8rRSxHQUFRekU7Y0FDaEU7aUJBQ0k2RDtjQUNKLE9BQU9tRixHQUFVLENBQUNDLEVBQUt4RSxJQUFTO2dCQUFDL0UsT0FBT3lJLEVBQVExRCxHQUFRL0UsT0FBTyxLQUFLLE1BQU13RDtjQUFBLEtBQVlnRTtpQkFDbEY5RDtjQUNKLElBQUlxQixHQUFRekUsUUFDWCxPQUFPa0osRUFBUXpFLEdBQVFtQixPQUFPLFVBQVV1RDtnQkFDdkMsUUFBUUMsRUFBTUQsSUFBTzt1QkFFZjt1QkFBbUI7b0JBQ3ZCLE9BQU9ILEdBQVUsQ0FBQ0MsRUFBS3hFLElBQVM7c0JBQUNtQixPQUFPLENBQUN1QyxFQUFRZ0IsSUFBTyxlQUFlLE1BQU1sRyxJQUFNO29CQUFBLEtBQVdpRTt1QkFFMUY7b0JBQ0osT0FBTzhCLEdBQVUsQ0FDaEJDLEVBQUt4RSxJQUFTO3NCQUFDbUIsT0FBTyxDQUFDdUMsRUFBUWdCLElBQU8sY0FBYyxNQUFNakcsSUFBUztvQkFBQSxJQUNuRStGLEVBQUt4RSxJQUFTO3NCQUFDbUIsT0FBTyxDQUFDdUMsRUFBUWdCLElBQU8sY0FBYyxNQUFNbEcsSUFBTTtvQkFBQSxJQUNoRWdHLEVBQUt4RSxJQUFTO3NCQUFDbUIsT0FBTyxDQUFDdUMsRUFBUWdCLElBQU8sY0FBY25HLElBQUs7b0JBQUEsS0FDdkRrRTtnQkFBQTtnQkFHTCxPQUFPO2NBQUE7VUFBQTs7TUFBQTtNQVVQLFlBQW9CekM7UUFDMUIsUUFBUUEsR0FBUWtCO2VBQ1Z2QztZQUNKcUIsR0FBUW1CLFFBQVFuQixHQUFRbUIsTUFBTVYsSUFBSSxVQUFVUjtjQUMzQyxPQUFPd0UsRUFBUUcsRUFBUzNFLEtBQVEsVUFBVTRFLElBQU94RSxJQUFPTTtnQkFDdkQsUUFBUVQsRUFBTzJFLElBQU87dUJBRWhCO29CQUNKLE9BQU9wRCxFQUFPb0QsSUFBTyxHQUFHbkQsRUFBT21EO3VCQUUzQjt1QkFBUTt1QkFBUzt1QkFBUzt1QkFBUztvQkFDdkMsT0FBT0E7dUJBRUg7b0JBQ0osSUFBSWxFLEtBQVdOLFFBQVcsVUFDekJNLEdBQVNOLE1BQVMsSUFBSU0sS0FBV04sTUFBUyxPQUFPb0IsRUFBT2QsR0FBU04sS0FBUUEsS0FBUSxLQUFJO3VCQUVsRjtvQkFDSixPQUFPQSxPQUFVLElBQUksS0FBS3dFOztvQkFFMUIsUUFBUXhFOzJCQUNGO3dCQUFHTCxLQUFVNkU7d0JBQ2pCLE9BQU9YLEVBQU92RCxNQUFZLElBQUksS0FBS2tFOzJCQUMvQnhFLEtBQVE2RCxFQUFPdkQsTUFBWTsyQkFBUTt3QkFDdkMsT0FBT04sT0FBVSxJQUFJd0UsS0FBUTdFLEtBQVVBLEtBQVU2RSxLQUFRN0U7O3dCQUV6RCxPQUFPNkU7b0JBQUE7O2NBQUE7WUFBQTtRQUFBO01BQUE7TUFBQTdHO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFBO01BQUFsRDtRQUFBRztNQUFBO0lBQUE7Ozs7O0FDckdoQjtFQUFBO0lBQUE7O0lBRUFILE9BQU9DLGVBQWVDLFNBQVMsY0FBYztNQUFFQyxPQUFPO0lBQUssQ0FBQztJQUU1RCxJQUFJNkosY0FBYyxzQkFBcUJDLE1BQU07TUFFM0MsSUFBSUMsUUFBUSxtQkFBSUMsU0FBUTtNQUN4QixPQUFPLFVBQVVDLEtBQUs7UUFDcEIsSUFBSUYsTUFBTUcsSUFBSUQsR0FBRyxHQUFHO1VBRWxCLE9BQU9GLE1BQU1JLElBQUlGLEdBQUc7UUFDdEI7UUFFQSxJQUFJRyxNQUFNTixLQUFLRyxHQUFHO1FBQ2xCRixNQUFNTSxJQUFJSixLQUFLRyxHQUFHO1FBQ2xCLE9BQU9BO01BQ1Q7SUFDRjtJQUVBckssUUFBUXVLLFVBQVVUO0VBQUE7QUFBQTs7O0FDbkJsQjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q3pHLFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVd0s7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQTtFQUFBO0lBQUE7O0lBRUExSyxPQUFPQyxlQUFlQyxTQUFTLGNBQWM7TUFBRUMsT0FBTztJQUFLLENBQUM7SUFFNUQsaUJBQWlCd0ssSUFBSTtNQUNuQixJQUFJVCxRQUFRLHNCQUFPVSxPQUFPLElBQUk7TUFDOUIsT0FBTyxVQUFVUixLQUFLO1FBQ3BCLElBQUlGLE1BQU1FLFNBQVMsUUFBV0YsTUFBTUUsT0FBT08sR0FBR1AsR0FBRztRQUNqRCxPQUFPRixNQUFNRTtNQUNmO0lBQ0Y7SUFFQWxLLFFBQVF1SyxVQUFVSTtFQUFBO0FBQUE7OztBQ1psQjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q3RILFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVNEs7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQTtFQUFBO0lBQUE7O0lBRUE5SyxPQUFPQyxlQUFlQyxTQUFTLGNBQWM7TUFBRUMsT0FBTztJQUFLLENBQUM7SUFFNUQsSUFBSUUsUUFBUTBLO0lBQ1osSUFBSUMsU0FBU0M7SUFDYixJQUFJakIsY0FBY2tCO0lBQ2xCLElBQUlMLFVBQVVNO0lBRWQseUJBQTBCakksR0FBRztNQUFFLE9BQU9BLEtBQUtBLEVBQUVrSSxhQUFhbEksSUFBSTtRQUFFLFdBQVdBO01BQUU7SUFBRztJQUVoRixJQUFJbUksdUJBQW9DLCtCQUFnQnJCLFdBQVc7SUFDbkUsSUFBSXNCLG1CQUFnQywrQkFBZ0JULE9BQU87SUFFM0QsSUFBSVUsOEJBQThCLHNDQUFxQ0MsT0FBT0MsUUFBUUMsT0FBTztNQUMzRixJQUFJQyxXQUFXO01BQ2YsSUFBSUMsWUFBWTtNQUVoQixPQUFPLE1BQU07UUFDWEQsV0FBV0M7UUFDWEEsWUFBWVosT0FBT2EsTUFBSztRQUV4QixJQUFJRixhQUFhLE1BQU1DLGNBQWMsSUFBSTtVQUN2Q0gsT0FBT0MsU0FBUztRQUNsQjtRQUVBLElBQUlWLE9BQU9jLE1BQU1GLFNBQVMsR0FBRztVQUMzQjtRQUNGO1FBRUFaLE9BQU9lLE1BQUs7TUFDZDtNQUVBLE9BQU9mLE9BQU90RixNQUFNOEYsT0FBT1IsT0FBT2dCLFFBQVE7SUFDNUM7SUFFQSxJQUFJQyxVQUFVLGtCQUFpQkMsUUFBUVQsUUFBUTtNQUU3QyxJQUFJQyxRQUFRO01BQ1osSUFBSUUsWUFBWTtNQUVoQixHQUFHO1FBQ0QsUUFBUVosT0FBT2MsTUFBTUYsU0FBUztVQUFBLEtBQ3ZCO1lBRUgsSUFBSUEsY0FBYyxNQUFNWixPQUFPYSxNQUFLLEtBQU0sSUFBSTtjQUs1Q0osT0FBT0MsU0FBUztZQUNsQjtZQUVBUSxPQUFPUixVQUFVSCw0QkFBNEJQLE9BQU9nQixXQUFXLEdBQUdQLFFBQVFDLEtBQUs7WUFDL0U7VUFBQSxLQUVHO1lBQ0hRLE9BQU9SLFVBQVVWLE9BQU9tQixRQUFRUCxTQUFTO1lBQ3pDO1VBQUEsS0FFRztZQUVILElBQUlBLGNBQWMsSUFBSTtjQUVwQk0sT0FBTyxFQUFFUixTQUFTVixPQUFPYSxNQUFLLEtBQU0sS0FBSyxRQUFRO2NBQ2pESixPQUFPQyxTQUFTUSxPQUFPUixPQUFPakw7Y0FDOUI7WUFDRjtVQUFBO1lBS0F5TCxPQUFPUixVQUFVVixPQUFPb0IsS0FBS1IsU0FBUztRQUFBO01BRTVDLFNBQVNBLFlBQVlaLE9BQU9lLE1BQUs7TUFFakMsT0FBT0c7SUFDVDtJQUVBLElBQUlHLFdBQVcsbUJBQWtCbE0sT0FBT3NMLFFBQVE7TUFDOUMsT0FBT1QsT0FBT3NCLFFBQVFMLFFBQVFqQixPQUFPdUIsTUFBTXBNLEtBQUssR0FBR3NMLE1BQU0sQ0FBQztJQUM1RDtJQUdBLElBQUllLGdCQUErQixtQkFBSXJDLFNBQVE7SUFDL0MsSUFBSXNDLFNBQVMsaUJBQWdCQyxTQUFTO01BQ3BDLElBQUlBLFFBQVF0RyxTQUFTLFVBQVUsQ0FBQ3NHLFFBQVF2RyxVQUV4Q3VHLFFBQVFqTSxTQUFTLEdBQUc7UUFDbEI7TUFDRjtNQUVBLElBQUlOLFFBQVF1TSxRQUFRdk07UUFDaEJnRyxTQUFTdUcsUUFBUXZHO01BQ3JCLElBQUl3RyxpQkFBaUJELFFBQVFsRyxXQUFXTCxPQUFPSyxVQUFVa0csUUFBUW5HLFNBQVNKLE9BQU9JO01BRWpGLE9BQU9KLE9BQU9DLFNBQVMsUUFBUTtRQUM3QkQsU0FBU0EsT0FBT0E7UUFDaEIsSUFBSSxDQUFDQSxRQUFRO01BQ2Y7TUFHQSxJQUFJdUcsUUFBUXJHLE1BQU01RixXQUFXLEtBQUtOLE1BQU13QyxXQUFXLENBQUMsTUFBTSxNQUV2RCxDQUFDNkosY0FBY2xDLElBQUluRSxNQUFNLEdBQUc7UUFDN0I7TUFDRjtNQUlBLElBQUl3RyxnQkFBZ0I7UUFDbEI7TUFDRjtNQUVBSCxjQUFjaEMsSUFBSWtDLFNBQVMsSUFBSTtNQUMvQixJQUFJakIsU0FBUyxFQUFDO01BQ2QsSUFBSW1CLFFBQVFQLFNBQVNsTSxPQUFPc0wsTUFBTTtNQUNsQyxJQUFJb0IsY0FBYzFHLE9BQU9FO01BRXpCLFNBQVMvRixJQUFJLEdBQUdvRSxJQUFJLEdBQUdwRSxJQUFJc00sTUFBTW5NLFFBQVFILEtBQUs7UUFDNUMsU0FBU2dKLElBQUksR0FBR0EsSUFBSXVELFlBQVlwTSxRQUFRNkksS0FBSzVFLEtBQUs7VUFDaERnSSxRQUFRckcsTUFBTTNCLEtBQUsrRyxPQUFPbkwsS0FBS3NNLE1BQU10TSxHQUFHa0YsUUFBUSxRQUFRcUgsWUFBWXZELEVBQUUsSUFBSXVELFlBQVl2RCxLQUFLLE1BQU1zRCxNQUFNdE07UUFDekc7TUFDRjtJQUNGO0lBQ0EsSUFBSXdNLGNBQWMsc0JBQXFCSixTQUFTO01BQzlDLElBQUlBLFFBQVF0RyxTQUFTLFFBQVE7UUFDM0IsSUFBSWpHLFFBQVF1TSxRQUFRdk07UUFFcEIsSUFDQUEsTUFBTXdDLFdBQVcsQ0FBQyxNQUFNLE9BQ3hCeEMsTUFBTXdDLFdBQVcsQ0FBQyxNQUFNLElBQUk7VUFFMUIrSixRQUFRLFlBQVk7VUFDcEJBLFFBQVF2TSxRQUFRO1FBQ2xCO01BQ0Y7SUFDRjtJQUNBLElBQUk0TSxhQUFhO0lBRWpCLElBQUlDLG9CQUFvQiw0QkFBMkJOLFNBQVM7TUFDMUQsT0FBT0EsUUFBUXRHLFNBQVMsVUFBVXNHLFFBQVFwRyxTQUFTYixRQUFRc0gsVUFBVSxJQUFJO0lBQzNFO0lBRUEsSUFBSUUsNkJBQTZCLHFDQUFvQy9DLE9BQU87TUFDMUUsT0FBTyxVQUFVd0MsU0FBU2hCLE9BQU9wRixVQUFVO1FBQ3pDLElBQUlvRyxRQUFRdEcsU0FBUyxVQUFVOEQsTUFBTXVDLFFBQVE7UUFDN0MsSUFBSVMsc0JBQXNCUixRQUFRdk0sTUFBTWdOLE1BQU0sZ0NBQWdDO1FBRTlFLElBQUlELHFCQUFxQjtVQUN2QixJQUFJRSxXQUFXVixRQUFRdkcsV0FBV0csU0FBUztVQWdCM0MsSUFBSStHLG1CQUFtQkQsV0FBVzlHLFNBQVMsR0FBR0EsV0FDOUNBO1VBRUEsU0FBU2hHLElBQUkrTSxpQkFBaUI1TSxTQUFTLEdBQUdILEtBQUssR0FBR0EsS0FBSztZQUNyRCxJQUFJZ04sT0FBT0QsaUJBQWlCL007WUFFNUIsSUFBSWdOLEtBQUsvRyxPQUFPbUcsUUFBUW5HLE1BQU07Y0FDNUI7WUFDRjtZQWtCQSxJQUFJK0csS0FBSzlHLFNBQVNrRyxRQUFRbEcsUUFBUTtjQUNoQyxJQUFJd0csa0JBQWtCTSxJQUFJLEdBQUc7Z0JBQzNCO2NBQ0Y7Y0FFQTtZQUNGO1VBQ0Y7VUFFQUosb0JBQW9CNUssUUFBUSxVQUFVaUwsbUJBQW1CO1lBQ3ZEMUssUUFBUUMsTUFBTSx1QkFBd0J5SyxvQkFBb0IsbUZBQXFGQSxrQkFBa0JDLE1BQU0sUUFBUSxFQUFFLEtBQUssWUFBYTtVQUNyTSxDQUFDO1FBQ0g7TUFDRjtJQUNGO0lBRUEsSUFBSTlLLGVBQWUsdUJBQXNCZ0ssU0FBUztNQUNoRCxPQUFPQSxRQUFRdEcsS0FBS3pELFdBQVcsQ0FBQyxNQUFNLE9BQU8rSixRQUFRdEcsS0FBS3pELFdBQVcsQ0FBQyxNQUFNO0lBQzlFO0lBRUEsSUFBSThLLDhCQUE4QixzQ0FBcUMvQixPQUFPcEYsVUFBVTtNQUN0RixTQUFTaEcsSUFBSW9MLFFBQVEsR0FBR3BMLEtBQUssR0FBR0EsS0FBSztRQUNuQyxJQUFJLENBQUNvQyxhQUFhNEQsU0FBU2hHLEVBQUUsR0FBRztVQUM5QixPQUFPO1FBQ1Q7TUFDRjtNQUVBLE9BQU87SUFDVDtJQUtBLElBQUlvTixpQkFBaUIseUJBQXdCaEIsU0FBUztNQUNwREEsUUFBUXRHLE9BQU87TUFDZnNHLFFBQVF2TSxRQUFRO01BQ2hCdU0sUUFBUSxZQUFZO01BQ3BCQSxRQUFRcEcsV0FBVztNQUNuQm9HLFFBQVFyRyxRQUFRO0lBQ2xCO0lBRUEsSUFBSXNILHVCQUF1QiwrQkFBOEJqQixTQUFTaEIsT0FBT3BGLFVBQVU7TUFDakYsSUFBSSxDQUFDNUQsYUFBYWdLLE9BQU8sR0FBRztRQUMxQjtNQUNGO01BRUEsSUFBSUEsUUFBUXZHLFFBQVE7UUFDbEJ0RCxRQUFRQyxNQUFNLG9MQUFvTDtRQUNsTTRLLGVBQWVoQixPQUFPO01BQ3hCLFdBQVdlLDRCQUE0Qi9CLE9BQU9wRixRQUFRLEdBQUc7UUFDdkR6RCxRQUFRQyxNQUFNLHNHQUFzRztRQUNwSDRLLGVBQWVoQixPQUFPO01BQ3hCO0lBQ0Y7SUFFQSxJQUFJa0IsWUFBWSxPQUFPck4sYUFBYTtJQUNwQyxJQUFJc04sdUJBQXVCRCxZQUFZLFNBQVl2QyxxQkFBcUIsV0FBVyxZQUFZO01BQzdGLE9BQU9DLGlCQUFpQixXQUFXLFlBQVk7UUFDN0MsSUFBSXBCLFFBQVEsQ0FBQztRQUNiLE9BQU8sVUFBVTRELE1BQU07VUFDckIsT0FBTzVELE1BQU00RDtRQUNmO01BQ0YsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFJQyx1QkFBdUIsQ0FBQy9DLE9BQU9nRCxRQUFRO0lBRTNDLElBQUlDLGVBQWMsc0JBQXFCdE4sVUFBUztNQUM5QyxJQUFJRyxNQUFNSCxTQUFRRztNQUVsQixJQUE2QyxDQUFDQSxLQUFLO1FBQ2pELE1BQU0sSUFBSW9OLE1BQU0sK09BQW9QO01BQ3RRO01BRUEsSUFBSU4sYUFBYTlNLFFBQVEsT0FBTztRQUM5QixJQUFJcU4sWUFBWTVOLFNBQVM2TixpQkFBaUIsbUNBQW1DO1FBSzdFQyxNQUFNbE0sVUFBVUcsUUFBUWdNLEtBQUtILFdBQVcsVUFBVWIsTUFBTTtVQU90RCxJQUFJaUIsdUJBQXVCakIsS0FBS2tCLGFBQWEsY0FBYztVQUUzRCxJQUFJRCxxQkFBcUI5SSxRQUFRLEdBQUcsTUFBTSxJQUFJO1lBQzVDO1VBQ0Y7VUFDQWxGLFNBQVNrTyxLQUFLek4sWUFBWXNNLElBQUk7VUFDOUJBLEtBQUt6TSxhQUFhLFVBQVUsRUFBRTtRQUNoQyxDQUFDO01BQ0g7TUFFQSxJQUFJNk4sZ0JBQWdCL04sU0FBUStOLGlCQUFpQlg7TUFFN0MsSUFBSSxNQUF1QztRQUV6QyxJQUFJLFVBQVU1SyxLQUFLckMsR0FBRyxHQUFHO1VBQ3ZCLE1BQU0sSUFBSW9OLE1BQU0saUZBQWtGcE4sTUFBTSxjQUFlO1FBQ3pIO01BQ0Y7TUFFQSxJQUFJNk4sV0FBVyxDQUFDO01BQ2hCLElBQUlqTjtNQUNKLElBQUlrTixpQkFBaUIsRUFBQztNQUV0QixJQUFJaEIsV0FBVztRQUNibE0sWUFBWWYsU0FBUWUsYUFBYW5CLFNBQVNrTztRQUMxQ0osTUFBTWxNLFVBQVVHLFFBQVFnTSxLQUV4Qi9OLFNBQVM2TixpQkFBaUIsMEJBQTJCdE4sTUFBTSxLQUFNLEdBQUcsVUFBVXdNLE1BQU07VUFDbEYsSUFBSXVCLFNBQVN2QixLQUFLa0IsYUFBYSxjQUFjLEVBQUVoQixNQUFNLEdBQUc7VUFFeEQsU0FBU2xOLElBQUksR0FBR0EsSUFBSXVPLE9BQU9wTyxRQUFRSCxLQUFLO1lBQ3RDcU8sU0FBU0UsT0FBT3ZPLE1BQU07VUFDeEI7VUFFQXNPLGVBQWUvTSxLQUFLeUwsSUFBSTtRQUMxQixDQUFDO01BQ0g7TUFFQSxJQUFJd0I7TUFFSixJQUFJQyxxQkFBcUIsQ0FBQ3RDLFFBQVFLLFdBQVc7TUFFN0MsSUFBSSxNQUF1QztRQUN6Q2lDLG1CQUFtQmxOLEtBQUtvTCwyQkFBMkI7VUFBQSxJQUM3Q1IsU0FBUztZQUNYLE9BQU92QyxNQUFNdUM7VUFDZjtRQUVGLENBQUMsR0FBR2tCLG9CQUFvQjtNQUMxQjtNQUVBLElBQUlDLFdBQVc7UUFDYixJQUFJb0I7UUFDSixJQUFJQyxvQkFBb0IsQ0FBQ2pFLE9BQU9rRSxXQUFXLE9BQXdDLFVBQVV4QyxTQUFTO1VBQ3BHLElBQUksQ0FBQ0EsUUFBUXhHLE1BQU07WUFDakIsSUFBSXdHLFFBQVEsV0FBVztjQUNyQnNDLGFBQWF6TSxPQUFPbUssUUFBUSxTQUFTO1lBQ3ZDLFdBQVdBLFFBQVF2TSxTQUFTdU0sUUFBUXRHLFNBQVM0RSxPQUFPbUUsU0FBUztjQUczREgsYUFBYXpNLE9BQU9tSyxRQUFRdk0sUUFBUSxJQUFJO1lBQzFDO1VBQ0Y7UUFDRixJQUFJNkssT0FBT29FLFVBQVUsVUFBVTVNLE1BQU07VUFDbkN3TSxhQUFhek0sT0FBT0MsSUFBSTtRQUMxQixDQUFDLENBQUM7UUFDRixJQUFJNk0sYUFBYXJFLE9BQU9zRSxXQUFXUCxtQkFBbUJRLE9BQU9iLGVBQWVPLGlCQUFpQixDQUFDO1FBRTlGLElBQUlPLFdBQVcsbUJBQWtCQyxRQUFRO1VBQ3ZDLE9BQU96RSxPQUFPMEUsVUFBVTFFLE9BQU8yRSxRQUFRRixNQUFNLEdBQUdKLFVBQVU7UUFDNUQ7UUFFQVAsVUFBVSxnQkFBZ0JjLFVBQVVDLFlBQVlDLFFBQU9DLGFBQWE7VUFDbEVmLGVBQWVjO1VBRWYsSUFBNkNELFdBQVdsSyxRQUFRLFFBQVc7WUFDekVxSixlQUFlO2NBQ2J6TSxRQUFRLGlCQUFnQkMsTUFBTTtnQkFDNUJzTixPQUFNdk4sT0FBT0MsT0FBT3FOLFdBQVdsSyxHQUFHO2NBQ3BDO1lBQ0Y7VUFDRjtVQUVBNkosU0FBU0ksV0FBV0EsV0FBVyxNQUFNQyxXQUFXSixTQUFTLE1BQU1JLFdBQVdKLE1BQU07VUFFaEYsSUFBSU0sYUFBYTtZQUNmN0YsTUFBTXlFLFNBQVNrQixXQUFXL0IsUUFBUTtVQUNwQztRQUNGO01BQ0YsT0FBTztRQUNMLElBQUlrQyxxQkFBcUIsQ0FBQ2hGLE9BQU9rRSxTQUFTO1FBRTFDLElBQUllLGNBQWNqRixPQUFPc0UsV0FBV1AsbUJBQW1CUSxPQUFPYixlQUFlc0Isa0JBQWtCLENBQUM7UUFFaEcsSUFBSUUsVUFBVSxrQkFBaUJULFFBQVE7VUFDckMsT0FBT3pFLE9BQU8wRSxVQUFVMUUsT0FBTzJFLFFBQVFGLE1BQU0sR0FBR1EsV0FBVztRQUM3RDtRQUdBLElBQUlFLG9CQUFvQnRDLHFCQUFxQmEsYUFBYSxFQUFFNU4sR0FBRztRQUUvRCxJQUFJc1AsWUFBVyxtQkFBa0JSLFVBQVVDLFlBQVk7VUFDckQsSUFBSS9CLE9BQU8rQixXQUFXL0I7VUFFdEIsSUFBSXFDLGtCQUFrQnJDLFVBQVUsUUFBVztZQUN6Q3FDLGtCQUFrQnJDLFFBQVFvQyxRQUFRTixXQUFXQSxXQUFXLE1BQU1DLFdBQVdKLFNBQVMsTUFBTUksV0FBV0osTUFBTTtVQUMzRztVQUVBLE9BQU9VLGtCQUFrQnJDO1FBQzNCO1FBRUFnQixVQUFVLGtCQUFpQmMsVUFBVUMsWUFBWUMsUUFBT0MsYUFBYTtVQUNuRSxJQUFJakMsT0FBTytCLFdBQVcvQjtVQUN0QixJQUFJbEIsUUFBUXdELFVBQVNSLFVBQVVDLFVBQVU7VUFFekMsSUFBSTNGLE1BQU11QyxXQUFXLFFBQVc7WUFJOUIsSUFBSXNELGFBQWE7Y0FDZjdGLE1BQU15RSxTQUFTYixRQUFRO1lBQ3pCO1lBRUEsSUFFMEMrQixXQUFXbEssUUFBUSxRQUFXO2NBQ3RFLE9BQU9pSCxRQUFRaUQsV0FBV2xLO1lBQzVCO1lBRUEsT0FBT2lIO1VBQ1QsT0FBTztZQVFMLElBQUltRCxhQUFhO2NBQ2Y3RixNQUFNeUUsU0FBU2IsUUFBUWxCO1lBQ3pCLE9BQU87Y0FDTCxPQUFPQTtZQUNUO1VBQ0Y7UUFDRjtNQUNGO01BRUEsSUFBSTFDLFFBQVE7UUFDVnBKO1FBQ0FULE9BQU8sSUFBSUEsTUFBTWEsV0FBVztVQUMxQko7VUFDQVk7VUFDQVgsT0FBT0osU0FBUUk7VUFDZmdCLFFBQVFwQixTQUFRb0I7VUFDaEJOLFNBQVNkLFNBQVFjO1VBQ2pCRixnQkFBZ0JaLFNBQVFZO1FBQzFCLENBQUM7UUFDRFIsT0FBT0osU0FBUUk7UUFDZjROO1FBQ0EwQixZQUFZLENBQUM7UUFDYjlOLFFBQVF1TTtNQUNWO01BQ0E1RSxNQUFNN0osTUFBTStCLFFBQVF3TSxjQUFjO01BQ2xDLE9BQU8xRTtJQUNUO0lBRUFoSyxRQUFRdUssVUFBVXdEO0VBQUE7QUFBQTs7O0FDNWJsQjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6QzFLLFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVb1E7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQTtFQUFBO0lBQUEscUJBQW9CO01BQ2xCL00sUUFBT3JELFVBQVVxUSxZQUFXdlEsT0FBT2lGLFNBQVNqRixPQUFPaUYsT0FBT3VMLE1BQUssR0FBSSxVQUFVQyxRQUFRO1FBQ25GLFNBQVNuUSxJQUFJLEdBQUdBLElBQUlvUSxVQUFValEsUUFBUUgsS0FBSztVQUN6QyxJQUFJcVEsU0FBU0QsVUFBVXBRO1VBRXZCLFNBQVNRLE9BQU82UCxRQUFRO1lBQ3RCLElBQUkzUSxPQUFPbUMsVUFBVXlPLGVBQWV0QyxLQUFLcUMsUUFBUTdQLEdBQUcsR0FBRztjQUNyRDJQLE9BQU8zUCxPQUFPNlAsT0FBTzdQO1lBQ3ZCO1VBQ0Y7UUFDRjtRQUVBLE9BQU8yUDtNQUNULEdBQUdsTixRQUFPckQsUUFBUWtMLGFBQWEsTUFBTTdILFFBQU9yRCxRQUFRLGFBQWFxRCxRQUFPckQ7TUFDeEUsT0FBT3FRLFVBQVNNLE1BQU0sTUFBTUgsU0FBUztJQUN2QztJQUVBbk4sUUFBT3JELFVBQVVxUSxXQUFVaE4sUUFBT3JELFFBQVFrTCxhQUFhLE1BQU03SCxRQUFPckQsUUFBUSxhQUFhcUQsUUFBT3JEO0VBQUE7QUFBQTs7O0FDakJoRztFQUFBO0lBQUE7O0lBRUFGLE9BQU9DLGVBQWVDLFNBQVMsY0FBYztNQUFFQyxPQUFPO0lBQUssQ0FBQztJQUU1RCxJQUFJMlEseUJBQXlCQyxRQUFRO0lBRXJDLHlCQUEwQjdOLEdBQUc7TUFBRSxPQUFPQSxLQUFLQSxFQUFFa0ksYUFBYWxJLElBQUk7UUFBRSxXQUFXQTtNQUFFO0lBQUc7SUFFaEYsSUFBSThOLGdDQUE2QywrQkFBZ0JGLHNCQUFzQjtJQU12RixJQUFJRyx1QkFBd0IsVUFBVUMsaUJBQWlCQyxpQkFBaUI7TUFDdEUsT0FBT0gsOEJBQThCLFdBQVdFLGlCQUFpQkMsZUFBZTtJQUNsRjtJQUVBalIsUUFBUXVLLFVBQVV3RztFQUFBO0FBQUE7OztBQ2xCbEI7RUFBQTtJQUFBOztJQUVBalIsT0FBT0MsZUFBZUMsU0FBUyxjQUFjO01BQUVDLE9BQU87SUFBSyxDQUFDO0lBRTVELElBQUl5TixZQUFZLE9BQU9yTixhQUFhO0lBQ3BDLDZCQUE2QjhQLFlBQVllLGtCQUFrQkMsYUFBWTtNQUNyRSxJQUFJQyxlQUFlO01BQ25CRCxZQUFXN0QsTUFBTSxHQUFHLEVBQUVsTCxRQUFRLFVBQVVpUCxXQUFXO1FBQ2pELElBQUlsQixXQUFXa0IsZUFBZSxRQUFXO1VBQ3ZDSCxpQkFBaUJ2UCxLQUFLd08sV0FBV2tCLGFBQWEsR0FBRztRQUNuRCxPQUFPO1VBQ0xELGdCQUFnQkMsWUFBWTtRQUM5QjtNQUNGLENBQUM7TUFDRCxPQUFPRDtJQUNUO0lBQ0EsSUFBSUUsaUJBQWlCLHlCQUF3QnRILE9BQU8yRixZQUFZNEIsYUFBYTtNQUMzRSxJQUFJRixZQUFZckgsTUFBTXBKLE1BQU0sTUFBTStPLFdBQVcvQjtNQUU3QyxJQUtDLGlCQUFnQixTQUlqQkYsY0FBYyxTQUFTMUQsTUFBTXVDLFdBQVcsV0FBY3ZDLE1BQU1tRyxXQUFXa0IsZUFBZSxRQUFXO1FBQy9GckgsTUFBTW1HLFdBQVdrQixhQUFhMUIsV0FBV0o7TUFDM0M7SUFDRjtJQUNBLElBQUlpQyxlQUFlLHVCQUFzQnhILE9BQU8yRixZQUFZNEIsYUFBYTtNQUN2RUQsZUFBZXRILE9BQU8yRixZQUFZNEIsV0FBVztNQUM3QyxJQUFJRixZQUFZckgsTUFBTXBKLE1BQU0sTUFBTStPLFdBQVcvQjtNQUU3QyxJQUFJNUQsTUFBTXlFLFNBQVNrQixXQUFXL0IsVUFBVSxRQUFXO1FBQ2pELElBQUk2RCxlQUFlO1FBQ25CLElBQUlDLFVBQVUvQjtRQUVkLEdBQUc7VUFDRCxJQUFJZ0MsY0FBYzNILE1BQU0zSCxPQUFPc04sZUFBZStCLFVBQVUsTUFBTUwsWUFBWSxJQUFJSyxTQUFTMUgsTUFBTTdKLE9BQU8sSUFBSTtVQUV4RyxJQUFJLENBQUN1TixhQUFhaUUsZ0JBQWdCLFFBQVc7WUFDM0NGLGdCQUFnQkU7VUFDbEI7VUFFQUQsVUFBVUEsUUFBUTdGO1FBQ3BCLFNBQVM2RixZQUFZO1FBRXJCLElBQUksQ0FBQ2hFLGFBQWErRCxhQUFhbFIsV0FBVyxHQUFHO1VBQzNDLE9BQU9rUjtRQUNUO01BQ0Y7SUFDRjtJQUVBelIsUUFBUTRSLHNCQUFzQkE7SUFDOUI1UixRQUFRd1IsZUFBZUE7SUFDdkJ4UixRQUFRc1IsaUJBQWlCQTtFQUFBO0FBQUE7OztBQzFEekI7RUFBQTtJQUFBOztJQUVBLElBQUksT0FBdUM7TUFDekNqTyxRQUFPckQsVUFBVTtJQUNuQixPQUFPO01BQ0xxRCxRQUFPckQsVUFBVTZSO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkE7RUFBQTtJQUFBOztJQUVBL1IsT0FBT0MsZUFBZUMsU0FBUyxjQUFjO01BQUVDLE9BQU87SUFBSyxDQUFDO0lBSzVELGlCQUFpQjZSLEtBQUs7TUFNcEIsSUFBSTdOLElBQUk7TUFFUixJQUFJTztRQUNBcEUsSUFBSTtRQUNKMlIsTUFBTUQsSUFBSXZSO01BRWQsT0FBT3dSLE9BQU8sR0FBRyxFQUFFM1IsR0FBRzJSLE9BQU8sR0FBRztRQUM5QnZOLElBQUlzTixJQUFJclAsV0FBV3JDLENBQUMsSUFBSSxNQUFRLEtBQUlxQyxXQUFXLEVBQUVyQyxDQUFDLElBQUksUUFBUyxJQUFLLEtBQUlxQyxXQUFXLEVBQUVyQyxDQUFDLElBQUksUUFBUyxLQUFNLEtBQUlxQyxXQUFXLEVBQUVyQyxDQUFDLElBQUksUUFBUztRQUN4SW9FLElBRUMsS0FBSSxTQUFVLGNBQWUsT0FBTSxNQUFNLFNBQVU7UUFDcERBLEtBRUFBLE1BQU07UUFDTlAsSUFFQyxLQUFJLFNBQVUsY0FBZSxPQUFNLE1BQU0sU0FBVSxNQUVuRCxLQUFJLFNBQVUsY0FBZSxPQUFNLE1BQU0sU0FBVTtNQUN0RDtNQUdBLFFBQVE4TjtRQUFBLEtBQ0Q7VUFDSDlOLEtBQU0sS0FBSXhCLFdBQVdyQyxJQUFJLENBQUMsSUFBSSxRQUFTO1FBQUEsS0FFcEM7VUFDSDZELEtBQU0sS0FBSXhCLFdBQVdyQyxJQUFJLENBQUMsSUFBSSxRQUFTO1FBQUEsS0FFcEM7VUFDSDZELEtBQUs2TixJQUFJclAsV0FBV3JDLENBQUMsSUFBSTtVQUN6QjZELElBRUMsS0FBSSxTQUFVLGNBQWUsT0FBTSxNQUFNLFNBQVU7TUFBQTtNQUt4REEsS0FBS0EsTUFBTTtNQUNYQSxJQUVDLEtBQUksU0FBVSxjQUFlLE9BQU0sTUFBTSxTQUFVO01BQ3BELE9BQVMsTUFBSUEsTUFBTSxRQUFRLEdBQUcrTixTQUFTLEVBQUU7SUFDM0M7SUFFQWhTLFFBQVF1SyxVQUFVMEg7RUFBQTtBQUFBOzs7QUMxRGxCO0VBQUE7SUFBQTs7SUFFQSxJQUFJLE9BQXVDO01BQ3pDNU8sUUFBT3JELFVBQVU7SUFDbkIsT0FBTztNQUNMcUQsUUFBT3JELFVBQVVrUztJQUNuQjtFQUFBO0FBQUE7OztBQ05BO0VBQUE7SUFBQTs7SUFFQXBTLE9BQU9DLGVBQWVDLFNBQVMsY0FBYztNQUFFQyxPQUFPO0lBQUssQ0FBQztJQUU1RCxJQUFJa1MsZUFBZTtNQUNqQkMseUJBQXlCO01BQ3pCQyxtQkFBbUI7TUFDbkJDLGtCQUFrQjtNQUNsQkMsa0JBQWtCO01BQ2xCQyxTQUFTO01BQ1RDLGNBQWM7TUFDZEMsaUJBQWlCO01BQ2pCQyxhQUFhO01BQ2JDLFNBQVM7TUFDVEMsTUFBTTtNQUNOQyxVQUFVO01BQ1ZDLGNBQWM7TUFDZEMsWUFBWTtNQUNaQyxjQUFjO01BQ2RDLFdBQVc7TUFDWEMsU0FBUztNQUNUQyxZQUFZO01BQ1pDLGFBQWE7TUFDYkMsY0FBYztNQUNkQyxZQUFZO01BQ1pDLGVBQWU7TUFDZkMsZ0JBQWdCO01BQ2hCQyxpQkFBaUI7TUFDakJDLFdBQVc7TUFDWEMsZUFBZTtNQUNmQyxjQUFjO01BQ2RDLGtCQUFrQjtNQUNsQkMsWUFBWTtNQUNaQyxZQUFZO01BQ1pDLFNBQVM7TUFDVEMsT0FBTztNQUNQQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLE1BQU07TUFDTkMsaUJBQWlCO01BRWpCQyxhQUFhO01BQ2JDLGNBQWM7TUFDZEMsYUFBYTtNQUNiQyxpQkFBaUI7TUFDakJDLGtCQUFrQjtNQUNsQkMsa0JBQWtCO01BQ2xCQyxlQUFlO01BQ2ZDLGFBQWE7SUFDZjtJQUVBaFYsUUFBUXVLLFVBQVU0SDtFQUFBO0FBQUE7OztBQ3JEbEI7RUFBQTtJQUFBOztJQUVBLElBQUksT0FBdUM7TUFDekM5TyxRQUFPckQsVUFBVTtJQUNuQixPQUFPO01BQ0xxRCxRQUFPckQsVUFBVWlWO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkE7RUFBQTtJQUFBOztJQUVBblYsT0FBT0MsZUFBZUMsU0FBUyxjQUFjO01BQUVDLE9BQU87SUFBSyxDQUFDO0lBRTVELElBQUlpVixhQUFhQztJQUNqQixJQUFJQyxXQUFXQztJQUNmLElBQUkxSyxVQUFVTTtJQUVkLHlCQUEwQmpJLEdBQUc7TUFBRSxPQUFPQSxLQUFLQSxFQUFFa0ksYUFBYWxJLElBQUk7UUFBRSxXQUFXQTtNQUFFO0lBQUc7SUFFaEYsSUFBSXNTLHNCQUFtQywrQkFBZ0JKLFVBQVU7SUFDakUsSUFBSUssb0JBQWlDLCtCQUFnQkgsUUFBUTtJQUM3RCxJQUFJaEssbUJBQWdDLCtCQUFnQlQsT0FBTztJQUUzRCxJQUFJNkssZ0NBQWdDO0FBQUE7QUFBQTtBQUFBO0lBQ3BDLElBQUlDLGdDQUFnQztJQUNwQyxJQUFJQyxpQkFBaUI7SUFDckIsSUFBSUMsaUJBQWlCO0lBRXJCLElBQUlDLG1CQUFtQiwyQkFBMEJDLFVBQVU7TUFDekQsT0FBT0EsU0FBU3BULFdBQVcsQ0FBQyxNQUFNO0lBQ3BDO0lBRUEsSUFBSXFULHFCQUFxQiw2QkFBNEI3VixPQUFPO01BQzFELE9BQU9BLFNBQVMsUUFBUSxPQUFPQSxVQUFVO0lBQzNDO0lBRUEsSUFBSThWLG1CQUFrQyxnQ0FBaUIsV0FBVyxVQUFVQyxXQUFXO01BQ3JGLE9BQU9KLGlCQUFpQkksU0FBUyxJQUFJQSxZQUFZQSxVQUFVMVEsUUFBUW9RLGdCQUFnQixLQUFLLEVBQUVPLGFBQVk7SUFDeEcsQ0FBQztJQUVELElBQUlDLG9CQUFvQiw0QkFBMkJ0VixLQUFLWCxPQUFPO01BQzdELFFBQVFXO1FBQUEsS0FDRDtRQUFBLEtBQ0E7VUFDSDtZQUNFLElBQUksT0FBT1gsVUFBVSxVQUFVO2NBQzdCLE9BQU9BLE1BQU1xRixRQUFRcVEsZ0JBQWdCLFVBQVUxSSxPQUFPa0osSUFBSXJPLElBQUk7Z0JBQzVEc08sU0FBUztrQkFDUHhJLE1BQU11STtrQkFDTjVHLFFBQVF6SDtrQkFDUitELE1BQU11SztnQkFDUjtnQkFDQSxPQUFPRDtjQUNULENBQUM7WUFDSDtVQUNGO01BQUE7TUFHSixJQUFJWixrQkFBa0IsV0FBVzNVLFNBQVMsS0FBSyxDQUFDZ1YsaUJBQWlCaFYsR0FBRyxLQUFLLE9BQU9YLFVBQVUsWUFBWUEsVUFBVSxHQUFHO1FBQ2pILE9BQU9BLFFBQVE7TUFDakI7TUFFQSxPQUFPQTtJQUNUO0lBRUEsSUFBSSxNQUF1QztNQUNyQ29XLHNCQUFzQjtNQUN0QkMsZ0JBQWdCLENBQUMsVUFBVSxRQUFRLFdBQVcsV0FBVyxPQUFPO01BQ2hFQyx1QkFBdUJMO01BQ3ZCTSxZQUFZO01BQ1pDLGdCQUFnQjtNQUNoQkMsa0JBQWtCLENBQUM7TUFFdkJSLG9CQUFvQiw0QkFBMkJ0VixLQUFLWCxPQUFPO1FBQ3pELElBQUlXLFFBQVEsV0FBVztVQUNyQixJQUFJLE9BQU9YLFVBQVUsWUFBWXFXLGNBQWMvUSxRQUFRdEYsS0FBSyxNQUFNLE1BQU0sQ0FBQ29XLG9CQUFvQnBULEtBQUtoRCxLQUFLLE1BQU1BLE1BQU0wVyxPQUFPLENBQUMsTUFBTTFXLE1BQU0wVyxPQUFPMVcsTUFBTU0sU0FBUyxDQUFDLEtBQUtOLE1BQU0wVyxPQUFPLENBQUMsTUFBTSxPQUFPMVcsTUFBTTBXLE9BQU8sQ0FBQyxNQUFNLE1BQU07WUFDdE4sTUFBTSxJQUFJM0ksTUFBTSxtR0FBbUcvTixRQUFRLE1BQU07VUFDbkk7UUFDRjtRQUVBLElBQUkyVyxZQUFZTCxxQkFBcUIzVixLQUFLWCxLQUFLO1FBRS9DLElBQUkyVyxjQUFjLE1BQU0sQ0FBQ2hCLGlCQUFpQmhWLEdBQUcsS0FBS0EsSUFBSTJFLFFBQVEsR0FBRyxNQUFNLE1BQU1tUixnQkFBZ0I5VixTQUFTLFFBQVc7VUFDL0c4VixnQkFBZ0I5VixPQUFPO1VBQ3ZCK0IsUUFBUUMsTUFBTSxtRkFBbUZoQyxJQUFJMEUsUUFBUWtSLFdBQVcsS0FBSyxFQUFFbFIsUUFBUW1SLGVBQWUsVUFBVTNFLEtBQUsrRSxPQUFPO1lBQzFLLE9BQU9BLE1BQU1DLGFBQVk7VUFDM0IsQ0FBQyxJQUFJLEdBQUc7UUFDVjtRQUVBLE9BQU9GO01BQ1Q7SUFDRjtJQUVBLElBQUlHLDZCQUE2QjtJQUVqQyw2QkFBNkJDLGFBQWE3RyxZQUFZOEcsZUFBZTtNQUNuRSxJQUFJQSxpQkFBaUIsTUFBTTtRQUN6QixPQUFPO01BQ1Q7TUFFQSxJQUFJQSxjQUFjQyxxQkFBcUIsUUFBVztRQUNoRCxJQUE2Q0QsY0FBY2pGLFVBQVMsS0FBTSx5QkFBeUI7VUFDakcsTUFBTSxJQUFJaEUsTUFBTStJLDBCQUEwQjtRQUM1QztRQUVBLE9BQU9FO01BQ1Q7TUFFQSxRQUFRLE9BQU9BO1FBQUEsS0FDUjtVQUNIO1lBQ0UsT0FBTztVQUNUO1FBQUEsS0FFRztVQUNIO1lBQ0UsSUFBSUEsY0FBY0UsU0FBUyxHQUFHO2NBQzVCZixTQUFTO2dCQUNQeEksTUFBTXFKLGNBQWNySjtnQkFDcEIyQixRQUFRMEgsY0FBYzFIO2dCQUN0QjFELE1BQU11SztjQUNSO2NBQ0EsT0FBT2EsY0FBY3JKO1lBQ3ZCO1lBRUEsSUFBSXFKLGNBQWMxSCxXQUFXLFFBQVc7Y0FDdEMsSUFBSTFELE9BQU9vTCxjQUFjcEw7Y0FFekIsSUFBSUEsU0FBUyxRQUFXO2dCQUd0QixPQUFPQSxTQUFTLFFBQVc7a0JBQ3pCdUssU0FBUztvQkFDUHhJLE1BQU0vQixLQUFLK0I7b0JBQ1gyQixRQUFRMUQsS0FBSzBEO29CQUNiMUQsTUFBTXVLO2tCQUNSO2tCQUNBdkssT0FBT0EsS0FBS0E7Z0JBQ2Q7Y0FDRjtjQUVBLElBQUkwRCxTQUFTMEgsY0FBYzFILFNBQVM7Y0FFcEMsSUFBNkMwSCxjQUFjeFIsUUFBUSxRQUFXO2dCQUM1RThKLFVBQVUwSCxjQUFjeFI7Y0FDMUI7Y0FFQSxPQUFPOEo7WUFDVDtZQUVBLE9BQU82SCx1QkFBdUJKLGFBQWE3RyxZQUFZOEcsYUFBYTtVQUN0RTtRQUFBLEtBRUc7VUFDSDtZQUNFLElBQUlELGdCQUFnQixRQUFXO2NBQzdCLElBQUlLLGlCQUFpQmpCO2NBQ3JCLElBQUlrQixTQUFTTCxjQUFjRCxXQUFXO2NBQ3RDWixTQUFTaUI7Y0FDVCxPQUFPRSxvQkFBb0JQLGFBQWE3RyxZQUFZbUgsTUFBTTtZQUM1RCxXQUFXLE1BQXVDO2NBQ2hEM1UsUUFBUUMsTUFBTSxzV0FBMFg7WUFDMVk7WUFFQTtVQUNGO1FBQUEsS0FFRztVQUNILElBQUksTUFBdUM7WUFDekMsSUFBSTRVLFVBQVUsRUFBQztZQUNmLElBQUlDLFdBQVdSLGNBQWMzUixRQUFRcVEsZ0JBQWdCLFVBQVUxSSxPQUFPa0osSUFBSXJPLElBQUk7Y0FDNUUsSUFBSTRQLGNBQWMsY0FBY0YsUUFBUWpYO2NBQ3hDaVgsUUFBUTdWLEtBQUssV0FBVytWLGNBQWMsa0JBQWtCNVAsR0FBR3hDLFFBQVEsNkJBQTZCLEVBQUUsSUFBSSxHQUFHO2NBQ3pHLE9BQU8sT0FBT29TLGNBQWM7WUFDOUIsQ0FBQztZQUVELElBQUlGLFFBQVFqWCxRQUFRO2NBQ2xCb0MsUUFBUUMsTUFBTSxvSEFBeUgsRUFBQyxDQUFFeU0sT0FBT21JLFNBQVMsQ0FBQyxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxFQUFFL1IsS0FBSyxJQUFJLElBQUksc0RBQXNELFNBQVMrUixXQUFXLElBQUk7WUFDL1E7VUFDRjtVQUVBO01BQUE7TUFJSixJQUFJdEgsY0FBYyxNQUFNO1FBQ3RCLE9BQU84RztNQUNUO01BRUEsSUFBSVUsU0FBU3hILFdBQVc4RztNQUN4QixPQUFPVSxXQUFXLFNBQVlBLFNBQVNWO0lBQ3pDO0lBRUEsZ0NBQWdDRCxhQUFhN0csWUFBWXlILEtBQUs7TUFDNUQsSUFBSUMsU0FBUztNQUViLElBQUkxSixNQUFNMkosUUFBUUYsR0FBRyxHQUFHO1FBQ3RCLFNBQVN4WCxJQUFJLEdBQUdBLElBQUl3WCxJQUFJclgsUUFBUUgsS0FBSztVQUNuQ3lYLFVBQVVOLG9CQUFvQlAsYUFBYTdHLFlBQVl5SCxJQUFJeFgsRUFBRSxJQUFJO1FBQ25FO01BQ0YsT0FBTztRQUNMLFNBQVMyWCxRQUFRSCxLQUFLO1VBQ3BCLElBQUkzWCxRQUFRMlgsSUFBSUc7VUFFaEIsSUFBSSxPQUFPOVgsVUFBVSxVQUFVO1lBQzdCLElBQUlrUSxjQUFjLFFBQVFBLFdBQVdsUSxXQUFXLFFBQVc7Y0FDekQ0WCxVQUFVRSxPQUFPLE1BQU01SCxXQUFXbFEsU0FBUztZQUM3QyxXQUFXNlYsbUJBQW1CN1YsS0FBSyxHQUFHO2NBQ3BDNFgsVUFBVTlCLGlCQUFpQmdDLElBQUksSUFBSSxNQUFNN0Isa0JBQWtCNkIsTUFBTTlYLEtBQUssSUFBSTtZQUM1RTtVQUNGLE9BQU87WUFDTCxJQUFJOFgsU0FBUywyQkFBMkIsTUFBdUM7Y0FDN0UsTUFBTSxJQUFJL0osTUFBTStJLDBCQUEwQjtZQUM1QztZQUVBLElBQUk1SSxNQUFNMkosUUFBUTdYLEtBQUssS0FBSyxPQUFPQSxNQUFNLE9BQU8sYUFBYWtRLGNBQWMsUUFBUUEsV0FBV2xRLE1BQU0sUUFBUSxTQUFZO2NBQ3RILFNBQVMrWCxLQUFLLEdBQUdBLEtBQUsvWCxNQUFNTSxRQUFReVgsTUFBTTtnQkFDeEMsSUFBSWxDLG1CQUFtQjdWLE1BQU0rWCxHQUFHLEdBQUc7a0JBQ2pDSCxVQUFVOUIsaUJBQWlCZ0MsSUFBSSxJQUFJLE1BQU03QixrQkFBa0I2QixNQUFNOVgsTUFBTStYLEdBQUcsSUFBSTtnQkFDaEY7Y0FDRjtZQUNGLE9BQU87Y0FDTCxJQUFJQyxlQUFlVixvQkFBb0JQLGFBQWE3RyxZQUFZbFEsS0FBSztjQUVyRSxRQUFROFg7Z0JBQUEsS0FDRDtnQkFBQSxLQUNBO2tCQUNIO29CQUNFRixVQUFVOUIsaUJBQWlCZ0MsSUFBSSxJQUFJLE1BQU1FLGVBQWU7b0JBQ3hEO2tCQUNGO2dCQUFBO2tCQUdBO29CQUNFLElBQTZDRixTQUFTLGFBQWE7c0JBQ2pFcFYsUUFBUUMsTUFBTTZTLDZCQUE2QjtvQkFDN0M7b0JBRUFvQyxVQUFVRSxPQUFPLE1BQU1FLGVBQWU7a0JBQ3hDO2NBQUE7WUFFTjtVQUNGO1FBQ0Y7TUFDRjtNQUVBLE9BQU9KO0lBQ1Q7SUFFQSxJQUFJSyxlQUFlO0lBQ25CLElBQUlDO0lBRUosSUFBSSxNQUF1QztNQUN6Q0EsbUJBQW1CO0lBQ3JCO0lBSUEsSUFBSS9CO0lBQ0osSUFBSWdDLGtCQUFrQiwwQkFBeUJDLE1BQU1sSSxZQUFZNkcsYUFBYTtNQUM1RSxJQUFJcUIsS0FBSzlYLFdBQVcsS0FBSyxPQUFPOFgsS0FBSyxPQUFPLFlBQVlBLEtBQUssT0FBTyxRQUFRQSxLQUFLLEdBQUc5SSxXQUFXLFFBQVc7UUFDeEcsT0FBTzhJLEtBQUs7TUFDZDtNQUVBLElBQUlDLGFBQWE7TUFDakIsSUFBSS9JLFNBQVM7TUFDYjZHLFNBQVM7TUFDVCxJQUFJbUMsVUFBVUYsS0FBSztNQUVuQixJQUFJRSxXQUFXLFFBQVFBLFFBQVFDLFFBQVEsUUFBVztRQUNoREYsYUFBYTtRQUNiL0ksVUFBVWdJLG9CQUFvQlAsYUFBYTdHLFlBQVlvSSxPQUFPO01BQ2hFLE9BQU87UUFDTCxJQUE2Q0EsUUFBUSxPQUFPLFFBQVc7VUFDckU1VixRQUFRQyxNQUFNNFMsNkJBQTZCO1FBQzdDO1FBRUFqRyxVQUFVZ0osUUFBUTtNQUNwQjtNQUdBLFNBQVNuWSxJQUFJLEdBQUdBLElBQUlpWSxLQUFLOVgsUUFBUUgsS0FBSztRQUNwQ21QLFVBQVVnSSxvQkFBb0JQLGFBQWE3RyxZQUFZa0ksS0FBS2pZLEVBQUU7UUFFOUQsSUFBSWtZLFlBQVk7VUFDZCxJQUE2Q0MsUUFBUW5ZLE9BQU8sUUFBVztZQUNyRXVDLFFBQVFDLE1BQU00Uyw2QkFBNkI7VUFDN0M7VUFFQWpHLFVBQVVnSixRQUFRblk7UUFDcEI7TUFDRjtNQUVBLElBQUlxWTtNQUVKLElBQUksTUFBdUM7UUFDekNsSixTQUFTQSxPQUFPakssUUFBUTZTLGtCQUFrQixVQUFVTyxRQUFPO1VBQ3pERCxZQUFZQztVQUNaLE9BQU87UUFDVCxDQUFDO01BQ0g7TUFHQVIsYUFBYVMsWUFBWTtNQUN6QixJQUFJQyxpQkFBaUI7TUFDckIsSUFBSTNMO01BRUosT0FBUSxTQUFRaUwsYUFBYTlTLEtBQUttSyxNQUFNLE9BQU8sTUFBTTtRQUNuRHFKLGtCQUFrQixNQUNsQjNMLE1BQU07TUFDUjtNQUVBLElBQUlXLE9BQU8wSCxvQkFBb0IsV0FBVy9GLE1BQU0sSUFBSXFKO01BRXBELElBQUksTUFBdUM7UUFFekMsT0FBTztVQUNMaEw7VUFDQTJCO1VBQ0E5SixLQUFLZ1Q7VUFDTDVNLE1BQU11SztVQUNOcEUsVUFBVSxvQkFBb0I7WUFDNUIsT0FBTztVQUNUO1FBQ0Y7TUFDRjtNQUVBLE9BQU87UUFDTHBFO1FBQ0EyQjtRQUNBMUQsTUFBTXVLO01BQ1I7SUFDRjtJQUVBcFcsUUFBUW9ZLGtCQUFrQkE7SUE1UXBCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0FBQUE7OztBQzlETjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Qy9VLFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVNlk7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQTtFQUFBO0lBQUE7O0lBRUEvWSxPQUFPQyxlQUFlQyxTQUFTLGNBQWM7TUFBRUMsT0FBTztJQUFLLENBQUM7SUFFNUQsSUFBSTZZLFNBQVFqSSxRQUFRO0lBRXBCLDJCQUEyQjdOLEdBQUc7TUFDNUIsSUFBSUEsS0FBS0EsRUFBRWtJLFlBQVksT0FBT2xJO01BQzlCLElBQUlXLElBQUksc0JBQU8rRyxPQUFPLElBQUk7TUFDMUIsSUFBSTFILEdBQUc7UUFDTGxELE9BQU9pWixLQUFLL1YsQ0FBQyxFQUFFWixRQUFRLFVBQVVvQyxHQUFHO1VBQ2xDLElBQUlBLE1BQU0sV0FBVztZQUNuQixJQUFJSCxJQUFJdkUsT0FBT2taLHlCQUF5QmhXLEdBQUd3QixDQUFDO1lBQzVDMUUsT0FBT0MsZUFBZTRELEdBQUdhLEdBQUdILEVBQUUrRixNQUFNL0YsSUFBSTtjQUN0QzRVLFlBQVk7Y0FDWjdPLEtBQUssWUFBWTtnQkFDZixPQUFPcEgsRUFBRXdCO2NBQ1g7WUFDRixDQUFDO1VBQ0g7UUFDRixDQUFDO01BQ0g7TUFDQWIsRUFBRSxhQUFhWDtNQUNmLE9BQU9sRCxPQUFPb1osT0FBT3ZWLENBQUM7SUFDeEI7SUFFQSxJQUFJd1YsbUJBQWdDLGlDQUFrQkwsTUFBSztJQUUzRCxJQUFJcEwsWUFBWSxPQUFPck4sYUFBYTtJQUVwQyxJQUFJK1ksZUFBZSx1QkFBc0IxTyxRQUFRO01BQy9DLE9BQU9BLFFBQU87SUFDaEI7SUFFQSxJQUFJMk8scUJBQXFCRixpQkFBaUIsd0JBQTZCQSxpQkFBaUIsd0JBQTZCO0lBQ3JILElBQUlHLDJDQUEyQyxDQUFDNUwsWUFBWTBMLGVBQWVDLHNCQUFzQkQ7SUFDakcsSUFBSUcsdUNBQXVDRixzQkFBc0JQLE9BQU1VO0lBRXZFeFosUUFBUXNaLDJDQUEyQ0E7SUFDbkR0WixRQUFRdVosdUNBQXVDQTtFQUFBO0FBQUE7OztBQ3ZDL0M7RUFBQTtJQUFBOztJQUVBLElBQUksT0FBdUM7TUFDekNsVyxRQUFPckQsVUFBVTtJQUNuQixPQUFPO01BQ0xxRCxRQUFPckQsVUFBVXlaO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkE7RUFBQTtJQUFBOztJQUVBLElBQUlYLFNBQVFqSSxRQUFRO0lBQ3BCLElBQUk5QyxlQUFjMkw7SUFDbEIsSUFBSXJKLFlBQVdzSjtJQUNmLElBQUk3UCxjQUFja0I7SUFDbEIsSUFBSTRPLCtDQUErQ0M7SUFDbkQsSUFBSUMsUUFBUUM7SUFDWixJQUFJdkssWUFBWXdLO0lBQ2hCLElBQUlDLGtDQUFrQ0M7SUFFdEMseUJBQTBCbFgsR0FBRztNQUFFLE9BQU9BLEtBQUtBLEVBQUVrSSxhQUFhbEksSUFBSTtRQUFFLFdBQVdBO01BQUU7SUFBRztJQUVoRixJQUFJbVgsdUJBQW9DLCtCQUFnQnBNLFlBQVc7SUFDbkUsSUFBSTVDLHVCQUFvQywrQkFBZ0JyQixXQUFXO0lBRW5FLElBQUk0RCxZQUFZLE9BQU9yTixhQUFhO0lBQ3BDLElBQUlxUSxpQkFBaUIsQ0FBQyxFQUFFQTtJQUV4QixJQUFJMEosc0JBQXFDLHNCQUFNQyxjQU0vQyxPQUFPQyxnQkFBZ0IsY0FBNkIsb0NBQXFCLFdBQVc7TUFDbEYxWixLQUFLO0lBQ1AsQ0FBQyxJQUFJLElBQUk7SUFFVCxJQUFJLE1BQXVDO01BQ3pDd1osb0JBQW9CRyxjQUFjO0lBQ3BDO0lBRUEsSUFBSUMsaUJBQWdCSixvQkFBb0JLO0lBQ3hDLElBQUlDLDJCQUEyQiwyQkFBMkI7TUFDeEQsT0FBTzVCLE9BQU02QixXQUFXUCxtQkFBbUI7SUFDN0M7SUFFQXBhLFFBQVE0YSxtQkFBbUIsMEJBQTBCN1EsTUFBTTtNQUV6RCxPQUFvQixzQkFBTThRLFdBQVcsVUFBVTFVLE9BQU8yVSxLQUFLO1FBRXpELElBQUk5USxRQUFROE8sT0FBTTZCLFdBQVdQLG1CQUFtQjtRQUNoRCxPQUFPclEsS0FBSzVELE9BQU82RCxPQUFPOFEsR0FBRztNQUMvQixDQUFDO0lBQ0g7SUFFQSxJQUFJLENBQUNwTixXQUFXO01BQ2QxTixRQUFRNGEsbUJBQW1CLDBCQUEwQjdRLE1BQU07UUFDekQsT0FBTyxVQUFVNUQsT0FBTztVQUN0QixJQUFJNkQsUUFBUThPLE9BQU02QixXQUFXUCxtQkFBbUI7VUFFaEQsSUFBSXBRLFVBQVUsTUFBTTtZQU1sQkEsUUFBUW1RLHFCQUFxQixXQUFXO2NBQ3RDdlosS0FBSztZQUNQLENBQUM7WUFDRCxPQUFvQixzQkFBTUYsY0FBYzBaLG9CQUFvQkssVUFBVTtjQUNwRXhhLE9BQU8rSjtZQUNULEdBQUdELEtBQUs1RCxPQUFPNkQsS0FBSyxDQUFDO1VBQ3ZCLE9BQU87WUFDTCxPQUFPRCxLQUFLNUQsT0FBTzZELEtBQUs7VUFDMUI7UUFDRjtNQUNGO0lBQ0Y7SUFFQSxJQUFJK1EsZUFBOEIsc0JBQU1WLGNBQWMsQ0FBQyxDQUFDO0lBRXhELElBQUksTUFBdUM7TUFDekNVLGFBQWFSLGNBQWM7SUFDN0I7SUFFQSxJQUFJUyxXQUFXLHFCQUFvQjtNQUNqQyxPQUFPbEMsT0FBTTZCLFdBQVdJLFlBQVk7SUFDdEM7SUFFQSxJQUFJRSxXQUFXLG1CQUFrQkMsWUFBWUMsT0FBTztNQUNsRCxJQUFJLE9BQU9BLFVBQVUsWUFBWTtRQUMvQixJQUFJQyxjQUFjRCxNQUFNRCxVQUFVO1FBRWxDLElBQThDRSxlQUFlLFFBQVEsT0FBT0EsZ0JBQWdCLFlBQVlqTixNQUFNMkosUUFBUXNELFdBQVcsR0FBSTtVQUNuSSxNQUFNLElBQUlwTixNQUFNLDRGQUE0RjtRQUM5RztRQUVBLE9BQU9vTjtNQUNUO01BRUEsSUFBOENELFNBQVMsUUFBUSxPQUFPQSxVQUFVLFlBQVloTixNQUFNMkosUUFBUXFELEtBQUssR0FBSTtRQUNqSCxNQUFNLElBQUluTixNQUFNLDREQUE0RDtNQUM5RTtNQUVBLE9BQU9xQyxVQUFTLENBQUMsR0FBRzZLLFlBQVlDLEtBQUs7SUFDdkM7SUFFQSxJQUFJRSx1QkFBc0Msb0NBQXFCLFdBQVcsVUFBVUgsWUFBWTtNQUM5RixPQUFPL1AscUJBQXFCLFdBQVcsVUFBVWdRLE9BQU87UUFDdEQsT0FBT0YsU0FBU0MsWUFBWUMsS0FBSztNQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUNELElBQUlHLGdCQUFnQix3QkFBdUJuVixPQUFPO01BQ2hELElBQUlnVixRQUFRckMsT0FBTTZCLFdBQVdJLFlBQVk7TUFFekMsSUFBSTVVLE1BQU1nVixVQUFVQSxPQUFPO1FBQ3pCQSxRQUFRRSxxQkFBcUJGLEtBQUssRUFBRWhWLE1BQU1nVixLQUFLO01BQ2pEO01BRUEsT0FBb0Isc0JBQU16YSxjQUFjcWEsYUFBYU4sVUFBVTtRQUM3RHhhLE9BQU9rYjtNQUNULEdBQUdoVixNQUFNQyxRQUFRO0lBQ25CO0lBQ0EsbUJBQW1CbVYsWUFBVztNQUM1QixJQUFJQyxnQkFBZ0JELFdBQVVoQixlQUFlZ0IsV0FBVTNOLFFBQVE7TUFFL0QsSUFBSTZOLFNBQVMsaUJBQWdCdFYsT0FBTzJVLEtBQUs7UUFDdkMsSUFBSUssUUFBUXJDLE9BQU02QixXQUFXSSxZQUFZO1FBQ3pDLE9BQW9CLHNCQUFNcmEsY0FBYzZhLFlBQVdsTCxVQUFTO1VBQzFEOEs7VUFDQUw7UUFDRixHQUFHM1UsS0FBSyxDQUFDO01BQ1g7TUFHQSxJQUFJdVYsWUFBeUIsc0JBQU1iLFdBQVdZLE1BQU07TUFDcERDLFVBQVVuQixjQUFjLGVBQWVpQixnQkFBZ0I7TUFDdkQsT0FBTzVCLDZDQUE2QyxXQUFXOEIsV0FBV0gsVUFBUztJQUNyRjtJQUVBLElBQUlJLGNBQWMsc0JBQXFCQyxjQUFjO01BR25ELElBQUlDLFFBQVFELGFBQWF0TyxNQUFNLEdBQUc7TUFDbEMsT0FBT3VPLE1BQU1BLE1BQU10YixTQUFTO0lBQzlCO0lBRUEsSUFBSXViLG9DQUFvQyw0Q0FBMkN6VixNQUFNO01BRXZGLElBQUk0RyxRQUFRLDhCQUE4QjdILEtBQUtpQixJQUFJO01BQ25ELElBQUk0RyxPQUFPLE9BQU8wTyxZQUFZMU8sTUFBTSxFQUFFO01BRXRDQSxRQUFRLHFCQUFxQjdILEtBQUtpQixJQUFJO01BQ3RDLElBQUk0RyxPQUFPLE9BQU8wTyxZQUFZMU8sTUFBTSxFQUFFO01BQ3RDLE9BQU87SUFDVDtJQUVBLElBQUk4Tyw2QkFBNEMsbUJBQUlDLElBQUksQ0FBQyxtQkFBbUIsZ0JBQWdCLHdCQUF3QixnQkFBZ0IsQ0FBQztJQUlySSxJQUFJQyxxQkFBcUIsNkJBQTRCQyxZQUFZO01BQy9ELE9BQU9BLFdBQVc1VyxRQUFRLE9BQU8sR0FBRztJQUN0QztJQUVBLElBQUk2Vyx5QkFBeUIsaUNBQWdDQyxZQUFZO01BQ3ZFLElBQUksQ0FBQ0EsWUFBWSxPQUFPO01BQ3hCLElBQUlDLFFBQVFELFdBQVc5TyxNQUFNLElBQUk7TUFFakMsU0FBU2xOLElBQUksR0FBR0EsSUFBSWljLE1BQU05YixRQUFRSCxLQUFLO1FBQ3JDLElBQUl3YixlQUFlRSxrQ0FBa0NPLE1BQU1qYyxFQUFFO1FBRTdELElBQUksQ0FBQ3diLGNBQWM7UUFFbkIsSUFBSUcsMkJBQTJCNVIsSUFBSXlSLFlBQVksR0FBRztRQUdsRCxJQUFJLFNBQVMzWSxLQUFLMlksWUFBWSxHQUFHLE9BQU9LLG1CQUFtQkwsWUFBWTtNQUN6RTtNQUVBLE9BQU87SUFDVDtJQUVBLElBQUlVLGVBQWU7SUFDbkIsSUFBSUMsZ0JBQWdCO0lBQ3BCLElBQUlDLHFCQUFxQiw2QkFBNEJ0VyxNQUFNQyxPQUFPO01BQ2hFLElBQUksT0FBZ0RBLE1BQU1zVyxRQUFRLFlBQ2xFdFcsTUFBTXNXLElBQUlsWCxRQUFRLEdBQUcsTUFBTSxJQUFJO1FBQzdCLE1BQU0sSUFBSXlJLE1BQU0sK0hBQStIN0gsTUFBTXNXLE1BQU0sR0FBRztNQUNoSztNQUVBLElBQUlDLFdBQVcsQ0FBQztNQUVoQixTQUFTOWIsT0FBT3VGLE9BQU87UUFDckIsSUFBSXVLLGVBQWV0QyxLQUFLakksT0FBT3ZGLEdBQUcsR0FBRztVQUNuQzhiLFNBQVM5YixPQUFPdUYsTUFBTXZGO1FBQ3hCO01BQ0Y7TUFFQThiLFNBQVNKLGdCQUFnQnBXO01BR3pCLElBQUksQ0FBMEMsQ0FBQ0MsTUFBTXNXLFFBQVEsT0FBT3RXLE1BQU1zVyxRQUFRLFlBQVksT0FBT3RXLE1BQU1zVyxJQUFJN08sU0FBUyxZQUFZekgsTUFBTXNXLElBQUk3TyxLQUFLckksUUFBUSxHQUFHLE1BQU0sS0FBSztRQUN2SyxJQUFJb1gsUUFBUVIsdUJBQXVCLElBQUluTyxPQUFNLENBQUU0TyxLQUFLO1FBQ3BELElBQUlELE9BQU9ELFNBQVNILGlCQUFpQkk7TUFDdkM7TUFFQSxPQUFPRDtJQUNUO0lBRUEsSUFBSUcsWUFBWSxvQkFBbUJDLE9BQU07TUFDdkMsSUFBSTlTLFFBQVE4UyxNQUFLOVM7UUFDYjJGLGFBQWFtTixNQUFLbk47UUFDbEI0QixjQUFjdUwsTUFBS3ZMO01BQ3ZCdUksTUFBTXhJLGVBQWV0SCxPQUFPMkYsWUFBWTRCLFdBQVc7TUFDbkQsSUFBSTdFLFFBQVF1TixnQ0FBZ0NYLHlDQUF5QyxZQUFZO1FBQy9GLE9BQU9RLE1BQU10SSxhQUFheEgsT0FBTzJGLFlBQVk0QixXQUFXO01BQzFELENBQUM7TUFFRCxJQUFJLENBQUM3RCxhQUFhaEIsVUFBVSxRQUFXO1FBQ3JDLElBQUlxUTtRQUVKLElBQUlDLGtCQUFrQnJOLFdBQVcvQjtRQUNqQyxJQUFJL0IsT0FBTzhELFdBQVc5RDtRQUV0QixPQUFPQSxTQUFTLFFBQVc7VUFDekJtUixtQkFBbUIsTUFBTW5SLEtBQUsrQjtVQUM5Qi9CLE9BQU9BLEtBQUtBO1FBQ2Q7UUFFQSxPQUFvQixzQkFBTW5MLGNBQWMsVUFBVXFjLFNBQVEsQ0FBQyxHQUFHQSxPQUFNLGtCQUFrQi9TLE1BQU1wSixNQUFNLE1BQU1vYyxpQkFBaUJELE9BQU1FLDBCQUEwQjtVQUN2SkMsUUFBUXhRO1FBQ1YsR0FBR3FRLE9BQU1sYyxRQUFRbUosTUFBTTdKLE1BQU1VLE9BQU9rYyxRQUFNO01BQzVDO01BRUEsT0FBTztJQUNUO0lBRUEsSUFBSUksVUFBeUIsdUJBQVF2QyxpQkFBaUIsVUFBVXpVLE9BQU82RCxPQUFPOFEsS0FBSztNQUNqRixJQUFJc0MsVUFBVWpYLE1BQU1zVztNQUlwQixJQUFJLE9BQU9XLFlBQVksWUFBWXBULE1BQU1tRyxXQUFXaU4sYUFBYSxRQUFXO1FBQzFFQSxVQUFVcFQsTUFBTW1HLFdBQVdpTjtNQUM3QjtNQUVBLElBQUlDLG1CQUFtQmxYLE1BQU1tVztNQUM3QixJQUFJcEwsbUJBQW1CLENBQUNrTSxPQUFPO01BQy9CLElBQUkvTCxZQUFZO01BRWhCLElBQUksT0FBT2xMLE1BQU1rTCxjQUFjLFVBQVU7UUFDdkNBLFlBQVl5SSxNQUFNbEksb0JBQW9CNUgsTUFBTW1HLFlBQVllLGtCQUFrQi9LLE1BQU1rTCxTQUFTO01BQzNGLFdBQVdsTCxNQUFNa0wsYUFBYSxNQUFNO1FBQ2xDQSxZQUFZbEwsTUFBTWtMLFlBQVk7TUFDaEM7TUFFQSxJQUFJMUIsYUFBYUgsVUFBVTRJLGdCQUFnQmxILGtCQUFrQixRQUFXNEgsT0FBTTZCLFdBQVdJLFlBQVksQ0FBQztNQUV0RyxJQUE2Q3BMLFdBQVcvQixLQUFLckksUUFBUSxHQUFHLE1BQU0sSUFBSTtRQUNoRixJQUFJK1gsaUJBQWlCblgsTUFBTW9XO1FBRTNCLElBQUllLGdCQUFnQjtVQUNsQjNOLGFBQWFILFVBQVU0SSxnQkFBZ0IsQ0FBQ3pJLFlBQVksV0FBVzJOLGlCQUFpQixHQUFHLENBQUM7UUFDdEY7TUFDRjtNQUVBak0sYUFBYXJILE1BQU1wSixNQUFNLE1BQU0rTyxXQUFXL0I7TUFDMUMsSUFBSThPLFdBQVcsQ0FBQztNQUVoQixTQUFTOWIsT0FBT3VGLE9BQU87UUFDckIsSUFBSXVLLGVBQWV0QyxLQUFLakksT0FBT3ZGLEdBQUcsS0FBS0EsUUFBUSxTQUFTQSxRQUFRMGIsZ0JBQTBEMWIsUUFBUTJiLGVBQWdCO1VBQ2hKRyxTQUFTOWIsT0FBT3VGLE1BQU12RjtRQUN4QjtNQUNGO01BRUE4YixTQUFTNUIsTUFBTUE7TUFDZjRCLFNBQVNyTCxZQUFZQTtNQUNyQixPQUFvQixzQkFBTTNRLGNBQWNvWSxPQUFNeUUsVUFBVSxNQUFtQixzQkFBTTdjLGNBQWNtYyxXQUFXO1FBQ3hHN1M7UUFDQTJGO1FBQ0E0QixhQUFhLE9BQU84TCxxQkFBcUI7TUFDM0MsQ0FBQyxHQUFnQixzQkFBTTNjLGNBQWMyYyxrQkFBa0JYLFFBQVEsQ0FBQztJQUNsRSxDQUFDO0lBRUQsSUFBSSxNQUF1QztNQUN6Q1MsUUFBUTVDLGNBQWM7SUFDeEI7SUFFQXZhLFFBQVF3ZCxnQkFBZ0JoRDtJQUN4QnhhLFFBQVFtZCxVQUFVQTtJQUNsQm5kLFFBQVErYSxlQUFlQTtJQUN2Qi9hLFFBQVFzYixnQkFBZ0JBO0lBQ3hCdGIsUUFBUTBhLDJCQUEyQkE7SUFDbkMxYSxRQUFRd2MscUJBQXFCQTtJQUM3QnhjLFFBQVEwUSxpQkFBaUJBO0lBQ3pCMVEsUUFBUTBOLFlBQVlBO0lBQ3BCMU4sUUFBUWdiLFdBQVdBO0lBQ25CaGIsUUFBUXlkLFlBQVlBO0VBQUE7QUFBQTs7O0FDbFNwQjtFQUFBO0lBQUE7O0lBRUEzZCxPQUFPQyxlQUFlQyxTQUFTLGNBQWM7TUFBRUMsT0FBTztJQUFLLENBQUM7SUFFNUQsSUFBSTZZLFNBQVFqSSxRQUFRO0lBQ3BCNkk7SUFDQSxJQUFJZ0UsaUJBQWlCQztJQUNyQmhFO0lBQ0EzTztJQUNBNkYsUUFBUTtJQUNSZ0o7SUFDQSxJQUFJQyxRQUFRQztJQUNaLElBQUl2SyxZQUFZd0s7SUFDaEIsSUFBSUMsa0NBQWtDQztJQUV0QyxJQUFJMEQsTUFBTTtNQUNUaFEsTUFBTTtNQUNOaVEsU0FBUztNQUNUQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsU0FBUztRQUNSLCtCQUErQjtNQUNoQztNQUNBaGUsU0FBUztRQUNSLEtBQUs7VUFDSitkLFFBQVE7WUFDUEUsUUFBUTtZQUNSRCxTQUFTO1lBQ1QsV0FBVztVQUNaO1VBQ0EsV0FBVztRQUNaO1FBQ0EsaUJBQWlCO1VBQ2hCRCxRQUFRO1lBQ1BFLFFBQVE7WUFDUkQsU0FBUztZQUNULFdBQVc7VUFDWjtVQUNBLFdBQVc7UUFDWjtRQUNBLG9CQUFvQjtVQUNuQkQsUUFBUTtZQUNQRSxRQUFRO1lBQ1JELFNBQVM7WUFDVCxXQUFXO1VBQ1o7VUFDQSxXQUFXO1FBQ1o7UUFDQSxxQkFBcUI7VUFDcEJELFFBQVE7WUFDUEUsUUFBUTtZQUNSRCxTQUFTO1lBQ1QsV0FBVztVQUNaO1VBQ0EsV0FBVztRQUNaO1FBQ0Esa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixXQUFXO01BQ1o7TUFDQUUsT0FBTztNQUNQQyxPQUFPLENBQ04sT0FDQSxRQUNBLGVBQ0EsbUJBQ0Esa0JBQ0EsZ0JBQ0EsWUFDQSxjQUNBLGdCQUNEO01BQ0FDLGFBQWE7TUFDYkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFNBQVM7UUFDUixtQkFBbUI7TUFDcEI7TUFDQUMsY0FBYztRQUNiLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixnREFBZ0Q7UUFDaEQsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QiwyQkFBMkI7TUFDNUI7TUFDQUMsa0JBQWtCO1FBQ2pCLGVBQWU7UUFDZkMsT0FBTztNQUNSO01BQ0FDLHNCQUFzQjtRQUNyQixlQUFlO1VBQ2RDLFVBQVU7UUFDWDtRQUNBLGdCQUFnQjtVQUNmQSxVQUFVO1FBQ1g7TUFDRDtNQUNBQyxpQkFBaUI7UUFDaEIsZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCSCxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCSSxZQUFZO01BQ2I7TUFDQUMsWUFBWTtNQUNaQyxlQUFlO1FBQ2RDLFFBQVE7TUFDVDtNQUNBLFlBQVk7TUFDWkMsY0FBYztRQUNiQyxhQUFhLENBQ1osY0FDQSxvQkFDQSx3QkFDQSxzQkFDRDtRQUNBQyxTQUFTO1FBQ1RwZixTQUFTO1VBQ1JxZixlQUFlLENBQ2QsV0FDQSxTQUNEO1VBQ0FDLE9BQU87WUFDTixvQkFBb0I7WUFDcEIsV0FBVztVQUNaO1FBQ0Q7TUFDRDtJQUNEO0lBRUEsSUFBSUMsT0FBTSxjQUFhclosTUFBTUMsT0FBTztNQUNsQyxJQUFJa1MsT0FBTzdIO01BRVgsSUFBSXJLLFNBQVMsUUFBUSxDQUFDdVgsZUFBZWhOLGVBQWV0QyxLQUFLakksT0FBTyxLQUFLLEdBQUc7UUFFdEUsT0FBTzJTLE9BQU1wWSxjQUFjaVEsTUFBTSxRQUFXMEgsSUFBSTtNQUNsRDtNQUVBLElBQUltSCxhQUFhbkgsS0FBSzlYO01BQ3RCLElBQUlrZix3QkFBd0IsSUFBSXRSLE1BQU1xUixVQUFVO01BQ2hEQyxzQkFBc0IsS0FBSy9CLGVBQWVQO01BQzFDc0Msc0JBQXNCLEtBQUsvQixlQUFlbEIsbUJBQW1CdFcsTUFBTUMsS0FBSztNQUV4RSxTQUFTL0YsSUFBSSxHQUFHQSxJQUFJb2YsWUFBWXBmLEtBQUs7UUFDbkNxZixzQkFBc0JyZixLQUFLaVksS0FBS2pZO01BQ2xDO01BR0EsT0FBTzBZLE9BQU1wWSxjQUFjaVEsTUFBTSxNQUFNOE8scUJBQXFCO0lBQzlEO0lBRUEsSUFBSUMsOEJBQThCO0lBSWxDLElBQUlDLFNBQXdCLDhCQUFlL0UsaUJBQWlCLFVBQVV6VSxPQUFPNkQsT0FBTztNQUNsRixJQUFJLENBQTBDMFYsZ0NBSTlDdlosTUFBTWtMLGFBQWFsTCxNQUFNc1csTUFBTTtRQUM3QjlaLFFBQVFDLE1BQU0saUdBQWlHO1FBQy9HOGMsOEJBQThCO01BQ2hDO01BRUEsSUFBSW5RLFNBQVNwSixNQUFNb0o7TUFDbkIsSUFBSUksYUFBYUgsVUFBVTRJLGdCQUFnQixDQUFDN0ksTUFBTSxHQUFHLFFBQVd1SixPQUFNNkIsV0FBVytDLGVBQWUzQyxZQUFZLENBQUM7TUFFN0csSUFBSSxDQUFDMkMsZUFBZWhRLFdBQVc7UUFDN0IsSUFBSW9QO1FBRUosSUFBSUUsa0JBQWtCck4sV0FBVy9CO1FBQ2pDLElBQUlnUyxtQkFBbUJqUSxXQUFXSjtRQUNsQyxJQUFJMUQsT0FBTzhELFdBQVc5RDtRQUV0QixPQUFPQSxTQUFTLFFBQVc7VUFDekJtUixtQkFBbUIsTUFBTW5SLEtBQUsrQjtVQUM5QmdTLG9CQUFvQi9ULEtBQUswRDtVQUN6QjFELE9BQU9BLEtBQUtBO1FBQ2Q7UUFFQSxJQUFJZ0UsY0FBYzdGLE1BQU11QyxXQUFXO1FBQ25DLElBQUlHLFFBQVExQyxNQUFNM0gsT0FBTyxJQUFJO1VBQzNCdUwsTUFBTW9QO1VBQ056TixRQUFRcVE7UUFDVixHQUFHNVYsTUFBTTdKLE9BQU8wUCxXQUFXO1FBRTNCLElBQUlBLGFBQWE7VUFDZixPQUFPO1FBQ1Q7UUFFQSxPQUFvQixzQkFBTW5QLGNBQWMsVUFBVW9jLFFBQU8sQ0FBQyxHQUFHQSxNQUFLLGtCQUFrQjlTLE1BQU1wSixNQUFNLGFBQWFvYyxpQkFBaUJGLE1BQUtHLDBCQUEwQjtVQUMzSkMsUUFBUXhRO1FBQ1YsR0FBR29RLE1BQUtqYyxRQUFRbUosTUFBTTdKLE1BQU1VLE9BQU9pYyxPQUFLO01BQzFDO01BTUEsSUFBSStDLFdBQVcvRyxPQUFNZ0gsUUFBTztNQUM1QjdGLGdDQUFnQ1YscUNBQXFDLFlBQVk7UUFDL0UsSUFBSTNZLE1BQU1vSixNQUFNcEosTUFBTTtRQUV0QixJQUFJVCxRQUFRLElBQUk2SixNQUFNN0osTUFBTTRmLFlBQVk7VUFDdENuZjtVQUNBQyxPQUFPbUosTUFBTTdKLE1BQU1VO1VBQ25CVyxXQUFXd0ksTUFBTTdKLE1BQU1xQjtVQUN2QkssUUFBUW1JLE1BQU03SixNQUFNeUI7UUFDdEIsQ0FBQztRQUNELElBQUlvZSxjQUFjO1FBRWxCLElBQUk1UyxPQUFPL00sU0FBUzRmLGNBQWMseUJBQTBCcmYsTUFBTSxNQUFNK08sV0FBVy9CLE9BQU8sSUFBSztRQUUvRixJQUFJNUQsTUFBTTdKLE1BQU1pQixLQUFLYixRQUFRO1VBQzNCSixNQUFNZ0IsU0FBUzZJLE1BQU03SixNQUFNaUIsS0FBSztRQUNsQztRQUVBLElBQUlnTSxTQUFTLE1BQU07VUFDakI0UyxjQUFjO1VBRWQ1UyxLQUFLek0sYUFBYSxnQkFBZ0JDLEdBQUc7VUFDckNULE1BQU0rQixRQUFRLENBQUNrTCxJQUFJLENBQUM7UUFDdEI7UUFFQXlTLFNBQVNuTyxVQUFVLENBQUN2UixPQUFPNmYsV0FBVztRQUN0QyxPQUFPLFlBQVk7VUFDakI3ZixNQUFNK0MsT0FBTTtRQUNkO01BQ0YsR0FBRyxDQUFDOEcsS0FBSyxDQUFDO01BQ1ZpUSxnQ0FBZ0NWLHFDQUFxQyxZQUFZO1FBQy9FLElBQUkyRyxrQkFBa0JMLFNBQVNuTztRQUMvQixJQUFJdlIsUUFBUStmLGdCQUFnQjtVQUN4QkYsY0FBY0UsZ0JBQWdCO1FBRWxDLElBQUlGLGFBQWE7VUFDZkUsZ0JBQWdCLEtBQUs7VUFDckI7UUFDRjtRQUVBLElBQUl2USxXQUFXOUQsU0FBUyxRQUFXO1VBRWpDaU8sTUFBTXRJLGFBQWF4SCxPQUFPMkYsV0FBVzlELE1BQU0sSUFBSTtRQUNqRDtRQUVBLElBQUkxTCxNQUFNaUIsS0FBS2IsUUFBUTtVQUVyQixJQUFJaU0sVUFBVXJNLE1BQU1pQixLQUFLakIsTUFBTWlCLEtBQUtiLFNBQVMsR0FBRzRmO1VBQ2hEaGdCLE1BQU1nQixTQUFTcUw7VUFDZnJNLE1BQU0rQyxPQUFNO1FBQ2Q7UUFFQThHLE1BQU0zSCxPQUFPLElBQUlzTixZQUFZeFAsT0FBTyxLQUFLO01BQzNDLEdBQUcsQ0FBQzZKLE9BQU8yRixXQUFXL0IsSUFBSSxDQUFDO01BQzNCLE9BQU87SUFDVCxDQUFDO0lBRUQsSUFBSSxNQUF1QztNQUN6QytSLE9BQU9wRixjQUFjO0lBQ3ZCO0lBRUEsZ0JBQWU7TUFDYixTQUFTNkYsT0FBTzVQLFVBQVVqUSxRQUFROFgsT0FBTyxJQUFJbEssTUFBTWlTLElBQUksR0FBR3JJLE9BQU8sR0FBR0EsT0FBT3FJLE1BQU1ySSxRQUFRO1FBQ3ZGTSxLQUFLTixRQUFRdkgsVUFBVXVIO01BQ3pCO01BRUEsT0FBT3ZJLFVBQVU0SSxnQkFBZ0JDLElBQUk7SUFDdkM7SUFFQSxJQUFJZ0ksYUFBWSxzQkFBcUI7TUFDbkMsSUFBSUMsYUFBYUMsS0FBSTVQLE1BQU0sUUFBUUgsU0FBUztNQUM1QyxJQUFJNUMsT0FBTyxlQUFlMFMsV0FBVzFTO01BRXJDLE9BQU87UUFDTEE7UUFDQTJCLFFBQVEsZ0JBQWdCM0IsT0FBTyxNQUFNMFMsV0FBVy9RLFNBQVM7UUFDekQ0SCxNQUFNO1FBQ05uRixVQUFVLG9CQUFvQjtVQUM1QixPQUFPLFVBQVUsS0FBS3BFLE9BQU8sTUFBTSxLQUFLMkIsU0FBUztRQUNuRDtNQUNGO0lBQ0Y7SUFFQSxJQUFJaVIsYUFBYSxxQkFBb0JuSSxNQUFNO01BQ3pDLElBQUl0RyxNQUFNc0csS0FBSzlYO01BQ2YsSUFBSUgsSUFBSTtNQUNSLElBQUlxZ0IsTUFBTTtNQUVWLE9BQU9yZ0IsSUFBSTJSLEtBQUszUixLQUFLO1FBQ25CLElBQUk4SixNQUFNbU8sS0FBS2pZO1FBQ2YsSUFBSThKLE9BQU8sTUFBTTtRQUNqQixJQUFJd1csUUFBUTtRQUVaLFFBQVEsT0FBT3hXO1VBQUEsS0FDUjtZQUNIO1VBQUEsS0FFRztZQUNIO2NBQ0UsSUFBSWlFLE1BQU0ySixRQUFRNU4sR0FBRyxHQUFHO2dCQUN0QndXLFFBQVFDLFlBQVd6VyxHQUFHO2NBQ3hCLE9BQU87Z0JBQ0wsSUFBSUEsR0FBeUMsQ0FBSXFGLFdBQVcsVUFBYXJGLElBQUkwRCxTQUFTLFFBQVc7a0JBQy9GakwsUUFBUUMsTUFBTSw2UEFBa1E7Z0JBQ2xSO2dCQUVBOGQsUUFBUTtnQkFFUixTQUFTbGMsS0FBSzBGLEtBQUs7a0JBQ2pCLElBQUlBLElBQUkxRixNQUFNQSxHQUFHO29CQUNma2MsVUFBVUEsU0FBUztvQkFDbkJBLFNBQVNsYztrQkFDWDtnQkFDRjtjQUNGO2NBRUE7WUFDRjtVQUFBO1lBR0E7Y0FDRWtjLFFBQVF4VztZQUNWO1FBQUE7UUFHSixJQUFJd1csT0FBTztVQUNURCxRQUFRQSxPQUFPO1VBQ2ZBLE9BQU9DO1FBQ1Q7TUFDRjtNQUVBLE9BQU9EO0lBQ1Q7SUFFQSxlQUFldFEsWUFBWXlRLE1BQUt2UCxXQUFXO01BQ3pDLElBQUlILG1CQUFtQixFQUFDO01BQ3hCLElBQUlFLGVBQWUwSSxNQUFNbEksb0JBQW9CekIsWUFBWWUsa0JBQWtCRyxTQUFTO01BRXBGLElBQUlILGlCQUFpQjNRLFNBQVMsR0FBRztRQUMvQixPQUFPOFE7TUFDVDtNQUVBLE9BQU9ELGVBQWV3UCxLQUFJMVAsZ0JBQWdCO0lBQzVDO0lBRUEsSUFBSTJMLFlBQVksb0JBQW1CQyxPQUFNO01BQ3ZDLElBQUk5UyxRQUFROFMsTUFBSzlTO1FBQ2I2VyxnQkFBZ0IvRCxNQUFLK0Q7TUFDekIsSUFBSW5VLFFBQVF1TixnQ0FBZ0NYLHlDQUF5QyxZQUFZO1FBQy9GLElBQUl3SCxTQUFRO1FBRVosU0FBUzFnQixJQUFJLEdBQUdBLElBQUl5Z0IsY0FBY3RnQixRQUFRSCxLQUFLO1VBQzdDLElBQUkyZ0IsTUFBTWpILE1BQU10SSxhQUFheEgsT0FBTzZXLGNBQWN6Z0IsSUFBSSxLQUFLO1VBRTNELElBQUksQ0FBQ3NkLGVBQWVoUSxhQUFhcVQsUUFBUSxRQUFXO1lBQ2xERCxVQUFTQztVQUNYO1FBQ0Y7UUFFQSxJQUFJLENBQUNyRCxlQUFlaFEsV0FBVztVQUM3QixPQUFPb1Q7UUFDVDtNQUNGLENBQUM7TUFFRCxJQUFJLENBQUNwRCxlQUFlaFEsYUFBYWhCLE1BQU1uTSxXQUFXLEdBQUc7UUFDbkQsSUFBSXdjO1FBRUosT0FBb0Isc0JBQU1yYyxjQUFjLFVBQVVxYyxTQUFRLENBQUMsR0FBR0EsT0FBTSxrQkFBa0IvUyxNQUFNcEosTUFBTSxNQUFNaWdCLGNBQWNwYixJQUFJLFVBQVVrSyxZQUFZO1VBQzlJLE9BQU9BLFdBQVcvQjtRQUNwQixDQUFDLEVBQUVsSSxLQUFLLEdBQUcsR0FBR3FYLE9BQU1FLDBCQUEwQjtVQUM1Q0MsUUFBUXhRO1FBQ1YsR0FBR3FRLE9BQU1sYyxRQUFRbUosTUFBTTdKLE1BQU1VLE9BQU9rYyxRQUFNO01BQzVDO01BRUEsT0FBTztJQUNUO0lBRUEsSUFBSWlFLGNBQTRCLDhCQUFlcEcsaUJBQWlCLFVBQVV6VSxPQUFPNkQsT0FBTztNQUN0RixJQUFJaVgsY0FBYztNQUNsQixJQUFJSixnQkFBZ0IsRUFBQztNQUVyQixJQUFJRCxPQUFNLGdCQUFlO1FBQ3ZCLElBQUlLLGVBQWUsTUFBdUM7VUFDeEQsTUFBTSxJQUFJalQsTUFBTSxvQ0FBb0M7UUFDdEQ7UUFFQSxTQUFTb1MsT0FBTzVQLFVBQVVqUSxRQUFROFgsT0FBTyxJQUFJbEssTUFBTWlTLElBQUksR0FBR3JJLE9BQU8sR0FBR0EsT0FBT3FJLE1BQU1ySSxRQUFRO1VBQ3ZGTSxLQUFLTixRQUFRdkgsVUFBVXVIO1FBQ3pCO1FBRUEsSUFBSXBJLGFBQWFILFVBQVU0SSxnQkFBZ0JDLE1BQU1yTyxNQUFNbUcsVUFBVTtRQUNqRTBRLGNBQWNsZixLQUFLZ08sVUFBVTtRQUU3Qm1LLE1BQU14SSxlQUFldEgsT0FBTzJGLFlBQVksS0FBSztRQUM3QyxPQUFPM0YsTUFBTXBKLE1BQU0sTUFBTStPLFdBQVcvQjtNQUN0QztNQUVBLElBQUlzVCxLQUFLLGVBQWM7UUFDckIsSUFBSUQsZUFBZSxNQUF1QztVQUN4RCxNQUFNLElBQUlqVCxNQUFNLG1DQUFtQztRQUNyRDtRQUVBLFNBQVNtVCxRQUFRM1EsVUFBVWpRLFFBQVE4WCxPQUFPLElBQUlsSyxNQUFNZ1QsS0FBSyxHQUFHQyxRQUFRLEdBQUdBLFFBQVFELE9BQU9DLFNBQVM7VUFDN0YvSSxLQUFLK0ksU0FBUzVRLFVBQVU0UTtRQUMxQjtRQUVBLE9BQU9DLE1BQU1yWCxNQUFNbUcsWUFBWXlRLE1BQUtKLFdBQVduSSxJQUFJLENBQUM7TUFDdEQ7TUFFQSxJQUFJaUosVUFBVTtRQUNaN0UsS0FBS21FO1FBQ0xNO1FBQ0EvRixPQUFPckMsT0FBTTZCLFdBQVcrQyxlQUFlM0MsWUFBWTtNQUNyRDtNQUNBLElBQUl3RyxNQUFNcGIsTUFBTUMsU0FBU2tiLE9BQU87TUFDaENMLGNBQWM7TUFDZCxPQUFvQixzQkFBTXZnQixjQUFjb1ksT0FBTXlFLFVBQVUsTUFBbUIsc0JBQU03YyxjQUFjbWMsV0FBVztRQUN4RzdTO1FBQ0E2VztNQUNGLENBQUMsR0FBR1UsR0FBRztJQUNULENBQUM7SUFFRCxJQUFJLE1BQXVDO01BQ3pDUCxZQUFXekcsY0FBYztJQUMzQjtJQUVBLElBQUksTUFBdUM7TUFDckM3TSxZQUFZLE9BQU9yTixhQUFhO01BRWhDbWhCLFNBQVMsT0FBT0MsU0FBUztNQUU3QixJQUFJL1QsYUFBYSxDQUFDOFQsUUFBUTtRQUVwQkUsZ0JBQ0osT0FBT0MsZUFBZSxjQUFjQSxhQUNsQ2pVLFlBQVlrVSxTQUFTQztRQUNuQkMsWUFBWSxxQkFBcUJsRSxJQUFJQyxRQUFRdlEsTUFBTSxHQUFHLEVBQUUsS0FBSztRQUVqRSxJQUFJb1UsY0FBY0ksWUFBWTtVQUM1Qm5mLFFBQVFvZixLQUFLLDZNQUE0TjtRQUMzTztRQUVBTCxjQUFjSSxhQUFhO01BQzdCO0lBQ0Y7SUFFQTloQixRQUFRd2QsZ0JBQWdCRSxlQUFlRjtJQUN2Q3hkLFFBQVErYSxlQUFlMkMsZUFBZTNDO0lBQ3RDL2EsUUFBUXNiLGdCQUFnQm9DLGVBQWVwQztJQUN2Q3RiLFFBQVEwYSwyQkFBMkJnRCxlQUFlaEQ7SUFDbEQxYSxRQUFRZ2IsV0FBVzBDLGVBQWUxQztJQUNsQ2xiLE9BQU9DLGVBQWVDLFNBQVMsb0JBQW9CO01BQ2pEaVosWUFBWTtNQUNaN08sS0FBSyxZQUFZO1FBQ2YsT0FBT3NULGVBQWU5QztNQUN4QjtJQUNGLENBQUM7SUFDRDVhLFFBQVF5ZCxZQUFZQyxlQUFlRDtJQUNuQ3pkLFFBQVFnaUIsYUFBYWhCO0lBQ3JCaGhCLFFBQVEyZixTQUFTQTtJQUNqQjNmLFFBQVFVLGdCQUFnQjZlO0lBQ3hCdmYsUUFBUXljLE1BQU04RDtJQUNkdmdCLFFBQVFpaUIsTUFBTTFDO0lBQ2R2ZixRQUFRa2lCLFlBQVk3QjtJQXBDZDtJQUVBO0lBSUU7SUFHQTtFQUFBO0FBQUE7OztBQzViUjtFQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q2hkLFFBQU9yRCxVQUFVO0lBQ25CLE9BQU87TUFDTHFELFFBQU9yRCxVQUFVbWlCO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkE7QUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQWhZO0VBQUFpWTtFQUFBQztFQUFBQztBQUFBOzs7QUNBQSxxQkFBcUJDO0FBQ3JCLG1CQUF5REE7QUFDekQsbUNBQW1DQTtBQUNuQyxxQ0FBcUNBO0FBQ3JDLDJCQUEyQkE7QUFDM0Isb0JBQW9CQTtBQUNwQiw0QkFBNEJBO0FBQzVCLHlCQUF5QkE7QUFDekIsc0JBQXNCQTtBQUN0Qiw0QkFBOEJBO0FBQzlCLG9CQUF5QzlSO0FBQ3pDLHVCQUE2QkE7QUFFN0IseUJBQXlCK0csS0FBS2hYLEtBQUtYLE9BQU87RUFDeEMsSUFBSVcsT0FBT2dYLEtBQUs7SUFDZDlYLE9BQU9DLGVBQWU2WCxLQUFLaFgsS0FBSztNQUM5Qlg7TUFDQWdaLFlBQVk7TUFDWjJKLGNBQWM7TUFDZEMsVUFBVTtJQUNaLENBQUM7RUFDSCxPQUFPO0lBQ0xqTCxJQUFJaFgsT0FBT1g7RUFDYjtFQUVBLE9BQU8yWDtBQUNUO0FBRUEsaUJBQWlCa0wsUUFBUUMsZ0JBQWdCO0VBQ3ZDLElBQUloSyxPQUFPalosT0FBT2laLEtBQUsrSixNQUFNO0VBRTdCLElBQUloakIsT0FBT2tqQix1QkFBdUI7SUFDaEMsSUFBSUMsVUFBVW5qQixPQUFPa2pCLHNCQUFzQkYsTUFBTTtJQUVqRCxJQUFJQyxnQkFBZ0I7TUFDbEJFLFVBQVVBLFFBQVFDLE9BQU8sVUFBVUMsS0FBSztRQUN0QyxPQUFPcmpCLE9BQU9rWix5QkFBeUI4SixRQUFRSyxHQUFHLEVBQUVsSztNQUN0RCxDQUFDO0lBQ0g7SUFFQUYsS0FBS3BYLEtBQUtnUCxNQUFNb0ksTUFBTWtLLE9BQU87RUFDL0I7RUFFQSxPQUFPbEs7QUFDVDtBQUVBLHdCQUF3QnhJLFFBQVE7RUFDOUIsU0FBU25RLElBQUksR0FBR0EsSUFBSW9RLFVBQVVqUSxRQUFRSCxLQUFLO0lBQ3pDLElBQUlxUSxTQUFTRCxVQUFVcFEsTUFBTSxPQUFPb1EsVUFBVXBRLEtBQUssQ0FBQztJQUVwRCxJQUFJQSxJQUFJLEdBQUc7TUFDVGdqQixRQUFRdGpCLE9BQU8yUSxNQUFNLEdBQUcsSUFBSSxFQUFFck8sUUFBUSxVQUFVeEIsS0FBSztRQUNuRHlpQixnQkFBZ0I5UyxRQUFRM1AsS0FBSzZQLE9BQU83UCxJQUFJO01BQzFDLENBQUM7SUFDSCxXQUFXZCxPQUFPd2pCLDJCQUEyQjtNQUMzQ3hqQixPQUFPeWpCLGlCQUFpQmhULFFBQVF6USxPQUFPd2pCLDBCQUEwQjdTLE1BQU0sQ0FBQztJQUMxRSxPQUFPO01BQ0wyUyxRQUFRdGpCLE9BQU8yUSxNQUFNLENBQUMsRUFBRXJPLFFBQVEsVUFBVXhCLEtBQUs7UUFDN0NkLE9BQU9DLGVBQWV3USxRQUFRM1AsS0FBS2QsT0FBT2taLHlCQUF5QnZJLFFBQVE3UCxHQUFHLENBQUM7TUFDakYsQ0FBQztJQUNIO0VBQ0Y7RUFFQSxPQUFPMlA7QUFDVDtBQUVBLHlCQUF5QnpNLEdBQUc7RUFDMUIwZixrQkFBa0IxakIsT0FBTzJqQixpQkFBaUIzakIsT0FBTzRqQixpQkFBaUIsMEJBQXlCaGMsSUFBRztJQUM1RixPQUFPQSxHQUFFaWMsYUFBYTdqQixPQUFPNGpCLGVBQWVoYyxFQUFDO0VBQy9DO0VBQ0EsT0FBTzhiLGdCQUFnQjFmLENBQUM7QUFDMUI7QUFFQSxxQ0FBcUM7RUFDbkMsSUFBSSxPQUFPOGYsWUFBWSxlQUFlLENBQUNBLFFBQVFDLFdBQVcsT0FBTztFQUNqRSxJQUFJRCxRQUFRQyxVQUFVQyxNQUFNLE9BQU87RUFDbkMsSUFBSSxPQUFPQyxVQUFVLFlBQVksT0FBTztFQUV4QyxJQUFJO0lBQ0ZDLFFBQVEvaEIsVUFBVWdpQixRQUFRN1YsS0FBS3dWLFFBQVFDLFVBQVVHLFNBQVMsRUFBQyxFQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDN0UsT0FBTztFQUNULFNBQVNoaEIsR0FBUDtJQUNBLE9BQU87RUFDVDtBQUNGO0FBRUEsZ0NBQWdDa2hCLE9BQU07RUFDcEMsSUFBSUEsVUFBUyxRQUFRO0lBQ25CLE1BQU0sSUFBSUMsZUFBZSwyREFBMkQ7RUFDdEY7RUFFQSxPQUFPRDtBQUNUO0FBRUEsb0NBQW9DQSxPQUFNOVYsTUFBTTtFQUM5QyxJQUFJQSxTQUFTLE9BQU9BLFNBQVMsWUFBWSxPQUFPQSxTQUFTLGFBQWE7SUFDcEUsT0FBT0E7RUFDVDtFQUVBLE9BQU9nVyx1QkFBdUJGLEtBQUk7QUFDcEM7QUFFQSxzQkFBc0JHLFNBQVM7RUFDN0IsSUFBSUMsNEJBQTRCQywyQkFBMEI7RUFDMUQsT0FBTyxnQ0FBZ0M7SUFDckMsSUFBSUMsUUFBUWhCLGdCQUFnQmEsT0FBTztNQUMvQi9NO0lBRUosSUFBSWdOLDJCQUEyQjtNQUM3QixJQUFJRyxZQUFZakIsZ0JBQWdCLElBQUksRUFBRXpEO01BQ3RDekksU0FBU3NNLFFBQVFDLFVBQVVXLE9BQU9oVSxXQUFXaVUsU0FBUztJQUN4RCxPQUFPO01BQ0xuTixTQUFTa04sTUFBTTdULE1BQU0sTUFBTUgsU0FBUztJQUN0QztJQUVBLE9BQU9rVSwyQkFBMkIsTUFBTXBOLE1BQU07RUFDaEQ7QUFDRjtBQUVBLElBQUlxTixjQUFjLENBQUMsYUFBYSxjQUFjLE1BQU0sYUFBYSxZQUFZLFlBQVksV0FBVyxTQUFTLFdBQVcsZ0JBQWdCLGVBQWUsWUFBWSxPQUFPO0FBSTFLLElBQUlDLE9BQU8saUJBQWdCLENBQUM7QUFjNUIsMkJBQTJCQyxRQUFRalgsTUFBTTtFQUN2QyxJQUFJLENBQUNBLE1BQU07SUFDVCxPQUFPaVg7RUFDVCxXQUFXalgsS0FBSyxPQUFPLEtBQUs7SUFDMUIsT0FBT2lYLFNBQVNqWDtFQUNsQixPQUFPO0lBQ0wsT0FBT2lYLFNBQVMsT0FBT2pYO0VBQ3pCO0FBQ0Y7QUFFQSxvQkFBb0JpWCxRQUFRQyxPQUFPelQsV0FBVztFQUM1QyxJQUFJMFQsTUFBTSxDQUFDMVQsU0FBUztFQUVwQixJQUFJeVQsU0FBU0QsUUFBUTtJQUNuQixTQUFTamtCLE9BQU9ra0IsT0FBTztNQUNyQixJQUFJQSxNQUFNcFUsZUFBZTlQLEdBQUcsS0FBS2trQixNQUFNbGtCLE1BQU07UUFDM0Nta0IsSUFBSXBqQixLQUFLLEdBQUcwTixPQUFPMlYsa0JBQWtCSCxRQUFRamtCLEdBQUcsQ0FBQyxDQUFDO01BQ3BEO0lBQ0Y7RUFDRjtFQUVBLE9BQU9ta0IsSUFBSTdCLE9BQU8sVUFBVTlpQixHQUFHO0lBQzdCLE9BQU9BO0VBQ1QsQ0FBQyxFQUFFcUYsSUFBSSxVQUFVckYsR0FBRztJQUNsQixPQUFPd0UsT0FBT3hFLENBQUMsRUFBRStFLE1BQUs7RUFDeEIsQ0FBQyxFQUFFTyxLQUFLLEdBQUc7QUFDYjtBQUlBLElBQUl1ZixhQUFhLHFCQUFvQmhsQixPQUFPO0VBQzFDLElBQUk2WCxRQUFRN1gsS0FBSyxHQUFHLE9BQU9BLE1BQU1pakIsT0FBT2MsT0FBTztFQUMvQyxJQUFJLDJCQUFRL2pCLEtBQUssTUFBTSxZQUFZQSxVQUFVLE1BQU0sT0FBTyxDQUFDQSxLQUFLO0VBQ2hFLE9BQU8sRUFBQztBQUNWO0FBSUEsSUFBSWlsQixtQkFBbUIsMkJBQTBCL2UsT0FBTztFQUV0REEsTUFBTWtMO0VBQ0ZsTCxNQUFNZ2Y7RUFDTmhmLE1BQU0rYTtFQUNOL2EsTUFBTWlmO0VBQ05qZixNQUFNa2Y7RUFDTmxmLE1BQU1tZjtFQUNObmYsTUFBTW9mO0VBQ05wZixNQUFNcWY7RUFDTnJmLE1BQU1zZjtFQUNOdGYsTUFBTXVmO0VBQ052ZixNQUFNd2Y7RUFDTnhmLE1BQU15ZjtFQUNOemYsTUFBTWdWO0VBQ04sSUFBSTBLLGFBQWEsNENBQXlCMWYsT0FBT3dlLFdBQVc7RUFFaEUsT0FBT21CLGVBQWUsQ0FBQyxHQUFHRCxVQUFVO0FBQ3RDO0FBSUEsMkJBQTJCRSxZQUFZQyxZQUFZQyxlQUFlO0VBQ2hFLElBQUlBLGVBQWU7SUFDakIsSUFBSUMsWUFBWUQsY0FBY0YsWUFBWUMsVUFBVTtJQUVwRCxJQUFJLE9BQU9FLGNBQWMsVUFBVSxPQUFPQTtFQUM1QztFQUVBLE9BQU9IO0FBQ1Q7QUFJQSwyQkFBMkJJLElBQUk7RUFDN0IsT0FBTyxDQUFDOWxCLFNBQVMrbEIsaUJBQWlCL2xCLFNBQVNnbUIsTUFBTXpFLE1BQU0sRUFBRXJjLFFBQVE0Z0IsRUFBRSxJQUFJO0FBQ3pFO0FBR0EsMEJBQTBCQSxJQUFJO0VBQzVCLElBQUlHLGtCQUFrQkgsRUFBRSxHQUFHO0lBQ3pCLE9BQU92RSxPQUFPMkU7RUFDaEI7RUFFQSxPQUFPSixHQUFHSztBQUNaO0FBR0Esc0JBQXNCTCxJQUFJO0VBQ3hCLElBQUlHLGtCQUFrQkgsRUFBRSxHQUFHO0lBQ3pCLE9BQU92RSxPQUFPNkU7RUFDaEI7RUFFQSxPQUFPTixHQUFHTztBQUNaO0FBQ0Esa0JBQWtCUCxJQUFJUSxLQUFLO0VBRXpCLElBQUlMLGtCQUFrQkgsRUFBRSxHQUFHO0lBQ3pCdkUsT0FBT2dGLFNBQVMsR0FBR0QsR0FBRztJQUN0QjtFQUNGO0VBRUFSLEdBQUdPLFlBQVlDO0FBQ2pCO0FBR0EseUJBQXlCbmEsU0FBUztFQUNoQyxJQUFJcWEsUUFBUUMsaUJBQWlCdGEsT0FBTztFQUNwQyxJQUFJdWEsc0JBQXNCRixNQUFNL2EsYUFBYTtFQUM3QyxJQUFJa2IsYUFBYTtFQUNqQixJQUFJSCxNQUFNL2EsYUFBYSxTQUFTLE9BQU96TCxTQUFTK2xCO0VBRWhELFNBQVNuZ0IsU0FBU3VHLFNBQVN2RyxTQUFTQSxPQUFPZ2hCLGdCQUFnQjtJQUN6REosUUFBUUMsaUJBQWlCN2dCLE1BQU07SUFFL0IsSUFBSThnQix1QkFBdUJGLE1BQU0vYSxhQUFhLFVBQVU7TUFDdEQ7SUFDRjtJQUVBLElBQUlrYixXQUFXL2pCLEtBQUs0akIsTUFBTUssV0FBV0wsTUFBTU0sWUFBWU4sTUFBTU8sU0FBUyxHQUFHO01BQ3ZFLE9BQU9uaEI7SUFDVDtFQUNGO0VBRUEsT0FBTzVGLFNBQVMrbEI7QUFDbEI7QUFVQSxzQkFBc0IxaUIsR0FBR1UsR0FBR1gsR0FBR1ksR0FBRztFQUNoQyxPQUFPWixLQUFNLEtBQUlDLElBQUlXLElBQUksS0FBS1gsSUFBSUEsSUFBSSxLQUFLVTtBQUM3QztBQUVBLDBCQUEwQm9JLFNBQVM2YSxJQUFJO0VBQ3JDLElBQUlDLFdBQVc5VyxVQUFValEsU0FBUyxLQUFLaVEsVUFBVSxPQUFPLFNBQVlBLFVBQVUsS0FBSztFQUNuRixJQUFJK1csV0FBVy9XLFVBQVVqUSxTQUFTLEtBQUtpUSxVQUFVLE9BQU8sU0FBWUEsVUFBVSxLQUFLb1U7RUFDbkYsSUFBSTRDLFFBQVFDLGFBQWFqYixPQUFPO0VBQ2hDLElBQUlrYixTQUFTTCxLQUFLRztFQUNsQixJQUFJRyxZQUFZO0VBQ2hCLElBQUlDLGNBQWM7RUFFbEIseUJBQXlCO0lBQ3ZCQSxlQUFlRDtJQUNmLElBQUlFLE1BQU1DLGFBQWFGLGFBQWFKLE9BQU9FLFFBQVFKLFFBQVE7SUFDM0RWLFNBQVNwYSxTQUFTcWIsR0FBRztJQUVyQixJQUFJRCxjQUFjTixVQUFVO01BQzFCMUYsT0FBT21HLHNCQUFzQkMsYUFBYTtJQUM1QyxPQUFPO01BQ0xULFNBQVMvYSxPQUFPO0lBQ2xCO0VBQ0Y7RUFFQXdiLGVBQWM7QUFDaEI7QUFHQSx3QkFBd0JDLFFBQVFDLFdBQVc7RUFDekMsSUFBSUMsV0FBV0YsT0FBT0csdUJBQXNCO0VBQzVDLElBQUlDLGNBQWNILFVBQVVFLHVCQUFzQjtFQUNsRCxJQUFJRSxhQUFhSixVQUFVSyxlQUFlO0VBRTFDLElBQUlGLFlBQVlHLFNBQVNGLGFBQWFILFNBQVNLLFFBQVE7SUFDckQ1QixTQUFTcUIsUUFBUXhqQixLQUFLZ2tCLElBQUlQLFVBQVVRLFlBQVlSLFVBQVUxQixlQUFleUIsT0FBT00sZUFBZUQsWUFBWUwsT0FBT1UsWUFBWSxDQUFDO0VBQ2pJLFdBQVdOLFlBQVkxQixNQUFNMkIsYUFBYUgsU0FBU3hCLEtBQUs7SUFDdERDLFNBQVNxQixRQUFReGpCLEtBQUtta0IsSUFBSVYsVUFBVVEsWUFBWUosWUFBWSxDQUFDLENBQUM7RUFDaEU7QUFDRjtBQUtBLDhCQUE4QjliLFNBQVM7RUFDckMsSUFBSXFjLE9BQU9yYyxRQUFRNGIsdUJBQXNCO0VBQ3pDLE9BQU87SUFDTEksUUFBUUssS0FBS0w7SUFDYk0sUUFBUUQsS0FBS0M7SUFDYkMsTUFBTUYsS0FBS0U7SUFDWEMsT0FBT0gsS0FBS0c7SUFDWnJDLEtBQUtrQyxLQUFLbEM7SUFDVnNDLE9BQU9KLEtBQUtJO0VBQ2Q7QUFDRjtBQUlBLDBCQUEwQjtFQUN4QixJQUFJO0lBQ0Y1b0IsU0FBUzZvQixZQUFZLFlBQVk7SUFDakMsT0FBTztFQUNULFNBQVNsbUIsR0FBUDtJQUNBLE9BQU87RUFDVDtBQUNGO0FBSUEsMEJBQTBCO0VBQ3hCLElBQUk7SUFDRixPQUFPLGlFQUFpRUMsS0FBS2ttQixVQUFVQyxTQUFTO0VBQ2xHLFNBQVNwbUIsR0FBUDtJQUNBLE9BQU87RUFDVDtBQUNGO0FBS0EsSUFBSXFtQix3QkFBd0I7QUFDNUIsSUFBSTVELFVBQVU7RUFBQSxJQUNSNkQsVUFBVTtJQUNaLE9BQU9ELHdCQUF3QjtFQUNqQztBQUVGO0FBRUEsSUFBSUUsSUFBSSxPQUFPM0gsV0FBVyxjQUFjQSxTQUFTLENBQUM7QUFFbEQsSUFBSTJILEVBQUVDLG9CQUFvQkQsRUFBRUUscUJBQXFCO0VBQy9DRixFQUFFQyxpQkFBaUIsS0FBSzVFLE1BQU1hLE9BQU87RUFDckM4RCxFQUFFRSxvQkFBb0IsS0FBSzdFLE1BQU0sS0FBSztBQUN4QztBQUVBLElBQUk4RSx3QkFBd0JMO0FBQzVCLG9CQUFvQk0sTUFBTTtFQUN4QixPQUFPQSxRQUFRO0FBQ2pCO0FBQ0EsaUJBQWlCemYsS0FBSztFQUNwQixPQUFPaUUsTUFBTTJKLFFBQVE1TixHQUFHO0FBQzFCO0FBQ0Esc0JBQXNCcWIsU0FBU3FFLFlBQVlDLGFBQWE7RUFDdEQsT0FBT3RFLFVBQVVxRSxhQUFhQztBQUNoQztBQUNBLDRCQUE0QkEsYUFBYTtFQUN2QyxPQUFPQTtBQUNUO0FBQ0EsMkJBQTJCRCxZQUFZO0VBQ3JDLE9BQU9BO0FBQ1Q7QUFDQSxJQUFJRSxjQUFjLHNCQUFxQkMsVUFBVTtFQUMvQyxTQUFTM0osT0FBTzVQLFVBQVVqUSxRQUFReXBCLGFBQWEsSUFBSTdiLE1BQU1pUyxPQUFPLElBQUlBLE9BQU8sSUFBSSxDQUFDLEdBQUdySSxPQUFPLEdBQUdBLE9BQU9xSSxNQUFNckksUUFBUTtJQUNoSGlTLFdBQVdqUyxPQUFPLEtBQUt2SCxVQUFVdUg7RUFDbkM7RUFFQSxJQUFJa1MsV0FBV25xQixPQUFPb3FCLFFBQVFILFFBQVEsRUFBRTdHLE9BQU8sVUFBVXBHLE9BQU07SUFDN0QsSUFBSUMsU0FBUSxrQ0FBZUQsT0FBTSxDQUFDO01BQzlCbGMsTUFBTW1jLE9BQU07SUFFaEIsT0FBTyxDQUFDaU4sV0FBV0csU0FBU3ZwQixHQUFHO0VBQ2pDLENBQUM7RUFDRCxPQUFPcXBCLFNBQVNHLE9BQU8sVUFBVTFOLFVBQVVJLE9BQU87SUFDaEQsSUFBSXVOLFFBQVEsa0NBQWV2TixPQUFPLENBQUM7TUFDL0JsYyxNQUFNeXBCLE1BQU07TUFDWnhDLE1BQU13QyxNQUFNO0lBRWhCM04sU0FBUzliLE9BQU9pbkI7SUFDaEIsT0FBT25MO0VBQ1QsR0FBRyxDQUFDLENBQUM7QUFDUDtBQUVBLDBCQUEwQkksT0FBTTtFQUM5QixJQUFJd04sWUFBWXhOLE1BQUt3TjtJQUNqQnJDLFNBQVNuTCxNQUFLbUw7SUFDZHNDLFlBQVl6TixNQUFLeU47SUFDakJDLFlBQVkxTixNQUFLME47SUFDakJDLGVBQWUzTixNQUFLMk47SUFDcEJDLGtCQUFrQjVOLE1BQUs0TjtJQUN2QnZQLFFBQVEyQixNQUFLM0I7RUFDakIsSUFBSXdQLFdBQVV4UCxNQUFNeVA7RUFDcEIsSUFBSUMsZUFBZUMsZ0JBQWdCN0MsTUFBTTtFQUN6QyxJQUFJOEMsZUFBZTtJQUNqQlAsV0FBVztJQUNYRjtFQUNGO0VBRUEsSUFBSSxDQUFDckMsVUFBVSxDQUFDQSxPQUFPK0MsY0FBYyxPQUFPRDtFQUc1QyxJQUFJRSx3QkFBd0JKLGFBQWF6Qyx1QkFBc0I7SUFDM0RPLGVBQWVzQyxzQkFBc0JuQztFQUV6QyxJQUFJb0Msd0JBQXdCakQsT0FBT0csdUJBQXNCO0lBQ3JEK0MsYUFBYUQsc0JBQXNCMUM7SUFDbkM0QyxhQUFhRixzQkFBc0JwQztJQUNuQ3VDLFVBQVVILHNCQUFzQnZFO0VBRXBDLElBQUkyRSx3QkFBd0JyRCxPQUFPK0MsYUFBYTVDLHVCQUFzQjtJQUNsRW1ELGVBQWVELHNCQUFzQjNFO0VBRXpDLElBQUk2RSxhQUFhZCxrQkFBa0I5SSxPQUFPMkUsY0FBY2tGLGlCQUFpQlosWUFBWTtFQUNyRixJQUFJbkUsWUFBWWUsYUFBYW9ELFlBQVk7RUFDekMsSUFBSWEsZUFBZUMsU0FBUzdFLGlCQUFpQm1CLE1BQU0sRUFBRXlELGNBQWMsRUFBRTtFQUNyRSxJQUFJRSxZQUFZRCxTQUFTN0UsaUJBQWlCbUIsTUFBTSxFQUFFMkQsV0FBVyxFQUFFO0VBQy9ELElBQUlDLGlCQUFpQk4sZUFBZUs7RUFDcEMsSUFBSUUsaUJBQWlCTixhQUFhSDtFQUNsQyxJQUFJVSxtQkFBbUJGLGlCQUFpQm5GO0VBQ3hDLElBQUlzRixtQkFBbUJyRCxlQUFlakMsWUFBWTJFO0VBQ2xELElBQUlZLGFBQWFkLGFBQWFLLGFBQWE5RSxZQUFZZ0Y7RUFDdkQsSUFBSVEsV0FBV3hGLFlBQVkyRSxVQUFVTztFQUNyQyxJQUFJTyxpQkFBaUI7RUFFckIsUUFBUTNCO0lBQUEsS0FDRDtJQUFBLEtBQ0E7TUFFSCxJQUFJc0Isa0JBQWtCVixZQUFZO1FBQ2hDLE9BQU87VUFDTFosV0FBVztVQUNYRjtRQUNGO01BQ0Y7TUFHQSxJQUFJMEIsb0JBQW9CWixjQUFjLENBQUNWLGlCQUFpQjtRQUN0RCxJQUFJRCxjQUFjO1VBQ2hCMkIsaUJBQWlCdkIsY0FBY29CLFlBQVlFLGNBQWM7UUFDM0Q7UUFFQSxPQUFPO1VBQ0wzQixXQUFXO1VBQ1hGO1FBQ0Y7TUFDRjtNQUdBLElBQUksQ0FBQ0ksbUJBQW1Cc0Isb0JBQW9CekIsYUFBYUcsbUJBQW1Cb0Isa0JBQWtCdkIsV0FBVztRQUN2RyxJQUFJRSxjQUFjO1VBQ2hCMkIsaUJBQWlCdkIsY0FBY29CLFlBQVlFLGNBQWM7UUFDM0Q7UUFJQSxJQUFJRSxvQkFBb0IzQixrQkFBa0JvQixpQkFBaUJKLGVBQWVNLG1CQUFtQk47UUFDN0YsT0FBTztVQUNMbEIsV0FBVztVQUNYRixXQUFXK0I7UUFDYjtNQUNGO01BSUEsSUFBSTdCLGNBQWMsVUFBVUUsaUJBQWlCO1FBRTNDLElBQUk0QixxQkFBcUJoQztRQUN6QixJQUFJaUMsYUFBYTdCLGtCQUFrQm1CLGlCQUFpQkU7UUFFcEQsSUFBSVEsY0FBY2hDLFdBQVc7VUFDM0IrQixxQkFBcUI3bkIsS0FBS2drQixJQUFJOEQsYUFBYWIsZUFBZWYsU0FBUTZCLGVBQWVsQyxTQUFTO1FBQzVGO1FBRUEsT0FBTztVQUNMRSxXQUFXO1VBQ1hGLFdBQVdnQztRQUNiO01BQ0Y7TUFHQSxJQUFJOUIsY0FBYyxVQUFVO1FBQzFCLElBQUlDLGNBQWM7VUFDaEI3RCxTQUFTaUUsY0FBY29CLFVBQVU7UUFDbkM7UUFFQSxPQUFPO1VBQ0x6QixXQUFXO1VBQ1hGO1FBQ0Y7TUFDRjtNQUVBO0lBQUEsS0FFRztNQUVILElBQUl1QixrQkFBa0JULFlBQVk7UUFDaEMsT0FBTztVQUNMWixXQUFXO1VBQ1hGO1FBQ0Y7TUFDRjtNQUdBLElBQUl5QixvQkFBb0JYLGNBQWMsQ0FBQ1YsaUJBQWlCO1FBQ3RELElBQUlELGNBQWM7VUFDaEIyQixpQkFBaUJ2QixjQUFjcUIsVUFBVUMsY0FBYztRQUN6RDtRQUVBLE9BQU87VUFDTDNCLFdBQVc7VUFDWEY7UUFDRjtNQUNGO01BR0EsSUFBSSxDQUFDSSxtQkFBbUJxQixvQkFBb0J4QixhQUFhRyxtQkFBbUJtQixrQkFBa0J0QixXQUFXO1FBQ3ZHLElBQUlrQyxzQkFBc0JuQztRQUcxQixJQUFJLENBQUNJLG1CQUFtQnFCLG9CQUFvQnhCLGFBQWFHLG1CQUFtQm1CLGtCQUFrQnRCLFdBQVc7VUFDdkdrQyxzQkFBc0IvQixrQkFBa0JtQixpQkFBaUJELFlBQVlHLG1CQUFtQkg7UUFDMUY7UUFFQSxJQUFJbkIsY0FBYztVQUNoQjJCLGlCQUFpQnZCLGNBQWNxQixVQUFVQyxjQUFjO1FBQ3pEO1FBRUEsT0FBTztVQUNMM0IsV0FBVztVQUNYRixXQUFXbUM7UUFDYjtNQUNGO01BS0EsT0FBTztRQUNMakMsV0FBVztRQUNYRjtNQUNGO0lBQUE7TUFHQSxNQUFNLElBQUl0YyxNQUFNLCtCQUFnQ3FCLE9BQU9tYixXQUFXLElBQUssQ0FBQztFQUFBO0VBRzVFLE9BQU9PO0FBQ1Q7QUFHQSx3QkFBd0JQLFdBQVc7RUFDakMsSUFBSWtDLHFCQUFxQjtJQUN2QmxFLFFBQVE7SUFDUjdCLEtBQUs7RUFDUDtFQUNBLE9BQU82RCxZQUFZa0MsbUJBQW1CbEMsYUFBYTtBQUNyRDtBQUVBLElBQUltQyxrQkFBa0IsMEJBQXlCem9CLEdBQUc7RUFDaEQsT0FBT0EsTUFBTSxTQUFTLFdBQVdBO0FBQ25DO0FBRUEsSUFBSTBvQixVQUFVLGtCQUFpQjdQLFFBQU87RUFDcEMsSUFBSUQ7RUFFSixJQUFJME4sWUFBWXpOLE9BQU15TjtJQUNsQnFDLGNBQWM5UCxPQUFNNUI7SUFDcEIyUixnQkFBZUQsWUFBWUU7SUFDM0JwQyxXQUFVa0MsWUFBWWpDO0lBQ3RCb0MsVUFBU0gsWUFBWUk7RUFDekIsT0FBT25RLFFBQVE7SUFDYkgsT0FBTztFQUNULEdBQUcsbUNBQWtCRyxPQUFPb1EsZUFBZTFDLFNBQVMsR0FBRyxNQUFNLEdBQUcsbUNBQWtCMU4sT0FBTyxtQkFBbUJrUSxRQUFPRyxRQUFRLEdBQUcsbUNBQWtCclEsT0FBTyxnQkFBZ0JnUSxhQUFZLEdBQUcsbUNBQWtCaFEsT0FBTyxhQUFhLGlFQUFpRSxHQUFHLG1DQUFrQkEsT0FBTyxnQkFBZ0I2TixTQUFReUMsVUFBVSxHQUFHLG1DQUFrQnRRLE9BQU8sYUFBYTZOLFNBQVF5QyxVQUFVLEdBQUcsbUNBQWtCdFEsT0FBTyxZQUFZLFVBQVUsR0FBRyxtQ0FBa0JBLE9BQU8sU0FBUyxNQUFNLEdBQUcsbUNBQWtCQSxPQUFPLFVBQVUsQ0FBQyxHQUFHQTtBQUMvaEI7QUFDQSxJQUFJdVEseUJBQXNDLGdEQUFjO0VBQ3REQyxvQkFBb0I7QUFDdEIsQ0FBQztBQUVELElBQUlDLGFBQTBCLHlCQUFVQyxZQUFZO0VBQ2xELDZCQUFVQyxhQUFZRCxVQUFVO0VBRWhDLElBQUlFLFNBQVNDLGFBQWFGLFdBQVU7RUFFcEMsdUJBQXNCO0lBQ3BCLElBQUl4c0I7SUFFSixtQ0FBZ0IsTUFBTXdzQixXQUFVO0lBRWhDLFNBQVNyTixPQUFPNVAsVUFBVWpRLFFBQVE4WCxPQUFPLElBQUlsSyxNQUFNaVMsSUFBSSxHQUFHckksT0FBTyxHQUFHQSxPQUFPcUksTUFBTXJJLFFBQVE7TUFDdkZNLEtBQUtOLFFBQVF2SCxVQUFVdUg7SUFDekI7SUFFQTlXLFFBQVF5c0IsT0FBT3RmLEtBQUt1QyxNQUFNK2MsUUFBUSxDQUFDLElBQUksRUFBRXJlLE9BQU9nSixJQUFJLENBQUM7SUFDckRwWCxNQUFNNmpCLFFBQVE7TUFDWndGLFdBQVdycEIsTUFBTWtGLE1BQU15bkI7TUFDdkJwRCxXQUFXO0lBQ2I7SUFDQXZwQixNQUFNNHNCLFVBQVU7SUFFaEI1c0IsTUFBTTZzQixlQUFlLFVBQVVoVCxLQUFLO01BQ2xDLElBQUlpVCxjQUFjOXNCLE1BQU1rRjtRQUNwQjZuQixnQkFBZ0JELFlBQVlDO1FBQzVCSixnQkFBZ0JHLFlBQVlIO1FBQzVCSyxnQkFBZ0JGLFlBQVlFO1FBQzVCQyxlQUFlSCxZQUFZRztRQUMzQkMsMkJBQTJCSixZQUFZSTtRQUN2Q2hULFFBQVE0UyxZQUFZNVM7TUFDeEIsSUFBSSxDQUFDTCxLQUFLO01BRVYsSUFBSTRQLGtCQUFrQndELGlCQUFpQjtNQUN2QyxJQUFJekQsZUFBZTBELDRCQUE0QixDQUFDekQ7TUFDaEQsSUFBSTVGLFFBQVFzSixpQkFBaUI7UUFDM0I5RCxXQUFXc0Q7UUFDWDNGLFFBQVFuTjtRQUNSeVAsV0FBV3lEO1FBQ1h4RCxXQUFXeUQ7UUFDWHhEO1FBQ0FDO1FBQ0F2UDtNQUNGLENBQUM7TUFDRCxJQUFJbVMscUJBQXFCcnNCLE1BQU00c0IsUUFBUVA7TUFDdkMsSUFBSUEsb0JBQW9CQSxtQkFBbUJ4SSxLQUFLO01BRWhEN2pCLE1BQU1vdEIsU0FBU3ZKLEtBQUs7SUFDdEI7SUFFQTdqQixNQUFNcXRCLGtCQUFrQixZQUFZO01BQ2xDLElBQUlMLGdCQUFnQmh0QixNQUFNa0YsTUFBTThuQjtNQUNoQyxJQUFJekQsWUFBWXZwQixNQUFNNmpCLE1BQU0wRixhQUFhbUMsZ0JBQWdCc0IsYUFBYTtNQUN0RSxPQUFPbkksZUFBZUEsZUFBZSxDQUFDLEdBQUc3a0IsTUFBTWtGLEtBQUssR0FBRyxDQUFDLEdBQUc7UUFDekRxa0I7UUFDQUYsV0FBV3JwQixNQUFNNmpCLE1BQU13RjtNQUN6QixDQUFDO0lBQ0g7SUFFQSxPQUFPcnBCO0VBQ1Q7RUFFQSxnQ0FBYXdzQixhQUFZLENBQUM7SUFDeEI3c0IsS0FBSztJQUNMWCxPQUFPLGtCQUFrQjtNQUN2QixJQUFJbUcsV0FBVyxLQUFLRCxNQUFNQztNQUMxQixPQUFPQSxTQUFTO1FBQ2QwVSxLQUFLLEtBQUtnVDtRQUNWUyxhQUFhLEtBQUtEO01BQ3BCLENBQUM7SUFDSDtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU9iO0FBQ1QsRUFBRWUsdUJBQVM7QUFDWGpCLFdBQVdrQixjQUFjcEI7QUFFekIsSUFBSXFCLE9BQU8sZUFBY3ZvQixPQUFPO0VBQzlCLElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJ1SixXQUFXeG9CLE1BQU13b0I7SUFDakI5SSxhQUFhMWYsTUFBTTBmO0VBQ3ZCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QnBKLEtBQUsySSxVQUFVLFFBQVFqZixLQUFLO0lBQzVCa0wsV0FBVzZQLEdBQUc7TUFDWjBOLE1BQU07SUFDUixHQUFHdmQsU0FBUztJQUNaeUosS0FBSzZUO0VBQ1AsR0FBRzlJLFVBQVUsR0FBR3pmLFFBQVE7QUFDMUI7QUFJQSxJQUFJeW9CLGNBQWMsc0JBQXFCeEUsT0FBTztFQUM1QyxJQUFJQyxZQUFZRCxNQUFNQztJQUNsQndFLFlBQVd6RSxNQUFNbFAsTUFBTXlQLFFBQVFtRTtFQUNuQyxPQUFPO0lBQ0x6RTtJQUNBbkQsV0FBVztJQUNYNkgsZUFBZUY7SUFDZkcsWUFBWUg7SUFDWmhqQixVQUFVO0lBRVZvakIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQSxJQUFJQyxXQUFXLG1CQUFrQmhwQixPQUFPO0VBQ3RDLElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJTLGFBQWExZixNQUFNMGY7SUFDbkI4SSxXQUFXeG9CLE1BQU13b0I7SUFDakJwSixVQUFVcGYsTUFBTW9mO0VBQ3BCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QjlJLEtBQUsySSxVQUFVLFlBQVlqZixLQUFLO0lBQ2hDa0wsV0FBVzZQLEdBQUc7TUFDWixhQUFhO01BQ2IsdUJBQXVCcUU7SUFDekIsR0FBR2xVLFNBQVM7SUFDWnlKLEtBQUs2VDtFQUNQLEdBQUc5SSxVQUFVLEdBQUd6ZixRQUFRO0FBQzFCO0FBSUEsSUFBSWdwQixZQUFZLG9CQUFtQkMsT0FBTztFQUN4QyxJQUFJQyxjQUFjRCxNQUFNbFU7SUFDcEIyVCxZQUFXUSxZQUFZMUUsUUFBUW1FO0lBQy9CL0IsVUFBU3NDLFlBQVlyQztFQUN6QixPQUFPO0lBQ0xzQyxPQUFPdkMsUUFBT3dDO0lBQ2RDLFNBQVMsR0FBR3BnQixPQUFPeWYsWUFBVyxHQUFHLEtBQUssRUFBRXpmLE9BQU95ZixZQUFXLEdBQUcsSUFBSTtJQUNqRVksV0FBVztFQUNiO0FBQ0Y7QUFFQSxJQUFJQyxzQkFBc0JQO0FBQzFCLElBQUlRLG9CQUFvQlI7QUFDeEIsSUFBSVMsbUJBQW1CLDJCQUEwQjFwQixPQUFPO0VBQ3RELElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJTLGFBQWExZixNQUFNMGY7RUFDdkIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCcEosS0FBSzJJLFVBQVUsb0JBQW9CamYsS0FBSztJQUN4Q2tMLFdBQVc2UCxHQUFHO01BQ1osZUFBZTtNQUNmLDJCQUEyQjtJQUM3QixHQUFHN1AsU0FBUztFQUNkLEdBQUd3VSxVQUFVLEdBQUd6ZixRQUFRO0FBQzFCO0FBQ0F5cEIsaUJBQWlCQyxlQUFlO0VBQzlCMXBCLFVBQVU7QUFDWjtBQUNBLElBQUkycEIsaUJBQWlCLHlCQUF3QjVwQixPQUFPO0VBQ2xELElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJTLGFBQWExZixNQUFNMGY7RUFDdkIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCcEosS0FBSzJJLFVBQVUsa0JBQWtCamYsS0FBSztJQUN0Q2tMLFdBQVc2UCxHQUFHO01BQ1osZUFBZTtNQUNmLHdCQUF3QjtJQUMxQixHQUFHN1AsU0FBUztFQUNkLEdBQUd3VSxVQUFVLEdBQUd6ZixRQUFRO0FBQzFCO0FBQ0EycEIsZUFBZUQsZUFBZTtFQUM1QjFwQixVQUFVO0FBQ1o7QUFJQSxJQUFJNHBCLGdCQUFnQix3QkFBdUJDLE9BQU87RUFDaEQsSUFBSXBILE9BQU9vSCxNQUFNcEg7SUFDYnFILFNBQVNELE1BQU1DO0lBQ2Zwa0IsV0FBV21rQixNQUFNbmtCO0VBQ3JCLE9BQU87SUFDTGlkLE1BQU1GLEtBQUtFO0lBQ1hqZDtJQUNBNmEsS0FBS3VKO0lBQ0xqSCxPQUFPSixLQUFLSTtJQUNaM1UsUUFBUTtFQUNWO0FBQ0Y7QUFDQSxJQUFJNmIsYUFBMEIseUJBQVVDLGFBQWE7RUFDbkQsNkJBQVVDLGFBQVlELFdBQVc7RUFFakMsSUFBSUUsVUFBVTNDLGFBQWEwQyxXQUFVO0VBRXJDLHVCQUFzQjtJQUNwQixJQUFJRTtJQUVKLG1DQUFnQixNQUFNRixXQUFVO0lBRWhDLFNBQVNsUCxRQUFRM1EsVUFBVWpRLFFBQVE4WCxPQUFPLElBQUlsSyxNQUFNZ1QsS0FBSyxHQUFHQyxRQUFRLEdBQUdBLFFBQVFELE9BQU9DLFNBQVM7TUFDN0YvSSxLQUFLK0ksU0FBUzVRLFVBQVU0UTtJQUMxQjtJQUVBbVAsU0FBU0QsUUFBUWxpQixLQUFLdUMsTUFBTTJmLFNBQVMsQ0FBQyxJQUFJLEVBQUVqaEIsT0FBT2dKLElBQUksQ0FBQztJQUN4RGtZLE9BQU96TCxRQUFRO01BQ2IwRixXQUFXO0lBQ2I7SUFFQStGLE9BQU9qRCxxQkFBcUIsVUFBVWtELE9BQU87TUFDM0MsSUFBSWhHLFlBQVlnRyxNQUFNaEc7TUFDdEIsSUFBSWlHLG1CQUFtQjlELGdCQUFnQjRELE9BQU9wcUIsTUFBTThuQixhQUFhO01BRWpFLElBQUl6RCxjQUFjaUcsa0JBQWtCO1FBQ2xDRixPQUFPbEMsU0FBUztVQUNkN0Q7UUFDRixDQUFDO01BQ0g7SUFDRjtJQUVBLE9BQU8rRjtFQUNUO0VBRUEsZ0NBQWFGLGFBQVksQ0FBQztJQUN4Qnp2QixLQUFLO0lBQ0xYLE9BQU8sa0JBQWtCO01BQ3ZCLElBQUl5d0IsZUFBZSxLQUFLdnFCO1FBQ3BCd3FCLFdBQVdELGFBQWFDO1FBQ3hCdnFCLFdBQVdzcUIsYUFBYXRxQjtRQUN4QmlMLFlBQVlxZixhQUFhcmY7UUFDekJ1ZixpQkFBaUJGLGFBQWFFO1FBQzlCMVAsS0FBS3dQLGFBQWF4UDtRQUNsQjJFLGFBQWE2SyxhQUFhN0s7UUFDMUJvSSxnQkFBZ0J5QyxhQUFhekM7UUFDN0JuaUIsV0FBVzRrQixhQUFheEM7UUFDeEI5SSxZQUFZc0wsYUFBYXRMO01BQzdCLElBQUl5TCxVQUFVL2tCLGFBQWE7TUFFM0IsSUFBSSxDQUFDNmtCLFlBQVksQ0FBQ0UsV0FBVyxDQUFDRCxnQkFBZ0I7UUFDNUMsT0FBTztNQUNUO01BRUEsSUFBSXBHLFlBQVksS0FBSzFGLE1BQU0wRixhQUFhbUMsZ0JBQWdCc0IsYUFBYTtNQUNyRSxJQUFJcEYsT0FBT2lJLHFCQUFxQkYsY0FBYztNQUM5QyxJQUFJRyxpQkFBaUJGLFVBQVUsSUFBSWpQLE9BQU82RTtNQUMxQyxJQUFJeUosU0FBU3JILEtBQUsyQixhQUFhdUc7TUFDL0IsSUFBSWpNLFFBQVE7UUFDVm9MO1FBQ0Fwa0I7UUFDQStjO01BQ0Y7TUFFQSxJQUFJbUksY0FBYyxzQkFBSSxPQUFPLDRCQUFTO1FBQ3BDdlUsS0FBSzJJLFVBQVUsY0FBY04sS0FBSztRQUNsQ3pULFdBQVc2UCxHQUFHO1VBQ1osZUFBZTtRQUNqQixHQUFHN1AsU0FBUztNQUNkLEdBQUd3VSxVQUFVLEdBQUd6ZixRQUFRO01BQ3hCLE9BQU8sc0JBQUlpbkIsdUJBQXVCNVMsVUFBVTtRQUMxQ3hhLE9BQU87VUFDTHF0QixvQkFBb0IsS0FBS0E7UUFDM0I7TUFDRixHQUFHcUQsV0FBd0Isa0RBQWFLLGFBQWFMLFFBQVEsSUFBSUssV0FBVztJQUM5RTtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU9YO0FBQ1QsRUFBRTdCLHVCQUFTO0FBRVgsSUFBSXlDLGVBQWUsdUJBQXNCblUsT0FBTTtFQUM3QyxJQUFJb1UsYUFBYXBVLE1BQUtvVTtJQUNsQjFMLFFBQVExSSxNQUFLMEk7RUFDakIsT0FBTztJQUNMN0ksT0FBTztJQUNQd1UsV0FBVzNMLFFBQVEsUUFBUTtJQUMzQjRMLGVBQWVGLGFBQWEsU0FBUztJQUVyQ3BsQixVQUFVO0VBQ1o7QUFDRjtBQUNBLElBQUl1bEIsa0JBQWtCLDBCQUF5QmxyQixPQUFPO0VBQ3BELElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJTLGFBQWExZixNQUFNMGY7SUFDbkJxTCxhQUFhL3FCLE1BQU0rcUI7SUFDbkIxTCxRQUFRcmYsTUFBTXFmO0VBQ2xCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6Qi9JLEtBQUsySSxVQUFVLGFBQWFqZixLQUFLO0lBQ2pDa0wsV0FBVzZQLEdBQUc7TUFDWixpQkFBaUJnUTtNQUNqQixZQUFZMUw7SUFDZCxHQUFHblUsU0FBUztFQUNkLEdBQUd3VSxVQUFVLEdBQUd6ZixRQUFRO0FBQzFCO0FBSUEsSUFBSWtyQixvQkFBb0IsNEJBQTJCdlUsUUFBTztFQUN4RCxJQUFJNE4sV0FBVTVOLE9BQU01QixNQUFNeVA7SUFDdEJyRixVQUFVeEksT0FBTXdJO0lBQ2hCRCxXQUFXdkksT0FBTXVJO0lBQ2pCaU0sMkJBQTJCeFUsT0FBTTRJLFlBQVk0TDtFQUNqRCxPQUFPO0lBQ0xDLFlBQVk7SUFDWkMsU0FBU2xNLFdBQVdELFlBQVlpTSwyQkFBMkIsU0FBUztJQUNwRTFlLE1BQU07SUFDTjZlLFVBQVU7SUFDVmpDLFNBQVMsR0FBR3BnQixPQUFPc2IsU0FBUW9FLFdBQVcsR0FBRyxLQUFLLEVBQUUxZixPQUFPc2IsU0FBUW9FLFdBQVcsR0FBRyxJQUFJO0lBQ2pGRyx5QkFBeUI7SUFDekJwakIsVUFBVTtJQUNWb2IsVUFBVTtFQUNaO0FBQ0Y7QUFDQSxJQUFJeUssaUJBQWlCLHlCQUF3QnhyQixPQUFPO0VBQ2xELElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWDJFLGFBQWExZixNQUFNMGY7SUFDbkJOLFVBQVVwZixNQUFNb2Y7SUFDaEJILFlBQVlqZixNQUFNaWY7SUFDbEJFLFdBQVduZixNQUFNbWY7RUFDckIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCN0ksS0FBSzJJLFVBQVUsa0JBQWtCamYsS0FBSztJQUN0Q2tMLFdBQVc2UCxHQUFHO01BQ1osbUJBQW1CO01BQ25CLDZCQUE2QnFFO01BQzdCLDhCQUE4QkQ7SUFDaEMsR0FBR2pVLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsUUFBUTtBQUMxQjtBQUlBLElBQUl3ckIseUJBQXlCLG1DQUFrQztFQUM3RCxPQUFPO0lBQ0xKLFlBQVk7SUFDWkssV0FBVztJQUNYSixTQUFTO0lBQ1R6ZSxZQUFZO0VBQ2Q7QUFDRjtBQUNBLElBQUk4ZSxzQkFBc0IsOEJBQTZCM3JCLE9BQU87RUFDNUQsSUFBSUMsV0FBV0QsTUFBTUM7SUFDakJpTCxZQUFZbEwsTUFBTWtMO0lBQ2xCNlAsS0FBSy9hLE1BQU0rYTtJQUNYMkUsYUFBYTFmLE1BQU0wZjtJQUNuQlQsWUFBWWpmLE1BQU1pZjtFQUN0QixPQUFPLHNCQUFJLE9BQU8sNEJBQVM7SUFDekIzSSxLQUFLMkksVUFBVSx1QkFBdUJqZixLQUFLO0lBQzNDa0wsV0FBVzZQLEdBQUc7TUFDWjZRLFlBQVk7SUFDZCxHQUFHMWdCLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsUUFBUTtBQUMxQjtBQUVBLElBQUk0ckI7QUFFSixJQUFJQyxjQUFjLENBQUMsTUFBTTtBQUV6Qiw0Q0FBNEM7RUFBRSxPQUFPO0FBQW1PO0FBRXhSLElBQUlDLFFBQVEsUUFBd0M7RUFDbER0a0IsTUFBTTtFQUNOMkIsUUFBUTtBQUNWLElBQUk7RUFDRjNCLE1BQU07RUFDTjJCLFFBQVE7RUFDUjlKLEtBQUs7RUFDTHVNLFVBQVVtZ0I7QUFDWjtBQUtBLElBQUlDLE1BQU0sY0FBYXRWLE9BQU07RUFDM0IsSUFBSXVWLE9BQU92VixNQUFLdVY7SUFDWmxzQixRQUFRLDRDQUF5QjJXLE9BQU1tVixXQUFXO0VBRXRELE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6Qm5KLFFBQVF1SjtJQUNScEosT0FBT29KO0lBQ1BDLFNBQVM7SUFDVCxlQUFlO0lBQ2ZDLFdBQVc7SUFDWDlWLEtBQUt5VjtFQUNQLEdBQUcvckIsS0FBSyxDQUFDO0FBQ1g7QUFFQSxJQUFJcXNCLFlBQVksb0JBQW1CcnNCLE9BQU87RUFDeEMsT0FBTyxzQkFBSWlzQixLQUFLLDRCQUFTO0lBQ3ZCQyxNQUFNO0VBQ1IsR0FBR2xzQixLQUFLLEdBQUcsc0JBQUksUUFBUTtJQUNyQjlCLEdBQUc7RUFDTCxDQUFDLENBQUM7QUFDSjtBQUNBLElBQUlvdUIsY0FBYyxzQkFBcUJ0c0IsT0FBTztFQUM1QyxPQUFPLHNCQUFJaXNCLEtBQUssNEJBQVM7SUFDdkJDLE1BQU07RUFDUixHQUFHbHNCLEtBQUssR0FBRyxzQkFBSSxRQUFRO0lBQ3JCOUIsR0FBRztFQUNMLENBQUMsQ0FBQztBQUNKO0FBSUEsSUFBSXF1QixVQUFVLGtCQUFpQjVWLE9BQU87RUFDcEMsSUFBSTZWLFlBQVk3VixNQUFNNlY7SUFDbEJDLGNBQWM5VixNQUFNM0I7SUFDcEIyVCxZQUFXOEQsWUFBWWhJLFFBQVFtRTtJQUMvQi9CLFVBQVM0RixZQUFZM0Y7RUFDekIsT0FBTztJQUNMdFEsT0FBTztJQUNQNFMsT0FBT29ELFlBQVkzRixRQUFPNkYsWUFBWTdGLFFBQU84RjtJQUM3Q3JCLFNBQVM7SUFDVGhDLFNBQVNYLFlBQVc7SUFDcEJpRSxZQUFZO0lBQ1osVUFBVTtNQUNSeEQsT0FBT29ELFlBQVkzRixRQUFPZ0csWUFBWWhHLFFBQU93QztJQUMvQztFQUNGO0FBQ0Y7QUFFQSxJQUFJeUQsdUJBQXVCUDtBQUMzQixJQUFJUSxvQkFBb0IsNEJBQTJCL3NCLE9BQU87RUFDeEQsSUFBSUMsV0FBV0QsTUFBTUM7SUFDakJpTCxZQUFZbEwsTUFBTWtMO0lBQ2xCNlAsS0FBSy9hLE1BQU0rYTtJQUNYa0UsWUFBWWpmLE1BQU1pZjtJQUNsQlMsYUFBYTFmLE1BQU0wZjtFQUN2QixPQUFPLHNCQUFJLE9BQU8sNEJBQVM7SUFDekJwSixLQUFLMkksVUFBVSxxQkFBcUJqZixLQUFLO0lBQ3pDa0wsV0FBVzZQLEdBQUc7TUFDWmlTLFdBQVc7TUFDWCxzQkFBc0I7SUFDeEIsR0FBRzloQixTQUFTO0VBQ2QsR0FBR3dVLFVBQVUsR0FBR3pmLFlBQVksc0JBQUlxc0IsYUFBYSxJQUFJLENBQUM7QUFDcEQ7QUFDQSxJQUFJVyxvQkFBb0JWO0FBQ3hCLElBQUlXLGlCQUFpQix5QkFBd0JsdEIsT0FBTztFQUNsRCxJQUFJQyxXQUFXRCxNQUFNQztJQUNqQmlMLFlBQVlsTCxNQUFNa0w7SUFDbEI2UCxLQUFLL2EsTUFBTSthO0lBQ1hrRSxZQUFZamYsTUFBTWlmO0lBQ2xCUyxhQUFhMWYsTUFBTTBmO0VBQ3ZCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QnBKLEtBQUsySSxVQUFVLGtCQUFrQmpmLEtBQUs7SUFDdENrTCxXQUFXNlAsR0FBRztNQUNaaVMsV0FBVztNQUNYLG1CQUFtQjtJQUNyQixHQUFHOWhCLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsWUFBWSxzQkFBSW9zQixXQUFXLElBQUksQ0FBQztBQUNsRDtBQUlBLElBQUljLHdCQUF3QixnQ0FBK0JqSixPQUFPO0VBQ2hFLElBQUk2RyxhQUFhN0csTUFBTTZHO0lBQ25CcUMsY0FBY2xKLE1BQU1sUDtJQUNwQjJULFlBQVd5RSxZQUFZM0ksUUFBUW1FO0lBQy9CL0IsVUFBU3VHLFlBQVl0RztFQUN6QixPQUFPO0lBQ0x0USxPQUFPO0lBQ1BrVixXQUFXO0lBQ1gyQixpQkFBaUJ0QyxhQUFhbEUsUUFBT3lHLFlBQVl6RyxRQUFPOEY7SUFDeERwSCxjQUFjb0QsWUFBVztJQUN6QmxELFdBQVdrRCxZQUFXO0lBQ3RCN0YsT0FBTztFQUNUO0FBQ0Y7QUFDQSxJQUFJeUsscUJBQXFCLDZCQUE0QnZ0QixPQUFPO0VBQzFELElBQUlrTCxZQUFZbEwsTUFBTWtMO0lBQ2xCNlAsS0FBSy9hLE1BQU0rYTtJQUNYa0UsWUFBWWpmLE1BQU1pZjtJQUNsQlMsYUFBYTFmLE1BQU0wZjtFQUN2QixPQUFPLHNCQUFJLFFBQVEsNEJBQVMsQ0FBQyxHQUFHQSxZQUFZO0lBQzFDcEosS0FBSzJJLFVBQVUsc0JBQXNCamYsS0FBSztJQUMxQ2tMLFdBQVc2UCxHQUFHO01BQ1osdUJBQXVCO0lBQ3pCLEdBQUc3UCxTQUFTO0VBQ2QsQ0FBQyxDQUFDO0FBQ0o7QUFJQSxJQUFJc2lCLHVCQUF1Qiw0QkFBVTNCLG9CQUFvQkEsa0JBQWtCLDBDQUF1QixDQUFDLDREQUE0RCxDQUFDLEVBQUU7QUFDbEssSUFBSTRCLHNCQUFzQiw4QkFBNkJ2RSxPQUFPO0VBQzVELElBQUlzRCxZQUFZdEQsTUFBTXNEO0lBQ2xCTixPQUFPaEQsTUFBTWdEO0lBQ2IvQyxjQUFjRCxNQUFNbFU7SUFDcEI2UixVQUFTc0MsWUFBWXJDO0lBQ3JCNkIsWUFBV1EsWUFBWTFFLFFBQVFtRTtFQUNuQyxPQUFPO0lBQ0xwUyxPQUFPO0lBQ1A0UyxPQUFPb0QsWUFBWTNGLFFBQU82RixZQUFZN0YsUUFBTzhGO0lBQzdDckIsU0FBUztJQUNUaEMsU0FBU1gsWUFBVztJQUNwQmlFLFlBQVk7SUFDWmxCLFdBQVc7SUFDWGdDLFVBQVV4QjtJQUNWcmUsWUFBWTtJQUNaOGYsYUFBYXpCO0lBQ2IzQyxXQUFXO0lBQ1hxRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQSxJQUFJQyxhQUFhLHFCQUFvQi9ELE9BQU87RUFDMUMsSUFBSWdFLFFBQVFoRSxNQUFNZ0U7SUFDZC9ELFNBQVNELE1BQU1DO0VBQ25CLE9BQU8sc0JBQUksUUFBUTtJQUNqQnpULEtBQWtCLHFDQUFNO01BQ3RCeVgsV0FBVyxHQUFHN2tCLE9BQU9za0Isc0JBQXNCLGtCQUFrQixFQUFFdGtCLE9BQU80a0IsT0FBTyxjQUFjO01BQzNGVCxpQkFBaUI7TUFDakJ6RyxjQUFjO01BQ2QwRSxTQUFTO01BQ1QwQyxZQUFZakUsU0FBUyxRQUFRO01BQzdCcEgsUUFBUTtNQUNSaUwsZUFBZTtNQUNmOUssT0FBTztJQUNULEdBQUcsUUFBd0MsS0FBSyxzQkFBc0IsUUFBd0MsS0FBSyw2OVZBQTY5VjtFQUNsbFcsQ0FBQztBQUNIO0FBRUEsSUFBSW1MLG1CQUFtQiwyQkFBMEJqdUIsT0FBTztFQUN0RCxJQUFJa0wsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEJTLGFBQWExZixNQUFNMGY7SUFDbkJMLFFBQVFyZixNQUFNcWY7RUFDbEIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCL0ksS0FBSzJJLFVBQVUsb0JBQW9CamYsS0FBSztJQUN4Q2tMLFdBQVc2UCxHQUFHO01BQ1ppUyxXQUFXO01BQ1gscUJBQXFCO0lBQ3ZCLEdBQUc5aEIsU0FBUztFQUNkLEdBQUd3VSxVQUFVLEdBQUcsc0JBQUltTyxZQUFZO0lBQzlCQyxPQUFPO0lBQ1AvRCxRQUFRMUs7RUFDVixDQUFDLEdBQUcsc0JBQUl3TyxZQUFZO0lBQ2xCQyxPQUFPO0lBQ1AvRCxRQUFRO0VBQ1YsQ0FBQyxHQUFHLHNCQUFJOEQsWUFBWTtJQUNsQkMsT0FBTztJQUNQL0QsUUFBUSxDQUFDMUs7RUFDWCxDQUFDLENBQUM7QUFDSjtBQUNBNE8saUJBQWlCdEUsZUFBZTtFQUM5QnVDLE1BQU07QUFDUjtBQUVBLElBQUlnQyxRQUFRLGFBQWF2WCxPQUFNO0VBQzdCLElBQUlvVSxhQUFhcFUsTUFBS29VO0lBQ2xCeUIsWUFBWTdWLE1BQUs2VjtJQUNqQjJCLGFBQWF4WCxNQUFLM0I7SUFDbEI2UixVQUFTc0gsV0FBV3JIO0lBQ3BCSCxnQkFBZXdILFdBQVd2SDtJQUMxQnBDLFdBQVUySixXQUFXMUo7RUFDekIsT0FBTztJQUNMak8sT0FBTztJQUNQNlUsWUFBWTtJQUNaZ0MsaUJBQWlCdEMsYUFBYWxFLFFBQU91SCxXQUFXdkgsUUFBT0c7SUFDdkRxSCxhQUFhdEQsYUFBYWxFLFFBQU95RyxZQUFZZCxZQUFZM0YsUUFBT3lILFVBQVV6SCxRQUFPOEY7SUFDakYvRixjQUFjRDtJQUNkNEgsYUFBYTtJQUNiQyxhQUFhO0lBQ2JDLFdBQVdqQyxZQUFZLGFBQWF0akIsT0FBTzJkLFFBQU95SCxPQUFPLElBQUk7SUFDN0RyZSxRQUFRO0lBQ1JxYixTQUFTO0lBQ1RDLFVBQVU7SUFDVm1ELGdCQUFnQjtJQUNoQnRLLFdBQVdJLFNBQVE2QjtJQUNuQnNJLFNBQVM7SUFDVGhwQixVQUFVO0lBQ1ZpbkIsWUFBWTtJQUNaLFdBQVc7TUFDVHlCLGFBQWE3QixZQUFZM0YsUUFBT3lILFVBQVV6SCxRQUFPK0g7SUFDbkQ7RUFDRjtBQUNGO0FBRUEsSUFBSUMsVUFBVSxrQkFBaUI3dUIsT0FBTztFQUNwQyxJQUFJQyxXQUFXRCxNQUFNQztJQUNqQjhhLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEIvVCxZQUFZbEwsTUFBTWtMO0lBQ2xCNmYsYUFBYS9xQixNQUFNK3FCO0lBQ25CeUIsWUFBWXhzQixNQUFNd3NCO0lBQ2xCaEUsV0FBV3hvQixNQUFNd29CO0lBQ2pCOUksYUFBYTFmLE1BQU0wZjtJQUNuQm9QLGFBQWE5dUIsTUFBTTh1QjtFQUN2QixPQUFPLHNCQUFJLE9BQU8sNEJBQVM7SUFDekJuYSxLQUFLNlQ7SUFDTGxTLEtBQUsySSxVQUFVLFdBQVdqZixLQUFLO0lBQy9Ca0wsV0FBVzZQLEdBQUc7TUFDWmdVLFNBQVM7TUFDVCx3QkFBd0JoRTtNQUN4Qix1QkFBdUJ5QjtNQUN2Qix5QkFBeUJzQztJQUMzQixHQUFHNWpCLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsUUFBUTtBQUMxQjtBQUVBLElBQUkrdUIsY0FBYyxDQUFDLE1BQU07QUFDekIsSUFBSUMsV0FBVyxtQkFBa0J0WSxPQUFNO0VBQ3JDLElBQUk2TixXQUFVN04sTUFBSzNCLE1BQU15UDtFQUN6QixPQUFPO0lBQ0xvRSxlQUFlckUsU0FBUW9FLFdBQVc7SUFDbENFLFlBQVl0RSxTQUFRb0UsV0FBVztFQUNqQztBQUNGO0FBRUEsSUFBSXNHLFFBQVEsZ0JBQWVsdkIsT0FBTztFQUNoQyxJQUFJQyxXQUFXRCxNQUFNQztJQUNqQmlMLFlBQVlsTCxNQUFNa0w7SUFDbEI2UCxLQUFLL2EsTUFBTSthO0lBQ1hrRSxZQUFZamYsTUFBTWlmO0lBQ2xCa1EsVUFBVW52QixNQUFNbXZCO0lBQ2hCQyxlQUFlcHZCLE1BQU1vdkI7SUFDckIxUCxhQUFhMWYsTUFBTTBmO0lBQ25CbEosUUFBUXhXLE1BQU13VztJQUNkeEIsUUFBUWhWLE1BQU1nVjtJQUNkd0ssY0FBY3hmLE1BQU13ZjtFQUN4QixPQUFPLHNCQUFJLE9BQU8sNEJBQVM7SUFDekJsSixLQUFLMkksVUFBVSxTQUFTamYsS0FBSztJQUM3QmtMLFdBQVc2UCxHQUFHO01BQ1pzVSxPQUFPO0lBQ1QsR0FBR25rQixTQUFTO0VBQ2QsR0FBR3dVLFVBQVUsR0FBRyxzQkFBSXlQLFNBQVMsNEJBQVMsQ0FBQyxHQUFHQyxjQUFjO0lBQ3RENVA7SUFDQXhLO0lBQ0FpSztJQUNBbEU7RUFDRixDQUFDLEdBQUd2RSxLQUFLLEdBQUcsc0JBQUksT0FBTyxNQUFNdlcsUUFBUSxDQUFDO0FBQ3hDO0FBRUEsSUFBSXF2QixrQkFBa0IsMEJBQXlCMVksUUFBTztFQUNwRCxJQUFJNE4sV0FBVTVOLE9BQU01QixNQUFNeVA7RUFDMUIsT0FBTztJQUNMak8sT0FBTztJQUNQNFMsT0FBTztJQUNQblosUUFBUTtJQUNScWIsU0FBUztJQUNUb0MsVUFBVTtJQUNWOWYsWUFBWTtJQUNaMlgsY0FBYztJQUNkZ0ssYUFBYS9LLFNBQVFvRSxXQUFXO0lBQ2hDNEcsY0FBY2hMLFNBQVFvRSxXQUFXO0lBQ2pDNkcsZUFBZTtFQUNqQjtBQUNGO0FBQ0EsSUFBSUMsZUFBZSx1QkFBc0IxdkIsT0FBTztFQUM5QyxJQUFJaWYsWUFBWWpmLE1BQU1pZjtJQUNsQmxFLEtBQUsvYSxNQUFNK2E7SUFDWDdQLFlBQVlsTCxNQUFNa0w7RUFFdEIsSUFBSXlrQixvQkFBb0I1USxpQkFBaUIvZSxLQUFLO0VBQzFDMnZCLGtCQUFrQkM7RUFDbEIsSUFBSWxRLGFBQWEsNENBQXlCaVEsbUJBQW1CWCxXQUFXO0VBRTVFLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QjFZLEtBQUsySSxVQUFVLGdCQUFnQmpmLEtBQUs7SUFDcENrTCxXQUFXNlAsR0FBRztNQUNaLGlCQUFpQjtJQUNuQixHQUFHN1AsU0FBUztFQUNkLEdBQUd3VSxVQUFVLENBQUM7QUFDaEI7QUFFQSxJQUFJbVEsWUFBWSxDQUFDLFlBQVksY0FBYyxZQUFZLGdCQUFnQjtBQUN2RSxJQUFJQyxXQUFXLG1CQUFrQm5aLE9BQU07RUFDckMsSUFBSW9VLGFBQWFwVSxNQUFLb1U7SUFDbEJqeEIsUUFBUTZjLE1BQUs3YztJQUNicTBCLGFBQWF4WCxNQUFLM0I7SUFDbEJ3UCxXQUFVMkosV0FBVzFKO0lBQ3JCb0MsVUFBU3NILFdBQVdySDtFQUN4QixPQUFPbkgsZUFBZTtJQUNwQm9RLFFBQVF2TCxTQUFRb0UsV0FBVztJQUMzQkMsZUFBZXJFLFNBQVFvRSxXQUFXO0lBQ2xDRSxZQUFZdEUsU0FBUW9FLFdBQVc7SUFDL0JvSCxZQUFZakYsYUFBYSxXQUFXO0lBQ3BDM0IsT0FBT3ZDLFFBQU9nRztJQUdkb0QsV0FBV24yQixRQUFRLGtCQUFrQjtFQUN2QyxHQUFHbzJCLGNBQWM7QUFDbkI7QUFDQSxJQUFJQyxlQUFlO0VBQ2pCQyxVQUFVO0VBQ1ZDLE1BQU07RUFDTkMsVUFBVTtFQUNWQyxRQUFRO0VBQ1JSLFFBQVE7RUFDUnBCLFNBQVM7RUFDVHJGLFNBQVM7QUFDWDtBQUNBLElBQUk0RyxpQkFBaUI7RUFDbkJ4akIsTUFBTTtFQUNONGUsU0FBUztFQUNUOEUsVUFBVTtFQUNWSSxxQkFBcUI7RUFDckIsV0FBVzdRLGVBQWU7SUFDeEJ4RSxTQUFTO0lBQ1Q2VSxZQUFZO0lBQ1pTLFlBQVk7RUFDZCxHQUFHTixZQUFZO0FBQ2pCO0FBRUEsSUFBSU8sYUFBYSxxQkFBb0JDLFVBQVU7RUFDN0MsT0FBT2hSLGVBQWU7SUFDcEJuSixPQUFPO0lBQ1A0UyxPQUFPO0lBQ1B3SCxZQUFZO0lBQ1o5aUIsU0FBUzZpQixXQUFXLElBQUk7SUFDeEI3TixPQUFPO0VBQ1QsR0FBR3FOLFlBQVk7QUFDakI7QUFFQSxJQUFJVSxRQUFRLGdCQUFlN3dCLE9BQU87RUFDaEMsSUFBSWtMLFlBQVlsTCxNQUFNa0w7SUFDbEI2UCxLQUFLL2EsTUFBTSthO0lBQ1hrRSxZQUFZamYsTUFBTWlmO0lBQ2xCbmxCLFFBQVFrRyxNQUFNbEc7RUFFbEIsSUFBSTYxQixvQkFBb0I1USxpQkFBaUIvZSxLQUFLO0lBQzFDd29CLFdBQVdtSCxrQkFBa0JuSDtJQUM3QnVDLGFBQWE0RSxrQkFBa0I1RTtJQUMvQjRGLFdBQVdoQixrQkFBa0JnQjtJQUM3QkcsaUJBQWlCbkIsa0JBQWtCbUI7SUFDbkNwUixhQUFhLDRDQUF5QmlRLG1CQUFtQkUsU0FBUztFQUV0RSxPQUFPLHNCQUFJLE9BQU87SUFDaEIza0IsV0FBVzZQLEdBQUc7TUFDWixtQkFBbUI7SUFDckIsR0FBRzdQLFNBQVM7SUFDWm9MLEtBQUsySSxVQUFVLFNBQVNqZixLQUFLO0lBQzdCLGNBQWNsRyxTQUFTO0VBQ3pCLEdBQUcsc0JBQUksU0FBUyw0QkFBUztJQUN2Qm9SLFdBQVc2UCxHQUFHO01BQ1pnVyxPQUFPO0lBQ1QsR0FBR0QsY0FBYztJQUNqQm5jLEtBQUs2VDtJQUNMOUgsT0FBT2dRLFdBQVdDLFFBQVE7SUFDMUJLLFVBQVVqRztFQUNaLEdBQUdyTCxVQUFVLENBQUMsQ0FBQztBQUNqQjtBQUVBLElBQUl1UixnQkFBZ0Isd0JBQXVCdGEsT0FBTTtFQUMvQyxJQUFJd1gsYUFBYXhYLE1BQUszQjtJQUNsQndQLFdBQVUySixXQUFXMUo7SUFDckJrQyxnQkFBZXdILFdBQVd2SDtJQUMxQkMsVUFBU3NILFdBQVdySDtFQUN4QixPQUFPO0lBQ0x0USxPQUFPO0lBQ1A2VyxpQkFBaUJ4RyxRQUFPeUc7SUFDeEIxRyxjQUFjRCxnQkFBZTtJQUM3QjJFLFNBQVM7SUFDVHlFLFFBQVF2TCxTQUFRb0UsV0FBVztJQUMzQjBILFVBQVU7RUFFWjtBQUNGO0FBQ0EsSUFBSVkscUJBQXFCLDZCQUE0QnRhLFFBQU87RUFDMUQsSUFBSThQLGNBQWM5UCxPQUFNNUI7SUFDcEIyUixnQkFBZUQsWUFBWUU7SUFDM0JDLFVBQVNILFlBQVlJO0lBQ3JCcUssbUJBQW1CdmEsT0FBTXVhO0VBQzdCLE9BQU87SUFDTHZLLGNBQWNELGdCQUFlO0lBQzdCeUMsT0FBT3ZDLFFBQU9nRztJQUNkYSxVQUFVO0lBQ1YzTSxVQUFVO0lBQ1Z1SSxTQUFTO0lBQ1RpRyxhQUFhO0lBQ2I2QixjQUFjRCxvQkFBb0JBLHFCQUFxQixTQUFZLGFBQWE7SUFDaEZWLFlBQVk7RUFDZDtBQUNGO0FBQ0EsSUFBSVksc0JBQXNCLDhCQUE2QjFhLE9BQU87RUFDNUQsSUFBSThWLGNBQWM5VixNQUFNM0I7SUFDcEJ3UCxXQUFVaUksWUFBWWhJO0lBQ3RCa0MsZ0JBQWU4RixZQUFZN0Y7SUFDM0JDLFVBQVM0RixZQUFZM0Y7SUFDckIwRixZQUFZN1YsTUFBTTZWO0VBQ3RCLE9BQU87SUFDTG5CLFlBQVk7SUFDWnpFLGNBQWNELGdCQUFlO0lBQzdCMEcsaUJBQWlCYixZQUFZM0YsUUFBT3lLLGNBQWM7SUFDbERoRyxTQUFTO0lBQ1RpRSxhQUFhL0ssU0FBUW9FO0lBQ3JCNEcsY0FBY2hMLFNBQVFvRTtJQUN0QixVQUFVO01BQ1J5RSxpQkFBaUJ4RyxRQUFPeUs7TUFDeEJsSSxPQUFPdkMsUUFBTzBLO0lBQ2hCO0VBQ0Y7QUFDRjtBQUNBLElBQUlDLG9CQUFvQiw0QkFBMkJ0TixPQUFPO0VBQ3hELElBQUlqa0IsV0FBV2lrQixNQUFNamtCO0lBQ2pCeWYsYUFBYXdFLE1BQU14RTtFQUN2QixPQUFPLHNCQUFJLE9BQU9BLFlBQVl6ZixRQUFRO0FBQ3hDO0FBQ0EsSUFBSXd4QixzQkFBc0JEO0FBQzFCLElBQUlFLGtCQUFrQkY7QUFDdEIsMEJBQTBCdEksT0FBTztFQUMvQixJQUFJanBCLFdBQVdpcEIsTUFBTWpwQjtJQUNqQnlmLGFBQWF3SixNQUFNeEo7RUFDdkIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCaVMsTUFBTTtFQUNSLEdBQUdqUyxVQUFVLEdBQUd6ZixZQUFZLHNCQUFJb3NCLFdBQVc7SUFDekNILE1BQU07RUFDUixDQUFDLENBQUM7QUFDSjtBQUVBLElBQUkwRixhQUFhLHFCQUFvQjV4QixPQUFPO0VBQzFDLElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjJtQixjQUFhN3hCLE1BQU1tYztJQUNuQnBCLEtBQUsvYSxNQUFNK2E7SUFDWDZVLE9BQU81dkIsTUFBTTR2QjtJQUNiM1EsWUFBWWpmLE1BQU1pZjtJQUNsQlMsYUFBYTFmLE1BQU0wZjtJQUNuQnFMLGFBQWEvcUIsTUFBTStxQjtJQUNuQitHLGVBQWM5eEIsTUFBTTJqQjtJQUNwQm5FLGNBQWN4ZixNQUFNd2Y7RUFDeEIsSUFBSXVTLFlBQVlGLFlBQVdFO0lBQ3ZCQyxRQUFRSCxZQUFXRztJQUNuQkMsU0FBU0osWUFBV0k7RUFDeEIsT0FBTyxzQkFBSUMseUJBQVksTUFBTSxVQUFVcEksT0FBTztJQUM1QyxJQUFJMVAsT0FBTTBQLE1BQU14VDtNQUNaNmIsWUFBWXJJLE1BQU0vTztJQUN0QixPQUFPLHNCQUFJZ1gsV0FBVztNQUNwQm5DO01BQ0FsUSxZQUFZQyxlQUFlO1FBQ3pCelUsV0FBV2luQixVQUFVL1gsS0FBSTZFLFVBQVUsY0FBY2pmLEtBQUssQ0FBQyxHQUFHK2EsR0FBRztVQUMzRCxlQUFlO1VBQ2YsNEJBQTRCZ1E7UUFDOUIsR0FBRzdmLFNBQVMsQ0FBQztNQUNmLEdBQUd3VSxVQUFVO01BQ2JGO0lBQ0YsR0FBRyxzQkFBSXdTLE9BQU87TUFDWnBDO01BQ0FsUSxZQUFZO1FBQ1Z4VSxXQUFXaW5CLFVBQVUvWCxLQUFJNkUsVUFBVSxtQkFBbUJqZixLQUFLLENBQUMsR0FBRythLEdBQUc7VUFDaEUsc0JBQXNCO1FBQ3hCLEdBQUc3UCxTQUFTLENBQUM7TUFDZjtNQUNBc1U7SUFDRixHQUFHdmYsUUFBUSxHQUFHLHNCQUFJZ3lCLFFBQVE7TUFDeEJyQztNQUNBbFEsWUFBWUMsZUFBZTtRQUN6QnpVLFdBQVdpbkIsVUFBVS9YLEtBQUk2RSxVQUFVLG9CQUFvQmpmLEtBQUssQ0FBQyxHQUFHK2EsR0FBRztVQUNqRSx1QkFBdUI7UUFDekIsR0FBRzdQLFNBQVMsQ0FBQztRQUNiLGNBQWMsVUFBVWhDLE9BQU9qSixZQUFZLFFBQVE7TUFDckQsR0FBRzZ4QixZQUFXO01BQ2R0UztJQUNGLENBQUMsQ0FBQztFQUNKLENBQUM7QUFDSDtBQUVBLElBQUk0UyxZQUFZLG9CQUFtQnpiLE9BQU07RUFDdkMsSUFBSW9VLGFBQWFwVSxNQUFLb1U7SUFDbEJ5QixZQUFZN1YsTUFBSzZWO0lBQ2pCNkYsYUFBYTFiLE1BQUswYjtJQUNsQmxFLGFBQWF4WCxNQUFLM0I7SUFDbEJ3UCxXQUFVMkosV0FBVzFKO0lBQ3JCb0MsVUFBU3NILFdBQVdySDtFQUN4QixPQUFPO0lBQ0x0USxPQUFPO0lBQ1A2VyxpQkFBaUJnRixhQUFheEwsUUFBT3lILFVBQVU5QixZQUFZM0YsUUFBT3lMLFlBQVk7SUFDOUVsSixPQUFPMkIsYUFBYWxFLFFBQU84RixZQUFZMEYsYUFBYXhMLFFBQU9HLFdBQVc7SUFDdEUvVyxRQUFRO0lBQ1JxYixTQUFTO0lBQ1RvQyxVQUFVO0lBQ1ZwRSxTQUFTLEdBQUdwZ0IsT0FBT3NiLFNBQVFvRSxXQUFXLEdBQUcsS0FBSyxFQUFFMWYsT0FBT3NiLFNBQVFvRSxXQUFXLEdBQUcsSUFBSTtJQUNqRjlGLE9BQU87SUFDUHlQLFlBQVk7SUFDWkMseUJBQXlCO0lBRXpCLFdBQVc7TUFDVG5GLGlCQUFpQixDQUFDdEMsYUFBYXNILGFBQWF4TCxRQUFPeUgsVUFBVXpILFFBQU80TCxZQUFZO0lBQ2xGO0VBQ0Y7QUFDRjtBQUVBLElBQUlDLFNBQVMsaUJBQWdCMXlCLE9BQU87RUFDbEMsSUFBSUMsV0FBV0QsTUFBTUM7SUFDakJpTCxZQUFZbEwsTUFBTWtMO0lBQ2xCNlAsS0FBSy9hLE1BQU0rYTtJQUNYa0UsWUFBWWpmLE1BQU1pZjtJQUNsQjhMLGFBQWEvcUIsTUFBTStxQjtJQUNuQnlCLFlBQVl4c0IsTUFBTXdzQjtJQUNsQjZGLGFBQWFyeUIsTUFBTXF5QjtJQUNuQjdKLFdBQVd4b0IsTUFBTXdvQjtJQUNqQjlJLGFBQWExZixNQUFNMGY7RUFDdkIsT0FBTyxzQkFBSSxPQUFPLDRCQUFTO0lBQ3pCcEosS0FBSzJJLFVBQVUsVUFBVWpmLEtBQUs7SUFDOUJrTCxXQUFXNlAsR0FBRztNQUNaNFgsUUFBUTtNQUNSLHVCQUF1QjVIO01BQ3ZCLHNCQUFzQnlCO01BQ3RCLHVCQUF1QjZGO0lBQ3pCLEdBQUdubkIsU0FBUztJQUNaeUosS0FBSzZUO0lBQ0wsaUJBQWlCdUM7RUFDbkIsR0FBR3JMLFVBQVUsR0FBR3pmLFFBQVE7QUFDMUI7QUFFQSxJQUFJMnlCLGlCQUFpQix5QkFBd0JqYyxPQUFNO0VBQ2pELElBQUl3WCxhQUFheFgsTUFBSzNCO0lBQ2xCd1AsV0FBVTJKLFdBQVcxSjtJQUNyQm9DLFVBQVNzSCxXQUFXckg7RUFDeEIsT0FBTztJQUNMdFEsT0FBTztJQUNQNFMsT0FBT3ZDLFFBQU9nTTtJQUNkekMsVUFBVTtJQUNWcEMsWUFBWXhKLFNBQVFvRSxXQUFXO0lBQy9CK0UsYUFBYW5KLFNBQVFvRSxXQUFXO0VBQ2xDO0FBQ0Y7QUFFQSxJQUFJa0ssY0FBYyxzQkFBcUI5eUIsT0FBTztFQUM1QyxJQUFJQyxXQUFXRCxNQUFNQztJQUNqQmlMLFlBQVlsTCxNQUFNa0w7SUFDbEI2UCxLQUFLL2EsTUFBTSthO0lBQ1hrRSxZQUFZamYsTUFBTWlmO0lBQ2xCUyxhQUFhMWYsTUFBTTBmO0VBQ3ZCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QnBKLEtBQUsySSxVQUFVLGVBQWVqZixLQUFLO0lBQ25Da0wsV0FBVzZQLEdBQUc7TUFDWmdZLGFBQWE7SUFDZixHQUFHN25CLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsUUFBUTtBQUMxQjtBQUVBLElBQUkreUIsT0FBTSxjQUFhcmMsT0FBTTtFQUMzQixJQUFJb1UsYUFBYXBVLE1BQUtvVTtJQUNsQm9ELGFBQWF4WCxNQUFLM0I7SUFDbEJ3UCxXQUFVMkosV0FBVzFKO0lBQ3JCb0MsVUFBU3NILFdBQVdySDtFQUN4QixPQUFPO0lBQ0x0USxPQUFPO0lBQ1A0UyxPQUFPMkIsYUFBYWxFLFFBQU93QyxZQUFZeEMsUUFBT2dHO0lBQzlDdUQsVUFBVTtJQUNWcEMsWUFBWXhKLFNBQVFvRSxXQUFXO0lBQy9CK0UsYUFBYW5KLFNBQVFvRSxXQUFXO0lBQ2hDcUssVUFBVTtJQUNWbFMsVUFBVTtJQUNWcVEsY0FBYztJQUNkWCxZQUFZO0VBQ2Q7QUFDRjtBQUVBLElBQUl5QyxjQUFjLHNCQUFxQmx6QixPQUFPO0VBQzVDLElBQUlDLFdBQVdELE1BQU1DO0lBQ2pCaUwsWUFBWWxMLE1BQU1rTDtJQUNsQjZQLEtBQUsvYSxNQUFNK2E7SUFDWGtFLFlBQVlqZixNQUFNaWY7SUFDbEI4TCxhQUFhL3FCLE1BQU0rcUI7SUFDbkJyTCxhQUFhMWYsTUFBTTBmO0VBQ3ZCLE9BQU8sc0JBQUksT0FBTyw0QkFBUztJQUN6QnBKLEtBQUsySSxVQUFVLGVBQWVqZixLQUFLO0lBQ25Da0wsV0FBVzZQLEdBQUc7TUFDWixnQkFBZ0I7TUFDaEIsNkJBQTZCZ1E7SUFDL0IsR0FBRzdmLFNBQVM7RUFDZCxHQUFHd1UsVUFBVSxHQUFHemYsUUFBUTtBQUMxQjtBQUVBLElBQUlrYyxhQUFhO0VBQ2YrUTtFQUNBMkI7RUFDQTlCO0VBQ0FUO0VBQ0FEO0VBQ0E2QztFQUNBUTtFQUNBL0Q7RUFDQTRCO0VBQ0FzRDtFQUNBNUM7RUFDQTFGO0VBQ0FTO0VBQ0FnQjtFQUNBSjtFQUNBRjtFQUNBa0k7RUFDQUg7RUFDQUM7RUFDQXlCO0VBQ0FUO0VBQ0FJO0VBQ0E1SDtFQUNBZ0k7RUFDQTFIO0FBQ0Y7QUFDQSxJQUFJNEgsb0JBQW9CLDRCQUEyQnB6QixPQUFPO0VBQ3hELE9BQU8yZixlQUFlQSxlQUFlLENBQUMsR0FBR3hELFVBQVUsR0FBR25jLE1BQU1tYyxVQUFVO0FBQ3hFOzs7QUN2akRBLDRCQUEyQks7QUFDM0Isc0NBQXFDQTtBQUNyQyxvQkFBc0M5UjtBQUV0QyxJQUFJMm9CLGFBQVksQ0FBQyxxQkFBcUIscUJBQXFCLGdCQUFnQixjQUFjLGNBQWMsWUFBWSxpQkFBaUIsZUFBZSxjQUFjLE9BQU87QUFDeEsseUJBQXlCMWMsT0FBTTtFQUM3QixJQUFJMmMsd0JBQXdCM2MsTUFBSzRjO0lBQzdCQSxvQkFBb0JELDBCQUEwQixTQUFTLEtBQUtBO0lBQzVERSx3QkFBd0I3YyxNQUFLOGM7SUFDN0JBLG9CQUFvQkQsMEJBQTBCLFNBQVMsUUFBUUE7SUFDL0RFLG9CQUFvQi9jLE1BQUtnZDtJQUN6QkEsZUFBZUQsc0JBQXNCLFNBQVMsT0FBT0E7SUFDckRFLGtCQUFrQmpkLE1BQUtpSjtJQUN2QmlVLGtCQUFrQmxkLE1BQUttWTtJQUN2QmdGLGdCQUFnQm5kLE1BQUtvZDtJQUNyQkMscUJBQXFCcmQsTUFBS21KO0lBQzFCbVUsbUJBQW1CdGQsTUFBS3VkO0lBQ3hCQyxrQkFBa0J4ZCxNQUFLeWQ7SUFDdkJDLGFBQWExZCxNQUFLN2M7SUFDbEJ3NkIsa0JBQWtCLDZDQUF5QjNkLE9BQU0wYyxVQUFTO0VBRTlELElBQUlrQixZQUFZLDRCQUFTWCxvQkFBb0IsU0FBWUEsa0JBQWtCTCxpQkFBaUI7SUFDeEZpQixhQUFhLG1DQUFlRCxXQUFXLENBQUM7SUFDeENFLGtCQUFrQkQsV0FBVztJQUM3QkUscUJBQXFCRixXQUFXO0VBRXBDLElBQUlHLGFBQWEsNEJBQVNkLG9CQUFvQixTQUFZQSxrQkFBa0JKLGlCQUFpQjtJQUN6Rm1CLGFBQWEsbUNBQWVELFlBQVksQ0FBQztJQUN6Q0Usa0JBQWtCRCxXQUFXO0lBQzdCRSxxQkFBcUJGLFdBQVc7RUFFcEMsSUFBSUcsYUFBYSw0QkFBU1YsZUFBZSxTQUFZQSxhQUFhVixZQUFZO0lBQzFFcUIsYUFBYSxtQ0FBZUQsWUFBWSxDQUFDO0lBQ3pDRSxhQUFhRCxXQUFXO0lBQ3hCRSxnQkFBZ0JGLFdBQVc7RUFFL0IsSUFBSUcsWUFBVywrQkFBWSxVQUFVQyxRQUFPdlYsWUFBWTtJQUN0RCxJQUFJLE9BQU9pVSxrQkFBa0IsWUFBWTtNQUN2Q0EsY0FBY3NCLFFBQU92VixVQUFVO0lBQ2pDO0lBRUFxVixjQUFjRSxNQUFLO0VBQ3JCLEdBQUcsQ0FBQ3RCLGFBQWEsQ0FBQztFQUNsQixJQUFJaFUsZ0JBQWdCLCtCQUFZLFVBQVVzVixRQUFPdlYsWUFBWTtJQUMzRCxJQUFJd1Y7SUFFSixJQUFJLE9BQU9yQix1QkFBdUIsWUFBWTtNQUM1Q3FCLFdBQVdyQixtQkFBbUJvQixRQUFPdlYsVUFBVTtJQUNqRDtJQUVBNlUsbUJBQW1CVyxhQUFhLFNBQVlBLFdBQVdELE1BQUs7RUFDOUQsR0FBRyxDQUFDcEIsa0JBQWtCLENBQUM7RUFDdkIsSUFBSUksYUFBYSwrQkFBWSxZQUFZO0lBQ3ZDLElBQUksT0FBT0Qsb0JBQW9CLFlBQVk7TUFDekNBLGlCQUFnQjtJQUNsQjtJQUVBVyxtQkFBbUIsSUFBSTtFQUN6QixHQUFHLENBQUNYLGVBQWUsQ0FBQztFQUNwQixJQUFJRCxjQUFjLCtCQUFZLFlBQVk7SUFDeEMsSUFBSSxPQUFPRCxxQkFBcUIsWUFBWTtNQUMxQ0Esa0JBQWlCO0lBQ25CO0lBRUFhLG1CQUFtQixLQUFLO0VBQzFCLEdBQUcsQ0FBQ2IsZ0JBQWdCLENBQUM7RUFDckIsSUFBSXJVLGFBQWFnVSxvQkFBb0IsU0FBWUEsa0JBQWtCYTtFQUNuRSxJQUFJM0YsYUFBYStFLG9CQUFvQixTQUFZQSxrQkFBa0JnQjtFQUNuRSxJQUFJLzZCLFFBQVF1NkIsZUFBZSxTQUFZQSxhQUFhWTtFQUNwRCxPQUFPdFYsZUFBZUEsZUFBZSxDQUFDLEdBQUcyVSxlQUFlLEdBQUcsQ0FBQyxHQUFHO0lBQzdEMVU7SUFDQWtQO0lBQ0FpRixVQUFVb0I7SUFDVnJWO0lBQ0FvVTtJQUNBRTtJQUNBdDZCO0VBQ0YsQ0FBQztBQUNIOzs7QUMvRUEsc0JBQXFCMGlCO0FBRXJCLDZCQUE0QkE7QUFDNUIsMEJBQXlCQTtBQUN6Qix1QkFBc0JBO0FBQ3RCLCtCQUErQkE7QUFDL0IsWUFBdUJBO0FBQ3ZCLG9CQUE2RTlSO0FBQzdFLG9CQUF5QjhSO0FBQ3pCLHlCQUF1QkE7QUFDdkIsc0NBQXFDQTtBQUVyQyw4Q0FBOEM7RUFBRSxPQUFPO0FBQW1PO0FBRTFSLElBQUk4WSxPQUFPLFFBQXdDO0VBQ2pEN3RCLE1BQU07RUFDTjJCLFFBQVE7QUFDVixJQUFJO0VBQ0YzQixNQUFNO0VBQ04yQixRQUFRO0VBQ1I5SixLQUFLO0VBQ0x1TSxVQUFVMHBCO0FBQ1o7QUFFQSxJQUFJQyxXQUFXLG1CQUFrQngxQixPQUFPO0VBQ3RDLE9BQU8sdUJBQUksUUFBUSw2QkFBUztJQUMxQnNXLEtBQUtnZjtFQUNQLEdBQUd0MUIsS0FBSyxDQUFDO0FBQ1g7QUFFQSxJQUFJeTFCLDBCQUEwQjtFQUM1QkMsVUFBVSxrQkFBa0IxMUIsT0FBTztJQUNqQyxJQUFJMjFCLGVBQWUzMUIsTUFBTTIxQjtNQUNyQnZXLFVBQVVwZixNQUFNb2Y7TUFDaEIyTCxhQUFhL3FCLE1BQU0rcUI7TUFDbkI2SyxrQkFBa0I1MUIsTUFBTTQxQjtNQUN4QmxPLFVBQVUxbkIsTUFBTTBuQjtJQUVwQixRQUFRQTtNQUFBLEtBQ0Q7UUFDSCxPQUFPLG9DQUFvQ3hlLE9BQU82aEIsYUFBYSxLQUFLLHdEQUF3RCxpQ0FBaUMsRUFBRTdoQixPQUFPMHNCLGtCQUFrQix1REFBdUQsSUFBSSxHQUFHO01BQUEsS0FFblA7UUFDSCxPQUFPLEdBQUcxc0IsT0FBT2xKLE1BQU0saUJBQWlCLFVBQVUsY0FBYyxFQUFFa0osT0FBT3lzQixlQUFlLHlCQUF5QixJQUFJLGlDQUFpQyxFQUFFenNCLE9BQU9rVyxVQUFVLHlDQUF5QyxFQUFFO01BQUEsS0FFak47UUFDSCxPQUFPO01BQUE7UUFHUCxPQUFPO0lBQUE7RUFFYjtFQUNBMlUsVUFBVSxrQkFBa0IvekIsT0FBTztJQUNqQyxJQUFJNjFCLFNBQVM3MUIsTUFBTTYxQjtNQUNmQyxlQUFlOTFCLE1BQU13VztNQUNyQkEsUUFBUXNmLGlCQUFpQixTQUFTLEtBQUtBO01BQ3ZDQyxTQUFTLzFCLE1BQU0rMUI7TUFDZmhMLGFBQWEvcUIsTUFBTStxQjtJQUV2QixRQUFROEs7TUFBQSxLQUNEO01BQUEsS0FDQTtNQUFBLEtBQ0E7UUFDSCxPQUFPLFVBQVUzc0IsT0FBT3NOLE9BQU8sZUFBZTtNQUFBLEtBRTNDO1FBQ0gsT0FBTztNQUFBLEtBRUo7UUFDSCxPQUFPLFNBQVN0TixPQUFPNnNCLE9BQU8zN0IsU0FBUyxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU4TyxPQUFPNnNCLE9BQU94MkIsS0FBSyxHQUFHLEdBQUcsYUFBYTtNQUFBLEtBRTdGO1FBQ0gsT0FBT3dyQixhQUFhLFVBQVU3aEIsT0FBT3NOLE9BQU8sc0NBQXNDLElBQUksVUFBVXROLE9BQU9zTixPQUFPLGFBQWE7TUFBQTtRQUczSCxPQUFPO0lBQUE7RUFFYjtFQUNBd2YsU0FBUyxpQkFBaUJoMkIsT0FBTztJQUMvQixJQUFJMG5CLFVBQVUxbkIsTUFBTTBuQjtNQUNoQnVPLFVBQVVqMkIsTUFBTWkyQjtNQUNoQjM3QixXQUFVMEYsTUFBTXNmO01BQ2hCNFcsZ0JBQWdCbDJCLE1BQU13VztNQUN0QkEsUUFBUTBmLGtCQUFrQixTQUFTLEtBQUtBO01BQ3hDQyxjQUFjbjJCLE1BQU1tMkI7TUFDcEJwTCxhQUFhL3FCLE1BQU0rcUI7TUFDbkJzSCxhQUFhcnlCLE1BQU1xeUI7SUFFdkIsSUFBSStELGdCQUFnQix3QkFBdUJ4WCxLQUFLNEUsTUFBTTtNQUNwRCxPQUFPNUUsT0FBT0EsSUFBSXhrQixTQUFTLEdBQUc4TyxPQUFPMFYsSUFBSXhmLFFBQVFva0IsSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFdGEsT0FBTzBWLElBQUl4a0IsTUFBTSxJQUFJO0lBQzNGO0lBRUEsSUFBSXN0QixZQUFZLFdBQVd5TyxhQUFhO01BQ3RDLE9BQU8sU0FBU2p0QixPQUFPc04sT0FBTyxZQUFZLEVBQUV0TixPQUFPa3RCLGNBQWNELGFBQWFGLE9BQU8sR0FBRyxHQUFHO0lBQzdGO0lBRUEsSUFBSXZPLFlBQVksUUFBUTtNQUN0QixJQUFJc0osV0FBV2pHLGFBQWEsY0FBYztNQUMxQyxJQUFJc0wsU0FBUyxHQUFHbnRCLE9BQU9tcEIsYUFBYSxhQUFhLFNBQVMsRUFBRW5wQixPQUFPOG5CLFFBQVE7TUFDM0UsT0FBTyxVQUFVOW5CLE9BQU9zTixPQUFPLEdBQUcsRUFBRXROLE9BQU9tdEIsUUFBUSxJQUFJLEVBQUVudEIsT0FBT2t0QixjQUFjOTdCLFVBQVMyN0IsT0FBTyxHQUFHLEdBQUc7SUFDdEc7SUFFQSxPQUFPO0VBQ1Q7RUFDQUssVUFBVSxrQkFBa0J0MkIsT0FBTztJQUNqQyxJQUFJNGYsYUFBYTVmLE1BQU00ZjtNQUNuQjJXLGlCQUFpQnYyQixNQUFNdTJCO0lBQzNCLE9BQU8sR0FBR3J0QixPQUFPcXRCLGNBQWMsRUFBRXJ0QixPQUFPMFcsYUFBYSxzQkFBc0JBLGFBQWEsSUFBSSxHQUFHO0VBQ2pHO0FBQ0Y7QUFFQSxJQUFJNFcsYUFBYSxxQkFBb0J4MkIsT0FBTztFQUMxQyxJQUFJeTJCLGdCQUFnQnoyQixNQUFNeTJCO0lBQ3RCQyxnQkFBZ0IxMkIsTUFBTTAyQjtJQUN0QkMsZUFBZTMyQixNQUFNMjJCO0lBQ3JCQyxtQkFBbUI1MkIsTUFBTTQyQjtJQUN6QnBLLFlBQVl4c0IsTUFBTXdzQjtJQUNsQjJKLGNBQWNuMkIsTUFBTW0yQjtJQUNwQjNXLGNBQWN4ZixNQUFNd2Y7SUFDcEJxWCxLQUFLNzJCLE1BQU02MkI7RUFDZixJQUFJQyxtQkFBbUJ0WCxZQUFZc1g7SUFDL0JDLGtCQUFpQnZYLFlBQVl3WDtJQUM3QnBYLGFBQWFKLFlBQVlJO0lBQ3pCUixVQUFVSSxZQUFZSjtJQUN0QjZYLG9CQUFtQnpYLFlBQVkwWDtJQUMvQnZCLGVBQWVuVyxZQUFZbVc7SUFDM0I3RyxhQUFhdFAsWUFBWXNQO0lBQ3pCeDBCLFdBQVVrbEIsWUFBWUY7SUFDdEI2WCxzQkFBcUIzWCxZQUFZNFg7SUFDakN4QixrQkFBa0JwVyxZQUFZb1c7RUFDbEMsSUFBSXlCLFlBQVk3WCxZQUFZO0VBQzVCLElBQUk4WCxXQUFXOVgsWUFBWTtFQUUzQixJQUFJK1gsV0FBVywyQkFBUSxZQUFZO0lBQ2pDLE9BQU81WCxlQUFlQSxlQUFlLENBQUMsR0FBRzhWLHVCQUF1QixHQUFHcUIsb0JBQW9CLENBQUMsQ0FBQztFQUMzRixHQUFHLENBQUNBLGdCQUFnQixDQUFDO0VBRXJCLElBQUlVLGVBQWUsMkJBQVEsWUFBWTtJQUNyQyxJQUFJQyxVQUFVO0lBRWQsSUFBSWhCLGlCQUFpQmMsU0FBU3hELFVBQVU7TUFDdEMsSUFBSXBCLFNBQVM4RCxjQUFjOUQ7UUFDdkIrRSxrQkFBa0JqQixjQUFjblg7UUFDaENxWSxlQUFlbEIsY0FBY2tCO1FBQzdCQyxnQkFBZ0JuQixjQUFjbUI7UUFDOUI5OUIsUUFBUTI4QixjQUFjMzhCO01BRTFCLElBQUkrOUIsV0FBVyxtQkFBa0JuVyxLQUFLO1FBQ3BDLE9BQU8sQ0FBQzFaLE1BQU0ySixRQUFRK1AsR0FBRyxJQUFJQSxNQUFNO01BQ3JDO01BR0EsSUFBSW9XLFdBQVdILGdCQUFnQmhGLFVBQVVrRixTQUFTLzlCLEtBQUs7TUFDdkQsSUFBSTBjLFFBQVFzaEIsV0FBV2YsZ0JBQWVlLFFBQVEsSUFBSTtNQUVsRCxJQUFJQyxnQkFBZ0JMLG1CQUFtQkUsaUJBQWlCO01BQ3hELElBQUk3QixTQUFTZ0MsZ0JBQWdCQSxjQUFjejRCLElBQUl5M0IsZUFBYyxJQUFJLEVBQUM7TUFFbEUsSUFBSWlCLGdCQUFnQnJZLGVBQWU7UUFHakNvTCxZQUFZK00sWUFBWWIsa0JBQWlCYSxVQUFVM0IsV0FBVztRQUM5RDNmO1FBQ0F1ZjtNQUNGLEdBQUdVLGFBQWE7TUFFaEJnQixVQUFVRixTQUFTeEQsU0FBU2lFLGFBQWE7SUFDM0M7SUFFQSxPQUFPUDtFQUNULEdBQUcsQ0FBQ2hCLGVBQWVjLFVBQVVOLG1CQUFrQmQsYUFBYVksZUFBYyxDQUFDO0VBQzNFLElBQUlrQixjQUFjLDJCQUFRLFlBQVk7SUFDcEMsSUFBSUMsV0FBVztJQUNmLElBQUlqQyxVQUFVUyxpQkFBaUJDO0lBQy9CLElBQUl0RSxhQUFhLENBQUMsRUFBRXFFLGlCQUFpQlAsZUFBZUEsWUFBWW5TLFNBQVMwUyxhQUFhO0lBRXRGLElBQUlULFdBQVdzQixTQUFTdkIsU0FBUztNQUMvQixJQUFJbUMsZUFBZTtRQUNqQmxDO1FBQ0F6ZixPQUFPdWdCLGdCQUFlZCxPQUFPO1FBQzdCbEwsWUFBWWtNLGtCQUFpQmhCLFNBQVNFLFdBQVc7UUFDakQ5RDtRQUNBL1MsU0FBU2hsQjtRQUNUb3RCLFNBQVN1TyxZQUFZUyxnQkFBZ0IsU0FBUztRQUM5Q1A7TUFDRjtNQUNBK0IsV0FBV1gsU0FBU3ZCLFFBQVFtQyxZQUFZO0lBQzFDO0lBRUEsT0FBT0Q7RUFDVCxHQUFHLENBQUN4QixlQUFlQyxjQUFjSSxpQkFBZ0JFLG1CQUFrQk0sVUFBVWo5QixVQUFTNjdCLFdBQVcsQ0FBQztFQUNsRyxJQUFJaUMsY0FBYywyQkFBUSxZQUFZO0lBQ3BDLElBQUlDLGFBQWE7SUFFakIsSUFBSXZKLGNBQWN4MEIsU0FBUUYsVUFBVW05QixTQUFTakIsVUFBVTtNQUNyRCxJQUFJQyxpQkFBaUJZLG9CQUFtQjtRQUN0Q21CLE9BQU8xQixpQkFBaUJ4OEI7TUFDMUIsQ0FBQztNQUNEaStCLGFBQWFkLFNBQVNqQixTQUFTO1FBQzdCMVc7UUFDQTJXO01BQ0YsQ0FBQztJQUNIO0lBRUEsT0FBTzhCO0VBQ1QsR0FBRyxDQUFDekIsa0JBQWtCaFgsWUFBWWtQLFlBQVl5SSxVQUFVajlCLFVBQVM2OEIsbUJBQWtCLENBQUM7RUFDcEYsSUFBSW9CLGVBQWUsMkJBQVEsWUFBWTtJQUNyQyxJQUFJQyxjQUFjO0lBRWxCLElBQUlqQixTQUFTN0IsVUFBVTtNQUNyQixJQUFJaE8sVUFBVWlQLGVBQWUsVUFBVTdILGFBQWEsU0FBUztNQUM3RDBKLGNBQWNqQixTQUFTN0IsU0FBUztRQUM5QixjQUFjMkI7UUFDZDNQO1FBQ0FxRCxZQUFZMkwsaUJBQWlCTyxrQkFBaUJQLGVBQWVQLFdBQVc7UUFDeEUvVztRQUNBdVc7UUFDQUM7TUFDRixDQUFDO0lBQ0g7SUFFQSxPQUFPNEM7RUFDVCxHQUFHLENBQUNuQixXQUFXWCxlQUFlQyxjQUFjdlgsU0FBUzZYLG1CQUFrQnRCLGNBQWM3RyxZQUFZeUksVUFBVXBCLGFBQWFQLGVBQWUsQ0FBQztFQUN4SSxJQUFJNkMsY0FBYyxHQUFHdnZCLE9BQU8rdUIsYUFBYSxHQUFHLEVBQUUvdUIsT0FBT2t2QixhQUFhLEdBQUcsRUFBRWx2QixPQUFPcXZCLFlBQVk7RUFDMUYsSUFBSUcsbUJBQW1CLHVCQUFJQyx3QkFBVSxNQUFNLHVCQUFJLFFBQVE7SUFDckQ5QixJQUFJO0VBQ04sR0FBR1csWUFBWSxHQUFHLHVCQUFJLFFBQVE7SUFDNUJYLElBQUk7RUFDTixHQUFHNEIsV0FBVyxDQUFDO0VBQ2YsSUFBSUcsaUJBQWtCLG1CQUFrQixRQUFRbkMsa0JBQWtCLFNBQVMsU0FBU0EsY0FBY1osWUFBWTtFQUM5RyxPQUFPLHVCQUFJOEMsd0JBQVUsTUFBTSx1QkFBSW5ELFVBQVU7SUFDdkNxQjtFQUNGLEdBQUcrQixrQkFBa0JGLGdCQUFnQixHQUFHLHVCQUFJbEQsVUFBVTtJQUNwRCxhQUFhOEI7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CLEdBQUc5SyxhQUFhLENBQUNvTSxrQkFBa0JGLGdCQUFnQixDQUFDO0FBQ3REO0FBRUEsSUFBSUcsYUFBYSxDQUFDO0VBQ2hCQyxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxNQUFNO0VBQ05DLFNBQVM7QUFDWCxHQUFHO0VBQ0RELE1BQU07RUFDTkMsU0FBUztBQUNYLEdBQUc7RUFDREQsTUFBTTtFQUNOQyxTQUFTO0FBQ1gsR0FBRztFQUNERCxN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cnZDLE1BQU10RixPQUFPLEtBQUtzRixNQUFNdXZDLFFBQVE7TUFDaEYsT0FBb0IsZUFBTUoscUJBQWNLLDZCQUFlO1FBQ3JEMTFDLE9BQU93MUM7TUFDVCxHQUFHLEtBQUt0dkMsTUFBTUMsUUFBUTtJQUN4QjtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU9tdkM7QUFDVCxFQUFFSyx1QkFBUztBQUVYLElBQU9DLDJCQUFRVDs7O0FKL0RmLElBQU9VLDZCQUFRRCIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBVc2luZyBOb2RlIGluc3RlYWQgb2YgSFRNTEVsZW1lbnQgc2luY2UgY29udGFpbmVyIG1heSBiZSBhIFNoYWRvd1Jvb3RcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2luc2VydFRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBiZWZvcmU7XG5cbiAgICAgIGlmIChfdGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoX3RoaXMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5pbnNlcnRpb25Qb2ludC5uZXh0U2libGluZztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5wcmVwZW5kKSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuYmVmb3JlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSBfdGhpcy50YWdzW190aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGFnLCBiZWZvcmUpO1xuXG4gICAgICBfdGhpcy50YWdzLnB1c2godGFnKTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGVuZCA9IG9wdGlvbnMucHJlcGVuZDtcbiAgICB0aGlzLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmh5ZHJhdGUgPSBmdW5jdGlvbiBoeWRyYXRlKG5vZGVzKSB7XG4gICAgbm9kZXMuZm9yRWFjaCh0aGlzLl9pbnNlcnRUYWcpO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHRoaXMuX2luc2VydFRhZyhjcmVhdGVTdHlsZUVsZW1lbnQodGhpcykpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0ICYmIHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1O1xuXG4gICAgICBpZiAoaXNJbXBvcnRSdWxlICYmIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlKSB7XG4gICAgICAgIC8vIHRoaXMgd291bGQgb25seSBjYXVzZSBwcm9ibGVtIGluIHNwZWVkeSBtb2RlXG4gICAgICAgIC8vIGJ1dCB3ZSBkb24ndCB3YW50IGVuYWJsaW5nIHNwZWVkeSB0byBhZmZlY3QgdGhlIG9ic2VydmFibGUgYmVoYXZpb3JcbiAgICAgICAgLy8gc28gd2UgcmVwb3J0IHRoaXMgZXJyb3IgYXQgYWxsIHRpbWVzXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgYXR0ZW1wdGluZyB0byBpbnNlcnQgdGhlIGZvbGxvd2luZyBydWxlOlxcblwiICsgcnVsZSArICdcXG5cXG5gQGltcG9ydGAgcnVsZXMgbXVzdCBiZSBiZWZvcmUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzIGluIGEgc3R5bGVzaGVldCBidXQgb3RoZXIgcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCBgQGltcG9ydGAgcnVsZXMgYXJlIGJlZm9yZSBhbGwgb3RoZXIgcnVsZXMuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hbHJlYWR5SW5zZXJ0ZWRPcmRlckluc2Vuc2l0aXZlUnVsZSA9IHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlIHx8ICFpc0ltcG9ydFJ1bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhLzooLW1vei1wbGFjZWhvbGRlcnwtbW96LWZvY3VzLWlubmVyfC1tb3otZm9jdXNyaW5nfC1tcy1pbnB1dC1wbGFjZWhvbGRlcnwtbW96LXJlYWQtd3JpdGV8LW1vei1yZWFkLW9ubHl8LW1zLWNsZWFyKXsvLnRlc3QocnVsZSkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlICYmIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzLlN0eWxlU2hlZXQgPSBTdHlsZVNoZWV0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi1zaGVldC5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi1zaGVldC5janMuZGV2LmpzXCIpO1xufVxuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuIiwiLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFic1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgdmFyIGZyb20gPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCB2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaCAodmFsdWUsIGxlbmd0aCkge1xuXHRyZXR1cm4gKCgoKCgoKGxlbmd0aCA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMCkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAxKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDIpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMylcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCJpbXBvcnQge0NPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2FicywgdHJpbSwgZnJvbSwgc2l6ZW9mLCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCByZXBsYWNlLCBpbmRleG9mfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge25vZGUsIGNoYXIsIHByZXYsIG5leHQsIHBlZWssIGNhcmV0LCBhbGxvYywgZGVhbGxvYywgZGVsaW1pdCwgd2hpdGVzcGFjZSwgZXNjYXBpbmcsIGlkZW50aWZpZXIsIGNvbW1lbnRlcn0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHBhcnNlKCcnLCBudWxsLCBudWxsLCBudWxsLCBbJyddLCB2YWx1ZSA9IGFsbG9jKHZhbHVlKSwgMCwgWzBdLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc2V0c1xuICogQHBhcmFtIHtudW1iZXJbXX0gcHNldWRvXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlY2xhcmF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHZhbHVlLCByb290LCBwYXJlbnQsIHJ1bGUsIHJ1bGVzLCBydWxlc2V0cywgcHNldWRvLCBwb2ludHMsIGRlY2xhcmF0aW9ucykge1xuXHR2YXIgaW5kZXggPSAwXG5cdHZhciBvZmZzZXQgPSAwXG5cdHZhciBsZW5ndGggPSBwc2V1ZG9cblx0dmFyIGF0cnVsZSA9IDBcblx0dmFyIHByb3BlcnR5ID0gMFxuXHR2YXIgcHJldmlvdXMgPSAwXG5cdHZhciB2YXJpYWJsZSA9IDFcblx0dmFyIHNjYW5uaW5nID0gMVxuXHR2YXIgYW1wZXJzYW5kID0gMVxuXHR2YXIgY2hhcmFjdGVyID0gMFxuXHR2YXIgdHlwZSA9ICcnXG5cdHZhciBwcm9wcyA9IHJ1bGVzXG5cdHZhciBjaGlsZHJlbiA9IHJ1bGVzZXRzXG5cdHZhciByZWZlcmVuY2UgPSBydWxlXG5cdHZhciBjaGFyYWN0ZXJzID0gdHlwZVxuXG5cdHdoaWxlIChzY2FubmluZylcblx0XHRzd2l0Y2ggKHByZXZpb3VzID0gY2hhcmFjdGVyLCBjaGFyYWN0ZXIgPSBuZXh0KCkpIHtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmIChwcmV2aW91cyAhPSAxMDggJiYgY2hhcmFjdGVycy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpID09IDU4KSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4b2YoY2hhcmFjdGVycyArPSByZXBsYWNlKGRlbGltaXQoY2hhcmFjdGVyKSwgJyYnLCAnJlxcZicpLCAnJlxcZicpICE9IC0xKVxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gLTFcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHQvLyBcIiAnIFtcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgOTE6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXHQgXFxuIFxcciBcXHNcblx0XHRcdGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSB3aGl0ZXNwYWNlKHByZXZpb3VzKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZXNjYXBpbmcoY2FyZXQoKSAtIDEsIDcpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHQvLyAvXG5cdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRzd2l0Y2ggKHBlZWsoKSkge1xuXHRcdFx0XHRcdGNhc2UgNDI6IGNhc2UgNDc6XG5cdFx0XHRcdFx0XHRhcHBlbmQoY29tbWVudChjb21tZW50ZXIobmV4dCgpLCBjYXJldCgpKSwgcm9vdCwgcGFyZW50KSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSAnLydcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8ge1xuXHRcdFx0Y2FzZSAxMjMgKiB2YXJpYWJsZTpcblx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gc3RybGVuKGNoYXJhY3RlcnMpICogYW1wZXJzYW5kXG5cdFx0XHQvLyB9IDsgXFwwXG5cdFx0XHRjYXNlIDEyNSAqIHZhcmlhYmxlOiBjYXNlIDU5OiBjYXNlIDA6XG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHRcdFx0Ly8gXFwwIH1cblx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgMTI1OiBzY2FubmluZyA9IDBcblx0XHRcdFx0XHQvLyA7XG5cdFx0XHRcdFx0Y2FzZSA1OSArIG9mZnNldDpcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA+IDAgJiYgKHN0cmxlbihjaGFyYWN0ZXJzKSAtIGxlbmd0aCkpXG5cdFx0XHRcdFx0XHRcdGFwcGVuZChwcm9wZXJ0eSA+IDMyID8gZGVjbGFyYXRpb24oY2hhcmFjdGVycyArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAxKSA6IGRlY2xhcmF0aW9uKHJlcGxhY2UoY2hhcmFjdGVycywgJyAnLCAnJykgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMiksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQCA7XG5cdFx0XHRcdFx0Y2FzZSA1OTogY2hhcmFjdGVycyArPSAnOydcblx0XHRcdFx0XHQvLyB7IHJ1bGUvYXQtcnVsZVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhcHBlbmQocmVmZXJlbmNlID0gcnVsZXNldChjaGFyYWN0ZXJzLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzID0gW10sIGNoaWxkcmVuID0gW10sIGxlbmd0aCksIHJ1bGVzZXRzKVxuXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09PSAxMjMpXG5cdFx0XHRcdFx0XHRcdGlmIChvZmZzZXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcm9vdCwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHByb3BzLCBydWxlc2V0cywgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChhdHJ1bGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGQgbSBzXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDEwMDogY2FzZSAxMDk6IGNhc2UgMTE1OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZSh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJ1bGUgJiYgYXBwZW5kKHJ1bGVzZXQodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCAwLCAwLCBydWxlcywgcG9pbnRzLCB0eXBlLCBydWxlcywgcHJvcHMgPSBbXSwgbGVuZ3RoKSwgY2hpbGRyZW4pLCBydWxlcywgY2hpbGRyZW4sIGxlbmd0aCwgcG9pbnRzLCBydWxlID8gcHJvcHMgOiBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIFsnJ10sIGNoaWxkcmVuLCAwLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGluZGV4ID0gb2Zmc2V0ID0gcHJvcGVydHkgPSAwLCB2YXJpYWJsZSA9IGFtcGVyc2FuZCA9IDEsIHR5cGUgPSBjaGFyYWN0ZXJzID0gJycsIGxlbmd0aCA9IHBzZXVkb1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gOlxuXHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0bGVuZ3RoID0gMSArIHN0cmxlbihjaGFyYWN0ZXJzKSwgcHJvcGVydHkgPSBwcmV2aW91c1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHZhcmlhYmxlIDwgMSlcblx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09IDEyMylcblx0XHRcdFx0XHRcdC0tdmFyaWFibGVcblx0XHRcdFx0XHRlbHNlIGlmIChjaGFyYWN0ZXIgPT0gMTI1ICYmIHZhcmlhYmxlKysgPT0gMCAmJiBwcmV2KCkgPT0gMTI1KVxuXHRcdFx0XHRcdFx0Y29udGludWVcblxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3RlcnMgKz0gZnJvbShjaGFyYWN0ZXIpLCBjaGFyYWN0ZXIgKiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdC8vICZcblx0XHRcdFx0XHRjYXNlIDM4OlxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gb2Zmc2V0ID4gMCA/IDEgOiAoY2hhcmFjdGVycyArPSAnXFxmJywgLTEpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vICxcblx0XHRcdFx0XHRjYXNlIDQ0OlxuXHRcdFx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gKHN0cmxlbihjaGFyYWN0ZXJzKSAtIDEpICogYW1wZXJzYW5kLCBhbXBlcnNhbmQgPSAxXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEBcblx0XHRcdFx0XHRjYXNlIDY0OlxuXHRcdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdFx0aWYgKHBlZWsoKSA9PT0gNDUpXG5cdFx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChuZXh0KCkpXG5cblx0XHRcdFx0XHRcdGF0cnVsZSA9IHBlZWsoKSwgb2Zmc2V0ID0gbGVuZ3RoID0gc3RybGVuKHR5cGUgPSBjaGFyYWN0ZXJzICs9IGlkZW50aWZpZXIoY2FyZXQoKSkpLCBjaGFyYWN0ZXIrK1xuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0Y2FzZSA0NTpcblx0XHRcdFx0XHRcdGlmIChwcmV2aW91cyA9PT0gNDUgJiYgc3RybGVuKGNoYXJhY3RlcnMpID09IDIpXG5cdFx0XHRcdFx0XHRcdHZhcmlhYmxlID0gMFxuXHRcdFx0XHR9XG5cdFx0fVxuXG5cdHJldHVybiBydWxlc2V0c1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzZXQgKHZhbHVlLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHZhciBwb3N0ID0gb2Zmc2V0IC0gMVxuXHR2YXIgcnVsZSA9IG9mZnNldCA9PT0gMCA/IHJ1bGVzIDogWycnXVxuXHR2YXIgc2l6ZSA9IHNpemVvZihydWxlKVxuXG5cdGZvciAodmFyIGkgPSAwLCBqID0gMCwgayA9IDA7IGkgPCBpbmRleDsgKytpKVxuXHRcdGZvciAodmFyIHggPSAwLCB5ID0gc3Vic3RyKHZhbHVlLCBwb3N0ICsgMSwgcG9zdCA9IGFicyhqID0gcG9pbnRzW2ldKSksIHogPSB2YWx1ZTsgeCA8IHNpemU7ICsreClcblx0XHRcdGlmICh6ID0gdHJpbShqID4gMCA/IHJ1bGVbeF0gKyAnICcgKyB5IDogcmVwbGFjZSh5LCAvJlxcZi9nLCBydWxlW3hdKSkpXG5cdFx0XHRcdHByb3BzW2srK10gPSB6XG5cblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgb2Zmc2V0ID09PSAwID8gUlVMRVNFVCA6IHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ICh2YWx1ZSwgcm9vdCwgcGFyZW50KSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIENPTU1FTlQsIGZyb20oY2hhcigpKSwgc3Vic3RyKHZhbHVlLCAyLCAtMiksIDApXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2xhcmF0aW9uICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBsZW5ndGgpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgREVDTEFSQVRJT04sIHN1YnN0cih2YWx1ZSwgMCwgbGVuZ3RoKSwgc3Vic3RyKHZhbHVlLCBsZW5ndGggKyAxLCAtMSksIGxlbmd0aClcbn1cbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lUfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge2hhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCByZXBsYWNlfSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXggKHZhbHVlLCBsZW5ndGgpIHtcblx0c3dpdGNoIChoYXNoKHZhbHVlLCBsZW5ndGgpKSB7XG5cdFx0Ly8gY29sb3ItYWRqdXN0XG5cdFx0Y2FzZSA1MTAzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArICdwcmludC0nICsgdmFsdWUgKyB2YWx1ZVxuXHRcdC8vIGFuaW1hdGlvbiwgYW5pbWF0aW9uLShkZWxheXxkaXJlY3Rpb258ZHVyYXRpb258ZmlsbC1tb2RlfGl0ZXJhdGlvbi1jb3VudHxuYW1lfHBsYXktc3RhdGV8dGltaW5nLWZ1bmN0aW9uKVxuXHRcdGNhc2UgNTczNzogY2FzZSA0MjAxOiBjYXNlIDMxNzc6IGNhc2UgMzQzMzogY2FzZSAxNjQxOiBjYXNlIDQ0NTc6IGNhc2UgMjkyMTpcblx0XHQvLyB0ZXh0LWRlY29yYXRpb24sIGZpbHRlciwgY2xpcC1wYXRoLCBiYWNrZmFjZS12aXNpYmlsaXR5LCBjb2x1bW4sIGJveC1kZWNvcmF0aW9uLWJyZWFrXG5cdFx0Y2FzZSA1NTcyOiBjYXNlIDYzNTY6IGNhc2UgNTg0NDogY2FzZSAzMTkxOiBjYXNlIDY2NDU6IGNhc2UgMzAwNTpcblx0XHQvLyBtYXNrLCBtYXNrLWltYWdlLCBtYXNrLShtb2RlfGNsaXB8c2l6ZSksIG1hc2stKHJlcGVhdHxvcmlnaW4pLCBtYXNrLXBvc2l0aW9uLCBtYXNrLWNvbXBvc2l0ZSxcblx0XHRjYXNlIDYzOTE6IGNhc2UgNTg3OTogY2FzZSA1NjIzOiBjYXNlIDYxMzU6IGNhc2UgNDU5OTogY2FzZSA0ODU1OlxuXHRcdC8vIGJhY2tncm91bmQtY2xpcCwgY29sdW1ucywgY29sdW1uLShjb3VudHxmaWxsfGdhcHxydWxlfHJ1bGUtY29sb3J8cnVsZS1zdHlsZXxydWxlLXdpZHRofHNwYW58d2lkdGgpXG5cdFx0Y2FzZSA0MjE1OiBjYXNlIDYzODk6IGNhc2UgNTEwOTogY2FzZSA1MzY1OiBjYXNlIDU2MjE6IGNhc2UgMzgyOTpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYXBwZWFyYW5jZSwgdXNlci1zZWxlY3QsIHRyYW5zZm9ybSwgaHlwaGVucywgdGV4dC1zaXplLWFkanVzdFxuXHRcdGNhc2UgNTM0OTogY2FzZSA0MjQ2OiBjYXNlIDQ4MTA6IGNhc2UgNjk2ODogY2FzZSAyNzU2OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTU9aICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWVcblx0XHQvLyBmbGV4LCBmbGV4LWRpcmVjdGlvblxuXHRcdGNhc2UgNjgyODogY2FzZSA0MjY4OlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gb3JkZXJcblx0XHRjYXNlIDYxNjU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LScgKyB2YWx1ZSArIHZhbHVlXG5cdFx0Ly8gYWxpZ24taXRlbXNcblx0XHRjYXNlIDUxODc6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyByZXBsYWNlKHZhbHVlLCAvKFxcdyspLisoOlteXSspLywgV0VCS0lUICsgJ2JveC0kMSQyJyArIE1TICsgJ2ZsZXgtJDEkMicpICsgdmFsdWVcblx0XHQvLyBhbGlnbi1zZWxmXG5cdFx0Y2FzZSA1NDQzOlxuXHRcdFx0cmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1pdGVtLScgKyByZXBsYWNlKHZhbHVlLCAvZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGFsaWduLWNvbnRlbnRcblx0XHRjYXNlIDQ2NzU6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWxpbmUtcGFjaycgKyByZXBsYWNlKHZhbHVlLCAvYWxpZ24tY29udGVudHxmbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1zaHJpbmtcblx0XHRjYXNlIDU1NDg6XG5cdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gZmxleC1iYXNpc1xuXHRcdGNhc2UgNTI5Mjpcblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyB2YWx1ZVxuXHRcdC8vIGZsZXgtZ3Jvd1xuXHRcdGNhc2UgNjA2MDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyAnYm94LScgKyByZXBsYWNlKHZhbHVlLCAnLWdyb3cnLCAnJykgKyBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ2dyb3cnLCAncG9zaXRpdmUnKSArIHZhbHVlXG5cdFx0Ly8gdHJhbnNpdGlvblxuXHRcdGNhc2UgNDU1NDpcblx0XHRcdHJldHVybiBXRUJLSVQgKyByZXBsYWNlKHZhbHVlLCAvKFteLV0pKHRyYW5zZm9ybSkvZywgJyQxJyArIFdFQktJVCArICckMicpICsgdmFsdWVcblx0XHQvLyBjdXJzb3Jcblx0XHRjYXNlIDYxODc6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHJlcGxhY2UodmFsdWUsIC8oem9vbS18Z3JhYikvLCBXRUJLSVQgKyAnJDEnKSwgLyhpbWFnZS1zZXQpLywgV0VCS0lUICsgJyQxJyksIHZhbHVlLCAnJykgKyB2YWx1ZVxuXHRcdC8vIGJhY2tncm91bmQsIGJhY2tncm91bmQtaW1hZ2Vcblx0XHRjYXNlIDU0OTU6IGNhc2UgMzk1OTpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKGltYWdlLXNldFxcKFteXSopLywgV0VCS0lUICsgJyQxJyArICckYCQxJylcblx0XHQvLyBqdXN0aWZ5LWNvbnRlbnRcblx0XHRjYXNlIDQ5Njg6XG5cdFx0XHRyZXR1cm4gcmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKC4rOikoZmxleC0pPyguKikvLCBXRUJLSVQgKyAnYm94LXBhY2s6JDMnICsgTVMgKyAnZmxleC1wYWNrOiQzJyksIC9zListYlteO10rLywgJ2p1c3RpZnknKSArIFdFQktJVCArIHZhbHVlICsgdmFsdWVcblx0XHQvLyAobWFyZ2lufHBhZGRpbmcpLWlubGluZS0oc3RhcnR8ZW5kKVxuXHRcdGNhc2UgNDA5NTogY2FzZSAzNTgzOiBjYXNlIDQwNjg6IGNhc2UgMjUzMjpcblx0XHRcdHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rKS1pbmxpbmUoLispLywgV0VCS0lUICsgJyQxJDInKSArIHZhbHVlXG5cdFx0Ly8gKG1pbnxtYXgpPyh3aWR0aHxoZWlnaHR8aW5saW5lLXNpemV8YmxvY2stc2l6ZSlcblx0XHRjYXNlIDgxMTY6IGNhc2UgNzA1OTogY2FzZSA1NzUzOiBjYXNlIDU1MzU6XG5cdFx0Y2FzZSA1NDQ1OiBjYXNlIDU3MDE6IGNhc2UgNDkzMzogY2FzZSA0Njc3OlxuXHRcdGNhc2UgNTUzMzogY2FzZSA1Nzg5OiBjYXNlIDUwMjE6IGNhc2UgNDc2NTpcblx0XHRcdC8vIHN0cmV0Y2gsIG1heC1jb250ZW50LCBtaW4tY29udGVudCwgZmlsbC1hdmFpbGFibGVcblx0XHRcdGlmIChzdHJsZW4odmFsdWUpIC0gMSAtIGxlbmd0aCA+IDYpXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSkge1xuXHRcdFx0XHRcdC8vIChtKWF4LWNvbnRlbnQsIChtKWluLWNvbnRlbnRcblx0XHRcdFx0XHRjYXNlIDEwOTpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDQpICE9PSA0NSlcblx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAoZilpbGwtYXZhaWxhYmxlLCAoZilpdC1jb250ZW50XG5cdFx0XHRcdFx0Y2FzZSAxMDI6XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKzopKC4rKS0oW15dKykvLCAnJDEnICsgV0VCS0lUICsgJyQyLSQzJyArICckMScgKyBNT1ogKyAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAzKSA9PSAxMDggPyAnJDMnIDogJyQyLSQzJykpICsgdmFsdWVcblx0XHRcdFx0XHQvLyAocyl0cmV0Y2hcblx0XHRcdFx0XHRjYXNlIDExNTpcblx0XHRcdFx0XHRcdHJldHVybiB+aW5kZXhvZih2YWx1ZSwgJ3N0cmV0Y2gnKSA/IHByZWZpeChyZXBsYWNlKHZhbHVlLCAnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBsZW5ndGgpICsgdmFsdWUgOiB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHBvc2l0aW9uOiBzdGlja3lcblx0XHRjYXNlIDQ5NDk6XG5cdFx0XHQvLyAocyl0aWNreT9cblx0XHRcdGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpICE9PSAxMTUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0Ly8gZGlzcGxheTogKGZsZXh8aW5saW5lLWZsZXgpXG5cdFx0Y2FzZSA2NDQ0OlxuXHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIHN0cmxlbih2YWx1ZSkgLSAzIC0gKH5pbmRleG9mKHZhbHVlLCAnIWltcG9ydGFudCcpICYmIDEwKSkpIHtcblx0XHRcdFx0Ly8gc3RpYyhrKXlcblx0XHRcdFx0Y2FzZSAxMDc6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsICc6JywgJzonICsgV0VCS0lUKSArIHZhbHVlXG5cdFx0XHRcdC8vIChpbmxpbmUtKT9mbChlKXhcblx0XHRcdFx0Y2FzZSAxMDE6XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KShbXjshXSspKDt8IS4rKT8vLCAnJDEnICsgV0VCS0lUICsgKGNoYXJhdCh2YWx1ZSwgMTQpID09PSA0NSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gkMycgKyAnJDEnICsgV0VCS0lUICsgJyQyJDMnICsgJyQxJyArIE1TICsgJyQyYm94JDMnKSArIHZhbHVlXG5cdFx0XHR9XG5cdFx0XHRicmVha1xuXHRcdC8vIHdyaXRpbmctbW9kZVxuXHRcdGNhc2UgNTkzNjpcblx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxMSkpIHtcblx0XHRcdFx0Ly8gdmVydGljYWwtbChyKVxuXHRcdFx0XHRjYXNlIDExNDpcblx0XHRcdFx0XHRyZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiJykgKyB2YWx1ZVxuXHRcdFx0XHQvLyB2ZXJ0aWNhbC1yKGwpXG5cdFx0XHRcdGNhc2UgMTA4OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGItcmwnKSArIHZhbHVlXG5cdFx0XHRcdC8vIGhvcml6b250YWwoLSl0YlxuXHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAnbHInKSArIHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZVxuXHR9XG5cblx0cmV0dXJuIHZhbHVlXG59XG4iLCJpbXBvcnQge0lNUE9SVCwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIElNUE9SVDogY2FzZSBERUNMQVJBVElPTjogcmV0dXJuIGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC5yZXR1cm4gfHwgZWxlbWVudC52YWx1ZVxuXHRcdGNhc2UgQ09NTUVOVDogcmV0dXJuICcnXG5cdFx0Y2FzZSBLRVlGUkFNRVM6IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spICsgJ30nXG5cdFx0Y2FzZSBSVUxFU0VUOiBlbGVtZW50LnZhbHVlID0gZWxlbWVudC5wcm9wcy5qb2luKCcsJylcblx0fVxuXG5cdHJldHVybiBzdHJsZW4oY2hpbGRyZW4gPSBzZXJpYWxpemUoZWxlbWVudC5jaGlsZHJlbiwgY2FsbGJhY2spKSA/IGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIGNoaWxkcmVuICsgJ30nIDogJydcbn1cbiIsImltcG9ydCB7TVMsIE1PWiwgV0VCS0lULCBSVUxFU0VULCBLRVlGUkFNRVMsIERFQ0xBUkFUSU9OfSBmcm9tICcuL0VudW0uanMnXG5pbXBvcnQge21hdGNoLCBjaGFyYXQsIHN1YnN0ciwgc3RybGVuLCBzaXplb2YsIHJlcGxhY2UsIGNvbWJpbmV9IGZyb20gJy4vVXRpbGl0eS5qcydcbmltcG9ydCB7Y29weSwgdG9rZW5pemV9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJy4vU2VyaWFsaXplci5qcydcbmltcG9ydCB7cHJlZml4fSBmcm9tICcuL1ByZWZpeGVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gY29sbGVjdGlvblxuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlIChjb2xsZWN0aW9uKSB7XG5cdHZhciBsZW5ndGggPSBzaXplb2YoY29sbGVjdGlvbilcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0XHR2YXIgb3V0cHV0ID0gJydcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0XHRvdXRwdXQgKz0gY29sbGVjdGlvbltpXShlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB8fCAnJ1xuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNoZWV0IChjYWxsYmFjaykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoIWVsZW1lbnQucm9vdClcblx0XHRcdGlmIChlbGVtZW50ID0gZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRcdGNhbGxiYWNrKGVsZW1lbnQpXG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZWZpeGVyIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdGlmIChlbGVtZW50Lmxlbmd0aCA+IC0xKVxuXHRcdGlmICghZWxlbWVudC5yZXR1cm4pXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdFx0XHRjYXNlIERFQ0xBUkFUSU9OOiBlbGVtZW50LnJldHVybiA9IHByZWZpeChlbGVtZW50LnZhbHVlLCBlbGVtZW50Lmxlbmd0aClcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdlYWtNZW1vaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi13ZWFrLW1lbW9pemUuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24td2Vhay1tZW1vaXplLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVtb2l6ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tbWVtb2l6ZS5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi1tZW1vaXplLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzaGVldCA9IHJlcXVpcmUoJ0BlbW90aW9uL3NoZWV0Jyk7XG52YXIgc3R5bGlzID0gcmVxdWlyZSgnc3R5bGlzJyk7XG52YXIgd2Vha01lbW9pemUgPSByZXF1aXJlKCdAZW1vdGlvbi93ZWFrLW1lbW9pemUnKTtcbnZhciBtZW1vaXplID0gcmVxdWlyZSgnQGVtb3Rpb24vbWVtb2l6ZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIHdlYWtNZW1vaXplX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdCh3ZWFrTWVtb2l6ZSk7XG52YXIgbWVtb2l6ZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQobWVtb2l6ZSk7XG5cbnZhciBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcgPSBmdW5jdGlvbiBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcoYmVnaW4sIHBvaW50cywgaW5kZXgpIHtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IDA7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSBzdHlsaXMucGVlaygpOyAvLyAmXFxmXG5cbiAgICBpZiAocHJldmlvdXMgPT09IDM4ICYmIGNoYXJhY3RlciA9PT0gMTIpIHtcbiAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgIH1cblxuICAgIGlmIChzdHlsaXMudG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3R5bGlzLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsaXMuc2xpY2UoYmVnaW4sIHN0eWxpcy5wb3NpdGlvbik7XG59O1xuXG52YXIgdG9SdWxlcyA9IGZ1bmN0aW9uIHRvUnVsZXMocGFyc2VkLCBwb2ludHMpIHtcbiAgLy8gcHJldGVuZCB3ZSd2ZSBzdGFydGVkIHdpdGggYSBjb21tYVxuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGNoYXJhY3RlciA9IDQ0O1xuXG4gIGRvIHtcbiAgICBzd2l0Y2ggKHN0eWxpcy50b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIC8vICZcXGZcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMzggJiYgc3R5bGlzLnBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKHN0eWxpcy5wb3NpdGlvbiAtIDEsIHBvaW50cywgaW5kZXgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IHN0eWxpcy5kZWxpbWl0KGNoYXJhY3Rlcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIC8vIGNvbW1hXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDQ0KSB7XG4gICAgICAgICAgLy8gY29sb25cbiAgICAgICAgICBwYXJzZWRbKytpbmRleF0gPSBzdHlsaXMucGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IHN0eWxpcy5mcm9tKGNoYXJhY3Rlcik7XG4gICAgfVxuICB9IHdoaWxlIChjaGFyYWN0ZXIgPSBzdHlsaXMubmV4dCgpKTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXModmFsdWUsIHBvaW50cykge1xuICByZXR1cm4gc3R5bGlzLmRlYWxsb2ModG9SdWxlcyhzdHlsaXMuYWxsb2ModmFsdWUpLCBwb2ludHMpKTtcbn07IC8vIFdlYWtTZXQgd291bGQgYmUgbW9yZSBhcHByb3ByaWF0ZSwgYnV0IG9ubHkgV2Vha01hcCBpcyBzdXBwb3J0ZWQgaW4gSUUxMVxuXG5cbnZhciBmaXhlZEVsZW1lbnRzID0gLyogI19fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciBjb21wYXQgPSBmdW5jdGlvbiBjb21wYXQoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlICE9PSAncnVsZScgfHwgIWVsZW1lbnQucGFyZW50IHx8IC8vIHBvc2l0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkb1xuICAvLyBuZWdhdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBoYXMgYmVlbiBhbHJlYWR5IHByZWZpeGVkXG4gIGVsZW1lbnQubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUsXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudDtcbiAgdmFyIGlzSW1wbGljaXRSdWxlID0gZWxlbWVudC5jb2x1bW4gPT09IHBhcmVudC5jb2x1bW4gJiYgZWxlbWVudC5saW5lID09PSBwYXJlbnQubGluZTtcblxuICB3aGlsZSAocGFyZW50LnR5cGUgIT09ICdydWxlJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgfSAvLyBzaG9ydC1jaXJjdWl0IGZvciB0aGUgc2ltcGxlc3QgY2FzZVxuXG5cbiAgaWYgKGVsZW1lbnQucHJvcHMubGVuZ3RoID09PSAxICYmIHZhbHVlLmNoYXJDb2RlQXQoMCkgIT09IDU4XG4gIC8qIGNvbG9uICovXG4gICYmICFmaXhlZEVsZW1lbnRzLmdldChwYXJlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGlmIHRoaXMgaXMgYW4gaW1wbGljaXRseSBpbnNlcnRlZCBydWxlICh0aGUgb25lIGVhZ2VybHkgaW5zZXJ0ZWQgYXQgdGhlIGVhY2ggbmV3IG5lc3RlZCBsZXZlbClcbiAgLy8gdGhlbiB0aGUgcHJvcHMgaGFzIGFscmVhZHkgYmVlbiBtYW5pcHVsYXRlZCBiZWZvcmVoYW5kIGFzIHRoZXkgdGhhdCBhcnJheSBpcyBzaGFyZWQgYmV0d2VlbiBpdCBhbmQgaXRzIFwicnVsZSBwYXJlbnRcIlxuXG5cbiAgaWYgKGlzSW1wbGljaXRSdWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZml4ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgdHJ1ZSk7XG4gIHZhciBwb2ludHMgPSBbXTtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXModmFsdWUsIHBvaW50cyk7XG4gIHZhciBwYXJlbnRSdWxlcyA9IHBhcmVudC5wcm9wcztcblxuICBmb3IgKHZhciBpID0gMCwgayA9IDA7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50UnVsZXMubGVuZ3RoOyBqKyssIGsrKykge1xuICAgICAgZWxlbWVudC5wcm9wc1trXSA9IHBvaW50c1tpXSA/IHJ1bGVzW2ldLnJlcGxhY2UoLyZcXGYvZywgcGFyZW50UnVsZXNbal0pIDogcGFyZW50UnVsZXNbal0gKyBcIiBcIiArIHJ1bGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciByZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2RlY2wnKSB7XG4gICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcblxuICAgIGlmICggLy8gY2hhcmNvZGUgZm9yIGxcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAxMDggJiYgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICB2YWx1ZS5jaGFyQ29kZUF0KDIpID09PSA5OCkge1xuICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICBlbGVtZW50W1wicmV0dXJuXCJdID0gJyc7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG59O1xudmFyIGlnbm9yZUZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcblxudmFyIGlzSWdub3JpbmdDb21tZW50ID0gZnVuY3Rpb24gaXNJZ25vcmluZ0NvbW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCBjYWNoZS5jb21wYXQpIHJldHVybjtcbiAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGVsZW1lbnQudmFsdWUubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xuXG4gICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMpIHtcbiAgICAgIHZhciBpc05lc3RlZCA9IGVsZW1lbnQucGFyZW50ID09PSBjaGlsZHJlblswXTsgLy8gaW4gbmVzdGVkIHJ1bGVzIGNvbW1lbnRzIGJlY29tZSBjaGlsZHJlbiBvZiB0aGUgXCJhdXRvLWluc2VydGVkXCIgcnVsZVxuICAgICAgLy9cbiAgICAgIC8vIGNvbnNpZGVyaW5nIHRoaXMgaW5wdXQ6XG4gICAgICAvLyAuYSB7XG4gICAgICAvLyAgIC5iIC8qIGNvbW0gKi8ge31cbiAgICAgIC8vICAgY29sb3I6IGhvdHBpbms7XG4gICAgICAvLyB9XG4gICAgICAvLyB3ZSBnZXQgb3V0cHV0IGNvcnJlc3BvbmRpbmcgdG8gdGhpczpcbiAgICAgIC8vIC5hIHtcbiAgICAgIC8vICAgJiB7XG4gICAgICAvLyAgICAgLyogY29tbSAqL1xuICAgICAgLy8gICAgIGNvbG9yOiBob3RwaW5rO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIC5iIHt9XG4gICAgICAvLyB9XG5cbiAgICAgIHZhciBjb21tZW50Q29udGFpbmVyID0gaXNOZXN0ZWQgPyBjaGlsZHJlblswXS5jaGlsZHJlbiA6IC8vIGdsb2JhbCBydWxlIGF0IHRoZSByb290IGxldmVsXG4gICAgICBjaGlsZHJlbjtcblxuICAgICAgZm9yICh2YXIgaSA9IGNvbW1lbnRDb250YWluZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjb21tZW50Q29udGFpbmVyW2ldO1xuXG4gICAgICAgIGlmIChub2RlLmxpbmUgPCBlbGVtZW50LmxpbmUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBpdCBpcyBxdWl0ZSB3ZWlyZCBidXQgY29tbWVudHMgYXJlICp1c3VhbGx5KiBwdXQgYXQgYGNvbHVtbjogZWxlbWVudC5jb2x1bW4gLSAxYFxuICAgICAgICAvLyBzbyB3ZSBzZWVrICpmcm9tIHRoZSBlbmQqIGZvciB0aGUgbm9kZSB0aGF0IGlzIGVhcmxpZXIgdGhhbiB0aGUgcnVsZSdzIGBlbGVtZW50YCBhbmQgY2hlY2sgdGhhdFxuICAgICAgICAvLyB0aGlzIHdpbGwgYWxzbyBtYXRjaCBpbnB1dHMgbGlrZSB0aGlzOlxuICAgICAgICAvLyAuYSB7XG4gICAgICAgIC8vICAgLyogY29tbSAqL1xuICAgICAgICAvLyAgIC5iIHt9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gYnV0IHRoYXQgaXMgZmluZVxuICAgICAgICAvL1xuICAgICAgICAvLyBpdCB3b3VsZCBiZSB0aGUgZWFzaWVzdCB0byBjaGFuZ2UgdGhlIHBsYWNlbWVudCBvZiB0aGUgY29tbWVudCB0byBiZSB0aGUgZmlyc3QgY2hpbGQgb2YgdGhlIHJ1bGU6XG4gICAgICAgIC8vIC5hIHtcbiAgICAgICAgLy8gICAuYiB7IC8qIGNvbW0gKi8gfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHdpdGggc3VjaCBpbnB1dHMgd2Ugd291bGRuJ3QgaGF2ZSB0byBzZWFyY2ggZm9yIHRoZSBjb21tZW50IGF0IGFsbFxuICAgICAgICAvLyBUT0RPOiBjb25zaWRlciBjaGFuZ2luZyB0aGlzIGNvbW1lbnQgcGxhY2VtZW50IGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cblxuXG4gICAgICAgIGlmIChub2RlLmNvbHVtbiA8IGVsZW1lbnQuY29sdW1uKSB7XG4gICAgICAgICAgaWYgKGlzSWdub3JpbmdDb21tZW50KG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaXNJbXBvcnRSdWxlID0gZnVuY3Rpb24gaXNJbXBvcnRSdWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgZWxlbWVudC50eXBlLmNoYXJDb2RlQXQoMCkgPT09IDY0O1xufTtcblxudmFyIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyA9IGZ1bmN0aW9uIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoIWlzSW1wb3J0UnVsZShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIHVzZSB0aGlzIHRvIHJlbW92ZSBpbmNvcnJlY3QgZWxlbWVudHMgZnJvbSBmdXJ0aGVyIHByb2Nlc3Npbmdcbi8vIHNvIHRoZXkgZG9uJ3QgZ2V0IGhhbmRlZCB0byB0aGUgYHNoZWV0YCAob3IgYW55dGhpbmcgZWxzZSlcbi8vIGFzIHRoYXQgY291bGQgcG90ZW50aWFsbHkgbGVhZCB0byBhZGRpdGlvbmFsIGxvZ3Mgd2hpY2ggaW4gdHVybiBjb3VsZCBiZSBvdmVyaGVsbWluZyB0byB0aGUgdXNlclxuXG5cbnZhciBudWxsaWZ5RWxlbWVudCA9IGZ1bmN0aW9uIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC50eXBlID0gJyc7XG4gIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICBlbGVtZW50LmNoaWxkcmVuID0gJyc7XG4gIGVsZW1lbnQucHJvcHMgPSAnJztcbn07XG5cbnZhciBpbmNvcnJlY3RJbXBvcnRBbGFybSA9IGZ1bmN0aW9uIGluY29ycmVjdEltcG9ydEFsYXJtKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICBpZiAoIWlzSW1wb3J0UnVsZShlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgbmVzdGVkIGluc2lkZSBvdGhlciBydWxlcy4gUGxlYXNlIG1vdmUgaXQgdG8gdGhlIHRvcCBsZXZlbCBhbmQgcHV0IGl0IGJlZm9yZSByZWd1bGFyIHJ1bGVzLiBLZWVwIGluIG1pbmQgdGhhdCB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGdsb2JhbCBzdHlsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pKSB7XG4gICAgY29uc29sZS5lcnJvcihcImBAaW1wb3J0YCBydWxlcyBjYW4ndCBiZSBhZnRlciBvdGhlciBydWxlcy4gUGxlYXNlIHB1dCB5b3VyIGBAaW1wb3J0YCBydWxlcyBiZWZvcmUgeW91ciBvdGhlciBydWxlcy5cIik7XG4gICAgbnVsbGlmeUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn07XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xudmFyIGdldFNlcnZlclN0eWxpc0NhY2hlID0gaXNCcm93c2VyID8gdW5kZWZpbmVkIDogd2Vha01lbW9pemVfX2RlZmF1bHRbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBtZW1vaXplX19kZWZhdWx0WydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIGNhY2hlW25hbWVdO1xuICAgIH07XG4gIH0pO1xufSk7XG52YXIgZGVmYXVsdFN0eWxpc1BsdWdpbnMgPSBbc3R5bGlzLnByZWZpeGVyXTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb24gY3JlYXRlQ2FjaGUob3B0aW9ucykge1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWtleSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBoYXZlIHRvIGNvbmZpZ3VyZSBga2V5YCBmb3IgeW91ciBjYWNoZS4gUGxlYXNlIG1ha2Ugc3VyZSBpdCdzIHVuaXF1ZSAoYW5kIG5vdCBlcXVhbCB0byAnY3NzJykgYXMgaXQncyB1c2VkIGZvciBsaW5raW5nIHN0eWxlcyB0byB5b3VyIGNhY2hlLlxcblwiICsgXCJJZiBtdWx0aXBsZSBjYWNoZXMgc2hhcmUgdGhlIHNhbWUga2V5IHRoZXkgbWlnaHQgXFxcImZpZ2h0XFxcIiBmb3IgZWFjaCBvdGhlcidzIHN0eWxlIGVsZW1lbnRzLlwiKTtcbiAgfVxuXG4gIGlmIChpc0Jyb3dzZXIgJiYga2V5ID09PSAnY3NzJykge1xuICAgIHZhciBzc3JTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXTpub3QoW2RhdGEtc10pXCIpOyAvLyBnZXQgU1NSZWQgc3R5bGVzIG91dCBvZiB0aGUgd2F5IG9mIFJlYWN0J3MgaHlkcmF0aW9uXG4gICAgLy8gZG9jdW1lbnQuaGVhZCBpcyBhIHNhZmUgcGxhY2UgdG8gbW92ZSB0aGVtIHRvKHRob3VnaCBub3RlIGRvY3VtZW50LmhlYWQgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBsYXN0IHBsYWNlIHRoZXkgd2lsbCBiZSlcbiAgICAvLyBub3RlIHRoaXMgdmVyeSB2ZXJ5IGludGVudGlvbmFsbHkgdGFyZ2V0cyBhbGwgc3R5bGUgZWxlbWVudHMgcmVnYXJkbGVzcyBvZiB0aGUga2V5IHRvIGVuc3VyZVxuICAgIC8vIHRoYXQgY3JlYXRpbmcgYSBjYWNoZSB3b3JrcyBpbnNpZGUgb2YgcmVuZGVyIG9mIGEgUmVhY3QgY29tcG9uZW50XG5cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNzclN0eWxlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gb25seSBtb3ZlIGVsZW1lbnRzIHdoaWNoIGhhdmUgYSBzcGFjZSBpbiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgLy8gYmVjYXVzZSB0aGF0IGluZGljYXRlcyB0aGF0IGl0IGlzIGFuIEVtb3Rpb24gMTEgc2VydmVyLXNpZGUgcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICAgIC8vIHdoaWxlIHdlIHdpbGwgYWxyZWFkeSBpZ25vcmUgRW1vdGlvbiAxMSBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgYmVjYXVzZSBvZiB0aGUgOm5vdChbZGF0YS1zXSkgcGFydCBpbiB0aGUgc2VsZWN0b3JcbiAgICAgIC8vIEVtb3Rpb24gMTAgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGRpZCBub3QgaGF2ZSBkYXRhLXMgKGJ1dCBpbXBvcnRhbnRseSBkaWQgbm90IGhhdmUgYSBzcGFjZSBpbiB0aGVpciBkYXRhLWVtb3Rpb24gYXR0cmlidXRlcylcbiAgICAgIC8vIHNvIGNoZWNraW5nIGZvciB0aGUgc3BhY2UgZW5zdXJlcyB0aGF0IGxvYWRpbmcgRW1vdGlvbiAxMSBhZnRlciBFbW90aW9uIDEwIGhhcyBpbnNlcnRlZCBzb21lIHN0eWxlc1xuICAgICAgLy8gd2lsbCBub3QgcmVzdWx0IGluIHRoZSBFbW90aW9uIDEwIHN0eWxlcyBiZWluZyBkZXN0cm95ZWRcbiAgICAgIHZhciBkYXRhRW1vdGlvbkF0dHJpYnV0ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nKTtcblxuICAgICAgaWYgKGRhdGFFbW90aW9uQXR0cmlidXRlLmluZGV4T2YoJyAnKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGlzUGx1Z2lucyA9IG9wdGlvbnMuc3R5bGlzUGx1Z2lucyB8fCBkZWZhdWx0U3R5bGlzUGx1Z2lucztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICBpZiAoL1teYS16LV0vLnRlc3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1vdGlvbiBrZXkgbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXIgY2FzZSBhbHBoYWJldGljYWwgY2hhcmFjdGVycyBhbmQgLSBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwYXNzZWRcIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluc2VydGVkID0ge307XG4gIHZhciBjb250YWluZXI7XG4gIHZhciBub2Rlc1RvSHlkcmF0ZSA9IFtdO1xuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBkb2N1bWVudC5oZWFkO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoIC8vIHRoaXMgbWVhbnMgd2Ugd2lsbCBpZ25vcmUgZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhIHNwYWNlIGluIHRoZW0gd2hpY2hcbiAgICAvLyBtZWFucyB0aGF0IHRoZSBzdHlsZSBlbGVtZW50cyB3ZSdyZSBsb29raW5nIGF0IGFyZSBvbmx5IEVtb3Rpb24gMTEgc2VydmVyLXJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl49XFxcIlwiICsga2V5ICsgXCIgXFxcIl1cIiksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb25cIikuc3BsaXQoJyAnKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGF0dHJpYi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnNlcnRlZFthdHRyaWJbaV1dID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZXNUb0h5ZHJhdGUucHVzaChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHZhciBvbW5pcHJlc2VudFBsdWdpbnMgPSBbY29tcGF0LCByZW1vdmVMYWJlbF07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBvbW5pcHJlc2VudFBsdWdpbnMucHVzaChjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybSh7XG4gICAgICBnZXQgY29tcGF0KCkge1xuICAgICAgICByZXR1cm4gY2FjaGUuY29tcGF0O1xuICAgICAgfVxuXG4gICAgfSksIGluY29ycmVjdEltcG9ydEFsYXJtKTtcbiAgfVxuXG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICB2YXIgY3VycmVudFNoZWV0O1xuICAgIHZhciBmaW5hbGl6aW5nUGx1Z2lucyA9IFtzdHlsaXMuc3RyaW5naWZ5LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgIGlmIChlbGVtZW50W1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgY3VycmVudFNoZWV0Lmluc2VydChlbGVtZW50W1wicmV0dXJuXCJdKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnZhbHVlICYmIGVsZW1lbnQudHlwZSAhPT0gc3R5bGlzLkNPTU1FTlQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcnVsZSBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAgICAgICAgICAvLyBzbyBAZW1vdGlvbi9qZXN0IGNhbiBncmFiIGBrZXlgIGZyb20gdGhlIChKUylET00gZm9yIGNhY2hlcyB3aXRob3V0IGFueSBydWxlcyBpbnNlcnRlZCB5ZXRcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnQudmFsdWUgKyBcInt9XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IHN0eWxpcy5ydWxlc2hlZXQoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfSldO1xuICAgIHZhciBzZXJpYWxpemVyID0gc3R5bGlzLm1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBmaW5hbGl6aW5nUGx1Z2lucykpO1xuXG4gICAgdmFyIHN0eWxpcyQxID0gZnVuY3Rpb24gc3R5bGlzJDEoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc3R5bGlzLnNlcmlhbGl6ZShzdHlsaXMuY29tcGlsZShzdHlsZXMpLCBzZXJpYWxpemVyKTtcbiAgICB9O1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uIGluc2VydChzZWxlY3Rvciwgc2VyaWFsaXplZCwgc2hlZXQsIHNob3VsZENhY2hlKSB7XG4gICAgICBjdXJyZW50U2hlZXQgPSBzaGVldDtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50U2hlZXQgPSB7XG4gICAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBzZXJpYWxpemVkLm1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMkMShzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2ZpbmFsaXppbmdQbHVnaW5zID0gW3N0eWxpcy5zdHJpbmdpZnldO1xuXG4gICAgdmFyIF9zZXJpYWxpemVyID0gc3R5bGlzLm1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBfZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBfc3R5bGlzID0gZnVuY3Rpb24gX3N0eWxpcyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiBzdHlsaXMuc2VyaWFsaXplKHN0eWxpcy5jb21waWxlKHN0eWxlcyksIF9zZXJpYWxpemVyKTtcbiAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgIHZhciBzZXJ2ZXJTdHlsaXNDYWNoZSA9IGdldFNlcnZlclN0eWxpc0NhY2hlKHN0eWxpc1BsdWdpbnMpKGtleSk7XG5cbiAgICB2YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyhzZWxlY3Rvciwgc2VyaWFsaXplZCkge1xuICAgICAgdmFyIG5hbWUgPSBzZXJpYWxpemVkLm5hbWU7XG5cbiAgICAgIGlmIChzZXJ2ZXJTdHlsaXNDYWNoZVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlcnZlclN0eWxpc0NhY2hlW25hbWVdID0gX3N0eWxpcyhzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VydmVyU3R5bGlzQ2FjaGVbbmFtZV07XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBfaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIHZhciBuYW1lID0gc2VyaWFsaXplZC5uYW1lO1xuICAgICAgdmFyIHJ1bGVzID0gZ2V0UnVsZXMoc2VsZWN0b3IsIHNlcmlhbGl6ZWQpO1xuXG4gICAgICBpZiAoY2FjaGUuY29tcGF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gaW4gcmVndWxhciBtb2RlLCB3ZSBkb24ndCBzZXQgdGhlIHN0eWxlcyBvbiB0aGUgaW5zZXJ0ZWQgY2FjaGVcbiAgICAgICAgLy8gc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byBhbmQgdGhhdCB3b3VsZCBiZSB3YXN0aW5nIG1lbW9yeVxuICAgICAgICAvLyB3ZSByZXR1cm4gdGhlbSBzbyB0aGF0IHRoZXkgYXJlIHJlbmRlcmVkIGluIGEgc3R5bGUgdGFnXG4gICAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICAgIGNhY2hlLmluc2VydGVkW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggLy8gdXNpbmcgPT09IGRldmVsb3BtZW50IGluc3RlYWQgb2YgIT09IHByb2R1Y3Rpb25cbiAgICAgICAgLy8gYmVjYXVzZSBpZiBwZW9wbGUgZG8gc3NyIGluIHRlc3RzLCB0aGUgc291cmNlIG1hcHMgc2hvd2luZyB1cCB3b3VsZCBiZSBhbm5veWluZ1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJ1bGVzICsgc2VyaWFsaXplZC5tYXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpbiBjb21wYXQgbW9kZSwgd2UgcHV0IHRoZSBzdHlsZXMgb24gdGhlIGluc2VydGVkIGNhY2hlIHNvXG4gICAgICAgIC8vIHRoYXQgZW1vdGlvbi1zZXJ2ZXIgY2FuIHB1bGwgb3V0IHRoZSBzdHlsZXNcbiAgICAgICAgLy8gZXhjZXB0IHdoZW4gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBpdCB3aGljaCB3YXMgaW4gR2xvYmFsIGJ1dCBub3dcbiAgICAgICAgLy8gaXMgbm93aGVyZSBidXQgd2UgZG9uJ3Qgd2FudCB0byBkbyBhIG1ham9yIHJpZ2h0IG5vd1xuICAgICAgICAvLyBhbmQganVzdCBpbiBjYXNlIHdlJ3JlIGdvaW5nIHRvIGxlYXZlIHRoZSBjYXNlIGhlcmVcbiAgICAgICAgLy8gaXQncyBhbHNvIG5vdCBhZmZlY3RpbmcgY2xpZW50IHNpZGUgYnVuZGxlIHNpemVcbiAgICAgICAgLy8gc28gaXQncyByZWFsbHkgbm90IGEgYmlnIGRlYWxcbiAgICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbbmFtZV0gPSBydWxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgc2hlZXQuU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnRcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIGNhY2hlLnNoZWV0Lmh5ZHJhdGUobm9kZXNUb0h5ZHJhdGUpO1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDYWNoZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tY2FjaGUuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tY2FjaGUuY2pzLmRldi5qc1wiKTtcbn1cbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyQxID0gcmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaG9pc3ROb25SZWFjdFN0YXRpY3MkMSk7XG5cbi8vIHRoaXMgZmlsZSBpc29sYXRlcyB0aGlzIHBhY2thZ2UgdGhhdCBpcyBub3QgdHJlZS1zaGFrZWFibGVcbi8vIGFuZCBpZiB0aGlzIG1vZHVsZSBkb2Vzbid0IGFjdHVhbGx5IGNvbnRhaW4gYW55IGxvZ2ljIG9mIGl0cyBvd25cbi8vIHRoZW4gUm9sbHVwIGp1c3QgdXNlICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycgZGlyZWN0bHkgaW4gb3RoZXIgY2h1bmtzXG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IChmdW5jdGlvbiAodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzX19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgJiYgY2FjaGUuY29tcGF0ICE9PSB1bmRlZmluZWQpICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cbn07XG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzdHlsZXNGb3JTU1IgPSAnJztcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgaWYgKCFpc0Jyb3dzZXIgJiYgbWF5YmVTdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHlsZXNGb3JTU1IgKz0gbWF5YmVTdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGlmICghaXNCcm93c2VyICYmIHN0eWxlc0ZvclNTUi5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBzdHlsZXNGb3JTU1I7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmdldFJlZ2lzdGVyZWRTdHlsZXMgPSBnZXRSZWdpc3RlcmVkU3R5bGVzO1xuZXhwb3J0cy5pbnNlcnRTdHlsZXMgPSBpbnNlcnRTdHlsZXM7XG5leHBvcnRzLnJlZ2lzdGVyU3R5bGVzID0gcmVnaXN0ZXJTdHlsZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9lbW90aW9uLXV0aWxzLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9lbW90aW9uLXV0aWxzLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBtdXJtdXIyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi1oYXNoLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9lbW90aW9uLWhhc2guY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHVuaXRsZXNzS2V5cztcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tdW5pdGxlc3MuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tdW5pdGxlc3MuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGhhc2hTdHJpbmcgPSByZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XG52YXIgdW5pdGxlc3MgPSByZXF1aXJlKCdAZW1vdGlvbi91bml0bGVzcycpO1xudmFyIG1lbW9pemUgPSByZXF1aXJlKCdAZW1vdGlvbi9tZW1vaXplJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgaGFzaFN0cmluZ19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaGFzaFN0cmluZyk7XG52YXIgdW5pdGxlc3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KHVuaXRsZXNzKTtcbnZhciBtZW1vaXplX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChtZW1vaXplKTtcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZV9fZGVmYXVsdFsnZGVmYXVsdCddKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzX19kZWZhdWx0WydkZWZhdWx0J11ba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGNvbnRlbnRWYWx1ZVBhdHRlcm4gPSAvKHZhcnxhdHRyfGNvdW50ZXJzP3x1cmx8KCgocmVwZWF0aW5nLSk/KGxpbmVhcnxyYWRpYWwpKXxjb25pYyktZ3JhZGllbnQpXFwofChuby0pPyhvcGVufGNsb3NlKS1xdW90ZS87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSA9ICdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCAnICsgJ0BlbW90aW9uL2JhYmVsLXBsdWdpbiwgdGhlIHN3YyBFbW90aW9uIHBsdWdpbiwgb3IgYW5vdGhlciBFbW90aW9uLWF3YXJlICcgKyAnY29tcGlsZXIgdHJhbnNmb3JtLic7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKig7fCQpL2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nX19kZWZhdWx0WydkZWZhdWx0J10oc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydHMuc2VyaWFsaXplU3R5bGVzID0gc2VyaWFsaXplU3R5bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi1zZXJpYWxpemUuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tc2VyaWFsaXplLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZVtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5bJ2RlZmF1bHQnXSA9IGU7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgUmVhY3RfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShSZWFjdCk7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG52YXIgc3luY0ZhbGxiYWNrID0gZnVuY3Rpb24gc3luY0ZhbGxiYWNrKGNyZWF0ZSkge1xuICByZXR1cm4gY3JlYXRlKCk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RfX25hbWVzcGFjZVsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0X19uYW1lc3BhY2VbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiBmYWxzZTtcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrID0gIWlzQnJvd3NlciA/IHN5bmNGYWxsYmFjayA6IHVzZUluc2VydGlvbkVmZmVjdCB8fCBzeW5jRmFsbGJhY2s7XG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IFJlYWN0LnVzZUxheW91dEVmZmVjdDtcblxuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjaztcbmV4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vZW1vdGlvbi11c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNyZWF0ZUNhY2hlID0gcmVxdWlyZSgnQGVtb3Rpb24vY2FjaGUnKTtcbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIHdlYWtNZW1vaXplID0gcmVxdWlyZSgnQGVtb3Rpb24vd2Vhay1tZW1vaXplJyk7XG52YXIgX2lzb2xhdGVkSG5yc19kaXN0X2Vtb3Rpb25SZWFjdF9pc29sYXRlZEhucnMgPSByZXF1aXJlKCcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuY2pzLmRldi5qcycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnQGVtb3Rpb24vdXRpbHMnKTtcbnZhciBzZXJpYWxpemUgPSByZXF1aXJlKCdAZW1vdGlvbi9zZXJpYWxpemUnKTtcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RXaXRoRmFsbGJhY2tzID0gcmVxdWlyZSgnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBjcmVhdGVDYWNoZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoY3JlYXRlQ2FjaGUpO1xudmFyIHdlYWtNZW1vaXplX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdCh3ZWFrTWVtb2l6ZSk7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyogI19fUFVSRV9fICovUmVhY3QuY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gLyogI19fUFVSRV9fICovY3JlYXRlQ2FjaGVfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb25DYWNoZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNhY2hlQ29udGV4dCc7XG59XG5cbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcbnZhciBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB1c2VFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xufTtcblxuZXhwb3J0cy53aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWVcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgLy8gdGhlIGNhY2hlIHdpbGwgbmV2ZXIgYmUgbnVsbCBpbiB0aGUgYnJvd3NlclxuICAgIHZhciBjYWNoZSA9IFJlYWN0LnVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG4gICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICB9KTtcbn07XG5cbmlmICghaXNCcm93c2VyKSB7XG4gIGV4cG9ydHMud2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBjYWNoZSA9IFJlYWN0LnVzZUNvbnRleHQoRW1vdGlvbkNhY2hlQ29udGV4dCk7XG5cbiAgICAgIGlmIChjYWNoZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyB5ZXMsIHdlJ3JlIHBvdGVudGlhbGx5IGNyZWF0aW5nIHRoaXMgb24gZXZlcnkgcmVuZGVyXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgYWN0dWFsbHkgbWF0dGVyIHRob3VnaCBzaW5jZSBpdCdzIG9ubHkgb24gdGhlIHNlcnZlclxuICAgICAgICAvLyBzbyB0aGVyZSB3aWxsIG9ubHkgZXZlcnkgYmUgYSBzaW5nbGUgcmVuZGVyXG4gICAgICAgIC8vIHRoYXQgY291bGQgY2hhbmdlIGluIHRoZSBmdXR1cmUgYmVjYXVzZSBvZiBzdXNwZW5zZSBhbmQgZXRjLiBidXQgZm9yIG5vdyxcbiAgICAgICAgLy8gdGhpcyB3b3JrcyBhbmQgaSBkb24ndCB3YW50IHRvIG9wdGltaXNlIGZvciBhIGZ1dHVyZSB0aGluZyB0aGF0IHdlIGFyZW4ndCBzdXJlIGFib3V0XG4gICAgICAgIGNhY2hlID0gY3JlYXRlQ2FjaGVfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7XG4gICAgICAgICAga2V5OiAnY3NzJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZTogY2FjaGVcbiAgICAgICAgfSwgZnVuYyhwcm9wcywgY2FjaGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIFRoZW1lQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBUaGVtZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnRW1vdGlvblRoZW1lQ29udGV4dCc7XG59XG5cbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxudmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBtZXJnZWRUaGVtZSA9IHRoZW1lKG91dGVyVGhlbWUpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKG1lcmdlZFRoZW1lID09IG51bGwgfHwgdHlwZW9mIG1lcmdlZFRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW1RoZW1lUHJvdmlkZXJdIFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciB0aGVtZSBmdW5jdGlvbiwgaS5lLiB0aGVtZT17KCkgPT4gKHt9KX0hJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFRoZW1lO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKHRoZW1lID09IG51bGwgfHwgdHlwZW9mIHRoZW1lICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHRoZW1lKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgbWFrZSB5b3VyIHRoZW1lIHByb3AgYSBwbGFpbiBvYmplY3QnKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xufTtcblxudmFyIGNyZWF0ZUNhY2hlV2l0aFRoZW1lID0gLyogI19fUFVSRV9fICovd2Vha01lbW9pemVfX2RlZmF1bHRbJ2RlZmF1bHQnXShmdW5jdGlvbiAob3V0ZXJUaGVtZSkge1xuICByZXR1cm4gd2Vha01lbW9pemVfX2RlZmF1bHRbJ2RlZmF1bHQnXShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvcHMudGhlbWUgIT09IHRoZW1lKSB7XG4gICAgdGhlbWUgPSBjcmVhdGVDYWNoZVdpdGhUaGVtZSh0aGVtZSkocHJvcHMudGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0aGVtZVxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuZnVuY3Rpb24gd2l0aFRoZW1lKENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBfaXNvbGF0ZWRIbnJzX2Rpc3RfZW1vdGlvblJlYWN0X2lzb2xhdGVkSG5yc1snZGVmYXVsdCddKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbn1cblxudmFyIGdldExhc3RQYXJ0ID0gZnVuY3Rpb24gZ2V0TGFzdFBhcnQoZnVuY3Rpb25OYW1lKSB7XG4gIC8vIFRoZSBtYXRjaCBtYXkgYmUgc29tZXRoaW5nIGxpa2UgJ09iamVjdC5jcmVhdGVFbW90aW9uUHJvcHMnIG9yXG4gIC8vICdMb2FkZXIucHJvdG90eXBlLnJlbmRlcidcbiAgdmFyIHBhcnRzID0gZnVuY3Rpb25OYW1lLnNwbGl0KCcuJyk7XG4gIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbn07XG5cbnZhciBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUgPSBmdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWVGcm9tU3RhY2tUcmFjZUxpbmUobGluZSkge1xuICAvLyBWOFxuICB2YXIgbWF0Y2ggPSAvXlxccythdFxccysoW0EtWmEtejAtOSQuXSspXFxzLy5leGVjKGxpbmUpO1xuICBpZiAobWF0Y2gpIHJldHVybiBnZXRMYXN0UGFydChtYXRjaFsxXSk7IC8vIFNhZmFyaSAvIEZpcmVmb3hcblxuICBtYXRjaCA9IC9eKFtBLVphLXowLTkkLl0rKUAvLmV4ZWMobGluZSk7XG4gIGlmIChtYXRjaCkgcmV0dXJuIGdldExhc3RQYXJ0KG1hdGNoWzFdKTtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnZhciBpbnRlcm5hbFJlYWN0RnVuY3Rpb25OYW1lcyA9IC8qICNfX1BVUkVfXyAqL25ldyBTZXQoWydyZW5kZXJXaXRoSG9va3MnLCAncHJvY2Vzc0NoaWxkJywgJ2ZpbmlzaENsYXNzQ29tcG9uZW50JywgJ3JlbmRlclRvU3RyaW5nJ10pOyAvLyBUaGVzZSBpZGVudGlmaWVycyBjb21lIGZyb20gZXJyb3Igc3RhY2tzLCBzbyB0aGV5IGhhdmUgdG8gYmUgdmFsaWQgSlNcbi8vIGlkZW50aWZpZXJzLCB0aHVzIHdlIG9ubHkgbmVlZCB0byByZXBsYWNlIHdoYXQgaXMgYSB2YWxpZCBjaGFyYWN0ZXIgZm9yIEpTLFxuLy8gYnV0IG5vdCBmb3IgQ1NTLlxuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZSA9IGZ1bmN0aW9uIGdldExhYmVsRnJvbVN0YWNrVHJhY2Uoc3RhY2tUcmFjZSkge1xuICBpZiAoIXN0YWNrVHJhY2UpIHJldHVybiB1bmRlZmluZWQ7XG4gIHZhciBsaW5lcyA9IHN0YWNrVHJhY2Uuc3BsaXQoJ1xcbicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25OYW1lRnJvbVN0YWNrVHJhY2VMaW5lKGxpbmVzW2ldKTsgLy8gVGhlIGZpcnN0IGxpbmUgb2YgVjggc3RhY2sgdHJhY2VzIGlzIGp1c3QgXCJFcnJvclwiXG5cbiAgICBpZiAoIWZ1bmN0aW9uTmFtZSkgY29udGludWU7IC8vIElmIHdlIHJlYWNoIG9uZSBvZiB0aGVzZSwgd2UgaGF2ZSBnb25lIHRvbyBmYXIgYW5kIHNob3VsZCBxdWl0XG5cbiAgICBpZiAoaW50ZXJuYWxSZWFjdEZ1bmN0aW9uTmFtZXMuaGFzKGZ1bmN0aW9uTmFtZSkpIGJyZWFrOyAvLyBUaGUgY29tcG9uZW50IG5hbWUgaXMgdGhlIGZpcnN0IGZ1bmN0aW9uIGluIHRoZSBzdGFjayB0aGF0IHN0YXJ0cyB3aXRoIGFuXG4gICAgLy8gdXBwZXJjYXNlIGxldHRlclxuXG4gICAgaWYgKC9eW0EtWl0vLnRlc3QoZnVuY3Rpb25OYW1lKSkgcmV0dXJuIHNhbml0aXplSWRlbnRpZmllcihmdW5jdGlvbk5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnZhciB0eXBlUHJvcE5hbWUgPSAnX19FTU9USU9OX1RZUEVfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgbGFiZWxQcm9wTmFtZSA9ICdfX0VNT1RJT05fTEFCRUxfUExFQVNFX0RPX05PVF9VU0VfXyc7XG52YXIgY3JlYXRlRW1vdGlvblByb3BzID0gZnVuY3Rpb24gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBwcm9wcy5jc3MgPT09ICdzdHJpbmcnICYmIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgY3NzIGRlY2xhcmF0aW9uXG4gIHByb3BzLmNzcy5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyaW5ncyBhcmUgbm90IGFsbG93ZWQgYXMgY3NzIHByb3AgdmFsdWVzLCBwbGVhc2Ugd3JhcCBpdCBpbiBhIGNzcyB0ZW1wbGF0ZSBsaXRlcmFsIGZyb20gJ0BlbW90aW9uL3JlYWN0JyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gRm9yIHBlcmZvcm1hbmNlLCBvbmx5IGNhbGwgZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZSBpbiBkZXZlbG9wbWVudCBhbmQgd2hlblxuICAvLyB0aGUgbGFiZWwgaGFzbid0IGFscmVhZHkgYmVlbiBjb21wdXRlZFxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEhcHJvcHMuY3NzICYmICh0eXBlb2YgcHJvcHMuY3NzICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcHMuY3NzLm5hbWUgIT09ICdzdHJpbmcnIHx8IHByb3BzLmNzcy5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpKSB7XG4gICAgdmFyIGxhYmVsID0gZ2V0TGFiZWxGcm9tU3RhY2tUcmFjZShuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgaWYgKGxhYmVsKSBuZXdQcm9wc1tsYWJlbFByb3BOYW1lXSA9IGxhYmVsO1xuICB9XG5cbiAgcmV0dXJuIG5ld1Byb3BzO1xufTtcblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkID0gX3JlZi5zZXJpYWxpemVkLFxuICAgICAgaXNTdHJpbmdUYWcgPSBfcmVmLmlzU3RyaW5nVGFnO1xuICB1dGlscy5yZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB2YXIgcnVsZXMgPSB1c2VJbnNlcnRpb25FZmZlY3RXaXRoRmFsbGJhY2tzLnVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1dGlscy5pbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgfSk7XG5cbiAgaWYgKCFpc0Jyb3dzZXIgJiYgcnVsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBzZXJpYWxpemVkTmFtZXMgPSBzZXJpYWxpemVkLm5hbWU7XG4gICAgdmFyIG5leHQgPSBzZXJpYWxpemVkLm5leHQ7XG5cbiAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXJpYWxpemVkTmFtZXMgKz0gJyAnICsgbmV4dC5uYW1lO1xuICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCAoX3JlZjIgPSB7fSwgX3JlZjJbXCJkYXRhLWVtb3Rpb25cIl0gPSBjYWNoZS5rZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWROYW1lcywgX3JlZjIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPSB7XG4gICAgICBfX2h0bWw6IHJ1bGVzXG4gICAgfSwgX3JlZjIubm9uY2UgPSBjYWNoZS5zaGVldC5ub25jZSwgX3JlZjIpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIEVtb3Rpb24gPSAvKiAjX19QVVJFX18gKi9leHBvcnRzLndpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIHZhciBjc3NQcm9wID0gcHJvcHMuY3NzOyAvLyBzbyB0aGF0IHVzaW5nIGBjc3NgIGZyb20gYGVtb3Rpb25gIGFuZCBwYXNzaW5nIHRoZSByZXN1bHQgdG8gdGhlIGNzcyBwcm9wIHdvcmtzXG4gIC8vIG5vdCBwYXNzaW5nIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIHNlcmlhbGl6ZVN0eWxlcyBiZWNhdXNlIGl0IHdvdWxkXG4gIC8vIG1ha2UgY2VydGFpbiBiYWJlbCBvcHRpbWlzYXRpb25zIG5vdCBwb3NzaWJsZVxuXG4gIGlmICh0eXBlb2YgY3NzUHJvcCA9PT0gJ3N0cmluZycgJiYgY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3NzUHJvcCA9IGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF07XG4gIH1cblxuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IHByb3BzW3R5cGVQcm9wTmFtZV07XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW2Nzc1Byb3BdO1xuICB2YXIgY2xhc3NOYW1lID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NOYW1lID0gdXRpbHMuZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjYWNoZS5yZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBwcm9wcy5jbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG4gICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCI7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZS5zZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcywgdW5kZWZpbmVkLCBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUuc2VyaWFsaXplU3R5bGVzKFtzZXJpYWxpemVkLCAnbGFiZWw6JyArIGxhYmVsRnJvbVN0YWNrICsgJzsnXSk7XG4gICAgfVxuICB9XG5cbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGlzU3RyaW5nVGFnOiB0eXBlb2YgV3JhcHBlZENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIG5ld1Byb3BzKSk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn1cblxuZXhwb3J0cy5DYWNoZVByb3ZpZGVyID0gQ2FjaGVQcm92aWRlcjtcbmV4cG9ydHMuRW1vdGlvbiA9IEVtb3Rpb247XG5leHBvcnRzLlRoZW1lQ29udGV4dCA9IFRoZW1lQ29udGV4dDtcbmV4cG9ydHMuVGhlbWVQcm92aWRlciA9IFRoZW1lUHJvdmlkZXI7XG5leHBvcnRzLl9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSA9IF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZTtcbmV4cG9ydHMuY3JlYXRlRW1vdGlvblByb3BzID0gY3JlYXRlRW1vdGlvblByb3BzO1xuZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eSA9IGhhc093blByb3BlcnR5O1xuZXhwb3J0cy5pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG5leHBvcnRzLnVzZVRoZW1lID0gdXNlVGhlbWU7XG5leHBvcnRzLndpdGhUaGVtZSA9IHdpdGhUaGVtZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnJlcXVpcmUoJ0BlbW90aW9uL2NhY2hlJyk7XG52YXIgZW1vdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2Vtb3Rpb24tZWxlbWVudC1iNjNjYTdjNi5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnJlcXVpcmUoJ0BlbW90aW9uL3dlYWstbWVtb2l6ZScpO1xucmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcbnJlcXVpcmUoJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5janMuZGV2LmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCdAZW1vdGlvbi91dGlscycpO1xudmFyIHNlcmlhbGl6ZSA9IHJlcXVpcmUoJ0BlbW90aW9uL3NlcmlhbGl6ZScpO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdFdpdGhGYWxsYmFja3MgPSByZXF1aXJlKCdAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcycpO1xuXG52YXIgcGtnID0ge1xuXHRuYW1lOiBcIkBlbW90aW9uL3JlYWN0XCIsXG5cdHZlcnNpb246IFwiMTEuMTAuNFwiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuZXNtLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanNcIlxuXHR9LFxuXHRleHBvcnRzOiB7XG5cdFx0XCIuXCI6IHtcblx0XHRcdG1vZHVsZToge1xuXHRcdFx0XHR3b3JrZXI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3Qud29ya2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRicm93c2VyOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCIsXG5cdFx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9qc3gtcnVudGltZVwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLndvcmtlci5lc20uanNcIixcblx0XHRcdFx0YnJvd3NlcjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5icm93c2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRcImRlZmF1bHRcIjogXCIuL2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1ydW50aW1lLmNqcy5qc1wiXG5cdFx0fSxcblx0XHRcIi4vX2lzb2xhdGVkLWhucnNcIjoge1xuXHRcdFx0bW9kdWxlOiB7XG5cdFx0XHRcdHdvcmtlcjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy53b3JrZXIuZXNtLmpzXCIsXG5cdFx0XHRcdGJyb3dzZXI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuZXNtLmpzXCJcblx0XHRcdH0sXG5cdFx0XHRcImRlZmF1bHRcIjogXCIuL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5janMuanNcIlxuXHRcdH0sXG5cdFx0XCIuL2pzeC1kZXYtcnVudGltZVwiOiB7XG5cdFx0XHRtb2R1bGU6IHtcblx0XHRcdFx0d29ya2VyOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUud29ya2VyLmVzbS5qc1wiLFxuXHRcdFx0XHRicm93c2VyOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuYnJvd3Nlci5lc20uanNcIixcblx0XHRcdFx0XCJkZWZhdWx0XCI6IFwiLi9qc3gtZGV2LXJ1bnRpbWUvZGlzdC9lbW90aW9uLXJlYWN0LWpzeC1kZXYtcnVudGltZS5lc20uanNcIlxuXHRcdFx0fSxcblx0XHRcdFwiZGVmYXVsdFwiOiBcIi4vanN4LWRldi1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuY2pzLmpzXCJcblx0XHR9LFxuXHRcdFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuXHRcdFwiLi90eXBlcy9jc3MtcHJvcFwiOiBcIi4vdHlwZXMvY3NzLXByb3AuZC50c1wiLFxuXHRcdFwiLi9tYWNyb1wiOiBcIi4vbWFjcm8uanNcIlxuXHR9LFxuXHR0eXBlczogXCJ0eXBlcy9pbmRleC5kLnRzXCIsXG5cdGZpbGVzOiBbXG5cdFx0XCJzcmNcIixcblx0XHRcImRpc3RcIixcblx0XHRcImpzeC1ydW50aW1lXCIsXG5cdFx0XCJqc3gtZGV2LXJ1bnRpbWVcIixcblx0XHRcIl9pc29sYXRlZC1obnJzXCIsXG5cdFx0XCJ0eXBlcy8qLmQudHNcIixcblx0XHRcIm1hY3JvLmpzXCIsXG5cdFx0XCJtYWNyby5kLnRzXCIsXG5cdFx0XCJtYWNyby5qcy5mbG93XCJcblx0XSxcblx0c2lkZUVmZmVjdHM6IGZhbHNlLFxuXHRhdXRob3I6IFwiRW1vdGlvbiBDb250cmlidXRvcnNcIixcblx0bGljZW5zZTogXCJNSVRcIixcblx0c2NyaXB0czoge1xuXHRcdFwidGVzdDp0eXBlc2NyaXB0XCI6IFwiZHRzbGludCB0eXBlc1wiXG5cdH0sXG5cdGRlcGVuZGVuY2llczoge1xuXHRcdFwiQGJhYmVsL3J1bnRpbWVcIjogXCJeNy4xOC4zXCIsXG5cdFx0XCJAZW1vdGlvbi9iYWJlbC1wbHVnaW5cIjogXCJeMTEuMTAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vY2FjaGVcIjogXCJeMTEuMTAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMS4wXCIsXG5cdFx0XCJAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrc1wiOiBcIl4xLjAuMFwiLFxuXHRcdFwiQGVtb3Rpb24vdXRpbHNcIjogXCJeMS4yLjBcIixcblx0XHRcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiOiBcIl4wLjMuMFwiLFxuXHRcdFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjogXCJeMy4zLjFcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjAuMFwiLFxuXHRcdHJlYWN0OiBcIj49MTYuOC4wXCJcblx0fSxcblx0cGVlckRlcGVuZGVuY2llc01ldGE6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fSxcblx0XHRcIkB0eXBlcy9yZWFjdFwiOiB7XG5cdFx0XHRvcHRpb25hbDogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGV2RGVwZW5kZW5jaWVzOiB7XG5cdFx0XCJAYmFiZWwvY29yZVwiOiBcIl43LjE4LjVcIixcblx0XHRcIkBkZWZpbml0ZWx5dHlwZWQvZHRzbGludFwiOiBcIjAuMC4xMTJcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjEwLjBcIixcblx0XHRcIkBlbW90aW9uL2Nzcy1wcmV0dGlmaWVyXCI6IFwiMS4xLjBcIixcblx0XHRcIkBlbW90aW9uL3NlcnZlclwiOiBcIjExLjEwLjBcIixcblx0XHRcIkBlbW90aW9uL3N0eWxlZFwiOiBcIjExLjEwLjRcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiLFxuXHRcdHR5cGVzY3JpcHQ6IFwiXjQuNS41XCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFpbi9wYWNrYWdlcy9yZWFjdFwiLFxuXHRwdWJsaXNoQ29uZmlnOiB7XG5cdFx0YWNjZXNzOiBcInB1YmxpY1wiXG5cdH0sXG5cdFwidW1kOm1haW5cIjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QudW1kLm1pbi5qc1wiLFxuXHRwcmVjb25zdHJ1Y3Q6IHtcblx0XHRlbnRyeXBvaW50czogW1xuXHRcdFx0XCIuL2luZGV4LmpzXCIsXG5cdFx0XHRcIi4vanN4LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9faXNvbGF0ZWQtaG5ycy5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiLFxuXHRcdGV4cG9ydHM6IHtcblx0XHRcdGVudkNvbmRpdGlvbnM6IFtcblx0XHRcdFx0XCJicm93c2VyXCIsXG5cdFx0XHRcdFwid29ya2VyXCJcblx0XHRcdF0sXG5cdFx0XHRleHRyYToge1xuXHRcdFx0XHRcIi4vdHlwZXMvY3NzLXByb3BcIjogXCIuL3R5cGVzL2Nzcy1wcm9wLmQudHNcIixcblx0XHRcdFx0XCIuL21hY3JvXCI6IFwiLi9tYWNyby5qc1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFlbW90aW9uRWxlbWVudC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IGVtb3Rpb25FbGVtZW50LkVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGVtb3Rpb25FbGVtZW50LmNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7IC8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWwgPSAvKiAjX19QVVJFX18gKi9lbW90aW9uRWxlbWVudC53aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplLnNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSwgdW5kZWZpbmVkLCBSZWFjdC51c2VDb250ZXh0KGVtb3Rpb25FbGVtZW50LlRoZW1lQ29udGV4dCkpO1xuXG4gIGlmICghZW1vdGlvbkVsZW1lbnQuaXNCcm93c2VyKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgc2VyaWFsaXplZE5hbWVzID0gc2VyaWFsaXplZC5uYW1lO1xuICAgIHZhciBzZXJpYWxpemVkU3R5bGVzID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gICAgdmFyIG5leHQgPSBzZXJpYWxpemVkLm5leHQ7XG5cbiAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXJpYWxpemVkTmFtZXMgKz0gJyAnICsgbmV4dC5uYW1lO1xuICAgICAgc2VyaWFsaXplZFN0eWxlcyArPSBuZXh0LnN0eWxlcztcbiAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZENhY2hlID0gY2FjaGUuY29tcGF0ID09PSB0cnVlO1xuICAgIHZhciBydWxlcyA9IGNhY2hlLmluc2VydChcIlwiLCB7XG4gICAgICBuYW1lOiBzZXJpYWxpemVkTmFtZXMsXG4gICAgICBzdHlsZXM6IHNlcmlhbGl6ZWRTdHlsZXNcbiAgICB9LCBjYWNoZS5zaGVldCwgc2hvdWxkQ2FjaGUpO1xuXG4gICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCAoX3JlZiA9IHt9LCBfcmVmW1wiZGF0YS1lbW90aW9uXCJdID0gY2FjaGUua2V5ICsgXCItZ2xvYmFsIFwiICsgc2VyaWFsaXplZE5hbWVzLCBfcmVmLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgX19odG1sOiBydWxlc1xuICAgIH0sIF9yZWYubm9uY2UgPSBjYWNoZS5zaGVldC5ub25jZSwgX3JlZikpO1xuICB9IC8vIHllcywgaSBrbm93IHRoZXNlIGhvb2tzIGFyZSB1c2VkIGNvbmRpdGlvbmFsbHlcbiAgLy8gYnV0IGl0IGlzIGJhc2VkIG9uIGEgY29uc3RhbnQgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSBhdCBydW50aW1lXG4gIC8vIGl0J3MgZWZmZWN0aXZlbHkgbGlrZSBoYXZpbmcgdHdvIGltcGxlbWVudGF0aW9ucyBhbmQgc3dpdGNoaW5nIHRoZW0gb3V0XG4gIC8vIHNvIGl0J3Mgbm90IGFjdHVhbGx5IGJyZWFraW5nIGFueXRoaW5nXG5cblxuICB2YXIgc2hlZXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aEZhbGxiYWNrcy51c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjsgLy8gdXNlIGNhc2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi9pc3N1ZXMvMjY3NVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IGNhY2hlLnNoZWV0LmNvbnN0cnVjdG9yKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgbm9uY2U6IGNhY2hlLnNoZWV0Lm5vbmNlLFxuICAgICAgY29udGFpbmVyOiBjYWNoZS5zaGVldC5jb250YWluZXIsXG4gICAgICBzcGVlZHk6IGNhY2hlLnNoZWV0LmlzU3BlZWR5XG4gICAgfSk7XG4gICAgdmFyIHJlaHlkcmF0aW5nID0gZmFsc2U7IC8vICRGbG93Rml4TWVcblxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbj1cXFwiXCIgKyBrZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAoY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlaHlkcmF0aW5nID0gdHJ1ZTsgLy8gY2xlYXIgdGhlIGhhc2ggc28gdGhpcyBub2RlIHdvbid0IGJlIHJlY29nbml6YWJsZSBhcyByZWh5ZHJhdGFibGUgYnkgb3RoZXIgPEdsb2JhbC8+c1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywga2V5KTtcbiAgICAgIHNoZWV0Lmh5ZHJhdGUoW25vZGVdKTtcbiAgICB9XG5cbiAgICBzaGVldFJlZi5jdXJyZW50ID0gW3NoZWV0LCByZWh5ZHJhdGluZ107XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfTtcbiAgfSwgW2NhY2hlXSk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhGYWxsYmFja3MudXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXRSZWZDdXJyZW50ID0gc2hlZXRSZWYuY3VycmVudDtcbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZkN1cnJlbnRbMF0sXG4gICAgICAgIHJlaHlkcmF0aW5nID0gc2hlZXRSZWZDdXJyZW50WzFdO1xuXG4gICAgaWYgKHJlaHlkcmF0aW5nKSB7XG4gICAgICBzaGVldFJlZkN1cnJlbnRbMV0gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIHV0aWxzLmluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHNoZWV0LnRhZ3Nbc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBzaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICBjYWNoZS5pbnNlcnQoXCJcIiwgc2VyaWFsaXplZCwgc2hlZXQsIGZhbHNlKTtcbiAgfSwgW2NhY2hlLCBzZXJpYWxpemVkLm5hbWVdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgR2xvYmFsLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25HbG9iYWwnO1xufVxuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplLnNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lOyAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnLnN0eWxlcyAhPT0gdW5kZWZpbmVkICYmIGFyZy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IGhhdmUgcGFzc2VkIHN0eWxlcyBjcmVhdGVkIHdpdGggYGNzc2AgZnJvbSBgQGVtb3Rpb24vcmVhY3RgIHBhY2thZ2UgdG8gdGhlIGBjeGAuXFxuJyArICdgY3hgIGlzIG1lYW50IHRvIGNvbXBvc2UgY2xhc3MgbmFtZXMgKHN0cmluZ3MpIHNvIHlvdSBzaG91bGQgY29udmVydCB0aG9zZSBzdHlsZXMgdG8gYSBjbGFzcyBuYW1lIGJ5IHBhc3NpbmcgdGhlbSB0byB0aGUgYGNzc2AgcmVjZWl2ZWQgZnJvbSA8Q2xhc3NOYW1lcy8+IGNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IHV0aWxzLmdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZEFyciA9IF9yZWYuc2VyaWFsaXplZEFycjtcbiAgdmFyIHJ1bGVzID0gdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aEZhbGxiYWNrcy51c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcnVsZXMgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHJlcyA9IHV0aWxzLmluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZEFycltpXSwgZmFsc2UpO1xuXG4gICAgICBpZiAoIWVtb3Rpb25FbGVtZW50LmlzQnJvd3NlciAmJiByZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBydWxlcyArPSByZXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlbW90aW9uRWxlbWVudC5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghZW1vdGlvbkVsZW1lbnQuaXNCcm93c2VyICYmIHJ1bGVzLmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIChfcmVmMiA9IHt9LCBfcmVmMltcImRhdGEtZW1vdGlvblwiXSA9IGNhY2hlLmtleSArIFwiIFwiICsgc2VyaWFsaXplZEFyci5tYXAoZnVuY3Rpb24gKHNlcmlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVkLm5hbWU7XG4gICAgfSkuam9pbignICcpLCBfcmVmMi5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgIF9faHRtbDogcnVsZXNcbiAgICB9LCBfcmVmMi5ub25jZSA9IGNhY2hlLnNoZWV0Lm5vbmNlLCBfcmVmMikpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2xhc3NOYW1lcyA9IC8qICNfX1BVUkVfXyAqL2Vtb3Rpb25FbGVtZW50LndpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcbiAgdmFyIHNlcmlhbGl6ZWRBcnIgPSBbXTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUuc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIHNlcmlhbGl6ZWRBcnIucHVzaChzZXJpYWxpemVkKTsgLy8gcmVnaXN0cmF0aW9uIGhhcyB0byBoYXBwZW4gaGVyZSBhcyB0aGUgcmVzdWx0IG9mIHRoaXMgbWlnaHQgZ2V0IGNvbnN1bWVkIGJ5IGBjeGBcblxuICAgIHV0aWxzLnJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBmYWxzZSk7XG4gICAgcmV0dXJuIGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB9O1xuXG4gIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICB9O1xuXG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNzczogY3NzLFxuICAgIGN4OiBjeCxcbiAgICB0aGVtZTogUmVhY3QudXNlQ29udGV4dChlbW90aW9uRWxlbWVudC5UaGVtZUNvbnRleHQpXG4gIH07XG4gIHZhciBlbGUgPSBwcm9wcy5jaGlsZHJlbihjb250ZW50KTtcbiAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkQXJyOiBzZXJpYWxpemVkQXJyXG4gIH0pLCBlbGUpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIENsYXNzTmFtZXMuZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNsYXNzTmFtZXMnO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaXNCcm93c2VyID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJzsgLy8gIzE3MjcgZm9yIHNvbWUgcmVhc29uIEplc3QgZXZhbHVhdGVzIG1vZHVsZXMgdHdpY2UgaWYgc29tZSBjb25zdW1pbmcgbW9kdWxlIGdldHMgbW9ja2VkIHdpdGggamVzdC5tb2NrXG5cbiAgdmFyIGlzSmVzdCA9IHR5cGVvZiBqZXN0ICE9PSAndW5kZWZpbmVkJztcblxuICBpZiAoaXNCcm93c2VyICYmICFpc0plc3QpIHtcbiAgICAvLyBnbG9iYWxUaGlzIGhhcyB3aWRlIGJyb3dzZXIgc3VwcG9ydCAtIGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1nbG9iYWxUaGlzLCBOb2RlLmpzIDEyIGFuZCBsYXRlclxuICAgIHZhciBnbG9iYWxDb250ZXh0ID0gLy8gJEZsb3dJZ25vcmVcbiAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgICA6IGlzQnJvd3NlciA/IHdpbmRvdyA6IGdsb2JhbDtcbiAgICB2YXIgZ2xvYmFsS2V5ID0gXCJfX0VNT1RJT05fUkVBQ1RfXCIgKyBwa2cudmVyc2lvbi5zcGxpdCgnLicpWzBdICsgXCJfX1wiO1xuXG4gICAgaWYgKGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSkge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgYXJlIGxvYWRpbmcgQGVtb3Rpb24vcmVhY3Qgd2hlbiBpdCBpcyBhbHJlYWR5IGxvYWRlZC4gUnVubmluZyAnICsgJ211bHRpcGxlIGluc3RhbmNlcyBtYXkgY2F1c2UgcHJvYmxlbXMuIFRoaXMgY2FuIGhhcHBlbiBpZiBtdWx0aXBsZSAnICsgJ3ZlcnNpb25zIGFyZSB1c2VkLCBvciBpZiBtdWx0aXBsZSBidWlsZHMgb2YgdGhlIHNhbWUgdmVyc2lvbiBhcmUgJyArICd1c2VkLicpO1xuICAgIH1cblxuICAgIGdsb2JhbENvbnRleHRbZ2xvYmFsS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0cy5DYWNoZVByb3ZpZGVyID0gZW1vdGlvbkVsZW1lbnQuQ2FjaGVQcm92aWRlcjtcbmV4cG9ydHMuVGhlbWVDb250ZXh0ID0gZW1vdGlvbkVsZW1lbnQuVGhlbWVDb250ZXh0O1xuZXhwb3J0cy5UaGVtZVByb3ZpZGVyID0gZW1vdGlvbkVsZW1lbnQuVGhlbWVQcm92aWRlcjtcbmV4cG9ydHMuX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlID0gZW1vdGlvbkVsZW1lbnQuX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlO1xuZXhwb3J0cy51c2VUaGVtZSA9IGVtb3Rpb25FbGVtZW50LnVzZVRoZW1lO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd3aXRoRW1vdGlvbkNhY2hlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW1vdGlvbkVsZW1lbnQud2l0aEVtb3Rpb25DYWNoZTtcbiAgfVxufSk7XG5leHBvcnRzLndpdGhUaGVtZSA9IGVtb3Rpb25FbGVtZW50LndpdGhUaGVtZTtcbmV4cG9ydHMuQ2xhc3NOYW1lcyA9IENsYXNzTmFtZXM7XG5leHBvcnRzLkdsb2JhbCA9IEdsb2JhbDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGpzeDtcbmV4cG9ydHMuY3NzID0gY3NzO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmtleWZyYW1lcyA9IGtleWZyYW1lcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tcmVhY3QuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2Vtb3Rpb24tcmVhY3QuY2pzLmRldi5qc1wiKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMsIGNzcyBhcyBjc3MkMiwgQ2xhc3NOYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5JDEgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxudmFyIF9leGNsdWRlZCQzID0gW1wiY2xhc3NOYW1lXCIsIFwiY2xlYXJWYWx1ZVwiLCBcImN4XCIsIFwiZ2V0U3R5bGVzXCIsIFwiZ2V0VmFsdWVcIiwgXCJoYXNWYWx1ZVwiLCBcImlzTXVsdGlcIiwgXCJpc1J0bFwiLCBcIm9wdGlvbnNcIiwgXCJzZWxlY3RPcHRpb25cIiwgXCJzZWxlY3RQcm9wc1wiLCBcInNldFZhbHVlXCIsIFwidGhlbWVcIl07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5PIE9QXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuLy8gQ2xhc3MgTmFtZSBQcmVmaXhlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBjb21wb25lbnQgc3RhdGUgZm9yIHN0eWxpbmcgd2l0aCBjbGFzcyBuYW1lcy5cblxuIEV4cGVjdHMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBPUiBhIHN0cmluZy9vYmplY3QgcGFpcjpcbiAtIGNsYXNzTmFtZShbJ2NvbXAnLCAnY29tcC1hcmcnLCAnY29tcC1hcmctMiddKVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtYXJnIHJlYWN0LXNlbGVjdF9fY29tcC1hcmctMidcbiAtIGNsYXNzTmFtZSgnY29tcCcsIHsgc29tZTogdHJ1ZSwgc3RhdGU6IGZhbHNlIH0pXG4gICBAcmV0dXJucyAncmVhY3Qtc2VsZWN0X19jb21wIHJlYWN0LXNlbGVjdF9fY29tcC0tc29tZSdcbiovXG5cbmZ1bmN0aW9uIGFwcGx5UHJlZml4VG9OYW1lKHByZWZpeCwgbmFtZSkge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gcHJlZml4O1xuICB9IGVsc2UgaWYgKG5hbWVbMF0gPT09ICctJykge1xuICAgIHJldHVybiBwcmVmaXggKyBuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyAnX18nICsgbmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGFzc05hbWVzKHByZWZpeCwgc3RhdGUsIGNsYXNzTmFtZSkge1xuICB2YXIgYXJyID0gW2NsYXNzTmFtZV07XG5cbiAgaWYgKHN0YXRlICYmIHByZWZpeCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkgJiYgc3RhdGVba2V5XSkge1xuICAgICAgICBhcnIucHVzaChcIlwiLmNvbmNhdChhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIGtleSkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpO1xuICB9KS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gU3RyaW5nKGkpLnRyaW0oKTtcbiAgfSkuam9pbignICcpO1xufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIFZhbHVlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuVmFsdWUgPSBmdW5jdGlvbiBjbGVhblZhbHVlKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmZpbHRlcihCb29sZWFuKTtcbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgcmV0dXJuIFt2YWx1ZV07XG4gIHJldHVybiBbXTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ2xlYW4gQ29tbW9uIFByb3BzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNsZWFuQ29tbW9uUHJvcHMgPSBmdW5jdGlvbiBjbGVhbkNvbW1vblByb3BzKHByb3BzKSB7XG4gIC8vY2xhc3NOYW1lXG4gIHByb3BzLmNsYXNzTmFtZTtcbiAgICAgIHByb3BzLmNsZWFyVmFsdWU7XG4gICAgICBwcm9wcy5jeDtcbiAgICAgIHByb3BzLmdldFN0eWxlcztcbiAgICAgIHByb3BzLmdldFZhbHVlO1xuICAgICAgcHJvcHMuaGFzVmFsdWU7XG4gICAgICBwcm9wcy5pc011bHRpO1xuICAgICAgcHJvcHMuaXNSdGw7XG4gICAgICBwcm9wcy5vcHRpb25zO1xuICAgICAgcHJvcHMuc2VsZWN0T3B0aW9uO1xuICAgICAgcHJvcHMuc2VsZWN0UHJvcHM7XG4gICAgICBwcm9wcy5zZXRWYWx1ZTtcbiAgICAgIHByb3BzLnRoZW1lO1xuICAgICAgdmFyIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCQzKTtcblxuICByZXR1cm4gX29iamVjdFNwcmVhZDIoe30sIGlubmVyUHJvcHMpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIYW5kbGUgSW5wdXQgQ2hhbmdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwgYWN0aW9uTWV0YSwgb25JbnB1dENoYW5nZSkge1xuICBpZiAob25JbnB1dENoYW5nZSkge1xuICAgIHZhciBfbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuXG4gICAgaWYgKHR5cGVvZiBfbmV3VmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gX25ld1ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGlucHV0VmFsdWU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2Nyb2xsIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudChlbCkge1xuICByZXR1cm4gW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgd2luZG93XS5pbmRleE9mKGVsKSA+IC0xO1xufSAvLyBOb3JtYWxpemVkIFNjcm9sbCBUb3Bcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBub3JtYWxpemVkSGVpZ2h0KGVsKSB7XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIGVsLmNsaWVudEhlaWdodDtcbn0gLy8gTm9ybWFsaXplZCBzY3JvbGxUbyAmIHNjcm9sbFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBlbC5zY3JvbGxUb3A7XG59XG5mdW5jdGlvbiBzY3JvbGxUbyhlbCwgdG9wKSB7XG4gIC8vIHdpdGggYSBzY3JvbGwgZGlzdGFuY2UsIHdlIHBlcmZvcm0gc2Nyb2xsIG9uIHRoZSBlbGVtZW50XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59IC8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICBmb3IgKHZhciBwYXJlbnQgPSBlbGVtZW50OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDspIHtcbiAgICBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcblxuICAgIGlmIChleGNsdWRlU3RhdGljUGFyZW50ICYmIHN0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93UngudGVzdChzdHlsZS5vdmVyZmxvdyArIHN0eWxlLm92ZXJmbG93WSArIHN0eWxlLm92ZXJmbG93WCkpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn0gLy8gQW5pbWF0ZWQgU2Nyb2xsIFRvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gIEBwYXJhbSB0OiB0aW1lIChlbGFwc2VkKVxuICBAcGFyYW0gYjogaW5pdGlhbCB2YWx1ZVxuICBAcGFyYW0gYzogYW1vdW50IG9mIGNoYW5nZVxuICBAcGFyYW0gZDogZHVyYXRpb25cbiovXG5cbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlZFNjcm9sbFRvKGVsZW1lbnQsIHRvKSB7XG4gIHZhciBkdXJhdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMjAwO1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG5vb3A7XG4gIHZhciBzdGFydCA9IGdldFNjcm9sbFRvcChlbGVtZW50KTtcbiAgdmFyIGNoYW5nZSA9IHRvIC0gc3RhcnQ7XG4gIHZhciBpbmNyZW1lbnQgPSAxMDtcbiAgdmFyIGN1cnJlbnRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCkge1xuICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcbiAgICB2YXIgdmFsID0gZWFzZU91dEN1YmljKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG4gICAgc2Nyb2xsVG8oZWxlbWVudCwgdmFsKTtcblxuICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhbmltYXRlU2Nyb2xsKCk7XG59IC8vIFNjcm9sbCBJbnRvIFZpZXdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhtZW51RWwsIGZvY3VzZWRFbCkge1xuICB2YXIgbWVudVJlY3QgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBmb2N1c2VkUmVjdCA9IGZvY3VzZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIG92ZXJTY3JvbGwgPSBmb2N1c2VkRWwub2Zmc2V0SGVpZ2h0IC8gMztcblxuICBpZiAoZm9jdXNlZFJlY3QuYm90dG9tICsgb3ZlclNjcm9sbCA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgIHNjcm9sbFRvKG1lbnVFbCwgTWF0aC5taW4oZm9jdXNlZEVsLm9mZnNldFRvcCArIGZvY3VzZWRFbC5jbGllbnRIZWlnaHQgLSBtZW51RWwub2Zmc2V0SGVpZ2h0ICsgb3ZlclNjcm9sbCwgbWVudUVsLnNjcm9sbEhlaWdodCkpO1xuICB9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCAtIG92ZXJTY3JvbGwgPCBtZW51UmVjdC50b3ApIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWF4KGZvY3VzZWRFbC5vZmZzZXRUb3AgLSBvdmVyU2Nyb2xsLCAwKSk7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHZXQgYm91bmRpbmcgY2xpZW50IG9iamVjdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBjYW5ub3QgZ2V0IGtleXMgdXNpbmcgYXJyYXkgbm90YXRpb24gd2l0aCBET01SZWN0XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50T2JqKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC53aWR0aFxuICB9O1xufVxuLy8gVG91Y2ggQ2FwYWJpbGl0eSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzVG91Y2hDYXBhYmxlKCkge1xuICB0cnkge1xuICAgIGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2JpbGUgRGV2aWNlIERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBhc3NpdmUgRXZlbnQgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhZmdyYXBoL2RldGVjdC1pdC9ibG9iL21haW4vc3JjL2luZGV4LnRzI0wxOS1MMzZcblxudmFyIHBhc3NpdmVPcHRpb25BY2Nlc3NlZCA9IGZhbHNlO1xudmFyIG9wdGlvbnMgPSB7XG4gIGdldCBwYXNzaXZlKCkge1xuICAgIHJldHVybiBwYXNzaXZlT3B0aW9uQWNjZXNzZWQgPSB0cnVlO1xuICB9XG5cbn07IC8vIGNoZWNrIGZvciBTU1JcblxudmFyIHcgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuXG5pZiAody5hZGRFdmVudExpc3RlbmVyICYmIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3AnLCBub29wLCBvcHRpb25zKTtcbiAgdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwJywgbm9vcCwgZmFsc2UpO1xufVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlRXZlbnRzID0gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkO1xuZnVuY3Rpb24gbm90TnVsbGlzaChpdGVtKSB7XG4gIHJldHVybiBpdGVtICE9IG51bGw7XG59XG5mdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xufVxuZnVuY3Rpb24gdmFsdWVUZXJuYXJ5KGlzTXVsdGksIG11bHRpVmFsdWUsIHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBpc011bHRpID8gbXVsdGlWYWx1ZSA6IHNpbmdsZVZhbHVlO1xufVxuZnVuY3Rpb24gc2luZ2xlVmFsdWVBc1ZhbHVlKHNpbmdsZVZhbHVlKSB7XG4gIHJldHVybiBzaW5nbGVWYWx1ZTtcbn1cbmZ1bmN0aW9uIG11bHRpVmFsdWVBc1ZhbHVlKG11bHRpVmFsdWUpIHtcbiAgcmV0dXJuIG11bHRpVmFsdWU7XG59XG52YXIgcmVtb3ZlUHJvcHMgPSBmdW5jdGlvbiByZW1vdmVQcm9wcyhwcm9wc09iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcHJvcHNNYXAgPSBPYmplY3QuZW50cmllcyhwcm9wc09iaikuZmlsdGVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMSksXG4gICAgICAgIGtleSA9IF9yZWYyWzBdO1xuXG4gICAgcmV0dXJuICFwcm9wZXJ0aWVzLmluY2x1ZGVzKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcHJvcHNNYXAucmVkdWNlKGZ1bmN0aW9uIChuZXdQcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICAgIGtleSA9IF9yZWY0WzBdLFxuICAgICAgICB2YWwgPSBfcmVmNFsxXTtcblxuICAgIG5ld1Byb3BzW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG5ld1Byb3BzO1xuICB9LCB7fSk7XG59O1xuXG5mdW5jdGlvbiBnZXRNZW51UGxhY2VtZW50KF9yZWYpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWYubWF4SGVpZ2h0LFxuICAgICAgbWVudUVsID0gX3JlZi5tZW51RWwsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmLm1pbkhlaWdodCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgc2hvdWxkU2Nyb2xsID0gX3JlZi5zaG91bGRTY3JvbGwsXG4gICAgICBpc0ZpeGVkUG9zaXRpb24gPSBfcmVmLmlzRml4ZWRQb3NpdGlvbixcbiAgICAgIHRoZW1lID0gX3JlZi50aGVtZTtcbiAgdmFyIHNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nO1xuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KG1lbnVFbCk7XG4gIHZhciBkZWZhdWx0U3RhdGUgPSB7XG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICB9OyAvLyBzb21ldGhpbmcgd2VudCB3cm9uZywgcmV0dXJuIGRlZmF1bHQgc3RhdGVcblxuICBpZiAoIW1lbnVFbCB8fCAhbWVudUVsLm9mZnNldFBhcmVudCkgcmV0dXJuIGRlZmF1bHRTdGF0ZTsgLy8gd2UgY2FuJ3QgdHJ1c3QgYHNjcm9sbFBhcmVudC5zY3JvbGxIZWlnaHRgIC0tPiBpdCBtYXkgaW5jcmVhc2Ugd2hlblxuICAvLyB0aGUgbWVudSBpcyByZW5kZXJlZFxuXG4gIHZhciBfc2Nyb2xsUGFyZW50JGdldEJvdW4gPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBzY3JvbGxIZWlnaHQgPSBfc2Nyb2xsUGFyZW50JGdldEJvdW4uaGVpZ2h0O1xuXG4gIHZhciBfbWVudUVsJGdldEJvdW5kaW5nQ2wgPSBtZW51RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBtZW51Qm90dG9tID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmJvdHRvbSxcbiAgICAgIG1lbnVIZWlnaHQgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wuaGVpZ2h0LFxuICAgICAgbWVudVRvcCA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC50b3A7XG5cbiAgdmFyIF9tZW51RWwkb2Zmc2V0UGFyZW50JCA9IG1lbnVFbC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjb250YWluZXJUb3AgPSBfbWVudUVsJG9mZnNldFBhcmVudCQudG9wO1xuXG4gIHZhciB2aWV3SGVpZ2h0ID0gaXNGaXhlZFBvc2l0aW9uID8gd2luZG93LmlubmVySGVpZ2h0IDogbm9ybWFsaXplZEhlaWdodChzY3JvbGxQYXJlbnQpO1xuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKHNjcm9sbFBhcmVudCk7XG4gIHZhciBtYXJnaW5Cb3R0b20gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luQm90dG9tLCAxMCk7XG4gIHZhciBtYXJnaW5Ub3AgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG1lbnVFbCkubWFyZ2luVG9wLCAxMCk7XG4gIHZhciB2aWV3U3BhY2VBYm92ZSA9IGNvbnRhaW5lclRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHZpZXdTcGFjZUJlbG93ID0gdmlld0hlaWdodCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUFib3ZlID0gdmlld1NwYWNlQWJvdmUgKyBzY3JvbGxUb3A7XG4gIHZhciBzY3JvbGxTcGFjZUJlbG93ID0gc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wIC0gbWVudVRvcDtcbiAgdmFyIHNjcm9sbERvd24gPSBtZW51Qm90dG9tIC0gdmlld0hlaWdodCArIHNjcm9sbFRvcCArIG1hcmdpbkJvdHRvbTtcbiAgdmFyIHNjcm9sbFVwID0gc2Nyb2xsVG9wICsgbWVudVRvcCAtIG1hcmdpblRvcDtcbiAgdmFyIHNjcm9sbER1cmF0aW9uID0gMTYwO1xuXG4gIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgY2FzZSAnYXV0byc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQmVsb3cgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG5cblxuICAgICAgaWYgKHNjcm9sbFNwYWNlQmVsb3cgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuXG5cbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQmVsb3cgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VCZWxvdyA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxEb3duLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH0gLy8gd2Ugd2FudCB0byBwcm92aWRlIGFzIG11Y2ggb2YgdGhlIG1lbnUgYXMgcG9zc2libGUgdG8gdGhlIHVzZXIsXG4gICAgICAgIC8vIHNvIGdpdmUgdGhlbSB3aGF0ZXZlciBpcyBhdmFpbGFibGUgYmVsb3cgcmF0aGVyIHRoYW4gdGhlIG1pbkhlaWdodC5cblxuXG4gICAgICAgIHZhciBjb25zdHJhaW5lZEhlaWdodCA9IGlzRml4ZWRQb3NpdGlvbiA/IHZpZXdTcGFjZUJlbG93IC0gbWFyZ2luQm90dG9tIDogc2Nyb2xsU3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gNC4gRm9ya2VkIGJldmlvdXIgd2hlbiB0aGVyZSBpc24ndCBlbm91Z2ggc3BhY2UgYmVsb3dcbiAgICAgIC8vIEFVVE86IGZsaXAgdGhlIG1lbnUsIHJlbmRlciBhYm92ZVxuXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdhdXRvJyB8fCBpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gbWF5IG5lZWQgdG8gYmUgY29uc3RyYWluZWQgYWZ0ZXIgZmxpcHBpbmdcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgICAgdmFyIHNwYWNlQWJvdmUgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSA6IHNjcm9sbFNwYWNlQWJvdmU7XG5cbiAgICAgICAgaWYgKHNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgICAgX2NvbnN0cmFpbmVkSGVpZ2h0ID0gTWF0aC5taW4oc3BhY2VBYm92ZSAtIG1hcmdpbkJvdHRvbSAtIHNwYWNpbmcuY29udHJvbEhlaWdodCwgbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IF9jb25zdHJhaW5lZEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyBCT1RUT006IGFsbG93IGJyb3dzZXIgdG8gaW5jcmVhc2Ugc2Nyb2xsYWJsZSBhcmVhIGFuZCBpbW1lZGlhdGVseSBzZXQgc2Nyb2xsXG5cblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIHNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93bik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b3AnOlxuICAgICAgLy8gMTogdGhlIG1lbnUgd2lsbCBmaXQsIGRvIG5vdGhpbmdcbiAgICAgIGlmICh2aWV3U3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAyOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgc2Nyb2xsZWRcblxuXG4gICAgICBpZiAoc2Nyb2xsU3BhY2VBYm92ZSA+PSBtZW51SGVpZ2h0ICYmICFpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDM6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBjb25zdHJhaW5lZFxuXG5cbiAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgdmFyIF9jb25zdHJhaW5lZEhlaWdodDIgPSBtYXhIZWlnaHQ7IC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG5cbiAgICAgICAgaWYgKCFpc0ZpeGVkUG9zaXRpb24gJiYgc2Nyb2xsU3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQgfHwgaXNGaXhlZFBvc2l0aW9uICYmIHZpZXdTcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodDIgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VBYm92ZSAtIG1hcmdpblRvcCA6IHNjcm9sbFNwYWNlQWJvdmUgLSBtYXJnaW5Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbFVwLCBzY3JvbGxEdXJhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHQyXG4gICAgICAgIH07XG4gICAgICB9IC8vIDQuIG5vdCBlbm91Z2ggc3BhY2UsIHRoZSBicm93c2VyIFdJTEwgTk9UIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSB3aGVuXG4gICAgICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgZWxlbWVudCByZW5kZXJlZCBhYm92ZSB0aGUgdmlld3BvcnQgKG9ubHkgYmVsb3cpLlxuICAgICAgLy8gRmxpcCB0aGUgbWVudSwgcmVuZGVyIGJlbG93XG5cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwbGFjZW1lbnQgcHJvdmlkZWQgXFxcIlwiLmNvbmNhdChwbGFjZW1lbnQsIFwiXFxcIi5cIikpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRTdGF0ZTtcbn0gLy8gTWVudSBDb21wb25lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpIHtcbiAgdmFyIHBsYWNlbWVudFRvQ1NTUHJvcCA9IHtcbiAgICBib3R0b206ICd0b3AnLFxuICAgIHRvcDogJ2JvdHRvbSdcbiAgfTtcbiAgcmV0dXJuIHBsYWNlbWVudCA/IHBsYWNlbWVudFRvQ1NTUHJvcFtwbGFjZW1lbnRdIDogJ2JvdHRvbSc7XG59XG5cbnZhciBjb2VyY2VQbGFjZW1lbnQgPSBmdW5jdGlvbiBjb2VyY2VQbGFjZW1lbnQocCkge1xuICByZXR1cm4gcCA9PT0gJ2F1dG8nID8gJ2JvdHRvbScgOiBwO1xufTtcblxudmFyIG1lbnVDU1MgPSBmdW5jdGlvbiBtZW51Q1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMztcblxuICB2YXIgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgX3JlZjIkdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYyJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX3JlZjMgPSB7XG4gICAgbGFiZWw6ICdtZW51J1xuICB9LCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgYWxpZ25Ub0NvbnRyb2wocGxhY2VtZW50KSwgJzEwMCUnKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwiYmFja2dyb3VuZENvbG9yXCIsIGNvbG9ycy5uZXV0cmFsMCksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcImJvcmRlclJhZGl1c1wiLCBib3JkZXJSYWRpdXMpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJib3hTaGFkb3dcIiwgJzAgMCAwIDFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKSwgMCA0cHggMTFweCBoc2xhKDAsIDAlLCAwJSwgMC4xKScpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJtYXJnaW5Cb3R0b21cIiwgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwibWFyZ2luVG9wXCIsIHNwYWNpbmcubWVudUd1dHRlciksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcInBvc2l0aW9uXCIsICdhYnNvbHV0ZScpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJ3aWR0aFwiLCAnMTAwJScpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJ6SW5kZXhcIiwgMSksIF9yZWYzO1xufTtcbnZhciBQb3J0YWxQbGFjZW1lbnRDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoe1xuICBnZXRQb3J0YWxQbGFjZW1lbnQ6IG51bGxcbn0pOyAvLyBOT1RFOiBpbnRlcm5hbCBvbmx5XG5cbnZhciBNZW51UGxhY2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNZW51UGxhY2VyLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1lbnVQbGFjZXIpO1xuXG4gIGZ1bmN0aW9uIE1lbnVQbGFjZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQbGFjZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1heEhlaWdodDogX3RoaXMucHJvcHMubWF4TWVudUhlaWdodCxcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG4gICAgX3RoaXMuY29udGV4dCA9IHZvaWQgMDtcblxuICAgIF90aGlzLmdldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcbiAgICAgIGlmICghcmVmKSByZXR1cm47IC8vIERPIE5PVCBzY3JvbGwgaWYgcG9zaXRpb24gaXMgZml4ZWRcblxuICAgICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgIWlzRml4ZWRQb3NpdGlvbjtcbiAgICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVFbDogcmVmLFxuICAgICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgc2hvdWxkU2Nyb2xsOiBzaG91bGRTY3JvbGwsXG4gICAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGdldFBvcnRhbFBsYWNlbWVudCA9IF90aGlzLmNvbnRleHQuZ2V0UG9ydGFsUGxhY2VtZW50O1xuICAgICAgaWYgKGdldFBvcnRhbFBsYWNlbWVudCkgZ2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRVcGRhdGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudVBsYWNlbWVudCA9IF90aGlzLnByb3BzLm1lbnVQbGFjZW1lbnQ7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3RoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX3RoaXMucHJvcHMpLCB7fSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5zdGF0ZS5tYXhIZWlnaHRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWVudVBsYWNlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICByZWY6IHRoaXMuZ2V0UGxhY2VtZW50LFxuICAgICAgICBwbGFjZXJQcm9wczogdGhpcy5nZXRVcGRhdGVkUHJvcHMoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVQbGFjZXI7XG59KENvbXBvbmVudCk7XG5NZW51UGxhY2VyLmNvbnRleHRUeXBlID0gUG9ydGFsUGxhY2VtZW50Q29udGV4dDtcblxudmFyIE1lbnUgPSBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnUnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBtZW51OiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjQpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY0Lm1heEhlaWdodCxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQudGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwYWRkaW5nQm90dG9tOiBiYXNlVW5pdCxcbiAgICBwYWRkaW5nVG9wOiBiYXNlVW5pdCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyByZXF1aXJlZCBmb3Igb2Zmc2V0W0hlaWdodCwgVG9wXSA+IGtleWJvYXJkIHNjcm9sbFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH07XG59O1xudmFyIE1lbnVMaXN0ID0gZnVuY3Rpb24gTWVudUxpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICAgJ21lbnUtbGlzdC0taXMtbXVsdGknOiBpc011bHRpXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgTm90aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub3RpY2VDU1MgPSBmdW5jdGlvbiBub3RpY2VDU1MoX3JlZjUpIHtcbiAgdmFyIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY1JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfTtcbn07XG5cbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbm9PcHRpb25zTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbk5vT3B0aW9uc01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ05vIG9wdGlvbnMnXG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLWxvYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbkxvYWRpbmdNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IFBvcnRhbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBtZW51UG9ydGFsQ1NTID0gZnVuY3Rpb24gbWVudVBvcnRhbENTUyhfcmVmNikge1xuICB2YXIgcmVjdCA9IF9yZWY2LnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQsXG4gICAgICBwb3NpdGlvbiA9IF9yZWY2LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhNZW51UG9ydGFsLCBfQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoTWVudVBvcnRhbCk7XG5cbiAgZnVuY3Rpb24gTWVudVBvcnRhbCgpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQb3J0YWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjcucGxhY2VtZW50O1xuICAgICAgdmFyIGluaXRpYWxQbGFjZW1lbnQgPSBjb2VyY2VQbGFjZW1lbnQoX3RoaXMyLnByb3BzLm1lbnVQbGFjZW1lbnQpOyAvLyBhdm9pZCByZS1yZW5kZXJzIGlmIHRoZSBwbGFjZW1lbnQgaGFzIG5vdCBjaGFuZ2VkXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UG9ydGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwZW5kVG8gPSBfdGhpcyRwcm9wczIuYXBwZW5kVG8sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb250cm9sRWxlbWVudCA9IF90aGlzJHByb3BzMi5jb250cm9sRWxlbWVudCxcbiAgICAgICAgICBjeCA9IF90aGlzJHByb3BzMi5jeCxcbiAgICAgICAgICBpbm5lclByb3BzID0gX3RoaXMkcHJvcHMyLmlubmVyUHJvcHMsXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMi5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIHBvc2l0aW9uID0gX3RoaXMkcHJvcHMyLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBnZXRTdHlsZXMgPSBfdGhpcyRwcm9wczIuZ2V0U3R5bGVzO1xuICAgICAgdmFyIGlzRml4ZWQgPSBwb3NpdGlvbiA9PT0gJ2ZpeGVkJzsgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuXG4gICAgICBpZiAoIWFwcGVuZFRvICYmICFpc0ZpeGVkIHx8ICFjb250cm9sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgICAgdmFyIHNjcm9sbERpc3RhbmNlID0gaXNGaXhlZCA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB2YXIgb2Zmc2V0ID0gcmVjdFtwbGFjZW1lbnRdICsgc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgIH07IC8vIHNhbWUgd3JhcHBlciBlbGVtZW50IHdoZXRoZXIgZml4ZWQgb3IgcG9ydGFsbGVkXG5cbiAgICAgIHZhciBtZW51V3JhcHBlciA9IGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNzczogZ2V0U3R5bGVzKCdtZW51UG9ydGFsJywgc3RhdGUpLFxuICAgICAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICAgICAnbWVudS1wb3J0YWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG4gICAgICByZXR1cm4ganN4KFBvcnRhbFBsYWNlbWVudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBnZXRQb3J0YWxQbGFjZW1lbnQ6IHRoaXMuZ2V0UG9ydGFsUGxhY2VtZW50XG4gICAgICAgIH1cbiAgICAgIH0sIGFwcGVuZFRvID8gLyojX19QVVJFX18qL2NyZWF0ZVBvcnRhbChtZW51V3JhcHBlciwgYXBwZW5kVG8pIDogbWVudVdyYXBwZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51UG9ydGFsO1xufShDb21wb25lbnQpO1xuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IF9yZWYuaXNSdGw7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250YWluZXInLFxuICAgIGRpcmVjdGlvbjogaXNSdGwgPyAncnRsJyA6IHVuZGVmaW5lZCxcbiAgICBwb2ludGVyRXZlbnRzOiBpc0Rpc2FibGVkID8gJ25vbmUnIDogdW5kZWZpbmVkLFxuICAgIC8vIGNhbmNlbCBtb3VzZSBldmVudHMgd2hlbiBkaXNhYmxlZFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH07XG59O1xudmFyIFNlbGVjdENvbnRhaW5lciA9IGZ1bmN0aW9uIFNlbGVjdENvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bDtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICctLWlzLWRpc2FibGVkJzogaXNEaXNhYmxlZCxcbiAgICAgICctLWlzLXJ0bCc6IGlzUnRsXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWYWx1ZSBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgdmFsdWVDb250YWluZXJDU1MgPSBmdW5jdGlvbiB2YWx1ZUNvbnRhaW5lckNTUyhfcmVmMikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmcsXG4gICAgICBpc011bHRpID0gX3JlZjIuaXNNdWx0aSxcbiAgICAgIGhhc1ZhbHVlID0gX3JlZjIuaGFzVmFsdWUsXG4gICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPSBfcmVmMi5zZWxlY3RQcm9wcy5jb250cm9sU2hvdWxkUmVuZGVyVmFsdWU7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogaXNNdWx0aSAmJiBoYXNWYWx1ZSAmJiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUgPyAnZmxleCcgOiAnZ3JpZCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgLyAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHhcIiksXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGhhc1ZhbHVlID0gcHJvcHMuaGFzVmFsdWU7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCd2YWx1ZUNvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taGFzLXZhbHVlJzogaGFzVmFsdWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGljYXRvciBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvcnNDb250YWluZXJDU1MoKSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yc0NvbnRhaW5lciA9IGZ1bmN0aW9uIEluZGljYXRvcnNDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdpbmRpY2F0b3JzQ29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yczogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG5cbnZhciBfZXhjbHVkZWQkMiA9IFtcInNpemVcIl07XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjhtbWtjZ1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowXCJcbn0gOiB7XG4gIG5hbWU6IFwidGo1YmRlLVN2Z1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO2xhYmVsOlN2ZztcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhkQ1NTSXNJbVpwYkdVaU9pSnBibVJwWTJGMGIzSnpMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1VtVmhZM1JPYjJSbElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ2FuTjRMQ0JyWlhsbWNtRnRaWE1nZlNCbWNtOXRJQ2RBWlcxdmRHbHZiaTl5WldGamRDYzdYRzVjYm1sdGNHOXlkQ0I3WEc0Z0lFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsTEZ4dUlDQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd3NYRzRnSUVkeWIzVndRbUZ6WlN4Y2JuMGdabkp2YlNBbkxpNHZkSGx3WlhNbk8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnU1dOdmJuTmNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVYRzVqYjI1emRDQlRkbWNnUFNBb2UxeHVJQ0J6YVhwbExGeHVJQ0F1TGk1d2NtOXdjMXh1ZlRvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6ZG1jblhTQW1JSHNnYzJsNlpUb2diblZ0WW1WeUlIMHBJRDArSUNoY2JpQWdQSE4yWjF4dUlDQWdJR2hsYVdkb2REMTdjMmw2WlgxY2JpQWdJQ0IzYVdSMGFEMTdjMmw2WlgxY2JpQWdJQ0IyYVdWM1FtOTRQVndpTUNBd0lESXdJREl3WENKY2JpQWdJQ0JoY21saExXaHBaR1JsYmoxY0luUnlkV1ZjSWx4dUlDQWdJR1p2WTNWellXSnNaVDFjSW1aaGJITmxYQ0pjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdabWxzYkRvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0FnSUNBZ2MzUnliMnRsT2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJSE4wY205clpWZHBaSFJvT2lBd0xGeHVJQ0FnSUgxOVhHNGdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQXZQbHh1S1R0Y2JseHVaWGh3YjNKMElIUjVjR1VnUTNKdmMzTkpZMjl1VUhKdmNITWdQU0JLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkozTjJaeWRkSUNZZ2V5QnphWHBsUHpvZ2JuVnRZbVZ5SUgwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnUTNKdmMzTkpZMjl1SUQwZ0tIQnliM0J6T2lCRGNtOXpjMGxqYjI1UWNtOXdjeWtnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5NVFF1TXpRNElERTBMamcwT1dNdE1DNDBOamtnTUM0ME5qa3RNUzR5TWprZ01DNDBOamt0TVM0Mk9UY2dNR3d0TWk0Mk5URXRNeTR3TXpBdE1pNDJOVEVnTXk0d01qbGpMVEF1TkRZNUlEQXVORFk1TFRFdU1qSTVJREF1TkRZNUxURXVOamszSURBdE1DNDBOamt0TUM0ME5qa3RNQzQwTmprdE1TNHlNamtnTUMweExqWTVOMnd5TGpjMU9DMHpMakUxTFRJdU56VTVMVE11TVRVeVl5MHdMalEyT1Mwd0xqUTJPUzB3TGpRMk9TMHhMakl5T0NBd0xURXVOamszY3pFdU1qSTRMVEF1TkRZNUlERXVOamszSURCc01pNDJOVElnTXk0d016RWdNaTQyTlRFdE15NHdNekZqTUM0ME5qa3RNQzQwTmprZ01TNHlNamd0TUM0ME5qa2dNUzQyT1RjZ01ITXdMalEyT1NBeExqSXlPU0F3SURFdU5qazNiQzB5TGpjMU9DQXpMakUxTWlBeUxqYzFPQ0F6TGpFMVl6QXVORFk1SURBdU5EWTVJREF1TkRZNUlERXVNakk1SURBZ01TNDJPVGg2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVpYaHdiM0owSUhSNWNHVWdSRzkzYmtOb1pYWnliMjVRY205d2N5QTlJRXBUV0M1SmJuUnlhVzV6YVdORmJHVnRaVzUwYzFzbmMzWm5KMTBnSmlCN0lITnBlbVUvT2lCdWRXMWlaWElnZlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFYjNkdVEyaGxkbkp2YmlBOUlDaHdjbTl3Y3pvZ1JHOTNia05vWlhaeWIyNVFjbTl3Y3lrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTkM0MU1UWWdOeTQxTkRoak1DNDBNell0TUM0ME5EWWdNUzR3TkRNdE1DNDBPREVnTVM0MU56WWdNR3d6TGprd09DQXpMamMwTnlBekxqa3dPQzB6TGpjME4yTXdMalV6TXkwd0xqUTRNU0F4TGpFME1TMHdMalEwTmlBeExqVTNOQ0F3SURBdU5ETTJJREF1TkRRMUlEQXVOREE0SURFdU1UazNJREFnTVM0Mk1UVXRNQzQwTURZZ01DNDBNVGd0TkM0Mk9UVWdOQzQxTURJdE5DNDJPVFVnTkM0MU1ESXRNQzR5TVRjZ01DNHlNak10TUM0MU1ESWdNQzR6TXpVdE1DNDNPRGNnTUM0ek16VnpMVEF1TlRjdE1DNHhNVEl0TUM0M09Ea3RNQzR6TXpWak1DQXdMVFF1TWpnM0xUUXVNRGcwTFRRdU5qazFMVFF1TlRBeWN5MHdMalF6TmkweExqRTNJREF0TVM0Mk1UVjZYQ0lnTHo1Y2JpQWdQQzlUZG1jK1hHNHBPMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1FuVjBkRzl1YzF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1JISnZjR1J2ZDI1SmJtUnBZMkYwYjNKUWNtOXdjenhjYmlBZ1QzQjBhVzl1SUQwZ2RXNXJibTkzYml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0Z1BTQmliMjlzWldGdUxGeHVJQ0JIY205MWNDQmxlSFJsYm1SeklFZHliM1Z3UW1GelpUeFBjSFJwYjI0K0lEMGdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRnWlhoMFpXNWtjeUJEYjIxdGIyNVFjbTl3YzBGdVpFTnNZWE56VG1GdFpUeFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGlCN1hHNGdJQzhxS2lCVWFHVWdZMmhwYkdSeVpXNGdkRzhnWW1VZ2NtVnVaR1Z5WldRZ2FXNXphV1JsSUhSb1pTQnBibVJwWTJGMGIzSXVJQ292WEc0Z0lHTm9hV3hrY21WdVB6b2dVbVZoWTNST2IyUmxPMXh1SUNBdktpb2dVSEp2Y0hNZ2RHaGhkQ0IzYVd4c0lHSmxJSEJoYzNObFpDQnZiaUIwYnlCMGFHVWdZMmhwYkdSeVpXNHVJQ292WEc0Z0lHbHVibVZ5VUhKdmNITTZJRXBUV0M1SmJuUnlhVzV6YVdORmJHVnRaVzUwYzFzblpHbDJKMTA3WEc0Z0lDOHFLaUJVYUdVZ1ptOWpkWE5sWkNCemRHRjBaU0J2WmlCMGFHVWdjMlZzWldOMExpQXFMMXh1SUNCcGMwWnZZM1Z6WldRNklHSnZiMnhsWVc0N1hHNGdJR2x6UkdsellXSnNaV1E2SUdKdmIyeGxZVzQ3WEc1OVhHNWNibU52Ym5OMElHSmhjMlZEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b2UxeHVJQ0JwYzBadlkzVnpaV1FzWEc0Z0lIUm9aVzFsT2lCN1hHNGdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ2ZTeGNibjA2WEc0Z0lId2dSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQbHh1SUNCOElFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0cE9pQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHBibVJwWTJGMGIzSkRiMjUwWVdsdVpYSW5MRnh1SUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3cyTUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJR1JwYzNCc1lYazZJQ2RtYkdWNEp5eGNiaUFnY0dGa1pHbHVaem9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IwY21GdWMybDBhVzl1T2lBblkyOXNiM0lnTVRVd2JYTW5MRnh1WEc0Z0lDYzZhRzkyWlhJbk9pQjdYRzRnSUNBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzT0RBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRRd0xGeHVJQ0I5TEZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmtjbTl3Wkc5M2JrbHVaR2xqWVhSdmNrTlRVeUE5SUdKaGMyVkRVMU03WEc1bGVIQnZjblFnWTI5dWMzUWdSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJFY205d1pHOTNia2x1WkdsallYUnZjbEJ5YjNCelBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErWEc0cElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0JqYzNNOWUyZGxkRk4wZVd4bGN5Z25aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RrY205d1pHOTNiaTFwYm1ScFkyRjBiM0luT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamJHRnpjMDVoYldWY2JpQWdJQ0FnSUNsOVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVSdmQyNURhR1YyY205dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiR1ZoY2tsdVpHbGpZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdMeW9xSUZSb1pTQmphR2xzWkhKbGJpQjBieUJpWlNCeVpXNWtaWEpsWkNCcGJuTnBaR1VnZEdobElHbHVaR2xqWVhSdmNpNGdLaTljYmlBZ1kyaHBiR1J5Wlc0L09pQlNaV0ZqZEU1dlpHVTdYRzRnSUM4cUtpQlFjbTl3Y3lCMGFHRjBJSGRwYkd3Z1ltVWdjR0Z6YzJWa0lHOXVJSFJ2SUhSb1pTQmphR2xzWkhKbGJpNGdLaTljYmlBZ2FXNXVaWEpRY205d2N6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lka2FYWW5YVHRjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYmp0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHTnNaV0Z5U1c1a2FXTmhkRzl5UTFOVElEMGdZbUZ6WlVOVFV6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRGJHVmhja2x1WkdsallYUnZjaUE5SUR4Y2JpQWdUM0IwYVc5dUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpeGNiaUFnUjNKdmRYQWdaWGgwWlc1a2N5QkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaWhjYmlBZ2NISnZjSE02SUVOc1pXRnlTVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOb2FXeGtjbVZ1TENCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeGthWFpjYmlBZ0lDQWdJR056Y3oxN1oyVjBVM1I1YkdWektDZGpiR1ZoY2tsdVpHbGpZWFJ2Y2ljc0lIQnliM0J6S1gxY2JpQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN1kzZ29YRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtUnBZMkYwYjNJNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0oyTnNaV0Z5TFdsdVpHbGpZWFJ2Y2ljNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpWeHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJRDVjYmlBZ0lDQWdJSHRqYUdsc1pISmxiaUI4ZkNBOFEzSnZjM05KWTI5dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJUWlhCaGNtRjBiM0pjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2xCeWIzQnpQRnh1SUNCUGNIUnBiMjRnUFNCMWJtdHViM2R1TEZ4dUlDQkpjMDExYkhScElHVjRkR1Z1WkhNZ1ltOXZiR1ZoYmlBOUlHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo0Z1BTQkhjbTkxY0VKaGMyVThUM0IwYVc5dVBseHVQaUJsZUhSbGJtUnpJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbFBFOXdkR2x2Yml3Z1NYTk5kV3gwYVN3Z1IzSnZkWEErSUh0Y2JpQWdhWE5FYVhOaFlteGxaRG9nWW05dmJHVmhianRjYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYm01bGNsQnliM0J6UHpvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm1ScFkyRjBiM0pUWlhCaGNtRjBiM0pEVTFNZ1BTQThYRzRnSUU5d2RHbHZiaXhjYmlBZ1NYTk5kV3gwYVNCbGVIUmxibVJ6SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0b2UxeHVJQ0JwYzBScGMyRmliR1ZrTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUhOd1lXTnBibWM2SUhzZ1ltRnpaVlZ1YVhRZ2ZTeGNiaUFnSUNCamIyeHZjbk1zWEc0Z0lIMHNYRzU5T2lCSmJtUnBZMkYwYjNKVFpYQmhjbUYwYjNKUWNtOXdjenhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpazZJRU5UVTA5aWFtVmpkRmRwZEdoTVlXSmxiQ0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzWEc0Z0lHRnNhV2R1VTJWc1pqb2dKM04wY21WMFkyZ25MRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdselJHbHpZV0pzWldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRFd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3eU1DeGNiaUFnYldGeVoybHVRbTkwZEc5dE9pQmlZWE5sVlc1cGRDQXFJRElzWEc0Z0lHMWhjbWRwYmxSdmNEb2dZbUZ6WlZWdWFYUWdLaUF5TEZ4dUlDQjNhV1IwYURvZ01TeGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1c1a2FXTmhkRzl5VTJWd1lYSmhkRzl5SUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0Z4dUlDQndjbTl3Y3pvZ1NXNWthV05oZEc5eVUyVndZWEpoZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENWNiaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05zWVhOelRtRnRaU3dnWTNnc0lHZGxkRk4wZVd4bGN5d2dhVzV1WlhKUWNtOXdjeUI5SUQwZ2NISnZjSE03WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEhOd1lXNWNiaUFnSUNBZ0lIc3VMaTVwYm01bGNsQnliM0J6ZlZ4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMmx1WkdsallYUnZjbE5sY0dGeVlYUnZjaWNzSUhCeWIzQnpLWDFjYmlBZ0lDQWdJR05zWVhOelRtRnRaVDE3WTNnb2V5QW5hVzVrYVdOaGRHOXlMWE5sY0dGeVlYUnZjaWM2SUhSeWRXVWdmU3dnWTJ4aGMzTk9ZVzFsS1gxY2JpQWdJQ0F2UGx4dUlDQXBPMXh1ZlR0Y2JseHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNHZMeUJNYjJGa2FXNW5YRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1WTI5dWMzUWdiRzloWkdsdVowUnZkRUZ1YVcxaGRHbHZibk1nUFNCclpYbG1jbUZ0WlhOZ1hHNGdJREFsTENBNE1DVXNJREV3TUNVZ2V5QnZjR0ZqYVhSNU9pQXdPeUI5WEc0Z0lEUXdKU0I3SUc5d1lXTnBkSGs2SURFN0lIMWNibUE3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYjJGa2FXNW5TVzVrYVdOaGRHOXlRMU5USUQwZ1BGeHVJQ0JQY0hScGIyNHNYRzRnSUVselRYVnNkR2tnWlhoMFpXNWtjeUJpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtYRzQrS0h0Y2JpQWdhWE5HYjJOMWMyVmtMRnh1SUNCemFYcGxMRnh1SUNCMGFHVnRaVG9nZTF4dUlDQWdJR052Ykc5eWN5eGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUgwc1hHNTlPaUJNYjJGa2FXNW5TVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDRwT2lCRFUxTlBZbXBsWTNSWGFYUm9UR0ZpWld3Z1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkc2IyRmthVzVuU1c1a2FXTmhkRzl5Snl4Y2JpQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc05qQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJESXdMRnh1SUNCa2FYTndiR0Y1T2lBblpteGxlQ2NzWEc0Z0lIQmhaR1JwYm1jNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2RISmhibk5wZEdsdmJqb2dKMk52Ykc5eUlERTFNRzF6Snl4Y2JpQWdZV3hwWjI1VFpXeG1PaUFuWTJWdWRHVnlKeXhjYmlBZ1ptOXVkRk5wZW1VNklITnBlbVVzWEc0Z0lHeHBibVZJWldsbmFIUTZJREVzWEc0Z0lHMWhjbWRwYmxKcFoyaDBPaUJ6YVhwbExGeHVJQ0IwWlhoMFFXeHBaMjQ2SUNkalpXNTBaWEluTEZ4dUlDQjJaWEowYVdOaGJFRnNhV2R1T2lBbmJXbGtaR3hsSnl4Y2JuMHBPMXh1WEc1cGJuUmxjbVpoWTJVZ1RHOWhaR2x1WjBSdmRGQnliM0J6SUh0Y2JpQWdaR1ZzWVhrNklHNTFiV0psY2p0Y2JpQWdiMlptYzJWME9pQmliMjlzWldGdU8xeHVmVnh1WTI5dWMzUWdURzloWkdsdVowUnZkQ0E5SUNoN0lHUmxiR0Y1TENCdlptWnpaWFFnZlRvZ1RHOWhaR2x1WjBSdmRGQnliM0J6S1NBOVBpQW9YRzRnSUR4emNHRnVYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JoYm1sdFlYUnBiMjQ2SUdBa2UyeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpmU0F4Y3lCbFlYTmxMV2x1TFc5MWRDQWtlMlJsYkdGNWZXMXpJR2x1Wm1sdWFYUmxPMkFzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUFuTVdWdEp5eGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnYldGeVoybHVUR1ZtZERvZ2IyWm1jMlYwSUQ4Z0p6RmxiU2NnT2lCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SUNjeFpXMG5MRnh1SUNBZ0lDQWdkbVZ5ZEdsallXeEJiR2xuYmpvZ0ozUnZjQ2NzWEc0Z0lDQWdJQ0IzYVdSMGFEb2dKekZsYlNjc1hHNGdJQ0FnZlgxY2JpQWdMejVjYmlrN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdURzloWkdsdVowbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGQnliM0J6SUhSb1lYUWdkMmxzYkNCaVpTQndZWE56WldRZ2IyNGdkRzhnZEdobElHTm9hV3hrY21WdUxpQXFMMXh1SUNCcGJtNWxjbEJ5YjNCek9pQktVMWd1U1c1MGNtbHVjMmxqUld4bGJXVnVkSE5iSjJScGRpZGRPMXh1SUNBdktpb2dWR2hsSUdadlkzVnpaV1FnYzNSaGRHVWdiMllnZEdobElITmxiR1ZqZEM0Z0tpOWNiaUFnYVhOR2IyTjFjMlZrT2lCaWIyOXNaV0Z1TzF4dUlDQnBjMFJwYzJGaWJHVmtPaUJpYjI5c1pXRnVPMXh1SUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ2MybDZaVG9nYm5WdFltVnlPMXh1ZlZ4dVpYaHdiM0owSUdOdmJuTjBJRXh2WVdScGJtZEpibVJwWTJGMGIzSWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9YRzRnSUhCeWIzQnpPaUJNYjJGa2FXNW5TVzVrYVdOaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3l3Z2FYTlNkR3dnZlNBOUlIQnliM0J6TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyeHZZV1JwYm1kSmJtUnBZMkYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZHNiMkZrYVc1bkxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzd2ZTQnZabVp6WlhROWUybHpVblJzZlNBdlBseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6RTJNSDBnYjJabWMyVjBJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TXpJd2ZTQnZabVp6WlhROWV5RnBjMUowYkgwZ0x6NWNiaUFnSUNBOEwyUnBkajVjYmlBZ0tUdGNibjA3WEc1TWIyRmthVzVuU1c1a2FXTmhkRzl5TG1SbFptRjFiSFJRY205d2N5QTlJSHNnYzJsNlpUb2dOQ0I5TzF4dUlsMTkgKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIFN2ZyA9IGZ1bmN0aW9uIFN2ZyhfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkJDIpO1xuXG4gIHJldHVybiBqc3goXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGhlaWdodDogc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgY3NzOiBfcmVmMlxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIENyb3NzSWNvbiA9IGZ1bmN0aW9uIENyb3NzSWNvbihwcm9wcykge1xuICByZXR1cm4ganN4KFN2ZywgX2V4dGVuZHMoe1xuICAgIHNpemU6IDIwXG4gIH0sIHByb3BzKSwganN4KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCJcbiAgfSkpO1xufTtcbnZhciBEb3duQ2hldnJvbiA9IGZ1bmN0aW9uIERvd25DaGV2cm9uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3IDMuOTA4LTMuNzQ3YzAuNTMzLTAuNDgxIDEuMTQxLTAuNDQ2IDEuNTc0IDAgMC40MzYgMC40NDUgMC40MDggMS4xOTcgMCAxLjYxNS0wLjQwNiAwLjQxOC00LjY5NSA0LjUwMi00LjY5NSA0LjUwMi0wLjIxNyAwLjIyMy0wLjUwMiAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwIDAtNC4yODctNC4wODQtNC42OTUtNC41MDJzLTAuNDM2LTEuMTcgMC0xLjYxNXpcIlxuICB9KSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBiYXNlQ1NTID0gZnVuY3Rpb24gYmFzZUNTUyhfcmVmMykge1xuICB2YXIgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkLFxuICAgICAgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjMkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWYzJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwXG4gICAgfVxuICB9O1xufTtcblxudmFyIGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBEcm9wZG93bkluZGljYXRvciA9IGZ1bmN0aW9uIERyb3Bkb3duSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAnZHJvcGRvd24taW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuIHx8IGpzeChEb3duQ2hldnJvbiwgbnVsbCkpO1xufTtcbnZhciBjbGVhckluZGljYXRvckNTUyA9IGJhc2VDU1M7XG52YXIgQ2xlYXJJbmRpY2F0b3IgPSBmdW5jdGlvbiBDbGVhckluZGljYXRvcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2NsZWFySW5kaWNhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbiB8fCBqc3goQ3Jvc3NJY29uLCBudWxsKSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNlcGFyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSBmdW5jdGlvbiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MoX3JlZjQpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmNC5pc0Rpc2FibGVkLFxuICAgICAgX3JlZjQkdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQkdGhlbWUuc3BhY2luZy5iYXNlVW5pdCxcbiAgICAgIGNvbG9ycyA9IF9yZWY0JHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2luZGljYXRvclNlcGFyYXRvcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgbWFyZ2luQm90dG9tOiBiYXNlVW5pdCAqIDIsXG4gICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgd2lkdGg6IDFcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yU2VwYXJhdG9yID0gZnVuY3Rpb24gSW5kaWNhdG9yU2VwYXJhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIF9leHRlbmRzKHt9LCBpbm5lclByb3BzLCB7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2luZGljYXRvclNlcGFyYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSkpO1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzKF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XFxuXCJdKSkpO1xudmFyIGxvYWRpbmdJbmRpY2F0b3JDU1MgPSBmdW5jdGlvbiBsb2FkaW5nSW5kaWNhdG9yQ1NTKF9yZWY1KSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmNS5pc0ZvY3VzZWQsXG4gICAgICBzaXplID0gX3JlZjUuc2l6ZSxcbiAgICAgIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnMsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY1JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQ7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IHNpemUsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gIH07XG59O1xuXG52YXIgTG9hZGluZ0RvdCA9IGZ1bmN0aW9uIExvYWRpbmdEb3QoX3JlZjYpIHtcbiAgdmFyIGRlbGF5ID0gX3JlZjYuZGVsYXksXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQ7XG4gIHJldHVybiBqc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3MkMih7XG4gICAgICBhbmltYXRpb246IFwiXCIuY29uY2F0KGxvYWRpbmdEb3RBbmltYXRpb25zLCBcIiAxcyBlYXNlLWluLW91dCBcIikuY29uY2F0KGRlbGF5LCBcIm1zIGluZmluaXRlO1wiKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxZW0nLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBvZmZzZXQgPyAnMWVtJyA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpMb2FkaW5nRG90O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11ZEhONElsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYRlFTU0lzSW1acGJHVWlPaUpwYm1ScFkyRjBiM0p6TG5SemVDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lCQWFuTjRJR3B6ZUNBcUwxeHVhVzF3YjNKMElIc2dVbVZoWTNST2IyUmxJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dhbk40TENCclpYbG1jbUZ0WlhNZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtbHRjRzl5ZENCN1hHNGdJRU52YlcxdmJsQnliM0J6UVc1a1EyeGhjM05PWVcxbExGeHVJQ0JEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dzWEc0Z0lFZHliM1Z3UW1GelpTeGNibjBnWm5KdmJTQW5MaTR2ZEhsd1pYTW5PMXh1WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmk4dklFUnliM0JrYjNkdUlDWWdRMnhsWVhJZ1NXTnZibk5jYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1WEc1amIyNXpkQ0JUZG1jZ1BTQW9lMXh1SUNCemFYcGxMRnh1SUNBdUxpNXdjbTl3YzF4dWZUb2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemRtY25YU0FtSUhzZ2MybDZaVG9nYm5WdFltVnlJSDBwSUQwK0lDaGNiaUFnUEhOMloxeHVJQ0FnSUdobGFXZG9kRDE3YzJsNlpYMWNiaUFnSUNCM2FXUjBhRDE3YzJsNlpYMWNiaUFnSUNCMmFXVjNRbTk0UFZ3aU1DQXdJREl3SURJd1hDSmNiaUFnSUNCaGNtbGhMV2hwWkdSbGJqMWNJblJ5ZFdWY0lseHVJQ0FnSUdadlkzVnpZV0pzWlQxY0ltWmhiSE5sWENKY2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnWm1sc2JEb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCc2FXNWxTR1ZwWjJoME9pQXhMRnh1SUNBZ0lDQWdjM1J5YjJ0bE9pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUhOMGNtOXJaVmRwWkhSb09pQXdMRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJSFI1Y0dVZ1EzSnZjM05KWTI5dVVISnZjSE1nUFNCS1UxZ3VTVzUwY21sdWMybGpSV3hsYldWdWRITmJKM04yWnlkZElDWWdleUJ6YVhwbFB6b2diblZ0WW1WeUlIMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1EzSnZjM05KWTI5dUlEMGdLSEJ5YjNCek9pQkRjbTl6YzBsamIyNVFjbTl3Y3lrZ1BUNGdLRnh1SUNBOFUzWm5JSE5wZW1VOWV6SXdmU0I3TGk0dWNISnZjSE45UGx4dUlDQWdJRHh3WVhSb0lHUTlYQ0pOTVRRdU16UTRJREUwTGpnME9XTXRNQzQwTmprZ01DNDBOamt0TVM0eU1qa2dNQzQwTmprdE1TNDJPVGNnTUd3dE1pNDJOVEV0TXk0d016QXRNaTQyTlRFZ015NHdNamxqTFRBdU5EWTVJREF1TkRZNUxURXVNakk1SURBdU5EWTVMVEV1TmprM0lEQXRNQzQwTmprdE1DNDBOamt0TUM0ME5qa3RNUzR5TWprZ01DMHhMalk1TjJ3eUxqYzFPQzB6TGpFMUxUSXVOelU1TFRNdU1UVXlZeTB3TGpRMk9TMHdMalEyT1Mwd0xqUTJPUzB4TGpJeU9DQXdMVEV1TmprM2N6RXVNakk0TFRBdU5EWTVJREV1TmprM0lEQnNNaTQyTlRJZ015NHdNekVnTWk0Mk5URXRNeTR3TXpGak1DNDBOamt0TUM0ME5qa2dNUzR5TWpndE1DNDBOamtnTVM0Mk9UY2dNSE13TGpRMk9TQXhMakl5T1NBd0lERXVOamszYkMweUxqYzFPQ0F6TGpFMU1pQXlMamMxT0NBekxqRTFZekF1TkRZNUlEQXVORFk1SURBdU5EWTVJREV1TWpJNUlEQWdNUzQyT1RoNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVaWGh3YjNKMElIUjVjR1VnUkc5M2JrTm9aWFp5YjI1UWNtOXdjeUE5SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25jM1puSjEwZ0ppQjdJSE5wZW1VL09pQnVkVzFpWlhJZ2ZUdGNibVY0Y0c5eWRDQmpiMjV6ZENCRWIzZHVRMmhsZG5KdmJpQTlJQ2h3Y205d2N6b2dSRzkzYmtOb1pYWnliMjVRY205d2N5a2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk5DNDFNVFlnTnk0MU5EaGpNQzQwTXpZdE1DNDBORFlnTVM0d05ETXRNQzQwT0RFZ01TNDFOellnTUd3ekxqa3dPQ0F6TGpjME55QXpMamt3T0MwekxqYzBOMk13TGpVek15MHdMalE0TVNBeExqRTBNUzB3TGpRME5pQXhMalUzTkNBd0lEQXVORE0ySURBdU5EUTFJREF1TkRBNElERXVNVGszSURBZ01TNDJNVFV0TUM0ME1EWWdNQzQwTVRndE5DNDJPVFVnTkM0MU1ESXROQzQyT1RVZ05DNDFNREl0TUM0eU1UY2dNQzR5TWpNdE1DNDFNRElnTUM0ek16VXRNQzQzT0RjZ01DNHpNelZ6TFRBdU5UY3RNQzR4TVRJdE1DNDNPRGt0TUM0ek16VmpNQ0F3TFRRdU1qZzNMVFF1TURnMExUUXVOamsxTFRRdU5UQXljeTB3TGpRek5pMHhMakUzSURBdE1TNDJNVFY2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdRblYwZEc5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdSSEp2Y0dSdmQyNUpibVJwWTJGMGIzSlFjbTl3Y3p4Y2JpQWdUM0IwYVc5dUlEMGdkVzVyYm05M2JpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNGdQU0JpYjI5c1pXRnVMRnh1SUNCSGNtOTFjQ0JsZUhSbGJtUnpJRWR5YjNWd1FtRnpaVHhQY0hScGIyNCtJRDBnUjNKdmRYQkNZWE5sUEU5d2RHbHZiajVjYmo0Z1pYaDBaVzVrY3lCRGIyMXRiMjVRY205d2MwRnVaRU5zWVhOelRtRnRaVHhQY0hScGIyNHNJRWx6VFhWc2RHa3NJRWR5YjNWd1BpQjdYRzRnSUM4cUtpQlVhR1VnWTJocGJHUnlaVzRnZEc4Z1ltVWdjbVZ1WkdWeVpXUWdhVzV6YVdSbElIUm9aU0JwYm1ScFkyRjBiM0l1SUNvdlhHNGdJR05vYVd4a2NtVnVQem9nVW1WaFkzUk9iMlJsTzF4dUlDQXZLaW9nVUhKdmNITWdkR2hoZENCM2FXeHNJR0psSUhCaGMzTmxaQ0J2YmlCMGJ5QjBhR1VnWTJocGJHUnlaVzR1SUNvdlhHNGdJR2x1Ym1WeVVISnZjSE02SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25aR2wySjEwN1hHNGdJQzhxS2lCVWFHVWdabTlqZFhObFpDQnpkR0YwWlNCdlppQjBhR1VnYzJWc1pXTjBMaUFxTDF4dUlDQnBjMFp2WTNWelpXUTZJR0p2YjJ4bFlXNDdYRzRnSUdselJHbHpZV0pzWldRNklHSnZiMnhsWVc0N1hHNTlYRzVjYm1OdmJuTjBJR0poYzJWRFUxTWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9lMXh1SUNCcGMwWnZZM1Z6WldRc1hHNGdJSFJvWlcxbE9pQjdYRzRnSUNBZ2MzQmhZMmx1WnpvZ2V5QmlZWE5sVlc1cGRDQjlMRnh1SUNBZ0lHTnZiRzl5Y3l4Y2JpQWdmU3hjYm4wNlhHNGdJSHdnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0pRY205d2N6eFBjSFJwYjI0c0lFbHpUWFZzZEdrc0lFZHliM1Z3UGx4dUlDQjhJRU5zWldGeVNXNWthV05oZEc5eVVISnZjSE04VDNCMGFXOXVMQ0JKYzAxMWJIUnBMQ0JIY205MWNENHBPaUJEVTFOUFltcGxZM1JYYVhSb1RHRmlaV3dnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RwYm1ScFkyRjBiM0pEYjI1MFlXbHVaWEluTEZ4dUlDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3Mk1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc01qQXNYRzRnSUdScGMzQnNZWGs2SUNkbWJHVjRKeXhjYmlBZ2NHRmtaR2x1WnpvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCMGNtRnVjMmwwYVc5dU9pQW5ZMjlzYjNJZ01UVXdiWE1uTEZ4dVhHNGdJQ2M2YUc5MlpYSW5PaUI3WEc0Z0lDQWdZMjlzYjNJNklHbHpSbTlqZFhObFpDQS9JR052Ykc5eWN5NXVaWFYwY21Gc09EQWdPaUJqYjJ4dmNuTXVibVYxZEhKaGJEUXdMRnh1SUNCOUxGeHVmU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JrY205d1pHOTNia2x1WkdsallYUnZja05UVXlBOUlHSmhjMlZEVTFNN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnUkhKdmNHUnZkMjVKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIQnliM0J6T2lCRWNtOXdaRzkzYmtsdVpHbGpZWFJ2Y2xCeWIzQnpQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK1hHNHBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QmphR2xzWkhKbGJpd2dZMnhoYzNOT1lXMWxMQ0JqZUN3Z1oyVjBVM1I1YkdWekxDQnBibTVsY2xCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCamMzTTllMmRsZEZOMGVXeGxjeWduWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0luTENCd2NtOXdjeWw5WEc0Z0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJONEtGeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnYVc1a2FXTmhkRzl5T2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUNka2NtOXdaRzkzYmkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFUnZkMjVEYUdWMmNtOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYkdWaGNrbHVaR2xqWVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnTHlvcUlGUm9aU0JqYUdsc1pISmxiaUIwYnlCaVpTQnlaVzVrWlhKbFpDQnBibk5wWkdVZ2RHaGxJR2x1WkdsallYUnZjaTRnS2k5Y2JpQWdZMmhwYkdSeVpXNC9PaUJTWldGamRFNXZaR1U3WEc0Z0lDOHFLaUJRY205d2N5QjBhR0YwSUhkcGJHd2dZbVVnY0dGemMyVmtJRzl1SUhSdklIUm9aU0JqYUdsc1pISmxiaTRnS2k5Y2JpQWdhVzV1WlhKUWNtOXdjem9nU2xOWUxrbHVkSEpwYm5OcFkwVnNaVzFsYm5Seld5ZGthWFluWFR0Y2JpQWdMeW9xSUZSb1pTQm1iMk4xYzJWa0lITjBZWFJsSUc5bUlIUm9aU0J6Wld4bFkzUXVJQ292WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJqdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05zWldGeVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRiR1ZoY2tsdVpHbGpZWFJ2Y2lBOUlEeGNiaUFnVDNCMGFXOXVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaXhjYmlBZ1IzSnZkWEFnWlhoMFpXNWtjeUJIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGloY2JpQWdjSEp2Y0hNNklFTnNaV0Z5U1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHhrYVhaY2JpQWdJQ0FnSUdOemN6MTdaMlYwVTNSNWJHVnpLQ2RqYkdWaGNrbHVaR2xqWVhSdmNpY3NJSEJ5YjNCektYMWNiaUFnSUNBZ0lHTnNZWE56VG1GdFpUMTdZM2dvWEc0Z0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBibVJwWTJGMGIzSTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdKMk5zWldGeUxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUh0amFHbHNaSEpsYmlCOGZDQThRM0p2YzNOSlkyOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCVFpYQmhjbUYwYjNKY2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFbHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNsQnliM0J6UEZ4dUlDQlBjSFJwYjI0Z1BTQjFibXR1YjNkdUxGeHVJQ0JKYzAxMWJIUnBJR1Y0ZEdWdVpITWdZbTl2YkdWaGJpQTlJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNGdQU0JIY205MWNFSmhjMlU4VDNCMGFXOXVQbHh1UGlCbGVIUmxibVJ6SUVOdmJXMXZibEJ5YjNCelFXNWtRMnhoYzNOT1lXMWxQRTl3ZEdsdmJpd2dTWE5OZFd4MGFTd2dSM0p2ZFhBK0lIdGNiaUFnYVhORWFYTmhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdhWE5HYjJOMWMyVmtPaUJpYjI5c1pXRnVPMXh1SUNCcGJtNWxjbEJ5YjNCelB6b2dTbE5ZTGtsdWRISnBibk5wWTBWc1pXMWxiblJ6V3lkemNHRnVKMTA3WEc1OVhHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNKRFUxTWdQU0E4WEc0Z0lFOXdkR2x2Yml4Y2JpQWdTWE5OZFd4MGFTQmxlSFJsYm1SeklHSnZiMnhsWVc0c1hHNGdJRWR5YjNWd0lHVjRkR1Z1WkhNZ1IzSnZkWEJDWVhObFBFOXdkR2x2Ymo1Y2JqNG9lMXh1SUNCcGMwUnBjMkZpYkdWa0xGeHVJQ0IwYUdWdFpUb2dlMXh1SUNBZ0lITndZV05wYm1jNklIc2dZbUZ6WlZWdWFYUWdmU3hjYmlBZ0lDQmpiMnh2Y25Nc1hHNGdJSDBzWEc1OU9pQkpibVJwWTJGMGIzSlRaWEJoY21GMGIzSlFjbTl3Y3p4UGNIUnBiMjRzSUVselRYVnNkR2tzSUVkeWIzVndQaWs2SUVOVFUwOWlhbVZqZEZkcGRHaE1ZV0psYkNBOVBpQW9lMXh1SUNCc1lXSmxiRG9nSjJsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2ljc1hHNGdJR0ZzYVdkdVUyVnNaam9nSjNOMGNtVjBZMmduTEZ4dUlDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHbHpSR2x6WVdKc1pXUWdQeUJqYjJ4dmNuTXVibVYxZEhKaGJERXdJRG9nWTI5c2IzSnpMbTVsZFhSeVlXd3lNQ3hjYmlBZ2JXRnlaMmx1UW05MGRHOXRPaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJRzFoY21kcGJsUnZjRG9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0IzYVdSMGFEb2dNU3hjYm4wcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1NXNWthV05oZEc5eVUyVndZWEpoZEc5eUlEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tGeHVJQ0J3Y205d2N6b2dTVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlVSEp2Y0hNOFQzQjBhVzl1TENCSmMwMTFiSFJwTENCSGNtOTFjRDVjYmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BITndZVzVjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUNBZ1kzTnpQWHRuWlhSVGRIbHNaWE1vSjJsdVpHbGpZWFJ2Y2xObGNHRnlZWFJ2Y2ljc0lIQnliM0J6S1gxY2JpQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN1kzZ29leUFuYVc1a2FXTmhkRzl5TFhObGNHRnlZWFJ2Y2ljNklIUnlkV1VnZlN3Z1kyeGhjM05PWVcxbEtYMWNiaUFnSUNBdlBseHVJQ0FwTzF4dWZUdGNibHh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzR2THlCTWIyRmthVzVuWEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVkyOXVjM1FnYkc5aFpHbHVaMFJ2ZEVGdWFXMWhkR2x2Ym5NZ1BTQnJaWGxtY21GdFpYTmdYRzRnSURBbExDQTRNQ1VzSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3T3lCOVhHNGdJRFF3SlNCN0lHOXdZV05wZEhrNklERTdJSDFjYm1BN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2IyRmthVzVuU1c1a2FXTmhkRzl5UTFOVElEMGdQRnh1SUNCUGNIUnBiMjRzWEc0Z0lFbHpUWFZzZEdrZ1pYaDBaVzVrY3lCaWIyOXNaV0Z1TEZ4dUlDQkhjbTkxY0NCbGVIUmxibVJ6SUVkeWIzVndRbUZ6WlR4UGNIUnBiMjQrWEc0K0tIdGNiaUFnYVhOR2IyTjFjMlZrTEZ4dUlDQnphWHBsTEZ4dUlDQjBhR1Z0WlRvZ2UxeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ0lDQnpjR0ZqYVc1bk9pQjdJR0poYzJWVmJtbDBJSDBzWEc0Z0lIMHNYRzU5T2lCTWIyRmthVzVuU1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q0cE9pQkRVMU5QWW1wbFkzUlhhWFJvVEdGaVpXd2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5eGNiaUFnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNOakFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNiaUFnWVd4cFoyNVRaV3htT2lBblkyVnVkR1Z5Snl4Y2JpQWdabTl1ZEZOcGVtVTZJSE5wZW1Vc1hHNGdJR3hwYm1WSVpXbG5hSFE2SURFc1hHNGdJRzFoY21kcGJsSnBaMmgwT2lCemFYcGxMRnh1SUNCMFpYaDBRV3hwWjI0NklDZGpaVzUwWlhJbkxGeHVJQ0IyWlhKMGFXTmhiRUZzYVdkdU9pQW5iV2xrWkd4bEp5eGNibjBwTzF4dVhHNXBiblJsY21aaFkyVWdURzloWkdsdVowUnZkRkJ5YjNCeklIdGNiaUFnWkdWc1lYazZJRzUxYldKbGNqdGNiaUFnYjJabWMyVjBPaUJpYjI5c1pXRnVPMXh1ZlZ4dVkyOXVjM1FnVEc5aFpHbHVaMFJ2ZENBOUlDaDdJR1JsYkdGNUxDQnZabVp6WlhRZ2ZUb2dURzloWkdsdVowUnZkRkJ5YjNCektTQTlQaUFvWEc0Z0lEeHpjR0Z1WEc0Z0lDQWdZM056UFh0N1hHNGdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHQWtlMnh2WVdScGJtZEViM1JCYm1sdFlYUnBiMjV6ZlNBeGN5QmxZWE5sTFdsdUxXOTFkQ0FrZTJSbGJHRjVmVzF6SUdsdVptbHVhWFJsTzJBc1hHNGdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUNkamRYSnlaVzUwUTI5c2IzSW5MRnh1SUNBZ0lDQWdZbTl5WkdWeVVtRmthWFZ6T2lBbk1XVnRKeXhjYmlBZ0lDQWdJR1JwYzNCc1lYazZJQ2RwYm14cGJtVXRZbXh2WTJzbkxGeHVJQ0FnSUNBZ2JXRnlaMmx1VEdWbWREb2diMlptYzJWMElEOGdKekZsYlNjZ09pQjFibVJsWm1sdVpXUXNYRzRnSUNBZ0lDQm9aV2xuYUhRNklDY3haVzBuTEZ4dUlDQWdJQ0FnZG1WeWRHbGpZV3hCYkdsbmJqb2dKM1J2Y0Njc1hHNGdJQ0FnSUNCM2FXUjBhRG9nSnpGbGJTY3NYRzRnSUNBZ2ZYMWNiaUFnTHo1Y2JpazdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVEc5aFpHbHVaMGx1WkdsallYUnZjbEJ5YjNCelBGeHVJQ0JQY0hScGIyNGdQU0IxYm10dWIzZHVMRnh1SUNCSmMwMTFiSFJwSUdWNGRHVnVaSE1nWW05dmJHVmhiaUE5SUdKdmIyeGxZVzRzWEc0Z0lFZHliM1Z3SUdWNGRHVnVaSE1nUjNKdmRYQkNZWE5sUEU5d2RHbHZiajRnUFNCSGNtOTFjRUpoYzJVOFQzQjBhVzl1UGx4dVBpQmxlSFJsYm1SeklFTnZiVzF2YmxCeWIzQnpRVzVrUTJ4aGMzTk9ZVzFsUEU5d2RHbHZiaXdnU1hOTmRXeDBhU3dnUjNKdmRYQStJSHRjYmlBZ0x5b3FJRkJ5YjNCeklIUm9ZWFFnZDJsc2JDQmlaU0J3WVhOelpXUWdiMjRnZEc4Z2RHaGxJR05vYVd4a2NtVnVMaUFxTDF4dUlDQnBibTVsY2xCeWIzQnpPaUJLVTFndVNXNTBjbWx1YzJsalJXeGxiV1Z1ZEhOYkoyUnBkaWRkTzF4dUlDQXZLaW9nVkdobElHWnZZM1Z6WldRZ2MzUmhkR1VnYjJZZ2RHaGxJSE5sYkdWamRDNGdLaTljYmlBZ2FYTkdiMk4xYzJWa09pQmliMjlzWldGdU8xeHVJQ0JwYzBScGMyRmliR1ZrT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdjMmw2WlRvZ2JuVnRZbVZ5TzF4dWZWeHVaWGh3YjNKMElHTnZibk4wSUV4dllXUnBibWRKYm1ScFkyRjBiM0lnUFNBOFhHNGdJRTl3ZEdsdmJpeGNiaUFnU1hOTmRXeDBhU0JsZUhSbGJtUnpJR0p2YjJ4bFlXNHNYRzRnSUVkeWIzVndJR1Y0ZEdWdVpITWdSM0p2ZFhCQ1lYTmxQRTl3ZEdsdmJqNWNiajRvWEc0Z0lIQnliM0J6T2lCTWIyRmthVzVuU1c1a2FXTmhkRzl5VUhKdmNITThUM0IwYVc5dUxDQkpjMDExYkhScExDQkhjbTkxY0Q1Y2Jpa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5d2dhWE5TZEd3Z2ZTQTlJSEJ5YjNCek8xeHVYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQR1JwZGx4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RzYjJGa2FXNW5MV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3dmU0J2Wm1aelpYUTllMmx6VW5Sc2ZTQXZQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekUyTUgwZ2IyWm1jMlYwSUM4K1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN016SXdmU0J2Wm1aelpYUTlleUZwYzFKMGJIMGdMejVjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNU1iMkZrYVc1blNXNWthV05oZEc5eUxtUmxabUYxYkhSUWNtOXdjeUE5SUhzZ2MybDZaVG9nTkNCOU8xeHVJbDE5ICovXCIpXG4gIH0pO1xufTtcblxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAwLFxuICAgIG9mZnNldDogaXNSdGxcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDE2MCxcbiAgICBvZmZzZXQ6IHRydWVcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDMyMCxcbiAgICBvZmZzZXQ6ICFpc1J0bFxuICB9KSk7XG59O1xuTG9hZGluZ0luZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDRcbn07XG5cbnZhciBjc3MkMSA9IGZ1bmN0aW9uIGNzcyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZi5pc0ZvY3VzZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnY29udHJvbCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWw1IDogY29sb3JzLm5ldXRyYWwwLFxuICAgIGJvcmRlckNvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJXaWR0aDogMSxcbiAgICBib3hTaGFkb3c6IGlzRm9jdXNlZCA/IFwiMCAwIDAgMXB4IFwiLmNvbmNhdChjb2xvcnMucHJpbWFyeSkgOiB1bmRlZmluZWQsXG4gICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5IZWlnaHQ6IHNwYWNpbmcuY29udHJvbEhlaWdodCxcbiAgICBvdXRsaW5lOiAnMCAhaW1wb3J0YW50JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEwMG1zJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMzBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgQ29udHJvbCA9IGZ1bmN0aW9uIENvbnRyb2wocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbjtcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBpbm5lclJlZixcbiAgICBjc3M6IGdldFN0eWxlcygnY29udHJvbCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGNvbnRyb2w6IHRydWUsXG4gICAgICAnY29udHJvbC0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJ2NvbnRyb2wtLWlzLWZvY3VzZWQnOiBpc0ZvY3VzZWQsXG4gICAgICAnY29udHJvbC0tbWVudS1pcy1vcGVuJzogbWVudUlzT3BlblxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImRhdGFcIl07XG52YXIgZ3JvdXBDU1MgPSBmdW5jdGlvbiBncm91cENTUyhfcmVmKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZi50aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIHBhZGRpbmdCb3R0b206IHNwYWNpbmcuYmFzZVVuaXQgKiAyLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcuYmFzZVVuaXQgKiAyXG4gIH07XG59O1xuXG52YXIgR3JvdXAgPSBmdW5jdGlvbiBHcm91cChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBIZWFkaW5nID0gcHJvcHMuSGVhZGluZyxcbiAgICAgIGhlYWRpbmdQcm9wcyA9IHByb3BzLmhlYWRpbmdQcm9wcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIHRoZW1lID0gcHJvcHMudGhlbWUsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnZ3JvdXAnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBncm91cDogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGpzeChIZWFkaW5nLCBfZXh0ZW5kcyh7fSwgaGVhZGluZ1Byb3BzLCB7XG4gICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzLFxuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICBjeDogY3hcbiAgfSksIGxhYmVsKSwganN4KFwiZGl2XCIsIG51bGwsIGNoaWxkcmVuKSk7XG59O1xuXG52YXIgZ3JvdXBIZWFkaW5nQ1NTID0gZnVuY3Rpb24gZ3JvdXBIZWFkaW5nQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2dyb3VwJyxcbiAgICBjb2xvcjogJyM5OTknLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICc3NSUnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBtYXJnaW5Cb3R0b206ICcwLjI1ZW0nLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH07XG59O1xudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKTtcbiAgICAgIF9jbGVhbkNvbW1vblByb3BzLmRhdGE7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2xlYW5Db21tb25Qcm9wcywgX2V4Y2x1ZGVkJDEpO1xuXG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdncm91cEhlYWRpbmcnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnZ3JvdXAtaGVhZGluZyc6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpKTtcbn07XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJpbm5lclJlZlwiLCBcImlzRGlzYWJsZWRcIiwgXCJpc0hpZGRlblwiLCBcImlucHV0Q2xhc3NOYW1lXCJdO1xudmFyIGlucHV0Q1NTID0gZnVuY3Rpb24gaW5wdXRDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoe1xuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIC8vIGZvcmNlIGNzcyB0byByZWNvbXB1dGUgd2hlbiB2YWx1ZSBjaGFuZ2UgZHVlIHRvIEBlbW90aW9uIGJ1Zy5cbiAgICAvLyBXZSBjYW4gcmVtb3ZlIGl0IHdoZW5ldmVyIHRoZSBidWcgaXMgZml4ZWQuXG4gICAgdHJhbnNmb3JtOiB2YWx1ZSA/ICd0cmFuc2xhdGVaKDApJyA6ICcnXG4gIH0sIGNvbnRhaW5lclN0eWxlKTtcbn07XG52YXIgc3BhY2luZ1N0eWxlID0ge1xuICBncmlkQXJlYTogJzEgLyAyJyxcbiAgZm9udDogJ2luaGVyaXQnLFxuICBtaW5XaWR0aDogJzJweCcsXG4gIGJvcmRlcjogMCxcbiAgbWFyZ2luOiAwLFxuICBvdXRsaW5lOiAwLFxuICBwYWRkaW5nOiAwXG59O1xudmFyIGNvbnRhaW5lclN0eWxlID0ge1xuICBmbGV4OiAnMSAxIGF1dG8nLFxuICBkaXNwbGF5OiAnaW5saW5lLWdyaWQnLFxuICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMCBtaW4tY29udGVudCcsXG4gICcmOmFmdGVyJzogX29iamVjdFNwcmVhZDIoe1xuICAgIGNvbnRlbnQ6ICdhdHRyKGRhdGEtdmFsdWUpIFwiIFwiJyxcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAncHJlJ1xuICB9LCBzcGFjaW5nU3R5bGUpXG59O1xuXG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHtcbiAgICBsYWJlbDogJ2lucHV0JyxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIGJhY2tncm91bmQ6IDAsXG4gICAgb3BhY2l0eTogaXNIaWRkZW4gPyAwIDogMSxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sIHNwYWNpbmdTdHlsZSk7XG59O1xuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG5cbiAgdmFyIF9jbGVhbkNvbW1vblByb3BzID0gY2xlYW5Db21tb25Qcm9wcyhwcm9wcyksXG4gICAgICBpbm5lclJlZiA9IF9jbGVhbkNvbW1vblByb3BzLmlubmVyUmVmLFxuICAgICAgaXNEaXNhYmxlZCA9IF9jbGVhbkNvbW1vblByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc0hpZGRlbiA9IF9jbGVhbkNvbW1vblByb3BzLmlzSGlkZGVuLFxuICAgICAgaW5wdXRDbGFzc05hbWUgPSBfY2xlYW5Db21tb25Qcm9wcy5pbnB1dENsYXNzTmFtZSxcbiAgICAgIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NsZWFuQ29tbW9uUHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICAnaW5wdXQtY29udGFpbmVyJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgY3NzOiBnZXRTdHlsZXMoJ2lucHV0JywgcHJvcHMpLFxuICAgIFwiZGF0YS12YWx1ZVwiOiB2YWx1ZSB8fCAnJ1xuICB9LCBqc3goXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbnB1dDogdHJ1ZVxuICAgIH0sIGlucHV0Q2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIHN0eWxlOiBpbnB1dFN0eWxlKGlzSGlkZGVuKSxcbiAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICB9LCBpbm5lclByb3BzKSkpO1xufTtcblxudmFyIG11bHRpVmFsdWVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlQ1NTKF9yZWYpIHtcbiAgdmFyIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdtdWx0aVZhbHVlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5uZXV0cmFsMTAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtYXJnaW46IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1pbldpZHRoOiAwIC8vIHJlc29sdmVzIGZsZXgvdGV4dC1vdmVyZmxvdyBidWdcblxuICB9O1xufTtcbnZhciBtdWx0aVZhbHVlTGFiZWxDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlTGFiZWxDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYyJHRoZW1lID0gX3JlZjIudGhlbWUsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMiR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnMsXG4gICAgICBjcm9wV2l0aEVsbGlwc2lzID0gX3JlZjIuY3JvcFdpdGhFbGxpcHNpcztcbiAgcmV0dXJuIHtcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyAvIDIsXG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsODAsXG4gICAgZm9udFNpemU6ICc4NSUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAzLFxuICAgIHBhZGRpbmdMZWZ0OiA2LFxuICAgIHRleHRPdmVyZmxvdzogY3JvcFdpdGhFbGxpcHNpcyB8fCBjcm9wV2l0aEVsbGlwc2lzID09PSB1bmRlZmluZWQgPyAnZWxsaXBzaXMnIDogdW5kZWZpbmVkLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH07XG59O1xudmFyIG11bHRpVmFsdWVSZW1vdmVDU1MgPSBmdW5jdGlvbiBtdWx0aVZhbHVlUmVtb3ZlQ1NTKF9yZWYzKSB7XG4gIHZhciBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYzJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmMyR0aGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICBjb2xvcnMgPSBfcmVmMyR0aGVtZS5jb2xvcnMsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQ7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLmRhbmdlckxpZ2h0IDogdW5kZWZpbmVkLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmRhbmdlckxpZ2h0LFxuICAgICAgY29sb3I6IGNvbG9ycy5kYW5nZXJcbiAgICB9XG4gIH07XG59O1xudmFyIE11bHRpVmFsdWVHZW5lcmljID0gZnVuY3Rpb24gTXVsdGlWYWx1ZUdlbmVyaWMoX3JlZjQpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjQuY2hpbGRyZW4sXG4gICAgICBpbm5lclByb3BzID0gX3JlZjQuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBpbm5lclByb3BzLCBjaGlsZHJlbik7XG59O1xudmFyIE11bHRpVmFsdWVDb250YWluZXIgPSBNdWx0aVZhbHVlR2VuZXJpYztcbnZhciBNdWx0aVZhbHVlTGFiZWwgPSBNdWx0aVZhbHVlR2VuZXJpYztcbmZ1bmN0aW9uIE11bHRpVmFsdWVSZW1vdmUoX3JlZjUpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjUuY2hpbGRyZW4sXG4gICAgICBpbm5lclByb3BzID0gX3JlZjUuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJidXR0b25cIlxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KENyb3NzSWNvbiwge1xuICAgIHNpemU6IDE0XG4gIH0pKTtcbn1cblxudmFyIE11bHRpVmFsdWUgPSBmdW5jdGlvbiBNdWx0aVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZGF0YSA9IHByb3BzLmRhdGEsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgcmVtb3ZlUHJvcHMgPSBwcm9wcy5yZW1vdmVQcm9wcyxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHZhciBDb250YWluZXIgPSBjb21wb25lbnRzLkNvbnRhaW5lcixcbiAgICAgIExhYmVsID0gY29tcG9uZW50cy5MYWJlbCxcbiAgICAgIFJlbW92ZSA9IGNvbXBvbmVudHMuUmVtb3ZlO1xuICByZXR1cm4ganN4KENsYXNzTmFtZXMsIG51bGwsIGZ1bmN0aW9uIChfcmVmNikge1xuICAgIHZhciBjc3MgPSBfcmVmNi5jc3MsXG4gICAgICAgIGVtb3Rpb25DeCA9IF9yZWY2LmN4O1xuICAgIHJldHVybiBqc3goQ29udGFpbmVyLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZSc6IHRydWUsXG4gICAgICAgICAgJ211bHRpLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sIGlubmVyUHJvcHMpLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwganN4KExhYmVsLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlTGFiZWwnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19sYWJlbCc6IHRydWVcbiAgICAgICAgfSwgY2xhc3NOYW1lKSlcbiAgICAgIH0sXG4gICAgICBzZWxlY3RQcm9wczogc2VsZWN0UHJvcHNcbiAgICB9LCBjaGlsZHJlbiksIGpzeChSZW1vdmUsIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbm5lclByb3BzOiBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGNsYXNzTmFtZTogZW1vdGlvbkN4KGNzcyhnZXRTdHlsZXMoJ211bHRpVmFsdWVSZW1vdmUnLCBwcm9wcykpLCBjeCh7XG4gICAgICAgICAgJ211bHRpLXZhbHVlX19yZW1vdmUnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IFwiUmVtb3ZlIFwiLmNvbmNhdChjaGlsZHJlbiB8fCAnb3B0aW9uJylcbiAgICAgIH0sIHJlbW92ZVByb3BzKSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0pKTtcbiAgfSk7XG59O1xuXG52YXIgb3B0aW9uQ1NTID0gZnVuY3Rpb24gb3B0aW9uQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeTI1IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMjAgOiBpc1NlbGVjdGVkID8gY29sb3JzLm5ldXRyYWwwIDogJ2luaGVyaXQnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweCBcIikuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCA/IGlzU2VsZWN0ZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5wcmltYXJ5NTAgOiB1bmRlZmluZWRcbiAgICB9XG4gIH07XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdvcHRpb24nLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBvcHRpb246IHRydWUsXG4gICAgICAnb3B0aW9uLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBpc0Rpc2FibGVkXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgcGxhY2Vob2xkZXJDU1MgPSBmdW5jdGlvbiBwbGFjZWhvbGRlckNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw1MCxcbiAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMlxuICB9O1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhfcmVmKSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX3JlZi5pc0Rpc2FibGVkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBzcGFjaW5nID0gX3JlZiR0aGVtZS5zcGFjaW5nLFxuICAgICAgY29sb3JzID0gX3JlZiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdzaW5nbGVWYWx1ZScsXG4gICAgY29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDQwIDogY29sb3JzLm5ldXRyYWw4MCxcbiAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn07XG5cbnZhciBTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uIFNpbmdsZVZhbHVlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdzaW5nbGVWYWx1ZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdzaW5nbGUtdmFsdWUnOiB0cnVlLFxuICAgICAgJ3NpbmdsZS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGNvbXBvbmVudHMgPSB7XG4gIENsZWFySW5kaWNhdG9yOiBDbGVhckluZGljYXRvcixcbiAgQ29udHJvbDogQ29udHJvbCxcbiAgRHJvcGRvd25JbmRpY2F0b3I6IERyb3Bkb3duSW5kaWNhdG9yLFxuICBEb3duQ2hldnJvbjogRG93bkNoZXZyb24sXG4gIENyb3NzSWNvbjogQ3Jvc3NJY29uLFxuICBHcm91cDogR3JvdXAsXG4gIEdyb3VwSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICBJbmRpY2F0b3JzQ29udGFpbmVyOiBJbmRpY2F0b3JzQ29udGFpbmVyLFxuICBJbmRpY2F0b3JTZXBhcmF0b3I6IEluZGljYXRvclNlcGFyYXRvcixcbiAgSW5wdXQ6IElucHV0LFxuICBMb2FkaW5nSW5kaWNhdG9yOiBMb2FkaW5nSW5kaWNhdG9yLFxuICBNZW51OiBNZW51LFxuICBNZW51TGlzdDogTWVudUxpc3QsXG4gIE1lbnVQb3J0YWw6IE1lbnVQb3J0YWwsXG4gIExvYWRpbmdNZXNzYWdlOiBMb2FkaW5nTWVzc2FnZSxcbiAgTm9PcHRpb25zTWVzc2FnZTogTm9PcHRpb25zTWVzc2FnZSxcbiAgTXVsdGlWYWx1ZTogTXVsdGlWYWx1ZSxcbiAgTXVsdGlWYWx1ZUNvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgTXVsdGlWYWx1ZUxhYmVsOiBNdWx0aVZhbHVlTGFiZWwsXG4gIE11bHRpVmFsdWVSZW1vdmU6IE11bHRpVmFsdWVSZW1vdmUsXG4gIE9wdGlvbjogT3B0aW9uLFxuICBQbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gIFNlbGVjdENvbnRhaW5lcjogU2VsZWN0Q29udGFpbmVyLFxuICBTaW5nbGVWYWx1ZTogU2luZ2xlVmFsdWUsXG4gIFZhbHVlQ29udGFpbmVyOiBWYWx1ZUNvbnRhaW5lclxufTtcbnZhciBkZWZhdWx0Q29tcG9uZW50cyA9IGZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRzKHByb3BzKSB7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29tcG9uZW50cyksIHByb3BzLmNvbXBvbmVudHMpO1xufTtcblxuZXhwb3J0IHsgaXNUb3VjaENhcGFibGUgYXMgQSwgaXNNb2JpbGVEZXZpY2UgYXMgQiwgbXVsdGlWYWx1ZUFzVmFsdWUgYXMgQywgc2luZ2xlVmFsdWVBc1ZhbHVlIGFzIEQsIHZhbHVlVGVybmFyeSBhcyBFLCBjbGFzc05hbWVzIGFzIEYsIGRlZmF1bHRDb21wb25lbnRzIGFzIEcsIG5vdE51bGxpc2ggYXMgSCwgaXNEb2N1bWVudEVsZW1lbnQgYXMgSSwgY2xlYW5WYWx1ZSBhcyBKLCBzY3JvbGxJbnRvVmlldyBhcyBLLCBub29wIGFzIEwsIE1lbnVQbGFjZXIgYXMgTSwgaGFuZGxlSW5wdXRDaGFuZ2UgYXMgTiwgX2NyZWF0ZVN1cGVyIGFzIF8sIF9vYmplY3RTcHJlYWQyIGFzIGEsIGNsZWFySW5kaWNhdG9yQ1NTIGFzIGIsIGNvbXBvbmVudHMgYXMgYywgY29udGFpbmVyQ1NTIGFzIGQsIGNzcyQxIGFzIGUsIGRyb3Bkb3duSW5kaWNhdG9yQ1NTIGFzIGYsIGdyb3VwQ1NTIGFzIGcsIGdyb3VwSGVhZGluZ0NTUyBhcyBoLCBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTIGFzIGksIGluZGljYXRvclNlcGFyYXRvckNTUyBhcyBqLCBpbnB1dENTUyBhcyBrLCBsb2FkaW5nSW5kaWNhdG9yQ1NTIGFzIGwsIGxvYWRpbmdNZXNzYWdlQ1NTIGFzIG0sIG1lbnVDU1MgYXMgbiwgbWVudUxpc3RDU1MgYXMgbywgbWVudVBvcnRhbENTUyBhcyBwLCBtdWx0aVZhbHVlQ1NTIGFzIHEsIHJlbW92ZVByb3BzIGFzIHIsIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyBhcyBzLCBtdWx0aVZhbHVlTGFiZWxDU1MgYXMgdCwgbXVsdGlWYWx1ZVJlbW92ZUNTUyBhcyB1LCBub09wdGlvbnNNZXNzYWdlQ1NTIGFzIHYsIG9wdGlvbkNTUyBhcyB3LCBwbGFjZWhvbGRlckNTUyBhcyB4LCBjc3MgYXMgeSwgdmFsdWVDb250YWluZXJDU1MgYXMgeiB9O1xuIiwiaW1wb3J0IHsgYSBhcyBfb2JqZWN0U3ByZWFkMiB9IGZyb20gJy4vaW5kZXgtYTc2OTBhMzMuZXNtLmpzJztcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZGVmYXVsdElucHV0VmFsdWVcIiwgXCJkZWZhdWx0TWVudUlzT3BlblwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImlucHV0VmFsdWVcIiwgXCJtZW51SXNPcGVuXCIsIFwib25DaGFuZ2VcIiwgXCJvbklucHV0Q2hhbmdlXCIsIFwib25NZW51Q2xvc2VcIiwgXCJvbk1lbnVPcGVuXCIsIFwidmFsdWVcIl07XG5mdW5jdGlvbiB1c2VTdGF0ZU1hbmFnZXIoX3JlZikge1xuICB2YXIgX3JlZiRkZWZhdWx0SW5wdXRWYWx1ID0gX3JlZi5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gX3JlZiRkZWZhdWx0SW5wdXRWYWx1ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkZGVmYXVsdElucHV0VmFsdSxcbiAgICAgIF9yZWYkZGVmYXVsdE1lbnVJc09wZSA9IF9yZWYuZGVmYXVsdE1lbnVJc09wZW4sXG4gICAgICBkZWZhdWx0TWVudUlzT3BlbiA9IF9yZWYkZGVmYXVsdE1lbnVJc09wZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlZmF1bHRNZW51SXNPcGUsXG4gICAgICBfcmVmJGRlZmF1bHRWYWx1ZSA9IF9yZWYuZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZiRkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGRlZmF1bHRWYWx1ZSxcbiAgICAgIHByb3BzSW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcbiAgICAgIHByb3BzTWVudUlzT3BlbiA9IF9yZWYubWVudUlzT3BlbixcbiAgICAgIHByb3BzT25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgcHJvcHNPbklucHV0Q2hhbmdlID0gX3JlZi5vbklucHV0Q2hhbmdlLFxuICAgICAgcHJvcHNPbk1lbnVDbG9zZSA9IF9yZWYub25NZW51Q2xvc2UsXG4gICAgICBwcm9wc09uTWVudU9wZW4gPSBfcmVmLm9uTWVudU9wZW4sXG4gICAgICBwcm9wc1ZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIHJlc3RTZWxlY3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wc0lucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzSW5wdXRWYWx1ZSA6IGRlZmF1bHRJbnB1dFZhbHVlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc3RhdGVJbnB1dFZhbHVlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFN0YXRlSW5wdXRWYWx1ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShwcm9wc01lbnVJc09wZW4gIT09IHVuZGVmaW5lZCA/IHByb3BzTWVudUlzT3BlbiA6IGRlZmF1bHRNZW51SXNPcGVuKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHN0YXRlTWVudUlzT3BlbiA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTdGF0ZU1lbnVJc09wZW4gPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUocHJvcHNWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHNWYWx1ZSA6IGRlZmF1bHRWYWx1ZSksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBzdGF0ZVZhbHVlID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldFN0YXRlVmFsdWUgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcHNPbkNoYW5nZSh2YWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfVxuXG4gICAgc2V0U3RhdGVWYWx1ZSh2YWx1ZSk7XG4gIH0sIFtwcm9wc09uQ2hhbmdlXSk7XG4gIHZhciBvbklucHV0Q2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiBwcm9wc09uSW5wdXRDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5ld1ZhbHVlID0gcHJvcHNPbklucHV0Q2hhbmdlKHZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZUlucHV0VmFsdWUobmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWUpO1xuICB9LCBbcHJvcHNPbklucHV0Q2hhbmdlXSk7XG4gIHZhciBvbk1lbnVPcGVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbk1lbnVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wc09uTWVudU9wZW4oKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZU1lbnVJc09wZW4odHJ1ZSk7XG4gIH0sIFtwcm9wc09uTWVudU9wZW5dKTtcbiAgdmFyIG9uTWVudUNsb3NlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgcHJvcHNPbk1lbnVDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcHNPbk1lbnVDbG9zZSgpO1xuICAgIH1cblxuICAgIHNldFN0YXRlTWVudUlzT3BlbihmYWxzZSk7XG4gIH0sIFtwcm9wc09uTWVudUNsb3NlXSk7XG4gIHZhciBpbnB1dFZhbHVlID0gcHJvcHNJbnB1dFZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wc0lucHV0VmFsdWUgOiBzdGF0ZUlucHV0VmFsdWU7XG4gIHZhciBtZW51SXNPcGVuID0gcHJvcHNNZW51SXNPcGVuICE9PSB1bmRlZmluZWQgPyBwcm9wc01lbnVJc09wZW4gOiBzdGF0ZU1lbnVJc09wZW47XG4gIHZhciB2YWx1ZSA9IHByb3BzVmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzVmFsdWUgOiBzdGF0ZVZhbHVlO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHJlc3RTZWxlY3RQcm9wcyksIHt9LCB7XG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBtZW51SXNPcGVuOiBtZW51SXNPcGVuLFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBvbklucHV0Q2hhbmdlOiBvbklucHV0Q2hhbmdlLFxuICAgIG9uTWVudUNsb3NlOiBvbk1lbnVDbG9zZSxcbiAgICBvbk1lbnVPcGVuOiBvbk1lbnVPcGVuLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cblxuZXhwb3J0IHsgdXNlU3RhdGVNYW5hZ2VyIGFzIHUgfTtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IGEgYXMgX29iamVjdFNwcmVhZDIsIHIgYXMgcmVtb3ZlUHJvcHMsIHMgYXMgc3VwcG9ydHNQYXNzaXZlRXZlbnRzLCBiIGFzIGNsZWFySW5kaWNhdG9yQ1NTLCBkIGFzIGNvbnRhaW5lckNTUywgZSBhcyBjc3MkMSwgZiBhcyBkcm9wZG93bkluZGljYXRvckNTUywgZyBhcyBncm91cENTUywgaCBhcyBncm91cEhlYWRpbmdDU1MsIGkgYXMgaW5kaWNhdG9yc0NvbnRhaW5lckNTUywgaiBhcyBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsIGsgYXMgaW5wdXRDU1MsIGwgYXMgbG9hZGluZ0luZGljYXRvckNTUywgbSBhcyBsb2FkaW5nTWVzc2FnZUNTUywgbiBhcyBtZW51Q1NTLCBvIGFzIG1lbnVMaXN0Q1NTLCBwIGFzIG1lbnVQb3J0YWxDU1MsIHEgYXMgbXVsdGlWYWx1ZUNTUywgdCBhcyBtdWx0aVZhbHVlTGFiZWxDU1MsIHUgYXMgbXVsdGlWYWx1ZVJlbW92ZUNTUywgdiBhcyBub09wdGlvbnNNZXNzYWdlQ1NTLCB3IGFzIG9wdGlvbkNTUywgeCBhcyBwbGFjZWhvbGRlckNTUywgeSBhcyBjc3MkMiwgeiBhcyB2YWx1ZUNvbnRhaW5lckNTUywgQSBhcyBpc1RvdWNoQ2FwYWJsZSwgQiBhcyBpc01vYmlsZURldmljZSwgXyBhcyBfY3JlYXRlU3VwZXIsIEMgYXMgbXVsdGlWYWx1ZUFzVmFsdWUsIEQgYXMgc2luZ2xlVmFsdWVBc1ZhbHVlLCBFIGFzIHZhbHVlVGVybmFyeSwgRiBhcyBjbGFzc05hbWVzLCBHIGFzIGRlZmF1bHRDb21wb25lbnRzLCBIIGFzIG5vdE51bGxpc2gsIEkgYXMgaXNEb2N1bWVudEVsZW1lbnQsIEogYXMgY2xlYW5WYWx1ZSwgSyBhcyBzY3JvbGxJbnRvVmlldywgTCBhcyBub29wLCBNIGFzIE1lbnVQbGFjZXIgfSBmcm9tICcuL2luZGV4LWE3NjkwYTMzLmVzbS5qcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW8sIEZyYWdtZW50LCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fJDEoKSB7IHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjsgfVxuXG52YXIgX3JlZiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbmFtZTogXCI3cGcwY2otYTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcFwiXG59IDoge1xuICBuYW1lOiBcIjFmNDNhdnotYTExeVRleHQtQTExeVRleHRcIixcbiAgc3R5bGVzOiBcImxhYmVsOmExMXlUZXh0O3otaW5kZXg6OTk5OTtib3JkZXI6MDtjbGlwOnJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtoZWlnaHQ6MXB4O3dpZHRoOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3doaXRlLXNwYWNlOm5vd3JhcDtsYWJlbDpBMTF5VGV4dDtcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrRXhNWGxVWlhoMExuUnplQ0pkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZOU1NJc0ltWnBiR1VpT2lKQk1URjVWR1Y0ZEM1MGMzZ2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lvZ1FHcHplQ0JxYzNnZ0tpOWNibWx0Y0c5eWRDQjdJR3B6ZUNCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDNKbFlXTjBKenRjYmx4dUx5OGdRWE56YVhOMGFYWmxJSFJsZUhRZ2RHOGdaR1Z6WTNKcFltVWdkbWx6ZFdGc0lHVnNaVzFsYm5SekxpQklhV1JrWlc0Z1ptOXlJSE5wWjJoMFpXUWdkWE5sY25NdVhHNWpiMjV6ZENCQk1URjVWR1Y0ZENBOUlDaHdjbTl3Y3pvZ1NsTllMa2x1ZEhKcGJuTnBZMFZzWlcxbGJuUnpXeWR6Y0dGdUoxMHBJRDArSUNoY2JpQWdQSE53WVc1Y2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHeGhZbVZzT2lBbllURXhlVlJsZUhRbkxGeHVJQ0FnSUNBZ2VrbHVaR1Y0T2lBNU9UazVMRnh1SUNBZ0lDQWdZbTl5WkdWeU9pQXdMRnh1SUNBZ0lDQWdZMnhwY0RvZ0ozSmxZM1FvTVhCNExDQXhjSGdzSURGd2VDd2dNWEI0S1Njc1hHNGdJQ0FnSUNCb1pXbG5hSFE2SURFc1hHNGdJQ0FnSUNCM2FXUjBhRG9nTVN4Y2JpQWdJQ0FnSUhCdmMybDBhVzl1T2lBbllXSnpiMngxZEdVbkxGeHVJQ0FnSUNBZ2IzWmxjbVpzYjNjNklDZG9hV1JrWlc0bkxGeHVJQ0FnSUNBZ2NHRmtaR2x1WnpvZ01DeGNiaUFnSUNBZ0lIZG9hWFJsVTNCaFkyVTZJQ2R1YjNkeVlYQW5MRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRVEV4ZVZSbGVIUTdYRzRpWFgwPSAqL1wiLFxuICB0b1N0cmluZzogX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMVxufTtcblxudmFyIEExMXlUZXh0ID0gZnVuY3Rpb24gQTExeVRleHQocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNzczogX3JlZlxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIGRlZmF1bHRBcmlhTGl2ZU1lc3NhZ2VzID0ge1xuICBndWlkYW5jZTogZnVuY3Rpb24gZ3VpZGFuY2UocHJvcHMpIHtcbiAgICB2YXIgaXNTZWFyY2hhYmxlID0gcHJvcHMuaXNTZWFyY2hhYmxlLFxuICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgIHRhYlNlbGVjdHNWYWx1ZSA9IHByb3BzLnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgY29udGV4dCA9IHByb3BzLmNvbnRleHQ7XG5cbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZXR1cm4gXCJVc2UgVXAgYW5kIERvd24gdG8gY2hvb3NlIG9wdGlvbnNcIi5jb25jYXQoaXNEaXNhYmxlZCA/ICcnIDogJywgcHJlc3MgRW50ZXIgdG8gc2VsZWN0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBvcHRpb24nLCBcIiwgcHJlc3MgRXNjYXBlIHRvIGV4aXQgdGhlIG1lbnVcIikuY29uY2F0KHRhYlNlbGVjdHNWYWx1ZSA/ICcsIHByZXNzIFRhYiB0byBzZWxlY3QgdGhlIG9wdGlvbiBhbmQgZXhpdCB0aGUgbWVudScgOiAnJywgXCIuXCIpO1xuXG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm9wc1snYXJpYS1sYWJlbCddIHx8ICdTZWxlY3QnLCBcIiBpcyBmb2N1c2VkIFwiKS5jb25jYXQoaXNTZWFyY2hhYmxlID8gJyx0eXBlIHRvIHJlZmluZSBsaXN0JyA6ICcnLCBcIiwgcHJlc3MgRG93biB0byBvcGVuIHRoZSBtZW51LCBcIikuY29uY2F0KGlzTXVsdGkgPyAnIHByZXNzIGxlZnQgdG8gZm9jdXMgc2VsZWN0ZWQgdmFsdWVzJyA6ICcnKTtcblxuICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICByZXR1cm4gJ1VzZSBsZWZ0IGFuZCByaWdodCB0byB0b2dnbGUgYmV0d2VlbiBmb2N1c2VkIHZhbHVlcywgcHJlc3MgQmFja3NwYWNlIHRvIHJlbW92ZSB0aGUgY3VycmVudGx5IGZvY3VzZWQgdmFsdWUnO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UocHJvcHMpIHtcbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgICBfcHJvcHMkbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcHJvcHMkbGFiZWwgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGxhYmVsLFxuICAgICAgICBsYWJlbHMgPSBwcm9wcy5sYWJlbHMsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgICBjYXNlICdwb3AtdmFsdWUnOlxuICAgICAgY2FzZSAncmVtb3ZlLXZhbHVlJzpcbiAgICAgICAgcmV0dXJuIFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIsIGRlc2VsZWN0ZWQuXCIpO1xuXG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIHJldHVybiAnQWxsIHNlbGVjdGVkIG9wdGlvbnMgaGF2ZSBiZWVuIGNsZWFyZWQuJztcblxuICAgICAgY2FzZSAnaW5pdGlhbC1pbnB1dC1mb2N1cyc6XG4gICAgICAgIHJldHVybiBcIm9wdGlvblwiLmNvbmNhdChsYWJlbHMubGVuZ3RoID4gMSA/ICdzJyA6ICcnLCBcIiBcIikuY29uY2F0KGxhYmVscy5qb2luKCcsJyksIFwiLCBzZWxlY3RlZC5cIik7XG5cbiAgICAgIGNhc2UgJ3NlbGVjdC1vcHRpb24nOlxuICAgICAgICByZXR1cm4gaXNEaXNhYmxlZCA/IFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIgaXMgZGlzYWJsZWQuIFNlbGVjdCBhbm90aGVyIG9wdGlvbi5cIikgOiBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiLCBzZWxlY3RlZC5cIik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMocHJvcHMpIHtcbiAgICB2YXIgY29udGV4dCA9IHByb3BzLmNvbnRleHQsXG4gICAgICAgIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgX3Byb3BzJGxhYmVsMiA9IHByb3BzLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbDIgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGxhYmVsMixcbiAgICAgICAgc2VsZWN0VmFsdWUgPSBwcm9wcy5zZWxlY3RWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBwcm9wcy5pc1NlbGVjdGVkO1xuXG4gICAgdmFyIGdldEFycmF5SW5kZXggPSBmdW5jdGlvbiBnZXRBcnJheUluZGV4KGFyciwgaXRlbSkge1xuICAgICAgcmV0dXJuIGFyciAmJiBhcnIubGVuZ3RoID8gXCJcIi5jb25jYXQoYXJyLmluZGV4T2YoaXRlbSkgKyAxLCBcIiBvZiBcIikuY29uY2F0KGFyci5sZW5ndGgpIDogJyc7XG4gICAgfTtcblxuICAgIGlmIChjb250ZXh0ID09PSAndmFsdWUnICYmIHNlbGVjdFZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJ2YWx1ZSBcIi5jb25jYXQobGFiZWwsIFwiIGZvY3VzZWQsIFwiKS5jb25jYXQoZ2V0QXJyYXlJbmRleChzZWxlY3RWYWx1ZSwgZm9jdXNlZCksIFwiLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ21lbnUnKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBpc0Rpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJztcbiAgICAgIHZhciBzdGF0dXMgPSBcIlwiLmNvbmNhdChpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICdmb2N1c2VkJykuY29uY2F0KGRpc2FibGVkKTtcbiAgICAgIHJldHVybiBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiIFwiKS5jb25jYXQoc3RhdHVzLCBcIiwgXCIpLmNvbmNhdChnZXRBcnJheUluZGV4KG9wdGlvbnMsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9LFxuICBvbkZpbHRlcjogZnVuY3Rpb24gb25GaWx0ZXIocHJvcHMpIHtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgIHJlc3VsdHNNZXNzYWdlID0gcHJvcHMucmVzdWx0c01lc3NhZ2U7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHJlc3VsdHNNZXNzYWdlKS5jb25jYXQoaW5wdXRWYWx1ZSA/ICcgZm9yIHNlYXJjaCB0ZXJtICcgKyBpbnB1dFZhbHVlIDogJycsIFwiLlwiKTtcbiAgfVxufTtcblxudmFyIExpdmVSZWdpb24gPSBmdW5jdGlvbiBMaXZlUmVnaW9uKHByb3BzKSB7XG4gIHZhciBhcmlhU2VsZWN0aW9uID0gcHJvcHMuYXJpYVNlbGVjdGlvbixcbiAgICAgIGZvY3VzZWRPcHRpb24gPSBwcm9wcy5mb2N1c2VkT3B0aW9uLFxuICAgICAgZm9jdXNlZFZhbHVlID0gcHJvcHMuZm9jdXNlZFZhbHVlLFxuICAgICAgZm9jdXNhYmxlT3B0aW9ucyA9IHByb3BzLmZvY3VzYWJsZU9wdGlvbnMsXG4gICAgICBpc0ZvY3VzZWQgPSBwcm9wcy5pc0ZvY3VzZWQsXG4gICAgICBzZWxlY3RWYWx1ZSA9IHByb3BzLnNlbGVjdFZhbHVlLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcyxcbiAgICAgIGlkID0gcHJvcHMuaWQ7XG4gIHZhciBhcmlhTGl2ZU1lc3NhZ2VzID0gc2VsZWN0UHJvcHMuYXJpYUxpdmVNZXNzYWdlcyxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gc2VsZWN0UHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBpbnB1dFZhbHVlID0gc2VsZWN0UHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgIGlzTXVsdGkgPSBzZWxlY3RQcm9wcy5pc011bHRpLFxuICAgICAgaXNPcHRpb25EaXNhYmxlZCA9IHNlbGVjdFByb3BzLmlzT3B0aW9uRGlzYWJsZWQsXG4gICAgICBpc1NlYXJjaGFibGUgPSBzZWxlY3RQcm9wcy5pc1NlYXJjaGFibGUsXG4gICAgICBtZW51SXNPcGVuID0gc2VsZWN0UHJvcHMubWVudUlzT3BlbixcbiAgICAgIG9wdGlvbnMgPSBzZWxlY3RQcm9wcy5vcHRpb25zLFxuICAgICAgc2NyZWVuUmVhZGVyU3RhdHVzID0gc2VsZWN0UHJvcHMuc2NyZWVuUmVhZGVyU3RhdHVzLFxuICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gc2VsZWN0UHJvcHMudGFiU2VsZWN0c1ZhbHVlO1xuICB2YXIgYXJpYUxhYmVsID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGFiZWwnXTtcbiAgdmFyIGFyaWFMaXZlID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGl2ZSddOyAvLyBVcGRhdGUgYXJpYSBsaXZlIG1lc3NhZ2UgY29uZmlndXJhdGlvbiB3aGVuIHByb3AgY2hhbmdlc1xuXG4gIHZhciBtZXNzYWdlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVmYXVsdEFyaWFMaXZlTWVzc2FnZXMpLCBhcmlhTGl2ZU1lc3NhZ2VzIHx8IHt9KTtcbiAgfSwgW2FyaWFMaXZlTWVzc2FnZXNdKTsgLy8gVXBkYXRlIGFyaWEgbGl2ZSBzZWxlY3RlZCBvcHRpb24gd2hlbiBwcm9wIGNoYW5nZXNcblxuICB2YXIgYXJpYVNlbGVjdGVkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChhcmlhU2VsZWN0aW9uICYmIG1lc3NhZ2VzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gYXJpYVNlbGVjdGlvbi5vcHRpb24sXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25zID0gYXJpYVNlbGVjdGlvbi5vcHRpb25zLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZSA9IGFyaWFTZWxlY3Rpb24ucmVtb3ZlZFZhbHVlLFxuICAgICAgICAgIHJlbW92ZWRWYWx1ZXMgPSBhcmlhU2VsZWN0aW9uLnJlbW92ZWRWYWx1ZXMsXG4gICAgICAgICAgdmFsdWUgPSBhcmlhU2VsZWN0aW9uLnZhbHVlOyAvLyBzZWxlY3Qtb3B0aW9uIHdoZW4gIWlzTXVsdGkgZG9lcyBub3QgcmV0dXJuIG9wdGlvbiBzbyB3ZSBhc3N1bWUgc2VsZWN0ZWQgb3B0aW9uIGlzIHZhbHVlXG5cbiAgICAgIHZhciBhc09wdGlvbiA9IGZ1bmN0aW9uIGFzT3B0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG51bGw7XG4gICAgICB9OyAvLyBJZiB0aGVyZSBpcyBqdXN0IG9uZSBpdGVtIGZyb20gdGhlIGFjdGlvbiB0aGVuIGdldCBpdHMgbGFiZWxcblxuXG4gICAgICB2YXIgc2VsZWN0ZWQgPSByZW1vdmVkVmFsdWUgfHwgb3B0aW9uIHx8IGFzT3B0aW9uKHZhbHVlKTtcbiAgICAgIHZhciBsYWJlbCA9IHNlbGVjdGVkID8gZ2V0T3B0aW9uTGFiZWwoc2VsZWN0ZWQpIDogJyc7IC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBpdGVtcyBmcm9tIHRoZSBhY3Rpb24gdGhlbiByZXR1cm4gYW4gYXJyYXkgb2YgbGFiZWxzXG5cbiAgICAgIHZhciBtdWx0aVNlbGVjdGVkID0gc2VsZWN0ZWRPcHRpb25zIHx8IHJlbW92ZWRWYWx1ZXMgfHwgdW5kZWZpbmVkO1xuICAgICAgdmFyIGxhYmVscyA9IG11bHRpU2VsZWN0ZWQgPyBtdWx0aVNlbGVjdGVkLm1hcChnZXRPcHRpb25MYWJlbCkgOiBbXTtcblxuICAgICAgdmFyIG9uQ2hhbmdlUHJvcHMgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIC8vIG11bHRpU2VsZWN0ZWQgaXRlbXMgYXJlIHVzdWFsbHkgaXRlbXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBzZWxlY3RlZFxuICAgICAgICAvLyBvciBzZXQgYnkgdGhlIHVzZXIgYXMgYSBkZWZhdWx0IHZhbHVlIHNvIHdlIGFzc3VtZSB0aGV5IGFyZSBub3QgZGlzYWJsZWRcbiAgICAgICAgaXNEaXNhYmxlZDogc2VsZWN0ZWQgJiYgaXNPcHRpb25EaXNhYmxlZChzZWxlY3RlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsczogbGFiZWxzXG4gICAgICB9LCBhcmlhU2VsZWN0aW9uKTtcblxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzLm9uQ2hhbmdlKG9uQ2hhbmdlUHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LCBbYXJpYVNlbGVjdGlvbiwgbWVzc2FnZXMsIGlzT3B0aW9uRGlzYWJsZWQsIHNlbGVjdFZhbHVlLCBnZXRPcHRpb25MYWJlbF0pO1xuICB2YXIgYXJpYUZvY3VzZWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9jdXNNc2cgPSAnJztcbiAgICB2YXIgZm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gfHwgZm9jdXNlZFZhbHVlO1xuICAgIHZhciBpc1NlbGVjdGVkID0gISEoZm9jdXNlZE9wdGlvbiAmJiBzZWxlY3RWYWx1ZSAmJiBzZWxlY3RWYWx1ZS5pbmNsdWRlcyhmb2N1c2VkT3B0aW9uKSk7XG5cbiAgICBpZiAoZm9jdXNlZCAmJiBtZXNzYWdlcy5vbkZvY3VzKSB7XG4gICAgICB2YXIgb25Gb2N1c1Byb3BzID0ge1xuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZCksXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQoZm9jdXNlZCwgc2VsZWN0VmFsdWUpLFxuICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBjb250ZXh0OiBmb2N1c2VkID09PSBmb2N1c2VkT3B0aW9uID8gJ21lbnUnIDogJ3ZhbHVlJyxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG4gICAgICB9O1xuICAgICAgZm9jdXNNc2cgPSBtZXNzYWdlcy5vbkZvY3VzKG9uRm9jdXNQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvY3VzTXNnO1xuICB9LCBbZm9jdXNlZE9wdGlvbiwgZm9jdXNlZFZhbHVlLCBnZXRPcHRpb25MYWJlbCwgaXNPcHRpb25EaXNhYmxlZCwgbWVzc2FnZXMsIG9wdGlvbnMsIHNlbGVjdFZhbHVlXSk7XG4gIHZhciBhcmlhUmVzdWx0cyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHRzTXNnID0gJyc7XG5cbiAgICBpZiAobWVudUlzT3BlbiAmJiBvcHRpb25zLmxlbmd0aCAmJiBtZXNzYWdlcy5vbkZpbHRlcikge1xuICAgICAgdmFyIHJlc3VsdHNNZXNzYWdlID0gc2NyZWVuUmVhZGVyU3RhdHVzKHtcbiAgICAgICAgY291bnQ6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdHNNc2cgPSBtZXNzYWdlcy5vbkZpbHRlcih7XG4gICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIHJlc3VsdHNNZXNzYWdlOiByZXN1bHRzTWVzc2FnZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNNc2c7XG4gIH0sIFtmb2N1c2FibGVPcHRpb25zLCBpbnB1dFZhbHVlLCBtZW51SXNPcGVuLCBtZXNzYWdlcywgb3B0aW9ucywgc2NyZWVuUmVhZGVyU3RhdHVzXSk7XG4gIHZhciBhcmlhR3VpZGFuY2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ3VpZGFuY2VNc2cgPSAnJztcblxuICAgIGlmIChtZXNzYWdlcy5ndWlkYW5jZSkge1xuICAgICAgdmFyIGNvbnRleHQgPSBmb2N1c2VkVmFsdWUgPyAndmFsdWUnIDogbWVudUlzT3BlbiA/ICdtZW51JyA6ICdpbnB1dCc7XG4gICAgICBndWlkYW5jZU1zZyA9IG1lc3NhZ2VzLmd1aWRhbmNlKHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZvY3VzZWRPcHRpb24gJiYgaXNPcHRpb25EaXNhYmxlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSksXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzU2VhcmNoYWJsZTogaXNTZWFyY2hhYmxlLFxuICAgICAgICB0YWJTZWxlY3RzVmFsdWU6IHRhYlNlbGVjdHNWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGd1aWRhbmNlTXNnO1xuICB9LCBbYXJpYUxhYmVsLCBmb2N1c2VkT3B0aW9uLCBmb2N1c2VkVmFsdWUsIGlzTXVsdGksIGlzT3B0aW9uRGlzYWJsZWQsIGlzU2VhcmNoYWJsZSwgbWVudUlzT3BlbiwgbWVzc2FnZXMsIHNlbGVjdFZhbHVlLCB0YWJTZWxlY3RzVmFsdWVdKTtcbiAgdmFyIGFyaWFDb250ZXh0ID0gXCJcIi5jb25jYXQoYXJpYUZvY3VzZWQsIFwiIFwiKS5jb25jYXQoYXJpYVJlc3VsdHMsIFwiIFwiKS5jb25jYXQoYXJpYUd1aWRhbmNlKTtcbiAgdmFyIFNjcmVlblJlYWRlclRleHQgPSBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChcInNwYW5cIiwge1xuICAgIGlkOiBcImFyaWEtc2VsZWN0aW9uXCJcbiAgfSwgYXJpYVNlbGVjdGVkKSwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1jb250ZXh0XCJcbiAgfSwgYXJpYUNvbnRleHQpKTtcbiAgdmFyIGlzSW5pdGlhbEZvY3VzID0gKGFyaWFTZWxlY3Rpb24gPT09IG51bGwgfHwgYXJpYVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJpYVNlbGVjdGlvbi5hY3Rpb24pID09PSAnaW5pdGlhbC1pbnB1dC1mb2N1cyc7XG4gIHJldHVybiBqc3goRnJhZ21lbnQsIG51bGwsIGpzeChBMTF5VGV4dCwge1xuICAgIGlkOiBpZFxuICB9LCBpc0luaXRpYWxGb2N1cyAmJiBTY3JlZW5SZWFkZXJUZXh0KSwganN4KEExMXlUZXh0LCB7XG4gICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmUsXG4gICAgXCJhcmlhLWF0b21pY1wiOiBcImZhbHNlXCIsXG4gICAgXCJhcmlhLXJlbGV2YW50XCI6IFwiYWRkaXRpb25zIHRleHRcIlxuICB9LCBpc0ZvY3VzZWQgJiYgIWlzSW5pdGlhbEZvY3VzICYmIFNjcmVlblJlYWRlclRleHQpKTtcbn07XG5cbnZhciBkaWFjcml0aWNzID0gW3tcbiAgYmFzZTogJ0EnLFxuICBsZXR0ZXJzOiBcIkFcXHUyNEI2XFx1RkYyMVxceEMwXFx4QzFcXHhDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHhDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx4QzRcXHUwMURFXFx1MUVBMlxceEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZcIlxufSwge1xuICBiYXNlOiAnQUEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzJcIlxufSwge1xuICBiYXNlOiAnQUUnLFxuICBsZXR0ZXJzOiBcIlxceEM2XFx1MDFGQ1xcdTAxRTJcIlxufSwge1xuICBiYXNlOiAnQU8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzRcIlxufSwge1xuICBiYXNlOiAnQVUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzZcIlxufSwge1xuICBiYXNlOiAnQVYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzhcXHVBNzNBXCJcbn0sIHtcbiAgYmFzZTogJ0FZJyxcbiAgbGV0dGVyczogXCJcXHVBNzNDXCJcbn0sIHtcbiAgYmFzZTogJ0InLFxuICBsZXR0ZXJzOiBcIkJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MVwiXG59LCB7XG4gIGJhc2U6ICdDJyxcbiAgbGV0dGVyczogXCJDXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx4QzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXCJcbn0sIHtcbiAgYmFzZTogJ0QnLFxuICBsZXR0ZXJzOiBcIkRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XCJcbn0sIHtcbiAgYmFzZTogJ0RaJyxcbiAgbGV0dGVyczogXCJcXHUwMUYxXFx1MDFDNFwiXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMlxcdTAxQzVcIlxufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IFwiRVxcdTI0QkFcXHVGRjI1XFx4QzhcXHhDOVxceENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxceENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVwiXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogXCJGXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIlxufSwge1xuICBiYXNlOiAnRycsXG4gIGxldHRlcnM6IFwiR1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXCJcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiBcIkhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCJcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiBcIklcXHUyNEJFXFx1RkYyOVxceENDXFx4Q0RcXHhDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHhDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N1wiXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogXCJKXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFwiXG59LCB7XG4gIGJhc2U6ICdLJyxcbiAgbGV0dGVyczogXCJLXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwiXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogXCJMXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIlxufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzdcIlxufSwge1xuICBiYXNlOiAnTGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzhcIlxufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IFwiTVxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNcIlxufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IFwiTlxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRcIlxufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0FcIlxufSwge1xuICBiYXNlOiAnTmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0JcIlxufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IFwiT1xcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IFwiXFx1MDFBMlwiXG59LCB7XG4gIGJhc2U6ICdPTycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RVwiXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IFwiXFx1MDIyMlwiXG59LCB7XG4gIGJhc2U6ICdQJyxcbiAgbGV0dGVyczogXCJQXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJcbn0sIHtcbiAgYmFzZTogJ1EnLFxuICBsZXR0ZXJzOiBcIlFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwiXG59LCB7XG4gIGJhc2U6ICdSJyxcbiAgbGV0dGVyczogXCJSXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4MlwiXG59LCB7XG4gIGJhc2U6ICdTJyxcbiAgbGV0dGVyczogXCJTXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NFwiXG59LCB7XG4gIGJhc2U6ICdUJyxcbiAgbGV0dGVyczogXCJUXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIlxufSwge1xuICBiYXNlOiAnVFonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjhcIlxufSwge1xuICBiYXNlOiAnVScsXG4gIGxldHRlcnM6IFwiVVxcdTI0Q0FcXHVGRjM1XFx4RDlcXHhEQVxceERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHhEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRcIlxufSwge1xuICBiYXNlOiAnVicsXG4gIGxldHRlcnM6IFwiVlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVcIlxufSwge1xuICBiYXNlOiAnVlknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjBcIlxufSwge1xuICBiYXNlOiAnVycsXG4gIGxldHRlcnM6IFwiV1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwiXG59LCB7XG4gIGJhc2U6ICdYJyxcbiAgbGV0dGVyczogXCJYXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wiXG59LCB7XG4gIGJhc2U6ICdZJyxcbiAgbGV0dGVyczogXCJZXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJcbn0sIHtcbiAgYmFzZTogJ1onLFxuICBsZXR0ZXJzOiBcIlpcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJcbn0sIHtcbiAgYmFzZTogJ2EnLFxuICBsZXR0ZXJzOiBcImFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHhFMFxceEUxXFx4RTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx4RTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxceEU0XFx1MDFERlxcdTFFQTNcXHhFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXCJcbn0sIHtcbiAgYmFzZTogJ2FhJyxcbiAgbGV0dGVyczogXCJcXHVBNzMzXCJcbn0sIHtcbiAgYmFzZTogJ2FlJyxcbiAgbGV0dGVyczogXCJcXHhFNlxcdTAxRkRcXHUwMUUzXCJcbn0sIHtcbiAgYmFzZTogJ2FvJyxcbiAgbGV0dGVyczogXCJcXHVBNzM1XCJcbn0sIHtcbiAgYmFzZTogJ2F1JyxcbiAgbGV0dGVyczogXCJcXHVBNzM3XCJcbn0sIHtcbiAgYmFzZTogJ2F2JyxcbiAgbGV0dGVyczogXCJcXHVBNzM5XFx1QTczQlwiXG59LCB7XG4gIGJhc2U6ICdheScsXG4gIGxldHRlcnM6IFwiXFx1QTczRFwiXG59LCB7XG4gIGJhc2U6ICdiJyxcbiAgbGV0dGVyczogXCJiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcIlxufSwge1xuICBiYXNlOiAnYycsXG4gIGxldHRlcnM6IFwiY1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxceEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRcIlxufSwge1xuICBiYXNlOiAnZCcsXG4gIGxldHRlcnM6IFwiZFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FcIlxufSwge1xuICBiYXNlOiAnZHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjNcXHUwMUM2XCJcbn0sIHtcbiAgYmFzZTogJ2UnLFxuICBsZXR0ZXJzOiBcImVcXHUyNEQ0XFx1RkY0NVxceEU4XFx4RTlcXHhFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHhFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXCJcbn0sIHtcbiAgYmFzZTogJ2YnLFxuICBsZXR0ZXJzOiBcImZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q1wiXG59LCB7XG4gIGJhc2U6ICdnJyxcbiAgbGV0dGVyczogXCJnXFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZcIlxufSwge1xuICBiYXNlOiAnaCcsXG4gIGxldHRlcnM6IFwiaFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XCJcbn0sIHtcbiAgYmFzZTogJ2h2JyxcbiAgbGV0dGVyczogXCJcXHUwMTk1XCJcbn0sIHtcbiAgYmFzZTogJ2knLFxuICBsZXR0ZXJzOiBcImlcXHUyNEQ4XFx1RkY0OVxceEVDXFx4RURcXHhFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxceEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMVwiXG59LCB7XG4gIGJhc2U6ICdqJyxcbiAgbGV0dGVyczogXCJqXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIlxufSwge1xuICBiYXNlOiAnaycsXG4gIGxldHRlcnM6IFwia1xcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIlxufSwge1xuICBiYXNlOiAnbCcsXG4gIGxldHRlcnM6IFwibFxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1wiXG59LCB7XG4gIGJhc2U6ICdsaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOVwiXG59LCB7XG4gIGJhc2U6ICdtJyxcbiAgbGV0dGVyczogXCJtXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2RlwiXG59LCB7XG4gIGJhc2U6ICduJyxcbiAgbGV0dGVyczogXCJuXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxceEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVcIlxufSwge1xuICBiYXNlOiAnbmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0NcIlxufSwge1xuICBiYXNlOiAnbycsXG4gIGxldHRlcnM6IFwib1xcdTI0REVcXHVGRjRGXFx4RjJcXHhGM1xceEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxceEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx4RjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx4RjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NVwiXG59LCB7XG4gIGJhc2U6ICdvaScsXG4gIGxldHRlcnM6IFwiXFx1MDFBM1wiXG59LCB7XG4gIGJhc2U6ICdvdScsXG4gIGxldHRlcnM6IFwiXFx1MDIyM1wiXG59LCB7XG4gIGJhc2U6ICdvbycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RlwiXG59LCB7XG4gIGJhc2U6ICdwJyxcbiAgbGV0dGVyczogXCJwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XCJcbn0sIHtcbiAgYmFzZTogJ3EnLFxuICBsZXR0ZXJzOiBcInFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OVwiXG59LCB7XG4gIGJhc2U6ICdyJyxcbiAgbGV0dGVyczogXCJyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M1wiXG59LCB7XG4gIGJhc2U6ICdzJyxcbiAgbGV0dGVyczogXCJzXFx1MjRFMlxcdUZGNTNcXHhERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXCJcbn0sIHtcbiAgYmFzZTogJ3QnLFxuICBsZXR0ZXJzOiBcInRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIlxufSwge1xuICBiYXNlOiAndHonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjlcIlxufSwge1xuICBiYXNlOiAndScsXG4gIGxldHRlcnM6IFwidVxcdTI0RTRcXHVGRjU1XFx4RjlcXHhGQVxceEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHhGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODlcIlxufSwge1xuICBiYXNlOiAndicsXG4gIGxldHRlcnM6IFwidlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENcIlxufSwge1xuICBiYXNlOiAndnknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjFcIlxufSwge1xuICBiYXNlOiAndycsXG4gIGxldHRlcnM6IFwid1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIlxufSwge1xuICBiYXNlOiAneCcsXG4gIGxldHRlcnM6IFwieFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIlxufSwge1xuICBiYXNlOiAneScsXG4gIGxldHRlcnM6IFwieVxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJcbn0sIHtcbiAgYmFzZTogJ3onLFxuICBsZXR0ZXJzOiBcInpcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJcbn1dO1xudmFyIGFueURpYWNyaXRpYyA9IG5ldyBSZWdFeHAoJ1snICsgZGlhY3JpdGljcy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQubGV0dGVycztcbn0pLmpvaW4oJycpICsgJ10nLCAnZycpO1xudmFyIGRpYWNyaXRpY1RvQmFzZSA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBkaWFjcml0aWMubGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgIGRpYWNyaXRpY1RvQmFzZVtkaWFjcml0aWMubGV0dGVyc1tqXV0gPSBkaWFjcml0aWMuYmFzZTtcbiAgfVxufVxuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoYW55RGlhY3JpdGljLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZGlhY3JpdGljVG9CYXNlW21hdGNoXTtcbiAgfSk7XG59O1xuXG52YXIgbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dCA9IG1lbW9pemVPbmUoc3RyaXBEaWFjcml0aWNzKTtcblxudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG9wdGlvbi5sYWJlbCwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUpO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb24sIHJhd0lucHV0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgaWYgKG9wdGlvbi5kYXRhLl9faXNOZXdfXykgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgX2lnbm9yZUNhc2UkaWdub3JlQWNjID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICAgIGlnbm9yZUFjY2VudHM6IHRydWUsXG4gICAgICBzdHJpbmdpZnk6IGRlZmF1bHRTdHJpbmdpZnksXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF0Y2hGcm9tOiAnYW55J1xuICAgIH0sIGNvbmZpZyksXG4gICAgICAgIGlnbm9yZUNhc2UgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQ2FzZSxcbiAgICAgICAgaWdub3JlQWNjZW50cyA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5pZ25vcmVBY2NlbnRzLFxuICAgICAgICBzdHJpbmdpZnkgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2Muc3RyaW5naWZ5LFxuICAgICAgICB0cmltID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnRyaW0sXG4gICAgICAgIG1hdGNoRnJvbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy5tYXRjaEZyb207XG5cbiAgICB2YXIgaW5wdXQgPSB0cmltID8gdHJpbVN0cmluZyhyYXdJbnB1dCkgOiByYXdJbnB1dDtcbiAgICB2YXIgY2FuZGlkYXRlID0gdHJpbSA/IHRyaW1TdHJpbmcoc3RyaW5naWZ5KG9wdGlvbikpIDogc3RyaW5naWZ5KG9wdGlvbik7XG5cbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgIGlucHV0ID0gbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dChpbnB1dCk7XG4gICAgICBjYW5kaWRhdGUgPSBzdHJpcERpYWNyaXRpY3MoY2FuZGlkYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hGcm9tID09PSAnc3RhcnQnID8gY2FuZGlkYXRlLnN1YnN0cigwLCBpbnB1dC5sZW5ndGgpID09PSBpbnB1dCA6IGNhbmRpZGF0ZS5pbmRleE9mKGlucHV0KSA+IC0xO1xuICB9O1xufTtcblxudmFyIF9leGNsdWRlZCA9IFtcImlubmVyUmVmXCJdO1xuZnVuY3Rpb24gRHVtbXlJbnB1dChfcmVmKSB7XG4gIHZhciBpbm5lclJlZiA9IF9yZWYuaW5uZXJSZWYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIC8vIFJlbW92ZSBhbmltYXRpb24gcHJvcHMgbm90IG1lYW50IGZvciBIVE1MIGVsZW1lbnRzXG4gIHZhciBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMocHJvcHMsICdvbkV4aXRlZCcsICdpbicsICdlbnRlcicsICdleGl0JywgJ2FwcGVhcicpO1xuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgZmlsdGVyZWRQcm9wcywge1xuICAgIGNzczogLyojX19QVVJFX18qL2Nzcyh7XG4gICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgIGJhY2tncm91bmQ6IDAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgY2FyZXRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgb3V0bGluZTogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgd2lkdGg6IDEsXG4gICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgbGVmdDogLTEwMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKC4wMSknXG4gICAgfSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiO2xhYmVsOkR1bW15SW5wdXQ7XCIsIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrUjFiVzE1U1c1d2RYUXVkSE40SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhsQ1RTSXNJbVpwYkdVaU9pSkVkVzF0ZVVsdWNIVjBMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ1VtVm1JSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dhbk40SUgwZ1puSnZiU0FuUUdWdGIzUnBiMjR2Y21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnY21WdGIzWmxVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlFUjFiVzE1U1c1d2RYUW9lMXh1SUNCcGJtNWxjbEpsWml4Y2JpQWdMaTR1Y0hKdmNITmNibjA2SUVwVFdDNUpiblJ5YVc1emFXTkZiR1Z0Wlc1MGMxc25hVzV3ZFhRblhTQW1JSHRjYmlBZ2NtVmhaRzl1YkhrZ2FXNXVaWEpTWldZNklGSmxaanhJVkUxTVNXNXdkWFJGYkdWdFpXNTBQanRjYm4wcElIdGNiaUFnTHk4Z1VtVnRiM1psSUdGdWFXMWhkR2x2YmlCd2NtOXdjeUJ1YjNRZ2JXVmhiblFnWm05eUlFaFVUVXdnWld4bGJXVnVkSE5jYmlBZ1kyOXVjM1FnWm1sc2RHVnlaV1JRY205d2N5QTlJSEpsYlc5MlpWQnliM0J6S0Z4dUlDQWdJSEJ5YjNCekxGeHVJQ0FnSUNkdmJrVjRhWFJsWkNjc1hHNGdJQ0FnSjJsdUp5eGNiaUFnSUNBblpXNTBaWEluTEZ4dUlDQWdJQ2RsZUdsMEp5eGNiaUFnSUNBbllYQndaV0Z5SjF4dUlDQXBPMXh1WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnUEdsdWNIVjBYRzRnSUNBZ0lDQnlaV1k5ZTJsdWJtVnlVbVZtZlZ4dUlDQWdJQ0FnZXk0dUxtWnBiSFJsY21Wa1VISnZjSE45WEc0Z0lDQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lDQWdiR0ZpWld3NklDZGtkVzF0ZVVsdWNIVjBKeXhjYmlBZ0lDQWdJQ0FnTHk4Z1oyVjBJSEpwWkNCdlppQmhibmtnWkdWbVlYVnNkQ0J6ZEhsc1pYTmNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nTUN4Y2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5T2lBd0xGeHVJQ0FnSUNBZ0lDQXZMeUJwYlhCdmNuUmhiblFoSUhSb2FYTWdhR2xrWlhNZ2RHaGxJR1pzWVhOb2FXNW5JR04xY25OdmNseHVJQ0FnSUNBZ0lDQmpZWEpsZEVOdmJHOXlPaUFuZEhKaGJuTndZWEpsYm5RbkxGeHVJQ0FnSUNBZ0lDQm1iMjUwVTJsNlpUb2dKMmx1YUdWeWFYUW5MRnh1SUNBZ0lDQWdJQ0JuY21sa1FYSmxZVG9nSnpFZ0x5QXhJQzhnTWlBdklETW5MRnh1SUNBZ0lDQWdJQ0J2ZFhSc2FXNWxPaUF3TEZ4dUlDQWdJQ0FnSUNCd1lXUmthVzVuT2lBd0xGeHVJQ0FnSUNBZ0lDQXZMeUJwYlhCdmNuUmhiblFoSUhkcGRHaHZkWFFnWUhkcFpIUm9ZQ0JpY205M2MyVnljeUIzYjI0bmRDQmhiR3h2ZHlCbWIyTjFjMXh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNU3hjYmx4dUlDQWdJQ0FnSUNBdkx5QnlaVzF2ZG1VZ1kzVnljMjl5SUc5dUlHUmxjMnQwYjNCY2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUNkMGNtRnVjM0JoY21WdWRDY3NYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2NtVnRiM1psSUdOMWNuTnZjaUJ2YmlCdGIySnBiR1VnZDJocGJITjBJRzFoYVc1MFlXbHVhVzVuSUZ3aWMyTnliMnhzSUdsdWRHOGdkbWxsZDF3aUlHSmxhR0YyYVc5MWNseHVJQ0FnSUNBZ0lDQnNaV1owT2lBdE1UQXdMRnh1SUNBZ0lDQWdJQ0J2Y0dGamFYUjVPaUF3TEZ4dUlDQWdJQ0FnSUNCd2IzTnBkR2x2YmpvZ0ozSmxiR0YwYVhabEp5eGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUFuYzJOaGJHVW9MakF4S1Njc1hHNGdJQ0FnSUNCOWZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVNjcm9sbENhcHR1cmUoX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgICAgb25Ub3BBcnJpdmUgPSBfcmVmLm9uVG9wQXJyaXZlLFxuICAgICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIGlmIChzY3JvbGxUYXJnZXQuY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBfc2Nyb2xsVGFyZ2V0JGN1cnJlbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudCxcbiAgICAgICAgc2Nyb2xsVG9wID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LnNjcm9sbFRvcCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3Njcm9sbFRhcmdldCRjdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IGRlbHRhID4gMDtcbiAgICB2YXIgYXZhaWxhYmxlU2Nyb2xsID0gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wO1xuICAgIHZhciBzaG91bGRDYW5jZWxTY3JvbGwgPSBmYWxzZTsgLy8gcmVzZXQgYm90dG9tL3RvcCBmbGFnc1xuXG4gICAgaWYgKGF2YWlsYWJsZVNjcm9sbCA+IGRlbHRhICYmIGlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvbkJvdHRvbUxlYXZlKSBvbkJvdHRvbUxlYXZlKGV2ZW50KTtcbiAgICAgIGlzQm90dG9tLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGlzVG9wLmN1cnJlbnQpIHtcbiAgICAgIGlmIChvblRvcExlYXZlKSBvblRvcExlYXZlKGV2ZW50KTtcbiAgICAgIGlzVG9wLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IC8vIGJvdHRvbSBsaW1pdFxuXG5cbiAgICBpZiAoaXNEZWx0YVBvc2l0aXZlICYmIGRlbHRhID4gYXZhaWxhYmxlU2Nyb2xsKSB7XG4gICAgICBpZiAob25Cb3R0b21BcnJpdmUgJiYgIWlzQm90dG9tLmN1cnJlbnQpIHtcbiAgICAgICAgb25Cb3R0b21BcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIGlzQm90dG9tLmN1cnJlbnQgPSB0cnVlOyAvLyB0b3AgbGltaXRcbiAgICB9IGVsc2UgaWYgKCFpc0RlbHRhUG9zaXRpdmUgJiYgLWRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICBpZiAob25Ub3BBcnJpdmUgJiYgIWlzVG9wLmN1cnJlbnQpIHtcbiAgICAgICAgb25Ub3BBcnJpdmUoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc1RvcC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9IC8vIGNhbmNlbCBzY3JvbGxcblxuXG4gICAgaWYgKHNob3VsZENhbmNlbFNjcm9sbCkge1xuICAgICAgY2FuY2VsU2Nyb2xsKGV2ZW50KTtcbiAgICB9XG4gIH0sIFtvbkJvdHRvbUFycml2ZSwgb25Cb3R0b21MZWF2ZSwgb25Ub3BBcnJpdmUsIG9uVG9wTGVhdmVdKTtcbiAgdmFyIG9uV2hlZWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVFdmVudERlbHRhKGV2ZW50LCBldmVudC5kZWx0YVkpO1xuICB9LCBbaGFuZGxlRXZlbnREZWx0YV0pO1xuICB2YXIgb25Ub3VjaFN0YXJ0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gc2V0IHRvdWNoIHN0YXJ0IHNvIHdlIGNhbiBjYWxjdWxhdGUgdG91Y2htb3ZlIGRlbHRhXG4gICAgdG91Y2hTdGFydC5jdXJyZW50ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSwgW10pO1xuICB2YXIgb25Ub3VjaE1vdmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZGVsdGFZID0gdG91Y2hTdGFydC5jdXJyZW50IC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICBoYW5kbGVFdmVudERlbHRhKGV2ZW50LCBkZWx0YVkpO1xuICB9LCBbaGFuZGxlRXZlbnREZWx0YV0pO1xuICB2YXIgc3RhcnRMaXN0ZW5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyBiYWlsIGVhcmx5IGlmIG5vIGVsZW1lbnQgaXMgYXZhaWxhYmxlIHRvIGF0dGFjaCB0b1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICB2YXIgbm90UGFzc2l2ZSA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25XaGVlbCwgbm90UGFzc2l2ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgbm90UGFzc2l2ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIG5vdFBhc3NpdmUpO1xuICB9LCBbb25Ub3VjaE1vdmUsIG9uVG91Y2hTdGFydCwgb25XaGVlbF0pO1xuICB2YXIgc3RvcExpc3RlbmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gZGV0YWNoIGZyb21cbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBmYWxzZSk7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG4gIH0sIFtvblRvdWNoTW92ZSwgb25Ub3VjaFN0YXJ0LCBvbldoZWVsXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc0VuYWJsZWQpIHJldHVybjtcbiAgICB2YXIgZWxlbWVudCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIHN0YXJ0TGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBzdG9wTGlzdGVuaW5nKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIHN0YXJ0TGlzdGVuaW5nLCBzdG9wTGlzdGVuaW5nXSk7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHNjcm9sbFRhcmdldC5jdXJyZW50ID0gZWxlbWVudDtcbiAgfTtcbn1cblxudmFyIFNUWUxFX0tFWVMgPSBbJ2JveFNpemluZycsICdoZWlnaHQnLCAnb3ZlcmZsb3cnLCAncGFkZGluZ1JpZ2h0JywgJ3Bvc2l0aW9uJ107XG52YXIgTE9DS19TVFlMRVMgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAvLyBhY2NvdW50IGZvciBwb3NzaWJsZSBkZWNsYXJhdGlvbiBgd2lkdGg6IDEwMCU7YCBvbiBib2R5XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGhlaWdodDogJzEwMCUnXG59O1xuXG5mdW5jdGlvbiBwcmV2ZW50VG91Y2hNb3ZlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRJbmVydGlhU2Nyb2xsKCkge1xuICB2YXIgdG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gIHZhciB0b3RhbFNjcm9sbCA9IHRoaXMuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgY3VycmVudFNjcm9sbCA9IHRvcCArIHRoaXMub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmICh0b3AgPT09IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IDE7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA9PT0gdG90YWxTY3JvbGwpIHtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRvcCAtIDE7XG4gIH1cbn0gLy8gYG9udG91Y2hzdGFydGAgY2hlY2sgd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuLy8gYG1heFRvdWNoUG9pbnRzYCB3b3JrcyBvbiBJRTEwLzExIGFuZCBTdXJmYWNlXG5cblxuZnVuY3Rpb24gaXNUb3VjaERldmljZSgpIHtcbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHM7XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xudmFyIGFjdGl2ZVNjcm9sbExvY2tzID0gMDtcbnZhciBsaXN0ZW5lck9wdGlvbnMgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIHVzZVNjcm9sbExvY2soX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBfcmVmJGFjY291bnRGb3JTY3JvbGwgPSBfcmVmLmFjY291bnRGb3JTY3JvbGxiYXJzLFxuICAgICAgYWNjb3VudEZvclNjcm9sbGJhcnMgPSBfcmVmJGFjY291bnRGb3JTY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGFjY291bnRGb3JTY3JvbGw7XG4gIHZhciBvcmlnaW5hbFN0eWxlcyA9IHVzZVJlZih7fSk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBhZGRTY3JvbGxMb2NrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoU2Nyb2xsVGFyZ2V0KSB7XG4gICAgaWYgKCFjYW5Vc2VET00pIHJldHVybjtcbiAgICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgdGFyZ2V0U3R5bGUgPSB0YXJnZXQgJiYgdGFyZ2V0LnN0eWxlO1xuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzKSB7XG4gICAgICAvLyBzdG9yZSBhbnkgc3R5bGVzIGFscmVhZHkgYXBwbGllZCB0byB0aGUgYm9keVxuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRhcmdldFN0eWxlICYmIHRhcmdldFN0eWxlW2tleV07XG4gICAgICAgIG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XSA9IHZhbDtcbiAgICAgIH0pO1xuICAgIH0gLy8gYXBwbHkgdGhlIGxvY2sgc3R5bGVzIGFuZCBwYWRkaW5nIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHNjcm9sbCBsb2NrXG5cblxuICAgIGlmIChhY2NvdW50Rm9yU2Nyb2xsYmFycyAmJiBhY3RpdmVTY3JvbGxMb2NrcyA8IDEpIHtcbiAgICAgIHZhciBjdXJyZW50UGFkZGluZyA9IHBhcnNlSW50KG9yaWdpbmFsU3R5bGVzLmN1cnJlbnQucGFkZGluZ1JpZ2h0LCAxMCkgfHwgMDtcbiAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmJvZHkgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMDtcbiAgICAgIHZhciBhZGp1c3RlZFBhZGRpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNsaWVudFdpZHRoICsgY3VycmVudFBhZGRpbmcgfHwgMDtcbiAgICAgIE9iamVjdC5rZXlzKExPQ0tfU1RZTEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IExPQ0tfU1RZTEVTW2tleV07XG5cbiAgICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgICAgdGFyZ2V0U3R5bGVba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0YXJnZXRTdHlsZSkge1xuICAgICAgICB0YXJnZXRTdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChhZGp1c3RlZFBhZGRpbmcsIFwicHhcIik7XG4gICAgICB9XG4gICAgfSAvLyBhY2NvdW50IGZvciB0b3VjaCBkZXZpY2VzXG5cblxuICAgIGlmICh0YXJnZXQgJiYgaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAvLyBNb2JpbGUgU2FmYXJpIGlnbm9yZXMgeyBvdmVyZmxvdzogaGlkZGVuIH0gZGVjbGFyYXRpb24gb24gdGhlIGJvZHkuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFRvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTsgLy8gQWxsb3cgc2Nyb2xsIG9uIHByb3ZpZGVkIHRhcmdldFxuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGluY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cblxuICAgIGFjdGl2ZVNjcm9sbExvY2tzICs9IDE7XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB2YXIgcmVtb3ZlU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTsgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyA9IE1hdGgubWF4KGFjdGl2ZVNjcm9sbExvY2tzIC0gMSwgMCk7IC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcblxuXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthY2NvdW50Rm9yU2Nyb2xsYmFyc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNFbmFibGVkKSByZXR1cm47XG4gICAgdmFyIGVsZW1lbnQgPSBzY3JvbGxUYXJnZXQuY3VycmVudDtcbiAgICBhZGRTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVTY3JvbGxMb2NrKGVsZW1lbnQpO1xuICAgIH07XG4gIH0sIFtpc0VuYWJsZWQsIGFkZFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2tdKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXygpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG5cbnZhciBibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiBibHVyU2VsZWN0SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xufTtcblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFrZmRiMGVcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowXCJcbn0gOiB7XG4gIG5hbWU6IFwiYnA4Y3VhLVNjcm9sbE1hbmFnZXJcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO2xhYmVsOlNjcm9sbE1hbmFnZXI7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbE5qY205c2JFMWhibUZuWlhJdWRITjRJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRU3REVlNJc0ltWnBiR1VpT2lKVFkzSnZiR3hOWVc1aFoyVnlMblJ6ZUNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLaUJBYW5ONElHcHplQ0FxTDF4dWFXMXdiM0owSUhzZ2FuTjRJSDBnWm5KdmJTQW5RR1Z0YjNScGIyNHZjbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dSbkpoWjIxbGJuUXNJRkpsWVdOMFJXeGxiV1Z1ZEN3Z1VtVm1RMkZzYkdKaFkyc2dmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNCbWNtOXRJQ2N1TDNWelpWTmpjbTlzYkVOaGNIUjFjbVVuTzF4dWFXMXdiM0owSUhWelpWTmpjbTlzYkV4dlkyc2dabkp2YlNBbkxpOTFjMlZUWTNKdmJHeE1iMk5ySnp0Y2JseHVhVzUwWlhKbVlXTmxJRkJ5YjNCeklIdGNiaUFnY21WaFpHOXViSGtnWTJocGJHUnlaVzQ2SUNoeVpXWTZJRkpsWmtOaGJHeGlZV05yUEVoVVRVeEZiR1Z0Wlc1MFBpa2dQVDRnVW1WaFkzUkZiR1Z0Wlc1ME8xeHVJQ0J5WldGa2IyNXNlU0JzYjJOclJXNWhZbXhsWkRvZ1ltOXZiR1ZoYmp0Y2JpQWdjbVZoWkc5dWJIa2dZMkZ3ZEhWeVpVVnVZV0pzWldRNklHSnZiMnhsWVc0N1hHNGdJSEpsWVdSdmJteDVJRzl1UW05MGRHOXRRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlhhR1ZsYkVWMlpXNTBJSHdnVkc5MVkyaEZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JpQWdjbVZoWkc5dWJIa2diMjVDYjNSMGIyMU1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc0Z0lISmxZV1J2Ym14NUlHOXVWRzl3UVhKeWFYWmxQem9nS0dWMlpXNTBPaUJYYUdWbGJFVjJaVzUwSUh3Z1ZHOTFZMmhGZG1WdWRDa2dQVDRnZG05cFpEdGNiaUFnY21WaFpHOXViSGtnYjI1VWIzQk1aV0YyWlQ4NklDaGxkbVZ1ZERvZ1YyaGxaV3hGZG1WdWRDQjhJRlJ2ZFdOb1JYWmxiblFwSUQwK0lIWnZhV1E3WEc1OVhHNWNibU52Ym5OMElHSnNkWEpUWld4bFkzUkpibkIxZENBOUlDZ3BJRDArWEc0Z0lHUnZZM1Z0Wlc1MExtRmpkR2wyWlVWc1pXMWxiblFnSmlZZ0tHUnZZM1Z0Wlc1MExtRmpkR2wyWlVWc1pXMWxiblFnWVhNZ1NGUk5URVZzWlcxbGJuUXBMbUpzZFhJb0tUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdVMk55YjJ4c1RXRnVZV2RsY2loN1hHNGdJR05vYVd4a2NtVnVMRnh1SUNCc2IyTnJSVzVoWW14bFpDeGNiaUFnWTJGd2RIVnlaVVZ1WVdKc1pXUWdQU0IwY25WbExGeHVJQ0J2YmtKdmRIUnZiVUZ5Y21sMlpTeGNiaUFnYjI1Q2IzUjBiMjFNWldGMlpTeGNiaUFnYjI1VWIzQkJjbkpwZG1Vc1hHNGdJRzl1Vkc5d1RHVmhkbVVzWEc1OU9pQlFjbTl3Y3lrZ2UxeHVJQ0JqYjI1emRDQnpaWFJUWTNKdmJHeERZWEIwZFhKbFZHRnlaMlYwSUQwZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNoN1hHNGdJQ0FnYVhORmJtRmliR1ZrT2lCallYQjBkWEpsUlc1aFlteGxaQ3hjYmlBZ0lDQnZia0p2ZEhSdmJVRnljbWwyWlN4Y2JpQWdJQ0J2YmtKdmRIUnZiVXhsWVhabExGeHVJQ0FnSUc5dVZHOXdRWEp5YVhabExGeHVJQ0FnSUc5dVZHOXdUR1ZoZG1Vc1hHNGdJSDBwTzF4dUlDQmpiMjV6ZENCelpYUlRZM0p2Ykd4TWIyTnJWR0Z5WjJWMElEMGdkWE5sVTJOeWIyeHNURzlqYXloN0lHbHpSVzVoWW14bFpEb2diRzlqYTBWdVlXSnNaV1FnZlNrN1hHNWNiaUFnWTI5dWMzUWdkR0Z5WjJWMFVtVm1PaUJTWldaRFlXeHNZbUZqYXp4SVZFMU1SV3hsYldWdWRENGdQU0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUhObGRGTmpjbTlzYkVOaGNIUjFjbVZVWVhKblpYUW9aV3hsYldWdWRDazdYRzRnSUNBZ2MyVjBVMk55YjJ4c1RHOWphMVJoY21kbGRDaGxiR1Z0Wlc1MEtUdGNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeEdjbUZuYldWdWRENWNiaUFnSUNBZ0lIdHNiMk5yUlc1aFlteGxaQ0FtSmlBb1hHNGdJQ0FnSUNBZ0lEeGthWFpjYmlBZ0lDQWdJQ0FnSUNCdmJrTnNhV05yUFh0aWJIVnlVMlZzWldOMFNXNXdkWFI5WEc0Z0lDQWdJQ0FnSUNBZ1kzTnpQWHQ3SUhCdmMybDBhVzl1T2lBblptbDRaV1FuTENCc1pXWjBPaUF3TENCaWIzUjBiMjA2SURBc0lISnBaMmgwT2lBd0xDQjBiM0E2SURBZ2ZYMWNiaUFnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRvZEdGeVoyVjBVbVZtS1gxY2JpQWdJQ0E4TDBaeVlXZHRaVzUwUGx4dUlDQXBPMXh1ZlZ4dUlsMTkgKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG5mdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGxvY2tFbmFibGVkID0gX3JlZi5sb2NrRW5hYmxlZCxcbiAgICAgIF9yZWYkY2FwdHVyZUVuYWJsZWQgPSBfcmVmLmNhcHR1cmVFbmFibGVkLFxuICAgICAgY2FwdHVyZUVuYWJsZWQgPSBfcmVmJGNhcHR1cmVFbmFibGVkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjYXB0dXJlRW5hYmxlZCxcbiAgICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICAgIG9uQm90dG9tTGVhdmUgPSBfcmVmLm9uQm90dG9tTGVhdmUsXG4gICAgICBvblRvcEFycml2ZSA9IF9yZWYub25Ub3BBcnJpdmUsXG4gICAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCA9IHVzZVNjcm9sbENhcHR1cmUoe1xuICAgIGlzRW5hYmxlZDogY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmU6IG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmU6IG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmU6IG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmU6IG9uVG9wTGVhdmVcbiAgfSk7XG4gIHZhciBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7XG4gICAgaXNFbmFibGVkOiBsb2NrRW5hYmxlZFxuICB9KTtcblxuICB2YXIgdGFyZ2V0UmVmID0gZnVuY3Rpb24gdGFyZ2V0UmVmKGVsZW1lbnQpIHtcbiAgICBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0KGVsZW1lbnQpO1xuICAgIHNldFNjcm9sbExvY2tUYXJnZXQoZWxlbWVudCk7XG4gIH07XG5cbiAgcmV0dXJuIGpzeChGcmFnbWVudCwgbnVsbCwgbG9ja0VuYWJsZWQgJiYganN4KFwiZGl2XCIsIHtcbiAgICBvbkNsaWNrOiBibHVyU2VsZWN0SW5wdXQsXG4gICAgY3NzOiBfcmVmMlxuICB9KSwgY2hpbGRyZW4odGFyZ2V0UmVmKSk7XG59XG5cbnZhciBmb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xudmFyIGdldE9wdGlvbkxhYmVsJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25MYWJlbChvcHRpb24pIHtcbiAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcbn07XG52YXIgZ2V0T3B0aW9uVmFsdWUkMSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKG9wdGlvbikge1xuICByZXR1cm4gb3B0aW9uLnZhbHVlO1xufTtcbnZhciBpc09wdGlvbkRpc2FibGVkID0gZnVuY3Rpb24gaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHtcbiAgcmV0dXJuICEhb3B0aW9uLmlzRGlzYWJsZWQ7XG59O1xuXG52YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgY2xlYXJJbmRpY2F0b3I6IGNsZWFySW5kaWNhdG9yQ1NTLFxuICBjb250YWluZXI6IGNvbnRhaW5lckNTUyxcbiAgY29udHJvbDogY3NzJDEsXG4gIGRyb3Bkb3duSW5kaWNhdG9yOiBkcm9wZG93bkluZGljYXRvckNTUyxcbiAgZ3JvdXA6IGdyb3VwQ1NTLFxuICBncm91cEhlYWRpbmc6IGdyb3VwSGVhZGluZ0NTUyxcbiAgaW5kaWNhdG9yc0NvbnRhaW5lcjogaW5kaWNhdG9yc0NvbnRhaW5lckNTUyxcbiAgaW5kaWNhdG9yU2VwYXJhdG9yOiBpbmRpY2F0b3JTZXBhcmF0b3JDU1MsXG4gIGlucHV0OiBpbnB1dENTUyxcbiAgbG9hZGluZ0luZGljYXRvcjogbG9hZGluZ0luZGljYXRvckNTUyxcbiAgbG9hZGluZ01lc3NhZ2U6IGxvYWRpbmdNZXNzYWdlQ1NTLFxuICBtZW51OiBtZW51Q1NTLFxuICBtZW51TGlzdDogbWVudUxpc3RDU1MsXG4gIG1lbnVQb3J0YWw6IG1lbnVQb3J0YWxDU1MsXG4gIG11bHRpVmFsdWU6IG11bHRpVmFsdWVDU1MsXG4gIG11bHRpVmFsdWVMYWJlbDogbXVsdGlWYWx1ZUxhYmVsQ1NTLFxuICBtdWx0aVZhbHVlUmVtb3ZlOiBtdWx0aVZhbHVlUmVtb3ZlQ1NTLFxuICBub09wdGlvbnNNZXNzYWdlOiBub09wdGlvbnNNZXNzYWdlQ1NTLFxuICBvcHRpb246IG9wdGlvbkNTUyxcbiAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyQ1NTLFxuICBzaW5nbGVWYWx1ZTogY3NzJDIsXG4gIHZhbHVlQ29udGFpbmVyOiB2YWx1ZUNvbnRhaW5lckNTU1xufTsgLy8gTWVyZ2UgVXRpbGl0eVxuLy8gQWxsb3dzIGNvbnN1bWVycyB0byBleHRlbmQgYSBiYXNlIFNlbGVjdCB3aXRoIGFkZGl0aW9uYWwgc3R5bGVzXG5cbmZ1bmN0aW9uIG1lcmdlU3R5bGVzKHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBpbml0aWFsaXplIHdpdGggc291cmNlIHN0eWxlc1xuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZDIoe30sIHNvdXJjZSk7IC8vIG1hc3NhZ2UgaW4gdGFyZ2V0IHN0eWxlc1xuXG5cbiAgT2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlBc1N0cmluZykge1xuICAgIHZhciBrZXkgPSBrZXlBc1N0cmluZztcblxuICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgc3R5bGVzW2tleV0gPSBmdW5jdGlvbiAocnNDc3MsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XShzb3VyY2Vba2V5XShyc0NzcywgcHJvcHMpLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBjb2xvcnMgPSB7XG4gIHByaW1hcnk6ICcjMjY4NEZGJyxcbiAgcHJpbWFyeTc1OiAnIzRDOUFGRicsXG4gIHByaW1hcnk1MDogJyNCMkQ0RkYnLFxuICBwcmltYXJ5MjU6ICcjREVFQkZGJyxcbiAgZGFuZ2VyOiAnI0RFMzUwQicsXG4gIGRhbmdlckxpZ2h0OiAnI0ZGQkRBRCcsXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcbnZhciBib3JkZXJSYWRpdXMgPSA0OyAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG5cbnZhciBiYXNlVW5pdCA9IDQ7IC8vIFRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29udHJvbFxuXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIG1lbnVHdXR0ZXIgPSBiYXNlVW5pdCAqIDI7XG52YXIgc3BhY2luZyA9IHtcbiAgYmFzZVVuaXQ6IGJhc2VVbml0LFxuICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0LFxuICBtZW51R3V0dGVyOiBtZW51R3V0dGVyXG59O1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gIGNvbG9yczogY29sb3JzLFxuICBzcGFjaW5nOiBzcGFjaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6IGlzVG91Y2hDYXBhYmxlKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhaXNUb3VjaENhcGFibGUoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwkMSxcbiAgZ2V0T3B0aW9uVmFsdWU6IGdldE9wdGlvblZhbHVlJDEsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBpc011bHRpOiBmYWxzZSxcbiAgaXNSdGw6IGZhbHNlLFxuICBpc1NlYXJjaGFibGU6IHRydWUsXG4gIGlzT3B0aW9uRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQsXG4gIGxvYWRpbmdNZXNzYWdlOiBmdW5jdGlvbiBsb2FkaW5nTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcuLi4nO1xuICB9LFxuICBtYXhNZW51SGVpZ2h0OiAzMDAsXG4gIG1pbk1lbnVIZWlnaHQ6IDE0MCxcbiAgbWVudUlzT3BlbjogZmFsc2UsXG4gIG1lbnVQbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtZW51UG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG1lbnVTaG91bGRCbG9ja1Njcm9sbDogZmFsc2UsXG4gIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogIWlzTW9iaWxlRGV2aWNlKCksXG4gIG5vT3B0aW9uc01lc3NhZ2U6IGZ1bmN0aW9uIG5vT3B0aW9uc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuICdObyBvcHRpb25zJztcbiAgfSxcbiAgb3Blbk1lbnVPbkZvY3VzOiBmYWxzZSxcbiAgb3Blbk1lbnVPbkNsaWNrOiB0cnVlLFxuICBvcHRpb25zOiBbXSxcbiAgcGFnZVNpemU6IDUsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgc2NyZWVuUmVhZGVyU3RhdHVzOiBmdW5jdGlvbiBzY3JlZW5SZWFkZXJTdGF0dXMoX3JlZikge1xuICAgIHZhciBjb3VudCA9IF9yZWYuY291bnQ7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGNvdW50LCBcIiByZXN1bHRcIikuY29uY2F0KGNvdW50ICE9PSAxID8gJ3MnIDogJycsIFwiIGF2YWlsYWJsZVwiKTtcbiAgfSxcbiAgc3R5bGVzOiB7fSxcbiAgdGFiSW5kZXg6IDAsXG4gIHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgaW5kZXgpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG5cbiAgdmFyIGlzU2VsZWN0ZWQgPSBfaXNPcHRpb25TZWxlY3RlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG5cbiAgdmFyIGxhYmVsID0gZ2V0T3B0aW9uTGFiZWwocHJvcHMsIG9wdGlvbik7XG4gIHZhciB2YWx1ZSA9IGdldE9wdGlvblZhbHVlKHByb3BzLCBvcHRpb24pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdvcHRpb24nLFxuICAgIGRhdGE6IG9wdGlvbixcbiAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBpbmRleDogaW5kZXhcbiAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMocHJvcHMsIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiBwcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBPck9wdGlvbiwgZ3JvdXBPck9wdGlvbkluZGV4KSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBncm91cE9yT3B0aW9uKSB7XG4gICAgICB2YXIgY2F0ZWdvcml6ZWRPcHRpb25zID0gZ3JvdXBPck9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBvcHRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgb3B0aW9uSW5kZXgpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5sZW5ndGggPiAwID8ge1xuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBkYXRhOiBncm91cE9yT3B0aW9uLFxuICAgICAgICBvcHRpb25zOiBjYXRlZ29yaXplZE9wdGlvbnMsXG4gICAgICAgIGluZGV4OiBncm91cE9yT3B0aW9uSW5kZXhcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNhdGVnb3JpemVkT3B0aW9uID0gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgZ3JvdXBPck9wdGlvbiwgc2VsZWN0VmFsdWUsIGdyb3VwT3JPcHRpb25JbmRleCk7XG4gICAgcmV0dXJuIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbikgPyBjYXRlZ29yaXplZE9wdGlvbiA6IHVuZGVmaW5lZDtcbiAgfSkuZmlsdGVyKG5vdE51bGxpc2gpO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKGNhdGVnb3JpemVkT3B0aW9ucykge1xuICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLnJlZHVjZShmdW5jdGlvbiAob3B0aW9uc0FjY3VtdWxhdG9yLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIGlmIChjYXRlZ29yaXplZE9wdGlvbi50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaC5hcHBseShvcHRpb25zQWNjdW11bGF0b3IsIF90b0NvbnN1bWFibGVBcnJheShjYXRlZ29yaXplZE9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24uZGF0YTtcbiAgICAgIH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKGNhdGVnb3JpemVkT3B0aW9uLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gIHZhciBfcHJvcHMkaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgIGlzU2VsZWN0ZWQgPSBjYXRlZ29yaXplZE9wdGlvbi5pc1NlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBjYXRlZ29yaXplZE9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBuZXh0U2VsZWN0VmFsdWUpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IHN0YXRlLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGxhc3RTZWxlY3RWYWx1ZSA9IHN0YXRlLnNlbGVjdFZhbHVlO1xuICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG5cbnZhciBnZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiBwcm9wcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbn07XG5cbnZhciBnZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uIGdldE9wdGlvblZhbHVlKHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiBwcm9wcy5nZXRPcHRpb25WYWx1ZShkYXRhKTtcbn07XG5cbmZ1bmN0aW9uIF9pc09wdGlvbkRpc2FibGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvcHMuaXNPcHRpb25EaXNhYmxlZCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgaWYgKHNlbGVjdFZhbHVlLmluZGV4T2Yob3B0aW9uKSA+IC0xKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHByb3BzLmlzT3B0aW9uU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcHMuaXNPcHRpb25TZWxlY3RlZChvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGUgPSBnZXRPcHRpb25WYWx1ZShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUocHJvcHMsIGkpID09PSBjYW5kaWRhdGU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfZmlsdGVyT3B0aW9uKHByb3BzLCBvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgcmV0dXJuIHByb3BzLmZpbHRlck9wdGlvbiA/IHByb3BzLmZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIDogdHJ1ZTtcbn1cblxudmFyIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zKHByb3BzKSB7XG4gIHZhciBoaWRlU2VsZWN0ZWRPcHRpb25zID0gcHJvcHMuaGlkZVNlbGVjdGVkT3B0aW9ucyxcbiAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpO1xuICBpZiAoaGlkZVNlbGVjdGVkT3B0aW9ucyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgcmV0dXJuIGhpZGVTZWxlY3RlZE9wdGlvbnM7XG59O1xuXG52YXIgaW5zdGFuY2VJZCA9IDE7XG5cbnZhciBTZWxlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTZWxlY3QpO1xuXG4gIC8vIE1pc2MuIEluc3RhbmNlIFByb3BlcnRpZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFRPRE9cbiAgLy8gUmVmc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gTGlmZWN5Y2xlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbiBTZWxlY3QoX3Byb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9wcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhcmlhU2VsZWN0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZE9wdGlvbjogbnVsbCxcbiAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgIGlucHV0SXNIaWRkZW46IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHNlbGVjdFZhbHVlOiBbXSxcbiAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZSxcbiAgICAgIHByZXZXYXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogdW5kZWZpbmVkLFxuICAgICAgcHJldlByb3BzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICBfdGhpcy5pc0NvbXBvc2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmNvbW1vblByb3BzID0gdm9pZCAwO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSAwO1xuICAgIF90aGlzLmluaXRpYWxUb3VjaFkgPSAwO1xuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJyc7XG4gICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSBmYWxzZTtcbiAgICBfdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gdm9pZCAwO1xuICAgIF90aGlzLmNvbnRyb2xSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Q29udHJvbFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmNvbnRyb2xSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0Rm9jdXNlZE9wdGlvblJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLmZvY3VzZWRPcHRpb25SZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLm1lbnVMaXN0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldE1lbnVMaXN0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMubWVudUxpc3RSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmlucHV0UmVmID0gbnVsbDtcblxuICAgIF90aGlzLmdldElucHV0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmZvY3VzID0gX3RoaXMuZm9jdXNJbnB1dDtcbiAgICBfdGhpcy5ibHVyID0gX3RoaXMuYmx1cklucHV0O1xuXG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWU7XG4gICAgICBhY3Rpb25NZXRhLm5hbWUgPSBuYW1lO1xuXG4gICAgICBfdGhpcy5hcmlhT25DaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuXG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBhY3Rpb24sIG9wdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMyLmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMyLmlucHV0VmFsdWU7XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnc2V0LXZhbHVlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY2xvc2VNZW51T25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogIWlzTXVsdGlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMub25NZW51Q2xvc2UoKTtcbiAgICAgIH0gLy8gd2hlbiB0aGUgc2VsZWN0IHZhbHVlIHNob3VsZCBjaGFuZ2UsIHdlIHNob3VsZCByZXNldCBmb2N1c2VkVmFsdWVcblxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmx1cklucHV0T25TZWxlY3QgPSBfdGhpcyRwcm9wczMuYmx1cklucHV0T25TZWxlY3QsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMy5pc011bHRpLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczMubmFtZTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgZGVzZWxlY3RlZCA9IGlzTXVsdGkgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChuZXdWYWx1ZSwgc2VsZWN0VmFsdWUpO1xuXG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IF90aGlzLmlzT3B0aW9uRGlzYWJsZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKTtcblxuICAgICAgaWYgKGRlc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKG5ld1ZhbHVlKTtcblxuICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0T3B0aW9uVmFsdWUoaSkgIT09IGNhbmRpZGF0ZTtcbiAgICAgICAgfSkpLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICghaXNEaXNhYmxlZCkge1xuICAgICAgICAvLyBTZWxlY3Qgb3B0aW9uIGlmIG9wdGlvbiBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShtdWx0aVZhbHVlQXNWYWx1ZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNlbGVjdFZhbHVlKSwgW25ld1ZhbHVlXSkpLCAnc2VsZWN0LW9wdGlvbicsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShzaW5nbGVWYWx1ZUFzVmFsdWUobmV3VmFsdWUpLCAnc2VsZWN0LW9wdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5hcmlhT25DaGFuZ2Uoc2luZ2xlVmFsdWVBc1ZhbHVlKG5ld1ZhbHVlKSwge1xuICAgICAgICAgIGFjdGlvbjogJ3NlbGVjdC1vcHRpb24nLFxuICAgICAgICAgIG9wdGlvbjogbmV3VmFsdWUsXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChibHVySW5wdXRPblNlbGVjdCkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAocmVtb3ZlZFZhbHVlKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGNhbmRpZGF0ZSA9IF90aGlzLmdldE9wdGlvblZhbHVlKHJlbW92ZWRWYWx1ZSk7XG5cbiAgICAgIHZhciBuZXdWYWx1ZUFycmF5ID0gc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRPcHRpb25WYWx1ZShpKSAhPT0gY2FuZGlkYXRlO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZVRlcm5hcnkoaXNNdWx0aSwgbmV3VmFsdWVBcnJheSwgbmV3VmFsdWVBcnJheVswXSB8fCBudWxsKTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAncmVtb3ZlLXZhbHVlJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgX3RoaXMub25DaGFuZ2UodmFsdWVUZXJuYXJ5KF90aGlzLnByb3BzLmlzTXVsdGksIFtdLCBudWxsKSwge1xuICAgICAgICBhY3Rpb246ICdjbGVhcicsXG4gICAgICAgIHJlbW92ZWRWYWx1ZXM6IHNlbGVjdFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucG9wVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNNdWx0aSA9IF90aGlzLnByb3BzLmlzTXVsdGk7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBsYXN0U2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdFZhbHVlW3NlbGVjdFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5zbGljZSgwLCBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlVGVybmFyeShpc011bHRpLCBuZXdWYWx1ZUFycmF5LCBuZXdWYWx1ZUFycmF5WzBdIHx8IG51bGwpO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdwb3AtdmFsdWUnLFxuICAgICAgICByZW1vdmVkVmFsdWU6IGxhc3RTZWxlY3RlZFZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLmN4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc05hbWVzLmFwcGx5KHZvaWQgMCwgW190aGlzLnByb3BzLmNsYXNzTmFtZVByZWZpeF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvbkxhYmVsKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uVmFsdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGdldE9wdGlvblZhbHVlKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzKTtcbiAgICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xuICAgICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDb21wb25lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb21wb25lbnRzKF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMoX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpIDogW107XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKSA6IFtdO1xuICAgIH07XG5cbiAgICBfdGhpcy5hcmlhT25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBhY3Rpb25NZXRhKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBFdmVudCBjYXB0dXJlZCBieSBkcm9wZG93biBpbmRpY2F0b3JcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wZW5NZW51T25DbGljayA9IF90aGlzLnByb3BzLm9wZW5NZW51T25DbGljaztcblxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIV90aGlzLnByb3BzLm1lbnVJc09wZW4pIHtcbiAgICAgICAgaWYgKG9wZW5NZW51T25DbGljaykge1xuICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZXZlbnQudGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6ICFpc011bHRpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaWdub3JlIG1vdXNlIGV2ZW50cyB0aGF0IHdlcmVuJ3QgdHJpZ2dlcmVkIGJ5IHRoZSBwcmltYXJ5IGJ1dHRvblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYyLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIF90aGlzLmluaXRpYWxUb3VjaFgpO1xuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSBfdGhpcy5pbml0aWFsVG91Y2hZKTtcbiAgICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZGVsdGFYID4gbW92ZVRocmVzaG9sZCB8fCBkZWx0YVkgPiBtb3ZlVGhyZXNob2xkO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjsgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cblxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH0gLy8gcmVzZXQgbW92ZSB2YXJzXG5cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJldklucHV0VmFsdWUgPSBfdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtY2hhbmdlJyxcbiAgICAgICAgcHJldklucHV0VmFsdWU6IHByZXZJbnB1dFZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMub3BlbkFmdGVyRm9jdXMgfHwgX3RoaXMucHJvcHMub3Blbk1lbnVPbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHByZXZJbnB1dFZhbHVlID0gX3RoaXMucHJvcHMuaW5wdXRWYWx1ZTtcblxuICAgICAgaWYgKF90aGlzLm1lbnVMaXN0UmVmICYmIF90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtYmx1cicsXG4gICAgICAgIHByZXZJbnB1dFZhbHVlOiBwcmV2SW5wdXRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PcHRpb25Ib3ZlciA9IGZ1bmN0aW9uIChmb2N1c2VkT3B0aW9uKSB7XG4gICAgICBpZiAoX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciB8fCBfdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uID09PSBmb2N1c2VkT3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzaG91bGRIaWRlU2VsZWN0ZWRPcHRpb25zKF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzNS5pc011bHRpLFxuICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZSA9IF90aGlzJHByb3BzNS5iYWNrc3BhY2VSZW1vdmVzVmFsdWUsXG4gICAgICAgICAgZXNjYXBlQ2xlYXJzVmFsdWUgPSBfdGhpcyRwcm9wczUuZXNjYXBlQ2xlYXJzVmFsdWUsXG4gICAgICAgICAgaW5wdXRWYWx1ZSA9IF90aGlzJHByb3BzNS5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM1LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM1Lm1lbnVJc09wZW4sXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHM1Lm9uS2V5RG93bixcbiAgICAgICAgICB0YWJTZWxlY3RzVmFsdWUgPSBfdGhpcyRwcm9wczUudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyA9IF90aGlzJHByb3BzNS5vcGVuTWVudU9uRm9jdXM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGUuZm9jdXNlZE9wdGlvbixcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZS5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XG5cbiAgICAgIGlmICh0eXBlb2Ygb25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uS2V5RG93bihldmVudCk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQmxvY2sgb3B0aW9uIGhvdmVyIGV2ZW50cyB3aGVuIHRoZSB1c2VyIGhhcyBqdXN0IHByZXNzZWQgYSBrZXlcblxuXG4gICAgICBfdGhpcy5ibG9ja09wdGlvbkhvdmVyID0gdHJ1ZTtcblxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgncHJldmlvdXMnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGlmICghaXNNdWx0aSB8fCBpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c1ZhbHVlKCduZXh0Jyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZm9jdXNlZFZhbHVlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVWYWx1ZShmb2N1c2VkVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWJhY2tzcGFjZVJlbW92ZXNWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgICBfdGhpcy5wb3BWYWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsZWFyYWJsZSkge1xuICAgICAgICAgICAgICBfdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSB8fCAhbWVudUlzT3BlbiB8fCAhdGFiU2VsZWN0c1ZhbHVlIHx8ICFmb2N1c2VkT3B0aW9uIHx8IC8vIGRvbid0IGNhcHR1cmUgdGhlIGV2ZW50IGlmIHRoZSBtZW51IG9wZW5zIG9uIGZvY3VzIGFuZCB0aGUgZm9jdXNlZFxuICAgICAgICAgIC8vIG9wdGlvbiBpcyBhbHJlYWR5IHNlbGVjdGVkOyBpdCBicmVha3MgdGhlIGZsb3cgb2YgbmF2aWdhdGlvblxuICAgICAgICAgIG9wZW5NZW51T25Gb2N1cyAmJiBfdGhpcy5pc09wdGlvblNlbGVjdGVkKGZvY3VzZWRPcHRpb24sIHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgdGhlIGtleWRvd24gZXZlbnQgZnJvbSBhbiBJbnB1dCBNZXRob2QgRWRpdG9yKElNRSlcbiAgICAgICAgICAgIC8vIHJlZi4gaHR0cHM6Ly93d3cudzMub3JnL1RSL3VpZXZlbnRzLyNkZXRlcm1pbmUta2V5ZG93bi1rZXl1cC1rZXlDb2RlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNDb21wb3NpbmcpIHJldHVybjtcblxuICAgICAgICAgICAgX3RoaXMuc2VsZWN0T3B0aW9uKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICAgICAgICBhY3Rpb246ICdtZW51LWNsb3NlJyxcbiAgICAgICAgICAgICAgcHJldklucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAvLyBzcGFjZVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcbiAgICBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUoX3Byb3BzLnZhbHVlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gYWxsIHNjcm9sbCBldmVudHMsIGFuZCBmaWx0ZXIgdGhlbSBvdXQgaW5zaWRlIG9mICdvblNjcm9sbCdcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczYuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM2Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICggLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1tYXRpY2FsbHkgZGlzYWJsZWQgd2hpbGUgZm9jdXNlZFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgICB9LCB0aGlzLm9uTWVudUNsb3NlKTtcbiAgICAgIH0gLy8gc2Nyb2xsIHRoZSBmb2N1c2VkIG9wdGlvbiBpbnRvIHZpZXcgaWYgbmVjZXNzYXJ5XG5cblxuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5mb2N1c2VkT3B0aW9uUmVmICYmIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5tZW51TGlzdFJlZiwgdGhpcy5mb2N1c2VkT3B0aW9uUmVmKTtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdUb1RvdWNoKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIENvbnN1bWVyIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogXCJvbk1lbnVPcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudU9wZW4oKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudU9wZW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25NZW51Q2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZW51Q2xvc2UoKSB7XG4gICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZScsXG4gICAgICAgIHByZXZJbnB1dFZhbHVlOiB0aGlzLnByb3BzLmlucHV0VmFsdWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbklucHV0Q2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIHRoaXMucHJvcHMub25JbnB1dENoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNZXRob2RzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c0lucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1cklucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFJlZikgcmV0dXJuO1xuICAgICAgdGhpcy5pbnB1dFJlZi5ibHVyKCk7XG4gICAgfSAvLyBhbGlhc2VkIGZvciBjb25zdW1lcnNcblxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5NZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW5NZW51KGZvY3VzT3B0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTIuc2VsZWN0VmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGUyLmlzRm9jdXNlZDtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHZhciBvcGVuQXRJbmRleCA9IGZvY3VzT3B0aW9uID09PSAnZmlyc3QnID8gMCA6IGZvY3VzYWJsZU9wdGlvbnMubGVuZ3RoIC0gMTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGkpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBmb2N1c2FibGVPcHRpb25zLmluZGV4T2Yoc2VsZWN0VmFsdWVbMF0pO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICBvcGVuQXRJbmRleCA9IHNlbGVjdGVkSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gb25seSBzY3JvbGwgaWYgdGhlIG1lbnUgaXNuJ3QgYWxyZWFkeSBvcGVuXG5cblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9ICEoaXNGb2N1c2VkICYmIHRoaXMubWVudUxpc3RSZWYpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogZmFsc2UsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNhYmxlT3B0aW9uc1tvcGVuQXRJbmRleF1cbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5vbk1lbnVPcGVuKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ZhbHVlKGRpcmVjdGlvbikge1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0VmFsdWUgPSBfdGhpcyRzdGF0ZTMuc2VsZWN0VmFsdWUsXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUzLmZvY3VzZWRWYWx1ZTsgLy8gT25seSBtdWx0aXNlbGVjdHMgc3VwcG9ydCB2YWx1ZSBmb2N1c2luZ1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aSkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRPcHRpb246IG51bGxcbiAgICAgIH0pO1xuICAgICAgdmFyIGZvY3VzZWRJbmRleCA9IHNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgICAgaWYgKCFmb2N1c2VkVmFsdWUpIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0SW5kZXggPSBzZWxlY3RWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IC0xO1xuICAgICAgaWYgKCFzZWxlY3RWYWx1ZS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvbid0IGN5Y2xlIGZyb20gdGhlIHN0YXJ0IHRvIHRoZSBlbmRcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChmb2N1c2VkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBpZiBub3RoaW5nIGlzIGZvY3VzZWQsIGZvY3VzIHRoZSBsYXN0IHZhbHVlIGZpcnN0XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgaWYgKGZvY3VzZWRJbmRleCA+IC0xICYmIGZvY3VzZWRJbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0SXNIaWRkZW46IG5leHRGb2N1cyAhPT0gLTEsXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogc2VsZWN0VmFsdWVbbmV4dEZvY3VzXVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzT3B0aW9uKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2ZpcnN0JztcbiAgICAgIHZhciBwYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemU7XG4gICAgICB2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbjtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICB2YXIgbmV4dEZvY3VzID0gMDsgLy8gaGFuZGxlcyAnZmlyc3QnXG5cbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBvcHRpb25zLmluZGV4T2YoZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgIGlmICghZm9jdXNlZE9wdGlvbikge1xuICAgICAgICBmb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggPiAwID8gZm9jdXNlZEluZGV4IC0gMSA6IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3BhZ2V1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4IC0gcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPCAwKSBuZXh0Rm9jdXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdlZG93bicpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ICsgcGFnZVNpemU7XG4gICAgICAgIGlmIChuZXh0Rm9jdXMgPiBvcHRpb25zLmxlbmd0aCAtIDEpIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGFzdCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBvcHRpb25zW25leHRGb2N1c10sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRoZW1lXCIsXG4gICAgdmFsdWU6IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgICAgIC8vIFVzZSB0aGUgZGVmYXVsdCB0aGVtZSBpZiB0aGVyZSBhcmUgbm8gY3VzdG9taXphdGlvbnMuXG4gICAgICBpZiAoIXRoaXMucHJvcHMudGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRUaGVtZTtcbiAgICAgIH0gLy8gSWYgdGhlIHRoZW1lIHByb3AgaXMgYSBmdW5jdGlvbiwgYXNzdW1lIHRoZSBmdW5jdGlvblxuICAgICAgLy8ga25vd3MgaG93IHRvIG1lcmdlIHRoZSBwYXNzZWQtaW4gZGVmYXVsdCB0aGVtZSB3aXRoXG4gICAgICAvLyBpdHMgb3duIG1vZGlmaWNhdGlvbnMuXG5cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnRoZW1lKGRlZmF1bHRUaGVtZSk7XG4gICAgICB9IC8vIE90aGVyd2lzZSwgaWYgYSBwbGFpbiB0aGVtZSBvYmplY3Qgd2FzIHBhc3NlZCBpbixcbiAgICAgIC8vIG92ZXJsYXkgaXQgd2l0aCB0aGUgZGVmYXVsdCB0aGVtZS5cblxuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRlZmF1bHRUaGVtZSksIHRoaXMucHJvcHMudGhlbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDb21tb25Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21tb25Qcm9wcygpIHtcbiAgICAgIHZhciBjbGVhclZhbHVlID0gdGhpcy5jbGVhclZhbHVlLFxuICAgICAgICAgIGN4ID0gdGhpcy5jeCxcbiAgICAgICAgICBnZXRTdHlsZXMgPSB0aGlzLmdldFN0eWxlcyxcbiAgICAgICAgICBnZXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUsXG4gICAgICAgICAgc2VsZWN0T3B0aW9uID0gdGhpcy5zZWxlY3RPcHRpb24sXG4gICAgICAgICAgc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLFxuICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgICAgICBpc1J0bCA9IHByb3BzLmlzUnRsLFxuICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuICAgICAgdmFyIGhhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJWYWx1ZTogY2xlYXJWYWx1ZSxcbiAgICAgICAgY3g6IGN4LFxuICAgICAgICBnZXRTdHlsZXM6IGdldFN0eWxlcyxcbiAgICAgICAgZ2V0VmFsdWU6IGdldFZhbHVlLFxuICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWUsXG4gICAgICAgIGlzTXVsdGk6IGlzTXVsdGksXG4gICAgICAgIGlzUnRsOiBpc1J0bCxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgc2VsZWN0T3B0aW9uOiBzZWxlY3RPcHRpb24sXG4gICAgICAgIHNlbGVjdFByb3BzOiBwcm9wcyxcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlLFxuICAgICAgICB0aGVtZTogdGhpcy5nZXRUaGVtZSgpXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNWYWx1ZSgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICByZXR1cm4gc2VsZWN0VmFsdWUubGVuZ3RoID4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNPcHRpb25zKCkge1xuICAgICAgcmV0dXJuICEhdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCkubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NsZWFyYWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NsZWFyYWJsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzQ2xlYXJhYmxlID0gX3RoaXMkcHJvcHM3LmlzQ2xlYXJhYmxlLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczcuaXNNdWx0aTsgLy8gc2luZ2xlIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgTk9UIGNsZWFyYWJsZVxuICAgICAgLy8gbXVsdGkgc2VsZWN0LCBieSBkZWZhdWx0LCBJUyBjbGVhcmFibGVcblxuICAgICAgaWYgKGlzQ2xlYXJhYmxlID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICAgICAgcmV0dXJuIGlzQ2xlYXJhYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc09wdGlvbkRpc2FibGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9pc09wdGlvbkRpc2FibGVkKHRoaXMucHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc09wdGlvblNlbGVjdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9pc09wdGlvblNlbGVjdGVkKHRoaXMucHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaWx0ZXJPcHRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIF9maWx0ZXJPcHRpb24odGhpcy5wcm9wcywgb3B0aW9uLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0T3B0aW9uTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwgY29udGV4dCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmZvcm1hdE9wdGlvbkxhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIF9zZWxlY3RWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIHtcbiAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgIGlucHV0VmFsdWU6IF9pbnB1dFZhbHVlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlOiBfc2VsZWN0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0R3JvdXBMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNb3VzZSBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOiAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb21wb3NpdGlvbiBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgdmFsdWU6IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRvdWNoIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvVG91Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFwiLFxuICAgIHZhbHVlOiAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZW5kZXJlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczguaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczguaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlucHV0SWQgPSBfdGhpcyRwcm9wczguaW5wdXRJZCxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM4LmlucHV0VmFsdWUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczgudGFiSW5kZXgsXG4gICAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzOC5mb3JtLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczgubWVudUlzT3BlbjtcblxuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBJbnB1dCA9IF90aGlzJGdldENvbXBvbmVudHMuSW5wdXQ7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGlucHV0SXNIaWRkZW4gPSBfdGhpcyRzdGF0ZTQuaW5wdXRJc0hpZGRlbixcbiAgICAgICAgICBhcmlhU2VsZWN0aW9uID0gX3RoaXMkc3RhdGU0LmFyaWFTZWxlY3Rpb247XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlkID0gaW5wdXRJZCB8fCB0aGlzLmdldEVsZW1lbnRJZCgnaW5wdXQnKTsgLy8gYXJpYSBhdHRyaWJ1dGVzIG1ha2VzIHRoZSBKU1ggXCJub2lzeVwiLCBzZXBhcmF0ZWQgZm9yIGNsYXJpdHlcblxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogbWVudUlzT3BlbixcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlLFxuICAgICAgICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiB0aGlzLnByb3BzWydhcmlhLWVycm9ybWVzc2FnZSddLFxuICAgICAgICAnYXJpYS1pbnZhbGlkJzogdGhpcy5wcm9wc1snYXJpYS1pbnZhbGlkJ10sXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCdcbiAgICAgIH0sIG1lbnVJc09wZW4gJiYge1xuICAgICAgICAnYXJpYS1jb250cm9scyc6IHRoaXMuZ2V0RWxlbWVudElkKCdsaXN0Ym94JyksXG4gICAgICAgICdhcmlhLW93bnMnOiB0aGlzLmdldEVsZW1lbnRJZCgnbGlzdGJveCcpXG4gICAgICB9KSwgIWlzU2VhcmNoYWJsZSAmJiB7XG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogdHJ1ZVxuICAgICAgfSksIHRoaXMuaGFzVmFsdWUoKSA/IChhcmlhU2VsZWN0aW9uID09PSBudWxsIHx8IGFyaWFTZWxlY3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFyaWFTZWxlY3Rpb24uYWN0aW9uKSA9PT0gJ2luaXRpYWwtaW5wdXQtZm9jdXMnICYmIHtcbiAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLmdldEVsZW1lbnRJZCgnbGl2ZS1yZWdpb24nKVxuICAgICAgfSA6IHtcbiAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiB0aGlzLmdldEVsZW1lbnRJZCgncGxhY2Vob2xkZXInKVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHVtbXlJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICAgIGlucHV0TW9kZTogXCJub25lXCIsXG4gICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9LCBhcmlhQXR0cmlidXRlcykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhdXRvQ2FwaXRhbGl6ZTogXCJub25lXCIsXG4gICAgICAgIGF1dG9Db21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgYXV0b0NvcnJlY3Q6IFwib2ZmXCIsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaW5uZXJSZWY6IHRoaXMuZ2V0SW5wdXRSZWYsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzSGlkZGVuOiBpbnB1dElzSGlkZGVuLFxuICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uSW5wdXRGb2N1cyxcbiAgICAgICAgc3BlbGxDaGVjazogXCJmYWxzZVwiLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZVxuICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czIgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBNdWx0aVZhbHVlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWVSZW1vdmUsXG4gICAgICAgICAgU2luZ2xlVmFsdWUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5TaW5nbGVWYWx1ZSxcbiAgICAgICAgICBQbGFjZWhvbGRlciA9IF90aGlzJGdldENvbXBvbmVudHMyLlBsYWNlaG9sZGVyO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlID0gX3RoaXMkcHJvcHM5LmNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM5LmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzOS5pc011bHRpLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczkuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJHByb3BzOS5wbGFjZWhvbGRlcjtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU1LnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNS5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU1LmlzRm9jdXNlZDtcblxuICAgICAgaWYgKCF0aGlzLmhhc1ZhbHVlKCkgfHwgIWNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZSA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQbGFjZWhvbGRlciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgICBpZDogdGhpcy5nZXRFbGVtZW50SWQoJ3BsYWNlaG9sZGVyJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCBwbGFjZWhvbGRlcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgaXNPcHRpb25Gb2N1c2VkID0gb3B0ID09PSBmb2N1c2VkVmFsdWU7XG4gICAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KF90aGlzMy5nZXRPcHRpb25MYWJlbChvcHQpLCBcIi1cIikuY29uY2F0KF90aGlzMy5nZXRPcHRpb25WYWx1ZShvcHQpKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVQcm9wczoge1xuICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnJlbW92ZVZhbHVlKG9wdCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogb3B0XG4gICAgICAgICAgfSksIF90aGlzMy5mb3JtYXRPcHRpb25MYWJlbChvcHQsICd2YWx1ZScpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2luZ2xlVmFsdWUgPSBzZWxlY3RWYWx1ZVswXTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGRhdGE6IHNpbmdsZVZhbHVlLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5mb3JtYXRPcHRpb25MYWJlbChzaW5nbGVWYWx1ZSwgJ3ZhbHVlJykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhckluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhckluZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzMyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIENsZWFySW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czMuQ2xlYXJJbmRpY2F0b3I7XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTAuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczEwLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcblxuICAgICAgaWYgKCF0aGlzLmlzQ2xlYXJhYmxlKCkgfHwgIUNsZWFySW5kaWNhdG9yIHx8IGlzRGlzYWJsZWQgfHwgIXRoaXMuaGFzVmFsdWUoKSB8fCBpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLm9uQ2xlYXJJbmRpY2F0b3JUb3VjaEVuZCxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENsZWFySW5kaWNhdG9yLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaW5uZXJQcm9wczogaW5uZXJQcm9wcyxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTG9hZGluZ0luZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM0ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgTG9hZGluZ0luZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM0LkxvYWRpbmdJbmRpY2F0b3I7XG5cbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTEuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc0xvYWRpbmcgPSBfdGhpcyRwcm9wczExLmlzTG9hZGluZztcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIGlmICghTG9hZGluZ0luZGljYXRvciB8fCAhaXNMb2FkaW5nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpbm5lclByb3BzID0ge1xuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ0luZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckluZGljYXRvclNlcGFyYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czUgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM1LkRyb3Bkb3duSW5kaWNhdG9yLFxuICAgICAgICAgIEluZGljYXRvclNlcGFyYXRvciA9IF90aGlzJGdldENvbXBvbmVudHM1LkluZGljYXRvclNlcGFyYXRvcjsgLy8gc2VwYXJhdG9yIGRvZXNuJ3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBkcm9wZG93biBpbmRpY2F0b3JcblxuXG4gICAgICBpZiAoIURyb3Bkb3duSW5kaWNhdG9yIHx8ICFJbmRpY2F0b3JTZXBhcmF0b3IpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvclNlcGFyYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckRyb3Bkb3duSW5kaWNhdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRyb3Bkb3duSW5kaWNhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM2ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNi5Ecm9wZG93bkluZGljYXRvcjtcblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlzRGlzYWJsZWQgPSB0aGlzLnByb3BzLmlzRGlzYWJsZWQ7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wZG93bkluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlck1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czcgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBHcm91cCA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwLFxuICAgICAgICAgIEdyb3VwSGVhZGluZyA9IF90aGlzJGdldENvbXBvbmVudHM3Lkdyb3VwSGVhZGluZyxcbiAgICAgICAgICBNZW51ID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudSxcbiAgICAgICAgICBNZW51TGlzdCA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnVMaXN0LFxuICAgICAgICAgIE1lbnVQb3J0YWwgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51UG9ydGFsLFxuICAgICAgICAgIExvYWRpbmdNZXNzYWdlID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgTm9PcHRpb25zTWVzc2FnZSA9IF90aGlzJGdldENvbXBvbmVudHM3Lk5vT3B0aW9uc01lc3NhZ2UsXG4gICAgICAgICAgT3B0aW9uID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuT3B0aW9uO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2FwdHVyZU1lbnVTY3JvbGwgPSBfdGhpcyRwcm9wczEyLmNhcHR1cmVNZW51U2Nyb2xsLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczEyLmlucHV0VmFsdWUsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxMi5pc0xvYWRpbmcsXG4gICAgICAgICAgbG9hZGluZ01lc3NhZ2UgPSBfdGhpcyRwcm9wczEyLmxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1pbk1lbnVIZWlnaHQsXG4gICAgICAgICAgbWF4TWVudUhlaWdodCA9IF90aGlzJHByb3BzMTIubWF4TWVudUhlaWdodCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMxMi5tZW51SXNPcGVuLFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wczEyLm1lbnVQbGFjZW1lbnQsXG4gICAgICAgICAgbWVudVBvc2l0aW9uID0gX3RoaXMkcHJvcHMxMi5tZW51UG9zaXRpb24sXG4gICAgICAgICAgbWVudVBvcnRhbFRhcmdldCA9IF90aGlzJHByb3BzMTIubWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgICBtZW51U2hvdWxkQmxvY2tTY3JvbGwgPSBfdGhpcyRwcm9wczEyLm1lbnVTaG91bGRCbG9ja1Njcm9sbCxcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wczEyLm1lbnVTaG91bGRTY3JvbGxJbnRvVmlldyxcbiAgICAgICAgICBub09wdGlvbnNNZXNzYWdlID0gX3RoaXMkcHJvcHMxMi5ub09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIG9uTWVudVNjcm9sbFRvVG9wID0gX3RoaXMkcHJvcHMxMi5vbk1lbnVTY3JvbGxUb1RvcCxcbiAgICAgICAgICBvbk1lbnVTY3JvbGxUb0JvdHRvbSA9IF90aGlzJHByb3BzMTIub25NZW51U2Nyb2xsVG9Cb3R0b207XG4gICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybiBudWxsOyAvLyBUT0RPOiBJbnRlcm5hbCBPcHRpb24gVHlwZSBoZXJlXG5cbiAgICAgIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIGlkKSB7XG4gICAgICAgIHZhciB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgICAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gZm9jdXNlZE9wdGlvbiA9PT0gZGF0YTtcbiAgICAgICAgdmFyIG9uSG92ZXIgPSBpc0Rpc2FibGVkID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQub25PcHRpb25Ib3ZlcihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uU2VsZWN0ID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnNlbGVjdE9wdGlvbihkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wdGlvbklkID0gXCJcIi5jb25jYXQoX3RoaXM0LmdldEVsZW1lbnRJZCgnb3B0aW9uJyksIFwiLVwiKS5jb25jYXQoaWQpO1xuICAgICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgICBpZDogb3B0aW9uSWQsXG4gICAgICAgICAgb25DbGljazogb25TZWxlY3QsXG4gICAgICAgICAgb25Nb3VzZU1vdmU6IG9uSG92ZXIsXG4gICAgICAgICAgb25Nb3VzZU92ZXI6IG9uSG92ZXIsXG4gICAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb24sIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAga2V5OiBvcHRpb25JZCxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgICAgaW5uZXJSZWY6IGlzRm9jdXNlZCA/IF90aGlzNC5nZXRGb2N1c2VkT3B0aW9uUmVmIDogdW5kZWZpbmVkXG4gICAgICAgIH0pLCBfdGhpczQuZm9ybWF0T3B0aW9uTGFiZWwocHJvcHMuZGF0YSwgJ21lbnUnKSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWVudVVJO1xuXG4gICAgICBpZiAodGhpcy5oYXNPcHRpb25zKCkpIHtcbiAgICAgICAgbWVudVVJID0gdGhpcy5nZXRDYXRlZ29yaXplZE9wdGlvbnMoKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICAgICAgICB2YXIgX2RhdGEgPSBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGl0ZW0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBncm91cEluZGV4ID0gaXRlbS5pbmRleDtcbiAgICAgICAgICAgIHZhciBncm91cElkID0gXCJcIi5jb25jYXQoX3RoaXM0LmdldEVsZW1lbnRJZCgnZ3JvdXAnKSwgXCItXCIpLmNvbmNhdChncm91cEluZGV4KTtcbiAgICAgICAgICAgIHZhciBoZWFkaW5nSWQgPSBcIlwiLmNvbmNhdChncm91cElkLCBcIi1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEdyb3VwLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgICAga2V5OiBncm91cElkLFxuICAgICAgICAgICAgICBkYXRhOiBfZGF0YSxcbiAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgSGVhZGluZzogR3JvdXBIZWFkaW5nLFxuICAgICAgICAgICAgICBoZWFkaW5nUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBpZDogaGVhZGluZ0lkLFxuICAgICAgICAgICAgICAgIGRhdGE6IGl0ZW0uZGF0YVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsYWJlbDogX3RoaXM0LmZvcm1hdEdyb3VwTGFiZWwoaXRlbS5kYXRhKVxuICAgICAgICAgICAgfSksIGl0ZW0ub3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKG9wdGlvbiwgXCJcIi5jb25jYXQoZ3JvdXBJbmRleCwgXCItXCIpLmNvbmNhdChvcHRpb24uaW5kZXgpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gJ29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoaXRlbSwgXCJcIi5jb25jYXQoaXRlbS5pbmRleCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTG9hZGluZykge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGxvYWRpbmdNZXNzYWdlKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdNZXNzYWdlLCBjb21tb25Qcm9wcywgbWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX21lc3NhZ2UgPSBub09wdGlvbnNNZXNzYWdlKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfbWVzc2FnZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIG1lbnVVSSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vT3B0aW9uc01lc3NhZ2UsIGNvbW1vblByb3BzLCBfbWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtZW51UGxhY2VtZW50UHJvcHMgPSB7XG4gICAgICAgIG1pbk1lbnVIZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIG1heE1lbnVIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uLFxuICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXc6IG1lbnVTaG91bGRTY3JvbGxJbnRvVmlld1xuICAgICAgfTtcbiAgICAgIHZhciBtZW51RWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQbGFjZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywgbWVudVBsYWNlbWVudFByb3BzKSwgZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICAgIHZhciByZWYgPSBfcmVmNC5yZWYsXG4gICAgICAgICAgICBfcmVmNCRwbGFjZXJQcm9wcyA9IF9yZWY0LnBsYWNlclByb3BzLFxuICAgICAgICAgICAgcGxhY2VtZW50ID0gX3JlZjQkcGxhY2VyUHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gX3JlZjQkcGxhY2VyUHJvcHMubWF4SGVpZ2h0O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMsIHtcbiAgICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBfdGhpczQub25NZW51TW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZU1vdmU6IF90aGlzNC5vbk1lbnVNb3VzZU1vdmUsXG4gICAgICAgICAgICBpZDogX3RoaXM0LmdldEVsZW1lbnRJZCgnbGlzdGJveCcpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsTWFuYWdlciwge1xuICAgICAgICAgIGNhcHR1cmVFbmFibGVkOiBjYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgICBvblRvcEFycml2ZTogb25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25Cb3R0b21BcnJpdmU6IG9uTWVudVNjcm9sbFRvQm90dG9tLFxuICAgICAgICAgIGxvY2tFbmFibGVkOiBtZW51U2hvdWxkQmxvY2tTY3JvbGxcbiAgICAgICAgfSwgZnVuY3Rpb24gKHNjcm9sbFRhcmdldFJlZikge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgX3RoaXM0LmdldE1lbnVMaXN0UmVmKGluc3RhbmNlKTtcblxuICAgICAgICAgICAgICBzY3JvbGxUYXJnZXRSZWYoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uXG4gICAgICAgICAgfSksIG1lbnVVSSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pOyAvLyBwb3NpdGlvbmluZyBiZWhhdmlvdXIgaXMgYWxtb3N0IGlkZW50aWNhbCBmb3IgcG9ydGFsbGVkIGFuZCBmaXhlZCxcbiAgICAgIC8vIHNvIHdlIHVzZSB0aGUgc2FtZSBjb21wb25lbnQuIHRoZSBhY3R1YWwgcG9ydGFsbGluZyBsb2dpYyBpcyBmb3JrZWRcbiAgICAgIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IGJhc2VkIG9uIGBtZW51UG9zaXRpb25gXG5cbiAgICAgIHJldHVybiBtZW51UG9ydGFsVGFyZ2V0IHx8IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVQb3J0YWwsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBhcHBlbmRUbzogbWVudVBvcnRhbFRhcmdldCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IHRoaXMuY29udHJvbFJlZixcbiAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb25cbiAgICAgIH0pLCBtZW51RWxlbWVudCkgOiBtZW51RWxlbWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyRm9ybUZpZWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckZvcm1GaWVsZCgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGVsaW1pdGVyID0gX3RoaXMkcHJvcHMxMy5kZWxpbWl0ZXIsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTMuaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHMxMy5pc011bHRpLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczEzLm5hbWU7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgaWYgKCFuYW1lIHx8IGlzRGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgaWYgKGRlbGltaXRlcikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1LmdldE9wdGlvblZhbHVlKG9wdCk7XG4gICAgICAgICAgfSkuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGlucHV0ID0gc2VsZWN0VmFsdWUubGVuZ3RoID4gMCA/IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJpLVwiLmNvbmNhdChpKSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzNS5nZXRPcHRpb25WYWx1ZShvcHQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX3ZhbHVlID0gc2VsZWN0VmFsdWVbMF0gPyB0aGlzLmdldE9wdGlvblZhbHVlKHNlbGVjdFZhbHVlWzBdKSA6ICcnO1xuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgdmFsdWU6IF92YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTGl2ZVJlZ2lvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaXZlUmVnaW9uKCkge1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGFyaWFTZWxlY3Rpb24gPSBfdGhpcyRzdGF0ZTYuYXJpYVNlbGVjdGlvbixcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uID0gX3RoaXMkc3RhdGU2LmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGU2LmZvY3VzZWRWYWx1ZSxcbiAgICAgICAgICBpc0ZvY3VzZWQgPSBfdGhpcyRzdGF0ZTYuaXNGb2N1c2VkLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGU2LnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSB0aGlzLmdldEZvY3VzYWJsZU9wdGlvbnMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaXZlUmVnaW9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaWQ6IHRoaXMuZ2V0RWxlbWVudElkKCdsaXZlLXJlZ2lvbicpLFxuICAgICAgICBhcmlhU2VsZWN0aW9uOiBhcmlhU2VsZWN0aW9uLFxuICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IGZvY3VzZWRWYWx1ZSxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZSxcbiAgICAgICAgZm9jdXNhYmxlT3B0aW9uczogZm9jdXNhYmxlT3B0aW9uc1xuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM4ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgQ29udHJvbCA9IF90aGlzJGdldENvbXBvbmVudHM4LkNvbnRyb2wsXG4gICAgICAgICAgSW5kaWNhdG9yc0NvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHM4LkluZGljYXRvcnNDb250YWluZXIsXG4gICAgICAgICAgU2VsZWN0Q29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguU2VsZWN0Q29udGFpbmVyLFxuICAgICAgICAgIFZhbHVlQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguVmFsdWVDb250YWluZXI7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczE0LmNsYXNzTmFtZSxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzMTQuaWQsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzMTQuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHMxNC5tZW51SXNPcGVuO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcyA9IHRoaXMuZ2V0Q29tbW9uUHJvcHMoKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duXG4gICAgICAgIH0sXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJMaXZlUmVnaW9uKCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRyb2wsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRDb250cm9sUmVmLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25Db250cm9sTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Db250cm9sVG91Y2hFbmRcbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgIG1lbnVJc09wZW46IG1lbnVJc09wZW5cbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChWYWx1ZUNvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZSgpLCB0aGlzLnJlbmRlcklucHV0KCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpY2F0b3JzQ29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMucmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJMb2FkaW5nSW5kaWNhdG9yKCksIHRoaXMucmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCksIHRoaXMucmVuZGVyRHJvcGRvd25JbmRpY2F0b3IoKSkpLCB0aGlzLnJlbmRlck1lbnUoKSwgdGhpcy5yZW5kZXJGb3JtRmllbGQoKSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIHZhciBwcmV2UHJvcHMgPSBzdGF0ZS5wcmV2UHJvcHMsXG4gICAgICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGUgPSBzdGF0ZS5jbGVhckZvY3VzVmFsdWVPblVwZGF0ZSxcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgPSBzdGF0ZS5pbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUsXG4gICAgICAgICAgYXJpYVNlbGVjdGlvbiA9IHN0YXRlLmFyaWFTZWxlY3Rpb24sXG4gICAgICAgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIHByZXZXYXNGb2N1c2VkID0gc3RhdGUucHJldldhc0ZvY3VzZWQ7XG4gICAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgICBtZW51SXNPcGVuID0gcHJvcHMubWVudUlzT3BlbixcbiAgICAgICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUodmFsdWUpO1xuICAgICAgdmFyIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7fTtcblxuICAgICAgaWYgKHByZXZQcm9wcyAmJiAodmFsdWUgIT09IHByZXZQcm9wcy52YWx1ZSB8fCBvcHRpb25zICE9PSBwcmV2UHJvcHMub3B0aW9ucyB8fCBtZW51SXNPcGVuICE9PSBwcmV2UHJvcHMubWVudUlzT3BlbiB8fCBpbnB1dFZhbHVlICE9PSBwcmV2UHJvcHMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZU9wdGlvbnMgPSBtZW51SXNPcGVuID8gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkgOiBbXTtcbiAgICAgICAgdmFyIGZvY3VzZWRWYWx1ZSA9IGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlID8gZ2V0TmV4dEZvY3VzZWRWYWx1ZShzdGF0ZSwgc2VsZWN0VmFsdWUpIDogbnVsbDtcbiAgICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSBnZXROZXh0Rm9jdXNlZE9wdGlvbihzdGF0ZSwgZm9jdXNhYmxlT3B0aW9ucyk7XG4gICAgICAgIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7XG4gICAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZFZhbHVlOiBmb2N1c2VkVmFsdWUsXG4gICAgICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9IC8vIHNvbWUgdXBkYXRlcyBzaG91bGQgdG9nZ2xlIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmlzaWJpbGl0eVxuXG5cbiAgICAgIHZhciBuZXdJbnB1dElzSGlkZGVuU3RhdGUgPSBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUgIT0gbnVsbCAmJiBwcm9wcyAhPT0gcHJldlByb3BzID8ge1xuICAgICAgICBpbnB1dElzSGlkZGVuOiBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGUsXG4gICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTogdW5kZWZpbmVkXG4gICAgICB9IDoge307XG4gICAgICB2YXIgbmV3QXJpYVNlbGVjdGlvbiA9IGFyaWFTZWxlY3Rpb247XG4gICAgICB2YXIgaGFzS2VwdEZvY3VzID0gaXNGb2N1c2VkICYmIHByZXZXYXNGb2N1c2VkO1xuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmICFoYXNLZXB0Rm9jdXMpIHtcbiAgICAgICAgLy8gSWYgYHZhbHVlYCBvciBgZGVmYXVsdFZhbHVlYCBwcm9wcyBhcmUgbm90IGVtcHR5IHRoZW4gYW5ub3VuY2UgdGhlbVxuICAgICAgICAvLyB3aGVuIHRoZSBTZWxlY3QgaXMgaW5pdGlhbGx5IGZvY3VzZWRcbiAgICAgICAgbmV3QXJpYVNlbGVjdGlvbiA9IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVUZXJuYXJ5KGlzTXVsdGksIHNlbGVjdFZhbHVlLCBzZWxlY3RWYWx1ZVswXSB8fCBudWxsKSxcbiAgICAgICAgICBvcHRpb25zOiBzZWxlY3RWYWx1ZSxcbiAgICAgICAgICBhY3Rpb246ICdpbml0aWFsLWlucHV0LWZvY3VzJ1xuICAgICAgICB9O1xuICAgICAgICBoYXNLZXB0Rm9jdXMgPSAhcHJldldhc0ZvY3VzZWQ7XG4gICAgICB9IC8vIElmIHRoZSAnaW5pdGlhbC1pbnB1dC1mb2N1cycgYWN0aW9uIGhhcyBiZWVuIHNldCBhbHJlYWR5XG4gICAgICAvLyB0aGVuIHJlc2V0IHRoZSBhcmlhU2VsZWN0aW9uIHRvIG51bGxcblxuXG4gICAgICBpZiAoKGFyaWFTZWxlY3Rpb24gPT09IG51bGwgfHwgYXJpYVNlbGVjdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXJpYVNlbGVjdGlvbi5hY3Rpb24pID09PSAnaW5pdGlhbC1pbnB1dC1mb2N1cycpIHtcbiAgICAgICAgbmV3QXJpYVNlbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmV3TWVudU9wdGlvbnNTdGF0ZSksIG5ld0lucHV0SXNIaWRkZW5TdGF0ZSksIHt9LCB7XG4gICAgICAgIHByZXZQcm9wczogcHJvcHMsXG4gICAgICAgIGFyaWFTZWxlY3Rpb246IG5ld0FyaWFTZWxlY3Rpb24sXG4gICAgICAgIHByZXZXYXNGb2N1c2VkOiBoYXNLZXB0Rm9jdXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KENvbXBvbmVudCk7XG5cblNlbGVjdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCB7IFNlbGVjdCBhcyBTLCBnZXRPcHRpb25MYWJlbCQxIGFzIGEsIGRlZmF1bHRQcm9wcyBhcyBiLCBjcmVhdGVGaWx0ZXIgYXMgYywgZGVmYXVsdFRoZW1lIGFzIGQsIGdldE9wdGlvblZhbHVlJDEgYXMgZywgbWVyZ2VTdHlsZXMgYXMgbSB9O1xuIiwiaW1wb3J0IHsgdSBhcyB1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3VzZVN0YXRlTWFuYWdlci02ODQyNTI3MS5lc20uanMnO1xuZXhwb3J0IHsgdSBhcyB1c2VTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3VzZVN0YXRlTWFuYWdlci02ODQyNTI3MS5lc20uanMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUyBhcyBTZWxlY3QgfSBmcm9tICcuL1NlbGVjdC01NGFjODM3OS5lc20uanMnO1xuZXhwb3J0IHsgYyBhcyBjcmVhdGVGaWx0ZXIsIGQgYXMgZGVmYXVsdFRoZW1lLCBtIGFzIG1lcmdlU3R5bGVzIH0gZnJvbSAnLi9TZWxlY3QtNTRhYzgzNzkuZXNtLmpzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCB7IF8gYXMgX2NyZWF0ZVN1cGVyIH0gZnJvbSAnLi9pbmRleC1hNzY5MGEzMy5lc20uanMnO1xuZXhwb3J0IHsgYyBhcyBjb21wb25lbnRzIH0gZnJvbSAnLi9pbmRleC1hNzY5MGEzMy5lc20uanMnO1xuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90YWdnZWRUZW1wbGF0ZUxpdGVyYWwnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuXG52YXIgU3RhdGVNYW5hZ2VkU2VsZWN0ID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGJhc2VTZWxlY3RQcm9wcyA9IHVzZVN0YXRlTWFuYWdlcihwcm9wcyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZlxuICB9LCBiYXNlU2VsZWN0UHJvcHMpKTtcbn0pO1xuXG52YXIgTm9uY2VQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTm9uY2VQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOb25jZVByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBOb25jZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vbmNlUHJvdmlkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiAobm9uY2UsIGtleSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUNhY2hlKHtcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICBrZXk6IGtleVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IG1lbW9pemVPbmUoX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTm9uY2VQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBlbW90aW9uQ2FjaGUgPSB0aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSh0aGlzLnByb3BzLm5vbmNlLCB0aGlzLnByb3BzLmNhY2hlS2V5KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYWNoZVByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBlbW90aW9uQ2FjaGVcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb25jZVByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZU1hbmFnZWRTZWxlY3Q7XG5leHBvcnQgeyBOb25jZVByb3ZpZGVyIH07XG4iXSwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9