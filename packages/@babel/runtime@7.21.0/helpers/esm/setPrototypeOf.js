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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/setPrototypeOf.7.21.0.js
var setPrototypeOf_7_21_0_exports = {};
__export(setPrototypeOf_7_21_0_exports, {
  default: () => setPrototypeOf_7_21_0_default
});
module.exports = __toCommonJS(setPrototypeOf_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/setPrototypeOf.7.21.0.js
var setPrototypeOf_7_21_0_default = _setPrototypeOf;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiYmluZCIsIl9fcHJvdG9fXyIsInNldFByb3RvdHlwZU9mXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQWUsU0FBUkMsZ0JBQWlDQyxHQUFHQyxHQUFHO0VBQzVDRixrQkFBa0JHLE9BQU9DLGlCQUFpQkQsT0FBT0MsZUFBZUMsTUFBSyxHQUFJLFNBQVNMLGlCQUFnQkMsSUFBR0MsSUFBRztJQUN0R0QsR0FBRUssWUFBWUo7SUFDZCxPQUFPRDtFQUNUO0VBQ0EsT0FBT0QsZ0JBQWdCQyxHQUFHQyxDQUFDO0FBQzdCOzs7QURIQSxJQUFPSyxnQ0FBUVAiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9