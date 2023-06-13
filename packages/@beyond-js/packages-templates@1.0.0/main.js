define(["@beyond-js/kernel@0.1.9/bundle"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/packages-templates","1.0.0"]]);
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

// .beyond/uimport/@beyond-js/packages-templates/main.1.0.0.js
var main_1_0_0_exports = {};
__export(main_1_0_0_exports, {
  TEMPLATES: () => TEMPLATES,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(main_1_0_0_exports);

// node_modules/@beyond-js/packages-templates/main/main.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/packages-templates@1.0.0/main"
  },
  "type": "ts"
}, import_meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 231829269,
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
    const TYPES = ["empty", "web", "backend", "web-backend", "node", "express", "react", "svelte", "vue"];
    exports.TYPES = TYPES;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "TEMPLATES",
  "name": "TEMPLATES"
}];
var TEMPLATES;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "TEMPLATES") && (TEMPLATES = require2 ? require2("./index").TEMPLATES : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3BhY2thZ2VzLXRlbXBsYXRlcy9tYWluLjEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcGFja2FnZXMtdGVtcGxhdGVzL21haW4vX19zb3VyY2VzL21haW4vaW5kZXgudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJURU1QTEFURVMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJuYW1lIiwicGxhdGZvcm1zIiwiZXhwb3J0cyIsIlRZUEVTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBa0IsTUFBTUgsYUFBWSxDQUNoQztNQUFDSSxNQUFNO01BQVNDLFdBQVcsQ0FBQyxLQUFLO0lBQUMsR0FDbEM7TUFBQ0QsTUFBTTtNQUFPQyxXQUFXLENBQUMsS0FBSztJQUFDLEdBQ2hDO01BQUNELE1BQU07TUFBVUMsV0FBVyxDQUFDLEtBQUs7SUFBQyxHQUNuQztNQUFDRCxNQUFNO01BQVdDLFdBQVcsQ0FBQyxNQUFNO0lBQUMsR0FDckM7TUFBQ0QsTUFBTTtNQUFtQkMsV0FBVyxDQUFDLE9BQU8sU0FBUztJQUFDLEdBQ3ZEO01BQUNELE1BQU07TUFBT0MsV0FBVyxDQUFDLEtBQUs7SUFBQyxHQUNoQztNQUFDRCxNQUFNO01BQWVDLFdBQVcsQ0FBQyxPQUFPLFNBQVM7SUFBQyxHQUNuRDtNQUFDRCxNQUFNO01BQVFDLFdBQVcsQ0FBQyxNQUFNO0lBQUMsR0FDbEM7TUFBQ0QsTUFBTTtNQUFXQyxXQUFXLENBQUMsU0FBUztJQUFDLENBQUM7SUFDM0NDO0lBR0YsTUFBTUMsUUFBUSxDQUFDLFNBQVMsT0FBTyxXQUFXLGVBQWUsUUFBUSxXQUFXLFNBQVMsVUFBVSxLQUFLO0lBQUVEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==