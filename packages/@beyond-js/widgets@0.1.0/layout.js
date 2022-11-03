define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/widgets@0.1.0/render"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ssr = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.1.0/layout"
    },
    "type": "ts"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_1]]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /**************************
  INTERNAL MODULE: ./children
  **************************/

  ims.set('./children', {
    hash: 1491145116,
    creator: function (require, exports) {
      "use strict";

      var _render = require("@beyond-js/widgets/render");

      var _ssr = require("./ssr");

      let manager;
      customElements.define('beyond-layout-children', class extends HTMLElement {
        #layout;
        #active;

        connectedCallback() {
          this.attachShadow({
            mode: 'open'
          });

          const managed = () => {
            const start = () => this.#start().catch(exc => console.error(exc.stack));

            manager.initialised ? start() : manager.ready.then(start);
          }; // If the manager is already loaded, render without ssr


          if (manager) return managed(); // While the manager is not loaded, try to render from ssr

          _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener('received', this.#onssr);
          const promises = [];
          promises.push(bimport('@beyond-js/widgets/routing'));
          promises.push(bimport('@beyond-js/kernel/core'));
          const {
            specifier
          } = globalThis.__app_package;
          promises.push(bimport(`${specifier}/start`));
          Promise.all(promises).then(([routing]) => {
            ({
              manager
            } = routing);
            managed();
          }).catch(exc => console.log(exc.stack));
        }
        /**
         * The widget container of the current beyond-layout-children container is null if an error is detected,
         * and the DOM document when there is no project layout configured in the project.json
         *
         * @return {{container?: string, error?: string}}
         * @private
         */


        #container;

        get container() {
          if (this.#container !== void 0) return this.#container;

          const container = (() => {
            let parent = this;

            while (true) {
              const root = parent.getRootNode();
              if (root === document) return root;
              parent = root.host;
              if (_render.widgets.instances.has(parent)) return parent;
            }
          })();

          if (!container) {
            console.error(`Widget container of beyond-layout-children not found`);
            return this.#container = null;
          }

          return this.#container = container;
        }

        #onssr = () => {
          _ssr.ssr.removeEventListener('received', this.#onssr);

          const {
            container
          } = this;
          if (container === null) return; // The index in the hierarchy that must be appended to the shadowRoot of the beyond-layout-children

          const {
            element,
            error
          } = (() => {
            const {
              hierarchy
            } = _ssr.ssr; // container is undefined when there is no project layout, and the beyond-layout-children rootNode
            // is the DOM document

            if (container === document) return {
              element: hierarchy[0]
            };
            const {
              localName
            } = container;
            const index = hierarchy.indexOf(localName);
            if (index === -1) return {
              error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
            };
            if (index === hierarchy.length - 1) return {
              error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
            };
            return {
              element: hierarchy[index + 1]
            };
          })();

          if (error) {
            console.error(error, this);
            return;
          }

          this.shadowRoot.appendChild(document.createElement(element));
        };
        #render = () => {
          this.#layout.children.forEach(child => {
            const {
              children
            } = this.shadowRoot;
            let element = [...children].find(element => element.getAttribute('data-child-id') === child.id); // Create the HTMLElement of the child if it was not already created

            if (!element) {
              element = document.createElement(child.element);
              element.setAttribute('data-child-id', child.id);
              this.shadowRoot.append(element);
            } // The show and hide methods are defined in the page controller


            const active = this.#layout.active === child;
            const controller = element.controller;

            if (active && element !== this.#active) {
              this.#active = element;

              const show = () => {
                element.removeEventListener('controller.initialised', show);
                if (element !== this.#active) return;
                const controller = element.controller;

                if (!controller) {
                  throw new Error(`Controller of element widget "${child.element}" is undefined`);
                }

                this.#active === element && controller.show?.();
              };

              controller ? controller.show?.() : element.addEventListener('controller.initialised', show);
            } else if (!element.hidden && !active) {
              controller?.hide?.();
            }

            element.hidden = !active;
          });
        }; // Check if there are ssr elements that must be hydrated (set the child id)

        #hydrate() {
          const {
            children
          } = this.shadowRoot;
          const layout = this.#layout;
          if (!children.length) return;

          if (children.length > 1) {
            console.error('Only one child was expected on beyond-layout-children start', this);
            return;
          }

          children[0].setAttribute('data-child-id', [...layout.children.keys()][0]);
        }

        async #start() {
          _ssr.ssr.removeEventListener('received', this.#onssr);

          if (this.container === null) return;

          const done = layout => {
            this.#layout = layout;
            this.#hydrate();
            this.#layout.on('change', this.#render);
            this.#render();
          }; // When there is no layout specified in the project.json, then the container is the DOM document


          if (this.container === document) return done(manager.main); // Check if the current beyond-layout-children is the main layout specified in the project.json

          const {
            localName
          } = this.container;
          if (localName === manager.main.element) return done(manager.main); // Look for the layout

          if (!manager.layouts.has(localName)) {
            console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
            return;
          }

          done(manager.layouts.get(localName));
        }

      });
    }
  });
  /*********************
  INTERNAL MODULE: ./ssr
  *********************/

  ims.set('./ssr', {
    hash: 2390596202,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ssr = void 0;
      /*bundle*/

      const ssr = new class extends EventTarget {
        // The main layout
        #main;

        get main() {
          return this.#main;
        } // The widget name of the page


        #page;

        get page() {
          return this.#page;
        } // The parent widgets of the page


        #layouts;

        get layouts() {
          return this.#layouts;
        } // The hierarchy of layouts and page considering the main layout, the parent widgets of the page
        // and the page itself


        #hierarchy = [];

        get hierarchy() {
          return this.#hierarchy;
        }

        data(main, page) {
          this.#main = main;
          this.#page = page.element;
          this.#layouts = page.parents;
          main && this.#hierarchy.push(main);
          page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
          this.#hierarchy.push(page.element);
          const event = new Event('received');
          this.dispatchEvent(event);
        }

      }();
      exports.ssr = ssr;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./ssr",
    "from": "ssr",
    "name": "ssr"
  }];
  let ssr; // Module exports

  _exports.ssr = ssr;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ssr') && (_exports.ssr = ssr = require ? require('./ssr').ssr : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjlDLElBQWhCLENBQXFCOEMsSUFBckIsQ0FBUkE7VUFDQWpELElBQUksQ0FBQ3NELE9BQUx0RCxLQUFpQixLQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQWdCdUQsTUFBaEIsQ0FBdUJ2RCxJQUFJLENBQUNzRCxPQUE1QixDQUFuQ3REO1VBQ0EsS0FBSyxVQUFMLENBQWdCRyxJQUFoQixDQUFxQkgsSUFBSSxDQUFDc0IsT0FBMUI7VUFFQSxNQUFNa0MsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxVQUFWLENBQWQ7VUFDQSxLQUFLQyxhQUFMLENBQW1CRixLQUFuQjtRQUNIOztNQXJDc0QsQ0FBN0IsRUFBWiIsIm5hbWVzIjpbIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwibWFuYWdlZCIsInN0YXJ0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImluaXRpYWxpc2VkIiwicmVhZHkiLCJ0aGVuIiwic3NyIiwicGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsImxvZyIsImNvbnRhaW5lciIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJoYXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImhpZXJhcmNoeSIsImxvY2FsTmFtZSIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImFjdGl2ZSIsImNvbnRyb2xsZXIiLCJzaG93IiwiRXJyb3IiLCJoaWRkZW4iLCJoaWRlIiwibGF5b3V0Iiwia2V5cyIsImRvbmUiLCJvbiIsIm1haW4iLCJsYXlvdXRzIiwiZ2V0IiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJAYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiQGJleW9uZC1qcy93aWRnZXRzL2xheW91dC9zc3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==