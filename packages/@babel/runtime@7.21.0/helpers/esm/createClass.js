define(["@babel/runtime@7.21.0/helpers/esm/typeof","@babel/runtime@7.21.0/helpers/esm/toPrimitive","@babel/runtime@7.21.0/helpers/esm/toPropertyKey"], (dep_0, dep_1, dep_2) => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.21.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["@babel/runtime@7.21.0/helpers/esm/typeof", dep_0],["@babel/runtime@7.21.0/helpers/esm/toPrimitive", dep_1],["@babel/runtime@7.21.0/helpers/esm/toPropertyKey", dep_2]]);
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createClass.7.21.0.js
var createClass_7_21_0_exports = {};
__export(createClass_7_21_0_exports, {
  default: () => createClass_7_21_0_default
});
module.exports = __toCommonJS(createClass_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/createClass.js
var import_toPropertyKey = __toESM(require("@babel/runtime@7.21.0/helpers/esm/toPropertyKey"), 0);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0, import_toPropertyKey.default)(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/createClass.7.21.0.js
var createClass_7_21_0_default = _createClass;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJpbXBvcnRfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiY3JlYXRlQ2xhc3NfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSwyQkFBMEJDO0FBQzFCLFNBQVNDLGtCQUFrQkMsUUFBUUMsT0FBTztFQUN4QyxTQUFTQyxJQUFJLEdBQUdBLElBQUlELE1BQU1FLFFBQVFELEtBQUs7SUFDckMsSUFBSUUsYUFBYUgsTUFBTUM7SUFDdkJFLFdBQVdDLGFBQWFELFdBQVdDLGNBQWM7SUFDakRELFdBQVdFLGVBQWU7SUFDMUIsSUFBSSxXQUFXRixZQUFZQSxXQUFXRyxXQUFXO0lBQ2pEQyxPQUFPQyxlQUFlVCxZQUFRVSw4QkFBY04sV0FBV08sR0FBRyxHQUFHUCxVQUFVO0VBQ3pFO0FBQ0Y7QUFDZSxTQUFSUSxhQUE4QkMsYUFBYUMsWUFBWUMsYUFBYTtFQUN6RSxJQUFJRCxZQUFZZixrQkFBa0JjLFlBQVlHLFdBQVdGLFVBQVU7RUFDbkUsSUFBSUMsYUFBYWhCLGtCQUFrQmMsYUFBYUUsV0FBVztFQUMzRFAsT0FBT0MsZUFBZUksYUFBYSxhQUFhO0lBQzlDTixVQUFVO0VBQ1osQ0FBQztFQUNELE9BQU9NO0FBQ1Q7OztBRGRBLElBQU9JLDZCQUFRTCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=