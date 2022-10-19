define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.routing = _exports.PageContainer = _exports.LayoutContainer = _exports.IContainerControl = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.0.10"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.0/routing"
    },
    "type": "ts"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./config/config
  *******************************/

  ims.set('./config/config', {
    hash: 539937088,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RoutingConfig = void 0;

      var _pages = require("./pages");

      var _layouts = require("./layouts");

      class RoutingConfig {
        #layouts = new _layouts.LayoutsConfig();

        get layouts() {
          return this.#layouts;
        }

        #pages = new _pages.PagesConfig();

        get pages() {
          return this.#pages;
        }

      }

      exports.RoutingConfig = RoutingConfig;
    }
  });
  /********************************
  INTERNAL MODULE: ./config/layouts
  ********************************/

  ims.set('./config/layouts', {
    hash: 1325939906,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutsConfig = exports.LayoutConfig = void 0;

      class LayoutConfig {
        #name;

        get name() {
          return this.#name;
        }

        #bundle;

        get bundle() {
          return this.#bundle;
        }

        constructor(config) {
          if (!config) {
            this.#name = 'default';
            this.#bundle = '';
            return;
          }

          this.#name = config.name;
          this.#bundle = config.bundle;
        }

      }

      exports.LayoutConfig = LayoutConfig;

      class LayoutsConfig {
        #layouts = {};

        register(layouts) {
          for (const layout of layouts) {
            this.#layouts[layout.name] = new LayoutConfig(layout);
          }
        }

        get(name) {
          return this.#layouts[name];
        }

        has(name) {
          return this.#layouts.hasOwnProperty(name);
        }

      }

      exports.LayoutsConfig = LayoutsConfig;
    }
  });
  /******************************
  INTERNAL MODULE: ./config/pages
  ******************************/

  ims.set('./config/pages', {
    hash: 198396567,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PagesConfig = exports.PageConfig = void 0;

      class PageConfig {
        #route;

        get route() {
          return this.#route;
        }

        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #layout;

        get layout() {
          return this.#layout;
        }

        #vdir;

        get vdir() {
          return this.#vdir;
        }

        constructor(page) {
          this.#route = page.route;
          this.#bundle = page.bundle;
          this.#layout = page.layout;
          this.#vdir = page.vdir;
        }

      }

      exports.PageConfig = PageConfig;

      class PagesConfig {
        #pages = {};

        register(pages) {
          for (const page of pages) {
            this.#pages[page.route] = new PageConfig(page);
          }
        }

        get(name) {
          return this.#pages[name];
        }

        has(name) {
          return this.#pages.hasOwnProperty(name);
        }

      }

      exports.PagesConfig = PagesConfig;
    }
  });
  /*********************************
  INTERNAL MODULE: ./history/history
  *********************************/

  ims.set('./history/history', {
    hash: 4135807639,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondHistory = void 0;

      var _position = require("./position");

      var _records = require("./records");
      /**
       * Beyond keeps its own history list
       * @constructor
       */


      class BeyondHistory {
        #events;
        #position;
        #records;
        #initial = history.length;

        get initial() {
          return this.#initial;
        }

        get records() {
          return this.#records.data;
        }

        get length() {
          return this.#records.length;
        }

        get position() {
          return this.#position.value;
        }

        get current() {
          return this.#records.current;
        }

        get previous() {
          return this.#records.previous;
        }

        get following() {
          return this.#records.following;
        }

        #push = (url, state) => {
          if (!url || !state) throw new Error('Invalid parameters');
          this.#records.resetFromPosition();
          this.#records.push(url);
          this.#position.updateState(state, this.#records.length);
        };
        #processUrl = url => {
          const routing = require('../routing').routing;

          const RoutingModeEnum = require('../routing').RoutingMode;

          url = url.startsWith('/') ? url : `/${url}`;
          url = routing.mode === RoutingModeEnum.Hash ? `#${url}` : url;
          return url;
        };

        replaceState(state, title, url) {
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          if (!this.#position.checkStateIsSet) return;
          this.#position.updateState(state);
          this.#records.updateCurrentUrl(url);
          history.replaceState(state, title, this.#processUrl(url));
        }

        pushState(url, state) {
          state = state ? state : {};
          if (typeof state !== 'object') throw new Error('Invalid state parameter');
          this.#push(url, state);
          history.pushState(state, null, this.#processUrl(url));
        }

        constructor(events) {
          this.#events = events;
          this.#position = new _position.HistoryPosition(this.#events);
          this.#records = new _records.HistoryRecords(this.#position);
          window.addEventListener('popstate', () => this.#position.updateSessionStorageFromState()); // When the position in the sessionStorage is not set, it is the first navigation on the tab
          // When the history.state position is not set, it is when the user refreshes the page

          if (!this.#position.getFromSessionStorage() || !this.#position.getFromState()) {
            let url = location.protocol === 'file:' ? location.href.substr(location.pathname.length + 7) : // file:// -> 7 chars
            location.href.substr(location.origin.length);
            url = !url ? '/' : url; // First page navigation on start up

            const state = history.state ? history.state : {};
            this.#push(url, state);
            history.replaceState(state, null);
          }

          this.#position.updateSessionStorageFromState();
        }

      }

      exports.BeyondHistory = BeyondHistory;
    }
  });
  /**********************************
  INTERNAL MODULE: ./history/position
  **********************************/

  ims.set('./history/position', {
    hash: 2223419585,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryPosition = void 0;
      /**
       * The position of the navigation is stored this way:
       *      1. In the state of each page (the history.state object), it is stored the position
       *         in which the page is located. To achieve this, the __beyond_navigation_position property
       *         is added to the state object.
       *      2. In the sessionStorage is stored the current position (__beyond_navigation_position)
       */

      class HistoryPosition {
        #events;

        constructor(events) {
          this.#events = events;
        }

        #ERROR_INVALID_STATE = 'History state is not defined. ' + 'This happen when state is changed outside the beyond defined navigation flows.';
        #valid = true;

        get valid() {
          return this.#valid;
        }
        /**
         * Returns the position from the history.state
         * @returns {number | undefined}
         */


        get value() {
          const position = history.state ? history.state.__beyond_navigation_position : undefined;
          return this.checkStateIsSet ? position : undefined;
        }
        /**
         * Check if the position is already stored in the history.state.
         * If it is not, then an error message is shown.
         *
         * @returns {boolean}
         */


        get checkStateIsSet() {
          if (!this.#valid) return false;
          const position = history.state ? history.state.__beyond_navigation_position : undefined;
          position === undefined && console.error(this.#ERROR_INVALID_STATE);
          this.#valid = this.#valid && position !== undefined;
          position !== undefined && this.#events.trigger('error');
          return position !== undefined;
        }
        /**
         * Set the position in the history.state
         *
         * @param state {any} The state object before being stored in the history.state. In this method
         * the state object will be updated to store the position
         * @param {number} position
         */


        updateState(state, position) {
          if (typeof state !== 'object') {
            throw new Error('Parameter state must be an object');
          }

          state.__beyond_navigation_position = position === undefined ? history.state.__beyond_navigation_position : position;
        }
        /**
         * Stores in the sessionStorage the position getting its value from the history.state
         */


        updateSessionStorageFromState() {
          if (!this.checkStateIsSet) return;
          const position = history.state ? history.state.__beyond_navigation_position : undefined;
          sessionStorage.setItem('__beyond_navigation_position', position);
        }
        /**
         * Returns the position of the navigation flow from the sessionStorage
         * @returns {string}
         */


        getFromSessionStorage() {
          const position = sessionStorage.getItem('__beyond_navigation_position');
          return typeof position === 'string' ? parseInt(position) : undefined;
        }
        /**
         * Returns the position of the navigation flow from the history.state.
         * It is equivalent to obtaining this same value directly from the .state property,
         * with the difference that the .state property verifies that the value is stored
         * and displays an error if it is not
         * @returns {any}
         */


        getFromState = () => history.state ? history.state.__beyond_navigation_position : undefined;
      }

      exports.HistoryPosition = HistoryPosition;
    }
  });
  /*********************************
  INTERNAL MODULE: ./history/records
  *********************************/

  ims.set('./history/records', {
    hash: 587652707,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HistoryRecords = void 0;

      class HistoryRecords {
        #position;
        #records = [];

        get data() {
          return this.#records.slice();
        }

        get length() {
          return this.#records.length;
        }

        get current() {
          return this.#records[this.#position.value - 1];
        }

        get previous() {
          return this.#records[this.#position.value - 2];
        }

        get following() {
          return this.#records[this.#position.value];
        }

        constructor(position) {
          this.#position = position;

          try {
            let stored = sessionStorage.getItem('__beyond_navigation_records');
            stored = JSON.parse(stored);
            this.#records = stored instanceof Array ? stored : [];
          } catch (exc) {
            console.error('Error loading beyond navigation state', exc instanceof Error ? exc.stack : exc);
            this.#records = [];
          }
        }

        get = index => this.#records[index];
        /**
         * Push a url to the records stored in the sessionStorage
         * @param {string} url
         */

        push(url) {
          this.#records.push(url);
          sessionStorage.setItem('__beyond_navigation_records', JSON.stringify(this.#records));
          const position = this.#records.length.toString();
          sessionStorage.setItem('__beyond_navigation_position', position);
        }
        /**
         * Reset the list of records from the current position
         * This is required when:
         *      1. The list of browsed pages is greater than one (ex: page1 and page2)
         *      2. The user goes back in the history (ex: to position 1: page1)
         *      3. The user navigates another page (ex: page3)
         *
         * In step 3 is required this method, to clean the records from position 1, and after this
         * execution, the navigation flow can push page3
         */


        resetFromPosition() {
          const position = this.#position.getFromSessionStorage();
          position && position < this.#records.length ? this.#records = this.#records.slice(0, position) : null;
        }

        updateCurrentUrl(url) {
          const position = this.#position.getFromSessionStorage();
          this.#records[position - 1] = url;
          sessionStorage.setItem('__beyond_navigation_records', JSON.stringify(this.#records));
        }

      }

      exports.HistoryRecords = HistoryRecords;
    }
  });
  /*********************************************************
  INTERNAL MODULE: ./layouts/abstract-classes/layouts/layout
  *********************************************************/

  ims.set('./layouts/abstract-classes/layouts/layout', {
    hash: 3282346982,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutContainer = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      class LayoutContainer extends _core.Events {
        #layoutManager;

        get container() {
          return this.#layoutManager.container;
        }

        constructor(layoutManager) {
          super();
          this.#layoutManager = layoutManager;
        }

        rendered = () => this.#layoutManager.rendered();
      }

      exports.LayoutContainer = LayoutContainer;
    }
  });
  /*********************************************************
  INTERNAL MODULE: ./layouts/abstract-classes/layouts/legacy
  *********************************************************/

  ims.set('./layouts/abstract-classes/layouts/legacy', {
    hash: 2180641383,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutLegacy = void 0;

      var _layout = require("./layout");
      /**
       * It is required to allow backward compatibility
       * The reason why it exists is because the layout manager creates an instance of the Layout
       * and sets the Layout (LayoutLegacy in fact) as a prototype, and the private
       * properties of Layout doesn't work under this design, the LayoutLegacy solves this issue
       */


      class LayoutLegacy {
        base;
        on = (event, listener) => this.base.on(event, listener);
        off = (event, listener) => this.base.off(event, listener);
        bind = (event, listener) => this.base.bind(event, listener);
        unbind = (event, listener) => this.base.unbind(event, listener);

        constructor(layoutManager) {
          this.base = new _layout.LayoutContainer(layoutManager);
        }

        get container() {
          return this.base.container;
        }

        rendered = () => this.base.rendered();
      }

      exports.LayoutLegacy = LayoutLegacy;
    }
  });
  /*******************************************************
  INTERNAL MODULE: ./layouts/abstract-classes/pages/legacy
  *******************************************************/

  ims.set('./layouts/abstract-classes/pages/legacy', {
    hash: 1713806598,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageLegacy = void 0;

      var _pageContainer = require("./page-container");
      /**
       * It is required to allow backward compatibility
       * The reason why it exists is because the page manager creates an instance of the Page
       * and sets the Page (PageLegacy in fact) as a prototype, and the private
       * properties of Page doesn't work under this design, the PageLegacy solves this issue
       */


      class PageLegacy {
        base;

        constructor(pageManager) {
          this.base = new _pageContainer.PageContainer(pageManager);
        }

        get container() {
          return this.base.container;
        }

        get route() {
          return this.base.route;
        }

        get pathname() {
          return this.base.pathname;
        }

        get vdir() {
          return this.base.vdir;
        }

        get search() {
          return this.base.search;
        }

        get qs() {
          return this.base.qs;
        }

        get querystring() {
          return this.base.qs;
        }

      }

      exports.PageLegacy = PageLegacy;
    }
  });
  /***************************************************************
  INTERNAL MODULE: ./layouts/abstract-classes/pages/page-container
  ***************************************************************/

  ims.set('./layouts/abstract-classes/pages/page-container', {
    hash: 3651745821,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageContainer = void 0;
      /*bundle*/

      class PageContainer {
        #container;

        get container() {
          return this.#container;
        }

        #pageManager;

        get route() {
          return this.#pageManager.uri.route;
        }

        get pathname() {
          return this.#pageManager.uri.pathname;
        }

        get vdir() {
          return this.#pageManager.uri.route.vdir;
        }

        get search() {
          return this.#pageManager.uri.search;
        }

        get qs() {
          return this.#pageManager.uri.qs;
        }

        get querystring() {
          return this.#pageManager.uri.qs;
        }

        constructor(pageManager) {
          this.#pageManager = pageManager;
          const element = document.createElement('div');
          const container = pageManager.pagesContainer instanceof HTMLDivElement ? pageManager.pagesContainer : pageManager.pagesContainer.current;
          container.appendChild(element);
          this.#container = element;
        }

        destroy() {
          this.#container.remove();
        }

      }

      exports.PageContainer = PageContainer;
    }
  });
  /*******************************************************
  INTERNAL MODULE: ./layouts/layout-manager/layout-manager
  *******************************************************/

  ims.set('./layouts/layout-manager/layout-manager', {
    hash: 83947124,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutManager = void 0;

      var _pages = require("./pages/pages");

      var _load = require("./load");

      var _core = require("@beyond-js/kernel/core");

      var _layouts = require("../../config/layouts");

      class LayoutManager extends _layouts.LayoutConfig {
        #pages;

        get pages() {
          return this.#pages;
        }

        #container;

        get container() {
          return this.#container;
        }

        #loader = new _load.LayoutLoader(this);
        load = async () => this.name === 'default' ? null : this.#loader.load();

        get loaded() {
          return this.name === 'default' ? true : this.#loader.loaded;
        }

        get error() {
          return this.name === 'default' ? false : this.#loader.error;
        }

        get layout() {
          return this.name === 'default' ? undefined : this.#loader.layout;
        } // If the layout is the "default", then the container of the pages is directly the
        // layout of the container


        get pagesContainer() {
          return this.name === 'default' ? this.#container : this.#loader.pagesContainer;
        }

        #rendered = new _core.PendingPromise();
        rendered = () => this.#rendered.resolve();

        get ready() {
          return this.name === 'default' ? true : this.#rendered;
        }

        #config = {
          timing: 300,
          css: {
            hiding: 'hiding-layout-container',
            hide: 'hide-layout-container',
            showing: 'showing-layout-container',
            show: 'showed-layout-container'
          }
        };

        constructor(name, routingConfig) {
          super(routingConfig.layouts.has(name) ? routingConfig.layouts.get(name) : undefined);
          if (this.name === 'default') this.rendered();
          this.#pages = new _pages.Pages(this, routingConfig);
          const container = 'body > .layouts-container';
          const element = document.createElement('div');
          this.#container = document.querySelector(container).appendChild(element);
        }

        #cancellationToken = new _core.CancellationToken();

        async show(uri) {
          const cancellationTokenId = this.#cancellationToken.reset();
          await this.load();
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (this.error) return;
          await this.ready;
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          const config = this.#config;
          const container = this.container;
          container.classList.add(config.css.show);
          await new Promise(resolve => setTimeout(resolve, config.timing));
          if (!this.#cancellationToken.check(cancellationTokenId)) return; //TODO: @box check it out.
          //container.classList.contains(config.css.show) && container.classList.remove(config.css.show);

          container.classList.contains(config.css.hide) && container.classList.remove(config.css.hide);
          container.classList.add(config.css.show); // Layout is undefined if the layout is the "default"

          if (this.layout && typeof this.layout.show === 'function') {
            await this.layout.show();
          }

          await this.#pages.show(uri);
        }

        async hide() {
          const cancellationTokenId = this.#cancellationToken.reset();
          await this.load();
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (this.error) return;
          await this.ready;
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          const config = this.#config;
          const container = this.container;
          container.classList.contains(config.css.show) && container.classList.remove(config.css.show);
          container.classList.add(config.css.hide); // Layout is undefined if the layout is the "default"

          if (this.layout && typeof this.layout.hide === 'function') {
            await this.layout.hide();
          }
        }

      }

      exports.LayoutManager = LayoutManager;
    }
  });
  /*********************************************
  INTERNAL MODULE: ./layouts/layout-manager/load
  *********************************************/

  ims.set('./layouts/layout-manager/load', {
    hash: 1006275088,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LayoutLoader = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _layout = require("../abstract-classes/layouts/layout");

      var _legacy = require("../abstract-classes/layouts/legacy");

      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      class LayoutLoader {
        #layoutManager;
        #layout;

        get layout() {
          return this.#layout;
        }

        #pagesContainer;

        get pagesContainer() {
          return this.#pagesContainer;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        get ready() {
          return this.#loaded;
        }

        #error = '';

        get error() {
          return this.#error;
        }

        constructor(layoutManager) {
          this.#layoutManager = layoutManager;
        }

        async load() {
          if (this.#loaded || this.#error) return;
          const {
            bundle
          } = this.#layoutManager;

          const failed = (message, exc) => {
            this.#error = message;
            console.error(this.#error);
            exc && console.error(exc.stack);
          };

          let LayoutImported;

          try {
            LayoutImported = (await _core.beyond.import(bundle)).Layout;
          } catch (exc) {
            return failed(`Error importing layout from bundle "${bundle}"`, exc);
          }

          if (!LayoutImported || typeof LayoutImported !== 'function') {
            return failed(`Layout on bundle "${bundle}" did not return a valid Layout object`);
          }

          try {
            // Required for backward compatibility
            if (!(LayoutImported.prototype instanceof _layout.LayoutContainer)) {
              LayoutImported.prototype = new _legacy.LayoutLegacy(this.#layoutManager);
            }

            this.#layout = new LayoutImported(this.#layoutManager);

            if (typeof this.#layout.render === 'function') {
              await this.#layout.render();
            }

            if (!this.#layout.control || !this.#layout.control.container) {
              return failed(`Error in Layout: the layout must expose a .control.container property`);
            }

            this.#pagesContainer = this.#layout.control.container;
          } catch (exc) {
            return failed(`Error instantiating layout on bundle "${bundle}"`, exc);
          }

          this.#loaded = true;
        }

      }

      exports.LayoutLoader = LayoutLoader;

      __decorate([_core.SingleCall], LayoutLoader.prototype, "load", null);
    }
  });
  /******************************************************************
  INTERNAL MODULE: ./layouts/layout-manager/pages/page-manager/loader
  ******************************************************************/

  ims.set('./layouts/layout-manager/pages/page-manager/loader', {
    hash: 2263322822,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageLoader = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _pageContainer = require("../../../abstract-classes/pages/page-container");

      var _legacy = require("../../../abstract-classes/pages/legacy");

      var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      class PageLoader {
        #pageManager; // The imported module where the Page is exported

        #importedModule; // The instantiated page

        #page;

        get page() {
          return this.#page;
        }

        #loaded = false;

        get loaded() {
          return this.#loaded;
        }

        #error = '';

        get error() {
          return this.#error;
        }

        constructor(pageManager) {
          this.#pageManager = pageManager;
        }

        #pageError = (message, exc) => {
          this.#error = message;
          console.error(this.#error);
          exc && console.error(exc.stack);
        };
        #createPage = async () => {
          const bundle = this.#pageManager.bundle;

          try {
            this.#error = '';
            const PageImported = this.#importedModule.Page;

            if (!PageImported || typeof PageImported !== 'function') {
              return this.#pageError(`Page on bundle "${bundle}" did not return a valid Page object`);
            } // Required for backward compatibility


            if (!(PageImported.prototype instanceof _pageContainer.PageContainer)) {
              PageImported.prototype = new _legacy.PageLegacy(this.#pageManager);
            }

            this.#page = new PageImported(this.#pageManager);

            if (typeof this.#page.render === 'function') {
              await this.#page.render();
            }
          } catch (exc) {
            return this.#pageError(`Error instantiating page on bundle "${bundle}"`, exc);
          }
        };
        #hmrChangedDetected = async () => {
          try {
            this.#page.destroy();
          } catch (exc) {
            console.error(`Error destroying page "${this.#pageManager.bundle}"`);
          }

          await this.#createPage();
        };

        async load() {
          if (this.#loaded || this.#error) return;
          const bundle = this.#pageManager.bundle;

          try {
            this.#importedModule = await _core.beyond.import(bundle);
          } catch (exc) {
            return this.#pageError(`Error importing page from bundle "${bundle}"`, exc);
          }

          await this.#createPage();
          this.#loaded = true; // Function .destroy is required to support HMR

          typeof this.#page.destroy === 'function' && this.#importedModule.hmr.on('change:ts', () => this.#hmrChangedDetected().catch(exc => console.error(exc.stack)));
        }

      }

      exports.PageLoader = PageLoader;

      __decorate([_core.SingleCall], PageLoader.prototype, "load", null);
    }
  });
  /************************************************************************
  INTERNAL MODULE: ./layouts/layout-manager/pages/page-manager/page-manager
  ************************************************************************/

  ims.set('./layouts/layout-manager/pages/page-manager/page-manager', {
    hash: 3741681635,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PageManager = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _loader = require("./loader");

      var _pages = require("../../../../config/pages");

      class PageManager extends _pages.PageConfig {
        #pagesContainer;

        get pagesContainer() {
          return this.#pagesContainer;
        }

        #loader = new _loader.PageLoader(this);
        load = async () => this.#loader.load();
        #uri;

        get uri() {
          return this.#uri;
        }

        get error() {
          return this.#loader.error;
        }

        get page() {
          return this.#loader.page;
        }

        constructor(uri, config, pagesContainer) {
          super(config);
          this.#pagesContainer = pagesContainer;
          this.#uri = uri;
        }

        #cancellationToken = new _core.CancellationToken();

        async show() {
          const cancellationTokenId = this.#cancellationToken.reset();
          await this.#loader.load();
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (this.error) return;
          this.page.container.style.display = '';
          typeof this.page.show === 'function' && (await this.page.show());
        }

        async hide() {
          const cancellationTokenId = this.#cancellationToken.reset();
          await this.#loader.load();
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (this.error) return;
          this.page.container.style.display = 'none';
          typeof this.page.hide === 'function' && (await this.page.hide());
        }

      }

      exports.PageManager = PageManager;
    }
  });
  /****************************************************
  INTERNAL MODULE: ./layouts/layout-manager/pages/pages
  ****************************************************/

  ims.set('./layouts/layout-manager/pages/pages', {
    hash: 4236285936,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Pages = void 0;

      var _pageManager = require("./page-manager/page-manager");

      var _core = require("@beyond-js/kernel/core");

      class Pages {
        #layoutManager;
        #routingConfig;
        #instances = new Map();
        #active;

        get active() {
          return this.#active;
        }

        constructor(layout, routingConfig) {
          this.#layoutManager = layout;
          this.#routingConfig = routingConfig;
        } // Avoid to continue the execution on asynchronous calls, when a newest call's been made


        #cancellationToken = new _core.CancellationToken();

        async show(uri) {
          const currentCancellationToken = this.#cancellationToken.reset();
          if (this.#active && uri.pathname === this.#active.uri.pathname) return;
          const route = uri.route.route;

          if (!route) {
            throw new Error(`Pathname "${uri.pathname}" does not has a page associated to it`);
          }

          let page;

          if (this.#instances.has(uri.pathname)) {
            page = this.#instances.get(uri.pathname);
          } else {
            if (!this.#routingConfig.pages.has(route)) throw Error(`Route "${route}" not found`);
            const pageConfig = this.#routingConfig.pages.get(route);
            page = new _pageManager.PageManager(uri, pageConfig, this.#layoutManager.pagesContainer);
            this.#instances.set(uri.pathname, page);
          }

          if (this.#active) {
            const previous = this.#active;
            await previous.hide().catch(exc => console.error(`Error hiding page "${uri.pathname}"`, exc.stack));
            if (!this.#cancellationToken.check(currentCancellationToken)) return;
          }

          this.#active = page;
          page.show().catch(exc => console.error(`Error showing page "${uri.pathname}"`, exc.stack));
        }

        hide = async () => this.#active && (await this.#active.hide());
      }

      exports.Pages = Pages;
    }
  });
  /*********************************
  INTERNAL MODULE: ./layouts/layouts
  *********************************/

  ims.set('./layouts/layouts', {
    hash: 947279297,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Layouts = void 0;

      var _layoutManager = require("./layout-manager/layout-manager");

      var _core = require("@beyond-js/kernel/core");

      class Layouts {
        #config;
        #instances = new Map();
        #active;

        get active() {
          return this.#active;
        }

        constructor(config) {
          this.#config = config;
        } // Avoid to continue the execution on asynchronous calls, when a newest call's been made


        #cancellationToken = new _core.CancellationToken(); // Navigate the uri once the active layout is set

        #navigate = uri => {
          this.#active.show(uri).catch(exc => console.error(`Error showing layout "${this.#active.name}"`, exc.stack));
        }; // Navigates a uri setting the active layout first

        async navigate(uri) {
          const currentCancellationToken = this.#cancellationToken.reset();
          const route = uri.route.route;

          if (!route) {
            throw new Error(`Pathname "${uri.pathname}" does not has a page associated to it`);
          }

          if (!this.#config.pages.has(route)) {
            throw Error(`Route "${route}" not found`);
          }

          const pageConfig = this.#config.pages.get(route);
          const layoutName = pageConfig.layout ? pageConfig.layout : 'default';

          if (layoutName !== 'default' && !this.#config.layouts.has(layoutName)) {
            console.error(`The layout "${layoutName}" required by route "${route}" ` + `in the bundle "${pageConfig.bundle}" was not found`);
            return;
          }

          if (this.#active && layoutName === this.#active.name) {
            this.#navigate(uri);
            return;
          }

          let layout;

          if (this.#instances.has(layoutName)) {
            layout = this.#instances.get(layoutName);
          } else {
            layout = new _layoutManager.LayoutManager(layoutName, this.#config);
            this.#instances.set(layoutName, layout);
          }

          if (this.#active) {
            const previous = this.#active;
            await previous.hide().catch(exc => console.error(`Error hiding layout "${layoutName}"`, exc.stack));
            if (!this.#cancellationToken.check(currentCancellationToken)) return;
          }

          this.#active = layout;
          this.#navigate(uri);
        }

      }

      exports.Layouts = Layouts;
    }
  });
  /*************************
  INTERNAL MODULE: ./routing
  *************************/

  ims.set('./routing', {
    hash: 1069894500,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.routing = exports.RoutingMode = exports.Routing = void 0;

      var _uri = require("./uri/uri");

      var _layouts = require("./layouts/layouts");

      var _config = require("./config/config");

      var _core = require("@beyond-js/kernel/core");

      var _history = require("./history/history");

      var RoutingMode;
      exports.RoutingMode = RoutingMode;

      (function (RoutingMode) {
        RoutingMode[RoutingMode["Hash"] = 0] = "Hash";
        RoutingMode[RoutingMode["Pathname"] = 1] = "Pathname";
      })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));

      class Routing {
        #events = new _core.Events();
        #valid = true;

        get valid() {
          return this.#valid;
        }

        #mode;

        get mode() {
          return this.#mode;
        }

        #config = new _config.RoutingConfig();

        get config() {
          return this.#config;
        }

        #layouts = new _layouts.Layouts(this.#config);
        #uri;

        get uri() {
          return this.#uri;
        }

        missing;
        redirect;
        #history = new _history.BeyondHistory(this.#events);

        get history() {
          return this.#history;
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        setup(routingMode) {
          if (this.#initialised) {
            throw new Error('Routing setUp method can only be called once');
          }

          if (location.protocol === 'file:' && routingMode === RoutingMode.Pathname) {
            routingMode = RoutingMode.Hash;
            console.warn('Routing mode was set as "pathname" but it was changed to ' + '"hash" because the protocol used is "file:"');
          }

          if (![0, 1].includes(routingMode)) {
            console.warn(`Routing mode ${routingMode} is invalid`);
            routingMode = location.protocol === 'file:' ? RoutingMode.Hash : RoutingMode.Pathname;
          }

          this.#mode = routingMode;
          this.#initialised = true;
          this.update().catch(exc => console.error(exc.stack));
        }

        #redirect = async uri => {
          if (typeof this.redirect !== 'function') return;
          const redirected = await this.redirect(uri);
          if (!redirected) return;

          if (typeof redirected !== 'string') {
            console.error(`Invalid route value set by custom routing function`, redirected);
            return;
          }

          if (uri.pathname === redirected) return; // Routing function returned the actual route

          this.pushState(redirected);
          return true;
        };

        pushState(url, state) {
          this.#history.pushState(url, state);
          this.update().catch(exc => console.error(exc.stack));
        }

        replaceState(state, title, url) {
          this.#history.replaceState(state, title, url);
          this.update().catch(exc => console.error(exc.stack));
        } // Avoid to continue the execution on asynchronous calls, when a newest call's been made


        #cancellationToken = new _core.CancellationToken();
        update = async () => {
          if (!this.#initialised) return;
          const cancellationTokenId = this.#cancellationToken.reset();
          if (this.#uri && this.#uri.href === location.href) return;
          const uri = new _uri.URI(location.href);
          this.#uri = uri;
          const redirected = await this.#redirect(uri);
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          if (redirected) return; // The page was redirected to another url

          await uri.initialise(); // Parse the uri and check the missing function if the route is not found

          if (!this.#cancellationToken.check(cancellationTokenId)) return; // Verify the state of the history registry to check for possible errors

          if (uri.url !== this.#history.current) {
            console.error(`History current ${this.#history.current} is not equal to actual url "${uri.url}"`);
            this.#valid = false;
            this.#events.trigger('error');
            return;
          }

          this.#layouts.navigate(uri).catch(exc => console.error(exc instanceof Error ? exc.stack : exc));
        };
        back = () => window.history.length ? window.history.back() : this.pushState('/');
      }

      exports.Routing = Routing;
      /*bundle*/

      const routing = new Routing();
      exports.routing = routing;
      window.routing = routing;

      beyond.navigate = (url, state) => routing.pushState(url, state);

      beyond.pushState = (url, state) => routing.pushState(url, state);

      beyond.back = () => routing.back();

      window.addEventListener('popstate', () => routing.update().catch(exc => console.error(exc.stack)));
    }
  });
  /*********************************
  INTERNAL MODULE: ./uri/querystring
  *********************************/

  ims.set('./uri/querystring', {
    hash: 341598707,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.QueryString = void 0;

      class QueryString extends Map {
        constructor(search) {
          super();
          if (search.trim() === '') return;
          search = search.substr(0, 1) === '?' ? search.substr(1) : search;
          const split = search.split('&');

          for (let i = 0; i < split.length; ++i) {
            const param = split[i].split('=', 2);
            const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, ' ')) : undefined;
            this.set(param[0], value);
          }
        }

      }

      exports.QueryString = QueryString;
    }
  });
  /***************************
  INTERNAL MODULE: ./uri/route
  ***************************/

  ims.set('./uri/route', {
    hash: 1632476785,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Route = void 0;

      class Route {
        #uri;
        #route;

        get route() {
          return this.#route;
        }

        #bundle;

        get bundle() {
          return this.#bundle;
        }

        #vdir;

        get vdir() {
          return this.#vdir;
        }

        #initialised = false;

        get initialised() {
          return this.#initialised;
        }

        constructor(uri) {
          this.#uri = uri;
        }

        async initialise() {
          if (this.#initialised) return;
          this.#initialised = true;
          const {
            pathname
          } = this.#uri;

          const {
            routing
          } = require('../routing');

          if (routing.config.pages.has(pathname)) {
            this.#route = pathname;
            this.#vdir = undefined;
            this.#bundle = routing.config.pages.get(pathname).bundle;
            return;
          }

          let split = pathname.split('/');
          let vdir = [];
          let dir;

          while (dir = split.pop()) {
            vdir.unshift(dir);
            let route = split.join('/');
            route = route ? route : '/';

            if (routing.config.pages.has(route)) {
              const config = routing.config.pages.get(route);
              if (vdir.length && !config.vdir) continue; // The page does not support vdir

              this.#route = route;
              this.#vdir = vdir.join('/');
              this.#bundle = config.bundle;
              return;
            }
          }

          if (typeof routing.missing !== 'function') return;
          const bundle = await routing.missing(this.#uri);
          if (!bundle) return;

          if (typeof bundle !== 'string') {
            console.error(`Invalid bundle value set by custom missing function`, bundle);
            return;
          }

          this.#route = this.#uri.pathname;
          this.#bundle = bundle;
        }

      }

      exports.Route = Route;
    }
  });
  /*************************
  INTERNAL MODULE: ./uri/uri
  *************************/

  ims.set('./uri/uri', {
    hash: 2888599651,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.URI = void 0;

      var _route = require("./route");

      var _querystring = require("./querystring");
      /**
       * Uri parser
       *
       * @param href {string} The href to be parsed
       * @constructor
       */


      class URI {
        #parser = document.createElement('a');
        #route;

        get route() {
          return this.#route;
        }

        #url;

        get url() {
          return this.#url;
        }

        #pathname;

        get pathname() {
          return this.#pathname;
        }

        get protocol() {
          return this.#parser.protocol;
        }

        get hostname() {
          return this.#parser.hostname;
        }

        get origin() {
          return this.#parser.origin;
        }

        get port() {
          return this.#parser.port;
        }

        get host() {
          return this.#parser.host;
        }

        get href() {
          return this.#parser.href;
        }

        get search() {
          return this.#parser.search;
        }

        #qs;

        get qs() {
          return this.#qs;
        }

        constructor(href) {
          const {
            routing,
            RoutingMode
          } = require('../routing');

          const parser = this.#parser;
          parser.href = href;
          let url = parser.protocol === 'file:' ? href.substr(parser.pathname.length + 7) : // file:// -> 7 chars
          href.substr(parser.origin.length);
          url = url.startsWith('#') ? `/${url.substr(1)}` : url;
          url = url.startsWith('/#') ? `/${url.substr(2)}` : url;
          this.#url = !url ? '/' : url;
          const hash = parser.hash.startsWith('#') ? parser.hash.substr(1) : '';
          this.#pathname = routing.mode === RoutingMode.Hash ? `/${hash}` : parser.pathname;
          this.#qs = new _querystring.QueryString(parser.search);
          this.#route = new _route.Route(this);
        }

        initialise = () => this.#route.initialise();
      }

      exports.URI = URI;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./layouts/abstract-classes/layouts/layout",
    "from": "IContainerControl",
    "name": "IContainerControl"
  }, {
    "im": "./layouts/abstract-classes/layouts/layout",
    "from": "LayoutContainer",
    "name": "LayoutContainer"
  }, {
    "im": "./layouts/abstract-classes/pages/page-container",
    "from": "PageContainer",
    "name": "PageContainer"
  }, {
    "im": "./routing",
    "from": "routing",
    "name": "routing"
  }];
  let IContainerControl, LayoutContainer, PageContainer, routing; // Module exports

  _exports.routing = routing;
  _exports.PageContainer = PageContainer;
  _exports.LayoutContainer = LayoutContainer;
  _exports.IContainerControl = IContainerControl;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'IContainerControl') && (_exports.IContainerControl = IContainerControl = require ? require('./layouts/abstract-classes/layouts/layout').IContainerControl : value);
    (require || prop === 'LayoutContainer') && (_exports.LayoutContainer = LayoutContainer = require ? require('./layouts/abstract-classes/layouts/layout').LayoutContainer : value);
    (require || prop === 'PageContainer') && (_exports.PageContainer = PageContainer = require ? require('./layouts/abstract-classes/pages/page-container').PageContainer : value);
    (require || prop === 'routing') && (_exports.routing = routing = require ? require('./routing').routing : value);
  };

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW5nQ29uZmlnIiwiTGF5b3V0c0NvbmZpZyIsImxheW91dHMiLCJQYWdlc0NvbmZpZyIsInBhZ2VzIiwiTGF5b3V0Q29uZmlnIiwibmFtZSIsImJ1bmRsZSIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJnZXQiLCJoYXMiLCJoYXNPd25Qcm9wZXJ0eSIsIlBhZ2VDb25maWciLCJyb3V0ZSIsInZkaXIiLCJwYWdlIiwiQmV5b25kSGlzdG9yeSIsImhpc3RvcnkiLCJsZW5ndGgiLCJpbml0aWFsIiwicmVjb3JkcyIsImRhdGEiLCJwb3NpdGlvbiIsInZhbHVlIiwiY3VycmVudCIsInByZXZpb3VzIiwiZm9sbG93aW5nIiwidXJsIiwic3RhdGUiLCJFcnJvciIsInJlc2V0RnJvbVBvc2l0aW9uIiwicHVzaCIsInVwZGF0ZVN0YXRlIiwicm91dGluZyIsInJlcXVpcmUiLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsInN0YXJ0c1dpdGgiLCJtb2RlIiwiSGFzaCIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwiY2hlY2tTdGF0ZUlzU2V0IiwidXBkYXRlQ3VycmVudFVybCIsInB1c2hTdGF0ZSIsImV2ZW50cyIsIkhpc3RvcnlQb3NpdGlvbiIsIkhpc3RvcnlSZWNvcmRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVNlc3Npb25TdG9yYWdlRnJvbVN0YXRlIiwiZ2V0RnJvbVNlc3Npb25TdG9yYWdlIiwiZ2V0RnJvbVN0YXRlIiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhyZWYiLCJzdWJzdHIiLCJwYXRobmFtZSIsIm9yaWdpbiIsInZhbGlkIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsInRyaWdnZXIiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzbGljZSIsInN0b3JlZCIsIkpTT04iLCJwYXJzZSIsIkFycmF5IiwiZXhjIiwic3RhY2siLCJpbmRleCIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwiTGF5b3V0Q29udGFpbmVyIiwiRXZlbnRzIiwiY29udGFpbmVyIiwibGF5b3V0TWFuYWdlciIsInJlbmRlcmVkIiwiTGF5b3V0TGVnYWN5IiwiYmFzZSIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImJpbmQiLCJ1bmJpbmQiLCJQYWdlTGVnYWN5IiwicGFnZU1hbmFnZXIiLCJQYWdlQ29udGFpbmVyIiwic2VhcmNoIiwicXMiLCJxdWVyeXN0cmluZyIsInVyaSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYWdlc0NvbnRhaW5lciIsIkhUTUxEaXZFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJkZXN0cm95IiwicmVtb3ZlIiwiTGF5b3V0TWFuYWdlciIsIkxheW91dExvYWRlciIsImxvYWQiLCJsb2FkZWQiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsInRpbWluZyIsImNzcyIsImhpZGluZyIsImhpZGUiLCJzaG93aW5nIiwic2hvdyIsInJvdXRpbmdDb25maWciLCJQYWdlcyIsInF1ZXJ5U2VsZWN0b3IiLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJyZXNldCIsImNoZWNrIiwiY2xhc3NMaXN0IiwiYWRkIiwiUHJvbWlzZSIsInNldFRpbWVvdXQiLCJjb250YWlucyIsImZhaWxlZCIsIm1lc3NhZ2UiLCJMYXlvdXRJbXBvcnRlZCIsImJleW9uZCIsImltcG9ydCIsIkxheW91dCIsInByb3RvdHlwZSIsInJlbmRlciIsImNvbnRyb2wiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsIlBhZ2VMb2FkZXIiLCJQYWdlSW1wb3J0ZWQiLCJQYWdlIiwiaG1yIiwiY2F0Y2giLCJQYWdlTWFuYWdlciIsInN0eWxlIiwiZGlzcGxheSIsIk1hcCIsImFjdGl2ZSIsImN1cnJlbnRDYW5jZWxsYXRpb25Ub2tlbiIsInBhZ2VDb25maWciLCJzZXQiLCJMYXlvdXRzIiwibmF2aWdhdGUiLCJsYXlvdXROYW1lIiwiUm91dGluZyIsIm1pc3NpbmciLCJyZWRpcmVjdCIsImluaXRpYWxpc2VkIiwic2V0dXAiLCJyb3V0aW5nTW9kZSIsIlBhdGhuYW1lIiwid2FybiIsImluY2x1ZGVzIiwidXBkYXRlIiwicmVkaXJlY3RlZCIsIlVSSSIsImluaXRpYWxpc2UiLCJiYWNrIiwiUXVlcnlTdHJpbmciLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiUm91dGUiLCJkaXIiLCJwb3AiLCJ1bnNoaWZ0Iiwiam9pbiIsImhvc3RuYW1lIiwicG9ydCIsImhvc3QiLCJwYXJzZXIiLCJoYXNoIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb25maWcudHMiLCJsYXlvdXRzLnRzIiwicGFnZXMudHMiLCJoaXN0b3J5LnRzIiwicG9zaXRpb24udHMiLCJyZWNvcmRzLnRzIiwibGF5b3V0LnRzIiwibGVnYWN5LnRzIiwicGFnZS1jb250YWluZXIudHMiLCJsYXlvdXQtbWFuYWdlci50cyIsImxvYWQudHMiLCJsb2FkZXIudHMiLCJwYWdlLW1hbmFnZXIudHMiLCJyb3V0aW5nLnRzIiwicXVlcnlzdHJpbmcudHMiLCJyb3V0ZS50cyIsInVyaS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19