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
      "vspecifier": "@beyond-js/dashboard@0.0.1/project-create",
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
    hash: 1716435997,
    creator: function (require, exports) {
      exports.txt = {
        "subtitle": "Indique que tipo de aplicación desea crear",
        "created": "Aplicación creada",
        "actions": {
          "submit": "Crear",
          "back": "Volver"
        },
        "form": {
          "scope": {
            "label": "Nombre del proyecto (Especificador)",
            "info": "Ejemplos: \"@organizacion/nombre-paquete\" o \"nombre-paquete\""
          },
          "version": {
            "label": "Versión",
            "info": "Versión inicial del proyecto"
          },
          "title": {
            "label": "Titulo",
            "info": "Nombre comercial para tu proyecto"
          },
          "description": {
            "label": "Descripción",
            "info": "Aquí puede explicar el propósito de su proyecto (útil si lo publicará en NPM)"
          },
          "types": {
            "titles": {
              "empty": "Crear Proyecto",
              "overview": "Indique qué tipo de aplicación desea crear e inicie su experiencia",
              "create": "CREAR",
              "back": "VOLVER"
            },
            "empty": {
              "title": "Proyecto en blanco",
              "description": "Configuración mínima para comenzar a crear.."
            },
            "node": {
              "title": "Aplicación Node",
              "description": "Aplicación que se compilará para ejecutarse en un entorno Node.js."
            },
            "backend": {
              "title": "Backend",
              "description": "Crea un servicio node que pueda ser consumido por proyectos via websocket"
            },
            "web": {
              "title": "Web",
              "description": "Aplicación web, Android, iOS. Tanto el código de cliente como el código de backend coexisten en la misma aplicación."
            },
            "express": {
              "title": "Express template",
              "description": "Crea un servidor express de la manera mas simple posible"
            },
            "library": {
              "title": "Library",
              "description": "Contenedor de módulos cliente y servidor para ser consumidos por otras proyectos."
            },
            "web-backend": {
              "title": "Web con Backend",
              "description": "Aplicación web con conexión backend."
            },
            "board": {
              "title": "Plantillas Basicas",
              "description": "Plantilla básica optimizada para enfocarte en empezar a trabar en los modulos de tu SPA."
            },
            "list": {
              "title": "Task App",
              "description": "Plantilla básica optimizada para enfocarte en empezar a trabar en los modulos de tu SPA."
            },
            "typescript": {
              "title": "Aplicación typescript",
              "description": "Se crea una aplicación configurada y en blanco para que puedas definir lo que consideres necesario desde cero."
            },
            "react": {
              "title": "Aplicación react",
              "description": "Aplicación básica configurada para crear módulos con React"
            },
            "svelte": {
              "title": "Svelte",
              "description": "Proyecto web con Svelte configurado."
            },
            "vue": {
              "title": "Aplicación Vue",
              "description": "Proyecto con dependencias vue configuradas para empezar a desarrollar."
            },
            "web-backend-app": {
              "title": "Plantilla Web con Backend",
              "description": "Plantilla básica de app web con conexión backend."
            }
          },
          "npm": "¿Instalar las dependencias por defecto del proyecto?",
          "actions": {
            "submit": "Crear"
          }
        },
        "tabs": {
          "community": "Comunidad",
          "blank": "Espacio en blanco",
          "template": "Plantillas"
        },
        "errors": {
          "title": "Ha ocurrido un error",
          "APP_EXISTS": "Ya existe una carpeta con ese nombre en su directorio",
          "PROJECT_IDENTIFIER": "El especificador del proyecto debe tener la siguiente estructura:  \"@scope/package-name\" or \"package-name\""
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