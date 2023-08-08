define(["@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/toPrimitive","@babel/runtime@7.21.0/helpers/esm/toPropertyKey"], (dep_0, dep_1, dep_2) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0],["@babel/runtime@7.21.0/helpers/esm/toPrimitive", dep_1],["@babel/runtime@7.21.0/helpers/esm/toPropertyKey", dep_2]]);
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

// .beyond/uimport/@babel/runtime/helpers/esm/defineProperty.7.21.0.js
var defineProperty_7_21_0_exports = {};
__export(defineProperty_7_21_0_exports, {
  default: () => defineProperty_7_21_0_default
});
module.exports = __toCommonJS(defineProperty_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
var import_toPropertyKey = __toESM(require("@babel/runtime@7.21.0/helpers/esm/toPropertyKey"), 0);
function _defineProperty(obj, key, value) {
  key = (0, import_toPropertyKey.default)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// .beyond/uimport/@babel/runtime/helpers/esm/defineProperty.7.21.0.js
var defineProperty_7_21_0_default = _defineProperty;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiaW1wb3J0X3RvUHJvcGVydHlLZXkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5XzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsMkJBQTBCQztBQUNYLFNBQVJDLGdCQUFpQ0MsS0FBS0MsS0FBS0MsT0FBTztFQUN2REQsVUFBTUUsOEJBQWNGLEdBQUc7RUFDdkIsSUFBSUEsT0FBT0QsS0FBSztJQUNkSSxPQUFPQyxlQUFlTCxLQUFLQyxLQUFLO01BQzlCQztNQUNBSSxZQUFZO01BQ1pDLGNBQWM7TUFDZEMsVUFBVTtJQUNaLENBQUM7RUFDSCxPQUFPO0lBQ0xSLElBQUlDLE9BQU9DO0VBQ2I7RUFDQSxPQUFPRjtBQUNUOzs7QURYQSxJQUFPUyxnQ0FBUVYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9