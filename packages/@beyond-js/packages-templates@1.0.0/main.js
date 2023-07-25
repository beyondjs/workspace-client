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

// .beyond/uimport/temp/@beyond-js/packages-templates/main.1.0.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcGFja2FnZXMtdGVtcGxhdGVzL21haW4uMS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9wYWNrYWdlcy10ZW1wbGF0ZXMvbWFpbi9fX3NvdXJjZXMvbWFpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIlRFTVBMQVRFUyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsIm5hbWUiLCJwbGF0Zm9ybXMiLCJleHBvcnRzIiwiVFlQRVMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FrQixNQUFNSCxhQUFZLENBQ2hDO01BQUNJLE1BQU07TUFBU0MsV0FBVyxDQUFDLEtBQUs7SUFBQyxHQUNsQztNQUFDRCxNQUFNO01BQU9DLFdBQVcsQ0FBQyxLQUFLO0lBQUMsR0FDaEM7TUFBQ0QsTUFBTTtNQUFVQyxXQUFXLENBQUMsS0FBSztJQUFDLEdBQ25DO01BQUNELE1BQU07TUFBV0MsV0FBVyxDQUFDLE1BQU07SUFBQyxHQUNyQztNQUFDRCxNQUFNO01BQW1CQyxXQUFXLENBQUMsT0FBTyxTQUFTO0lBQUMsR0FDdkQ7TUFBQ0QsTUFBTTtNQUFPQyxXQUFXLENBQUMsS0FBSztJQUFDLEdBQ2hDO01BQUNELE1BQU07TUFBZUMsV0FBVyxDQUFDLE9BQU8sU0FBUztJQUFDLEdBQ25EO01BQUNELE1BQU07TUFBUUMsV0FBVyxDQUFDLE1BQU07SUFBQyxHQUNsQztNQUFDRCxNQUFNO01BQVdDLFdBQVcsQ0FBQyxTQUFTO0lBQUMsQ0FBQztJQUMzQ0M7SUFHRixNQUFNQyxRQUFRLENBQUMsU0FBUyxPQUFPLFdBQVcsZUFBZSxRQUFRLFdBQVcsU0FBUyxVQUFVLEtBQUs7SUFBRUQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9