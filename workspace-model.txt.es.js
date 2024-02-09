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
    hash: 3360827658,
    creator: function (require, exports) {
      exports.txt = {
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
          "npm": "Compila tu paquete para publicar en npm",
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
              "closeAll": "Cerrar las otras pestañas"
            },
            "labels": {
              "apps": "Proyectos",
              "navigator": "Navegador",
              "compile": "Compilador",
              "static": "Estaticos",
              "app": "Aplicación",
              "appConfig": "Configuración",
              "module": "Modulo",
              "settings": "Preferencias"
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
          "title": "Bienvenido a la version 1.0.2 del Workspace",
          "description": "Hemos corregido algunos errores y añadido nuevas funcionalidades para mejorar tu experiencia de desarrollo",
          "actions": {
            "accept": "Aceptar"
          },
          "items": [["code", "El editor de texto ya está disponible para su uso", "Ahora puedes acceder al código desde el aside y la sección de revisión de bundles"], ["module", "Specifier y VSpecifiers", "Los especificadores de los bundles están disponibles en el board de cada módulo, puedes copiarlos con un clic"], ["compile", "Generación de declaraciones por módulo", "En el board de cada módulo puedes generar sus declaraciones haciendo clic en el icono"], ["apps", "Corregido error de navegación entre proyectos", "Ahora puedes acceder al panel de compilación y navegar distintos proyectos al mismo tiempo"]]
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