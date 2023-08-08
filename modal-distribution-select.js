define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/workspace@1.1.1/breadcrumb.code", "@beyond-js/inspect@0.0.1/models.code", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/alert", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/workspace@1.1.1/ds-contexts", "@beyond-js/workspace@1.1.1/hooks", "@beyond-js/workspace@1.1.1/models", "@beyond-js/workspace@1.1.1/core-components", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CompilationModal = CompilationModal;
  _exports.Ports = Ports;
  _exports.useSelectCompileDistribution = _exports.hmr = _exports.__beyond_pkg = _exports.SelectCompileDistribution = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    DsBreadcrumb
  } = dependency_3;
  const {
    Application
  } = dependency_4;
  const {
    ReactiveModel
  } = dependency_5;
  const {
    BeyondAlert
  } = dependency_6;
  const {
    BeyondButton,
    BeyondSwitch
  } = dependency_7;
  const {
    BeyondModal
  } = dependency_8;
  const {
    BeyondSpinner
  } = dependency_9;
  const {
    useDSWorkspaceContext,
    ProjectContext,
    useProjectContext
  } = dependency_10;
  const {
    useBinder
  } = dependency_11;
  const {
    projectsFactory
  } = dependency_12;
  const {
    DSIconButton,
    DSBoard,
    DsFetchingBlock,
    DSIcon
  } = dependency_13;
  const {
    CurrentTexts
  } = dependency_14;
  const {
    BeyondScrollContainer
  } = dependency_15;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.5"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["dayjs", "1.11.7"], ["socket.io-client", "4.5.4"], ["@popperjs/core", "2.11.6"], ["@types/react", "16.14.35"], ["@types/react-dom", "16.9.18"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/modal-distribution-select"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/workspace/breadcrumb.code', dependency_3], ['@beyond-js/inspect/models.code', dependency_4], ['@beyond-js/inspect/reactive-model', dependency_5], ['@beyond-js/ui/alert', dependency_6], ['@beyond-js/ui/form', dependency_7], ['@beyond-js/ui/modal', dependency_8], ['@beyond-js/ui/spinner', dependency_9], ['@beyond-js/workspace/ds-contexts', dependency_10], ['@beyond-js/workspace/hooks', dependency_11], ['@beyond-js/workspace/models', dependency_12], ['@beyond-js/workspace/core-components', dependency_13], ['@beyond-js/kernel/texts', dependency_14], ['@beyond-js/ui/perfect-scrollbar', dependency_15]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  context.jsx
  **********/

  const SelectCompileDistribution = React.createContext();
  _exports.SelectCompileDistribution = SelectCompileDistribution;
  const useSelectCompileDistribution = () => React.useContext(SelectCompileDistribution);

  /*********
  footer.jsx
  *********/
  _exports.useSelectCompileDistribution = useSelectCompileDistribution;
  function Footer() {
    const {
      selected,
      texts: {
        process: texts
      },
      onClose,
      compile,
      declarations,
      project: {
        application
      }
    } = useSelectCompileDistribution();
    const {
      workspace
    } = useSelectCompileDistribution();
    const process = async event => {
      event.stopPropagation();
      const specs = {
        id: `${application.id}.compile`,
        projectId: application.id,
        label: `${application.name}`,
        selected,
        texts
      };
      onClose();
      workspace.active.process({
        id: selected,
        build: compile,
        declarations
      });
      if (workspace.panels.items.size === 1) {
        await workspace.panels.add("compile", specs);
      }
      if (workspace.panels.boardOpened(specs.id)) {
        return;
      }
      workspace.openBoard("compile", specs);
    };
    const disabled = selected && (compile || declarations);
    return /*#__PURE__*/React.createElement("footer", {
      className: "ds-modal__footer action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      disabled: !disabled,
      className: "btn primary",
      onClick: process
    }, texts.actions.compile));
  }

  /********
  index.jsx
  ********/

  /*bundle*/function CompilationModal({
    onClose,
    workspace
  }) {
    const [selected, setSelected] = React.useState(null);
    const {
      texts,
      toggleCompilationModal
    } = workspace;
    const [ready, setReady] = React.useState(workspace.active.ready);
    const {
      application: {
        deployment: {
          distributions
        }
      }
    } = workspace.active;
    useBinder([workspace.active], () => setReady(workspace.active.ready));
    const [compile, setCompile] = React.useState(false);
    const [declarations, setDeclarations] = React.useState(false);
    if (!ready) return "...";
    if (!distributions.size) {
      return /*#__PURE__*/React.createElement(BeyondModal, {
        show: true,
        onClose: toggleCompilationModal,
        className: "ds-modal"
      }, /*#__PURE__*/React.createElement("h4", null, texts.process.empty));
    }
    const items = [];
    const npm = {
      id: "npm",
      name: "npm"
    };
    items.push( /*#__PURE__*/React.createElement(DistributionItem, {
      key: npm.id,
      selected: selected,
      data: npm,
      setSelected: setSelected
    }));
    distributions.forEach(dist => {
      items.push( /*#__PURE__*/React.createElement(DistributionItem, {
        key: dist.id,
        selected: selected,
        data: dist,
        setSelected: setSelected
      }));
    });
    const onChange = ({
      currentTarget: {
        name,
        checked
      }
    }) => {
      const action = name === "build" ? setCompile : setDeclarations;
      action(checked);
    };
    return /*#__PURE__*/React.createElement(SelectCompileDistribution.Provider, {
      value: {
        texts,
        toggleCompilationModal,
        project: workspace.active,
        onClose,
        workspace,
        selected,
        compile,
        declarations
      }
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: onClose,
      className: "ds-modal ds-distributions-select__modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.process.title), /*#__PURE__*/React.createElement("p", null, texts.process.start.title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "build",
      onChange: onChange
    }), texts.process.actions.compile)), /*#__PURE__*/React.createElement("div", {
      className: "ds-switch__container"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(BeyondSwitch, {
      name: "declarations",
      onChange: onChange
    }), texts.process.actions.declarations)))), /*#__PURE__*/React.createElement("div", {
      className: "right__panel right__panel--actions"
    }, /*#__PURE__*/React.createElement(BeyondScrollContainer, null, /*#__PURE__*/React.createElement("ul", {
      className: "cards__container"
    }, items)), /*#__PURE__*/React.createElement(Footer, null)))));
  }

  /**************
  select\item.jsx
  **************/

  const DistributionItem = ({
    data,
    selected,
    setSelected
  }) => {
    const {
      texts: {
        distribution: texts
      }
    } = useSelectCompileDistribution();
    const onSelect = event => {
      const isSelected = selected === data.id ? undefined : data.id;
      setSelected(isSelected);
    };
    const cls = `ds-card ${selected === data.id ? ' selected' : ''}`;
    const attrs = {
      className: cls,
      onClick: onSelect
    };
    return /*#__PURE__*/React.createElement("li", attrs, /*#__PURE__*/React.createElement("header", {
      className: "ds-card__header"
    }, /*#__PURE__*/React.createElement("h4", null, data.name)), /*#__PURE__*/React.createElement("section", {
      className: "p1"
    }, data.id === 'npm' && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, /*#__PURE__*/React.createElement("span", null, texts.npm)), data.platform && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, /*#__PURE__*/React.createElement("strong", null, texts.platform, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.platform)), data.environment && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, /*#__PURE__*/React.createElement("strong", null, texts.environment, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.environment)), /*#__PURE__*/React.createElement(Ports, {
      data: data
    }), data.ts && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ts, ": ", /*#__PURE__*/React.createElement("span", null, data.ts.compiler)), data.ssr && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ssr, ": ", /*#__PURE__*/React.createElement("span", null, data.ssr))));
  };

  /***************
  select\ports.jsx
  ***************/

  function Ports({
    data
  }) {
    const {
      texts: {
        distribution: texts
      }
    } = useSelectCompileDistribution();
    if (!data.ports) return null;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, texts.ports.title), /*#__PURE__*/React.createElement("div", {
      className: "ports"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.bundles, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.bundles)), data.ports?.http && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.http, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.http)), data.ports?.inspect && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.inspect, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.inspect))));
  }

  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/modal-distribution-select', '.compile__trace__list{list-style:none;display:grid;gap:2px;padding:0}.compile__trace__list li{padding:4px;cursor:pointer;transition:all 150ms ease-in}.compile__trace__list li:hover{background:var(--ds-element-hover)}.compile__trace__list .message__error{background:var(--beyond-error-color)}.compile__trace__list .message__error:hover{background:var(--beyond-error-darken-color)}.ds-distributions-select__modal div,.ds-distributions-select__modal h4,.ds-distributions-select__modal p{margin:0;padding:0}.ds-distributions-select__modal .cards__container header.ds-card__header h4{color:var(--secondary-text-color)}.ds-distributions-select__modal .cards__container .ports{display:flex;flex-wrap:wrap;gap:.5rem}.ds-distributions-select__modal .cards__container .ports div{display:flex;gap:.5rem}');
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