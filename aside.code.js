define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/ds-select", "@beyond-js/dashboard@0.0.1/workspace-tree", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/ds-favorites", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/kernel@0.0.22/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ModuleTree = ModuleTree;
  _exports.WorspaceAside = WorspaceAside;
  _exports.hmr = void 0;

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
    AsideFavorites
  } = dependency_12;
  const {
    useBinder
  } = dependency_13;
  const {
    CurrentTexts
  } = dependency_14;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/aside",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/spinner', dependency_4], ['@beyond-js/ui/form', dependency_5], ['@beyond-js/ui/perfect-scrollbar', dependency_6], ['@beyond-js/inspect/models.legacy', dependency_7], ['@beyond-js/dashboard/ds-contexts', dependency_8], ['@beyond-js/dashboard/ds-select', dependency_9], ['@beyond-js/dashboard/workspace-tree', dependency_10], ['@beyond-js/dashboard/core-components', dependency_11], ['@beyond-js/dashboard/ds-favorites', dependency_12], ['@beyond-js/dashboard/hooks', dependency_13], ['@beyond-js/kernel/texts', dependency_14]]);

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
    return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(BeyondScrollContainer, {
      className: clsDetail
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true
    }), /*#__PURE__*/React.createElement(Control, null))));
  }
  /**************
  aside\empty.jsx
  **************/


  function Empty() {
    const {
      texts
    } = useDSAsideContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-aside__empty"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "project"
    }), texts.empty);
  }
  /***************
  aside\module.jsx
  ***************/

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
      return /*#__PURE__*/React.createElement("div", {
        className: "ds__aside__detail"
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert alert-info"
      }, /*#__PURE__*/React.createElement("h3", null, texts.module.empty.title), /*#__PURE__*/React.createElement("span", null, texts.module.empty.description)));
    }

    const {
      bundlesTree,
      static: staticFiles
    } = model;
    const specs = {};
    if (!hideTitle) specs.title = model.name;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSTree, _extends({}, specs, {
      tree: bundlesTree
    })), staticFiles && /*#__PURE__*/React.createElement(DSTree, {
      title: texts.static.title,
      tree: staticFiles
    }));
  }
  /****************
  aside\project.jsx
  ****************/

  /**
   * Renders the project tree
   *
   * renders the project tree until bundles names. When the bundle is selected it loads
   * by itself another tree.
  
   * @param tree
   * @returns {JSX.Element}
   * @constructor
   */


  function ProjectTree({
    tree
  }) {
    let {
      application,
      texts
    } = useDSAsideContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    const toPrint = [];
    texts = texts.tree;
    if (!application) return null;
    toPrint.push( /*#__PURE__*/React.createElement(DSTree, {
      title: texts.modules,
      tree: application.modulesTree,
      key: "application"
    }));
    application.libraries.forEach(library => {
      const modules = application.itemsByContainer(library.id);
      if (!modules.length) return;
      toPrint.push( /*#__PURE__*/React.createElement(DSTree, {
        key: "modules",
        title: library.library.name,
        tree: modules
      }));
    });

    const openInfo = event => {
      event.stopPropagation();
      event.preventDefault();
      workspace.openApp(application?.application?.id);
    };

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
      className: "ds-aside__header flex-row flex-space"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "row"
    }, application.application.name ?? application.id)), /*#__PURE__*/React.createElement("div", {
      className: "aside__link",
      onClick: openInfo
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "info"
    }), /*#__PURE__*/React.createElement("span", null, " Information ")), toPrint);
  }
  /***************
  aside\static.jsx
  ***************/


  function StaticsRootTree() {
    const {
      workspace: {
        project
      }
    } = useDSWorkspaceContext();
    const {
      texts
    } = useDSAsideContext();
    if (!project.application || !project.static) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "ds-aside__header"
    }, /*#__PURE__*/React.createElement("h3", null, texts.static.title)), /*#__PURE__*/React.createElement(DSTree, {
      title: texts.static.title,
      object: project.application,
      tree: project.static.tree
    }));
  }
  /*****************
  aside\template.jsx
  *****************/


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
    processors.forEach((processor, key) => output.push(getTree(processor, key, key)));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "ds-aside__header"
    }, /*#__PURE__*/React.createElement("h3", null, texts.title)), output);
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
    let cls = `ds__aside ${state?.panel ? '' : 'hide-detail'}`;
    const ref = React.useRef(null);
    useBinder([aside], () => setState(state => ({ ...state,
      panel: aside.panel,
      application: workspace?.application,
      moduleManager: workspace?.application?.moduleManager,
      modules: workspace?.application?.modules
    })));
    React.useEffect(() => {
      const controller = new Controller(workspace);

      const onChange = () => setState({ ...state,
        controller,
        modules: controller?.modules,
        application: workspace?.application,
        texts: controller?.texts,
        ready: controller?.ready,
        setActiveAside: workspace.aside.setActive,
        panel: aside.panel,
        moduleManager: workspace?.application?.moduleManager
      });

      onChange();
      controller.bind('change', onChange);
      return () => controller.unbind('change', onChange);
    }, []);
    if (!state.ready) return /*#__PURE__*/React.createElement(AsidePreload, null);
    return /*#__PURE__*/React.createElement(DSAsideContext.Provider, {
      value: { ...state,
        panels
      }
    }, /*#__PURE__*/React.createElement("aside", {
      className: cls,
      ref: ref
    }, /*#__PURE__*/React.createElement(PreAside, null), /*#__PURE__*/React.createElement(Aside, null)));
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
      className: "ds__pre-aside"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "start-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "folder"
    }))), /*#__PURE__*/React.createElement("ul", {
      className: "end-list"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "add",
      disabled: true
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "add",
      disabled: true
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "add",
      disabled: true
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "folder",
      disabled: true
    })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "settings",
      disabled: true
    })))), /*#__PURE__*/React.createElement("div", {
      className: "ds__aside__detail"
    }, /*#__PURE__*/React.createElement("div", null)));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/aside.code', '.ds__aside{display:flex;flex-direction:row;position:relative;align-items:start;background:var(--ds-aside-bg);transition:all .2s linear;height:calc(100vh - 50px)}.ds__aside.hide-detail .ds__aside__detail{width:0;display:none;transition:all .3s linear}.ds__aside .aside__link{padding:8px 15px;border-bottom:1px solid #050910;cursor:pointer;transition:.2s all ease-in}.ds__aside .aside__link:hover{background:#050910}.ds__aside .aside__link .beyond-icon{margin:0;fill:red;height:16px;width:16px;font-size:13px}.ds__aside .ds__aside__detail{padding:0;z-index:2;min-width:220px;max-width:220px;position:sticky;align-items:start;top:50px;height:calc(100vh - 50px);overflow:hidden;width:100%;transition:all .3s linear}.ds__aside .ds__aside__detail>.beyond-element-spinner{display:none}.ds__aside .ds__aside__detail.is-fetching{opacity:.3}.ds__aside .ds__aside__detail.is-fetching .ds-aside__header .beyond-icon{display:none}.ds__aside .ds__aside__detail.is-fetching>.beyond-element-spinner{display:flex;position:absolute;top:15px;right:15px}.ds__aside .ds__aside__detail .ds-tree{position:relative}.ds-aside__header{align-items:center;padding:0 0 0 15px;height:34px;border-bottom:2px solid var(--beyond-secondary-light-color);display:flex;justify-content:space-between}.ds-aside__header.flex-row{display:flex}.ds-aside__header.flex-space{justify-content:space-between}.ds-aside__header .beyond-icon{fill:var(--beyond-gray-lighter-color)}.ds-aside__header h3{margin:0;font-size:14px;padding:0}.ds-aside__header .inline__actions .beyond-icon-button{margin:0;height:30px;width:30px}.ds__pre-aside ul li{border-left:4px solid transparent}.ds__pre-aside ul li .beyond-icon-button{opacity:.7;cursor:not-allowed}.ds__pre-aside ul li.disabled{opacity:.7;cursor:none}.ds__pre-aside ul li .beyond-icon-button{height:50px;width:50px;fill:var(--beyond-text-on-secondary);transition:all 150ms linear}.ds__pre-aside ul li .beyond-icon-button svg{height:20px;width:20px}.ds__pre-aside ul li.active,.ds__pre-aside ul li:active,.ds__pre-aside ul li:hover{border-left-color:var(--beyond-primary-dark-color);background:rgba(255,255,255,.1)}.ds__pre-aside ul li.active .beyond-icon-button,.ds__pre-aside ul li:active .beyond-icon-button,.ds__pre-aside ul li:hover .beyond-icon-button{opacity:1}.ds__pre-aside{display:flex;flex-direction:column;align-items:start;position:sticky;top:50px;justify-content:space-between;height:calc(100vh - 80px);border-right:.5px solid var(--beyond-secondary-dark-color);background:var(--ds-aside-secondary-bg)}.ds__pre-aside .end-list{border-top:1px solid #fff;background:var(--ds-preaside-bg)}.ds__pre-aside ul{list-style:none;padding:0;margin:0}');
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