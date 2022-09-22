define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/module-view",
      "multibundle": true
    },
    "type": "txt"
  }, _amd_module.uri).package('es');

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
    hash: 1596627786,
    creator: function (require, exports) {
      exports.txt = {
        "title": "Titulo del modulo",
        "name": "Nombre del modulo",
        "path": "Directorio",
        "description": "Descripción",
        "empty": {
          "title": "This module does not have name, add one",
          "description": "Add a description"
        },
        "hmr": "HMR",
        "labels": {
          "consumers": "Consumidores",
          "dependencies": "Dependencias",
          "totalFiles": "Archivos totales",
          "bundles": "Bundles"
        },
        "diagnostics": {
          "generalTitle": "Errores Generales",
          "title": "Errors and warnings in bundle ",
          "general": "General",
          "files": "Files",
          "overwrites": "Overwrites",
          "dependencies": "Dependencies",
          "fetching": "Validando diagnosticos del módulo",
          "ready": "Módulo validado el"
        },
        "processors": {
          "alerts": "Errors and Warnings",
          "jsx": "JSX Code",
          "js": "JS / Javascript Code",
          "scss": "SCSS / Stylesheets",
          "ts": "TS / Typescript code",
          "less": "LESS / Stylesheets",
          "txt": "TXT / TEXTS"
        },
        "server": {
          "title": "Código Backend",
          "created": "Configurados correctamente",
          "empty": {
            "title": "Este módulo no posee código backend",
            "action": "Crear",
            "fetching": "Creando backend...",
            "description": "El código backend te permite integrar código node con tu modulo cliente de manera simple y eficaz por medio de WebSockets."
          }
        },
        "overwrites": {
          "title": "Overwrites",
          "created": "Configurados correctamente",
          "empty": {
            "title": "Este módulo no posee código backend",
            "action": "Crear",
            "fetching": "Configurando idiomas",
            "description": "Agrega multiples idiomas a tu módulo de manera sencilla"
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

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});