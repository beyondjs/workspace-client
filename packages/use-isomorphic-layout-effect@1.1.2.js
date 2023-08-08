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

// .beyond/uimport/use-isomorphic-layout-effect.1.1.2.js
var use_isomorphic_layout_effect_1_1_2_exports = {};
__export(use_isomorphic_layout_effect_1_1_2_exports, {
  default: () => use_isomorphic_layout_effect_1_1_2_default
});
module.exports = __toCommonJS(use_isomorphic_layout_effect_1_1_2_exports);

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react = require("react@16.14.0");
var index = import_react.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// .beyond/uimport/use-isomorphic-layout-effect.1.1.2.js
var use_isomorphic_layout_effect_1_1_2_default = use_isomorphic_layout_effect_browser_esm_default;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QvZGlzdC91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LmJyb3dzZXIuZXNtLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsInJlcXVpcmUiLCJpbmRleCIsImltcG9ydF9yZWFjdCIsInVzZV9pc29tb3JwaGljX2xheW91dF9lZmZlY3RfYnJvd3Nlcl9lc21fZGVmYXVsdCIsInVzZV9pc29tb3JwaGljX2xheW91dF9lZmZlY3RfMV8xXzJfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLG1CQUFnQ0M7QUFFaEMsSUFBSUMsUUFBU0M7QUFFYixJQUFPQyxtREFBUUY7OztBRERmLElBQU9HLDZDQUFRRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=