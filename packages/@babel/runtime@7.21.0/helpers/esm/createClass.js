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

// .beyond/uimport/@babel/runtime/helpers/esm/createClass.7.21.0.js
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

// .beyond/uimport/@babel/runtime/helpers/esm/createClass.7.21.0.js
var createClass_7_21_0_default = _createClass;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX190b0VTTSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaW1wb3J0X3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsImNyZWF0ZUNsYXNzXzdfMjFfMF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQUEsMkJBQTBCQztBQUMxQixTQUFTQyxrQkFBa0JDLFFBQVFDLE9BQU87RUFDeEMsU0FBU0MsSUFBSSxHQUFHQSxJQUFJRCxNQUFNRSxRQUFRRCxLQUFLO0lBQ3JDLElBQUlFLGFBQWFILE1BQU1DO0lBQ3ZCRSxXQUFXQyxhQUFhRCxXQUFXQyxjQUFjO0lBQ2pERCxXQUFXRSxlQUFlO0lBQzFCLElBQUksV0FBV0YsWUFBWUEsV0FBV0csV0FBVztJQUNqREMsT0FBT0MsZUFBZVQsWUFBUVUsOEJBQWNOLFdBQVdPLEdBQUcsR0FBR1AsVUFBVTtFQUN6RTtBQUNGO0FBQ2UsU0FBUlEsYUFBOEJDLGFBQWFDLFlBQVlDLGFBQWE7RUFDekUsSUFBSUQsWUFBWWYsa0JBQWtCYyxZQUFZRyxXQUFXRixVQUFVO0VBQ25FLElBQUlDLGFBQWFoQixrQkFBa0JjLGFBQWFFLFdBQVc7RUFDM0RQLE9BQU9DLGVBQWVJLGFBQWEsYUFBYTtJQUM5Q04sVUFBVTtFQUNaLENBQUM7RUFDRCxPQUFPTTtBQUNUOzs7QURkQSxJQUFPSSw2QkFBUUwiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9