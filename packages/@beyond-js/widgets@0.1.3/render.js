define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.widgets = _exports.prerender = _exports.hmr = _exports.attributes = _exports.__beyond_pkg = _exports.WidgetCSR = _exports.StylesManager = _exports.NodeWidget = _exports.IWidgetSpecs = _exports.IBeyondWidgetController = _exports.GlobalCSS = _exports.BeyondWidget = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.3"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.3/render"
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
      const attributes = new Attributes();
      exports.attributes = attributes;
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
      const instances = new class extends Set {
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
      exports.instances = instances;
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
      const prerender = new class {
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
      exports.prerender = prerender;
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
    hash: 2251972216,
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
      const widgets = new BeyondWidgets();
      exports.widgets = widgets;
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
  let attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;

  // Module exports
  _exports.widgets = widgets;
  _exports.StylesManager = StylesManager;
  _exports.GlobalCSS = GlobalCSS;
  _exports.BeyondWidget = BeyondWidget;
  _exports.IWidgetSpecs = IWidgetSpecs;
  _exports.WidgetCSR = WidgetCSR;
  _exports.IBeyondWidgetController = IBeyondWidgetController;
  _exports.prerender = prerender;
  _exports.NodeWidget = NodeWidget;
  _exports.attributes = attributes;
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
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxHQUFHLElBQUk7WUFFaEUsSUFBSSxDQUFDdkQsR0FBRyxDQUFDRixJQUFJLEVBQUV1RCxLQUFLLENBQUM7WUFFckI7WUFDQSxJQUFJLE9BQU8xRSxPQUFPLEtBQUssUUFBUSxFQUFFO1lBRWpDQyxjQUFjLENBQUNDLE1BQU0sQ0FBQ2lCLElBQUksRUFBRSxjQUFjeUUsb0JBQVk7Y0FDbEQsV0FBV2tHLGtCQUFrQjtnQkFDekIsT0FBT3BILEtBQUssQ0FBQzdCLEtBQUssR0FBRzZCLEtBQUssQ0FBQzdCLEtBQUssR0FBRyxFQUFFO2NBQ3pDO2NBRUF6QztnQkFDSSxLQUFLLENBQUNzRSxLQUFLLENBQUM7Y0FDaEI7YUFDSCxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ047O01BR0c7TUFBVyxNQUFNcUgsT0FBTyxHQUFrQixJQUFJSCxhQUFhLEVBQUU7TUFBQ25LIiwibmFtZXMiOlsicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwicm91dGluZyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJNYXAiLCJ2YWx1ZXMiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiZXhwb3J0cyIsImF0dHJpYnV0ZXMiLCJpbnN0YW5jZXMiLCJTZXQiLCJyZWdpc3RlciIsIndpZGdldCIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsImhhcyIsIm5vZGUiLCJOb2RlV2lkZ2V0Iiwid25vZGUiLCJjaGlsZHJlbiIsInByZXJlbmRlciIsInNzciIsImZpbmQiLCJlbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwiaWF0dHJzIiwicmVkdWNlIiwicHJldiIsImdldCIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0aWFsaXNlIiwiZm9yRWFjaCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiV2lkZ2V0Q1NSIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiRWxlbWVudCIsIkJleW9uZFdpZGdldCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJXaWRnZXRTUiIsIldpZGdldFNTUiIsIlN0eWxlc01hbmFnZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIm1hcCIsImZvdW5kIiwicGtnIiwiY29uZmlnIiwiZGVmYXVsdCIsIkdsb2JhbENTUyIsInZlcnNpb24iLCJsaW5rIiwidXBkYXRlIiwibGlzdGVuZXIiLCJrZXlzIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJjaGFuZ2VkIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsIkxpbmsiLCJwcmV2TGFzdCIsInByZXZMYXN0TG9hZGVkIiwicHVyZ2UiLCJfbGlua3MiLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0aWFsaXNlZCIsIml2IiwicGFyc2VJbnQiLCJyZXF1aXJlIiwiQmV5b25kV2lkZ2V0cyIsInNldHVwIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwid2lkZ2V0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiYW5jaG9yLnRzIiwiYXR0cmlidXRlcy50cyIsImluc3RhbmNlcy9pbmRleC50cyIsImluc3RhbmNlcy9ub2RlLnRzIiwicHJlcmVuZGVyZWQvaW5kZXgudHMiLCJ3aWRnZXQvYXR0cmlidXRlcy50cyIsIndpZGdldC9jaGVja3N1bS50cyIsIndpZGdldC9jc3IudHMiLCJ3aWRnZXQvaW5kZXgudHMiLCJ3aWRnZXQvcmVuZGVyZXIudHMiLCJ3aWRnZXQvc3IudHMiLCJ3aWRnZXQvc3NyLnRzIiwid2lkZ2V0L3N0eWxlcy9nbG9iYWwudHMiLCJ3aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwid2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwid2lkZ2V0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==