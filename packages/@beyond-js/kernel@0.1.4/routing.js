define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "@beyond-js/kernel@0.1.4/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.routing = _exports.PageContainer = _exports.LayoutContainer = _exports.IContainerControl = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.4/routing"
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
          window.addEventListener('popstate', () => this.#position.updateSessionStorageFromState());
          // When the position in the sessionStorage is not set, it is the first navigation on the tab
          // When the history.state position is not set, it is when the user refreshes the page
          if (!this.#position.getFromSessionStorage() || !this.#position.getFromState()) {
            let url = location.protocol === 'file:' ? location.href.substr(location.pathname.length + 7) :
            // file:// -> 7 chars
            location.href.substr(location.origin.length);
            url = !url ? '/' : url;
            // First page navigation on start up
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
        }
        // If the layout is the "default", then the container of the pages is directly the
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
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          //TODO: @box check it out.
          //container.classList.contains(config.css.show) && container.classList.remove(config.css.show);
          container.classList.contains(config.css.hide) && container.classList.remove(config.css.hide);
          container.classList.add(config.css.show);
          // Layout is undefined if the layout is the "default"
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
          container.classList.add(config.css.hide);
          // Layout is undefined if the layout is the "default"
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
        #pageManager;
        // The imported module where the Page is exported
        #importedModule;
        // The instantiated page
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
            }
            // Required for backward compatibility
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
          this.#loaded = true;
          // Function .destroy is required to support HMR
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
        }
        // Avoid to continue the execution on asynchronous calls, when a newest call's been made
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
        }
        // Avoid to continue the execution on asynchronous calls, when a newest call's been made
        #cancellationToken = new _core.CancellationToken();
        // Navigate the uri once the active layout is set
        #navigate = uri => {
          this.#active.show(uri).catch(exc => console.error(`Error showing layout "${this.#active.name}"`, exc.stack));
        };
        // Navigates a uri setting the active layout first
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
        }
        // Avoid to continue the execution on asynchronous calls, when a newest call's been made
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
          if (!this.#cancellationToken.check(cancellationTokenId)) return;
          // Verify the state of the history registry to check for possible errors
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
          let url = parser.protocol === 'file:' ? href.substr(parser.pathname.length + 7) :
          // file:// -> 7 chars
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
  let IContainerControl, LayoutContainer, PageContainer, routing;

  // Module exports
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7VUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDQSxHQUFHLEdBQUcsR0FBRyxHQUFHQSxHQUFHO1VBRTVCLE1BQU1rSyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDeEosVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHdUosTUFBTSxDQUFDQyxJQUFJLENBQUNySSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtVQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHdkIsT0FBTyxDQUFDSyxJQUFJLEtBQUtGLFdBQVcsQ0FBQ0csSUFBSSxHQUFHLElBQUlzSixJQUFJLEVBQUUsR0FBR0QsTUFBTSxDQUFDbkksUUFBUTtVQUNqRixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUlvSCx3QkFBVyxDQUFDZSxNQUFNLENBQUM3RixNQUFNLENBQUM7VUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJcUYsWUFBSyxDQUFDLElBQUksQ0FBQztRQUNqQztRQUVBVCxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDQSxVQUFVLEVBQUU7O01BQzlDMUsiLCJuYW1lcyI6WyJSb3V0aW5nQ29uZmlnIiwiTGF5b3V0c0NvbmZpZyIsImxheW91dHMiLCJQYWdlc0NvbmZpZyIsInBhZ2VzIiwiZXhwb3J0cyIsIkxheW91dENvbmZpZyIsIm5hbWUiLCJidW5kbGUiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsInJlZ2lzdGVyIiwibGF5b3V0IiwiZ2V0IiwiaGFzIiwiaGFzT3duUHJvcGVydHkiLCJQYWdlQ29uZmlnIiwicm91dGUiLCJ2ZGlyIiwicGFnZSIsIkJleW9uZEhpc3RvcnkiLCJoaXN0b3J5IiwibGVuZ3RoIiwiaW5pdGlhbCIsInJlY29yZHMiLCJkYXRhIiwicG9zaXRpb24iLCJ2YWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsImZvbGxvd2luZyIsInVybCIsInN0YXRlIiwiRXJyb3IiLCJyZXNldEZyb21Qb3NpdGlvbiIsInB1c2giLCJ1cGRhdGVTdGF0ZSIsInJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGluZ01vZGVFbnVtIiwiUm91dGluZ01vZGUiLCJzdGFydHNXaXRoIiwibW9kZSIsIkhhc2giLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsImNoZWNrU3RhdGVJc1NldCIsInVwZGF0ZUN1cnJlbnRVcmwiLCJwdXNoU3RhdGUiLCJldmVudHMiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVTZXNzaW9uU3RvcmFnZUZyb21TdGF0ZSIsImdldEZyb21TZXNzaW9uU3RvcmFnZSIsImdldEZyb21TdGF0ZSIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJocmVmIiwic3Vic3RyIiwicGF0aG5hbWUiLCJvcmlnaW4iLCJ2YWxpZCIsIl9fYmV5b25kX25hdmlnYXRpb25fcG9zaXRpb24iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJ0cmlnZ2VyIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2xpY2UiLCJzdG9yZWQiLCJKU09OIiwicGFyc2UiLCJBcnJheSIsImV4YyIsInN0YWNrIiwiaW5kZXgiLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsIkxheW91dENvbnRhaW5lciIsIkV2ZW50cyIsImNvbnRhaW5lciIsImxheW91dE1hbmFnZXIiLCJyZW5kZXJlZCIsIkxheW91dExlZ2FjeSIsImJhc2UiLCJvbiIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJiaW5kIiwidW5iaW5kIiwiUGFnZUxlZ2FjeSIsInBhZ2VNYW5hZ2VyIiwiUGFnZUNvbnRhaW5lciIsInNlYXJjaCIsInFzIiwicXVlcnlzdHJpbmciLCJ1cmkiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFnZXNDb250YWluZXIiLCJIVE1MRGl2RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZGVzdHJveSIsInJlbW92ZSIsIkxheW91dE1hbmFnZXIiLCJMYXlvdXRMb2FkZXIiLCJsb2FkIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJ0aW1pbmciLCJjc3MiLCJoaWRpbmciLCJoaWRlIiwic2hvd2luZyIsInNob3ciLCJyb3V0aW5nQ29uZmlnIiwiUGFnZXMiLCJxdWVyeVNlbGVjdG9yIiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJjYW5jZWxsYXRpb25Ub2tlbklkIiwicmVzZXQiLCJjaGVjayIsImNsYXNzTGlzdCIsImFkZCIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwiY29udGFpbnMiLCJmYWlsZWQiLCJtZXNzYWdlIiwiTGF5b3V0SW1wb3J0ZWQiLCJiZXlvbmQiLCJpbXBvcnQiLCJMYXlvdXQiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJjb250cm9sIiwiX19kZWNvcmF0ZSIsIlNpbmdsZUNhbGwiLCJQYWdlTG9hZGVyIiwiUGFnZUltcG9ydGVkIiwiUGFnZSIsImhtciIsImNhdGNoIiwiUGFnZU1hbmFnZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJNYXAiLCJhY3RpdmUiLCJjdXJyZW50Q2FuY2VsbGF0aW9uVG9rZW4iLCJwYWdlQ29uZmlnIiwic2V0IiwiTGF5b3V0cyIsIm5hdmlnYXRlIiwibGF5b3V0TmFtZSIsIlJvdXRpbmciLCJtaXNzaW5nIiwicmVkaXJlY3QiLCJpbml0aWFsaXNlZCIsInNldHVwIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsIndhcm4iLCJpbmNsdWRlcyIsInVwZGF0ZSIsInJlZGlyZWN0ZWQiLCJVUkkiLCJpbml0aWFsaXNlIiwiYmFjayIsIlF1ZXJ5U3RyaW5nIiwidHJpbSIsInNwbGl0IiwiaSIsInBhcmFtIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIlJvdXRlIiwiZGlyIiwicG9wIiwidW5zaGlmdCIsImpvaW4iLCJob3N0bmFtZSIsInBvcnQiLCJob3N0IiwicGFyc2VyIiwiaGFzaCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy50cyIsImNvbmZpZy9sYXlvdXRzLnRzIiwiY29uZmlnL3BhZ2VzLnRzIiwiaGlzdG9yeS9oaXN0b3J5LnRzIiwiaGlzdG9yeS9wb3NpdGlvbi50cyIsImhpc3RvcnkvcmVjb3Jkcy50cyIsImxheW91dHMvYWJzdHJhY3QtY2xhc3Nlcy9sYXlvdXRzL2xheW91dC50cyIsImxheW91dHMvYWJzdHJhY3QtY2xhc3Nlcy9sYXlvdXRzL2xlZ2FjeS50cyIsImxheW91dHMvYWJzdHJhY3QtY2xhc3Nlcy9wYWdlcy9sZWdhY3kudHMiLCJsYXlvdXRzL2Fic3RyYWN0LWNsYXNzZXMvcGFnZXMvcGFnZS1jb250YWluZXIudHMiLCJsYXlvdXRzL2xheW91dC1tYW5hZ2VyL2xheW91dC1tYW5hZ2VyLnRzIiwibGF5b3V0cy9sYXlvdXQtbWFuYWdlci9sb2FkLnRzIiwibGF5b3V0cy9sYXlvdXQtbWFuYWdlci9wYWdlcy9wYWdlLW1hbmFnZXIvbG9hZGVyLnRzIiwibGF5b3V0cy9sYXlvdXQtbWFuYWdlci9wYWdlcy9wYWdlLW1hbmFnZXIvcGFnZS1tYW5hZ2VyLnRzIiwibGF5b3V0cy9sYXlvdXQtbWFuYWdlci9wYWdlcy9wYWdlcy50cyIsImxheW91dHMvbGF5b3V0cy50cyIsInJvdXRpbmcudHMiLCJ1cmkvcXVlcnlzdHJpbmcudHMiLCJ1cmkvcm91dGUudHMiLCJ1cmkvdXJpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=