define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/kernel@0.1.0/texts", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/uploader-components", "@beyond-js/dashboard@0.0.1/breadcrumb.code", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/settings.code", "@beyond-js/dashboard@0.0.1/projects-board.code", "@beyond-js/dashboard@0.0.1/project-create.code", "@beyond-js/dashboard@0.0.1/project-compile.code", "@beyond-js/dashboard@0.0.1/project-board.code", "@beyond-js/dashboard@0.0.1/static-board.code", "@beyond-js/dashboard@0.0.1/aside.code", "@beyond-js/dashboard@0.0.1/ds-navigator", "@beyond-js/dashboard@0.0.1/ds-panels", "@beyond-js/dashboard@0.0.1/ds-notifications.code", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/module-view.code", "@beyond-js/dashboard@0.0.1/module-create.code", "@beyond-js/dashboard@0.0.1/layout-header", "@beyond-js/dashboard@0.0.1/modal-distribution-select", "@beyond-js/backend@0.1.0/client"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ContextMenu = void 0;
  _exports.DSWorkspace = DSWorkspace;
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = _exports.Workspace = _exports.PortManager = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    BeyondImage
  } = dependency_3;
  const {
    BeyondButton,
    BeyondInput
  } = dependency_4;
  const {
    BeyondSpinner
  } = dependency_5;
  const {
    CurrentTexts
  } = dependency_6;
  const {
    Applications,
    ReactiveModel,
    Dashboard,
    ModuleStatic,
    ApplicationStatic
  } = dependency_7;
  const {
    useBinder
  } = dependency_8;
  const {
    BeyondAlert,
    DSIcon,
    DashboardIconButton,
    DSSpinner
  } = dependency_9;
  const {
    JidaUploader
  } = dependency_10;
  const {
    DsBreadcrumb
  } = dependency_11;
  const {
    projectsFactory,
    DSUser,
    DSModel
  } = dependency_12;
  const {
    ConfigBoard
  } = dependency_13;
  const {
    ApplicationsBoard
  } = dependency_14;
  const {
    ApplicationCreate
  } = dependency_15;
  const {
    CompileBoard
  } = dependency_16;
  const {
    ApplicationBoard
  } = dependency_17;
  const {
    StaticBoard
  } = dependency_18;
  const {
    WorspaceAside
  } = dependency_19;
  const {
    NavigatorBoard
  } = dependency_20;
  const {
    PanelsManager,
    Panels
  } = dependency_21;
  const {
    DSNotifications,
    NotificationPanel
  } = dependency_22;
  const {
    DSBoards,
    DSPreAside,
    DSWorkspaceContext,
    useDSWorkspaceContext
  } = dependency_23;
  const {
    ModuleBoard
  } = dependency_24;
  const {
    CreateModule
  } = dependency_25;
  const {
    DsHeaderBar
  } = dependency_26;
  const {
    CompilationModal
  } = dependency_27;
  const {
    backends
  } = dependency_28;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace",
      "multibundle": true
    },
    "type": "page"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/image', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/spinner', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@beyond-js/inspect/models.ts', dependency_7], ['@beyond-js/dashboard/hooks', dependency_8], ['@beyond-js/dashboard/core-components', dependency_9], ['@beyond-js/dashboard/uploader-components', dependency_10], ['@beyond-js/dashboard/breadcrumb.code', dependency_11], ['@beyond-js/dashboard/models', dependency_12], ['@beyond-js/dashboard/settings.code', dependency_13], ['@beyond-js/dashboard/projects-board.code', dependency_14], ['@beyond-js/dashboard/project-create.code', dependency_15], ['@beyond-js/dashboard/project-compile.code', dependency_16], ['@beyond-js/dashboard/project-board.code', dependency_17], ['@beyond-js/dashboard/static-board.code', dependency_18], ['@beyond-js/dashboard/aside.code', dependency_19], ['@beyond-js/dashboard/ds-navigator', dependency_20], ['@beyond-js/dashboard/ds-panels', dependency_21], ['@beyond-js/dashboard/ds-notifications.code', dependency_22], ['@beyond-js/dashboard/ds-contexts', dependency_23], ['@beyond-js/dashboard/module-view.code', dependency_24], ['@beyond-js/dashboard/module-create.code', dependency_25], ['@beyond-js/dashboard/layout-header', dependency_26], ['@beyond-js/dashboard/modal-distribution-select', dependency_27], ['@beyond-js/backend/client', dependency_28]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /*************
  FILE: aside.js
  *************/

  class WorkspaceAside extends ReactiveModel {
    #preaside;

    get preaside() {
      return this.#preaside;
    }

    #panel;

    get panel() {
      return this.#panel;
    }

    #projectItems;

    get projectItems() {
      return this.#projectItems;
    }

    #workspace;

    get workspace() {
      return this.#workspace;
    }

    constructor(parent) {
      super();
      this.#workspace = parent;
      this.#workspace.bind('change', this.#binder);
      this.#binder();
    }

    #binder = () => {
      if (!this.workspace.ready) return;
      if (!!this.workspace.active === this.#projectItems) return;
      this.workspace.active ? this.addProjectItems() : this.removeProjectItems();
    };

    removeProjectItems() {
      this.#projectItems = false;
      DSPreAside.remove(['application', 'module', 'favorites', 'add', 'template', 'statics']);
    }

    addProjectItems() {
      this.#projectItems = true;
      DSPreAside.addItems('top', {
        application: {
          action: name => {
            this.setActive(name); // this.workspace.openBoard(name);
          },
          icon: 'project',
          title: 'Aplicación',
          tippy: {
            placement: 'right'
          }
        },
        module: {
          action: this.setActive,
          icon: 'pinup',
          title: 'Modulo',
          tippy: {
            placement: 'right'
          }
        },
        favorites: {
          action: this.setActive,
          icon: 'bookmark',
          title: 'Favoritos',
          tippy: {
            placement: 'right'
          }
        },
        add: {
          action: () => this.workspace.setState({
            addModule: true
          }),
          icon: 'add',
          title: 'Crear modulo',
          tippy: {
            placement: 'right'
          }
        },
        template: {
          action: this.setActive,
          icon: 'folder',
          title: 'Template',
          tippy: {
            placement: 'right'
          }
        },
        statics: {
          action: this.setActive,
          icon: 'photoSize',
          title: 'Archivos estaticos',
          tippy: {
            placement: 'right'
          }
        },
        settings: {
          action: (name, params) => {
            this.workspace.openBoard(name, params);
          },
          icon: 'setting',
          title: 'Configuración',
          tippy: {
            placement: 'right'
          }
        }
      });
      this.triggerEvent();
    }

    setActive = (item, params = {}) => {
      if (!this.workspace.active) {
        console.error('there is any application selected');
        return;
      }

      this.#panel = this.panel !== item ? item : undefined;
      this.triggerEvent();
      this.triggerEvent('aside.updated');
    };

    load(data = {}) {
      if (!data?.panel) return;
      this.#panel = data.panel;
      this.triggerEvent();
    }

  }
  /********************
  FILE: context-menu.js
  ********************/


  class ContextMenu extends ReactiveModel {
    _event;

    get event() {
      return this._event;
    }

    get currentTarget() {
      return this.event?.currentTarget;
    }

    get target() {
      return this.event?.target;
    }

    constructor() {
      super();
      this.init();
    }

    init() {
      window.oncontextmenu = event => {
        this._event = event;
        const target = event.target;
        const parentContext = target.closest('[data-context]');

        if (target.dataset.context || parentContext) {
          event.preventDefault();
          event.stopPropagation();
          event = target.dataset.context || parentContext.dataset.context;
          this.triggerEvent('closed');
          this.triggerEvent(`fired.${event}`);
          return;
        }

        if (target.classList.contains('ds-context-menu') || target.closest('.ds-context-menu')) {
          this.triggerEvent('closed');
        }
      };
    }

  }
  /************
  FILE: page.js
  ************/


  _exports.ContextMenu = ContextMenu;

  function Page() {
    (() => {
      DSBoards.add('project', {
        control: ApplicationBoard,
        label: 'app',
        icon: 'project',
        type: 'project'
      });
      DSBoards.add('module', {
        control: ModuleBoard,
        label: 'module',
        icon: 'module'
      });
      DSBoards.add('static', {
        control: StaticBoard,
        label: 'static',
        icon: 'photoSize'
      });
      DSBoards.add('settings', {
        control: ConfigBoard,
        label: 'settings',
        icon: 'setting'
      });
      DSBoards.add('applications', {
        control: ApplicationsBoard,
        label: 'apps',
        icons: 'apps'
      });
      DSBoards.add('navigator', {
        control: NavigatorBoard,
        label: 'navigator',
        icon: 'navigator'
      });
      DSBoards.add('compile', {
        control: CompileBoard,
        label: 'compile',
        icon: 'compile'
      });
    })();

    const specs = {};

    if (this.qs.has('application_id')) {
      specs.id = this.qs.get('application_id');
    }

    if (this.qs.has('animation')) {
      specs.animation = this.qs.get('animation');
    }

    const workspace = new Workspace(specs);
    ReactDOM.render(React.createElement(DSWorkspace, {
      workspace,
      board: this.vdir,
      ...specs
    }), this.container);
    this.container.classList.add('ds-home-page');

    this.show = () => {// controller.createApp = this.vdir === 'create_app';
    };
  }
  /************
  FILE: port.js
  ************/


  class PortManager extends ReactiveModel {
    #port;

    get port() {
      return this.#port;
    }

    set port(value) {
      if (isNaN(value)) {
        throw Error('the port must be a number');
      }

      if (value === this.#port) return;
      this.#port = value;
    }

    constructor() {
      super(); // backends.register('@beyond-js/inspect', 'http://localhost:4000');
    }

  }
  /************
  FILE: tree.js
  ************/


  _exports.PortManager = PortManager;
  const TREE = {
    APPS: {
      tree: {
        properties: {
          am: true
        }
      }
    }
  };
  /****************
  FILE: uploader.js
  ****************/

  class UploaderController extends ReactiveModel {
    _uploader;

    get uploader() {
      return this._uploader;
    }

    _workspace;
    _model;

    get application() {
      return this._workspace?.application;
    }

    _ready;

    get ready() {
      return this._ready;
    }

    _interval;
    _items = new Map();

    get items() {
      return this._items;
    }

    constructor(workspace) {
      super();
      this._workspace = workspace;
      this._loadEnd = this._loadEnd.bind(this);
      this.loadImages = this.loadImages.bind(this);
      this.load();
    }

    load() {
      //TODO @ftovar cambiar por url ingreasada en el workspace por el usuario, desde donde vaya a inspeccionar el workspace
      const url = `http://localhost:4000/uploader`;
      const uploader = new JidaUploader({
        type: 'image',
        name: 'images',
        params: {},
        url: url,
        input: {
          name: 'images',
          multiple: true
        }
      });
      this._uploader = uploader;
      uploader.bind('loadend', this._loadEnd);
      uploader.bind('file.loaded', this.loadImages);
      this._ready = true;
    }

    loadImages() {
      const {
        files
      } = this.uploader;
      files.items.forEach((item, key) => this.items.set(key, item));
      clearInterval(this._interval);
      this._interval = window.setTimeout(this.triggerEvent, 0);
    }

    create(selector, dragAndDrop = undefined, model) {
      this._model = model;
      this.uploader.create(selector);
      if (dragAndDrop) this.uploader.addDragAndDrop(dragAndDrop);
      this.triggerEvent();
    }

    deleteItem(name) {
      const item = this.items.get(name);
      item.delete();
      this.items.delete(name);
      this.triggerEvent();
    }

    async _loadEnd() {
      try {
        this._fetching = true;
        this.triggerEvent();
        const model = this._model;

        const getType = () => {
          if (model.table.name === 'applications') return 'application';
          return model.table.name === 'modules' ? 'module' : 'overwrite';
        };

        const type = getType();
        type !== 'overwrite' && (await model.checkStatic());
        const specs = {
          id: model.id,
          type: type
        };
        const response = await this._uploader.publish(specs);

        for (const item of response.data) {
          if (!item.name) continue;
          const instance = this.getInstance(type, item);
          type === 'overwrite' && model.upload({
            origin: model.filename,
            overwrite: item.name
          }); //No existe el item ya que es un overwrite lo que se esta cargando

          if (!instance) continue;

          const update = async () => {
            if (!instance.found) return;
            this.items.set(item.name, instance);
            instance.off('change', update);
            this.triggerEvent();
          };

          instance.on('change', update);
          instance.fetch();
        }

        this._fetching = false;
        this.triggerEvent();
        this.triggerEvent('loadSuccess');
      } catch (e) {
        console.error(e);
      }
    }

    getInstance(type, item) {
      if (type === 'overwrite') return;
      const id = type === 'module' ? this._model.id : `application//${this._model.id}`;
      const specs = {
        identifier: {
          id: `${id}//${item.name}`
        }
      };
      const Model = type === 'module' ? ModuleStatic : ApplicationStatic;
      return new Model(specs);
    }

  }
  /*****************
  FILE: workspace.js
  *****************/


  const Workspace = class extends ReactiveModel {
    #contextMenu;

    get contextMenu() {
      return this.#contextMenu;
    }

    get types() {
      return [{}];
    }

    #panels;

    get panels() {
      return this.#panels;
    }

    #uploader;

    get uploader() {
      return this.#uploader;
    }

    #active;

    get active() {
      return this.#active;
    }

    set active(value) {
      if (value === this.active) return;
      this.#active = value;
      this.triggerEvent();
    }

    get application() {
      return this.#active;
    }

    get project() {
      return this.#active;
    }

    #appsOpened = new Set();
    #applications;

    get applications() {
      return this.#applications;
    }

    #store;
    #firstTime = true;
    #loaded;

    get ready() {
      if (this.#dsmodel?.ready && this.#firstTime && this.applications.tree.landed) this.#firstTime = false;
      const isReady = this.#user.validated && (!this.#firstTime || this.applications.tree.landed);
      return isReady && this.#texts.ready && this.#loaded;
    }

    #texts;

    get texts() {
      return this.#texts?.value;
    }

    #state = {};

    get state() {
      return this.#state;
    }

    #dashboard;

    get dashboard() {
      return this.#dashboard;
    }

    #dsmodel;

    get dsmodel() {
      return this.#dsmodel;
    }

    #aside;

    get aside() {
      return this.#aside;
    }
    /**
     * @property {DSUser}
     */


    #user;

    get user() {
      return this.#user;
    }

    #wd;

    get wd() {
      return this.#wd;
    }

    #portManager;

    constructor(specs = {}) {
      super();
      this.#portManager = new PortManager(); // if (this.#portManager.port) {
      //     this.initialise();
      // }

      this.initialise(specs);
    }

    initialise(specs) {
      this.#applications = new Applications(TREE.APPS);
      this.#dashboard = Dashboard;
      this.#user = new DSUser(this.#dashboard);
      this.applications.bind('change', this.triggerEvent);
      this.applications.bind('change', this.#addNotifications);
      this.#user.bind('change', this.triggerEvent);
      this.#applications.fetch();
      this.#dsmodel = DSModel;
      window.workspace = this;
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      this.#load(specs);
    }

    #addNotifications = () => {
      if (!this.applications.tree.landed) return;
      DSNotifications.start(this.applications.items);
    };

    async #load() {
      this.#wd = await Dashboard.getWD();
      await this.#dsmodel.initialise(this.#wd);
      await DSModel.initialise();
      this.#store = DSModel.db.store('workspace');
      let data = await this.#store.get(this.#wd);
      const apps = Array.from(data.opened.values());

      if (!!apps.length) {
        const promises = apps.map(id => projectsFactory.get(id));
        await Promise.all(promises);
      }

      if (data.activeApp) {
        this.#active = await projectsFactory.get(data.activeApp);
        if (this.#active.application.found) this.#appsOpened.add(data.activeApp);else data = await DSModel.reset(this.#wd);
      }

      this.#contextMenu = new ContextMenu();
      this.#uploader = new UploaderController(this);
      this.#aside = new WorkspaceAside(this);
      this.#aside.load(data.aside);
      this.#aside.bind('aside.updated', this.#save);
      this.#panels = new PanelsManager(DSBoards, this);
      await this.#panels.load(data.panels);
      this.#panels.bind('panels.updated', this.#save);
      this.#loaded = true;
      this.triggerEvent();
    }

    #save = () => {
      this.#store.save({
        wd: this.#wd,
        aside: {
          panel: this.aside.panel
        },
        opened: this.#appsOpened,
        panels: this.#panels.getData(),
        activeApp: this.active?.application?.id
      });
    };
    setState = state => {
      this.#state = Object.assign(this.#state, state);
      this.triggerEvent();
    };
    /**
     * Opens a board into the active panel
     * @param name
     * @param specs
     */

    openBoard = (name, specs) => {
      console.log(8, specs);
      this.#panels.active.add(name, specs);
    };
    openApp = async (id, specs) => {
      this.active = await this.getProject(id);
      this.#appsOpened.add(id);
      specs = { ...specs,
        id,
        name: `app.${id}`
      };
      this.openBoard('project', specs);
    };

    closeApp(id) {
      this.#appsOpened.delete(id);
      this.#save();
    }

    openNavigator(id, url, newTab = true) {
      const {
        panels,
        active
      } = this;
      const specs = {
        applicationId: id,
        url,
        id: `navigator.${performance.now()}`
      };

      if (panels.items.size === 1) {
        this.panels.add('navigator', specs);
        return;
      }

      const toActivateId = panels.active.id > 1 ? panels.active.id - 1 : 2;
      panels.active = panels.items.get(toActivateId);
      this.openBoard('navigator', specs);
    }
    /**
     * @deprecated application is a term that is not currently used. the correct name is project.
     * @param id
     * @param moduleId
     * @param element
     * @returns {unknown}
     */


    getApplication(id, moduleId, element) {
      if ([undefined, NaN].includes(id)) return;
      return projectsFactory.get(parseInt(id), moduleId, element);
    }

    getProject(id) {
      return projectsFactory.get(parseInt(id));
    }

    async getModuleManager(projectId, moduleId) {
      const project = await this.getProject(projectId);
      const module = await project.moduleManager.load(moduleId);
      return module;
    }
    /**
     *
     * @param specs
     */


    openFile = specs => {
      /**
       * Must be the PLM application object.
       */
      specs.application = this.application.application;
      specs.active = true;
      this.panels.active.openFile(specs);
    };
    register = async (name, code) => {
      const response = await this.user.register(name, code);
      window.setTimeout(() => {
        this.triggerEvent();
      }, 1000);
      return response;
    };
  };
  _exports.Workspace = Workspace;

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
  /******
  404.jsx
  ******/


  function Error404() {
    const {
      texts
    } = useDSWorkspaceContext();
    if (!texts) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "app__empty__container"
    }, /*#__PURE__*/React.createElement("h2", null, texts.application?.error404));
  }
  /*************
  app-errors.jsx
  *************/


  function AppErrors() {
    const {
      module,
      application
    } = useDSWorkspaceContext();
    const errors = application?.errors.map((error, i) => /*#__PURE__*/React.createElement("li", {
      key: `error-${i}`
    }, error));
    const warnings = application?.warnings.map((warnings, i) => /*#__PURE__*/React.createElement("li", {
      key: `warnings-${i}`
    }, warnings));
    return /*#__PURE__*/React.createElement("div", {
      className: "ds__workspace__errors"
    }, !!errors?.length && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "error"
    }, /*#__PURE__*/React.createElement("ul", null, errors)), !!warnings?.length && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "warning"
    }, /*#__PURE__*/React.createElement("ul", null, warnings)));
  }
  /*****************
  developer-form.jsx
  *****************/


  function DeveloperForm({
    texts,
    workspace
  }) {
    const [state, setState] = React.useState({
      name: "",
      email: ""
    });
    const ref = React.useRef();

    const handleInputChange = event => {
      const target = event.currentTarget;
      const data = {};
      data[target.name] = target.value;
      setState(state => ({ ...state,
        ...data
      }));
    };

    const handleSubmit = async e => {
      e.preventDefault();
      setState({ ...state,
        fetching: true
      });
      const container = ref.current;
      container.closest('html').classList.toggle('is-processing');
      container.classList.toggle('is-fetching');

      try {
        window.setTimeout(async () => {
          await workspace.register(state.name, state.email);
          container.classList.toggle('is-fetching');
          window.setTimeout(() => {
            container.classList.add('ending', 'ending-left');
            container.closest('html')?.classList.toggle('is-processing');
            return;
          }, 1000);
        }, 2000);
      } catch (e) {
        console.error(e);
      } // reset()

    };

    React.useEffect(() => {
      return () => {
        const container = ref.current;
        container.classList?.add('ending', 'ending-left');
        container.closest('html').classList?.toggle('is-processing');
      };
    }, []);
    const disabled = {};
    if (!state.name || !state.email || state.fetching) disabled.disabled = true;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "container__early__form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "elements__section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "logo"
    }, /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logo.png",
      s: true,
      alt: "logo"
    })), /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, texts.early.title), /*#__PURE__*/React.createElement("h4", null, texts.early.title2), state.error && /*#__PURE__*/React.createElement("h5", {
      className: "warning-text"
    }, texts.early.error)), /*#__PURE__*/React.createElement("form", {
      action: "#",
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-sub-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      name: "name",
      label: texts.early.inputs.name,
      required: true,
      value: state.name,
      onChange: handleInputChange,
      autoComplete: "off"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-sub-group"
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      name: "email",
      label: texts.early.inputs.email,
      required: true,
      value: state.email,
      onChange: handleInputChange,
      autoComplete: "off"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form__actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({
      type: "submit"
    }, disabled, {
      className: "btn secondary"
    }), state.fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      className: "on-primary",
      active: true
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, texts.early.action))), /*#__PURE__*/React.createElement("div", {
      className: "early__message"
    }, texts.early.message))));
  }
  /*******
  icon.jsx
  *******/


  function IconLogo() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-preload__icon-container"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      className: "ds-preload__icon",
      icon: {
        viewBox: '0 0 51.1 94.341',
        icon: `<g id="beyond-ales" transform="translate(0 58.014)">
                <path style="fill:#b6bdc7;"
                      d="M134.558,86.353c-1.639,6.215-2.471,12.1-2.192,15.5.286,3.471,1.683,3.847,3.666.984a43.137,43.137,0,0,0,4.522-10.109A28.74,28.74,0,0,1,134.558,86.353Zm35.834,9.609a28.705,28.705,0,0,1-8.381,2.521,43.14,43.14,0,0,0-1.137,11.018c.286,3.469,1.684,3.843,3.666.981C166.485,107.674,168.7,102.165,170.392,95.962Zm-23.269.565c-2.3,8.985-3.763,17.18-3.931,21.955-.184,5.224,1.214,5.6,3.666.981,2.241-4.223,5.065-12.054,7.566-20.98a25.534,25.534,0,0,1-7.3-1.956Z"
                      transform="translate(-132.313 -86.353)"/>
            </g>
            <g id="beyond-circle">
                <path style="fill:#d9684a;"
                      d="M128.259,81.117q-.921-.031-1.833.006a24.566,24.566,0,1,0,1.833-.006Zm-.2,5.473a19.516,19.516,0,0,1,4.345.658,19.238,19.238,0,1,1-5.774-.655c.475-.019.95-.021,1.429,0Zm9.44-22.429a11.85,11.85,0,0,0-4.7,1.2,17.688,17.688,0,0,0-5.318,3.917,45.527,45.527,0,0,0-6.429,8.65,28.413,28.413,0,0,1,8.056-.687,32.179,32.179,0,0,1,3.335-4.186c3.645-3.672,6.623-3.975,8.134,2.181a32.7,32.7,0,0,1,.827,5.642,28.5,28.5,0,0,1,6.6,5.1,46.806,46.806,0,0,0-1.246-11.534A17.7,17.7,0,0,0,144.1,68.4c-1.208-1.671-2.838-3.456-4.981-4.03a6.208,6.208,0,0,0-1.63-.206Zm-9.218,16.448q-.94-.032-1.87.007a25.07,25.07,0,1,0,1.87-.006Zm-.209,5.586a19.913,19.913,0,0,1,4.434.672,19.632,19.632,0,1,1-5.892-.669c.484-.019.969-.021,1.458,0Z"
                      transform="translate(-101.592 -64.162)"/>
            </g>`
      }
    }));
  }
  /**********
  preload.jsx
  **********/


  function AppPreload() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-application-view-layout"
    }, /*#__PURE__*/React.createElement(Toolbar, null), /*#__PURE__*/React.createElement(WorspaceAside, null), /*#__PURE__*/React.createElement("div", {
      className: "ds__main-container"
    }, children));
  }
  /*********************
  preload\collection.jsx
  *********************/


  function PreloadCollection({
    header
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header && /*#__PURE__*/React.createElement(DsHeaderBar, null, /*#__PURE__*/React.createElement("header", {
      className: "app-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "info-list"
    }, /*#__PURE__*/React.createElement("h4", null, "\xA0")))), /*#__PURE__*/React.createElement("div", {
      className: "ds-container"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PreloadHeader, {
      title: "Applications"
    }), /*#__PURE__*/React.createElement(PreloadItem, null)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(PreloadHeader, {
      title: "Libraries"
    }), /*#__PURE__*/React.createElement(PreloadItem, null), /*#__PURE__*/React.createElement(PreloadItem, null), /*#__PURE__*/React.createElement(PreloadItem, null))));
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
    }, /*#__PURE__*/React.createElement("div", {
      className: "item-info"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "link bold"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      color: "#fff",
      height: "150px"
    })), /*#__PURE__*/React.createElement("p", {
      className: "p1"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      color: "#fff",
      height: "250px"
    })), /*#__PURE__*/React.createElement("a", {
      className: "link",
      target: "_blank"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "50px"
    })), /*#__PURE__*/React.createElement("p", {
      className: "p2 primary-dark-color"
    }, /*#__PURE__*/React.createElement(BeyondPreloadText, {
      height: "50px",
      className: "primary"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "right-col actions"
    }, /*#__PURE__*/React.createElement(DashboardIconButton, {
      icon: "upload",
      className: "circle",
      disabled: true
    }), /*#__PURE__*/React.createElement(DashboardIconButton, {
      icon: "plus",
      className: "circle",
      disabled: true
    })));
  }
  /******************
  preload\welcome.jsx
  ******************/


  const PreloadWelcome = ({
    workspace,
    setReady,
    animation
  }) => {
    const ref = React.useRef();

    const onChange = () => {
      const container = ref.current;
      if (!workspace.ready) return;
      window.setTimeout(() => {
        container?.classList.add('finishing');
        window.setTimeout(() => setReady(true), 800);
      }, 1500);
    };

    useBinder([workspace], onChange);
    React.useEffect(() => document.querySelector('body').classList.add('no-scroll'), []);
    if (animation) return /*#__PURE__*/React.createElement("div", {
      className: "empty-container"
    }, /*#__PURE__*/React.createElement(DSSpinner, {
      active: true,
      className: "primary"
    }));
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "preload-container"
    }, /*#__PURE__*/React.createElement(BeyondImage, {
      src: "/images/logo.png"
    }), /*#__PURE__*/React.createElement("div", {
      className: "animation-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "circle"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        '--i': 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        '--i': 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        '--i': 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        '--i': 4
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        '--i': 5
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "animate-svg__container"
    }, /*#__PURE__*/React.createElement(IconLogo, null), /*#__PURE__*/React.createElement("div", {
      className: "line line-one"
    }), /*#__PURE__*/React.createElement("div", {
      className: "line line-one-two"
    }), /*#__PURE__*/React.createElement("div", {
      className: "line line-two"
    }), /*#__PURE__*/React.createElement("div", {
      className: "line line-two-two"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "overlay"
    }), /*#__PURE__*/React.createElement("div", {
      className: "overlay-2"
    }));
  };
  /**********
  toolbar.jsx
  **********/


  function Toolbar() {
    const {
      workspace: {
        user,
        application
      }
    } = useDSWorkspaceContext();
    const cls = "primary";
    const items = [['Home', () => workspace.openBoard('applications')]];

    if (application) {
      items.push([`${application.application.name}`, () => workspace.openApp(application.application.id)]);
    }

    return /*#__PURE__*/React.createElement("section", {
      className: `ds-toolbar ${cls}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "toolbar__aside__logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "group-items-toolbar"
    }, /*#__PURE__*/React.createElement(DsBreadcrumb, {
      items: items
    }), /*#__PURE__*/React.createElement("div", {
      className: "right__panel"
    }, /*#__PURE__*/React.createElement("section", {
      className: " user__label"
    }, user.name), /*#__PURE__*/React.createElement(NotificationPanel, null))));
  }
  /************
  workspace.jsx
  ************/


  function DSWorkspace({
    workspace,
    animation
  }) {
    const [state, setState] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [ready, setReady] = React.useState(false);

    const navigateModule = route => setState({
      navigator: route,
      openNavigator: true
    });

    const showProjectForm = () => setShowModal(true);

    const [showProjectActionsModal, setProjectActionsModal] = React.useState(false);

    const toggleProcessModal = () => setProjectActionsModal(!showProjectActionsModal);

    useBinder([workspace], () => setState({
      ready: workspace.ready,
      ...workspace.state
    }));
    React.useEffect(() => {
      DSPreAside.addToTop("projects", {
        icon: 'apps',
        title: 'Proyectos',
        tippy: {
          placement: 'right'
        },
        action: () => workspace.openBoard('applications')
      });
      DSPreAside.addItems('bottom', {
        newProject: {
          action: showProjectForm,
          icon: 'newProject',
          title: 'New Project',
          tippy: {
            placement: 'right'
          }
        },
        settings: {
          action: () => {
            workspace.openBoard('settings');
          },
          icon: 'setting',
          title: 'Configuración',
          tippy: {
            placement: 'right'
          }
        }
      });
    }, []);

    if (!workspace.ready || !ready) {
      return /*#__PURE__*/React.createElement(PreloadWelcome, {
        setReady: setReady,
        animation: animation,
        workspace: workspace
      });
    }

    const {
      texts,
      applications,
      active,
      panels
    } = workspace;
    const value = {
      workspace,
      texts,
      applications,
      navigateModule,
      active,
      panels,
      ready: workspace.ready,
      panel: panels.active,
      toggleProcessModal,
      showProjectForm,
      showModuleForm: () => setState({
        addModule: true
      })
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSWorkspaceContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-application-view-layout"
    }, /*#__PURE__*/React.createElement(Toolbar, null), /*#__PURE__*/React.createElement(AppErrors, null), /*#__PURE__*/React.createElement(WorspaceAside, null), /*#__PURE__*/React.createElement("div", {
      className: "ds__main-container"
    }, /*#__PURE__*/React.createElement(Panels, null)))), showModal && /*#__PURE__*/React.createElement(ApplicationCreate, {
      workspace: workspace,
      closeModal: () => setShowModal(false)
    }), state.addModule && /*#__PURE__*/React.createElement(CreateModule, {
      workspace: workspace,
      onClose: () => workspace.setState({
        addModule: false
      })
    }), showProjectActionsModal && /*#__PURE__*/React.createElement(CompilationModal, {
      workspace: workspace,
      onClose: () => setProjectActionsModal(false)
    }));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/workspace.page', '.preload-container .circle span{position:absolute;top:0;left:0;bottom:0;right:0;border-radius:50%;background:#050910;height:400px;width:400px;margin:auto;animation:pulse 2.5s linear infinite;animation-delay:calc(.5s * var(--i));transition:all .3s ease-in}@keyframes pulse{0%{transform:scale(1);opacity:.5}90%{transform:scale(3);opacity:.75}100%{transform:scale(4);opacity:0}}.preload-container.finishing .beyond-element-image{position:absolute;margin:auto;z-index:10;transition:all 1.3s ease-in-out;animation:appear 2s 1;overflow:hidden}.preload-container.finishing .animation-container{height:100%;width:100%;transform:rotate(0);transition:all .3s linear}.preload-container.finishing .animation-container .line{animation:0;transition:all .1s linear;opacity:0}.preload-container.finishing .animation-container .animate-svg__container .ds-preload__icon-container{animation:twist .9s 1;transform-origin:center;transform-box:fill-box;animation-fill-mode:forwards}.preload-container.finishing .animation-container .animate-svg__container .ds-preload__icon-container .ds-preload__icon{height:88px;left:-22px}@keyframes appear{0%{height:0;width:0}90%{height:auto;width:auto;opacity:1}}@keyframes twist{from{transform:rotate(0)}to{transform:rotate(360deg);opacity:0}}.preload-container .beyond-element-image{opacity:0;position:absolute;margin:auto}.preload-container .animation-container{position:relative;height:50%;transition:all .3s ease-in;width:50%;transform:rotate(30deg)}.preload-container .animation-container .animate-svg__container{align-items:center;justify-content:center;display:flex;position:absolute;top:0;left:0;bottom:0;right:0}.preload-container .animation-container .animate-svg__container .ds-preload__icon{z-index:20;height:150px;width:150px;margin:auto;animation:rotate 2s linear infinite;transform-origin:center;transform-box:fill-box;animation-fill-mode:forwards}.preload-container .animation-container .line{position:absolute;height:100px;width:2px;border:2px solid;z-index:1;margin:15px;transform:rotate(30deg);animation:move .3s infinite;animation-fill-mode:forwards}.preload-container .animation-container .line.line-one{margin-top:-100px;margin-left:-200px}.preload-container .animation-container .line.line-one-two{margin-top:-280px;margin-left:-80px;border-color:rgba(255,255,200,.1)}.preload-container .animation-container .line.line-three{margin-left:-20px;border-color:rgba(255,255,200,.1);margin-top:-150px;display:none}.preload-container .animation-container .line.line-two{margin-left:200px;margin-top:150px}.preload-container .animation-container .line.line-two-two{border-color:rgba(255,255,200,.1);margin-left:130px;margin-top:30px}@keyframes move{from{transform:translateY(-150px)}to{transform:translateY(150px)}}@keyframes rotate{0%{transform:rotate(0)}13%{transform:rotate(30deg) scale(1.1)}26%{transform:rotate(45deg) scale(1.01)}39%{transform:rotate(30deg) scale(1)}50%{transform:rotate(0) scale(1.1)}63%{transform:rotate(-30deg) scale(1.01)}76%{transform:rotate(-45deg) scale(1.02)}89%{transform:rotate(-30deg)}}.container__early__form{display:flex;align-items:center;justify-content:center;height:100vh;justify-items:center;flex-direction:column;max-width:500px;margin:auto;-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{.container__early__form 0%{opacity:0}.container__early__form 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.container__early__form .warning-text{color:var(--beyond-warning-color);-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{.container__early__form .warning-text 0%{opacity:0}.container__early__form .warning-text 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.container__early__form .logo img{max-width:200px}.container__early__form header{text-align:center;margin-bottom:30px}.container__early__form header h1{font-size:20px;margin-left:1rem}.container__early__form.ending .elements__section{opacity:.1}.container__early__form.ending.ending-left .elements__section{-webkit-animation-name:fadeOutLeft;-moz-animation-name:fadeOutLeft;-ms-animation-name:fadeOutLeft;-o-animation-name:fadeOutLeft;animation-name:fadeOutLeft;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}@-moz-keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}@-ms-keyframes fadeOutLeft{.container__early__form.ending.ending-left .elements__section 0%{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}.container__early__form.ending.ending-left .elements__section 100%{opacity:0;-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}@-o-keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}@keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-20px);-moz-transform:translateX(-20px);-ms-transform:translateX(-20px);-o-transform:translateX(-20px);transform:translateX(-20px)}}.container__early__form .elements__section{display:flex;justify-content:center;flex-direction:column;align-items:center}.container__early__form form{width:100%}.container__early__form form .form-group{display:flex;border-radius:4px}.container__early__form form .form-group .form-sub-group{position:relative}.container__early__form form .form-group .form-sub-group:last-child{flex-grow:1}.container__early__form form .form-group .form-sub-group .beyond-element-input{color:var(--beyond-text-on-primary)}.container__early__form form .form-group .form-sub-group label{position:absolute;top:0;left:0;cursor:text;transform-origin:0 0;transition:all .3s}.container__early__form form .upper-text{text-transform:uppercase}.container__early__form form .form__actions{margin:40px 0;display:flex;justify-items:center;align-content:center;justify-content:center}.container__early__form form .form__actions .beyond-button{height:40px;width:60%}.container__early__form form .form__actions .beyond-button[disabled]{opacity:.2}.container__early__form form .early__message{font-size:1.1rem;padding:0 20px;text-align:center;color:var(--beyond-primary-color)}.early-access__container{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.early-access__container header h1{color:var(--beyond-primary-color)}.early-access__container form{display:grid;gap:15px}.early-access__container form input{margin-top:30px;border:1px solid var(--beyond-primary-color);background:0 0;padding:15px;border-radius:15px;font-size:1.5rem;color:var(--beyond-primary-color);text-transform:uppercase;text-align:center;outline:0}.app__empty__container{height:100%;width:100%;display:flex;justify-content:center;align-items:top;padding-top:15%}.ds-footer-bar{grid-area:footer;z-index:8;position:fixed;bottom:0;font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;left:0;right:0;padding:8px 15px;background:var(--ds-secondary-bg);display:flex;justify-content:space-between;align-items:center}.ds-footer-bar *{font-size:10px;padding:0}.ds-footer-bar h1,.ds-footer-bar h2,.ds-footer-bar h3,.ds-footer-bar p{padding:0;margin:0}.ds-footer-bar span{display:inline-flex;padding:0 5px}.ds-footer-bar .primary-text{color:var(--beyond-primary-color)}.ds-footer-bar .beyond-button{background:#000;border:0;color:#fff}.ds__main-container{display:flex;width:100%;position:relative;flex-grow:0;flex-wrap:nowrap;overflow:hidden;flex-shrink:0;grid-area:panel;min-height:100%;overflow-x:auto;background:var(--beyond-background-color);z-index:1}.preload-container{height:100vh;width:100vw;overflow:hidden}.ds-application-view-layout{display:grid;height:100%;grid-template-areas:"aside toolbar" "aside errors" "aside panel";grid-template-columns:auto 1fr;grid-template-rows:auto auto 1fr;overflow:hidden}.ds-application-view-layout .ds-toolbar{grid-area:toolbar;z-index:1}.ds-application-view-layout .ds__aside{grid-area:aside}.ds-application-view-layout .ds__workspace__errors{grid-area:errors}.ds-application-view-layout .ds__main-content{display:flex;width:100%;position:relative;flex-grow:0;flex-wrap:nowrap;overflow:hidden;flex-shrink:0;grid-area:panel;min-height:100%;overflow-x:auto;background:var(--background)}');
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