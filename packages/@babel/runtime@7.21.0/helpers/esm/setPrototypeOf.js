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

// .beyond/uimport/@babel/runtime/helpers/esm/setPrototypeOf.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/setPrototypeOf.7.21.0.js
var setPrototypeOf_7_21_0_default = _setPrototypeOf;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsImJpbmQiLCJfX3Byb3RvX18iLCJzZXRQcm90b3R5cGVPZl83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLGdCQUFpQ0MsR0FBR0MsR0FBRztFQUM1Q0Ysa0JBQWtCRyxPQUFPQyxpQkFBaUJELE9BQU9DLGVBQWVDLE1BQUssR0FBSSxTQUFTTCxpQkFBZ0JDLElBQUdDLElBQUc7SUFDdEdELEdBQUVLLFlBQVlKO0lBQ2QsT0FBT0Q7RUFDVDtFQUNBLE9BQU9ELGdCQUFnQkMsR0FBR0MsQ0FBQztBQUM3Qjs7O0FESEEsSUFBT0ssZ0NBQVFQIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==