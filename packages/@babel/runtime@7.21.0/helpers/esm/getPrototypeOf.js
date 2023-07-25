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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/getPrototypeOf.7.21.0.js
var getPrototypeOf_7_21_0_exports = {};
__export(getPrototypeOf_7_21_0_exports, {
  default: () => getPrototypeOf_7_21_0_default
});
module.exports = __toCommonJS(getPrototypeOf_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/getPrototypeOf.7.21.0.js
var getPrototypeOf_7_21_0_default = _getPrototypeOf;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJnZXRQcm90b3R5cGVPZl83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLGdCQUFpQ0MsR0FBRztFQUN6Q0Qsa0JBQWtCRSxPQUFPQyxpQkFBaUJELE9BQU9FLGVBQWVDLE1BQUssR0FBSSxTQUFTTCxpQkFBZ0JDLElBQUc7SUFDbkcsT0FBT0EsR0FBRUssYUFBYUosT0FBT0UsZUFBZUgsRUFBQztFQUMvQztFQUNBLE9BQU9ELGdCQUFnQkMsQ0FBQztBQUMxQjs7O0FERkEsSUFBT00sZ0NBQVFQIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==