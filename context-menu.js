define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/workspace@1.0.5/tooltip"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DSContextMenu = DSContextMenu;
  _exports.ItemMenu = ItemMenu;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    DSIcon
  } = dependency_3;
  const {
    BeyondTooltip
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/context-menu"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/workspace/core-components', dependency_3], ['@beyond-js/workspace/tooltip', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***************
  context-menu.jsx
  ***************/

  function DSContextMenu({
    specs,
    unmount,
    children
  }) {
    return /*#__PURE__*/React.createElement(BeyondTooltip, {
      specs: specs,
      unmount: unmount,
      className: "ds-context-menu item-actions"
    }, children);
  }

  /************
  item-menu.jsx
  ************/

  function ItemMenu({
    onClick,
    icon,
    label
  }) {
    return /*#__PURE__*/React.createElement("li", {
      onClick: onClick
    }, icon ? /*#__PURE__*/React.createElement(DSIcon, {
      icon: icon
    }) : /*#__PURE__*/React.createElement("span", null), label);
  }

  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/context-menu', '.ds-context-menu{padding:0;background:#141414;border-radius:3px;z-index:1000;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);min-width:200px;cursor:pointer}.ds-context-menu svg{fill:#fff;height:14px;width:14px}.ds-context-menu ul{list-style:none;padding:0;display:grid;margin:0;align-items:center}.ds-context-menu ul li{padding:5px 15px;align-items:center;display:flex;gap:5px}.ds-context-menu ul li:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.ds-context-menu ul li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.ds-context-menu ul li:hover{background:#333}');
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