define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", null], ["@beyond-js/ui", null], ["@beyond-js/inspect", null], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/module-create",
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
    hash: 2508294455,
    creator: function (require, exports) {
      exports.txt = {
        "title": "Creación de un nuevo módulo",
        "subtitle": "Indica que tipo de modulo desea crear",
        "additionalFeatures": "Configuración adicional",
        "types": {
          "bundles": {
            "title": "Modulo en blanco",
            "description": "Se crea una aplicación configurada y en blanco para que puedas definir lo que consideres necesario desde cero."
          },
          "templates": {
            "title": "Basic template",
            "description": "Elige una de las plantillas bases de los tipos de modulo para que puedas guiarte y avanzar de manera simple"
          }
        },
        "actions": {
          "changeModuleType": "Cambiar tipo de modulo",
          "next": "Siguiente",
          "back": "Volver"
        },
        "templates": {
          "title": "Plantilla",
          "options": [{
            "id": "page",
            "title": "Página en blanco",
            "description": "Módulo de página basico para web",
            "icon": "web"
          }, {
            "id": "server_page",
            "title": "Módulo con servicio node",
            "description": "Página con servicio y conexión webSocket implementada",
            "icon": "server"
          }, {
            "id": "mobile_login",
            "title": "Mobile login",
            "description": "Pagina con diseño login para aplicación de telefonos",
            "icon": "mobile"
          }]
        },
        "bundles": {
          "title": "Tipo de modulo",
          "options": [{
            "id": "page",
            "title": "Página",
            "description": "Un modulo que puede ser accedido por medio de una URL."
          }, {
            "id": "widget",
            "title": "Widget",
            "description": "Exporta un componente web que permite trabajar bajo arquitecturas de micro-frontends o Islands."
          }, {
            "id": "layout",
            "title": "Layout",
            "description": "Permite definir la estructura general de varias páginas y compartir elementos en común de la aplicación"
          }, {
            "id": "code",
            "title": "Código",
            "description": "Tiene multiples funciones. Puede ser un componente react que será utilizado en múltiples páginas y modulos, o puede ser código para manejo de modelos y lógica."
          }, {
            "id": "bridge",
            "title": "Bridge",
            "description": "Módulos que permiten integrar lógica backend con el cliente por medio de websockets automáticamente "
          }, {
            "id": "ts",
            "title": "Typescript",
            "description": "Ideal para implementar cualquier tipo de lógica que solo requira código typescript y no otros procesadores."
          }, {
            "id": "start",
            "title": "Start",
            "description": "Permiten agregar lógica que debe ejecutarse al principio de la aplicación."
          }]
        },
        "page": {
          "layout": "Layout",
          "input": {
            "layout": {
              "placeholder": "Seleccione."
            }
          }
        },
        "processors": "Procesadores",
        "form": {
          "steps": {
            "first": "Datos Generales",
            "second": "Detalles del módulo"
          },
          "name": "Subpath",
          "description": "Descripción",
          "title": "Titulo",
          "developer": "Desarrollador",
          "webcomponent": "Nombre del Web Component",
          "multilanguage": "¿Archivo de texto?",
          "server": "¿Código servidor?",
          "styles": "¿Hojas de estilo?",
          "url": "URL",
          "button": "CREAR",
          "errors": {
            "route": "Ya existe un modulo con esta ruta definida:",
            "element": "El nombre del web component debe tener dos palabras separadas por '-'"
          }
        },
        "placeholder": {
          "name": "Define un nombre con la caracteristica principal de tu modulo",
          "title": "Mi modulo con beyondJS",
          "description": "Este modulo tiene potencial",
          "developer": "Tu nombre de desarrollador",
          "webcomponent": "web-component",
          "button": "button"
        },
        "help": {
          "name": "El nombre del modulo define el nombre de la carpeta.",
          "description": "Una descripción de que hace el modulo",
          "title": "Titulo a utilizar",
          "developer": "El desarrollador es el autor, es necesario agregarlo para poder utilizarlo como dependencia en otro modulo.",
          "url": "Define un nombre para tu ruta por defecto",
          "styles": "Las hojas de estilo, por defecto se manejan con sass.",
          "webcomponent": "Es el nombre de la etiqueta HTML que se utilizará para incluirlo. Debe estar en minúsculas y con dos palabras separadas por '-'",
          "titles": {
            "text": "Definicion en el module.json para archivos de textos",
            "server": "Definicion en el module.json para backend del modulo",
            "styles": "Definicion en el module.json para hojas de estilo con sass"
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