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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArray.7.19.0.js
var iterableToArray_7_19_0_exports = {};
__export(iterableToArray_7_19_0_exports, {
  default: () => iterableToArray_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArray.7.19.0.js
var iterableToArray_7_19_0_default = _iterableToArray;
module.exports = __toCommonJS(iterableToArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS43LjE5LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIml0ZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIkFycmF5IiwiZnJvbSIsIml0ZXJhYmxlVG9BcnJheV83XzE5XzBfZGVmYXVsdCIsIl9pdGVyYWJsZVRvQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7OztBQ0FlLDBCQUEwQkMsTUFBTTtFQUM3QyxJQUFJLE9BQU9DLFdBQVcsZUFBZUQsS0FBS0MsT0FBT0MsYUFBYSxRQUFRRixLQUFLLGlCQUFpQixNQUFNLE9BQU9HLE1BQU1DLEtBQUtKLElBQUk7QUFDMUg7OztBRENBLElBQU9LLGlDQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXknO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5JztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iXSwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9