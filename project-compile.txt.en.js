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
      "vspecifier": "@beyond-js/workspace@1.1.1/project-compile",
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
    hash: 3777557989,
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
          "title": "There is no process running"
        },
        "title": "Process",
        "start": {
          "title": "Select a distribution"
        },
        "actions": {
          "compile": "Compile",
          "declarations": "generate declarations",
          "addDistribution": "Add distribution",
          "new": "Create new compilation",
          "add": "Add distribution",
          "again": "Run again",
          "process": "Process"
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
          "error": "Process generated with errors",
          "success": "Process has been done successfully",
          "processing": "Processing"
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