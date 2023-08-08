define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/alert", "@beyond-js/workspace@1.1.1/uploader-components", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/inspect@0.0.1/models.ts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.JGalleryContext = _exports.Item = void 0;
  _exports.Page = Page;
  _exports.useJGalleryContext = _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondImage
  } = dependency_3;
  const {
    BeyondButton,
    BeyondInput,
    BeyondForm
  } = dependency_4;
  const {
    BeyondIcon,
    BeyondIconButton
  } = dependency_5;
  const {
    BeyondAlert
  } = dependency_6;
  const {
    JidaUploader
  } = dependency_7;
  const {
    ReactiveModel
  } = dependency_8;
  const {
    Application,
    Module
  } = dependency_9;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.4"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/widgets", "0.1.5"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/scaffolding", "1.0.0"], ["emmet-monaco-es", "5.2.0"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.7.0"], ["react-split", "2.0.14"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["dayjs", "1.11.7"], ["socket.io-client", "4.5.4"], ["@popperjs/core", "2.11.6"], ["@types/react", "16.14.35"], ["@types/react-dom", "16.9.18"], ["@beyond-js/workspace", "1.1.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/workspace@1.1.1/components/uploader/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/image', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/icon', dependency_5], ['@beyond-js/ui/alert', dependency_6], ['@beyond-js/workspace/uploader-components', dependency_7], ['@beyond-js/inspect/reactive-model', dependency_8], ['@beyond-js/inspect/models.ts', dependency_9]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  context.jsx
  **********/

  const JGalleryContext = React.createContext();
  _exports.JGalleryContext = JGalleryContext;
  const useJGalleryContext = () => React.useContext(JGalleryContext);
  /***************
  gallery-item.jsx
  ***************/
  _exports.useJGalleryContext = useJGalleryContext;
  function GalleryItem({
    item
  }) {
    const src = item.loaded ? item.min : item.src;
    const {
      controller
    } = useJGalleryContext();
    const onDelete = () => {
      if (!item.loaded) return;
      controller.deleteItem(item.get('name'));
    };
    return /*#__PURE__*/React.createElement(BeyondImage, {
      className: "jd-gallery__img",
      src: src
    }, item.loaded && /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "delete",
      onClick: onDelete
    }), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "edit"
    })));
  }
  /**********
  gallery.jsx
  **********/

  function GalleryView() {
    const {
      controller: {
        items
      }
    } = useJGalleryContext();
    if (!items) return null;
    const imagesOutput = [];
    items.forEach((item, i) => imagesOutput.push( /*#__PURE__*/React.createElement("li", {
      key: `image-${i}`
    }, /*#__PURE__*/React.createElement(GalleryItem, {
      item: item
    }))));
    return /*#__PURE__*/React.createElement("div", {
      className: "jd-gallery__list"
    }, /*#__PURE__*/React.createElement("ul", null, imagesOutput));
  }
  /****************
  uploader-form.jsx
  ****************/

  function UploaderForm() {
    const {
      controller
    } = useJGalleryContext();
    const [error, setError] = React.useState();
    const [images, setImages] = React.useState([]);
    React.useEffect(() => {
      controller.create(btn.current, box.current);
    }, []);
    const btn = React.useRef(null);
    const box = React.useRef(null);
    return /*#__PURE__*/React.createElement("div", {
      className: "jd-gallery__drop-zone",
      ref: box
    }, /*#__PURE__*/React.createElement(BeyondIcon, {
      icon: "upload"
    }), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
      ref: btn
    }, "Selecciona una image "), " o arrastrala."), error && /*#__PURE__*/React.createElement("div", {
      className: "alert alert-danger"
    }, "El archivo subido no es v\xE1lido, por favor verifiquelo y vuelva a intentarlo"), /*#__PURE__*/React.createElement("hr", null));
  }
  /*******
  view.jsx
  *******/

  function View({
    controller
  }) {
    const [processing, setProcessing] = React.useState();
    const [showForm, setShowForm] = React.useState(true);
    const [galleryItems, setGalleryItems] = React.useState(controller.items);
    React.useEffect(() => {
      const onChange = () => {
        setGalleryItems([...controller.items.values()]);
        setProcessing(controller.processing);
      };
      controller.bind("change", onChange);
      return () => controller.unbind("change", onChange);
    }, [controller.items, controller.ready]);
    const value = {
      controller,
      total: controller.items.length,
      processing: controller.processing
    };
    if (controller.ready) return /*#__PURE__*/React.createElement("h3", null, "Cargando");
    return /*#__PURE__*/React.createElement(JGalleryContext.Provider, {
      value: value
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement("header", {
      className: "jadmin-page-header border-header"
    }, /*#__PURE__*/React.createElement("h1", null, "Carga de imagenes"), /*#__PURE__*/React.createElement("div", {
      className: "actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: " btn btn-primary",
      onClick: () => setShowForm(true)
    }, "Agregar"))), showForm && /*#__PURE__*/React.createElement(UploaderForm, null), /*#__PURE__*/React.createElement(GalleryView, null)));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/workspace/components/uploader/page', '.jadmin-page.jd-page__gallery .jd-gallery__drop-zone{cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.2s all ease-in;margin:15px;width:calc(100% - 30px);height:150px;padding:30px;outline:2px dashed var(--beyond-primary-dark-color);outline-offset:10px}.jadmin-page.jd-page__gallery .jd-gallery__drop-zone:hover{background:#f0f0f0;color:var(--beyond-secondary-dark-color)}.jadmin-page.jd-page__gallery .jd-gallery__drop-zone .beyond-icon{height:60px;width:60px;fill:#E4E5DC}.jd-gallery__list{width:100%}.jd-gallery__list ul{display:flex;flex-wrap:wrap;width:100%;list-style:none;padding:0}.jd-gallery__list li{flex:20%;max-width:20%;padding:0 4px;cursor:pointer;transition:all .2s ease-in}.jd-gallery__list li:hover{opacity:.8;transition:all .2s ease-in}.jd-gallery__list li .beyond-element-image{width:100%;height:130px;position:relative}.jd-gallery__list li .beyond-element-image img{object-fit:cover;z-index:1;height:100%;width:100%}.jd-gallery__list li .beyond-element-image figcaption{position:absolute;transition:all .2s ease-in;display:none}.jd-gallery__list li .beyond-element-image:hover figcaption{transition:all .2s ease-in-out;background:rgba(227,97,82,.7);display:flex;position:absolute;top:0;left:0;right:0;bottom:0;align-items:center;z-index:99;justify-content:center}.jd-gallery__list li .beyond-element-image:hover figcaption .beyond-icon-button svg{fill:#fff}#app-gallery-page{-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{#app-gallery-page 0%{opacity:0}#app-gallery-page 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#app-gallery-page .beyond-element-input input{height:2.2rem}#app-gallery-page .hidden-input{display:none}#app-gallery-page .alert{-webkit-animation-name:fadeIn;-moz-animation-name:fadeIn;-ms-animation-name:fadeIn;-o-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-iteration-count:1;-moz-animation-iteration-count:1;-ms-animation-iteration-count:1;-o-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:0s;-moz-animation-delay:0s;-ms-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{#app-gallery-page .alert 0%{opacity:0}#app-gallery-page .alert 100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}#app-gallery-page form{display:block}#app-gallery-page .jd-uploader-form{display:flex;width:100%;align-items:center;flex-direction:column;justify-content:center}#app-gallery-page .jd-uploader-form .alert{width:100%}');
  legacyStyles.appendToDOM();

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: item.js
  ************/

  class Item extends ReactiveModel {
    async load() {
      try {
        this._fetching = true;
        this.triggerEvent();
        const response = await this.Api.get(this._routes.load, {
          id: this._id
        });
        if (response.status) this.setProperties(response.data);else this._errors = response.error;
        this._loaded = true;
        this._fetching = false;
        this.triggerEvent();
        return response;
      } catch (exc) {
        console.error('Error: ', exc);
        return {
          status: false,
          error: exc
        };
      }
    }
    async publish() {
      this._fetching = true;
      this.triggerEvent();
      try {
        const params = this.getProperties();
        const response = await this.Api.post(this._routes.publish, params);
        if (response.status) this.setProperties(response.data);else this._errors = response.error;
        this._fetching = false;
        this.triggerEvent();
        return response;
      } catch (exc) {
        this._fetching = false;
        this.triggerEvent();
        console.error('Error: ', exc);
        return {
          status: false,
          error: exc
        };
      }
    }
    async remove() {
      try {
        const response = await this.Api.post(this._routes.delete, {
          id: this.get('id')
        });
        if (!response?.status) this._errors = response.error;
        return response;
      } catch (exc) {
        console.error('Error: ', exc);
        return {
          status: false,
          error: exc
        };
      }
    }
  }
  /************
  FILE: page.js
  ************/
  _exports.Item = Item;
  function Page() {
    const controller = new UIController();
    this.show = () => {
      ReactDOM.render(React.createElement(View, {
        controller
      }), this.container);
      this.container.id = "app-gallery-page";
      this.container.classList.add("jadmin-page", "jd-page__gallery");
    };
    this.hide = () => setTimeout(() => ReactDOM.unmountComponentAtNode(this.container), 350);
  }

  /*********************
  FILE: ui-controller.js
  *********************/

  class UIController extends ReactiveModel {
    _uploader;
    get uploader() {
      return this._uploader;
    }
    _items = new Map();
    get items() {
      return this._items;
    }
    get ready() {
      true;
    }
    _module;
    _application;
    constructor() {
      super();
      this.loadImages = this.loadImages.bind(this);
      this.checkItems = this.checkItems.bind(this);
      const id = {
        application: 1917723684,
        module: 'application//1917723684//static-test'
      };
      this._module = new Module({
        identifier: {
          id: id.module
        }
      });
      this._application = new Application({
        identifier: {
          id: id.application
        }
      });
      this.load();
    }
    checkItems() {
      this.triggerEvent();
    }
    load() {
      const params = {
        application: {
          id: this._application.id,
          type: 'application'
        },
        module: {
          id: this._module.id,
          type: 'module'
        },
        overwrite: {
          id: this._module.id,
          type: 'overwrite',
          image: 'static/jida.png'
        }
      };
      const uploader = new JidaUploader({
        type: 'image',
        name: 'images',
        params: {},
        url: `http://localhost:8080/uploader`,
        input: {
          name: 'images',
          multiple: true
        }
      });
      this._uploader = uploader;
      uploader.bind('file.loaded', this.loadImages);
      uploader.bind('loadend', async event => {
        try {
          this._processing = true;
          this.triggerEvent();

          //validamos la ruta static del modulo
          await this._module.checkStatic();
          //TODO aqui debo llamar cuando es overwrite para agregar la entrada

          //validamos la ruta static de la applicacion
          await this._application.checkStatic();
          const response = await uploader.publish(params.application);
          response.data.forEach(item => {
            if (item.originalName) {
              const instance = new MediaItem();
              instance.loadFromLocale(item);
              this.items.set(item.originalName, instance);
            }
          });
          this._processing = false;
          this.triggerEvent();
        } catch (e) {
          console.error(e);
        }
      });
    }
    _interval;
    loadImages() {
      const {
        files
      } = this.uploader;
      this.uploader.files.items.forEach((item, key) => {
        this.items.set(key, item);
      });
      clearInterval(this._interval);
      this._interval = window.setTimeout(() => {
        this.triggerEvent();
      }, 0);
    }
    create(selector, draganddrop) {
      this.uploader.create(selector);
      this.uploader.addDragAndDrop(draganddrop);
      this.triggerEvent();
    }
    deleteItem(name) {
      const item = this.items.get(name);
      item.remove();
      this.items.delete(name);
      this.triggerEvent();
    }
  }
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