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
      "vspecifier": "@beyond-js/workspace@1.1.1/project-create",
      "multibundle": true
    },
    "type": "txt"
  }, _amd_module.uri).package('en');
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
    hash: 4107016898,
    creator: function (require, exports) {
      exports.txt = {
        "subtitle": "Select what you want to do",
        "actions": {
          "submit": "Create",
          "back": "Back"
        },
        "created": "Application created",
        "form": {
          "name": {
            "label": "Project name (specifier)",
            "info": "Follows the NPM standard, examples: \"@scope/package-name\" or \"package-name\" instead."
          },
          "version": {
            "label": "Version",
            "info": "Initial version of the project"
          },
          "title": {
            "label": "Add a title to your new project",
            "info": "Commercial or user friendly name for the project"
          },
          "description": {
            "label": "Description",
            "info": "Here you can explain the purpose of your project (useful if you will publish it to NPM)"
          },
          "types": {
            "titles": {
              "empty": "Create Project",
              "overview": "Indicate what type of application you want to create and start your experience",
              "create": "CREATE",
              "back": "BACK"
            },
            "empty": {
              "description": "A configured and blank project is created so that you can define what you consider necessary from scratch."
            },
            "node": {
              "title": "Node Project",
              "description": "Project that will be compiled to be executed in a Node.js environment."
            },
            "backend": {
              "title": "Backend",
              "description": "Node.js project that exposes communication interfaces to be consumed by both web clients and other backends"
            },
            "web": {
              "title": "Web",
              "description": "Web, Android, iOS project. Both the client code and the backend code coexist in the same  project."
            },
            "express": {
              "title": "Express template",
              "description": "Create an express server in the simplest way possible"
            },
            "library": {
              "title": "Library",
              "description": " Container of client and server modules to be consumed by other projects.."
            },
            "web-backend": {
              "title": "Web con Backend",
              "description": "Web App with backend."
            },
            "board": {
              "title": "Board template",
              "description": "Template with Trello style to start coding."
            },
            "react": {
              "title": "React starter app",
              "description": "React configured and ready to use."
            },
            "svelte": {
              "title": "Svelte",
              "description": "Svelte configured and ready to use."
            },
            "vue": {
              "title": "Vue App",
              "description": "Svelte configured and ready to use."
            },
            "web-backend-app": {
              "title": "Template Web-Backend App",
              "description": "Web App template with backend."
            }
          },
          "npm": "Install npm dependencies?",
          "actions": {
            "submit": "Create"
          }
        },
        "tabs": {
          "community": "Community",
          "blank": "Blank",
          "template": "Templates"
        },
        "errors": {
          "title": "An error has ocurred",
          "APP_EXISTS": "A folder with this name already exists in your directory",
          "PROJECT_IDENTIFIER": "the project identifier must have the following structure:  \"@scope/package-name\" or \"package-name\""
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