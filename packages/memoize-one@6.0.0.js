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

// .beyond/uimport/memoize-one.6.0.0.js
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

// .beyond/uimport/memoize-one.6.0.0.js
var memoize_one_6_0_0_default = memoizeOne;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tZW1vaXplLW9uZS42LjAuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJtb2R1bGUiLCJzYWZlSXNOYU4iLCJOdW1iZXIiLCJpc05hTiIsInBvbnlmaWxsIiwidmFsdWUiLCJpc0VxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJhcmVJbnB1dHNFcXVhbCIsIm5ld0lucHV0cyIsImxhc3RJbnB1dHMiLCJsZW5ndGgiLCJpIiwibWVtb2l6ZU9uZSIsInJlc3VsdEZuIiwiY2FjaGUiLCJtZW1vaXplZCIsIm5ld0FyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImxhc3RUaGlzIiwibGFzdEFyZ3MiLCJsYXN0UmVzdWx0IiwiYXBwbHkiLCJjbGVhciIsIm1lbW9pemVfb25lXzZfMF8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFJQyxZQUFZQyxPQUFPQyxTQUNuQixTQUFTQyxTQUFTQyxPQUFPO0VBQ3JCLE9BQU8sT0FBT0EsVUFBVSxZQUFZQSxVQUFVQTtBQUNsRDtBQUNKLFNBQVNDLFFBQVFDLE9BQU9DLFFBQVE7RUFDNUIsSUFBSUQsVUFBVUMsUUFBUTtJQUNsQixPQUFPO0VBQ1g7RUFDQSxJQUFJUCxVQUFVTSxLQUFLLEtBQUtOLFVBQVVPLE1BQU0sR0FBRztJQUN2QyxPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTQyxlQUFlQyxXQUFXQyxZQUFZO0VBQzNDLElBQUlELFVBQVVFLFdBQVdELFdBQVdDLFFBQVE7SUFDeEMsT0FBTztFQUNYO0VBQ0EsU0FBU0MsSUFBSSxHQUFHQSxJQUFJSCxVQUFVRSxRQUFRQyxLQUFLO0lBQ3ZDLElBQUksQ0FBQ1AsUUFBUUksVUFBVUcsSUFBSUYsV0FBV0UsRUFBRSxHQUFHO01BQ3ZDLE9BQU87SUFDWDtFQUNKO0VBQ0EsT0FBTztBQUNYO0FBRUEsU0FBU0MsV0FBV0MsVUFBVVQsVUFBUztFQUNuQyxJQUFJQSxhQUFZLFFBQVE7SUFBRUEsV0FBVUc7RUFBZ0I7RUFDcEQsSUFBSU8sUUFBUTtFQUNaLFNBQVNDLFdBQVc7SUFDaEIsSUFBSUMsVUFBVSxFQUFDO0lBQ2YsU0FBU0MsS0FBSyxHQUFHQSxLQUFLQyxVQUFVUixRQUFRTyxNQUFNO01BQzFDRCxRQUFRQyxNQUFNQyxVQUFVRDtJQUM1QjtJQUNBLElBQUlILFNBQVNBLE1BQU1LLGFBQWEsUUFBUWYsU0FBUVksU0FBU0YsTUFBTU0sUUFBUSxHQUFHO01BQ3RFLE9BQU9OLE1BQU1PO0lBQ2pCO0lBQ0EsSUFBSUEsYUFBYVIsU0FBU1MsTUFBTSxNQUFNTixPQUFPO0lBQzdDRixRQUFRO01BQ0pPO01BQ0FELFVBQVVKO01BQ1ZHLFVBQVU7SUFDZDtJQUNBLE9BQU9FO0VBQ1g7RUFDQU4sU0FBU1EsUUFBUSxTQUFTQSxRQUFRO0lBQzlCVCxRQUFRO0VBQ1o7RUFDQSxPQUFPQztBQUNYOzs7QUQ3Q0EsSUFBT1MsNEJBQVFaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==