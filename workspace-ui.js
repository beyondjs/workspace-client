define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/popover", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/dashboard@0.0.1/core-components"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ButtonsComponents = ButtonsComponents;
  _exports.Page = Page;
  _exports.View = View;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondButton
  } = dependency_3;
  const {
    BeyondImage
  } = dependency_4;
  const {
    BeyondIconButton,
    BeyondIcon
  } = dependency_5;
  const {
    BeyondPopover
  } = dependency_6;
  const {
    BeyondSpinner
  } = dependency_7;
  const {
    DSIconButton,
    DSBoard,
    DsFetchingBlock,
    DSIcon
  } = dependency_8;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace-ui"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/form', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/icon', dependency_5], ['@beyond-js/ui/popover', dependency_6], ['@beyond-js/ui/spinner', dependency_7], ['@beyond-js/dashboard/core-components', dependency_8]]);

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
    ReactDOM.render(React.createElement(View, {}), this.container);
    this.container.classList.add('ds-home-page');

    this.show = () => {// controller.createApp = this.vdir === 'create_app';
    };
  }
  /*******************
  elements\buttons.jsx
  *******************/


  function ButtonsComponents() {
    return /*#__PURE__*/React.createElement("div", {
      className: "elements__container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "primary"
    }, "Primary"), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary"
    }, "Secondary"), /*#__PURE__*/React.createElement(BeyondButton, null, "Default"), /*#__PURE__*/React.createElement(BeyondButton, null, "third"), /*#__PURE__*/React.createElement(BeyondButton, null, "Right Icon ", /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "user"
    })), /*#__PURE__*/React.createElement(BeyondButton, null, /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "user"
    }), "Left icon"));
  }
  /********
  index.jsx
  ********/


  function View() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Page"), /*#__PURE__*/React.createElement(ButtonsComponents, null));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/workspace-ui', '.page{color:red}.elements__container{display:flex;gap:1rem}');
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