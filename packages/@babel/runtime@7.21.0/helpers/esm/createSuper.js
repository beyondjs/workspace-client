define(["@babel/runtime@7.21.0/helpers/esm/getPrototypeOf","@babel/runtime@7.21.0/helpers/esm/isNativeReflectConstruct","@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/assertThisInitialized","@babel/runtime@7.21.0/helpers/esm/possibleConstructorReturn"], (dep_0, dep_1, dep_2, dep_3, dep_4) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/getPrototypeOf", dep_0],["@babel/runtime@7.21.0/helpers/esm/isNativeReflectConstruct", dep_1],["@babel/runtime@7.21.0/helpers/esm/typeof", dep_2],["@babel/runtime@7.21.0/helpers/esm/assertThisInitialized", dep_3],["@babel/runtime@7.21.0/helpers/esm/possibleConstructorReturn", dep_4]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createSuper.7.21.0.js
var createSuper_7_21_0_exports = {};
__export(createSuper_7_21_0_exports, {
  default: () => createSuper_7_21_0_default
});
module.exports = __toCommonJS(createSuper_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/createSuper.js
var import_getPrototypeOf = __toESM(require("@babel/runtime@7.21.0/helpers/esm/getPrototypeOf"), 0);
var import_isNativeReflectConstruct = __toESM(require("@babel/runtime@7.21.0/helpers/esm/isNativeReflectConstruct"), 0);
var import_possibleConstructorReturn = __toESM(require("@babel/runtime@7.21.0/helpers/esm/possibleConstructorReturn"), 0);
function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0, import_isNativeReflectConstruct.default)();
  return function _createSuperInternal() {
    var Super = (0, import_getPrototypeOf.default)(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, import_getPrototypeOf.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, import_possibleConstructorReturn.default)(this, result);
  };
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createSuper.7.21.0.js
var createSuper_7_21_0_default = _createSuper;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJpbXBvcnRfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsImltcG9ydF9nZXRQcm90b3R5cGVPZiIsInJlc3VsdCIsIk5ld1RhcmdldCIsImNvbnN0cnVjdG9yIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImFwcGx5IiwiaW1wb3J0X3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJjcmVhdGVTdXBlcl83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLDRCQUEyQkM7QUFDM0Isc0NBQXFDQTtBQUNyQyx1Q0FBc0NBO0FBQ3ZCLFNBQVJDLGFBQThCQyxTQUFTO0VBQzVDLElBQUlDLGdDQUE0QkMsMENBQXlCO0VBQ3pELE9BQU8sU0FBU0MsdUJBQXVCO0lBQ3JDLElBQUlDLFlBQVFDLCtCQUFlTCxPQUFPO01BQ2hDTTtJQUNGLElBQUlMLDJCQUEyQjtNQUM3QixJQUFJTSxnQkFBWUYsK0JBQWUsSUFBSSxFQUFFRztNQUNyQ0YsU0FBU0csUUFBUUMsVUFBVU4sT0FBT08sV0FBV0osU0FBUztJQUN4RCxPQUFPO01BQ0xELFNBQVNGLE1BQU1RLE1BQU0sTUFBTUQsU0FBUztJQUN0QztJQUNBLFdBQU9FLDBDQUEwQixNQUFNUCxNQUFNO0VBQy9DO0FBQ0Y7OztBRGJBLElBQU9RLDZCQUFRZiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=