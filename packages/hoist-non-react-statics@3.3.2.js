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

// .beyond/uimport/temp/hoist-non-react-statics.3.3.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLjMuMy4yLmpzIl0sIm5hbWVzIjpbInJlYWN0SXMiLCJyZXF1aXJlIiwiUkVBQ1RfU1RBVElDUyIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29udGV4dFR5cGUiLCJjb250ZXh0VHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsInByb3BUeXBlcyIsInR5cGUiLCJLTk9XTl9TVEFUSUNTIiwibmFtZSIsImxlbmd0aCIsInByb3RvdHlwZSIsImNhbGxlciIsImNhbGxlZSIsImFyZ3VtZW50cyIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsInJlbmRlciIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJGb3J3YXJkUmVmIiwiTWVtbyIsImdldFN0YXRpY3MiLCJjb21wb25lbnQiLCJpc01lbW8iLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50Iiwia2V5cyIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3NfM18zXzJfZGVmYXVsdCIsImltcG9ydF9ob2lzdF9ub25fcmVhY3Rfc3RhdGljcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0VBQUE7SUFBQTs7SUFFQSxJQUFJQSxVQUFVQyxRQUFRO0lBTXRCLElBQUlDLGdCQUFnQjtNQUNsQkMsbUJBQW1CO01BQ25CQyxhQUFhO01BQ2JDLGNBQWM7TUFDZEMsY0FBYztNQUNkQyxhQUFhO01BQ2JDLGlCQUFpQjtNQUNqQkMsMEJBQTBCO01BQzFCQywwQkFBMEI7TUFDMUJDLFFBQVE7TUFDUkMsV0FBVztNQUNYQyxNQUFNO0lBQ1I7SUFDQSxJQUFJQyxnQkFBZ0I7TUFDbEJDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxXQUFXO01BQ1hDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxXQUFXO01BQ1hDLE9BQU87SUFDVDtJQUNBLElBQUlDLHNCQUFzQjtNQUN4QixZQUFZO01BQ1pDLFFBQVE7TUFDUmpCLGNBQWM7TUFDZEMsYUFBYTtNQUNiSyxXQUFXO0lBQ2I7SUFDQSxJQUFJWSxlQUFlO01BQ2pCLFlBQVk7TUFDWkMsU0FBUztNQUNUbkIsY0FBYztNQUNkQyxhQUFhO01BQ2JLLFdBQVc7TUFDWEMsTUFBTTtJQUNSO0lBQ0EsSUFBSWEsZUFBZSxDQUFDO0lBQ3BCQSxhQUFhMUIsUUFBUTJCLGNBQWNMO0lBQ25DSSxhQUFhMUIsUUFBUTRCLFFBQVFKO0lBRTdCLFNBQVNLLFdBQVdDLFdBQVc7TUFFN0IsSUFBSTlCLFFBQVErQixPQUFPRCxTQUFTLEdBQUc7UUFDN0IsT0FBT047TUFDVDtNQUdBLE9BQU9FLGFBQWFJLFVBQVUsZ0JBQWdCNUI7SUFDaEQ7SUFFQSxJQUFJOEIsaUJBQWlCQyxPQUFPRDtJQUM1QixJQUFJRSxzQkFBc0JELE9BQU9DO0lBQ2pDLElBQUlDLHdCQUF3QkYsT0FBT0U7SUFDbkMsSUFBSUMsMkJBQTJCSCxPQUFPRztJQUN0QyxJQUFJQyxpQkFBaUJKLE9BQU9JO0lBQzVCLElBQUlDLGtCQUFrQkwsT0FBT2hCO0lBQzdCLFNBQVNzQixxQkFBcUJDLGlCQUFpQkMsaUJBQWlCQyxXQUFXO01BQ3pFLElBQUksT0FBT0Qsb0JBQW9CLFVBQVU7UUFFdkMsSUFBSUgsaUJBQWlCO1VBQ25CLElBQUlLLHFCQUFxQk4sZUFBZUksZUFBZTtVQUV2RCxJQUFJRSxzQkFBc0JBLHVCQUF1QkwsaUJBQWlCO1lBQ2hFQyxxQkFBcUJDLGlCQUFpQkcsb0JBQW9CRCxTQUFTO1VBQ3JFO1FBQ0Y7UUFFQSxJQUFJRSxPQUFPVixvQkFBb0JPLGVBQWU7UUFFOUMsSUFBSU4sdUJBQXVCO1VBQ3pCUyxPQUFPQSxLQUFLQyxPQUFPVixzQkFBc0JNLGVBQWUsQ0FBQztRQUMzRDtRQUVBLElBQUlLLGdCQUFnQmpCLFdBQVdXLGVBQWU7UUFDOUMsSUFBSU8sZ0JBQWdCbEIsV0FBV1ksZUFBZTtRQUU5QyxTQUFTTyxJQUFJLEdBQUdBLElBQUlKLEtBQUs1QixRQUFRLEVBQUVnQyxHQUFHO1VBQ3BDLElBQUlDLE1BQU1MLEtBQUtJO1VBRWYsSUFBSSxDQUFDbEMsY0FBY21DLFFBQVEsRUFBRVAsYUFBYUEsVUFBVU8sU0FBUyxFQUFFRixpQkFBaUJBLGNBQWNFLFNBQVMsRUFBRUgsaUJBQWlCQSxjQUFjRyxPQUFPO1lBQzdJLElBQUlDLGFBQWFkLHlCQUF5QkssaUJBQWlCUSxHQUFHO1lBRTlELElBQUk7Y0FFRmpCLGVBQWVRLGlCQUFpQlMsS0FBS0MsVUFBVTtZQUNqRCxTQUFTQyxHQUFQLENBQVc7VUFDZjtRQUNGO01BQ0Y7TUFFQSxPQUFPWDtJQUNUO0lBRUFZLFFBQU9DLFVBQVVkO0VBQUE7QUFBQTs7O0FDdEdqQjtBQUFBZTtFQUFBQztBQUFBO0FBQUFIO0FBQUFJLGtEQUFjQyxnREFBZEw7QUFFQSxxQ0FBcUJLO0FBQ3JCLElBQU9DLHdDQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=