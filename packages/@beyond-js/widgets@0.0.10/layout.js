define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "@beyond-js/widgets@0.0.10/render"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ssr = _exports.hmr = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/widgets@0.0.10/layout"
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
    hash: 2827933189,
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

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCOUMsSUFBaEIsQ0FBcUI4QyxJQUFyQixDQUFSQTtVQUNBakQsSUFBSSxDQUFDc0QsT0FBTHRELEtBQWlCLEtBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsQ0FBZ0J1RCxNQUFoQixDQUF1QnZELElBQUksQ0FBQ3NELE9BQTVCLENBQW5DdEQ7VUFDQSxLQUFLLFVBQUwsQ0FBZ0JHLElBQWhCLENBQXFCSCxJQUFJLENBQUNzQixPQUExQjtVQUVBLE1BQU1rQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLFVBQVYsQ0FBZDtVQUNBLEtBQUtDLGFBQUwsQ0FBbUJGLEtBQW5CO1FBQ0g7O01BckNzRCxDQUE3QixFQUFaIiwibmFtZXMiOlsibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJzc3IiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiYWN0aXZlIiwiY29udHJvbGxlciIsInNob3ciLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJsYXlvdXQiLCJrZXlzIiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkBiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvY2hpbGRyZW4udHMiLCJAYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L3Nzci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19