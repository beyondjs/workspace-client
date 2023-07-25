define(["@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/assertThisInitialized"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0],["@babel/runtime@7.21.0/helpers/esm/assertThisInitialized", dep_1]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/possibleConstructorReturn.7.21.0.js
var possibleConstructorReturn_7_21_0_exports = {};
__export(possibleConstructorReturn_7_21_0_exports, {
  default: () => possibleConstructorReturn_7_21_0_default
});
module.exports = __toCommonJS(possibleConstructorReturn_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var import_typeof = __toESM(require("@babel/runtime@7.21.0/helpers/esm/typeof"), 0);
var import_assertThisInitialized = __toESM(require("@babel/runtime@7.21.0/helpers/esm/assertThisInitialized"), 0);
function _possibleConstructorReturn(self, call) {
  if (call && ((0, import_typeof.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0, import_assertThisInitialized.default)(self);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/possibleConstructorReturn.7.21.0.js
var possibleConstructorReturn_7_21_0_default = _possibleConstructorReturn;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsImNhbGwiLCJpbXBvcnRfdHlwZW9mIiwiVHlwZUVycm9yIiwiaW1wb3J0X2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxvQkFBb0JDO0FBQ3BCLG1DQUFrQ0E7QUFDbkIsU0FBUkMsMkJBQTRDQyxNQUFNQyxNQUFNO0VBQzdELElBQUlBLGFBQVNDLHVCQUFRRCxJQUFJLE1BQU0sWUFBWSxPQUFPQSxTQUFTLGFBQWE7SUFDdEUsT0FBT0E7RUFDVCxXQUFXQSxTQUFTLFFBQVE7SUFDMUIsTUFBTSxJQUFJRSxVQUFVLDBEQUEwRDtFQUNoRjtFQUNBLFdBQU9DLHNDQUFzQkosSUFBSTtBQUNuQzs7O0FETkEsSUFBT0ssMkNBQVFOIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==