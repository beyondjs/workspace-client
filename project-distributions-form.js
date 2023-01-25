define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/dashboard@1.0.2/core-components", "@beyond-js/dashboard@1.0.2/ds-select", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/spinner", "react-select@5.4.0", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AdvanceFields = AdvanceFields;
  _exports.AdvancedFieldsSection = AdvancedFieldsSection;
  _exports.BackendSettings = BackendSettings;
  _exports.DistributionForm = DistributionForm;
  _exports.DistributionModalAlert = DistributionModalAlert;
  _exports.DistributionPorts = DistributionPorts;
  _exports.FormActions = FormActions;
  _exports.MainDistributionFields = MainDistributionFields;
  _exports.PortField = PortField;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    Dashboard,
    Applications,
    ApplicationDistribution
  } = dependency_3;
  const {
    IconInfo,
    DSIcon,
    DSIconButton,
    useForm,
    BeyondAlert
  } = dependency_4;
  const {
    DSSelect
  } = dependency_5;
  const {
    BeyondModal
  } = dependency_6;
  const {
    BeyondButton,
    BeyondSwitch,
    BeyondInput,
    BeyondForm,
    BeyondCheckbox
  } = dependency_7;
  const {
    BeyondSpinner
  } = dependency_8;
  const Select = dependency_9.default;
  const {
    BeyondScrollContainer
  } = dependency_10;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/project-distributions-form"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/dashboard/core-components', dependency_4], ['@beyond-js/dashboard/ds-select', dependency_5], ['@beyond-js/ui/modal', dependency_6], ['@beyond-js/ui/form', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['react-select', dependency_9], ['@beyond-js/ui/perfect-scrollbar', dependency_10]]);
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
  /*************************
  advanced-fields\fields.jsx
  *************************/

  const options = [{
    value: "sjs",
    label: "sjs"
  }, {
    value: "amd",
    label: "amd"
  }, {
    value: "cjs",
    label: "cjs"
  }, {
    value: "esm",
    label: "esm"
  }];
  function AdvanceFields() {
    const {
      formValues: {
        html,
        css,
        js,
        mode
      },
      checkSwitch,
      handleChange,
      texts: {
        props: {
          bundler: {
            label,
            tooltip
          },
          compress
        }
      }
    } = useDistributionsFormContext();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "item item__select input__info__container select__container"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      placeholder: label,
      name: "mode",
      options: options,
      value: mode,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: tooltip
    })), /*#__PURE__*/React.createElement("div", {
      className: "switch-item-group"
    }, /*#__PURE__*/React.createElement("header", null, compress), /*#__PURE__*/React.createElement("div", {
      className: "elements ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, " HTML ", /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "html",
      value: html,
      onChange: checkSwitch
    })), /*#__PURE__*/React.createElement("label", null, "CSS ", /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "css",
      value: css,
      onChange: checkSwitch
    })), /*#__PURE__*/React.createElement("label", null, "JS ", /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "js",
      value: js,
      onChange: checkSwitch
    })))));
  }

  /************************
  advanced-fields\index.jsx
  ************************/

  function AdvancedFieldsSection() {
    const {
      texts
    } = useDistributionsFormContext();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "form__separator__legend"
    }, texts.props.advancedSettings), /*#__PURE__*/React.createElement(AdvanceFields, null));
  }

  /*****************
  backend-fields.jsx
  *****************/

  function BackendSettings() {
    const {
      texts: {
        props: texts
      },
      handleChange,
      platform,
      application,
      formValues: {
        ssr,
        backend
      }
    } = useDistributionsFormContext();
    if (!['web'].includes(platform)) return null;
    const {
      deployment: {
        distributions
      }
    } = application;
    const ssrOptions = [];
    const backendOptions = [];
    distributions.forEach(distribution => {
      if (distribution.platform === 'backend') {
        backendOptions.push({
          value: distribution.name,
          label: distribution.name
        });
        return;
      }
      if (distribution.platform === 'ssr') {
        ssrOptions.push({
          value: distribution.name,
          label: distribution.name
        });
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "input-group-distributions"
    }, !!ssrOptions.length && /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      label: texts.ssr,
      value: ssr,
      name: "ssr",
      options: ssrOptions,
      onChange: handleChange
    })), !!backendOptions.length && /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      value: backend,
      label: texts.backend,
      name: "backend",
      options: backendOptions,
      onChange: handleChange
    })));
  }

  /***************
  form-actions.jsx
  ***************/

  /*bundle*/function FormActions() {
    const {
      onSubmit,
      texts: {
        actions
      },
      formValues,
      fetching
    } = useDistributionsFormContext();
    const {
      name,
      platform
    } = formValues;
    const disabled = {};
    const formValid = name && platform;
    if (!formValid) disabled.disabled = true;
    return /*#__PURE__*/React.createElement("footer", {
      className: "ds-modal__footer"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, disabled, {
      onClick: onSubmit,
      className: "btn primary beyond-button waves-effect",
      type: "button"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary",
      fetching: true
    }) : actions.add));
  }

  /********
  index.jsx
  ********/

  const DistributionsFormContext = React.createContext();
  const useDistributionsFormContext = () => React.useContext(DistributionsFormContext);
  /*bundle*/function DistributionForm({
    showModal,
    application,
    texts,
    distribution
  }) {
    const [ready, setReady] = React.useState(true);
    const [fetching, setFetching] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [formValues, handleChange] = useForm({
      state: distribution.values
    });
    const {
      platform
    } = formValues;
    if (!ready) return null;
    const close = () => showModal(false);
    const onSubmit = async () => {
      setFetching(true);
      setError(undefined);
      let data = {
        ...formValues
      };
      const response = await application.deployment.addDistribution(data);
      setFetching(false);
      if (response?.error) {
        setError(response.error);
        return;
      }
      showModal(false);
    };
    const checkSwitch = event => {
      const target = event.currentTarget;
      handleChange({
        target: {
          name: target.name,
          value: target.checked
        }
      });
    };
    const value = {
      texts,
      distribution,
      platform,
      setFetching,
      formValues,
      fetching,
      handleChange,
      onSubmit,
      application,
      error,
      checkSwitch
    };
    const {
      title,
      header
    } = texts.modal;
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: close,
      className: "ds-modal distributions-modal"
    }, /*#__PURE__*/React.createElement(DistributionsFormContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("main", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, header))), /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit,
      className: "right__panel right__panel--actions"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(DistributionModalAlert, null), /*#__PURE__*/React.createElement(MainDistributionFields, null), /*#__PURE__*/React.createElement(BackendSettings, null), /*#__PURE__*/React.createElement(DistributionPorts, null), /*#__PURE__*/React.createElement(AdvancedFieldsSection, null)), /*#__PURE__*/React.createElement(FormActions, null))))));
  }

  /**************
  main-fields.jsx
  **************/

  function MainDistributionFields() {
    const {
      texts,
      formValues: {
        name,
        platform,
        environment,
        newDistribution
      },
      handleChange
    } = useDistributionsFormContext();
    const options = [{
      value: 'android',
      label: texts.platforms.android
    }, {
      value: 'ios',
      label: texts.platforms.ios
    }, {
      value: 'web',
      label: texts.platforms.web
    }, {
      value: 'backend',
      label: texts.platforms.backend
    }, {
      value: 'ssr',
      label: texts.platforms.ssr
    }, {
      value: 'node',
      label: texts.platforms.node
    }];
    const environments = [{
      value: 'development',
      label: texts.props.environment.development
    }, {
      value: 'production',
      label: texts.props.environment.production
    }];
    return /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("h4", null, texts.modal.formHeader), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      name: "name",
      label: texts.props.name.label,
      placeholder: texts.props.name.label,
      required: true,
      value: name,
      onChange: handleChange,
      disabled: !newDistribution
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.props.name.tooltip
    }))), /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item item__select input__info__container select__container"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      label: texts.props.platform.label,
      placeholder: "Select...",
      name: "platform",
      options: options,
      value: platform,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.props.platform.tooltip
    })), /*#__PURE__*/React.createElement("div", {
      className: "item item__select input__info__container select__container"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      label: texts.props.environment.label,
      placeholder: "Select...",
      name: "environment",
      options: environments,
      value: environment,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.props.environment.tooltip
    }))));
  }

  /***********
  messages.jsx
  ***********/

  function DistributionModalAlert() {
    const {
      error,
      texts
    } = useDistributionsFormContext();
    if (!error) return null;
    return /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "error"
    }, " ", texts.errors[error], " ");
  }

  /**************
  ports\index.jsx
  **************/

  function DistributionPorts() {
    const {
      texts: {
        props: {
          ports
        }
      },
      platform
    } = useDistributionsFormContext();
    const [isValid, setIsValid] = React.useState(false);
    return /*#__PURE__*/React.createElement("fieldset", null, /*#__PURE__*/React.createElement("div", {
      className: "form__separator__legend"
    }, ports.title), /*#__PURE__*/React.createElement("div", {
      className: "flex-container flex-items-grow"
    }, /*#__PURE__*/React.createElement(PortField, {
      name: "bundles"
    }), ['ssr', 'backend'].includes(platform) && /*#__PURE__*/React.createElement(PortField, {
      name: "http"
    }), ['ssr', 'backend', 'node'].includes(platform) && /*#__PURE__*/React.createElement(PortField, {
      name: "inspect"
    })));
  }

  /*******************
  ports\port-field.jsx
  *******************/

  function PortField({
    name
  }) {
    const [isValid, setIsValid] = React.useState();
    const {
      texts: {
        props: {
          ports
        }
      },
      handleChange,
      formValues,
      setFetching,
      distribution
    } = useDistributionsFormContext();
    const value = formValues?.ports[name] ?? '';
    const cls = `fade-in ${isValid ? 'form__text__feed form__text-success' : 'form__text-error'}`;
    let message;
    if (isValid !== undefined) {
      message = isValid ? ports.success : ports.error;
    }
    const onBlurPort = async event => {
      if (!value) return;
      setFetching(true);
      const isValid = await Dashboard.checkPort(value);
      setIsValid(isValid);
      setFetching(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "port input__info__container input__feedback__msg"
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      onBlur: onBlurPort,
      name: `ports.${name}`,
      label: ports[name].label,
      type: "number",
      value: value,
      placeholder: ports[name].label,
      min: "1",
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: ports[name].tooltip
    }), value && /*#__PURE__*/React.createElement("span", {
      className: cls
    }, message));
  }

  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-distributions-form', '.distributions-modal{color:var(--text-color)}');
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