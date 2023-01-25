define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.2"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.7"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.7/error"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /***********************
  INTERNAL MODULE: ./error
  ***********************/

  ims.set('./error', {
    hash: 1344789388,
    creator: function (require, exports) {
      "use strict";

      const prepareStackTrace = Error => {
        Error.prepareStackTrace = (err, frames) => {
          for (const frame of frames) {
            if (frame.isNative()) continue;
            const file = frame.getFileName();
            const line = frame.getLineNumber();
            const column = frame.getColumnNumber();
            console.log(file, line, column);
          }
          return err.stack;
        };
      };
      Error.prepareStackTrace && prepareStackTrace(Error);
    }
  });

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BT0EsTUFBTUEsaUJBQWlCLEdBQUlDLEtBQVUsSUFBVTtRQUMzQ0EsS0FBSyxDQUFDRCxpQkFBaUIsR0FBRyxDQUFDRSxHQUFVLEVBQUVDLE1BQWtCLEtBQUk7VUFDekQsS0FBSyxNQUFNQyxLQUFLLElBQUlELE1BQU0sRUFBRTtZQUN4QixJQUFJQyxLQUFLLENBQUNDLFFBQVEsRUFBRSxFQUFFO1lBRXRCLE1BQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDRyxXQUFXLEVBQUU7WUFDaEMsTUFBTUMsSUFBSSxHQUFHSixLQUFLLENBQUNLLGFBQWEsRUFBRTtZQUNsQyxNQUFNQyxNQUFNLEdBQUdOLEtBQUssQ0FBQ08sZUFBZSxFQUFFO1lBRXRDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxFQUFFRSxJQUFJLEVBQUVFLE1BQU0sQ0FBQzs7VUFHbkMsT0FBT1IsR0FBRyxDQUFDWSxLQUFLO1FBQ3BCLENBQUM7TUFDTCxDQUFDO01BRUFiLEtBQWEsQ0FBQ0QsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDQyxLQUFLLENBQUMiLCJuYW1lcyI6WyJwcmVwYXJlU3RhY2tUcmFjZSIsIkVycm9yIiwiZXJyIiwiZnJhbWVzIiwiZnJhbWUiLCJpc05hdGl2ZSIsImZpbGUiLCJnZXRGaWxlTmFtZSIsImxpbmUiLCJnZXRMaW5lTnVtYmVyIiwiY29sdW1uIiwiZ2V0Q29sdW1uTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==