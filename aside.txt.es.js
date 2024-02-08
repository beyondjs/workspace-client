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
      "vspecifier": "@beyond-js/workspace@1.1.1/aside",
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
    hash: 3331859340,
    creator: function (require, exports) {
      exports.txt = {
        "favorites": {
          "title": "Favorites",
          "actions": {
            "save": "Guardar en favoritos",
            "delete": "¿Desea eliminar esta elemento de sus favoritos?",
            "new": "Nueva Lista",
            "select": "Seleccionar de la lista existente"
          },
          "newList": "Nueva lista",
          "goToList": "Seleccionar lista existente",
          "newControl": {
            "placeholder": "Nombre de la lista",
            "label": "Nombre de la lista"
          },
          "empty": {
            "title": "No Favorites",
            "description": "Here you will see each element added as a favorite"
          }
        },
        "empty": "Selecciona un modulo para que puedas ver su contenido",
        "list": {
          "empty": "No hay elementos"
        },
        "backend": {
          "title": "Backend code",
          "sessions": "Sessions Backend",
          "core": "Core Backend",
          "description": "BeyondJS permite trabajar de manera simple con acciones en realtime implementadas con websocket, puedes configurarlo si deseas.",
          "action": "Crear",
          "read": "Leer más"
        },
        "declarations": {
          "title": "Declaraciones",
          "description": "Las declaraciones permiten que el IDE identifique los objetos utilizados y garantice el buen funcionamiento de typescript",
          "action": "Actualizar"
        },
        "static": {
          "title": "Static files",
          "form": {
            "title": "Selecciona una image o arrastrala.",
            "errors": {
              "invalidFile": " El archivo subido no es válido, por favor verifiquelo y vuelva a intentarlo"
            },
            "header": {
              "title": "Agrega un archivo",
              "detail": "Selecciona un archivo como recurso estatico"
            },
            "actions": {
              "close": "Cerrar"
            }
          }
        },
        "dependencies": {
          "title": "Dependencies"
        },
        "template": {
          "title": "Template",
          "description": "El template permite definir la configuración de estilos general de la aplicación y los overwrites.",
          "styles": {
            "title": "Estilos",
            "description": "Estilos generales de la aplicación, que serán compartidos entre todos los módulos."
          }
        },
        "overwrites": {
          "title": "Overwrites",
          "description": "Los overwrites de un módulo te permiten customizar el diseño y los textos de un módulo."
        },
        "publish": {
          "title": "Publicar",
          "description": "El proceso de compilación de tu aplicación es esencial para poder dejar los archivos minificados, integrados y oprimizados para la puesta en marcha web o móvil, por suerte, beyond hace todo esto por tí."
        },
        "actions": {
          "readMore": "Leer más",
          "publish": "Publicar"
        },
        "tree": {
          "actions": {
            "delete": "Delete",
            "create": "Create",
            "addBundle": "Add bundle",
            "rename": "Rename",
            "save": "Save"
          },
          "confirm": {
            "delete": "Do you really want to remove this element?"
          },
          "modules": "Modules",
          "delete": "Delete",
          "rename": "Rename",
          "errors": {
            "EXT_INVALID": "Extensión no válida",
            "default": "Ha ocurrido un error, reinicie el servicio y vuelva a intentarlo"
          },
          "itemActions": {
            "create": {
              "title": "Crear archivo",
              "placeholder": "/path/file.ext",
              "action": "Guardar",
              "label": "Nombre del archivo"
            }
          },
          "files": {
            "delete": "¿Realmente deseas eliminar el archivo?",
            "actions": {
              "save": "Guardar",
              "create": "Crear",
              "delete": "Eliminar",
              "new": "Nueva Lista",
              "select": "Seleccionar de la lista existente"
            }
          },
          "favorites": {
            "title": "Selecciona la lista de favoritos",
            "actions": {
              "save": "Guardar en favoritos",
              "delete": "¿Desea eliminar esta elemento de sus favoritos?",
              "new": "Nueva Lista",
              "select": "Seleccionar de la lista existente"
            },
            "newList": "Nueva lista",
            "goToList": "Seleccionar lista existente",
            "newControl": {
              "placeholder": "Nombre de la lista",
              "label": "Nombre de la lista"
            }
          },
          "bundle": {
            "title": "Selecciona un tipo de bundle",
            "widget": {
              "title": "Titulo bundle",
              "inputs": {
                "route": {
                  "label": "Page Route",
                  "error": "invalid URL"
                },
                "type": {
                  "label": "Widget Type",
                  "placeholder": "Select..."
                },
                "name": {
                  "label": "Web Component Name",
                  "error": "Invalid Name"
                },
                "layoutId": {
                  "label": "Identificador del Layout",
                  "error": "El identificador no es valido"
                }
              }
            },
            "actions": {
              "save": "Agregar bundle",
              "next": "Continuar"
            }
          },
          "static": {
            "title": "Static files",
            "form": {
              "title": "Selecciona una imagen o arrastrala.",
              "errors": {
                "invalidFile": " El archivo subido no es válido, por favor verifiquelo y vuelva a intentarlo"
              },
              "header": {
                "title": "Agrega un archivo",
                "detail": "Selecciona un archivo como recurso estatico"
              },
              "actions": {
                "close": "Cerrar"
              }
            }
          },
          "module": {
            "title": "Módulos anclados",
            "empty": {
              "title": "Select a module",
              "description": "Go to the application tab and select the module you want to use as a work table"
            }
          },
          "template": {
            "application": "Application",
            "global": "Globals",
            "processors": "Processors",
            "title": "Template",
            "description": "El template permite definir la configuración de estilos general de la aplicación y los overwrites.",
            "styles": {
              "title": "Estilos",
              "description": "Estilos generales de la aplicación, que serán compartidos entre todos los módulos."
            }
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