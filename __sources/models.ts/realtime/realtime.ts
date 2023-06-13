import { realtime, ListUpdateFilterReport } from "@beyond-js/plm/core";
import { backends } from "@beyond-js/backend/client";
import {ReactiveModel} from "@beyond-js/inspect/reactive-model";

const { reports } = realtime;

interface RecordReport {
    table: string;
    id: string | number;
}

interface ListReport {
    table: string;
    filter: ListUpdateFilterReport;
}

export /*bundle*/ const Realtime = new (class extends ReactiveModel {
    async initialise() {
        const backend = await backends.get("@beyond-js/inspect");
        const socket = await backend.socket;

        socket.on("client:plm/list/update", (message: ListReport) =>
            reports.list.update(message.table, message.filter)
        );
        socket.on("server:plm/list/update", (message: ListReport) =>
            reports.list.update(message.table, message.filter)
        );

        socket.on("client:plm/record/insert", (message: RecordReport) =>
            reports.record.insert(message.table, message.id)
        );
        socket.on("server:plm/record/insert", (message: RecordReport) =>
            reports.record.insert(message.table, message.id)
        );

        socket.on("client:plm/record/delete", (message: RecordReport) =>
            reports.record.delete(message.table, message.id)
        );
        socket.on("server:plm/record/delete", (message: RecordReport) =>
            reports.record.delete(message.table, message.id)
        );

        socket.on("client:plm/record/update", (message: RecordReport) =>
            reports.record.update(message.table, message.id)
        );
        socket.on("server:plm/record/update", (message: RecordReport) =>
            reports.record.update(message.table, message.id)
        );

        socket.on("client:plm/record/field/update", (message: RecordReport) =>
            reports.record.update(message.table, message.id, message.field, message.value)
        );
        socket.on("server:plm/record/field/update", (message: RecordReport) =>
            reports.record.update(message.table, message.id, message.field, message.value)
        );
    }
})();
