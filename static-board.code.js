define(["exports", "module", "@beyond-js/kernel@0.1.1/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/popover", "@beyond-js/ui@0.0.1/spinner", "@beyond-js/ui@0.0.1/preload-text", "@beyond-js/ui@0.0.1/modal", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/database", "@beyond-js/dashboard@0.0.1/tooltip", "@beyond-js/dashboard@0.0.1/uploader-workspace", "@beyond-js/dashboard@0.0.1/ds-editor.code", "@beyond-js/dashboard@0.0.1/core-components", "@beyond-js/dashboard@0.0.1/context-menu", "@beyond-js/dashboard@0.0.1/project-distributions.code", "@beyond-js/dashboard@0.0.1/ds-contexts", "@beyond-js/kernel@0.1.1/texts", "@beyond-js/dashboard@0.0.1/texts-binder"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Images = Images;
  _exports.StaticBoard = StaticBoard;
  _exports.StaticHeader = StaticHeader;
  _exports.hmr = _exports.__beyond_pkg = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    ReactiveModel
  } = dependency_3;
  const {
    BeyondButton
  } = dependency_4;
  const {
    BeyondImage
  } = dependency_5;
  const {
    BeyondIconButton
  } = dependency_6;
  const {
    BeyondPopover
  } = dependency_7;
  const {
    BeyondSpinner
  } = dependency_8;
  const {
    BeyondPreloadText
  } = dependency_9;
  const {
    BeyondModal,
    BeyondConfirmModal
  } = dependency_10;
  const {
    useBinder
  } = dependency_11;
  const {
    DSModel
  } = dependency_12;
  const {
    BeyondTooltip
  } = dependency_13;
  const {
    Uploader
  } = dependency_14;
  const {
    monacoDependency
  } = dependency_15;
  const {
    FadeIn,
    DSIcon,
    DashboardIcon,
    DSIconButton
  } = dependency_16;
  const {
    DSContextMenu
  } = dependency_17;
  const {
    AppDistributions
  } = dependency_18;
  const {
    ProjectContext,
    useProjectContext,
    useDSWorkspaceContext
  } = dependency_19;
  const {
    CurrentTexts
  } = dependency_20;
  const {
    useTextsBinder
  } = dependency_21;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.0"], ["@beyond-js/kernel", "0.1.1"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/static-board",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/reactive-model', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/image', dependency_5], ['@beyond-js/ui/icon', dependency_6], ['@beyond-js/ui/popover', dependency_7], ['@beyond-js/ui/spinner', dependency_8], ['@beyond-js/ui/preload-text', dependency_9], ['@beyond-js/ui/modal', dependency_10], ['@beyond-js/dashboard/hooks', dependency_11], ['@beyond-js/dashboard/database', dependency_12], ['@beyond-js/dashboard/tooltip', dependency_13], ['@beyond-js/dashboard/uploader-workspace', dependency_14], ['@beyond-js/dashboard/ds-editor.code', dependency_15], ['@beyond-js/dashboard/core-components', dependency_16], ['@beyond-js/dashboard/context-menu', dependency_17], ['@beyond-js/dashboard/project-distributions.code', dependency_18], ['@beyond-js/dashboard/ds-contexts', dependency_19], ['@beyond-js/kernel/texts', dependency_20], ['@beyond-js/dashboard/texts-binder', dependency_21]]);

  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: controller.js
  ******************/

  const controller = new class Controller extends ReactiveModel {
    #workspace;
    #application;

    get application() {
      return this.#application;
    }

    #changed = false;

    get ready() {
      const dependencies = !!this.#texts.ready && !!monacoDependency?.ready;
      const models = !!this.application?.ready && !!DSModel.ready;
      return dependencies && models && this.currentId === this.application?.application?.id;
    }

    #moduleManager;

    get moduleManager() {
      return this.#moduleManager;
    }

    #favorites;

    get favorites() {
      return this.#favorites;
    }

    #texts;

    get texts() {
      return this.#texts?.value;
    }

    #currentId;

    get currentId() {
      return this.#currentId;
    }

    start(workspace, appId, moduleId, element) {
      if (this.#application && this.currentId !== appId) {
        this.#application.unbind('change', this.triggerEvent);
        this.#application = undefined;
      }

      const model = workspace.getProject(appId);
      this.#currentId = appId;
      model.bind('change', this.triggerEvent);
      this.#workspace = workspace;
      this.#application = model;
      this.#favorites = model.favorites;
      this.#moduleManager = model.moduleManager;
      monacoDependency.bind('change', this.triggerEvent);
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      this.triggerEvent();
    }

  }();
  /**********
  context.jsx
  **********/

  const
  /*bundle*/
  StaticContext = React.createContext();

  const
  /*bundle*/
  useStaticContext = () => React.useContext(StaticContext);
  /****************
  header\images.jsx
  ****************/


  function Images() {
    const {
      originalSrc
    } = useStaticContext();
    return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("ul", {
      className: "static__items"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(BeyondImage, {
      src: encodeURI(originalSrc)
    })), /*#__PURE__*/React.createElement(StaticOverwrite, null)));
  }
  /***************
  header\index.jsx
  ***************/


  function StaticHeader() {
    const {
      image,
      type,
      texts
    } = useStaticContext();
    return /*#__PURE__*/React.createElement("header", {
      className: "static__header"
    }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h4", null, image.filename)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(DSIconButton, {
      icon: "folder",
      title: texts.actions.copy
    }), /*#__PURE__*/React.createElement("span", {
      className: "p1 ellipsis-text"
    }, image.file)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Images, null)));
  }
  /**************************
  header\static-overwrite.jsx
  **************************/


  function StaticOverwrite() {
    const {
      image,
      overwriteSrc,
      setSrc
    } = useStaticContext();
    const [sourceFile, setSourceFile] = React.useState({});
    let src = overwriteSrc ?? undefined;
    src = sourceFile.original === image.id ? sourceFile.base64 : src;
    if (src) return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(BeyondImage, {
      src: src
    }));
    const regex = /\/\/[a-zA-z]*\.[a-zA-z]*/;
    const specs = {
      id: image.id?.replace(regex, ''),
      type: 'overwrite',
      image: image?.relative.file.replace('\\', '/')
    };

    const onLoadFile = images => {
      // the uploader returns a map with the images loaded
      const base64 = [...images.values()][0];
      const specs = {
        original: image.id,
        base64: base64.src
      };
      setSourceFile(specs);
      setSrc(specs);
    };

    const onLoadEnd = response => {
      if (!response.status) return;
      const specs = {};
      specs.origin = image.relative.file.replace('\\', '/');
      specs.overwrite = response.data[0].pathname;
      image.upload(specs);
    };

    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Uploader, {
      url: "/uploader",
      specs: specs,
      multiple: true,
      onLoadFile: onLoadFile,
      onLoadEnd: onLoadEnd
    }, /*#__PURE__*/React.createElement(BeyondIconButton, {
      "data-tipy-content": "Agregar overwrite",
      className: "primary",
      icon: "add"
    })));
  }
  /********
  index.jsx
  ********/


  function StaticBoard({
    specs
  }) {
    let {
      image,
      type
    } = specs;
    const {
      workspace: {
        project
      }
    } = useDSWorkspaceContext();
    const module = __pkg.bundle.module.specifier;
    const [textsReady, texts] = useTextsBinder(module);
    const [src, setSrc] = React.useState({});

    if (!project) {
      console.warn("you are trying to access static files without had selected an application");
      return;
    }

    if (!image || !textsReady) return null;
    image = project.static.get(image);

    if (!image) {
      throw new Error('the images does not exists');
    }

    const urlApp = project.application.url;
    const originalSrc = `${urlApp}${image?.pathname}?original`;
    const overwriteSrc = image.overwrite && `${urlApp}${image?.pathname}`;
    let source = type === 'overwrite' ? overwriteSrc : originalSrc;
    source = src.original === image.id && src.base64 ? src.base64 : source;
    return /*#__PURE__*/React.createElement(StaticContext.Provider, {
      value: {
        type,
        texts,
        image,
        originalSrc,
        overwriteSrc,
        src,
        setSrc
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-panel__static-board"
    }, /*#__PURE__*/React.createElement(StaticHeader, {
      type: type
    }), /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(BeyondImage, {
      src: "http://localhost:3020/images/awesome.jpg"
    }))));
  }
  /*******************
  sections\actions.jsx
  *******************/


  function StaticActions() {
    const actions = {
      name: 'static'
    };
    const {
      image,
      type
    } = useStaticContext();

    const updateState = update => setState({ ...state,
      ...update
    });

    const [state, setState] = React.useState({
      modal: false,
      confirm: false
    });

    const onDelete = event => {
      event.stopPropagation();
      event.preventDefault();
      updateState({
        confirm: true
      });
    };

    const onConfirm = async () => {
      try {
        updateState({
          confirm: false
        });
        image.delete(type === 'overwrite');
      } catch (e) {
        console.error(e);
        updateState({
          confirm: false
        });
      }
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
      className: "static__actions"
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
      "data-title": "delete",
      icon: "delete",
      onClick: onDelete
    })))));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/static-board.code', '.static__header{display:grid;grid-template-columns:1fr 1fr auto;grid-gap:.5rem}.static__header>section{background:var(--secondary-accent-40);padding:1rem;display:flex;align-items:center;gap:.5rem}.static__header>section .ellipsis-text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;max-width:80%}.static__header>section .beyond-icon{fill:var(--text-color)}.static__header .static__items{list-style:none;display:flex;gap:.5rem}.static__header .static__items .beyond-element-image{height:40px;margin:0;aspect-ratio:1/1}.ds-panel__static-board{display:grid;height:100%;grid-template-rows:auto 1fr}.ds-panel__static-board article{display:flex;align-items:center;justify-content:center}.ds-panel__static-board article .beyond-element-image{max-height:60vh}');
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