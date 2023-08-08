define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const require = () => void 0;
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

// .beyond/uimport/@babel/runtime/helpers/esm/assertThisInitialized.7.21.0.js
var assertThisInitialized_7_21_0_exports = {};
__export(assertThisInitialized_7_21_0_exports, {
  default: () => assertThisInitialized_7_21_0_default
});
module.exports = __toCommonJS(assertThisInitialized_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// .beyond/uimport/@babel/runtime/helpers/esm/assertThisInitialized.7.21.0.js
var assertThisInitialized_7_21_0_default = _assertThisInitialized;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQWUsU0FBUkMsdUJBQXdDQyxNQUFNO0VBQ25ELElBQUlBLFNBQVMsUUFBUTtJQUNuQixNQUFNLElBQUlDLGVBQWUsMkRBQTJEO0VBQ3RGO0VBQ0EsT0FBT0Q7QUFDVDs7O0FERkEsSUFBT0UsdUNBQVFIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==