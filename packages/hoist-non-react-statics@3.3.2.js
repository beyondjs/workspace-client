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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLjMuMy4yLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3NfY2pzIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwicmVhY3RJcyIsInJlcXVpcmUiLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNvbnRleHRUeXBlcyIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwicHJvcFR5cGVzIiwidHlwZSIsIktOT1dOX1NUQVRJQ1MiLCJuYW1lIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiY2FsbGVyIiwiY2FsbGVlIiwiYXJndW1lbnRzIiwiYXJpdHkiLCJGT1JXQVJEX1JFRl9TVEFUSUNTIiwicmVuZGVyIiwiTUVNT19TVEFUSUNTIiwiY29tcGFyZSIsIlRZUEVfU1RBVElDUyIsIkZvcndhcmRSZWYiLCJNZW1vIiwiZ2V0U3RhdGljcyIsImNvbXBvbmVudCIsImlzTWVtbyIsImRlZmluZVByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwib2JqZWN0UHJvdG90eXBlIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJ0YXJnZXRDb21wb25lbnQiLCJzb3VyY2VDb21wb25lbnQiLCJibGFja2xpc3QiLCJpbmhlcml0ZWRDb21wb25lbnQiLCJrZXlzIiwiY29uY2F0IiwidGFyZ2V0U3RhdGljcyIsInNvdXJjZVN0YXRpY3MiLCJpIiwia2V5IiwiZGVzY3JpcHRvciIsImUiLCJob2lzdF9ub25fcmVhY3Rfc3RhdGljc18zXzNfMl9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiaG9pc3Rfbm9uX3JlYWN0X3N0YXRpY3NfM18zXzJfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X2hvaXN0X25vbl9yZWFjdF9zdGF0aWNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUEsR0FBQUMsVUFBQTtFQUFBLDBFQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQTs7SUFFQSxJQUFJQyxPQUFBLEdBQVVDLE9BQUEsQ0FBUTtJQU10QixJQUFJQyxhQUFBLEdBQWdCO01BQ2xCQyxpQkFBQSxFQUFtQjtNQUNuQkMsV0FBQSxFQUFhO01BQ2JDLFlBQUEsRUFBYztNQUNkQyxZQUFBLEVBQWM7TUFDZEMsV0FBQSxFQUFhO01BQ2JDLGVBQUEsRUFBaUI7TUFDakJDLHdCQUFBLEVBQTBCO01BQzFCQyx3QkFBQSxFQUEwQjtNQUMxQkMsTUFBQSxFQUFRO01BQ1JDLFNBQUEsRUFBVztNQUNYQyxJQUFBLEVBQU07SUFDUjtJQUNBLElBQUlDLGFBQUEsR0FBZ0I7TUFDbEJDLElBQUEsRUFBTTtNQUNOQyxNQUFBLEVBQVE7TUFDUkMsU0FBQSxFQUFXO01BQ1hDLE1BQUEsRUFBUTtNQUNSQyxNQUFBLEVBQVE7TUFDUkMsU0FBQSxFQUFXO01BQ1hDLEtBQUEsRUFBTztJQUNUO0lBQ0EsSUFBSUMsbUJBQUEsR0FBc0I7TUFDeEIsWUFBWTtNQUNaQyxNQUFBLEVBQVE7TUFDUmpCLFlBQUEsRUFBYztNQUNkQyxXQUFBLEVBQWE7TUFDYkssU0FBQSxFQUFXO0lBQ2I7SUFDQSxJQUFJWSxZQUFBLEdBQWU7TUFDakIsWUFBWTtNQUNaQyxPQUFBLEVBQVM7TUFDVG5CLFlBQUEsRUFBYztNQUNkQyxXQUFBLEVBQWE7TUFDYkssU0FBQSxFQUFXO01BQ1hDLElBQUEsRUFBTTtJQUNSO0lBQ0EsSUFBSWEsWUFBQSxHQUFlLENBQUM7SUFDcEJBLFlBQUEsQ0FBYTFCLE9BQUEsQ0FBUTJCLFVBQUEsSUFBY0wsbUJBQUE7SUFDbkNJLFlBQUEsQ0FBYTFCLE9BQUEsQ0FBUTRCLElBQUEsSUFBUUosWUFBQTtJQUU3QixTQUFTSyxXQUFXQyxTQUFBLEVBQVc7TUFFN0IsSUFBSTlCLE9BQUEsQ0FBUStCLE1BQUEsQ0FBT0QsU0FBUyxHQUFHO1FBQzdCLE9BQU9OLFlBQUE7TUFDVDtNQUdBLE9BQU9FLFlBQUEsQ0FBYUksU0FBQSxDQUFVLGdCQUFnQjVCLGFBQUE7SUFDaEQ7SUFFQSxJQUFJOEIsY0FBQSxHQUFpQkMsTUFBQSxDQUFPRCxjQUFBO0lBQzVCLElBQUlFLG1CQUFBLEdBQXNCRCxNQUFBLENBQU9DLG1CQUFBO0lBQ2pDLElBQUlDLHFCQUFBLEdBQXdCRixNQUFBLENBQU9FLHFCQUFBO0lBQ25DLElBQUlDLHdCQUFBLEdBQTJCSCxNQUFBLENBQU9HLHdCQUFBO0lBQ3RDLElBQUlDLGNBQUEsR0FBaUJKLE1BQUEsQ0FBT0ksY0FBQTtJQUM1QixJQUFJQyxlQUFBLEdBQWtCTCxNQUFBLENBQU9oQixTQUFBO0lBQzdCLFNBQVNzQixxQkFBcUJDLGVBQUEsRUFBaUJDLGVBQUEsRUFBaUJDLFNBQUEsRUFBVztNQUN6RSxJQUFJLE9BQU9ELGVBQUEsS0FBb0IsVUFBVTtRQUV2QyxJQUFJSCxlQUFBLEVBQWlCO1VBQ25CLElBQUlLLGtCQUFBLEdBQXFCTixjQUFBLENBQWVJLGVBQWU7VUFFdkQsSUFBSUUsa0JBQUEsSUFBc0JBLGtCQUFBLEtBQXVCTCxlQUFBLEVBQWlCO1lBQ2hFQyxvQkFBQSxDQUFxQkMsZUFBQSxFQUFpQkcsa0JBQUEsRUFBb0JELFNBQVM7VUFDckU7UUFDRjtRQUVBLElBQUlFLElBQUEsR0FBT1YsbUJBQUEsQ0FBb0JPLGVBQWU7UUFFOUMsSUFBSU4scUJBQUEsRUFBdUI7VUFDekJTLElBQUEsR0FBT0EsSUFBQSxDQUFLQyxNQUFBLENBQU9WLHFCQUFBLENBQXNCTSxlQUFlLENBQUM7UUFDM0Q7UUFFQSxJQUFJSyxhQUFBLEdBQWdCakIsVUFBQSxDQUFXVyxlQUFlO1FBQzlDLElBQUlPLGFBQUEsR0FBZ0JsQixVQUFBLENBQVdZLGVBQWU7UUFFOUMsU0FBU08sQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUosSUFBQSxDQUFLNUIsTUFBQSxFQUFRLEVBQUVnQyxDQUFBLEVBQUc7VUFDcEMsSUFBSUMsR0FBQSxHQUFNTCxJQUFBLENBQUtJLENBQUE7VUFFZixJQUFJLENBQUNsQyxhQUFBLENBQWNtQyxHQUFBLEtBQVEsRUFBRVAsU0FBQSxJQUFhQSxTQUFBLENBQVVPLEdBQUEsTUFBUyxFQUFFRixhQUFBLElBQWlCQSxhQUFBLENBQWNFLEdBQUEsTUFBUyxFQUFFSCxhQUFBLElBQWlCQSxhQUFBLENBQWNHLEdBQUEsSUFBTztZQUM3SSxJQUFJQyxVQUFBLEdBQWFkLHdCQUFBLENBQXlCSyxlQUFBLEVBQWlCUSxHQUFHO1lBRTlELElBQUk7Y0FFRmpCLGNBQUEsQ0FBZVEsZUFBQSxFQUFpQlMsR0FBQSxFQUFLQyxVQUFVO1lBQ2pELFNBQVNDLENBQUEsRUFBUCxDQUFXO1VBQ2Y7UUFDRjtNQUNGO01BRUEsT0FBT1gsZUFBQTtJQUNUO0lBRUF6QyxPQUFBLENBQU9ELE9BQUEsR0FBVXlDLG9CQUFBO0VBQUE7QUFBQTs7O0FDdEdqQixJQUFBYSxxQ0FBQTtBQUFBQyxRQUFBLENBQUFELHFDQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQTFELE9BQUEsR0FBQTJELFlBQUEsQ0FBQUwscUNBQUE7QUFBQU0sVUFBQSxDQUFBTixxQ0FBQSxFQUFjTyxPQUFBLENBQUFoRSxtQ0FBQSxLQUFkNkQsTUFBQSxDQUFBMUQsT0FBQTtBQUVBLElBQUE4RCw4QkFBQSxHQUFxQkQsT0FBQSxDQUFBaEUsbUNBQUE7QUFDckIsSUFBTzRELHFDQUFBLEdBQVFLLDhCQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9