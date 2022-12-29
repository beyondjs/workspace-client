define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/plm@0.0.1/plm-indexed-db"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const BeyondDB = dependency_3.default;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/plm@0.0.1/unnamed/core/cache/indexeddb/tests/plm"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/plm/plm-indexed-db', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******
  view.jsx
  *******/

  function View() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "IndexDB - PLM"));
  }

  /***********
  JS PROCESSOR
  ***********/

  /**************
  FILE: config.js
  **************/

  const getConfig = () => {
    'use strict';

    const CONFIG = Object.freeze({
      'DB': 'plmtest',
      'VERSION': 1
    });
    const lists = {
      'name': 'lists',
      'config': {
        'keyPath': 'id',
        'autoIncrement': true
      },
      'indexes': [['id', 'id', {
        'unique': false
      }]]
    };
    const records = {
      'name': 'records',
      'config': {
        'keyPath': 'id',
        'autoIncrement': true
      },
      'indexes': [['id', 'id', {
        'unique': false
      }]]
    };
    const unpublished = {
      'name': 'unpublished',
      'config': {
        'keyPath': 'id',
        'autoIncrement': true
      },
      'indexes': [['instanceId', 'instanceId', {
        'unique': false
      }]]
    };
    return {
      'name': CONFIG.DB,
      'version': CONFIG.VERSION,
      'stores': [lists, records, unpublished]
    };
  };

  /**************
  FILE: define.js
  **************/

  async function defineDB() {
    const db = await BeyondDB.create(getConfig());
    let store;
    const save = async (name, data) => {
      store = db.store(name);
      await store.save(data);
    };
    let item = {
      'instanceId': '123456789',
      'item': {
        'id': 1,
        'name': 'Prueba',
        'email': 'prueba@jidadesarrollos.com'
      }
    };
    let item2 = {
      'instanceId': '212121',
      'item': {
        'id': 2,
        'name': 'Otra Prueba',
        'email': 'prueba@jidadesarrollos.com'
      }
    };
    await save('unpublished', item);
    await save('unpublished', item2);
  }
  /************
  FILE: page.js
  ************/

  function Page() {
    ReactDOM.render(React.createElement(View, {}), this.container);
    this.container.classList.add('app-indexed-plm-page');
    defineDB();
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/plm/unnamed/core/cache/indexeddb/tests/plm', '');
  const ims = new Map();

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