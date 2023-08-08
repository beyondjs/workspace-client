define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
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
    BeyondScrollContainer
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
      "vspecifier": "@beyond-js/ui@0.0.1/perfect-scrollbar/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/perfect-scrollbar', dependency_3], ['@beyond-js/ui/import', dependency_4]]);
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

    ReactDOM.render(React.createElement(View, {}), this.container);
    this.container.id = 'beyond-elements-scroll-page';
  }

  /**********
  control.jsx
  **********/

  class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const options = "What is Lorem Ipsum?\n" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + " standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" + " a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's";
      return /*#__PURE__*/React.createElement("div", {
        className: "container-select"
      }, /*#__PURE__*/React.createElement("h2", null, "Scroll "), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondScrollContainer",
        route: "/libraries/beyond-ui/perfect-scrollbar.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondScrollContainer><div>my content</div></BeyondScrollContainer>'), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Wrap your content in the scroll and you will have a more current design that works perfectly without adding styles:"), /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("div", {
        className: "myContent"
      }, options)));
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.View = View;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/perfect-scrollbar/page', '#beyond-elements-scroll-page .beyond-perfect-scrollbar{border:solid 1px #fff;border-radius:4px;margin-top:20px}#beyond-elements-scroll-page .myContent{padding:20px;height:200px;text-align:justify;font-size:16px;line-height:30px}');
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