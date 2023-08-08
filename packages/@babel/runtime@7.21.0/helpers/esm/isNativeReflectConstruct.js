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

// .beyond/uimport/@babel/runtime/helpers/esm/isNativeReflectConstruct.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/isNativeReflectConstruct.7.21.0.js
var isNativeReflectConstruct_7_21_0_default = _isNativeReflectConstruct;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJwcm90b3R5cGUiLCJ2YWx1ZU9mIiwiY2FsbCIsImUiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyw0QkFBNkM7RUFDbEQsSUFBSSxPQUFPQyxZQUFZLGVBQWUsQ0FBQ0EsUUFBUUMsV0FBVyxPQUFPO0VBQ2pFLElBQUlELFFBQVFDLFVBQVVDLE1BQU0sT0FBTztFQUNuQyxJQUFJLE9BQU9DLFVBQVUsWUFBWSxPQUFPO0VBQ3hDLElBQUk7SUFDRkMsUUFBUUMsVUFBVUMsUUFBUUMsS0FBS1AsUUFBUUMsVUFBVUcsU0FBUyxFQUFDLEVBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM3RSxPQUFPO0VBQ1QsU0FBU0ksR0FBUDtJQUNBLE9BQU87RUFDVDtBQUNGOzs7QURQQSxJQUFPQywwQ0FBUVYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9