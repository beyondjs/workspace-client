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

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.21.0.js
var extends_7_21_0_exports = {};
__export(extends_7_21_0_exports, {
  default: () => extends_7_21_0_default
});
module.exports = __toCommonJS(extends_7_21_0_exports);

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// .beyond/uimport/@babel/runtime/helpers/esm/extends.7.21.0.js
var extends_7_21_0_default = _extends;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLjcuMjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm1vZHVsZSIsIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwiYmluZCIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImV4dGVuZHNfN18yMV8wX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztBQUFBO0FBQUFDOzs7QUNBZSxTQUFSQyxXQUE0QjtFQUNqQ0EsV0FBV0MsT0FBT0MsU0FBU0QsT0FBT0MsT0FBT0MsTUFBSyxHQUFJLFVBQVVDLFFBQVE7SUFDbEUsU0FBU0MsSUFBSSxHQUFHQSxJQUFJQyxVQUFVQyxRQUFRRixLQUFLO01BQ3pDLElBQUlHLFNBQVNGLFVBQVVEO01BQ3ZCLFNBQVNJLE9BQU9ELFFBQVE7UUFDdEIsSUFBSVAsT0FBT1MsVUFBVUMsZUFBZUMsS0FBS0osUUFBUUMsR0FBRyxHQUFHO1VBQ3JETCxPQUFPSyxPQUFPRCxPQUFPQztRQUN2QjtNQUNGO0lBQ0Y7SUFDQSxPQUFPTDtFQUNUO0VBQ0EsT0FBT0osU0FBU2EsTUFBTSxNQUFNUCxTQUFTO0FBQ3ZDOzs7QURWQSxJQUFPUSx5QkFBUWQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9