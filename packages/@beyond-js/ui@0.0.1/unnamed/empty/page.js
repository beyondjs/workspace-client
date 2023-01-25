define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/empty", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
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
    BeyondEmpty
  } = dependency_3;
  const {
    BeyondButton
  } = dependency_4;
  const {
    BeyondImport
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/empty/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/empty', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/import', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**************
  jsx\control.jsx
  **************/

  class Control extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const myElement = /*#__PURE__*/React.createElement(BeyondButton, null, "My Element");
      return /*#__PURE__*/React.createElement("div", {
        className: "page-control"
      }, /*#__PURE__*/React.createElement("h2", null, "Empty"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondEmpty",
        route: "@beyond-js/ui/empty"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondEmpty/>'), /*#__PURE__*/React.createElement(BeyondEmpty, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Empty with added text"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Add custom text to display on empty. Example:"), /*#__PURE__*/React.createElement("pre", null, '<BeyondEmpty text="añadir texto personalizado a mostrar en el empty"/>'), /*#__PURE__*/React.createElement(BeyondEmpty, {
        text: "a\xF1adir texto personalizado a mostrar en el empty"
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Empty with added elements"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, " You can add custom elements to empty in order to give it more functionalities.Example: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Element:  <BeyondButton>My Element</BeyondButton>"), /*#__PURE__*/React.createElement("pre", null, '<BeyondEmpty additionalElement={myElement}/>'), /*#__PURE__*/React.createElement(BeyondEmpty, {
        additionalElement: myElement
      }));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /***************
  FILE: js\page.js
  ***************/

  function Page() {
    const wrapper = document.createElement('span');
    const specs = {};
    ReactDOM.render(React.createElement(Control, specs), wrapper);
    this.container.id = 'graphs-empty-page';
    this.container.appendChild(wrapper);
  }
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