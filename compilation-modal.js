define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/dashboard@0.0.1/breadcrumb.code", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/ui@0.0.1/alert", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/kernel@0.1.0/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CompilationModal = CompilationModal;
  _exports.useSelectCompileDistribution = _exports.hmr = _exports.__beyond_pkg = _exports.SelectCompileDistribution = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    DsBreadcrumb
  } = dependency_3;
  const {
    Application,
    ReactiveModel
  } = dependency_4;
  const {
    BeyondAlert
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const {
    BeyondModal
  } = dependency_7;
  const {
    BeyondSpinner
  } = dependency_8;
  const {
    useDSWorkspaceContext,
    ProjectContext,
    useProjectContext
  } = dependency_9;
  const {
    useBinder
  } = dependency_10;
  const {
    projectsFactory
  } = dependency_11;
  const {
    DSIconButton,
    DSBoard,
    DsFetchingBlock,
    DSIcon
  } = dependency_12;
  const {
    CurrentTexts
  } = dependency_13;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/compilation-modal"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/dashboard/breadcrumb.code', dependency_3], ['@beyond-js/inspect/models.legacy', dependency_4], ['@beyond-js/ui/alert', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/ui/modal', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['@beyond-js/dashboard/ds-contexts', dependency_9], ['@beyond-js/dashboard/hooks', dependency_10], ['@beyond-js/dashboard/models', dependency_11], ['@beyond-js/dashboard/core-components', dependency_12], ['@beyond-js/kernel/texts', dependency_13]]);

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
  /********
  index.jsx
  ********/


  _exports.useSelectCompileDistribution = useSelectCompileDistribution;

  /*bundle*/
  function CompilationModal({
    onClose,
    workspace
  }) {
    const [selected, setSelected] = React.useState(null);
    const {
      texts,
      toggleCompilationModal
    } = workspace;
    const {
      application: {
        deployment: {
          distributions
        }
      }
    } = workspace.active;

    if (!distributions.size) {
      return /*#__PURE__*/React.createElement(BeyondModal, {
        show: true,
        onClose: toggleCompilationModal,
        className: "md ds-modal ds-app-create_modal"
      }, /*#__PURE__*/React.createElement("h4", null, texts.select.empty));
    }

    const items = [];
    distributions.forEach(dist => {
      items.push( /*#__PURE__*/React.createElement(DistributionItem, {
        key: dist.id,
        selected: selected,
        data: dist,
        setSelected: setSelected
      }));
    });
    return /*#__PURE__*/React.createElement(SelectCompileDistribution.Provider, {
      value: {
        texts,
        toggleCompilationModal,
        project: workspace.active,
        onClose,
        workspace,
        selected
      }
    }, /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: toggleCompilationModal,
      className: "ds-modal ds-distributions-select__modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__panels"
    }, /*#__PURE__*/React.createElement(LeftPanel, {
      selected: selected
    }), /*#__PURE__*/React.createElement("div", {
      className: "right__panel"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "cards__container"
    }, items)))));
  }
  /*************
  left-panel.jsx
  *************/


  function LeftPanel({
    selected
  }) {
    const {
      texts: {
        select: texts
      },
      onClose,
      project: {
        application
      }
    } = useSelectCompileDistribution();
    const {
      workspace
    } = useSelectCompileDistribution();

    const compile = async event => {
      event.stopPropagation();
      const specs = {
        id: `${application.id}.compile`,
        projectId: application.id,
        label: `${application.name}`,
        selected,
        texts
      };
      onClose();
      workspace.active.compile(selected);
      if (workspace.panels.items.size === 1) return workspace.panels.add('compile', specs);

      if (workspace.panels.boardOpened(specs.id)) {
        return;
      }

      workspace.openBoard('compile', specs);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "left__panel"
    }, /*#__PURE__*/React.createElement("header", {
      className: "info-container"
    }, /*#__PURE__*/React.createElement("h3", null, texts.title), /*#__PURE__*/React.createElement("p", null, texts.start.title)), /*#__PURE__*/React.createElement("footer", {
      className: "action-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      disabled: !selected,
      className: "btn primary",
      onClick: compile
    }, texts.actions.compile)));
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
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, /*#__PURE__*/React.createElement("strong", null, texts.platform, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.platform)), /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, /*#__PURE__*/React.createElement("strong", null, texts.environment, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.environment)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, texts.ports.labels.title), /*#__PURE__*/React.createElement("div", {
      className: "ports"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.labels.bundles, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.bundles)), data.ports?.http && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.labels.http, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.http)), data.ports?.inspect && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, texts.ports.labels.inspect, ":"), " ", /*#__PURE__*/React.createElement("span", null, data.ports.inspect)))), data.ts && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ts, ": ", /*#__PURE__*/React.createElement("span", null, data.ts.compiler)), data.ssr && /*#__PURE__*/React.createElement("div", {
      className: "item__description"
    }, texts.ssr, ": ", /*#__PURE__*/React.createElement("span", null, data.ssr))));
  };
  /***********
  JS PROCESSOR
  ***********/

  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/compilation-modal', '.compile__trace__list{list-style:none;display:grid;gap:2px;padding:0}.compile__trace__list li{padding:4px;cursor:pointer;transition:all 150ms ease-in}.compile__trace__list li:hover{background:var(--ds-element-hover)}.compile__trace__list .message__error{background:var(--beyond-error-color)}.compile__trace__list .message__error:hover{background:var(--beyond-error-darken-color)}.ds-distributions-select__modal div,.ds-distributions-select__modal h4,.ds-distributions-select__modal p{margin:0;padding:0}.ds-distributions-select__modal .cards__container header.ds-card__header h4{color:var(--secondary-text-color)}.ds-distributions-select__modal .cards__container .ports{display:flex;flex-wrap:wrap;gap:.5rem}.ds-distributions-select__modal .cards__container .ports div{display:flex;gap:.5rem}');
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