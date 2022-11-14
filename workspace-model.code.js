define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/database", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/kernel@0.1.1/texts", "@beyond-js/dashboard@0.0.1/uploader-components", "@beyond-js/dashboard@0.0.1/ds-panels", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/backend@0.1.0/client"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.workspace = _exports.hmr = _exports.__beyond_pkg = _exports.PortManager = _exports.ContextMenu = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    DSUser,
    projectsFactory
  } = dependency_1;
  const {
    DSModel
  } = dependency_2;
  const {
    Realtime,
    Applications,
    Dashboard,
    ModuleStatic,
    ApplicationStatic
  } = dependency_3;
  const {
    ReactiveModel
  } = dependency_4;
  const {
    CurrentTexts
  } = dependency_5;
  const {
    JidaUploader
  } = dependency_6;
  const {
    PanelsManager,
    Panels
  } = dependency_7;
  const {
    DSBoards,
    DSPreAside
  } = dependency_8;
  const {
    backends
  } = dependency_9;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.3"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace-model",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/dashboard/models', dependency_1], ['@beyond-js/dashboard/database', dependency_2], ['@beyond-js/inspect/models.ts', dependency_3], ['@beyond-js/inspect/reactive-model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@beyond-js/dashboard/uploader-components', dependency_6], ['@beyond-js/dashboard/ds-panels', dependency_7], ['@beyond-js/dashboard/ds-contexts', dependency_8], ['@beyond-js/backend/client', dependency_9]]);

  const {
    module
  } = __pkg.bundle;
  /***********
  JS PROCESSOR
  ***********/

  /************************
  FILE: components\aside.js
  ************************/

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
  /*******************************
  FILE: components\context-menu.js
  *******************************/


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
  /***********************
  FILE: components\port.js
  ***********************/


  _exports.ContextMenu = ContextMenu;

  class PortManager extends ReactiveModel {
    #port;

    get port() {
      return this.#port;
    }

    set port(value) {
      if (isNaN(value)) {
        throw Error("the port must be a number");
      }

      if (value === this.#port) return;
      this.#port = value;
    }

    constructor(port, workspace) {
      super();
      const id = "@beyond-js/inspect";
      const url = `http://localhost:${port}`;
      backends.register(id, url);

      (async () => {
        const backend = await backends.get(id);
        const socket = await backend.socket;
        workspace.connected = socket.connected;
        socket.on("connect", () => {
          workspace.connected = true;
        });
        socket.on("disconnect", () => {
          workspace.connected = false;
        });
      })();
    }

  }
  /***********************
  FILE: components\tree.js
  ***********************/


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
  /***************************
  FILE: components\uploader.js
  ***************************/

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
  /*************
  FILE: index.js
  *************/


  class Workspace extends ReactiveModel {
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
      const isReady = this.#user?.validated && (!this.#firstTime || this.applications?.tree.landed);
      return isReady && this.#texts.ready && this.#loaded;
    }

    get textsReady() {
      return this.#texts?.ready;
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

    #connected;

    get connected() {
      return this.#connected;
    }

    set connected(value) {
      if (value === this.#connected) return;
      this.#connected = value;
      this.triggerEvent();
      this.initialise();
    }

    #portManager;

    constructor(specs = {}) {
      super();
    }

    async initialise(specs) {
      try {
        const module = __pkg.bundle.module.specifier;
        const {
          CurrentTexts
        } = await beyond.import("@beyond-js/kernel/texts");
        this.#texts = new CurrentTexts(module, true);
        this.#texts.bind("change", this.triggerEvent);
        Realtime.initialise();
        this.#applications = new Applications(TREE.APPS);
        this.#dashboard = Dashboard;
        this.#user = new DSUser(this.#dashboard);
        this.applications.bind("change", this.triggerEvent);
        this.applications.bind("change", this.#addNotifications);
        this.#user.bind("change", this.triggerEvent);
        this.#applications.fetch();
        this.#dsmodel = DSModel;
      } catch (e) {
        console.log(e);
      }
    }

    #addNotifications = () => {
      if (!this.applications.tree.landed) return; // DSNotifications.start(this.applications.items);
    };

    async load(specs = {}) {
      return this.#load(specs);
    }

    async #load({
      port
    }) {
      this.#portManager = new PortManager(port, this);
      this.#wd = await Dashboard.getWD();
      await this.#dsmodel.initialise(this.#wd);
      await DSModel.initialise();
      this.#store = DSModel.db.store("workspace");
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
      this.#aside.bind("aside.updated", this.#save);
      this.#panels = new PanelsManager(DSBoards, this);
      await this.#panels.load(data.panels);
      this.#panels.bind("panels.updated", this.#save);
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
      this.#panels.active.add(name, specs);
    };
    openApp = async (id, specs) => {
      this.active = await this.getProject(id);
      this.#appsOpened.add(id);
      specs = { ...specs,
        id,
        name: `app.${id}`
      };
      this.openBoard("project", specs);
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
        this.panels.add("navigator", specs);
        return;
      }

      const toActivateId = panels.active.id > 1 ? panels.active.id - 1 : 2;
      panels.active = panels.items.get(toActivateId);
      this.openBoard("navigator", specs);
    }
    /**
     * @deprecated application is a term that is not currently used. the correct name is project.
     * @param id
     * @param moduleId
     * @param element
     * @returns {unknown}
     */


    async getApplication(id, moduleId, element) {
      if ([undefined, NaN].includes(id)) return;
      const {
        projectsFactory
      } = await beyond.import("@beyond-js/dashboard/models");
      return projectsFactory.get(parseInt(id), moduleId, element);
    }

    async getProject(id) {
      const {
        projectsFactory
      } = await beyond.import("@beyond-js/dashboard/models");
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
  }

  /*bundle */
  const workspace = new Workspace();
  _exports.workspace = workspace;
  window.workspace = workspace;
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