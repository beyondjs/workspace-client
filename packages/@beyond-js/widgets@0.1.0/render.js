define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/kernel@0.1.1/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.widgets = _exports.prerender = _exports.hmr = _exports.attributes = _exports.__beyond_pkg = _exports.WidgetCSR = _exports.StylesManager = _exports.NodeWidget = _exports.IWidgetSpecs = _exports.IBeyondWidgetController = _exports.GlobalCSS = _exports.BeyondWidget = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.0/render"
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

      var _node = require("./node"); // Maintains a tree of widget instances
      // NodeWidget is an object with a tree structure (parent, children)


      const instances = new class extends Set {
        register(widget) {
          this.add(widget); // Find parent widget

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
          } = this.#widget = widget; // Check if CSR is enabled (default) for this widget

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

      var _styles = require("./styles"); // In SSR environment HTMLElement is not defined


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
        } // To identify where the widget is in the widgets tree


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
        } // Cancellation token


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
          } // Check if already rendered by CSR


          if (holder.children.length) return;
          if (!sr.html) return '';
          const host = await this.#widget.host;

          holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))(); // Set the widget styles to be able to know when they are loaded to avoid FOUC (flash of unstyled content)


          const links = [];
          const resources = holder.querySelectorAll('link');
          resources.forEach(node => links.push(node.href));
          links.length && (await styles.initialise(links));
          resources.forEach(node => node.localName === 'link' && node.addEventListener('load', styles.onloaded)); // Wait for style sheets be ready

          await styles?.ready;
          if (this.#ct !== ct) return; // Once the styles are loaded, show the content of the widget

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
    hash: 3408004663,
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
          } = this.#widget; // Check if SR is enabled for this widget

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

            const sr = await response.json(); // Finally render the widget

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
    hash: 102088058,
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

          const found = _prerendered.prerender.find(specs.name, attrs); // If the widget has not been loaded by routing SSR, then load the widget alone


          if (!found) {
            return await this.#load();
          }

          this.#prerender = found; // Finally render the widget

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

            const sr = await response.json(); // Finally render the widget

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
    hash: 2180237271,
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
          const href = typeof event === 'string' ? event : event.currentTarget.href;

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
          if (this.#resolved) return true; // Check if all links are loaded

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
          }); // Just keep the last loaded version and the loading versions

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

          const links = _links.map(link => new _link.default(link)); // Add the new style sheets


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
            this.set(name, specs); // Do not register the custom elements when rendering in the server

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
  let attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQWEsT0FBT0EsTUFBTSxDQUFDQyxHQUFkLEtBQXNCLFNBQXRCLEdBQWtDRCxNQUFNLENBQUNDLEdBQXpDLEdBQStDLElBQTVERDtZQUVBLEtBQUtyRCxHQUFMLENBQVNGLElBQVQsRUFBZXNELEtBQWYsRUFSb0IsQ0FVcEI7O1lBQ0EsSUFBSSxPQUFPekUsT0FBUCxLQUFtQixRQUF2QixFQUFpQztZQUVqQ0MsY0FBYyxDQUFDQyxNQUFmRCxDQUFzQmtCLElBQXRCbEIsRUFBNEIsY0FBYzBGLG9CQUFkLENBQTBCO2NBQ3JCLFdBQWxCa0csa0JBQWtCO2dCQUN6QixPQUFPcEgsS0FBSyxDQUFDN0IsS0FBTjZCLEdBQWNBLEtBQUssQ0FBQzdCLEtBQXBCNkIsR0FBNEIsRUFBbkM7Y0FDSDs7Y0FFRHJFO2dCQUNJLE1BQU1xRSxLQUFOO2NBQ0g7O1lBUGlELENBQXREeEU7VUFiSjtRQXVCSDs7TUE5Q2dEO01BaUQ5Qzs7O01BQVcsTUFBTTZMLE9BQU8sR0FBa0IsSUFBSUgsYUFBSixFQUEvQiIsIm5hbWVzIjpbInByb2Nlc3MiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJiaW1wb3J0IiwidGhlbiIsInJvdXRpbmciLCJjb25uZWN0ZWRDYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYXNBdHRyaWJ1dGUiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJwdXNoU3RhdGUiLCJBdHRyaWJ1dGVzIiwiRXZlbnRzIiwiTWFwIiwidmFsdWVzIiwiYWRkIiwibmFtZSIsInZhbHVlIiwic2V0IiwidHJpZ2dlciIsInJlbW92ZSIsImRlbGV0ZSIsImF0dHJpYnV0ZXMiLCJpbnN0YW5jZXMiLCJTZXQiLCJyZWdpc3RlciIsIndpZGdldCIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsImhhcyIsIm5vZGUiLCJOb2RlV2lkZ2V0Iiwid25vZGUiLCJjaGlsZHJlbiIsInByZXJlbmRlciIsInNzciIsImZpbmQiLCJlbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwiaWF0dHJzIiwicmVkdWNlIiwicHJldiIsImdldCIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0aWFsaXNlIiwiZm9yRWFjaCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiV2lkZ2V0Q1NSIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiRWxlbWVudCIsIkJleW9uZFdpZGdldCIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJXaWRnZXRTUiIsIldpZGdldFNTUiIsIlN0eWxlc01hbmFnZXIiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIm1hcCIsImZvdW5kIiwicGtnIiwiY29uZmlnIiwiZGVmYXVsdCIsIkdsb2JhbENTUyIsInZlcnNpb24iLCJsaW5rIiwidXBkYXRlIiwibGlzdGVuZXIiLCJrZXlzIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJjaGFuZ2VkIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsIkxpbmsiLCJwcmV2TGFzdCIsInByZXZMYXN0TG9hZGVkIiwicHVyZ2UiLCJfbGlua3MiLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0aWFsaXNlZCIsIml2IiwicGFyc2VJbnQiLCJyZXF1aXJlIiwiQmV5b25kV2lkZ2V0cyIsInNldHVwIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwid2lkZ2V0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvYW5jaG9yLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvYXR0cmlidXRlcy50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL2luc3RhbmNlcy9pbmRleC50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL2luc3RhbmNlcy9ub2RlLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvcHJlcmVuZGVyZWQvaW5kZXgudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvYXR0cmlidXRlcy50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9jaGVja3N1bS50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9jc3IudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvaW5kZXgudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvcmVuZGVyZXIudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvc3IudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvc3NyLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvd2lkZ2V0L3N0eWxlcy9nbG9iYWwudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvd2lkZ2V0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==