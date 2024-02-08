define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/workspace@1.1.1/hooks", "@beyond-js/workspace@1.1.1/ds-select", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/workspace@1.1.1/ds-editor.code", "@beyond-js/ui@0.0.1/form", "@beyond-js/workspace@1.1.1/ds-contexts", "@beyond-js/kernel@0.1.9/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ConfigBoard = ConfigBoard;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondModal
  } = dependency_3;
  const {
    BeyondSpinner
  } = dependency_4;
  const {
    useBinder
  } = dependency_5;
  const {
    DSSelect
  } = dependency_6;
  const {
    ReactiveModel
  } = dependency_7;
  const {
    monacoDependency
  } = dependency_8;
  const {
    BeyondButton,
    BeyondSwitch,
    BeyondInput,
    BeyondForm,
    BeyondCheckbox
  } = dependency_9;
  const {
    ConfigContext,
    useConfigContext,
    useDSWorkspaceContext
  } = dependency_10;
  const {
    CurrentTexts
  } = dependency_11;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["@beyond-js/events", "0.0.6"], ["dayjs", "1.11.10"], ["emmet-monaco-es", "5.3.0"], ["monaco-editor", "0.33.0"], ["pragmate-ui", "0.0.4"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["socket.io-parser", "4.2.1"], ["engine.io-parser", "5.0.7"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@popperjs/core", "2.11.8"], ["@types/react", "16.14.56"], ["@types/react-dom", "16.9.24"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/settings",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/workspace/hooks', dependency_5], ['@beyond-js/workspace/ds-select', dependency_6], ['@beyond-js/inspect/reactive-model', dependency_7], ['@beyond-js/workspace/ds-editor.code', dependency_8], ['@beyond-js/ui/form', dependency_9], ['@beyond-js/workspace/ds-contexts', dependency_10], ['@beyond-js/kernel/texts', dependency_11]]);
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
  config.jsx
  *********/

  function ConfigBoard({
    specs
  }) {
    const [state, setState] = React.useState({});
    const [controller, setController] = React.useState();
    const {
      fetching,
      update
    } = state;
    const current = ["general", "apps"].includes(specs.tab) ? specs.tab : 'general';
    const [active, setActive] = React.useState(current);
    const tabs = {
      general: EditorSettings
    };
    React.useEffect(() => {
      const controller = new Controller();
      setController(controller);
      setState(state => ({
        ...state,
        controller,
        update: performance.now()
      }));
      const onChange = () => setState({
        ...state,
        update: performance.now()
      });
      controller.bind('change', onChange);
      return () => controller.unbind('change', onChange);
    }, []);
    if (!update || !controller?.ready) return null;
    const {
      editorSettings,
      texts
    } = controller;
    const {
      unpublished
    } = editorSettings;
    const Control = tabs[active];
    return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
      value: {
        editorSettings,
        active,
        unpublished,
        texts,
        tabs,
        setActive
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "workspace__board"
    }, /*#__PURE__*/React.createElement(EditorSettings, null)));
  }

  /*********
  editor.jsx
  *********/

  function EditorSettings() {
    const {
      texts,
      editorSettings
    } = useConfigContext();
    const attrs = {};
    if (!editorSettings.unpublished) attrs.disabled = true;
    const [, setState] = React.useState({});
    const onSave = async event => {
      event.stopPropagation();
      event.preventDefault();
      await editorSettings.save();
      setState({});
    };
    const onChange = event => {
      event.stopPropagation();
      const target = event.currentTarget;
      try {
        editorSettings[target.name] = target.value;
      } catch (e) {
        console.warn('this is not a configuration property');
      }
    };
    return /*#__PURE__*/React.createElement("form", {
      className: "form",
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, texts.title, " ")), /*#__PURE__*/React.createElement(Theme, null), /*#__PURE__*/React.createElement("div", {
      className: "settings__item"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: ""
    }, texts.controls.fontSize.label), /*#__PURE__*/React.createElement("input", {
      type: "text",
      onChange: onChange,
      name: "fontSize",
      value: editorSettings.fontSize,
      placeholder: texts.controls.fontSize.placeholder
    })), /*#__PURE__*/React.createElement("div", {
      className: "settings-item"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: ""
    }, texts.controls.wordWrap.label), /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "wordWrap",
      value: editorSettings.wordWrap,
      onChange: onChange
    }))), editorSettings.unpublished && /*#__PURE__*/React.createElement("footer", {
      className: "settings__actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, attrs, {
      onClick: onSave,
      className: "btn primary"
    }), texts.actions.save)));
  }
  /********
  theme.jsx
  ********/

  function Theme() {
    const {
      editorSettings,
      texts: {
        controls
      }
    } = useConfigContext();
    const handleChange = ele => {
      editorSettings.theme = ele.value;
    };
    const options = [{
      value: 'vs-light',
      label: 'vs-light'
    }, {
      value: 'vs-dark',
      label: 'vs-dark'
    }, {
      value: 'vs-black',
      label: 'vs-black'
    }, {
      value: 'hc-black',
      label: 'hc-black'
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "form-column"
    }, /*#__PURE__*/React.createElement("label", null, controls.theme.label), /*#__PURE__*/React.createElement(DSSelect, {
      options: options,
      value: editorSettings.theme,
      onSelect: handleChange
    }));
  }

  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  class Controller extends ReactiveModel {
    get ready() {
      return this.#texts?.ready;
    }
    #editorSettings;
    get editorSettings() {
      return this.#editorSettings;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    constructor() {
      super();
      this.#editorSettings = monacoDependency.settings;
      this.#editorSettings.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
    }
    dispose() {
      this.#texts.unbind('change', this.triggerEvent);
    }
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/settings.code', 'undefined .workspace__board{--border-color:var(--beyond-gray-darker-color);--border-color-focus:var(--beyond-gray-dark-color);display:flex;flex-direction:column;justify-content:center}undefined .workspace__board label{padding:15px 0}undefined .workspace__board .settings__item{padding:15px 0;display:grid;gap:10px}undefined .workspace__board .settings__item input{background:0 0;border:1px solid var(--border-color);padding:8px;color:var(--beyond-text-on-primary);outline:0}undefined .workspace__board .settings__item input:hover{border-color:var(--border-color-focus)}undefined .workspace__board .form{align-self:normal}undefined .workspace__board .settings__actions{margin-top:15px;padding:15px 0;justify-content:flex-end;align-items:center;display:flex;border-top:1px solid var(--beyond-gray-light-color)}undefined .workspace__board .relative__container{position:relative}undefined .workspace__board .relative__container .beyond-element-spinner{position:absolute;right:15px;top:10px}.settings__tabs-list{list-style:none;display:flex;gap:8px;padding:0}.settings__tabs-list li{padding:8px 15px;text-transform:upper;border-radius:2px;cursor:pointer}.settings__tabs-list li.tab--active,.settings__tabs-list li:active{background:rgba(240,240,240,.4)}');
  legacyStyles.appendToDOM();
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});