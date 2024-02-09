define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/ui@0.0.1/loading", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondLoading
  } = dependency_3;
  const {
    BeyondImport
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/loading/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/loading', dependency_3], ['@beyond-js/ui/import', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******
  view.jsx
  *******/

  class View extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h2", null, "Loading"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondLoading",
        route: "/libraries/beyond-ui/loading.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondLoading fetching={true}/>'), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "The fetching parameter indicates when the spinner should be active or not: "), /*#__PURE__*/React.createElement(BeyondLoading, null));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    const specs = {};
    ReactDOM.render(React.createElement(View, specs), this.container);
    this.container.id = 'beyond-element-icon-button-page';
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/loading/page', '#beyond-element-icon-button-page{display:grid;width:100%;height:100%}#beyond-element-icon-button-page .beyond-element-loading-view{height:25%}');
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