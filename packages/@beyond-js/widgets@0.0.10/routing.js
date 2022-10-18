define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/kernel@0.0.22/core", "@beyond-js/widgets@0.0.10/render", "@beyond-js/kernel@0.0.22/routing"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.manager = _exports.hmr = _exports.__beyond_pkg = _exports.Route = _exports.PageURI = _exports.PageInstance = _exports.Layout = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.0.10/routing"
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
        } // The active child in the layout


        #active;

        get active() {
          return this.#active;
        } // Property #parent is undefined only if it is the main layout


        #parent; // The layouts and pages that are contained in the current layout

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
    hash: 4150480542,
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
          const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack)); // @TODO: move to the setup method


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
        } // The main layout can be the layout set in the project.json, or the beyond-layout-children
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

          const page = this.#instances.pages.register(uri, route); // Property page.parents is an array that contains the descending list of layouts where the page is contained

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
          const pathname = this.#pathname.split('/'); // Split the routes of each page to make it easier to find the route that applies to the pathname
          // being requested

          const registered = new Map();

          _render.widgets.forEach(({
            is,
            name,
            route
          }) => is === 'page' && registered.set(name, route.split('/'))); // The pages whose routes apply by the length of their urls


          const target = [...registered].filter(([, route]) => route.length === pathname.length);
          this.#vars = new Map();
          const found = target.find(([, route]) => {
            this.#vars.clear();

            for (let i = 0; i < pathname.length; i++) {
              const dir = route[i]; // Check if it is a route var (ex: /article/${id})

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
    hash: 130043211,
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
  let Layout, manager, PageInstance, Route, PageURI; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVlBLElBQW5CO1FBQ0g7O1FBRUQ1RCxZQUFZO1VBQUM4RSxNQUFEO1VBQVNsRCxHQUFUO1VBQWNpQjtRQUFkLENBQVo3QyxFQUFxRjtVQUNqRixJQUFJOEUsTUFBSixFQUFZO1lBQ1IsTUFBTXBFLEtBQUssR0FBR29FLE1BQU0sQ0FBQ0MsWUFBUEQsQ0FBb0IsZUFBcEJBLENBQWQ7O1lBQ0EsTUFBTTFFLElBQUksR0FBR2EsaUJBQVFJLEtBQVJKLENBQWNvQyxRQUFkcEMsQ0FBdUJQLEtBQXZCTyxDQUFiOztZQUNBLElBQUksQ0FBQ2IsSUFBTCxFQUFXO2NBQ1AsTUFBTSxJQUFJNEUsS0FBSixDQUFVLFlBQVlGLE1BQU0sQ0FBQ0csU0FBUyxvQ0FBdEMsQ0FBTjtZQUNIOztZQUVELENBQUM7Y0FBQ3JELEdBQUQ7Y0FBTWlCO1lBQU4sSUFBZXpDLElBQWhCO1VBQ0g7O1VBRUQsS0FBSyxJQUFMLEdBQVl3QixHQUFaO1VBQ0EsS0FBSyxNQUFMLEdBQWNpQixLQUFkO1FBQ0g7O01BekNRIiwibmFtZXMiOlsiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsIkxheW91dCIsIkV2ZW50cyIsImlzIiwiZWxlbWVudCIsImFjdGl2ZSIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJsYXlvdXRzIiwicGFyZW50Iiwic2VsZWN0IiwicGFnZSIsImRlc2NlbmRpbmciLCJsZW5ndGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNoaWxkIiwiZm91bmQiLCJ2YWx1ZXMiLCJmaW5kIiwiY2hhbmdlZCIsInNoaWZ0IiwidHJpZ2dlciIsIm1hbmFnZXIiLCJwcm9jZXNzIiwiTWFuYWdlciIsIkxheW91dHMiLCJwYWdlcyIsIlBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5Iiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIm9uIiwibWFpbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwidW5kZWZpbmVkIiwiUGFnZUluc3RhbmNlIiwid2lkZ2V0cyIsInVuc2hpZnQiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiUGFnZVVSSSIsInNlYXJjaCIsInFzIiwiaGFzaCIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsIkVycm9yIiwibG9jYWxOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyIsImxheW91dC50cyIsIm1hbmFnZXIudHMiLCJpbnN0YW5jZS50cyIsInJvdXRlLnRzIiwidXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==