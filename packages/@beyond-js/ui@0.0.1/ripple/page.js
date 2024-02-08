define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/ui@0.0.1/ripple", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/import", "@beyond-js/ui@0.0.1/form"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
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
    BeyondRipple
  } = dependency_3;
  const {
    BeyondIconButton
  } = dependency_4;
  const {
    BeyondImport
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/ripple/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/ripple', dependency_3], ['@beyond-js/ui/icon', dependency_4], ['@beyond-js/ui/import', dependency_5], ['@beyond-js/ui/form', dependency_6]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    'use strict';

    const ripple = new BeyondRipple();
    const wrapper = document.createElement('div');
    const specs = {};
    ReactDOM.render(React.createElement(MainComponent, specs), wrapper);
    const styles = document.createElement('style');
    styles.textContent = bundle.styles.value;
    this.container.id = 'beyond-element-ripple-page';
    this.container.appendChild(styles);
    this.container.appendChild(wrapper);
    ripple.init(document.querySelectorAll('button'));
  }

  /*******
  main.jsx
  *******/

  class MainComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "main-container"
      }, /*#__PURE__*/React.createElement("h2", null, "Ripple"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondRipple",
        route: "/libraries/beyond-ui/ripple.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, 'const ripple = new BeyondRipple();' + '    ripple.init(document.querySelectorAll(\'button\'));\n'), /*#__PURE__*/React.createElement(BeyondButton, {
        type: "button primary"
      }, " CLICK ME"), /*#__PURE__*/React.createElement("hr", null));
    }
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/ripple/page', '#beyond-element-ripple-page{height:100%;overflow:auto;transform:scale(.9) translate3d(0,0,0);transition:transform .4s ease,opacity .4s ease}#beyond-element-ripple-page.show{opacity:1;transform:none}');
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