define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.BeyondToolbar = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondSpinner
  } = dependency_3;
  const {
    BeyondIconButton
  } = dependency_4;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/toolbar"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/spinner', dependency_3], ['@beyond-js/ui/icon', dependency_4]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  children.jsx
  ***********/

  function Childs({
    children,
    spinner,
    actions,
    refresh,
    fetching
  }) {
    //0 or 1 child
    if (!children || children && !children.length) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, children, " ", /*#__PURE__*/React.createElement(BeyondSpinner, {
        fetching: fetching
      }));
    }

    let output = [];

    if (typeof children === 'object' && children.length) {
      children.map((item, index) => {
        if (spinner && parseInt(spinner) === index) {
          output.push( /*#__PURE__*/React.createElement(BeyondSpinner, {
            key: "spinner",
            fetching: fetching
          }));
        }

        if (refresh && parseInt(spinner) === index) {
          if (!actions) console.warn('the action object must be passed to implement refresh button');
          output.push( /*#__PURE__*/React.createElement(BeyondIconButton, {
            key: "refresh",
            icon: "refresh",
            onClick: actions.refresh
          }));
        }

        output.push(item);
      });
    }

    return output;
  }
  /**********
  toolbar.jsx
  **********/


  class BeyondToolbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'back': true
      };
      this.onBack = this.onBack.bind(this);
    }

    onBack() {
      if (!!this.props.backAction) this.props.backAction();else beyond.back();
    }

    render() {
      const {
        props
      } = this;
      const {
        fetching,
        children,
        actions,
        refresh
      } = props;
      const disabled = {};
      if (fetching) disabled.disabled = true;
      const back = props.back === false ? props.back : this.state.back;
      let className = 'beyond-element-toolbar';
      className += !!props.className ? ` ${props.className}` : '';
      className += back ? '' : ' no-back';
      const spinner = props.spinner ? props.spinner : 0;
      return /*#__PURE__*/React.createElement("nav", {
        className: `${className}`
      }, back && /*#__PURE__*/React.createElement(BeyondIconButton, {
        className: "beyond-back-button circle",
        onClick: this.onBack,
        icon: "backArrow"
      }), /*#__PURE__*/React.createElement(Childs, {
        children: children,
        spinner: spinner,
        actions: actions,
        refresh: refresh,
        fetching: fetching
      }));
    }

  }
  /**********
  SCSS STYLES
  **********/


  _exports.BeyondToolbar = BeyondToolbar;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/toolbar', '.beyond-element-toolbar{height:50px;padding:0 15px;background:#ff8056;display:grid;align-items:center;justify-content:left;grid-template-columns:45px 1fr 40px auto;grid-gap:1px;color:#fff;font-weight:500;letter-spacing:.24px;z-index:1}.beyond-element-toolbar.no-back{grid-template-columns:1fr 40px auto}.beyond-element-toolbar .beyond-icon-button{display:grid;justify-content:center;align-items:center}.beyond-element-toolbar button svg,.beyond-element-toolbar svg{display:inline-grid;justify-self:center;fill:#fff}.beyond-element-toolbar span{display:block;justify-self:left;white-space:nowrap;text-overflow:ellipsis;line-height:1;flex:1}');
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