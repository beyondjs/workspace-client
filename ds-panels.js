define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/perfect-scrollbar", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/workspace@1.0.5/ds-contexts", "@beyond-js/workspace@1.0.5/database", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/workspace@1.0.5/core-components", "@beyond-js/workspace@1.0.5/hooks", "@beyond-js/workspace@1.0.5/context-menu", "@beyond-js/workspace@1.0.5/ds-editor.code", "@beyond-js/workspace@1.0.5/models"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PanelTab = PanelTab;
  _exports.PanelView = PanelView;
  _exports.Panels = Panels;
  _exports.PanelsManager = void 0;
  _exports.TabIcon = TabIcon;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondScrollContainer
  } = dependency_3;
  const {
    ReactiveModel
  } = dependency_4;
  const {
    Workspace,
    useWorkspacePanelsContext,
    WorkspacePanelsContext,
    useDSWorkspaceContext
  } = dependency_5;
  const {
    DSModel
  } = dependency_6;
  const {
    TemplateApplicationsSource
  } = dependency_7;
  const {
    DSIconButton,
    DSIcon,
    DS_ICONS
  } = dependency_8;
  const {
    useBinder
  } = dependency_9;
  const {
    DSContextMenu,
    ItemMenu
  } = dependency_10;
  const {
    getEditorManager,
    EditorView
  } = dependency_11;
  const {
    projectsFactory
  } = dependency_12;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.6"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/ds-panels"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/perfect-scrollbar', dependency_3], ['@beyond-js/inspect/reactive-model', dependency_4], ['@beyond-js/workspace/ds-contexts', dependency_5], ['@beyond-js/workspace/database', dependency_6], ['@beyond-js/inspect/models.ts', dependency_7], ['@beyond-js/workspace/core-components', dependency_8], ['@beyond-js/workspace/hooks', dependency_9], ['@beyond-js/workspace/context-menu', dependency_10], ['@beyond-js/workspace/ds-editor.code', dependency_11], ['@beyond-js/workspace/models', dependency_12]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /*************
  FILE: panel.js
  *************/

  class Panel extends ReactiveModel {
    /**
     * Represents the active tab
     * @private
     */
    #activeItem;
    get activeItem() {
      return this.#activeItem;
    }
    set activeItem(value) {
      if (value === this.#activeItem) return;
      this.#activeItem = value;
      // the panel.updated event is fired to save the workspace state on indexedDB
      this.triggerEvent("panel.updated");
    }

    /**
     *
     * @private
     */
    #boards;
    get boards() {
      return this.#boards;
    }
    #editor;
    get editor() {
      return this.#editor;
    }
    #id;
    get id() {
      return this.#id;
    }
    set id(value) {
      if (this.id === value) return;
      this.#id = value;
    }
    _name;
    get name() {
      return this._name;
    }

    /**
     * The panels manager
     * @private
     */
    _parent;
    get parent() {
      return this._parent;
    }
    #source;
    #editorManager;
    #tabs = new Map();
    get tabs() {
      return this.#tabs;
    }
    #type;
    get type() {
      return this.#type;
    }
    #store;
    get workspace() {
      return this._parent.workspace;
    }
    constructor(parent, id, boardsOpened = []) {
      super();
      this.#id = id;
      this._parent = parent;
      this.#boards = parent.boards;
    }
    async loadBoards(boards) {
      const promises = [];
      if (boards) {
        boards.forEach(board => promises.push(this.openBoard(board)));
      }
      try {
        await Promise.all(promises);
        return true;
      } catch (e) {}
    }
    getData() {
      const tabs = Array.from(this.#tabs.values()).map(item => {
        let data = {
          ...item
        };
        delete data.control;
        delete data.source;
        return data;
      });
      return {
        id: this.id,
        tabs,
        active: this.#activeItem
      };
    }
    async _openTemplate(board) {
      const {
        type,
        path,
        processor
      } = board;
      const project = await projectsFactory.get(board.applicationId);
      const source = await application.templateManager.getSource(board.moduleId, board.elementType);
      if (!source) {
        console.warn(`the source ${board.sourceId} was not found`);
        return;
      }
      return this.openFile({
        type,
        source,
        path,
        project,
        processor,
        applicationId: project.application.id,
        application: project.application
      });
    }
    async openBoard(board) {
      if (board?.type !== "editor") {
        this.add(board.name, board.specs);
        return true;
      }
      if (board.elementType.startsWith("template.")) {
        return this._openTemplate(board);
      }
      const application = await projectsFactory.get(board.applicationId);
      const module = await application.moduleManager.load(board.moduleId);
      const source = await module.sources.get(board.sourceId);
      const {
        type,
        path,
        processor
      } = board;
      if (!source) {
        console.warn(`the source ${board.sourceId} was not found`);
        return;
      }
      return this.openFile({
        type,
        source,
        path,
        module,
        processor,
        applicationId: application.application.id,
        application: application.application
      });
    }

    /**
     *
     * @param type
     * @param application
     */
    createEditor(application, type) {
      const manager = getEditorManager(application);
      this.#editorManager = manager;
      this.#editor = manager.create({
        type,
        application,
        // the PLM object of application, not the manager
        id: `editor-panel-${this.id}`
      });
      this.triggerEvent();
    }

    /**
     * Open a source in a new tab into a monaco editor instance
     *
     * @param specs.path
     * @param specs.source
     * @param specs.processor
     * @param specs.module
     * @param specs.application
     * @param specs.position
     * @param specs.type
     */
    async openFile(specs) {
      let {
        source,
        path,
        processor,
        elementType,
        applicationId,
        moduleId,
        application,
        module,
        type,
        active
      } = specs;
      if (!module && !moduleId && !elementType.startsWith("template")) {
        throw new Error("The file requires the module or moduleId parameter");
      }
      if (!elementType.startsWith("template")) {
        /**
         * TODO: @julio unifies the way to get parameters in the function and simplifies it.
         *
         * @type {*}
         */
        module = await this.workspace.active.moduleManager.load(moduleId);
      }
      const project = await projectsFactory.get(applicationId ?? application.id);
      if (!project) {
        throw new Error(`the project was not found`);
      }
      if (!this.editor) await this.createEditor(project, type);
      this.editor.addFile({
        type,
        processor,
        source,
        module,
        active
      });
      if (!source) {
        console.trace("no se obtiene el source", source);
      }
      const id = `${module.id}.${path}`;
      /**
       * the activeItem property is used by
       * @type {string}
       */
      this.#activeItem = id;
      const label = elementType === "template" ? `${elementType} | ${source.filename}` : `${module.name} | ${source.filename}`;
      const tabSpecs = {
        sourceType: type,
        label,
        id: id,
        sourceId: source.id,
        type: "editor",
        processor,
        moduleId: module.id,
        applicationId: project.application.id,
        source,
        path,
        elementType
      };
      if (type === "dependency") {
        tabSpecs.label = source.label;
        tabSpecs.id = path;
      }
      /**
       * Label is used to show the user, id is used to identify de tab selected
       */
      this.tabs.set(id, tabSpecs);
      this.triggerEvent("panel.updated");
      this.triggerEvent();
      return true;
    }

    /**
     * Adds tabs that doesn't needs the editor instance
     *
     * The tab must exists in the boards object.
     * @param specs {object} bridge to pass parameters required by the board
     * @param name {string} Name of the board.
     * @param specs.label {string} Label to show on board tab.
     * @param specs?.name {string} name to identify the board.
     * @params specs?.moduleId {string} if the board to show is the board of a module, the moduleId is required
     *
     *
     */
    async add(name, specs = {}) {
      const control = this.boards.items.get(name);
      if (!control) {
        throw Error(`The board required does not exists: ${name}`);
      }
      let label = specs.label ? specs.label : control.label;
      const id = specs.id || specs.name || label;
      const projectId = name === "application" ? specs.id : specs.projectId;
      if (projectId) {
        const project = projectsFactory.get(projectId);
      }
      const finalSpecs = {
        icon: control.icon,
        projectId: specs.projectId,
        // @todo: restructure specs
        id,
        label,
        name,
        type: "content",
        path: name,
        control: control.control,
        specs
      };
      this.tabs.set(id, finalSpecs);
      this.activeItem = id;
      this.triggerEvent("panel.updated");
      this.triggerEvent();
    }

    /**
     * Set the panel as active
     */
    setActive = () => this.parent.active = this;
    setTabName(id, name) {
      const data = this.tabs.get(id);
      if (!data) return;
      data.label = name;
      this.tabs.set(id, data);
      this.triggerEvent(`tab.change.${id}`);
      this.triggerEvent("panel.updated");
    }
    async changeTab(tab) {
      if (!tab || !this.tabs.has(tab.id)) return;
      if (tab.type !== "editor") {
        this.#source = tab.source;
        this.activeItem = tab.id;
        this.triggerEvent();
        return;
      }
      const execute = async ready => {
        if (!ready) this.editor.unbind("initialised", execute);
        /**
         * TODO: @julio It's necessary to simplify the code. These lines are on
         * openBoard method too.
         * @type {unknown}
         */
        const application = await projectsFactory.get(tab.applicationId);
        const module = await application.moduleManager.load(tab.moduleId);
        const source = await module.sources.get(tab.sourceId);
        this.editor.setSource(tab.sourceType ?? "source", source);
        this.#source = tab.source;
        this.activeItem = tab.id;
        this.triggerEvent();
      };

      /**
       * Is necessary to wait for the editor has been mounted on DOM.
       */
      if (!this.editor.ready) {
        this.editor.bind("initialised", execute);
        return;
      }
      execute(true);
    }
    async closeTab(tab) {
      try {
        if (!this.tabs.has(tab.id)) return;
        if (tab.name === "application") this.workspace.closeApp(tab.specs.id);
        const keys = [...this.tabs.keys()];
        if (keys.length === 1) {
          if (this.editor) {
            this.editor.instance.dispose();
            this.#editorManager.items.delete(this.#editor.id);
          }
          this.parent.closePanel(this.id);
          this.triggerEvent("panel.updated");
          return;
        }
        const pos = keys.indexOf(tab.id);
        // if the tab to be closed is the first tab, then the next tab
        // may be the active tab, if the tab to be closed is another tab, then
        // the active tab will be the previous tab.
        this.#activeItem = pos === 0 ? keys[pos + 1] : keys[pos - 1];
        this.tabs.delete(tab.id);
        this.triggerEvent("panel.updated");
        this.triggerEvent();
      } catch (e) {
        console.error(888, e);
      }
    }
    closeTabs(whichNot) {
      if (!whichNot.constructor !== Array) whichNot = [whichNot];
      const items = [...this.tabs.keys()];
      items.forEach(item => {
        if (whichNot.includes(item)) return;
        this.#tabs.delete(item);
      });
    }
  }

  /**************
  FILE: panels.js
  **************/

  /**
   * Manage the panels opened in the view
   *
   * A panel is a tab that can contains info content and editors tabs opened.
   */
  class PanelsManager extends ReactiveModel {
    #boards;
    get boards() {
      return this.#boards;
    }
    _total = 1;
    get total() {
      return this._total;
    }
    #items = new Map();
    get items() {
      return this.#items;
    }
    _active;
    get active() {
      return this._active;
    }
    set active(panel) {
      if (this._active?.id === panel?.id) return;
      this._active = panel;
      this.triggerEvent();
    }
    _workspace;
    get workspace() {
      return this._workspace;
    }
    #ready;
    get ready() {
      return this.#ready;
    }
    #store;

    /**
     *
     * @param boards
     * @param workspace
     */
    constructor(boards, workspace) {
      super();
      this.bind("editor", this.triggerEvent);
      this.#boards = boards;
      this._workspace = workspace;
    }
    async load(data) {
      if (!data.items.size) {
        const panel = new Panel(this, 1);
        panel.add("applications");
        panel.bind("panel.updated", this.#triggerUpdate);
        this._active = panel;
        this.#items.set(1, panel);
        this.#triggerUpdate();
        this.triggerEvent();
        return;
      }
      const promises = [];
      data.items.forEach(async item => {
        const panel = new Panel(this, item.id);
        this.#items.set(item.id, panel);
        this._active = !data.active || data.active === panel.id ? panel : undefined;
        promises.push(panel.loadBoards(item.tabs ?? []));
      });
      await Promise.all(promises);
      data.items.forEach(item => {
        const activeItem = item.tabs.find(tab => tab.id === item.active);
        const panel = this.#items.get(item.id);
        if (activeItem) {
          panel.changeTab(activeItem);
        }
      });
      this.triggerEvent();
      this.#items.forEach(item => item.bind("panel.updated", this.#triggerUpdate));
    }
    #triggerUpdate = () => this.triggerEvent("panels.updated");
    getData = () => {
      const items = new Map();
      this.items.forEach(item => items.set(item.id, item.getData()));
      return {
        active: this._active.id,
        items: items
      };
    };

    /**
     * Adds a new panel
     *
     * This method receives the same parameters that panel.add. It creates
     * a new panel and once the panel has been created, call the
     * panel add method if the name and specs paremeters has been passed, if not
     * the manager will put the same panel opened on the current panel.
     *
     * @param name {string} Name of the board to open.
     * @param specs {object} Specs required to open the board. It could be change
     * per board.
     *
     */
    async add(name, specs = {}) {
      const id = this.items.size + 1;
      const active = this.active;
      const newPanel = new Panel(this, id);
      const tab = active.tabs.get(active.activeItem);
      this._active = newPanel;
      newPanel.bind("change", this.triggerEvent);
      newPanel.bind("panel.updated", this.#triggerUpdate);
      this.#items.set(id, newPanel);
      if (name) {
        await newPanel.add(name, specs);
        this.triggerEvent();
        return;
      }
      tab.type === "editor" ? await newPanel.openFile(tab) : await newPanel.add(tab.path, tab.specs);
      this.triggerEvent();
      this.#triggerUpdate();
    }

    /**
     * Remove an opened panel
     * @param id
     */
    closePanel(id) {
      if (this.items.size === 1) return;
      const keys = [...this.items.keys()];
      const pos = keys.indexOf(id);
      const active = pos === 0 ? keys[pos + 1] : keys[pos - 1];
      this._active = this.items.get(active);
      const newOrder = new Map();
      this.items.delete(id);
      [...this.items.values()].forEach((item, index) => {
        item.id = index;
        newOrder.set(index, item);
      });
      this.#items = newOrder;
      this.triggerEvent();
    }

    /**
     * Checks if a board is opened
     * @param name
     * @returns {any}
     */
    boardOpened(id) {
      return [...this.#items.values()].find(item => item.tabs.has(id));
    }
  }
  _exports.PanelsManager = PanelsManager;
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
  /***********
  tab-icon.jsx
  ***********/

  function TabIcon({
    item
  }) {
    let icon = item.icon ?? 'apps';
    window.ds = DS_ICONS;
    if (item.type === 'editor') {
      icon = DS_ICONS.hasOwnProperty(`processor.${item.processor}`) ? `file.${item.processor}` : 'code';
    }
    return /*#__PURE__*/React.createElement(DSIcon, {
      icon: icon
    });
  }

  /******
  tab.jsx
  ******/

  function PanelTab({
    panel,
    item,
    id
  }) {
    const cls = `ds__tab ${panel.activeItem === id ? ' item-active' : ''}`;
    const isUnique = panel.tabs.size === 1 && panel.parent.items.size === 1;
    const attrs = {
      className: cls
    };
    const {
      texts: {
        panels: {
          tab: texts
        }
      },
      workspace: {
        contextMenu
      }
    } = useDSWorkspaceContext();
    const {
      addPanel
    } = useWorkspacePanelsContext();
    const [unpublished, setUnpublished] = React.useState(panel?.editor?.unpublished);
    const closeAll = event => panel.closeTabs(id);
    const [showContextMenu, toggleContextMenu] = React.useState();
    const ref = React.useRef();
    let label = typeof item === 'string' ? item : item.label;
    if (!label && item.type !== 'editor' && item.path !== 'module') label = texts.labels[item.label];
    if (panel.activeItem !== id) attrs.onClick = () => changeTab(item);
    const [name, setName] = React.useState(label);
    const changeTab = item => panel.changeTab(item);
    const openContextMenu = () => {
      if (!ref.current === contextMenu.target) return;
      if (showContextMenu) return;
      toggleContextMenu({
        x: contextMenu.event.clientX,
        y: contextMenu.event.clientY
      });
    };
    useBinder([contextMenu], openContextMenu, 'fired.tab');
    useBinder([contextMenu], () => toggleContextMenu(false), 'closed');
    useBinder([panel, panel.editor], () => {
      if (item.type !== 'editor') return;
      if (item.source.id !== panel.editor.source?.id) return;
      setUnpublished(panel.editor.unpublished);
    });
    React.useEffect(() => {
      if (item.type !== 'editor') return;
      const onChange = () => {
        if (item.source?.id === panel.editor.currentSource?.id) {
          setUnpublished(panel?.editor?.unpublished);
        }
      };
      panel.editor.bind('model.changed', onChange);
      return () => panel.editor.unbind('model.changed', onChange);
    }, []);
    const onClose = event => {
      event.stopPropagation();
      panel.closeTab(item);
    };
    const IconTab = () => {
      const cls = unpublished ? 'tab__icon tab--unpublished' : 'tab__icon';
      const attrs = {
        className: cls
      };
      if (isUnique) return null;
      if (!isUnique) attrs.onClick = onClose;
      return /*#__PURE__*/React.createElement(DSIconButton, _extends({
        icon: "close",
        title: texts.actions.close
      }, attrs));
    };
    return /*#__PURE__*/React.createElement("div", _extends({
      ref: ref,
      "data-context": "tab"
    }, attrs), /*#__PURE__*/React.createElement("div", {
      className: "tab__content"
    }, /*#__PURE__*/React.createElement(TabIcon, {
      item: item
    }), /*#__PURE__*/React.createElement("span", null, name)), /*#__PURE__*/React.createElement(IconTab, null), showContextMenu && /*#__PURE__*/React.createElement(DSContextMenu, {
      unmount: toggleContextMenu,
      specs: showContextMenu
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(ItemMenu, {
      onClick: addPanel,
      icon: "splitView",
      label: texts.actions.splitRight
    }), /*#__PURE__*/React.createElement(ItemMenu, {
      onClick: onClose,
      icon: "splitView",
      label: texts.actions.close
    }), /*#__PURE__*/React.createElement(ItemMenu, {
      onClick: closeAll,
      icon: "close",
      label: texts.actions.closeAll
    }))));
  }

  /***************
  context-menu.jsx
  ***************/

  function _DSContextMenu({
    specs,
    unmount
  }) {
    const container = document.createElement('span');
    const close = () => {
      document.removeEventListener('click', close);
      unmount(false);
    };
    React.useEffect(() => {
      const body = document.querySelector('body');
      document.addEventListener('click', close);
      body.appendChild(container);
      return () => container.remove();
    });
    return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: `${specs.y}px`,
        left: `${specs.x}px`
      },
      className: "ds-context-menu item-actions"
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Una accion"), /*#__PURE__*/React.createElement("li", null, "Otra accion"))), container);
  }

  /********
  panel.jsx
  ********/

  /**
   * Represents the Panel View.
   *
   * Each panel can contain multiple boards/tabs. The view suscribes by itself
   * to the model changes and is updated from that changes without wait for
   * ProjectContext changes.
   * @param panel
   * @returns {JSX.Element}
   * @constructor
   */
  function PanelView({
    panel
  }) {
    const [state, setState] = React.useState({
      total: panel.tabs.size,
      activeTab: panel.activeItem
    });
    const {
      activeTab
    } = state;
    const tab = panel.tabs.get(panel.activeItem);
    const ref = React.useRef(null);
    const {
      total
    } = useWorkspacePanelsContext();
    useBinder([panel], () => {
      setState({
        ...state,
        total: panel.tabs.size,
        activeTab: panel.activeItem
      });
    });
    React.useEffect(() => {
      const onClick = event => panel.setActive();
      ref.current?.addEventListener("click", onClick);
      return () => ref.current?.removeEventListener("click", onClick);
    }, []);
    if (!tab) console.log("no tiene tab", panel, [...panel.tabs.keys()]);
    if (!tab || tab.type === "editor" && !panel.editor) {
      console.warn(`tab not found: ${activeTab}`);
      return null;
    }
    const Control = tab.type === "editor" ? EditorView : tab.control;
    const tabs = [];
    panel.tabs.forEach((item, id) => {
      tabs.push( /*#__PURE__*/React.createElement(PanelTab, {
        key: `tab-${panel.id}-${id}`,
        id: id,
        panel: panel,
        item: item
      }));
    });
    const specs = {
      panel: panel
    };
    if (tab.type === "editor") specs.editor = panel.editor;
    const clsPanel = `panel__container${total > 1 ? " panel__container--divided" : ""}`;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "ds__panel"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ds__tabs-container"
    }, tabs), /*#__PURE__*/React.createElement(BeyondScrollContainer, {
      className: clsPanel
    }, /*#__PURE__*/React.createElement(Control, _extends({}, specs, {
      specs: tab.specs,
      tab: tab
    }))));
  }

  /*********
  panels.jsx
  *********/

  function Panels() {
    const {
      ready,
      workspace
    } = useDSWorkspaceContext();
    const {
      panels
    } = workspace;
    const output = [];
    const container = React.useRef();
    const [state, setState] = React.useState({});
    useBinder([panels], () => {
      setState({
        ...state,
        items: panels.items
      });
    });
    if (!ready) return /*#__PURE__*/React.createElement(Preload, null);
    const pushPanel = (item, id) => /*#__PURE__*/React.createElement(PanelView, {
      specs: item.specs,
      panel: item,
      key: `panel-${id}`
    });
    panels.items.forEach((item, id) => output.push(pushPanel(item, id)));
    const addPanel = event => {
      panels.add();
    };
    const {
      vertical
    } = state;
    const panelsCss = {};
    const prop = vertical ? "gridTemplateRows" : "gridTemplateColumns";
    panelsCss[prop] = `repeat(${panels.items.size}, minmax(0, 1fr))`;
    const cls = `panels__container ${vertical ? "panels--vertical" : ""}`;
    return /*#__PURE__*/React.createElement(WorkspacePanelsContext.Provider, {
      value: {
        addPanel,
        panels,
        total: panels.items.size,
        panel: panels.active
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: container,
      style: panelsCss,
      className: cls
    }, /*#__PURE__*/React.createElement("nav", {
      className: "ds-panels__actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: addPanel,
      icon: "splitView",
      title: "Split editor"
    })), output));
  }

  /**********
  preload.jsx
  **********/

  function Preload() {
    return /*#__PURE__*/React.createElement("main", {
      className: "panels__container "
    }, /*#__PURE__*/React.createElement("nav", {
      className: "ds-panels__actions"
    }, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "splitView",
      title: "Split editor"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ds__board"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ds__tabs-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds__tab item-active"
    }, "\xA0\xA0 \xA0\xA0 \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0")), /*#__PURE__*/React.createElement(BeyondScrollContainer, {
      className: "panel__container"
    }, /*#__PURE__*/React.createElement("div", null))));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/ds-panels', '.ds__content-panel{padding:20px;width:100%}.ds__content-panel header{border-bottom:1px solid var(--beyond-primary-accent-color);margin-bottom:30px}.ds__content-panel .form-column{display:flex;gap:10px;align-items:center}.ds__content-panel .form-column select{background:0 0;color:var(--beyond-text-on-secondary);padding:8px}.ds__content-panel .form-column select option{color:#000}.panels__container .ds__panel{display:grid;grid-template-rows:auto 1fr;width:100%;flex-grow:0;box-shadow:var(--shadow-5);overflow:auto;height:100%}.panels__container .ds__panel .panels__container{box-shadow:-1px -4px 25px -3px rgba(0,0,0,.8)}.panels__container .ds__panel+.ds__panel{border-left:solid 2px #050910}.panels__container .ds__panel .board__container,.panels__container .ds__panel .tab__container{padding:2.5rem}@media (max-width:600px){.panels__container .ds__panel{flex-direction:row}}.panels__container .ds__panel>div{min-height:100%}.panels__container .ds-panels__actions{position:absolute;top:0;right:15px;z-index:1;height:34px}.panels__container .ds-panels__actions .beyond-icon-button{height:100%;width:30px;background:0 0;fill:#FFFFFF}.ds-application-view-layout .panels__container{display:grid;width:100%;height:calc(100vh - var(--app-toolbar-height));overflow:hidden;position:relative;z-index:2}.ds-application-view-layout .panels__container.panels--vertical{grid-auto-flow:row}.ds-application-view-layout .ds__tabs-container{display:flex;background:var(--surface)}.ds-application-view-layout .ds__tabs-container .ds__tab{height:34px;padding:0 .5rem;display:flex;position:relative;gap:.5rem;color:var(--secondary);align-items:center;font-size:.75rem;cursor:pointer;border:1px solid transparent;border-right:1px solid var(--secondary)}.ds-application-view-layout .ds__tabs-container .ds__tab:not(:first-child){border-left:1px solid var(--secondary)}.ds-application-view-layout .ds__tabs-container .ds__tab.item-active,.ds-application-view-layout .ds__tabs-container .ds__tab:hover{background:var(--ds-tabs-hover);border:1px solid transparent;color:var(--text-color)}.ds-application-view-layout .ds__tabs-container .ds__tab.item-active .beyond-icon.tab__icon,.ds-application-view-layout .ds__tabs-container .ds__tab:hover .beyond-icon.tab__icon{stroke-width:15px;stroke:var(--text-on-primary)}.ds-application-view-layout .ds__tabs-container .ds__tab .tab__content{display:flex;align-items:center;gap:.5rem}.ds-application-view-layout .ds__tabs-container .ds__tab .beyond-icon-button.tab__icon{height:.6rem;width:.6rem;fill:var(--secondary);color:var(--text-color)}.ds-application-view-layout .ds__tabs-container .ds__tab .beyond-icon{height:.6rem;width:.6rem;transition:all .2s linear;fill:#fff}.ds-application-view-layout .ds__tabs-container .ds__tab .beyond-icon:hover{stroke-width:15px;stroke:#fff}');
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