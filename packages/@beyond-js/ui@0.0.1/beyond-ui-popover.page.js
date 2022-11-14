define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/popover"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = _exports.View = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondPopover
  } = dependency_3;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/beyond-ui-popover",
      "multibundle": true
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/popover', dependency_3]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /***************
  FILE: js\page.js
  ***************/

  function Page() {
    this.container.classList.add('beyond-ui-page');
    ReactDOM.render(React.createElement(View), this.container);
  }
  /*******
  view.jsx
  *******/


  class View extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
        className: "page-header"
      }, "Beyond Pop Over."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ele1"), /*#__PURE__*/React.createElement("li", null, "Ele2"), /*#__PURE__*/React.createElement("li", null, "Ele3")), /*#__PURE__*/React.createElement(BeyondPopover, {
        target: /*#__PURE__*/React.createElement("button", null, "Open")
      }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("p", null, "caracas"), /*#__PURE__*/React.createElement("p", null, "caracas2"), /*#__PURE__*/React.createElement("p", null, "caracas3"))), /*#__PURE__*/React.createElement("button", null, "Otro boton"));
    }

  }
  /**********
  SCSS STYLES
  **********/


  _exports.View = View;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/beyond-ui-popover.page', '.app-page-container{padding:15px;display:flex;animation:expand-right .8s ease forwards}.app-page-container .app__lists-container{margin-top:30px;flex-flow:row;display:flex;align-items:flex-start;min-width:1024px;gap:15px}.app-page-container.right-hidden{animation:hidden-right .8s ease forwards}@keyframes expand{0%{transform:translateX(1400px)}100%{transform:translateX(0)}}@keyframes hidden-right{0%{transform:translateX(0)}99%{transform:translateX(-1400px)}100%{display:none;transform:none}}');
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