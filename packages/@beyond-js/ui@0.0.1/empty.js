define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondEmpty = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondIcon
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/empty"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /********
  empty.jsx
  ********/

  class BeyondEmpty extends React.Component {
    render() {
      const text = this.props.text ? this.props.text : 'No hay registros';
      return /*#__PURE__*/React.createElement("div", {
        className: "beyond-element-empty"
      }, /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, this.props.icon ? this.props.icon : /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "icon"
      }), /*#__PURE__*/React.createElement("h3", null, text), this.props.additionalElement ? this.props.additionalElement : null, this.props.children ? this.props.children : null));
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondEmpty = BeyondEmpty;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/empty', '.beyond-element-empty{text-align:center;color:var(--beyond-gray-light-color);padding:15px 15%;display:flex;flex-flow:row;justify-items:center;align-items:center;height:100%}.beyond-element-empty .content{justify-items:center;display:flex;margin:auto;flex-flow:column}.beyond-element-empty h3{margin:15px 0;font-size:18px;text-transform:lowercase}.beyond-element-empty h3:first-letter{text-transform:uppercase}.beyond-element-empty a{color:var(--beyond-gray-light-color);font-size:18px}.beyond-element-empty a:hover{text-decoration:none;cursor:pointer}.beyond-element-empty svg{width:45px;height:45px;display:grid;margin:auto;fill:var(--beyond-gray-light-color)}');
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