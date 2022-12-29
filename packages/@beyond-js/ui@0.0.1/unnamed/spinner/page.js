define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
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
    BeyondSpinner
  } = dependency_3;
  const {
    BeyondImport
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/spinner/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/spinner', dependency_3], ['@beyond-js/ui/import', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  control.jsx
  **********/

  class Control extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("main", {
        className: "beyond-ui-spinner-page",
        ref: "main"
      }, /*#__PURE__*/React.createElement("h2", null, "Spinner"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondSpinner",
        route: "/libraries/beyond-ui/spinner.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondSpinner fetching={true}/>'), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "The fetching parameter indicates when the spinner should be active or not: "), /*#__PURE__*/React.createElement("h4", null, "Ejemplos:"), /*#__PURE__*/React.createElement("div", {
        className: "spinners-container"
      }, /*#__PURE__*/React.createElement(BeyondSpinner, {
        className: "primary",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        className: "secondary",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        className: "accent",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        color: "yellow",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        color: "green",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        color: "white",
        fetching: true
      }), /*#__PURE__*/React.createElement(BeyondSpinner, {
        size: "50px",
        fetching: true
      })), /*#__PURE__*/React.createElement("h3", null, "Propiedades"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "color"), " Permite definir un color, el cual puede ser pasado en formato CSS."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "size"), " Permite especificar un tama\xF1o especifico para el spinner"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "fetching"), " Es la propiedad que activa el spinner, sino se pasa el spinner no es visible, por defecto es false"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "className"), " clase css a aplicar, si se pasa \"primary\", \"secondary\" o \"accent\" el spinner aplicara estilos asociados al template de manera autom\xE1tica.")), /*#__PURE__*/React.createElement("blockqoute", null, "Este componente puede recibir cualquier atributo html adicional."));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    const wrapper = document.createElement('span');
    const specs = {};
    ReactDOM.render(React.createElement(Control, specs), wrapper);
    this.container.id = 'beyond-ui-element-spinner-page';
    this.container.appendChild(wrapper);
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/spinner/page', '.beyond-ui-spinner-page .spinners-container{padding:30px;display:flex;gap:15px;align-items:center;justify-content:center}');
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