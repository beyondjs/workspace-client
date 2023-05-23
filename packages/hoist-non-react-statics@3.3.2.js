define(["react-is@16.13.1"], (dep_0) => {

const bimport = specifier => {
	const dependencies = new Map([["react-is","16.13.1"],["hoist-non-react-statics","3.3.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};



const dependencies = new Map([["react-is@16.13.1", dep_0]]);
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
    "use strict";

    var reactIs = require("react-is@16.13.1");
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  }
});

// .beyond/uimport/hoist-non-react-statics.3.3.2.js
var hoist_non_react_statics_3_3_2_exports = {};
__export(hoist_non_react_statics_3_3_2_exports, {
  default: () => hoist_non_react_statics_3_3_2_default
});
module.exports = __toCommonJS(hoist_non_react_statics_3_3_2_exports);
__reExport(hoist_non_react_statics_3_3_2_exports, __toESM(require_hoist_non_react_statics_cjs()), module.exports);
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var hoist_non_react_statics_3_3_2_default = import_hoist_non_react_statics.default;
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy4zLjMuMi5qcyJdLCJuYW1lcyI6WyJyZWFjdElzIiwicmVxdWlyZSIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlIiwiY29udGV4dFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJtaXhpbnMiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiS05PV05fU1RBVElDUyIsIm5hbWUiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcmd1bWVudHMiLCJhcml0eSIsIkZPUldBUkRfUkVGX1NUQVRJQ1MiLCJyZW5kZXIiLCJNRU1PX1NUQVRJQ1MiLCJjb21wYXJlIiwiVFlQRV9TVEFUSUNTIiwiRm9yd2FyZFJlZiIsIk1lbW8iLCJnZXRTdGF0aWNzIiwiY29tcG9uZW50IiwiaXNNZW1vIiwiZGVmaW5lUHJvcGVydHkiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsInRhcmdldENvbXBvbmVudCIsInNvdXJjZUNvbXBvbmVudCIsImJsYWNrbGlzdCIsImluaGVyaXRlZENvbXBvbmVudCIsImtleXMiLCJjb25jYXQiLCJ0YXJnZXRTdGF0aWNzIiwic291cmNlU3RhdGljcyIsImkiLCJrZXkiLCJkZXNjcmlwdG9yIiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImhvaXN0X25vbl9yZWFjdF9zdGF0aWNzXzNfM18yX2RlZmF1bHQiLCJpbXBvcnRfaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBQUE7O0lBRUEsSUFBSUEsVUFBVUMsUUFBUTtJQU10QixJQUFJQyxnQkFBZ0I7TUFDbEJDLG1CQUFtQjtNQUNuQkMsYUFBYTtNQUNiQyxjQUFjO01BQ2RDLGNBQWM7TUFDZEMsYUFBYTtNQUNiQyxpQkFBaUI7TUFDakJDLDBCQUEwQjtNQUMxQkMsMEJBQTBCO01BQzFCQyxRQUFRO01BQ1JDLFdBQVc7TUFDWEMsTUFBTTtJQUNSO0lBQ0EsSUFBSUMsZ0JBQWdCO01BQ2xCQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsV0FBVztNQUNYQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsV0FBVztNQUNYQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQyxzQkFBc0I7TUFDeEIsWUFBWTtNQUNaQyxRQUFRO01BQ1JqQixjQUFjO01BQ2RDLGFBQWE7TUFDYkssV0FBVztJQUNiO0lBQ0EsSUFBSVksZUFBZTtNQUNqQixZQUFZO01BQ1pDLFNBQVM7TUFDVG5CLGNBQWM7TUFDZEMsYUFBYTtNQUNiSyxXQUFXO01BQ1hDLE1BQU07SUFDUjtJQUNBLElBQUlhLGVBQWUsQ0FBQztJQUNwQkEsYUFBYTFCLFFBQVEyQixjQUFjTDtJQUNuQ0ksYUFBYTFCLFFBQVE0QixRQUFRSjtJQUU3QixTQUFTSyxXQUFXQyxXQUFXO01BRTdCLElBQUk5QixRQUFRK0IsT0FBT0QsU0FBUyxHQUFHO1FBQzdCLE9BQU9OO01BQ1Q7TUFHQSxPQUFPRSxhQUFhSSxVQUFVLGdCQUFnQjVCO0lBQ2hEO0lBRUEsSUFBSThCLGlCQUFpQkMsT0FBT0Q7SUFDNUIsSUFBSUUsc0JBQXNCRCxPQUFPQztJQUNqQyxJQUFJQyx3QkFBd0JGLE9BQU9FO0lBQ25DLElBQUlDLDJCQUEyQkgsT0FBT0c7SUFDdEMsSUFBSUMsaUJBQWlCSixPQUFPSTtJQUM1QixJQUFJQyxrQkFBa0JMLE9BQU9oQjtJQUM3QixTQUFTc0IscUJBQXFCQyxpQkFBaUJDLGlCQUFpQkMsV0FBVztNQUN6RSxJQUFJLE9BQU9ELG9CQUFvQixVQUFVO1FBRXZDLElBQUlILGlCQUFpQjtVQUNuQixJQUFJSyxxQkFBcUJOLGVBQWVJLGVBQWU7VUFFdkQsSUFBSUUsc0JBQXNCQSx1QkFBdUJMLGlCQUFpQjtZQUNoRUMscUJBQXFCQyxpQkFBaUJHLG9CQUFvQkQsU0FBUztVQUNyRTtRQUNGO1FBRUEsSUFBSUUsT0FBT1Ysb0JBQW9CTyxlQUFlO1FBRTlDLElBQUlOLHVCQUF1QjtVQUN6QlMsT0FBT0EsS0FBS0MsT0FBT1Ysc0JBQXNCTSxlQUFlLENBQUM7UUFDM0Q7UUFFQSxJQUFJSyxnQkFBZ0JqQixXQUFXVyxlQUFlO1FBQzlDLElBQUlPLGdCQUFnQmxCLFdBQVdZLGVBQWU7UUFFOUMsU0FBU08sSUFBSSxHQUFHQSxJQUFJSixLQUFLNUIsUUFBUSxFQUFFZ0MsR0FBRztVQUNwQyxJQUFJQyxNQUFNTCxLQUFLSTtVQUVmLElBQUksQ0FBQ2xDLGNBQWNtQyxRQUFRLEVBQUVQLGFBQWFBLFVBQVVPLFNBQVMsRUFBRUYsaUJBQWlCQSxjQUFjRSxTQUFTLEVBQUVILGlCQUFpQkEsY0FBY0csT0FBTztZQUM3SSxJQUFJQyxhQUFhZCx5QkFBeUJLLGlCQUFpQlEsR0FBRztZQUU5RCxJQUFJO2NBRUZqQixlQUFlUSxpQkFBaUJTLEtBQUtDLFVBQVU7WUFDakQsU0FBU0MsR0FBUCxDQUFXO1VBQ2Y7UUFDRjtNQUNGO01BRUEsT0FBT1g7SUFDVDtJQUVBWSxRQUFPQyxVQUFVZDtFQUFBO0FBQUE7OztBQ3RHakI7QUFBQWU7RUFBQUM7QUFBQTtBQUFBSDtBQUFBSSxrREFBY0MsZ0RBQWRMO0FBRUEscUNBQXFCSztBQUNyQixJQUFPQyx3Q0FBUUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9