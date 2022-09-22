define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/empty", "@beyond-js/ui@0.0.1/import", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/ripple", "@beyond-js/ui@0.0.1/tabs"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondEmpty
  } = dependency_3;
  const {
    BeyondImport
  } = dependency_4;
  const {
    BeyondIcon
  } = dependency_5;
  const {
    BeyondWaves
  } = dependency_6;
  const {
    BeyondTab,
    Tabs,
    TabsContent,
    TabsContextProvider
  } = dependency_7;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/tabs/page"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/empty', dependency_3], ['@beyond-js/ui/import', dependency_4], ['@beyond-js/ui/icon', dependency_5], ['@beyond-js/ui/ripple', dependency_6], ['@beyond-js/ui/tabs', dependency_7]]);

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
      return /*#__PURE__*/React.createElement("div", {
        className: "page-control"
      }, /*#__PURE__*/React.createElement("h2", null, "Tabs"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondTab",
        route: "/libraries/beyond-ui/tabs.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondTab orientation="horizontal"/>'), /*#__PURE__*/React.createElement("div", {
        className: "container-test"
      }, /*#__PURE__*/React.createElement(TabsContextProvider, {
        orientation: "horizontal"
      }, /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "play"
      }), /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "user"
      }), /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "settings"
      }), /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "user"
      })), /*#__PURE__*/React.createElement(TabsContent, null, /*#__PURE__*/React.createElement("h1", null, "test 1"), /*#__PURE__*/React.createElement("h1", null, "test 2"), /*#__PURE__*/React.createElement("h1", null, "test 3"), /*#__PURE__*/React.createElement("h1", null, "test 4")))), /*#__PURE__*/React.createElement("hr", null));
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
    this.container.id = 'graphs-tabs-page';
    this.container.appendChild(wrapper);
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/tabs/page', '#graphs-tabs-page .container-test{margin:auto;position:relative;background:#fff;width:300px;height:350px}');
  legacyStyles.appendToDOM();
  const ims = new Map(); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});