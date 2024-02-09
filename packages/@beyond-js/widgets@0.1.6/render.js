define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.widgets = _exports.prerender = _exports.hmr = _exports.attributes = _exports.__beyond_pkg = _exports.WidgetCSR = _exports.StylesManager = _exports.NodeWidget = _exports.IWidgetSpecs = _exports.IBeyondWidgetController = _exports.GlobalCSS = _exports.BeyondWidget = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.6/render"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /************************
  INTERNAL MODULE: ./anchor
  ************************/

  ims.set('./anchor', {
    hash: 1014568902,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      typeof process !== 'object' && customElements.define('beyond-link', class extends HTMLElement {
        #routing;
        constructor() {
          super();
          bimport('@beyond-js/kernel/routing').then(({
            routing
          }) => this.#routing = routing);
        }
        connectedCallback() {
          this.addEventListener('click', () => {
            if (!this.hasAttribute('data-url')) return;
            const url = this.getAttribute('data-url');
            this.#routing?.pushState(url);
          });
        }
      });
    }
  });

  /****************************
  INTERNAL MODULE: ./attributes
  ****************************/

  ims.set('./attributes', {
    hash: 1262494723,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.attributes = exports.Attributes = void 0;
      var _core = require("@beyond-js/kernel/core");
      class Attributes extends _core.Events {
        #values = new Map();
        get values() {
          return this.#values;
        }
        add(name, value) {
          this.#values.set(name, value);
          this.trigger('add', name, value);
          this.trigger('change');
        }
        remove(name) {
          this.#values.delete(name);
          this.trigger('remove', name);
          this.trigger('change');
        }
      }
      exports.Attributes = Attributes;
      /*bundle*/
      const attributes = exports.attributes = new Attributes();
    }
  });

  /*********************************
  INTERNAL MODULE: ./instances/index
  *********************************/

  ims.set('./instances/index', {
    hash: 2022060609,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.instances = void 0;
      var _node = require("./node");
      // Maintains a tree of widget instances
      // NodeWidget is an object with a tree structure (parent, children)
      const instances = exports.instances = new class extends Set {
        register(widget) {
          this.add(widget);
          // Find parent widget
          const parent = (() => {
            let parent = widget;
            while (true) {
              const root = parent.getRootNode();
              if (root === document) return;
              parent = root.host;
              if (this.has(parent)) return parent;
            }
          })();
          const node = new _node.NodeWidget(widget, parent);
          parent?.wnode.children.add(widget);
          this.add(widget);
          return node;
        }
      }();
    }
  });

  /********************************
  INTERNAL MODULE: ./instances/node
  ********************************/

  ims.set('./instances/node', {
    hash: 3167083658,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NodeWidget = void 0;
      /*bundle*/
      class NodeWidget {
        #widget;
        get widget() {
          return this.#widget;
        }
        #parent;
        get parent() {
          return this.#parent;
        }
        #children = new Set();
        get children() {
          return this.#children;
        }
        constructor(widget, parent) {
          this.#widget = widget;
          this.#parent = parent;
        }
      }
      exports.NodeWidget = NodeWidget;
    }
  });

  /***********************************
  INTERNAL MODULE: ./prerendered/index
  ***********************************/

  ims.set('./prerendered/index', {
    hash: 483738484,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.prerender = void 0;
      /*bundle*/
      const prerender = exports.prerender = new class {
        #ssr = [];
        get ssr() {
          return this.#ssr;
        }
        find(element, attrs) {
          return this.#ssr.find(item => {
            if (item.element !== element) return false;
            const iattrs = new Map(item.attributes);
            return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
          });
        }
      }();
    }
  });

  /***********************************
  INTERNAL MODULE: ./widget/attributes
  ***********************************/

  ims.set('./widget/attributes', {
    hash: 1029410984,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetGlobalAttributes = void 0;
      var _attributes = require("../attributes");
      /**
       * The global attributes specified in widgets.attributes that apply to all the widgets in the application
       */
      class WidgetGlobalAttributes {
        #holder;
        get holder() {
          return this.#holder;
        }
        #set = (name, value) => {
          this.#holder.setAttribute(name, value);
        };
        #remove = name => {
          this.#holder.removeAttribute(name);
        };
        initialise(holder) {
          this.#holder = holder;
          _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
          _attributes.attributes.on('add', this.#set);
          _attributes.attributes.on('remove', this.#remove);
        }
        destroy() {
          _attributes.attributes.off('add', this.#set);
          _attributes.attributes.off('remove', this.#remove);
        }
      }
      exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
    }
  });

  /*********************************
  INTERNAL MODULE: ./widget/checksum
  *********************************/

  ims.set('./widget/checksum', {
    hash: 1702419318,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;
      function _default(s) {
        let hash = 0,
          i,
          c;
        const length = s.length;
        if (length === 0) {
          return hash;
        }
        for (i = 0; i < length; i++) {
          c = s.charCodeAt(i);
          hash = (hash << 5) - hash + c;
          hash = hash & hash; // Convert to 32bit integer
        }
        return hash.toString().replace('-', 'n');
      }
      ;
    }
  });

  /****************************
  INTERNAL MODULE: ./widget/csr
  ****************************/

  ims.set('./widget/csr', {
    hash: 1023760945,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetCSR = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class WidgetCSR extends _core.Events {
        #widget;
        #bundle;
        get bundle() {
          return this.#bundle;
        }
        #controller;
        get controller() {
          return this.#controller;
        }
        #error;
        get error() {
          return this.#error;
        }
        #loading = false;
        get loading() {
          return this.#loading;
        }
        #loaded = false;
        get loaded() {
          return this.#loaded;
        }
        #holders = new Set(['initialised', 'loaded']);
        initialise() {
          // Check if CSR is enabled (default) for this widget
          if (!this.#widget.specs.render.csr) return;
          if (!this.#holders.has('initialised')) throw new Error('Widget CSR already initialised');
          this.#holders.delete('initialised');
          this.#render();
        }
        constructor(widget) {
          super();
          const {
            specifier,
            specs
          } = this.#widget = widget;
          // Check if CSR is enabled (default) for this widget
          if (!specs.render.csr) return;
          bimport(specifier).then(bundle => {
            this.#bundle = bundle;
            this.#loading = false;
            this.#loaded = true;
            this.#holders.delete('loaded');
            this.#render();
          }).catch(exc => {
            console.error(`Error loading widget "${specifier}"`, exc.stack);
            this.#error = exc.message;
            this.#loading = false;
          });
        }
        #render = () => {
          // Render the widget once the connectedCallback is called and the bundle was imported
          if (this.#holders.size) return;
          const {
            Controller
          } = this.#bundle;
          if (!Controller || typeof Controller !== 'function') {
            const message = `Widget "${this.#widget.localName}" does not export its Controller`;
            console.error(message);
            this.#error = message;
            return;
          }
          this.#controller = new Controller(this.#widget);
          this.#controller.initialise().then(() => this.trigger('controller.initialised')).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
        };
        disconnect() {
          this.#controller?.disconnect?.();
        }
        attributeChanged(name, old, value) {
          this.#controller?.attributeChanged(name, old, value);
        }
      }
      exports.WidgetCSR = WidgetCSR;
    }
  });

  /******************************
  INTERNAL MODULE: ./widget/index
  ******************************/

  ims.set('./widget/index', {
    hash: 2614430817,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondWidget = void 0;
      var _instances = require("../instances");
      var _sr = require("./sr");
      var _csr = require("./csr");
      var _ssr = require("./ssr");
      var _attributes = require("./attributes");
      var _styles = require("./styles");
      // In SSR environment HTMLElement is not defined
      const Element = typeof HTMLElement === 'undefined' ? null : HTMLElement;
      /*bundle*/
      class BeyondWidget extends Element {
        #specs;
        get specs() {
          return this.#specs;
        }
        get name() {
          return this.#specs.name;
        }
        get vspecifier() {
          return this.#specs.vspecifier;
        }
        #specifier;
        get specifier() {
          return this.#specifier;
        }
        get host() {
          return `${location.origin}/`;
        }
        get is() {
          return this.#specs.is;
        }
        get route() {
          return this.#specs.route;
        }
        get layout() {
          return this.#specs.layout;
        }
        #holder;
        get holder() {
          return this.#holder;
        }
        #sr;
        get sr() {
          return this.#sr;
        }
        #csr;
        get csr() {
          return this.#csr;
        }
        get controller() {
          return this.#csr.controller;
        }
        #ssr;
        get ssr() {
          return this.#ssr;
        }
        #attributes;
        #styles;
        get styles() {
          return this.#styles;
        }
        // To identify where the widget is in the widgets tree
        #wnode;
        get wnode() {
          return this.#wnode;
        }
        get wparent() {
          return this.#wnode.parent;
        }
        get wchildren() {
          return [...this.#wnode.children];
        }
        /**
         * Actually required by routing to call the .show & .hide methods once the controller is initialised
         */
        #oncontroller = () => {
          const event = new CustomEvent('controller.initialised', {
            bubbles: false,
            composed: false
          });
          this.dispatchEvent(event);
        };
        constructor(specs) {
          super();
          this.#specs = specs;
          this.attachShadow({
            mode: 'open'
          });
          /**
           * Extract the version to the vspecifier
           * @type {string}
           */
          this.#specifier = (() => {
            const split = specs.vspecifier.split('/');
            const scope = split[0].startsWith('@') ? split.shift() : void 0;
            const [name] = split.shift().split('@');
            const subpath = split.join('/');
            return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : '');
          })();
          this.#attributes = new _attributes.WidgetGlobalAttributes();
          this.#sr = new _sr.WidgetSR(this);
          this.#ssr = new _ssr.WidgetSSR(this);
          this.#csr = new _csr.WidgetCSR(this);
          this.#csr?.on('controller.initialised', this.#oncontroller);
          this.#styles = new _styles.StylesManager(this);
        }
        connectedCallback() {
          // Register the widget in the instances registry after connectedCallback is done
          this.#wnode = _instances.instances.register(this);
          this.#holder = document.createElement('span');
          this.#holder.style.display = 'none';
          this.shadowRoot.append(this.#holder);
          this.#attributes.initialise(this.#holder);
          this.#ssr.initialise().catch(exc => console.error(exc.stack));
          this.#sr.initialise().catch(exc => console.error(exc.stack));
          this.#csr.initialise();
        }
        disconnectedCallback() {
          this.#csr.disconnect();
        }
        attributeChangedCallback(name, old, value) {
          this.#csr.attributeChanged(name, old, value);
        }
      }
      exports.BeyondWidget = BeyondWidget;
    }
  });

  /*********************************
  INTERNAL MODULE: ./widget/renderer
  *********************************/

  ims.set('./widget/renderer', {
    hash: 571206461,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Renderer = void 0;
      class Renderer {
        #widget;
        constructor(widget) {
          this.#widget = widget;
        }
        // Cancellation token
        #ct = 0;
        async render(sr) {
          const ct = ++this.#ct;
          const {
            name,
            holder,
            styles
          } = this.#widget;
          if (sr.errors?.length) {
            console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
            return;
          }
          // Check if already rendered by CSR
          if (holder.children.length) return;
          if (!sr.html) return '';
          const host = await this.#widget.host;
          holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
          // Set the widget styles to be able to know when they are loaded to avoid FOUC (flash of unstyled content)
          const links = [];
          const resources = holder.querySelectorAll('link');
          resources.forEach(node => links.push(node.href));
          links.length && (await styles.initialise(links));
          resources.forEach(node => node.localName === 'link' && node.addEventListener('load', styles.onloaded));
          // Wait for style sheets be ready
          await styles?.ready;
          if (this.#ct !== ct) return;
          // Once the styles are loaded, show the content of the widget
          holder.style.display = '';
        }
      }
      exports.Renderer = Renderer;
    }
  });

  /***************************
  INTERNAL MODULE: ./widget/sr
  ***************************/

  ims.set('./widget/sr', {
    hash: 2731121275,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSR = void 0;
      var _checksum = require("./checksum");
      var _renderer = require("./renderer");
      class WidgetSR {
        #widget;
        #renderer;
        #prerender;
        get prerender() {
          return this.#prerender;
        }
        constructor(widget) {
          this.#widget = widget;
          this.#renderer = new _renderer.Renderer(widget);
        }
        #initialised = false;
        async initialise() {
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const {
            specs
          } = this.#widget;
          // Check if SR is enabled for this widget
          if (!specs.render.sr) return;
          const language = (() => {
            const {
              multilanguage
            } = specs.render;
            if (!multilanguage) return '';
            let language = localStorage.__beyond_language;
            language = language ? language : navigator.language;
            language = language.slice(0, 2);
            return `${language}:`;
          })();
          let resource;
          if (specs.is === 'page') {
            let key = `${language}${specs.name}//${location.pathname}${location.search}`;
            resource = (0, _checksum.default)(key);
          } else if (specs.is === 'layout') {
            resource = (0, _checksum.default)(`${language}${specs.name}`);
          } else {
            const compute = new Map();
            specs.attrs?.forEach(attr => {
              const value = this.#widget.getAttribute(attr);
              value && compute.set(attr, value);
            });
            let key = language;
            [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
            resource = (0, _checksum.default)(key);
          }
          const host = await this.#widget.host;
          const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
          try {
            const response = await fetch(url);
            if (response.status !== 200) {
              console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
              return;
            }
            const sr = await response.json();
            // Register as a pre-rendered widget (required to hydrate the store)
            this.#prerender = sr;
            // Finally render the widget
            await this.#renderer.render(sr);
          } catch (exc) {
            console.error('Widget static content fetch error:', exc.message);
          }
        }
      }
      exports.WidgetSR = WidgetSR;
    }
  });

  /****************************
  INTERNAL MODULE: ./widget/ssr
  ****************************/

  ims.set('./widget/ssr', {
    hash: 2834037449,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetSSR = void 0;
      var _prerendered = require("../prerendered");
      var _renderer = require("./renderer");
      class WidgetSSR {
        #widget;
        #renderer;
        #prerender;
        get prerender() {
          return this.#prerender;
        }
        constructor(widget) {
          this.#widget = widget;
          this.#renderer = new _renderer.Renderer(widget);
        }
        #initialised = false;
        /**
         * Check if widget is already pre-rendered (index.html makes a page ssr fetch)
         */
        async initialise() {
          // Check if SSR is enabled for this widget
          if (!this.#widget.specs.render.ssr) return;
          if (this.#initialised) throw new Error('Widget SSR already initialised');
          this.#initialised = true;
          const widget = this.#widget;
          const {
            specs
          } = widget;
          const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
          const found = _prerendered.prerender.find(specs.name, attrs);
          // If the widget has not been loaded by routing SSR, then load the widget alone
          if (!found) {
            return await this.#load();
          }
          this.#prerender = found;
          // Finally render the widget
          await this.#renderer.render(found);
        }
        async #load() {
          const {
            specifier,
            name
          } = this.#widget;
          const host = await (async () => {
            const split = specifier.split('/');
            const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
            const {
              ssr: config
            } = (await bimport(`${pkg}/config`)).default;
            if (!config || !config.host) {
              console.error(`Project "${pkg}" does not support SSR (host not configured). ` + `Required by "${name}" widget.`);
              return;
            }
            return config.host;
          })();
          if (!host) return;
          const language = (() => {
            const {
              specs
            } = this.#widget;
            const {
              multilanguage
            } = specs.render;
            if (!multilanguage) return '';
            let language = localStorage.__beyond_language;
            language = language ? language : navigator.language;
            language = language.slice(0, 2);
            return `&language=${language}`;
          })();
          let attrs = (() => {
            const {
              specs
            } = this.#widget;
            if (!specs.attrs?.length) return '';
            let attrs = '&attrs=' + specs.attrs.join(',');
            specs.attrs.forEach(attr => {
              const value = this.#widget.getAttribute(attr);
              if (!value) return;
              attrs += `&attr.${attr}=${value}`;
            });
          })();
          const url = `${host}/widget?name=${name}${language}${attrs}`;
          try {
            const response = await fetch(url);
            if (response.status !== 200) {
              console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
              return;
            }
            const sr = await response.json();
            // Register as a pre-rendered widget (required to hydrate the store)
            this.#prerender = sr;
            // Finally render the widget
            await this.#renderer.render(sr);
          } catch (exc) {
            console.error(exc.stack);
          }
        }
      }
      exports.WidgetSSR = WidgetSSR;
    }
  });

  /**************************************
  INTERNAL MODULE: ./widget/styles/global
  **************************************/

  ims.set('./widget/styles/global', {
    hash: 1566285625,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GlobalCSS = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class GlobalCSS extends _core.Events {
        #widget;
        #version = 0;
        constructor(widget) {
          super();
          this.#widget = widget;
          const {
            host
          } = this.#widget;
          const version = this.#version !== 0 ? `?version=${this.#version}` : '';
          this.#link = `${host}global.css${version}`;
        }
        #link;
        get link() {
          return this.#link;
        }
        update() {
          this.#version++;
          this.trigger('change');
        }
      }
      exports.GlobalCSS = GlobalCSS;
    }
  });

  /*************************************
  INTERNAL MODULE: ./widget/styles/index
  *************************************/

  ims.set('./widget/styles/index', {
    hash: 1538919774,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.StylesManager = void 0;
      var _core = require("@beyond-js/kernel/core");
      var _link = require("./link");
      var _global = require("./global");
      /*bundle*/
      class StylesManager {
        #events = new _core.Events();
        on = (event, listener) => this.#events.on(event, listener);
        off = (event, listener) => this.#events.off(event, listener);
        #loaded = new Map();
        #globalcss;
        #version = 0;
        get version() {
          return this.#version;
        }
        #changed() {
          this.#version++;
          this.#resolved && this.#events.trigger('change');
        }
        get resources() {
          return new Set([...this.#loaded.keys()]);
        }
        get loaded() {
          this.#check();
          return this.#resolved;
        }
        #promise;
        #resolved = false;
        #resolve;
        get ready() {
          this.#check();
          return this.#promise;
        }
        onloaded = event => {
          const href = typeof event === 'string' ? event : event.currentTarget.getAttribute('href');
          if (!this.#loaded.has(href)) {
            console.warn(`Stylesheet href="${href}" not registered`);
            return;
          }
          this.#loaded.set(href, true);
          this.#check();
          const changed = this.#purge();
          changed && this.#changed();
          return true;
        };
        #check() {
          if (this.#resolved) return true;
          // Check if all links are loaded
          const loaded = [...this.#loaded.values()].reduce((prev, loaded) => prev && loaded, true);
          loaded && this.#resolve();
          return this.#resolved = loaded;
        }
        /**
         * Remove style sheets that have been supplanted by newer hmr versions
         * @private
         */
        #purge() {
          const versions = {
            last: new Map(),
            values: new Map(),
            lastLoaded: new Map()
          };
          [...this.#loaded.keys()].forEach(href => {
            const link = new _link.default(href);
            const prevLast = versions.last.get(link.resource);
            const last = prevLast && prevLast > link.version ? prevLast : link.version;
            versions.last.set(link.resource, last);
            if (this.#loaded.get(link.href)) {
              const prevLastLoaded = versions.lastLoaded.get(link.resource);
              const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
              versions.lastLoaded.set(link.resource, lastLoaded);
            }
            const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : new Set();
            values.add(link.version);
            versions.values.set(link.resource, values);
          });
          // Just keep the last loaded version and the loading versions
          const purge = [];
          [...this.#loaded.keys()].forEach(href => {
            const link = new _link.default(href);
            const lastLoaded = versions.lastLoaded.get(link.resource);
            link.version < lastLoaded && purge.push(link);
          });
          purge.forEach(link => this.#loaded.delete(link.href));
          return !!purge.length;
        }
        /**
         * Required to support global.css HMR
         *
         * @type {string[]}
         * @private
         */
        #last;
        #refresh = () => {
          if (!this.#last) return;
          const changed = this.#update(this.#last);
          changed && this.#changed();
        };
        #update(_links) {
          this.#last = _links;
          _links.unshift(this.#globalcss.link);
          const links = _links.map(link => new _link.default(link));
          // Add the new style sheets
          let changed = false;
          links.forEach(link => {
            if (this.#loaded.has(link.href)) return;
            this.#loaded.set(link.href, false);
            changed = true;
          });
          return changed;
        }
        update(links) {
          const changed = this.#update(links);
          changed && this.#changed();
        }
        constructor(widget) {
          this.#globalcss = new _global.GlobalCSS(widget);
          this.#promise = new Promise(resolve => this.#resolve = resolve);
        }
        #initialised = false;
        get initialised() {
          return this.#initialised;
        }
        async initialise(links) {
          if (this.#initialised) throw new Error(`Widget styles already initialised`);
          this.#initialised = true;
          this.#update(links);
          this.#globalcss.on('change', this.#refresh);
        }
        destroy() {
          this.#globalcss.off('change', this.#refresh);
        }
      }
      exports.StylesManager = StylesManager;
    }
  });

  /************************************
  INTERNAL MODULE: ./widget/styles/link
  ************************************/

  ims.set('./widget/styles/link', {
    hash: 3219871066,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      class _default {
        #href;
        get href() {
          return this.#href;
        }
        #resource;
        get resource() {
          return this.#resource;
        }
        #version;
        get version() {
          return this.#version;
        }
        constructor(href) {
          this.#href = href;
          const iv = href.split('?version=');
          this.#resource = iv[0];
          this.#version = iv[1] ? parseInt(iv[1]) : 0;
        }
      }
      exports.default = _default;
    }
  });

  /*************************
  INTERNAL MODULE: ./widgets
  *************************/

  ims.set('./widgets', {
    hash: 3986250608,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.widgets = void 0;
      var _widget = require("./widget");
      var _instances = require("./instances");
      var _attributes = require("./attributes");
      require("./anchor");
      class BeyondWidgets extends Map {
        #ssr = true;
        get ssr() {
          return this.#ssr;
        }
        constructor() {
          super();
        }
        setup(config) {
          this.#ssr = typeof config?.ssr === 'boolean' ? config.ssr : true;
        }
        get instances() {
          return _instances.instances;
        }
        get attributes() {
          return _attributes.attributes;
        }
        register(specs) {
          specs.forEach(specs => {
            // Widgets can be registered at application start, and later by the widget bundle
            if (this.has(specs.name)) return;
            specs.render = specs.render ? specs.render : {
              csr: true,
              ssr: false,
              sr: false
            };
            const {
              name,
              render
            } = specs;
            render.csr = typeof render.csr === 'boolean' ? render.csr : true;
            this.set(name, specs);
            // Do not register the custom elements when rendering in the server
            if (typeof process === 'object') return;
            customElements.define(name, class extends _widget.BeyondWidget {
              static get observedAttributes() {
                return specs.attrs ? specs.attrs : [];
              }
              constructor() {
                super(specs);
              }
            });
          });
        }
      }
      /*bundle*/
      const widgets = exports.widgets = new BeyondWidgets();
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./attributes",
    "from": "attributes",
    "name": "attributes"
  }, {
    "im": "./instances/node",
    "from": "NodeWidget",
    "name": "NodeWidget"
  }, {
    "im": "./prerendered/index",
    "from": "prerender",
    "name": "prerender"
  }, {
    "im": "./widget/csr",
    "from": "IBeyondWidgetController",
    "name": "IBeyondWidgetController"
  }, {
    "im": "./widget/csr",
    "from": "WidgetCSR",
    "name": "WidgetCSR"
  }, {
    "im": "./widget/index",
    "from": "IWidgetSpecs",
    "name": "IWidgetSpecs"
  }, {
    "im": "./widget/index",
    "from": "BeyondWidget",
    "name": "BeyondWidget"
  }, {
    "im": "./widget/styles/global",
    "from": "GlobalCSS",
    "name": "GlobalCSS"
  }, {
    "im": "./widget/styles/index",
    "from": "StylesManager",
    "name": "StylesManager"
  }, {
    "im": "./widgets",
    "from": "widgets",
    "name": "widgets"
  }];
  let attributes = _exports.attributes = void 0,
    NodeWidget = _exports.NodeWidget = void 0,
    prerender = _exports.prerender = void 0,
    IBeyondWidgetController = _exports.IBeyondWidgetController = void 0,
    WidgetCSR = _exports.WidgetCSR = void 0,
    IWidgetSpecs = _exports.IWidgetSpecs = void 0,
    BeyondWidget = _exports.BeyondWidget = void 0,
    GlobalCSS = _exports.GlobalCSS = void 0,
    StylesManager = _exports.StylesManager = void 0,
    widgets = _exports.widgets = void 0;

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'attributes') && (_exports.attributes = attributes = require ? require('./attributes').attributes : value);
    (require || prop === 'NodeWidget') && (_exports.NodeWidget = NodeWidget = require ? require('./instances/node').NodeWidget : value);
    (require || prop === 'prerender') && (_exports.prerender = prerender = require ? require('./prerendered/index').prerender : value);
    (require || prop === 'IBeyondWidgetController') && (_exports.IBeyondWidgetController = IBeyondWidgetController = require ? require('./widget/csr').IBeyondWidgetController : value);
    (require || prop === 'WidgetCSR') && (_exports.WidgetCSR = WidgetCSR = require ? require('./widget/csr').WidgetCSR : value);
    (require || prop === 'IWidgetSpecs') && (_exports.IWidgetSpecs = IWidgetSpecs = require ? require('./widget/index').IWidgetSpecs : value);
    (require || prop === 'BeyondWidget') && (_exports.BeyondWidget = BeyondWidget = require ? require('./widget/index').BeyondWidget : value);
    (require || prop === 'GlobalCSS') && (_exports.GlobalCSS = GlobalCSS = require ? require('./widget/styles/global').GlobalCSS : value);
    (require || prop === 'StylesManager') && (_exports.StylesManager = StylesManager = require ? require('./widget/styles/index').StylesManager : value);
    (require || prop === 'widgets') && (_exports.widgets = widgets = require ? require('./widgets').widgets : value);
  };
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});
//# sourceMappingURL=render.js.map