define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondImport = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondCode
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/import"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/code', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*********
  import.jsx
  *********/

  const BeyondImport = ({
    name,
    route
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "beyond-element-import"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Import: "), /*#__PURE__*/React.createElement(BeyondCode, {
      name: name,
      route: route
    }));
  };

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondImport = BeyondImport;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/import', '');
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