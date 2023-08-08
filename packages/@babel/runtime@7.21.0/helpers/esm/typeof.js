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

// .beyond/uimport/@babel/runtime/helpers/esm/typeof.7.21.0.js
var typeof_7_21_0_exports = {};
__export(typeof_7_21_0_exports, {
  default: () => typeof_7_21_0_default
});
module.exports = __toCommonJS(typeof_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj2) {
    return typeof obj2;
  } : function (obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// .beyond/uimport/@babel/runtime/helpers/esm/typeof.7.21.0.js
var typeof_7_21_0_default = _typeof;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInR5cGVvZl83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLFFBQXlCQyxLQUFLO0VBQ25DOztFQUVBLE9BQU9ELFVBQVUsY0FBYyxPQUFPRSxVQUFVLFlBQVksT0FBT0EsT0FBT0MsV0FBVyxVQUFVRixNQUFLO0lBQ2xHLE9BQU8sT0FBT0E7RUFDaEIsSUFBSSxVQUFVQSxNQUFLO0lBQ2pCLE9BQU9BLFFBQU8sY0FBYyxPQUFPQyxVQUFVRCxLQUFJRyxnQkFBZ0JGLFVBQVVELFNBQVFDLE9BQU9HLFlBQVksV0FBVyxPQUFPSjtFQUMxSCxHQUFHRCxRQUFRQyxHQUFHO0FBQ2hCOzs7QURMQSxJQUFPSyx3QkFBUU4iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9