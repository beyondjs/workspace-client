define(["@babel/runtime@7.21.0/helpers/esm/objectWithoutPropertiesLoose"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/objectWithoutPropertiesLoose", dep_0]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.21.0.js
var objectWithoutProperties_7_21_0_exports = {};
__export(objectWithoutProperties_7_21_0_exports, {
  default: () => objectWithoutProperties_7_21_0_default
});
module.exports = __toCommonJS(objectWithoutProperties_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var import_objectWithoutPropertiesLoose = __toESM(require("@babel/runtime@7.21.0/helpers/esm/objectWithoutPropertiesLoose"), 0);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0, import_objectWithoutPropertiesLoose.default)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.21.0.js
var objectWithoutProperties_7_21_0_default = _objectWithoutProperties;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJpbXBvcnRfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImtleSIsImkiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwibGVuZ3RoIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsMENBQXlDQztBQUMxQixTQUFSQyx5QkFBMENDLFFBQVFDLFVBQVU7RUFDakUsSUFBSUQsVUFBVSxNQUFNLE9BQU8sQ0FBQztFQUM1QixJQUFJRSxhQUFTQyw2Q0FBNkJILFFBQVFDLFFBQVE7RUFDMUQsSUFBSUcsS0FBS0M7RUFDVCxJQUFJQyxPQUFPQyx1QkFBdUI7SUFDaEMsSUFBSUMsbUJBQW1CRixPQUFPQyxzQkFBc0JQLE1BQU07SUFDMUQsS0FBS0ssSUFBSSxHQUFHQSxJQUFJRyxpQkFBaUJDLFFBQVFKLEtBQUs7TUFDNUNELE1BQU1JLGlCQUFpQkg7TUFDdkIsSUFBSUosU0FBU1MsUUFBUU4sR0FBRyxLQUFLLEdBQUc7TUFDaEMsSUFBSSxDQUFDRSxPQUFPSyxVQUFVQyxxQkFBcUJDLEtBQUtiLFFBQVFJLEdBQUcsR0FBRztNQUM5REYsT0FBT0UsT0FBT0osT0FBT0k7SUFDdkI7RUFDRjtFQUNBLE9BQU9GO0FBQ1Q7OztBRFpBLElBQU9ZLHlDQUFRZiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=