define(["@babel/runtime@7.19.0/helpers/esm/arrayWithHoles","@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit","@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.19.0/helpers/esm/nonIterableRest"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/@babel/runtime/helpers/esm/slicedToArray.7.19.0.js


var slicedToArray_7_19_0_exports = {};

__export(slicedToArray_7_19_0_exports, {
  default: () => slicedToArray_7_19_0_default
}); // node_modules/@babel/runtime/helpers/esm/slicedToArray.js


var import_arrayWithHoles = __toESM(require("@babel/runtime@7.19.0/helpers/esm/arrayWithHoles"), 0);

var import_iterableToArrayLimit = __toESM(require("@babel/runtime@7.19.0/helpers/esm/iterableToArrayLimit"), 0);

var import_unsupportedIterableToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray"), 0);

var import_nonIterableRest = __toESM(require("@babel/runtime@7.19.0/helpers/esm/nonIterableRest"), 0);

function _slicedToArray(arr, i) {
  return (0, import_arrayWithHoles.default)(arr) || (0, import_iterableToArrayLimit.default)(arr, i) || (0, import_unsupportedIterableToArray.default)(arr, i) || (0, import_nonIterableRest.default)();
} // .beyond/uimport/@babel/runtime/helpers/esm/slicedToArray.7.19.0.js


var slicedToArray_7_19_0_default = _slicedToArray;
module.exports = __toCommonJS(slicedToArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

