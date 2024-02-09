define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.9/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.manager = _exports.hmr = _exports.__beyond_pkg = _exports.Route = _exports.PageURI = _exports.PageInstance = _exports.Layout = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.6/routing"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /*******************************
  INTERNAL MODULE: ./layouts/index
  *******************************/

  ims.set('./layouts/index', {
    hash: 2940970575,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      /**
       * The registry of all layouts instances registered in the session, except the main layout
       */
      class _default extends Map {
        register(layout) {
          this.set(layout.id, layout);
        }
      }
      exports.default = _default;
    }
  });

  /********************************
  INTERNAL MODULE: ./layouts/layout
  ********************************/

  ims.set('./layouts/layout', {
    hash: 2602064878,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layout = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class Layout extends _core.Events {
        get is() {
          return 'layout';
        }
        #layouts;
        #element;
        get element() {
          return this.#element;
        }
        get id() {
          return this.#element;
        }
        // The active child in the layout
        #active;
        get active() {
          return this.#active;
        }
        // Property #parent is undefined only if it is the main layout
        #parent;
        // The layouts and pages that are contained in the current layout
        #children = new Map();
        get children() {
          return this.#children;
        }
        /**
         * Layout constructor
         *
         * @param {Layouts} layouts The layouts registry
         * @param {string} element The element name of the widget. Undefined if the project does not set a layout
         * and the index.html has a <beyond-layout-children/> as its main layout container
         * @param {Layout} parent The parent layout. Undefined if it is the main layout
         */
        constructor(layouts, element, parent) {
          super();
          this.#layouts = layouts;
          this.#element = element ? element : 'main';
          this.#parent = parent;
        }
        /**
         * Selects a page
         *
         * @param {PageInstance} page The page being selected (navigated)
         * @param {IWidgetSpecs[]} descending The descending layouts
         */
        select(page, descending) {
          if (descending.length && descending[0].name === this.#element) {
            console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
            return;
          }
          const child = (() => {
            if (!descending.length) return page;
            const {
              name: element
            } = descending[0];
            const found = [...this.#children.values()].find(child => child.element === element);
            if (found) return found;
            const layout = new Layout(this.#layouts, element, this);
            this.#layouts.register(layout);
            return layout;
          })();
          this.#children.set(child.id, child);
          const changed = this.#active !== child;
          this.#active = child;
          descending.shift();
          child.is === 'layout' && child.select(page, descending);
          changed && this.trigger('change');
        }
      }
      exports.Layout = Layout;
    }
  });

  /*************************
  INTERNAL MODULE: ./manager
  *************************/

  ims.set('./manager', {
    hash: 1504779151,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.manager = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _routing = require("@beyond-js/kernel/routing");
      var _layout = require("./layouts/layout");
      var _pages = require("./pages");
      var _layouts = require("./layouts");
      var _route = require("./route");
      /*bundle*/
      const manager = exports.manager = typeof process === 'object' ? void 0 : new class Manager {
        // The registry of all layouts (except the main layout) and pages instances registered in the session
        #instances = {
          layouts: new _layouts.default(),
          pages: new _pages.default()
        };
        #initialised = false;
        get initialised() {
          return this.#initialised;
        }
        #resolve;
        #ready = new Promise(resolve => this.#resolve = resolve);
        get ready() {
          return this.#ready;
        }
        constructor() {
          const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
          // @TODO: move to the setup method
          const {
            specifier
          } = globalThis.__app_package;
          Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
            default: config
          }]) => {
            this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
            _routing.routing.on('change', set);
            _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
          });
        }
        get layouts() {
          return this.#instances.layouts;
        }
        get pages() {
          return this.#instances.pages;
        }
        // The main layout can be the layout set in the project.json, or the beyond-layout-children
        // set when the project does not have set a layout
        #main;
        get main() {
          return this.#main;
        }
        #ct = new _core.CancellationToken();
        async set(uri) {
          const cid = this.#ct.reset();
          const route = new _route.Route(uri.pathname);
          await route.process();
          if (!this.#ct.check(cid)) return;
          const done = () => {
            !this.#initialised && this.#resolve();
            this.#initialised = true;
          };
          const {
            page: element
          } = route;
          if (!element) {
            console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
            return done();
          }
          const page = this.#instances.pages.register(uri, route);
          // Property page.parents is an array that contains the descending list of layouts where the page is contained
          const {
            error,
            value: descending
          } = page.parents;
          if (error) {
            console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
            return done();
          }
          this.#main.select(page, descending);
          return done();
        }
      }();
    }
  });

  /*****************************
  INTERNAL MODULE: ./pages/index
  *****************************/

  ims.set('./pages/index', {
    hash: 635174642,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _instance = require("./instance");
      class _default extends Map {
        instance(id) {
          return [...this.values()].find(instance => instance.id === id);
        }
        register(uri, route) {
          const {
            pathname
          } = uri;
          let instance = this.has(pathname) ? this.get(pathname) : undefined;
          instance = instance ? instance : new _instance.PageInstance(uri, route);
          this.set(pathname, instance);
          return instance;
        }
      }
      exports.default = _default;
    }
  });

  /********************************
  INTERNAL MODULE: ./pages/instance
  ********************************/

  ims.set('./pages/instance', {
    hash: 2192565275,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageInstance = void 0;
      var _render = require("@beyond-js/widgets/render");
      let id = 0;
      /*bundle*/
      class PageInstance {
        #uri;
        get uri() {
          return this.#uri;
        }
        #route;
        get route() {
          return this.#route;
        }
        get element() {
          return this.#route.page;
        }
        get is() {
          return 'page';
        }
        #id;
        get id() {
          return `${this.element}:${this.#id}`;
        }
        /**
         * Returns the ascending layouts
         *
         * @return {{error?: string, parents?: IWidgetSpecs[]}}
         */
        get parents() {
          // Ascending list of containers layouts of the current page
          const value = [];
          let {
            layout
          } = _render.widgets.get(this.element);
          while (layout) {
            const found = [..._render.widgets.values()].find(({
              name
            }) => name === layout);
            if (!found) {
              const error = `Layout "${layout}" not found`;
              return {
                error
              };
            }
            value.unshift(found);
            layout = found.layout;
          }
          return {
            value
          };
        }
        constructor(uri, route) {
          this.#uri = uri;
          this.#route = route;
          this.#id = ++id;
        }
      }
      exports.PageInstance = PageInstance;
    }
  });

  /***********************
  INTERNAL MODULE: ./route
  ***********************/

  ims.set('./route', {
    hash: 408835594,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Route = void 0;
      var _render = require("@beyond-js/widgets/render");
      var _routing = require("@beyond-js/kernel/routing");
      /*bundle*/
      class Route {
        #pathname;
        get pathname() {
          return this.#pathname;
        }
        #page;
        get page() {
          return this.#page;
        }
        #vars;
        get vars() {
          return this.#vars;
        }
        constructor(pathname) {
          this.#pathname = pathname;
        }
        async process() {
          const pathname = this.#pathname.split('/');
          // Split the routes of each page to make it easier to find the route that applies to the pathname
          // being requested
          const registered = new Map();
          _render.widgets.forEach(({
            is,
            name,
            route
          }) => is === 'page' && registered.set(name, route.split('/')));
          // The pages whose routes apply by the length of their urls
          const target = [...registered].filter(([, route]) => route.length === pathname.length);
          this.#vars = new Map();
          const found = target.find(([, route]) => {
            this.#vars.clear();
            for (let i = 0; i < pathname.length; i++) {
              const dir = route[i];
              // Check if it is a route var (ex: /article/${id})
              if (dir.startsWith('${') && dir.endsWith('}')) {
                const vname = dir.slice(2, dir.length - 1);
                this.#vars.set(vname, pathname[i]);
                continue;
              }
              if (dir !== pathname[i]) return false;
            }
            return true;
          });
          this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
        }
      }
      exports.Route = Route;
    }
  });

  /*********************
  INTERNAL MODULE: ./uri
  *********************/

  ims.set('./uri', {
    hash: 615392904,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageURI = void 0;
      var _manager = require("./manager");
      /*bundle*/
      class PageURI {
        #uri;
        #route;
        get uri() {
          return this.#uri;
        }
        get pathname() {
          return this.#uri.pathname;
        }
        get search() {
          return this.#uri.search;
        }
        get qs() {
          return this.#uri.qs;
        }
        get hash() {
          return this.#uri.hash;
        }
        get vars() {
          return this.#route.vars;
        }
        constructor({
          widget,
          uri,
          route
        }) {
          if (widget) {
            const child = widget.getAttribute('data-child-id');
            const page = _manager.manager.pages.instance(child);
            if (!page) {
              throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
            }
            ({
              uri,
              route
            } = page);
          }
          this.#uri = uri;
          this.#route = route;
        }
      }
      exports.PageURI = PageURI;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./layouts/layout",
    "from": "Layout",
    "name": "Layout"
  }, {
    "im": "./manager",
    "from": "manager",
    "name": "manager"
  }, {
    "im": "./pages/instance",
    "from": "PageInstance",
    "name": "PageInstance"
  }, {
    "im": "./route",
    "from": "Route",
    "name": "Route"
  }, {
    "im": "./uri",
    "from": "PageURI",
    "name": "PageURI"
  }];
  let Layout = _exports.Layout = void 0,
    manager = _exports.manager = void 0,
    PageInstance = _exports.PageInstance = void 0,
    Route = _exports.Route = void 0,
    PageURI = _exports.PageURI = void 0;

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Layout') && (_exports.Layout = Layout = require ? require('./layouts/layout').Layout : value);
    (require || prop === 'manager') && (_exports.manager = manager = require ? require('./manager').manager : value);
    (require || prop === 'PageInstance') && (_exports.PageInstance = PageInstance = require ? require('./pages/instance').PageInstance : value);
    (require || prop === 'Route') && (_exports.Route = Route = require ? require('./route').Route : value);
    (require || prop === 'PageURI') && (_exports.PageURI = PageURI = require ? require('./uri').PageURI : value);
  };
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});
//# sourceMappingURL=routing.js.map