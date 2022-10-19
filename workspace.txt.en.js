define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace",
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
    hash: 3796303211,
    creator: function (require, exports) {
      exports.txt = {
        "select": {
          "title": "Compilation",
          "start": {
            "title": "Select a distribution to compile"
          },
          "empty": "No hay distribuciones agregadas. Por favor, crea una con la plataforma y especificaciones que desees compilar.",
          "actions": {
            "market": "Marketplace",
            "compile": "Compile"
          }
        },
        "distribution": {
          "environment": "Environment",
          "ts": "TS",
          "platform": "Platform",
          "ssr": "SSR",
          "ports": {
            "labels": {
              "title": "Ports",
              "http": "Http",
              "inspect": "Inspect",
              "bundles": "DevServer"
            },
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
        "footer": {
          "path": "pathname",
          "project": "Project",
          "projectEmpty": "No projects selected"
        },
        "early": {
          "title2": "Introduce your name and access code to start with us",
          "title": "The only framework for universal JavaScript",
          "label": "Entry your early code access",
          "action": "Start",
          "error": "The code is invalid, try again",
          "message": "BeyondJS is being launched in stages. We are actually offering early access for those who are interested to try  BeyondJS with us and to help with your appreciated feedback.`",
          "inputs": {
            "name": "Your name",
            "code": "Code",
            "email": "Email"
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