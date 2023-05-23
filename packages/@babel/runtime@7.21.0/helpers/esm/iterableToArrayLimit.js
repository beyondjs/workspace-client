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

// .beyond/uimport/@babel/runtime/helpers/esm/iterableToArrayLimit.7.21.0.js
var iterableToArrayLimit_7_21_0_exports = {};
__export(iterableToArrayLimit_7_21_0_exports, {
  default: () => iterableToArrayLimit_7_21_0_default
});
module.exports = __toCommonJS(iterableToArrayLimit_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = true,
      _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = false;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true);
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

// .beyond/uimport/@babel/runtime/helpers/esm/iterableToArrayLimit.7.21.0.js
var iterableToArrayLimit_7_21_0_default = _iterableToArrayLimit;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC43LjIxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiYXJyIiwiaSIsIl9pIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfcyIsIl9lIiwiX3giLCJfciIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJPYmplY3QiLCJkb25lIiwicHVzaCIsInZhbHVlIiwibGVuZ3RoIiwiZXJyIiwiaXRlcmFibGVUb0FycmF5TGltaXRfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyxzQkFBdUNDLEtBQUtDLEdBQUc7RUFDcEQsSUFBSUMsS0FBSyxRQUFRRixNQUFNLE9BQU8sZUFBZSxPQUFPRyxVQUFVSCxJQUFJRyxPQUFPQyxhQUFhSixJQUFJO0VBQzFGLElBQUksUUFBUUUsSUFBSTtJQUNkLElBQUlHO01BQ0ZDO01BQ0FDO01BQ0FDO01BQ0FDLE9BQU8sRUFBQztNQUNSQyxLQUFLO01BQ0xDLEtBQUs7SUFDUCxJQUFJO01BQ0YsSUFBSUosTUFBTUwsS0FBS0EsR0FBR1UsS0FBS1osR0FBRyxHQUFHYSxNQUFNLE1BQU1aLEdBQUc7UUFDMUMsSUFBSWEsT0FBT1osRUFBRSxNQUFNQSxJQUFJO1FBQ3ZCUSxLQUFLO01BQ1AsT0FBTyxPQUFPLEVBQUVBLE1BQU1MLEtBQUtFLEdBQUdLLEtBQUtWLEVBQUUsR0FBR2EsVUFBVU4sS0FBS08sS0FBS1gsR0FBR1ksS0FBSyxHQUFHUixLQUFLUyxXQUFXakIsSUFBSVMsS0FBSyxLQUFHO0lBQ3JHLFNBQVNTLEtBQVA7TUFDQVIsS0FBSyxNQUFJTCxLQUFLYTtJQUNoQixVQUFFO01BQ0EsSUFBSTtRQUNGLElBQUksQ0FBQ1QsTUFBTSxRQUFRUixHQUFHLGNBQWNNLEtBQUtOLEdBQUcsV0FBVSxFQUFHWSxPQUFPTixFQUFFLE1BQU1BLEtBQUs7TUFDL0UsVUFBRTtRQUNBLElBQUlHLElBQUksTUFBTUw7TUFDaEI7SUFDRjtJQUNBLE9BQU9HO0VBQ1Q7QUFDRjs7O0FEdkJBLElBQU9XLHNDQUFRckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9