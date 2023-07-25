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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/isNativeReflectConstruct.7.21.0.js
var isNativeReflectConstruct_7_21_0_exports = {};
__export(isNativeReflectConstruct_7_21_0_exports, {
  default: () => isNativeReflectConstruct_7_21_0_default
});
module.exports = __toCommonJS(isNativeReflectConstruct_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/isNativeReflectConstruct.7.21.0.js
var isNativeReflectConstruct_7_21_0_default = _isNativeReflectConstruct;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInByb3RvdHlwZSIsInZhbHVlT2YiLCJjYWxsIiwiZSIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdF83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLDRCQUE2QztFQUNsRCxJQUFJLE9BQU9DLFlBQVksZUFBZSxDQUFDQSxRQUFRQyxXQUFXLE9BQU87RUFDakUsSUFBSUQsUUFBUUMsVUFBVUMsTUFBTSxPQUFPO0VBQ25DLElBQUksT0FBT0MsVUFBVSxZQUFZLE9BQU87RUFDeEMsSUFBSTtJQUNGQyxRQUFRQyxVQUFVQyxRQUFRQyxLQUFLUCxRQUFRQyxVQUFVRyxTQUFTLEVBQUMsRUFBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE9BQU87RUFDVCxTQUFTSSxHQUFQO0lBQ0EsT0FBTztFQUNUO0FBQ0Y7OztBRFBBLElBQU9DLDBDQUFRViIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=