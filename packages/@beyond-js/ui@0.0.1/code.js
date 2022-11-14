define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondCode = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/code"
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
  /*******
  code.jsx
  *******/

  const BeyondCode = ({
    name,
    route
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "beyond-element-code"
    }, /*#__PURE__*/React.createElement("pre", null, " import ", "{", name, "}", " from '", route, "'"));
  };
  /**********
  SCSS STYLES
  **********/


  _exports.BeyondCode = BeyondCode;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/code', '.beyond-element-code pre{background:#333;color:#fff}.beyond-element-code pre:before{background:#fff!important;color:#000!important}');
  legacyStyles.appendToDOM();
  const ims = new Map(); // Module exports

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