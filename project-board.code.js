define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/popover", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/ui@0.0.1/modal", "@beyond-js/workspace@1.1.1/ds-select", "react-select@5.8.0", "@beyond-js/workspace@1.1.1/texts-binder", "@beyond-js/workspace@1.1.1/hooks", "@beyond-js/workspace@1.1.1/database", "@beyond-js/workspace@1.1.1/tooltip", "@beyond-js/workspace@1.1.1/uploader-workspace", "@beyond-js/workspace@1.1.1/ds-editor.code", "@beyond-js/workspace@1.1.1/core-components", "@beyond-js/workspace@1.1.1/context-menu", "@beyond-js/workspace@1.1.1/project-distributions.code", "@beyond-js/workspace@1.1.1/ds-contexts", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/workspace@1.1.1/project-compile.code", "@beyond-js/workspace@1.1.1/tabs"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationBoard = ApplicationBoard;
  _exports.DisplayListActions = DisplayListActions;
  _exports.DistributionsHeader = DistributionsHeader;
  _exports.HeaderStructure = HeaderStructure;
  _exports.ModulesList = ModulesList;
  _exports.NoDistributionsModal = NoDistributionsModal;
  _exports.ProjectHeaderActions = ProjectHeaderActions;
  _exports.Tab = Tab;
  _exports.TabSelector = TabSelector;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  _exports.useBoardState = useBoardState;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    ReactiveModel
  } = dependency_3;
  const {
    BeyondButton
  } = dependency_4;
  const {
    BeyondImage
  } = dependency_5;
  const {
    BeyondIconButton
  } = dependency_6;
  const {
    BeyondPopover
  } = dependency_7;
  const {
    BeyondSpinner
  } = dependency_8;
  const {
    BeyondPreloadText
  } = dependency_9;
  const {
    BeyondModal,
    BeyondConfirmModal
  } = dependency_10;
  const {
    DSSelect
  } = dependency_11;
  const Select = dependency_12.default;
  const {
    useTextsBinder
  } = dependency_13;
  const {
    useBinder
  } = dependency_14;
  const {
    DSModel
  } = dependency_15;
  const {
    BeyondTooltip
  } = dependency_16;
  const {
    Uploader
  } = dependency_17;
  const {
    monacoDependency
  } = dependency_18;
  const {
    FadeIn,
    DSIcon,
    DashboardIcon,
    ProcessIconButton,
    DSIconButton
  } = dependency_19;
  const {
    DSContextMenu
  } = dependency_20;
  const {
    ProjectDistributions
  } = dependency_21;
  const {
    ProjectContext,
    useProjectContext,
    useDSWorkspaceContext
  } = dependency_22;
  const {
    CurrentTexts
  } = dependency_23;
  const {
    CompileModal
  } = dependency_24;
  const {
    TabsContainer,
    Tabs,
    Board
  } = dependency_25;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["@beyond-js/events", "0.0.6"], ["dayjs", "1.11.10"], ["emmet-monaco-es", "5.3.0"], ["monaco-editor", "0.33.0"], ["pragmate-ui", "0.0.4"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["socket.io-parser", "4.2.1"], ["engine.io-parser", "5.0.7"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@popperjs/core", "2.11.8"], ["@types/react", "16.14.56"], ["@types/react-dom", "16.9.24"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/project-board",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/reactive-model', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/image', dependency_5], ['@beyond-js/ui/icon', dependency_6], ['@beyond-js/ui/popover', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['@beyond-js/ui/preload-text', dependency_9], ['@beyond-js/ui/modal', dependency_10], ['@beyond-js/workspace/ds-select', dependency_11], ['react-select', dependency_12], ['@beyond-js/workspace/texts-binder', dependency_13], ['@beyond-js/workspace/hooks', dependency_14], ['@beyond-js/workspace/database', dependency_15], ['@beyond-js/workspace/tooltip', dependency_16], ['@beyond-js/workspace/uploader-workspace', dependency_17], ['@beyond-js/workspace/ds-editor.code', dependency_18], ['@beyond-js/workspace/core-components', dependency_19], ['@beyond-js/workspace/context-menu', dependency_20], ['@beyond-js/workspace/project-distributions.code', dependency_21], ['@beyond-js/workspace/ds-contexts', dependency_22], ['@beyond-js/kernel/texts', dependency_23], ['@beyond-js/workspace/project-compile.code', dependency_24], ['@beyond-js/workspace/tabs', dependency_25]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  const controller = new class Controller extends ReactiveModel {
    #workspace;
    #application;
    #states = new Map();
    get application() {
      return this.#application;
    }
    #changed = false;
    #currentTab = 0;
    get currentTab() {
      return this.#currentTab;
    }
    set currentTab(value) {
      this.#currentTab = value;
      this.triggerEvent();
    }
    get ready() {
      const dependencies = !!monacoDependency?.ready;
      const models = !!this.application?.ready && !!DSModel.ready;
      return dependencies && models && this.currentId === this.application?.application?.id;
    }
    #moduleManager;
    get moduleManager() {
      return this.#moduleManager;
    }
    #favorites;
    get favorites() {
      return this.#favorites;
    }
    #currentId;
    get currentId() {
      return this.#currentId;
    }
    async start(workspace, appId) {
      if (this.#application && this.currentId !== appId) {
        this.#application.unbind("change", this.triggerEvent);
        this.#application = undefined;
      }
      const module = __pkg.bundle.module.specifier;
      const model = await workspace.getProject(appId);
      this.#currentId = appId;
      model.bind("change", this.triggerEvent);
      this.#workspace = workspace;
      this.#application = model;
      this.#favorites = model.favorites;
      this.#moduleManager = model.moduleManager;
      monacoDependency.bind("change", this.triggerEvent);
      this.triggerEvent();
    }
  }();

  /********
  index.jsx
  ********/

  const VIEWS = {
    modules: ModulesList,
    distributions: ProjectDistributions,
    config: Description
  };
  function ApplicationBoard(props) {
    const {
      panel,
      workspace
    } = useDSWorkspaceContext();
    const {
      id
    } = props?.specs ?? {};
    const tab = VIEWS.hasOwnProperty(props.specs.tab) ? props.specs.tab : "modules";
    const [showNoDistributionsModal, setShowNoDistributionsModal] = React.useState(false);
    const [addDistribution, setAddDistribution] = React.useState(false);
    const [selectedView, setSelectedView] = React.useState(tab);
    const [textsReady, texts] = useTextsBinder(__pkg.bundle.module.specifier);
    const [state] = useBoardState(id, setShowNoDistributionsModal);
    if (!textsReady || !state.ready || controller.currentId !== id) return /*#__PURE__*/React.createElement(Preloader, null);
    const {
      application: project,
      application: {
        application
      }
    } = controller;
    const value = {
      application,
      // @deprecated Application is a legacy name.
      project,
      // project is the name to use instead of application.
      texts,
      id,
      selectedView,
      setSelectedView,
      addDistribution,
      setAddDistribution,
      showNoDistributionsModal,
      setShowNoDistributionsModal
    };
    const onSelect = id => controller.currentTab = id;
    return /*#__PURE__*/React.createElement(ProjectContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds__board"
    }, /*#__PURE__*/React.createElement(HeaderStructure, null), /*#__PURE__*/React.createElement("div", {
      className: "ds__board__tabs-container container--no-gap"
    }, /*#__PURE__*/React.createElement(TabsContainer, {
      currentTab: controller.currentTab
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: ["Modules", "Distributions", "Configuration"],
      onSelect: onSelect
    }), /*#__PURE__*/React.createElement(Board, null, /*#__PURE__*/React.createElement(ModulesList, null), /*#__PURE__*/React.createElement(ProjectDistributions, {
      application: controller.application
    }), /*#__PURE__*/React.createElement(Description, null))))), showNoDistributionsModal && /*#__PURE__*/React.createElement(NoDistributionsModal, {
      onClose: () => setShowNoDistributionsModal(false),
      type: showNoDistributionsModal
    }));
  }

  /**************************
  structure\action-button.jsx
  **************************/

  function DSProcessButton({
    title,
    className,
    icon,
    onClick
  }) {
    const [fetching, setFetching] = React.useState();
    if (fetching) {
      return /*#__PURE__*/React.createElement("button", {
        className: "beyond-icon-button circle button--fetching"
      }, /*#__PURE__*/React.createElement(BeyondSpinner, {
        active: true,
        className: "primary"
      }));
    }
    const action = async event => {
      setFetching(true);
      event.stopPropagation();
      await onClick();
      setFetching(false);
    };
    return /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: action,
      icon: icon,
      className: className,
      title: title
    });
  }

  /***************************
  structure\header\actions.jsx
  ***************************/

  function ProjectHeaderActions() {
    let {
      setShowNoDistributionsModal,
      project: {
        application: {
          deployment: {
            distributions
          }
        }
      },
      texts: {
        actions
      }
    } = useProjectContext();
    const {
      toggleProcessModal
    } = useDSWorkspaceContext();
    const process = event => {
      event.stopPropagation();
      event.preventDefault();
      if (!distributions.size) {
        setShowNoDistributionsModal('process');
        return;
      }
      toggleProcessModal();
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "project__header__actions flex-center flex-container"
    }, /*#__PURE__*/React.createElement(DistributionsHeader, null), /*#__PURE__*/React.createElement(DSIconButton, {
      title: actions.process,
      onClick: process,
      icon: "compile"
    }));
  }

  /***************************************
  structure\header\distributions\index.jsx
  ***************************************/

  function DistributionsHeader() {
    const [selectedDistribution, setSelectedDistribution] = React.useState();
    const {
      setShowNoDistributionsModal,
      project: {
        application: {
          deployment,
          deployment: {
            distributions
          }
        }
      }
    } = useProjectContext();
    const options = [...distributions.values()].filter(item => !!item.name).map(item => ({
      value: item.name,
      label: item.name
    }));
    const noDistributions = !options.length;
    const handleChange = option => {
      setSelectedDistribution(option.value);
    };
    const handleClick = () => {
      if (noDistributions) {
        setShowNoDistributionsModal('execute');
        return;
      }
    };
    if (noDistributions) {
      return /*#__PURE__*/(
        // <section className="project__header__distributions">
        React.createElement("div", {
          className: "launchers__action__container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "simulated__select"
        }, "Execute", /*#__PURE__*/React.createElement(DSIcon, {
          icon: "arrowDropDown"
        })), /*#__PURE__*/React.createElement(DSIconButton, {
          icon: "play",
          onClick: handleClick
        }))
        // </section>
      );
    }
    return /*#__PURE__*/(
      // <section className="project__header__distributions">
      React.createElement("div", {
        className: "launchers__action__container"
      }, /*#__PURE__*/React.createElement(DSSelect, {
        className: "ds-select",
        name: "backend",
        options: options,
        onChange: handleChange,
        value: selectedDistribution
      }), /*#__PURE__*/React.createElement(DSIconButton, {
        icon: "play",
        onClick: handleClick
      }))

      // </section>
    );
  }

  /********************************************************
  structure\header\distributions\no-distributions-modal.jsx
  ********************************************************/

  function NoDistributionsModal({
    type
  }) {
    const {
      texts: {
        distribution: {
          empty
        }
      },
      setAddDistribution,
      setShowNoDistributionsModal,
      setSelectedView
    } = useProjectContext();
    const {
      title,
      action,
      message
    } = empty[type];
    const closeModal = () => {
      setShowNoDistributionsModal(false);
    };
    const openDistributionsTab = () => {
      closeModal();
      setSelectedView('distributions');
      setAddDistribution(true);
    };
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: closeModal,
      className: "ds-modal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal__panels modal__panels--auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section left__panel"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h3", null, title)), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: openDistributionsTab,
      className: "primary"
    }, action))), /*#__PURE__*/React.createElement("section", {
      className: "right__panel flex-container flex-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "p2"
    }, message))));
  }

  /*************************
  structure\header\index.jsx
  *************************/

  function HeaderStructure() {
    let {
      project
    } = useProjectContext();
    const model = project?.application;
    const [state, setState] = React.useState({});
    if (!model) return null;
    const {
      declarations
    } = model;
    useBinder([model, declarations], () => setState({}));
    useBinder([project.moduleManager], () => setProcessed(project.moduleManager.processed));
    return /*#__PURE__*/React.createElement("div", {
      className: "project__detail board__header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "project__header___detail"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", null, model.name, " ", /*#__PURE__*/React.createElement("small", null, `(id: ${model.id})`)), !!project.specifier && /*#__PURE__*/React.createElement("div", {
      className: "project__specifier flex flex-center-y"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "contentCopy"
    }), /*#__PURE__*/React.createElement("span", null, project.specifier)))), /*#__PURE__*/React.createElement(ProjectHeaderActions, null));
  }

  /**********************
  structure\preloader.jsx
  **********************/

  function Preloader() {
    return /*#__PURE__*/React.createElement("main", {
      className: "ds__board"
    }, /*#__PURE__*/React.createElement("div", {
      className: "project__detail board__header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "project__header___detail"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "11px",
      width: "150px"
    })), /*#__PURE__*/React.createElement("div", {
      className: "project__specifier flex flex-center-y"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "contentCopy",
      disabled: true
    }), /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "50px"
    })))), /*#__PURE__*/React.createElement("section", {
      className: "project__header__actions flex-center flex-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "launchers__action__container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "simulated__select preload"
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "play",
      disabled: true
    })), /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "compile",
      disabled: true
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "declarations",
      disabled: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ds__board__tabs-container"
    }, /*#__PURE__*/React.createElement("article", {
      className: "ds-tabs__container"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "ds-tabs__list"
    }, /*#__PURE__*/React.createElement("li", {
      className: "ds-tabs__tab"
    }, /*#__PURE__*/React.createElement("button", {
      className: "tab-button active"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, "\xA0"))), /*#__PURE__*/React.createElement("li", {
      className: "ds-tabs__tab"
    }, /*#__PURE__*/React.createElement("button", {
      className: "tab-button"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, "\xA0"))), /*#__PURE__*/React.createElement("li", {
      className: "ds-tabs__tab"
    }, /*#__PURE__*/React.createElement("button", {
      className: "tab-button"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, "\xA0")))))));
  }

  /**********************
  structure\tabs\item.jsx
  **********************/

  function Tab({
    name,
    value
  }) {
    const {
      selectedView,
      setSelectedView
    } = useProjectContext();
    const isSelected = selectedView === value; // Esto lo dejo listo para que se apliquen los estilos correspondientes 🙂
    const activeClassName = isSelected ? 'active' : '';
    function selectTab() {
      setSelectedView(value);
    }
    const cls = `ds-tabs__tab ${isSelected ? ' ds-tabs__tab--active' : ''}`;
    return /*#__PURE__*/React.createElement("li", {
      className: cls
    }, /*#__PURE__*/React.createElement("button", {
      onClick: selectTab
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, name)));
  }

  /******************************
  structure\tabs\tab-selector.jsx
  ******************************/

  function TabSelector() {
    const {
      texts: {
        application: {
          tabs: texts
        }
      }
    } = useProjectContext();
    return /*#__PURE__*/React.createElement("nav", {
      className: "ds-tabs__container"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "ds-tabs__list"
    }, /*#__PURE__*/React.createElement(Tab, {
      name: texts.modules,
      value: "modules"
    }), /*#__PURE__*/React.createElement(Tab, {
      name: texts.distributions,
      value: "distributions"
    }), /*#__PURE__*/React.createElement(Tab, {
      name: texts.settings,
      value: "config"
    })));
  }

  /**************
  tabs\config.jsx
  **************/

  function Description() {
    let {
      texts: {
        actions
      },
      application: {
        application
      }
    } = useProjectContext();
    return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(EditField, {
      field: "title"
    }), /*#__PURE__*/React.createElement(EditField, {
      field: "description"
    }));
  }

  /************
  tabs\edit.jsx
  ************/

  function EditField({
    field
  }) {
    const [edit, setEdit] = React.useState(false);
    let {
      texts: {
        application: texts
      },
      application
    } = useProjectContext();
    const [value, setValue] = React.useState(application[field] ?? '');
    const label = texts.info[field];
    const fieldValue = application[field] ?? texts.info.empty[field];
    const toggleEdit = () => setEdit(!edit);
    const onSubmit = event => {
      event.preventDefault();
      const data = {};
      data[field] = value;
      application.edit(data);
      setEdit(!edit);
    };
    const onEdit = event => {
      const target = event.currentTarget;
      setValue(target.value);
    };
    if (!fieldValue) {
      return /*#__PURE__*/React.createElement("div", {
        className: "item-formation"
      }, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement("form", {
        onSubmit: onSubmit,
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        autoComplete: "off",
        onChange: onEdit,
        name: field,
        defaultValue: value
      })));
    }
    if (edit) {
      return /*#__PURE__*/React.createElement("div", {
        className: "item-information item-information--edit"
      }, /*#__PURE__*/React.createElement("div", null, label, " "), /*#__PURE__*/React.createElement("form", {
        onSubmit: onSubmit,
        className: "form-group"
      }, /*#__PURE__*/React.createElement("input", {
        autoComplete: "off",
        onChange: onEdit,
        name: field,
        defaultValue: value
      }), /*#__PURE__*/React.createElement(FadeIn, null, /*#__PURE__*/React.createElement("div", {
        className: "form__actions"
      }, /*#__PURE__*/React.createElement(BeyondButton, {
        className: "btn primary",
        type: "submit"
      }, texts.actions.save), /*#__PURE__*/React.createElement(BeyondButton, {
        className: "secondary rbtn btn-secondary",
        onClick: toggleEdit,
        type: "button"
      }, texts.actions.close)))));
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "item-information"
    }, /*#__PURE__*/React.createElement("div", null, label), /*#__PURE__*/React.createElement("div", {
      className: "description-item"
    }, /*#__PURE__*/React.createElement("p", {
      className: "p1 p-0"
    }, fieldValue), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: toggleEdit,
      icon: "edit"
    })));
  }

  /******************
  tabs\list\empty.jsx
  ******************/

  function Empty({
    texts,
    type
  }) {
    const {
      bundleFilter,
      workspace
    } = useDSWorkspaceContext();
    const label = bundleFilter ? 'filter' : 'application';
    const title = type === 'all' ? texts.empty[label].title : texts.empty.filter.title;
    const description = type === 'all' ? texts.empty[label].description : texts.empty.filter.description;
    const addModule = () => workspace.setState({
      addModule: true
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-empty-container mt-100"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", {
      className: "primary-color",
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), /*#__PURE__*/React.createElement("h2", {
      dangerouslySetInnerHTML: {
        __html: description
      }
    })), /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: addModule,
      className: "primary icon-on-primary"
    }, texts.actions.add, /*#__PURE__*/React.createElement(DashboardIcon, {
      icon: "add",
      className: "circle"
    })));
  }

  /************************************************
  tabs\list\header\components\containers-filter.jsx
  ************************************************/

  function ContainersFilter() {
    const {
      application
    } = useDSWorkspaceContext();
    if (!application) return null;
    const containerRef = React.useRef();
    const [container, setContainer] = React.useState('application');
    const filterContainer = event => {
      //stop propagation is added to prevent the execution of the toggleList function
      //that is added in the onclick event of the container selector
      event.stopPropagation();
      const target = event.currentTarget;
      application.filterContainer = target.dataset.id;
      setContainer(target.dataset.id);
      closeList();
    };
    const toggleList = event => {
      event.preventDefault();
      event.stopPropagation();
      const target = containerRef.current;
      target.classList.toggle('opened');
      const action = target.classList.contains('opened') ? 'addEventListener' : 'removeEventListener';
      document[action]('click', checkToClose);
    };
    const closeList = () => {
      containerRef.current.classList.remove('opened');
      document.removeEventListener('click', checkToClose);
    };
    const checkToClose = event => {
      const target = event.target || event.srcElement;
      const parent = target.closest('.header-container-container');
      if (!parent) closeList();
    };
    const libraries = application.containers.map(item => {
      const id = typeof item === 'string' ? item : item[0];
      const label = typeof item === 'string' ? item : item[1];
      return /*#__PURE__*/React.createElement("div", {
        className: "header-filter_item",
        onClick: filterContainer,
        key: id,
        "data-id": id
      }, label);
    });
    return /*#__PURE__*/React.createElement("section", {
      onClick: toggleList,
      className: "header_container app__container-filter"
    }, /*#__PURE__*/React.createElement("span", null, container), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "expandMore",
      className: "circle"
    }), /*#__PURE__*/React.createElement("div", {
      ref: containerRef,
      className: "header-filter_list"
    }, libraries));
  }

  /*********************************************
  tabs\list\header\components\filter-bundles.jsx
  *********************************************/

  function FilterBundles({
    texts
  }) {
    /**
     * Originally, the headers belonged to application view module
     * and the model represented the application model, for this reason
     * the name is overwritten here
     */
    const {
      project: model
    } = useProjectContext();
    const {
      bundles
    } = model;
    const [active, setActive] = React.useState(model.filterBundle);
    // useBinder([model], () => setActive(model.filterBundle));
    React.useEffect(() => {
      const onChange = () => setActive(model.filterBundle);
      model.bind('change', onChange);
      return () => model.unbind('change', onChange);
    }, []);
    const changeFilter = event => {
      const {
        bundle
      } = event.currentTarget.dataset;
      model.filterBundle = bundle;
    };
    const filters = bundles.map(bundle => {
      const cls = active === bundle ? "tag tag-active" : "tag";
      return /*#__PURE__*/React.createElement("span", {
        key: bundle,
        className: cls,
        "data-bundle": bundle,
        onClick: changeFilter
      }, bundle);
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, filters);
  }

  /******************************************
  tabs\list\header\components\search-form.jsx
  ******************************************/

  function SearchForm() {
    const [showFinder] = React.useState(false);
    const [toFound, setToFound] = React.useState("");
    const {
      addModule,
      texts,
      project
    } = useProjectContext();
    const onChange = event => {
      setToFound(event.currentTarget.value);
      project.filterText = event.currentTarget.value;
    };
    const searcher = React.useRef();
    React.useEffect(() => {
      if (showFinder) searcher.current.focus();
    });
    const search = event => {
      event.preventDefault();
      const {
        value
      } = event.currentTarget;
    };
    const clickForm = event => {
      const target = event.currentTarget;
      if (target.contains(searcher.current)) {
        searcher.current.focus();
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "modules-list_header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "header_container"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: search,
      onClick: clickForm
    }, /*#__PURE__*/React.createElement("input", {
      ref: searcher,
      placeholder: texts.header.searcher,
      className: "modules-list_search-input",
      onChange: onChange,
      value: toFound
    })), /*#__PURE__*/React.createElement("a", {
      onClick: addModule,
      className: "primary-color link action"
    }, texts.actions.add)), /*#__PURE__*/React.createElement(ContainersFilter, null));
  }

  /**************************************
  tabs\list\header\components\service.jsx
  **************************************/

  function ServiceActions() {
    let {
      application
    } = useProjectContext();
    if (!application.backend) return null;
    const [iconApp, setIconApp] = React.useState('av:stop');
    const runAction = React.useRef(null);
    const toggleApp = () => {
      const icon = iconApp === 'av:stop' ? 'av:play' : 'av:stop';
      setIconApp(icon);
      runAction.current.button.classList.toggle('active');
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      ref: runAction,
      onClick: toggleApp,
      icon: iconApp,
      className: "circle secondary active"
    }));
  }

  /*******************************************
  tabs\list\header\components\view-actions.jsx
  *******************************************/

  function DisplayListActions() {
    let {
      texts,
      displayView,
      setDisplayView
    } = useProjectContext();
    /**
     * Changes the view from list view to grid and vice versa
     * @param event
     */
    const changeView = event => {
      const target = event.currentTarget;
      const {
        view
      } = target.dataset;
      //remove all active classes in display button
      const removeActive = item => item.classList.remove('active');
      target.closest('.actions').querySelectorAll('.beyond-icon-button').forEach(removeActive);
      target.classList.add('active');
      localStorage.setItem('beyond.lists.view', view);
      setDisplayView(view);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: changeView,
      "data-view": "grid",
      icon: "thSolid",
      className: `circle  ${displayView === 'grid' ? 'active' : ''}`
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: changeView,
      "data-view": "table",
      icon: "barsSolid",
      className: `circle  ${displayView === 'table' ? 'active' : ''}`
    }));
  }

  /*************************
  tabs\list\header\index.jsx
  *************************/

  function HeaderList() {
    let {
      texts
    } = useProjectContext();
    texts = texts.navbar;
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-board__application application-header bg-secondary"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left-col"
    }, /*#__PURE__*/React.createElement(SearchForm, null)), /*#__PURE__*/React.createElement("div", {
      className: "right-col"
    }, /*#__PURE__*/React.createElement(FilterBundles, {
      texts: texts
    })));
  }

  /*************************
  tabs\list\item\actions.jsx
  *************************/

  function ItemActions({
    am
  }) {
    const [state, setState] = React.useState({
      modal: false,
      confirm: false
    });
    const [showContextMenu, toggleContextMenu] = React.useState();
    const updateState = newState => setState({
      ...state,
      ...newState
    });
    const openModal = e => {
      e.stopPropagation();
      updateState({
        modal: true
      });
    };
    const openConfirm = () => updateState({
      confirm: true
    });
    const closeModal = () => updateState({
      modal: false,
      fetching: false
    });
    const closeConfirm = () => updateState({
      confirm: false,
      fetching: false
    });
    const onClick = event => {
      event.stopPropagation();
      event.preventDefault();
      toggleContextMenu({
        x: event.clientX,
        y: event.clientY
      });
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "moreVert",
      className: "actions-icon",
      onClick: onClick
    }), showContextMenu && /*#__PURE__*/React.createElement(DSContextMenu, {
      className: "item-actions",
      specs: showContextMenu,
      unmount: () => toggleContextMenu(false)
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
      onClick: openModal,
      "data-action": "rename"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "edit",
      "data-element": "file"
    }), "Duplicar"), /*#__PURE__*/React.createElement("li", {
      onClick: openConfirm,
      "data-action": "delete"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "delete"
    }), "Eliminar"))), state.modal && /*#__PURE__*/React.createElement(ItemCloneAction, {
      am: am,
      onClose: closeModal
    }), state.confirm && /*#__PURE__*/React.createElement(ItemDeleteAction, {
      am: am,
      onClose: closeConfirm
    }));
  }

  /*******************************
  tabs\list\item\actions\clone.jsx
  *******************************/

  function ItemCloneAction({
    am,
    onClose
  }) {
    const [state, setState] = React.useState({
      modal: false,
      confirm: false
    });
    const updateState = newState => setState({
      ...state,
      ...newState
    });
    const handleName = event => {
      event.stopPropagation();
      updateState({
        name: event.currentTarget.value
      });
    };
    const onClone = async () => {
      try {
        updateState({
          fetching: true
        });
        await am.clone(state.name);
        onClose();
      } catch (e) {
        console.error(e);
      }
    };
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: onClose,
      className: "xs ds-modal ds-tree__forms"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, "Duplicar"))), /*#__PURE__*/React.createElement("div", {
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onClone
    }, /*#__PURE__*/React.createElement("input", {
      autoComplete: "off",
      required: true,
      name: "name",
      label: "Nombre del modulo",
      placeholder: "mi-modulo | directorio/mi-modulo",
      onChange: handleName
    }), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: onClone,
      className: "primary"
    }, state.fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : 'Duplicar')))));
  }

  /********************************
  tabs\list\item\actions\delete.jsx
  ********************************/

  function ItemDeleteAction({
    am,
    onClose
  }) {
    const [state, setState] = React.useState({
      modal: false
    });
    const updateState = newState => setState({
      ...state,
      ...newState
    });
    const onDelete = async () => {
      try {
        updateState({
          fetching: true
        });
        await am.delete();
        onClose();
      } catch (e) {
        console.error(e);
      }
    };
    return /*#__PURE__*/React.createElement(BeyondConfirmModal, {
      show: true,
      className: "xs ds-modal",
      text: '¿Desea eliminar el modulo?',
      onConfirm: onDelete,
      onCancel: onClose
    });
  }

  /***************************
  tabs\list\item\grid-item.jsx
  ***************************/

  /**
   *
   * @param {ApplicationModule} module
   * @returns {JSX.Element}
   * @constructor
   */
  function GridItem({
    am
  }) {
    const {
      application,
      navigateModule
    } = useProjectContext();
    const {
      errors,
      warnings
    } = am.module;
    let {
      path,
      name
    } = am.module;
    path = path.toLowerCase().replace(application.path.toLowerCase(), '');
    return /*#__PURE__*/React.createElement(ModuleLink, {
      am: am
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: "col mb-15"
    }, /*#__PURE__*/React.createElement(Processors, {
      am: am
    })), /*#__PURE__*/React.createElement("div", {
      className: "item-information col col-end"
    }, !!warnings.length && /*#__PURE__*/React.createElement(DSIcon, {
      icon: "warning",
      className: "icon icon--warning"
    }), !!errors.length && /*#__PURE__*/React.createElement(DSIcon, {
      icon: "error",
      className: "icon icon--error"
    }))), /*#__PURE__*/React.createElement(ModuleInformation, {
      am: am
    }), /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("h6", {
      className: "primary-color"
    }, path), am.module.description && /*#__PURE__*/React.createElement("span", {
      className: "p1 light"
    }, am.module.description)), /*#__PURE__*/React.createElement(ItemActions, {
      am: am
    }));
  }

  /*****************************
  tabs\list\item\information.jsx
  *****************************/

  function ModuleInformation({
    am
  }) {
    if (!am) return null;
    const {
      project,
      navigateModule
    } = useProjectContext();
    const link = am.route ? `${project.application.url}${am.route.toLowerCase()}` : '';
    let {
      path,
      name,
      specifier,
      subpath
    } = am.module;
    path = path.toLowerCase().replace(project.application.path.toLowerCase(), '');
    const navigate = event => {
      event.preventDefault();
      navigateModule({
        url: link,
        route: am.route
      });
    };
    const route = `${am.route?.toLowerCase()}`;
    return /*#__PURE__*/React.createElement("div", {
      className: "col flex-center-y"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "lower p3"
    }, name), /*#__PURE__*/React.createElement("span", {
      className: "p2 primary-color"
    }, specifier));
  }

  /**********************
  tabs\list\item\item.jsx
  **********************/

  /**
   *
   * @param {ApplicationModule} module
   * @param {Application} application
   * @returns {JSX.Element}
   * @constructor
   */

  function Item({
    am,
    application
  }) {
    if (!am?.module) {
      console.warn(`the module ${module.id} does not load correctly`);
      return null;
    }
    const {
      errors,
      warnings
    } = am.module;
    return /*#__PURE__*/React.createElement(ModuleLink, {
      am: am
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement(ModuleInformation, {
      am: am
    }), am.module.description && /*#__PURE__*/React.createElement("span", {
      className: "p1 light"
    }, am.description)), /*#__PURE__*/React.createElement("div", {
      className: "ds-module-list__item__info"
    }, !!warnings.length && /*#__PURE__*/React.createElement(DashboardIcon, {
      icon: "warning",
      className: "warning-icon"
    }), !!errors.length && /*#__PURE__*/React.createElement(DashboardIcon, {
      icon: "error",
      className: "error-icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col  actions right-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "processors__list"
    }, /*#__PURE__*/React.createElement(Processors, {
      am: am
    })), /*#__PURE__*/React.createElement(ItemActions, {
      am: am
    })));
  }

  /**********************
  tabs\list\item\link.jsx
  **********************/

  function ModuleLink({
    am,
    children
  }) {
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      project
    } = useProjectContext();
    const showModule = event => {
      event.stopPropagation();
      event.preventDefault();
      workspace.openBoard('module', {
        label: am.name,
        moduleId: am.module.id,
        projectId: project.application.id
      });
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "module-list__item",
      onClick: showModule
    }, children);
  }

  /****************************
  tabs\list\item\processors.jsx
  ****************************/

  function Processors({
    am
  }) {
    const {
      texts: {
        modules: {
          emptyProcessors
        }
      }
    } = useProjectContext();
    const bundles = am.bundles;
    const processors = new Set();

    //todo: @julio
    //todo: set logic directly in the Module Item object

    bundles.forEach(bundle => bundle.processors.forEach(processor => processors.add(processor.name)));
    if (processors.size === 0) return /*#__PURE__*/React.createElement("span", {
      className: "badge-item"
    }, emptyProcessors);
    const items = [...processors].map(item => /*#__PURE__*/React.createElement("span", {
      key: `processor-${item}`,
      className: "badge-item"
    }, item));
    return /*#__PURE__*/React.createElement(React.Fragment, null, items);
  }

  /*****************
  tabs\list\list.jsx
  *****************/

  function ModulesList() {
    const {
      filterBundle,
      project
    } = useProjectContext();
    let {
      texts,
      displayView
    } = useProjectContext();
    const [items, setItems] = React.useState(project?.items);
    const cls = `ds-list list--table`;
    useBinder([project], () => {
      setItems(project?.items);
    }, "items.filtered");
    useBinder([project], () => {
      setItems(project?.items);
    });
    texts = texts.modules;
    const output = items.map(item => /*#__PURE__*/React.createElement(Item, {
      am: item,
      key: item.id
    }));
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-board__list-container ds-module-list__component"
    }, /*#__PURE__*/React.createElement(HeaderList, null), output.length ? /*#__PURE__*/React.createElement("div", {
      className: cls
    }, output) : /*#__PURE__*/React.createElement(Empty, {
      texts: texts,
      type: filterBundle
    }));
  }

  /************
  use-modal.jsx
  ************/

  function useBoardState(id, setShowNoDistributionsModal) {
    const [state, setState] = React.useState({});
    React.useEffect(() => {
      if (!id) return;
      setShowNoDistributionsModal(false);
      const onChange = () => {
        const {
          ready
        } = controller;
        setState(state => ({
          ...state,
          controller,
          ready
        }));
      };
      controller.start(workspace, id);
      controller.bind("change", onChange);
      if (controller.ready) onChange();
      return () => controller.unbind("change", onChange);
    }, [id]);
    return [state];
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/project-board.code', '.ds-board__application.ds__board{padding:20px}.workspace__board{padding:20px}.ds__board .application__detail{z-index:10}.ds__board .application__detail .board__header__actions{display:flex;align-content:center;justify-content:center;gap:10px}.ds__board .application__detail .board__header__actions .beyond-icon-button.action--play{fill:green;border:1px solid rgba(0,128,0,.2)}.ds__board .application__detail .board__header__actions .beyond-icon-button.action--stop{fill:red;border:1px solid rgba(255,0,0,.2);background:rgba(255,0,0,.2)}.ds__board .item-information{display:grid;grid-gap:8px;align-items:center;margin-top:15px}.ds__board .item-information .description-item{padding:5px 15px;border-bottom:1px solid var(--app-border-color);display:flex;justify-content:space-between;transition:all .2s ease-in;cursor:pointer}.ds__board .item-information .description-item:hover .beyond-icon-button{opacity:1}.ds__board .item-information .description-item .beyond-icon-button{opacity:.3;transition:all .2s ease-in}.ds__board .item-information .description-item .beyond-icon-button svg{transition:all .2s ease-in;fill:var(--beyond-text-on-secondary)}.ds__board .item-information.item-information--edit .form-group{display:grid;grid-template-columns:1fr;grid-gap:5px;width:100%}.ds__board .item-information.item-information--edit .form-group input{outline:0!important;color:var(--beyond-text-on-secondary);border:none;box-shadow:none;border-bottom:1px solid var(--app-border-color);padding:15px;font-size:16px;background:0 0}.ds__board .item-information.item-information--edit .form-group input:hover{border-color:var(--secondary-dark)}.ds__board .item-information.item-information--edit .form-group .form__actions{margin:15px;display:flex;gap:8px;justify-content:flex-end}.ds__board .ds__board__tabs-container{padding:2.5rem;height:100%;display:flex;flex-direction:column;gap:1rem}.modules-list_header .app__container-filter{position:relative;padding-right:0}.modules-list_header .app__container-filter .header-filter_list{position:absolute;top:100%;left:0;bottom:0;right:0;cursor:pointer;display:grid;background:rgba(5,9,16,.6);transition:all .3s ease-in-out;z-index:999;height:0;overflow:hidden;opacity:0}.modules-list_header .app__container-filter .header-filter_list.opened{opacity:1;transition:all .3s ease-in;height:auto;overflow:visible}.modules-list_header .app__container-filter .header-filter_list .header-filter_item{padding:8px 15px;transition:all .3s ease-in-out;cursor:pointer;background:rgba(5,9,16,.6)}.modules-list_header .app__container-filter .header-filter_list .header-filter_item:last-child{box-shadow:0 5px 5px -4px rgba(5,9,16,.6)}.modules-list_header .app__container-filter .header-filter_list .header-filter_item:hover{background:var(--beyond-primary-color);transition:all .3s ease-in}.project__header__actions .launchers__action__container{width:60%;display:grid;grid-template-columns:1fr auto;grid-gap:.5rem;align-items:center}.project__header__actions .form__select,.project__header__actions .simulated__select{padding:.4rem;display:flex;justify-content:space-between;position:relative!important;border:none!important;border-bottom:1px solid var(--color-white)!important}.project__header__actions .form__select.preload,.project__header__actions .simulated__select.preload{border-bottom:1px solid var(--secondary)!important}.project__header__actions .form__select .form__select__options,.project__header__actions .simulated__select .form__select__options{bottom:-35px}.project__header__actions .form__select svg,.project__header__actions .simulated__select svg{fill:var(--text-on-primary)}.panel__container .project__detail.board__header{display:grid;grid-template-columns:1fr 30%;grid-gap:0.25rem;padding:0}.panel__container .project__detail.board__header h4{margin-bottom:.5rem}.panel__container .project__detail.board__header .project__specifier{display:flex;align-items:center;justify-items:center;gap:.5rem}.panel__container .project__detail.board__header .project__specifier .beyond-icon{fill:var(--beyond-text-on-primary)}.panel__container .project__detail.board__header>section{padding:1rem;height:100%}.panel__container .project__detail.board__header .project__header__actions,.panel__container .project__detail.board__header .project__header__distributions{gap:.5rem}.panel__container .project__detail.board__header .project__header__actions .beyond-icon-button,.panel__container .project__detail.board__header .project__header__distributions .beyond-icon-button{border:1px solid var(--beyond-secondary-color);border-radius:50%;display:flex;align-content:center;justify-items:center;height:2.5rem;width:2.5rem;background:var(--beyond-secondary-dark-color);fill:#fff;transition:all .3s ease-in}.panel__container.panel__container--divided .project__detail.board__header{grid-template-columns:1fr}.modules-list_header{display:grid;width:100%;grid-template-columns:60% 40%;gap:8px}.modules-list_header .header_container{cursor:pointer;display:grid;grid-template-columns:1fr auto auto;transition:all ease-in .3s;align-items:center;border-bottom:1px solid #82837f;font-size:14px;padding:0 8px}.modules-list_header .header_container .filter-container{display:grid;grid-template-columns:1fr auto}.modules-list_header .header_container:focus-within{background:rgba(0,0,0,.4)}.modules-list_header .header_container .modules-list_search-input{border:0;background:0 0;cursor:pointer;color:#fff;outline:0;width:100%;transition:all .2s ease-in}.modules-list_header .header_container .modules-list_search-input::placeholder{color:#fff}.ds-board__application.application-header{display:grid;padding:15px;width:100%;grid-template-columns:1fr auto;grid-gap:15px}.ds-board__application.application-header .right-col{justify-content:flex-end}.ds-board__application.application-header .left-col,.ds-board__application.application-header .right-col{display:flex;justify-content:space-between;align-items:center;gap:15px}.ds-board__application.application-header .left-col label,.ds-board__application.application-header .right-col label{display:flex;align-items:center}.ds-board__application.application-header .left-col .actions,.ds-board__application.application-header .right-col .actions{display:flex;gap:5px}.module-list__item .beyond-icon-button,.module-list__item .beyond-icon.error-icon,.module-list__item .beyond-icon.warning-icon{border:1px solid var(--beyond-secondary-color);border-radius:50%;padding:10px;height:3.2rem;width:3.2rem;background:var(--beyond-secondary-dark-color);fill:#fff;transition:all .3s ease-in}.module-list__item .beyond-icon-button .beyond-ripple,.module-list__item .beyond-icon.error-icon .beyond-ripple,.module-list__item .beyond-icon.warning-icon .beyond-ripple{border-radius:50%}.module-list__item .beyond-icon-button.error-icon,.module-list__item .beyond-icon.error-icon.error-icon,.module-list__item .beyond-icon.warning-icon.error-icon{background:#d2281e}.module-list__item .beyond-icon-button.warning-icon,.module-list__item .beyond-icon.error-icon.warning-icon,.module-list__item .beyond-icon.warning-icon.warning-icon{fill:#F7D994}.ds-module-list__component .ds-list.list--grid{display:grid;padding:15px;grid-template-columns:1fr 1fr 1fr;grid-gap:15px}.ds-module-list__component .ds-list.list--grid .actions-icon,.ds-module-list__component .ds-list.list--grid .beyond-popover__target{fill:#fff;position:absolute;top:5px;padding:5px;right:5px;height:25px;width:25px;z-index:999}.ds-module-list__component .ds-list.list--grid .col-end{display:flex;justify-content:flex-end}.ds-module-list__component .ds-list.list--grid .module-list__item{padding:20px;border:1px solid var(--beyond-secondary-light-color);background-image:linear-gradient(to right,#121f36 0,#050910 100%);transition:all ease-in .3s;cursor:pointer}.ds-module-list__component .ds-list.list--grid .module-list__item .badge-item+.badge-item{margin-left:8px}.ds-module-list__component .ds-list.list--grid .module-list__item:hover{background-image:linear-gradient(to right,#050910 0,#121f36 100%);box-shadow:0 5px 5px -5px #000}.ds-module-list__component .ds-list.list--grid .module-list__item h4,.ds-module-list__component .ds-list.list--grid .module-list__item h5,.ds-module-list__component .ds-list.list--grid .module-list__item h6{padding:0;margin:0}.ds-module-list__component .ds-list.list--grid .module-list__item .col{margin-top:15px}.ds-module-list__component .ds-list.list--grid .module-list__item .icon{padding:5px 8px;height:30px;width:30px;border-radius:50%;background:#000}.ds-module-list__component .ds-list.list--grid .module-list__item .icon+.icon{margin-left:5px}.ds-module-list__component .ds-list.list--grid .module-list__item .icon.icon--error{fill:#D2281E}.ds-module-list__component .ds-list.list--grid .module-list__item .icon.icon--warning{fill:#F7D994}.ds-module-list__component .module-list__item{position:relative}.ds-module-list__component .module-list__item .actions-icon,.ds-module-list__component .module-list__item .beyond-popover__target{fill:#fff}.ds-module-list__component .module-list__item .beyond-popover__target.target--opened .beyond-icon{background:#000}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions{z-index:9999}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul{list-style:none;padding:0;margin:0;background:#000!important;box-shadow:0 3px 5px var(--beyond-secondary-dark-color)}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li{padding:8px;display:flex;align-items:center;gap:8px}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li .beyond-icon{fill:var(--beyond-primary-color)}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li:hover{background:var(--beyond-secondary-color)}.ds-list.list--table .module-list__item{display:grid;grid-template-columns:1fr auto auto;align-content:center;grid-gap:15px;justify-content:space-between;align-items:center;flex-flow:row;cursor:pointer;transition:all .3s ease-in;border-bottom:1px solid var(--beyond-gray-lighter-color);padding:20px;display:grid;justify-content:space-between;align-items:center;flex-flow:row}.ds-list.list--table .module-list__item:hover{background-image:linear-gradient(to right,rgba(18,31,54,.5) 0,rgba(5,9,16,.5) 100%);transition:all .3s ease-in}.ds-list.list--table .module-list__item:last-child{border-bottom:none;margin-bottom:20px}.ds-list.list--table .module-list__item .right-col{text-align:right;justify-content:flex-end}.ds-list.list--table .module-list__item .p1,.ds-list.list--table .module-list__item h3,.ds-list.list--table .module-list__item h4{margin:0;padding:0}.ds-list.list--table .module-list__item .actions,.ds-list.list--table .module-list__item .item-information{display:flex;gap:8px}.ds-list.list--table .module-list__item .actions .action-icon:hover .beyond-icon,.ds-list.list--table .module-list__item .item-information .action-icon:hover .beyond-icon{border:1px solid var(--beyond-primary-accent-color);background:var(--beyond-primary-accent-color);transition:all .3s ease-in}.ds-list.list--table .module-list__item .actions .beyond-icon-button.error-icon .beyond-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.error-icon .beyond-icon{background:var(--beyond-error-color)}.ds-list.list--table .module-list__item .actions .beyond-icon-button,.ds-list.list--table .module-list__item .item-information .beyond-icon-button{border:1px solid var(--beyond-secondary-color);border-radius:50%;padding:10px;height:5.2rem;width:3.2rem;background:var(--beyond-secondary-dark-color);fill:var(--beyond-text-on-primary);transition:all .3s ease-in}.ds-list.list--table .module-list__item .actions .beyond-icon-button .beyond-ripple,.ds-list.list--table .module-list__item .item-information .beyond-icon-button .beyond-ripple{border-radius:50%}.ds-list.list--table .module-list__item .actions .beyond-icon-button.error-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.error-icon{background:var(--beyond-error-color)}.ds-list.list--table .module-list__item .actions .beyond-icon-button.warning-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.warning-icon{fill:var(--beyond-warning-color)}.ds-list.list--table .module-list__item h4,.ds-list.list--table .module-list__item h5,.ds-list.list--table .module-list__item h6{padding:5px 0}.ds-list.list--table .module-list__item h4.module__name,.ds-list.list--table .module-list__item h4.module__name:first-letter,.ds-list.list--table .module-list__item h5.module__name,.ds-list.list--table .module-list__item h5.module__name:first-letter,.ds-list.list--table .module-list__item h6.module__name,.ds-list.list--table .module-list__item h6.module__name:first-letter{text-transform:lowercase}.ds-list.list--table .module-list__item .processors__list{display:flex;gap:5px}.ds-list.list--table .module-list__item .actions{display:flex;gap:8px;align-items:center}.ds-board__application .tag{background:var(--beyond-secondary-light-color);color:var(--beyond-text-on-secondary);display:inline-flex;padding:3px 8px;font-size:.7rem;border-radius:2px;justify-content:center;align-items:center;cursor:pointer;text-transform:uppercase;text-align:center}.ds-board__application .tag.tag-active{background:#e4e5dc;color:var(--beyond-secondary-color)}.ds-board__application .tag.tag-error{background:var(--beyond-primary-dark-color)}.ds-board__application.application-header .actions .beyond-icon-button{transition:all .2s ease-in}.ds-board__application.application-header .actions .beyond-icon-button.active{background:var(--beyond-primary-accent-color)}');
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