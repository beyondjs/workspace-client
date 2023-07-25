define(["@babel/runtime@7.21.0/helpers/esm/arrayWithHoles","@babel/runtime@7.21.0/helpers/esm/iterableToArrayLimit","@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.21.0/helpers/esm/nonIterableRest"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/arrayWithHoles", dep_0],["@babel/runtime@7.21.0/helpers/esm/iterableToArrayLimit", dep_1],["@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray", dep_2],["@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray", dep_3],["@babel/runtime@7.21.0/helpers/esm/nonIterableRest", dep_4]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/slicedToArray.7.21.0.js
var slicedToArray_7_21_0_exports = {};
__export(slicedToArray_7_21_0_exports, {
  default: () => slicedToArray_7_21_0_default
});
module.exports = __toCommonJS(slicedToArray_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var import_arrayWithHoles = __toESM(require("@babel/runtime@7.21.0/helpers/esm/arrayWithHoles"), 0);
var import_iterableToArrayLimit = __toESM(require("@babel/runtime@7.21.0/helpers/esm/iterableToArrayLimit"), 0);
var import_unsupportedIterableToArray = __toESM(require("@babel/runtime@7.21.0/helpers/esm/unsupportedIterableToArray"), 0);
var import_nonIterableRest = __toESM(require("@babel/runtime@7.21.0/helpers/esm/nonIterableRest"), 0);
function _slicedToArray(arr, i) {
  return (0, import_arrayWithHoles.default)(arr) || (0, import_iterableToArrayLimit.default)(arr, i) || (0, import_unsupportedIterableToArray.default)(arr, i) || (0, import_nonIterableRest.default)();
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/slicedToArray.7.21.0.js
var slicedToArray_7_21_0_default = _slicedToArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsImltcG9ydF9hcnJheVdpdGhIb2xlcyIsImltcG9ydF9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsImltcG9ydF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsImltcG9ydF9ub25JdGVyYWJsZVJlc3QiLCJzbGljZWRUb0FycmF5XzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsNEJBQTJCQztBQUMzQixrQ0FBaUNBO0FBQ2pDLHdDQUF1Q0E7QUFDdkMsNkJBQTRCQTtBQUNiLFNBQVJDLGVBQWdDQyxLQUFLQyxHQUFHO0VBQzdDLFdBQU9DLCtCQUFlRixHQUFHLFNBQUtHLHFDQUFxQkgsS0FBS0MsQ0FBQyxTQUFLRywyQ0FBMkJKLEtBQUtDLENBQUMsU0FBS0ksaUNBQWdCO0FBQ3RIOzs7QURIQSxJQUFPQywrQkFBUVAiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9