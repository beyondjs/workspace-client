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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/inherits.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/inherits.7.21.0.js
var inherits_7_21_0_default = _inherits;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiVHlwZUVycm9yIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJpbmhlcml0c183XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLDRCQUEyQkM7QUFDWixTQUFSQyxVQUEyQkMsVUFBVUMsWUFBWTtFQUN0RCxJQUFJLE9BQU9BLGVBQWUsY0FBY0EsZUFBZSxNQUFNO0lBQzNELE1BQU0sSUFBSUMsVUFBVSxvREFBb0Q7RUFDMUU7RUFDQUYsU0FBU0csWUFBWUMsT0FBT0MsT0FBT0osY0FBY0EsV0FBV0UsV0FBVztJQUNyRUcsYUFBYTtNQUNYQyxPQUFPUDtNQUNQUSxVQUFVO01BQ1ZDLGNBQWM7SUFDaEI7RUFDRixDQUFDO0VBQ0RMLE9BQU9NLGVBQWVWLFVBQVUsYUFBYTtJQUMzQ1EsVUFBVTtFQUNaLENBQUM7RUFDRCxJQUFJUCxZQUFZLG1DQUFlRCxVQUFVQyxVQUFVO0FBQ3JEOzs7QURiQSxJQUFPVSwwQkFBUVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9