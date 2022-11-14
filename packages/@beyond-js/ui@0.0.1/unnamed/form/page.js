define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/select", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
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
    BeyondInput,
    BeyondButton,
    BeyondTextarea,
    BeyondRadio,
    BeyondCheckbox,
    BeyondSwitch,
    BeyondForm
  } = dependency_3;
  const {
    BeyondIcon,
    BeyondIconButton
  } = dependency_4;
  const {
    BeyondSelect
  } = dependency_5;
  const {
    BeyondImport
  } = dependency_6;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/form/page"
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/form', dependency_3], ['@beyond-js/ui/icon', dependency_4], ['@beyond-js/ui/select', dependency_5], ['@beyond-js/ui/import', dependency_6]]);

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
    this.container.id = 'beyond-elements-form-page';
  }
  /**********
  buttons.jsx
  **********/


  function Buttons({
    fetching,
    texts
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Button"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondButton",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondButton type="submit" className="primary">${texts.loginIn}</BeyondButton>`), /*#__PURE__*/React.createElement(BeyondButton, {
      type: "submit",
      title: "button title",
      className: "primary",
      disabled: fetching
    }, texts.loginIn), /*#__PURE__*/React.createElement("pre", null, `<BeyondButton className="primary-outline">${texts.loginIn}</BeyondButton>`), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "primary-outline"
    }, texts.loginIn), /*#__PURE__*/React.createElement("pre", null, `<BeyondButton className="secondary">${texts.loginIn}</BeyondButton>`), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Others Examples: "), /*#__PURE__*/React.createElement("div", {
      className: "container-buttons"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary"
    }, texts.loginIn), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "secondary-outline"
    }, texts.loginIn), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "facebook"
    }, texts.loginIn), /*#__PURE__*/React.createElement(BeyondButton, null, "Texto", /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "user"
    })), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "icon-left"
    }, /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "user"
    }), "Texto")));
  }
  /*********
  checks.jsx
  *********/


  function Checks({
    fetching,
    texts
  }) {
    const handler = event => {};

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Checkbox"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondCheckbox",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondCheckBox/>`), /*#__PURE__*/React.createElement(BeyondCheckbox, {
      label: "Default"
    }), /*#__PURE__*/React.createElement(BeyondCheckbox, {
      label: "Left",
      className: "left"
    }), /*#__PURE__*/React.createElement(BeyondCheckbox, {
      label: "Right",
      className: "right"
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Checkbox Switch"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondSwitch",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondSwitch/>`), /*#__PURE__*/React.createElement(BeyondSwitch, null), /*#__PURE__*/React.createElement("hr", null));
  }
  /*********
  inputs.jsx
  *********/


  function Input({
    textarea,
    onTextarea,
    fetching,
    texts
  }) {
    const options = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 5', 'option 5', 'option 5', 'option 5', 'option 6'];
    const [textAreaValue, setTextAreaValue] = React.useState('ci');

    const onTextAreaChange = event => {
      setTextAreaValue(event.target.value);
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Inputs"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondInput",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondInput type="email" placeholder="Tu email" errorMessage={texts.errorMessage} name="email"/>`), /*#__PURE__*/React.createElement(BeyondInput, {
      type: "email",
      placeholder: "Tu email",
      label: "Tu email",
      className: "",
      disabled: fetching,
      errorMessage: texts.errorMessage,
      name: "email"
    }), /*#__PURE__*/React.createElement("h2", null, "textarea"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondTextarea",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondTextarea placeholder="Tu Descripción" disabled={fetching} errorMessage={texts.errorMessage} name="description" required/>`), /*#__PURE__*/React.createElement(BeyondTextarea, {
      placeholder: "Tu Descripci\xF3n",
      disabled: fetching,
      onChange: onTextarea,
      value: textarea,
      errorMessage: texts.errorMessage,
      name: "description",
      required: true
    }), /*#__PURE__*/React.createElement("hr", null));
  }
  /*********
  radios.jsx
  *********/


  function Radios({
    fetching,
    texts
  }) {
    const click = event => {
      const target = event.currentTarget;
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Radios"), /*#__PURE__*/React.createElement(BeyondImport, {
      name: "BeyondRadio",
      route: "/libraries/beyond-ui/form.js"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondRadio value="1" data-id="11" label="Si" name="test_radio"/>`), /*#__PURE__*/React.createElement("div", {
      className: "radio-btn-container"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      onClick: click
    }), " Radio Simple", /*#__PURE__*/React.createElement("div", {
      className: ""
    }, /*#__PURE__*/React.createElement("h3", null, "Radios en vertical (Por Defecto)"), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement(BeyondRadio, {
      value: "1",
      "data-id": "11",
      label: "Si",
      name: "test_radio"
    }), /*#__PURE__*/React.createElement(BeyondRadio, {
      value: "2",
      label: "No",
      name: "test_radio"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Radios en horizontal (Display: contents)"), /*#__PURE__*/React.createElement("span", {
      className: "text-muted"
    }, "Example: "), /*#__PURE__*/React.createElement("pre", null, `<BeyondRadio value="1" data-id="11" label="Si" name="test_radio"/>`), /*#__PURE__*/React.createElement(BeyondRadio, {
      className: "radio-horizontal",
      value: "1",
      "data-id": "11",
      label: "Si",
      name: "test_radio"
    }), /*#__PURE__*/React.createElement(BeyondRadio, {
      className: "radio-horizontal",
      value: "2",
      label: "No",
      name: "test_radio"
    }), /*#__PURE__*/React.createElement("hr", null))));
  }
  /*******
  view.jsx
  *******/


  class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'input': '',
        'textarea': ''
      };
      this.setTextArea = this.setTextArea.bind(this);
    }

    handleChange(e) {}

    onSubmit(e) {
      e.preventDefault();
    }

    setTextArea(event) {
      this.setState({
        textarea: event.target.value
      });
    }

    render() {
      let fetching = false;
      const texts = {
        'title': 'Bienvenido!',
        'loginIn': 'Ingresar',
        'register': '¿No posees cuenta ?',
        'recoverPass': '¿Olvidó su contraseña?',
        'information': '(*) La contraseña debe contener un mínimo de 6 caracteres y al menos una (1) mayúscula,' + 'una (1) minúscula y un valor numérico.',
        'errorMessage': 'Formato incorrecto'
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "form-container"
      }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, "Forms"), /*#__PURE__*/React.createElement("p", null, "En esta secci\xF3n de componentes los Forms comprenden aquellos para la interaccion entre usuario y las funcionalidades de tu web, botones, inputs, checkbox, entre otros, los cuales puedes integrar de manera sencilla ")), /*#__PURE__*/React.createElement(Input, {
        onTextarea: this.setTextArea,
        textarea: this.state.textarea,
        fetching: fetching,
        texts: texts
      }), /*#__PURE__*/React.createElement(Radios, {
        fetching: fetching,
        texts: texts
      }), /*#__PURE__*/React.createElement(Checks, {
        fetching: fetching,
        texts: texts
      }), /*#__PURE__*/React.createElement(Buttons, {
        fetching: fetching,
        texts: texts
      }));
    }

  }
  /**********
  SCSS STYLES
  **********/


  _exports.View = View;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/unnamed/form/page', '#beyond-elements-form-page{margin:auto;overflow:auto;color:#fff}#beyond-elements-form-page header p{color:#b7b7b6;width:80%}#beyond-elements-form-page .beyond-checkbox .checkmark{height:15px;width:22px}#beyond-elements-form-page .beyond-element-input input{border-bottom:1px solid #fff}#beyond-elements-form-page .form-container{overflow:auto;position:relative}#beyond-elements-form-page .beyond-element-radio label:before{top:4px;border:2px solid #fff}#beyond-elements-form-page .beyond-element-radio label:after{background:#e36152}#beyond-elements-form-page .beyond-element-textarea textarea{border-radius:10px;color:#000}#beyond-elements-form-page .beyond-element-textarea textarea::placeholder{color:gray}#beyond-elements-form-page .select-options{border:solid 2px #fff}#beyond-elements-form-page .select-options svg{fill:white}#beyond-elements-form-page .beyond-element-radio label:after{top:8px;left:4px;width:7px;height:7px}#beyond-elements-form-page .radio-horizontal{display:contents}#beyond-elements-form-page .beyond-element-input{margin-top:5px}#beyond-elements-form-page button{margin:auto}#beyond-elements-form-page .container-buttons{display:inline-flex}#beyond-elements-form-page .container-buttons button{margin-right:15px;height:55px}');
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