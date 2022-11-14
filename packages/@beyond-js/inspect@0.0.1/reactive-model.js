define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/kernel@0.1.1/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.ReactiveModel = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
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
  let ReactiveModel; // Module exports

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBO01BRU87OztNQUFVLE1BQ1hBLGFBRFcsU0FDV0MsWUFEWCxDQUNpQjtRQUU5QkMsTUFBTTs7UUFDRyxJQUFMQyxLQUFLO1VBQ0wsT0FBTyxLQUFLRCxNQUFaO1FBQ0g7O1FBRURFLFNBQVM7O1FBQ0csSUFBUkMsUUFBUTtVQUNSLE9BQU8sS0FBS0QsU0FBWjtRQUNIOztRQUVXLElBQVJDLFFBQVEsQ0FBQ0MsS0FBRCxFQUFlO1VBQ3ZCLElBQUlBLEtBQUssS0FBSyxLQUFLRixTQUFuQixFQUE4QjtVQUM5QixLQUFLQSxTQUFMLEdBQWlCRSxLQUFqQjtVQUNBLEtBQUtDLFlBQUw7UUFDSDs7UUFFREMsUUFBUTs7UUFDRyxJQUFQQyxPQUFPO1VBQ1AsT0FBTyxLQUFLRCxRQUFaO1FBQ0g7O1FBRURFLFdBQVc7O1FBQ0csSUFBVkMsVUFBVTtVQUNWLE9BQU8sS0FBS0QsV0FBWjtRQUNIOztRQUVhLElBQVZDLFVBQVUsQ0FBQ0wsS0FBRCxFQUFlO1VBQ3pCLElBQUlBLEtBQUssS0FBSyxLQUFLSSxXQUFuQixFQUFnQztVQUNoQyxLQUFLQSxXQUFMLEdBQW1CSixLQUFuQjtVQUNBO1FBQ0g7O1FBRURNLFVBQVU7O1FBQ0csSUFBVEMsU0FBUztVQUNULE9BQU8sS0FBS0QsVUFBWjtRQUNIOztRQUVZLElBQVRDLFNBQVMsQ0FBQ1AsS0FBRCxFQUFlO1VBQ3hCLElBQUlBLEtBQUssS0FBSyxLQUFLTSxVQUFuQixFQUErQjtVQUMvQixLQUFLQSxVQUFMLEdBQWtCTixLQUFsQjtVQUNBO1FBQ0g7O1FBRURRLE9BQU87O1FBQ0csSUFBTkMsTUFBTTtVQUNOLE9BQU8sS0FBS0QsT0FBWjtRQUNIOztRQUVEUCxZQUFZLEdBQUcsQ0FBQ1MsUUFBZ0IsUUFBakIsS0FBb0MsS0FBS0MsT0FBTCxDQUFhRCxLQUFiLENBQXZDO1FBRVo7Ozs7OztRQUtBRSxJQUFJLENBQUNDLFFBQUQsRUFBV2IsS0FBWCxFQUFnQjtVQUNoQixJQUFJYyxLQUFLLEdBQUcsRUFBWjtVQUNBLElBQUlELFFBQVEsSUFBSWIsS0FBSyxLQUFLLFdBQTFCLEVBQXVDYyxLQUFLLENBQUNELFFBQUQsQ0FBTEMsR0FBa0JkLEtBQWxCYyxDQUF2QyxLQUFxRUEsS0FBSyxHQUFHRCxRQUFSQztVQUNyRSxJQUFJQyxPQUFPLEdBQVksS0FBdkI7O1VBRUEsS0FBSyxNQUFNQyxJQUFYLElBQW1CRixLQUFuQixFQUEwQjtZQUN0QixNQUFNRyxHQUFHLEdBQVcsSUFBSUQsSUFBSSxFQUE1QjtZQUNBLElBQUksQ0FBQyxLQUFLRSxjQUFMLENBQW9CRCxHQUFwQixDQUFMLEVBQStCLFNBRlQsQ0FFbUI7O1lBRXpDLElBQUksS0FBS0EsR0FBTCxNQUFjSCxLQUFLLENBQUNFLElBQUQsQ0FBdkIsRUFBK0I7WUFDL0IsS0FBS0MsR0FBTCxJQUFZSCxLQUFLLENBQUNFLElBQUQsQ0FBakI7WUFDQUQsT0FBTyxHQUFHLElBQVZBO1VBQ0g7O1VBRUQsSUFBSUEsT0FBSixFQUFhLEtBQUtkLFlBQUw7UUFDaEI7O1FBRURrQixhQUFhO1VBQ1QsTUFBTUwsS0FBSyxHQUFHLEVBQWQ7VUFDQU0sTUFBTSxDQUFDQyxJQUFQRCxDQUFZLElBQVpBLEVBQWtCRSxPQUFsQkYsQ0FBMEJQLFFBQVEsSUFBSUMsS0FBSyxDQUFDRCxRQUFRLENBQUNVLE9BQVRWLENBQWlCLEdBQWpCQSxFQUFzQixFQUF0QkEsQ0FBRCxDQUFMQyxHQUFtQyxLQUFLRCxRQUFMLENBQXpFTztVQUNBLE9BQU9OLEtBQVA7UUFDSDs7TUE5RTZCIiwibmFtZXMiOlsiUmVhY3RpdmVNb2RlbCIsIkV2ZW50cyIsIl9yZWFkeSIsInJlYWR5IiwiX2ZldGNoaW5nIiwiZmV0Y2hpbmciLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIl9mZXRjaGVkIiwiZmV0Y2hlZCIsIl9wcm9jZXNzaW5nIiwicHJvY2Vzc2luZyIsIl9wcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJfbG9hZGVkIiwibG9hZGVkIiwiZXZlbnQiLCJ0cmlnZ2VyIiwiX3NldCIsInByb3BlcnR5IiwicHJvcHMiLCJ1cGRhdGVkIiwicHJvcCIsImtleSIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid29ya3NwYWNlL2luc3BlY3QvbW9kZWxzL2NsaWVudC9yZWFjdGl2ZS1tb2RlbC9yZWFjdGl2ZS1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==