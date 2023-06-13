define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/overlay", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondPicture = void 0;
  _exports.BeyondPictureModel = BeyondPictureModel;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    Overlay
  } = dependency_3;
  const {
    BeyondImage
  } = dependency_4;
  const {
    BeyondIconButton
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.0.5"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/picture"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/overlay', dependency_3], ['@beyond-js/ui/image', dependency_4], ['@beyond-js/ui/icon', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  picture.jsx
  **********/

  class BeyondPicture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.model = props.model ? props.model : new BeyondPictureModel();
      this.showOverlay = this.showOverlay.bind(this);
      this.closeOverlay = this.closeOverlay.bind(this);
      this.updateState = this.updateState.bind(this);
      this.model.setCallbackListener(this.updateState);
      this.overlayConfig = {
        'handler': this.closeOverlay,
        'title': '¿Qué deseas realizar?',
        'options': {
          'camera': {
            'icon': 'camera',
            'text': 'Tomar una foto',
            'action': () => this.setPicture('camera')
          },
          'gallery': {
            'icon': 'gallery',
            'text': 'Subir una foto de la galería',
            'action': () => this.setPicture('gallery')
          }
        }
      };
      this.overlay = new Overlay(this.overlayConfig);
    }
    updateState(state) {
      this.setState(state);
    }
    async setPicture(source) {
      await this.model.capture(source);
      this.overlay.close();
      this.setState({
        'src': this.model.src
      });
    }
    closeOverlay() {
      this.overlay.close();
    }
    showOverlay(event) {
      event.stopPropagation();
      this.overlay.open();
    }
    render() {
      const {
        picture,
        cover
      } = this.props;
      let imagePicture = {};
      if (this.state.src) imagePicture.src = this.state.src;else imagePicture = picture;
      return /*#__PURE__*/React.createElement("div", {
        className: "content-picture"
      }, /*#__PURE__*/React.createElement(BeyondImage, imagePicture), /*#__PURE__*/React.createElement(BeyondIconButton, {
        icon: "camera",
        className: "upload-picture",
        onClick: this.showOverlay
      }));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /***************
  FILE: picture.js
  ***************/
  _exports.BeyondPicture = BeyondPicture;
  function BeyondPictureModel() {
    let url;
    const events = new Events({
      'bind': this
    });
    const TYPE_IMAGE = Object.freeze({
      'ICON': 'icon',
      'COVER': 'cover',
      'PICTURE': 'picture'
    });
    let src;
    Object.defineProperty(this, 'src', {
      'get': () => src
    });
    let orientation;
    Object.defineProperty(this, 'orientation', {
      'get': () => orientation
    });
    let width;
    Object.defineProperty(this, 'width', {
      'get': () => width
    });
    let height;
    Object.defineProperty(this, 'height', {
      'get': () => height
    });
    let uploaded;
    Object.defineProperty(this, 'uploaded', {
      'get': () => !!uploaded
    });
    let uploading;
    Object.defineProperty(this, 'uploading', {
      'get': () => !!uploading
    });
    let loading;
    Object.defineProperty(this, 'loading', {
      'get': () => !!loading
    });
    let srcFilter;
    Object.defineProperty(this, 'srcFilter', {
      'get': () => srcFilter
    });
    let base64;
    Object.defineProperty(this, 'source', {
      'get': () => base64
    });
    Object.defineProperty(this, 'getters', {
      'get': () => base64
    });
    const clean = () => {
      uploaded = src = orientation = width = height = undefined;
      events.trigger('change');
    };
    this.clean = clean;
    this.cleanFilter = () => srcFilter = undefined;
    let callbackListener;
    this.setCallbackListener = callback => {
      callbackListener = callback;
    };
    const triggerChange = state => {
      if (callbackListener) callbackListener(state);
      events.trigger('change');
    };
    this.capture = async (source, specs) => {
      const media = await beyond.import('libraries/beyond-ui/media/js.js');
      if (src) clean();
      const square = specs && specs.square ? specs.square : null;
      specs = specs ? specs : {};
      loading = true;
      triggerChange();
      const resource = await media.getResource(source, specs);
      url = resource.url;
      try {
        const specs = {
          'maxWidth': 2048,
          'maxHeight': 2048,
          'rotate': resource.rotate
        };
        const resize = await media.resizePicture(url, specs);
        src = resize.src;
        orientation = resize.orientation;
        width = resize.width;
        height = resize.height;
        loading = false;
        triggerChange({
          'src': src
        });
        if (square && width !== height) {
          clean();
          return false;
        }
        return true;
      } catch (e) {
        console.error('Error process image: ', e);
        let mediaError = new media.ResourceSelectorError('e001', 'message error');
        if (e && e !== mediaError.code) {
          console.error(e);
          beyond.showWarning('Error procesando imagen.');
        }
        clean();
        return false;
      }
    };
    this.overlay = async function (source) {
      const media = await beyond.import('libraries/beyond-ui/media/js.js');
      const processor = new media.imageProcessor(url);
      const image = new Image();
      image.src = source;
      async function onLoad() {
        try {
          const merge = await processor.morph(image);
          srcFilter = merge.src;
          triggerChange();
        } catch (e) {
          console.error('error picture: ', e);
        }
      }
      image.onload = onLoad;
    };
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/picture', '.content-picture{display:flex;position:relative}.content-picture .upload-picture{position:absolute;right:50px;bottom:20px;border:var(--beyond-text-on-primary) 2px solid}.content-picture .upload-picture svg{position:absolute;top:6px;left:6px;height:23px;width:23px;fill:var(--beyond-text-on-primary)}');
  legacyStyles.appendToDOM();
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