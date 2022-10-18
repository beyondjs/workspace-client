define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/dashboard@0.0.1/ds-select", "@beyond-js/ui@0.0.1/modal", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/project-distributions.code", "@beyond-js/kernel@0.1.0/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationsSettings = ApplicationsSettings;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    Dashboard,
    Applications
  } = dependency_3;
  const {
    ReactiveModel
  } = dependency_4;
  const {
    BeyondSpinner
  } = dependency_5;
  const {
    BeyondButton,
    BeyondSwitch,
    BeyondInput,
    BeyondForm,
    BeyondCheckbox
  } = dependency_6;
  const {
    BeyondPreloadText
  } = dependency_7;
  const {
    DSSelect
  } = dependency_8;
  const {
    BeyondModal
  } = dependency_9;
  const {
    useBinder
  } = dependency_10;
  const {
    DashboardIcon,
    DSIcon,
    DSIconButton,
    BeyondAlert,
    DashboardIconButton
  } = dependency_11;
  const {
    ConfigContext,
    useConfigContext,
    useDSWorkspaceContext
  } = dependency_12;
  const {
    AppDistributions
  } = dependency_13;
  const {
    CurrentTexts
  } = dependency_14;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/projects-settings",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/inspect/models.legacy', dependency_4], ['@beyond-js/ui/spinner', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/ui/preload-text', dependency_7], ['@beyond-js/dashboard/ds-select', dependency_8], ['@beyond-js/ui/modal', dependency_9], ['@beyond-js/dashboard/hooks', dependency_10], ['@beyond-js/dashboard/core-components', dependency_11], ['@beyond-js/dashboard/ds-contexts', dependency_12], ['@beyond-js/dashboard/project-distributions.code', dependency_13], ['@beyond-js/kernel/texts', dependency_14]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*********
  select.jsx
  *********/

  function ApplicationsSelect() {
    const {
      setSelected,
      setFetching,
      texts,
      selected,
      fetching
    } = useAppsSettingsContext();
    const {
      workspace,
      workspace: {
        applications: {
          items
        }
      }
    } = useDSWorkspaceContext();

    const handleChange = async ele => {
      setFetching(true);
      const application = await workspace.getApplication(ele.value);
      setSelected(application);
      setFetching(false);
    };

    const options = items.map(item => ({
      value: item.id.toString(),
      label: item.name
    }));
    const cls = `flex__column${fetching ? ' is-fetching' : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement("label", null, texts.platform.applications.select), /*#__PURE__*/React.createElement("div", {
      className: "relative__container"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      options: options,
      value: selected?.id,
      onSelect: handleChange
    }), fetching && /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "primary"
    })));
  }
  /******
  tab.jsx
  ******/


  const AppsSettingsContext = React.createContext();

  const useAppsSettingsContext = () => React.useContext(AppsSettingsContext);

  /*bundle**/
  function ApplicationsSettings() {
    const {
      workspace
    } = useDSWorkspaceContext();
    const [ready, setReady] = React.useState(controller.ready);
    useBinder([controller], () => setReady(controller.ready));
    const [selected, setSelected] = React.useState(workspace?.application);
    const [fetching, setFetching] = React.useState();
    if (!ready) return null;
    const {
      texts
    } = controller;
    return /*#__PURE__*/React.createElement(AppsSettingsContext.Provider, {
      value: {
        fetching,
        setFetching,
        selected,
        setSelected,
        texts
      }
    }, /*#__PURE__*/React.createElement(ApplicationsSelect, null), selected && /*#__PURE__*/React.createElement(AppDistributions, {
      texts: texts.distribution,
      application: selected
    }));
  }
  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/


  const controller = new class Controller extends ReactiveModel {
    #model;

    get model() {
      return this.#model;
    }

    #texts;

    get texts() {
      return this.#texts?.value;
    }

    get ready() {
      return this.#texts.ready && this.#model.ready;
    }

    constructor(props) {
      super(props);
      this.#model = Dashboard;
      this.#model.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
    }

  }();
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