define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
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
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.19.0.js
var objectWithoutPropertiesLoose_7_19_0_exports = {};
__export(objectWithoutPropertiesLoose_7_19_0_exports, {
  default: () => objectWithoutPropertiesLoose_7_19_0_default
});

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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.19.0.js
var objectWithoutPropertiesLoose_7_19_0_default = _objectWithoutPropertiesLoose;
module.exports = __toCommonJS(objectWithoutPropertiesLoose_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuNy4xOS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0Iiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZV83XzE5XzBfZGVmYXVsdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBOzs7QUNBZSx1Q0FBdUNDLFFBQVFDLFVBQVU7RUFDdEUsSUFBSUQsVUFBVSxNQUFNLE9BQU8sQ0FBQztFQUM1QixJQUFJRSxTQUFTLENBQUM7RUFDZCxJQUFJQyxhQUFhQyxPQUFPQyxLQUFLTCxNQUFNO0VBQ25DLElBQUlNLEtBQUtDO0VBRVQsS0FBS0EsSUFBSSxHQUFHQSxJQUFJSixXQUFXSyxRQUFRRCxLQUFLO0lBQ3RDRCxNQUFNSCxXQUFXSTtJQUNqQixJQUFJTixTQUFTUSxRQUFRSCxHQUFHLEtBQUssR0FBRztJQUNoQ0osT0FBT0ksT0FBT04sT0FBT007RUFDdkI7RUFFQSxPQUFPSjtBQUNUOzs7QURWQSxJQUFPUSw4Q0FBUUMiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=