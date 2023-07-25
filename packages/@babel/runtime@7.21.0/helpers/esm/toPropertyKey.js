define(["@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/toPrimitive"], (dep_0, dep_1) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0],["@babel/runtime@7.21.0/helpers/esm/toPrimitive", dep_1]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPropertyKey.7.21.0.js
var toPropertyKey_7_21_0_exports = {};
__export(toPropertyKey_7_21_0_exports, {
  default: () => toPropertyKey_7_21_0_default
});
module.exports = __toCommonJS(toPropertyKey_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
var import_typeof = __toESM(require("@babel/runtime@7.21.0/helpers/esm/typeof"), 0);
var import_toPrimitive = __toESM(require("@babel/runtime@7.21.0/helpers/esm/toPrimitive"), 0);
function _toPropertyKey(arg) {
  var key = (0, import_toPrimitive.default)(arg, "string");
  return (0, import_typeof.default)(key) === "symbol" ? key : String(key);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPropertyKey.7.21.0.js
var toPropertyKey_7_21_0_default = _toPropertyKey;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl90b1Byb3BlcnR5S2V5IiwiYXJnIiwia2V5IiwiaW1wb3J0X3RvUHJpbWl0aXZlIiwiaW1wb3J0X3R5cGVvZiIsIlN0cmluZyIsInRvUHJvcGVydHlLZXlfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxvQkFBb0JDO0FBQ3BCLHlCQUF3QkE7QUFDVCxTQUFSQyxlQUFnQ0MsS0FBSztFQUMxQyxJQUFJQyxVQUFNQyw0QkFBWUYsS0FBSyxRQUFRO0VBQ25DLFdBQU9HLHVCQUFRRixHQUFHLE1BQU0sV0FBV0EsTUFBTUcsT0FBT0gsR0FBRztBQUNyRDs7O0FERkEsSUFBT0ksK0JBQVFOIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==