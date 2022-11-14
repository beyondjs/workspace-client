define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/layout-toolbar", "@beyond-js/ui@0.0.1/layout-footer", "@beyond-js/ui@0.0.1/layout-sidenav", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Layout = Layout;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondImage
  } = dependency_3;
  const {
    Toolbar
  } = dependency_4;
  const {
    Footer
  } = dependency_5;
  const {
    Sidenav
  } = dependency_6;
  const {
    BeyondScrollContainer
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
      "vspecifier": "@beyond-js/ui@0.0.1/layout-main"
    },
    "type": "layout"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/image', dependency_3], ['@beyond-js/ui/layout-toolbar', dependency_4], ['@beyond-js/ui/layout-footer', dependency_5], ['@beyond-js/ui/layout-sidenav', dependency_6], ['@beyond-js/ui/perfect-scrollbar', dependency_7]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*********
  layout.jsx
  *********/

  class Control extends React.Component {
    constructor(props) {
      super(props);
      this.container = React.createRef();
      this.props.parent.bind('change', () => this.setState({}));
    }

    componentDidMount() {
      this.props.parent.rendered();
    }

    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "layout-container"
      }, /*#__PURE__*/React.createElement(Toolbar, null), /*#__PURE__*/React.createElement("div", {
        className: "container-content"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Sidenav, null)), /*#__PURE__*/React.createElement("div", {
        className: "content",
        ref: this.container
      })), /*#__PURE__*/React.createElement(Footer, null));
    }

  }
  /***********
  JS PROCESSOR
  ***********/

  /**************
  FILE: layout.js
  **************/


  function Layout() {
    this.control = ReactDOM.render(React.createElement(Control, {
      'parent': this
    }), this.container);
    this.container.classList.add('beyond-ui-layout');
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/layout-main', '.layout-container{background:#1e2d42;color:#fff}.layout-container .container-content{padding:45px;display:grid;grid-template-columns:200px 1fr;grid-gap:20px;min-height:600px}.layout-container .container-content .content{overflow-x:hidden;padding:1px}.layout-container .container-content pre{margin:20px 0;padding:15px;position:relative;transition:all .1s ease-in-out;cursor:pointer}.layout-container .container-content pre:hover{background:#ff8056;color:#fff;transition:all .1s ease-in}.layout-container .container-content pre:before{content:"Copy";position:absolute;padding:15px 20px;top:0;right:0;background:#333;color:#e4e5dc}');
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