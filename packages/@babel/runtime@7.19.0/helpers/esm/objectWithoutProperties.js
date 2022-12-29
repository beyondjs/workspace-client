define(["@babel/runtime@7.19.0/helpers/esm/objectWithoutPropertiesLoose"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.19.0/helpers/esm/objectWithoutPropertiesLoose", dep_0]]);
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.19.0.js
var objectWithoutProperties_7_19_0_exports = {};
__export(objectWithoutProperties_7_19_0_exports, {
  default: () => objectWithoutProperties_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var import_objectWithoutPropertiesLoose = __toESM(require("@babel/runtime@7.19.0/helpers/esm/objectWithoutPropertiesLoose"), 0);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutProperties.7.19.0.js
var objectWithoutProperties_7_19_0_default = _objectWithoutProperties;
module.exports = __toCommonJS(objectWithoutProperties_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3RvRVNNIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJrZXkiLCJpIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsImxlbmd0aCIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc183XzE5XzBfZGVmYXVsdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBOzs7QUNBQSwwQ0FBeUNDO0FBQzFCLGtDQUFrQ0MsUUFBUUMsVUFBVTtFQUNqRSxJQUFJRCxVQUFVLE1BQU0sT0FBTyxDQUFDO0VBQzVCLElBQUlFLFNBQVMsaURBQTZCRixRQUFRQyxRQUFRO0VBQzFELElBQUlFLEtBQUtDO0VBRVQsSUFBSUMsT0FBT0MsdUJBQXVCO0lBQ2hDLElBQUlDLG1CQUFtQkYsT0FBT0Msc0JBQXNCTixNQUFNO0lBRTFELEtBQUtJLElBQUksR0FBR0EsSUFBSUcsaUJBQWlCQyxRQUFRSixLQUFLO01BQzVDRCxNQUFNSSxpQkFBaUJIO01BQ3ZCLElBQUlILFNBQVNRLFFBQVFOLEdBQUcsS0FBSyxHQUFHO01BQ2hDLElBQUksQ0FBQ0UsT0FBT0ssVUFBVUMscUJBQXFCQyxLQUFLWixRQUFRRyxHQUFHLEdBQUc7TUFDOURELE9BQU9DLE9BQU9ILE9BQU9HO0lBQ3ZCO0VBQ0Y7RUFFQSxPQUFPRDtBQUNUOzs7QURmQSxJQUFPVyx5Q0FBUUMiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=