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
    hash: 83293035,
    creator: function (require, exports) {
      exports.txt = {
        "title": "Titulo del modulo",
        "name": "Nombre del modulo",
        "path": "Directorio",
        "description": "Descripción",
        "empty": {
          "title": "Este modulo no tiene un nombre, agregale uno!",
          "description": "Agrega una description"
        },
        "hmr": "HMR",
        "platforms": {
          "total": "Total ",
          "label": "plataformas",
          "selected": {
            "unique": "seleccionada",
            "multiple": "seleccionadas"
          },
          "actions": {
            "save": "Save"
          }
        },
        "labels": {
          "consumers": "Consumidores",
          "dependencies": "Dependencias",
          "totalFiles": "Archivos totales",
          "distributions": "Distribuciones",
          "settings": "Configuracion",
          "bundles": "Bundles"
        },
        "bundles": {
          "selectCspec": "Seleccione la distribución para poder analizar el código de sus bundles.",
          "state": {
            "errors": "Errors",
            "wanrings": "Warnings",
            "date": "Module validated on"
          }
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
        },
        "dependencies": {
          "legend": "Dependencias encontrados",
          "callToAction": "No hay dependencias cargados",
          "actions": {
            "load": "Validar"
          }
        },
        "consumers": {
          "legend": "Consumidores encontrados",
          "callToAction": "No hay consumidores cargados",
          "actions": {
            "load": "Validar"
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