define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core", "@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.7/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.manager = _exports.hmr = _exports.__beyond_pkg = _exports.Route = _exports.PageURI = _exports.PageInstance = _exports.Layout = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.3/routing"
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
      const manager = typeof process === 'object' ? void 0 : new class Manager {
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
      exports.manager = manager;
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
  let Layout, manager, PageInstance, Route, PageURI;

  // Module exports
  _exports.PageURI = PageURI;
  _exports.Route = Route;
  _exports.PageInstance = PageInstance;
  _exports.manager = manager;
  _exports.Layout = Layout;
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
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0EsTUFBTTtRQUMzQjtRQUVBLElBQUlDLEVBQUU7VUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNBLEVBQUU7UUFDdkI7UUFFQSxJQUFJQyxJQUFJO1VBQ0osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDQSxJQUFJO1FBQ3pCO1FBRUEsSUFBSWpCLElBQUk7VUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUNBLElBQUk7UUFDM0I7UUFFQTVELFlBQVk7VUFBQzhFLE1BQU07VUFBRWxELEdBQUc7VUFBRWlCO1FBQUssQ0FBc0Q7VUFDakYsSUFBSWlDLE1BQU0sRUFBRTtZQUNSLE1BQU1wRSxLQUFLLEdBQUdvRSxNQUFNLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDbEQsTUFBTTNFLElBQUksR0FBR2EsZ0JBQU8sQ0FBQ0ksS0FBSyxDQUFDZ0MsUUFBUSxDQUFDM0MsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQ04sSUFBSSxFQUFFO2NBQ1AsTUFBTSxJQUFJNEUsS0FBSyxDQUFDLFlBQVlGLE1BQU0sQ0FBQ0csU0FBUyxvQ0FBb0MsQ0FBQzs7WUFHckYsQ0FBQztjQUFDckQsR0FBRztjQUFFaUI7WUFBSyxDQUFDLEdBQUd6QyxJQUFJOztVQUd4QixJQUFJLENBQUMsSUFBSSxHQUFHd0IsR0FBRztVQUNmLElBQUksQ0FBQyxNQUFNLEdBQUdpQixLQUFLO1FBQ3ZCOztNQUNIcEQiLCJuYW1lcyI6WyJNYXAiLCJyZWdpc3RlciIsImxheW91dCIsInNldCIsImlkIiwiZXhwb3J0cyIsIkxheW91dCIsIkV2ZW50cyIsImlzIiwiZWxlbWVudCIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJsYXlvdXRzIiwicGFyZW50Iiwic2VsZWN0IiwicGFnZSIsImRlc2NlbmRpbmciLCJsZW5ndGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNoaWxkIiwiZm91bmQiLCJ2YWx1ZXMiLCJmaW5kIiwiY2hhbmdlZCIsInNoaWZ0IiwidHJpZ2dlciIsIm1hbmFnZXIiLCJwcm9jZXNzIiwiTWFuYWdlciIsIkxheW91dHMiLCJwYWdlcyIsIlBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5Iiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIm9uIiwibWFpbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwidW5kZWZpbmVkIiwiUGFnZUluc3RhbmNlIiwid2lkZ2V0cyIsInVuc2hpZnQiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiUGFnZVVSSSIsInNlYXJjaCIsInFzIiwiaGFzaCIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsIkVycm9yIiwibG9jYWxOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJsYXlvdXRzL2luZGV4LnRzIiwibGF5b3V0cy9sYXlvdXQudHMiLCJtYW5hZ2VyLnRzIiwicGFnZXMvaW5kZXgudHMiLCJwYWdlcy9pbnN0YW5jZS50cyIsInJvdXRlLnRzIiwidXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19