define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.tables = _exports.realtime = _exports.hmr = _exports.auth = _exports.__beyond_pkg = _exports.TableSpecs = _exports.NotSet = _exports.ListUpdateFilterReport = _exports.ItemsProperty = _exports.ItemSpecs = _exports.ItemSelectorProperty = _exports.ItemProperty = _exports.Item = _exports.DataSource = _exports.ConditionOperand = _exports.CollectionSpecs = _exports.CollectionProperty = _exports.Collection = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/plm@0.0.1/core"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /***************************
  INTERNAL MODULE: ./auth/auth
  ***************************/

  ims.set('./auth/auth', {
    hash: 2495452891,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.auth = void 0;
      var _sessions = require("./sessions");
      /*bundle*/
      const auth = new class {
        #sessions = new _sessions.Sessions();
        get sessions() {
          return this.#sessions;
        }
        set(sessionName, accessToken) {
          if (!this.#sessions.has(sessionName)) {
            throw new Error(`Session "${sessionName}" is not registered`);
          }
          const session = this.#sessions.get(sessionName);
          session.accessToken = accessToken;
        }
      }();
      exports.auth = auth;
    }
  });

  /***************************************
  INTERNAL MODULE: ./auth/get-access-token
  ***************************************/

  ims.set('./auth/get-access-token', {
    hash: 3814648084,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getAccessToken = getAccessToken;
      var _auth = require("./auth");
      /**
       * Gets the session object from the session name
       *
       * @param session {string} The plm session name
       */
      async function getAccessToken(session) {
        if (!session) throw new Error('Session not set');
        const errors = Object.freeze({
          'NOT_LOGGED_IN': () => new Error(`User is not logged in on session "${session}"`)
        });
        if (!_auth.auth.sessions.has(session)) throw errors.NOT_LOGGED_IN();
        let s = _auth.auth.sessions.get(session);
        if (!s) throw errors.NOT_LOGGED_IN();
        const accessToken = s.accessToken;
        if (!accessToken) throw errors.NOT_LOGGED_IN();
        return accessToken;
      }
    }
  });

  /******************************
  INTERNAL MODULE: ./auth/session
  ******************************/

  ims.set('./auth/session', {
    hash: 931214438,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PLMSession = void 0;
      var _core = require("@beyond-js/kernel/core");
      class PLMSession extends _core.Events {
        #name;
        get name() {
          return this.#name;
        }
        constructor(name) {
          super();
          this.#name = name;
        }
        #accessToken;
        get accessToken() {
          return this.#accessToken;
        }
        set accessToken(value) {
          this.#accessToken = value;
          this.trigger('change');
        }
      }
      exports.PLMSession = PLMSession;
    }
  });

  /*******************************
  INTERNAL MODULE: ./auth/sessions
  *******************************/

  ims.set('./auth/sessions', {
    hash: 642400809,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Sessions = void 0;
      var _session = require("./session");
      class Sessions extends Map {
        register(name) {
          if (!name) throw new Error('Parameter name not set');
          if (super.has(name)) throw new Error(`Session "${name}" already registered`);
          const session = new _session.PLMSession(name);
          super.set(name, session);
          return session;
        }
        unregister(name) {
          if (!name) throw new Error('Parameter name not set');
          if (!super.has(name)) throw new Error(`Session "${name}" is not registered`);
          super.delete(name);
        }
      }
      exports.Sessions = Sessions;
    }
  });

  /***************************
  INTERNAL MODULE: ./constants
  ***************************/

  ims.set('./constants', {
    hash: 1333982119,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NotSet = exports.DataSource = void 0;
      /*bundle*/
      const NotSet = {};
      exports.NotSet = NotSet;
      /*bundle*/
      var DataSource;
      exports.DataSource = DataSource;
      (function (DataSource) {
        DataSource[DataSource["NotLoaded"] = 0] = "NotLoaded";
        DataSource[DataSource["Cache"] = 1] = "Cache";
        DataSource[DataSource["Server"] = 2] = "Server";
      })(DataSource || (exports.DataSource = DataSource = {}));
    }
  });

  /************************************************
  INTERNAL MODULE: ./elements/collection/collection
  ************************************************/

  ims.set('./elements/collection/collection', {
    hash: 1207329829,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Collection = void 0;
      var _element = require("../element");
      var _collection = require("../../tree/collection");
      var _counters = require("./counters/counters");
      var _items = require("./items/items");
      var _item = require("../item/item");
      var _tree = require("./tree");
      /*bundle*/
      class Collection extends _element.Element {
        get is() {
          return 'collection';
        }
        #Item;
        get Item() {
          return this.#Item;
        }
        #list;
        get list() {
          return this.#list;
        }
        #counters = new _counters.CollectionCounters(this);
        get counters() {
          return this.#counters;
        }
        #items = new _items.CollectionItems(this);
        get items() {
          return this.#items.items;
        }
        #tree = new _tree.Tree(this);
        get tree() {
          return this.#tree;
        }
        /**
         * Loads the collection bringing the data from the local store cache
         *
         * @returns {Promise<void>}
         */
        async load(tree = true) {
          await this.#list.load();
          if (!this.loaded || !tree) return;
          const promises = [];
          promises.push(this.#items.load(tree));
          promises.push(this.#counters.load());
          await Promise.all(promises);
        }
        /**
         * Fetch the collection bringing the data from the server
         *
         * @param {boolean} tree Fetches the tree or only the current node
         * @returns {Promise<void>}
         */
        async fetch(tree = true) {
          await this.#list.fetch();
          if (!tree || !this.landed) return;
          const promises = [];
          promises.push(this.#items.fetch(tree));
          promises.push(this.#counters.fetch());
          await Promise.all(promises);
        }
        /**
         * Loads or fetch data only if not data is already available
         *
         * @param {boolean} tree Fills the tree or only the current node
         * @returns {Promise<void>}
         */
        async fill(tree = true) {
          if (!this.landed) {
            await this.load(false);
            !this.landed && (await this.fetch(false));
          }
          if (!tree || this.tree.landed) return;
          // Continue with tree loading
          const promises = [];
          promises.push(this.#items.fill(tree));
          promises.push(this.#counters.fill());
          await Promise.all(promises);
        }
        constructor(table, DItem, specs) {
          super(table);
          if (!table || typeof table !== 'string') throw new Error('Parameter table is invalid');
          if (!(DItem.prototype instanceof _item.Item)) throw new Error('Parameter item is invalid');
          this.#Item = DItem;
          specs = specs ? specs : {};
          super.node = specs.node ? specs.node : new _collection.CollectionNode(table, specs.tree);
          // Gets the list data access
          const attributes = {};
          this.#list = this.table.lists.get(specs.filter, this.node.order, attributes, specs.session);
          super.data = this.#list;
          this.#items.activate();
        }
        destroy() {
          super.destroy();
          // The list is not longer being used by this item
          this.#list.release();
          this.#items.destroy();
        }
      }
      exports.Collection = Collection;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./elements/collection/counters/counter
  ******************************************************/

  ims.set('./elements/collection/counters/counter', {
    hash: 1516841287,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionCounter = void 0;
      var _filter = require("../../../tables/data/filter/filter");
      class CollectionCounter {
        #collection;
        #name;
        #counter;
        get value() {
          return this.#counter;
        }
        constructor(collection, name, conditions) {
          this.#collection = collection;
          this.#name = name;
          const {
            table
          } = collection;
          conditions = conditions ? conditions.concat(collection.list.filter.specs) : collection.list.filter.specs;
          const filter = new _filter.Filter(table, conditions);
          this.#counter = table.counters.get(filter.specs, collection.list.attributes, collection.session);
        }
        load = async () => await this.#counter.load();
        fetch = async () => await this.#counter.fetch();
        #timer;
        #triggerChange = () => {
          if (this.#timer) return;
          this.#timer = setTimeout(() => {
            this.#timer = void 0;
            this.#collection.node.trigger('change');
          }, 0);
        };
        activate() {
          this.#counter.on('change', this.#triggerChange);
        }
        deactivate() {
          this.#counter.off('change', this.#triggerChange);
        }
      }
      exports.CollectionCounter = CollectionCounter;
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./elements/collection/counters/counters
  *******************************************************/

  ims.set('./elements/collection/counters/counters', {
    hash: 1131517711,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionCounters = void 0;
      var _counter = require("./counter");
      class CollectionCounters extends Map {
        #collection;
        constructor(collection) {
          super();
          this.#collection = collection;
        }
        register(name, conditions) {
          const {
            node
          } = this.#collection;
          if (!node.counters.has(name)) return;
          this.set(name, new _counter.CollectionCounter(this.#collection, name, conditions));
        }
        async load() {
          const promises = [];
          this.forEach(counter => promises.push(counter.load()));
          await Promise.all(promises);
        }
        async fetch() {
          const promises = [];
          this.forEach(counter => promises.push(counter.fetch()));
          await Promise.all(promises);
        }
        async fill() {
          const promises = [];
          this.forEach(counter => !counter.value === undefined && promises.push(counter.fetch()));
          await Promise.all(promises);
        }
      }
      exports.CollectionCounters = CollectionCounters;
    }
  });

  /*************************************************
  INTERNAL MODULE: ./elements/collection/items/items
  *************************************************/

  ims.set('./elements/collection/items/items', {
    hash: 3940405102,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionItems = void 0;
      class CollectionItems {
        #collection;
        #map;
        #items = [];
        get items() {
          return this.#items;
        }
        constructor(collection) {
          this.#collection = collection;
        }
        #timer;
        #triggerChange = () => {
          if (this.#timer) return;
          this.#timer = setTimeout(() => {
            this.#timer = void 0;
            this.#collection.node.trigger('change');
          }, 0);
        };
        update = () => {
          if (!this.#collection.list.landed) return;
          this.#items = [];
          const updated = new Map();
          const ordered = this.#collection.list.records.values;
          for (const id of ordered) {
            let item;
            const key = id.unpublished ? `local.${id.localId}` : `published.${id.pk}`;
            if (this.#map && this.#map.has(key)) {
              item = this.#map.get(key);
            } else if (id.unpublished) {
              const Item = this.#collection.Item;
              item = new Item({
                node: this.#collection.node.items,
                localId: id.localId
              });
              item.on('change', this.#triggerChange);
            } else {
              item = new this.#collection.Item({
                node: this.#collection.node.items,
                pk: id.pk
              });
              item.on('change', this.#triggerChange);
            }
            updated.set(key, item);
            this.#items.push(item);
          }
          // Destroy unused items
          this.#map && this.#map.forEach((item, key) => {
            if (updated.has(key)) return;
            item.off('change', this.#triggerChange);
            item.destroy();
          });
          this.#map = updated;
        };
        async load(tree = true) {
          const promises = [];
          this.#map.forEach(item => promises.push(item.load(tree)));
          await Promise.all(promises);
        }
        async fetch(tree = true) {
          const promises = [];
          this.#map.forEach(item => promises.push(item.fetch(tree)));
          await Promise.all(promises);
        }
        async fill(tree = true) {
          const promises = [];
          this.#map.forEach(item => promises.push(item.fill(tree)));
          await Promise.all(promises);
        }
        activate() {
          this.#collection.list.on('updated', this.update);
          this.update();
        }
        destroy() {
          this.#collection.list.off('updated', this.update);
        }
      }
      exports.CollectionItems = CollectionItems;
    }
  });

  /******************************************
  INTERNAL MODULE: ./elements/collection/tree
  ******************************************/

  ims.set('./elements/collection/tree', {
    hash: 3980109007,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #collection;
        constructor(collection) {
          this.#collection = collection;
        }
        get landed() {
          const collection = this.#collection;
          if (!collection.landed) return false;
          for (const item of collection.items) {
            if (!item.tree.landed) return false;
          }
          return true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /**********************************
  INTERNAL MODULE: ./elements/element
  **********************************/

  ims.set('./elements/element', {
    hash: 2599982398,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Element = void 0;
      var _tables = require("../tables/tables");
      var _realtime = require("./realtime");
      class Element {
        on = (event, listener, priority) => this.#node.on(event, listener, priority);
        bind = (event, listener, priority) => this.#node.on(event, listener, priority);
        off = (event, listener) => this.#node.off(event, listener);
        unbind = (event, listener) => this.#node.off(event, listener);
        #realtime;
        #node;
        get node() {
          return this.#node;
        }
        set node(value) {
          if (this.#node) throw new Error('Property "node" already set');
          this.#node = value;
        }
        get active() {
          return this.node.active;
        }
        set active(value) {
          this.node.active = value;
        }
        #timer;
        #triggerChange = () => {
          if (this.#timer) return;
          this.#timer = setTimeout(() => {
            this.#timer = void 0;
            this.#node.trigger('change');
          }, 0);
        };
        #data;
        get data() {
          return this.#data;
        }
        set data(value) {
          if (this.#data) throw new Error('Property "data" already set');
          this.#data = value;
          this.#data.on('change', this.#triggerChange);
          this.#realtime = new _realtime.Realtime(this);
        }
        get session() {
          return this.#node.session;
        }
        #table;
        get table() {
          return this.#table;
        }
        get loaded() {
          return this.#data.loaded;
        }
        get fetching() {
          return this.#data.fetching;
        }
        get fetched() {
          return this.#data.fetched;
        }
        get landed() {
          return this.#data.landed;
        }
        async restore() {
          await this.fetch(false);
          await this.fill();
        }
        constructor(table) {
          if (!table || typeof table !== 'string') throw new Error('Parameter table is invalid');
          if (!_tables.tables.has(table)) throw new Error(`Table "${table}" is not registered`);
          this.#table = _tables.tables.get(table);
        }
        destroy() {
          this.#data?.off('change', this.#triggerChange);
          this.#realtime.destroy();
        }
      }
      exports.Element = Element;
    }
  });

  /********************************************
  INTERNAL MODULE: ./elements/item/fields/field
  ********************************************/

  ims.set('./elements/item/fields/field', {
    hash: 3159573088,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemField = void 0;
      var _constants = require("../../../constants");
      class ItemField {
        #item;
        #name;
        constructor(item, name) {
          this.#item = item;
          this.#name = name;
        }
        get assigned() {
          return this.#item.record.fields.get(this.#name).assigned;
        }
        get value() {
          const value = this.#item.record.fields.get(this.#name).value;
          return value === _constants.NotSet ? undefined : value;
        }
        set value(value) {
          this.#item.record.fields.get(this.#name).value = value;
          this.#item.node.trigger('change');
        }
      }
      exports.ItemField = ItemField;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./elements/item/fields/fields
  *********************************************/

  ims.set('./elements/item/fields/fields', {
    hash: 2163016256,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemFields = void 0;
      var _field = require("./field");
      class ItemFields extends Map {
        constructor(item) {
          super();
          const {
            fields
          } = item.table;
          for (const name of fields) {
            this.set(name, new _field.ItemField(item, name));
          }
        }
      }
      exports.ItemFields = ItemFields;
    }
  });

  /************************************
  INTERNAL MODULE: ./elements/item/item
  ************************************/

  ims.set('./elements/item/item', {
    hash: 1647606694,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Item = void 0;
      var _element = require("../element");
      var _item = require("../../tree/item");
      var _properties = require("./properties/properties");
      var _fields = require("./fields/fields");
      var _tree = require("./tree");
      /*bundle*/
      class Item extends _element.Element {
        get is() {
          return 'item';
        }
        #record;
        get record() {
          return this.#record;
        }
        get version() {
          return this.#record.version;
        }
        #fields;
        get fields() {
          return this.#fields;
        }
        #properties;
        get properties() {
          return this.#properties;
        }
        get loaded() {
          return this.#record.loaded;
        }
        get fetched() {
          return this.#record.fetched;
        }
        get fetching() {
          return this.#record.fetching;
        }
        get found() {
          return this.#record.found;
        }
        #tree = new _tree.Tree(this);
        get tree() {
          return this.#tree;
        }
        /**
         * Loads the item bringing the data from the local store cache
         *
         * @returns {Promise<void>}
         */
        async load(tree = true) {
          await this.#record.load();
          if (!this.loaded) return;
          this.#properties.update();
          if (!tree || this.tree.landed) return;
          await this.#properties.load(tree);
        }
        /**
         * Fetch the item bringing the data from the server
         *
         * @param {boolean} tree Fetches the tree or only the current node
         * @returns {Promise<void>}
         */
        async fetch(tree = true) {
          await this.#record.fetch();
          this.#properties.update();
          if (!tree || this.tree.landed) return;
          await this.#properties.fetch(tree);
        }
        /**
         * Loads or fetch data only if not data is already available
         *
         * @param {boolean} tree Fills the tree or only the current node
         * @returns {Promise<void>}
         */
        async fill(tree = true) {
          if (!this.landed) {
            await this.load(false);
            !this.landed && (await this.fetch(false));
          }
          this.#properties.update();
          if (!tree || this.tree.landed) return;
          // Continue with tree loading
          await this.#properties.fill(tree);
        }
        constructor(table, specs) {
          super(table);
          if (!table || typeof table !== 'string') throw new Error('Parameter table is invalid');
          specs = specs ? specs : {};
          super.node = specs.node ? specs.node : new _item.ItemNode(table, specs.tree);
          // Get the record data access
          let identifier;
          if (specs.identifier) {
            identifier = specs.identifier;
          } else if (specs.localId) {
            identifier = {
              localId: specs.localId
            };
          } else if (specs.pk) {
            const pk = this.table.indices.primary.fields[0];
            identifier = {};
            identifier[pk] = specs.pk;
          }
          this.#record = this.table.records.get(identifier, specs.session);
          super.data = this.#record;
          this.#fields = new _fields.ItemFields(this);
          this.#properties = new _properties.Properties(this);
          this.#record.on('updated', () => this.#properties.update());
          this.#record.landed && this.properties.update();
        }
        destroy() {
          // The record is not longer being used by this item
          this.#record.off('updated', this.#properties.update);
          super.destroy();
          this.#record.release();
        }
      }
      exports.Item = Item;
    }
  });

  /************************************************************
  INTERNAL MODULE: ./elements/item/properties/collection/filter
  ************************************************************/

  ims.set('./elements/item/properties/collection/filter', {
    hash: 3183572785,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionPropertyFilter = void 0;
      var _filter = require("../../../../tables/data/filter/filter");
      /**
       * The collection property filter generator
       */

      class CollectionPropertyFilter {
        #node;
        #parentItem;
        #value;
        get value() {
          return this.#value;
        }
        #valid = false;
        get valid() {
          return this.#valid;
        }
        #spec;
        /**
         * CollectionPropertyFilter Constructor
         *
         * @param {Item} item
         * @param {ItemNode} node
         */
        constructor(item, node) {
          this.#parentItem = item;
          this.#node = node;
          this.#spec = this.#node.property.filterSpec;
        }
        /**
         * Generates the identifier of the item to be created
         */
        update() {
          this.#valid = false;
          this.#value = undefined;
          const filter = [];
          for (const field of this.#spec) {
            if (field.hasOwnProperty('value')) {
              filter.push({
                field: field.field,
                value: field.value,
                operand: _filter.ConditionOperand.Equal
              });
              continue;
            }
            const source = field.source;
            if (!this.#parentItem.fields.has(source)) throw new Error(`Filter of property "${this.#node.property.name}" is invalid. ` + `Source "${source}" not found`);
            let parentItemField = this.#parentItem.fields.get(source);
            if (!parentItemField.assigned) return;
            let value = parentItemField.value;
            value = typeof field.transform === 'function' ? field.transform(this.#parentItem, value) : value;
            if (!value) return;
            filter.push({
              field: field.field,
              value: value,
              operand: _filter.ConditionOperand.Equal
            });
          }
          this.#valid = true;
          this.#value = filter;
        }
      }
      exports.CollectionPropertyFilter = CollectionPropertyFilter;
    }
  });

  /**************************************************************
  INTERNAL MODULE: ./elements/item/properties/collection/property
  **************************************************************/

  ims.set('./elements/item/properties/collection/property', {
    hash: 2220269476,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionProperty = void 0;
      var _filter = require("./filter");
      var _compareObjects = require("../../../../tables/data/factory/compare-objects");
      var _tree = require("./tree");
      /*bundle*/
      class CollectionProperty {
        get is() {
          return 'collection';
        }
        #parentItem;
        #node;
        get node() {
          return this.#node;
        }
        tree = new _tree.Tree(this);
        #value;
        get value() {
          return this.#value;
        }
        #lastFilter;
        #filter;
        get filter() {
          return this.#filter;
        }
        constructor(parentItem, node) {
          this.#parentItem = parentItem;
          this.#node = node;
          this.#filter = new _filter.CollectionPropertyFilter(parentItem, node);
        }
        update() {
          this.#filter.update();
          if (!this.#filter.valid) {
            this.#value?.destroy();
            this.#value = void 0;
            this.#lastFilter = void 0;
            return;
          }
          const filter = this.#filter.value;
          // Check if the identifier has changed
          if (this.#lastFilter && _compareObjects.CompareObjects.compare(this.#lastFilter, filter)) {
            return this.#value;
          }
          this.#lastFilter = filter;
          this.#value?.destroy();
          const tableProperty = this.#node.property;
          this.#value = new tableProperty.Collection({
            node: this.node,
            filter: filter
          });
          return this.#value;
        }
        load = async (tree = true) => await this.#value?.load(tree);
        fetch = async (tree = true) => await this.#value?.fetch(tree);
        fill = async (tree = true) => await this.#value?.fill(tree);
        destroy = () => this.#value?.destroy();
      }
      exports.CollectionProperty = CollectionProperty;
    }
  });

  /**********************************************************
  INTERNAL MODULE: ./elements/item/properties/collection/tree
  **********************************************************/

  ims.set('./elements/item/properties/collection/tree', {
    hash: 476448367,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #property;
        constructor(property) {
          this.#property = property;
        }
        get landed() {
          const collection = this.#property.value;
          return collection ? collection.tree.landed : true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /*****************************************************************
  INTERNAL MODULE: ./elements/item/properties/item-selector/property
  *****************************************************************/

  ims.set('./elements/item/properties/item-selector/property', {
    hash: 2240180738,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemSelectorProperty = void 0;
      var _compareObjects = require("../../../../tables/data/factory/compare-objects");
      var _tree = require("./tree");
      /*bundle*/
      class ItemSelectorProperty {
        get is() {
          return 'item-selector';
        }
        #parentItem;
        #node;
        get node() {
          return this.#node;
        }
        tree = new _tree.Tree(this);
        #value;
        get value() {
          return this.#value;
        }
        #lastIdentifier;
        #identifier;
        get identifier() {
          return this.#identifier;
        }
        constructor(parentItem, node) {
          this.#parentItem = parentItem;
          this.#node = node;
        }
        update() {
          const tableProperty = this.#node.property;
          const {
            Item,
            identifier,
            table
          } = tableProperty.selector(this.#parentItem);
          // Check if the table is registered in the tree
          if (!this.node.tables.has(table)) return;
          // Check if value should be changed or not
          if (this.#value && this.#value.constructor === Item && this.#lastIdentifier && _compareObjects.CompareObjects.compare(this.#lastIdentifier, identifier)) {
            return this.#value;
          }
          this.#lastIdentifier = identifier;
          this.#value && this.#value.destroy();
          this.#value = new Item({
            node: this.node.tables.get(table),
            identifier: identifier
          });
          return this.#value;
        }
        load = async (tree = true) => await this.#value?.load(tree);
        fetch = async (tree = true) => await this.#value?.fetch(tree);
        fill = async (tree = true) => await this.#value?.fill(tree);
        destroy = () => this.#value?.destroy();
      }
      exports.ItemSelectorProperty = ItemSelectorProperty;
    }
  });

  /*************************************************************
  INTERNAL MODULE: ./elements/item/properties/item-selector/tree
  *************************************************************/

  ims.set('./elements/item/properties/item-selector/tree', {
    hash: 3729187936,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #property;
        constructor(property) {
          this.#property = property;
        }
        get landed() {
          const item = this.#property.value;
          return item ? item.tree.landed : true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /**********************************************************
  INTERNAL MODULE: ./elements/item/properties/item/identifier
  **********************************************************/

  ims.set('./elements/item/properties/item/identifier', {
    hash: 1191197271,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemPropertyIdentifier = void 0;
      class ItemPropertyIdentifier {
        #node;
        #parentItem;
        #value;
        get value() {
          return this.#value;
        }
        #valid = false;
        get valid() {
          return this.#valid;
        }
        #spec;
        /**
         * ItemPropertyIdentifier Constructor
         *
         * @param {Item} item
         * @param {ItemNode} node
         */
        constructor(item, node) {
          this.#parentItem = item;
          this.#node = node;
          this.#spec = this.#node.property.identifierSpec;
        }
        /**
         * Generates the identifier of the item to be created
         */
        update() {
          this.#valid = false;
          this.#value = undefined;
          const identifier = {};
          for (const field of this.#spec) {
            if (field.hasOwnProperty('value')) {
              identifier[field.field] = field.value;
              continue;
            }
            const source = field.source;
            if (!this.#parentItem.fields.has(source)) throw new Error(`Identifier of property "${this.#node.property.name}" is invalid. ` + `Source "${source}" not found`);
            let parentItemField = this.#parentItem.fields.get(source);
            if (!parentItemField.assigned) return;
            let value = parentItemField.value;
            value = typeof field.transform === 'function' ? field.transform(this.#parentItem, value) : value;
            if (!value) return;
            identifier[field.field] = value;
          }
          this.#valid = true;
          this.#value = identifier;
        }
      }
      exports.ItemPropertyIdentifier = ItemPropertyIdentifier;
    }
  });

  /********************************************************
  INTERNAL MODULE: ./elements/item/properties/item/property
  ********************************************************/

  ims.set('./elements/item/properties/item/property', {
    hash: 2718345853,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemProperty = void 0;
      var _identifier = require("./identifier");
      var _compareObjects = require("../../../../tables/data/factory/compare-objects");
      var _tree = require("./tree");
      /*bundle*/
      class ItemProperty {
        get is() {
          return 'item';
        }
        #parentItem;
        #node;
        get node() {
          return this.#node;
        }
        tree = new _tree.Tree(this);
        #value;
        get value() {
          return this.#value;
        }
        #lastIdentifier;
        #identifier;
        get identifier() {
          return this.#identifier;
        }
        constructor(parentItem, node) {
          this.#parentItem = parentItem;
          this.#node = node;
          this.#identifier = new _identifier.ItemPropertyIdentifier(parentItem, node);
        }
        update() {
          this.#identifier.update();
          if (!this.#identifier.valid) {
            this.#value?.destroy();
            this.#value = void 0;
            this.#lastIdentifier = void 0;
            return;
          }
          const identifier = this.#identifier.value;
          // Check if the identifier has changed
          if (this.#lastIdentifier && _compareObjects.CompareObjects.compare(this.#lastIdentifier, identifier)) {
            //TODO: agregar comentario para caso de uso, en actualizacion de Item
            return this.#value;
          }
          this.#lastIdentifier = identifier;
          this.#value?.destroy();
          const tableProperty = this.#node.property;
          this.#value = new tableProperty.Item({
            node: this.node,
            identifier: identifier
          });
          return this.#value;
        }
        load = async (tree = true) => await this.#value?.load(tree);
        fetch = async (tree = true) => await this.#value?.fetch(tree);
        fill = async (tree = true) => await this.#value?.fill(tree);
        destroy = () => this.#value?.destroy();
      }
      exports.ItemProperty = ItemProperty;
    }
  });

  /****************************************************
  INTERNAL MODULE: ./elements/item/properties/item/tree
  ****************************************************/

  ims.set('./elements/item/properties/item/tree', {
    hash: 2961426029,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #property;
        constructor(property) {
          this.#property = property;
        }
        get landed() {
          const item = this.#property.value;
          return item ? item.tree.landed : true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /*********************************************************
  INTERNAL MODULE: ./elements/item/properties/items/property
  *********************************************************/

  ims.set('./elements/item/properties/items/property', {
    hash: 2272147810,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemsProperty = void 0;
      var _tree = require("./tree");
      /*bundle*/
      class ItemsProperty extends Map {
        get is() {
          return 'items';
        }
        #parentItem;
        #node;
        get node() {
          return this.#node;
        }
        tree = new _tree.Tree(this);
        constructor(parentItem, node) {
          super();
          this.#parentItem = parentItem;
          this.#node = node;
        }
        update() {
          const {
            record
          } = this.#parentItem;
          const tableProperty = this.#node.property;
          if (!record.fields.has(tableProperty.identifier.source)) return;
          const source = record.fields.get(tableProperty.identifier.source);
          if (!source.assigned) return;
          const values = source.value;
          if (!(values instanceof Array)) return;
          for (const identifierValue of values) {
            if (this.has(identifierValue)) continue;
            const identifier = {};
            identifier[tableProperty.identifier.field] = identifierValue;
            this.set(identifierValue, new tableProperty.Items({
              node: this.node.items,
              identifier: identifier
            }));
          }
          // Remove items that now are not in the collection
          const marked = [];
          for (const id of this.keys()) !values.includes(id) && marked.push(id);
          for (const id of marked) {
            const item = this.get(id);
            item.destroy();
            super.delete(id);
          }
          return this;
        }
        push(value) {
          const {
            record
          } = this.#parentItem;
          const tableProperty = this.#node.property;
          if (!record.fields.has(tableProperty.identifier.source)) throw new Error(`Field "${tableProperty.identifier.source}" has not been declared`);
          const field = record.fields.get(tableProperty.identifier.source);
          let values = field.assigned ? field.value : [];
          if (values.includes(value)) return;
          values.push(value);
          field.memory = values;
          this.update();
        }
        delete(id) {
          const {
            record
          } = this.#parentItem;
          const tableProperty = this.#node.property;
          if (!record.fields.has(tableProperty.identifier.source)) throw new Error(`Field "${tableProperty.identifier.source}" has not been declared`);
          const field = record.fields.get(tableProperty.identifier.source);
          let values = field.value;
          if (!(values instanceof Array)) return false; // Nothing to delete
          field.memory = values.filter(value => value !== id);
          this.update();
          return true;
        }
        async load(tree = true) {
          const promises = [];
          this.forEach(item => promises.push(item.load(tree)));
          await Promise.all(promises);
        }
        async fetch(tree = true) {
          const promises = [];
          this.forEach(item => promises.push(item.fetch(tree)));
          await Promise.all(promises);
        }
        async fill(tree = true) {
          const promises = [];
          this.forEach(item => promises.push(item.fill(tree)));
          await Promise.all(promises);
        }
        destroy() {
          this.forEach(item => item.destroy());
          this.clear();
        }
      }
      exports.ItemsProperty = ItemsProperty;
    }
  });

  /*****************************************************
  INTERNAL MODULE: ./elements/item/properties/items/tree
  *****************************************************/

  ims.set('./elements/item/properties/items/tree', {
    hash: 1066763736,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #property;
        constructor(property) {
          this.#property = property;
        }
        get landed() {
          for (const item of this.#property.values()) {
            if (!item.tree.landed) return false;
          }
          return true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /*****************************************************
  INTERNAL MODULE: ./elements/item/properties/properties
  *****************************************************/

  ims.set('./elements/item/properties/properties', {
    hash: 3553928775,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Properties = void 0;
      var _property = require("./item/property");
      var _property2 = require("./items/property");
      var _property3 = require("./item-selector/property");
      var _property4 = require("./collection/property");
      class Properties extends Map {
        constructor(item) {
          super();
          const {
            properties
          } = item.node;
          for (const [name, node] of properties) {
            switch (node.is) {
              case 'item':
                this.set(name, new _property.ItemProperty(item, node));
                break;
              case 'item-selector':
                this.set(name, new _property3.ItemSelectorProperty(item, node));
                break;
              case 'collection':
                this.set(name, new _property4.CollectionProperty(item, node));
                break;
              case 'items':
                this.set(name, new _property2.ItemsProperty(item, node));
                break;
              default:
                console.warn(`node of type "${node.is}" is not currently supported`, item, name, node);
            }
          }
        }
        async load(tree = true) {
          const promises = [];
          this.forEach(property => {
            property.update();
            promises.push(property.load(tree));
          });
          await Promise.all(promises);
        }
        async fetch(tree = true) {
          const promises = [];
          this.forEach(property => {
            property.update();
            promises.push(property.fetch(tree));
          });
          await Promise.all(promises);
        }
        async fill(tree = true) {
          const promises = [];
          this.forEach(property => {
            property.update();
            promises.push(property.fill(tree));
          });
          await Promise.all(promises);
        }
        update = () => this.forEach(property => property.update());
      }
      exports.Properties = Properties;
    }
  });

  /***************************************************
  INTERNAL MODULE: ./elements/item/properties/property
  ***************************************************/

  ims.set('./elements/item/properties/property', {
    hash: 2546207792,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });

  /************************************
  INTERNAL MODULE: ./elements/item/tree
  ************************************/

  ims.set('./elements/item/tree', {
    hash: 30503873,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Tree = void 0;
      class Tree {
        #item;
        constructor(item) {
          this.#item = item;
        }
        get landed() {
          const item = this.#item;
          if (!item.landed) return false;
          for (const property of item.properties.values()) {
            if (!property.tree.landed) return false;
          }
          return true;
        }
      }
      exports.Tree = Tree;
    }
  });

  /***********************************
  INTERNAL MODULE: ./elements/realtime
  ***********************************/

  ims.set('./elements/realtime', {
    hash: 2022675178,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Realtime = void 0;
      class Realtime {
        #element;
        #update = () => {
          this.#element.active && this.#element.fetch(false).then(() => this.#element.fill()).catch(exc => {
            console.error(exc.stack);
            console.error(`Collection fill error on realtime event.\n\n`);
          });
        };
        constructor(element) {
          this.#element = element;
          this.#element.data.on('invalidated', this.#update);
        }
        destroy() {
          this.#element.data.off('invalidated', this.#update);
        }
      }
      exports.Realtime = Realtime;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./tables/data/counter/counter
  *********************************************/

  ims.set('./tables/data/counter/counter', {
    hash: 1520738300,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CounterData = void 0;
      var _product = require("../factory/product");
      var _filter = require("../filter/filter");
      var _fetch = require("./fetch");
      var _localStore = require("./local-store");
      class CounterData extends _product.Product {
        #filter;
        get filter() {
          return this.#filter;
        }
        #attributes;
        get attributes() {
          return this.#attributes;
        }
        #value = {
          value: undefined
        };
        get value() {
          return this.#value.value;
        }
        // The local store, properties and methods
        #localStore = new _localStore.CounterLocalStore(this);
        get localStore() {
          return this.#localStore;
        }
        get loaded() {
          return this.#localStore.loaded;
        }
        async load() {
          let stored;
          try {
            stored = await this.#localStore.load();
          } catch (exc) {
            console.error(`Error loading counter from cache`, exc.stack);
            return;
          }
          if (stored === undefined) return;
          if (typeof stored !== 'number') {
            console.warn('Invalid counter data cache', this, stored);
          } else {
            this.#value.value = stored;
            this.trigger('change');
          }
        }
        // The fetch manager, properties and methods
        #fetch = new _fetch.CounterFetch(this, this.#value);
        get fetching() {
          return this.#fetch.fetching;
        }
        get fetched() {
          return this.#fetch.fetched;
        }
        async fetch() {
          await this.#fetch.fetch();
        }
        constructor(manager, key, instanceId, filterSpecs, attributes, session) {
          super(manager, key, instanceId, session);
          this.#filter = new _filter.Filter(this.table, filterSpecs);
          this.#attributes = attributes;
        }
      }
      exports.CounterData = CounterData;
    }
  });

  /*******************************************
  INTERNAL MODULE: ./tables/data/counter/fetch
  *******************************************/

  ims.set('./tables/data/counter/fetch', {
    hash: 2851854299,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CounterFetch = void 0;
      class CounterFetch {
        #counter;
        #value;
        constructor(counter, value) {
          this.#counter = counter;
          this.#value = value;
        }
        #fetching = false;
        get fetching() {
          return this.#fetching;
        }
        #fetched = false;
        get fetched() {
          return this.#fetched;
        }
        async fetch() {
          const {
            table
          } = this.#counter;
          // Fetch from server
          this.#fetching = true;
          this.#counter.trigger('change');
          const attributes = {};
          this.#value.value = await table.queries.counter(this.#counter.filter.specs, attributes);
          this.#fetching = false;
          this.#fetched = true;
          this.#counter.trigger('change');
        }
      }
      exports.CounterFetch = CounterFetch;
    }
  });

  /*************************************************
  INTERNAL MODULE: ./tables/data/counter/local-store
  *************************************************/

  ims.set('./tables/data/counter/local-store', {
    hash: 1873218828,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CounterLocalStore = void 0;
      class CounterLocalStore {
        #counter;
        #loaded = false;
        get loaded() {
          return this.#loaded;
        }
        #accessed = false;
        async load() {
          const {
            table,
            filter
          } = this.#counter;
          const attributes = {};
          const stored = await table.localDB.counters.load(filter.specs, attributes);
          this.#accessed = true;
          this.#loaded = !!stored;
          return stored;
        }
        constructor(counter) {
          this.#counter = counter;
        }
      }
      exports.CounterLocalStore = CounterLocalStore;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./tables/data/counter/manager
  *********************************************/

  ims.set('./tables/data/counter/manager', {
    hash: 2047409176,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CountersManager = void 0;
      var _counter = require("./counter");
      var _factory = require("../factory/factory");
      class CountersManager extends _factory.Factory {
        create(key, instanceId, filter, attributes, session) {
          return new _counter.CounterData(this, key, instanceId, filter, attributes, session);
        }
        get(filter, attributes, session) {
          return super.get(...arguments);
        }
      }
      exports.CountersManager = CountersManager;
    }
  });

  /*****************************************************
  INTERNAL MODULE: ./tables/data/factory/compare-objects
  *****************************************************/

  ims.set('./tables/data/factory/compare-objects', {
    hash: 2669127418,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CompareObjects = void 0;
      class CompareObjects {
        static generate(...any) {
          let args = [...arguments];
          args = args.map(argument => {
            if (typeof argument === 'object') {
              let ordered = Object.entries(argument);
              ordered = ordered.sort((e0, e1) => e0[0] > e1[0] ? -1 : 1);
              return ordered;
            } else {
              return argument;
            }
          });
          return JSON.stringify(args);
        }
        static compare(i1, i2) {
          return this.generate(i1) === this.generate(i2);
        }
      }
      exports.CompareObjects = CompareObjects;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./tables/data/factory/factory
  *********************************************/

  ims.set('./tables/data/factory/factory', {
    hash: 147222453,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Factory = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _compareObjects = require("./compare-objects");
      class Factory extends _core.Events {
        #table;
        get table() {
          return this.#table;
        }
        constructor(table) {
          super();
          this.#table = table;
        }
        #instanceId = 0;
        #keys = new Map();
        #instances = new Map();
        has(...any) {
          return this.#keys.has(_compareObjects.CompareObjects.generate(...arguments));
        }
        // The count of consumers that are holding a product
        // Used destroy a product only when there are no consumers using it
        // The key of the map is the product instanceId
        #counters = new Map();
        get(...any) {
          const key = _compareObjects.CompareObjects.generate(...arguments);
          const instanceId = this.#keys.has(key) ? this.#keys.get(key) : this.#instanceId++;
          this.hold(instanceId);
          if (this.#instances.has(instanceId)) return this.#instances.get(instanceId);
          const product = this.create(key, instanceId, ...arguments);
          this.#keys.set(key, instanceId);
          this.#instances.set(instanceId, product);
          return product;
        }
        hold(instanceId) {
          let count = this.#counters.has(instanceId) ? this.#counters.get(instanceId) + 1 : 1;
          this.#counters.set(instanceId, count);
        }
        /**
         * Release a product from being consumed. Many consumers can hold the same product, so only destroy it
         * when no consumers are holding it
         *
         * @param {number} instanceId The instance id of the product
         * @returns {Product} Returns the product only if it has been destroyed
         */
        release(instanceId) {
          if (!this.#counters.has(instanceId)) {
            throw new Error(`Instance id "${instanceId}" is not registered`);
          }
          const count = this.#counters.get(instanceId) - 1;
          if (count) {
            this.#counters.set(instanceId, count);
            return;
          }
          const product = this.#instances.get(instanceId);
          this.#keys.delete(product.key);
          this.#instances.delete(instanceId);
          this.#counters.delete(instanceId);
          product.destroy();
          return product;
        }
      }
      exports.Factory = Factory;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./tables/data/factory/product
  *********************************************/

  ims.set('./tables/data/factory/product', {
    hash: 1801019598,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Product = void 0;
      var _core = require("@beyond-js/kernel/core");
      class Product extends _core.Events {
        #manager;
        get manager() {
          return this.#manager;
        }
        get table() {
          return this.#manager.table;
        }
        // The key generated by CompareObjects.generate(filter, attributes, session)
        #key;
        get key() {
          return this.#key;
        }
        // The auto-numeric instance id generated by the manager
        #instanceId;
        get instanceId() {
          return this.#instanceId;
        }
        #session;
        get session() {
          return this.#session;
        }
        hold() {
          this.#manager.hold(this.#instanceId);
        }
        release() {
          this.#manager.release(this.#instanceId);
        }
        get landed() {
          return this.loaded || this.fetched;
        }
        /**
         * Product Constructor
         * @param {Factory<*>} manager The manager of the product (instance of a factory)
         * @param {string} key The key generated by CompareObjects.generate(filter, attributes, session)
         * @param {number} instanceId The auto-numeric instance id generated by the manager
         * @param {string} session The session name
         * @protected
         */
        constructor(manager, key, instanceId, session) {
          super();
          this.#manager = manager;
          this.#key = key;
          this.#instanceId = instanceId;
          this.#session = session;
        }
      }
      exports.Product = Product;
    }
  });

  /*******************************************
  INTERNAL MODULE: ./tables/data/filter/filter
  *******************************************/

  ims.set('./tables/data/filter/filter', {
    hash: 1271509135,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Filter = exports.ConditionOperand = void 0;
      /*bundle*/
      var ConditionOperand;
      exports.ConditionOperand = ConditionOperand;
      (function (ConditionOperand) {
        ConditionOperand[ConditionOperand["Equal"] = 0] = "Equal";
        ConditionOperand[ConditionOperand["Greater"] = 1] = "Greater";
        ConditionOperand[ConditionOperand["GreaterOrEqual"] = 2] = "GreaterOrEqual";
        ConditionOperand[ConditionOperand["Lower"] = 3] = "Lower";
        ConditionOperand[ConditionOperand["LowerOrEqual"] = 4] = "LowerOrEqual";
      })(ConditionOperand || (exports.ConditionOperand = ConditionOperand = {}));
      class Filter {
        #table;
        get table() {
          return this.#table;
        }
        #specs;
        get specs() {
          return this.#specs;
        }
        #fields = new Set();
        get fields() {
          return new Set(this.#fields);
        }
        #validate = () => {
          if (!this.#specs) return true;
          if (!(this.#specs instanceof Array)) {
            throw new Error('Invalid filter specification');
          }
          for (const condition of this.#specs) {
            if (!condition || typeof condition !== 'object') {
              console.error('Filter condition', condition);
              throw new Error('At least one of the conditions of the filter is invalid');
            }
            const {
              field,
              operand,
              value
            } = condition;
            this.#fields.add(field);
            if (!field || typeof field !== 'string') {
              throw new Error(`Condition field attribute "${field}" is invalid`);
            }
            const co = ConditionOperand;
            const operands = [co.Equal, co.Greater, co.GreaterOrEqual, co.Lower, co.LowerOrEqual];
            if (!operand && operand !== 0 || !operands.includes(operand)) {
              throw new Error(`Condition operand "${operand}" is invalid`);
            }
            if (!value) {
              throw new Error(`Condition value "${value}" is invalid`);
            }
          }
        };
        /**
         * Checks if the record should be included in the list or not
         * @param {RecordData} record
         */
        applies(record) {
          return false;
        }
        constructor(table, specs) {
          this.#table = table;
          this.#specs = specs;
          this.#validate();
        }
      }
      exports.Filter = Filter;
    }
  });

  /*****************************************
  INTERNAL MODULE: ./tables/data/lists/fetch
  *****************************************/

  ims.set('./tables/data/lists/fetch', {
    hash: 1465520584,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListFetch = void 0;
      var _core = require("@beyond-js/kernel/core");
      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      class ListFetch {
        #list;
        constructor(list) {
          this.#list = list;
        }
        #fetching = false;
        get fetching() {
          return this.#fetching;
        }
        #fetched = false;
        get fetched() {
          return this.#fetched;
        }
        async fetch() {
          const {
            table
          } = this.#list;
          // Fetch from server
          this.#fetching = true;
          this.#list.trigger('change');
          const attributes = {};
          const response = await table.queries.list(this.#list.filter.specs, attributes);
          if (!response) {
            this.#fetching = false;
            this.#fetched = true;
            this.#list.trigger('change');
            return;
          }
          this.#list.records.overwrite(response);
          this.#fetching = false;
          this.#fetched = true;
          this.#list.trigger('change');
          this.#list.trigger('updated');
        }
      }
      exports.ListFetch = ListFetch;
      __decorate([_core.SingleCall], ListFetch.prototype, "fetch", null);
    }
  });

  /****************************************
  INTERNAL MODULE: ./tables/data/lists/list
  ****************************************/

  ims.set('./tables/data/lists/list', {
    hash: 3900120169,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListData = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _product = require("../factory/product");
      var _filter = require("../filter/filter");
      var _fetch = require("./fetch");
      var _localStore = require("./local-store");
      var _records = require("./records");
      var _order = require("./order");
      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      class ListData extends _product.Product {
        #filter;
        get filter() {
          return this.#filter;
        }
        #order;
        get order() {
          return this.#order;
        }
        #attributes;
        get attributes() {
          return this.#attributes;
        }
        #invalidated = false;
        // For realtime notifications to indicate that the list has changed
        invalidate() {
          this.#invalidated = true;
          this.trigger('invalidated');
        }
        #records = new _records.ListRecords(this);
        get records() {
          return this.#records;
        }
        // The local store, properties and methods
        #localStore = new _localStore.ListLocalStore(this);
        get localStore() {
          return this.#localStore;
        }
        get loaded() {
          return this.#localStore.loaded;
        }
        async load() {
          let stored;
          try {
            stored = await this.#localStore.load();
          } catch (exc) {
            console.error(`Error loading list from cache`, exc.stack);
            return;
          }
          if (stored === undefined) return;
          if (!(stored instanceof Array)) {
            console.warn('Invalid list data cache', this);
          } else {
            stored && this.#records.overwrite(stored);
            this.trigger('change');
            this.trigger('updated');
          }
        }
        // The fetch manager, properties and methods
        #fetch = new _fetch.ListFetch(this);
        get fetching() {
          return this.#fetch.fetching;
        }
        get fetched() {
          return this.#fetch.fetched;
        }
        async fetch() {
          await this.#fetch.fetch();
        }
        /**
         * ListData Constructor
         * @param {ListsManager} manager The manager of the list (instance of a factory)
         * @param {string} key The key generated by CompareObjects.generate(filter, attributes, session)
         * @param {number} instanceId The auto-numeric instance id generated by the manager
         * @param {FilterSpecs} filterSpecs The filter specification
         * @param {OrderSpecs} orderSpecs The order specification
         * @param {ListAttributes} attributes The attributes of the list
         * @param {string} session The session name
         */
        constructor(manager, key, instanceId, filterSpecs, orderSpecs, attributes, session) {
          super(manager, key, instanceId, session);
          this.#filter = new _filter.Filter(this.table, filterSpecs);
          this.#order = new _order.Order(this.table, orderSpecs);
          this.#attributes = attributes;
        }
        destroy() {
          this.#records.destroy();
        }
      }
      exports.ListData = ListData;
      __decorate([_core.SingleCall], ListData.prototype, "load", null);
    }
  });

  /***********************************************
  INTERNAL MODULE: ./tables/data/lists/local-store
  ***********************************************/

  ims.set('./tables/data/lists/local-store', {
    hash: 250894529,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListLocalStore = void 0;
      class ListLocalStore {
        #list;
        #loaded = false;
        get loaded() {
          return this.#loaded;
        }
        #accessed = false;
        async load() {
          const {
            table,
            filter
          } = this.#list;
          const attributes = {};
          const stored = await table.localDB.lists.load(filter.specs, attributes);
          this.#accessed = true;
          this.#loaded = !!stored;
          return stored?.data;
        }
        constructor(list) {
          this.#list = list;
        }
      }
      exports.ListLocalStore = ListLocalStore;
    }
  });

  /***************************************************
  INTERNAL MODULE: ./tables/data/lists/manager/manager
  ***************************************************/

  ims.set('./tables/data/lists/manager/manager', {
    hash: 585864089,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListsManager = void 0;
      var _list = require("../list");
      var _factory = require("../../factory/factory");
      var _registries = require("./registries/registries");
      var _realtime = require("./realtime/realtime");
      class ListsManager extends _factory.Factory {
        #registries = new _registries.Registries(this);
        get registries() {
          return this.#registries;
        }
        #realtime = new _realtime.Realtime(this);
        get realtime() {
          return this.#realtime;
        }
        create(key, instanceId, filter, order, attributes, session) {
          return new _list.ListData(this, key, instanceId, filter, order, attributes, session);
        }
        get(filter, order, attributes, session) {
          const list = super.get(filter, order, attributes, session);
          this.#registries.informListCreated(list);
          return list;
        }
        release(instanceId) {
          const list = super.release(instanceId);
          if (!list) return;
          this.#registries.informListDestroyed(list);
          return list;
        }
      }
      exports.ListsManager = ListsManager;
    }
  });

  /*************************************************************
  INTERNAL MODULE: ./tables/data/lists/manager/realtime/realtime
  *************************************************************/

  ims.set('./tables/data/lists/manager/realtime/realtime', {
    hash: 2873257050,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Realtime = void 0;
      var _reports = require("./reports");
      class Realtime {
        #reports;
        get reports() {
          return this.#reports;
        }
        constructor(manager) {
          this.#reports = new _reports.Reports(manager);
        }
      }
      exports.Realtime = Realtime;
    }
  });

  /************************************************************
  INTERNAL MODULE: ./tables/data/lists/manager/realtime/reports
  ************************************************************/

  ims.set('./tables/data/lists/manager/realtime/reports', {
    hash: 78249837,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Reports = void 0;
      var _filter = require("../../../filter/filter");
      class Reports {
        #manager;
        constructor(manager) {
          this.#manager = manager;
        }
        /**
         * Check if the filter specified in the realtime event fits the filter of the manager
         *
         * @param {ListUpdateFilterReport} realtimeFilter The filter received by the realtime event
         * @param {FilterSpecs} managerFilter The filter being checked
         * @returns {boolean}
         */
        #checkFilter = (realtimeFilter, managerFilter) => {
          for (const condition of managerFilter) {
            if (!realtimeFilter.hasOwnProperty(condition.field)) continue;
            switch (condition.operand) {
              case _filter.ConditionOperand.Equal:
                if (realtimeFilter[condition.field] !== condition.value) return false;
                break;
              case _filter.ConditionOperand.Greater:
                if (realtimeFilter[condition.field] <= condition.value) return false;
                break;
              case _filter.ConditionOperand.GreaterOrEqual:
                if (realtimeFilter[condition.field] < condition.value) return false;
                break;
              case _filter.ConditionOperand.Lower:
                if (realtimeFilter[condition.field] >= condition.value) return false;
                break;
              case _filter.ConditionOperand.LowerOrEqual:
                if (realtimeFilter[condition.field] > condition.value) return false;
                break;
            }
          }
          return true;
        };
        update(filter) {
          for (const entry of this.#manager.registries.filters.values()) {
            if (filter && entry.filter.specs && !this.#checkFilter(filter, entry.filter.specs)) continue;
            entry.lists.forEach(list => list.landed && list.invalidate());
          }
        }
      }
      exports.Reports = Reports;
    }
  });

  /*************************************************************
  INTERNAL MODULE: ./tables/data/lists/manager/registries/filter
  *************************************************************/

  ims.set('./tables/data/lists/manager/registries/filter', {
    hash: 2522735486,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RegistryByFilter = void 0;
      var _compareObjects = require("../../../factory/compare-objects");
      class RegistryByFilter extends Map {
        informListCreated(list) {
          const key = _compareObjects.CompareObjects.generate(list.filter.specs);
          const registry = this.has(key) ? this.get(key) : {
            filter: list.filter,
            lists: []
          };
          registry.lists.push(list);
          this.set(key, registry);
        }
        informListDestroyed(list) {
          const key = _compareObjects.CompareObjects.generate(list.filter.specs);
          if (!this.has(key)) {
            console.error('List filter is not in the registry of filters', list);
            return;
          }
          const registry = this.get(key);
          if (!registry.lists.includes(list)) {
            console.error('List filter is not in the registry of filters', list);
            return;
          }
          registry.lists.slice(registry.lists.indexOf(list), 1);
        }
      }
      exports.RegistryByFilter = RegistryByFilter;
    }
  });

  /*****************************************************************
  INTERNAL MODULE: ./tables/data/lists/manager/registries/registries
  *****************************************************************/

  ims.set('./tables/data/lists/manager/registries/registries', {
    hash: 1636734906,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Registries = void 0;
      var _filter = require("./filter");
      class Registries {
        #manager;
        #registries;
        constructor(manager) {
          this.#manager = manager;
          this.#registries = new Map();
          this.#registries.set('filters', new _filter.RegistryByFilter());
        }
        get filters() {
          return this.#registries.get('filters');
        }
        informListCreated(list) {
          this.#registries.forEach(registry => registry.informListCreated(list));
        }
        informListDestroyed(list) {
          this.#registries.forEach(registry => registry.informListDestroyed(list));
        }
      }
      exports.Registries = Registries;
    }
  });

  /*****************************************
  INTERNAL MODULE: ./tables/data/lists/order
  *****************************************/

  ims.set('./tables/data/lists/order', {
    hash: 4054939735,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Order = void 0;
      class Order {
        #table;
        get table() {
          return this.#table;
        }
        #specs;
        get specs() {
          return this.#specs;
        }
        #validate = () => {
          if (!this.#specs) return true;
          if (!(this.#specs instanceof Array)) {
            throw new Error('Invalid order specification');
          }
          for (const field of this.#specs) {
            if (!field || typeof field !== 'object') {
              console.error('Order field', field);
              throw new Error('At least one of the fields of the order is invalid');
            }
            if (!field.field || typeof field.field !== 'string') {
              throw new Error(`Field attribute "${field}" of the order specification is invalid`);
            }
          }
        };
        constructor(table, specs) {
          this.#table = table;
          this.#specs = specs;
          this.#validate();
        }
      }
      exports.Order = Order;
    }
  });

  /*******************************************
  INTERNAL MODULE: ./tables/data/lists/records
  *******************************************/

  ims.set('./tables/data/lists/records', {
    hash: 1169534636,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListRecords = void 0;
      class ListRecords {
        #list;
        get list() {
          return this.#list;
        }
        // Keeps a list of records sorted by the filter criteria
        #ordered = [];
        get values() {
          return this.#ordered.slice();
        }
        /**
         * ListRecords Constructor
         * @param {ListRecords} list
         */
        constructor(list) {
          this.#list = list;
          this.#list.table.records.on('modified', this.#admission);
        }
        #delete = (unpublished, id) => {
          for (let index = this.#ordered.length - 1; index >= 0; index--) {
            const value = this.#ordered[index];
            if (!value.unpublished !== !!unpublished) continue;
            if (value.unpublished && value.localId !== id || !value.unpublished && value.pk !== id) continue;
            this.#ordered.splice(index, 1);
          }
        };
        #sort = (unpublished, id) => {
          // TODO: sort algorithm should be added here
          const value = {
            unpublished: unpublished
          };
          value[unpublished ? 'localId' : 'pk'] = id;
          this.#ordered.push(value);
        };
        /**
         * Checks if the record should be included in the list or not
         * @param {RecordData} record
         * @param {string} field The name of the field that has changed
         */
        #admission = (record, field) => {
          if (field && !this.#list.filter.fields.has(field)) {
            // The change is in a field that is not part of the filter
            return;
          }
          const applies = this.#list.filter.applies(record);
          const id = record.persisted ? record.pk.value : record.localId;
          applies ? this.#sort(record.persisted, id) : this.#delete(record.persisted, id);
        };
        destroy() {
          this.#list.manager.off('modified', this.#admission);
        }
        overwrite(values) {
          this.#ordered = [];
          values.forEach(id => this.#ordered.push({
            unpublished: false,
            pk: id
          }));
        }
      }
      exports.ListRecords = ListRecords;
    }
  });

  /***********************************************
  INTERNAL MODULE: ./tables/data/realtime/realtime
  ***********************************************/

  ims.set('./tables/data/realtime/realtime', {
    hash: 3629346848,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.realtime = void 0;
      var _reports = require("./reports/reports");
      /*bundle*/
      const realtime = new class {
        #reports = new _reports.Reports();
        get reports() {
          return this.#reports;
        }
      }();
      exports.realtime = realtime;
    }
  });

  /***************************************************
  INTERNAL MODULE: ./tables/data/realtime/reports/list
  ***************************************************/

  ims.set('./tables/data/realtime/reports/list', {
    hash: 3728706255,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListReport = void 0;
      var _tables = require("../../../tables");
      class ListReport {
        update(tableName, filter) {
          if (!_tables.tables.has(tableName)) {
            console.error(`Realtime list update notification arrived with an invalid table specification "${tableName}"`);
            return;
          }
          const table = _tables.tables.get(tableName);
          table.lists.realtime.reports.update(filter);
        }
      }
      exports.ListReport = ListReport;
    }
  });

  /*****************************************************
  INTERNAL MODULE: ./tables/data/realtime/reports/record
  *****************************************************/

  ims.set('./tables/data/realtime/reports/record', {
    hash: 2510156693,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordReport = void 0;
      var _tables = require("../../../tables");
      class RecordReport {
        #checkTable = tableName => {
          if (!_tables.tables.has(tableName)) {
            console.error('Realtime record update notification arrived with ' + `an invalid table specification "${tableName}"`);
            return false;
          }
          return true;
        };
        insert(tableName, id) {
          console.log('record insert reported', tableName, id);
        }
        delete(tableName, id) {
          console.log('record deleted reported', tableName, id);
        }
        update(tableName, pk, field, value) {
          if (!this.#checkTable(tableName)) return;
          const table = _tables.tables.get(tableName);
          table.records.realtime.reports.update(pk, field, value);
        }
      }
      exports.RecordReport = RecordReport;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/data/realtime/reports/reports
  ******************************************************/

  ims.set('./tables/data/realtime/reports/reports', {
    hash: 107636444,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Reports = void 0;
      var _record = require("./record");
      var _list = require("./list");
      class Reports {
        #list = new _list.ListReport();
        get list() {
          return this.#list;
        }
        #record = new _record.RecordReport();
        get record() {
          return this.#record;
        }
      }
      exports.Reports = Reports;
    }
  });

  /**************************************************
  INTERNAL MODULE: ./tables/data/records/data/factory
  **************************************************/

  ims.set('./tables/data/records/data/factory', {
    hash: 796289728,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordsDataFactory = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _record = require("./record");
      var _compareObjects = require("../../factory/compare-objects");
      var _unpublished = require("./unpublished");
      class RecordsDataFactory extends _core.Events {
        #table;
        get table() {
          return this.#table;
        }
        #identifiers = new Map();
        #unpublished = new _unpublished.UnpublishedRecords(this);
        get unpublished() {
          return this.#unpublished;
        }
        constructor(table) {
          super();
          this.#table = table;
        }
        #wrappedFactory;
        set wrappedFactory(value) {
          this.#wrappedFactory = value;
        }
        get(identifier, session) {
          const key = _compareObjects.CompareObjects.generate(identifier, session);
          if (this.#identifiers.has(key)) {
            return this.#identifiers.get(key);
          }
          const record = new _record.RecordData(this, identifier, session);
          this.#identifiers.set(key, record);
          return record;
        }
        /**
         * This method is called by the wrapped record.
         * When an identifier is not longer used (no consumers are holding the identifier),
         * then the wrapped record is destroyed, and this method is called.
         * It is required to check if there still are other identifiers using this record before destroying it.
         *
         * @param {RecordIdentifier} identifier
         * @param {string} session
         */
        release(identifier, session) {
          const key = _compareObjects.CompareObjects.generate(identifier, session);
          if (!this.#identifiers.has(key)) {
            throw new Error(`Identifier "${key}" session "${session}" is not registered in the factory`);
          }
          const record = this.#identifiers.get(key);
          // Check if there are identifiers consuming this record
          for (const identifier of record.identifiers) {
            if (this.#wrappedFactory.has(identifier, session)) {
              return;
            }
          }
          // At this point, none of the record identifiers are being consumed
          this.#identifiers.delete(key);
          record.destroy();
        }
        create = session => this.#unpublished.create(session);
        getUnpublished = localId => this.#unpublished.getUnpublished(localId);
      }
      exports.RecordsDataFactory = RecordsDataFactory;
    }
  });

  /**************************************************
  INTERNAL MODULE: ./tables/data/records/data/fetcher
  **************************************************/

  ims.set('./tables/data/records/data/fetcher', {
    hash: 1380837732,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordFetcher = void 0;
      var _core = require("@beyond-js/kernel/core");
      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      class RecordFetcher {
        #record;
        #version;
        constructor(record, version) {
          this.#record = record;
          this.#version = version;
        }
        #fetching = false;
        get fetching() {
          return this.#fetching;
        }
        #fetched = false;
        get fetched() {
          return this.#fetched;
        }
        async fetch() {
          // Avoid to request the fetch action twice to the server
          if (this.#fetching) return;
          const {
            table
          } = this.#record;
          const done = data => {
            this.#fetched = true;
            this.#record.fields.setter.values(data.data);
            this.#version.value = data.version;
            this.#record.trigger('change');
            this.#record.trigger('updated');
            return true;
          };
          // Check if data is already loaded in memory cache
          const memory = table.localDB.records.memory.load(this.#record);
          if (memory && Date.now() - memory.savedTime < 1000) {
            return done(memory);
          }
          // Fetch from server
          this.#fetching = true;
          this.#record.trigger('change');
          const fields = {};
          let count = 0;
          for (const [name, field] of this.#record.fields) {
            if (!field.assigned) continue;
            fields[name] = field.value;
            count++;
          }
          const attributes = {};
          if (count === 0) {
            console.warn('None of the fields of the record being fetched is set', this.#record);
            return;
          }
          const response = await table.queries.data(fields, attributes);
          if (!response) {
            this.#fetching = false;
            this.#fetched = true;
            return false;
          }
          this.#fetching = false;
          return done(response);
        }
      }
      exports.RecordFetcher = RecordFetcher;
      __decorate([_core.SingleCall], RecordFetcher.prototype, "fetch", null);
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/field
  *******************************************************/

  ims.set('./tables/data/records/data/fields/field', {
    hash: 2081975081,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Field = void 0;
      var _published = require("./sources/published");
      var _memory = require("./sources/memory");
      var _constants = require("../../../../../constants");
      class Field {
        #name;
        get name() {
          return this.#name;
        }
        #record;
        get record() {
          return this.#record;
        }
        #memory = new _memory.MemoryFieldSource(this);
        get memory() {
          return this.#memory;
        }
        #published = new _published.PublishedFieldSource(this);
        get published() {
          return this.#published;
        }
        /**
         * Field Constructor
         *
         * @param name {string} The name of the field
         * @param record {object} The Record instance
         */
        constructor(name, record) {
          this.#name = name;
          this.#record = record;
        }
        get value() {
          // If memory value is assigned return it first
          if (this.#memory.assigned) {
            return this.#memory.value;
          }
          // If record is loaded or fetched, then return the published value
          if (this.#record.landed) {
            return this.#published.value;
          }
          // Check if the field is set in the initial identifier
          const initialIdentifier = this.#record.identifiers.initial;
          if (initialIdentifier.hasOwnProperty(this.#name)) {
            return initialIdentifier[this.#name];
          }
          // Field value is not set
          return _constants.NotSet;
        }
        /**
         * true if any of the sources (memory or published) has a value different than [NotSet, undefined] or
         * true is returned if the initial identifier is set for this field
         * @returns {boolean}
         */
        get assigned() {
          const record = this.#record;
          if (!record.landed) {
            const initialIdentifier = record.identifiers.initial;
            if (initialIdentifier.hasOwnProperty(this.#name)) {
              return true;
            }
          }
          return this.#memory.assigned || this.#published.assigned;
        }
        get unpublished() {
          return this.#memory !== _constants.NotSet && this.#memory !== this.#published;
        }
        discard = () => this.#memory.discard();
      }
      exports.Field = Field;
    }
  });

  /********************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/fields
  ********************************************************/

  ims.set('./tables/data/records/data/fields/fields', {
    hash: 1590311372,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Fields = void 0;
      var _field = require("./field");
      var _setter = require("./setter");
      /**
       * The record fields
       */
      class Fields extends Map {
        #record;
        get record() {
          return this.#record;
        }
        #setter;
        get setter() {
          return this.#setter;
        }
        constructor(record) {
          super();
          this.#record = record;
          this.#setter = new _setter.FieldsSetter(record);
          const fields = record.table.fields;
          for (let name of fields) {
            const field = new _field.Field(name, this.#record);
            this.set(name, field);
          }
        }
        /**
         * If any of the fields have a published value assigned, it means that the
         * record is already back-end persisted
         * @returns {boolean}
         */
        get persisted() {
          for (const field of this.values()) {
            if (field.published.assigned) return true;
          }
          return false;
        }
        /**
         * Returns an object with the key-value of the unpublished fields
         */
        unpublished() {
          const fields = new Map();
          this.forEach((field, name) => field.unpublished && fields.set(name, field));
          return fields;
        }
        discard = () => this.forEach(field => field.discard());
      }
      exports.Fields = Fields;
    }
  });

  /********************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/setter
  ********************************************************/

  ims.set('./tables/data/records/data/fields/setter', {
    hash: 1387037198,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FieldsSetter = void 0;
      class FieldsSetter {
        #record;
        constructor(record) {
          this.#record = record;
        }
        values(values) {
          const record = this.#record;
          // Check if primary key received is valid
          const pk = record.table.indices.primary.fields[0];
          if (!values.hasOwnProperty(pk)) {
            console.error(`Data received on record fetch is invalid. Primary key not received.`, values, this);
            return;
          }
          for (const identifier of record.identifiers) {
            if (!identifier.hasOwnProperty(pk)) continue;
            if (identifier[pk] !== values[pk]) {
              console.error(`Data received on record fetch is invalid. Primary key received is invalid.`, values, this);
              return;
            }
            break;
          }
          // Set fields with the received values
          const data = new Map(Object.entries(values));
          for (const [name, value] of data) {
            const {
              fields
            } = record;
            if (!fields.has(name)) {
              console.warn(`Field "${name}" is not defined on table "${record.table.name}", ` + `but it was received on fetch response.\n\n`, data, '\n', this);
              continue;
            }
            const field = fields.get(name);
            field.published.overwrite(value);
          }
        }
      }
      exports.FieldsSetter = FieldsSetter;
    }
  });

  /****************************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/sources/memory
  ****************************************************************/

  ims.set('./tables/data/records/data/fields/sources/memory', {
    hash: 1124919465,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MemoryFieldSource = void 0;
      var _source = require("./source");
      class MemoryFieldSource extends _source.FieldSource {
        constructor(field) {
          super(field);
        }
      }
      exports.MemoryFieldSource = MemoryFieldSource;
    }
  });

  /*******************************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/sources/published
  *******************************************************************/

  ims.set('./tables/data/records/data/fields/sources/published', {
    hash: 1639330156,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PublishedFieldSource = void 0;
      var _source = require("./source");
      class PublishedFieldSource extends _source.FieldSource {
        constructor(field) {
          super(field, {
            modifiable: false
          });
        }
      }
      exports.PublishedFieldSource = PublishedFieldSource;
    }
  });

  /****************************************************************
  INTERNAL MODULE: ./tables/data/records/data/fields/sources/source
  ****************************************************************/

  ims.set('./tables/data/records/data/fields/sources/source', {
    hash: 3270809056,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FieldSource = void 0;
      var _constants = require("../../../../../../constants");
      /**
       * FieldSource instances are the memory and published properties of each record field
       */
      class FieldSource {
        #field;
        get field() {
          return this.#field;
        }
        #specs;
        #value;
        get value() {
          return this.#value;
        }
        set value(value) {
          if (!this.#specs.modifiable) {
            throw new Error('Field source should only be modified internally by plm');
          }
          // Avoid to modify the value if the field is present in the initial identifier
          // and the record is not still persisted
          const {
            record
          } = this.#field;
          if (!record.persisted) {
            const initialIdentifier = record.identifiers.initial;
            if (initialIdentifier.hasOwnProperty(this.#field.name)) {
              throw new Error(`Value of field "${this.#field.name}" cannot be set as ` + `it is a field present in the initial identifier`);
            }
          }
          // Primary key cannot be set nor modified
          const pk = record.table.indices.primary.fields[0];
          if (this.#field.name === pk) {
            throw new Error(`Primary key field "${pk}" cannot be set nor modified`);
          }
          this.#value = value;
          record.trigger('change');
        }
        get assigned() {
          return ![_constants.NotSet, undefined].includes(this.value);
        }
        constructor(field, specs) {
          specs = specs ? specs : {};
          specs.modifiable = !!specs.modifiable;
          this.#field = field;
          this.#specs = specs;
        }
        /**
         * Set the value of the field directly, without triggering events nor making any validation,
         * it is used internally by plm, .. consumers should not use it
         */
        overwrite(value) {
          this.#value = value;
        }
        discard() {
          this.value = _constants.NotSet;
        }
      }
      exports.FieldSource = FieldSource;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/data/records/data/identifiers
  ******************************************************/

  ims.set('./tables/data/records/data/identifiers', {
    hash: 3204112704,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordIdentifiers = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _compareObjects = require("../../factory/compare-objects");
      var _constants = require("../../../../constants");
      class RecordIdentifiers extends _core.Events {
        #record;
        // The initial identifier when the record was created by the manager
        // and the record is still not loaded
        #initial;
        get initial() {
          return this.#initial;
        }
        #indices;
        // Identifiers by index name
        #identifiers = new Map();
        get size() {
          return this.#identifiers.size;
        }
        #errors = [];
        errors() {
          return this.#errors;
        }
        get(indexName) {
          return this.#identifiers.get(indexName);
        }
        /**
         * RecordIdentifiers Constructor
         *
         * @param {RecordData} record
         * @param {RecordIdentifier} initial The initial identifier when the record was created by the manager
         */
        constructor(record, initial) {
          super();
          this.#initial = initial;
          this.#record = record;
          this.#indices = record.table.indices;
          if (!initial || initial.localId) return;
          const index = this.getIndex(initial);
          if (!index) {
            console.error('Identifier:', initial);
            throw new Error('Identifier does not match any of the indices of the table');
          }
          this.#identifiers.set(index.name, initial);
        }
        get primaryKeyFieldValue() {
          const pk = this.#indices.primary;
          const field = pk.fields[0];
          return this.#initial && this.#initial.hasOwnProperty(field) ? this.#initial[field] : this.#record.fields.get(field).value;
        }
        /**
         * Finds the index that fits an identifier
         *
         * @param {RecordIdentifier} identifier
         * @returns {Index | undefined}
         */
        getIndex = identifier => {
          for (const index of this.#indices.values()) {
            if (!index.primary && !index.unique) continue;
            const found = index.fields.reduce((found, field) => found && identifier.hasOwnProperty(field), true);
            if (found) return index;
          }
        };
        /**
         * Returns an identifier according to the fields of an index
         *
         * @param {string} indexName
         * @returns {RecordIdentifier | undefined}
         */
        createIdentifierFromIndex(indexName) {
          if (!this.#indices.has(indexName)) {
            throw new Error(`Index "${indexName}" is not registered`);
          }
          const index = this.#indices.get(indexName);
          if (!index.primary && !index.unique) {
            throw new Error(`Index "${indexName}" must be primary or unique to identify the record`);
          }
          if (!this.#record.loaded) {
            throw new Error(`Cannot create the identifier as the record is not loaded`);
          }
          const output = {};
          for (const fieldName of index.fields) {
            const value = this.#record.fields.get(fieldName).value;
            if (index.primary && [undefined, _constants.NotSet].includes(value)) {
              this.#errors.push(`Record violates the index "${indexName}" ` + `as the field "${fieldName}" has an undefined value`);
              return;
            }
            output[fieldName] = value;
          }
          return output;
        }
        /**
         * Updates the identifiers according to the values of the fields of the record
         */
        update() {
          const updated = new Map();
          const table = this.#record.table;
          const previous = this.#identifiers;
          for (const index of table.indices.values()) {
            const identifier = this.createIdentifierFromIndex(index.name);
            updated.set(index.name, identifier);
          }
          // Check if some of the identifiers changed
          let changed = false;
          for (const [name, identifier] of updated.entries()) {
            if (!this.#identifiers.has(name)) {
              changed = true;
              break;
            }
            if (!_compareObjects.CompareObjects.compare(identifier, this.#identifiers.get(name))) {
              changed = true;
              break;
            }
          }
          this.#identifiers = updated;
          if (changed) {
            this.trigger('change', this.#record, previous);
          }
        }
        forEach = callback => this.#identifiers.forEach(callback);
        *[Symbol.iterator]() {
          for (const identifier of this.#identifiers.values()) {
            yield identifier;
          }
        }
      }
      exports.RecordIdentifiers = RecordIdentifiers;
    }
  });

  /*************************************************
  INTERNAL MODULE: ./tables/data/records/data/loader
  *************************************************/

  ims.set('./tables/data/records/data/loader', {
    hash: 2569001847,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordLoader = void 0;
      var _core = require("@beyond-js/kernel/core");
      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      class RecordLoader {
        #record;
        #version;
        constructor(record, version) {
          this.#record = record;
          this.#version = version;
        }
        #loaded = false;
        get loaded() {
          return this.#loaded;
        }
        #searched = false;
        get searched() {
          return this.#searched;
        }
        async load() {
          const {
            table
          } = this.#record;
          const index = table.indices.primary;
          const pk = index.fields[0];
          const pkField = this.#record.fields.get(pk);
          if (!pkField.assigned) throw new Error(`Primary key field "${pk}" not assigned`);
          const fields = {};
          fields[pk] = pkField.value;
          const value = await table.localDB.records.load(index.name, fields);
          this.#searched = true;
          if (!value || !value.version || !value.data) return false;
          this.#record.fields.setter.values(value.data);
          this.#version.value = value.version;
          this.#loaded = true;
          this.#record.trigger('change');
          this.#record.trigger('updated');
          return true;
        }
      }
      exports.RecordLoader = RecordLoader;
      __decorate([_core.SingleCall], RecordLoader.prototype, "load", null);
    }
  });

  /*************************************************
  INTERNAL MODULE: ./tables/data/records/data/record
  *************************************************/

  ims.set('./tables/data/records/data/record', {
    hash: 3458471234,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordData = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _fields = require("./fields/fields");
      var _identifiers = require("./identifiers");
      var _loader = require("./loader");
      var _fetcher = require("./fetcher");
      var _uuid = require("../../uuid");
      class RecordData extends _core.Events {
        #manager;
        get manager() {
          return this.#manager;
        }
        get table() {
          return this.#manager.table;
        }
        #fields;
        get fields() {
          return this.#fields;
        }
        #identifiers;
        get identifiers() {
          return this.#identifiers;
        }
        #localId;
        get localId() {
          return this.#localId;
        }
        #version = {};
        get version() {
          return this.#version.value;
        }
        // The local store, properties and methods
        #loader = new _loader.RecordLoader(this, this.#version);
        get loader() {
          return this.#loader;
        }
        get loaded() {
          return this.#loader.loaded;
        }
        async load() {
          if (this.#destroyed) throw new Error('Record is destroyed');
          this.#found = await this.#loader.load();
        }
        // The fetch manager, properties and methods
        #fetcher = new _fetcher.RecordFetcher(this, this.#version);
        get fetching() {
          return this.#fetcher.fetching;
        }
        get fetched() {
          return this.#fetcher.fetched;
        }
        get landed() {
          return this.loaded || this.fetched;
        }
        #found = false;
        get found() {
          return this.#found;
        }
        async fetch() {
          if (this.#destroyed) throw new Error('Record is destroyed');
          this.#found = await this.#fetcher.fetch();
        }
        /**
         * The record is expected to be back-end persisted when:
         *   . At least an identifier is set, example: if it was created a user with
         *   an identifier by its "nickname" = "..". In this case it is expected that the record
         *   was instantiated to be loaded
         *   . When the primary key is set
         * @returns {boolean}
         */
        get persisted() {
          if (this.#identifiers.size) return true;
          const pk = this.table.indices.primary.fields[0];
          return this.#fields.get(pk).assigned;
        }
        /**
         * Returns the primary key field
         * @returns {*} the value
         */
        get pk() {
          const pk = this.table.indices.primary.fields[0];
          return this.#fields.get(pk);
        }
        #invalidated = false;
        // For realtime notifications to indicate that the list has changed
        invalidate() {
          this.#invalidated = true;
          this.trigger('invalidated');
        }
        /**
         * RecordData Constructor
         * @param {RecordsDataFactory} manager
         * @param {string | RecordIdentifier} identifier Can be the localId (string)
         * or the initial identifier (RecordIdentifier)
         * @param {string} session
         */
        constructor(manager, identifier, session) {
          super();
          this.#manager = manager;
          // If the initial identifier is not set, then it is a locally created record
          if (typeof identifier === 'string') this.#localId = (0, _uuid.createUUID)();
          const initialIdentifier = typeof identifier === 'object' ? identifier : undefined;
          this.#identifiers = new _identifiers.RecordIdentifiers(this, initialIdentifier);
          this.#fields = new _fields.Fields(this);
        }
        #destroyed = false;
        destroy() {
          if (this.#destroyed) {
            throw new Error('Record already destroyed');
          }
          this.#destroyed = true;
          super.destroy();
        }
      }
      exports.RecordData = RecordData;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/data/records/data/unpublished
  ******************************************************/

  ims.set('./tables/data/records/data/unpublished', {
    hash: 1550269948,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.UnpublishedRecords = void 0;
      var _record = require("./record");
      class UnpublishedRecords {
        #recordsDataFactory;
        constructor(recordsDataFactory) {
          this.#recordsDataFactory = recordsDataFactory;
        }
        #records = new Map();
        create(session) {
          const record = new _record.RecordData(this.#recordsDataFactory, undefined, session);
          this.#records.set(record.localId, record);
          return record;
        }
        getUnpublished(localId) {
          if (this.#records.has(localId)) return this.#records.get(localId);
          const record = new _record.RecordData(this.#recordsDataFactory, localId);
          this.#records.set(record.localId, record);
          return record;
        }
      }
      exports.UnpublishedRecords = UnpublishedRecords;
    }
  });

  /*********************************************
  INTERNAL MODULE: ./tables/data/records/manager
  *********************************************/

  ims.set('./tables/data/records/manager', {
    hash: 447865993,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RecordsManager = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _factory = require("./data/factory");
      var _factory2 = require("./wrapped/factory");
      var _realtime = require("./realtime/realtime");
      class RecordsManager extends _core.Events {
        #recordsDataFactory;
        get recordsDataFactory() {
          return this.#recordsDataFactory;
        }
        #wrappedFactory;
        #table;
        get table() {
          return this.#table;
        }
        get unpublished() {
          return this.#recordsDataFactory.unpublished;
        }
        #realtime = new _realtime.Realtime(this);
        get realtime() {
          return this.#realtime;
        }
        constructor(table) {
          super();
          this.#table = table;
          this.#recordsDataFactory = new _factory.RecordsDataFactory(table);
          this.#wrappedFactory = new _factory2.WrappedFactory(table, this.#recordsDataFactory);
          this.#recordsDataFactory.wrappedFactory = this.#wrappedFactory;
        }
        get(identifier, session) {
          return this.#wrappedFactory.get(identifier, session);
        }
        create(session) {
          return this.#recordsDataFactory.create(session);
        }
        getUnpublished(localId) {
          return this.#recordsDataFactory.getUnpublished(localId);
        }
      }
      exports.RecordsManager = RecordsManager;
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./tables/data/records/realtime/realtime
  *******************************************************/

  ims.set('./tables/data/records/realtime/realtime', {
    hash: 3868646380,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Realtime = void 0;
      var _reports = require("./reports");
      class Realtime {
        #reports;
        get reports() {
          return this.#reports;
        }
        constructor(manager) {
          this.#reports = new _reports.Reports(manager);
        }
      }
      exports.Realtime = Realtime;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/data/records/realtime/reports
  ******************************************************/

  ims.set('./tables/data/records/realtime/reports', {
    hash: 2951830057,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Reports = void 0;
      class Reports {
        #manager;
        constructor(manager) {
          this.#manager = manager;
        }
        update(pk, field, value) {
          const {
            table
          } = this.#manager;
          const pkName = table.indices.primary.fields[0];
          const identifier = {};
          identifier[pkName] = pk;
          const session = undefined;
          const record = this.#manager.recordsDataFactory.get(identifier, session);
          if (record.landed) {
            if (!field) {
              record.invalidate();
              return;
            }
            // Check if field exists in the record
            if (!record.fields.has(field)) {
              console.warn(`Record field realtime is invalid. Field "${field}" not found on table "${table.name}"`);
              return;
            }
            record.fields.get(field).published.overwrite(value);
            record.trigger('change');
          }
          this.#manager.recordsDataFactory.release(identifier, session);
        }
      }
      exports.Reports = Reports;
    }
  });

  /*****************************************************
  INTERNAL MODULE: ./tables/data/records/wrapped/factory
  *****************************************************/

  ims.set('./tables/data/records/wrapped/factory', {
    hash: 3965804558,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WrappedFactory = void 0;
      var _factory = require("../../factory/factory");
      var _record = require("./record");
      class WrappedFactory extends _factory.Factory {
        #recordsDataFactory;
        get recordsDataFactory() {
          return this.#recordsDataFactory;
        }
        constructor(table, recordsDataFactory) {
          super(table);
          this.#recordsDataFactory = recordsDataFactory;
        }
        create(key, instanceId, identifier, session) {
          return new _record.WrappedRecord(this, key, instanceId, identifier, session);
        }
        get(identifier, session) {
          return super.get(identifier, session);
        }
      }
      exports.WrappedFactory = WrappedFactory;
    }
  });

  /**********************************************************
  INTERNAL MODULE: ./tables/data/records/wrapped/fields/field
  **********************************************************/

  ims.set('./tables/data/records/wrapped/fields/field', {
    hash: 3140957279,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WrappedRecordField = void 0;
      class WrappedRecordField {
        #name;
        #wrappedRecord;
        get assigned() {
          return this.#wrappedRecord.record.fields.get(this.#name).assigned;
        }
        get value() {
          return this.#wrappedRecord.record.fields.get(this.#name).value;
        }
        get unpublished() {
          return this.#wrappedRecord.record.fields.get(this.#name).unpublished;
        }
        set value(value) {
          this.#wrappedRecord.record.fields.get(this.#name).memory.value = value;
        }
        constructor(name, wrappedRecord) {
          this.#name = name;
          this.#wrappedRecord = wrappedRecord;
        }
      }
      exports.WrappedRecordField = WrappedRecordField;
    }
  });

  /***********************************************************
  INTERNAL MODULE: ./tables/data/records/wrapped/fields/fields
  ***********************************************************/

  ims.set('./tables/data/records/wrapped/fields/fields', {
    hash: 2527122907,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WrappedRecordFields = void 0;
      var _field = require("./field");
      class WrappedRecordFields extends Map {
        constructor(wrappedRecord) {
          super();
          const {
            fields
          } = wrappedRecord.manager.table;
          for (const name of fields) {
            this.set(name, new _field.WrappedRecordField(name, wrappedRecord));
          }
        }
      }
      exports.WrappedRecordFields = WrappedRecordFields;
    }
  });

  /****************************************************
  INTERNAL MODULE: ./tables/data/records/wrapped/record
  ****************************************************/

  ims.set('./tables/data/records/wrapped/record', {
    hash: 4124104047,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WrappedRecord = void 0;
      var _product = require("../../factory/product");
      var _fields = require("./fields/fields");
      class WrappedRecord extends _product.Product {
        #identifier;
        get identifier() {
          return this.#identifier;
        }
        #session;
        get session() {
          return this.#session;
        }
        #destroyed = false;
        get destroyed() {
          return this.#destroyed;
        }
        #record;
        get record() {
          return this.#record;
        }
        get version() {
          return this.#record.version;
        }
        #fields;
        get fields() {
          return this.#fields;
        }
        get loaded() {
          return this.#record.loaded;
        }
        get fetched() {
          return this.#record.fetched;
        }
        get fetching() {
          return this.#record.fetching;
        }
        get found() {
          return this.#record.found;
        }
        load = () => this.#record.load();
        fetch = () => this.#record.fetch();
        #triggerChange = () => this.trigger('change');
        #triggerUpdated = () => this.trigger('updated');
        #triggerInvalidated = () => this.trigger('invalidated');
        #bind = () => {
          this.#record.on('change', this.#triggerChange);
          this.#record.on('updated', this.#triggerUpdated);
          this.#record.on('invalidated', this.#triggerInvalidated);
        };
        #unbind = () => {
          if (!this.#record) return;
          this.#record.off('change', this.#triggerChange);
          this.#record.off('updated', this.#triggerUpdated);
          this.#record.off('invalidated', this.#triggerInvalidated);
        };
        #update = record => {
          this.#unbind();
          this.#record = record;
          this.#bind();
          this.trigger('change');
        };
        constructor(manager, key, instanceId, identifier, session) {
          super(manager, key, instanceId, session);
          this.#identifier = identifier;
          this.#session = session;
          const {
            recordsDataFactory
          } = manager;
          recordsDataFactory.on(`identifier.${key}.record.changed`, this.#update);
          const record = recordsDataFactory.get(identifier, session);
          this.#update(record);
          this.#fields = new _fields.WrappedRecordFields(this);
        }
        destroy() {
          if (this.#destroyed) {
            throw new Error('FactorizedRecord already destroyed');
          }
          this.#destroyed = true;
          const {
            recordsDataFactory
          } = this.manager;
          recordsDataFactory.off('change', this.#update);
          super.destroy();
          this.#record.manager.release(this.#identifier, this.#session);
        }
      }
      exports.WrappedRecord = WrappedRecord;
    }
  });

  /**********************************
  INTERNAL MODULE: ./tables/data/uuid
  **********************************/

  ims.set('./tables/data/uuid', {
    hash: 3597707760,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createUUID = createUUID;
      function createUUID() {
        let dt = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
      }
    }
  });

  /**************************************
  INTERNAL MODULE: ./tables/indices/index
  **************************************/

  ims.set('./tables/indices/index', {
    hash: 118857724,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Index = void 0;
      /**
       * Index of the table
       */
      class Index {
        #name;
        get name() {
          return this.#name;
        }
        #specs;
        get primary() {
          return this.#specs.primary;
        }
        get unique() {
          return this.#specs.unique;
        }
        get fields() {
          return this.#specs.fields;
        }
        get batches() {
          return this.#specs.batches;
        }
        /**
         * Index Constructor
         *
         * @param name {string} The name of the index
         * @param specs {IndexSpecs} The index specification
         */
        constructor(name, specs) {
          if (!(specs.fields instanceof Array) || !specs.fields.length) throw new Error(`Fields specification of index "${name}" is invalid`);
          if (specs.fields.length !== 1 && specs.primary) throw new Error(`Primary key must have only one field on index "${name}"`);
          if (specs.batches && typeof specs.batches !== 'object') throw new Error(`Batches specification is invalid on index "${name}"`);
          specs.batches = specs.batches ? specs.batches : {};
          if (!specs.batches && specs.primary) {
            specs.batches = {};
            specs.batches[specs.fields[0]] = ['data'];
          }
          this.#name = name;
          this.#specs = specs;
        }
        /**
         * Check if the index is suitable to be queried by the specified parameters
         *
         * @param {Record<string, string | number>} fields The fields to be used by the request
         * @param {string} action The action to be executed (tu, data, list, count)
         * @returns {boolean}
         */
        suitable(action, fields) {
          if (!Object.keys(fields).length) throw new Error('Parameter fields does not set any properties');
          // "data" action only can use the primary key or a unique index
          if (action === 'data' && !this.primary && !this.unique) return false;
          // "list" and "count" actions cannot use the primary key index
          if (['list', 'count'].includes(action) && this.primary) return false;
          let count = 0;
          for (const field of this.fields) {
            if (!fields.hasOwnProperty(field)) {
              // All the fields must be set on the "data" action,
              // as all the fields are require to uniquely identify the record being queried
              if (['tu', 'data'].includes(action)) return false;
              // An index can be used on "list" and "count" actions
              // when not all the fields are specified, only if:
              // 1. There is at least one field that applies to the filter
              // 2. There are no other filters specified in the parameters that are used by the index
              return count === Object.keys(fields).length;
            }
            count++;
          }
          // Do not use the index if more fields than the required were specified
          return count === Object.keys(fields).length;
        }
      }
      exports.Index = Index;
    }
  });

  /****************************************
  INTERNAL MODULE: ./tables/indices/indices
  ****************************************/

  ims.set('./tables/indices/indices', {
    hash: 4208019504,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Indices = void 0;
      var _index = require("./index");
      /**
       * The indices collection
       */
      class Indices extends Map {
        // The primary index, .. a table can only have one primary index
        #primary;
        get primary() {
          return this.#primary;
        }
        /**
         * Indices collection Constructor
         * @param table {object} The table that contains the indices
         * @param specs {object} The indices specification
         */
        constructor(table, specs) {
          super();
          if (!specs) {
            throw new Error(`Table "${table.name}" does not define its indices. ` + `At least its primary key must be defined`);
          }
          for (const [indexName, indexSpecs] of Object.entries(specs)) {
            this.set(indexName, new _index.Index(indexName, indexSpecs));
          }
          this.#primary = [...this.values()].find(index => index.primary);
          if (!this.#primary) throw new Error(`Table "${table.name}" does not define a primary key`);
        }
        /**
         * Select an index to be used to query by the specified fields
         *
         * @param {string} action The action (data, list, count)
         * @param {Record<string, any>} fields The fields of the request
         * @returns {Index | undefined}
         */
        select(action, fields) {
          if (typeof fields !== 'object') throw new Error('Invalid parameter');
          for (let index of this.values()) {
            // Filter the fields to only leave the required by the index, otherwise it will not work
            const filtered = Object.fromEntries(Object.entries(fields).filter(([name]) => index.fields.includes(name)));
            if (Object.entries(filtered).length !== index.fields.length) continue;
            // Find a suitable index
            if (index.suitable(action, filtered)) return index;
          }
        }
      }
      exports.Indices = Indices;
    }
  });

  /*********************************************************
  INTERNAL MODULE: ./tables/local-database/counters/counters
  *********************************************************/

  ims.set('./tables/local-database/counters/counters', {
    hash: 3631042987,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalDBCounters = void 0;
      var _memory = require("./memory");
      var _core = require("@beyond-js/kernel/core");
      var _compareObjects = require("../../data/factory/compare-objects");
      class LocalDBCounters {
        #db;
        #memory = new _memory.MemoryLocalDBCounters();
        get memory() {
          return this.#memory;
        }
        constructor(db) {
          this.#db = db;
        }
        #generateKey = (filter, attributes) => {
          filter = filter ? filter : [];
          // Order the filter by field to assure that the generated key be unique
          filter = filter.sort((c1, c2) => c1.field > c2.field ? -1 : 1);
          return _compareObjects.CompareObjects.generate(filter, attributes);
        };
        #save = (key, value) => {
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['counters'], 'readwrite');
          const store = transaction.objectStore('counters');
          let rq;
          try {
            rq = store.put({
              key: key,
              value: value,
              savedTime: Date.now()
            });
          } catch (exc) {
            promise.reject(exc);
            return promise;
          }
          rq.onerror = event => {
            promise.reject(event.target.result);
          };
          rq.onsuccess = () => {
            promise.resolve(true);
          };
          return promise;
        };
        async save(filter, attributes, data) {
          // Save in memory cache first, the data must be available immediately as other
          // nodes in the tree that request the data could require it
          const key = this.#generateKey(filter, attributes);
          this.#memory.set(key, data);
          await this.#db.prepare();
          return await this.#save(key, data);
        }
        #load = key => {
          if (this.#memory.has(key)) return Promise.resolve(this.#memory.get(key));
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['counters'], 'readonly');
          const store = transaction.objectStore('counters');
          let rq;
          try {
            rq = store.get(key);
          } catch (exc) {
            promise.reject(exc);
            return promise;
          }
          rq.onerror = event => promise.reject(event.target.result);
          rq.onsuccess = event => {
            const output = event.target.result;
            promise.resolve(output ? output.value : undefined);
          };
          return promise;
        };
        async load(filter, attributes) {
          await this.#db.prepare();
          const key = this.#generateKey(filter, attributes);
          return await this.#load(key);
        }
      }
      exports.LocalDBCounters = LocalDBCounters;
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./tables/local-database/counters/memory
  *******************************************************/

  ims.set('./tables/local-database/counters/memory', {
    hash: 447541486,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MemoryLocalDBCounters = void 0;
      class MemoryLocalDBCounters extends Map {}
      exports.MemoryLocalDBCounters = MemoryLocalDBCounters;
    }
  });

  /***************************************************
  INTERNAL MODULE: ./tables/local-database/lists/lists
  ***************************************************/

  ims.set('./tables/local-database/lists/lists', {
    hash: 169680133,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalDBLists = void 0;
      var _memory = require("./memory");
      var _core = require("@beyond-js/kernel/core");
      var _compareObjects = require("../../data/factory/compare-objects");
      class LocalDBLists {
        #db;
        #memory = new _memory.MemoryLocalDBLists();
        get memory() {
          return this.#memory;
        }
        constructor(db) {
          this.#db = db;
        }
        #generateKey = (filter, attributes) => {
          filter = filter ? filter : [];
          // Order the filter by field to assure that the generated key be unique
          filter = filter.sort((c1, c2) => c1.field > c2.field ? -1 : 1);
          return _compareObjects.CompareObjects.generate(filter, attributes);
        };
        #save = value => {
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['lists'], 'readwrite');
          const store = transaction.objectStore('lists');
          let rq;
          try {
            rq = store.put(value);
          } catch (exc) {
            promise.reject(exc);
            return promise;
          }
          rq.onerror = event => {
            promise.reject(event.target.result);
          };
          rq.onsuccess = () => {
            promise.resolve(true);
          };
          return promise;
        };
        async save(filter, attributes, data) {
          const key = this.#generateKey(filter, attributes);
          const value = {
            key: key,
            data: data,
            savedTime: Date.now()
          };
          // Save in memory cache first, the data must be available immediately as other
          // nodes in the tree that request the data could require it
          this.#memory.set(key, value);
          if (!this.#db.table.cache.enabled) return;
          await this.#db.prepare();
          return await this.#save(value);
        }
        #load = key => {
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['lists'], 'readonly');
          const store = transaction.objectStore('lists');
          let rq;
          try {
            rq = store.get(key);
          } catch (exc) {
            promise.reject(exc);
            return promise;
          }
          rq.onerror = event => promise.reject(event.target.result);
          rq.onsuccess = event => {
            const value = event.target.result;
            value && this.#memory.set(key, value);
            promise.resolve(value);
          };
          return promise;
        };
        async load(filter, attributes) {
          const key = this.#generateKey(filter, attributes);
          if (this.#memory.has(key)) return this.#memory.get(key);
          if (!this.#db.table.cache.enabled) return;
          await this.#db.prepare();
          return await this.#load(key);
        }
      }
      exports.LocalDBLists = LocalDBLists;
    }
  });

  /****************************************************
  INTERNAL MODULE: ./tables/local-database/lists/memory
  ****************************************************/

  ims.set('./tables/local-database/lists/memory', {
    hash: 1311343063,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MemoryLocalDBLists = void 0;
      class MemoryLocalDBLists extends Map {}
      exports.MemoryLocalDBLists = MemoryLocalDBLists;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/local-database/local-database
  ******************************************************/

  ims.set('./tables/local-database/local-database', {
    hash: 2557471388,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalDB = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _records = require("./records/records");
      var _lists = require("./lists/lists");
      var _unpublished = require("./records/unpublished");
      var _counters = require("./counters/counters");
      class LocalDB {
        #table;
        get table() {
          return this.#table;
        }
        #db;
        get db() {
          return this.#db;
        }
        #records = new _records.LocalDBRecords(this);
        get records() {
          return this.#records;
        }
        #unpublished = new _unpublished.LocalDBUnpublished(this);
        get unpublished() {
          return this.#unpublished;
        }
        #lists = new _lists.LocalDBLists(this);
        get lists() {
          return this.#lists;
        }
        #counters = new _counters.LocalDBCounters(this);
        get counters() {
          return this.#counters;
        }
        #error = false;
        get error() {
          return this.#error;
        }
        #prepared;
        prepare() {
          if (!this.#table.cache.enabled) return Promise.resolve();
          if (this.#prepared) return this.#prepared;
          this.#prepared = new _core.PendingPromise();
          const table = this.#table;
          const name = `plm-table:${table.name}`;
          const version = table.version;
          const request = indexedDB.open(name, version);
          request.onerror = error => {
            this.#error = true;
            this.#prepared.reject(error.target.result);
          };
          request.onupgradeneeded = event => {
            const db = event.target.result;
            const records = db.createObjectStore('records', {
              keyPath: [`data.${table.indices.primary.fields[0]}`, 'accessToken']
            });
            // Create the indices of the records object store
            for (const index of table.indices.values()) {
              if (!index.unique) continue;
              const keyPath = index.fields.map(field => `data.${field}`);
              keyPath.push('accessToken');
              records.createIndex(index.name, keyPath, {
                unique: true
              });
            }
            db.createObjectStore('unpublished', {
              keyPath: 'localId'
            });
            db.createObjectStore('lists', {
              keyPath: 'key'
            });
            db.createObjectStore('counters', {
              keyPath: 'key'
            });
            this.#db = db;
          };
          request.onsuccess = event => {
            this.#db = this.#db ? this.#db : event.target.result;
            this.#prepared.resolve();
          };
          return this.#prepared;
        }
        constructor(table) {
          this.#table = table;
        }
      }
      exports.LocalDB = LocalDB;
    }
  });

  /******************************************************
  INTERNAL MODULE: ./tables/local-database/records/memory
  ******************************************************/

  ims.set('./tables/local-database/records/memory', {
    hash: 628666919,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MemoryLocalDBRecords = void 0;
      var _compareObjects = require("../../data/factory/compare-objects");
      class MemoryLocalDBRecords extends Map {
        generateKey = (pk, accessToken) => {
          return _compareObjects.CompareObjects.generate(pk, accessToken);
        };
        exists(pk, accessToken) {
          const key = this.generateKey(pk, accessToken);
          return super.has(key);
        }
        load(record, accessToken) {
          const pk = record.pk;
          if (!pk.assigned) return;
          const key = this.generateKey(pk.value, accessToken);
          if (!this.has(key)) return;
          return this.get(key);
        }
        save(pk, accessToken, value) {
          const key = this.generateKey(pk, accessToken);
          super.set(key, value);
        }
        remove(pk, accessToken) {
          const key = this.generateKey(pk, accessToken);
          super.delete(key);
        }
      }
      exports.MemoryLocalDBRecords = MemoryLocalDBRecords;
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./tables/local-database/records/records
  *******************************************************/

  ims.set('./tables/local-database/records/records', {
    hash: 3509022620,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalDBRecords = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _memory = require("./memory");
      class LocalDBRecords {
        #db;
        #memory = new _memory.MemoryLocalDBRecords();
        get memory() {
          return this.#memory;
        }
        constructor(db) {
          this.#db = db;
        }
        #save = value => {
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['records'], 'readwrite');
          const store = transaction.objectStore('records');
          let rq;
          try {
            rq = store.put(value);
          } catch (exc) {
            promise.reject(exc);
            return promise;
          }
          rq.onerror = event => {
            promise.reject(event.target.result);
          };
          rq.onsuccess = () => {
            promise.resolve(true);
          };
          return promise;
        };
        async save(data, version, accessToken) {
          const pk = this.#db.table.indices.primary.fields[0];
          if (!data.hasOwnProperty(pk)) {
            throw new Error(`Cannot save record to the local database as its pk "${pk}" is not assigned`);
          }
          const value = {
            data: data,
            version: version,
            accessToken: accessToken ? accessToken : '',
            savedTime: Date.now()
          };
          // Save in memory cache first, the data must be available immediately as other
          // nodes in the tree that request the data could require it
          this.#memory.save(data[pk], accessToken, value);
          if (!this.#db.table.cache.enabled) return;
          await this.#db.prepare();
          return await this.#save(value);
        }
        #remove = () => {
          //TODO remove on indexedDB
          return true;
        };
        async remove(data, accessToken) {
          const pk = this.#db.table.indices.primary.fields[0];
          if (!data.hasOwnProperty(pk)) {
            throw new Error(`Cannot remove record to the local database as its pk "${pk}"`);
          }
          // Remove in memory cache first, the data must be available immediately as other
          // nodes in the tree that request the data could require it
          this.#memory.remove(data[pk], accessToken);
          if (!this.#db.table.cache.enabled) return;
          await this.#db.prepare();
          return await this.#remove();
        }
        #load = (index, fields, accessToken) => {
          const pkField = this.#db.table.indices.primary.fields[0];
          const pk = fields.hasOwnProperty(pkField) ? fields[pkField] : undefined;
          if (index.primary && !pk) {
            throw new Error(`Primary key field "${pkField}" not specified`);
          }
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['records'], 'readonly');
          const store = transaction.objectStore('records');
          accessToken = accessToken ? accessToken : '';
          let rq;
          if (index.primary) {
            rq = store.get([pk, accessToken]);
          } else {
            const indexStore = store.index(index.name);
            if (!indexStore) {
              throw new Error(`Index ${index.name} doesn't exist`);
            }
            const values = index.fields.map(field => {
              if (!fields.hasOwnProperty(field)) {
                throw new Error(`Field "${field}" is required to query by index "${index.name}"`);
              }
              return fields[field];
            });
            rq = indexStore.get(values);
          }
          rq.onerror = event => promise.reject(event.target.result);
          rq.onsuccess = event => promise.resolve(event.target.result);
          return promise;
        };
        async load(indexName, fields, accessToken) {
          const {
            table
          } = this.#db;
          const {
            indices
          } = table;
          if (!indices.has(indexName)) {
            throw new Error(`Index "${indexName}" not found on table "${table.name}"`);
          }
          const index = indices.get(indexName);
          // Check if record is in memory cache
          if (index.primary) {
            const pkField = this.#db.table.indices.primary.fields[0];
            const pk = fields.hasOwnProperty(pkField) ? fields[pkField] : undefined;
            const key = this.#memory.generateKey(pk, accessToken);
            if (pk && this.#memory.has(key)) return Promise.resolve(this.#memory.get(key));
          }
          if (!this.#db.table.cache.enabled) return;
          await this.#db.prepare();
          return await this.#load(index, fields, accessToken);
        }
      }
      exports.LocalDBRecords = LocalDBRecords;
    }
  });

  /***********************************************************
  INTERNAL MODULE: ./tables/local-database/records/unpublished
  ***********************************************************/

  ims.set('./tables/local-database/records/unpublished', {
    hash: 4214114578,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LocalDBUnpublished = void 0;
      var _core = require("@beyond-js/kernel/core");
      class LocalDBUnpublished {
        #db;
        constructor(db) {
          this.#db = db;
        }
        #save = (localId, data) => {
          if (!localId || !data) throw new Error('Invalid parameters');
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['unpublished'], 'readwrite');
          const store = transaction.objectStore('unpublished');
          const rq = store.put(data);
          rq.onerror = event => promise.reject(event.target.result);
          rq.onsuccess = () => promise.resolve();
          return promise;
        };
        async save(localId, data) {
          await this.#db.prepare();
          return await this.#save(localId, data);
        }
        #load = localId => {
          const promise = new _core.PendingPromise();
          const transaction = this.#db.db.transaction(['unpublished'], 'readonly');
          const store = transaction.objectStore('unpublished');
          let rq = store.get(localId);
          rq.onerror = event => {
            promise.reject(event.target.result);
          };
          rq.onsuccess = event => {
            const output = event.target.result;
            output && delete output.key;
            promise.resolve(output);
          };
          return promise;
        };
        async load(localId) {
          await this.#db.prepare();
          return await this.#load(localId);
        }
      }
      exports.LocalDBUnpublished = LocalDBUnpublished;
    }
  });

  /**********************************************
  INTERNAL MODULE: ./tables/properties/properties
  **********************************************/

  ims.set('./tables/properties/properties', {
    hash: 3016071899,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Properties = void 0;
      var _item = require("./types/item");
      var _items = require("./types/items");
      var _collection = require("./types/collection");
      var _itemSelector = require("./types/item-selector");
      /**
       * The properties of the table / item
       */
      class Properties extends Map {
        #table;
        get table() {
          return this.#table;
        }
        /**
         * Properties constructor
         * @param table {Table} The table
         * @param specs {object} The properties specification
         */
        constructor(table, specs) {
          super();
          this.#table = table;
          specs = specs ? specs : {};
          if (typeof specs !== 'object') throw new Error(`Invalid properties specification`);
          Object.keys(specs).forEach(name => this.register(name, specs[name]));
        }
        register(name, specs) {
          let property;
          if (specs.Item) {
            property = new _item.ItemProperty(this.#table, name, specs);
          } else if (specs.selector) {
            property = new _itemSelector.ItemSelectorProperty(this.#table, name, specs);
          } else if (specs.Items) {
            property = new _items.ItemsProperty(this.#table, name, specs);
          } else if (specs.Collection) {
            property = new _collection.CollectionProperty(this.#table, name, specs);
          } else {
            console.error('Property specs:', specs);
            throw new Error(`Property "${name}" not recognized`);
          }
          super.set(name, property);
          return this;
        }
        validate() {
          this.forEach(property => property.validate());
          return true;
        }
      }
      exports.Properties = Properties;
    }
  });

  /********************************************
  INTERNAL MODULE: ./tables/properties/property
  ********************************************/

  ims.set('./tables/properties/property', {
    hash: 792239610,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Property = void 0;
      /**
       * A property of the table / item
       */
      class Property {
        #parentTable;
        get parentTable() {
          return this.#parentTable;
        }
        #specs;
        get specs() {
          return this.#specs;
        }
        #name;
        get name() {
          return this.#name;
        }
        #readonly;
        get readonly() {
          return this.#readonly;
        }
        #immutable;
        get immutable() {
          return this.#immutable;
        }
        /**
         * Property constructor
         *
         * @param {Table} parentTable The table where the property resides
         * @param {string} name The property name
         * @param {PropertySpecs} specs The property specification
         */
        constructor(parentTable, name, specs) {
          if (!parentTable || !name || !specs) throw new Error('Invalid parameters');
          this.#parentTable = parentTable;
          this.#name = name;
          this.#readonly = typeof specs.readonly !== 'boolean' ? false : specs.readonly;
          this.#immutable = !!specs.immutable;
          this.#specs = specs;
        }
      }
      exports.Property = Property;
    }
  });

  /****************************************************
  INTERNAL MODULE: ./tables/properties/types/collection
  ****************************************************/

  ims.set('./tables/properties/types/collection', {
    hash: 1481966213,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionProperty = void 0;
      var _property = require("../property");
      class CollectionProperty extends _property.Property {
        get type() {
          return 'collection';
        }
        #table;
        get table() {
          return this.#table;
        }
        #Collection;
        get Collection() {
          return this.#Collection;
        }
        #filterSpec;
        get filterSpec() {
          return this.#filterSpec;
        }
        constructor(parentTable, name, specs) {
          super(parentTable, name, specs);
          this.#table = specs.table;
          this.#Collection = specs.Collection;
          this.#filterSpec = specs.filter;
        }
        validate() {
          // TODO: Add property validations
          return true;
        }
      }
      exports.CollectionProperty = CollectionProperty;
    }
  });

  /*******************************************************
  INTERNAL MODULE: ./tables/properties/types/item-selector
  *******************************************************/

  ims.set('./tables/properties/types/item-selector', {
    hash: 1649674982,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemSelectorProperty = void 0;
      var _property = require("../property");
      class ItemSelectorProperty extends _property.Property {
        get type() {
          return 'item-selector';
        }
        #selector;
        get selector() {
          return this.#selector;
        }
        #tables;
        get tables() {
          return this.#tables;
        }
        constructor(parentTable, name, specs) {
          super(parentTable, name, specs);
          this.#tables = specs.tables;
          this.#selector = specs.selector;
        }
        validate() {
          // TODO: Add property validations
          return true;
        }
      }
      exports.ItemSelectorProperty = ItemSelectorProperty;
    }
  });

  /**********************************************
  INTERNAL MODULE: ./tables/properties/types/item
  **********************************************/

  ims.set('./tables/properties/types/item', {
    hash: 2288763140,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemProperty = void 0;
      var _property = require("../property");
      class ItemProperty extends _property.Property {
        get type() {
          return 'item';
        }
        #table;
        get table() {
          return this.#table;
        }
        #Item;
        get Item() {
          return this.#Item;
        }
        #identifierSpec;
        get identifierSpec() {
          return this.#identifierSpec;
        }
        constructor(parentTable, name, specs) {
          super(parentTable, name, specs);
          this.#table = specs.table;
          this.#Item = specs.Item;
          this.#identifierSpec = specs.identifier;
        }
        validate() {
          // TODO: Add property validations
          return true;
        }
      }
      exports.ItemProperty = ItemProperty;
    }
  });

  /***********************************************
  INTERNAL MODULE: ./tables/properties/types/items
  ***********************************************/

  ims.set('./tables/properties/types/items', {
    hash: 937206479,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemsProperty = void 0;
      var _property = require("../property");
      class ItemsProperty extends _property.Property {
        get type() {
          return 'items';
        }
        #table;
        get table() {
          return this.#table;
        }
        #Items;
        get Items() {
          return this.#Items;
        }
        #identifier;
        get identifier() {
          return this.#identifier;
        }
        constructor(parentTable, name, specs) {
          super(parentTable, name, specs);
          this.#table = specs.table;
          this.#Items = specs.Items;
          this.#identifier = specs.identifier;
        }
        validate() {
          const {
            source,
            field
          } = this.#identifier;
          if (!this.parentTable.fields.includes(source)) {
            throw new Error(`Property "${this.name}" of table "${this.parentTable.name}" has an invalid source.`);
          }
          const tables = require('../../tables');
          const relatedTable = tables.get(this.#table);
          if (!relatedTable.fields.includes(field)) {
            throw new Error(`Property "${this.name}" of table "${this.parentTable.name}" has an invalid "field" value.`);
          }
          return true;
        }
      }
      exports.ItemsProperty = ItemsProperty;
    }
  });

  /********************************************
  INTERNAL MODULE: ./tables/queries/batch/batch
  ********************************************/

  ims.set('./tables/queries/batch/batch', {
    hash: 3378842658,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Batch = void 0;
      var _request = require("./request");
      class Batch {
        #specs;
        #queue = [];
        #requests = new Map();
        get queueLength() {
          return this.#queue.length;
        }
        /**
         * Batch constructor
         * @param {BatchSpecs} specs
         */
        constructor(specs) {
          specs.max = specs.max ? specs.max : 30;
          this.#specs = specs;
        }
        #timer;
        /**
         * Push a new request
         *
         * @param {REQUEST} value
         * @returns {Promise<RESPONSE>}
         */
        exec(value) {
          if (!value) throw new Error('Invalid parameters, value must be set');
          const rq = new _request.BatchRequest(value);
          this.#queue.push(rq);
          this.#requests.set(rq.id, rq);
          clearTimeout(this.#timer);
          setTimeout(() => this.#execute(), 0);
          return rq.promise;
        }
        /**
         * Processes the pending requests
         */
        #execute = () => {
          // Nothing more to be processed
          if (!this.#queue.length) return;
          const requests = this.#queue.splice(0, this.#specs.max);
          const params = requests.map(rq => [rq.id, rq.value]);
          const {
            module,
            action
          } = this.#specs;
          /**
           * TODO 1:
           * Definir que la respuesta pueda ser una matriz o un mapa
           * para que en el servicio sea mas simple manejar el armado de la respuesta
           * pero que pueda recibir las 2 estructuras
           *
           * TODO 2: finally esta incluido a partir de ES2018 validar lo que implica ese cambio
           */
          module.execute(action, params).then(response => {
            const responses = new Map(response);
            for (const rq of requests) {
              this.#requests.delete(rq.id);
              rq.promise.resolve(responses.get(rq.id));
            }
          }).catch(error => {
            for (const rq of requests) {
              this.#requests.delete(rq.id);
              rq.promise.reject(error);
            }
          }).finally(() => {
            this.#execute();
          });
        };
      }
      exports.Batch = Batch;
    }
  });

  /**********************************************
  INTERNAL MODULE: ./tables/queries/batch/request
  **********************************************/

  ims.set('./tables/queries/batch/request', {
    hash: 3115989811,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BatchRequest = void 0;
      var _core = require("@beyond-js/kernel/core");
      let id = 0;
      class BatchRequest {
        #id = id++;
        get id() {
          return `${this.#id}`;
        }
        #value;
        get value() {
          return this.#value;
        }
        #promise = new _core.PendingPromise();
        get promise() {
          return this.#promise;
        }
        constructor(value) {
          this.#value = value;
        }
      }
      exports.BatchRequest = BatchRequest;
    }
  });

  /****************************************
  INTERNAL MODULE: ./tables/queries/counter
  ****************************************/

  ims.set('./tables/queries/counter', {
    hash: 2188437533,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CounterQuery = void 0;
      var _batch = require("./batch/batch");
      class CounterQuery {
        #table;
        #batch;
        constructor(table) {
          this.#table = table;
          this.#batch = new _batch.Batch({
            module: table.module,
            action: table.batch.actions.count,
            max: table.batch.max
          });
        }
        async exec(filter, attributes) {
          let fields = {};
          filter = filter ? filter : [];
          let count = 0;
          filter.map(condition => {
            count++;
            fields[condition.field] = condition.value;
          });
          const index = count ? this.#table.indices.select('count', fields) : undefined;
          if (count && !index) {
            const message = `No index found in table "${this.#table.name}" ` + `that can be used to solve a "count" this request`;
            console.error(message, filter, fields);
            throw new Error(message);
          }
          const request = {
            action: 'counter',
            attributes: attributes
          };
          count && Object.assign(request, {
            index: index.name,
            filter: filter
          });
          const response = await this.#batch.exec(request);
          if (typeof response !== 'number') {
            console.error(`Invalid response received on query "counter" to table "${this.#table.name}"`, request, response);
            return;
          }
          this.#table.localDB.counters.save(filter, attributes, response).catch(error => console.error(`Error saving counter of table "${this.#table.name}" to local storage`, error, request, response));
          return response;
        }
      }
      exports.CounterQuery = CounterQuery;
    }
  });

  /*************************************
  INTERNAL MODULE: ./tables/queries/data
  *************************************/

  ims.set('./tables/queries/data', {
    hash: 29645190,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DataQuery = void 0;
      var _batch = require("./batch/batch");
      class DataQuery {
        #table;
        #batch;
        constructor(table) {
          this.#table = table;
          this.#batch = new _batch.Batch({
            module: table.module,
            action: table.batch.actions.data,
            max: table.batch.max
          });
        }
        async exec(fields, attributes) {
          attributes = attributes ? attributes : {};
          const index = this.#table.indices.select('data', fields);
          if (!index) {
            const message = `No index found in table "${this.#table.name}" ` + `that can be used to solve a "data" request.\n\n`;
            console.error(message, fields);
            throw new Error(message);
          }
          let cached = await this.#table.localDB.records.load(index.name, fields, attributes.accessToken);
          const version = cached ? cached.version : undefined;
          const request = {
            action: 'data',
            index: index.name,
            version: version,
            fields: fields,
            attributes: attributes
          };
          const response = await this.#batch.exec(request);
          //Item not found
          if (response === undefined || response === null) {
            if (cached) {
              //Delete to cache
              this.#table.localDB.records.remove(cached.data, attributes.accessToken).catch(error => console.error(`Error removing record of table "${this.#table.name}" to local storage.\n\n`, error, '\n', cached));
            }
            return;
          }
          if (typeof response !== 'object') {
            console.warn(`Response received was not an object on query "data" to table "${this.#table.name}".\n\n`, request, '\n', response);
            return;
          }
          response.version = response.version ? response.version : response.tu;
          if (typeof response.data !== 'object' || typeof response.version !== 'number') {
            console.warn(`Invalid response received on query "data" to table "${this.#table.name}".\n\n`, request, '\n', response);
            return;
          }
          // Verify that the version of the received record is newer
          if (version && version >= response.version) {
            console.warn('The record version of the received fetch is not improved.\n' + `Cached version was "${version}" and the record received version is "${response.version}"`);
          }
          // Save to cache
          this.#table.localDB.records.save(response.data, response.version, attributes.accessToken).catch(error => console.error(`Error saving record of table "${this.#table.name}" to local storage.\n\n`, error, '\n', request, '\n', response.data));
          return response;
        }
      }
      exports.DataQuery = DataQuery;
    }
  });

  /*************************************
  INTERNAL MODULE: ./tables/queries/list
  *************************************/

  ims.set('./tables/queries/list', {
    hash: 1194419818,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ListQuery = void 0;
      var _batch = require("./batch/batch");
      class ListQuery {
        #table;
        #batch;
        constructor(table) {
          this.#table = table;
          this.#batch = new _batch.Batch({
            module: table.module,
            action: table.batch.actions.list,
            max: table.batch.max
          });
        }
        /**
         * Returns the cached version of the list as an object where the key is the primary key of the record,
         * and the value is its version
         *
         * @param {FilterSpecs} filter
         * @param {ListAttributes} attributes
         * @returns {Record<string, number>}
         */
        #cached = async (filter, attributes) => {
          let output = {};
          let cached = await this.#table.localDB.lists.load(filter, attributes);
          if (cached && !(cached.data instanceof Array)) {
            console.warn('Cache of list is invalid.', '\n', cached);
            cached = undefined;
          }
          if (!cached) return;
          const records = cached.data;
          for (const record of records) {
            const index = this.#table.indices.primary;
            const pk = index.fields[0];
            const fields = {};
            fields[pk] = record;
            let cached = await this.#table.localDB.records.load(index.name, fields, attributes.accessToken);
            if (cached) {
              output[record] = cached.version;
            }
          }
          return output;
        };
        /**
         * Creates a ListQueryRequest
         *
         * @param {FilterSpecs} filter
         * @param {ListAttributes} attributes
         * @returns {ListQueryRequest}
         */
        #request = async (filter, attributes) => {
          const cached = await this.#cached(filter, attributes);
          const fields = {};
          filter = filter ? filter : [];
          let count = 0;
          filter.map(condition => {
            count++;
            fields[condition.field] = condition.value;
          });
          const index = count ? this.#table.indices.select('list', fields) : undefined;
          if (count && !index) {
            const message = `No index found in table "${this.#table.name}" ` + `that can be used to solve a "list" request.\n\n`;
            console.error(message, filter, '\n', fields);
            throw new Error(message);
          }
          const request = {
            action: 'list',
            attributes: attributes,
            cached: cached
          };
          count && Object.assign(request, {
            index: index.name,
            filter: filter
          });
          return request;
        };
        /**
         * Executes a list query
         *
         * @param {FilterSpecs} filter
         * @param {ListAttributes} attributes
         * @returns {Promise<(string | number)[]>}
         */
        async exec(filter, attributes) {
          const request = await this.#request(filter, attributes);
          const response = await this.#batch.exec(request);
          if (!(response instanceof Array)) {
            console.error(`Invalid response received on query "list" to table "${this.#table.name}".\n\n`, request, '\n', response);
            return [];
          }
          // Save to the local database the list and the records data
          const listIds = [];
          for (const record of response) {
            if (!record.uptodate) {
              const pk = this.#table.indices.primary.fields[0];
              if (!record.data.hasOwnProperty(pk)) {
                console.error(`Error on "list" query. Record of table "${this.#table.name}" ` + `does not have its primary key field "${pk}".\n\n`, request, record);
                continue;
              }
              // Verify that the version of the received record is newer
              record.version = record.version ? record.version : record.tu;
              const {
                cached
              } = request;
              const version = cached && cached.hasOwnProperty(record.data[pk]) ? cached[record.data[pk]] : 0;
              if (version && version >= record.version) {
                console.warn('The record version of the received fetch is not improved.\n' + `Cached version was "${version}" and the record received version is "${record.version}"`);
              }
              listIds.push(record.data[pk]);
            } else {
              listIds.push(record.pk);
            }
            this.#table.localDB.records.save(record.data, record.version, attributes.accessToken).catch(error => console.error(`Error saving record of table "${this.#table.name}" to local storage.\n\n`, error, '\n', request, '\n', record));
          }
          this.#table.localDB.lists.save(filter, attributes, listIds).catch(error => console.error(`Error saving list of table "${this.#table.name}" to local storage.\n\n`, error, '\n', request, '\n', listIds));
          return listIds;
        }
      }
      exports.ListQuery = ListQuery;
    }
  });

  /****************************************
  INTERNAL MODULE: ./tables/queries/queries
  ****************************************/

  ims.set('./tables/queries/queries', {
    hash: 1132816002,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Queries = void 0;
      var _data = require("./data");
      var _list = require("./list");
      var _counter = require("./counter");
      class Queries {
        #data;
        #list;
        #counter;
        constructor(table) {
          this.#data = new _data.DataQuery(table);
          this.#list = new _list.ListQuery(table);
          this.#counter = new _counter.CounterQuery(table);
        }
        async data(fields, attributes) {
          return this.#data.exec(fields, attributes);
        }
        async list(filter, attributes) {
          return this.#list.exec(filter, attributes);
        }
        async counter(filter, attributes) {
          return this.#counter.exec(filter, attributes);
        }
      }
      exports.Queries = Queries;
    }
  });

  /******************************
  INTERNAL MODULE: ./tables/table
  ******************************/

  ims.set('./tables/table', {
    hash: 4074319547,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Table = void 0;
      var _properties = require("./properties/properties");
      var _indices = require("./indices/indices");
      var _localDatabase = require("./local-database/local-database");
      var _queries = require("./queries/queries");
      var _manager = require("./data/lists/manager/manager");
      var _manager2 = require("./data/records/manager");
      var _manager3 = require("./data/counter/manager");
      /**
       * Table data access
       *
       * @param name {string} The table name
       * @param specs {object} The table specification
       * @constructor
       */
      class Table {
        #name;
        #specs;
        get name() {
          return this.#name;
        }
        get version() {
          return this.#specs.version;
        }
        get cache() {
          return this.#specs.cache;
        }
        get module() {
          return this.#specs.module;
        }
        get batch() {
          return this.#specs.batch;
        }
        get fields() {
          return this.#specs.fields.slice();
        }
        #properties;
        get properties() {
          return this.#properties;
        }
        #indices;
        get indices() {
          return this.#indices;
        }
        #localDB = new _localDatabase.LocalDB(this);
        get localDB() {
          return this.#localDB;
        }
        #records = new _manager2.RecordsManager(this);
        get records() {
          return this.#records;
        }
        #lists = new _manager.ListsManager(this);
        get lists() {
          return this.#lists;
        }
        #counters = new _manager3.CountersManager(this);
        get counters() {
          return this.#counters;
        }
        #queries;
        get queries() {
          return this.#queries;
        }
        constructor(name, specs) {
          if (typeof specs.module !== 'object') throw new Error(`Invalid module specification on table "${name}"`);
          if (specs.version && typeof specs.version !== 'number') throw new Error('Invalid table version specification');
          if (!(specs.fields instanceof Array)) throw new Error(`Invalid fields specification on table "${name}"`);
          if (specs.properties && typeof specs.properties !== 'object') throw new Error(`Invalid properties specification on table "${name}"`);
          if (typeof specs.batch !== 'object' || typeof specs.batch.actions !== 'object') throw new Error(`Invalid batch specification on table "${name}"`);
          if (specs.indices && typeof specs.indices !== 'object') throw new Error(`Invalid indices specification on table "${name}"`);
          if (typeof name !== 'string' || !name) throw new Error('Invalid table name parameter');
          specs.version = specs.version ? specs.version : 1;
          this.#name = name;
          this.#specs = specs;
          if (!['boolean', 'object', 'undefined'].includes(typeof this.#specs.cache)) {
            console.warn(`Invalid cache specification on table "${name}"`, specs);
          }
          this.#specs.cache === undefined ? this.#specs.cache = {
            enabled: false
          } : null;
          typeof this.#specs.cache === 'boolean' ? this.#specs.cache = {
            enabled: this.#specs.cache
          } : null;
          typeof this.#specs.cache === 'object' && !this.#specs.cache.hasOwnProperty('limit') ? this.#specs.cache.limit = 30 : null;
          this.#indices = new _indices.Indices(this, specs.indices);
          this.#properties = new _properties.Properties(this, specs.properties);
          this.#queries = new _queries.Queries(this);
          this.#localDB.prepare().catch(exc => console.error(exc.stack));
        }
        validate() {
          this.#properties.validate();
          return true;
        }
      }
      exports.Table = Table;
    }
  });

  /*******************************
  INTERNAL MODULE: ./tables/tables
  *******************************/

  ims.set('./tables/tables', {
    hash: 3857649849,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.tables = exports.Tables = void 0;
      var _table = require("./table");
      class Tables extends Map {
        register(name, specs) {
          if (this.has(name)) throw new Error(`Table ${name} is already registered`);
          const table = new _table.Table(name, specs);
          super.set(name, table);
          return table;
        }
        validate() {
          this.forEach(table => table.validate());
          return true;
        }
      }
      exports.Tables = Tables;
      /*bundle*/
      const tables = new Tables();
      exports.tables = tables;
    }
  });

  /*********************************
  INTERNAL MODULE: ./tree/collection
  *********************************/

  ims.set('./tree/collection', {
    hash: 2038126333,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollectionNode = void 0;
      var _node = require("./node");
      var _item = require("./item");
      class CollectionNode extends _node.Node {
        get is() {
          return 'collection';
        }
        #view;
        get view() {
          return this.#view;
        }
        #limit;
        get limit() {
          return this.#limit;
        }
        #items;
        get items() {
          return this.#items;
        }
        #order;
        get order() {
          return this.#order;
        }
        #counters = new Set();
        get counters() {
          return this.#counters;
        }
        constructor(table, specs, parent, property) {
          super(table, specs, parent, property);
          specs = specs ? specs : {};
          if (typeof specs !== 'object') throw new Error('Invalid parameters');
          if (specs.counters && !(specs.counters instanceof Array)) throw new Error('Invalid counters specification');
          this.#counters = new Set(specs.counters);
          this.#items = new _item.ItemNode(table, {
            properties: specs.properties
          }, parent);
          this.#view = specs.view;
          this.#limit = specs.limit;
          this.#order = specs.order;
        }
      }
      exports.CollectionNode = CollectionNode;
    }
  });

  /************************************
  INTERNAL MODULE: ./tree/item-selector
  ************************************/

  ims.set('./tree/item-selector', {
    hash: 321000369,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemSelectorNode = void 0;
      var _node = require("./node");
      class ItemSelectorNode extends _node.Node {
        get is() {
          return 'item-selector';
        }
        #tables = new Map();
        get tables() {
          return this.#tables;
        }
        #property;
        get property() {
          return this.#property;
        }
        constructor(table, specs, parent, property) {
          super(table, specs, parent, property);
          this.#property = property;
          if (typeof specs !== 'object') throw new Error('Invalid parameters');
          for (const [table, children] of Object.entries(specs)) {
            if (!property.tables.includes(table)) {
              throw new Error(`Table "${table}" is not registered`);
            }
            const CItemNode = require('./item').ItemNode;
            this.#tables.set(table, new CItemNode(table, children, this, property));
          }
        }
      }
      exports.ItemSelectorNode = ItemSelectorNode;
    }
  });

  /***************************
  INTERNAL MODULE: ./tree/item
  ***************************/

  ims.set('./tree/item', {
    hash: 2904687249,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemNode = void 0;
      var _node = require("./node");
      var _properties = require("./properties");
      class ItemNode extends _node.Node {
        get is() {
          return 'item';
        }
        #specs;
        get specs() {
          return this.#specs;
        }
        #properties;
        get properties() {
          return this.#properties;
        }
        constructor(table, specs, parent, property) {
          super(table, specs, parent, property);
          specs = specs ? specs : {};
          if (typeof specs !== 'object') throw new Error('Invalid parameters');
          this.#specs = specs;
          this.#properties = new _properties.Properties(this.table);
          this.#properties.register(specs.properties, this);
        }
      }
      exports.ItemNode = ItemNode;
    }
  });

  /****************************
  INTERNAL MODULE: ./tree/items
  ****************************/

  ims.set('./tree/items', {
    hash: 3754893300,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ItemsNode = void 0;
      var _node = require("./node");
      var _item = require("./item");
      class ItemsNode extends _node.Node {
        get is() {
          return 'items';
        }
        #items;
        get items() {
          return this.#items;
        }
        constructor(table, specs, parent, property) {
          super(table, specs, parent, property);
          if (typeof specs !== 'object') throw new Error('Invalid parameters');
          this.#items = new _item.ItemNode(table, {
            properties: specs.properties
          }, parent, property);
        }
      }
      exports.ItemsNode = ItemsNode;
    }
  });

  /***************************
  INTERNAL MODULE: ./tree/node
  ***************************/

  ims.set('./tree/node', {
    hash: 700805925,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Node = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _tables = require("../tables/tables");
      class Node extends _core.Events {
        #property;
        get property() {
          return this.#property;
        }
        #table;
        get table() {
          return this.#table;
        }
        #session;
        get session() {
          return this.#session;
        }
        #root;
        get root() {
          return this.#root;
        }
        #parent;
        get parent() {
          return this.#parent;
        }
        #active = true;
        get active() {
          return this.#parent ? this.#parent.active : this.#active;
        }
        set active(value) {
          if (this.#parent) {
            throw new Error('.active property can only be set to the root of the tree');
          }
          this.#active = value;
        }
        /**
         * The Node Constructor
         * @param {string} table The table name
         * @param {NodeSpecs} specs The node specification
         * @param {Node} parent The parent node in the tree
         * @param {Property} property The table property.
         * Undefined when the node is created from the item or the collection instead of being created by the tree
         */
        constructor(table, specs, parent, property) {
          super();
          if (property && typeof property !== 'object') throw new Error('Invalid "property" parameter');
          this.#property = property;
          if (!table) throw new Error('Parameter "table" is required');
          if (!_tables.tables.has(table)) throw new Error(`Table "${table}" is not registered`);
          this.#table = _tables.tables.get(table);
          specs = specs ? specs : {};
          this.#session = specs.session ? specs.session : parent ? parent.session : undefined;
          this.#parent = parent;
          this.#root = parent ? parent.root : this;
        }
        #timer;
        trigger(event, ...rest) {
          if (!this.#active) return;
          if (this.#parent) {
            event === 'change' && this.root.trigger(event, ...rest);
            return super.trigger(event, ...arguments); // async events return a promise
          } else {
            if (event !== 'change') return super.trigger(event, ...rest);
            if (this.#timer) return;
            this.#timer = window.setTimeout(() => {
              this.#timer = void 0;
              super.trigger(event, ...rest);
            }, 0);
          }
        }
      }
      exports.Node = Node;
    }
  });

  /*********************************
  INTERNAL MODULE: ./tree/properties
  *********************************/

  ims.set('./tree/properties', {
    hash: 2822505680,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Properties = void 0;
      class Properties extends Map {
        #table;
        constructor(table) {
          super();
          this.#table = table;
        }
        register(properties, parent) {
          if (!properties) return;
          for (let [name, specs] of Object.entries(properties)) {
            if (!this.#table.properties.has(name)) {
              console.warn(`Property "${name}" of table "${this.#table.name}" is not registered`);
              continue;
            }
            if (typeof specs === 'boolean' && !specs) continue;
            specs = typeof specs === 'boolean' ? {} : specs;
            const property = this.#table.properties.get(name);
            let table;
            switch (property.type) {
              case 'item-selector':
                const CItemSelectorNode = require('./item-selector').ItemSelectorNode;
                this.set(name, new CItemSelectorNode(this.#table.name, specs, parent, property));
                break;
              case 'item':
                table = property.table;
                const CItemNode = require('./item').ItemNode;
                this.set(name, new CItemNode(table, specs, parent, property));
                break;
              case 'collection':
                table = property.table;
                const CCollectionNode = require('./collection').CollectionNode;
                this.set(name, new CCollectionNode(table, specs, parent, property));
                break;
              case 'items':
                table = property.table;
                const CItemsNode = require('./items').ItemsNode;
                this.set(name, new CItemsNode(table, specs, parent, property));
                break;
              default:
                throw new Error(`Property "${name}" has an invalid type "${property.type}"`);
            }
          }
        }
      }
      exports.Properties = Properties;
    }
  });

  /****************************
  INTERNAL MODULE: ./tree/specs
  ****************************/

  ims.set('./tree/specs', {
    hash: 3754493840,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./auth/auth",
    "from": "auth",
    "name": "auth"
  }, {
    "im": "./constants",
    "from": "NotSet",
    "name": "NotSet"
  }, {
    "im": "./constants",
    "from": "DataSource",
    "name": "DataSource"
  }, {
    "im": "./elements/collection/collection",
    "from": "CollectionSpecs",
    "name": "CollectionSpecs"
  }, {
    "im": "./elements/collection/collection",
    "from": "Collection",
    "name": "Collection"
  }, {
    "im": "./elements/item/item",
    "from": "ItemSpecs",
    "name": "ItemSpecs"
  }, {
    "im": "./elements/item/item",
    "from": "Item",
    "name": "Item"
  }, {
    "im": "./elements/item/properties/collection/property",
    "from": "CollectionProperty",
    "name": "CollectionProperty"
  }, {
    "im": "./elements/item/properties/item-selector/property",
    "from": "ItemSelectorProperty",
    "name": "ItemSelectorProperty"
  }, {
    "im": "./elements/item/properties/item/property",
    "from": "ItemProperty",
    "name": "ItemProperty"
  }, {
    "im": "./elements/item/properties/items/property",
    "from": "ItemsProperty",
    "name": "ItemsProperty"
  }, {
    "im": "./tables/data/filter/filter",
    "from": "ConditionOperand",
    "name": "ConditionOperand"
  }, {
    "im": "./tables/data/realtime/realtime",
    "from": "realtime",
    "name": "realtime"
  }, {
    "im": "./tables/data/realtime/reports/list",
    "from": "ListUpdateFilterReport",
    "name": "ListUpdateFilterReport"
  }, {
    "im": "./tables/table",
    "from": "TableSpecs",
    "name": "TableSpecs"
  }, {
    "im": "./tables/tables",
    "from": "tables",
    "name": "tables"
  }];
  let auth, NotSet, DataSource, CollectionSpecs, Collection, ItemSpecs, Item, CollectionProperty, ItemSelectorProperty, ItemProperty, ItemsProperty, ConditionOperand, realtime, ListUpdateFilterReport, TableSpecs, tables;

  // Module exports
  _exports.tables = tables;
  _exports.TableSpecs = TableSpecs;
  _exports.ListUpdateFilterReport = ListUpdateFilterReport;
  _exports.realtime = realtime;
  _exports.ConditionOperand = ConditionOperand;
  _exports.ItemsProperty = ItemsProperty;
  _exports.ItemProperty = ItemProperty;
  _exports.ItemSelectorProperty = ItemSelectorProperty;
  _exports.CollectionProperty = CollectionProperty;
  _exports.Item = Item;
  _exports.ItemSpecs = ItemSpecs;
  _exports.Collection = Collection;
  _exports.CollectionSpecs = CollectionSpecs;
  _exports.DataSource = DataSource;
  _exports.NotSet = NotSet;
  _exports.auth = auth;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'auth') && (_exports.auth = auth = require ? require('./auth/auth').auth : value);
    (require || prop === 'NotSet') && (_exports.NotSet = NotSet = require ? require('./constants').NotSet : value);
    (require || prop === 'DataSource') && (_exports.DataSource = DataSource = require ? require('./constants').DataSource : value);
    (require || prop === 'CollectionSpecs') && (_exports.CollectionSpecs = CollectionSpecs = require ? require('./elements/collection/collection').CollectionSpecs : value);
    (require || prop === 'Collection') && (_exports.Collection = Collection = require ? require('./elements/collection/collection').Collection : value);
    (require || prop === 'ItemSpecs') && (_exports.ItemSpecs = ItemSpecs = require ? require('./elements/item/item').ItemSpecs : value);
    (require || prop === 'Item') && (_exports.Item = Item = require ? require('./elements/item/item').Item : value);
    (require || prop === 'CollectionProperty') && (_exports.CollectionProperty = CollectionProperty = require ? require('./elements/item/properties/collection/property').CollectionProperty : value);
    (require || prop === 'ItemSelectorProperty') && (_exports.ItemSelectorProperty = ItemSelectorProperty = require ? require('./elements/item/properties/item-selector/property').ItemSelectorProperty : value);
    (require || prop === 'ItemProperty') && (_exports.ItemProperty = ItemProperty = require ? require('./elements/item/properties/item/property').ItemProperty : value);
    (require || prop === 'ItemsProperty') && (_exports.ItemsProperty = ItemsProperty = require ? require('./elements/item/properties/items/property').ItemsProperty : value);
    (require || prop === 'ConditionOperand') && (_exports.ConditionOperand = ConditionOperand = require ? require('./tables/data/filter/filter').ConditionOperand : value);
    (require || prop === 'realtime') && (_exports.realtime = realtime = require ? require('./tables/data/realtime/realtime').realtime : value);
    (require || prop === 'ListUpdateFilterReport') && (_exports.ListUpdateFilterReport = ListUpdateFilterReport = require ? require('./tables/data/realtime/reports/list').ListUpdateFilterReport : value);
    (require || prop === 'TableSpecs') && (_exports.TableSpecs = TableSpecs = require ? require('./tables/table').TableSpecs : value);
    (require || prop === 'tables') && (_exports.tables = tables = require ? require('./tables/tables').tables : value);
  };
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9ELElBQUksQ0FBQ3RHLEdBQUcsQ0FBQ2dCLElBQUksRUFBRSxJQUFJcVcsU0FBUyxDQUFDdlUsS0FBSyxFQUFpQkUsS0FBSyxFQUFFa1UsTUFBTSxFQUFnQnJRLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRjtjQUNKLEtBQUssWUFBWTtnQkFDYi9ELEtBQUssR0FBd0IrRCxRQUFTLENBQUMvRCxLQUFLO2dCQUM1QyxNQUFNNlUsZUFBZSxHQUEyQnhDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBRWhTLGNBQWM7Z0JBQ3ZGLElBQUksQ0FBQ25ELEdBQUcsQ0FBQ2dCLElBQUksRUFBRSxJQUFJMlcsZUFBZSxDQUFDN1UsS0FBSyxFQUFpQkUsS0FBSyxFQUFFa1UsTUFBTSxFQUFFclEsUUFBUSxDQUFDLENBQUM7Z0JBQ2xGO2NBQ0osS0FBSyxPQUFPO2dCQUNSL0QsS0FBSyxHQUFtQitELFFBQVMsQ0FBQy9ELEtBQUs7Z0JBQ3ZDLE1BQU04VSxVQUFVLEdBQXNCekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFFbUMsU0FBUztnQkFDbkUsSUFBSSxDQUFDdFgsR0FBRyxDQUFDZ0IsSUFBSSxFQUFFLElBQUk0VyxVQUFVLENBQUM5VSxLQUFLLEVBQWtCRSxLQUFLLEVBQUVrVSxNQUFNLEVBQWlCclEsUUFBUSxDQUFDLENBQUM7Z0JBQzdGO2NBQ0o7Z0JBQ0ksTUFBTSxJQUFJekcsS0FBSyxDQUFDLGFBQWFZLElBQUksMEJBQTBCNkYsUUFBUSxDQUFDcU8sSUFBSSxHQUFHLENBQUM7WUFBQTs7UUFHNUY7O01BQ0gzVTs7Ozs7Ozs7Ozs7TUNyRUQ7O01BRUFHO1FBQ0FRO01BQ0EiLCJuYW1lcyI6WyJhdXRoIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsInNldCIsInNlc3Npb25OYW1lIiwiYWNjZXNzVG9rZW4iLCJoYXMiLCJFcnJvciIsInNlc3Npb24iLCJnZXQiLCJleHBvcnRzIiwiZ2V0QWNjZXNzVG9rZW4iLCJlcnJvcnMiLCJPYmplY3QiLCJmcmVlemUiLCJOT1RfTE9HR0VEX0lOIiwicyIsIlBMTVNlc3Npb24iLCJFdmVudHMiLCJuYW1lIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsInRyaWdnZXIiLCJNYXAiLCJyZWdpc3RlciIsInVucmVnaXN0ZXIiLCJkZWxldGUiLCJOb3RTZXQiLCJEYXRhU291cmNlIiwiQ29sbGVjdGlvbiIsIkVsZW1lbnQiLCJpcyIsIkl0ZW0iLCJsaXN0IiwiQ29sbGVjdGlvbkNvdW50ZXJzIiwiY291bnRlcnMiLCJDb2xsZWN0aW9uSXRlbXMiLCJpdGVtcyIsIlRyZWUiLCJ0cmVlIiwibG9hZCIsImxvYWRlZCIsInByb21pc2VzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsImxhbmRlZCIsImZpbGwiLCJ0YWJsZSIsIkRJdGVtIiwic3BlY3MiLCJwcm90b3R5cGUiLCJub2RlIiwiQ29sbGVjdGlvbk5vZGUiLCJhdHRyaWJ1dGVzIiwibGlzdHMiLCJmaWx0ZXIiLCJvcmRlciIsImRhdGEiLCJhY3RpdmF0ZSIsImRlc3Ryb3kiLCJyZWxlYXNlIiwiQ29sbGVjdGlvbkNvdW50ZXIiLCJjb2xsZWN0aW9uIiwiY29uZGl0aW9ucyIsImNvbmNhdCIsIkZpbHRlciIsInNldFRpbWVvdXQiLCJvbiIsImRlYWN0aXZhdGUiLCJvZmYiLCJmb3JFYWNoIiwiY291bnRlciIsInVuZGVmaW5lZCIsInVwZGF0ZSIsInVwZGF0ZWQiLCJvcmRlcmVkIiwicmVjb3JkcyIsInZhbHVlcyIsImlkIiwiaXRlbSIsImtleSIsInVucHVibGlzaGVkIiwibG9jYWxJZCIsInBrIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5IiwiYmluZCIsInVuYmluZCIsImFjdGl2ZSIsIlJlYWx0aW1lIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicmVzdG9yZSIsInRhYmxlcyIsIkl0ZW1GaWVsZCIsImFzc2lnbmVkIiwicmVjb3JkIiwiZmllbGRzIiwiSXRlbUZpZWxkcyIsInZlcnNpb24iLCJwcm9wZXJ0aWVzIiwiZm91bmQiLCJJdGVtTm9kZSIsImlkZW50aWZpZXIiLCJpbmRpY2VzIiwicHJpbWFyeSIsIlByb3BlcnRpZXMiLCJDb2xsZWN0aW9uUHJvcGVydHlGaWx0ZXIiLCJ2YWxpZCIsInByb3BlcnR5IiwiZmlsdGVyU3BlYyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJvcGVyYW5kIiwiQ29uZGl0aW9uT3BlcmFuZCIsIkVxdWFsIiwic291cmNlIiwicGFyZW50SXRlbUZpZWxkIiwidHJhbnNmb3JtIiwiQ29sbGVjdGlvblByb3BlcnR5IiwicGFyZW50SXRlbSIsIkNvbXBhcmVPYmplY3RzIiwiY29tcGFyZSIsInRhYmxlUHJvcGVydHkiLCJJdGVtU2VsZWN0b3JQcm9wZXJ0eSIsInNlbGVjdG9yIiwiSXRlbVByb3BlcnR5SWRlbnRpZmllciIsImlkZW50aWZpZXJTcGVjIiwiSXRlbVByb3BlcnR5IiwiSXRlbXNQcm9wZXJ0eSIsIkFycmF5IiwiaWRlbnRpZmllclZhbHVlIiwiSXRlbXMiLCJtYXJrZWQiLCJrZXlzIiwiaW5jbHVkZXMiLCJtZW1vcnkiLCJjbGVhciIsImNvbnNvbGUiLCJ3YXJuIiwidGhlbiIsImNhdGNoIiwiZXhjIiwiZXJyb3IiLCJzdGFjayIsImVsZW1lbnQiLCJDb3VudGVyRGF0YSIsIlByb2R1Y3QiLCJDb3VudGVyTG9jYWxTdG9yZSIsImxvY2FsU3RvcmUiLCJzdG9yZWQiLCJDb3VudGVyRmV0Y2giLCJtYW5hZ2VyIiwiaW5zdGFuY2VJZCIsImZpbHRlclNwZWNzIiwicXVlcmllcyIsImxvY2FsREIiLCJDb3VudGVyc01hbmFnZXIiLCJGYWN0b3J5IiwiY3JlYXRlIiwiYXJndW1lbnRzIiwiZ2VuZXJhdGUiLCJhbnkiLCJhcmdzIiwibWFwIiwiYXJndW1lbnQiLCJlbnRyaWVzIiwic29ydCIsImUwIiwiZTEiLCJKU09OIiwic3RyaW5naWZ5IiwiaTEiLCJpMiIsImhvbGQiLCJwcm9kdWN0IiwiY291bnQiLCJTZXQiLCJjb25kaXRpb24iLCJhZGQiLCJjbyIsIm9wZXJhbmRzIiwiR3JlYXRlciIsIkdyZWF0ZXJPckVxdWFsIiwiTG93ZXIiLCJMb3dlck9yRXF1YWwiLCJhcHBsaWVzIiwiTGlzdEZldGNoIiwicmVzcG9uc2UiLCJvdmVyd3JpdGUiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsIkxpc3REYXRhIiwiaW52YWxpZGF0ZSIsIkxpc3RSZWNvcmRzIiwiTGlzdExvY2FsU3RvcmUiLCJvcmRlclNwZWNzIiwiT3JkZXIiLCJMaXN0c01hbmFnZXIiLCJSZWdpc3RyaWVzIiwicmVnaXN0cmllcyIsInJlYWx0aW1lIiwiaW5mb3JtTGlzdENyZWF0ZWQiLCJpbmZvcm1MaXN0RGVzdHJveWVkIiwicmVwb3J0cyIsIlJlcG9ydHMiLCJyZWFsdGltZUZpbHRlciIsIm1hbmFnZXJGaWx0ZXIiLCJlbnRyeSIsImZpbHRlcnMiLCJSZWdpc3RyeUJ5RmlsdGVyIiwicmVnaXN0cnkiLCJzbGljZSIsImluZGV4T2YiLCJpbmRleCIsImxlbmd0aCIsInNwbGljZSIsInBlcnNpc3RlZCIsIkxpc3RSZXBvcnQiLCJ0YWJsZU5hbWUiLCJSZWNvcmRSZXBvcnQiLCJpbnNlcnQiLCJsb2ciLCJSZWNvcmRzRGF0YUZhY3RvcnkiLCJVbnB1Ymxpc2hlZFJlY29yZHMiLCJ3cmFwcGVkRmFjdG9yeSIsIlJlY29yZERhdGEiLCJpZGVudGlmaWVycyIsImdldFVucHVibGlzaGVkIiwiUmVjb3JkRmV0Y2hlciIsImRvbmUiLCJzZXR0ZXIiLCJEYXRlIiwibm93Iiwic2F2ZWRUaW1lIiwiRmllbGQiLCJNZW1vcnlGaWVsZFNvdXJjZSIsIlB1Ymxpc2hlZEZpZWxkU291cmNlIiwicHVibGlzaGVkIiwiaW5pdGlhbElkZW50aWZpZXIiLCJpbml0aWFsIiwiZGlzY2FyZCIsIkZpZWxkcyIsIkZpZWxkc1NldHRlciIsIkZpZWxkU291cmNlIiwibW9kaWZpYWJsZSIsIlJlY29yZElkZW50aWZpZXJzIiwic2l6ZSIsImluZGV4TmFtZSIsImdldEluZGV4IiwicHJpbWFyeUtleUZpZWxkVmFsdWUiLCJ1bmlxdWUiLCJyZWR1Y2UiLCJjcmVhdGVJZGVudGlmaWVyRnJvbUluZGV4Iiwib3V0cHV0IiwiZmllbGROYW1lIiwicHJldmlvdXMiLCJjaGFuZ2VkIiwiY2FsbGJhY2siLCJTeW1ib2wiLCJpdGVyYXRvciIsIlJlY29yZExvYWRlciIsInNlYXJjaGVkIiwicGtGaWVsZCIsImxvYWRlciIsInJlY29yZHNEYXRhRmFjdG9yeSIsIlJlY29yZHNNYW5hZ2VyIiwiV3JhcHBlZEZhY3RvcnkiLCJwa05hbWUiLCJXcmFwcGVkUmVjb3JkIiwiV3JhcHBlZFJlY29yZEZpZWxkIiwid3JhcHBlZFJlY29yZCIsIldyYXBwZWRSZWNvcmRGaWVsZHMiLCJkZXN0cm95ZWQiLCJjcmVhdGVVVUlEIiwiZHQiLCJnZXRUaW1lIiwicmVwbGFjZSIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwidG9TdHJpbmciLCJJbmRleCIsImJhdGNoZXMiLCJzdWl0YWJsZSIsImFjdGlvbiIsIkluZGljZXMiLCJpbmRleFNwZWNzIiwiZmluZCIsInNlbGVjdCIsImZpbHRlcmVkIiwiZnJvbUVudHJpZXMiLCJMb2NhbERCQ291bnRlcnMiLCJNZW1vcnlMb2NhbERCQ291bnRlcnMiLCJkYiIsImMxIiwiYzIiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJ0cmFuc2FjdGlvbiIsInN0b3JlIiwib2JqZWN0U3RvcmUiLCJycSIsInB1dCIsInJlamVjdCIsIm9uZXJyb3IiLCJ0YXJnZXQiLCJyZXN1bHQiLCJvbnN1Y2Nlc3MiLCJyZXNvbHZlIiwic2F2ZSIsInByZXBhcmUiLCJMb2NhbERCTGlzdHMiLCJNZW1vcnlMb2NhbERCTGlzdHMiLCJjYWNoZSIsImVuYWJsZWQiLCJMb2NhbERCIiwiTG9jYWxEQlJlY29yZHMiLCJMb2NhbERCVW5wdWJsaXNoZWQiLCJyZXF1ZXN0IiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImNyZWF0ZUluZGV4IiwiTWVtb3J5TG9jYWxEQlJlY29yZHMiLCJnZW5lcmF0ZUtleSIsImV4aXN0cyIsInJlbW92ZSIsImluZGV4U3RvcmUiLCJ2YWxpZGF0ZSIsIlByb3BlcnR5IiwicGFyZW50VGFibGUiLCJyZWFkb25seSIsImltbXV0YWJsZSIsInR5cGUiLCJyZXF1aXJlIiwicmVsYXRlZFRhYmxlIiwiQmF0Y2giLCJxdWV1ZUxlbmd0aCIsIm1heCIsImV4ZWMiLCJCYXRjaFJlcXVlc3QiLCJjbGVhclRpbWVvdXQiLCJyZXF1ZXN0cyIsInBhcmFtcyIsIm1vZHVsZSIsImV4ZWN1dGUiLCJyZXNwb25zZXMiLCJmaW5hbGx5IiwiQ291bnRlclF1ZXJ5IiwiYmF0Y2giLCJhY3Rpb25zIiwibWVzc2FnZSIsImFzc2lnbiIsIkRhdGFRdWVyeSIsImNhY2hlZCIsInR1IiwiTGlzdFF1ZXJ5IiwibGlzdElkcyIsInVwdG9kYXRlIiwiUXVlcmllcyIsIlRhYmxlIiwibGltaXQiLCJUYWJsZXMiLCJOb2RlIiwidmlldyIsInBhcmVudCIsIkl0ZW1TZWxlY3Rvck5vZGUiLCJjaGlsZHJlbiIsIkNJdGVtTm9kZSIsIkl0ZW1zTm9kZSIsInJvb3QiLCJyZXN0Iiwid2luZG93IiwiQ0l0ZW1TZWxlY3Rvck5vZGUiLCJDQ29sbGVjdGlvbk5vZGUiLCJDSXRlbXNOb2RlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJhdXRoL2F1dGgudHMiLCJhdXRoL2dldC1hY2Nlc3MtdG9rZW4udHMiLCJhdXRoL3Nlc3Npb24udHMiLCJhdXRoL3Nlc3Npb25zLnRzIiwiY29uc3RhbnRzLnRzIiwiZWxlbWVudHMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiZWxlbWVudHMvY29sbGVjdGlvbi9jb3VudGVycy9jb3VudGVyLnRzIiwiZWxlbWVudHMvY29sbGVjdGlvbi9jb3VudGVycy9jb3VudGVycy50cyIsImVsZW1lbnRzL2NvbGxlY3Rpb24vaXRlbXMvaXRlbXMudHMiLCJlbGVtZW50cy9jb2xsZWN0aW9uL3RyZWUudHMiLCJlbGVtZW50cy9lbGVtZW50LnRzIiwiZWxlbWVudHMvaXRlbS9maWVsZHMvZmllbGQudHMiLCJlbGVtZW50cy9pdGVtL2ZpZWxkcy9maWVsZHMudHMiLCJlbGVtZW50cy9pdGVtL2l0ZW0udHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvY29sbGVjdGlvbi9maWx0ZXIudHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvY29sbGVjdGlvbi9wcm9wZXJ0eS50cyIsImVsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9jb2xsZWN0aW9uL3RyZWUudHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbS1zZWxlY3Rvci9wcm9wZXJ0eS50cyIsImVsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9pdGVtLXNlbGVjdG9yL3RyZWUudHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbS9pZGVudGlmaWVyLnRzIiwiZWxlbWVudHMvaXRlbS9wcm9wZXJ0aWVzL2l0ZW0vcHJvcGVydHkudHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbS90cmVlLnRzIiwiZWxlbWVudHMvaXRlbS9wcm9wZXJ0aWVzL2l0ZW1zL3Byb3BlcnR5LnRzIiwiZWxlbWVudHMvaXRlbS9wcm9wZXJ0aWVzL2l0ZW1zL3RyZWUudHMiLCJlbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvcHJvcGVydGllcy50cyIsImVsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9wcm9wZXJ0eS50cyIsImVsZW1lbnRzL2l0ZW0vdHJlZS50cyIsImVsZW1lbnRzL3JlYWx0aW1lLnRzIiwidGFibGVzL2RhdGEvY291bnRlci9jb3VudGVyLnRzIiwidGFibGVzL2RhdGEvY291bnRlci9mZXRjaC50cyIsInRhYmxlcy9kYXRhL2NvdW50ZXIvbG9jYWwtc3RvcmUudHMiLCJ0YWJsZXMvZGF0YS9jb3VudGVyL21hbmFnZXIudHMiLCJ0YWJsZXMvZGF0YS9mYWN0b3J5L2NvbXBhcmUtb2JqZWN0cy50cyIsInRhYmxlcy9kYXRhL2ZhY3RvcnkvZmFjdG9yeS50cyIsInRhYmxlcy9kYXRhL2ZhY3RvcnkvcHJvZHVjdC50cyIsInRhYmxlcy9kYXRhL2ZpbHRlci9maWx0ZXIudHMiLCJ0YWJsZXMvZGF0YS9saXN0cy9mZXRjaC50cyIsInRhYmxlcy9kYXRhL2xpc3RzL2xpc3QudHMiLCJ0YWJsZXMvZGF0YS9saXN0cy9sb2NhbC1zdG9yZS50cyIsInRhYmxlcy9kYXRhL2xpc3RzL21hbmFnZXIvbWFuYWdlci50cyIsInRhYmxlcy9kYXRhL2xpc3RzL21hbmFnZXIvcmVhbHRpbWUvcmVhbHRpbWUudHMiLCJ0YWJsZXMvZGF0YS9saXN0cy9tYW5hZ2VyL3JlYWx0aW1lL3JlcG9ydHMudHMiLCJ0YWJsZXMvZGF0YS9saXN0cy9tYW5hZ2VyL3JlZ2lzdHJpZXMvZmlsdGVyLnRzIiwidGFibGVzL2RhdGEvbGlzdHMvbWFuYWdlci9yZWdpc3RyaWVzL3JlZ2lzdHJpZXMudHMiLCJ0YWJsZXMvZGF0YS9saXN0cy9vcmRlci50cyIsInRhYmxlcy9kYXRhL2xpc3RzL3JlY29yZHMudHMiLCJ0YWJsZXMvZGF0YS9yZWFsdGltZS9yZWFsdGltZS50cyIsInRhYmxlcy9kYXRhL3JlYWx0aW1lL3JlcG9ydHMvbGlzdC50cyIsInRhYmxlcy9kYXRhL3JlYWx0aW1lL3JlcG9ydHMvcmVjb3JkLnRzIiwidGFibGVzL2RhdGEvcmVhbHRpbWUvcmVwb3J0cy9yZXBvcnRzLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL2ZhY3RvcnkudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmV0Y2hlci50cyIsInRhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvZmllbGQudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmllbGRzL2ZpZWxkcy50cyIsInRhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvc2V0dGVyLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL2ZpZWxkcy9zb3VyY2VzL21lbW9yeS50cyIsInRhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvc291cmNlcy9wdWJsaXNoZWQudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmllbGRzL3NvdXJjZXMvc291cmNlLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL2lkZW50aWZpZXJzLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL2xvYWRlci50cyIsInRhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9yZWNvcmQudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvdW5wdWJsaXNoZWQudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL21hbmFnZXIudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy9yZWFsdGltZS9yZXBvcnRzLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy93cmFwcGVkL2ZhY3RvcnkudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL3dyYXBwZWQvZmllbGRzL2ZpZWxkLnRzIiwidGFibGVzL2RhdGEvcmVjb3Jkcy93cmFwcGVkL2ZpZWxkcy9maWVsZHMudHMiLCJ0YWJsZXMvZGF0YS9yZWNvcmRzL3dyYXBwZWQvcmVjb3JkLnRzIiwidGFibGVzL2RhdGEvdXVpZC50cyIsInRhYmxlcy9pbmRpY2VzL2luZGV4LnRzIiwidGFibGVzL2luZGljZXMvaW5kaWNlcy50cyIsInRhYmxlcy9sb2NhbC1kYXRhYmFzZS9jb3VudGVycy9jb3VudGVycy50cyIsInRhYmxlcy9sb2NhbC1kYXRhYmFzZS9jb3VudGVycy9tZW1vcnkudHMiLCJ0YWJsZXMvbG9jYWwtZGF0YWJhc2UvbGlzdHMvbGlzdHMudHMiLCJ0YWJsZXMvbG9jYWwtZGF0YWJhc2UvbGlzdHMvbWVtb3J5LnRzIiwidGFibGVzL2xvY2FsLWRhdGFiYXNlL2xvY2FsLWRhdGFiYXNlLnRzIiwidGFibGVzL2xvY2FsLWRhdGFiYXNlL3JlY29yZHMvbWVtb3J5LnRzIiwidGFibGVzL2xvY2FsLWRhdGFiYXNlL3JlY29yZHMvcmVjb3Jkcy50cyIsInRhYmxlcy9sb2NhbC1kYXRhYmFzZS9yZWNvcmRzL3VucHVibGlzaGVkLnRzIiwidGFibGVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy50cyIsInRhYmxlcy9wcm9wZXJ0aWVzL3Byb3BlcnR5LnRzIiwidGFibGVzL3Byb3BlcnRpZXMvdHlwZXMvY29sbGVjdGlvbi50cyIsInRhYmxlcy9wcm9wZXJ0aWVzL3R5cGVzL2l0ZW0tc2VsZWN0b3IudHMiLCJ0YWJsZXMvcHJvcGVydGllcy90eXBlcy9pdGVtLnRzIiwidGFibGVzL3Byb3BlcnRpZXMvdHlwZXMvaXRlbXMudHMiLCJ0YWJsZXMvcXVlcmllcy9iYXRjaC9iYXRjaC50cyIsInRhYmxlcy9xdWVyaWVzL2JhdGNoL3JlcXVlc3QudHMiLCJ0YWJsZXMvcXVlcmllcy9jb3VudGVyLnRzIiwidGFibGVzL3F1ZXJpZXMvZGF0YS50cyIsInRhYmxlcy9xdWVyaWVzL2xpc3QudHMiLCJ0YWJsZXMvcXVlcmllcy9xdWVyaWVzLnRzIiwidGFibGVzL3RhYmxlLnRzIiwidGFibGVzL3RhYmxlcy50cyIsInRyZWUvY29sbGVjdGlvbi50cyIsInRyZWUvaXRlbS1zZWxlY3Rvci50cyIsInRyZWUvaXRlbS50cyIsInRyZWUvaXRlbXMudHMiLCJ0cmVlL25vZGUudHMiLCJ0cmVlL3Byb3BlcnRpZXMudHMiLCJ0cmVlL3NwZWNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=