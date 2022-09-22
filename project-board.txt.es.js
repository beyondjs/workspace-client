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
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-board",
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
    hash: 3637122135,
    creator: function (require, exports) {
      exports.txt = {
        "actions": {
          "navigate": "Navegar",
          "compile": "Compilar",
          "editDescription": "Edit description",
          "generatingDeclarations": "Generando...",
          "publish": "Publish",
          "update": "Update dependencies",
          "declarations": "Generar declaraciones",
          "start": "Play",
          "stop": "Stop",
          "restart": "Restart",
          "scanAll": "Scan all",
          "scan": "Scan",
          "distributions": "Distribuciones"
        },
        "scanner": {
          "title": "modulos analizados"
        },
        "application": {
          "info": {
            "description": "Descripción",
            "title": "Titulo",
            "name": "Nombre",
            "empty": {
              "description": "La aplicación no posee descripción",
              "title": "Agrega un titulo para tu aplicación",
              "name": "Agrega un nombre para tu aplicación"
            }
          },
          "tabs": {
            "modules": "Módulos",
            "distributions": "Distribuciones",
            "settings": "Configuración"
          },
          "actions": {
            "save": "Guardar",
            "close": "Cerrar"
          },
          "error404": "Application not found"
        },
        "modules": {
          "actions": {
            "add": "Crear modulo",
            "navigate": "Navegar"
          },
          "empty": {
            "new": {
              "title": "¡Excelente! Ya creamos tu aplicación",
              "description": "En <b class=\"primary-color\">BeyondJS</b> todo se maneja con modulos. Avancemos creando el primero."
            },
            "application": {
              "title": "Aun no existen módulos en tu aplicación",
              "description": "Demos el primer paso"
            },
            "filter": {
              "title": "No posees módulos para este tipo bundle",
              "description": "Crea el primero"
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
          "searcher": "¿Que buscas?"
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