define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/dashboard@0.0.1/ds-select", "@beyond-js/ui@0.0.1/modal", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/texts-binder", "@beyond-js/ui@0.0.1/icon", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/ds-contexts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ActionLauncher = ActionLauncher;
  _exports.AdvanceFields = AdvanceFields;
  _exports.AdvancedFieldsSection = AdvancedFieldsSection;
  _exports.AppDistributions = void 0;
  _exports.BackendSettings = BackendSettings;
  _exports.DistributionModalAlert = DistributionModalAlert;
  _exports.DistributionPorts = DistributionPorts;
  _exports.MainDistributionFields = MainDistributionFields;
  _exports.ModalDistributions = ModalDistributions;
  _exports.ModalHeader = ModalHeader;
  _exports.PortField = PortField;
  _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    Dashboard,
    Applications,
    ApplicationDistribution
  } = dependency_3;
  const {
    BeyondSpinner
  } = dependency_4;
  const {
    BeyondButton,
    BeyondSwitch,
    BeyondInput,
    BeyondForm,
    BeyondCheckbox
  } = dependency_5;
  const {
    BeyondPreloadText
  } = dependency_6;
  const {
    DSSelect
  } = dependency_7;
  const {
    BeyondModal
  } = dependency_8;
  const {
    useBinder
  } = dependency_9;
  const {
    useTextsBinder
  } = dependency_10;
  const {
    BeyondIconButton
  } = dependency_11;
  const {
    IconInfo,
    DashboardIcon,
    DSIcon,
    DSIconButton,
    useForm,
    BeyondAlert,
    DashboardIconButton
  } = dependency_12;
  const {
    ConfigContext,
    useConfigContext,
    useDSWorkspaceContext
  } = dependency_13;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-distributions",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/ui/form', dependency_5], ['@beyond-js/ui/preload-text', dependency_6], ['@beyond-js/dashboard/ds-select', dependency_7], ['@beyond-js/ui/modal', dependency_8], ['@beyond-js/dashboard/hooks', dependency_9], ['@beyond-js/dashboard/texts-binder', dependency_10], ['@beyond-js/ui/icon', dependency_11], ['@beyond-js/dashboard/core-components', dependency_12], ['@beyond-js/dashboard/ds-contexts', dependency_13]]);

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
  /******************
  action-launcher.jsx
  ******************/


  /*bundle*/
  function ActionLauncher({
    distribution,
    texts
  }) {
    const [status, setStatus] = React.useState(distribution.launcher?.status);
    const [fetching, setFetching] = React.useState(distribution.launcher?.status === 'initialising'); // const {launcher} =

    const {
      launcher
    } = distribution;
    const icons = {
      stopped: 'play',
      running: 'stop',
      stopping: 'stop'
    };
    console.log(1, distribution);
    const action = launcher.status !== 'initialising' && icons[launcher.status];
    useBinder([launcher], () => setFetching(distribution.launcher.status));

    const stop = async event => {
      event.stopPropagation();
      return;
      if (launcher.status === 'stopped') return;
      setFetching(true);

      try {
        await launcher.stop();
        setFetching(false);
      } catch (e) {
        console.error(e);
      }
    };

    const onClick = async event => {
      event.stopPropagation(); // console.log(100, launcher);

      return;
      const action = launcher.status === 'stopped' ? 'start' : 'restart';
      setFetching(true);

      try {
        await launcher[action]();
        setFetching(false);
      } catch (e) {
        console.error(e);
      }
    };

    const attrs = {
      className: `circle bee--action action--${action}`,
      icon: action,
      title: 'Run',
      onClick: action === 'play' ? onClick : stop
    };

    if (fetching) {
      return /*#__PURE__*/React.createElement("button", {
        className: "beyond-icon-button circle button--fetching"
      }, /*#__PURE__*/React.createElement(BeyondSpinner, {
        active: true,
        className: "primary"
      }));
    }

    return /*#__PURE__*/React.createElement(DSIconButton, attrs);
  }
  /********
  index.jsx
  ********/


  const AppDistributions = ({
    application
  }) => {
    const [modal, showModal] = React.useState(false);
    const module = __pkg.bundle.module.specifier;
    const [textsReady, texts] = useTextsBinder(module);
    const [distribution, setDistribution] = React.useState(new ApplicationDistribution());
    if (!textsReady || !texts) return null;

    if (!application.deployment) {
      console.warn("the application  does not has distributions");
      return null;
    }

    const {
      deployment: {
        distributions
      }
    } = application;

    const handleClick = () => {
      const distribution = new ApplicationDistribution();
      setDistribution(distribution);
      showModal(!modal);
    };

    const output = [];
    distributions.forEach(dist => output.push( /*#__PURE__*/React.createElement(DistributionItem, {
      key: dist.id,
      setDistribution: setDistribution,
      showModal: showModal,
      item: dist,
      texts: texts
    })));
    return /*#__PURE__*/React.createElement("div", {
      className: "container-distributions"
    }, /*#__PURE__*/React.createElement(BeyondAlert, {
      className: "panel__alert",
      message: texts.callToAction
    }), /*#__PURE__*/React.createElement("div", {
      className: "header-distributions"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: handleClick,
      className: "btn primary beyond-button waves-effect"
    }, texts.actions.add)), /*#__PURE__*/React.createElement("ul", {
      className: "list-distributions"
    }, output), modal && /*#__PURE__*/React.createElement(ModalDistributions, {
      distribution: distribution,
      application: application,
      texts: texts,
      showModal: showModal
    }));
  };
  /*******
  item.jsx
  *******/


  _exports.AppDistributions = AppDistributions;

  const DistributionItem = ({
    item,
    texts: {
      props: texts
    },
    setDistribution,
    showModal
  }) => {
    const openDistribution = () => {
      setDistribution(item);
      showModal(true);
    };

    return /*#__PURE__*/React.createElement("li", {
      className: "item-distribution",
      onClick: openDistribution
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "item__title"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.platform.label, ": ", /*#__PURE__*/React.createElement("span", null, item.platform)), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.environment, ": ", /*#__PURE__*/React.createElement("span", null, item.environment)), item.ts && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ts, ": ", /*#__PURE__*/React.createElement("span", null, item.ts.compiler))), /*#__PURE__*/React.createElement("div", {
      className: "actions-container"
    }, item.default && /*#__PURE__*/React.createElement("span", {
      className: "badge"
    }, texts.default), item.ssr && /*#__PURE__*/React.createElement("span", {
      className: "badge"
    }, texts.ssr), /*#__PURE__*/React.createElement(ActionLauncher, {
      distribution: item,
      texts: {
        play: 'Play'
      }
    })));
  };
  /*******************************
  modal\advanced-fields\fields.jsx
  *******************************/


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
        bundler
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
      className: "switch-item-group"
    }, /*#__PURE__*/React.createElement("header", null, compress), /*#__PURE__*/React.createElement("div", {
      className: "elements"
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
    })))), /*#__PURE__*/React.createElement("div", {
      className: "item item__select input__info__container  select__container"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "platform"
    }, label), /*#__PURE__*/React.createElement(DSSelect, {
      label: "Select a bundler...",
      name: "mode",
      options: options,
      value: bundler,
      onSelect: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: tooltip
    })));
  }
  /******************************
  modal\advanced-fields\index.jsx
  ******************************/


  function AdvancedFieldsSection() {
    const {
      texts
    } = useDistributionsFormContext();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "form__separator__legend"
    }, texts.props.advancedSettings), /*#__PURE__*/React.createElement("div", {
      className: "input-group-distributions"
    }, /*#__PURE__*/React.createElement(AdvanceFields, null)));
  }
  /***********************
  modal\backend-fields.jsx
  ***********************/


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
    }, /*#__PURE__*/React.createElement("label", null, texts.ssr), /*#__PURE__*/React.createElement(DSSelect, {
      label: "Select...",
      value: ssr,
      name: "ssr",
      options: ssrOptions,
      onSelect: handleChange
    })), !!backendOptions.length && /*#__PURE__*/React.createElement("div", {
      className: "item"
    }, /*#__PURE__*/React.createElement("label", null, texts.backend), /*#__PURE__*/React.createElement(DSSelect, {
      value: backend,
      label: "Select...",
      name: "backend",
      options: backendOptions,
      onSelect: handleChange
    })));
  }
  /***************
  modal\header.jsx
  ***************/


  function ModalHeader() {
    const {
      texts: {
        modal: {
          title,
          header
        }
      }
    } = useDistributionsFormContext();
    return /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "section-header"
    }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("h5", {
      className: "primary-color"
    }, header)));
  }
  /**************
  modal\index.jsx
  **************/


  const DistributionsFormContext = React.createContext();

  const useDistributionsFormContext = () => React.useContext(DistributionsFormContext);

  function ModalDistributions({
    showModal,
    application,
    texts,
    distribution
  }) {
    const [ready, setReady] = React.useState(true);
    const [fetching, setFetching] = React.useState(false);
    const [error, setError] = React.useState(false);
    console.log(1, distribution);
    const [formValues, handleChange] = useForm({
      state: distribution.values
    });
    const {
      name,
      platform,
      environment
    } = formValues;
    if (!ready) return null;
    const disabled = {};
    const formValid = name && platform && environment;

    const close = () => showModal(false);

    const onSubmit = async () => {
      setFetching(true);
      setError(undefined);
      let data = { ...formValues
      };
      distribution.setValues(data);
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

    if (!formValid) disabled.disabled = true;
    const value = {
      texts: texts,
      distribution,
      platform,
      setFetching,
      formValues,
      handleChange,
      application,
      error,
      checkSwitch
    };
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: close,
      className: "md ds-modal distributions-modal"
    }, /*#__PURE__*/React.createElement(DistributionsFormContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement(ModalHeader, null), /*#__PURE__*/React.createElement(BeyondForm, {
      onSubmit: onSubmit
    }, /*#__PURE__*/React.createElement(DistributionModalAlert, null), /*#__PURE__*/React.createElement(MainDistributionFields, null), /*#__PURE__*/React.createElement(BackendSettings, null), /*#__PURE__*/React.createElement(DistributionPorts, null), /*#__PURE__*/React.createElement(AdvancedFieldsSection, null), /*#__PURE__*/React.createElement("div", {
      className: "ds-modal__actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, disabled, {
      onClick: onSubmit,
      className: "btn primary beyond-button waves-effect",
      type: "button"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary",
      fetching: true
    }) : texts.actions.add)))));
  }
  /********************
  modal\main-fields.jsx
  ********************/


  function MainDistributionFields() {
    const {
      texts,
      formValues: {
        name,
        platform
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "input-group-distributions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "item input__info__container"
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      name: "name",
      label: texts.props.name.label,
      placeholder: texts.props.name.label,
      required: true,
      value: name,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.props.name.tooltip
    })), /*#__PURE__*/React.createElement("div", {
      className: "item item__select input__info__container select__container"
    }, /*#__PURE__*/React.createElement("label", null, texts.props.platform.label), /*#__PURE__*/React.createElement(DSSelect, {
      label: "Select...",
      name: "platform",
      options: options,
      value: platform,
      onSelect: handleChange
    }), /*#__PURE__*/React.createElement(IconInfo, {
      msg: texts.props.platform.tooltip
    }))));
  }
  /*****************
  modal\messages.jsx
  *****************/


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
  /********************
  modal\ports\index.jsx
  ********************/


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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "form__separator__legend"
    }, ports.title), /*#__PURE__*/React.createElement("div", {
      className: "input-group-distributions three-columns"
    }, /*#__PURE__*/React.createElement(PortField, {
      name: "bundles"
    }), ['ssr', 'backend'].includes(platform) && /*#__PURE__*/React.createElement(PortField, {
      name: "http"
    }), ['ssr', 'backend', 'node'].includes(platform) && /*#__PURE__*/React.createElement(PortField, {
      name: "inspect"
    })));
  }
  /*************************
  modal\ports\port-field.jsx
  *************************/


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
      const isValid = await distribution.checkPort(value);
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


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-distributions.code', '.workspace__board .container-distributions .item-distribution{display:flex;justify-content:space-between;border-bottom:1px solid #fff;background-color:#0d121a;padding:2rem;margin-bottom:1rem}.workspace__board .container-distributions .item-distribution h2{text-transform:uppercase;margin:0;padding:0}.workspace__board .container-distributions .item-distribution h4{font-size:14px}.workspace__board .container-distributions .item-distribution span{padding-bottom:1rem;font-size:12px;margin-left:.5rem;color:var(--beyond-primary-color)}.workspace__board .container-distributions .item-distribution .left-box-distributions{display:flex;flex-direction:column;justify-content:center;text-transform:capitalize;margin-right:2rem;margin-top:1rem}.workspace__board .container-distributions .item-distribution .left-box-distributions span{margin-bottom:1rem;background-color:var(--beyond-secondary-dark-color);color:var(--beyond-text-on-primary);border-radius:.5rem;font-size:10px;padding:.5rem;border:1px solid var(--beyond-secondary-dark-color)}.workspace__board .container-distributions .item-distribution .left-box-distributions:nth-child(2){text-align:center}.workspace__board .container-distributions{margin-top:30px}.workspace__board .container-distributions .header-distributions{display:flex;justify-content:space-between}.workspace__board .container-distributions .header-distributions .beyond-button{width:7rem;height:3rem}.workspace__board .container-distributions .list-distributions{list-style-type:none;padding:0}.distributions-modal{background-color:rgba(0,0,0,.8)}.distributions-modal .modal-content form{padding:20px!important}.distributions-modal .form__separator__legend{border-bottom:1px solid var(--primary);font-size:1.1rem;padding:.5rem 0;margin:.5rem 0;display:flex;justify-content:space-between}.distributions-modal .switch-item-group{display:grid;padding:15px}.distributions-modal .switch-item-group .elements{display:flex;gap:2rem}.distributions-modal .switch-item-group label{display:inline-flex;gap:8px;align-items:center}.distributions-modal .item.item__select{padding-top:15px}.distributions-modal .item .selects-distributions{display:grid;grid-template-columns:repeat(2,1fr)}.distributions-modal .item .selects-distributions .distributions-select .form__select{width:95%}.distributions-modal .item .selects-distributions .distributions-select .form__select .form__select__options{background-color:var(--beyond-secondary-dark-color);z-index:100}.distributions-modal .item .selects-distributions .distributions-select .form__select .form__select__options .option{color:#fff}.distributions-modal .item .input-switch-distributions{display:flex;margin-top:15px;justify-content:start;gap:6rem}.distributions-modal .item .input-switch-distributions .switch-item{justify-self:center}.distributions-modal .div-botton-distributions{display:flex;justify-content:flex-end}.distributions-modal .div-botton-distributions .beyond-button{width:7rem}.distributions-modal .input-group-distributions{display:grid;grid-gap:1rem;grid-template-columns:repeat(2,1fr)}.distributions-modal .input-group-distributions.three-columns{grid-template-columns:repeat(3,1fr)}.distributions-modal .input-group-distributions .port .form__info{top:2.7rem!important;right:2.5rem!important}.distributions-modal .input-group-distributions .port .beyond-element-input{font-size:15px;width:98%}.distributions-modal .input-group-distributions .port .beyond-element-input input{appearance:none;-webkit-appearance:none}.distributions-modal .input-group-distributions .beyond-checkbox{flex-direction:column-reverse;align-items:flex-start;margin:auto}.distributions-modal .input-group-distributions .beyond-checkbox .checkmark{height:18px;width:18px}');
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