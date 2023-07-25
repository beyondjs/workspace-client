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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArrayLimit.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArrayLimit.7.21.0.js
var iterableToArrayLimit_7_21_0_default = _iterableToArrayLimit;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJhcnIiLCJpIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJjYWxsIiwibmV4dCIsIk9iamVjdCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJsZW5ndGgiLCJlcnIiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdF83XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLHNCQUF1Q0MsS0FBS0MsR0FBRztFQUNwRCxJQUFJQyxLQUFLLFFBQVFGLE1BQU0sT0FBTyxlQUFlLE9BQU9HLFVBQVVILElBQUlHLE9BQU9DLGFBQWFKLElBQUk7RUFDMUYsSUFBSSxRQUFRRSxJQUFJO0lBQ2QsSUFBSUc7TUFDRkM7TUFDQUM7TUFDQUM7TUFDQUMsT0FBTyxFQUFDO01BQ1JDLEtBQUs7TUFDTEMsS0FBSztJQUNQLElBQUk7TUFDRixJQUFJSixNQUFNTCxLQUFLQSxHQUFHVSxLQUFLWixHQUFHLEdBQUdhLE1BQU0sTUFBTVosR0FBRztRQUMxQyxJQUFJYSxPQUFPWixFQUFFLE1BQU1BLElBQUk7UUFDdkJRLEtBQUs7TUFDUCxPQUFPLE9BQU8sRUFBRUEsTUFBTUwsS0FBS0UsR0FBR0ssS0FBS1YsRUFBRSxHQUFHYSxVQUFVTixLQUFLTyxLQUFLWCxHQUFHWSxLQUFLLEdBQUdSLEtBQUtTLFdBQVdqQixJQUFJUyxLQUFLLEtBQUc7SUFDckcsU0FBU1MsS0FBUDtNQUNBUixLQUFLLE1BQUlMLEtBQUthO0lBQ2hCLFVBQUU7TUFDQSxJQUFJO1FBQ0YsSUFBSSxDQUFDVCxNQUFNLFFBQVFSLEdBQUcsY0FBY00sS0FBS04sR0FBRyxXQUFVLEVBQUdZLE9BQU9OLEVBQUUsTUFBTUEsS0FBSztNQUMvRSxVQUFFO1FBQ0EsSUFBSUcsSUFBSSxNQUFNTDtNQUNoQjtJQUNGO0lBQ0EsT0FBT0c7RUFDVDtBQUNGOzs7QUR2QkEsSUFBT1csc0NBQVFyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=