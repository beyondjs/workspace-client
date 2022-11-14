define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/dashboard@0.0.1/project-distributions-form", "@beyond-js/dashboard@0.0.1/ds-select", "@beyond-js/ui@0.0.1/form", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/texts-binder", "@beyond-js/ui@0.0.1/icon", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/ds-contexts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.ProjectDistributions = _exports.ActionLauncher = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    Applications,
    ApplicationDistribution
  } = dependency_3;
  const {
    BeyondSpinner
  } = dependency_4;
  const {
    BeyondPreloadText
  } = dependency_5;
  const {
    DistributionForm
  } = dependency_6;
  const {
    DSSelect
  } = dependency_7;
  const {
    BeyondButton,
    BeyondSwitch
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
    ProjectContext,
    useProjectContext,
    ConfigContext,
    useConfigContext,
    useDSWorkspaceContext
  } = dependency_13;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/ui/preload-text', dependency_5], ['@beyond-js/dashboard/project-distributions-form', dependency_6], ['@beyond-js/dashboard/ds-select', dependency_7], ['@beyond-js/ui/form', dependency_8], ['@beyond-js/dashboard/hooks', dependency_9], ['@beyond-js/dashboard/texts-binder', dependency_10], ['@beyond-js/ui/icon', dependency_11], ['@beyond-js/dashboard/core-components', dependency_12], ['@beyond-js/dashboard/ds-contexts', dependency_13]]);

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
  const ActionLauncher = ({
    distribution,
    texts
  }) => {
    if (["ios", "android"].includes(distribution.platform)) return null;
    const [status, setStatus] = React.useState(distribution.launcher?.status);
    const [fetching, setFetching] = React.useState(false);
    const {
      launcher
    } = distribution;
    const isWeb = ["web"].includes(distribution.platform);
    const action = launcher?.status === "running" ? "stop" : "start";
    useBinder([launcher], () => setStatus(distribution.launcher?.status));

    const onClick = async event => {
      const {
        action
      } = event.currentTarget.dataset;
      event.stopPropagation();

      if (isWeb) {
        const url = `http://localhost:${distribution.ports.bundles}`;
        window.open(url, "_blank");
        return;
      }

      try {
        setFetching(true);
        window.setTimeout(async () => {
          await launcher[action]();
          setFetching(false);
        }, 100);
      } catch (e) {
        console.error(e);
      }
    };

    const icon = action === "start" ? "play" : action;
    const attrs = {
      icon: icon,
      title: "Run",
      onClick: onClick
    };

    if (fetching || launcher?.status === "initialising") {
      return /*#__PURE__*/React.createElement("div", {
        className: "distribution__actions"
      }, /*#__PURE__*/React.createElement("button", {
        className: "beyond-icon-button circle button--fetching"
      }, /*#__PURE__*/React.createElement(BeyondSpinner, {
        active: true,
        className: "on-primary"
      })));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "distribution__actions"
    }, launcher?.status === "running" && /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "replay",
      onClick: onClick,
      "data-action": "restart"
    }), /*#__PURE__*/React.createElement(DSIconButton, _extends({}, attrs, {
      "data-action": action
    })));
  };
  /********
  index.jsx
  ********/


  _exports.ActionLauncher = ActionLauncher;

  const ProjectDistributions = ({
    application
  }) => {
    const module = __pkg.bundle.module.specifier;
    const {
      addDistribution,
      project
    } = useProjectContext();
    const [textsReady, texts] = useTextsBinder(module);
    const [distribution, setDistribution] = React.useState(project.distributionValues);
    const [modal, showModal] = React.useState(addDistribution);
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
      setDistribution(project.distributionValues);
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
    }, output), modal && /*#__PURE__*/React.createElement(DistributionForm, {
      distribution: distribution,
      application: application,
      texts: texts,
      showModal: showModal
    }));
  };
  /*******
  item.jsx
  *******/


  _exports.ProjectDistributions = ProjectDistributions;

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
      className: "ds-card",
      onClick: openDistribution
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "item__title"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.platform.label, ": ", /*#__PURE__*/React.createElement("span", null, item.platform)), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.environment.label, ": ", /*#__PURE__*/React.createElement("span", null, item.environment)), item.ts && /*#__PURE__*/React.createElement("div", {
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
  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-distributions.code', '.ds__panel .container-distributions .ds-card{display:flex;justify-content:space-between;background-color:var(--surface);padding:2rem;font-size:.875rem;position:relative}.ds__panel .container-distributions .ds-card h4{color:var(--text-color)}.ds__panel .container-distributions .ds-card .distribution__actions{position:absolute;bottom:1rem;right:1rem}.ds__panel .container-distributions .ds-card .distribution__actions .beyond-icon-button .beyond-icon{height:20px;width:20px;fill:var(--text-color)}.ds__panel .container-distributions{display:grid;grid-gap:1rem}.ds__panel .container-distributions .header-distributions{display:flex;justify-content:space-between;gap:1rem}.ds__panel .container-distributions .list-distributions{list-style-type:none;padding:0;margin-top:1rem;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem;color:var(--secondary-text-color)}.distributions-modal .input-group-distributions{display:grid;grid-gap:1rem;grid-template-columns:repeat(2,1fr)}.distributions-modal .input-group-distributions.three-columns{grid-template-columns:repeat(3,1fr)}.distributions-modal .input-group-distributions input[type=number]::-webkit-inner-spin-button,.distributions-modal .input-group-distributions input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.distributions-modal .input-group-distributions .port .form__info{right:.5rem!important}.distributions-modal .input-group-distributions .port .beyond-element-input{font-size:15px;width:98%}.distributions-modal .input-group-distributions .port .beyond-element-input input{appearance:none;-webkit-appearance:none}.distributions-modal .input-group-distributions .beyond-checkbox{flex-direction:column-reverse;align-items:flex-start;margin:auto}.distributions-modal .input-group-distributions .beyond-checkbox .checkmark{height:18px;width:18px}');
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