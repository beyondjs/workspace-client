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
      "vspecifier": "@beyond-js/workspace@1.1.1/module-view",
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
    hash: 650924236,
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
          "declarations": "Declaraciones",
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
        },
        "declarations": {
          "success": "Declaraciones generadas exitosamente",
          "notProcessed": "No se han procesado las declaraciones del modulo"
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