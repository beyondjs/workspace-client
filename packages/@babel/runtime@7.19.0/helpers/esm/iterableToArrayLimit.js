define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["@babel/runtime","7.19.0"]]);
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArrayLimit.7.19.0.js
var iterableToArrayLimit_7_19_0_exports = {};
__export(iterableToArrayLimit_7_19_0_exports, {
  default: () => iterableToArrayLimit_7_19_0_default
});

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

// .beyond/uimport/temp/@babel/runtime/helpers/esm/iterableToArrayLimit.7.19.0.js
var iterableToArrayLimit_7_19_0_default = _iterableToArrayLimit;
module.exports = __toCommonJS(iterableToArrayLimit_7_19_0_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LjcuMTkuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlZmF1bHQiLCJhcnIiLCJpIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9hcnIiLCJfbiIsIl9kIiwiX3MiLCJfZSIsImNhbGwiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImxlbmd0aCIsImVyciIsIml0ZXJhYmxlVG9BcnJheUxpbWl0XzdfMTlfMF9kZWZhdWx0IiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBOzs7QUNBZSwrQkFBK0JDLEtBQUtDLEdBQUc7RUFDcEQsSUFBSUMsS0FBS0YsT0FBTyxPQUFPLE9BQU8sT0FBT0csV0FBVyxlQUFlSCxJQUFJRyxPQUFPQyxhQUFhSixJQUFJO0VBRTNGLElBQUlFLE1BQU0sTUFBTTtFQUNoQixJQUFJRyxPQUFPLEVBQUM7RUFDWixJQUFJQyxLQUFLO0VBQ1QsSUFBSUMsS0FBSztFQUVULElBQUlDLElBQUlDO0VBRVIsSUFBSTtJQUNGLEtBQUtQLEtBQUtBLEdBQUdRLEtBQUtWLEdBQUcsR0FBRyxFQUFFTSxLQUFNLE1BQUtKLEdBQUdTLE1BQUssRUFBR0MsT0FBT04sS0FBSyxNQUFNO01BQ2hFRCxLQUFLUSxLQUFLTCxHQUFHTSxLQUFLO01BRWxCLElBQUliLEtBQUtJLEtBQUtVLFdBQVdkLEdBQUc7SUFDOUI7RUFDRixTQUFTZSxLQUFQO0lBQ0FULEtBQUs7SUFDTEUsS0FBS087RUFDUCxVQUFFO0lBQ0EsSUFBSTtNQUNGLElBQUksQ0FBQ1YsTUFBTUosR0FBRyxhQUFhLE1BQU1BLEdBQUcsV0FBVTtJQUNoRCxVQUFFO01BQ0EsSUFBSUssSUFBSSxNQUFNRTtJQUNoQjtFQUNGO0VBRUEsT0FBT0o7QUFDVDs7O0FEekJBLElBQU9ZLHNDQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdCc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdCc7XG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==