define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DSDatabase = DSDatabase;
  _exports.hmr = _exports.__beyond_pkg = _exports.ReactiveModel = _exports.DSModel = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.8"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/database"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([]);
  const {
    module
  } = __pkg.bundle;
  /***********
  JS PROCESSOR
  ***********/

  /***********************
  FILE: _reactive-model.js
  ***********************/

  class ReactiveModel {
    #ready;
    get ready() {
      return this.#ready;
    }
    #fetching;
    get fetching() {
      return this.#fetching;
    }
    set fetching(value) {
      if (value === this.#fetching) return;
      this._fetching = value;
      this.triggerEvent();
    }
    _fetched;
    get fetched() {
      return this._fetched;
    }
    #processing;
    get processing() {
      return this.#processing;
    }
    set processing(value) {
      if (value === this.#processing) return;
      this.#processing = value;
      this.triggerEvent();
    }
    #processed;
    get processed() {
      return this._processed;
    }
    set processed(value) {
      if (value === this.#processed) return;
      this.#processed = value;
      this.triggerEvent();
    }
    #loaded;
    get loaded() {
      return this.#loaded;
    }
    #error;
    get error() {
      return this.#error;
    }
    set error(value) {
      if (value === this.#error || typeof value !== 'string') return;
      this.#error = value;
      this.triggerEvent();
    }
    constructor() {
      this._events = new Events({
        bind: this
      });
      this.triggerEvent = this.triggerEvent.bind(this);
      this._set = this._set.bind(this);
    }
    triggerEvent = (event = 'change') => this._events.trigger(event);

    /**
     * set value in a private property
     * @param property
     * @param value
     */
    _set(property, value) {
      let props = {};
      if (property && value !== 'undefined') props[property] = value;else props = property;
      let updated = false;
      for (const prop in props) {
        const key = `_${prop}`;
        if (!this.hasOwnProperty(key)) continue;

        //same value on store
        if (this[key] === props[prop]) continue;
        this[key] = props[prop];
        updated = true;
      }
      if (updated) this.triggerEvent();
    }
    getProperties() {
      const props = {};
      Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
      return props;
    }
  }

  /**************
  FILE: config.js
  **************/
  _exports.ReactiveModel = ReactiveModel;
  function getConfig() {
    const CONFIG = Object.freeze({
      DB: 'beyond.dashboard',
      VERSION: 6
    });

    //TODO validar uso de tablas list, records, storages y unpublished
    const tables = {
      favorites: {
        name: 'favorites',
        config: {
          keyPath: 'id',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['name', 'name', {
          unique: true
        }], ['items', 'items', {
          unique: false
        }]]
      },
      workspaces: {
        name: 'workspaces',
        config: {
          keyPath: 'wd'
        },
        indexes: [['wd', 'wd', {
          unique: true
        }], ['lastAccess', 'lastAccess']]
      },
      user: {
        name: 'user',
        config: {
          keyPath: 'id',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['email', 'email', {
          unique: true
        }], ['cover', 'cover']]
      },
      workspace: {
        name: 'workspace',
        config: {
          keyPath: 'wd',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['panels', 'panels'], ['config', 'config'], ['wd', 'wd', {
          unique: true
        }]]
      }
    };
    const stores = [];
    for (const store in tables) {
      stores.push(tables[store]);
    }
    return {
      name: CONFIG.DB,
      version: CONFIG.VERSION,
      stores: stores
    };
  }

  /****************
  FILE: ds-model.js
  ****************/

  class DSModelObject extends ReactiveModel {
    _db;
    get db() {
      return this._db;
    }
    ready() {
      return this.db.initialised;
    }
    #initialising;
    #wd;
    get wd() {
      return this.#wd;
    }
    #lastAccess;
    get lastAccess() {
      return this.#lastAccess;
    }
    constructor() {
      super();
      const database = new DSDatabase();
      database.initialise();
      this._db = database;
    }
    async initialise(wd) {
      if (this.#initialising) return this.#initialising;
      this.#initialising = this.db.initialise();
      await this.#initialising;
      this.#lastAccess = performance.now();
      const data = await DSModel.db.store("workspace").get(wd);
      if (!data) return this.reset(wd);
      return this.db.store("workspaces").save({
        wd,
        lastAccess: this.#lastAccess
      });
    }
    async reset(wd) {
      const specs = {
        wd,
        lastAccess: performance.now(),
        panels: {
          items: new Map()
        },
        opened: new Set()
      };
      await this.db.store("workspace").save(specs);
      return specs;
    }
    store = name => this.db.store(name);
  }
  /*bundle */const DSModel = new DSModelObject();

  /***************
  FILE: indexed.js
  ***************/
  _exports.DSModel = DSModel;
  function DSDatabase() {
    'use strict';

    let db, initialised;
    const config = getConfig();
    Object.defineProperty(this, 'initialised', {
      get: () => initialised
    });
    Object.defineProperty(this, 'db', {
      get: () => db
    });
    let promise;
    this.initialise = async () => {
      if (initialised || promise) return promise;
      promise = new PendingPromise();
      const {
        BeyondDB
      } = await beyond.import("@beyond-js/workspace/indexeddb");
      db = await BeyondDB.create(config);
      initialised = true;
      promise.resolve(db);
      promise = undefined;
    };
    this.store = name => db.stores.has(name) ? db.stores.get(name) : false;
  }
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