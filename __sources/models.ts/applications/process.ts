import {Events} from "@beyond-js/kernel/core";
import {module} from "beyond_context";
import type {Application} from "./item";
import {backends} from "@beyond-js/backend/client";

interface MessageSpecs {
    id: string;
    type: string;
    text: string;
    error?: boolean;
    processed?: boolean;
    main: string,
    moduleId: string,
    stack: [MessageSpecs]
}

export class ApplicationProcess extends Events {
    readonly #application: Application;

    #messages: Array<MessageSpecs> = [];
    get messages() {
        return this.#messages;
    }

    #errors: Array<MessageSpecs> = [];
    get errors() {
        return this.#errors;
    }

    #exc: Map<string, MessageSpecs> = new Map();
    get exc() {
        return this.#exc;
    }

    #processing: boolean;
    get processing() {
        return this.#processing;
    }

    #processed: boolean;
    get processed() {
        return this.#processed;
    }

    /**
     * @param application {object} The application
     */
    constructor(application: Application) {
        super();
        this.#application = application;
    }

    private onMessage = (message: MessageSpecs) => {
        if (!['process'].includes(message.type)) return;

        if (message.processed) {
            this.#processed = true;
            this.#processing = false;
            this.trigger("change");
            return;
        }

        // set message on messages
        this.#messages.push(message);
        if (!message.error) {
            this.trigger("change");
            return;
        }

        if (!message.main) {
            if (!this.#exc.has(message.moduleId)) {
                console.warn('error message recived and not process main first', message)
            }
            const msg = this.#exc.get(message.moduleId);
            msg.stack.push(message);
            this.#exc.set(msg.moduleId, msg);
        } else if (this.#exc.has(message.moduleId)) {
            const msg = this.#exc.get(message.moduleId);
            msg.stack.push(message);
        } else {
            !message.stack && (message.stack = []);
            this.#exc.set(message.moduleId, message);
        }

        this.#errors.push(message);
        this.trigger("change");
    };

    #prepared = false;

    private async prepare() {
        if (this.#prepared) return;
        this.#prepared = true;

        try {
            const backend = await backends.get("@beyond-js/inspect");
            const socket = await backend.socket;
            socket.on(`project-process:${this.#application.id}`, this.onMessage);
        } catch (exc) {
            console.error(exc.stack);
        }
    }

    async run(id: string, actions: { build: boolean; declarations: boolean }) {
        if (this.#processing) return;
        if (!id) {
            console.warn('Parameter id is required');
            return;
        }
        if (!actions.build && !actions.declarations) {
            console.warn('No actions to process');
            return;
        }

        this.clean();
        this.#processing = true;
        this.trigger("change");
        const specs = Object.assign({application: this.#application.id, distribution: id}, actions);
        try {
            await this.prepare();
            await module.execute("applications/process", specs);
        } catch (exc) {
            console.error(exc.message);
            this.#processed = this.#processing = false;
            this.trigger("change");
        }
    }

    clean() {
        this.#errors = [];
        this.#messages = [];
        this.#processed = false;
        this.#processing = false;
        this.trigger("change");
    }
}
