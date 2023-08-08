define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/modal", "@beyond-js/ui@0.0.1/form", "@beyond-js/ui@0.0.1/import"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Page = Page;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondModal,
    BeyondAlertModal,
    BeyondConfirmModal
  } = dependency_3;
  const {
    BeyondButton
  } = dependency_4;
  const {
    BeyondImport
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/modal/page"
    },
    "type": "page"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/modal', dependency_3], ['@beyond-js/ui/form', dependency_4], ['@beyond-js/ui/import', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /*******
  view.jsx
  *******/

  class PageView extends React.Component {
    constructor(props) {
      super(props);
      this.modal = React.createRef();
      this.button = React.createRef();
      this.parent = React.createRef();
      this.alert = React.createRef();
      this.textarea = React.createRef();
      this.alertCentered = React.createRef();
      this.confirm = React.createRef();
      this.state = {
        'cls': ''
      };
    }
    open(cls) {
      this.setState({
        'cls': cls
      });
      this.modal.current.open();
    }
    openAlert(centered) {
      const alert = centered ? this.alertCentered : this.alert;
      alert.current.open();
    }
    openConfirm() {
      this.confirm.current.open();
    }
    copy(event) {
      const target = event.currentTarget;
      const textarea = this.textarea.current;
      textarea.value = target.innerText;
      textarea.select();
      textarea.setSelectionRange(0, 99999); /*For mobile devices*/

      document.execCommand("copy");
      console.log(`text copied`);
    }
    componentDidMount() {
      const codes = this.parent.current.querySelectorAll('pre');
      codes.forEach(item => item.addEventListener('click', this.copy.bind(this)));
    }
    render() {
      const cls = this.state.cls;
      return /*#__PURE__*/React.createElement("main", {
        ref: this.parent
      }, /*#__PURE__*/React.createElement("textarea", {
        ref: this.textarea
      }), /*#__PURE__*/React.createElement("h2", null, "Custom Modal"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondModal",
        route: "/libraries/beyond-ui/modal.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondModal className="cls">{content}</BeyondModal>'), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.open()
      }, "Abrir"), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.open('md')
      }, "Abrir Mediano"), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.open('lg')
      }, "Abrir Grande"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Alert Modal"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondAlertModal",
        route: "/libraries/beyond-ui/modal.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondAlertModal ref={this.alert} text="Esto es un alert"/>'), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.openAlert()
      }, "Alert"), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.openAlert('centered')
      }, "Alert centrado"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", null, "Confirmation Modal"), /*#__PURE__*/React.createElement(BeyondImport, {
        name: "BeyondConfirmModal",
        route: "/libraries/beyond-ui/modal.js"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-muted"
      }, "Example: "), /*#__PURE__*/React.createElement("pre", null, '<BeyondAlertModal ref={this.alert} text="Esto es un confirm" title="title"/>'), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.openConfirm()
      }, "Confirm"), /*#__PURE__*/React.createElement(BeyondButton, {
        onClick: () => this.openConfirm()
      }, "Confirm Centrado"), /*#__PURE__*/React.createElement(BeyondAlertModal, {
        ref: this.alert,
        text: "Esto es un alert"
      }), /*#__PURE__*/React.createElement(BeyondAlertModal, {
        ref: this.alertCentered,
        centered: true,
        title: "Esto es un alert centrado"
      }), /*#__PURE__*/React.createElement(BeyondConfirmModal, {
        ref: this.confirm,
        text: "Esto es un alert",
        onConfirm: () => console.log("confirmado"),
        onCancel: () => console.log('cancelado')
      }), /*#__PURE__*/React.createElement(BeyondModal, {
        ref: this.modal,
        className: cls
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Esto es un modal"), /*#__PURE__*/React.createElement("h4", null, "Esto tiene contenido"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia, pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus, reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error, eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe soluta. Ut."), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo, nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam."), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia, pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus, reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error, eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe soluta. Ut."), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo, nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam."), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cum doloribus eaque facilis modi sapiente sunt voluptas. Ab aliquam animi, aperiam asperiores consequatur consequuntur culpa deleniti deserunt dignissimos dolorem error, esse exercitationem expedita facilis id illum impedit ipsa ipsam laboriosam libero magnam molestiae nemo officia, pariatur porro quas qui quidem quo quod rem similique suscipit temporibus tenetur veniam vero vitae voluptatum? Asperiores assumenda dolores, ipsam mollitia repellendus temporibus voluptates? Alias dignissimos eos eum incidunt nostrum odit perspiciatis qui repellendus, reprehenderit ut. Culpa eius nam quaerat! A accusantium aspernatur, cum excepturi fugiat illum ipsam maiores molestiae, officia quo, similique sit tempore. Adipisci consequuntur cumque dolore doloribus dolorum, eaque esse facere minima modi molestiae praesentium quaerat quibusdam reiciendis reprehenderit sequi similique temporibus veritatis? Alias aspernatur iste minus numquam officia, soluta sunt? Harum natus, odio! Aspernatur, autem, eos error, eveniet expedita iste laudantium maiores mollitia qui quos recusandae reprehenderit saepe soluta. Ut."), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur corporis deleniti doloribus neque, nulla officiis quo rem rerum vel? Aperiam atque consectetur culpa distinctio eaque esse eum explicabo fuga id inventore iusto laudantium libero mollitia nemo, nulla numquam officiis optio quae quasi quibusdam quo quod recusandae sed, tempore ullam vitae voluptas voluptatem. Cupiditate, delectus dolorem error est et expedita iste maxime molestias neque nesciunt non odio omnis placeat quos ratione repellat vel. Alias, culpa cupiditate deleniti dolor dolorem eaque, enim hic incidunt inventore iste labore magnam molestiae neque non nulla odio voluptates? Dolores ducimus, ea et ratione tempora totam."))));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /************
  FILE: page.js
  ************/

  function Page() {
    const specs = {};
    ReactDOM.render(React.createElement(PageView, specs), this.container);
    this.container.id = 'beyond-ui-dialogs-page';
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/modal/page', '#beyond-ui-dialogs-page textarea{display:none}#beyond-ui-dialogs-page span{display:grid}#beyond-ui-dialogs-page button{margin-right:5px}#beyond-ui-dialogs-page pre{margin:20px 0;padding:15px;position:relative;transition:all .1s ease-in-out;cursor:pointer}#beyond-ui-dialogs-page pre:hover{background:#ff8056;color:#fff;transition:all .1s ease-in}#beyond-ui-dialogs-page pre:before{content:"Copy";position:absolute;padding:15px 20px;top:0;right:0;background:#333;color:#e4e5dc}');
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