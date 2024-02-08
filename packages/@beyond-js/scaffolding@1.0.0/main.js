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

// .beyond/uimport/temp/@beyond-js/scaffolding/main.1.0.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvc2NhZmZvbGRpbmcvbWFpbi4xLjAuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3NjYWZmb2xkaW5nL21haW4vX19zb3VyY2VzL21haW4vaW5kZXgudHMiXSwibmFtZXMiOlsibWFpbl8xXzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJURU1QTEFURVMiLCJUWVBFUyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJURU1QTEFURVMyIiwibmFtZSIsInBsYXRmb3JtcyIsIlRZUEVTMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQWtCLE1BQU1TLFVBQUEsR0FBWSxDQUNoQztNQUFDQyxJQUFBLEVBQU07TUFBU0MsU0FBQSxFQUFXLENBQUMsS0FBSztJQUFDLEdBQ2xDO01BQUNELElBQUEsRUFBTTtNQUFPQyxTQUFBLEVBQVcsQ0FBQyxLQUFLO0lBQUMsR0FDaEM7TUFBQ0QsSUFBQSxFQUFNO01BQVVDLFNBQUEsRUFBVyxDQUFDLEtBQUs7SUFBQyxHQUNuQztNQUFDRCxJQUFBLEVBQU07TUFBV0MsU0FBQSxFQUFXLENBQUMsTUFBTTtJQUFDLEdBQ3JDO01BQUNELElBQUEsRUFBTTtNQUFtQkMsU0FBQSxFQUFXLENBQUMsT0FBTyxTQUFTO0lBQUMsR0FDdkQ7TUFBQ0QsSUFBQSxFQUFNO01BQU9DLFNBQUEsRUFBVyxDQUFDLEtBQUs7SUFBQyxHQUNoQztNQUFDRCxJQUFBLEVBQU07TUFBZUMsU0FBQSxFQUFXLENBQUMsT0FBTyxTQUFTO0lBQUMsR0FDbkQ7TUFBQ0QsSUFBQSxFQUFNO01BQVFDLFNBQUEsRUFBVyxDQUFDLE1BQU07SUFBQyxHQUNsQztNQUFDRCxJQUFBLEVBQU07TUFBV0MsU0FBQSxFQUFXLENBQUMsU0FBUztJQUFDLENBQUM7SUFDM0NKLE9BQUEsQ0FBQUwsU0FBQSxHQUFBTyxVQUFBO0lBR0YsTUFBTUcsTUFBQSxHQUFRLENBQUMsU0FBUyxPQUFPLFdBQVcsZUFBZSxRQUFRLFdBQVcsU0FBUyxVQUFVLEtBQUs7SUFBRUwsT0FBQSxDQUFBSixLQUFBLEdBQUFTLE1BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9