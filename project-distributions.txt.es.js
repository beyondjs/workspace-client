define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/backend", "0.1.8"], ["dayjs", "1.11.7"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["socket.io-client", "4.5.4"], ["@beyond-js/packages-templates", "1.0.0"], ["@beyond-js/workspace", "1.0.5"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.0.5/project-distributions",
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
    hash: 3120734056,
    creator: function (require, exports) {
      exports.txt = {
        "errors": {
          "noSelected": "the application selected does not has distributions",
          "ALREADY_EXISTS": "Ya existe una distribución con esta configuración",
          "PORT_USED": "Ya existe una distribución con el puerto indicado"
        },
        "modal": {
          "title": "Creememos Una nueva distribucion",
          "header": "Elige la configuracion para la distribucion",
          "formHeader": "Configuración general"
        },
        "actions": {
          "add": "Añadir"
        },
        "callToAction": "Para ejecutar tu proyecto, presiona el botón de ejecución en la distribución que desees utilizar. ",
        "platforms": {
          "web": "Web",
          "backend": "Backend",
          "android": "Android",
          "ios": "iOS",
          "ssr": "SSR",
          "node": "Node",
          "deno": "Deno"
        },
        "props": {
          "name": {
            "label": "Nombre de la distribución",
            "tooltip": "Nombre identificador"
          },
          "platform": {
            "label": "Plataforma",
            "tooltip": "Corresponde a la plataforma en la cual se desea distribuir el codigo"
          },
          "environment": {
            "label": "Entorno",
            "development": "Desarrollo",
            "production": "Producción"
          },
          "ports": {
            "title": "Configuración de puertos",
            "label": "Puerto",
            "error": "El puerto no está disponible",
            "success": "Puerto disponible",
            "http": {
              "label": "Puerto servidor HTTP",
              "tooltip": "Puerto sobre el cúal correrá el servidor http encargado del SSR."
            },
            "inspect": {
              "label": "Puerto de inspección",
              "tooltip": "Permitirá realizar inspección de código por medio de las dev tools"
            },
            "bundles": {
              "label": "Puerto DevServer",
              "tooltip": "El DevServer retorna todos los recursos solicitados en el proceso de desarrollo"
            }
          },
          "backend": "Backend",
          "ts": "TS",
          "ssr": "ssr",
          "default": "default",
          "compress": "Comprimir",
          "checkType": "Comprobación de tipos",
          "bundler": {
            "label": "Formato de Módulos",
            "tooltip": "Formato utilizado para el empaquetamiento de bundles"
          },
          "advancedSettings": "Configuracion avanzada"
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt;

  // Module exports
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