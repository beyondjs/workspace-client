define(["@babel/runtime@7.19.0/helpers/esm/arrayWithHoles","@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit","@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.19.0/helpers/esm/nonIterableRest"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/arrayWithHoles", dep_0],["@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit", dep_1],["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray", dep_2],["@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray", dep_3],["@babel/runtime@7.19.0/helpers/esm/nonIterableRest", dep_4]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/slicedToArray.7.19.0.js
var slicedToArray_7_19_0_exports = {};
__export(slicedToArray_7_19_0_exports, {
  default: () => slicedToArray_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var import_arrayWithHoles = __toESM(require("@babel/runtime@7.19.0/helpers/esm/arrayWithHoles"), 0);
var import_iterableToArrayLimit = __toESM(require("@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit"), 0);
var import_unsupportedIterableToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray"), 0);
var import_nonIterableRest = __toESM(require("@babel/runtime@7.19.0/helpers/esm/nonIterableRest"), 0);
function _slicedToArray(arr, i) {
  return (0, import_arrayWithHoles.default)(arr) || (0, import_iterableToArrayLimit.default)(arr, i) || (0, import_unsupportedIterableToArray.default)(arr, i) || (0, import_nonIterableRest.default)();
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/slicedToArray.7.19.0.js
var slicedToArray_7_19_0_default = _slicedToArray;
module.exports = __toCommonJS(slicedToArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuNy4xOS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwiX190b0VTTSIsImFyciIsImkiLCJzbGljZWRUb0FycmF5XzdfMTlfMF9kZWZhdWx0IiwiX3NsaWNlZFRvQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTs7O0FDQUEsNEJBQTJCQztBQUMzQixrQ0FBaUNBO0FBQ2pDLHdDQUF1Q0E7QUFDdkMsNkJBQTRCQTtBQUNiLHdCQUF3QkMsS0FBS0MsR0FBRztFQUM3QyxPQUFPLG1DQUFlRCxHQUFHLEtBQUsseUNBQXFCQSxLQUFLQyxDQUFDLEtBQUssK0NBQTJCRCxLQUFLQyxDQUFDLEtBQUsscUNBQWdCO0FBQ3RIOzs7QURIQSxJQUFPQywrQkFBUUMiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheSc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5JztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=