define(["@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.21.0/helpers/esm/arrayWithoutHoles","@babel/runtime@7.21.0/helpers/esm/iterableToArray","@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.21.0/helpers/esm/nonIterableSpread"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray", dep_0],["@babel/runtime@7.21.0/helpers/esm/arrayWithoutHoles", dep_1],["@babel/runtime@7.21.0/helpers/esm/iterableToArray", dep_2],["@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray", dep_3],["@babel/runtime@7.21.0/helpers/esm/nonIterableSpread", dep_4]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toConsumableArray.7.21.0.js
var toConsumableArray_7_21_0_exports = {};
__export(toConsumableArray_7_21_0_exports, {
  default: () => toConsumableArray_7_21_0_default
});
module.exports = __toCommonJS(toConsumableArray_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
var import_arrayWithoutHoles = __toESM(require("@babel/runtime@7.21.0/helpers/esm/arrayWithoutHoles"), 0);
var import_iterableToArray = __toESM(require("@babel/runtime@7.21.0/helpers/esm/iterableToArray"), 0);
var import_unsupportedIterableToArray = __toESM(require("@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray"), 0);
var import_nonIterableSpread = __toESM(require("@babel/runtime@7.21.0/helpers/esm/nonIterableSpread"), 0);
function _toConsumableArray(arr) {
  return (0, import_arrayWithoutHoles.default)(arr) || (0, import_iterableToArray.default)(arr) || (0, import_unsupportedIterableToArray.default)(arr) || (0, import_nonIterableSpread.default)();
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toConsumableArray.7.21.0.js
var toConsumableArray_7_21_0_default = _toConsumableArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiaW1wb3J0X2FycmF5V2l0aG91dEhvbGVzIiwiaW1wb3J0X2l0ZXJhYmxlVG9BcnJheSIsImltcG9ydF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsImltcG9ydF9ub25JdGVyYWJsZVNwcmVhZCIsInRvQ29uc3VtYWJsZUFycmF5XzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsK0JBQThCQztBQUM5Qiw2QkFBNEJBO0FBQzVCLHdDQUF1Q0E7QUFDdkMsK0JBQThCQTtBQUNmLFNBQVJDLG1CQUFvQ0MsS0FBSztFQUM5QyxXQUFPQyxrQ0FBa0JELEdBQUcsU0FBS0UsZ0NBQWdCRixHQUFHLFNBQUtHLDJDQUEyQkgsR0FBRyxTQUFLSSxtQ0FBa0I7QUFDaEg7OztBREhBLElBQU9DLG1DQUFRTiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=