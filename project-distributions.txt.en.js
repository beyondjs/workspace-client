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
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-distributions",
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
    hash: 1098882464,
    creator: function (require, exports) {
      exports.txt = {
        "errors": {
          "noSelected": "the application selected does not has distributions",
          "ALREADY_EXISTS": "A distribution with this configuration already exists",
          "PORT_USED": "There is already a distribution with the indicated port"
        },
        "modal": {
          "title": "Let's add a new distribution",
          "header": "Configure",
          "formHeader": "General Settings"
        },
        "actions": {
          "add": "Add"
        },
        "callToAction": "To run your project, press the run button on the distribution you want to use.",
        "platforms": {
          "web": "Web",
          "backend": "Backend",
          "android": "Android",
          "ios": "iOS",
          "ssr": "SSR",
          "node": "Node",
          "deno": "Deno"
        },
        "props": {
          "name": {
            "label": "Distribution name",
            "tooltip": "Identifier name"
          },
          "platform": {
            "label": "Platform",
            "tooltip": "Corresponds to the platform on which you want to distribute the code"
          },
          "environment": {
            "label": "Entorno",
            "development": "Desarrollo",
            "production": "Producción"
          },
          "ports": {
            "title": "Ports settings",
            "http": {
              "label": "Http server",
              "tooltip": "Port on which the http server in charge of the SSR will run."
            },
            "inspect": {
              "label": "Inspect port",
              "tooltip": "It will allow code inspection through the dev tools"
            },
            "bundles": {
              "label": "DevServer port",
              "tooltip": "The DevServer returns all the resources requested in the development process"
            },
            "label": "Port",
            "error": "Port isn't available",
            "success": "Port checked and available",
            "tooltip": "Check port"
          },
          "backend": "Backend",
          "ts": "TS",
          "ssr": "SSR",
          "compress": "Compress",
          "default": "default",
          "checkType": "Check types",
          "bundler": {
            "label": "Modules format",
            "tooltip": "Format used for bundle packaging"
          },
          "advancedSettings": "Advanced settings"
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