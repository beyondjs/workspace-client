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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/classCallCheck.7.19.0.js
var classCallCheck_7_19_0_exports = {};
__export(classCallCheck_7_19_0_exports, {
  default: () => classCallCheck_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/classCallCheck.7.19.0.js
var classCallCheck_7_19_0_default = _classCallCheck;
module.exports = __toCommonJS(classCallCheck_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiY2xhc3NDYWxsQ2hlY2tfN18xOV8wX2RlZmF1bHQiLCJfY2xhc3NDYWxsQ2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7OztBQ0FlLHlCQUF5QkMsVUFBVUMsYUFBYTtFQUM3RCxJQUFJLEVBQUVELG9CQUFvQkMsY0FBYztJQUN0QyxNQUFNLElBQUlDLFVBQVUsbUNBQW1DO0VBQ3pEO0FBQ0Y7OztBRERBLElBQU9DLGdDQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=