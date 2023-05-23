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

// .beyond/uimport/@babel/runtime/helpers/esm/getPrototypeOf.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/getPrototypeOf.7.21.0.js
var getPrototypeOf_7_21_0_default = _getPrototypeOf;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX2dldFByb3RvdHlwZU9mIiwibyIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiX19wcm90b19fIiwiZ2V0UHJvdG90eXBlT2ZfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyxnQkFBaUNDLEdBQUc7RUFDekNELGtCQUFrQkUsT0FBT0MsaUJBQWlCRCxPQUFPRSxlQUFlQyxNQUFLLEdBQUksU0FBU0wsaUJBQWdCQyxJQUFHO0lBQ25HLE9BQU9BLEdBQUVLLGFBQWFKLE9BQU9FLGVBQWVILEVBQUM7RUFDL0M7RUFDQSxPQUFPRCxnQkFBZ0JDLENBQUM7QUFDMUI7OztBREZBLElBQU9NLGdDQUFRUCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=