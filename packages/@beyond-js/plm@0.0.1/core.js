define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.tables = _exports.realtime = _exports.hmr = _exports.auth = _exports.__beyond_pkg = _exports.TableSpecs = _exports.NotSet = _exports.ListUpdateFilterReport = _exports.ItemsProperty = _exports.ItemSpecs = _exports.ItemSelectorProperty = _exports.ItemProperty = _exports.Item = _exports.DataSource = _exports.ConditionOperand = _exports.CollectionSpecs = _exports.CollectionProperty = _exports.Collection = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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

          if (!tree || this.tree.landed) return; // Continue with tree loading

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
          super.node = specs.node ? specs.node : new _collection.CollectionNode(table, specs.tree); // Gets the list data access

          const attributes = {};
          this.#list = this.table.lists.get(specs.filter, this.node.order, attributes, specs.session);
          super.data = this.#list;
          this.#items.activate();
        }

        destroy() {
          super.destroy(); // The list is not longer being used by this item

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
          } // Destroy unused items


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
          if (!tree || this.tree.landed) return; // Continue with tree loading

          await this.#properties.fill(tree);
        }

        constructor(table, specs) {
          super(table);
          if (!table || typeof table !== 'string') throw new Error('Parameter table is invalid');
          specs = specs ? specs : {};
          super.node = specs.node ? specs.node : new _item.ItemNode(table, specs.tree); // Get the record data access

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

          const filter = this.#filter.value; // Check if the identifier has changed

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
          } = tableProperty.selector(this.#parentItem); // Check if the table is registered in the tree

          if (!this.node.tables.has(table)) return; // Check if value should be changed or not

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

          const identifier = this.#identifier.value; // Check if the identifier has changed

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
    hash: 2467694982,
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
          } // Remove items that now are not in the collection


          const marked = [];

          for (const id of this.keys()) !values.includes(id) && marked.push(id);

          for (const id of marked) {
            const item = this.get(id);
            item.destroy();
            this.delete(id);
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
        } // The local store, properties and methods


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
        } // The fetch manager, properties and methods


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
          } = this.#counter; // Fetch from server

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
        } // The count of consumers that are holding a product
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
        } // The key generated by CompareObjects.generate(filter, attributes, session)


        #key;

        get key() {
          return this.#key;
        } // The auto-numeric instance id generated by the manager


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
          } = this.#list; // Fetch from server

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

        #invalidated = false; // For realtime notifications to indicate that the list has changed

        invalidate() {
          this.#invalidated = true;
          this.trigger('invalidated');
        }

        #records = new _records.ListRecords(this);

        get records() {
          return this.#records;
        } // The local store, properties and methods


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
        } // The fetch manager, properties and methods


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
        } // Keeps a list of records sorted by the filter criteria


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

          const record = this.#identifiers.get(key); // Check if there are identifiers consuming this record

          for (const identifier of record.identifiers) {
            if (this.#wrappedFactory.has(identifier, session)) {
              return;
            }
          } // At this point, none of the record identifiers are being consumed


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
          }; // Check if data is already loaded in memory cache


          const memory = table.localDB.records.memory.load(this.#record);

          if (memory && Date.now() - memory.savedTime < 1000) {
            return done(memory);
          } // Fetch from server


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
          } // If record is loaded or fetched, then return the published value


          if (this.#record.landed) {
            return this.#published.value;
          } // Check if the field is set in the initial identifier


          const initialIdentifier = this.#record.identifiers.initial;

          if (initialIdentifier.hasOwnProperty(this.#name)) {
            return initialIdentifier[this.#name];
          } // Field value is not set


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
          const record = this.#record; // Check if primary key received is valid

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
          } // Set fields with the received values


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
          } // Avoid to modify the value if the field is present in the initial identifier
          // and the record is not still persisted


          const {
            record
          } = this.#field;

          if (!record.persisted) {
            const initialIdentifier = record.identifiers.initial;

            if (initialIdentifier.hasOwnProperty(this.#field.name)) {
              throw new Error(`Value of field "${this.#field.name}" cannot be set as ` + `it is a field present in the initial identifier`);
            }
          } // Primary key cannot be set nor modified


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
        #record; // The initial identifier when the record was created by the manager
        // and the record is still not loaded

        #initial;

        get initial() {
          return this.#initial;
        }

        #indices; // Identifiers by index name

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
          } // Check if some of the identifiers changed


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
        } // The local store, properties and methods


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
        } // The fetch manager, properties and methods


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

        #invalidated = false; // For realtime notifications to indicate that the list has changed

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
          this.#manager = manager; // If the initial identifier is not set, then it is a locally created record

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
            } // Check if field exists in the record


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
    hash: 538147968,
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
          if (!Object.keys(fields).length) throw new Error('Parameter fields does not set any properties'); // "data" action only can use the primary key or a unique index

          if (action === 'data' && !this.primary && !this.unique) return false; // "list" and "count" actions cannot use the primary key index

          if (['list', 'count'].includes(action) && this.primary) return false;
          let count = 0;

          for (const field of this.fields) {
            if (!fields.hasOwnProperty(field)) {
              // All the fields must be set on the "data" action,
              // as all the fields are require to uniquely identify the record being queried
              if (['tu', 'data'].includes(action)) return false; // An index can be used on "list" and "count" actions
              // when not all the fields are specified, only if:
              // 1. There is at least one field that applies to the filter
              // 2. There are no other filters specified in the parameters that are used by the index

              return count === Object.keys(fields).length;
            }

            count++;
          } // Do not use the index if more fields than the required were specified


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
            if (Object.entries(filtered).length !== index.fields.length) continue; // Find a suitable index

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
          filter = filter ? filter : []; // Order the filter by field to assure that the generated key be unique

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
          filter = filter ? filter : []; // Order the filter by field to assure that the generated key be unique

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
          }; // Save in memory cache first, the data must be available immediately as other
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
            }); // Create the indices of the records object store

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
          }; // Save in memory cache first, the data must be available immediately as other
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
          } // Remove in memory cache first, the data must be available immediately as other
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

          const index = indices.get(indexName); // Check if record is in memory cache

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
          const response = await this.#batch.exec(request); //Item not found

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
          } // Verify that the version of the received record is newer


          if (version && version >= response.version) {
            console.warn('The record version of the received fetch is not improved.\n' + `Cached version was "${version}" and the record received version is "${response.version}"`);
          } // Save to cache


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
          } // Save to the local database the list and the records data


          const listIds = [];

          for (const record of response) {
            if (!record.uptodate) {
              const pk = this.#table.indices.primary.fields[0];

              if (!record.data.hasOwnProperty(pk)) {
                console.error(`Error on "list" query. Record of table "${this.#table.name}" ` + `does not have its primary key field "${pk}".\n\n`, request, record);
                continue;
              } // Verify that the version of the received record is newer


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
  let auth, NotSet, DataSource, CollectionSpecs, Collection, ItemSpecs, Item, CollectionProperty, ItemSelectorProperty, ItemProperty, ItemsProperty, ConditionOperand, realtime, ListUpdateFilterReport, TableSpecs, tables; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VG9rZW4iLCJoYXMiLCJFcnJvciIsInNlc3Npb24iLCJnZXQiLCJnZXRBY2Nlc3NUb2tlbiIsImVycm9ycyIsIk9iamVjdCIsImZyZWV6ZSIsIk5PVF9MT0dHRURfSU4iLCJzIiwiUExNU2Vzc2lvbiIsIkV2ZW50cyIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwidHJpZ2dlciIsIk1hcCIsInJlZ2lzdGVyIiwidW5yZWdpc3RlciIsImRlbGV0ZSIsIk5vdFNldCIsIkRhdGFTb3VyY2UiLCJDb2xsZWN0aW9uIiwiRWxlbWVudCIsImlzIiwiSXRlbSIsImxpc3QiLCJDb2xsZWN0aW9uQ291bnRlcnMiLCJjb3VudGVycyIsIkNvbGxlY3Rpb25JdGVtcyIsIml0ZW1zIiwiVHJlZSIsInRyZWUiLCJsb2FkIiwibG9hZGVkIiwicHJvbWlzZXMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwibGFuZGVkIiwiZmlsbCIsInRhYmxlIiwiREl0ZW0iLCJzcGVjcyIsInByb3RvdHlwZSIsIm5vZGUiLCJDb2xsZWN0aW9uTm9kZSIsImF0dHJpYnV0ZXMiLCJsaXN0cyIsImZpbHRlciIsIm9yZGVyIiwiZGF0YSIsImFjdGl2YXRlIiwiZGVzdHJveSIsInJlbGVhc2UiLCJDb2xsZWN0aW9uQ291bnRlciIsImNvbGxlY3Rpb24iLCJjb25kaXRpb25zIiwiY29uY2F0IiwiRmlsdGVyIiwic2V0VGltZW91dCIsIm9uIiwiZGVhY3RpdmF0ZSIsIm9mZiIsImZvckVhY2giLCJjb3VudGVyIiwidW5kZWZpbmVkIiwidXBkYXRlIiwidXBkYXRlZCIsIm9yZGVyZWQiLCJyZWNvcmRzIiwidmFsdWVzIiwiaWQiLCJpdGVtIiwia2V5IiwidW5wdWJsaXNoZWQiLCJsb2NhbElkIiwicGsiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJiaW5kIiwidW5iaW5kIiwiYWN0aXZlIiwiUmVhbHRpbWUiLCJmZXRjaGluZyIsImZldGNoZWQiLCJyZXN0b3JlIiwidGFibGVzIiwiSXRlbUZpZWxkIiwiYXNzaWduZWQiLCJyZWNvcmQiLCJmaWVsZHMiLCJJdGVtRmllbGRzIiwidmVyc2lvbiIsInByb3BlcnRpZXMiLCJmb3VuZCIsIkl0ZW1Ob2RlIiwiaWRlbnRpZmllciIsImluZGljZXMiLCJwcmltYXJ5IiwiUHJvcGVydGllcyIsIkNvbGxlY3Rpb25Qcm9wZXJ0eUZpbHRlciIsInZhbGlkIiwicHJvcGVydHkiLCJmaWx0ZXJTcGVjIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIm9wZXJhbmQiLCJDb25kaXRpb25PcGVyYW5kIiwiRXF1YWwiLCJzb3VyY2UiLCJwYXJlbnRJdGVtRmllbGQiLCJ0cmFuc2Zvcm0iLCJDb2xsZWN0aW9uUHJvcGVydHkiLCJwYXJlbnRJdGVtIiwiQ29tcGFyZU9iamVjdHMiLCJjb21wYXJlIiwidGFibGVQcm9wZXJ0eSIsIkl0ZW1TZWxlY3RvclByb3BlcnR5Iiwic2VsZWN0b3IiLCJJdGVtUHJvcGVydHlJZGVudGlmaWVyIiwiaWRlbnRpZmllclNwZWMiLCJJdGVtUHJvcGVydHkiLCJJdGVtc1Byb3BlcnR5IiwiQXJyYXkiLCJpZGVudGlmaWVyVmFsdWUiLCJJdGVtcyIsIm1hcmtlZCIsImtleXMiLCJpbmNsdWRlcyIsIm1lbW9yeSIsImNsZWFyIiwiY29uc29sZSIsIndhcm4iLCJ0aGVuIiwiY2F0Y2giLCJleGMiLCJlcnJvciIsInN0YWNrIiwiZWxlbWVudCIsIkNvdW50ZXJEYXRhIiwiUHJvZHVjdCIsIkNvdW50ZXJMb2NhbFN0b3JlIiwibG9jYWxTdG9yZSIsInN0b3JlZCIsIkNvdW50ZXJGZXRjaCIsIm1hbmFnZXIiLCJpbnN0YW5jZUlkIiwiZmlsdGVyU3BlY3MiLCJxdWVyaWVzIiwibG9jYWxEQiIsIkNvdW50ZXJzTWFuYWdlciIsIkZhY3RvcnkiLCJjcmVhdGUiLCJhcmd1bWVudHMiLCJnZW5lcmF0ZSIsImFueSIsImFyZ3MiLCJtYXAiLCJhcmd1bWVudCIsImVudHJpZXMiLCJzb3J0IiwiZTAiLCJlMSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpMSIsImkyIiwiaG9sZCIsInByb2R1Y3QiLCJjb3VudCIsIlNldCIsImNvbmRpdGlvbiIsImFkZCIsImNvIiwib3BlcmFuZHMiLCJHcmVhdGVyIiwiR3JlYXRlck9yRXF1YWwiLCJMb3dlciIsIkxvd2VyT3JFcXVhbCIsImFwcGxpZXMiLCJMaXN0RmV0Y2giLCJyZXNwb25zZSIsIm92ZXJ3cml0ZSIsIl9fZGVjb3JhdGUiLCJTaW5nbGVDYWxsIiwiTGlzdERhdGEiLCJpbnZhbGlkYXRlIiwiTGlzdFJlY29yZHMiLCJMaXN0TG9jYWxTdG9yZSIsIm9yZGVyU3BlY3MiLCJPcmRlciIsIkxpc3RzTWFuYWdlciIsIlJlZ2lzdHJpZXMiLCJyZWdpc3RyaWVzIiwicmVhbHRpbWUiLCJpbmZvcm1MaXN0Q3JlYXRlZCIsImluZm9ybUxpc3REZXN0cm95ZWQiLCJyZXBvcnRzIiwiUmVwb3J0cyIsInJlYWx0aW1lRmlsdGVyIiwibWFuYWdlckZpbHRlciIsImVudHJ5IiwiZmlsdGVycyIsIlJlZ2lzdHJ5QnlGaWx0ZXIiLCJyZWdpc3RyeSIsInNsaWNlIiwiaW5kZXhPZiIsImluZGV4IiwibGVuZ3RoIiwic3BsaWNlIiwicGVyc2lzdGVkIiwiTGlzdFJlcG9ydCIsInRhYmxlTmFtZSIsIlJlY29yZFJlcG9ydCIsImluc2VydCIsImxvZyIsIlJlY29yZHNEYXRhRmFjdG9yeSIsIlVucHVibGlzaGVkUmVjb3JkcyIsIndyYXBwZWRGYWN0b3J5IiwiUmVjb3JkRGF0YSIsImlkZW50aWZpZXJzIiwiZ2V0VW5wdWJsaXNoZWQiLCJSZWNvcmRGZXRjaGVyIiwiZG9uZSIsInNldHRlciIsIkRhdGUiLCJub3ciLCJzYXZlZFRpbWUiLCJGaWVsZCIsIk1lbW9yeUZpZWxkU291cmNlIiwiUHVibGlzaGVkRmllbGRTb3VyY2UiLCJwdWJsaXNoZWQiLCJpbml0aWFsSWRlbnRpZmllciIsImluaXRpYWwiLCJkaXNjYXJkIiwiRmllbGRzIiwiRmllbGRzU2V0dGVyIiwiRmllbGRTb3VyY2UiLCJtb2RpZmlhYmxlIiwiUmVjb3JkSWRlbnRpZmllcnMiLCJzaXplIiwiaW5kZXhOYW1lIiwiZ2V0SW5kZXgiLCJwcmltYXJ5S2V5RmllbGRWYWx1ZSIsInVuaXF1ZSIsInJlZHVjZSIsImNyZWF0ZUlkZW50aWZpZXJGcm9tSW5kZXgiLCJvdXRwdXQiLCJmaWVsZE5hbWUiLCJwcmV2aW91cyIsImNoYW5nZWQiLCJjYWxsYmFjayIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiUmVjb3JkTG9hZGVyIiwic2VhcmNoZWQiLCJwa0ZpZWxkIiwibG9hZGVyIiwicmVjb3Jkc0RhdGFGYWN0b3J5IiwiUmVjb3Jkc01hbmFnZXIiLCJXcmFwcGVkRmFjdG9yeSIsInBrTmFtZSIsIldyYXBwZWRSZWNvcmQiLCJXcmFwcGVkUmVjb3JkRmllbGQiLCJ3cmFwcGVkUmVjb3JkIiwiV3JhcHBlZFJlY29yZEZpZWxkcyIsImRlc3Ryb3llZCIsImNyZWF0ZVVVSUQiLCJkdCIsImdldFRpbWUiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJ0b1N0cmluZyIsIkluZGV4IiwiYmF0Y2hlcyIsInN1aXRhYmxlIiwiYWN0aW9uIiwiSW5kaWNlcyIsImluZGV4U3BlY3MiLCJmaW5kIiwic2VsZWN0IiwiZmlsdGVyZWQiLCJmcm9tRW50cmllcyIsIkxvY2FsREJDb3VudGVycyIsIk1lbW9yeUxvY2FsREJDb3VudGVycyIsImRiIiwiYzEiLCJjMiIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInRyYW5zYWN0aW9uIiwic3RvcmUiLCJvYmplY3RTdG9yZSIsInJxIiwicHV0IiwicmVqZWN0Iiwib25lcnJvciIsInRhcmdldCIsInJlc3VsdCIsIm9uc3VjY2VzcyIsInJlc29sdmUiLCJzYXZlIiwicHJlcGFyZSIsIkxvY2FsREJMaXN0cyIsIk1lbW9yeUxvY2FsREJMaXN0cyIsImNhY2hlIiwiZW5hYmxlZCIsIkxvY2FsREIiLCJMb2NhbERCUmVjb3JkcyIsIkxvY2FsREJVbnB1Ymxpc2hlZCIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib251cGdyYWRlbmVlZGVkIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJNZW1vcnlMb2NhbERCUmVjb3JkcyIsImdlbmVyYXRlS2V5IiwiZXhpc3RzIiwicmVtb3ZlIiwiaW5kZXhTdG9yZSIsInZhbGlkYXRlIiwiUHJvcGVydHkiLCJwYXJlbnRUYWJsZSIsInJlYWRvbmx5IiwiaW1tdXRhYmxlIiwidHlwZSIsInJlcXVpcmUiLCJyZWxhdGVkVGFibGUiLCJCYXRjaCIsInF1ZXVlTGVuZ3RoIiwibWF4IiwiZXhlYyIsIkJhdGNoUmVxdWVzdCIsImNsZWFyVGltZW91dCIsInJlcXVlc3RzIiwicGFyYW1zIiwibW9kdWxlIiwiZXhlY3V0ZSIsInJlc3BvbnNlcyIsImZpbmFsbHkiLCJDb3VudGVyUXVlcnkiLCJiYXRjaCIsImFjdGlvbnMiLCJtZXNzYWdlIiwiYXNzaWduIiwiRGF0YVF1ZXJ5IiwiY2FjaGVkIiwidHUiLCJMaXN0UXVlcnkiLCJsaXN0SWRzIiwidXB0b2RhdGUiLCJRdWVyaWVzIiwiVGFibGUiLCJsaW1pdCIsIlRhYmxlcyIsIk5vZGUiLCJ2aWV3IiwicGFyZW50IiwiSXRlbVNlbGVjdG9yTm9kZSIsImNoaWxkcmVuIiwiQ0l0ZW1Ob2RlIiwiSXRlbXNOb2RlIiwicm9vdCIsInJlc3QiLCJ3aW5kb3ciLCJDSXRlbVNlbGVjdG9yTm9kZSIsIkNDb2xsZWN0aW9uTm9kZSIsIkNJdGVtc05vZGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndvcmtzcGFjZS9wbG0vY29yZS9hdXRoL2F1dGgudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvYXV0aC9nZXQtYWNjZXNzLXRva2VuLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2F1dGgvc2Vzc2lvbi50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9hdXRoL3Nlc3Npb25zLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2NvbnN0YW50cy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvY29sbGVjdGlvbi9jb3VudGVycy9jb3VudGVyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL2NvbGxlY3Rpb24vY291bnRlcnMvY291bnRlcnMudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvY29sbGVjdGlvbi9pdGVtcy9pdGVtcy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9jb2xsZWN0aW9uL3RyZWUudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvZWxlbWVudC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL2ZpZWxkcy9maWVsZC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL2ZpZWxkcy9maWVsZHMudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvaXRlbS9pdGVtLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9jb2xsZWN0aW9uL2ZpbHRlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvY29sbGVjdGlvbi9wcm9wZXJ0eS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvY29sbGVjdGlvbi90cmVlLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9pdGVtLXNlbGVjdG9yL3Byb3BlcnR5LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9pdGVtLXNlbGVjdG9yL3RyZWUudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvaXRlbS9wcm9wZXJ0aWVzL2l0ZW0vaWRlbnRpZmllci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbS9wcm9wZXJ0eS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbS90cmVlLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL2l0ZW0vcHJvcGVydGllcy9pdGVtcy9wcm9wZXJ0eS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvaXRlbXMvdHJlZS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvcHJvcGVydGllcy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS9lbGVtZW50cy9pdGVtL3Byb3BlcnRpZXMvcHJvcGVydHkudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvZWxlbWVudHMvaXRlbS90cmVlLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL2VsZW1lbnRzL3JlYWx0aW1lLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2NvdW50ZXIvY291bnRlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9jb3VudGVyL2ZldGNoLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2NvdW50ZXIvbG9jYWwtc3RvcmUudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvY291bnRlci9tYW5hZ2VyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2ZhY3RvcnkvY29tcGFyZS1vYmplY3RzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2ZhY3RvcnkvZmFjdG9yeS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9mYWN0b3J5L3Byb2R1Y3QudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvZmlsdGVyL2ZpbHRlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9saXN0cy9mZXRjaC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9saXN0cy9saXN0LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL2xvY2FsLXN0b3JlLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL21hbmFnZXIvbWFuYWdlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9saXN0cy9tYW5hZ2VyL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL21hbmFnZXIvcmVhbHRpbWUvcmVwb3J0cy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9saXN0cy9tYW5hZ2VyL3JlZ2lzdHJpZXMvZmlsdGVyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL21hbmFnZXIvcmVnaXN0cmllcy9yZWdpc3RyaWVzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL29yZGVyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL2xpc3RzL3JlY29yZHMudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvcmVhbHRpbWUvcmVhbHRpbWUudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvcmVhbHRpbWUvcmVwb3J0cy9saXN0LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlYWx0aW1lL3JlcG9ydHMvcmVjb3JkLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlYWx0aW1lL3JlcG9ydHMvcmVwb3J0cy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmFjdG9yeS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmV0Y2hlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmllbGRzL2ZpZWxkLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvZmllbGRzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvc2V0dGVyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9maWVsZHMvc291cmNlcy9tZW1vcnkudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL2ZpZWxkcy9zb3VyY2VzL3B1Ymxpc2hlZC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvZmllbGRzL3NvdXJjZXMvc291cmNlLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9pZGVudGlmaWVycy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL2RhdGEvbG9hZGVyLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvZGF0YS9yZWNvcmQudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvcmVjb3Jkcy9kYXRhL3VucHVibGlzaGVkLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvbWFuYWdlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvcmVhbHRpbWUvcmVwb3J0cy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL3dyYXBwZWQvZmFjdG9yeS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvZGF0YS9yZWNvcmRzL3dyYXBwZWQvZmllbGRzL2ZpZWxkLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvd3JhcHBlZC9maWVsZHMvZmllbGRzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9kYXRhL3JlY29yZHMvd3JhcHBlZC9yZWNvcmQudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2RhdGEvdXVpZC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvaW5kaWNlcy9pbmRleC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvaW5kaWNlcy9pbmRpY2VzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9sb2NhbC1kYXRhYmFzZS9jb3VudGVycy9jb3VudGVycy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvbG9jYWwtZGF0YWJhc2UvY291bnRlcnMvbWVtb3J5LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9sb2NhbC1kYXRhYmFzZS9saXN0cy9saXN0cy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvbG9jYWwtZGF0YWJhc2UvbGlzdHMvbWVtb3J5LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9sb2NhbC1kYXRhYmFzZS9sb2NhbC1kYXRhYmFzZS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvbG9jYWwtZGF0YWJhc2UvcmVjb3Jkcy9tZW1vcnkudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL2xvY2FsLWRhdGFiYXNlL3JlY29yZHMvcmVjb3Jkcy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvbG9jYWwtZGF0YWJhc2UvcmVjb3Jkcy91bnB1Ymxpc2hlZC50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9wcm9wZXJ0aWVzL3Byb3BlcnR5LnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9wcm9wZXJ0aWVzL3R5cGVzL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL3Byb3BlcnRpZXMvdHlwZXMvaXRlbS1zZWxlY3Rvci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvcHJvcGVydGllcy90eXBlcy9pdGVtLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9wcm9wZXJ0aWVzL3R5cGVzL2l0ZW1zLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9xdWVyaWVzL2JhdGNoL2JhdGNoLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9xdWVyaWVzL2JhdGNoL3JlcXVlc3QudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL3F1ZXJpZXMvY291bnRlci50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvcXVlcmllcy9kYXRhLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RhYmxlcy9xdWVyaWVzL2xpc3QudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL3F1ZXJpZXMvcXVlcmllcy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90YWJsZXMvdGFibGUudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdGFibGVzL3RhYmxlcy50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90cmVlL2NvbGxlY3Rpb24udHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdHJlZS9pdGVtLXNlbGVjdG9yLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RyZWUvaXRlbS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90cmVlL2l0ZW1zLnRzIiwid29ya3NwYWNlL3BsbS9jb3JlL3RyZWUvbm9kZS50cyIsIndvcmtzcGFjZS9wbG0vY29yZS90cmVlL3Byb3BlcnRpZXMudHMiLCJ3b3Jrc3BhY2UvcGxtL2NvcmUvdHJlZS9zcGVjcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19