define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/form"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondInstruction = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondButton
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
      "vspecifier": "@beyond-js/ui@0.0.1/instruction"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/form', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**************
  instruction.jsx
  **************/

  class BeyondInstruction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'show': true
      };
      this.hideInstructions = this.hideInstructions.bind(this);
    }
    hideInstructions() {
      if (this.props.hideAction) this.props.hideAction();
      this.setState({
        'show': false
      });
    }
    render() {
      const {
        texts
      } = this.props;
      const cls = `beyond-element-instruction ${this.state.show ? 'show' : 'hide'}`;
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("div", {
        className: "content"
      }, /*#__PURE__*/React.createElement("span", {
        className: "main-text"
      }, texts.title), /*#__PURE__*/React.createElement("span", {
        className: "detail"
      }, texts.detail), /*#__PURE__*/React.createElement(BeyondButton, {
        className: "instruction-button",
        onClick: this.hideInstructions
      }, texts.buttonText)));
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondInstruction = BeyondInstruction;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/instruction', '.beyond-element-instruction{width:100%;padding:30px;background:var(--beyond-background-color);font-size:1.1em;opacity:0;transition:all .4s ease;z-index:1;text-align:right;-webkit-box-shadow:0 2px 6px -1px rgba(0,0,0,.4);box-shadow:0 2px 6px -1px rgba(0,0,0,.4);margin-bottom:1px}.beyond-element-instruction.show{opacity:1;transform:none}.beyond-element-instruction.hide{display:none}.beyond-element-instruction .content{text-align:left;max-width:600px;margin:auto;width:100%}.beyond-element-instruction .content .main-text{font-size:20px;font-weight:700;color:var(--beyond-text-color);text-transform:uppercase;text-align:left;letter-spacing:.15px}.beyond-element-instruction .content .detail{color:var(--beyond-text-color);font-weight:400;display:block;font-size:16px;text-align:left;letter-spacing:.5px}.beyond-element-instruction .content .instruction-button{color:var(--beyond-text-color);font-size:10px;box-shadow:none;border-radius:0;border:none;border-bottom:var(--beyond-text-color) 2px solid;padding-left:2px;padding-right:0;background:0 0;font-weight:700;letter-spacing:5px;margin-left:auto;margin-top:15px;text-align:right;width:auto;display:block;min-width:fit-content}');
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