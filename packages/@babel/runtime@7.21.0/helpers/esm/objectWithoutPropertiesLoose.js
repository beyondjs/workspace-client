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

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.21.0.js
var objectWithoutPropertiesLoose_7_21_0_exports = {};
__export(objectWithoutPropertiesLoose_7_21_0_exports, {
  default: () => objectWithoutPropertiesLoose_7_21_0_default
});
module.exports = __toCommonJS(objectWithoutPropertiesLoose_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// .beyond/uimport/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.7.21.0.js
var objectWithoutPropertiesLoose_7_21_0_default = _objectWithoutPropertiesLoose;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImkiLCJsZW5ndGgiLCJpbmRleE9mIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZV83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLDhCQUErQ0MsUUFBUUMsVUFBVTtFQUN0RSxJQUFJRCxVQUFVLE1BQU0sT0FBTyxDQUFDO0VBQzVCLElBQUlFLFNBQVMsQ0FBQztFQUNkLElBQUlDLGFBQWFDLE9BQU9DLEtBQUtMLE1BQU07RUFDbkMsSUFBSU0sS0FBS0M7RUFDVCxLQUFLQSxJQUFJLEdBQUdBLElBQUlKLFdBQVdLLFFBQVFELEtBQUs7SUFDdENELE1BQU1ILFdBQVdJO0lBQ2pCLElBQUlOLFNBQVNRLFFBQVFILEdBQUcsS0FBSyxHQUFHO0lBQ2hDSixPQUFPSSxPQUFPTixPQUFPTTtFQUN2QjtFQUNBLE9BQU9KO0FBQ1Q7OztBRFJBLElBQU9RLDhDQUFRWCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=