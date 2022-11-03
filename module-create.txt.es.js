define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/module-create",
      "multibundle": true
    },
    "type": "txt"
  }, _amd_module.uri).package('.');

  ;

  __pkg.dependencies.update([]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 4193170316,
    creator: function (require, exports) {
      exports.txt = {
        "title": "Create a new module",
        "subtitle": "What kind of module do you need?",
        "additionalFeatures": "Additional Configuration",
        "types": {
          "bundles": {
            "title": "Blank module",
            "description": "Empty module to start from nothing."
          },
          "templates": {
            "title": "Basic template",
            "description": "Choose one of the base templates of the module types so that you can guide yourself and advance in a simple way"
          }
        },
        "actions": {
          "changeModuleType": "Change module type",
          "next": "Next",
          "back": "Back"
        },
        "templates": {
          "title": "Template",
          "options": [{
            "id": "page",
            "title": "Blank page",
            "description": "Blank page for web projects",
            "icon": "web"
          }, {
            "id": "server_page",
            "title": "Module with node service",
            "description": "Page with service and WebSocket connection implemented",
            "icon": "server"
          }, {
            "id": "mobile_login",
            "title": "Mobile login",
            "description": "Basic design for mobile projects",
            "icon": "mobile"
          }]
        },
        "bundles": {
          "title": "Bundle type",
          "options": [{
            "id": "page",
            "title": "Página",
            "description": "A module that can be accessed via a URL"
          }, {
            "id": "widget",
            "title": "Widget",
            "description": "Exports a web component that allows working under micro-frontends or Islands architectures."
          }, {
            "id": "layout",
            "title": "Layout",
            "description": "Permite definir la estructura general de varias páginas y compartir elementos en común de la aplicación"
          }, {
            "id": "code",
            "title": "Code",
            "description": "Multipurpose. You can be a logic module or with a graphical interface."
          }, {
            "id": "bridge",
            "title": "Bridge",
            "description": "Modules that allow to integrate backend logic with the client through websockets automatically"
          }, {
            "id": "ts",
            "title": "Typescript",
            "description": "Ideal for implementing any type of logic that only requires typescript code and no other processors."
          }, {
            "id": "start",
            "title": "Start",
            "description": "They allow you to add logic that must be executed at the beginning of the application."
          }]
        },
        "page": {
          "layout": "Layout",
          "queryString": "Url parameters?",
          "input": {
            "layout": {
              "placeholder": "Select."
            }
          }
        },
        "processors": "Processors",
        "thirdTitle": "Bundle type",
        "form": {
          "steps": {
            "first": "General data",
            "second": "Module details"
          },
          "name": "Subpath",
          "description": "Description",
          "title": "Title",
          "multilanguage": "translations?",
          "webcomponent": "Web Component name",
          "server": "Server code",
          "styles": "Styles",
          "url": "URL",
          "button": "Create",
          "errors": {
            "route": "There is already a module with this defined path:",
            "element": "The web component name must have two words separated by '-'"
          }
        },
        "placeholder": {
          "name": "Define a semantic name for your module",
          "title": "My beyondJs module",
          "description": "Add a description of your module",
          "button": "button",
          "webcomponent": "web-component"
        },
        "help": {
          "name": "The module name defines the folder name and the import path.",
          "description": "A description of what the module does",
          "title": "A title to use",
          "url": "The URL to navigate to your module in the app",
          "styles": "The style sheets, by default, are handled with sass.",
          "webcomponent": "Is the name of the HTML tag which going to be used to include it. Must be in lowercase and with two words separated by '-'",
          "titles": {
            "text": "Definicion en el module.json para archivos de textos",
            "server": "Definicion en el module.json para backend del modulo",
            "styles": "Definicion en el module.json para hojas de estilo con sass"
          }
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
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