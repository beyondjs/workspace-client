define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayLikeToArray.7.19.0.js
var arrayLikeToArray_7_19_0_exports = {};
__export(arrayLikeToArray_7_19_0_exports, {
  default: () => arrayLikeToArray_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/arrayLikeToArray.7.19.0.js
var arrayLikeToArray_7_19_0_default = _arrayLikeToArray;
module.exports = __toCommonJS(arrayLikeToArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuNy4xOS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwiYXJyIiwibGVuIiwibGVuZ3RoIiwiaSIsImFycjIiLCJBcnJheSIsImFycmF5TGlrZVRvQXJyYXlfN18xOV8wX2RlZmF1bHQiLCJfYXJyYXlMaWtlVG9BcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTs7O0FDQWUsMkJBQTJCQyxLQUFLQyxLQUFLO0VBQ2xELElBQUlBLE9BQU8sUUFBUUEsTUFBTUQsSUFBSUUsUUFBUUQsTUFBTUQsSUFBSUU7RUFFL0MsU0FBU0MsSUFBSSxHQUFHQyxPQUFPLElBQUlDLE1BQU1KLEdBQUcsR0FBR0UsSUFBSUYsS0FBS0UsS0FBSztJQUNuREMsS0FBS0QsS0FBS0gsSUFBSUc7RUFDaEI7RUFFQSxPQUFPQztBQUNUOzs7QURMQSxJQUFPRSxrQ0FBUUMiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheSc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5JztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iXSwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9