define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondPreloadText = BeyondPreloadText;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/preload-text"
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

  function BeyondPreloadText({
    className,
    width = "100%",
    height = "100%",
    color
  }) {
    const styles = {
      width,
      height
    };
    if (color) styles.background = color;
    const cls = `preload-text${className ? ` ${className}` : ''}`;
    return /*#__PURE__*/React.createElement("span", {
      className: cls,
      style: styles
    }, /*#__PURE__*/React.createElement("span", null));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/preload-text', '.preload-text{display:inline-block;background:var(--beyond-preload-color,#e4e5dc);width:100%;height:14px;overflow:hidden;border-radius:3px;--color-shadow:var(--beyond-secondary-color);--second-shadow-color:var(--beyond-secondary-dark-color)}@keyframes movement{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.preload-text.primary{--color-shadow:var(--beyond-primary-color);--second-shadow-color:var(--beyond-primary-dark-color);background:var(--beyond-primary-dark-color)}.preload-text span{height:100%;display:block;animation-duration:2s;animation-iteration-count:infinite;animation-name:movement}.preload-text span:after{content:" ";width:50%;min-width:40px;height:100%;display:block;background:linear-gradient(90deg,rgba(255,255,255,0) 0,var(--color-shadow) 50%,var(--second-shadow-color) 100%);background-size:100%}');
  legacyStyles.appendToDOM();
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});