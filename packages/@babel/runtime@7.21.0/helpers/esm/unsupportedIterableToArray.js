define(["@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray", dep_0]]);
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

// .beyond/uimport/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.21.0.js
var unsupportedIterableToArray_7_21_0_exports = {};
__export(unsupportedIterableToArray_7_21_0_exports, {
  default: () => unsupportedIterableToArray_7_21_0_default
});
module.exports = __toCommonJS(unsupportedIterableToArray_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var import_arrayLikeToArray = __toESM(require("@babel/runtime@7.21.0/helpers/esm/arrayLikeToArray"), 0);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0, import_arrayLikeToArray.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, import_arrayLikeToArray.default)(o, minLen);
}

// .beyond/uimport/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.21.0.js
var unsupportedIterableToArray_7_21_0_default = _unsupportedIterableToArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm8iLCJtaW5MZW4iLCJpbXBvcnRfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheV83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLDhCQUE2QkM7QUFDZCxTQUFSQyw0QkFBNkNDLEdBQUdDLFFBQVE7RUFDN0QsSUFBSSxDQUFDRCxHQUFHO0VBQ1IsSUFBSSxPQUFPQSxNQUFNLFVBQVUsV0FBT0UsaUNBQWlCRixHQUFHQyxNQUFNO0VBQzVELElBQUlFLElBQUlDLE9BQU9DLFVBQVVDLFNBQVNDLEtBQUtQLENBQUMsRUFBRVEsTUFBTSxHQUFHLEVBQUU7RUFDckQsSUFBSUwsTUFBTSxZQUFZSCxFQUFFUyxhQUFhTixJQUFJSCxFQUFFUyxZQUFZQztFQUN2RCxJQUFJUCxNQUFNLFNBQVNBLE1BQU0sT0FBTyxPQUFPUSxNQUFNQyxLQUFLWixDQUFDO0VBQ25ELElBQUlHLE1BQU0sZUFBZSwyQ0FBMkNVLEtBQUtWLENBQUMsR0FBRyxXQUFPRCxpQ0FBaUJGLEdBQUdDLE1BQU07QUFDaEg7OztBRExBLElBQU9hLDRDQUFRZiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=