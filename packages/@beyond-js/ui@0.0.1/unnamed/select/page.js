define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/select", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.MainComponent = void 0;
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondSelect
  } = dependency_3;
  const {
    BeyondImport
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
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/select/page"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/select', dependency_3], ['@beyond-js/ui/import', dependency_4]]);

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

    ReactDOM.render(React.createElement(MainComponent, {}), this.container);
    this.container.id = 'beyond-elements-select-page';
  }
  /**********
  control.jsx
  **********/


  class MainComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 5', 'option 5', 'option 5', 'option 5', 'option 6'];
      const options2 = [{
        'id': 5,
        'cedula': 1,
        'nombre': 'Pepito 1',
        'sexo': 'm',
        'age': 20
      }, {
        'id': 7,
        'cedula': 2,
        'nombre': 'Pepito 1',
        'sexo': 'm',
        'age': 31
      }, {
        'id': 8,
        'cedula': 3,
        'nombre': 'Pepito 1',
        'sexo': 'm',
        'age': 40
      }, {
        'id': 9,
        'cedula': 5,
        'nombre': 'Pepito 1',
        'sexo': 'm',
        'age': 55
      }, {
        'id': 10,
        'cedula': 4,
        'nombre': 'Pepito 1',
        'sexo': 'm',
        'age': 17
      }];
      return /*#__PURE__*/React.createElement("div", {
        className: "container-select"
      }, /*#__PURE__*/React.createElement("h2", null, "Select "), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondSelect",
        route: "/libraries/beyond-ui/select.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondSelect identifier="nombre" options={options} value={options[3]} pk=\'cedula\'></BeyondSelect>'), /*#__PURE__*/React.createElement(BeyondSelect, {
        identifier: "nombre",
        options: options2,
        value: options[3],
        pk: "cedula"
      }), /*#__PURE__*/React.createElement("h2", null, "Simple Select"), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<select name="carrera"> <option value="1">Informática</option><option value="2">Administración</option><option value="3">Comercio</option></select>'), /*#__PURE__*/React.createElement("select", {
        name: "carrera"
      }, /*#__PURE__*/React.createElement("option", {
        value: "1"
      }, "Inform\xE1tica"), /*#__PURE__*/React.createElement("option", {
        value: "2"
      }, "Administraci\xF3n"), /*#__PURE__*/React.createElement("option", {
        value: "3"
      }, "Comercio")));
    }

  }
  /**********
  SCSS STYLES
  **********/


  _exports.MainComponent = MainComponent;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/select/page', '#beyond-elements-select-page select{width:50%}#beyond-elements-select-page .select-options{border:solid 1px #fff}#beyond-elements-select-page .select-options svg{fill:white}');
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