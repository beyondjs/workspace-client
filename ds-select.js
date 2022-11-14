define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon", "react-select@5.4.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DSSelect = DSSelect;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondIcon
  } = dependency_3;
  const Select = dependency_4.default;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/ds-select"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3], ['react-select', dependency_4]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*********
  select.jsx
  *********/

  function DSSelect({
    label,
    placeholder,
    options,
    name,
    value,
    onChange
  }) {
    const styles = {
      border: 0
    };
    const currentValue = options.filter(option => option.value === value);
    /**
     * the function is overwritten to pass the name property which is
     * requested by the useForm hook and it's not passed by the react-select component
     * @param data
     */

    const onChangeListener = data => onChange({
      target: { ...data,
        name
      }
    });

    return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement(Select, {
      className: "ds-select",
      label: "Select...",
      styles: styles,
      placeholder: placeholder,
      classNamePrefix: "ds-select",
      name: name,
      options: options,
      onChange: onChangeListener,
      value: currentValue
    }));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/ds-select', '.form__select{padding:8px 12px;border-radius:1px;border:1px solid #dee2e6;position:relative;cursor:pointer}.form__select .beyond-icon{position:absolute;right:0;fill:var(--beyond-text-on-primary)}.form__select .form__select__options{position:absolute;left:0;right:0;margin-top:16px;display:none}.form__select .label{padding-right:40px}.form__select .label:first-letter{text-transform:uppercase}.form__select.opened .form__select__options{display:grid;background:var(--beyond-background-color);border:1px solid var(--beyond-secondary-dark-color);box-shadow:0 5px 5px -5px #333;z-index:10}.form__select.opened .form__select__options .option{padding:8px;color:var(--beyond-text-on-primary)}.form__select.opened .form__select__options .option:hover{background:var(--beyond-secondary-light-color)}.form__select.opened .form__select__options .option:not(:first-child){border-top:1px solid #dee2e6}');
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