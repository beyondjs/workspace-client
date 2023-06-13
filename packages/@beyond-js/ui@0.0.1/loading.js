define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/spinner"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondLoading = BeyondLoading;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondSpinner
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/loading"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/spinner', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  loading.jsx
  **********/

  function BeyondLoading({
    className
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: `beyond-element-loading-view ${className ? className : ''}`
    }, /*#__PURE__*/React.createElement("h3", null, "Cargando..."), /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true
    }));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/loading', '.beyond-element-loading-view{height:100%;display:flex;align-items:center;background:var(--beyond-background-color);justify-content:center;flex-direction:column;z-index:100;text-align:center}.beyond-element-loading-view .beyond-element-spinner div{border-color:var(--beyond-element-primary-background-color) transparent transparent transparent}.beyond-element-loading-view h3{font-size:18px;color:var(--beyond-text-color)}.beyond-element-loading-view.alternative{background:var(--beyond-background-color)}.beyond-element-loading-view.alternative .beyond-element-spinner div{border-color:var(--beyond-primary-accent-color) transparent transparent transparent}.beyond-element-loading-view.alternative .content h3{color:var(--beyond-text-color)}');
  legacyStyles.appendToDOM();
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});