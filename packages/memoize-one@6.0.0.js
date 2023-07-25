define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["memoize-one","6.0.0"]]);
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

// .beyond/uimport/temp/memoize-one.6.0.0.js
var memoize_one_6_0_0_exports = {};
__export(memoize_one_6_0_0_exports, {
  default: () => memoize_one_6_0_0_default
});
module.exports = __toCommonJS(memoize_one_6_0_0_exports);

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual2(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// .beyond/uimport/temp/memoize-one.6.0.0.js
var memoize_one_6_0_0_default = memoizeOne;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21lbW9pemUtb25lLjYuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsInNhZmVJc05hTiIsIk51bWJlciIsImlzTmFOIiwicG9ueWZpbGwiLCJ2YWx1ZSIsImlzRXF1YWwiLCJmaXJzdCIsInNlY29uZCIsImFyZUlucHV0c0VxdWFsIiwibmV3SW5wdXRzIiwibGFzdElucHV0cyIsImxlbmd0aCIsImkiLCJtZW1vaXplT25lIiwicmVzdWx0Rm4iLCJjYWNoZSIsIm1lbW9pemVkIiwibmV3QXJncyIsIl9pIiwiYXJndW1lbnRzIiwibGFzdFRoaXMiLCJsYXN0QXJncyIsImxhc3RSZXN1bHQiLCJhcHBseSIsImNsZWFyIiwibWVtb2l6ZV9vbmVfNl8wXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLElBQUlDLFlBQVlDLE9BQU9DLFNBQ25CLFNBQVNDLFNBQVNDLE9BQU87RUFDckIsT0FBTyxPQUFPQSxVQUFVLFlBQVlBLFVBQVVBO0FBQ2xEO0FBQ0osU0FBU0MsUUFBUUMsT0FBT0MsUUFBUTtFQUM1QixJQUFJRCxVQUFVQyxRQUFRO0lBQ2xCLE9BQU87RUFDWDtFQUNBLElBQUlQLFVBQVVNLEtBQUssS0FBS04sVUFBVU8sTUFBTSxHQUFHO0lBQ3ZDLE9BQU87RUFDWDtFQUNBLE9BQU87QUFDWDtBQUNBLFNBQVNDLGVBQWVDLFdBQVdDLFlBQVk7RUFDM0MsSUFBSUQsVUFBVUUsV0FBV0QsV0FBV0MsUUFBUTtJQUN4QyxPQUFPO0VBQ1g7RUFDQSxTQUFTQyxJQUFJLEdBQUdBLElBQUlILFVBQVVFLFFBQVFDLEtBQUs7SUFDdkMsSUFBSSxDQUFDUCxRQUFRSSxVQUFVRyxJQUFJRixXQUFXRSxFQUFFLEdBQUc7TUFDdkMsT0FBTztJQUNYO0VBQ0o7RUFDQSxPQUFPO0FBQ1g7QUFFQSxTQUFTQyxXQUFXQyxVQUFVVCxVQUFTO0VBQ25DLElBQUlBLGFBQVksUUFBUTtJQUFFQSxXQUFVRztFQUFnQjtFQUNwRCxJQUFJTyxRQUFRO0VBQ1osU0FBU0MsV0FBVztJQUNoQixJQUFJQyxVQUFVLEVBQUM7SUFDZixTQUFTQyxLQUFLLEdBQUdBLEtBQUtDLFVBQVVSLFFBQVFPLE1BQU07TUFDMUNELFFBQVFDLE1BQU1DLFVBQVVEO0lBQzVCO0lBQ0EsSUFBSUgsU0FBU0EsTUFBTUssYUFBYSxRQUFRZixTQUFRWSxTQUFTRixNQUFNTSxRQUFRLEdBQUc7TUFDdEUsT0FBT04sTUFBTU87SUFDakI7SUFDQSxJQUFJQSxhQUFhUixTQUFTUyxNQUFNLE1BQU1OLE9BQU87SUFDN0NGLFFBQVE7TUFDSk87TUFDQUQsVUFBVUo7TUFDVkcsVUFBVTtJQUNkO0lBQ0EsT0FBT0U7RUFDWDtFQUNBTixTQUFTUSxRQUFRLFNBQVNBLFFBQVE7SUFDOUJULFFBQVE7RUFDWjtFQUNBLE9BQU9DO0FBQ1g7OztBRDdDQSxJQUFPUyw0QkFBUVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9