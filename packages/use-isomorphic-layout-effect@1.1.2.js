define(["react@16.14.0"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["object-assign","4.1.1"],["prop-types","15.8.1"],["react","16.14.0"],["use-isomorphic-layout-effect","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["react@16.14.0", dep_0]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/use-isomorphic-layout-effect.1.1.2.js
var use_isomorphic_layout_effect_1_1_2_exports = {};
__export(use_isomorphic_layout_effect_1_1_2_exports, {
  default: () => use_isomorphic_layout_effect_1_1_2_default
});
module.exports = __toCommonJS(use_isomorphic_layout_effect_1_1_2_exports);

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react = require("react@16.14.0");
var index = import_react.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// .beyond/uimport/temp/use-isomorphic-layout-effect.1.1.2.js
var use_isomorphic_layout_effect_1_1_2_default = use_isomorphic_layout_effect_browser_esm_default;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC9kaXN0L3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QuYnJvd3Nlci5lc20uanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwicmVxdWlyZSIsImluZGV4IiwiaW1wb3J0X3JlYWN0IiwidXNlX2lzb21vcnBoaWNfbGF5b3V0X2VmZmVjdF9icm93c2VyX2VzbV9kZWZhdWx0IiwidXNlX2lzb21vcnBoaWNfbGF5b3V0X2VmZmVjdF8xXzFfMl9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsbUJBQWdDQztBQUVoQyxJQUFJQyxRQUFTQztBQUViLElBQU9DLG1EQUFRRjs7O0FERGYsSUFBT0csNkNBQVFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==