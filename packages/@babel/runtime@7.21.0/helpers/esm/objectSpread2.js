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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectSpread2.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectSpread2.7.21.0.js
var objectSpread2_7_21_0_default = _objectSpread2;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5Iiwib2JqZWN0U3ByZWFkMl83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLDRCQUEyQkM7QUFDM0IsU0FBU0MsUUFBUUMsUUFBUUMsZ0JBQWdCO0VBQ3ZDLElBQUlDLE9BQU9DLE9BQU9ELEtBQUtGLE1BQU07RUFDN0IsSUFBSUcsT0FBT0MsdUJBQXVCO0lBQ2hDLElBQUlDLFVBQVVGLE9BQU9DLHNCQUFzQkosTUFBTTtJQUNqREMsbUJBQW1CSSxVQUFVQSxRQUFRQyxPQUFPLFVBQVVDLEtBQUs7TUFDekQsT0FBT0osT0FBT0sseUJBQXlCUixRQUFRTyxHQUFHLEVBQUVFO0lBQ3RELENBQUMsSUFBSVAsS0FBS1EsS0FBS0MsTUFBTVQsTUFBTUcsT0FBTztFQUNwQztFQUNBLE9BQU9IO0FBQ1Q7QUFDZSxTQUFSVSxlQUFnQ0MsUUFBUTtFQUM3QyxTQUFTQyxJQUFJLEdBQUdBLElBQUlDLFVBQVVDLFFBQVFGLEtBQUs7SUFDekMsSUFBSUcsU0FBUyxRQUFRRixVQUFVRCxLQUFLQyxVQUFVRCxLQUFLLENBQUM7SUFDcERBLElBQUksSUFBSWYsUUFBUUksT0FBT2MsTUFBTSxHQUFHLElBQUUsRUFBRUMsUUFBUSxVQUFVQyxLQUFLO01BQ3pELG1DQUFlTixRQUFRTSxLQUFLRixPQUFPRSxJQUFJO0lBQ3pDLENBQUMsSUFBSWhCLE9BQU9pQiw0QkFBNEJqQixPQUFPa0IsaUJBQWlCUixRQUFRVixPQUFPaUIsMEJBQTBCSCxNQUFNLENBQUMsSUFBSWxCLFFBQVFJLE9BQU9jLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLFVBQVVDLEtBQUs7TUFDaktoQixPQUFPbUIsZUFBZVQsUUFBUU0sS0FBS2hCLE9BQU9LLHlCQUF5QlMsUUFBUUUsR0FBRyxDQUFDO0lBQ2pGLENBQUM7RUFDSDtFQUNBLE9BQU9OO0FBQ1Q7OztBRGxCQSxJQUFPVSwrQkFBUVgiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9