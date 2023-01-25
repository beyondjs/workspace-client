define(["exports", "module", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.ReactiveModel = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/inspect@0.0.1/reactive-model"
    },
    "type": "ts"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  const ims = new Map();

  /********************************
  INTERNAL MODULE: ./reactive-model
  ********************************/

  ims.set('./reactive-model', {
    hash: 155937534,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactiveModel = void 0;
      var _core = require("@beyond-js/kernel/core");
      /*bundle*/
      class ReactiveModel extends _core.Events {
        _ready;
        get ready() {
          return this._ready;
        }
        _fetching;
        get fetching() {
          return this._fetching;
        }
        set fetching(value) {
          if (value === this._fetching) return;
          this._fetching = value;
          this.triggerEvent();
        }
        _fetched;
        get fetched() {
          return this._fetched;
        }
        _processing;
        get processing() {
          return this._processing;
        }
        set processing(value) {
          if (value === this._processing) return;
          this._processing = value;
          return;
        }
        _processed;
        get processed() {
          return this._processed;
        }
        set processed(value) {
          if (value === this._processed) return;
          this._processed = value;
          return;
        }
        _loaded;
        get loaded() {
          return this._loaded;
        }
        triggerEvent = (event = 'change') => this.trigger(event);
        /**
         * set value in a private property
         * @param property
         * @param value
         */
        _set(property, value) {
          let props = {};
          if (property && value !== 'undefined') props[property] = value;else props = property;
          let updated = false;
          for (const prop in props) {
            const key = `_${prop}`;
            if (!this.hasOwnProperty(key)) continue; //same value on store
            if (this[key] === props[prop]) continue;
            this[key] = props[prop];
            updated = true;
          }
          if (updated) this.triggerEvent();
        }
        getProperties() {
          const props = {};
          Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
          return props;
        }
      }
      exports.ReactiveModel = ReactiveModel;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./reactive-model",
    "from": "ReactiveModel",
    "name": "ReactiveModel"
  }];
  let ReactiveModel;

  // Module exports
  _exports.ReactiveModel = ReactiveModel;
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ReactiveModel') && (_exports.ReactiveModel = ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBO01BRU87TUFBVSxNQUNYQSxhQUFjLFNBQVFDLFlBQU07UUFFOUJDLE1BQU07UUFDTixJQUFJQyxLQUFLO1VBQ0wsT0FBTyxJQUFJLENBQUNELE1BQU07UUFDdEI7UUFFQUUsU0FBUztRQUNULElBQUlDLFFBQVE7VUFDUixPQUFPLElBQUksQ0FBQ0QsU0FBUztRQUN6QjtRQUVBLElBQUlDLFFBQVEsQ0FBQ0MsS0FBYztVQUN2QixJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDRixTQUFTLEVBQUU7VUFDOUIsSUFBSSxDQUFDQSxTQUFTLEdBQUdFLEtBQUs7VUFDdEIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7UUFDdkI7UUFFQUMsUUFBUTtRQUNSLElBQUlDLE9BQU87VUFDUCxPQUFPLElBQUksQ0FBQ0QsUUFBUTtRQUN4QjtRQUVBRSxXQUFXO1FBQ1gsSUFBSUMsVUFBVTtVQUNWLE9BQU8sSUFBSSxDQUFDRCxXQUFXO1FBQzNCO1FBRUEsSUFBSUMsVUFBVSxDQUFDTCxLQUFjO1VBQ3pCLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUNJLFdBQVcsRUFBRTtVQUNoQyxJQUFJLENBQUNBLFdBQVcsR0FBR0osS0FBSztVQUN4QjtRQUNKO1FBRUFNLFVBQVU7UUFDVixJQUFJQyxTQUFTO1VBQ1QsT0FBTyxJQUFJLENBQUNELFVBQVU7UUFDMUI7UUFFQSxJQUFJQyxTQUFTLENBQUNQLEtBQWM7VUFDeEIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQ00sVUFBVSxFQUFFO1VBQy9CLElBQUksQ0FBQ0EsVUFBVSxHQUFHTixLQUFLO1VBQ3ZCO1FBQ0o7UUFFQVEsT0FBTztRQUNQLElBQUlDLE1BQU07VUFDTixPQUFPLElBQUksQ0FBQ0QsT0FBTztRQUN2QjtRQUVBUCxZQUFZLEdBQUcsQ0FBQ1MsUUFBZ0IsUUFBUSxLQUFXLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxLQUFLLENBQUM7UUFFdEU7Ozs7O1FBS0FFLElBQUksQ0FBQ0MsUUFBUSxFQUFFYixLQUFLO1VBQ2hCLElBQUljLEtBQUssR0FBRyxFQUFFO1VBQ2QsSUFBSUQsUUFBUSxJQUFJYixLQUFLLEtBQUssV0FBVyxFQUFFYyxLQUFLLENBQUNELFFBQVEsQ0FBQyxHQUFHYixLQUFLLENBQUMsS0FBTWMsS0FBSyxHQUFHRCxRQUFRO1VBQ3JGLElBQUlFLE9BQU8sR0FBWSxLQUFLO1VBRTVCLEtBQUssTUFBTUMsSUFBSSxJQUFJRixLQUFLLEVBQUU7WUFDdEIsTUFBTUcsR0FBRyxHQUFXLElBQUlELElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDRSxjQUFjLENBQUNELEdBQUcsQ0FBQyxFQUFFLFNBQVMsQ0FBQztZQUV6QyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxDQUFDLEtBQUtILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsR0FBR0gsS0FBSyxDQUFDRSxJQUFJLENBQUM7WUFDdkJELE9BQU8sR0FBRyxJQUFJOztVQUdsQixJQUFJQSxPQUFPLEVBQUUsSUFBSSxDQUFDZCxZQUFZLEVBQUU7UUFDcEM7UUFFQWtCLGFBQWE7VUFDVCxNQUFNTCxLQUFLLEdBQUcsRUFBRTtVQUNoQk0sTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQ1QsUUFBUSxJQUFJQyxLQUFLLENBQUNELFFBQVEsQ0FBQ1UsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1YsUUFBUSxDQUFDLENBQUM7VUFDeEYsT0FBT0MsS0FBSztRQUNoQjs7TUFFSFUiLCJuYW1lcyI6WyJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiX3JlYWR5IiwicmVhZHkiLCJfZmV0Y2hpbmciLCJmZXRjaGluZyIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiX2ZldGNoZWQiLCJmZXRjaGVkIiwiX3Byb2Nlc3NpbmciLCJwcm9jZXNzaW5nIiwiX3Byb2Nlc3NlZCIsInByb2Nlc3NlZCIsIl9sb2FkZWQiLCJsb2FkZWQiLCJldmVudCIsInRyaWdnZXIiLCJfc2V0IiwicHJvcGVydHkiLCJwcm9wcyIsInVwZGF0ZWQiLCJwcm9wIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJyZXBsYWNlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicmVhY3RpdmUtbW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=