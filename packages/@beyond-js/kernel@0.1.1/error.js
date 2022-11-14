define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/backend", "0.1.0"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/kernel@0.1.1/error"
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
  }); // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPQSxNQUFNQSxpQkFBaUIsR0FBSUMsS0FBRCxJQUFxQjtRQUMzQ0EsS0FBSyxDQUFDRCxpQkFBTkMsR0FBMEIsQ0FBQ0MsR0FBRCxFQUFhQyxNQUFiLEtBQW1DO1VBQ3pELEtBQUssTUFBTUMsS0FBWCxJQUFvQkQsTUFBcEIsRUFBNEI7WUFDeEIsSUFBSUMsS0FBSyxDQUFDQyxRQUFORCxFQUFKLEVBQXNCO1lBRXRCLE1BQU1FLElBQUksR0FBR0YsS0FBSyxDQUFDRyxXQUFOSCxFQUFiO1lBQ0EsTUFBTUksSUFBSSxHQUFHSixLQUFLLENBQUNLLGFBQU5MLEVBQWI7WUFDQSxNQUFNTSxNQUFNLEdBQUdOLEtBQUssQ0FBQ08sZUFBTlAsRUFBZjtZQUVBUSxPQUFPLENBQUNDLEdBQVJELENBQVlOLElBQVpNLEVBQWtCSixJQUFsQkksRUFBd0JGLE1BQXhCRTtVQUNIOztVQUVELE9BQU9WLEdBQUcsQ0FBQ1ksS0FBWDtRQVhKO01BREo7O01BZ0JDYixLQUFhLENBQUNELGlCQUFkQyxJQUFtQ0QsaUJBQWlCLENBQUNDLEtBQUQsQ0FBcERBIiwibmFtZXMiOlsicHJlcGFyZVN0YWNrVHJhY2UiLCJFcnJvciIsImVyciIsImZyYW1lcyIsImZyYW1lIiwiaXNOYXRpdmUiLCJmaWxlIiwiZ2V0RmlsZU5hbWUiLCJsaW5lIiwiZ2V0TGluZU51bWJlciIsImNvbHVtbiIsImdldENvbHVtbk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQGJleW9uZC1qcy9rZXJuZWwvZXJyb3IvZXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=