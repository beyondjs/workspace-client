define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/popover", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/ui@0.0.1/modal", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/tooltip", "@beyond-js/dashboard@0.0.1/uploader-workspace", "@beyond-js/dashboard@0.0.1/ds-editor.code", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/context-menu", "@beyond-js/dashboard@0.0.1/project-distributions.code", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/kernel@0.0.22/texts", "@beyond-js/dashboard@0.0.1/project-compile.code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationBoard = ApplicationBoard;
  _exports.Distributions = Distributions;
  _exports.Header = Header;
  _exports.HeaderStructure = HeaderStructure;
  _exports.ModulesList = ModulesList;
  _exports.Tab = Tab;
  _exports.TabSelector = TabSelector;
  _exports.hmr = void 0;

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
    useBinder
  } = dependency_11;
  const {
    DSModel
  } = dependency_12;
  const {
    BeyondTooltip
  } = dependency_13;
  const {
    Uploader
  } = dependency_14;
  const {
    monacoDependency
  } = dependency_15;
  const {
    FadeIn,
    DSIcon,
    DashboardIcon,
    DSIconButton
  } = dependency_16;
  const {
    DSContextMenu
  } = dependency_17;
  const {
    AppDistributions
  } = dependency_18;
  const {
    AppContext,
    useAppContext,
    useDSWorkspaceContext
  } = dependency_19;
  const {
    CurrentTexts
  } = dependency_20;
  const {
    CompileModal
  } = dependency_21;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-board",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.legacy', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/image', dependency_5], ['@beyond-js/ui/icon', dependency_6], ['@beyond-js/ui/popover', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['@beyond-js/ui/preload-text', dependency_9], ['@beyond-js/ui/modal', dependency_10], ['@beyond-js/dashboard/hooks', dependency_11], ['@beyond-js/dashboard/models', dependency_12], ['@beyond-js/dashboard/tooltip', dependency_13], ['@beyond-js/dashboard/uploader-workspace', dependency_14], ['@beyond-js/dashboard/ds-editor.code', dependency_15], ['@beyond-js/dashboard/core-components', dependency_16], ['@beyond-js/dashboard/context-menu', dependency_17], ['@beyond-js/dashboard/project-distributions.code', dependency_18], ['@beyond-js/dashboard/ds-contexts', dependency_19], ['@beyond-js/kernel/texts', dependency_20], ['@beyond-js/dashboard/project-compile.code', dependency_21]]);

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

    get application() {
      return this.#application;
    }

    #changed = false;

    get ready() {
      const dependencies = !!this.#texts.ready && !!monacoDependency?.ready;
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

    #texts;

    get texts() {
      return this.#texts?.value;
    }

    #currentId;

    get currentId() {
      return this.#currentId;
    }

    start(workspace, appId, moduleId, element) {
      if (this.#application && this.currentId !== appId) {
        this.#application.unbind('change', this.triggerEvent);
        this.#application = undefined;
      }

      const model = workspace.getProject(appId);
      this.#currentId = appId;
      model.bind('change', this.triggerEvent);
      this.#workspace = workspace;
      this.#application = model;
      this.#favorites = model.favorites;
      this.#moduleManager = model.moduleManager;
      monacoDependency.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      this.triggerEvent();
    }

  }();

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
  /*********************
  main-board\context.jsx
  *********************/


  const StaticContext = React.createContext();

  const useStaticContext = () => React.useContext(StaticContext);
  /*******************
  main-board\index.jsx
  *******************/


  const VIEWS = {
    modules: ModulesList,
    distributions: AppDistributions,
    config: Description
  };

  function ApplicationBoard(props) {
    const [displayView, setDisplayView] = React.useState(localStorage.getItem('beyond.lists.view') ?? 'table');
    const [state, setState] = React.useState({});
    const {
      panel,
      workspace,
      action
    } = useDSWorkspaceContext();
    const [showModalCompile, setShowCompileModal] = React.useState(false);
    const {
      id,
      moduleId
    } = props?.specs ?? {};
    const tab = VIEWS.hasOwnProperty(props.specs.tab) ? props.specs.tab : 'modules';
    const [selectedView, setSelectedView] = React.useState(tab);
    React.useEffect(() => {
      if (!id) return;

      const onChange = () => {
        const {
          ready
        } = controller;
        setState(state => ({ ...state,
          controller,
          ready
        }));

        if (ready) {
          let {
            application: {
              application
            }
          } = controller;
          panel.setTabName(`app.${application.id}`, application.name);
        }
      };

      controller.start(workspace, id, moduleId);
      controller.bind('change', onChange);
      if (controller.ready) onChange();
      return () => controller.unbind('change', onChange);
    }, [id]);
    if (!state.ready || controller.currentId !== id) return /*#__PURE__*/React.createElement(Preloader, null);
    const value = {
      application: controller.application,
      // @deprecated Application is a legacy name.
      project: controller.application,
      // project is the name to use instead of application.
      texts: controller.texts,
      displayView,
      setDisplayView,
      id,
      selectedView,
      setSelectedView,
      showModalCompile,
      setShowCompileModal
    };
    const Control = VIEWS[selectedView];
    const attrs = {};
    if (selectedView === 'distributions') attrs.application = controller.application;
    return /*#__PURE__*/React.createElement(AppContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds__board"
    }, /*#__PURE__*/React.createElement(HeaderStructure, null), /*#__PURE__*/React.createElement("div", {
      className: "cols-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left-col"
    }, /*#__PURE__*/React.createElement(TabSelector, null), /*#__PURE__*/React.createElement(Control, _extends({}, attrs, {
      application: controller.application
    }))))), /*#__PURE__*/React.createElement(CompileModal, null));
  }
  /*************************************
  main-board\structure\action-button.jsx
  *************************************/


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
  /******************************
  main-board\structure\header.jsx
  ******************************/


  function HeaderStructure() {
    let {
      texts,
      texts: {
        actions
      },
      application,
      showModalCompile,
      setShowCompileModal
    } = useAppContext();
    const {
      panel,
      workspace
    } = useDSWorkspaceContext();
    const model = application?.application;
    const [state, setState] = React.useState({});
    const [processed, setProcessed] = React.useState(application.moduleManager.processed);
    if (!model) return null;
    const {
      declarations
    } = model;
    const {
      itemsProcessed,
      total
    } = declarations;

    const openNavigator = event => {
      event.preventDefault();
      event.stopPropagation();
      workspace.openNavigator(model.id, model.url, true);
    };

    useBinder([model, declarations], () => setState({}));
    useBinder([application.moduleManager], () => setProcessed(application.moduleManager.processed));

    const generateDeclarations = () => declarations.update();

    const openDistributions = event => {
      event.preventDefault();
      workspace.openBoard('settings', {
        tab: 'apps'
      });
    };

    const compile = event => {
      event.stopPropagation();
      event.preventDefault();
      setShowCompileModal(true);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "application__detail sticky-content"
    }, /*#__PURE__*/React.createElement("section", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, model.name, " ", /*#__PURE__*/React.createElement("small", null, `(id: ${model.id})`)), /*#__PURE__*/React.createElement("span", {
      className: "pathname"
    }, model.path), model.url && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      onClick: openNavigator,
      href: model.url,
      className: "link",
      target: "_blank"
    }, model.url))), /*#__PURE__*/React.createElement("div", {
      className: "board__header__actions flex-center flex-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "scanned__section  flex-center flex-container"
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, texts.scanner.title), /*#__PURE__*/React.createElement("div", {
      className: "detail_item"
    }, processed, " / ", application.moduleManager.total), /*#__PURE__*/React.createElement(DSProcessButton, {
      title: texts.actions.scanAll,
      onClick: application.moduleManager.loadAll,
      className: "on-primary circle",
      icon: "scan"
    })), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: openDistributions,
      icon: "distributions",
      title: texts.actions.distributions
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: compile,
      icon: "compile",
      title: texts.actions.compile
    }), /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: generateDeclarations,
      className: "btn primary"
    }, !declarations.processing ? /*#__PURE__*/React.createElement(React.Fragment, null, actions.declarations) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary"
    }), `${actions.generatingDeclarations} ${itemsProcessed}/${total}`)))));
  }
  /**************************************************
  main-board\structure\header\distributions\index.jsx
  **************************************************/


  function Distributions() {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  /************************************
  main-board\structure\header\index.jsx
  ************************************/


  function Header() {
    let {
      texts,
      texts: {
        actions
      },
      application,
      setShowCompileModal
    } = useAppContext();
    const {
      panel,
      workspace
    } = useDSWorkspaceContext();
    const model = application?.application;
    const [state, setState] = React.useState({});
    const [processed, setProcessed] = React.useState(application.moduleManager.processed);
    if (!model) return null;
    const {
      declarations
    } = model;
    const {
      itemsProcessed,
      total
    } = declarations;

    const openNavigator = event => {
      event.preventDefault();
      event.stopPropagation();
      workspace.openNavigator(model.id, model.url, true);
    };

    useBinder([model, declarations], () => setState({}));
    useBinder([application.moduleManager], () => setProcessed(application.moduleManager.processed));

    const generateDeclarations = () => declarations.update();

    const openDistributions = event => {
      event.preventDefault();
      workspace.openBoard('settings', {
        tab: 'apps'
      });
    };

    const compile = event => {
      event.stopPropagation();
      event.preventDefault();
      setShowCompileModal(true);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "application__detail sticky-content"
    }, /*#__PURE__*/React.createElement("section", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, model.name, " ", /*#__PURE__*/React.createElement("small", null, `(id: ${model.id})`)), /*#__PURE__*/React.createElement("span", {
      className: "pathname"
    }, model.path), model.url && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      onClick: openNavigator,
      href: model.url,
      className: "link",
      target: "_blank"
    }, model.url))), /*#__PURE__*/React.createElement("div", {
      className: "board__header__actions flex-center flex-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "scanned__section  flex-center flex-container"
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, texts.scanner.title), /*#__PURE__*/React.createElement("div", {
      className: "detail_item"
    }, processed, " / ", application.moduleManager.total), /*#__PURE__*/React.createElement(DSProcessButton, {
      title: texts.actions.scanAll,
      onClick: application.moduleManager.loadAll,
      className: "on-primary circle",
      icon: "scan"
    })), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: openDistributions,
      icon: "distributions",
      title: texts.actions.distributions
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: compile,
      icon: "compile",
      title: texts.actions.compile
    }), /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: generateDeclarations,
      className: "btn primary"
    }, !declarations.processing ? /*#__PURE__*/React.createElement(React.Fragment, null, actions.declarations) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary"
    }), `${actions.generatingDeclarations} ${itemsProcessed}/${total}`)))));
  }
  /*********************************
  main-board\structure\preloader.jsx
  *********************************/


  function Preloader() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds__board"
    }, /*#__PURE__*/React.createElement("div", {
      className: "application__detail"
    }, /*#__PURE__*/React.createElement("section", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "17px",
      width: "50px"
    })), /*#__PURE__*/React.createElement("span", {
      className: "pathname"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "150px"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "board__header__actions flex-center flex-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "scanned__section  flex-center flex-container"
    }, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "100px"
    })), /*#__PURE__*/React.createElement("div", {
      className: "detail_item"
    }, "..."), /*#__PURE__*/React.createElement("button", {
      className: "beyond-icon-button circle button--fetching"
    }, /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "primary"
    }))), /*#__PURE__*/React.createElement(BeyondButton, {
      icon: "distributions",
      className: "btn primary"
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      className: "circle bee--action action--play",
      icon: "compile"
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "play"
    }), /*#__PURE__*/React.createElement("button", {
      className: "beyond-icon-button circle button--fetching"
    }, /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "primary"
    })), /*#__PURE__*/React.createElement(BeyondButton, {
      className: "btn primary"
    }, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "pd-base"
    }, /*#__PURE__*/React.createElement("span", {
      className: "link"
    }, " ", /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "50px"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ds-board__application application-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modules-list_header"
    }, /*#__PURE__*/React.createElement("section", {
      className: "header_container"
    }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
      className: "modules-list_search-input"
    }))), /*#__PURE__*/React.createElement("section", {
      className: "header_container app__container-filter"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "50px"
    }), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "expandMore",
      className: "circle"
    }), /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "7px",
      width: "50px"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "right-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      "data-view": "grid",
      icon: "thSolid",
      className: `circle`
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      "data-view": "table",
      icon: "thSolid",
      className: `circle`
    })), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, " \xA0 \xA0\xA0\xA0\xA0\xA0"), /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, " \xA0 \xA0\xA0\xA0\xA0\xA0"), /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, " \xA0 \xA0\xA0\xA0\xA0\xA0"), /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, " \xA0 \xA0\xA0\xA0\xA0\xA0")))));
  }
  /*********************************
  main-board\structure\tabs\item.jsx
  *********************************/


  function Tab({
    name,
    value
  }) {
    const {
      selectedView,
      setSelectedView
    } = useAppContext();
    const isSelected = selectedView === value; // Esto lo dejo listo para que se apliquen los estilos correspondientes 🙂

    const activeClassName = isSelected ? 'active' : '';

    function selectTab() {
      setSelectedView(value);
    }

    return /*#__PURE__*/React.createElement("li", {
      className: "tab"
    }, /*#__PURE__*/React.createElement("button", {
      className: `tab-button ${activeClassName}`,
      onClick: selectTab
    }, /*#__PURE__*/React.createElement("span", {
      className: "tab-name"
    }, name)));
  }
  /*****************************************
  main-board\structure\tabs\tab-selector.jsx
  *****************************************/


  function TabSelector() {
    const {
      texts: {
        application: {
          tabs: texts
        }
      }
    } = useAppContext();
    return /*#__PURE__*/React.createElement("nav", {
      className: "tab-selector"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "tab-list"
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
  /*************************
  main-board\tabs\config.jsx
  *************************/


  function Description() {
    let {
      texts: {
        actions
      },
      application: {
        application
      }
    } = useAppContext();
    return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(EditField, {
      field: "title"
    }), /*#__PURE__*/React.createElement(EditField, {
      field: "description"
    }));
  }
  /***********************
  main-board\tabs\edit.jsx
  ***********************/


  function EditField({
    field
  }) {
    const [edit, setEdit] = React.useState(false);
    let {
      texts: {
        application: texts
      },
      application: {
        application
      }
    } = useAppContext();
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
  /*****************************
  main-board\tabs\list\empty.jsx
  *****************************/


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
  main-board\tabs\list\header\containers-filter.jsx
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
  main-board\tabs\list\header\filter-bundles.jsx
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
      application: model
    } = useAppContext();
    const {
      bundles
    } = model;
    const [active, setActive] = React.useState(model.filterBundle); // useBinder([model], () => setActive(model.filterBundle));

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
  /*************************************
  main-board\tabs\list\header\header.jsx
  *************************************/


  function HeaderList() {
    let {
      texts,
      displayView,
      setDisplayView
    } = useAppContext();
    texts = texts.navbar;
    /**
     * Changes the view from list view to grid and vice versa
     * @param event
     */

    const changeView = event => {
      const target = event.currentTarget;
      const {
        view
      } = target.dataset; //remove all active classes in display button

      const removeActive = item => item.classList.remove('active');

      target.closest('.actions').querySelectorAll('.beyond-icon-button').forEach(removeActive);
      target.classList.add('active');
      localStorage.setItem('beyond.lists.view', view);
      setDisplayView(view);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "ds-board__application application-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "left-col"
    }, /*#__PURE__*/React.createElement(SearchForm, null)), /*#__PURE__*/React.createElement("div", {
      className: "right-col"
    }, /*#__PURE__*/React.createElement("div", {
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
    })), /*#__PURE__*/React.createElement(FilterBundles, {
      texts: texts
    })));
  }
  /******************************************
  main-board\tabs\list\header\search-form.jsx
  ******************************************/


  function SearchForm() {
    const [showFinder] = React.useState(false);
    const [toFound, setToFound] = React.useState('');
    const {
      addModule,
      texts,
      application: model
    } = useAppContext();

    const onChange = event => {
      setToFound(event.currentTarget.value);
      model.filterText = event.currentTarget.value;
    };

    const searcher = React.useRef();
    React.useEffect(() => {
      if (showFinder) searcher.current.focus();
    });

    const search = event => {
      event.preventDefault();
      setTitle(toFound);
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
  main-board\tabs\list\header\service.jsx
  **************************************/


  function ServiceActions() {
    let {
      application
    } = useAppContext();
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
  /************************************
  main-board\tabs\list\item\actions.jsx
  ************************************/


  function ItemActions({
    am
  }) {
    const [state, setState] = React.useState({
      modal: false,
      confirm: false
    });
    const [showContextMenu, toggleContextMenu] = React.useState();

    const updateState = newState => setState({ ...state,
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
  /******************************************
  main-board\tabs\list\item\actions\clone.jsx
  ******************************************/


  function ItemCloneAction({
    am,
    onClose
  }) {
    const [state, setState] = React.useState({
      modal: false,
      confirm: false
    });

    const updateState = newState => setState({ ...state,
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
  /*******************************************
  main-board\tabs\list\item\actions\delete.jsx
  *******************************************/


  function ItemDeleteAction({
    am,
    onClose
  }) {
    const [state, setState] = React.useState({
      modal: false
    });

    const updateState = newState => setState({ ...state,
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
  /**************************************
  main-board\tabs\list\item\grid-item.jsx
  **************************************/

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
    } = useAppContext();
    const {
      errors,
      warnings
    } = am.module;
    let {
      path,
      name
    } = am.module;
    path = path.toLowerCase().replace(application.application.path.toLowerCase(), '');
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
  /****************************************
  main-board\tabs\list\item\information.jsx
  ****************************************/


  function ModuleInformation({
    am
  }) {
    if (!am) return null;
    const {
      application,
      navigateModule
    } = useAppContext();
    const link = am.route ? `${application.application.url}${am.route.toLowerCase()}` : '';
    let {
      path,
      name
    } = am.module;
    path = path.toLowerCase().replace(application.application.path.toLowerCase(), '');

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
      className: "lower"
    }, path), name && /*#__PURE__*/React.createElement("h6", {
      className: "module__name primary-color"
    }, name), am.route && /*#__PURE__*/React.createElement("span", {
      target: "_blank",
      className: "link acent",
      onClick: navigate
    }, " ", route));
  }
  /*********************************
  main-board\tabs\list\item\item.jsx
  *********************************/

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
  /*********************************
  main-board\tabs\list\item\link.jsx
  *********************************/


  function ModuleLink({
    am,
    children
  }) {
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      project
    } = useAppContext();

    const showModule = event => {
      event.stopPropagation();
      event.preventDefault();
      workspace.openBoard('module', {
        label: am.module.pathname,
        moduleId: am.module.id,
        projectId: project.application.id
      });
    };

    return /*#__PURE__*/React.createElement("article", {
      className: "module-list__item",
      onClick: showModule
    }, children);
  }
  /***************************************
  main-board\tabs\list\item\processors.jsx
  ***************************************/


  function Processors({
    am
  }) {
    const bundles = am.bundles;
    const processors = new Set(); //todo: @julio
    //todo: set logic directly in the Module Item object

    bundles.forEach(bundle => bundle.processors.forEach(processor => processors.add(processor.name)));
    const items = [...processors].map(item => /*#__PURE__*/React.createElement("span", {
      key: `processor-${item}`,
      className: "badge-item"
    }, item));
    return /*#__PURE__*/React.createElement(React.Fragment, null, items);
  }
  /****************************
  main-board\tabs\list\list.jsx
  ****************************/


  function ModulesList() {
    const {
      filterBundle,
      application
    } = useAppContext();
    let {
      texts,
      displayView
    } = useAppContext();
    useBinder([application], () => setItems(application?.items));
    if (!application) return null;
    const [items, setItems] = React.useState(application?.items ?? []);
    texts = texts.modules;
    if (!items.length) return /*#__PURE__*/React.createElement(Empty, {
      texts: texts
    });
    const Control = displayView === 'table' ? Item : GridItem;
    const output = items.map(item => /*#__PURE__*/React.createElement(Control, {
      am: item,
      key: item.id
    }));
    const cls = `ds-list list--${displayView}`;
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-board__list-container ds-module-list__component"
    }, /*#__PURE__*/React.createElement(HeaderList, null), /*#__PURE__*/React.createElement("div", {
      className: cls
    }, output), !output?.length && /*#__PURE__*/React.createElement(Empty, {
      texts: texts,
      type: filterBundle
    }));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/project-board.code', '.ds-board__application.ds__board{padding:20px}.workspace__board{padding:20px}.ds__board .application__detail{z-index:10}.ds__board .application__detail .board__header__actions{display:flex;align-content:center;justify-content:center;gap:10px}.ds__board .application__detail .board__header__actions .beyond-icon-button.action--play{fill:green;border:1px solid rgba(0,128,0,.2)}.ds__board .application__detail .board__header__actions .beyond-icon-button.action--stop{fill:red;border:1px solid rgba(255,0,0,.2);background:rgba(255,0,0,.2)}.ds__board .item-information{display:grid;grid-gap:8px;align-items:center;margin-top:15px}.ds__board .item-information .description-item{background:#333;padding:5px 15px;display:flex;justify-content:space-between;transition:all .2s ease-in;cursor:pointer}.ds__board .item-information .description-item:hover{background:#262626}.ds__board .item-information .description-item:hover .beyond-icon-button{opacity:1}.ds__board .item-information .description-item .beyond-icon-button{opacity:.3;transition:all .2s ease-in}.ds__board .item-information .description-item .beyond-icon-button svg{transition:all .2s ease-in;fill:var(--beyond-text-on-secondary)}.ds__board .item-information.item-information--edit .form-group{display:grid;grid-template-columns:1fr;grid-gap:5px;width:100%}.ds__board .item-information.item-information--edit .form-group input{background:#333;outline:0!important;color:var(--beyond-text-on-secondary);border:1px solid #f0f0f0;padding:15px;font-size:16px}.ds__board .item-information.item-information--edit .form-group input:hover{border-color:#e4e5dc}.ds__board .item-information.item-information--edit .form-group .form__actions{margin:15px;display:flex;gap:8px;justify-content:flex-end}.cols-container{display:grid;grid-template-columns:1fr;position:relative}.cols-container .left-col .container-distributions .header-distributions{padding:1rem 2.5rem;display:flex;justify-content:space-between;align-items:center}.cols-container .left-col .container-distributions .list-distributions{width:100%;height:100%;padding:0 2.5rem;display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;align-content:center}.cols-container .left-col .container-distributions .list-distributions .item-distribution{background:var(--beyond-secondary-color);box-shadow:0 1rem 10px 1px var(--beyond-secondary-dark-color);border:1px solid transparent;border-radius:.2rem;list-style:none;cursor:pointer;padding:2rem;display:flex;justify-content:space-between;align-items:center}.cols-container .left-col .container-distributions .list-distributions .item-distribution:hover{border:1px solid var(--beyond-text-on-primary)}.cols-container .left-col .container-distributions .list-distributions .item-distribution h2{font-weight:700;font-size:1.2rem;padding:unset;margin:.2rem 0}.cols-container .left-col .container-distributions .list-distributions .item-distribution .info-container{display:flex;flex-direction:column}.cols-container .left-col .container-distributions .list-distributions .item-distribution .info-container .item__description{color:var(--beyond-gray-color);font-size:1.2rem;margin:.1rem 0}.cols-container .left-col .container-distributions .list-distributions .item-distribution .actions-container{height:100%;display:flex;align-items:flex-end;gap:.5rem}.sticky-content{position:sticky;top:0}.modules-list_header .app__container-filter{position:relative;padding-right:0}.modules-list_header .app__container-filter .header-filter_list{position:absolute;top:100%;left:0;bottom:0;right:0;cursor:pointer;display:grid;background:rgba(5,9,16,.6);transition:all .3s ease-in-out;z-index:999;height:0;overflow:hidden;opacity:0}.modules-list_header .app__container-filter .header-filter_list.opened{opacity:1;transition:all .3s ease-in;height:auto;overflow:visible}.modules-list_header .app__container-filter .header-filter_list .header-filter_item{padding:8px 15px;transition:all .3s ease-in-out;cursor:pointer;background:rgba(5,9,16,.6)}.modules-list_header .app__container-filter .header-filter_list .header-filter_item:last-child{box-shadow:0 5px 5px -4px rgba(5,9,16,.6)}.modules-list_header .app__container-filter .header-filter_list .header-filter_item:hover{background:var(--beyond-primary-color);transition:all .3s ease-in}.modules-list_header{display:grid;width:100%;grid-template-columns:60% 40%;gap:8px}.modules-list_header .header_container{cursor:pointer;display:grid;grid-template-columns:1fr auto auto;transition:all ease-in .3s;align-items:center;border-bottom:1px solid #82837f;font-size:14px;padding:0 8px}.modules-list_header .header_container .filter-container{display:grid;grid-template-columns:1fr auto}.modules-list_header .header_container:focus-within{background:rgba(0,0,0,.4)}.modules-list_header .header_container .modules-list_search-input{border:0;background:0 0;cursor:pointer;color:#fff;outline:0;width:100%;transition:all .2s ease-in}.modules-list_header .header_container .modules-list_search-input::placeholder{color:#fff}.ds-board__application.application-header{display:grid;padding:15px;width:100%;grid-template-columns:1fr auto;grid-gap:15px}.ds-board__application.application-header .right-col{justify-content:flex-end}.ds-board__application.application-header .left-col,.ds-board__application.application-header .right-col{display:flex;justify-content:space-between;align-items:center;gap:15px}.ds-board__application.application-header .left-col label,.ds-board__application.application-header .right-col label{display:flex;align-items:center}.ds-board__application.application-header .left-col .actions,.ds-board__application.application-header .right-col .actions{display:flex;gap:5px}.module-list__item .beyond-icon-button,.module-list__item .beyond-icon.error-icon,.module-list__item .beyond-icon.warning-icon{border:1px solid var(--beyond-secondary-color);border-radius:50%;padding:10px;height:3.2rem;width:3.2rem;background:var(--beyond-secondary-dark-color);fill:#fff;transition:all .3s ease-in}.module-list__item .beyond-icon-button .beyond-ripple,.module-list__item .beyond-icon.error-icon .beyond-ripple,.module-list__item .beyond-icon.warning-icon .beyond-ripple{border-radius:50%}.module-list__item .beyond-icon-button.error-icon,.module-list__item .beyond-icon.error-icon.error-icon,.module-list__item .beyond-icon.warning-icon.error-icon{background:#d2281e}.module-list__item .beyond-icon-button.warning-icon,.module-list__item .beyond-icon.error-icon.warning-icon,.module-list__item .beyond-icon.warning-icon.warning-icon{fill:#F7D994}.ds-module-list__component .ds-list.list--grid{display:grid;padding:15px;grid-template-columns:1fr 1fr 1fr;grid-gap:15px}.ds-module-list__component .ds-list.list--grid .actions-icon,.ds-module-list__component .ds-list.list--grid .beyond-popover__target{fill:#fff;position:absolute;top:5px;padding:5px;right:5px;height:25px;width:25px;z-index:999}.ds-module-list__component .ds-list.list--grid .col-end{display:flex;justify-content:flex-end}.ds-module-list__component .ds-list.list--grid .module-list__item{padding:20px;border:1px solid var(--beyond-secondary-light-color);background-image:linear-gradient(to right,#121f36 0,#050910 100%);transition:all ease-in .3s;cursor:pointer}.ds-module-list__component .ds-list.list--grid .module-list__item .badge-item+.badge-item{margin-left:8px}.ds-module-list__component .ds-list.list--grid .module-list__item:hover{background-image:linear-gradient(to right,#050910 0,#121f36 100%);box-shadow:0 5px 5px -5px #000}.ds-module-list__component .ds-list.list--grid .module-list__item h4,.ds-module-list__component .ds-list.list--grid .module-list__item h5,.ds-module-list__component .ds-list.list--grid .module-list__item h6{padding:0;margin:0}.ds-module-list__component .ds-list.list--grid .module-list__item .col{margin-top:15px}.ds-module-list__component .ds-list.list--grid .module-list__item .icon{padding:5px 8px;height:30px;width:30px;border-radius:50%;background:#000}.ds-module-list__component .ds-list.list--grid .module-list__item .icon+.icon{margin-left:5px}.ds-module-list__component .ds-list.list--grid .module-list__item .icon.icon--error{fill:#D2281E}.ds-module-list__component .ds-list.list--grid .module-list__item .icon.icon--warning{fill:#F7D994}.ds-module-list__component .module-list__item{position:relative}.ds-module-list__component .module-list__item .actions-icon,.ds-module-list__component .module-list__item .beyond-popover__target{fill:#fff}.ds-module-list__component .module-list__item .beyond-popover__target.target--opened .beyond-icon{background:#000}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions{z-index:9999}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul{list-style:none;padding:0;margin:0;background:#000!important;box-shadow:0 3px 5px var(--beyond-secondary-dark-color)}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li{padding:8px;display:flex;align-items:center;gap:8px}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li .beyond-icon{fill:var(--beyond-primary-color)}.ds-module-list__component .module-list__item .beyond-popover__content.item-actions ul li:hover{background:var(--beyond-secondary-color)}.ds-list.list--table .module-list__item{display:grid;grid-template-columns:1fr auto auto;align-content:center;grid-gap:15px;justify-content:space-between;align-items:center;flex-flow:row;cursor:pointer;transition:all .3s ease-in;border-bottom:1px solid var(--beyond-gray-lighter-color);padding:20px;display:grid;justify-content:space-between;align-items:center;flex-flow:row}.ds-list.list--table .module-list__item:hover{background-image:linear-gradient(to right,rgba(18,31,54,.5) 0,rgba(5,9,16,.5) 100%);transition:all .3s ease-in}.ds-list.list--table .module-list__item:last-child{border-bottom:none;margin-bottom:20px}.ds-list.list--table .module-list__item .right-col{text-align:right;justify-content:flex-end}.ds-list.list--table .module-list__item .p1,.ds-list.list--table .module-list__item h3,.ds-list.list--table .module-list__item h4{margin:0;padding:0}.ds-list.list--table .module-list__item .actions,.ds-list.list--table .module-list__item .item-information{display:flex;gap:8px}.ds-list.list--table .module-list__item .actions .action-icon:hover .beyond-icon,.ds-list.list--table .module-list__item .item-information .action-icon:hover .beyond-icon{border:1px solid var(--beyond-primary-accent-color);background:var(--beyond-primary-accent-color);transition:all .3s ease-in}.ds-list.list--table .module-list__item .actions .beyond-icon-button.error-icon .beyond-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.error-icon .beyond-icon{background:var(--beyond-error-color)}.ds-list.list--table .module-list__item .actions .beyond-icon-button,.ds-list.list--table .module-list__item .item-information .beyond-icon-button{border:1px solid var(--beyond-secondary-color);border-radius:50%;padding:10px;height:5.2rem;width:3.2rem;background:var(--beyond-secondary-dark-color);fill:var(--beyond-text-on-primary);transition:all .3s ease-in}.ds-list.list--table .module-list__item .actions .beyond-icon-button .beyond-ripple,.ds-list.list--table .module-list__item .item-information .beyond-icon-button .beyond-ripple{border-radius:50%}.ds-list.list--table .module-list__item .actions .beyond-icon-button.error-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.error-icon{background:var(--beyond-error-color)}.ds-list.list--table .module-list__item .actions .beyond-icon-button.warning-icon,.ds-list.list--table .module-list__item .item-information .beyond-icon-button.warning-icon{fill:var(--beyond-warning-color)}.ds-list.list--table .module-list__item h4,.ds-list.list--table .module-list__item h5,.ds-list.list--table .module-list__item h6{padding:5px 0}.ds-list.list--table .module-list__item h4.module__name,.ds-list.list--table .module-list__item h4.module__name:first-letter,.ds-list.list--table .module-list__item h5.module__name,.ds-list.list--table .module-list__item h5.module__name:first-letter,.ds-list.list--table .module-list__item h6.module__name,.ds-list.list--table .module-list__item h6.module__name:first-letter{text-transform:lowercase}.ds-list.list--table .module-list__item .processors__list{display:flex;gap:5px}.ds-list.list--table .module-list__item .actions{display:flex;gap:8px;align-items:center}.ds-panel__static-board{display:grid;grid-template-rows:auto 1fr;padding:40px}.ds-panel__static-board .text-left{align-self:flex-start;justify-content:start}.ds-panel__static-board .text-left h3{padding:0;margin:0}.ds-panel__static-board>main{display:grid;grid-template-columns:60px 1fr;grid-gap:15px}.ds-panel__static-board>main .static__items ul{padding:0;margin:0;list-style:none;display:grid;grid-gap:5px}.ds-panel__static-board>main .static__items ul .beyond-icon-button{fill:var(--beyond-text-on-primary);stroke:var(--beyond-text-on-primary);display:grid;justify-content:center;align-items:center;width:100%;height:60px}.ds-panel__static-board>main .static__items ul li{cursor:pointer;display:grid;width:100%;position:relative;transition:.3s ease all}.ds-panel__static-board>main .static__items ul li .beyond-element-image{height:60px;margin:0;width:60px}.ds-panel__static-board>main .static__items ul li .beyond-element-image img{object-fit:contain;min-height:100%;width:100%}.ds-panel__static-board>main .static__items ul li:hover:after{content:" ";position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(255,128,86,.3)}.ds-panel__static-board>main section .beyond-element-image{max-height:100%;max-width:100%;display:inline-grid;position:relative;transition:all .3s ease-in;opacity:.9;cursor:pointer}.ds-panel__static-board>main section .beyond-element-image:hover{opacity:1}.ds-panel__static-board>main section .beyond-element-image figcaption{display:none;transition:all .3s ease-in}.ds-panel__static-board>main section .beyond-element-image:hover figcaption{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;transition:all .3s ease-in;justify-content:center;align-content:center;align-items:center;background:rgba(255,128,86,.4)}.ds-panel__static-board>main section .beyond-element-image.beyond-element-image-preload{background:0 0}.ds-panel__static-board>main section .beyond-element-image img{max-width:100%;max-height:100%;object-fit:contain}.ds-panel__static-board .static__header{display:flex;justify-content:space-between}.ds-panel__static-board .static__actions ul{display:flex;padding:0;list-style:none}.ds-panel__static-board .static__actions ul .beyond-ripple{border-radius:50%}.ds-panel__static-board .static__actions ul .beyond-icon-button{border:1px solid var(--beyond-secondary-color);border-radius:50%;background:var(--beyond-secondary-color)}.ds-panel__static-board .static__actions ul .beyond-icon-button svg{fill:#fff}.ds-board__application .tag{background:var(--beyond-secondary-light-color);color:var(--beyond-text-on-secondary);display:inline-flex;padding:3px 8px;font-size:.7rem;border-radius:2px;justify-content:center;align-items:center;cursor:pointer;text-transform:uppercase;text-align:center}.ds-board__application .tag.tag-active{background:#e4e5dc;color:var(--beyond-secondary-color)}.ds-board__application .tag.tag-error{background:var(--beyond-primary-dark-color)}.ds-board__application.application-header .actions .beyond-icon-button{transition:all .2s ease-in}.ds-board__application.application-header .actions .beyond-icon-button.active{background:var(--beyond-primary-accent-color)}');
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