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

// .beyond/uimport/@babel/runtime/helpers/esm/iterableToArray.7.21.0.js
var iterableToArray_7_21_0_exports = {};
__export(iterableToArray_7_21_0_exports, {
  default: () => iterableToArray_7_21_0_default
});
module.exports = __toCommonJS(iterableToArray_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

// .beyond/uimport/@babel/runtime/helpers/esm/iterableToArray.7.21.0.js
var iterableToArray_7_21_0_default = _iterableToArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfaXRlcmFibGVUb0FycmF5IiwiaXRlciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiQXJyYXkiLCJmcm9tIiwiaXRlcmFibGVUb0FycmF5XzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQWUsU0FBUkMsaUJBQWtDQyxNQUFNO0VBQzdDLElBQUksT0FBT0MsV0FBVyxlQUFlRCxLQUFLQyxPQUFPQyxhQUFhLFFBQVFGLEtBQUssaUJBQWlCLE1BQU0sT0FBT0csTUFBTUMsS0FBS0osSUFBSTtBQUMxSDs7O0FEQ0EsSUFBT0ssaUNBQVFOIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==