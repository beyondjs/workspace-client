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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
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
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

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

// .beyond/uimport/temp/hoist-non-react-statics.3.3.2.js
var hoist_non_react_statics_3_3_2_exports = {};
__export(hoist_non_react_statics_3_3_2_exports, {
  default: () => hoist_non_react_statics_3_3_2_default
});
__reExport(hoist_non_react_statics_3_3_2_exports, __toESM(require_hoist_non_react_statics_cjs()));
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var hoist_non_react_statics_3_3_2_default = import_hoist_non_react_statics.default;
module.exports = __toCommonJS(hoist_non_react_statics_3_3_2_exports);
};

code(module, require);
return module.exports;
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLjMuMy4yLmpzIl0sIm5hbWVzIjpbInJlYWN0SXMiLCJyZXF1aXJlIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImNhbGxlZSIsImFyZ3VtZW50cyIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsInJlbmRlciIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJGb3J3YXJkUmVmIiwiTWVtbyIsImNvbXBvbmVudCIsImlzTWVtbyIsImRlZmluZVByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG90eXBlIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50IiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJrZXlzIiwiY29uY2F0IiwidGFyZ2V0U3RhdGljcyIsImdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwibW9kdWxlMiIsImV4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImhvaXN0X25vbl9yZWFjdF9zdGF0aWNzXzNfM18yX2RlZmF1bHQiLCJpbXBvcnRfaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtFQUFBO0lBQUE7O0lBRUEsSUFBSUEsVUFBVUMsUUFBUTtJQU10QixJQUFJQyxnQkFBZ0I7TUFDbEJDLG1CQUFtQjtNQUNuQkMsYUFBYTtNQUNiQyxjQUFjO01BQ2RDLGNBQWM7TUFDZEMsYUFBYTtNQUNiQyxpQkFBaUI7TUFDakJDLDBCQUEwQjtNQUMxQkMsMEJBQTBCO01BQzFCQyxRQUFRO01BQ1JDLFdBQVc7TUFDWEMsTUFBTTtJQUNSO0lBQ0EsSUFBSUMsZ0JBQWdCO01BQ2xCQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsV0FBVztNQUNYQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsV0FBVztNQUNYQyxPQUFPO0lBQ1Q7SUFDQSxJQUFJQyxzQkFBc0I7TUFDeEIsWUFBWTtNQUNaQyxRQUFRO01BQ1JqQixjQUFjO01BQ2RDLGFBQWE7TUFDYkssV0FBVztJQUNiO0lBQ0EsSUFBSVksZUFBZTtNQUNqQixZQUFZO01BQ1pDLFNBQVM7TUFDVG5CLGNBQWM7TUFDZEMsYUFBYTtNQUNiSyxXQUFXO01BQ1hDLE1BQU07SUFDUjtJQUNBLElBQUlhLGVBQWUsQ0FBQztJQUNwQkEsYUFBYTFCLFFBQVEyQixjQUFjTDtJQUNuQ0ksYUFBYTFCLFFBQVE0QixRQUFRSjtJQUU3QixvQkFBb0JLLFdBQVc7TUFFN0IsSUFBSTdCLFFBQVE4QixPQUFPRCxTQUFTLEdBQUc7UUFDN0IsT0FBT0w7TUFDVDtNQUdBLE9BQU9FLGFBQWFHLFVBQVUsZ0JBQWdCM0I7SUFDaEQ7SUFFQSxJQUFJNkIsaUJBQWlCQyxPQUFPRDtJQUM1QixJQUFJRSxzQkFBc0JELE9BQU9DO0lBQ2pDLElBQUlDLHdCQUF3QkYsT0FBT0U7SUFDbkMsSUFBSUMsMkJBQTJCSCxPQUFPRztJQUN0QyxJQUFJQyxpQkFBaUJKLE9BQU9JO0lBQzVCLElBQUlDLGtCQUFrQkwsT0FBT2Y7SUFDN0IsOEJBQThCcUIsaUJBQWlCQyxpQkFBaUJDLFdBQVc7TUFDekUsSUFBSSxPQUFPRCxvQkFBb0IsVUFBVTtRQUV2QyxJQUFJRixpQkFBaUI7VUFDbkIsSUFBSUkscUJBQXFCTCxlQUFlRyxlQUFlO1VBRXZELElBQUlFLHNCQUFzQkEsdUJBQXVCSixpQkFBaUI7WUFDaEVLLHFCQUFxQkosaUJBQWlCRyxvQkFBb0JELFNBQVM7VUFDckU7UUFDRjtRQUVBLElBQUlHLE9BQU9WLG9CQUFvQk0sZUFBZTtRQUU5QyxJQUFJTCx1QkFBdUI7VUFDekJTLE9BQU9BLEtBQUtDLE9BQU9WLHNCQUFzQkssZUFBZSxDQUFDO1FBQzNEO1FBRUEsSUFBSU0sZ0JBQWdCQyxXQUFXUixlQUFlO1FBQzlDLElBQUlTLGdCQUFnQkQsV0FBV1AsZUFBZTtRQUU5QyxTQUFTUyxJQUFJLEdBQUdBLElBQUlMLEtBQUszQixRQUFRLEVBQUVnQyxHQUFHO1VBQ3BDLElBQUlDLE1BQU1OLEtBQUtLO1VBRWYsSUFBSSxDQUFDbEMsY0FBY21DLFFBQVEsRUFBRVQsYUFBYUEsVUFBVVMsU0FBUyxFQUFFRixpQkFBaUJBLGNBQWNFLFNBQVMsRUFBRUosaUJBQWlCQSxjQUFjSSxPQUFPO1lBQzdJLElBQUlDLGFBQWFmLHlCQUF5QkksaUJBQWlCVSxHQUFHO1lBRTlELElBQUk7Y0FFRmxCLGVBQWVPLGlCQUFpQlcsS0FBS0MsVUFBVTtZQUNqRCxTQUFTQyxHQUFQLENBQVc7VUFDZjtRQUNGO01BQ0Y7TUFFQSxPQUFPYjtJQUNUO0lBRUFjLFFBQU9DLFVBQVVYO0VBQUE7QUFBQTs7O0FDdEdqQjtBQUFBWTtFQUFBQztBQUFBO0FBQUFDLGtEQUFjQztBQUVkLHFDQUFxQkE7QUFDckIsSUFBT0Msd0NBQVFDIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiZXhwb3J0ICogZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5pbXBvcnQgX2RlZmF1bHQgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==