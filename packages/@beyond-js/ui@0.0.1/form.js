define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/ripple"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondCheckbox = _exports.BeyondButton = void 0;
  _exports.BeyondForm = BeyondForm;
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondTextarea = _exports.BeyondSwitch = _exports.BeyondRadioContainer = _exports.BeyondRadio = _exports.BeyondInput = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondRipple
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/form"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/ripple', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  /*********
  button.jsx
  *********/

  class BeyondButton extends React.Component {
    constructor(props) {
      super(props);
      this.ripple = React.createRef();
      this._ripple = new BeyondRipple();
    }
    async componentDidMount() {
      // this._ripple.init(this.ripple.current);

      if (!this.props.title) return;
      // this.title = await bimport('tippy');
      // this.title(this.ripple.current);
    }

    async onClick(event, callback) {
      if (callback) {
        callback(event);
        return;
      }
      if (this.props.navigate) {
        beyond.navigate(this.props.navigate);
      }
    }
    render() {
      const {
        className,
        onClick,
        data,
        label,
        children
      } = this.props;
      const props = {
        ...this.props,
        className: !!className ? `${className} beyond-button` : 'beyond-button',
        type: !!this.props.type ? this.props.type : 'button'
      };
      if (data) {
        let properties = Object.keys(data);
        properties.map(entry => props[`data-${entry}`] = data[entry]);
      }
      if (this.props.disabled) props.disabled = true;
      this.props.title ? props['data-tippy-content'] = this.props.title : null;
      return /*#__PURE__*/React.createElement("button", _extends({
        ref: this.ripple
      }, props, {
        onClick: event => this.onClick(event, onClick)
      }), label, children);
    }
  }

  /***********
  checkbox.jsx
  ***********/
  _exports.BeyondButton = BeyondButton;
  class BeyondCheckbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: this.props.checked ? this.props.checked : false
      };
      this.onChange = this.onChange.bind(this);
      this.checkbox = React.createRef();
    }
    onChange(event) {
      let newValue = !this.state.checked;
      this.checkbox.current.checked = newValue;
      this.setState({
        checked: newValue
      });
      let data = {
        name: this.props.name,
        value: this.props.value,
        checked: newValue
      };
      if (this.props.onChange) this.props.onChange({
        target: data,
        currentTarget: data
      });
    }
    render() {
      const {
        className,
        label
      } = this.props;
      let cls = `beyond-checkbox ${className ? className : ''}`;
      cls = this.state.checked ? `${cls} beyond-checkbox-checked` : cls;
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        ref: this.checkbox,
        onChange: this.onChange,
        name: this.props.name,
        value: this.props.value,
        checked: this.state.checked
      }), /*#__PURE__*/React.createElement("span", {
        className: "checkmark",
        onClick: this.onChange
      }), /*#__PURE__*/React.createElement("label", {
        onClick: this.onChange
      }, label));
    }
  }

  /*******
  form.jsx
  *******/
  _exports.BeyondCheckbox = BeyondCheckbox;
  function BeyondForm(props) {
    if (typeof props?.onSubmit !== 'function') {
      throw new Error('the onSubmit property is required');
    }
    const onSubmitFn = event => {
      console.log(500);
      props.onSubmit(event);
      event.preventDefault();
    };
    const attrs = Object.assign({}, {
      ...props
    });
    delete attrs.onSubmit;
    return /*#__PURE__*/React.createElement("form", _extends({}, attrs, {
      autoComplete: "off",
      onSubmit: onSubmitFn
    }), props.children);
  }

  /********
  input.jsx
  ********/

  class BeyondInput extends React.Component {
    constructor(props) {
      super(props);
      this.input = React.createRef();
      this.state = {
        value: this.props.value ? this.props.value : '',
        errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
        lengthMessage: 'Cantidad máxima: ',
        emptyMessage: 'Este campo es requerido'
      };
      this.clean = this.clean.bind(this);
      this.onInvalid = this.checkInvalid.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    clean() {
      this.setState({
        value: ''
      });
    }
    get selector() {
      return this.input.current;
    }
    handleChange(event) {
      if (!!this.props.onChange) this.props.onChange(event);
      this.setState({
        _hasError: false,
        value: event.target.value
      });
    }
    get value() {
      return this.state.value;
    }
    set value(value) {
      this.setState({
        value: value
      });
    }
    checkInvalid(event) {
      event.preventDefault();
      this.setState({
        _hasError: true
      });
    }
    componentDidMount() {
      this.input.current.addEventListener('invalid', this.onInvalid);
    }
    componentWillUnmount() {
      this.input.current.removeEventListener('invalid', this.onInvalid);
    }
    getError(hasError) {
      if (!this.state._hasError && !hasError) return;
      let errorMessage = this.state.emptyMessage;
      if (hasError || this.input.value !== '') {
        errorMessage = this.props.errorMessage ? this.props.errorMessage : this.state.errorMessage;
      }
      if (this.props.max && parseFloat(this.input.value) > parseInt(this.props.max)) {
        errorMessage = this.props.lengthMessage ? this.props.lengthMessage : this.state.lengthMessage + ` (max ${this.props.max})`;
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "beyond-element-input-error"
      }, errorMessage);
    }
    render() {
      const props = this.props;
      const error = this.getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = 'beyond-element-input ';
      cls += props.className ? props.className : '';
      cls += props.icon ? ' has-icon' : '';
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: this.input
      }, properties, {
        className: cls,
        onChange: this.handleChange,
        type: props.type ? props.type : 'text',
        value: typeof props.value !== 'undefined' ? props.value : this.state.value,
        placeholder: props.placeholder
      })), this.props.children, error, this.props.label && /*#__PURE__*/React.createElement("label", {
        onClick: () => {
          this.input.current.focus();
        }
      }, this.props.label, this.props.required && /*#__PURE__*/React.createElement("span", {
        className: "beyond-input__required-label"
      }, "*")));
    }
  }

  /******************
  radio-container.jsx
  ******************/
  _exports.BeyondInput = BeyondInput;
  class BeyondRadioContainer extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "beyond-radio-container"
      });
    }
  }

  /********
  radio.jsx
  ********/
  _exports.BeyondRadioContainer = BeyondRadioContainer;
  class BeyondRadio extends React.Component {
    constructor(props) {
      super(props);
      this.input = React.createRef();
      this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
      this.input.current.checked = true;
      if (!!this.props.onChange) this.props.onChange(event);
    }
    render() {
      const props = this.props;
      let properties = {
        ...props
      };
      delete properties.onChange;
      let cls = `beyond-element-radio ${properties.className ? properties.className : ''}`;
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, /*#__PURE__*/React.createElement("input", _extends({
        ref: this.input
      }, properties, {
        type: "radio",
        onChange: this.onClick
      })), properties.label && /*#__PURE__*/React.createElement("label", {
        htmlFor: properties.id
      }, properties.label));
    }
  }

  /*********
  switch.jsx
  *********/
  _exports.BeyondRadio = BeyondRadio;
  const BeyondSwitch = React.forwardRef(({
    value,
    checked,
    required,
    name,
    disabled,
    className,
    onChange
  }, ref) => {
    const [state, setState] = React.useState({
      checked: !!checked
    });
    const handleChange = event => {
      setState({
        checked: !checked,
        value: !state.checked,
        _hasError: false
      });
      onChange && onChange(event);
    };
    const cls = `beyond-element-switch ${className ? className : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("label", {
      className: "switch"
    }, /*#__PURE__*/React.createElement("input", {
      ref: ref,
      type: "checkbox",
      required: required,
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement("span", {
      className: "slider"
    })));
  });
  /***********
  textarea.jsx
  ***********/
  _exports.BeyondSwitch = BeyondSwitch;
  class BeyondTextarea extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        'value': this.props.value
      };
    }
    handleChange(event) {
      if (!!this.props.onChange) this.props.onChange(event);
      this.setState({
        'value': event.target.value
      });
    }
    render() {
      const props = this.props;
      let cls = 'beyond-element-textarea ';
      cls += props.className ? props.className : '';
      return /*#__PURE__*/React.createElement("div", {
        className: cls
      }, this.props.label && /*#__PURE__*/React.createElement("label", null, this.props.label), /*#__PURE__*/React.createElement("textarea", {
        ref: this.props.textareaRef,
        required: props.required,
        autoFocus: this.props.autoFocus,
        name: props.name,
        rows: props.rows,
        value: typeof props.value !== 'undefined' ? props.value : this.state.value,
        disabled: props.disabled,
        pattern: props.pattern,
        onChange: this.handleChange,
        onFocus: this.props.onFocus,
        placeholder: props.placeholder ? props.placeholder : props.name
      }), this.props.error && /*#__PURE__*/React.createElement("span", {
        className: "error"
      }, this.props.error), this.props.children);
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondTextarea = BeyondTextarea;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/form', '@import url(https://fonts.googleapis.com/css?family=Roboto);.beyond-button{outline:0;display:flex;align-items:center;justify-content:center;border:1px solid var(--gray-light)}.beyond-button:active,.beyond-button:focus,.beyond-button:hover{outline:0}.beyond-button.has-icon .beyond-button.left-icon,.beyond-button.icon-left,.beyond-button.icon-right,.beyond-button.right-icon{justify-content:space-between}.beyond-button.secondary{background:var(--secondary);color:var(--text-on-secondary);border:1px solid var(--secondary-dark);transition:all .3s ease-in-out}.beyond-button.secondary .beyond-icon,.beyond-button.secondary svg{fill:var(--text-on-secondary)}.beyond-button.secondary:hover{background:var(--secondary-dark);transition:all .3s ease-in}.beyond-button:disabled{opacity:.7}.beyond-button.primary{background:var(--primary);color:var(--text-on-primary);border:1px solid var(--primary-dark);transition:all .3s ease-in-out}.beyond-button.primary .beyond-icon,.beyond-button.primary svg{fill:var(--text-on-primary)}.beyond-button.primary:hover{background:var(--primary-dark);transition:all .3s ease-in}.beyond-checkbox.checkbox-btn{border:1px solid #a2000a;color:#a2000a;display:inline-grid;width:auto;padding:8px;border-radius:15px;transition:all ease-in 150ms}.beyond-checkbox.checkbox-btn .checkmark{display:none}.beyond-checkbox.checkbox-btn.beyond-checkbox-checked{background:#a2000a;color:#e36152}.beyond-checkbox{display:inline-flex;flex-direction:row;align-items:center;cursor:pointer}.beyond-checkbox.left{flex-direction:row}.beyond-checkbox.left .checkmark{margin-right:5px}.beyond-checkbox.right{flex-direction:row-reverse}.beyond-checkbox.right .checkmark{margin-left:5px}.beyond-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.beyond-checkbox .checkmark{position:relative;height:12px;width:12px;margin:5px;background-color:var(--beyond-border-color);border:var(--beyond-border-color) 2px solid;border-radius:50%}.beyond-checkbox input:checked~.checkmark{background-color:var(--beyond-primary-color);border:var(--beyond-border-color) 2px solid}.beyond-checkbox label{width:100%;display:inline-flex;margin:0 5px!important}.beyond-element-input .beyond-element-input-error{position:absolute;display:block;font-size:.8em;padding:5px 15px;bottom:-30px;color:var(--beyond-color-error)}.beyond-element-input.has-icon{display:flex;flex-wrap:nowrap;align-items:stretch}.beyond-element-input.has-icon .beyond-icon-button{width:50px;height:auto}.beyond-element-input.has-icon .beyond-icon-button,.beyond-element-input.has-icon .beyond-icon-button .beyond-ripple{border-radius:0}.beyond-element-group .beyond-element-input{width:100%}.beyond-element-input{position:relative;background:0 0;display:grid;outline:0;margin:10px 0;border-radius:0}.beyond-element-input.icon-right,.beyond-element-input.right-icon{grid-template-columns:1fr auto;align-items:center}.beyond-element-input.icon-left,.beyond-element-input.left-icon{grid-template-columns:auto 1fr}.beyond-element-input label{position:absolute;top:0;display:inline-block;transition:.4s;left:.4rem;font-size:.75rem;color:var(--text-color);cursor:text}.beyond-element-input input{border-radius:0;width:100%;border:0;border-bottom:2px solid #333;outline:0;padding:10px 0;margin:10px 0 0;background:0 0;transition:border-color .2s;cursor:pointer}.beyond-element-input input::placeholder{color:transparent}.beyond-element-input input:invalid,.beyond-element-input input:required{box-shadow:none}.beyond-element-input input:focus-within~label{position:absolute;top:0;display:block;transition:.4s;font-size:.7rem;color:var(--beyond-label-focus-color,var(--secondary-text-color))}.beyond-element-input .beyond-element-input-error{color:#d2281e;position:absolute;bottom:-25px}@keyframes ripple{0%{box-shadow:0 0 0 1px transparent}50%{box-shadow:0 0 0 12px rgba(0,0,0,.1)}100%{box-shadow:0 0 0 12px transparent}}.beyond-element-radio{margin:16px 0}.beyond-element-radio *,.beyond-element-radio :after,.beyond-element-radio :before{box-sizing:border-box}.beyond-element-radio.--inline{display:inline-block}.beyond-element-radio input[type=radio]:checked+label:before{border-color:var(--beyond-primary-accent-color);animation:ripple .2s linear forwards;display:block}.beyond-element-radio input[type=radio]:checked+label:after{transform:scale(1);display:block}.beyond-element-radio label{display:inline-block;min-height:15px;position:relative;padding:0 25px;margin-bottom:0;font-size:17px;cursor:pointer;vertical-align:bottom}.beyond-element-radio label:after,.beyond-element-radio label:before{position:absolute;content:"";border-radius:50%;transition:all .3s ease;transition-property:transform,border-color}.beyond-element-radio label:before{left:0;top:0;width:15px;height:15px;border:2px solid #fff;display:block}.beyond-element-radio label:after{top:4.5px;left:4.5px;width:6px;height:6px;transform:scale(0);background:#121f36;display:block!important}.beyond-element-switch{display:flex}.beyond-element-switch .switch{position:relative;display:inline-flex;width:40px;height:16px}.beyond-element-switch .switch input{opacity:0;width:0;height:0}.beyond-element-switch .switch input:focus+.slider{box-shadow:0 0 1px #2196f3}.beyond-element-switch .switch input:checked+.slider{background-color:var(--beyond-secondary-color);border-color:var(--beyond-secondary-color)}.beyond-element-switch .switch input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.beyond-element-switch .switch input:focus+.slider{box-shadow:0 0 1px var(--beyond-secondary-color)}.beyond-element-switch .switch .slider{position:absolute;top:0;left:0;bottom:0;right:0;cursor:pointer;background-color:var(--beyond-gray-light-color);border:1px solid var(--beyond-gray-light-color);-webkit-transition:.4s;transition:.4s;border-radius:34px;box-sizing:border-box}.beyond-element-switch .switch .slider:before{position:absolute;top:1px;left:1px;bottom:0;right:0;content:"";height:12px;width:12px;background-color:var(--beyond-text-color);-webkit-transition:.4s;transition:.4s;border-radius:50%}.beyond-element-switch.round .slider{border-radius:34px}.beyond-element-switch.round .slider:before{border-radius:50%}.beyond-element-textarea{position:relative;display:block;min-width:300px;min-height:80px;grid-row-gap:0;border:var(--beyond-border-color);margin-bottom:10px}.beyond-element-textarea textarea{width:100%;border-radius:30px;background:var(--beyond-background-color);border:var(--beyond-border-color);padding:15px;color:var(--beyond-secondary-contrast-color);height:80px;border:1px solid var(--beyond-gray-lighter-color);resize:vertical;letter-spacing:.21px;font-weight:400;font-size:14px;text-align:left}.beyond-element-textarea label{padding-left:15px;color:var(--beyond-primary-accent-color);font-size:11px;font-weight:400;letter-spacing:.17px}.beyond-element-textarea ::placeholder{font-size:14px;font-weight:400;letter-spacing:.21px;color:var(--beyond-gray-light-color)}undefined .beyond-button{padding:8px 20px;font-size:.75rem;border-radius:var(--border-radius-base);display:flex;align-items:center;text-transform:uppercase;color:#ff0}.beyond-element-input input{border-bottom:1px solid var(--element-border-color)}.beyond-element-input .beyond-element-input-error{color:var(--error);padding:0}.beyond-element-switch .switch input:focus+.slider{box-shadow:0 0 1px var(--beyond-primary-color)}.beyond-element-switch .switch input:checked+.slider{background-color:var(--beyond-primary-color)}');
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