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

// .beyond/uimport/@babel/runtime/helpers/esm/toConsumableArray.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/toConsumableArray.7.21.0.js
var toConsumableArray_7_21_0_default = _toConsumableArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsImltcG9ydF9hcnJheVdpdGhvdXRIb2xlcyIsImltcG9ydF9pdGVyYWJsZVRvQXJyYXkiLCJpbXBvcnRfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJpbXBvcnRfbm9uSXRlcmFibGVTcHJlYWQiLCJ0b0NvbnN1bWFibGVBcnJheV83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLCtCQUE4QkM7QUFDOUIsNkJBQTRCQTtBQUM1Qix3Q0FBdUNBO0FBQ3ZDLCtCQUE4QkE7QUFDZixTQUFSQyxtQkFBb0NDLEtBQUs7RUFDOUMsV0FBT0Msa0NBQWtCRCxHQUFHLFNBQUtFLGdDQUFnQkYsR0FBRyxTQUFLRywyQ0FBMkJILEdBQUcsU0FBS0ksbUNBQWtCO0FBQ2hIOzs7QURIQSxJQUFPQyxtQ0FBUU4iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9