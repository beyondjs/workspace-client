define(["@beyond-js/kernel@0.1.9/bundle"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/scaffolding","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@beyond-js/kernel@0.1.9/bundle", dep_0]]);
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/scaffolding/main.1.0.0.js
var main_1_0_0_exports = {};
__export(main_1_0_0_exports, {
  TEMPLATES: () => TEMPLATES,
  TYPES: () => TYPES,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(main_1_0_0_exports);

// node_modules/@beyond-js/scaffolding/main/main.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/scaffolding@1.0.0/main"
  },
  "type": "ts"
}, import_meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3511745868,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TYPES = exports.TEMPLATES = void 0;
    const TEMPLATES2 = [{
      name: "react",
      platforms: ["web"]
    }, {
      name: "vue",
      platforms: ["web"]
    }, {
      name: "svelte",
      platforms: ["web"]
    }, {
      name: "express",
      platforms: ["node"]
    }, {
      name: "web-backend-app",
      platforms: ["web", "backend"]
    }, {
      name: "web",
      platforms: ["web"]
    }, {
      name: "web-backend",
      platforms: ["web", "backend"]
    }, {
      name: "node",
      platforms: ["node"]
    }, {
      name: "backend",
      platforms: ["backend"]
    }];
    exports.TEMPLATES = TEMPLATES2;
    const TYPES2 = ["empty", "web", "backend", "web-backend", "node", "express", "react", "svelte", "vue"];
    exports.TYPES = TYPES2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "TEMPLATES",
  "name": "TEMPLATES"
}, {
  "im": "./index",
  "from": "TYPES",
  "name": "TYPES"
}];
var TEMPLATES, TYPES;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "TEMPLATES") && (TEMPLATES = require2 ? require2("./index").TEMPLATES : value);
  (require2 || prop === "TYPES") && (TYPES = require2 ? require2("./index").TYPES : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3NjYWZmb2xkaW5nL21haW4uMS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9zY2FmZm9sZGluZy9tYWluL19fc291cmNlcy9tYWluL2luZGV4LnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiVEVNUExBVEVTIiwiVFlQRVMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJuYW1lIiwicGxhdGZvcm1zIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQWtCLE1BQU1KLGFBQVksQ0FDaEM7TUFBQ0ssTUFBTTtNQUFTQyxXQUFXLENBQUMsS0FBSztJQUFDLEdBQ2xDO01BQUNELE1BQU07TUFBT0MsV0FBVyxDQUFDLEtBQUs7SUFBQyxHQUNoQztNQUFDRCxNQUFNO01BQVVDLFdBQVcsQ0FBQyxLQUFLO0lBQUMsR0FDbkM7TUFBQ0QsTUFBTTtNQUFXQyxXQUFXLENBQUMsTUFBTTtJQUFDLEdBQ3JDO01BQUNELE1BQU07TUFBbUJDLFdBQVcsQ0FBQyxPQUFPLFNBQVM7SUFBQyxHQUN2RDtNQUFDRCxNQUFNO01BQU9DLFdBQVcsQ0FBQyxLQUFLO0lBQUMsR0FDaEM7TUFBQ0QsTUFBTTtNQUFlQyxXQUFXLENBQUMsT0FBTyxTQUFTO0lBQUMsR0FDbkQ7TUFBQ0QsTUFBTTtNQUFRQyxXQUFXLENBQUMsTUFBTTtJQUFDLEdBQ2xDO01BQUNELE1BQU07TUFBV0MsV0FBVyxDQUFDLFNBQVM7SUFBQyxDQUFDO0lBQzNDQztJQUdGLE1BQU1OLFNBQVEsQ0FBQyxTQUFTLE9BQU8sV0FBVyxlQUFlLFFBQVEsV0FBVyxTQUFTLFVBQVUsS0FBSztJQUFFTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=