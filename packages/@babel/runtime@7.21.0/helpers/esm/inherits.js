define(["@babel/runtime@7.21.0/helpers/esm/setPrototypeOf"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/setPrototypeOf", dep_0]]);
const require = dependency => dependencies.get(dependency);
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@babel/runtime/helpers/esm/inherits.7.21.0.js
var inherits_7_21_0_exports = {};
__export(inherits_7_21_0_exports, {
  default: () => inherits_7_21_0_default
});
module.exports = __toCommonJS(inherits_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/inherits.js
var import_setPrototypeOf = __toESM(require("@babel/runtime@7.21.0/helpers/esm/setPrototypeOf"), 0);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0, import_setPrototypeOf.default)(subClass, superClass);
}

// .beyond/uimport/@babel/runtime/helpers/esm/inherits.7.21.0.js
var inherits_7_21_0_default = _inherits;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIlR5cGVFcnJvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVByb3BlcnR5IiwiaW5oZXJpdHNfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSw0QkFBMkJDO0FBQ1osU0FBUkMsVUFBMkJDLFVBQVVDLFlBQVk7RUFDdEQsSUFBSSxPQUFPQSxlQUFlLGNBQWNBLGVBQWUsTUFBTTtJQUMzRCxNQUFNLElBQUlDLFVBQVUsb0RBQW9EO0VBQzFFO0VBQ0FGLFNBQVNHLFlBQVlDLE9BQU9DLE9BQU9KLGNBQWNBLFdBQVdFLFdBQVc7SUFDckVHLGFBQWE7TUFDWEMsT0FBT1A7TUFDUFEsVUFBVTtNQUNWQyxjQUFjO0lBQ2hCO0VBQ0YsQ0FBQztFQUNETCxPQUFPTSxlQUFlVixVQUFVLGFBQWE7SUFDM0NRLFVBQVU7RUFDWixDQUFDO0VBQ0QsSUFBSVAsWUFBWSxtQ0FBZUQsVUFBVUMsVUFBVTtBQUNyRDs7O0FEYkEsSUFBT1UsMEJBQVFaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==