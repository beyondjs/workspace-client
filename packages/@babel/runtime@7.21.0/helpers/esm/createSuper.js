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

// .beyond/uimport/@babel/runtime/helpers/esm/createSuper.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/createSuper.7.21.0.js
var createSuper_7_21_0_default = _createSuper;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlci43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXIuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiaW1wb3J0X2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJpbXBvcnRfZ2V0UHJvdG90eXBlT2YiLCJyZXN1bHQiLCJOZXdUYXJnZXQiLCJjb25zdHJ1Y3RvciIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJhcHBseSIsImltcG9ydF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiY3JlYXRlU3VwZXJfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSw0QkFBMkJDO0FBQzNCLHNDQUFxQ0E7QUFDckMsdUNBQXNDQTtBQUN2QixTQUFSQyxhQUE4QkMsU0FBUztFQUM1QyxJQUFJQyxnQ0FBNEJDLDBDQUF5QjtFQUN6RCxPQUFPLFNBQVNDLHVCQUF1QjtJQUNyQyxJQUFJQyxZQUFRQywrQkFBZUwsT0FBTztNQUNoQ007SUFDRixJQUFJTCwyQkFBMkI7TUFDN0IsSUFBSU0sZ0JBQVlGLCtCQUFlLElBQUksRUFBRUc7TUFDckNGLFNBQVNHLFFBQVFDLFVBQVVOLE9BQU9PLFdBQVdKLFNBQVM7SUFDeEQsT0FBTztNQUNMRCxTQUFTRixNQUFNUSxNQUFNLE1BQU1ELFNBQVM7SUFDdEM7SUFDQSxXQUFPRSwwQ0FBMEIsTUFBTVAsTUFBTTtFQUMvQztBQUNGOzs7QURiQSxJQUFPUSw2QkFBUWYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9