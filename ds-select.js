define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DSSelect = DSSelect;
  _exports.Options = Options;
  _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondIcon
  } = dependency_3;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /********
  items.jsx
  ********/

  function Options({
    items,
    toggle,
    setValue,
    name,
    callback
  }) {
    const map = new Map();

    const onSelect = event => {
      event.stopPropagation();
      event.preventDefault();
      toggle(false);
      const target = event.currentTarget;
      const ele = map.get(target.dataset.value);
      setValue(ele.label);
      ele.target = {
        name,
        value: ele.value
      };

      if (callback) {
        callback(ele);
      }
    };

    return items.map(item => {
      map.set(item.value, item);
      return /*#__PURE__*/React.createElement("div", {
        key: item.value,
        onClick: onSelect,
        "data-value": item.value,
        className: "option"
      }, item.label);
    });
  }
  /*********
  select.jsx
  *********/


  function DSSelect({
    options,
    value,
    name,
    label,
    onSelect
  }) {
    const [opened, toggle] = React.useState();
    const [labelText, setValue] = React.useState(value ? value : label);
    const icon = opened ? 'arrowDropUp' : 'arrowDropDown';

    const onClick = event => {
      event.preventDefault();
      toggle(!opened);
    };

    const onFocus = event => {
      toggle(!opened);
    };

    const cls = `form__select ${opened ? ' opened' : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      tabIndex: "0",
      className: cls,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "label"
    }, /*#__PURE__*/React.createElement("span", null, labelText), /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: icon
    })), /*#__PURE__*/React.createElement("div", {
      className: "form__select__options"
    }, /*#__PURE__*/React.createElement(Options, {
      callback: onSelect,
      name: name,
      setValue: setValue,
      toggle: toggle,
      items: options
    })));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/ds-select', '.form__select{padding:8px 12px;border-radius:1px;border:1px solid #dee2e6;position:relative;cursor:pointer}.form__select .beyond-icon{position:absolute;right:15px;fill:var(--beyond-text-on-primary)}.form__select .form__select__options{position:absolute;left:0;right:0;margin-top:16px;display:none}.form__select .label{padding-right:40px}.form__select .label:first-letter{text-transform:uppercase}.form__select.opened .form__select__options{display:grid;background:var(--beyond-background-color);border:1px solid var(--beyond-secondary-dark-color);box-shadow:0 5px 5px -5px #333;z-index:10}.form__select.opened .form__select__options .option{padding:8px;color:var(--beyond-text-on-primary)}.form__select.opened .form__select__options .option:hover{background:var(--beyond-secondary-light-color)}.form__select.opened .form__select__options .option:not(:first-child){border-top:1px solid #dee2e6}');
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