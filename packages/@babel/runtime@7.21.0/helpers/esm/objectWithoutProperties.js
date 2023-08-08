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

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutProperties.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutProperties.7.21.0.js
var objectWithoutProperties_7_21_0_default = _objectWithoutProperties;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNvdXJjZSIsImV4Y2x1ZGVkIiwidGFyZ2V0IiwiaW1wb3J0X29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJrZXkiLCJpIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsImxlbmd0aCIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc183XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLDBDQUF5Q0M7QUFDMUIsU0FBUkMseUJBQTBDQyxRQUFRQyxVQUFVO0VBQ2pFLElBQUlELFVBQVUsTUFBTSxPQUFPLENBQUM7RUFDNUIsSUFBSUUsYUFBU0MsNkNBQTZCSCxRQUFRQyxRQUFRO0VBQzFELElBQUlHLEtBQUtDO0VBQ1QsSUFBSUMsT0FBT0MsdUJBQXVCO0lBQ2hDLElBQUlDLG1CQUFtQkYsT0FBT0Msc0JBQXNCUCxNQUFNO0lBQzFELEtBQUtLLElBQUksR0FBR0EsSUFBSUcsaUJBQWlCQyxRQUFRSixLQUFLO01BQzVDRCxNQUFNSSxpQkFBaUJIO01BQ3ZCLElBQUlKLFNBQVNTLFFBQVFOLEdBQUcsS0FBSyxHQUFHO01BQ2hDLElBQUksQ0FBQ0UsT0FBT0ssVUFBVUMscUJBQXFCQyxLQUFLYixRQUFRSSxHQUFHLEdBQUc7TUFDOURGLE9BQU9FLE9BQU9KLE9BQU9JO0lBQ3ZCO0VBQ0Y7RUFDQSxPQUFPRjtBQUNUOzs7QURaQSxJQUFPWSx5Q0FBUWYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9