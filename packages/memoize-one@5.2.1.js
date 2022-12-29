define([], () => {

const bimport = specifier => {
	const dependencies = new Map([["memoize-one","5.2.1"]]);
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

// .beyond/uimport/temp/memoize-one.5.2.1.js
var memoize_one_5_2_1_exports = {};
__export(memoize_one_5_2_1_exports, {
  default: () => memoize_one_5_2_1_default
});

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
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// .beyond/uimport/temp/memoize-one.5.2.1.js
var memoize_one_5_2_1_default = memoize_one_esm_default;
module.exports = __toCommonJS(memoize_one_5_2_1_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21lbW9pemUtb25lLjUuMi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsInNhZmVJc05hTiIsIk51bWJlciIsImlzTmFOIiwidmFsdWUiLCJmaXJzdCIsInNlY29uZCIsIm5ld0lucHV0cyIsImxhc3RJbnB1dHMiLCJsZW5ndGgiLCJpIiwiaXNFcXVhbCIsInJlc3VsdEZuIiwiaXNFcXVhbDIiLCJhcmVJbnB1dHNFcXVhbCIsImxhc3RUaGlzIiwibGFzdEFyZ3MiLCJsYXN0UmVzdWx0IiwiY2FsbGVkT25jZSIsIm5ld0FyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImFwcGx5IiwibWVtb2l6ZWQiLCJtZW1vaXplX29uZV9lc21fZGVmYXVsdCIsIm1lbW9pemVPbmUiLCJtZW1vaXplX29uZV81XzJfMV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBOzs7QUNBQSxJQUFJQyxZQUFZQyxPQUFPQyxTQUNuQixrQkFBa0JDLE9BQU87RUFDckIsT0FBTyxPQUFPQSxVQUFVLFlBQVlBLFVBQVVBO0FBQ2xEO0FBQ0osaUJBQWlCQyxPQUFPQyxRQUFRO0VBQzVCLElBQUlELFVBQVVDLFFBQVE7SUFDbEIsT0FBTztFQUNYO0VBQ0EsSUFBSUwsVUFBVUksS0FBSyxLQUFLSixVQUFVSyxNQUFNLEdBQUc7SUFDdkMsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBQ0Esd0JBQXdCQyxXQUFXQyxZQUFZO0VBQzNDLElBQUlELFVBQVVFLFdBQVdELFdBQVdDLFFBQVE7SUFDeEMsT0FBTztFQUNYO0VBQ0EsU0FBU0MsSUFBSSxHQUFHQSxJQUFJSCxVQUFVRSxRQUFRQyxLQUFLO0lBQ3ZDLElBQUksQ0FBQ0MsUUFBUUosVUFBVUcsSUFBSUYsV0FBV0UsRUFBRSxHQUFHO01BQ3ZDLE9BQU87SUFDWDtFQUNKO0VBQ0EsT0FBTztBQUNYO0FBRUEsb0JBQW9CRSxVQUFVQyxVQUFTO0VBQ25DLElBQUlBLGFBQVksUUFBUTtJQUFFQSxXQUFVQztFQUFnQjtFQUNwRCxJQUFJQztFQUNKLElBQUlDLFdBQVcsRUFBQztFQUNoQixJQUFJQztFQUNKLElBQUlDLGFBQWE7RUFDakIsb0JBQW9CO0lBQ2hCLElBQUlDLFVBQVUsRUFBQztJQUNmLFNBQVNDLEtBQUssR0FBR0EsS0FBS0MsVUFBVVosUUFBUVcsTUFBTTtNQUMxQ0QsUUFBUUMsTUFBTUMsVUFBVUQ7SUFDNUI7SUFDQSxJQUFJRixjQUFjSCxhQUFhLFFBQVFGLFNBQVFNLFNBQVNILFFBQVEsR0FBRztNQUMvRCxPQUFPQztJQUNYO0lBQ0FBLGFBQWFMLFNBQVNVLE1BQU0sTUFBTUgsT0FBTztJQUN6Q0QsYUFBYTtJQUNiSCxXQUFXO0lBQ1hDLFdBQVdHO0lBQ1gsT0FBT0Y7RUFDWDtFQUNBLE9BQU9NO0FBQ1g7QUFFQSxJQUFPQywwQkFBUUM7OztBRDdDZixJQUFPQyw0QkFBUUYiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnbWVtb2l6ZS1vbmUnO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7IiwidmFyIHNhZmVJc05hTiA9IE51bWJlci5pc05hTiB8fFxuICAgIGZ1bmN0aW9uIHBvbnlmaWxsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSB2YWx1ZTtcbiAgICB9O1xuZnVuY3Rpb24gaXNFcXVhbChmaXJzdCwgc2Vjb25kKSB7XG4gICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzYWZlSXNOYU4oZmlyc3QpICYmIHNhZmVJc05hTihzZWNvbmQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWlzRXF1YWwobmV3SW5wdXRzW2ldLCBsYXN0SW5wdXRzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgbGFzdFRoaXM7XG4gICAgdmFyIGxhc3RBcmdzID0gW107XG4gICAgdmFyIGxhc3RSZXN1bHQ7XG4gICAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iXSwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9