define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["@beyond-js/events", "0.0.6"], ["dayjs", "1.11.10"], ["emmet-monaco-es", "5.3.0"], ["monaco-editor", "0.33.0"], ["pragmate-ui", "0.0.4"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["socket.io-parser", "4.2.1"], ["engine.io-parser", "5.0.7"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@popperjs/core", "2.11.8"], ["@types/react", "16.14.56"], ["@types/react-dom", "16.9.24"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/workspace-model",
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
    hash: 3090965287,
    creator: function (require, exports) {
      exports.txt = {
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
          "npm": "Build your package to publish to npm",
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
        "footer": {
          "path": "pathname",
          "project": "Project",
          "projectEmpty": "No projects selected"
        },
        "panels": {
          "tab": {
            "actions": {
              "splitRight": "Split Right",
              "splitDown": "Split Down",
              "close": "Close",
              "closeAll": "Close other tabs"
            },
            "labels": {
              "apps": "Projects",
              "navigator": "navigator",
              "compile": "Compile app",
              "static": "Static",
              "app": "Application",
              "appConfig": "Application config",
              "module": "Module",
              "settings": "Settings"
            }
          }
        },
        "unplugged": {
          "title": "Para conectarte al Workspace debes seguir los siguientes pasos",
          "p1": "1. Instala BeyondJS:",
          "p2": "2. Inicia BeyondJS en la carpeta que desees con el siguiente comando",
          "action": "Recarga y empieza a crear."
        },
        "fixes": {
          "title": "Welcome to version 1.0.2 of the Workspace",
          "description": "We have fixed some bugs and added new features to improve your development experience",
          "actions": {
            "accept": "Accept"
          },
          "items": [["code", "Text editor is now available for use", "You can now access the code from the aside and the bundle review section"], ["module", "Specifier and VSpecifiers", "The bundle specifiers are available on the board of each module, you can copy them with a click"], ["compile", "Module declarations generation", "In the board of each module you can generate its declarations by clicking on the icon"], ["apps", "Fixed error in navigation between projects", "Now you can access the build panel and navigate different projects at the same time"]]
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt = _exports.txt = void 0;

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});