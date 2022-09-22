define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/kernel@0.0.22/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.widgets = _exports.prerender = _exports.hmr = _exports.attributes = _exports.WidgetCSR = _exports.StylesManager = _exports.NodeWidget = _exports.IWidgetSpecs = _exports.IBeyondWidgetController = _exports.GlobalCSS = _exports.BeyondWidget = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.0.10/render"
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
    hash: 2586566452,
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
    hash: 4138553981,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.attributes = void 0;

      var _core = require("@beyond-js/kernel/core");
      /*bundle*/


      const attributes = new class extends _core.Events {
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

      }();
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
    hash: 2629239959,
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
          // return (<any>import.meta).resolve(this.#specifier);
          return Promise.resolve(`${location.origin}/`);
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
    hash: 3495638489,
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
        }

        async initialise() {
          const host = await this.#widget.host;
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
    hash: 3637653678,
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


      class StylesManager extends Set {
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
          super();
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
          await this.#globalcss.initialise();
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
    hash: 279691596,
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
      /*bundle*/


      const widgets = new class BeyondWidgets extends Map {
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

      }();
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

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLElBQU47Y0FBWWxDLEdBQUcsRUFBRSxLQUFqQjtjQUF3QjJELEVBQUUsRUFBRTtZQUE1QixDQUE3QzNCO1lBQ0EsTUFBTTtjQUFDckQsSUFBRDtjQUFPc0Q7WUFBUCxJQUFpQkQsS0FBdkI7WUFDQUMsTUFBTSxDQUFDQyxHQUFQRCxHQUFhLE9BQU9BLE1BQU0sQ0FBQ0MsR0FBZCxLQUFzQixTQUF0QixHQUFrQ0QsTUFBTSxDQUFDQyxHQUF6QyxHQUErQyxJQUE1REQ7WUFFQSxLQUFLcEQsR0FBTCxDQUFTRixJQUFULEVBQWVxRCxLQUFmLEVBUm9CLENBVXBCOztZQUNBLElBQUksT0FBT3hFLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7WUFFakNDLGNBQWMsQ0FBQ0MsTUFBZkQsQ0FBc0JrQixJQUF0QmxCLEVBQTRCLGNBQWN5RixvQkFBZCxDQUEwQjtjQUNyQixXQUFsQm1HLGtCQUFrQjtnQkFDekIsT0FBT3JILEtBQUssQ0FBQzdCLEtBQU42QixHQUFjQSxLQUFLLENBQUM3QixLQUFwQjZCLEdBQTRCLEVBQW5DO2NBQ0g7O2NBRURwRTtnQkFDSSxNQUFNb0UsS0FBTjtjQUNIOztZQVBpRCxDQUF0RHZFO1VBYko7UUF1Qkg7O01BOUNvRSxDQUF6RCxFQUFoQiIsIm5hbWVzIjpbInByb2Nlc3MiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJiaW1wb3J0IiwidGhlbiIsInJvdXRpbmciLCJjb25uZWN0ZWRDYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYXNBdHRyaWJ1dGUiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJwdXNoU3RhdGUiLCJhdHRyaWJ1dGVzIiwiRXZlbnRzIiwiTWFwIiwidmFsdWVzIiwiYWRkIiwibmFtZSIsInZhbHVlIiwic2V0IiwidHJpZ2dlciIsInJlbW92ZSIsImRlbGV0ZSIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0IiwiaGFzIiwibm9kZSIsIk5vZGVXaWRnZXQiLCJ3bm9kZSIsImNoaWxkcmVuIiwicHJlcmVuZGVyIiwic3NyIiwiZmluZCIsImVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJpYXR0cnMiLCJyZWR1Y2UiLCJwcmV2IiwiZ2V0IiwiV2lkZ2V0R2xvYmFsQXR0cmlidXRlcyIsImhvbGRlciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJmb3JFYWNoIiwib24iLCJkZXN0cm95Iiwib2ZmIiwicyIsImhhc2giLCJpIiwiYyIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJXaWRnZXRDU1IiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwic3BlY3MiLCJyZW5kZXIiLCJjc3IiLCJFcnJvciIsInNwZWNpZmllciIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsInN0YWNrIiwibWVzc2FnZSIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0IiwidnNwZWNpZmllciIsIlByb21pc2UiLCJyZXNvbHZlIiwibG9jYXRpb24iLCJvcmlnaW4iLCJpcyIsInJvdXRlIiwibGF5b3V0Iiwic3IiLCJzdHlsZXMiLCJ3cGFyZW50Iiwid2NoaWxkcmVuIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJTdHlsZXNNYW5hZ2VyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwibGlua3MiLCJyZXNvdXJjZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsImhyZWYiLCJvbmxvYWRlZCIsInJlYWR5IiwibGFuZ3VhZ2UiLCJtdWx0aWxhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiX19iZXlvbmRfbGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJzbGljZSIsInJlc291cmNlIiwia2V5IiwicGF0aG5hbWUiLCJzZWFyY2giLCJjb21wdXRlIiwiYXR0ciIsInNvcnQiLCJhIiwiYiIsImsiLCJ2IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJtYXAiLCJmb3VuZCIsInBrZyIsImNvbmZpZyIsImRlZmF1bHQiLCJHbG9iYWxDU1MiLCJ2ZXJzaW9uIiwibGluayIsInVwZGF0ZSIsImxpc3RlbmVyIiwia2V5cyIsImN1cnJlbnRUYXJnZXQiLCJ3YXJuIiwiY2hhbmdlZCIsInZlcnNpb25zIiwibGFzdCIsImxhc3RMb2FkZWQiLCJMaW5rIiwicHJldkxhc3QiLCJwcmV2TGFzdExvYWRlZCIsInB1cmdlIiwiX2xpbmtzIiwidW5zaGlmdCIsImluaXRpYWxpc2VkIiwiaXYiLCJwYXJzZUludCIsInJlcXVpcmUiLCJ3aWRnZXRzIiwiQmV5b25kV2lkZ2V0cyIsInNldHVwIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi9hbmNob3IudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi9hdHRyaWJ1dGVzLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvaW5zdGFuY2VzL2luZGV4LnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvaW5zdGFuY2VzL25vZGUudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi9wcmVyZW5kZXJlZC9pbmRleC50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvd2lkZ2V0L2NoZWNrc3VtLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci93ZWIvd2lkZ2V0L2Nzci50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9pbmRleC50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9yZW5kZXJlci50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9zci50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9zc3IudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvc3R5bGVzL2dsb2JhbC50cyIsIkBiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvd2ViL3dpZGdldC9zdHlsZXMvaW5kZXgudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCJAYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL3dlYi93aWRnZXRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19