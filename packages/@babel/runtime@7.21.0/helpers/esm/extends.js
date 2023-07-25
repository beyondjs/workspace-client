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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/extends.7.21.0.js
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

// .beyond/uimport/temp/@babel/runtime/helpers/esm/extends.7.21.0.js
var extends_7_21_0_default = _extends;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuNy4yMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJkZWZhdWx0IiwibW9kdWxlIiwiX2V4dGVuZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJiaW5kIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiZXh0ZW5kc183XzIxXzBfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FlLFNBQVJDLFdBQTRCO0VBQ2pDQSxXQUFXQyxPQUFPQyxTQUFTRCxPQUFPQyxPQUFPQyxNQUFLLEdBQUksVUFBVUMsUUFBUTtJQUNsRSxTQUFTQyxJQUFJLEdBQUdBLElBQUlDLFVBQVVDLFFBQVFGLEtBQUs7TUFDekMsSUFBSUcsU0FBU0YsVUFBVUQ7TUFDdkIsU0FBU0ksT0FBT0QsUUFBUTtRQUN0QixJQUFJUCxPQUFPUyxVQUFVQyxlQUFlQyxLQUFLSixRQUFRQyxHQUFHLEdBQUc7VUFDckRMLE9BQU9LLE9BQU9ELE9BQU9DO1FBQ3ZCO01BQ0Y7SUFDRjtJQUNBLE9BQU9MO0VBQ1Q7RUFDQSxPQUFPSixTQUFTYSxNQUFNLE1BQU1QLFNBQVM7QUFDdkM7OztBRFZBLElBQU9RLHlCQUFRZCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=