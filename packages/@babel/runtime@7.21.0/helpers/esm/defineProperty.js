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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/defineProperty.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/defineProperty.7.21.0.js
var defineProperty_7_21_0_default = _defineProperty;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJpbXBvcnRfdG9Qcm9wZXJ0eUtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHlfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSwyQkFBMEJDO0FBQ1gsU0FBUkMsZ0JBQWlDQyxLQUFLQyxLQUFLQyxPQUFPO0VBQ3ZERCxVQUFNRSw4QkFBY0YsR0FBRztFQUN2QixJQUFJQSxPQUFPRCxLQUFLO0lBQ2RJLE9BQU9DLGVBQWVMLEtBQUtDLEtBQUs7TUFDOUJDO01BQ0FJLFlBQVk7TUFDWkMsY0FBYztNQUNkQyxVQUFVO0lBQ1osQ0FBQztFQUNILE9BQU87SUFDTFIsSUFBSUMsT0FBT0M7RUFDYjtFQUNBLE9BQU9GO0FBQ1Q7OztBRFhBLElBQU9TLGdDQUFRViIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=