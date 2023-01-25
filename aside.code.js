define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/dashboard@1.0.2/ds-contexts", "@beyond-js/dashboard@1.0.2/ds-select", "@beyond-js/dashboard@1.0.2/workspace-tree", "@beyond-js/dashboard@1.0.2/core-components", "@beyond-js/dashboard@1.0.2/hooks", "@beyond-js/kernel@0.1.7/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Aside = Aside;
  _exports.AsideFavorites = AsideFavorites;
  _exports.AsideHeader = AsideHeader;
  _exports.DSAsideBody = DSAsideBody;
  _exports.EmptyAside = EmptyAside;
  _exports.ModuleTree = ModuleTree;
  _exports.WorspaceAside = WorspaceAside;
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
    BeyondButton,
    BeyondInput
  } = dependency_5;
  const {
    BeyondScrollContainer
  } = dependency_6;
  const {
    ReactiveModel
  } = dependency_7;
  const {
    DSPreAside,
    useDSAsideContext,
    DSAsideContext,
    useDSWorkspaceContext
  } = dependency_8;
  const {
    DSSelect
  } = dependency_9;
  const {
    DSTree
  } = dependency_10;
  const {
    DSIcon,
    DSIconButton
  } = dependency_11;
  const {
    useBinder
  } = dependency_12;
  const {
    CurrentTexts
  } = dependency_13;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/aside",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/ui/form', dependency_5], ['@beyond-js/ui/perfect-scrollbar', dependency_6], ['@beyond-js/inspect/reactive-model', dependency_7], ['@beyond-js/dashboard/ds-contexts', dependency_8], ['@beyond-js/dashboard/ds-select', dependency_9], ['@beyond-js/dashboard/workspace-tree', dependency_10], ['@beyond-js/dashboard/core-components', dependency_11], ['@beyond-js/dashboard/hooks', dependency_12], ['@beyond-js/kernel/texts', dependency_13]]);
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

  class Controller extends ReactiveModel {
    get ready() {
      return this.#texts.ready;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    #workspace;
    get workspace() {
      return this.#workspace;
    }
    get application() {
      return this.#workspace?.active;
    }
    get moduleManager() {
      return this.workspace?.active?.moduleManager;
    }
    get modules() {
      return this.workspace?.active?.modules;
    }
    constructor(workspace) {
      super();
      this.#workspace = workspace;
      workspace.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
    }
    clean() {
      this.#texts.unbind('change', this.triggerEvent);
    }
  }
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
  /********
  aside.jsx
  ********/

  function Aside() {
    const {
      panel
    } = useDSAsideContext();
    if (!panel) return null;
    const objectPanels = {
      application: ProjectTree,
      module: ModuleTree,
      template: TemplateRootTree,
      statics: StaticsRootTree,
      favorites: AsideFavorites
    };
    const Control = objectPanels[panel];
    const clsDetail = `ds__aside__detail`;
    return /*#__PURE__*/React.createElement("aside", {
      className: clsDetail
    }, /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "aside__spinner",
      active: true
    }), /*#__PURE__*/React.createElement(Control, null));
  }

  /************
  container.jsx
  ************/

  function WorspaceAside() {
    const {
      panels,
      workspace
    } = useDSWorkspaceContext();
    const {
      aside
    } = workspace;
    /**
     * @var panel {string} Represents the aside panel, is the control name.
     */

    const [state, setState] = React.useState({
      panel: aside.panel
    });
    let cls = `ds__aside ${state?.panel ? "" : "hide-detail"}`;
    const ref = React.useRef(null);
    useBinder([aside], () => setState(state => ({
      ...state,
      panel: aside.panel,
      application: workspace?.application,
      moduleManager: workspace?.application?.moduleManager,
      modules: workspace?.application?.modules
    })));
    React.useEffect(() => {
      const controller = new Controller(workspace);
      const onChange = () => setState({
        ...state,
        controller,
        modules: controller?.modules,
        application: workspace?.application,
        project: workspace?.active,
        texts: controller?.texts,
        ready: controller?.ready,
        setActiveAside: workspace.aside.setActive,
        panel: aside.panel,
        moduleManager: workspace?.application?.moduleManager
      });
      onChange();
      controller.bind("change", onChange);
      return () => controller.unbind("change", onChange);
    }, []);
    if (!state.ready) return /*#__PURE__*/React.createElement(AsidePreload, null);
    return /*#__PURE__*/React.createElement(DSAsideContext.Provider, {
      value: {
        ...state,
        panels
      }
    }, /*#__PURE__*/React.createElement("aside", {
      className: cls,
      ref: ref
    }, /*#__PURE__*/React.createElement(PreAside, null), /*#__PURE__*/React.createElement(Aside, null)));
  }

  /********************
  detail\body\index.jsx
  ********************/

  function DSAsideBody({
    children
  }) {
    return /*#__PURE__*/React.createElement(BeyondScrollContainer, {
      className: "ds__aside__detail__container"
    }, children);
  }

  /***************
  detail\empty.jsx
  ***************/

  /*bundle*/function EmptyAside({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds__aside--empty"
    }, /*#__PURE__*/React.createElement(AsideHeader, null, /*#__PURE__*/React.createElement("h4", null, title)), /*#__PURE__*/React.createElement("section", {
      className: "ds__aside__empty-content"
    }, children));
  }

  /**********************
  detail\header\index.jsx
  **********************/

  function AsideHeader({
    className,
    children
  }) {
    const cls = `ds-aside__header flex-row flex-space${className ? ` ${className}` : ''}`;
    return /*#__PURE__*/React.createElement("header", {
      className: cls
    }, children);
  }

  /****************
  detail\module.jsx
  ****************/

  /**
   * Render the module tree
   * @param module ModuleModel, is optional only is passed if the tree will be showed into the application tree.
   * @param hideTitle
   * @returns {JSX.Element}
   * @constructor
   */

  function ModuleTree({
    module,
    hideTitle = false
  }) {
    let {
      application: {
        moduleManager: {
          active
        }
      }
    } = useDSAsideContext();
    let {
      texts: {
        tree: texts
      }
    } = useDSAsideContext();
    const model = active;
    if (!model || !model?.bundles) {
      return /*#__PURE__*/React.createElement(EmptyAside, {
        title: texts.module.title
      }, /*#__PURE__*/React.createElement("h5", null, texts.module.empty.title), /*#__PURE__*/React.createElement("span", null, texts.module.empty.description));
    }
    const {
      bundlesTree,
      static: staticFiles
    } = model;
    const specs = {};
    if (!hideTitle) specs.title = model.name;
    return /*#__PURE__*/React.createElement(DSAsideBody, null, /*#__PURE__*/React.createElement(DSTree, _extends({}, specs, {
      tree: bundlesTree
    })), staticFiles && /*#__PURE__*/React.createElement(DSTree, {
      title: texts.static.title,
      tree: staticFiles
    }));
  }

  /*****************
  detail\project.jsx
  *****************/

  /**
   * Renders the project tree
   *
   * renders the project tree until bundles names. When the bundle is selected it loads
   * by itself another tree.
  
   * @param tree
   * @returns {JSX.Element}
   * @constructor
   */

  function ProjectTree() {
    let {
      project,
      texts
    } = useDSAsideContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    const [tree, setTree] = React.useState(project.modulesTree);
    texts = texts.tree;
    useBinder([project], () => setTree(project.modulesTree));
    if (!project || !tree) return null;
    const openInfo = event => {
      event.stopPropagation();
      event.preventDefault();
      workspace.openApp(project?.application?.id);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AsideHeader, {
      className: "right-icon flex-container"
    }, /*#__PURE__*/React.createElement("h4", null, project.application.name ?? project.id), /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: openInfo,
      icon: "info"
    })), /*#__PURE__*/React.createElement(DSAsideBody, null, /*#__PURE__*/React.createElement(DSTree, {
      title: texts.modules,
      tree: tree
    })));
  }

  /****************
  detail\static.jsx
  ****************/

  function StaticsRootTree() {
    const {
      workspace: {
        active: project
      }
    } = useDSWorkspaceContext();
    const {
      texts
    } = useDSAsideContext();
    if (!project.application || !project.static) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AsideHeader, null, /*#__PURE__*/React.createElement("h4", null, texts.static.title)), /*#__PURE__*/React.createElement(DSAsideBody, null, /*#__PURE__*/React.createElement(DSTree, {
      title: texts.static.title,
      object: project.application,
      tree: project.static.tree
    })));
  }

  /******************
  detail\template.jsx
  ******************/

  function TemplateRootTree() {
    let {
      workspace
    } = useDSWorkspaceContext();
    const {
      texts: {
        tree: {
          template: texts
        }
      }
    } = useDSAsideContext();
    const {
      application,
      global,
      processors
    } = workspace?.application?.template;
    const output = [];
    const getTree = (obj, key, title) => {
      return /*#__PURE__*/React.createElement(DSTree, {
        key: key,
        title: title,
        tree: obj,
        type: `template.${key}`
      });
    };
    output.push(getTree(application, 'application', texts.application));
    output.push(getTree(global, 'global', texts.global));
    processors?.forEach((processor, key) => output.push(getTree(processor, key, key)));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AsideHeader, null, /*#__PURE__*/React.createElement("h4", null, texts.title)), /*#__PURE__*/React.createElement(DSAsideBody, null, output));
  }

  /******************
  favorites\aside.jsx
  ******************/

  function AsideFavorites() {
    const {
      workspace: {
        application: {
          favorites
        }
      }
    } = useDSWorkspaceContext();
    const [totalFavorites, setTotalFavorites] = React.useState(favorites?.items.size);
    const [renamed, setRenamed] = React.useState(favorites?.items.size);
    const {
      texts
    } = useDSAsideContext();
    useBinder([favorites], () => setTotalFavorites(favorites.items.size));
    useBinder([favorites], () => setRenamed(performance.now()), 'favorite.renamed');
    if (!favorites.items.size) {
      return /*#__PURE__*/React.createElement(EmptyAside, {
        title: texts.favorites.title
      }, /*#__PURE__*/React.createElement("h5", null, texts.favorites.empty.title), /*#__PURE__*/React.createElement("span", null, texts.favorites.empty.description));
    }
    const items = [...favorites.items.values()];
    const output = items.map((item, key) => /*#__PURE__*/React.createElement(DSTree, {
      key: key,
      object: item,
      title: item.name,
      tree: item.tree
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AsideHeader, {
      className: "ds-aside__header"
    }, /*#__PURE__*/React.createElement("h3", null, texts?.favorites?.title)), /*#__PURE__*/React.createElement(DSAsideBody, null, output));
  }

  /************************
  favorites\rename-form.jsx
  ************************/

  function FavoritesRenameForm({
    object,
    closeModal
  }) {
    let {
      texts: {
        favorites: texts
      }
    } = useDSTreeContext();
    const [fetching, setFetching] = React.useState();
    const [name, setName] = React.useState(object.name);
    const props = {};
    if (!name) props.disabled = true;
    const onSave = async event => {
      event.stopPropagation();
      event.preventDefault();
      setFetching(true);
      await object.rename(name);
      window.setTimeout(() => {
        setFetching(false);
        closeModal(true);
      }, 300);
    };
    const onClick = event => event.stopPropagation();
    const handleName = event => {
      event.stopPropagation();
      setName(event.currentTarget.value);
    };
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      className: "xs ds-modal ds-modal__favorites"
    }, /*#__PURE__*/React.createElement("header", {
      onClick: onClick,
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.title))), /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      autoComplete: "off",
      name: "name",
      value: name,
      required: true,
      onChange: handleName
    }), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, props, {
      onClick: onSave,
      className: "primary"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : texts.actions.save)))));
  }
  /*************************
  preaside\pre-aside-tab.jsx
  *************************/

  /**
   * Represents a preaside option element.
   *
   * @param name
   * @param setActive
   * @param tab
   * @param active
   * @returns {JSX.Element}
   * @constructor
   */

  function PreAsideTab({
    name,
    tab
  }) {
    const {
      activePreAside: active
    } = useDSAsideContext();
    const cls = name === active ? 'active' : '';
    const onClick = event => {
      event.stopPropagation();
      tab.action(name);
    };
    const datas = {};
    if (tab.tippy) datas.tippy = tab.tippy;
    return /*#__PURE__*/React.createElement("li", {
      className: cls
    }, /*#__PURE__*/React.createElement(DSIconButton, _extends({
      title: tab.title,
      icon: tab.icon
    }, datas, {
      onClick: onClick
    })));
  }

  /*********************
  preaside\pre-aside.jsx
  *********************/

  function PreAside() {
    const bottomNav = [];
    const topNav = [];
    const [items, setItems] = React.useState({
      top: DSPreAside.top,
      bottom: DSPreAside.bottom
    });
    items.top.forEach((item, name) => topNav.push( /*#__PURE__*/React.createElement(PreAsideTab, {
      key: name,
      name: name,
      tab: item
    })));
    items.bottom.forEach((item, name) => bottomNav.push( /*#__PURE__*/React.createElement(PreAsideTab, {
      key: name,
      name: name,
      tab: item
    })));
    useBinder([DSPreAside], () => setItems({
      top: DSPreAside.top,
      bottom: DSPreAside.bottom
    }), 'item.added');
    return /*#__PURE__*/React.createElement("section", {
      className: "ds__pre-aside"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "start-list"
    }, topNav), /*#__PURE__*/React.createElement("ul", {
      className: "end-list"
    }, bottomNav));
  }

  /**********
  preload.jsx
  **********/

  function AsidePreload() {
    return /*#__PURE__*/React.createElement("aside", {
      className: "ds__aside hide-detail"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ds__pre-aside is-fetching"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "start-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      disabled: true,
      icon: "apps"
    }))), /*#__PURE__*/React.createElement("ul", {
      className: "end-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      disabled: true,
      icon: "newProject"
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "setting",
      disabled: true
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ds__aside__detail"
    }, /*#__PURE__*/React.createElement("div", null)));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/aside.code', '.ds__aside{display:flex;flex-direction:row;position:relative;align-items:start;background:var(--ds-aside-bg);transition:all .2s linear;height:100vh}.ds__aside .ds__aside__detail__container{height:100%}.ds__aside.hide-detail .ds__aside__detail{width:0;display:none;transition:all .3s linear}.ds__aside .ds__aside__detail{box-shadow:6px 0 12px #0000004A}.ds__aside .ds__aside__detail{padding:calc(66px - 33px) 0 0;z-index:2;min-width:220px;max-width:220px;position:sticky;align-items:start;top:0;height:100vh;overflow:hidden;font-size:.75rem;width:100%;transition:all .3s linear}.ds__aside .ds__aside__detail.h__p{padding:0 0}.ds__aside .ds__aside__detail .beyond-element-spinner.aside__spinner{display:none}.ds__aside .ds__aside__detail.is-fetching{opacity:.3}.ds__aside .ds__aside__detail.is-fetching .ds-aside__header .beyond-icon{display:none}.ds__aside .ds__aside__detail.is-fetching .beyond-element-spinner.aside__spinner{display:flex;position:absolute;top:15px;right:15px}.ds__aside .ds__aside__detail .ds-tree{position:relative}.ds__aside__detail .ds__aside--empty .ds__aside__empty-content{color:var(--secondary-text-color);padding:1rem}.ds__aside__detail .ds__aside--empty h4,.ds__aside__detail .ds__aside--empty h5{color:var(--text-color)}.ds__aside__detail .ds__aside--empty h5{margin-bottom:1rem}.ds-aside__header{align-items:center;padding:0 0 0 15px;height:34px;border-bottom:2px solid var(--beyond-secondary-light-color);display:flex;justify-content:space-between}.ds-aside__header.flex-space{justify-content:space-between}.ds-aside__header .beyond-icon-button{height:30px;transition:all .2s ease-in}.ds-aside__header .beyond-icon-button .beyond-icon{fill:var(--text-color)}.ds-aside__header .beyond-icon-button:hover .beyond-icon{fill:var(--secondary-text-color)}.ds__pre-aside ul li{border-left:4px solid transparent}.ds__pre-aside ul li.disabled{opacity:.7;cursor:not-allowed}.ds__pre-aside ul li .beyond-icon-button{height:50px;width:50px;fill:var(--beyond-text-on-secondary);cursor:pointer;transition:all 150ms linear}.ds__pre-aside ul li .beyond-icon-button svg{height:20px;width:20px}.ds__pre-aside ul li.active,.ds__pre-aside ul li:active,.ds__pre-aside ul li:hover{border-left-color:var(--beyond-primary-dark-color);background:rgba(255,255,255,.1)}.ds__pre-aside ul li.active .beyond-icon-button,.ds__pre-aside ul li:active .beyond-icon-button,.ds__pre-aside ul li:hover .beyond-icon-button{opacity:1}.ds__aside.hide-detail .ds__pre-aside{box-shadow:6px 0 12px #0000004A}.ds__aside .ds__pre-aside{display:flex;flex-direction:column;align-items:start;position:sticky;top:0;padding-top:var(--app-toolbar-height);justify-content:space-between;height:100vh;border-right:.5px solid var(--surface);background:var(--surface);z-index:2}.ds__aside .ds__pre-aside .end-list{border-top:1px solid var(--secondary)}.ds__aside .ds__pre-aside ul{list-style:none;padding:0;margin:0}');
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