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
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-compile",
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
    hash: 1029374951,
    creator: function (require, exports) {
      exports.txt = {
        "sections": {
          "error": {
            "title": "Summary of errors"
          },
          "status": {
            "title": "Compilation status"
          }
        },
        "empty": {
          "title": "There is no compilation in process"
        },
        "title": "Compilation",
        "start": {
          "title": "Select a distribution"
        },
        "actions": {
          "compile": "Compile",
          "addDistribution": "Add distribution",
          "new": "Create new compilation",
          "add": "Add distribution"
        },
        "name": "Distribution name",
        "platform": {
          "label": "Platform",
          "options": {
            "web": "Web",
            "backend": "Backend",
            "android": "Android",
            "ios": "iOS",
            "ssr": "SSR",
            "node": "Node"
          },
          "environment": "Environment",
          "port": {
            "label": "Port",
            "error": "Port isn't available",
            "success": "Port checked and available",
            "tooltip": "Check port"
          }
        },
        "log": {
          "title": "Compilation Status",
          "errorLog": "Summary of errors obtained in building process"
        },
        "alerts": {
          "error": "Build generated with errors",
          "success": "Build has been done successfully",
          "process": "Building project"
        },
        "finished": {
          "directory": "Location directory"
        },
        "ts": "TS",
        "default": "default",
        "checkType": "Check types",
        "ssr": "SSR",
        "titleModal": "Let's add a new distribution",
        "compress": "Compress",
        "add": "Add",
        "environments": {
          "dev": "Development",
          "prod": "Production"
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