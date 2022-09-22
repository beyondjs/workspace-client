define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondPreload = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/preload"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  control.jsx
  **********/

  class BeyondPreload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const {
        width,
        height,
        color,
        stopAnimation,
        radio
      } = this.props;
      return /*#__PURE__*/React.createElement("span", {
        className: "preload",
        style: {
          width: width || "100%",
          height: height || "14px",
          background: color || "",
          borderRadius: radio || ""
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: stopAnimation ? "none" : "block"
        }
      }));
    }

  }
  /**********
  SCSS STYLES
  **********/


  _exports.BeyondPreload = BeyondPreload;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/preload', '.preload{display:inline-block;background:var(--background,#eee);width:100%;height:14px;overflow:hidden;border-radius:3px}@keyframes movement{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.preload span{height:100%;display:block;animation-duration:2s;animation-iteration-count:infinite;animation-name:movement}.preload span:after{content:" ";width:50%;min-width:40px;height:100%;display:block;background:linear-gradient(90deg,rgba(255,255,255,0) 0,var(--spinner-background,gray) 50%,rgba(255,255,255,0) 100%);background-size:100%}');
  legacyStyles.appendToDOM();
  const ims = new Map(); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});