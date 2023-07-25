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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPrimitive.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/toPrimitive.7.21.0.js
var toPrimitive_7_21_0_default = _toPrimitive;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfX3RvRVNNIiwiX3RvUHJpbWl0aXZlIiwiaW5wdXQiLCJoaW50IiwiaW1wb3J0X3R5cGVvZiIsInByaW0iLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJ0b1ByaW1pdGl2ZV83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLG9CQUFvQkM7QUFDTCxTQUFSQyxhQUE4QkMsT0FBT0MsTUFBTTtFQUNoRCxRQUFJQyx1QkFBUUYsS0FBSyxNQUFNLFlBQVlBLFVBQVUsTUFBTSxPQUFPQTtFQUMxRCxJQUFJRyxPQUFPSCxNQUFNSSxPQUFPQztFQUN4QixJQUFJRixTQUFTLFFBQVc7SUFDdEIsSUFBSUcsTUFBTUgsS0FBS0ksS0FBS1AsT0FBT0MsUUFBUSxTQUFTO0lBQzVDLFFBQUlDLHVCQUFRSSxHQUFHLE1BQU0sVUFBVSxPQUFPQTtJQUN0QyxNQUFNLElBQUlFLFVBQVUsOENBQThDO0VBQ3BFO0VBQ0EsUUFBUVAsU0FBUyxXQUFXUSxTQUFTQyxRQUFRVixLQUFLO0FBQ3BEOzs7QURQQSxJQUFPVyw2QkFBUVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9