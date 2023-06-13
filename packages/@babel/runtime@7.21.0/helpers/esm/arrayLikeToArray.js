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

// .beyond/uimport/@babel/runtime/helpers/esm/arrayLikeToArray.7.21.0.js
var arrayLikeToArray_7_21_0_exports = {};
__export(arrayLikeToArray_7_21_0_exports, {
  default: () => arrayLikeToArray_7_21_0_default
});
module.exports = __toCommonJS(arrayLikeToArray_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

// .beyond/uimport/@babel/runtime/helpers/esm/arrayLikeToArray.7.21.0.js
var arrayLikeToArray_7_21_0_default = _arrayLikeToArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSIsImFycmF5TGlrZVRvQXJyYXlfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyxrQkFBbUNDLEtBQUtDLEtBQUs7RUFDbEQsSUFBSUEsT0FBTyxRQUFRQSxNQUFNRCxJQUFJRSxRQUFRRCxNQUFNRCxJQUFJRTtFQUMvQyxTQUFTQyxJQUFJLEdBQUdDLE9BQU8sSUFBSUMsTUFBTUosR0FBRyxHQUFHRSxJQUFJRixLQUFLRSxLQUFLQyxLQUFLRCxLQUFLSCxJQUFJRztFQUNuRSxPQUFPQztBQUNUOzs7QUREQSxJQUFPRSxrQ0FBUVAiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9