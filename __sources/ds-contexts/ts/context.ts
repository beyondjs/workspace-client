import * as React from "react";
import {Events} from "@beyond-js/kernel/core";

export /*bundle */
const DSBoards = new (class extends Events {
    #items: Map<string, object> = new Map();
    get items() {
        return this.#items;
    }

    add(identifier: string, specs: object) {
        this.items.set(identifier, specs);
        this.trigger('board.added');
    }
})();

/**
 * Workspace
 */
export /*bundle */ const DSWorkspaceContext = React.createContext();
export /*bundle */ const useDSWorkspaceContext = () => React.useContext(DSWorkspaceContext);
/**
 * ASide
 */
export /*bundle */ const DSAsideContext = React.createContext();
export /*bundle */ const useDSAsideContext = () => React.useContext(DSAsideContext);
/**
 * Panels
 */
export /*bundle */ const WorkspacePanelsContext = React.createContext();
export /*bundle */ const useWorkspacePanelsContext = () => React.useContext(WorkspacePanelsContext);
/**
 * Application
 */
export /*bundle */ const ProjectContext = React.createContext();
export /*bundle */ const useProjectContext = () => React.useContext(ProjectContext);
export /*bundle */  const ConfigContext = React.createContext();
export /*bundle */  const useConfigContext = () => React.useContext(ConfigContext);


/**
 * MODULES
 */
export const AppModulesContext = React.createContext();
export const useAppModulesContext = () => React.useContext(AppModulesContext);
