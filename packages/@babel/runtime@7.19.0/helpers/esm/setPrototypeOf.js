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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/setPrototypeOf.7.19.0.js
var setPrototypeOf_7_19_0_exports = {};
__export(setPrototypeOf_7_19_0_exports, {
  default: () => setPrototypeOf_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/setPrototypeOf.7.19.0.js
var setPrototypeOf_7_19_0_default = _setPrototypeOf;
module.exports = __toCommonJS(setPrototypeOf_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJvIiwicCIsIl9zZXRQcm90b3R5cGVPZiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiYmluZCIsIm8yIiwicDIiLCJfX3Byb3RvX18iLCJzZXRQcm90b3R5cGVPZl83XzE5XzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTs7O0FDQWUseUJBQXlCQyxHQUFHQyxHQUFHO0VBQzVDQyxrQkFBa0JDLE9BQU9DLGlCQUFpQkQsT0FBT0MsZUFBZUMsTUFBSyxHQUFJLDBCQUF5QkMsSUFBR0MsSUFBRztJQUN0R0QsR0FBRUUsWUFBWUQ7SUFDZCxPQUFPRDtFQUNUO0VBQ0EsT0FBT0osZ0JBQWdCRixHQUFHQyxDQUFDO0FBQzdCOzs7QURIQSxJQUFPUSxnQ0FBUVAiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YnO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=