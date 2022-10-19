define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/inspect@0.0.1/models.legacy", "@beyond-js/inspect@0.0.1/models.ts", "@beyond-js/plm@0.0.1/plm-indexed-db", "@beyond-js/dashboard@0.0.1/hooks", "@beyond-js/dashboard@0.0.1/ds-editor.code"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BundleManager = void 0;
  _exports.DSDatabase = DSDatabase;
  _exports.projectsFactory = _exports.hmr = _exports.branchFactory = _exports.__beyond_pkg = _exports.TreeFactory = _exports.Packagers = _exports.ModuleModel = _exports.ModuleManager = _exports.FilesTree = _exports.FavoritesModel = _exports.FavoritesFactory = _exports.FavoriteChildren = _exports.DSUser = _exports.DSModel = void 0;

  /*************
  LEGACY IMPORTS
  *************/
  const {
    ReactiveModel
  } = dependency_1;
  const {
    Packager,
    Application,
    Consumers,
    Dashboard,
    ApplicationModule,
    ProcessorDependencies,
    ProcessorCompiler
  } = dependency_2;
  const Indexed = dependency_3.default;
  const {
    useBinder
  } = dependency_4;
  const {
    getEditorManager
  } = dependency_5;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/models"
    },
    "type": "code"
  }, _amd_module.uri).package();

  ;

  __pkg.dependencies.update([['@beyond-js/inspect/models.legacy', dependency_1], ['@beyond-js/inspect/models.ts', dependency_2], ['@beyond-js/plm/plm-indexed-db', dependency_3], ['@beyond-js/dashboard/hooks', dependency_4], ['@beyond-js/dashboard/ds-editor.code', dependency_5]]);

  const {
    module
  } = __pkg.bundle;
  /***********
  JS PROCESSOR
  ***********/

  /****************************
  FILE: tree\branches\branch.js
  ****************************/

  class Branch extends ReactiveModel {
    _label;

    get label() {
      return this._label;
    }

    _id;

    get id() {
      return this._id;
    }

    _link;

    get link() {
      return this._link;
    }

    _source;

    get source() {
      return this._source;
    }

    _item;

    get item() {
      return this._item;
    }
    /**
     * TODO: Check if can be removed and added to each branch type as
     * a specific property
     */


    _specs;

    specs() {
      return this._specs;
    }

    _items = new Map();

    get items() {
      return this._items;
    }

    #project;

    get project() {
      return this.#project;
    }
    /**
     * Must be the ApplicationModel
     * @deprecated use project property instead.
     */


    get application() {
      return this.#project.application;
    }

    #favorites;

    get favorites() {
      return this.#favorites;
    }

    _bundle;

    get bundle() {
      return this._bundle;
    }

    _processor;

    get processor() {
      return this._processor;
    }

    #module;

    get module() {
      return this.#module;
    }

    _isFavorite = false;

    get isFavorite() {
      return this._isFavorite;
    }

    #am;

    get am() {
      return this.#am;
    }

    _favoritePathname;

    get favoritePathname() {
      return this._favoritePathname;
    }

    set isFavorite(value) {
      if (value === this._isFavorite) return;
      this._isFavorite = value;
      this.triggerEvent('favorite.changed');
      return this._isFavorite;
    }

    _pathname;

    get pathname() {
      return this._pathname;
    }

    #favoritesList = new Map();

    get favoritesList() {
      return this.#favoritesList;
    }

    constructor(item, project, specs = {}) {
      super();
      this.moment = performance.now();
      this._specs = specs;
      this.parameters = specs;
      this.#project = project;
      this._link = item.filename;
      this._label = item.label ?? item.filename;
      this._source = item;
      this._item = item;
      this.#am = specs.module;
      this._isFavorite = specs?.isFavorite ?? false;
      this._id = item.id;
      this._specs = this.specs;

      if (project) {
        const id = project.constructor.name.toLowerCase() === 'application' ? project.id : project.application?.id;
        this.#favorites = FavoritesFactory.get(id, project); // this.#favorites.bind('loaded', this.checkFavorites.bind(this));
      }

      this._now = performance.now();
      if (item.items) this._items = item.items;
      this.#favoritesList = specs?.favoritesList;
      this.#module = specs.module;
      this._bundle = specs.bundle;
      this._processor = specs.processor;
    }

    addFavorite(item) {
      console.warn("the addFavorite method must be overwrite in the child class");
    }

    removeFavoriteItem = () => this.favoritesList.removeItem(this.pathname);
    registerFavorites = list => {
      /**
       * In the future, will be possible to have the same element in different favorites list.
       *
       */
    };

    update() {}

  }
  /*****************
  FILE: tree\base.js
  *****************/

  /**
   *  Base tree object.
   *
   Set the main important values for the tree and makes available the validation method that is in charge to manage
   the process to create the tree structure. To make it the item's class needs to make available its own process tree
   method checking the branches and calling the addBranch method where necessary
   */


  class BaseTree extends ReactiveModel {
    #items = new Map();
    moment;

    get items() {
      return this.#items;
    }

    #elements = [];

    get elements() {
      return this.#elements;
    }

    #tree = new Map();

    get tree() {
      return this.#tree;
    }

    #object;

    get object() {
      return this.#object;
    }

    #type;

    get type() {
      return this.#type;
    }

    #application;

    get application() {
      return this.#application;
    }

    #project;

    get project() {
      return this.#project;
    }

    #bundle;

    get bundle() {
      return this.#bundle;
    }

    #processor;

    get processor() {
      return this.#processor;
    }

    #module;

    get module() {
      return this.#module;
    }

    #favorites;

    get favorites() {
      return this.#favorites;
    }

    get id() {}

    #update;
    #listener;
    /**
     *
     * @param type
     * @param application
     * @param object
     * @param elements
     * @param module
     * @param bundle
     */

    constructor(type, {
      project,
      object,
      items: elements,
      module,
      bundle,
      listener,
      update
    }) {
      super();

      if (this.constructor === BaseTree) {
        throw new Error("Can't instantiate abstract class!");
      }
      /**
       * TODO: @julio try to make a better logic to minimize the number of parameters.
       */


      this.#module = type === 'module' ? object : module;
      this.moment = performance.now();
      this.#project = project;
      this.#application = project;
      this.#elements = elements;
      this.#type = type;
      this.#object = object;
      this.#bundle = bundle;
      this.#update = update;
      this.#listener = listener;

      if (project) {
        this.#favorites = FavoritesFactory.get(project.application.id, project);
        this.favorites.bind('loaded', this.checkFavorites.bind(this));
      }

      if (listener) {
        if (typeof listener !== 'function') {
          throw Error('the listener of the tree must be a function');
        }

        if (type === 'template') {
          window.setTimeout(() => project.bind('change', listener), 300);
        }

        object.bind('change', listener);
      }

      this.validate();
    }
    /**
     * Query to Favorites Model to check if the item was marked as favorite
     */


    checkFavorites() {
      this.items.forEach(item => {
        item.isFavorite = this.favorites.isFavorite(item.pathname);
      });
      this.unbind('loaded', this.checkFavorites);
    }

    addBranch(map, key, item) {
      map.set(key, item);
    }

    processItem() {// this class may be implemented by items class.
    }

    get branchType() {
      return 'source';
    }

    validate(update = undefined) {
      const tree = new Map();
      update = update ?? this.#update;
      this.#elements.forEach(item => {
        this.processItem(tree, item, update);
      }); // this function is used to order the map elements sending the tree elements at the end.

      const sort = ([fkey, fvalue], [sKey, sValue]) => {
        if (sValue instanceof Map) return -1;
        return 1;
      };

      const orderRecursively = map => {
        map.forEach((value, key) => {
          if (value instanceof Map) {
            const mapOrdered = orderRecursively(new Map([...value.entries()].sort(sort)));
            map.set(key, mapOrdered);
          }
        });
        return new Map([...map.entries()].sort(sort));
      };

      this.#tree = orderRecursively(tree);
      this.#items = orderRecursively(tree);
      this.triggerEvent();
    }

    __setType(type) {
      this.#type = type;
    }
    /**
     * Iterates recursively into the folders structure and returns the
     * subtree created.
     *
     * @param branch the main or parent branch
     * @param tree
     * @param folders
     * @returns {BaseTree}
     */


    subfolderProcess(branch, tree, folders) {
      const folder = folders.shift();
      const subtree = tree.has(folder) ? tree.get(folder) : branchFactory.get('subtree', branch, this.application, folder, {
        listener: this.#listener,
        object: this.#object,
        project: this.#project
      });

      if (!folders.length) {
        const type = this.type === 'static' ? 'static' : 'source';
        subtree.items.set(branch.filename, branchFactory.get(type, branch, this.application, {
          module: this.#module,
          moduleId: this.#module?.id
        }));
        return subtree;
      }

      const items = this.subfolderProcess(branch, subtree.items, folders);
      subtree.items.set(items.label, items); // tree.set(folder, process(subtree.items, folders, index + 1))

      return subtree;
    }

    setElements(elements) {
      if (!elements instanceof Array) {
        console.error('the elements of the tree must be passed as Array');
      }

      this.#elements = elements;
      this.validate(true);
      this.triggerEvent();
    }

    delete() {
      this.#elements = [];
      this.#items = new Map();
      this.triggerEvent();
    }

  }
  /*****************
  FILE: tree\tree.js
  *****************/

  /**
   * Default tree
   *
   * TODO: @julio check if it's necessary
   */


  class Tree extends BaseTree {
    _specs = {};

    get generalSpecs() {
      return this._specs;
    }

    get type() {
      return 'tree';
    }

    addBranch(map, key, item) {
      map.set(key, item);
    }
    /**
     * Check the item and creates it as a branch.
     * @param tree
     * @param item
     */


    processItem(tree, item) {
      if (["backend-bridge", "dependency"].includes(item.is)) return;

      const setBranch = (tree, item) => this.addBranch(tree, item.filename, branchFactory.create(item));

      if ([undefined, ""].includes(item?.relative?.dirname)) {
        setBranch(tree, item);
        return;
      }

      const dirname = item.relative.dirname.replace(/\\/g, '/');
      const folders = dirname.replace(name, '').split('/');
      let subtree = tree;
      const levels = folders.length;
      let path = '';
      folders.forEach((folder, index) => {
        //if the folder item does not exist into the tree, then is created.
        path += `${folder}/`;
        subtree.set(folder, {
          label: folder,
          path,
          item,
          // we add the same item in the folder branch
          specs: this.generalSpecs,
          items: new Map()
        });

        if (levels - 1 !== index) {
          //the subtree variable is overwritten to get the last tree level
          subtree = subtree.get(folder).items;
          return;
        }

        setBranch(subtree.get(folder).items, item);
      });
    }

  }

  const FilesTree = Tree;
  /*************************
  FILE: tree\types\bundle.js
  *************************/

  _exports.FilesTree = FilesTree;

  class BundleTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    processItem(tree, branch, update) {
      const item = branchFactory.get('processor', branch, this.project, {
        bundle: this.bundle,
        module: this.module,
        update
      });
      this.addBranch(tree, branch.name, item);
    }

  }
  /****************************
  FILE: tree\types\consumers.js
  ****************************/


  class ConsumersTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get inlineActions() {
      return [{
        icon: 'add',
        action: this.create
      }];
    }

    processItem(tree, branch) {
      this.addBranch(tree, branch.id, branchFactory.get('consumer', branch, this.application, {}));
    }

    create() {}

  }
  /*******************************
  FILE: tree\types\dependencies.js
  *******************************/


  class DependenciesTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get inlineActions() {
      return [{
        icon: 'add',
        action: this.create
      }];
    }

    processItem(tree, branch) {
      this.addBranch(tree, branch.id, branchFactory.get('dependency', branch, this.application, {}));
    }

    create() {}

  }
  /****************************
  FILE: tree\types\favorites.js
  ****************************/


  class FavoritesTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get icon() {
      return 'favorite';
    }

    _module;

    get module() {
      return this._module;
    }

    get inlineActions() {
      return [{
        icon: 'delete',
        name: 'delete',
        confirm: true
      }];
    }

    constructor() {
      super(...arguments);
      this.object.bind('change', this.onChange);
    }

    onChange = () => {
      this.triggerEvent();
    };
    /**
     * Process each Favorites item
     *
     * The Favorites list item can be any type of branch. To make it possible,
     * the Favorites Tree receives an array where each element is a FavoriteChildren object.
     * The FavoritesChildren object must define all the properties required to create a new tree
     * branch with the branchFavorty.
     * @param tree
     * @param branch
     */

    processItem(tree, branch) {
      const {
        bundle,
        module
      } = branch;
      const specs = {
        bundle,
        module
      };
      const element = branchFactory.get('favorites', branch, this.application, specs);
      this.addBranch(tree, branch.label, element);
    }

    addItem(branch) {
      const item = branchFactory.get('favorites', branch, this.application, {
        favoritesList: this.object,
        bundle: this.object,
        module: this._module
      });
      this.addBranch(this._tree, branch.label, item);
    }

    delete() {
      this.object.delete();
    }

  }
  /*************************
  FILE: tree\types\module.js
  *************************/


  class ModuleTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get actions() {
      return [// {name: 'addBundle', modal: true, icon: 'add', className: "ds-modal md md-modal"},
      ];
    }

    get emptyAction() {// return {name: 'addBundle', modal: true, icon: 'add', className: "ds-modal md md-modal"}
    }

    get inlineActions() {
      return [{
        name: 'open',
        icon: 'arrowForward'
      } // {
      //     name: 'addBundle', modal: true, icon: 'add', className: "ds-modal md md-modal"
      // }
      ];
    }

    _module;

    get module() {
      return this._module;
    }

    constructor() {
      super(...arguments);
    }

    processItem(tree, branch, update) {
      if (!branch?.id) {
        console.warn('invalid item', branch);
        return;
      }

      const item = branchFactory.get('bundle', branch, this.project, {
        bundle: branch,
        module: this.object,
        update: true
      });
      this.addBranch(tree, branch.name, item);
    }

    rename() {
      console.warn("rename");
    }

    open(workspace) {
      workspace.openBoard('module', {
        projectId: this.project.application.id,
        label: this.object.name,
        moduleId: this.object?.id
      });
    }

  }
  /****************************
  FILE: tree\types\processor.js
  ****************************/


  class ProcessorTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get inlineActions() {
      return [{
        icon: 'add',
        name: 'create',
        modal: true
      }];
    }

    processItem(tree, branch) {
      // if the item.relative.dirname is undefined then
      // the file is in the relative root folder and we set as a branch
      if ([undefined, ""].includes(branch?.relative?.dirname)) {
        this.addBranch(tree, branch.filename, branchFactory.get('source', branch, this.application, {
          bundle: this.bundle,
          module: this.module,
          processor: this.object
        }));
        return;
      }

      const dirname = branch.relative.dirname.replace(/\\/g, '/');
      const folders = dirname.replace(name, '').split('/');
      const subtree = this.subfolderProcess(branch, tree, folders);
      this.addBranch(tree, subtree.label, subtree);
    }

  }
  /**************************
  FILE: tree\types\project.js
  **************************/


  class ProjectTreeModel extends BaseTree {
    processItem(tree, branch, update) {
      if (!branch?.module) return;
      const item = branchFactory.get('module', branch, this.application);

      if (!branch.module) {
        console.warn("the am could not be processed on tree", branch);
        return;
      }

      this.addBranch(tree, branch.module.subpath, item);
    }

    update() {}

  }
  /*************************
  FILE: tree\types\static.js
  *************************/


  class StaticTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get inlineActions() {
      return [{
        icon: 'add',
        name: 'static',
        modal: true,
        className: 'md'
      }];
    }

    get actions() {}

    processItem(tree, branch) {
      if (["backend-bridge", "dependency"].includes(branch.is)) return; // if the item.relative.dirname is undefined then
      // the file is in the relative root folder and we set as a branch

      if ([undefined, ""].includes(branch?.relative?.dirname)) {
        this.addBranch(tree, branch.filename, branchFactory.get(this.type, branch, this.application));
        return;
      }

      const dirname = branch.relative.dirname.replace(/\\/g, '/');
      const folders = dirname.replace(name, '').split('/');
      const subtree = this.subfolderProcess(branch, tree, folders);
      this.addBranch(tree, subtree.label, subtree);
    }

  }
  /***************************
  FILE: tree\types\template.js
  ***************************/


  class TemplateTree extends BaseTree {
    get icons() {
      return {
        page: 'ts',
        code: 'scss',
        default: 'folder'
      };
    }

    get inlineActions() {
      return [{
        name: 'create',
        icon: 'add',
        modal: true
      }];
    }

    get favoriteAction() {
      return false;
    }

    #item;

    get item() {
      return this.#item;
    }

    constructor(type, specs) {
      super(type, specs);
      this.#item = specs?.object;
    }

    processItem(tree, branch) {
      if ([undefined, ""].includes(branch?.relative?.dirname)) {
        const branchItem = branchFactory.get('templateSource', branch, this.application);
        this.addBranch(tree, branch.filename, branchItem);
        return;
      }

      const dirname = branch.relative.dirname.replace(/\\/g, '/');
      const folders = dirname.replace(name, '').split('/');
      const subtree = this.subfolderProcess(branch, tree, folders);
      this.addBranch(tree, subtree.label, subtree);
    }

    async create(name) {
      const extension = name.split(["."]).slice(-1)[0];
      const extensions = {
        sass: ['scss', 'sass'],
        less: ['less']
      };
      const exts = this.items.processor === 'less' ? extensions.less : extensions.sass;
      if (!exts.includes(extension)) return {
        error: true,
        message: 'EXT_INVALID'
      };

      try {
        const response = await this.item.createFile({
          filename: name
        });

        if (!response.status) {
          return {
            error: true,
            message: response.message
          };
        }

        this.triggerEvent('branch.added');
        return {
          status: true
        };
      } catch (e) {
        console.error(e.message);
        return {
          error: true,
          message: e.message
        };
      }
    }

  }
  /**********************************
  FILE: tree\branches\types\bundle.js
  **********************************/


  class BranchBundle extends Branch {
    get type() {
      return 'bundle';
    }

    get actions() {
      return [{
        name: 'create',
        icon: 'add',
        className: 'md modal-md '
      }, {
        name: 'rename',
        icon: 'edit'
      }];
    }

    get pathname() {
      return `${this.module.subpath}/${this.label}`;
    }

    _dependenciesTree;

    get dependenciesTree() {
      return this._dependenciesTree;
    }

    _consumersTree;

    get consumersTree() {
      return this._consumersTree;
    }

    #tree;
    /**
     * Define is the instance is an update
     * @private
     */

    _update;
    #specs;

    constructor(item, project, specs = {}) {
      super(item, project, specs);
      this._bundle = item;
      this._item = item;
      this._module = specs.module;
      this._label = item.name;
      this._update = specs.update;
      this.#specs = specs;

      this._createTree();
    }

    _createTree() {
      const specs = {
        project: this.project,
        bundle: this.bundle,
        id: this.bundle.id,
        object: this.bundle,
        items: [...this.item.processors.values()],
        module: this.module,
        listener: this.#specs.listener
      };
      if (this._update) specs.update = this._update;
      const tree = TreeFactory.get('bundle', specs);
      this.#tree = tree;
      this._items = tree.items;
    }

    addFavorite(folder) {
      let {
        item,
        module,
        bundle,
        favorites
      } = this;
      module = module.module ?? module;
      this._isFavorite = true; //todo: @julio remove ..Name Variables.

      favorites.add(folder, {
        favoriteFolder: folder,
        bundleName: bundle.name,
        label: `${module.name}/${this.label}`,
        bundle: {
          id: bundle.id,
          name: bundle.name
        },
        module: {
          id: module.id,
          name: module.name
        },
        containerId: module.id,
        pathname: `${module.subpath}/${this.label}`,
        path: item.pathname,
        type: 'bundle'
      });
    }

    addConsumers(consumers) {
      consumers.id = `${this.item.id}.consumers`;
      const branch = branchFactory.get('resources', consumers, this.application, {
        type: 'consumers'
      });
      this.items.set('consumers', branch);
      this.triggerEvent('change');
    }

    addDependencies(dependencies) {
      dependencies.id = `${this.item.id}.dependencies`;
      const branch = branchFactory.get('resources', dependencies, this.application, {
        type: 'dependencies'
      });
      this.items.set('dependencies', branch);
      this.triggerEvent('change');
    }
    /**
     * The Bundle Tree is updated when are added file elements inside its processors
     */


    update() {
      const bundle = this._bundle;

      if (bundle.processors.size !== this.items.size) {
        this.#tree.setElements([...bundle.processors.values()]);
      }

      this.items.forEach((item, key) => {
        const previousTotal = item.items.size;
        item.update(bundle.processors.get(key));

        if (previousTotal !== bundle.processors.get(key).sources.items.length) {
          item.triggerEvent();
        }
      });
      this.triggerEvent();
    }

  }
  /************************************
  FILE: tree\branches\types\consumer.js
  ************************************/


  class ConsumerBranch extends ReactiveModel {
    get actions() {
      return [];
    }

    get inlineActions() {
      return [];
    }

    get type() {
      return 'consumer';
    }

    _reader;

    get reader() {
      return this._reader;
    }

    get icon() {
      return 'file.consumer';
    }

    _label;

    get label() {
      return this._label;
    }

    _item;

    get item() {
      return this._item;
    }

    _bundle;

    get bundle() {
      return this._bundle;
    }

    _ts;

    get ts() {
      return this._ts;
    }

    _compiler;

    get compiler() {
      return this._compiler;
    }

    get favoriteAction() {
      return false;
    }

    EXCLUDED = ['@beyond-js/kernel/core'];
    _diagnostics;

    get diagnostics() {
      return this._diagnostics ?? {};
    }

    _fetching;

    get fetching() {
      return this._fetching;
    }

    get errors() {
      if (!this.diagnostics) return 0;
      const {
        general,
        dependencies,
        files,
        overwrites
      } = this.diagnostics;
      return (general?.length ?? 0) + (dependencies?.size ?? 0) + (files?.size ?? 0) + (overwrites?.size ?? 0);
    }

    _application;

    get application() {
      return this._application;
    }

    _moduleId;

    get moduleId() {
      if (this._moduleId) return this._moduleId;
      const r = this.bundle.id.split('//');
      r.splice(r.length - 1, 1);
      return this._moduleId = r.join('//');
    }

    _bundleLoaded;

    get bundleLoaded() {
      return this._bundleLoaded;
    }

    _bundleTree;

    get bundleTree() {
      return this._bundleTree;
    }

    constructor(item, application, specs) {
      super();
      this._specs = specs;
      this._application = application;
      this._item = item;
      this._bundle = item.bundle;
      this._ts = item.bundle.processors.get('ts');
      this._compiler = this.ts.compiler;
      this._diagnostics = this.ts.compiler?.diagnostics;
      this._label = item.bundle.pathname;
    }

    loadBundle() {
      const tree = {
        properties: {
          processors: {
            properties: {
              sources: true,
              overwrites: true,
              compiler: true
            }
          }
        }
      };
      const bundle = new Bundle({
        identifier: {
          id: this.bundle.id
        },
        tree: tree
      });
      this.setFetching(true);
      bundle.bind('change', _ => {
        if (!bundle.tree.landed) return;
        this._bundle = bundle;
        this._bundleLoaded = true;
        const tree = TreeFactory.get('bundle', {
          project: this.application,
          object: this.bundle,
          id: this.bundle.id,
          items: [...this.bundle.processors.values()],
          bundle: this.bundle
        });
        this._bundleTree = tree;
        this.setFetching(false);
      });
      bundle.fetch();
    }

    setFetching(value) {
      this._fetching = value;
      this.triggerEvent();
    }

  }
  /**************************************
  FILE: tree\branches\types\dependency.js
  **************************************/


  class DependencyBranch extends ReactiveModel {
    get actions() {
      return [];
    }

    get inlineActions() {
      return [];
    }

    get type() {
      return 'dependency';
    }

    _reader;

    get reader() {
      return this._reader;
    }

    _icons = {
      default: 'file.dependency',
      react: 'file.tsx',
      'beyond/core/ts': 'file.beyond'
    };

    get icon() {
      if (['react', 'beyond/core/ts'].includes(this.label)) {
        return this._icons[this.label];
      }

      return this._icons.default;
    }

    _label;

    get label() {
      return this._label;
    }

    _item;

    get item() {
      return this._item;
    }

    get favoriteAction() {
      return false;
    }

    EXCLUDED = ['@beyond-js/kernel/core'];

    constructor(item, application, specs) {
      super();
      this._specs = specs;
      this._application = application;
      this._item = item;
      this._label = this.getName();
    }

    getName() {
      let name = this.item.resource;
      name = name.replace('beyond_libraries/', '').replace('beyond_modules/', '');
      this._navigable = !this.item.external && !this.EXCLUDED.includes(this.item.resources);
      return name;
    }

  }
  /************************************
  FILE: tree\branches\types\favorite.js
  ************************************/


  class FavoritesBranch extends Branch {
    get actions() {
      return this.instance?.actions ?? [];
    }

    get inlineActions() {
      return this.instance?.inlineActions ?? [];
    }

    _instance;

    get instance() {
      return this._instance;
    }

    _bundle;

    get bundle() {
      return this._bundle;
    }

    get icons() {
      return this._icons;
    }

    _item;

    get item() {
      return this._item;
    }

    _module;

    get module() {
      return this._module;
    }

    get name() {
      return this._item?.name;
    }

    get type() {
      return this.instance?.type;
    }

    get favoriteProxy() {
      return true;
    }

    get label() {
      return this.item.label ?? this.instance.label;
    }

    get id() {
      return `${this.instance.id}.favorites`;
    }

    _overwritten = ['label', 'id'];

    constructor(item, application, specs) {
      super(item, application);
      this._item = item;
      this._label = item.name;
      this._instance = this.getInstance(item);
      return new Proxy(this, {
        get: function (obj, field) {
          if (obj._overwritten.includes(field)) return obj[field];
          if (field in obj.instance) return obj.instance[field];
          if (field in obj) return obj[field];
        },
        set: function (obj, field, value) {
          if (field in obj.instance) {
            obj.instance[field] = value;
            return true;
          }

          return false;
        }
      });
    }

    getInstance(branch) {
      const {
        type,
        name,
        item,
        bundle,
        module
      } = branch;
      const specs = {
        favoritesList: this.object,
        bundle,
        module,
        isFavorite: true
      };
      return branchFactory.get(type, item, this.application, specs);
    }

  }
  /**********************************
  FILE: tree\branches\types\module.js
  **********************************/


  class ModuleBranch extends Branch {
    get actions() {
      return [{
        name: 'addBundle',
        icon: 'add',
        modal: true
      }, {
        name: 'rename',
        icon: 'edit',
        modal: true
      }];
    }

    _inlineActions = [];

    get inlineActions() {
      return this._inlineActions;
    }

    get type() {
      return 'module';
    }

    _module;

    get module() {
      return this._module;
    }

    _model;

    get model() {
      return this._model;
    }

    #loaded;

    get loaded() {
      return this.#loaded;
    }
    /**
     *
     * @private {ModuleManager}
     */


    _manager;

    get manager() {
      return this._manager;
    }

    get pathname() {
      return `${this.item?.id}/${this.label}`;
    }

    constructor(item, application) {
      super(item, application);
      this._module = item?.module ? item.module : item;
      this._manager = application.moduleManager;
      this._label = this._module.subpath;

      this._check();
    }

    _check() {//TODO: @julio check if it is necessary
    }

    addFavorite(folder) {
      /**
       * The module is the ApplicationModule object the module item
       * is exposed as a property of it.
       */
      const {
        application: {
          favorites
        },
        module
      } = this;
      this._isFavorite = true;
      favorites.add(folder, {
        folder: folder,
        label: module.subpath,
        module: {
          id: module.id,
          name: module.name
        },
        pathname: `${this.item.id}/${this.label}`,
        type: 'module'
      });
    }

    expand = async () => {
      if (this.loaded) return true;
      this.fetching = true;
      const module = await this.manager.load(this.item.id);
      this._model = module;
      this.#loaded = true;

      const onChange = () => {
        this.items.forEach((item, key) => {
          item.update();
        });
      };

      module.bind('change', onChange);
      module.bundles.items.forEach(({
        bundle
      }) => {
        const tree = branchFactory.get('bundle', bundle, this.application, {
          module
        });
        this.items.set(bundle.name, tree);
      });
      this.fetching = false;
      return true;
    };

    open() {}

    registerInlineAction(action) {
      this.inlineActions.push(action);
    }

    rename() {}

    addBundle() {}

  }
  /*************************************
  FILE: tree\branches\types\processor.js
  *************************************/


  class ProcessorBranch extends Branch {
    _icons = new Map([['ts', 'ts'], ['scss', 'scss'], ['start', 'start'], ['default', 'default']]);

    get icons() {
      return this._icons;
    }

    get extensions() {
      return {
        ts: ['ts', 'tsx'],
        js: ['js'],
        jsx: ['jsx'],
        scss: ['scss'],
        sass: ['scss'],
        less: ['less']
      };
    }

    get type() {
      return 'processor';
    }

    get icon() {
      return this.icons.get(this.processor.name);
    }

    get actions() {
      return [{
        name: 'create',
        icon: 'add',
        modal: true
      }];
    }

    get inlineActions() {
      return [{
        name: 'create',
        icon: 'add',
        modal: true
      }];
    }

    get processor() {
      return this._processor;
    }

    _item;

    get item() {
      return this._item;
    }

    get name() {
      return this._item?.name;
    }

    _bundle;

    get bundle() {
      return this._bundle;
    }

    _module;

    get module() {
      return this._module;
    }

    get pathname() {
      return `${this.module?.pathname}/${this.label}`;
    }

    #tree;

    get items() {
      return this.#tree.items;
    }

    constructor(item, application, specs = {}) {
      super(item, application);
      this._bundle = specs.bundle;
      this._item = item;
      this._label = item?.label ?? item.name;
      this._processor = item;
      this._module = specs.module;
      const tree = TreeFactory.get('processor', {
        project: this.project,
        object: item,
        id: item.id,
        items: item.sources?.items,
        module: specs.module,
        bundle: specs.bundle,
        update: specs.update,
        listener: () => {
          tree.setElements(item.sources?.items);
        }
      });
      this.#tree = tree;
    }

    async create(name) {
      const extension = name.split(["."]).slice(-1)[0];

      if (!this.extensions[this.name]?.includes(extension)) {
        throw Error('EXT_INVALID');
      }

      try {
        await this.processor.createFile({
          filename: name
        });
        this.triggerEvent('branch.added');
        return true;
      } catch (e) {
        console.error(e.message);
        return true;
      }
    }

    addFavorite(folder) {
      const {
        favorites
      } = this;
      let {
        processor,
        module,
        bundle
      } = this;
      module = module.module ?? module;
      this.isFavorite = true;
      const label = `${bundle.pathname}/${this.label}`;
      favorites.add(folder, {
        label: label,
        favoriteFolder: folder,
        bundleName: bundle.name,
        processorName: processor.name,
        bundle: {
          id: bundle.id,
          name: bundle.name
        },
        processor: {
          name: processor.name,
          id: processor.id
        },
        module: {
          id: module.id,
          name: module.name
        },
        containerId: module.id,
        pathname: label,
        type: 'processor'
      });
    }

    update(processor) {
      this.#tree.setElements(processor.sources.items);
      this.triggerEvent();
    }

  }
  /*************************************
  FILE: tree\branches\types\resources.js
  *************************************/


  class ResourcesBranch extends ReactiveModel {
    get actions() {
      return [];
    }

    get inlineActions() {
      return [];
    }

    get type() {
      return 'resources';
    }

    _reader;

    get reader() {
      return this._reader;
    }

    _icons = {
      default: 'file.dependency',
      react: 'file.tsx',
      'beyond/core/ts': 'file.beyond'
    };

    get icon() {
      if (['react', 'beyond/core/ts'].includes(this.label)) {
        return this._icons[this.label];
      }

      return this._icons.default;
    }

    _label;

    get label() {
      return this._label;
    }

    _item;

    get item() {
      return this._item;
    }

    get favoriteAction() {
      return false;
    }

    _items = new Map();

    get items() {
      return this._items;
    }

    _application;

    get application() {
      return this._application;
    }

    EXCLUDED = ['@beyond-js/kernel/core'];

    constructor(item, application, specs) {
      super();
      this._specs = specs;
      this._application = application;
      this._item = item;
      this._resourceType = specs.type;
      this._label = specs.type === 'dependencies' ? 'Dependencies' : 'Consumers';
      const tree = TreeFactory.get(specs.type, {
        project: this.application,
        id: item.id,
        object: item,
        items: item.items
      });
      this._items = tree.items;
    }

  }
  /**********************************
  FILE: tree\branches\types\static.js
  **********************************/


  class StaticBranch extends Branch {
    get actions() {
      return [{
        name: 'delete',
        icon: 'delete',
        confirm: true
      }];
    }

    #deleted;

    get deleted() {
      return this.#deleted;
    }

    get extension() {
      return this.item.pathname.split(".").slice(-1)[0];
    }

    get icon() {
      const icon = this.icons.hasOwnProperty(this.extension) ? this.extension : 'image';
      return this.icons[icon];
    }

    get isImage() {}

    get getters() {
      return {
        deleted: this.deleted,
        label: this.label
      };
    }

    get icons() {
      return {
        map: 'map',
        image: 'image',
        css: 'css',
        js: 'js',
        ts: 'ts',
        less: 'less',
        scss: 'scss'
      };
    }

    get type() {
      return 'static';
    }

    _reader;

    get reader() {
      return this._reader;
    }

    async delete() {
      try {
        await this.item.delete();
        this.#deleted = true;
        this.triggerEvent();
      } catch (e) {
        console.error("error", e);
      }
    }

  }
  /***********************************
  FILE: tree\branches\types\subtree.js
  ***********************************/


  class Subtree extends Branch {
    get icon() {
      return 'folder';
    }

    get type() {
      return 'subtree';
    }

    get actions() {
      return [{
        name: 'create',
        icon: 'plus'
      }, {
        name: 'rename',
        icon: 'edit'
      }];
    }

    constructor(branch, application, folder, specs) {
      super(branch, application);
      this._label = folder;
      this._id = `${branch.id}.subtree`;
    }

  }
  /*****************************
  FILE: tree\branches\factory.js
  *****************************/


  const branchFactory = new class {
    _elements = new Map();

    get elements() {
      return this._elements;
    }

    get types() {
      return {
        module: ModuleBranch,
        bundle: BranchBundle,
        source: SourceBranch,
        subtree: Subtree,
        processor: ProcessorBranch,
        favorites: FavoritesBranch,
        static: StaticBranch,
        templateSource: TemplateSourceBranch,
        backendSource: BackendSourceBranch,
        dependency: DependencyBranch,
        consumer: ConsumerBranch,
        resources: ResourcesBranch,
        default: Branch
      };
    }

    create(item) {
      return new Branch(item);
    }
    /**
     *
     * @param type
     * @param item
     * @param application
     * @param specs
     * @returns {*}
     */


    get = (type, item, application, specs = {}) => {
      type = this.types.hasOwnProperty(type) ? type : 'default';

      if (!item?.id) {
        console.warn('invalid item', item);
        return;
      }

      const id = type === 'favorites' ? `${item.id}.favorites` : item.id;
      const instance = this.elements.get(id);
      const isFavoriteInstance = !!(type === 'favorites' && instance?.favoriteProxy);

      if (isFavoriteInstance || instance?.type === type) {
        return instance;
      }

      if (typeof specs === 'object') {
        specs.type = type;
      }

      const element = new this.types[type](item, application, specs);
      this.elements.set(element.id, element);
      return element;
    };
  }();
  /********************
  FILE: tree\factory.js
  ********************/

  _exports.branchFactory = branchFactory;
  const TreeFactory = new class {
    #items = new Map();

    get types() {
      return {
        project: ProjectTreeModel,
        bundle: BundleTree,
        favorites: FavoritesTree,
        module: ModuleTree,
        processor: ProcessorTree,
        static: StaticTree,
        template: TemplateTree,
        dependencies: DependenciesTree,
        consumers: ConsumersTree
      };
    }
    /**
     * @param {string} type Type of tree to create
     * @param {array }specs 0 application, 1object, 2, elements, 3 module
     */


    get(type, specs) {
      if (!this.types.hasOwnProperty(type)) {
        throw new Error(`The tree for ${type} is not defined`);
      }

      const id = specs.id ? `${type}.${specs.id}` : `${type}.${specs.object?.id}`;

      if (this.#items.has(id)) {
        return this.#items.get(id);
      }

      const TreeModel = this.types[type];
      const tree = new TreeModel(type, specs);
      this.#items.set(id, tree);

      tree.__setType(type);

      return tree;
    }

    clear(type, specs) {
      if (!this.types.hasOwnProperty(type)) {
        throw new Error(`The tree for ${type} is not defined`);
      }

      const id = specs.id ? `${type}.${specs.id}` : type;

      if (this.#items.has(id)) {
        this.#items.get(id).delete();
        return this.#items.delete(id);
      }
    }

  }();
  /***********************
  FILE: database\config.js
  ***********************/

  _exports.TreeFactory = TreeFactory;

  function getConfig() {
    const CONFIG = Object.freeze({
      DB: 'beyond.dashboard',
      VERSION: 6
    }); //TODO validar uso de tablas list, records, storages y unpublished

    const tables = {
      favorites: {
        name: 'favorites',
        config: {
          keyPath: 'id',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['name', 'name', {
          unique: true
        }], ['items', 'items', {
          unique: false
        }]]
      },
      workspaces: {
        name: 'workspaces',
        config: {
          keyPath: 'wd'
        },
        indexes: [['wd', 'wd', {
          unique: true
        }], ['lastAccess', 'lastAccess']]
      },
      user: {
        name: 'user',
        config: {
          keyPath: 'id',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['email', 'email', {
          unique: true
        }], ['cover', 'cover']]
      },
      workspace: {
        name: 'workspace',
        config: {
          keyPath: 'wd',
          autoIncrement: true
        },
        indexes: [['id', 'id', {
          unique: true
        }], ['panels', 'panels'], ['config', 'config'], ['wd', 'wd', {
          unique: true
        }]]
      }
    };
    const stores = [];

    for (const store in tables) {
      stores.push(tables[store]);
    }

    return {
      name: CONFIG.DB,
      version: CONFIG.VERSION,
      stores: stores
    };
  }
  /************************
  FILE: database\indexed.js
  ************************/


  function DSDatabase() {
    'use strict';

    let db, initialised;
    const config = getConfig();
    Object.defineProperty(this, 'initialised', {
      get: () => initialised
    });
    Object.defineProperty(this, 'db', {
      get: () => db
    });
    let promise;

    this.initialise = async () => {
      if (initialised || promise) return promise;
      promise = new PendingPromise();
      const {
        BeyondDB
      } = await beyond.import('@beyond-js/dashboard/indexeddb');
      db = await BeyondDB.create(config);
      initialised = true;
      promise.resolve(db);
      promise = undefined;
    };

    this.store = name => db.stores.has(name) ? db.stores.get(name) : false;
  }
  /****************
  FILE: ds-model.js
  ****************/


  class DSModelObject extends ReactiveModel {
    _db;

    get db() {
      return this._db;
    }

    ready() {
      return this.db.initialised;
    }

    #initialising;
    #wd;

    get wd() {
      return this.#wd;
    }

    #lastAccess;

    get lastAccess() {
      return this.#lastAccess;
    }

    constructor() {
      super();
      const database = new DSDatabase();
      database.initialise();
      this._db = database;
    }

    async initialise(wd) {
      if (this.#initialising) return this.#initialising;
      this.#initialising = this.db.initialise();
      await this.#initialising;
      this.#lastAccess = performance.now();
      const data = await DSModel.db.store('workspace').get(wd);
      if (!data) return this.reset(wd);
      return this.db.store('workspaces').save({
        wd,
        lastAccess: this.#lastAccess
      });
    }

    async reset(wd) {
      const specs = {
        wd,
        lastAccess: performance.now(),
        panels: {
          items: new Map()
        },
        opened: new Set()
      };
      await this.db.store('workspace').save(specs);
      return specs;
    }

    store = name => this.db.store(name);
  }

  const DSModel = new DSModelObject();
  /***************
  FILE: factory.js
  ***************/

  _exports.DSModel = DSModel;

  class ProjectsFactory {
    _applications = new Map();

    get applications() {
      return this._applications;
    }

    constructor() {}

    get(id, moduleId, element) {
      if (this.applications.has(id)) return this.applications.get(id);
      const application = new ProjectModel(id, moduleId, element);
      this.applications.set(id, application);
      return application;
    }

  }

  const projectsFactory = new ProjectsFactory();
  /**************************
  FILE: favorites\children.js
  **************************/

  _exports.projectsFactory = projectsFactory;

  class FavoriteChildren extends ReactiveModel {
    _bundle;

    get bundle() {
      return this._bundle;
    }

    _processor;

    get processor() {
      return this._processor;
    }

    _module;

    get module() {
      return this._module;
    }

    _type;

    get type() {
      return this._type;
    }

    _item;

    get item() {
      return this._item;
    }

    _name;

    get name() {
      return this._name;
    }

    _id;

    get id() {
      return this._id;
    }

    _pathname;

    get pathname() {
      return this._pathname;
    }

    _label;

    get label() {
      return this._label;
    }

    constructor(type, item) {
      super();
      const {
        bundle,
        label,
        pathname,
        module,
        processor,
        source
      } = item;
      this._type = type;
      this._processor = processor;
      this._bundle = bundle;
      this._module = module;
      this._source = source;
      this._pathname = pathname;
      this._label = label;
      this._item = ['processor', 'module', 'bundle'].includes(type) ? this[type] : source;
      this._id = this.item.id;
      this._name = this.getName();
    }

    getName() {
      if (this.type === 'module') return this.item.pathname;
      return this.source ? `${module.name}${source.relative.dirname ? `${source.relative.dirname}/` : ''}/${source.relative.file}` : this.item.name;
    }

  }
  /*************************
  FILE: favorites\factory.js
  *************************/

  /**
   * Beyond manages favorites by application
   *
   * The Factory objects generates a new Factory Model for each application instanced
   */


  _exports.FavoriteChildren = FavoriteChildren;

  class Factory extends ReactiveModel {
    _items = new Map();

    get items() {
      return this._items;
    }

    get(id, project) {
      if (this.items.has(id)) return this.items.get(id);

      if (typeof id !== 'number') {
        console.trace(`The id specified is not valid:${id}`);
        return;
      }

      const item = new FavoritesModel(project);
      this.items.set(id, item);
      return item;
    }

  }

  ;
  const FavoritesFactory = new Factory();
  /***************************
  FILE: favorites\list-base.js
  ***************************/

  _exports.FavoritesFactory = FavoritesFactory;

  class FavoritesListBase extends ReactiveModel {
    _name;

    get name() {
      return this._name;
    }

    _id;

    get id() {
      return this._id;
    }

    _type;

    get type() {
      return this._type;
    }

    _items = [];

    get items() {
      return this._items;
    }

    _pathname;

    get pathname() {
      return this._pathname;
    }

    _path;

    get path() {
      return this._path;
    }

    _container;

    get container() {
      return this._container;
    }
    /**
     * Manager of the application modules.
     *
     * @private
     */


    _moduleManager;

    get moduleManager() {
      return this._moduleManager;
    }

    _parent;

    get parent() {
      return this._parent;
    }

    get length() {
      return this.items?.length ?? 0;
    }

    _bundleName;

    get bundleName() {
      return this._bundleName;
    }

    _processorName;

    get processorName() {
      return this._processorName;
    }

    _folder;

    get folder() {
      return this._folder;
    }

    _item;

    get item() {
      return this._item;
    }

    _tree;

    get tree() {
      return this._tree;
    }

    get store() {
      return this._store;
    }

    _processor;

    get processor() {
      return this._processor;
    }

    _bundle;

    get bundle() {
      return this._bundle;
    }

    _module;

    get module() {
      return this._module;
    }

    _application;

    get application() {
      return this._application;
    }

    _storedTree = new Map();
    _ready;

    get ready() {
      return this._ready;
    }

    _types = new Set();

    get types() {
      return this._types;
    }

    _idsByType = new Map();

    get idsByType() {
      return this._idsByType;
    }

  }
  /**********************
  FILE: favorites\list.js
  **********************/

  /**
   * Represents a Tree list on favorites tab.
   */


  class FavoritesList extends FavoritesListBase {
    /**
     *
     * @param parent {FavoritesManager}
     * @param moduleManager {ModuleModel}
     * @param name {string} Name of the favorites item.
     * @param id {string} Identifier
     * @param tree
     */
    constructor(parent, moduleManager, {
      name,
      id,
      tree
    }) {
      super();
      this._parent = parent;
      this._moduleManager = moduleManager;
      this._name = name;
      this._application = parent.application;
      this._id = id;
      this._now = performance.now();
      this._store = DSModel.db.store('favorites');
      this.rename = this.rename.bind(this);
      if (tree) this._loadItems(tree);
    }

    async _loadItems(tree) {
      const promises = [];
      this._storedTree = tree;
      tree.forEach(item => promises.push(this.add(item, true)));
      if (!promises.length) this._createTree();
      await Promise.all(promises);

      this._createTree();
    }

    _createTree = () => {
      const {
        application,
        items
      } = this;
      this._tree = TreeFactory.get('favorites', {
        project: application,
        object: this,
        items,
        id: this.id
      });
      this._ready = true;
      this.triggerEvent('favorites.loaded');
      this.triggerEvent();
    };
    /**
     * Loads the ModuleModel by id passed
     * @param moduleId
     * @returns {Promise<ModuleModel>}
     * @private
     */

    async _loadModule(moduleId) {
      const module = await this._moduleManager.load(moduleId);
      this._container = module;
      return module;
    }
    /**
     * Registers the itemId
     * The idsByType is used externally to check if an element is saved as a favorite and can mark it on the ui
     *
     * @param type
     * @param id
     */


    registerId(type, id) {
      if (!this._idsByType.has(type)) this._idsByType.set(type, new Set());

      const item = this._idsByType.get(type);

      this._idsByType.set(type, item.add(id));
    }
    /**
     * Instances a new FavoriteChildren object and returns it.
     *
     * Register the children's type, add the item in the items array and calls the registerId method
     * @param type
     * @param specs
     * @returns {*}
     */


    getChildren(type, item) {
      this.types.add(type);
      const element = new FavoriteChildren(type, item);
      this.items.push(element);
      this.registerId(type, element.item.id); //TODO: @julio check if is required triggerEvent

      this.triggerEvent();
      return element;
    }

    async loadTemplate() {
      const promise = new PendingPromise();
      let {
        application: {
          template
        }
      } = this.application;

      const onChange = () => {
        if (!template || !template?.tree?.landed) return promise;
        promise.resolve();
      };

      this.application.bind('change', onChange);
      onChange();
      return promise;
    }

    async _loadTemplateItem(item) {
      let {
        application: {
          id: applicationId,
          template
        }
      } = this.application;
      await this.loadTemplate();

      if (item.type === 'processor') {
        return;
      }

      let collection = template.application;

      if (item.source?.type === 'processor') {
        const name = `${applicationId}//${item.source.processor}`;
        collection = template.processors.get(name);
      }

      const finder = i => {
        return item.source.dirname === i.dirname && i.filename === item.source.filename;
      };

      const source = collection.sources.items.find(finder);

      if (!source) {
        console.warn("the template file does not exists", item);
        return;
      }

      const backup = Object.assign({}, item, source);
      item.source = source;
      Object.keys(item).forEach(prop => this._set(prop, item[prop]));
      return this.getChildren('template', item);
    }
    /**
     * Load the favorite item
     *
     * Checks the properties of the element passed and loads the necessary objects
     * to instance the item correctly and returns a FavoriteChildren instance.
     * @param item
     * @returns {Promise<FavoriteItem>}
     * TODO: CHECK
     */


    async loadItem(item) {
      //source
      const {
        type
      } = item;
      const itemToLoad = Object.assign({}, item);
      /**
       * Originally the _loadTemplateItem was saving the item by itself
       * but this logic causes error, the next save call was after the 150 line.
       *  Was moved to here and was removed the save call into the _loadTemplateItem
       *  @todo: julio check.
       */

      this.save(item);
      if (type === 'template') return this._loadTemplateItem(itemToLoad);

      try {
        const module = await this._loadModule(item.module.id);
        /**
         * TODO: @julio check it.
         * @type {*}
         */

        itemToLoad.module = module.am;
        if (type === 'module') return this.getChildren(type, itemToLoad);
        const bundle = module.bundles.items.get(item.bundle.name);
        itemToLoad.bundle = bundle;

        if (type !== 'bundle') {
          const processor = bundle.processors.get(item.processor.name);
          itemToLoad.processor = processor;
          itemToLoad.source = type === 'source' && processor.sources.items.find(s => s.id === item.source.id);
        }

        return this.getChildren(type, itemToLoad);
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * Add a new children item
     * @param newItem
     * @param loading Is only passed when the favorites are loading from indexedDB
     * @returns {Promise<void>}
     */


    async add(newItem, loading = false) {
      const item = await this.loadItem(newItem);
      if (loading) return;

      if (!this.tree) {
        this._createTree();

        this.triggerEvent();
        return;
      }

      this.tree.update([item]);
      this.triggerEvent();
    }
    /**
     * Saves the element passed in indexedDB
     * @param item
     * @returns {Promise<void>}
     */


    async save(item) {
      if (item) this._storedTree.set(item.pathname, item);
      this.store.save({
        id: this.id,
        name: this.name,
        tree: this._storedTree
      });
      this.triggerEvent();
    }

    delete() {
      this.parent.remove(this.id);
    }

    rename(value) {
      this._name = value;
      this.save();
      this.triggerEvent('favorite.renamed');
    }

    removeItem(pathname) {
      if (!this._storedTree.has(pathname)) return;

      this._storedTree.delete(pathname);

      this.save();
      this.parent.triggerEvent();
    }

  }
  /***********************
  FILE: favorites\model.js
  ***********************/


  class FavoritesModel extends ReactiveModel {
    _tree;

    get tree() {
      return this._tree;
    }

    _items = new Map();

    get items() {
      return this._items;
    }

    #projectModel;

    get projectModel() {
      return this.#projectModel;
    }

    _moduleManager;

    get moduleManager() {
      return this._moduleManager;
    }

    get total() {
      return this.items.size;
    }

    _ready;

    get ready() {
      return this._ready;
    }

    _promise;

    constructor(projectModel) {
      super();
      this.#projectModel = projectModel;
      this._moduleManager = projectModel.moduleManager;

      this.onRename = () => this.triggerEvent('favorite.renamed');

      this._check();
    }
    /**
     * Realizes the query to IndexedDb and generates the Favorites List instances
     * @returns {Promise<void>}
     * @private
     */


    async _check() {
      this._promise = new PendingPromise();
      await DSModel.initialise();
      const favorites = await DSModel.db.store('favorites');
      this._db = favorites;
      const items = await favorites.getAll();
      items.forEach(item => {
        /**
         * item.tree property is the data saved in indexedDB
         * TODO: @julio check the name
         * @type {FavoritesList}
         */
        if (this.items.has(item.id)) return this.items.get(item.id);
        const specs = {
          name: item.name,
          id: item.id,
          tree: item.tree
        };
        const instance = new FavoritesList(this, this._moduleManager, specs);

        const onLoad = () => {
          this.triggerEvent('loaded');
          this.items.set(instance.id, instance);
          instance.unbind('favorites.loaded', onLoad);
        };

        instance.bind('favorites.loaded', onLoad);
        instance.bind('favorite.renamed', this.onRename);
        this.items.set(instance.id, instance);
        return instance;
      });
      this.triggerEvent();
      this._ready = true;
    }

    add = async (name, specs) => {
      try {
        const identifier = name.replace(/ /g, '-').toLowerCase();
        const favorite = this.items.has(name) ? this.items.get(name) : new FavoritesList(this, this._moduleManager, {
          name: name,
          id: identifier
        });
        await favorite.add(specs);
        this.items.set(favorite.id, favorite);
        favorite.bind('favorite.renamed', this.onRename);
        this.triggerEvent();
      } catch (e) {
        console.error(103, e);
      }
    };

    async remove(id) {
      if (!this.items.has(id)) return;
      this.items.delete(id);

      this._db.delete(id);

      this.triggerEvent();
    }

    isFavorite = pathname => {
      return !![...this.items.values()].find(item => item.items.find(item => item.pathname === pathname));
    };
  }
  /***************************************
  FILE: module\bundles\bundle\consumers.js
  ***************************************/


  _exports.FavoritesModel = FavoritesModel;

  class ConsumersManager extends ReactiveModel {
    #ready;

    get ready() {
      return this.#ready;
    }

    #model;

    get model() {
      return this.#model;
    }

    #entries = new Map();

    get entries() {
      return this.#entries;
    }

    #items = [];

    get items() {
      return Array.from(this.#entries.values());
    }

    #applicationManager;
    #modules = new Map();

    get modules() {
      return this.#modules;
    }

    #bundle;

    get bundle() {
      return this.#bundle;
    }

    get fetching() {
      return this.#model.fetching;
    }

    constructor(bundle, application, tree, specs = {
      load: false
    }) {
      super();
      this.#applicationManager = application;
      this.#bundle = bundle;
      if (specs.load) this.load();
      this.#model = new Consumers({
        tree: {
          properties: {
            bundle: true
          }
        },
        filter: [{
          field: 'bundle',
          operand: 0,
          value: this.bundle.id
        }]
      });
      this.#model.bind('change', this.#check);
      window.c = this.#model;
    }

    async load() {
      const promise = new PendingPromise();

      const onReady = () => {
        if (!this.#ready) return;
        this.#model.unbind('change', onReady);
        promise.resolve(true);
      };

      this.#model.bind('change', onReady);
      this.#model.fetch();
      this.triggerEvent();
      return promise;
    }

    #check = () => {
      const {
        tree,
        items
      } = this.#model;
      if (!tree.landed) return;
      const {
        moduleManager
      } = this.#applicationManager;
      if (items.length !== this.#entries.size) this.#entries = new Map();
      items.forEach(item => {
        const module = this.#applicationManager.moduleManager.getItem(item.moduleId);
        if (!module || this.#entries.has(item.bundle.id)) return;
        this.#entries.set(item.bundle.id, {
          id: item.bundle.id,
          bundle: item.bundle,
          name: `${module.name}/${item.bundle?.name}`,
          consumer: item,
          module: module
        });
      });
      this.#ready = true; //TODO: @julio check events

      this.triggerEvent('consumers.loaded');
      this.triggerEvent();
    };

    setItem(bundleId, module) {
      const item = this.#entries.get(bundleId);
      item.module = module;
      item.loaded = true;
      this.#entries.set(bundleId, item);
      this.triggerEvent();
    }

  }
  /******************************************
  FILE: module\bundles\bundle\dependencies.js
  ******************************************/


  class DependenciesManager extends ReactiveModel {
    #ready = false;

    get ready() {
      return this.#ready;
    }

    #model;

    get model() {
      return this.#model;
    }

    #entries = new Map();

    get entries() {
      return this.#entries;
    }

    get items() {
      return Array.from(this.#entries.values());
    }

    #bundle;

    get bundle() {
      return this.#bundle;
    }

    #tree;
    #applicationManager;
    #processorId;

    get fetching() {
      return this.#model.fetching;
    }

    constructor(bundle, application, tree, specs = {
      load: false
    }) {
      super();
      this.#bundle = bundle;
      this.#applicationManager = application;
      this.#tree = tree;
      this.#processorId = bundle.processors.get('ts').id;
      this.#model = new ProcessorDependencies({
        tree: {
          properties: {
            bundle: true,
            declaration: true
          }
        },
        filter: [{
          field: 'processor',
          operand: 0,
          value: this.#processorId
        }]
      });
      window.d = this.#model;
    }

    async load() {
      const promise = new PendingPromise();

      const onReady = () => {
        this.#model.unbind('dependencies.ready', onReady);
        promise.resolve(true);
        this.triggerEvent();
      };

      this.bind('dependencies.ready', onReady);
      this.#model.bind('change', this.#check);
      this.#model.fetch();
      return promise;
    }

    #check = () => {
      const {
        items,
        tree
      } = this.model;
      if (!tree.landed) return;
      if (items.length !== this.#entries.size) this.#entries = new Map();
      items.forEach(item => {
        const module = this.#applicationManager.moduleManager.getItem(item.moduleId);

        if (item.kind === 'external') {
          this.#entries.set(item.id, {
            id: item.id,
            name: item.resource,
            dependency: item
          });
          return;
        }

        if (!module && item.kind !== 'bundle') {
          console.log("invalid item", item);
          return false;
        }

        this.#entries.set(item.id, {
          id: item.id,
          bundle: item.bundle,
          dependency: item,
          module
        });
      });
      this.#ready = true; //TODO: @julio check events

      this.triggerEvent('dependencies.ready');
      this.triggerEvent();
    };
    check = () => this.#check();

    setItem(bundleId, module) {
      const item = this.#entries.get(bundleId);
      item.module = module;
      item.loaded = true;
      this.#entries.set(bundleId, item);
      this.triggerEvent();
    }

  }
  /***********************************
  FILE: module\bundles\bundle\index.js
  ***********************************/


  class BundleManager extends ReactiveModel {
    #bundle;

    get bundle() {
      return this.#bundle;
    }

    #consumers;

    get consumers() {
      return this.#consumers;
    }

    #dependencies;

    get dependencies() {
      return this.#dependencies;
    }

    get errors() {
      return this.#bundle.errors;
    }

    get id() {
      return this.#bundle.id;
    }

    get fetching() {
      return this.#dependencies?.fetching || this.#consumers?.fetching;
    }

    HAS_DEPENDENCIES = ['ts'];

    get name() {
      return this.#bundle.name;
    }

    #tree = new Map();

    get tree() {
      return this.#tree;
    }

    #packagers = new Map();

    get packagers() {
      return this.#packagers;
    }
    /**
     * Represents the model of the current project
     * @private
     */


    #project;

    get project() {
      return this.#project;
    }

    #processors = new Map();

    get processors() {
      return this.#processors;
    }

    get warnings() {
      return this.#bundle.warnings;
    }

    #txt;

    get processed() {
      if (!this.bundle.processors.has('ts')) return true;
      return this.#consumers.ready && this.#dependencies.ready;
    }

    get totalFiles() {
      let total = 0;
      if (!this.#bundle.tree.landed) return total;
      this.#bundle.processors.forEach(processor => {
        total += processor.sources.items.length;
      });
      return total;
    }
    /**
     *
     * @param {ApplicationModel} project
     * @param tree {TreeFactory} Tree of module's bundles.
     * @param bundle
     * @param txt
     */


    constructor(project, tree, bundle, txt) {
      super();
      this.#bundle = bundle;
      this.#tree = tree;
      this.#txt = txt;
      this.#project = project;
      this.#packagers = new Packagers(this.#bundle);

      if (bundle.processors.has('ts')) {
        this.#dependencies = new DependenciesManager(bundle, project, tree);
        this.dependencies.bind('change', this.triggerEvent);
      }

      this.#consumers = new ConsumersManager(bundle, project, tree);
      this.consumers.bind('change', this.triggerEvent);
      if (txt) this.#processors.set('txt', txt.processors.get('txt'));
      this.bundle.processors.forEach(processor => this.#processors.set(processor.name, processor));
    }

    getFile(file, processorName) {
      file = file.replace(/\//g, '\\');

      if (!this.bundle.processors.has(processorName)) {
        return;
      }

      const processor = this.bundle.processors.get(processorName);
      return processor.sources.items.find(i => i.file === file);
    }

  }
  /***************************************
  FILE: module\bundles\bundle\packagers.js
  ***************************************/


  _exports.BundleManager = BundleManager;

  class Packagers extends ReactiveModel {
    #bundle;
    #items = new Map();

    get items() {
      return this.#items;
    }

    #active;

    get active() {
      return this.#active;
    }

    constructor(bundle) {
      super();
      this.#bundle = bundle;
    }

    load = async cspec => {
      const promise = new PendingPromise();
      const id = `${this.#bundle.id}///${cspec.id}`;
      const specs = {
        identifier: {
          id
        },
        tree: {
          properties: {
            compilers: true
          }
        }
      };

      if (this.#items.has(id)) {
        promise.resolve(this.#items.get(id));
        return;
      }

      const item = new Packager(specs);

      const onLoad = () => {
        if (!item.tree.landed) return;
        item.unbind('change', onLoad);
        this.#active = item;
        this.#items.set(id, item);
        promise.resolve(item);
      };

      this.#items.set(id, promise);
      item.bind('change', onLoad);
      item.fetch();
      return promise;
    };
  }
  /****************************
  FILE: module\bundles\index.js
  ****************************/


  _exports.Packagers = Packagers;

  class BundlesManager extends ReactiveModel {
    #project;

    get project() {
      return this.#project;
    }

    #bundles;

    get bundles() {
      return this.#bundles;
    }

    get fetching() {
      let fetching = false;
      this.items.forEach(bundle => {
        if (bundle.fetching) fetching = true;
      });
      return fetching;
    }

    #processing;

    get processing() {
      return this.#processing;
    }

    #items = new Map();

    get items() {
      return this.#items;
    }

    get consumers() {
      let consumers = [];
      const set = new Set();
      this.items.forEach(bundle => {
        const {
          items
        } = bundle.consumers;
        items.forEach(item => {
          if (set.has(item.id)) return;
          consumers.push(item);
          set.add(item.id);
        });
      });
      return consumers;
    }

    get dependencies() {
      let dependencies = [];
      const set = new Set();
      this.items.forEach(bundle => {
        if (!bundle.dependencies) return;
        const {
          items
        } = bundle.dependencies;
        items.forEach(item => {
          if (set.has(item.id)) return;
          set.add(item.id);
          dependencies.push(item);
        });
      });
      return dependencies;
    }

    #txt;
    #module;

    get module() {
      return this.#module;
    }

    get id() {
      return `${this.#module.id}////bundles-manager`;
    }

    #itemsProcessed = new Set();
    #processed = false;

    get processed() {
      return this.#processed;
    }

    #tree;

    get tree() {
      return this.#tree;
    }

    #am;

    get errors() {
      let errors = [];
      [...this.items.values()].forEach(item => {
        errors = errors.concat(item.errors);
      });
      return errors;
    }

    get alerts() {
      return this.errors.length + this.warnings.length;
    }

    get warnings() {
      let warnings = [];
      [...this.items.values()].forEach(item => warnings = warnings.concat(item.warnings));
      return warnings;
    }

    constructor(module) {
      super();
      this.#module = module;
      this.#am = module.am;
      const txt = module.am.getBundle('txt');
      this.#project = module.project;
      this.#bundles = module.am.bundles;
      this.#txt = txt;
      this.#process();
      this.createTree();
    }

    createTree() {
      const items = [...this.#items.values()];
      this.#tree = TreeFactory.get('module', {
        project: this.#project,
        object: this.module.am,
        items: items,
        listener: async () => {
          const {
            am,
            am: {
              bundles
            }
          } = this.#module;
          this.#process();
          const items = [...this.#items.values()];
          if (!this.#am.tree.landed) return;
          this.#tree.setElements(items);
        }
      });
    }

    check() {
      this.items.forEach(bundle => bundle.dependencies.check());
    }

    #process() {
      this.#am.bundles.forEach(bundle => {
        if (bundle.name === 'txt' || this.#items.has(bundle.name)) return;
        const bundleManager = new BundleManager(this.#project, this.#tree, bundle, this.#txt);

        const onProcess = () => {
          this.#itemsProcessed.add(bundleManager.id);

          if (!bundleManager.processed) {
            return;
          }

          if (this.items.size === this.#itemsProcessed.size) {
            this.triggerEvent('bundles.processed');
            this.triggerEvent('change');
            bundleManager.unbind('change', onProcess);
          }
        };

        bundleManager.bind('change', onProcess);
        bundleManager.bind('change', this.triggerEvent);
        this.items.set(bundle.id, bundleManager);
        if (bundleManager.processed) onProcess();
      });
    }
    /**
     * loads a consumer or dependency module
     *
     * @param type
     * @param moduleId
     * @param bundleId
     * @returns {Promise<void>}
     */


    async load(type, moduleId, bundleId) {
      const module = await this.#project.moduleManager.load(moduleId);
      if (!['consumers', 'dependencies'].includes(type)) throw new Error(`the property ${type} required to load does not exists`);
      this.items.forEach(item => {
        const object = item[type];
        if (!object.entries.has(bundleId)) return;
        object.setItem(bundleId, module);
        this.triggerEvent(`${module.am.id}.change`);
        this.triggerEvent();
      });
    }

    loadConsumers = async () => {
      const items = [...this.items.values()];
      this.#processing = true;
      this.triggerEvent();
      await Promise.all(items.map(item => {
        item.consumers.load();
      }));
      this.#processing = true;
      this.triggerEvent();
    };
    loadDependencies = async () => {
      const items = [...this.items.values()].filter(item => {
        return !!item.dependencies;
      });
      this.#processing = true;
      this.triggerEvent();
      const promises = items.map(item => item.dependencies.load());
      await Promise.all(promises);
      this.#processing = true;
      this.triggerEvent();
    };
    loadPackagers = async cspec => {
      try {
        const {
          distributions
        } = this.#project.application.deployment;
        const promise = new PendingPromise();
        const distribution = distributions.get(cspec);

        if (!distribution) {
          console.error('distribution not found');
        }

        const promises = [];
        this.items.forEach(bundle => {
          promises.push(bundle.packagers.load(distribution));
        });
        await Promise.all(promises);
        promise.resolve(true);
      } catch (e) {
        console.trace(e);
      }
    };
  }
  /*****************************************
  FILE: module\bundles\processors\manager.js
  *****************************************/


  class ProcessorManager extends ReactiveModel {
    constructor() {
      super();
    }

  }
  /********************
  FILE: module\index.js
  ********************/

  /**
   /**
   * Represents the model-ui of the module
   */


  class ModuleModel extends ReactiveModel {
    #tree = {
      properties: {
        module: {
          properties: {
            static: true
          }
        },
        bundles: {
          properties: {
            processors: {
              properties: {
                sources: true,
                overwrites: true
              }
            }
          }
        }
      }
    };
    #cspec;

    get cspec() {
      return this.#cspec;
    }

    set cspec(value) {
      if (value === this.#cspec) return;
      this.#cspec = value;
      this.triggerEvent();
    }
    /**
     * @deprecated use project istead
     * @returns {any}
     */


    get applicationModel() {
      return this.#project;
    }

    #project;

    get project() {
      return this.#project;
    }

    get application() {
      return this.#project.application;
    }

    get applicationId() {
      return this.am?.container?.id;
    }

    #sources = new Map();

    get sources() {
      return this.#sources;
    }

    get processed() {
      let processed = true;
      this.bundles.forEach(item => {
        if (!item.processed) processed = false;
      });
      return processed;
    }

    get bundles() {
      return this.#bundlesManager;
    }
    /**
     * @property {BundlesManager} bundlesManager
     */


    #bundlesManager;

    get bundlesManager() {
      return this.#bundlesManager;
    }

    get id() {
      return this.am?.id;
    }
    /**
     * Returns the module's name.
     *
     * If the module does not have name returns the identifier without
     * the application id section.
     * @returns {string}
     */


    get name() {
      let name = this.am?.id?.replace(`application//${this.application.id}//`, '');
      return this.am?.name ?? name;
    }

    #bundlesTree;

    get bundlesTree() {
      return this.#bundlesManager.tree;
    }
    /**
     * @private {ApplicationModule}
     */


    #am;

    get am() {
      return this.#am;
    }
    /**
     * @deprecated use am property instead
     * @returns {*}
     */


    get module() {
      return this.#am;
    }

    #ready;

    get ready() {
      return this.am.tree.landed && this.#ready;
    }

    #updating;

    get updating() {
      return this.#updating;
    }

    #_static;

    get static() {
      return this.#_static;
    }

    #errors = [];

    get errors() {
      return this.#am.module?.errors ?? [];
    }

    #warnings = [];

    get warnings() {
      return this.#am.module?.warnings ?? [];
    }

    #found;

    get found() {
      return this.#am?.found;
    }

    get alerts() {
      const total = this.errors.length + this.warnings.length;
      return {
        total: total
      };
    }

    get totalFiles() {
      let total = 0;
      this.bundles.items.forEach(bundle => total += bundle.totalFiles);
      return total;
    }

    #moduleManager;

    constructor(moduleId, project, moduleManager) {
      super();
      this.#moduleManager = moduleManager;
      this.#project = project;
      this.load(moduleId);
    }
    /**
     * Loads a Module
     *
     * @param moduleId
     * @param concat if is true the moduleId will be concatenated with the application string id.
     */


    load(moduleId, concat = false) {
      if (this.#am) {
        this.#am.off('change', this.triggerEvent);
        this.#am = undefined;
      }

      moduleId = concat ? `${this.#project.id}//${moduleId}` : moduleId; //Instanciar TemplateApplicationsSource

      this.#am = new ApplicationModule({
        identifier: {
          id: moduleId
        },
        tree: this.#tree
      });
      this.#am.on('change', this.checkLoaded);
      this.fetch();
    }
    /**
     * Validates if the module is fully loaded
     *
     * Processes all the properties of the module to leave prepared the structure to be consumed.
     */


    checkLoaded = () => {
      if (!this.am.found) {
        this.#ready = true;
        this.#found = false;
        this.triggerEvent('model.loaded');
      }

      if (!this.am.tree.landed) return;
      this.am.off('change', this.checkLoaded); // load bundles by name;

      this.checkModule();
      this.triggerEvent();
      this.loadStatic();
      this.am.bundles.forEach(bundle => {
        bundle.processors.forEach(item => {
          item.sources.items.forEach(source => this.#sources.set(source.id, source));
        });
      });
      this.am.on('change', this.triggerEvent);
      this.#ready = true;
      this.triggerEvent('model.loaded');
    };
    /**
     * Validates the module and generates de bundleManager instances
     *
     * Also check if the module has a text bundle and adds its txt processor
     * as a processor of the each bundle.
     */

    checkModule() {
      this.#bundlesManager = new BundlesManager(this);
      this.#bundlesManager.bind('change', this.triggerEvent);

      const onProcessed = () => {
        this.#moduleManager.setProcessed(this.id);
        this.#bundlesManager.unbind('bundles.processed', onProcessed);
      };

      if (this.#bundlesManager.processed) onProcessed();
      this.#bundlesManager.bind('bundles.processed', onProcessed);
    }

    loadStatic() {
      if (!this.am.module?.static) return;
      this.#_static = TreeFactory.get('static', {
        project: this.project,
        object: this.am,
        items: this.am.module.static.items,
        listener: () => {
          const {
            am,
            am: {
              module
            }
          } = this;
          if (!am.tree.landed) return;
          this.#_static.setElements(module.static.items);
        }
      });
    }

    getFile(bundleName, processorContainer, fileName) {
      bundleName = processorContainer === 'txt' ? 'txt' : bundleName;
      const bundle = this.am.getBundle(bundleName);
      const processor = bundle.processors.get(processorContainer);
      let file;
      processor.files.items.forEach(item => {
        const name = item.relative.file.replace(/\\/g, '/').split(['/']).pop();
        if (name === fileName) file = item;
      });

      if (!file) {
        console.warn(`the file ${file} was not found`);
      }

      return file;
    }
    /**
     * TODO: @julio
     */


    async deleteFile(params) {
      const bundle = this.#am.getBundle(this._bundleId);
      await file.delete({
        target: params.name
      });
    }

    async fetch() {
      const promise = new PendingPromise();
      const {
        module
      } = this;
      module.fetch({
        container: true,
        bundles: {
          processors: true
        }
      });
      return promise;
    }
    /**
     * TODO: @julio
     * @param params
     * @returns {Promise<void>}
     */


    async createFile(params) {
      await this.#am.createFile(params);
    }

  }
  /**********************
  FILE: module\manager.js
  **********************/

  /**
   * Manages the modules instances and interfaces between them and editors instances
   */


  _exports.ModuleModel = ModuleModel;
  window.models = [];

  class ModuleManager extends ReactiveModel {
    #application;

    get application() {
      return this.#application;
    }

    #editorManager;
    /**
     * Return the active module
     * @private
     */

    #active;

    get active() {
      return this.#active;
    }
    /**
     * Returns the total of modules
     */


    get total() {
      !this.#application.am && console.warn('Application not load AM', this.#application);
      return this.#application.am ? this.#application.am?.items.length : 0;
    }

    #processed = new Set();

    get processed() {
      return this.#processed.size;
    }

    #models = new Map();

    get models() {
      return this.#models;
    }

    #promises = new Map();

    get promises() {
      return this.#promises;
    }

    setProcessed(id) {
      this.#processed.add(id);
      this.triggerEvent();
    }

    get ready() {}
    /**
     *
     * @param application {ApplicationModel}
     * @param application.application {Application} PLM Item of application.
     * * @param moduleId if is passed then the Module manager will load it.
     */


    constructor(application, moduleId) {
      super();
      this.#application = application;
      window.moduleManager = this;
      this.#editorManager = getEditorManager(application.application);
      const saved = localStorage.getItem('dashboard.module.active');
      if (!moduleId && saved) moduleId = saved;

      if (![undefined].includes(moduleId)) {
        this.setActive(moduleId);
      }
    }
    /**
     * Obtains the module required and set as active in the workspace
     * @param id
     * @returns {Promise<{ModuleModel}>} Return the model of the module loaded.
     */


    async setActive(id) {
      try {
        this.#active = await this.load(id);
        window.module = this.#active;
        localStorage.setItem('dashboard.module.active', id);
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * Loads the module required and returns its instance
     *
     * @param moduleId
     * @returns {Promise<ModuleManager>}
     */


    async load(moduleId) {
      try {
        return this.getInstance(moduleId);
      } catch (e) {
        console.error(104.6, "error", e);
      }
    }
    /**
     * Instances the ModelModule object
     *
     * Waits to validate if the module is fully loaded, then returns it.
     * @param id
     * @returns {V|*}
     * @private
     */


    getInstance(id) {
      if (!id) return;
      if (this.promises.has(id)) return this.promises.get(id);
      const promise = new PendingPromise();
      this.#promises.set(id, promise);

      if (this.models.has(id)) {
        this.promises.delete(id);
        promise.resolve(this.models.get(id));
        return promise;
      }

      const model = new ModuleModel(id, this.application, this);
      if (model.ready) return promise.resolve(model);

      const response = () => {
        if (!model.ready) return;
        model.unbind('model.loaded', response);
        this.models.set(model.id, model);
        promise.resolve(model);
        this.triggerEvent('model.loaded');
        this.promises.delete(id);
      };

      model.bind('model.loaded', response);
      response();
      return promise;
    }
    /**
     * Loads the ModuleModel's Model
     *
     * This method sets the module passed as active. If is only required
     * to load the tree, then use loadModuleTree instead
     * @param id
     * @deprecated
     * @returns {{}}
     */


    async loadModule(id) {
      return this.setActive(id);
    }

    loadAll = async () => {
      const promises = [];
      this.#application.am.items.forEach(item => promises.push(this.getInstance(item.id)));

      try {
        const items = await Promise.all(promises); // DSNotifications.addModules(items);
      } catch (exc) {
        console.error(exc);
      }
    };
    /**
     * Is used only to get a moduleItem without load it as a module-model object.
     * @param itemId
     * @returns {*}
     */

    getItem = itemId => this.#application.am?.items.find(item => item.id === itemId);
  }
  /*****************************
  FILE: project\distributions.js
  *****************************/
  // class Ports extends ReactiveModel {
  //     get http() {
  //         return this.#http;
  //     }
  //
  //     #bundles;
  //     get bundles() {
  //         return this.#bundles;
  //     }
  //
  //     #inspect;
  //     get inspect() {
  //         return this.#inspect;
  //     }
  // }
  //
  // export class Distributions extends ReactiveModel {
  //
  //     #name;
  //     get name() {
  //         return this.#name;
  //     }
  //
  //     #environment
  //     get environment() {
  //         return this.#environment;
  //     }
  //
  //     #backend;
  //     #ssr;
  //     #platform;
  //     #ports = {http: 0, bundles: 0, inspect: 0}
  // }
  //

  /***********************
  FILE: project\project.js
  ***********************/


  _exports.ModuleManager = ModuleManager;

  class ProjectModel extends ReactiveModel {
    #bundles = ['layout', 'page', 'code', 'widget', 'all'];

    get bundles() {
      return this.#bundles;
    }
    /**
     * Returns the compound id of the application
     *
     * This id is used to destructure the module id
     * @returns {string}
     */


    get id() {
      return `application//${this.application.id}//`;
    }

    #templateManager;

    get templateManager() {
      return this.#templateManager;
    }

    get name() {
      return this.application.name;
    }

    get containers() {
      const items = ['all', 'application'];
      this.application.libraries?.items?.forEach(item => items.push(item.library.name));
      return items;
    }

    #filterContainer = 'application';

    get filterContainer() {
      return this.#filterContainer;
    }

    get specifier() {
      let specifier = this.#application.specifier ?? this.#application.name;
      specifier = ['undefined'].includes(specifier) ? undefined : specifier;
      return specifier;
    }

    set filterContainer(value) {
      if (value === this.#filterContainer) return;
      this.#filterContainer = value;
      this.triggerEvent();
    }

    _filterBundle = 'all';

    get filterBundle() {
      return this._filterBundle;
    }

    set filterBundle(value) {
      if (value === this._filterBundle) return;
      this._filterBundle = value;
      this.triggerEvent();
    }

    _filterText = '';

    get filterText() {
      return this._filterText;
    }

    set filterText(value) {
      if (value === this._filterText) return;
      this._filterText = value;
      this.triggerEvent('items.filtered');
    }
    /**
     * Return the items of the application checking if it's necessary apply a filter.
     * @returns {*}
     */


    get items() {
      if (this.filterBundle || this.filterText || this.filterContainer) {
        return this._filterItems();
      }

      return this.modules.elements;
    }

    get modules() {
      return this.application.am;
    }

    get am() {
      return this.application.am;
    }

    get deployment() {
      return this.application.deployment;
    }

    _backend = {};

    get backend() {
      return this._backend;
    }

    _libraries = [];

    get libraries() {
      if (!this.application?.libraries?.fetched) return this._libraries;
      return this.application.libraries.items;
    }

    #staticManager;

    get static() {
      return this.#staticManager;
    }

    #template = {};

    get template() {
      return this.#template;
    }

    get errors() {
      return this.application.errors;
    }

    get warnings() {
      return this.application.warnings;
    }

    #modulesTree;

    get modulesTree() {
      return this.#modulesTree;
    }

    get distributionValues() {
      return {
        values: {
          id: "",
          name: "",
          local: "",
          ssr: "",
          ports: {},
          ts: "",
          amd: "",
          minify: {},
          //todo: obtener
          platform: "",
          environment: "",
          compress: "",
          default: ""
        }
      };
    }
    /**
     *
     */


    #moduleManager;

    get moduleManager() {
      return this.#moduleManager;
    }

    #favorites;

    get favorites() {
      return this.#favorites;
    }
    /**
     *
     * @private
     */


    #element;

    get element() {
      return this.#element;
    }

    get found() {
      return this.application.found;
    }

    #ready = undefined;

    get ready() {
      if (!this.application.found && !this.application.fetching) {
        console.warn(`The application ${this.application.id} was not found`);
        return true;
      }

      return this.application.landed;
    }

    #application;

    get application() {
      return this.#application;
    }
    /**
     *
     * @param {String} id Id of the application
     * @param {String} moduleId Id of the module to open into workspace.
     * @param {string} element Represents the element of the application to wait to be ready
     * could by one of the next values
     *  - template
     *  - module
     *  - favorites
     *  - statics
     *  - config
     */


    constructor(id, moduleId, element) {
      super();
      this.#element = element;
      this.#application = new Application({
        identifier: {
          id: parseInt(id)
        },
        tree: SPECS.tree
      });
      this.#application.bind('change', this.checkLoaded);
      this.#application.bind('change', this.validateErrors);
      this.#application.bind('change', this.triggerEvent);
      this.#application.fetch();
      this.#moduleManager = new ModuleManager(this, moduleId);
      this.#favorites = FavoritesFactory.get(this.application.id, this);
      this.#favorites.bind('change', this.triggerEvent);
    }

    checkLoaded = () => {
      if (!this.application.tree.landed) return;
      this.application.unbind('change', this.checkLoaded);
      this.#processModules();
      this.#staticManager = new StaticManager(this);
      this.#processTemplate();
      this.triggerEvent();
    };

    #processModules() {
      const items = this.itemsByContainer('application').map(module => module);
      this.#modulesTree = TreeFactory.get('project', {
        id: this.application.id,
        project: this,
        object: this.application,
        items,
        listener: () => {
          const items = this.itemsByContainer('application').map(module => module);
          if (!this.items || !this.am.tree.landed) return;
          if (this.items.length === this.#modulesTree.elements.length) return;
          this.#modulesTree.setElements(items);
        }
      });
    }

    #processTemplate() {
      //TODO: @julio TREE
      if (this.#templateManager) {
        return;
      }

      const templateManager = new TemplateManager(this);
      this.#templateManager = templateManager;
      this.#template.application = templateManager.trees.application;
      this.#template.global = templateManager.trees.global;
      this.#template.processors = templateManager.trees.processors;
    }

    clean() {
      this.application?.am.clean();
    }

    _filterItems() {
      const specs = {};
      if (!this.am) return [];
      specs.container = this.filterContainer ? this.#getContainerId(this.filterContainer) : 'application';
      if (this.filterText) specs.text = this.filterText;
      if (this.filterBundle) specs.bundle = this.filterBundle;
      return this.am.getItems(specs);
    }

    itemsByContainer(container) {
      return this.application.am.getItems({
        container: this.#getContainerId(container)
      });
    }

    #getContainerId(container) {
      if (['application', 'all'].includes(container)) return container;
      const library = this.application.libraries.items.find(library => library.library?.name === container);
      if (!library) return container;
      return `${library.id}/`;
    }

    getItems(filter) {
      this.#filterContainer = filter;
      return this._filterItems();
    }

    validateErrors = () => {
      if (!this.application.errors) return;
      const specs = {
        id: this.application.id,
        application: this.application
      }; // DSNotifications.register(this.application.errors, specs);
    };

    async compile(id) {
      try {
        this.processing = true;
        const distribution = this.application.deployment.distributions.get(id);
        await this.application.builder.build(distribution.values);
        this.processing = false;
        this.triggerEvent('compilation.change');
      } catch (e) {}
    }

  }
  /****************************
  FILE: project\static\index.js
  ****************************/


  class StaticManager extends ReactiveModel {
    #parent;
    #project;

    get project() {
      return this.#project;
    }

    get id() {
      return `${this.#project.id}.static`;
    }

    #application;

    get application() {
      return this.#application;
    }

    #tree;

    get tree() {
      return this.#tree;
    }

    constructor(project) {
      super();
      this.#project = project;
      this.#application = project.application;
      this.#tree = TreeFactory.get('static', {
        project: this.#project,
        object: this,
        items: this.#application.static.items,
        listener: () => {
          this.#tree.setElements(this.#application.static.items);
        }
      });
    }
    /**
     * Returns a image element
     * @param id
     */


    get(id) {
      return this.application?.static?.items.find(item => item.id === id);
    }

  }
  /********************************
  FILE: project\template\manager.js
  ********************************/


  class TemplateManager extends ReactiveModel {
    #project;
    #trees = {};

    get trees() {
      return this.#trees;
    }

    constructor(project) {
      super();
      this.#project = project;
      this.getTrees();
    }

    getTrees() {
      const {
        template,
        template: {
          application,
          global
        }
      } = this.#project.application;
      const project = this.#project;
      this.#trees.application = TreeFactory.get('template', {
        project: project,
        object: application,
        items: application.sources.items,
        id: project.id,
        listener: () => {
          this.#trees.application.setElements(application.sources.items);
        }
      });
      this.#trees.global = TreeFactory.get('template', {
        project: project,
        object: global,
        items: global.sources.items,
        listener: () => {
          this.#trees.global.setElements(global.sources.items);
        }
      });
      this.#trees.processors = new Map();
    }

    async getSource(id, type) {
      const prop = type.split(".")[1];
      const source = this.#project.application.template[prop].sources.items.find(item => {
        return item.id === id;
      });
      return source;
    }

  }
  /*************
  FILE: specs.js
  *************/


  const SPECS = {
    tree: {
      properties: {
        static: true,
        deployment: {
          properties: {
            distributions: {
              properties: {
                launcher: true
              }
            }
          }
        },
        template: {
          properties: {
            application: {
              properties: {
                sources: true
              }
            },
            processors: {
              properties: {
                sources: true
              }
            },
            global: {
              properties: {
                sources: true
              }
            }
          }
        },
        am: {
          properties: {
            module: true,
            bundles: {
              properties: {
                processors: true
              }
            }
          }
        }
      }
    }
  };
  /************************************
  FILE: tree\branches\source\backend.js
  ************************************/

  class BackendSourceBranch extends Branch {
    _icons = new Map([['ts', 'ts'], ['tsx', 'tsx'], ['scss', 'scss'], ['txt', 'txt'], ['start', 'start'], ['default', 'txt']]);

    get actions() {
      return [{
        name: 'rename',
        icon: 'edit',
        modal: true
      }, {
        name: 'delete',
        icon: 'delete',
        confirm: true
      }];
    }

    get icons() {
      return this._icons;
    }

    get extension() {
      return this.label?.split(".")?.slice(-1)[0];
    }

    get icon() {
      if (!this.extension) return 'file';
      return this.icons.get(this.extension) ?? this.icons.get('default');
    }

    get type() {
      return 'source';
    }

    get pathname() {
      return `${this.item.id}/${this.label}`;
    }

    delete() {
      this.source.delete();
      this.triggerEvent('deleted');
    }

    rename(name) {
      if (name.split(".").slice(-1)[0] !== this.source.filename.split(".").slice(-1)[0]) {
        throw Error('ERR__EXTENSION');
      }

      const {
        dirname,
        filename
      } = this.source;
      this.source.rename({
        path: dirname,
        current: filename,
        newName: name
      }); //TODO: the name must be updated automatically by PLM.
      // is not working in this moment.

      this._label = name;
      this.triggerEvent();
      return true;
    }

    addFavorite(folder) {
      const {
        application: {
          favorites
        },
        processor,
        template,
        module
      } = this;
      const {
        dirname,
        file
      } = this.item.relative;
      this._isFavorite = true;
      this._favoritePathname = `${this.item.id}/${this.label}`;
      favorites.add(folder, {
        source: {
          name: `${module.subpath} /${dirname ? `${dirname}/` : ''}${file}`,
          id: this.item.id,
          dirname: this.item.dirname
        },
        folder: folder,
        processor: {
          name: processor.name,
          id: processor.id
        },
        pathname: `${this.item.id}${this.label}`,
        type: 'templateSource'
      });
    }

  }
  /*********************************
  FILE: tree\branches\source\item.js
  *********************************/


  class SourceBranch extends Branch {
    _icons = new Map([['ts', 'ts'], ['tsx', 'tsx'], ['scss', 'scss'], ['txt', 'txt'], ['start', 'start'], ['default', 'txt']]);

    get actions() {
      return [{
        name: 'rename',
        icon: 'edit',
        modal: true
      }, {
        name: 'delete',
        icon: 'delete',
        confirm: true
      }];
    }

    get module() {
      return this?.am;
    }

    get icons() {
      return this._icons;
    }

    get extension() {
      return this.label?.split(".")?.slice(-1)[0];
    }

    get icon() {
      if (!this.extension) return 'file';
      return this.icons.get(this.extension) ?? this.icons.get('default');
    }

    get type() {
      return 'source';
    }

    get pathname() {
      return `${this.item.id}/${this.label}`;
    }

    delete() {
      this.source.delete();
      this.triggerEvent('deleted');
    }

    rename(name) {
      if (name.split(".").slice(-1)[0] !== this.source.filename.split(".").slice(-1)[0]) {
        throw Error('ERR__EXTENSION');
      }

      const {
        dirname,
        filename
      } = this.source;
      this.source.rename({
        path: dirname,
        current: filename,
        newName: name
      }); //TODO: the name must be updated automatically by PLM. is not working in this moment.

      this._label = name;
      this.triggerEvent();
      return true;
    }

    addFavorite(folder) {
      const {
        favorites,
        processor,
        bundle,
        module
      } = this;

      if (!this.bundle || !this.processor) {
        console.warn(`the source does not have a processor or bundle`);
        return;
      }

      const {
        dirname
      } = this.item.relative;
      this._isFavorite = true;
      this._favoritePathname = `${this.item.id}/${this.label}`;
      favorites.add(folder, {
        source: {
          name: `${module.subpath}/${dirname ? `${dirname}/` : ''}`,
          id: this.item.id,
          dirname: this.item.dirname
        },
        folder: folder,
        bundle: {
          id: bundle.id,
          name: bundle.name
        },
        processor: {
          name: processor.name,
          id: processor.id
        },
        module: {
          id: module.id,
          name: module.name
        },
        pathname: `${this.item.id}/${this.label}`,
        type: 'source'
      });
    }

  }
  /*************************************
  FILE: tree\branches\source\template.js
  *************************************/


  class TemplateSourceBranch extends Branch {
    _icons = new Map([['ts', 'ts'], ['tsx', 'tsx'], ['scss', 'scss'], ['txt', 'txt'], ['start', 'start'], ['default', 'txt']]);

    get actions() {
      return [{
        name: 'rename',
        icon: 'edit',
        modal: true
      }, {
        name: 'delete',
        icon: 'delete',
        confirm: true
      }];
    }

    get icons() {
      return this._icons;
    }

    get extension() {
      return this.label?.split(".")?.slice(-1)[0];
    }

    get icon() {
      if (!this.extension) return 'file';
      return this.icons.get(this.extension) ?? this.icons.get('default');
    }

    get type() {
      return 'source';
    }

    get module() {
      return this.item;
    }

    delete() {
      this.source.delete();
      this.triggerEvent('deleted');
    }

    rename(name) {
      if (name.split(".").slice(-1)[0] !== this.source.filename.split(".").slice(-1)[0]) {
        throw Error('ERR__EXTENSION');
      }

      const {
        dirname,
        filename
      } = this.source;
      this.source.rename({
        path: dirname,
        current: filename,
        newName: name
      }); //TODO: the name must be updated automatically by PLM.
      // is not working in this moment.

      this._label = name;
      this.triggerEvent();
      return true;
    }

    addFavorite(folder) {
      const {
        favorites
      } = this;
      this._isFavorite = true;
      const {
        id,
        dirname,
        filename,
        processor,
        relative,
        type
      } = this.item;
      favorites.add(folder, {
        pathname: `${this.item.id}${this.label}`,
        type: 'template',
        source: {
          id,
          dirname,
          filename,
          relative,
          type,
          processor
        }
      });
    }

  }
  /************
  FILE: user.js
  ************/

  /**
   * Represent the current dashboard user
   */


  class DSUser extends ReactiveModel {
    #name;

    get name() {
      return this.#name;
    }

    set name(value) {
      if (!value || value === this.#name) return;
      if (typeof value !== 'string') throw new Error('the name must be a string');
      this.#name = value;
      localStorage.setItem('ds.user.name', value);
    }

    #hasAccess;

    get hasAccess() {
      return this.#hasAccess;
    }

    #code;

    get code() {
      return this.#code;
    }

    #email;

    get email() {
      return this.#email;
    }

    set email(value) {
      if (!value || value === this.#email) return;
      if (typeof value !== 'string') throw new Error('the email must be a string');
      this.#email = value;
      localStorage.setItem('ds.user.name', value);
    }

    #dashboard;
    #validated;

    get validated() {
      return this.#validated;
    }

    constructor(dashboard) {
      super();
      this.#dashboard = dashboard;
      this.#check();
    }

    #check() {
      this.#name = localStorage.getItem('ds.user.name');
      this.#code = localStorage.getItem('ds.user.code');
      this.#email = localStorage.getItem('ds.user.email');
      this.#validated = true;
      this.#hasAccess = !!this.#name && !!this.#email;
    }

    async register(name, email) {
      this.#name = name;
      localStorage.setItem('ds.user.name', name);
      localStorage.setItem('ds.user.email', email);
      this.#hasAccess = true;
      return true;
    }

    async validate(code) {
      const response = await this.#dashboard.validate(code);
      this.#validated = true;
      this.#hasAccess = response;
      this.triggerEvent();
      return response;
    }

  }

  _exports.DSUser = DSUser;
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