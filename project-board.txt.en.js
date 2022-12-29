define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/project-board",
      "multibundle": true
    },
    "type": "txt"
  }, _amd_module.uri).package('en');
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
    hash: 1322440149,
    creator: function (require, exports) {
      exports.txt = {
        "actions": {
          "navigate": "Navigate",
          "process": "Project actions",
          "editDescription": "Edit description",
          "generatingDeclarations": "generating...",
          "publish": "Publish",
          "update": "Update dependencies",
          "declarations": "Generate declarations",
          "start": "Play",
          "stop": "Stop",
          "restart": "Restart"
        },
        "scanner": {
          "title": "scanned modules"
        },
        "application": {
          "info": {
            "description": "Description",
            "title": "Title",
            "name": "Name",
            "empty": {
              "description": "The application does not have a description",
              "title": "Add a title",
              "name": "Add a name"
            }
          },
          "tabs": {
            "modules": "Modules",
            "distributions": "Distributions",
            "settings": "Settings"
          },
          "actions": {
            "save": "Save",
            "close": "Close"
          },
          "error404": "Application not found"
        },
        "process": {
          "title": "Processes",
          "start": {
            "title": "Select a distribution to compile"
          },
          "empty": "No hay distribuciones agregadas. Por favor, crea una con la plataforma y especificaciones que desees compilar.",
          "actions": {
            "market": "Marketplace",
            "compile": "Compile",
            "declarations": "Generate declarations"
          }
        },
        "distribution": {
          "environment": "Environment",
          "ts": "TS",
          "platform": "Platform",
          "ssr": "SSR",
          "ports": {
            "title": "Ports settings",
            "http": "Http server",
            "inspect": "Inspect port",
            "bundles": "DevServer port"
          },
          "empty": {
            "title": "Distributions",
            "execute": {
              "title": "Execute project",
              "message": "You need to add a distribution with the platform you want to run the project on",
              "action": "Add distribution"
            },
            "compile": {
              "title": "Compile project",
              "message": "You need to add a distribution with the platform you want to build the project on",
              "action": "Add distribution"
            }
          }
        },
        "modules": {
          "emptyProcessors": "This module does not have processors",
          "actions": {
            "add": "Create module",
            "navigate": "Navigate"
          },
          "empty": {
            "new": {
              "title": "Good! your project has already been created",
              "description": "All in BeyondJS is about modules. Let's create the first one."
            },
            "application": {
              "title": "There are no modules in your application yet ",
              "description": "Let's start with the first step"
            },
            "filter": {
              "title": "The project does not have modules for this type of bundle",
              "description": "Create a module"
            }
          }
        },
        "compilation": "Compilación",
        "transpilation": "Transpilación",
        "alerts": {
          "title": "Alertas y warnings de la aplicación",
          "subtitle": "Resumen"
        },
        "header": {
          "searcher": "What are you looking for?"
        },
        "titles": {
          "modules": "Modules",
          "pages": "Pages",
          "routes": "routes",
          "statics": "Statics",
          "static": "Static",
          "templates": "Templates",
          "excluded": "Excluided files",
          "path": "path",
          "host": "host",
          "errors": "Errors:",
          "warnings": "Warnings:",
          "bees": "BEEs"
        },
        "navigate": "Navegar",
        "items": {
          "title": "Add new title",
          "description": "Module description",
          "icon": "pen",
          "btnDetails": "Details",
          "btnEdit": "Edit",
          "update": "Update dependencies"
        },
        "search": "Search",
        "empty": {
          "primary": "We are just beginning",
          "secondary": "click and create your first module"
        },
        "info": {
          "route": "URL"
        },
        "processors": {
          "alerts": "Errors and Warnings",
          "jsx": "JSX Code",
          "js": "JS / Javascript Code",
          "scss": "SCSS / Stylesheets",
          "ts": "TS / Typescript code",
          "less": "LESS / Stylesheets",
          "txt": "TXT / TEXTS"
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt;

  // Module exports
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