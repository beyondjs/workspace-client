define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/dashboard@0.0.1/workspace-tree"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AsideFavorites = AsideFavorites;
  _exports.hmr = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    ReactiveModel
  } = dependency_3;
  const {
    BeyondModal
  } = dependency_4;
  const {
    BeyondSpinner
  } = dependency_5;
  const {
    BeyondInput,
    BeyondButton
  } = dependency_6;
  const {
    useBinder
  } = dependency_7;
  const {
    DSModel
  } = dependency_8;
  const {
    useDSAsideContext,
    useDSWorkspaceContext
  } = dependency_9;
  const {
    useDSTreeContext,
    DSTree,
    TreeFactory
  } = dependency_10;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.0.22"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", null], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/ds-favorites"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.legacy', dependency_3], ['@beyond-js/ui/modal', dependency_4], ['@beyond-js/ui/spinner', dependency_5], ['@beyond-js/ui/form', dependency_6], ['@beyond-js/dashboard/hooks', dependency_7], ['@beyond-js/dashboard/models', dependency_8], ['@beyond-js/dashboard/ds-contexts', dependency_9], ['@beyond-js/dashboard/workspace-tree', dependency_10]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends.apply(this, arguments);
  }
  /********
  aside.jsx
  ********/


  function AsideFavorites() {
    const {
      workspace: {
        application: {
          favorites
        }
      }
    } = useDSWorkspaceContext();
    const [totalFavorites, setTotalFavorites] = React.useState(favorites?.items.size);
    const [renamed, setRenamed] = React.useState(favorites?.items.size);
    const {
      texts
    } = useDSAsideContext();
    useBinder([favorites], () => setTotalFavorites(favorites.items.size));
    useBinder([favorites], () => setRenamed(performance.now()), 'favorite.renamed');

    if (!favorites.items.size) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ds__aside__detail"
      }, /*#__PURE__*/React.createElement("div", {
        className: "alert alert-info"
      }, /*#__PURE__*/React.createElement("h3", null, texts.favorites.empty.title), /*#__PURE__*/React.createElement("span", null, texts.favorites.empty.description)));
    }

    const items = [...favorites.items.values()];
    const output = items.map((item, key) => /*#__PURE__*/React.createElement(DSTree, {
      key: key,
      object: item,
      title: item.name,
      tree: item.tree
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "ds-aside__header"
    }, /*#__PURE__*/React.createElement("h3", null, texts?.favorites?.title)), /*#__PURE__*/React.createElement("div", null, output));
  }
  /**************
  rename-form.jsx
  **************/


  function FavoritesRenameForm({
    object,
    closeModal
  }) {
    let {
      texts: {
        favorites: texts
      }
    } = useDSTreeContext();
    const [fetching, setFetching] = React.useState();
    const [name, setName] = React.useState(object.name);
    const props = {};
    if (!name) props.disabled = true;

    const onSave = async event => {
      event.stopPropagation();
      event.preventDefault();
      setFetching(true);
      await object.rename(name);
      window.setTimeout(() => {
        setFetching(false);
        closeModal(true);
      }, 300);
    };

    const onClick = event => event.stopPropagation();

    const handleName = event => {
      event.stopPropagation();
      setName(event.currentTarget.value);
    };

    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      className: "xs ds-modal ds-modal__favorites"
    }, /*#__PURE__*/React.createElement("header", {
      onClick: onClick,
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.title))), /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement(BeyondInput, {
      autoComplete: "off",
      name: "name",
      value: name,
      required: true,
      onChange: handleName
    }), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, props, {
      onClick: onSave,
      className: "primary"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : texts.actions.save)))));
  }

  const ims = new Map(); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});