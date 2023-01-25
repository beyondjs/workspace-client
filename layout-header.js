define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DsHeaderBar = DsHeaderBar;
  _exports.FooterBar = FooterBar;
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/layout-header"
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
  /******
  bar.jsx
  ******/

  function DsHeaderBar({
    children,
    className
  }) {
    const cls = `ds-header-bar${className ? ` ${className}` : ''}`;
    return /*#__PURE__*/React.createElement("header", {
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-container"
    }, children));
  }
  /***********
  foot-bar.jsx
  ***********/

  function FooterBar({
    props
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      className: "ds-footbar"
    }, props);
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    ReactDOM.render(React.createElement(DsHeaderBar, {
      texts: module.texts
    }), this.container);
    this.container.id = 'app-headr=bar-page';
    this.container.classList.add('page');
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/layout-header', '.ds-header-bar{background:var(--beyond-secondary-dark-color);width:100%}.ds-header-bar .p1,.ds-header-bar h1,.ds-header-bar h2,.ds-header-bar h3,.ds-header-bar h4{padding:5px 0}.ds-header-bar .title-col h1,.ds-header-bar .title-col h2{font-size:1.5rem}');
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