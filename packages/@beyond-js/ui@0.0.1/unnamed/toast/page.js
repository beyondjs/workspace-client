define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/toast"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
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
    BeyondButton
  } = dependency_3;
  const {
    BeyondIconButton
  } = dependency_4;
  const {
    ToastContextProvider,
    ToastContext,
    useToastContext
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
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/toast/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/form', dependency_3], ['@beyond-js/ui/icon', dependency_4], ['@beyond-js/ui/toast', dependency_5]]);
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
    this.container.classList.add('beyond-ui-toast-page');
  }

  /***************
  button-class.jsx
  ***************/

  class Button extends React.Component {
    onClick() {
      this.context.add({
        message: 'toast info!',
        type: 'info'
      });
      this.context.add({
        message: 'toast error!',
        type: 'error'
      });
      this.context.add({
        message: 'toast success!',
        type: 'success'
      });
      this.context.add({
        message: 'toast warning!',
        type: 'warning'
      });
    }
    render() {
      return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("blockquote", null, "Prueba de toast utilizando", /*#__PURE__*/React.createElement("code", null, "React.context"), "en un componente de tipo clase"), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: this.onClick.bind(this)
      }, "Mostrar"));
    }
  }
  Button.contextType = ToastContext;
  /********
  hooks.jsx
  ********/

  const Hooks = () => {
    const {
      add
    } = useToastContext();
    const onClick = () => add({
      message: 'hook toast'
    });
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", null, "Implementaci\xF3n del context para uso de toast por medio de", /*#__PURE__*/React.createElement("code", null, "hooks")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: onClick
    }, " Crear toast"));
  };
  /*******
  view.jsx
  *******/

  const View = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, "Toast")), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement(ToastContextProvider, null, /*#__PURE__*/React.createElement(Button, null), /*#__PURE__*/React.createElement(Hooks, null)));
  };

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/toast/page', '.beyond-ui-toast-page{color:#fff}');
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