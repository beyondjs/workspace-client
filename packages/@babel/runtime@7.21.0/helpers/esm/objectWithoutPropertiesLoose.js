define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};

const require = () => void 0;
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.21.0.js
var objectWithoutPropertiesLoose_7_21_0_exports = {};
__export(objectWithoutPropertiesLoose_7_21_0_exports, {
  default: () => objectWithoutPropertiesLoose_7_21_0_default
});
module.exports = __toCommonJS(objectWithoutPropertiesLoose_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.21.0.js
var objectWithoutPropertiesLoose_7_21_0_default = _objectWithoutPropertiesLoose;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2UiLCJleGNsdWRlZCIsInRhcmdldCIsInNvdXJjZUtleXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQWUsU0FBUkMsOEJBQStDQyxRQUFRQyxVQUFVO0VBQ3RFLElBQUlELFVBQVUsTUFBTSxPQUFPLENBQUM7RUFDNUIsSUFBSUUsU0FBUyxDQUFDO0VBQ2QsSUFBSUMsYUFBYUMsT0FBT0MsS0FBS0wsTUFBTTtFQUNuQyxJQUFJTSxLQUFLQztFQUNULEtBQUtBLElBQUksR0FBR0EsSUFBSUosV0FBV0ssUUFBUUQsS0FBSztJQUN0Q0QsTUFBTUgsV0FBV0k7SUFDakIsSUFBSU4sU0FBU1EsUUFBUUgsR0FBRyxLQUFLLEdBQUc7SUFDaENKLE9BQU9JLE9BQU9OLE9BQU9NO0VBQ3ZCO0VBQ0EsT0FBT0o7QUFDVDs7O0FEUkEsSUFBT1EsOENBQVFYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==