define(["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray","@babel/runtime@7.19.0/helpers/esm/arrayWithoutHoles","@babel/runtime@7.19.0/helpers/esm/iterableToArray","@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray","@babel/runtime@7.19.0/helpers/esm/nonIterableSpread"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/arrayLikeToArray", dep_0],["@babel/runtime@7.19.0/helpers/esm/arrayWithoutHoles", dep_1],["@babel/runtime@7.19.0/helpers/esm/iterableToArray", dep_2],["@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray", dep_3],["@babel/runtime@7.19.0/helpers/esm/nonIterableSpread", dep_4]]);
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
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // .beyond/uimport/@babel/runtime/helpers/esm/toConsumableArray.7.19.0.js


var toConsumableArray_7_19_0_exports = {};

__export(toConsumableArray_7_19_0_exports, {
  default: () => toConsumableArray_7_19_0_default
}); // node_modules/@babel/runtime/helpers/esm/toConsumableArray.js


var import_arrayWithoutHoles = __toESM(require("@babel/runtime@7.19.0/helpers/esm/arrayWithoutHoles"), 0);

var import_iterableToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/iterableToArray"), 0);

var import_unsupportedIterableToArray = __toESM(require("@babel/runtime@7.19.0/helpers/esm/unsupportedIterableToArray"), 0);

var import_nonIterableSpread = __toESM(require("@babel/runtime@7.19.0/helpers/esm/nonIterableSpread"), 0);

function _toConsumableArray(arr) {
  return (0, import_arrayWithoutHoles.default)(arr) || (0, import_iterableToArray.default)(arr) || (0, import_unsupportedIterableToArray.default)(arr) || (0, import_nonIterableSpread.default)();
} // .beyond/uimport/@babel/runtime/helpers/esm/toConsumableArray.7.19.0.js


var toConsumableArray_7_19_0_default = _toConsumableArray;
module.exports = __toCommonJS(toConsumableArray_7_19_0_exports);
};

code(module, require);
return module.exports;
});

