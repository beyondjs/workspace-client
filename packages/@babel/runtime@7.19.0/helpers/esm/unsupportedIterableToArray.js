define(["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray", dep_0]]);
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.19.0.js
var unsupportedIterableToArray_7_19_0_exports = {};
__export(unsupportedIterableToArray_7_19_0_exports, {
  default: () => unsupportedIterableToArray_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var import_arrayLikeToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray"), 0);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0, import_arrayLikeToArray.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, import_arrayLikeToArray.default)(o, minLen);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.19.0.js
var unsupportedIterableToArray_7_19_0_default = _unsupportedIterableToArray;
module.exports = __toCommonJS(unsupportedIterableToArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3RvRVNNIiwibyIsIm1pbkxlbiIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheV83XzE5XzBfZGVmYXVsdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBOzs7QUNBQSw4QkFBNkJDO0FBQ2QscUNBQXFDQyxHQUFHQyxRQUFRO0VBQzdELElBQUksQ0FBQ0QsR0FBRztFQUNSLElBQUksT0FBT0EsTUFBTSxVQUFVLE9BQU8scUNBQWlCQSxHQUFHQyxNQUFNO0VBQzVELElBQUlDLElBQUlDLE9BQU9DLFVBQVVDLFNBQVNDLEtBQUtOLENBQUMsRUFBRU8sTUFBTSxHQUFHLEVBQUU7RUFDckQsSUFBSUwsTUFBTSxZQUFZRixFQUFFUSxhQUFhTixJQUFJRixFQUFFUSxZQUFZQztFQUN2RCxJQUFJUCxNQUFNLFNBQVNBLE1BQU0sT0FBTyxPQUFPUSxNQUFNQyxLQUFLWCxDQUFDO0VBQ25ELElBQUlFLE1BQU0sZUFBZSwyQ0FBMkNVLEtBQUtWLENBQUMsR0FBRyxPQUFPLHFDQUFpQkYsR0FBR0MsTUFBTTtBQUNoSDs7O0FETEEsSUFBT1ksNENBQVFDIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JztcblxuaW1wb3J0IF9kZWZhdWx0IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==