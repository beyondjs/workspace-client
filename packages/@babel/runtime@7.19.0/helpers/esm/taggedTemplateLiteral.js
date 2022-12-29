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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.19.0.js
var taggedTemplateLiteral_7_19_0_exports = {};
__export(taggedTemplateLiteral_7_19_0_exports, {
  default: () => taggedTemplateLiteral_7_19_0_default
});

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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/taggedTemplateLiteral.7.19.0.js
var taggedTemplateLiteral_7_19_0_default = _taggedTemplateLiteral;
module.exports = __toCommonJS(taggedTemplateLiteral_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC43LjE5LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsInN0cmluZ3MiLCJyYXciLCJzbGljZSIsIk9iamVjdCIsImZyZWV6ZSIsImRlZmluZVByb3BlcnRpZXMiLCJ2YWx1ZSIsInRhZ2dlZFRlbXBsYXRlTGl0ZXJhbF83XzE5XzBfZGVmYXVsdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7OztBQ0FlLGdDQUFnQ0MsU0FBU0MsS0FBSztFQUMzRCxJQUFJLENBQUNBLEtBQUs7SUFDUkEsTUFBTUQsUUFBUUUsTUFBTSxDQUFDO0VBQ3ZCO0VBRUEsT0FBT0MsT0FBT0MsT0FBT0QsT0FBT0UsaUJBQWlCTCxTQUFTO0lBQ3BEQyxLQUFLO01BQ0hLLE9BQU9ILE9BQU9DLE9BQU9ILEdBQUc7SUFDMUI7RUFDRixDQUFDLENBQUM7QUFDSjs7O0FEUEEsSUFBT00sdUNBQVFDIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSJdLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=