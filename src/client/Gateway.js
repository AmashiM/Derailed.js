var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventEmitter } from "events";
import { WebSocket } from "ws";
export const GATEWAY_URL = "wss://derailed.one/gateway";
export class Gateway extends EventEmitter {
    constructor() {
        super();
        this.ws = null;
        this.session_id = null;
        this.token = null;
    }
    open() {
        this.ws = new WebSocket(GATEWAY_URL);
        this.ws.on("open", this.on_open);
        this.ws.on("message", this.on_message);
        this.ws.on("close", this.on_close);
    }
    close() {
        if (this.ws)
            this.ws.close();
    }
    on_open() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    on_message(msg, isBinary) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = JSON.parse(msg);
        });
    }
    on_close(code, reason) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    send(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ws)
                this.ws.send(text);
        });
    }
    send_json(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ws)
                this.ws.send(JSON.stringify(data, null, ""));
        });
    }
}
