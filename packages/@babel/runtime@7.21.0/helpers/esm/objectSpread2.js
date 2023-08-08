define(["@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/toPrimitive","@babel/runtime@7.21.0/helpers/esm/toPropertyKey","@babel/runtime@7.21.0/helpers/esm/defineProperty"], (dep_0, dep_1, dep_2, dep_3) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0],["@babel/runtime@7.21.0/helpers/esm/toPrimitive", dep_1],["@babel/runtime@7.21.0/helpers/esm/toPropertyKey", dep_2],["@babel/runtime@7.21.0/helpers/esm/defineProperty", dep_3]]);
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

// .beyond/uimport/@babel/runtime/helpers/esm/objectSpread2.7.21.0.js
var objectSpread2_7_21_0_exports = {};
__export(objectSpread2_7_21_0_exports, {
  default: () => objectSpread2_7_21_0_default
});
module.exports = __toCommonJS(objectSpread2_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var import_defineProperty = __toESM(require("@babel/runtime@7.21.0/helpers/esm/defineProperty"), 0);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function (key) {
      (0, import_defineProperty.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// .beyond/uimport/@babel/runtime/helpers/esm/objectSpread2.7.21.0.js
var objectSpread2_7_21_0_default = _objectSpread2;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9FU00iLCJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkMiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJmb3JFYWNoIiwia2V5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iamVjdFNwcmVhZDJfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSw0QkFBMkJDO0FBQzNCLFNBQVNDLFFBQVFDLFFBQVFDLGdCQUFnQjtFQUN2QyxJQUFJQyxPQUFPQyxPQUFPRCxLQUFLRixNQUFNO0VBQzdCLElBQUlHLE9BQU9DLHVCQUF1QjtJQUNoQyxJQUFJQyxVQUFVRixPQUFPQyxzQkFBc0JKLE1BQU07SUFDakRDLG1CQUFtQkksVUFBVUEsUUFBUUMsT0FBTyxVQUFVQyxLQUFLO01BQ3pELE9BQU9KLE9BQU9LLHlCQUF5QlIsUUFBUU8sR0FBRyxFQUFFRTtJQUN0RCxDQUFDLElBQUlQLEtBQUtRLEtBQUtDLE1BQU1ULE1BQU1HLE9BQU87RUFDcEM7RUFDQSxPQUFPSDtBQUNUO0FBQ2UsU0FBUlUsZUFBZ0NDLFFBQVE7RUFDN0MsU0FBU0MsSUFBSSxHQUFHQSxJQUFJQyxVQUFVQyxRQUFRRixLQUFLO0lBQ3pDLElBQUlHLFNBQVMsUUFBUUYsVUFBVUQsS0FBS0MsVUFBVUQsS0FBSyxDQUFDO0lBQ3BEQSxJQUFJLElBQUlmLFFBQVFJLE9BQU9jLE1BQU0sR0FBRyxJQUFFLEVBQUVDLFFBQVEsVUFBVUMsS0FBSztNQUN6RCxtQ0FBZU4sUUFBUU0sS0FBS0YsT0FBT0UsSUFBSTtJQUN6QyxDQUFDLElBQUloQixPQUFPaUIsNEJBQTRCakIsT0FBT2tCLGlCQUFpQlIsUUFBUVYsT0FBT2lCLDBCQUEwQkgsTUFBTSxDQUFDLElBQUlsQixRQUFRSSxPQUFPYyxNQUFNLENBQUMsRUFBRUMsUUFBUSxVQUFVQyxLQUFLO01BQ2pLaEIsT0FBT21CLGVBQWVULFFBQVFNLEtBQUtoQixPQUFPSyx5QkFBeUJTLFFBQVFFLEdBQUcsQ0FBQztJQUNqRixDQUFDO0VBQ0g7RUFDQSxPQUFPTjtBQUNUOzs7QURsQkEsSUFBT1UsK0JBQVFYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==