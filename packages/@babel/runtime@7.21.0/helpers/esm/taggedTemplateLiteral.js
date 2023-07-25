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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.21.0.js
var taggedTemplateLiteral_7_21_0_exports = {};
__export(taggedTemplateLiteral_7_21_0_exports, {
  default: () => taggedTemplateLiteral_7_21_0_default
});
module.exports = __toCommonJS(taggedTemplateLiteral_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.21.0.js
var taggedTemplateLiteral_7_21_0_default = _taggedTemplateLiteral;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJzdHJpbmdzIiwicmF3Iiwic2xpY2UiLCJPYmplY3QiLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidmFsdWUiLCJ0YWdnZWRUZW1wbGF0ZUxpdGVyYWxfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyx1QkFBd0NDLFNBQVNDLEtBQUs7RUFDM0QsSUFBSSxDQUFDQSxLQUFLO0lBQ1JBLE1BQU1ELFFBQVFFLE1BQU0sQ0FBQztFQUN2QjtFQUNBLE9BQU9DLE9BQU9DLE9BQU9ELE9BQU9FLGlCQUFpQkwsU0FBUztJQUNwREMsS0FBSztNQUNISyxPQUFPSCxPQUFPQyxPQUFPSCxHQUFHO0lBQzFCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0o7OztBRE5BLElBQU9NLHVDQUFRUiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=