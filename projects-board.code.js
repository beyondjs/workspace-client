define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/dashboard@1.0.2/hooks", "@beyond-js/dashboard@1.0.2/core-components", "@beyond-js/dashboard@1.0.2/ds-contexts", "@beyond-js/kernel@0.1.4/texts", "@beyond-js/dashboard@1.0.2/models"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ApplicationsBoard = ApplicationsBoard;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    Applications
  } = dependency_3;
  const {
    ReactiveModel
  } = dependency_4;
  const {
    BeyondSpinner
  } = dependency_5;
  const {
    BeyondButton
  } = dependency_6;
  const {
    BeyondPreloadText
  } = dependency_7;
  const {
    useBinder
  } = dependency_8;
  const {
    DashboardIcon,
    DSIcon,
    DSIconButton,
    DashboardIconButton
  } = dependency_9;
  const {
    useDSWorkspaceContext
  } = dependency_10;
  const {
    CurrentTexts
  } = dependency_11;
  const {
    projectsFactory
  } = dependency_12;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/projects-board",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/inspect/reactive-model', dependency_4], ['@beyond-js/ui/spinner', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/ui/preload-text', dependency_7], ['@beyond-js/dashboard/hooks', dependency_8], ['@beyond-js/dashboard/core-components', dependency_9], ['@beyond-js/dashboard/ds-contexts', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/dashboard/models', dependency_12]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /********
  board.jsx
  ********/

  const DSApplicationsContext = React.createContext();
  const useDSApplicationsContext = () => React.useContext(DSApplicationsContext);
  function ApplicationsBoard() {
    const [state, setState] = React.useState({
      controller: AppsController,
      ready: AppsController.ready
    });
    const {
      showProjectForm,
      applications
    } = useDSWorkspaceContext();
    React.useEffect(() => {
      AppsController.setApplications(applications);
      const onChange = () => {
        setState(state => ({
          ...state,
          controller: AppsController,
          items: applications.items,
          ready: AppsController.ready,
          timeUpdated: performance.now()
        }));
      };
      AppsController.bind("change", onChange);
      onChange();
      return () => AppsController.unbind("change", onChange);
    }, []);
    if (!state.ready || !applications.fetched) return /*#__PURE__*/React.createElement(PreloadCollection, null);
    const {
      texts
    } = state.controller;
    const headerTexts = texts.header;
    let apps = applications.items.map(item => /*#__PURE__*/React.createElement(ProjectItem, {
      texts: texts,
      key: item.id,
      item: item
    }));
    if (!applications.items.length) apps = /*#__PURE__*/React.createElement(Empty, null);
    const cls = `ds-board__content ds-board__list-container${applications.items.length ? "" : " empty-container"}`;
    return /*#__PURE__*/React.createElement(DSApplicationsContext.Provider, {
      value: {
        texts,
        timeUpdated: state.timeUpdated,
        creteApp: showProjectForm
      }
    }, /*#__PURE__*/React.createElement("main", {
      className: "ds-projects-board"
    }, /*#__PURE__*/React.createElement("header", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, headerTexts.title), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "link",
      onClick: showProjectForm
    }, texts.actions.create), /*#__PURE__*/React.createElement("span", null, applications.items.length, " ", headerTexts.title)))), /*#__PURE__*/React.createElement("section", {
      className: cls
    }, apps)));
  }

  /********
  empty.jsx
  ********/

  const Empty = () => {
    const {
      texts
    } = useDSApplicationsContext();
    const {
      showProjectForm
    } = useDSWorkspaceContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-empty-container"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h2", {
      className: "primary-color"
    }, texts.empty.title), /*#__PURE__*/React.createElement("h3", {
      className: "h1 on-secondary"
    }, texts.empty.subtitle)), /*#__PURE__*/React.createElement("div", {
      className: "ds-empty_buttons-container"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: showProjectForm,
      className: "btn primary btn-primary icon-on-primary"
    }, texts.actions.create, /*#__PURE__*/React.createElement(DSIcon, {
      className: "circle",
      icon: "add"
    })), /*#__PURE__*/React.createElement("div", {
      className: "break"
    })));
  };

  /***************
  item\actions.jsx
  ***************/

  function ProjectActions({
    project: pkg
  }) {
    const {
      texts
    } = useDSApplicationsContext();
    const {
      workspace,
      toggleProcessModal
    } = useDSWorkspaceContext();

    // noinspection JSMethodCanBeStatic
    const compile = async event => {
      try {
        event.stopPropagation();
        event.preventDefault();
        const active = await workspace.getProject(pkg.id);
        workspace.active = active;
        toggleProcessModal();
      } catch (e) {
        console.error(e);
      }
    };
    const play = event => {
      event.stopPropagation();
      workspace.openApp(pkg.id, {
        tab: "distributions",
        action: "play"
      });
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "right-col actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: play,
      icon: "play",
      className: "circle",
      title: texts.play
    }), /*#__PURE__*/React.createElement(BeeActions, {
      bee: pkg.bee,
      texts: texts.actions
    }), !!pkg.errors.length && /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "error",
      title: `total: ${pkg.errors.length}`,
      className: "circle error__icon",
      onClick: event => compile(event, "client", pkg)
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "compile",
      title: texts.actions.compile,
      className: "circle",
      onClick: event => compile(event, "client", pkg)
    }));
  }

  /******************
  item\bee-action.jsx
  ******************/

  /**
   * TODO: @julio action and logic is also existing in application board, analyze if can be integrated as a unique exported component
   * @param bee
   * @param texts
   * @returns {JSX.Element|null}
   * @constructor
   */
  function BeeActions({
    bee,
    texts
  }) {
    const [fetching, setFetching] = React.useState(bee?.status === 'initialising');
    if (!bee) return null;
    const icons = {
      stopped: 'play',
      running: 'refresh'
    };
    const action = bee.status !== 'initialising' && icons[bee.status];
    const stop = async event => {
      event.stopPropagation();
      if (bee.status === 'stopped') return;
      setFetching(true);
      try {
        await bee.stop();
        setFetching(false);
      } catch (e) {
        console.error(e);
      }
    };
    const onClick = async event => {
      event.stopPropagation();
      const action = bee.status === 'stopped' ? 'start' : 'restart';
      setFetching(true);
      try {
        await bee[action]();
        setFetching(false);
      } catch (e) {
        console.error(e);
      }
    };
    const cls = `circle bee--action action--${action}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fetching ? /*#__PURE__*/React.createElement("button", {
      className: "beyond-icon-button circle button--fetching"
    }, /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "primary"
    })) : /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: onClick,
      icon: action,
      className: cls,
      title: texts[action]
    }), /*#__PURE__*/React.createElement(DSIconButton, {
      disabled: bee.status === 'stopped',
      onClick: stop,
      icon: "stop",
      className: "circle bee--action action--stop button--fetching",
      title: texts.stop
    }));
  }

  /*************
  item\index.jsx
  *************/

  function ProjectItem({
    item,
    texts
  }) {
    const application = item;
    if (!application.landed) return /*#__PURE__*/React.createElement(PreloadItem, null);
    const {
      workspace
    } = useDSWorkspaceContext();
    const modules = () => workspace.openApp(item.id);
    const description = application.description ?? texts.description;
    const openNavigator = event => {
      event.preventDefault();
      event.stopPropagation();
      workspace.openNavigator(application.id, event.currentTarget.href);
    };
    return /*#__PURE__*/React.createElement("article", {
      className: "ds-item_list",
      key: application.id,
      onClick: modules
    }, /*#__PURE__*/React.createElement("section", {
      className: "item-info"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "link bold"
    }, application.name), /*#__PURE__*/React.createElement("p", {
      className: "p1"
    }, description), application.port && /*#__PURE__*/React.createElement("a", {
      onClick: openNavigator,
      href: application.url,
      className: "link",
      target: "_blank"
    }, `localhost:${application.port}`), /*#__PURE__*/React.createElement("p", {
      className: "p2 primary-color"
    }, application.specifier)), /*#__PURE__*/React.createElement(ProjectActions, {
      project: application
    }));
  }

  /*********************
  preload\collection.jsx
  *********************/

  function PreloadCollection({
    header
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-projects-board"
    }, /*#__PURE__*/React.createElement("header", {
      className: "board__header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "17px",
      width: "50px"
    })), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("div", {
      className: "link"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "17px",
      width: "50px"
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "17px",
      width: "50px"
    }))))), /*#__PURE__*/React.createElement("section", {
      className: "ds-board__content ds-board__list-container"
    }, /*#__PURE__*/React.createElement(PreloadItem, null), /*#__PURE__*/React.createElement(PreloadItem, null)));
  }

  /*****************
  preload\header.jsx
  *****************/

  const PreloadHeader = ({
    title
  }) => {
    return /*#__PURE__*/React.createElement("header", {
      className: "list_header"
    }, /*#__PURE__*/React.createElement("h4", null, "\xA0"), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }));
  };
  /***********************
  preload\item-preload.jsx
  ***********************/

  function PreloadItem() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-item_list"
    }, /*#__PURE__*/React.createElement("section", {
      className: "item-info"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "link bold"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: `10px`,
      width: `30px`
    })), /*#__PURE__*/React.createElement("p", {
      className: "p2 primary-color"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: `7px`,
      width: `300px`,
      className: "primary"
    }))), /*#__PURE__*/React.createElement("section", {
      className: "right-col actions"
    }, /*#__PURE__*/React.createElement(DashboardIconButton, {
      icon: "play",
      className: "circle",
      disabled: true
    })));
  }

  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  const AppsController = new class Controller extends ReactiveModel {
    #createApp;
    get createApp() {
      return this.#createApp;
    }
    set createApp(value) {
      if (value === this.#createApp) return;
      this.#createApp = value;
      this.triggerEvent();
    }
    #applications;
    get applications() {
      return this.#applications;
    }
    #firstTime;
    get ready() {
      let isReady = (this.#firstTime || this.applications?.tree.landed) && this.#texts.ready;
      if (!this.#firstTime && isReady) {
        this.#firstTime = true;
      }
      return isReady;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    get items() {
      return this.#applications?.items.length ?? 0;
    }
    constructor() {
      super();
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind("change", this.triggerEvent);
    }
    setApplications(applications) {
      this.#applications = applications;
      applications.bind("change", this.triggerEvent);
    }
  }();

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/projects-board.code', '.after-loading{animation:show 1s 1}@keyframes show{0%{opacity:0}100%{height:100%;opacity:1}}.no-scroll{overflow:hidden!important}.preload-container{display:flex;position:absolute;position:absolute;top:0;left:0;bottom:0;right:0;background:#000;z-index:3;align-items:center;justify-content:center;transition:all .3s ease-in}.preload-container .animation-container{display:flex;align-items:center;justify-content:center}.preload-container.finishing-preload{background:#ff0}.preload-container .overlay{position:absolute;bottom:-100px;left:0;background:red;z-index:5;transform:skewY(11deg);width:100%;transition:all 2ms ease-in;opacity:0;height:0}.preload-container .overlay.close{transition:all .3s ease-in;height:130vh;opacity:1}.ds-board__list-container .ds-item_list{background:var(--beyond-element-primary-background-color);border-bottom:1px solid #f0f0f0;padding:1.5rem 2.5rem;display:grid;justify-content:space-between;align-items:center;flex-flow:row;cursor:pointer;transition:all .2s ease-in;grid-template-columns:1fr 1fr}.ds-board__list-container .ds-item_list.ds-item_list--sm{padding:.75rem 2.5rem}.ds-board__list-container .ds-item_list:last-child{border-bottom:none;margin-bottom:20px}.ds-board__list-container .ds-item_list:hover{transition:all .2s ease-in-out;background:var(--beyond-element-primary-hover-background-color)}.ds-board__list-container .ds-item_list .right-col{text-align:right;justify-content:flex-end}.ds-board__list-container .ds-item_list .p1,.ds-board__list-container .ds-item_list .p2,.ds-board__list-container .ds-item_list h3,.ds-board__list-container .ds-item_list h4{margin:0;padding:0}.ds-board__list-container .ds-item_list .actions,.ds-board__list-container .ds-item_list .item-information{display:flex;gap:8px}.ds-board__list-container .ds-item_list .actions .action-icon:hover .beyond-icon,.ds-board__list-container .ds-item_list .item-information .action-icon:hover .beyond-icon{border:1px solid var(--beyond-primary-accent-color);background:var(--beyond-primary-accent-color);transition:all .3s ease-in}.ds-board__list-container .ds-item_list .actions .beyond-icon-button.error__icon .beyond-icon,.ds-board__list-container .ds-item_list .item-information .beyond-icon-button.error__icon .beyond-icon{stroke:var(--danger);fill:var(--danger)}.ds-board__list-container .ds-item_list .actions .beyond-icon,.ds-board__list-container .ds-item_list .actions .beyond-icon-button,.ds-board__list-container .ds-item_list .item-information .beyond-icon,.ds-board__list-container .ds-item_list .item-information .beyond-icon-button{stroke:var(--text-color);fill:var(--text-color)}.ds-board__list-container .ds-item_list .actions .beyond-icon-button.error__icon,.ds-board__list-container .ds-item_list .actions .beyond-icon.error__icon,.ds-board__list-container .ds-item_list .item-information .beyond-icon-button.error__icon,.ds-board__list-container .ds-item_list .item-information .beyond-icon.error__icon{stroke:var(--danger);fill:var(--danger)}.ds-board__list-container .ds-item_list .blank-page{min-height:50vh;display:grid;align-items:center;justify-content:center;text-align:center}.preload-container{height:100vh;width:100vw;overflow:hidden}.ds-projects-board{height:100%}.ds-projects-board .beyond-icon-button.button--fetching{height:3.2rem;width:3.2rem;border:1px solid var(--beyond-secondary-color);opacity:.5}.ds-projects-board .ds-board__list-container{padding-top:1rem;height:100%}.ds-projects-board .ds-board__list-container.empty-container{height:calc(100% - 100px)}');
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