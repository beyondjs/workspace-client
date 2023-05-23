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

// .beyond/uimport/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.21.0.js
var taggedTemplateLiteral_7_21_0_default = _taggedTemplateLiteral;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwic3RyaW5ncyIsInJhdyIsInNsaWNlIiwiT2JqZWN0IiwiZnJlZXplIiwiZGVmaW5lUHJvcGVydGllcyIsInZhbHVlIiwidGFnZ2VkVGVtcGxhdGVMaXRlcmFsXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQWUsU0FBUkMsdUJBQXdDQyxTQUFTQyxLQUFLO0VBQzNELElBQUksQ0FBQ0EsS0FBSztJQUNSQSxNQUFNRCxRQUFRRSxNQUFNLENBQUM7RUFDdkI7RUFDQSxPQUFPQyxPQUFPQyxPQUFPRCxPQUFPRSxpQkFBaUJMLFNBQVM7SUFDcERDLEtBQUs7TUFDSEssT0FBT0gsT0FBT0MsT0FBT0gsR0FBRztJQUMxQjtFQUNGLENBQUMsQ0FBQztBQUNKOzs7QUROQSxJQUFPTSx1Q0FBUVIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9