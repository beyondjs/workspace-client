define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
    hash: 631614332,
    creator: function (require, exports) {
      exports.txt = {
        "actions": {
          "navigate": "Navegar",
          "process": "Acciones del proyecto",
          "editDescription": "Editar descripción",
          "generatingDeclarations": "Generando...",
          "publish": "Publicar",
          "declarations": "Generar declaraciones",
          "start": "Iniciar",
          "stop": "Detener",
          "restart": "Reiniciar"
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
        "process": {
          "title": "Procesos",
          "start": {
            "title": "Selecciona una distribución para realizar la compilación"
          },
          "empty": "No hay distribuciones añadidas. Cree uno con la plataforma y las especificaciones que desea construir.",
          "actions": {
            "market": "Marketplace",
            "compile": "Compilar",
            "declarations": "Generar declaraciones"
          }
        },
        "distribution": {
          "environment": "Entorno",
          "ts": "TS",
          "platform": "Plataforma",
          "ssr": "SSR",
          "ports": {
            "title": "Puertos",
            "http": "Puerto Http",
            "inspect": "Puerto de Inspección ",
            "bundles": "Puerto DevServer"
          },
          "empty": {
            "title": "Distributions",
            "messages": {
              "execute": "Es necesario agregar una distribución con la plataforma en la que desees ejecutar el proyecto",
              "compile": "Es necesario agregar una distribución con la plataforma en la que desees compilar el proyecto"
            }
          }
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

  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});