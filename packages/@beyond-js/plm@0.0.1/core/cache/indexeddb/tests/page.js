define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "react-dom@18.2.0", "@beyond-js/plm@0.0.1/plm-indexed-db"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
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
    const dependencies = new Map([["@beyond-js/kernel", "0.1.8"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/plm@0.0.1/core/cache/indexeddb/tests/page"
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
  item.jsx
  *******/

  class Item extends React.Component {
    constructor(props) {
      super(props);
    }
    delete() {
      const {
        database
      } = this.props;
      database.removeItem(this.props.data.id);
    }
    render() {
      const {
        data
      } = this.props;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, data.name), /*#__PURE__*/React.createElement("button", {
        onClick: this.delete.bind(this)
      }, "Eliminar"));
    }
  }
  /*******
  view.jsx
  *******/

  class View extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    updateState() {
      this.setState({});
    }
    componentDidMount() {
      this.props.database.bind('change', this.updateState.bind(this));
    }
    componentWillUnmount() {
      this.props.database.unbind('change', this.updateState.bind(this));
    }
    render() {
      const database = this.props.database;
      let items = [];
      if (database.ready) {
        items = database.items.map(item => /*#__PURE__*/React.createElement(Item, {
          key: item.id,
          database: database,
          data: item
        }));
      }
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "IndexDB"), /*#__PURE__*/React.createElement("blockquote", null, "En esta pagina de prueba se realiza:", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Creaci\xF3n de una base de datos indexedDB"), /*#__PURE__*/React.createElement("li", null, "Definici\xF3n de storas"), /*#__PURE__*/React.createElement("li", null, "Inserci\xF3n de datos"), /*#__PURE__*/React.createElement("li", null, "Se disponibilizan datos para probar inserci\xF3n y eliminaci\xF3n"), /*#__PURE__*/React.createElement("li", null, "El store \"customers\" queda disponible en la consola bajo el nombre global \"asd\"."))), items);
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /**************
  FILE: define.js
  **************/

  function Database() {
    const events = new Events({
      'bind': this
    });
    const config = {
      'name': 'test2',
      'version': 1,
      'stores': [{
        'name': 'customers',
        'config': {
          'keyPath': 'id',
          'autoIncrement': true
        },
        'indexes': [['name', 'name', {
          'unique': false
        }], ['email', 'email', {
          'unique': true
        }]]
      }]
    };
    let db, store;
    let items;
    Object.defineProperty(this, 'items', {
      'get': () => items
    });
    let ready;
    Object.defineProperty(this, 'ready', {
      'get': () => ready
    });
    this.removeItem = async id => {
      store = db.store('customers');
      await store.delete(id);
      items = await store.getAll();
      events.trigger('change');
    };
    this.create = async () => {
      await BeyondDB.delete(config.name);
      db = await BeyondDB.create(config);
      store = db.store('customers');
      await store.save([{
        'id': 3,
        'name': 'Moises',
        'email': 'jcontreras@jidadesarrollos.com'
      }, {
        'id': 4,
        'name': 'Jean',
        'email': 'mrodriguez@jidadesarrollos.com'
      }]);
      window.asd = store;
      await store.save([{
        'id': 3,
        'name': 'Moises',
        'email': 'isMoises@jidadesarrollos.com'
      }]);
      items = await store.getAll();
      ready = true;
      events.trigger('change');
    };
  }
  /************
  FILE: page.js
  ************/

  function Page() {
    const database = new LocalDatabase();
    database.create();
    ReactDOM.render(React.createElement(View, {
      'database': database
    }), this.container);
    this.container.classList.add('app-indexdb-page');

    //connection();
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/plm/core/cache/indexeddb/tests/page', '');
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = _exports.__beyond_pkg = __pkg;
  const hmr = _exports.hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  __pkg.initialise(ims);
});