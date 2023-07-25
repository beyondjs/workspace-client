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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/unsupportedIterableToArray.7.21.0.js
var unsupportedIterableToArray_7_21_0_default = _unsupportedIterableToArray;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibyIsIm1pbkxlbiIsImltcG9ydF9hcnJheUxpa2VUb0FycmF5IiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsOEJBQTZCQztBQUNkLFNBQVJDLDRCQUE2Q0MsR0FBR0MsUUFBUTtFQUM3RCxJQUFJLENBQUNELEdBQUc7RUFDUixJQUFJLE9BQU9BLE1BQU0sVUFBVSxXQUFPRSxpQ0FBaUJGLEdBQUdDLE1BQU07RUFDNUQsSUFBSUUsSUFBSUMsT0FBT0MsVUFBVUMsU0FBU0MsS0FBS1AsQ0FBQyxFQUFFUSxNQUFNLEdBQUcsRUFBRTtFQUNyRCxJQUFJTCxNQUFNLFlBQVlILEVBQUVTLGFBQWFOLElBQUlILEVBQUVTLFlBQVlDO0VBQ3ZELElBQUlQLE1BQU0sU0FBU0EsTUFBTSxPQUFPLE9BQU9RLE1BQU1DLEtBQUtaLENBQUM7RUFDbkQsSUFBSUcsTUFBTSxlQUFlLDJDQUEyQ1UsS0FBS1YsQ0FBQyxHQUFHLFdBQU9ELGlDQUFpQkYsR0FBR0MsTUFBTTtBQUNoSDs7O0FETEEsSUFBT2EsNENBQVFmIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==