define(["@babel/runtime@7.21.0/helpers/esm/typeof"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0]]);
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

// .beyond/uimport/@babel/runtime/helpers/esm/toPrimitive.7.21.0.js
var toPrimitive_7_21_0_exports = {};
__export(toPrimitive_7_21_0_exports, {
  default: () => toPrimitive_7_21_0_default
});
module.exports = __toCommonJS(toPrimitive_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
var import_typeof = __toESM(require("@babel/runtime@7.21.0/helpers/esm/typeof"), 0);
function _toPrimitive(input, hint) {
  if ((0, import_typeof.default)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if ((0, import_typeof.default)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// .beyond/uimport/@babel/runtime/helpers/esm/toPrimitive.7.21.0.js
var toPrimitive_7_21_0_default = _toPrimitive;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsImltcG9ydF90eXBlb2YiLCJwcmltIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJyZXMiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwidG9QcmltaXRpdmVfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxvQkFBb0JDO0FBQ0wsU0FBUkMsYUFBOEJDLE9BQU9DLE1BQU07RUFDaEQsUUFBSUMsdUJBQVFGLEtBQUssTUFBTSxZQUFZQSxVQUFVLE1BQU0sT0FBT0E7RUFDMUQsSUFBSUcsT0FBT0gsTUFBTUksT0FBT0M7RUFDeEIsSUFBSUYsU0FBUyxRQUFXO0lBQ3RCLElBQUlHLE1BQU1ILEtBQUtJLEtBQUtQLE9BQU9DLFFBQVEsU0FBUztJQUM1QyxRQUFJQyx1QkFBUUksR0FBRyxNQUFNLFVBQVUsT0FBT0E7SUFDdEMsTUFBTSxJQUFJRSxVQUFVLDhDQUE4QztFQUNwRTtFQUNBLFFBQVFQLFNBQVMsV0FBV1EsU0FBU0MsUUFBUVYsS0FBSztBQUNwRDs7O0FEUEEsSUFBT1csNkJBQVFaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==