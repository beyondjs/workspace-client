define(["exports", "module", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/scaffolding@1.0.0/main"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Widget = _exports.ReactiveModel = _exports.PROJECT_TYPES = _exports.ModuleBuilder = _exports.ElementWidget = _exports.ApplicationBuilder = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    TEMPLATES
  } = dependency_1;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/plm", "0.0.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/workspace", "1.1.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/inspect@0.0.1/models",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['@beyond-js/scaffolding/main', dependency_1]]);
  const {
    module
  } = __pkg.bundle;
  /***********
  JS PROCESSOR
  ***********/

  /***********************
  FILE: _reactive-model.js
  ***********************/

  class ReactiveModel {
    #ready;
    get ready() {
      return this.#ready;
    }
    #fetching;
    get fetching() {
      return this.#fetching;
    }
    set fetching(value) {
      if (value === this.#fetching) return;
      this._fetching = value;
      this.triggerEvent();
    }
    _fetched;
    get fetched() {
      return this._fetched;
    }
    #processing;
    get processing() {
      return this.#processing;
    }
    set processing(value) {
      if (value === this.#processing) return;
      this.#processing = value;
      this.triggerEvent();
    }
    #processed;
    get processed() {
      return this._processed;
    }
    set processed(value) {
      if (value === this.#processed) return;
      this.#processed = value;
      this.triggerEvent();
    }
    #loaded;
    get loaded() {
      return this.#loaded;
    }
    #error;
    get error() {
      return this.#error;
    }
    set error(value) {
      if (value === this.#error || typeof value !== "string") return;
      this.#error = value;
      this.triggerEvent();
    }
    constructor() {
      this._events = new Events({
        bind: this
      });
      this.triggerEvent = this.triggerEvent.bind(this);
      this._set = this._set.bind(this);
    }
    triggerEvent = (event = "change") => this._events.trigger(event);

    /**
     * set value in a private property
     * @param property
     * @param value
     */
    _set(property, value) {
      let props = {};
      if (property && value !== "undefined") props[property] = value;else props = property;
      let updated = false;
      for (const prop in props) {
        const key = `_${prop}`;
        if (!this.hasOwnProperty(key)) continue;

        //same value on store
        if (this[key] === props[prop]) continue;
        this[key] = props[prop];
        updated = true;
      }
      if (updated) {
        this.triggerEvent();
      }
    }
    getProperties() {
      const props = {};
      Object.keys(this).forEach(property => props[property.replace("_", "")] = this[property]);
      return props;
    }
  }

  /******************************
  FILE: application\_templates.js
  ******************************/
  _exports.ReactiveModel = ReactiveModel;
  const PROJECT_TYPES = _exports.PROJECT_TYPES = [{
    name: 'empty'
  }];
  /*******************************
  FILE: application\application.js
  *******************************/

  class ApplicationBuilder extends ReactiveModel {
    #id;
    #required = ["name", "version"];
    #created;
    get created() {
      return this.#created;
    }
    set created(value) {
      if (value === this.#created || typeof value !== "boolean") return;
      this.#created = value;
      this.triggerEvent();
    }
    #description;
    get description() {
      return this.#description;
    }
    set description(value) {
      if (value === this.#description || typeof value !== "string") return;
      this.#description = value;
      this.triggerEvent();
    }
    #error;
    get error() {
      return this.#error;
    }
    set error(value) {
      this.#error = value;
      this.triggerEvent();
    }
    get id() {
      return this.#id;
    }
    set id(value) {
      if (value === this.#id || !["number", "string"].includes(typeof value)) return;
      this.#id = value;
      this.triggerEvent();
    }
    #is;
    get is() {
      return this.#is;
    }
    set is(value) {
      if (value === this.#is || !["template", "type"].includes(value)) return;
      this.#is = value;
      this.triggerEvent();
    }
    #fetching;
    get fetching() {
      return this.#fetching;
    }
    set fetching(value) {
      this.#fetching = value;
      this.triggerEvent();
    }
    #identifier;
    get identifier() {
      return this.#identifier;
    }
    set identifier(value) {
      if (value === this.#identifier || typeof value !== "string") return;
      this.#identifier = value;
      this.triggerEvent();
    }
    #npm = true;
    get npm() {
      return this.#npm;
    }
    set npm(value) {
      if (value === this.#npm) return;
      this.#npm = value;
      this.triggerEvent();
    }
    get getters() {
      return {
        id: this.id,
        type: this.type,
        name: this.name,
        title: this.title,
        version: this.version,
        created: this.created,
        platforms: this.platforms,
        processed: this.processed,
        processing: this.processing,
        fetching: this.fetching,
        description: this.description,
        npm: this.npm
      };
    }
    #name;
    get name() {
      return this.#name;
    }
    set name(value) {
      if (this.#name === value) return;
      this.#name = value;
      this.triggerEvent();
    }
    #ready = true;
    get ready() {
      return this.#ready;
    }
    get templates() {
      return TEMPLATES ?? [];
    }
    #title;
    get title() {
      return this.#title;
    }
    set title(value) {
      if (value === this.#title || typeof value !== "string") return;
      this.#title = value;
      this.triggerEvent();
    }
    #TYPES = PROJECT_TYPES;
    get TYPES() {
      return this.#TYPES;
    }
    #type;
    get type() {
      return this.#type;
    }
    set type(value) {
      if (value === this.#type || typeof value !== "string") return;
      this.#type = value;
      this.triggerEvent();
    }
    #version = "1.0.0";
    get version() {
      return this.#version;
    }
    set version(value) {
      if (value === this.#version || typeof value !== "string") return;
      this.#version = value;
      this.triggerEvent();
    }

    /**
     * indicates if the object data is valid
     * @returns {boolean}
     */
    get valid() {
      let invalid = !!this.#required.find(field => {
        return !this[field];
      });
      return !invalid;
    }
    constructor() {
      super();
      this.create = () => create(this);
      window.model = this;
    }
    clean() {
      this.created = false;
      this.title = undefined;
      this.description = undefined;
      this.identifier = undefined;
      this.error = undefined;
    }

    // async getInitialPort(inspect = false) {
    //     let cont = 0;
    //     let port = this.#startPort;
    //     const field = inspect ? this.#inspectPort : this.#navigatePort;
    //     while (cont < 5 || field) {
    //         if (await this.checkPort(port)) {
    //             inspect ? this.#inspectPort = port : this.#navigatePort = port;
    //             break;
    //         }
    //         port = port - 100;
    //         cont++;
    //     }
    //     this.#startPort = port - 100;
    //     return port;
    // }
  }

  /**************************
  FILE: application\create.js
  **************************/
  _exports.ApplicationBuilder = ApplicationBuilder;
  function validate(parent) {
    const value = parent.name;
    const regexp = /(@[\w-]+\/[\w-.]+)|[\w-\.]+/;
    if (!regexp.test(value)) {
      parent.error = "PROJECT_IDENTIFIER";
    }
    return true;
  }
  async function create(parent) {
    parent.error = undefined;
    parent.fetching = true;
    try {
      const validation = validate(parent);
      if (!validation) return;
      const response = await module.execute('builder/project/create', parent.getters);
      if (!response?.status) {
        parent.error = response.error;
        return;
      }
      parent.id = response.data.id;
      parent.created = true;
    } catch (exc) {
      console.error(exc);
      parent.created = false;
    } finally {
      parent.processed = true;
      parent.fetching = false;
    }
  }

  /************************
  FILE: application\port.js
  ************************/

  async function checkPort(base, port) {
    if (!port) throw new Error('port to check is required');
    base.processing = true;
    try {
      return module.execute('builder/project/checkPort', {
        port: port
      });
    } catch (error) {
      base.processing = false;
      base.processed = true;
    } finally {
      base.processing = false;
      base.processed = true;
    }
  }

  /*********************
  FILE: bundle\bundle.js
  *********************/

  /**
   * Represents a module that could be created and only has a bundle
   */
  class BundleBuilder extends ReactiveModel {
    #widgets = ["widget", "layout", "page"];
    _id;
    get id() {
      return `${this.moduleId}//${this._type}`;
    }
    get moduleId() {
      const name = this.#widgets.includes(this.type) ? this.#widget.get("name") : this.name;
      const path = `application//${this._applicationId}//${this.type === "layout" ? "layouts/" : ""}`;
      return `${path}${name.replace(/ /g, "-")}`;
    }
    _type;
    get type() {
      return this._type;
    }
    _name;
    get name() {
      return this._name ?? "";
    }
    _error;
    get error() {
      return this._error;
    }
    _vdir;
    get vdir() {
      return this._vdir ?? 0;
    }
    _structure;
    get structure() {
      return this._structure;
    }
    _route = "/";
    get route() {
      return this._route;
    }
    #bundles = new Set();
    get bundles() {
      return this.#bundles;
    }
    get multilanguage() {
      return this.bundles.includes("txt");
    }
    set multilanguage(value) {
      if (value) {
        this.bundles.add("txt");
        this.triggerEvent();
        return;
      }
      this.bundles.delete("txt");
    }
    _title;
    _description;
    _styles;
    _fields;
    _layoutId;
    _applicationId;
    _multilanguage = false;
    _processors = new Map();
    get styles() {
      return this._styles;
    }
    /**
     * Define if the module to create is a predefined template.
     * @private
     */
    _template;
    #widget;
    get valid() {
      const structure = this._structure;
      if (["page", "widget", "layout"].includes(this._type)) {
        return this.#widget.valid;
      }
      if (!structure.required) return true;
      const keepEmpty = structure.required.filter(property => !this[`_${property}`]);
      return !keepEmpty.length;
    }
    set type(type) {
      if (type === this._type) return;
      if (this.#widgets.includes(type)) {
        this.#widget.type = type;
        this._type = type;
        return;
      }
      this._type = type;
      if (!this._type) return this.triggerEvent();
      this._structure = Structures[this._type];
      this._fields = Structures.module.fields.concat(this._structure.fields);
      this.triggerEvent();
    }
    get template() {
      return this._template;
    }
    set template(template) {
      if (template === this._template) return;
      this._template = template;
      this.triggerEvent();
    }
    constructor(applicationId) {
      super();
      this.#widget = new Widget();
      this.#widget.bind("change", this.triggerEvent);
      this._applicationId = applicationId;
    }
    set(property, value) {
      if (this.#widgets.includes(this._type)) {
        this.#widget.set(property, value);
        return;
      }
      this._set(property, value);
    }
    setMultilanguage(value) {
      if (value === this._multilanguage) return;
      this._multilanguage = value;
      this.triggerEvent();
    }
    get additionalProcessors() {
      return [{
        id: "vue",
        name: "Vue"
      }, {
        id: "svelte",
        name: "Svelte"
      }];
    }
    get processors() {
      return Array.from(this._processors.keys());
    }
    addProcessor(value) {
      if (this._processors.has(value)) return;
      this._processors.set(value, true);
      this.triggerEvent();
    }
    removeProcessor(value) {
      if (!this._processors.has(value)) return;
      this._processors.delete(value);
      this.triggerEvent();
    }
    clearProcessors() {
      this._processors.clear();
      this.triggerEvent();
    }
    getProperties() {
      let params = {};
      params.projectId = this._applicationId;
      this.bundles.add(this._type);
      params.bundles = [...this.bundles];
      params.processors = Array.from(this._processors.keys());
      if (this.#widgets.includes(this._type)) {
        return {
          ...params,
          ...this.#widget.structure
        };
      }
      this._fields.forEach(field => {
        const key = `_${field}`;
        if (this[key]) params[field] = this[key];
      });
      return params;
    }
    async publish() {
      try {
        const params = this.getProperties();
        this._set({
          fetching: true,
          error: undefined
        });
        const action = params.template ? "/builder/module/clone" : "/builder/module/create";
        this._styles && params.processors.push("scss");
        const response = await module.execute(action, params);
        if (response.error) {
          this._set({
            error: response.error
          });
          return response;
        }
        this._set({
          fetching: false
        });
        return true;
      } catch (exc) {
        console.error(1, exc);
      }
    }
  }

  /*********************
  FILE: bundle\module.js
  *********************/

  /**
   * Manager to create bundles
   */
  class ModuleBuilder extends ReactiveModel {
    #bundle;
    #applicationId;
    #PROCESSORS = ["scss", "sass", "less"];
    #BUNDLES = ["page", "widget", "layout", "code", "start", "bridge", "typescript"];

    /**
     * TODO: change logic @julio
     *
     * Defines the available templates
     * @type {Readonly<{page: {id: string, bundle: string}, server_page: {id: string, bundle: string}, mobile_login: {id: string, bundle: string}}>}
     */
    #TEMPLATES = Object.freeze({
      page: {
        id: "page",
        bundle: "page"
      },
      server_page: {
        id: "server_page",
        bundle: "page"
      },
      mobile_login: {
        id: "mobile_login",
        bundle: "page"
      }
    });
    get applicationId() {
      return this.#applicationId;
    }
    get PROCESSORS() {
      return this.#PROCESSORS;
    }
    get BUNDLES() {
      return this.#BUNDLES;
    }
    get type() {
      return this.#bundle.template ?? this.#bundle.type;
    }
    #origin;
    get origin() {
      return this.#origin;
    }
    set origin(value) {
      if (value === this.#origin) return;
      this.#origin = value;
      this.triggerEvent();
    }
    get bundle() {
      return this.#bundle;
    }
    constructor(applicationId) {
      super(applicationId);
      this.#applicationId = applicationId;
      this.#bundle = new BundleBuilder(this.#applicationId);
      this.#bundle.bind("change", this.triggerEvent);
    }
    setTemplate(name) {
      if (!this.#TEMPLATES.hasOwnProperty(name)) {
        console.warn("the template does not exists");
      }
      const template = this.#TEMPLATES[name];
      this.#bundle.type = template.bundle;
      this.#bundle.template = template.id;
    }
    getStructure(bundle) {
      return Structures[bundle];
    }
    setType(type) {
      this.#bundle.type = type;
    }
    cleanType() {
      this.#bundle.type = undefined;
      this.#bundle.template = undefined;
    }
  }

  /************************
  FILE: bundle\processor.js
  ************************/
  _exports.ModuleBuilder = ModuleBuilder;
  class BundleProcessor extends ReactiveModel {
    constructor(type) {
      super(type);
    }
  }
  /*************************
  FILE: bundle\structures.js
  *************************/

  const Structures = {
    module: {
      fields: ["id", "name", "title", "description", "developer", "author", "template", "styles", "server", "multilanguage"]
    },
    page: {
      fields: ["vdir", "route", "layoutId", "element"],
      required: ["route", "name", "element"],
      processors: ["ts", "jsx"],
      dependencies: ["layout"]
    },
    widget: {
      fields: ["element"],
      required: ["name", "element"],
      processors: ["ts", "sass", "scss"]
    },
    layout: {
      fields: ["element"],
      required: ["name", "element"],
      processors: ["ts", "jsx"]
    },
    code: {
      required: ["name"],
      processors: ["ts", "jsx"]
    },
    bridge: {
      required: ["name"]
    },
    start: {
      required: ["name"]
    },
    ts: {
      required: ["name"]
    },
    js: {
      required: ["name"]
    }
  };

  /**********************************
  FILE: bundle\types\element\index.js
  **********************************/

  class ElementWidget extends ReactiveModel {
    #pattern = /[a-z]+-[a-z]+/g;
    #properties = {
      name: "",
      id: undefined,
      route: "",
      styles: true
    };
    get valid() {
      return !!this.#properties.name.match(this.#pattern);
    }
    get structure() {
      let output = {};
      if (!!this.#properties.id) output.id = this.#properties.id;
      output.name = this.#properties.name;
      return output;
    }
    set(key, value) {
      if (!this.#properties.hasOwnProperty(key)) return;
      this.#properties[key] = value;
      this.triggerEvent();
    }
    get(property) {
      if (!this.#properties.hasOwnProperty(key)) return;
      return this.#properties[property];
    }
  }

  /***************************
  FILE: bundle\types\widget.js
  ***************************/
  _exports.ElementWidget = ElementWidget;
  class Widget extends ReactiveModel {
    #fields = [];
    #types = ["widget", "page", "layout"];
    #type;
    _name;
    _id;
    #properties = {
      name: "",
      id: undefined,
      route: "",
      styles: true
    };
    get type() {
      return this.#type;
    }
    set type(value) {
      if (value === this.#type || !this.#types.includes(value)) return;
      this.#type = value;
      this.triggerEvent();
    }
    #element;
    get element() {
      return this.#element.structure;
    }
    get structure() {
      return {
        ...this.#properties,
        element: {
          ...this.#element.structure
        }
      };
    }
    #validation;
    get validation() {
      this.#validation = Structures[this._type];
    }

    /**
     * Returns the structure of the widget to validate
     *
     * This method is added while the whole refactor is done, the logic needs to change.
     */
    get valid() {
      const structure = Structures[this.#type];
      const validate = property => property !== "element" && [undefined].includes(this.#properties[property]);
      const isInvalid = structure.required.some(validate);
      return !isInvalid && this.#element.valid;
    }
    constructor() {
      super();
      this.#element = new ElementWidget();
      this.#element.bind("change", this.triggerEvent);
    }
    set(key, value) {
      if (key.startsWith("element.")) {
        return this.#element.set(key.split(".")[1], value);
      }
      if (!this.#properties.hasOwnProperty(key)) return;
      this.#properties[key] = value;
      this.triggerEvent();
    }
    get(property) {
      if (!this.#properties.hasOwnProperty(property)) return;
      return this.#properties[property];
    }
  }
  _exports.Widget = Widget;
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