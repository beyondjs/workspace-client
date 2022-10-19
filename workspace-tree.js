define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/popover", "@beyond-js/ui@0.0.1/alert", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/icon", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/ds-select", "@beyond-js/dashboard@0.0.1/models", "@beyond-js/dashboard@0.0.1/context-menu", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/ds-contexts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DSTree = DSTree;
  _exports.DSTreeContext = void 0;
  _exports.EmptyList = EmptyList;
  _exports.FavoriteAction = FavoriteAction;
  _exports.ModalAction = ModalAction;
  _exports.useDSTreeContext = _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    ReactiveModel
  } = dependency_3;
  const {
    Bundle
  } = dependency_4;
  const {
    BeyondModal,
    BeyondConfirmModal
  } = dependency_5;
  const {
    BeyondPopover
  } = dependency_6;
  const {
    BeyondAlert
  } = dependency_7;
  const {
    BeyondImage
  } = dependency_8;
  const {
    BeyondSpinner
  } = dependency_9;
  const {
    BeyondInput,
    BeyondButton
  } = dependency_10;
  const {
    BeyondIcon,
    BeyondIconButton
  } = dependency_11;
  const {
    useBinder
  } = dependency_12;
  const {
    DSSelect
  } = dependency_13;
  const {
    FavoritesFactory
  } = dependency_14;
  const {
    DSContextMenu
  } = dependency_15;
  const {
    DSIcon,
    DSIconButton,
    useForm
  } = dependency_16;
  const {
    useDSAsideContext,
    useDSWorkspaceContext
  } = dependency_17;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace-tree"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/models.legacy', dependency_3], ['@beyond-js/inspect/models.ts', dependency_4], ['@beyond-js/ui/modal', dependency_5], ['@beyond-js/ui/popover', dependency_6], ['@beyond-js/ui/alert', dependency_7], ['@beyond-js/ui/image', dependency_8], ['@beyond-js/ui/spinner', dependency_9], ['@beyond-js/ui/form', dependency_10], ['@beyond-js/ui/icon', dependency_11], ['@beyond-js/dashboard/hooks', dependency_12], ['@beyond-js/dashboard/ds-select', dependency_13], ['@beyond-js/dashboard/models', dependency_14], ['@beyond-js/dashboard/context-menu', dependency_15], ['@beyond-js/dashboard/core-components', dependency_16], ['@beyond-js/dashboard/ds-contexts', dependency_17]]);

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
  /**********
  ds-tree.jsx
  **********/


  const DSTreeContext = new React.createContext();
  _exports.DSTreeContext = DSTreeContext;

  const useDSTreeContext = () => React.useContext(DSTreeContext);
  /**
   * Tree tabs is used to add the left padding in each subtree branch.
   * @type {string}
   */


  _exports.useDSTreeContext = useDSTreeContext;
  const TREE_TABS = 6;
  /**
   * Main tree file
   *
   * @param title
   * @param className
   * @param controls
   * @param tree
   * @returns {JSX.Element}
   * @constructor
   */

  function DSTree({
    title,
    className,
    controls = {},
    tree,
    type
  }) {
    const [opened, setOpened] = React.useState(true);
    const cls = `${opened ? '' : 'is-hidden'}${title ? '' : ' no-header'}`;
    const {
      texts
    } = useDSAsideContext();

    if (!tree) {
      console.error("are you trying to instance a DSTree component without a tree?", tree);
      return null;
    }

    const [items, setItems] = React.useState(tree.items);
    useBinder([tree], () => setItems(tree.items));
    return /*#__PURE__*/React.createElement(DSTreeContext.Provider, {
      value: {
        actions: {},
        type: type,
        controls,
        tree,
        texts: texts.tree
      }
    }, /*#__PURE__*/React.createElement("section", {
      tabIndex: "0",
      className: `${cls} ds-tree__container${className ? ` ${className}` : ''}`
    }, title && /*#__PURE__*/React.createElement(DSTreeHeader, {
      tree: tree,
      opened: opened,
      title: title,
      setOpened: setOpened
    }), /*#__PURE__*/React.createElement("div", {
      className: "ds-tree"
    }, /*#__PURE__*/React.createElement(BranchList, {
      className: "first-tree",
      opened: opened,
      tree: tree
    }))));
  }
  /************************
  actions\bundle\action.jsx
  ************************/


  function FormAction({
    children
  }) {
    const {
      texts: {
        actions
      },
      formValues,
      fetching,
      object,
      errors,
      setFetching,
      reset,
      closeModal
    } = useAddBundleContext();
    const totalErrors = Object.keys(errors).length;
    const {
      name,
      type,
      route,
      bundle,
      layoutId
    } = formValues;

    const onClick = e => e.stopPropagation();

    const saveBundle = async specs => {
      try {
        setFetching(true);
        await object.addBundle(specs);
        setFetching(false);
        closeModal(false);
        reset();
      } catch (e) {
        console.error(e);
      }
    };

    const onSave = e => {
      e.preventDefault();
      e.stopPropagation();
      const specs = {
        bundles: bundle
      };

      if (bundle === 'widget') {
        specs.element = {
          name: name
        };
        if (type === 'layout') specs.id = layoutId;
        if (type === 'page') specs.route = route;
      }

      saveBundle(specs);
    };

    const attrs = {};
    const isWidgetValid = bundle === 'widget' && !!name && !!type;
    const isPageValid = isWidgetValid && type === 'page' && !!route;
    const isBundleValid = !!bundle && (isWidgetValid || bundle !== 'widget');
    if (fetching || !isWidgetValid && !isBundleValid) attrs.disabled = true;
    if (isWidgetValid && type === 'page' && !isPageValid) attrs.disabled = true;
    if (totalErrors) attrs.disabled = true;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, children, /*#__PURE__*/React.createElement("div", {
      className: `actions end`
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({
      type: "submit"
    }, attrs, {
      onClick: onSave,
      className: "primary"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : actions.save))));
  }
  /*********************************
  actions\bundle\add-bundle-form.jsx
  *********************************/


  const AddBundleContext = React.createContext();

  const useAddBundleContext = () => React.useContext(AddBundleContext);

  function AddBundleForm({
    closeModal,
    item: {
      object
    }
  }) {
    const {
      texts: {
        tree: {
          bundle: texts
        }
      }
    } = useDSAsideContext();
    const [fetching, setFetching] = React.useState(false);
    const specs = {
      state: {
        name: '',
        route: '',
        type: false,
        layoudId: ''
      },
      validations: {
        name: {
          validation: value => !!value.match(/[a-z]+-[a-z]+/g),
          message: texts.widget.inputs.name.error
        },
        layoudId: {
          validation: value => !!value.match(/[a-z]+-*/g),
          message: texts.widget.inputs.layoutId.error
        },
        route: {
          validation: value => !!value.match(/^\/[a-z_-]+(\/\$\{[a-z]+\})*/g),
          message: texts.widget.inputs.route.error
        }
      }
    };
    const [formValues, handleChange, reset, errors, setValue] = useForm(specs);
    const {
      bundle
    } = formValues;
    const Control = bundle === 'widget' ? WidgetForm : MainForm;
    return /*#__PURE__*/React.createElement(AddBundleContext.Provider, {
      value: {
        closeModal,
        fetching,
        setFetching,
        object,
        setValue,
        reset,
        errors,
        texts,
        handleChange,
        formValues
      }
    }, /*#__PURE__*/React.createElement(Control, null));
  }
  /************************
  actions\bundle\header.jsx
  ************************/


  const Header = ({
    title,
    back
  }) => {
    return /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, back && /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "backArrow",
      onClick: back,
      className: "circle secondary"
    }), /*#__PURE__*/React.createElement("h4", null, title));
  };
  /***************************
  actions\bundle\main-form.jsx
  ***************************/


  function MainForm() {
    const {
      formValues,
      texts,
      setValue
    } = useAddBundleContext();
    const {
      bundle
    } = formValues;

    const onHandleChange = (e, item) => {
      e.stopPropagation();
      const target = e.currentTarget;
      const parent = target.closest('ul');
      const selected = parent.querySelector('li.selected');
      if (selected) selected.classList.remove('selected');
      target.classList.add('selected');
      setValue({
        bundle: item
      });
    };

    const props = {};
    if (!bundle) props.disabled = true;
    const items = ['widget', 'code', 'start', 'backend'].map(item => /*#__PURE__*/React.createElement("li", {
      key: item,
      onClick: e => onHandleChange(e, item)
    }, /*#__PURE__*/React.createElement("span", {
      className: "circle"
    }), /*#__PURE__*/React.createElement("span", null, item)));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      title: texts.widget.title
    }), /*#__PURE__*/React.createElement(FormAction, null, /*#__PURE__*/React.createElement("ul", {
      className: "selectable__list"
    }, items)));
  }
  /*****************************
  actions\bundle\widget-form.jsx
  *****************************/


  function WidgetForm() {
    const {
      handleChange,
      texts: {
        widget: texts
      },
      fetching,
      setValue,
      formValues,
      reset,
      errors
    } = useAddBundleContext();
    const {
      name,
      route,
      layoutId,
      type
    } = formValues;

    const handleChangeSelect = ele => setValue({
      type: ele.value
    });

    const options = [{
      value: 'page',
      label: 'Page'
    }, {
      value: 'layout',
      label: 'Layout'
    }, {
      value: 'widget',
      label: 'Widget'
    }];

    const toReturn = () => reset();

    const attrs = {
      onChange: handleChange
    };
    if (fetching) attrs.disabled = true;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
      back: toReturn,
      title: texts.title
    }), /*#__PURE__*/React.createElement(FormAction, null, /*#__PURE__*/React.createElement("div", {
      className: "group-inputs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "input-field"
    }, /*#__PURE__*/React.createElement("input", _extends({
      name: "name",
      placeholder: texts.inputs.name.label,
      value: name
    }, attrs, {
      required: true,
      disabled: fetching
    })), errors.name && /*#__PURE__*/React.createElement("span", {
      className: "error-message"
    }, texts.inputs.name.error)), /*#__PURE__*/React.createElement("div", {
      className: "form-select"
    }, /*#__PURE__*/React.createElement("label", null, texts.inputs.type.label), /*#__PURE__*/React.createElement("div", {
      className: "relative__container"
    }, /*#__PURE__*/React.createElement(DSSelect, {
      label: texts.inputs.type.placeholder,
      options: options,
      value: type,
      onSelect: handleChangeSelect
    }))), type === 'page' && /*#__PURE__*/React.createElement("div", {
      className: "input-field"
    }, /*#__PURE__*/React.createElement("label", null, texts.inputs.route.label), /*#__PURE__*/React.createElement("input", _extends({
      required: true,
      name: "route",
      value: route,
      placeholder: texts.inputs.route.label
    }, attrs)), errors.route && /*#__PURE__*/React.createElement("span", {
      className: "error-message"
    }, texts.inputs.route.error)), type === 'layout' && /*#__PURE__*/React.createElement("div", {
      className: "input-field"
    }, /*#__PURE__*/React.createElement("label", null, texts.inputs.layoutId.label), /*#__PURE__*/React.createElement("input", _extends({
      required: true,
      name: "layoutId",
      value: layoutId ?? '',
      placeholder: texts.inputs.layoutId.label
    }, attrs)), errors.route && /*#__PURE__*/React.createElement("span", {
      className: "error-message"
    }, texts.inputs.layoutId.error)))));
  }
  /*****************************
  actions\favorites\favorite.jsx
  *****************************/

  /**
   * Favorite icon button
   *
   * It is used by sources branches and subtree branches
   * @param item
   * @returns {JSX.Element|null}
   * @constructor
   */


  function FavoriteAction({
    item
  }) {
    const [state, setState] = React.useState({
      isFavorite: item.isFavorite
    });
    const {
      showModal,
      confirmDelete,
      isFavorite
    } = state;
    let {
      texts: {
        favorites: texts
      }
    } = useDSTreeContext();

    const toggleFavorite = event => {
      event.stopPropagation();
      event.preventDefault();
      const newState = item.isFavorite ? {
        confirmDelete: true
      } : {
        showModal: true
      };
      setState({ ...state,
        ...newState
      });
    };

    const favoriteIcon = isFavorite ? 'bookmark' : 'bookmark-border';
    useBinder([item], () => setState({ ...state,
      isFavorite: true
    }));

    const onConfirm = async () => {
      await item.removeFavoriteItem(); // setState({...state, isFavorite: false, confirmDelete: false})
    };

    const toggleModal = () => setState(state => ({ ...state,
      showModal: !showModal
    }));

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSIcon, {
      className: "bookmark-icon",
      onClick: toggleFavorite,
      icon: favoriteIcon
    }), showModal && /*#__PURE__*/React.createElement(AddFavoriteForm, {
      item: item,
      toggleModal: toggleModal,
      setFavorite: () => setState({
        isFavorite: true
      })
    }), confirmDelete && /*#__PURE__*/React.createElement(BeyondConfirmModal, {
      show: true,
      className: "xs ds-modal",
      onCancel: () => {
        setState({
          confirmDelete: false
        });
      },
      onConfirm: onConfirm,
      text: texts.favorites.actions.delete
    }));
  }
  /*************************
  actions\favorites\list.jsx
  *************************/


  function FavoritesList({
    setList
  }) {
    const {
      workspace: {
        application: {
          favorites
        }
      }
    } = useDSWorkspaceContext();
    let {
      texts: {
        favorites: texts
      }
    } = useDSTreeContext();
    const items = [];
    const [addNew, setAddNew] = React.useState('');
    const showInput = addNew || !favorites.items.size;
    /**
     * If there are no items in the favorites list the form is shown directly
     *
     * @type {string|boolean}
     */

    if (showInput) return /*#__PURE__*/React.createElement(NewForm, {
      setList: setList,
      setAddNew: setAddNew
    });
    favorites.items.forEach(item => {
      items.push( /*#__PURE__*/React.createElement("li", {
        key: item.id,
        onClick: event => {
          event.stopPropagation();
          const target = event.currentTarget;
          const parent = target.closest('ul');
          setList(item.id);
          parent.querySelectorAll('li.selected').forEach(li => li.classList.remove('selected'));
          event.currentTarget.classList.add('selected');
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "circle"
      }), /*#__PURE__*/React.createElement("span", null, item.name)));
    });

    const onAdd = event => {
      event.stopPropagation();
      event.preventDefault();
      setAddNew(true);
      setList('');
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: "selectable__list"
    }, items), /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("a", {
      className: "link",
      onClick: onAdd
    }, texts.actions.new)));
  }
  /**************************
  actions\favorites\modal.jsx
  **************************/


  function AddFavoriteForm({
    item,
    toggleModal,
    setFavorite
  }) {
    let {
      texts
    } = useDSTreeContext();
    const [state, setState] = React.useState({});
    const {
      fetching,
      list
    } = state;
    const props = {};
    if (!list) props.disabled = true;

    const onSave = event => {
      event.stopPropagation();
      event.preventDefault();
      setFavorite(true);
      toggleModal();
      item.addFavorite(list);
    };

    const onClick = event => event.stopPropagation();

    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: toggleModal,
      className: "xs ds-modal ds-tree__forms"
    }, /*#__PURE__*/React.createElement("header", {
      onClick: onClick,
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.favorites.title))), /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement(FavoritesList, {
      setFetching: value => setState({
        fetching: value
      }),
      setList: value => setState({
        list: value
      })
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
  /*****************************
  actions\favorites\new-form.jsx
  *****************************/


  function NewForm({
    setList,
    setAddNew
  }) {
    const {
      workspace: {
        application: {
          favorites
        }
      }
    } = useDSWorkspaceContext();
    let {
      texts: {
        favorites: texts
      }
    } = useDSTreeContext();

    const handleName = event => {
      event.stopPropagation();
      setList(event.currentTarget.value);
    };

    const onClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setAddNew(false);
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      autoComplete: "off",
      name: "name",
      label: "Nombre de la lista",
      placeholder: "Nombre de la lista",
      required: true,
      onChange: handleName
    }), !!favorites.items.size && /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: "link",
      onClick: onClick
    }, texts.actions.select)));
  }
  /*****************
  actions\inline.jsx
  *****************/

  /**
   * Shows inline action in branch or tree.
   *
   * The actions must be defined in the inline Actions property of the module.
   * The component manages the functionality to show modal or  confirm modal if it's required
   * @param {object} item  Tree or Branch object
   * @param {boolean} fetching defines if the element it's consulting or processing data
   * @param {function} setModalAction it's passed by header object to manage the modal functionality
   * @param {object} inline additional inlines actions defined from the item directly
   * @returns {JSX.Element}
   * @constructor
   */


  function DSInlineActions({
    item,
    fetching,
    setModalAction,
    inline = []
  }) {
    let {
      workspace
    } = useDSWorkspaceContext();

    const onClickInlineAction = (event, action) => {
      event.preventDefault();
      event.stopPropagation();

      if (action.modal) {
        setModalAction(action);
        return;
      }

      if (action.action) action.action(workspace);else item[action.name](workspace);
    };

    inline = item.inlineActions?.concat(inline);
    let inlineOutput = inline?.map(action => /*#__PURE__*/React.createElement(DSIcon, {
      key: `inline-${action.name}`,
      icon: action.icon,
      onClick: event => onClickInlineAction(event, action)
    }));
    if (fetching) inlineOutput = /*#__PURE__*/React.createElement(BeyondSpinner, {
      active: true,
      className: "on-primary"
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "branch__actions"
    }, inlineOutput, !fetching && item.favoriteAction !== false && /*#__PURE__*/React.createElement(FavoriteAction, {
      item: item,
      openModalAction: setModalAction
    }));
  }
  /***********************
  actions\modal-create.jsx
  ***********************/


  function DSModalCreate({
    action,
    item,
    closeModal
  }) {
    const {
      texts
    } = useDSTreeContext();
    const [state, setState] = React.useState({
      label: ''
    });
    const {
      error,
      fetching,
      label
    } = state;
    const props = {};
    if (fetching) props.disabled = true;
    const actions = texts.actions;
    const actionTexts = texts.itemActions[action.name];

    const onChange = event => {
      event.stopPropagation();
      setState({ ...state,
        label: event.currentTarget.value
      });
    };

    const onSave = async event => {
      event.preventDefault();
      event.stopPropagation();
      setState({ ...state,
        fetching: true
      });

      try {
        const response = await item.create(label);
        setState({ ...state,
          fetching: false,
          label: ''
        });
        response.error ? setState({ ...state,
          error: response.message
        }) : closeModal();
      } catch (e) {
        setState({ ...state,
          fetching: false
        });
        setState({ ...state,
          error: e.message
        });
      }
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, actionTexts.title))), /*#__PURE__*/React.createElement("div", {
      className: "ds-modal__content"
    }, error && /*#__PURE__*/React.createElement(BeyondAlert, {
      type: "error"
    }, texts.errors.hasOwnProperty(error) ? texts.errors[error] : texts.errors.default), /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement("label", null, actionTexts.label), /*#__PURE__*/React.createElement("input", {
      name: "name",
      value: label,
      placeholder: actionTexts.placeholder,
      onChange: onChange,
      type: "text",
      className: "form-control"
    }), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, props, {
      onClick: onSave,
      className: "primary"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : actions.create)))));
  }
  /****************
  actions\modal.jsx
  ****************/

  /**
   * Shows a modal and includes the control for the action to execute
   * @param action
   * @param item {branch|tree} Element treated, can be a branch or tree
   * @param closeModal
   * @returns {JSX.Element|null}
   * @constructor
   */


  function ModalAction({
    action,
    item,
    closeModal
  }) {
    if (!action.name) {
      throw Error('the action does not has a name');
    }

    const controls = {
      default: ActionBranch,
      create: DSModalCreate,
      rename: RenameItem,
      static: AddStatic,
      addBundle: AddBundleForm
    };
    if (!action) return null; //TODO: @julio check if is necessary controls object

    const Control = controls[action.name];
    if (!Control) return null;
    const cls = `ds-modal ds-tree__forms${action?.className ? ` ${action.className}` : ' xs'}`;
    return /*#__PURE__*/React.createElement(BeyondModal, {
      show: true,
      onClose: closeModal,
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      onClick: event => event.stopPropagation()
    }, /*#__PURE__*/React.createElement(Control, {
      action: action,
      item: item,
      closeModal: closeModal
    })));
  }
  /*****************
  actions\rename.jsx
  *****************/


  function RenameItem({
    item,
    closeModal
  }) {
    let {
      texts
    } = useDSTreeContext();
    const {
      actions
    } = texts.files;
    const [state, setState] = React.useState({
      label: item.label
    });
    const {
      label,
      fetching,
      error
    } = state;
    const props = {};
    if (fetching) props.disabled = true;

    const onClick = () => setState({
      label: label
    });

    const onSave = event => {
      event.preventDefault();
      event.stopPropagation();
      setState({
        fetching: true
      });

      if (item.rename(label)) {
        closeModal(false);
        setState({
          fetching: false
        });
        return;
      }

      setState({
        error: true
      });
    };

    const onChange = event => {
      event.preventDefault();
      event.stopPropagation();
      setState({
        label: event.currentTarget.value
      });
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      onClick: onClick,
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.rename))), /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSave
    }, /*#__PURE__*/React.createElement("label", null, texts.rename, " file ", item.label), /*#__PURE__*/React.createElement("input", {
      name: "name",
      value: label,
      onChange: onChange,
      type: "text",
      className: "form-control"
    }), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, _extends({}, props, {
      onClick: onSave,
      className: "primary"
    }), fetching ? /*#__PURE__*/React.createElement(BeyondSpinner, {
      fetching: true,
      className: "on-primary"
    }) : actions.save)))));
  }
  /****************************
  actions\static\add-static.jsx
  ****************************/


  function AddStatic({
    closeModal,
    item
  }) {
    const btn = React.useRef(null);
    const box = React.useRef(null);
    const {
      workspace: {
        application,
        uploader
      }
    } = useDSWorkspaceContext();
    const [state, setState] = React.useState({
      error: false,
      items: uploader.items
    });
    const {
      texts: {
        static: {
          form: texts
        }
      }
    } = useDSTreeContext();

    const update = () => {
      if (uploader.items < 1) return;
      setState({ ...state,
        ...{
          items: uploader.items
        }
      });
    };

    React.useEffect(() => {
      const getModel = () => {
        if (item.table?.name === 'modules-static') return item;
        return item.object.table.name === 'applications-static' ? application?.application : item.object.module;
      };

      uploader.create(btn.current, box.current, getModel());
    }, []);
    useBinder([uploader], update);
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-static-form"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ds-modal_header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, texts.header.title), /*#__PURE__*/React.createElement("h5", {
      className: "primary-color"
    }, texts.header.detail))), /*#__PURE__*/React.createElement("section", {
      className: "ds-modal__content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "jd-gallery__drop-zone",
      ref: box
    }, /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "upload"
    }), /*#__PURE__*/React.createElement("h3", {
      ref: btn
    }, texts.title), state.error && /*#__PURE__*/React.createElement("div", {
      className: "alert alert-danger"
    }, texts.errors.invalidFiles)), /*#__PURE__*/React.createElement(GalleryView, null), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement(BeyondButton, {
      onClick: closeModal,
      className: "primary"
    }, texts.actions.close))));
  }
  /******************************
  actions\static\gallery-item.jsx
  ******************************/


  function GalleryItem({
    item
  }) {
    const {
      workspace: {
        uploader,
        application: {
          application
        }
      }
    } = useDSWorkspaceContext();
    const src = item.fetched ? `${application.url}${item.pathname}` : item.src;

    const onDelete = () => uploader.deleteItem(item.filename);

    return /*#__PURE__*/React.createElement(BeyondImage, {
      className: "jd-gallery__img",
      src: src
    }, item.fetched && /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "delete",
      onClick: onDelete
    })));
  }
  /*************************
  actions\static\gallery.jsx
  *************************/


  function GalleryView() {
    const {
      workspace: {
        uploader
      }
    } = useDSWorkspaceContext();
    const {
      items
    } = uploader;
    if (!items || !items.size) return null;
    const output = [];
    items.forEach((item, i) => output.push( /*#__PURE__*/React.createElement("li", {
      key: `image-${i}`
    }, /*#__PURE__*/React.createElement(GalleryItem, {
      item: item
    }))));
    return /*#__PURE__*/React.createElement("div", {
      className: "jd-gallery__list"
    }, /*#__PURE__*/React.createElement("ul", null, output));
  }
  /*************
  arrow-tree.jsx
  *************/


  function ArrowTree({
    opened
  }) {
    const clsIcon = `tree__icon-open ${opened ? ` tree__icon--opened` : ''}`;
    return /*#__PURE__*/React.createElement(DSIcon, {
      className: clsIcon,
      icon: "arrowDropDown"
    });
  }
  /************************
  branch\actions\action.jsx
  ************************/


  function ActionBranch({
    action,
    openConfirmAction,
    openModalAction
  }) {
    const {
      name,
      icon
    } = action;
    let {
      texts
    } = useDSTreeContext();
    const [showConfirm, toggleConfirm] = React.useState(false);

    const manageAction = event => {
      event.stopPropagation();
      event.preventDefault();

      if (action.confirm) {
        openConfirmAction(action.name);
        toggleConfirm(!showConfirm);
        return;
      }
      /**
       * The control can be passed as a "control" property in the action object
       * or could be defined into the modal objects and being checked by modal boolean property.
       * The last one is the currently way. the control property instead is accepted by legacy.
       */


      if (action.control || action.modal) {
        openModalAction(action);
        return;
      }

      onConfirm();
    };

    const onConfirm = async event => {
      toggleConfirm(action.name);
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: name,
      onClick: manageAction,
      "data-action": name
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: icon,
      "data-element": name
    }), texts.actions[name]));
  }
  /**********************
  branch\ds-resources.jsx
  **********************/

  /**
   * Represents a subtree elements who has items itself.
   *
   * @param item
   * @param label
   * @param actions
   * @returns {JSX.Element}
   * @constructor
   */


  function DsResourcesBranch({
    branch,
    label,
    actions,
    className,
    level = 1
  }) {
    // all sublevels are opened by default
    const [opened, setOpened] = React.useState(!!level > 0);
    const [deleted, setDeleted] = React.useState();
    const cls = `item ds-tree item--subtree ${className ? className : ''}`;
    const titleIcon = opened ? 'folderOpen' : 'folder';
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;

    const onClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setOpened(!opened);
    }; // if the element is removed then is not rendered


    if (deleted) return null;
    return /*#__PURE__*/React.createElement("li", {
      className: cls
    }, /*#__PURE__*/React.createElement("section", {
      className: "item__container",
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      style: styles,
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: titleIcon
    }), /*#__PURE__*/React.createElement("span", null, branch.label))), /*#__PURE__*/React.createElement(BranchList, {
      opened: opened,
      level: level + 1,
      tree: branch
    }));
  }
  /********************
  branch\empty-list.jsx
  ********************/


  function EmptyList({
    item
  }) {
    const {
      texts
    } = useDSAsideContext();
    return /*#__PURE__*/React.createElement("article", {
      className: "empty__list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empty-tree"
    }, texts.list.empty));
  }
  /*****************
  branch\factory.jsx
  *****************/

  /**
   * Validates each branch checking if are Subtree or only branches.
   * @param tree
   * @param opened
   * @param level
   * @returns {JSX.Element}
   * @constructor
   */


  function BranchFactory({
    item,
    opened,
    level = 0
  }) {
    const {
      controls
    } = useDSTreeContext();
    const types = {
      processor: DSProcessorBranch,
      default: DSSourceBranch,
      source: DSSourceBranch,
      subtree: DSSubTree,
      static: DSStaticBranch,
      module: DSModuleBranch,
      bundle: DSBundleBranch,
      dependency: DSDependencyBranch,
      consumer: DSConsumerBranch,
      resources: DsResourcesBranch
    };
    const is = item.type ? item.type : item.items?.size ? 'subtree' : 'default';
    const style = {};
    if (level > 0) style.paddingLeft = 8 * (level + 1);
    let Control = types[is];
    if (!!controls[is]) Control = controls[is];
    return /*#__PURE__*/React.createElement(Control, {
      branch: item,
      level: level
    });
  }
  /****************
  branch\header.jsx
  ****************/

  /**
   *
   * @param fetching
   * @param className
   * @param item {mixed} Can be branch or Tree element.
   * @param inline
   * @param onClick
   * @param level
   * @param children
   * @returns {JSX.Element}
   * @constructor
   */


  function DSItemHeader({
    fetching,
    className,
    item,
    inline,
    onClick,
    level,
    children
  }) {
    const styles = {};
    if (level > 0) styles.paddingLeft = `${(level + 1) * TREE_TABS}px`;
    const [state, setState] = React.useState({});
    /**
     * Hede we keep using multiples useState beacause the functions to open modal and confirm need to be
     * passed to children components.
     */

    const [showContextMenu, toggleContextMenu] = React.useState();
    const [modalAction, setModalAction] = React.useState(false);
    const [confirmAction, setConfirmAction] = React.useState(false);
    const {
      workspace: {
        contextMenu
      }
    } = useDSWorkspaceContext();
    let {
      texts
    } = useDSTreeContext();
    const ref = React.useRef();
    useBinder([contextMenu], () => {
      if (!ref.current === contextMenu.target) return;
      if (showContextMenu) return;
      toggleContextMenu({
        x: contextMenu.event.clientX,
        y: contextMenu.event.clientY
      });
    }, `fired.item-item-${level}.${item.label}`);
    useBinder([contextMenu], () => toggleContextMenu(false), 'closed');
    const actions = [];

    const onConfirm = async () => {
      try {
        await item[confirmAction](); // setConfirmAction(false);
      } catch (e) {
        console.error("error", e);
      }
    };

    item?.actions?.forEach(action => {
      if (!action.name) return;
      actions.push( /*#__PURE__*/React.createElement(ActionBranch, {
        key: action.name,
        openConfirmAction: setConfirmAction,
        openModalAction: setModalAction,
        action: action,
        item: item
      }));
    });
    const cls = className ?? 'item__container';
    return /*#__PURE__*/React.createElement("section", {
      ref: ref,
      onClick: onClick,
      "data-context": `item-item-${level}.${item.label}`,
      style: styles,
      className: cls
    }, children, /*#__PURE__*/React.createElement(DSInlineActions, {
      inline: inline,
      fetching: fetching,
      setModalAction: setModalAction,
      item: item
    }), showContextMenu && actions.length > 0 && /*#__PURE__*/React.createElement(DSContextMenu, {
      unmount: toggleContextMenu,
      specs: showContextMenu
    }, /*#__PURE__*/React.createElement("ul", null, actions)), modalAction && /*#__PURE__*/React.createElement(ModalAction, {
      item: item,
      action: modalAction,
      closeModal: () => setModalAction(false)
    }), confirmAction && /*#__PURE__*/React.createElement(BeyondConfirmModal, {
      show: true,
      className: "xs ds-modal",
      onCancel: () => setConfirmAction(false),
      onConfirm: onConfirm,
      text: texts.confirm[confirmAction]
    }));
  }
  /**************
  branch\list.jsx
  **************/


  function BranchList({
    tree,
    className,
    opened,
    level = 0
  }) {
    let clsList = `ds-tree__branches-list tree__list-level-${level}${opened ? '' : ' tree__list--hidden'}`;
    if (className) clsList += ` ${className}`;

    const loop = (item, key) => {
      return /*#__PURE__*/React.createElement(BranchFactory, {
        level: level + 1,
        item: item,
        key: `factory-${key}-${level}.${item.id}`
      });
    };

    if (!tree?.items.size) return /*#__PURE__*/React.createElement(EmptyList, {
      item: tree
    });
    return /*#__PURE__*/React.createElement("ul", {
      className: clsList
    }, [...tree.items.values()].map(loop));
  }
  /************************************
  branch\subtree\ds-subtree-actions.jsx
  ************************************/


  function DSSubtreeActions({
    branch,
    onDelete,
    onAdd
  }) {
    const {
      texts,
      showCreate,
      actions,
      object
    } = useDSTreeContext();
    const [showConfirmDelete, setShowConfirmDelete] = React.useState();

    const onCreate = event => {
      event.stopPropagation();
      showCreate({
        branch: branch
      });
    };

    const showDelete = event => {
      event.preventDefault();
      event.stopPropagation();

      if (!object && !actions?.subtree?.delete) {
        console.warn("the object manager of the tree was not correctly passed ");
        return;
      }

      setShowConfirmDelete(true);
    };

    const onConfirmDelete = event => {
      if (actions?.subtree?.delete) {
        actions.subtree.delete(branch.path, branch.specs);
        onDelete(true);
        return;
      }

      object.deleteFolder(branch.path);
      onDelete(true); //onDelete();
    };

    const hideDelete = event => setShowConfirmDelete(false);

    return /*#__PURE__*/React.createElement("nav", {
      className: "branch__actions"
    }, /*#__PURE__*/React.createElement(FavoriteAction, {
      item: branch
    }), /*#__PURE__*/React.createElement(BeyondPopover, {
      placement: "right-start",
      className: "item-actions",
      target: /*#__PURE__*/React.createElement(DSIcon, {
        icon: "moreVert"
      })
    }, /*#__PURE__*/React.createElement("ul", null, actions.create !== false && /*#__PURE__*/React.createElement("li", {
      onClick: onCreate,
      "data-element": "folder"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "file"
    }), texts.createFile), /*#__PURE__*/React.createElement("li", {
      onClick: showDelete,
      "data-element": "folder"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "delete"
    }), texts.delete))), showConfirmDelete && /*#__PURE__*/React.createElement(BeyondConfirmModal, {
      show: true,
      className: "md ds-modal",
      onCancel: hideDelete,
      onConfirm: onConfirmDelete,
      text: '¿Desea eliminar el directorio?'
    }));
  }
  /****************************
  branch\subtree\ds-subtree.jsx
  ****************************/

  /**
   * Represents a subtree elements who has items itself.
   *
   * @param item
   * @param label
   * @param actions
   * @returns {JSX.Element}
   * @constructor
   */


  function DSSubTree({
    branch,
    label,
    actions,
    className,
    level = 1
  }) {
    // all sublevels are opened by default
    const [opened, setOpened] = React.useState(!!level > 0);
    const [deleted, setDeleted] = React.useState();
    const cls = `item ds-tree item--subtree ${className ? className : ''}`;
    const titleIcon = opened ? 'folderOpen' : 'folder';
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;

    const onClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setOpened(!opened);
    }; // if the element is removed then is not rendered


    if (deleted) return null;
    return /*#__PURE__*/React.createElement("li", {
      className: cls
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: titleIcon
    }), /*#__PURE__*/React.createElement("span", null, branch.label))), /*#__PURE__*/React.createElement(BranchList, {
      className: "subtree__list",
      opened: opened,
      level: level + 1,
      tree: branch
    }));
  }
  /**********************
  branch\types\bundle.jsx
  **********************/


  function DSBundleBranch({
    branch,
    level = 1
  }) {
    const [totalItems, setTotalItems] = React.useState(branch.items?.size);
    const [opened, setOpened] = React.useState();

    const onClick = async event => {
      event.stopPropagation();
      setOpened(!opened);
    };

    const onAdded = () => setTotalItems(branch.items.size);

    useBinder([branch], onAdded);
    const clsIcon = `tree__icon-open ${opened ? ` tree__icon--opened` : ''}`;
    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1",
      "data-id": branch.id
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      className: clsIcon,
      icon: "arrowDropDown"
    }), /*#__PURE__*/React.createElement(DSIcon, {
      icon: `bundle.${branch.bundle.name}`
    }), /*#__PURE__*/React.createElement("span", null, branch.label))), !!totalItems && /*#__PURE__*/React.createElement(BranchList, {
      opened: opened,
      level: level + 1,
      tree: branch
    }));
  }
  /************************
  branch\types\consumer.jsx
  ************************/


  function DSConsumerBranch({
    branch,
    level = 1
  }) {
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;
    const [errors, setErrors] = React.useState(branch.errors);
    const [state, setState] = React.useState({});
    const [opened, setOpened] = React.useState();
    const {
      workspace: {
        openBoard
      }
    } = useDSWorkspaceContext();
    useBinder([branch, branch.compiler], () => {
      setErrors(branch.errors);
      setState({
        bundleTree: branch.bundleTree,
        fetching: branch.fetching
      });
    });

    const openErrors = event => {
      openBoard('module', {
        moduleId: branch.moduleId
      });
    };

    const onClick = async event => {
      await branch.loadBundle();
      setOpened(!opened);
    };

    const cls = `item__container ${errors > 0 ? '| has__errors' : ''} `;
    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1"
    }, /*#__PURE__*/React.createElement("section", {
      onClick: onClick,
      style: styles,
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(ArrowTree, {
      opened: opened
    }), /*#__PURE__*/React.createElement(DSIcon, {
      icon: `${branch.icon}`
    }), /*#__PURE__*/React.createElement("span", null, branch.label)), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DSInlineActions, {
      inline: branch.inlineActions,
      item: branch
    }), errors > 0 && /*#__PURE__*/React.createElement("div", {
      onClick: openErrors,
      className: "item__errors"
    }, branch.errors))), state.bundleTree && /*#__PURE__*/React.createElement(BranchList, {
      opened: opened,
      tree: branch.bundleTree,
      level: level + 1
    }));
  }
  /**************************
  branch\types\dependency.jsx
  **************************/


  function DSDependencyBranch({
    branch,
    level = 1
  }) {
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;
    const {
      workspace: {
        openFile
      }
    } = useDSWorkspaceContext();

    const onClick = event => {
      event.preventDefault(); //TODO: @julio check how get corretly the processsor dependency file

      openFile({
        type: 'dependency',
        source: {
          label: branch.label,
          id: branch.item.id,
          code: branch.item.declaration.code
        },
        processor: 'ts',
        path: branch.item.id,
        external: branch.item.external,
        dependency: branch.item
      });
    };

    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1"
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: `${branch.icon}`
    }), /*#__PURE__*/React.createElement("span", null, branch.label))));
  }
  /**********************
  branch\types\module.jsx
  **********************/

  /**
   * Represents a module item.
   * @param branch
   * @param level
   * @returns {JSX.Element}
   * @constructor
   */


  function DSModuleBranch({
    branch,
    level = 1
  }) {
    const styles = {};
    if (level > 0) styles.paddingLeft = `${(level + 1) * TREE_TABS}px`;
    const [state, setState] = React.useState({});
    const [fetching, setFetching] = React.useState(false);
    const {
      workspace: {
        openBoard
      }
    } = useDSWorkspaceContext();
    const {
      moduleManager,
      setActiveAside
    } = useDSAsideContext();
    const element = React.createRef();

    const onClick = async event => {
      event.stopPropagation();

      try {
        if (branch.loaded) {
          setState(state => ({ ...state,
            opened: !state.opened,
            totalItems: branch.items.size
          }));
          return;
        }

        setFetching(true);
        await branch.expand();
        setFetching(false);
        setState(state => ({ ...state,
          opened: !state.opened,
          items: branch.items,
          totalItems: branch.items.size
        }));
      } catch (e) {
        console.error(e);
      }
    };

    const inlineActions = [{
      name: 'open',
      icon: 'arrowForward',
      action: async () => {
        openBoard('module', {
          label: branch?.module.subpath,
          projectId: branch.project.application.id,
          moduleId: branch.module.id
        });
      }
    }, {
      name: 'setActive',
      icon: 'pinup',
      action: async () => {
        const target = element.current;
        setState({
          fetching: true
        });
        target.closest('.ds__aside__detail')?.classList.add('is-fetching');
        target.classList.toggle('item--action-processing');
        await moduleManager.setActive(branch?.module.id);
        target.classList.toggle('item--action-processing');
        target.classList.add('item--action-processed');
        target.closest('.ds__aside__detail ').classList.toggle('is-fetching');
        window.setTimeout(() => {
          setState({
            fetching: false
          });
          openBoard('module', {
            projectId: branch.project.application.id,
            label: branch?.module.subpath,
            moduleId: branch.module.id
          });
          setActiveAside('module', {
            moduleId: branch?.module.id
          });
        }, 600);
      }
    }];
    useBinder([branch], () => setState({ ...state,
      fetching: branch.fetching
    }));
    const clsIcon = `tree__icon-open ${state.opened ? ` tree__icon--opened` : ''}`;
    return /*#__PURE__*/React.createElement("li", {
      ref: element,
      className: `item ${fetching ? `item--fetching` : ''}`,
      tabIndex: "-1"
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      inline: inlineActions,
      fetching: fetching,
      level: level,
      item: branch,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      className: clsIcon,
      icon: "arrowDropDown"
    }), /*#__PURE__*/React.createElement(DSIcon, {
      icon: `tree.module`
    }), /*#__PURE__*/React.createElement("span", null, branch.label))), !!state.totalItems && /*#__PURE__*/React.createElement(BranchList, {
      opened: state.opened,
      level: level + 1,
      tree: branch
    }));
  }
  /********************************
  branch\types\processor-branch.jsx
  ********************************/


  function DSProcessorBranch({
    branch,
    level = 1
  }) {
    const styles = {};
    if (level > 0) styles.paddingLeft = `${(level + 1) * TREE_TABS}px`;
    const [totalItems, setTotalItems] = React.useState(branch.items?.size);
    const [opened, setOpened] = React.useState();

    const onClick = event => {
      event.stopPropagation();
      setOpened(!opened);
    };

    useBinder([branch], () => {
      //window.setTimeout(() => setTotalItems(branch.items.size), 150)
      setTotalItems(branch.items.size);
    });
    const clsOpenIcon = `tree__icon-open${opened ? ' tree__icon--opened' : ''}`;
    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1"
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      className: clsOpenIcon,
      icon: "arrowDropDown"
    }), /*#__PURE__*/React.createElement(DSIcon, {
      icon: `processor.${branch.processor.name}`
    }), /*#__PURE__*/React.createElement("span", null, branch.label))), !!totalItems && /*#__PURE__*/React.createElement(BranchList, {
      opened: opened,
      level: level + 1,
      tree: branch
    }));
  }
  /**********************
  branch\types\source.jsx
  **********************/


  function DSSourceBranch({
    branch,
    level
  }) {
    const [branchName, setBranchName] = React.useState(branch.label);
    const [deleted, setDeleted] = React.useState(false);
    const {
      workspace: {
        openFile
      }
    } = useDSWorkspaceContext();
    const {
      tree,
      type
    } = useDSTreeContext();
    if (!branchName) return null;
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;
    useBinder([branch], () => setBranchName(branch.label));
    useBinder([branch], () => setDeleted(true));
    if (deleted) return null;
    /**
     * Opens a file
     * @param event
     */

    const onClick = event => {
      event.preventDefault();
      event.stopPropagation();
      const specs = {
        type: 'source',
        applicationId: branch.project.application.id,
        source: branch.item,
        path: branch.link,
        processor: branch.extension,
        elementType: type,
        module: branch.module
      };
      if (branch.module) specs.moduleId = branch.module.id;

      if (tree.type === 'template') {
        specs.module = branch.item;
      }

      openFile(specs);
    };

    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1"
    }, /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      style: styles,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: `file.${branch.icon}`
    }), /*#__PURE__*/React.createElement("span", null, branchName))));
  }
  /**********************
  branch\types\static.jsx
  **********************/


  function DSStaticBranch({
    branch,
    level
  }) {
    const [state, setState] = React.useState(branch.getters);
    const {
      panels,
      controller: {
        application
      }
    } = useDSAsideContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    const styles = {};
    if (level > 0) styles.paddingLeft = `${level * TREE_TABS}px`;
    useBinder([branch], () => setState(branch.getters));
    const {
      label,
      deleted
    } = state;
    if (!label || deleted) return null;
    /**
     * Opens a file
     * @param event
     */

    const onClick = event => {
      event.preventDefault();
      event.stopPropagation();
      const type = event.currentTarget.dataset.type;

      if (branch.icon === 'image') {
        workspace.openBoard('static', {
          image: branch.source.id,
          projectId: application.application.id
        });
        return;
      }

      const url = `${application.application.url}${branch.item.pathname}${type ? `?${type}` : ''}`;
      window.open(url, '_blank'); // openFile(branch.item, branch.link, branch.extension);
    };

    const {
      item
    } = branch;
    const icon = item.overwrite ? 'imageOverwrite' : branch.icon;
    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      tabIndex: "-1"
    }, item.overwrite && /*#__PURE__*/React.createElement("section", {
      className: "item__container item__overwrite",
      style: styles,
      "data-type": "overwrite",
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: `file.${icon}1`
    }), /*#__PURE__*/React.createElement("span", null, label, " "))), /*#__PURE__*/React.createElement(DSItemHeader, {
      item: branch,
      level: level,
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "item__label"
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: `file.${branch.icon}`
    }), /*#__PURE__*/React.createElement("span", null, label))));
  }
  /*********
  header.jsx
  *********/


  function DSTreeHeader({
    title,
    tree,
    opened,
    setOpened
  }) {
    const onClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setOpened(!opened);
      event.currentTarget.querySelector('.tree__icon-open').classList.toggle('tree__icon--opened');
    };

    const {
      object
    } = useDSTreeContext();
    const icon = tree.icon ? tree.icon : tree.type === 'bundle' ? `bundle.${object?.name}` : `tree.${tree.type}`;
    return /*#__PURE__*/React.createElement(DSItemHeader, {
      item: tree,
      onClick: onClick,
      className: "tree__title"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DSIcon, {
      className: "tree__icon-open",
      icon: "arrowDropDown"
    }), /*#__PURE__*/React.createElement(DSIcon, {
      className: "title__bundle-icon",
      icon: icon
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, title)));
  }
  /******************
  icons\tree-icon.jsx
  ******************/


  function TreeIcon({
    name,
    color
  }) {
    const cls = `icon__background icon-${name}`;
    return /*#__PURE__*/React.createElement("svg", {
      className: "ds-tree__icon",
      viewBox: "0 0 70 70"
    }, /*#__PURE__*/React.createElement("rect", {
      className: cls,
      rx: "6.2"
    }), /*#__PURE__*/React.createElement("text", {
      className: "icon__text",
      transform: "translate(8.27 40.68)"
    }, name));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/workspace-tree', '.ds-tree__container .tree__icon-open{fill:#fff;height:18px;width:18px;padding:0;transform:rotate(270deg)}.ds-tree__container .tree__icon-open.tree__icon--opened{transform:rotate(0)}.ds-tree__container .ds-tree{width:100%;transition:all .3s ease-in}.ds-tree__container .ds-tree .ds-branches.ds-branches--hidden{display:none}.ds-tree__container .ds-tree ul:not(.subtree__list){padding:0;margin:0;list-style:none;cursor:pointer}.ds-tree__container .ds-tree ul.subtree__list{margin:0;padding:0;list-style:none;cursor:pointer}.ds-tree__container .ds-tree .tree__toggle-icon{fill:#fff}.ds-tree__container .empty__list .btn.btn__empty__list{margin:auto;font-size:1rem;padding:5px 30px;background:var(--beyond-secondary-dark-color);display:flex;place-items:center;align-content:center;align-items:center}.ds-tree__container .empty__list .btn.btn__empty__list svg{fill:var(--beyond-text-on-primary)}.ds-tree__container svg.beyond-icon{height:15px;width:15px}.ds-tree__container>.tree__title{display:grid;grid-template-columns:auto 1fr auto;align-items:center;justify-content:space-between;border-bottom:.5px solid var(--beyond-secondary-dark-color);cursor:pointer;gap:5px;padding:4px 8px;font-size:13px}.ds-tree__container>.tree__title .title__bundle-icon{fill:var(--beyond-primary-light-color)}.ds-tree__container>.tree__title:hover{background:#0c1423}.ds-tree__container.is-hidden .ds-tree,.ds-tree__container.is-hidden>.ds-tree__container{display:none;transition:all .3s ease-in}.ds-tree__container .item__container:hover .branch__actions,.ds-tree__container .tree__title:hover .branch__actions{opacity:1;transition:all .2s ease-in}.ds-tree__container .item__container .branch__actions,.ds-tree__container .tree__title .branch__actions{gap:3px;padding:2px;opacity:0;transition:all .2s ease-in}.ds-tree__container .item__container .branch__actions .beyond-icon,.ds-tree__container .tree__title .branch__actions .beyond-icon{transition:all .2s ease-in-out;fill:#fff;stroke:#fff;opacity:.3}.ds-tree__container .item__container .branch__actions .beyond-icon:hover,.ds-tree__container .tree__title .branch__actions .beyond-icon:hover{opacity:1}.ds-tree .ds-tree__branches-list{position:relative}.ds-tree .ds-tree__branches-list.tree__list--hidden{display:none}.beyond-element-modal.ds-modal.ds-tree__forms .close-icon{z-index:2}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content{padding:20px}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content input{margin-top:5px;border:1px solid var(--ds-input-border-color);padding:8px;width:100%;outline:0}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content input:focus{border-color:var(--ds-input-hover-border-color)}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content label{display:block!important}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content .end{justify-content:flex-end}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content .group-inputs .input-field{display:grid;position:relative;padding:10px 0 20px}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content .group-inputs .input-field span.error-message{position:absolute;bottom:0;color:var(--beyond-error-color)}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content .group-inputs .form-select .form__select .form__select__options{z-index:10}.beyond-element-modal.ds-modal.ds-tree__forms .ds-modal__content .group-inputs .form-select .form__select .form__select__options div{color:var(--text-color)}.ds-tree__container.no-header .first-tree>li .item__container{border-bottom:.5px solid var(--beyond-secondary-dark-color)}.ds-tree__container .empty-tree{padding:4px 8px;text-align:center}.ds-tree__container .ds-tree__branches-list .item.item--action-processing>.item__container:after,.ds-tree__container .ds-tree__branches-list .item.item--fetching>.item__container:after{left:-10px;top:-20px;height:200%;width:30%;border-width:10px;background-size:10px;content:" ";background-color:rgba(255,255,255,.2);transform:rotate(8deg)}.ds-tree__container .ds-tree__branches-list .item.item--action-processed>.item__container:after{left:0;right:0;width:200%;height:200%;background-size:10px;content:" ";background-color:rgba(255,255,255,.2);transform:rotate(1deg)}.ds-tree__container .ds-tree__branches-list .item .item__container{display:grid;width:100%;padding:4px 8px;grid-template-columns:1fr auto;transition:all .3s ease-in;position:relative;overflow:hidden}.ds-tree__container .ds-tree__branches-list .item .item__container:after{position:absolute;content:" ";width:0;transition:all .2s ease-in}.ds-tree__container .ds-tree__branches-list .item .item__container .item__label{display:flex;align-items:center;gap:3px;overflow:hidden}.ds-tree__container .ds-tree__branches-list .item .item__container .item__label span{margin-left:3px;text-overflow:ellipsis;overflow:hidden;width:70%;display:flex;white-space:nowrap}.ds-tree__container .ds-tree__branches-list .item .item__container .item__errors{color:#fff!important;padding:1px 3px;font-size:.8rem;display:flex;align-items:center;justify-content:center;position:relative;z-index:2}.ds-tree__container .ds-tree__branches-list .item .item__container .item__errors:after{content:" ";background:#d2281e;opacity:.3;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}.ds-tree__container .ds-tree__branches-list .item .item__container.has__errors *{color:#d2281e}.ds-tree__container .ds-tree__branches-list .item .item__container:hover{background:rgba(0,0,0,.2)}.ds-tree__branches-list .beyond-popover__content{box-shadow:0 1px 2px rgba(0,0,0,.07),0 2px 4px rgba(0,0,0,.07),0 4px 8px rgba(0,0,0,.07),0 8px 16px rgba(0,0,0,.07),0 16px 32px rgba(0,0,0,.07),0 32px 64px rgba(0,0,0,.07)}.ds-tree__branches-list .beyond-popover__content ul{padding:0}.ds-tree__branches-list .beyond-popover__content ul li{min-width:180px;padding:5px 8px;display:flex;gap:8px;align-items:center;transition:all .2s ease-in-out}.ds-tree__branches-list .beyond-popover__content ul li:hover{background:var(--beyond-primary-light-color)}.ds-static-form .jd-gallery__drop-zone{cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.2s all ease-in;margin:15px;width:calc(100% - 30px);height:100px;padding:30px;outline:2px dashed var(--beyond-primary-dark-color);outline-offset:10px}.ds-static-form .jd-gallery__drop-zone:hover{background:#f0f0f0;color:var(--beyond-secondary-dark-color)}.ds-static-form .jd-gallery__drop-zone .beyond-icon{height:60px;width:60px;fill:#E4E5DC}.ds-static-form .jd-gallery__list{width:100%;margin-top:20px}.ds-static-form .jd-gallery__list ul{display:flex;flex-wrap:wrap;width:100%;list-style:none;padding:0;gap:8px}.ds-static-form .jd-gallery__list li{flex:20%;max-width:20%;padding:0;cursor:pointer;transition:all .2s ease-in}.ds-static-form .jd-gallery__list li:hover{opacity:.8;transition:all .2s ease-in}.ds-static-form .jd-gallery__list li .beyond-element-image{width:100%;aspect-ratio:16/9;height:100px;position:relative}.ds-static-form .jd-gallery__list li .beyond-element-image img{object-fit:cover;z-index:1;aspect-ratio:16/9;height:100%;width:100%}.ds-static-form .jd-gallery__list li .beyond-element-image figcaption{position:absolute;transition:all .2s ease-in;display:none}.ds-static-form .jd-gallery__list li .beyond-element-image:hover figcaption{transition:all .2s ease-in-out;background:rgba(227,97,82,.7);display:flex;position:absolute;top:0;left:0;right:0;bottom:0;align-items:center;z-index:99;justify-content:center}.ds-static-form .jd-gallery__list li .beyond-element-image:hover figcaption .beyond-icon-button svg{fill:#fff}.ds-static-form{-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{.ds-static-form 0%{opacity:0}.ds-static-form 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.ds-static-form .beyond-element-input input{height:2.2rem}.ds-static-form .hidden-input{display:none}.ds-static-form .alert{-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{.ds-static-form .alert 0%{opacity:0}.ds-static-form .alert 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.ds-static-form form{display:block}.ds-static-form .jd-uploader-form{display:flex;width:100%;align-items:center;flex-direction:column;justify-content:center}.ds-static-form .jd-uploader-form .alert{width:100%}.ds-static-form .modal-content .actions{margin:15px;border-top:1px solid #e4e5dc;padding-top:15px;display:flex}.ds-static-form .modal-content .actions .roundell{border-radius:.6rem;padding:.6rem}.ds-tree__container .ds-tree .item.item--subtree{fill:#fff}');
  legacyStyles.appendToDOM();
  const ims = new Map(); // Module exports

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