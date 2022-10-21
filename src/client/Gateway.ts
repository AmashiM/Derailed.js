import { EventEmitter } from "events";
import { WebSocket, RawData } from "ws";

export const GATEWAY_URL = "wss://derailed.one/gateway"

export class Gateway extends EventEmitter {

    ws: WebSocket
    session_id: string | null = null
    token: string | null

    constructor(){
        super();
    }

    open(){
        this.ws = new WebSocket(GATEWAY_URL);
        this.ws.on("open", this.on_open);
        this.ws.on("message", this.on_message);
        this.ws.on("close", this.on_close);
    }

    close(){
        if(this.ws) this.ws.close();
    }

    async on_open(){

    }

    async on_message(msg: RawData, isBinary: boolean){
        let data = JSON.parse(msg as any);
    }

    async on_close(code: number, reason: Buffer){

    }

    async send(text: string) {
        this.ws.send(text);
    }

    async send_json(data: object) {
        this.ws.send(JSON.stringify(data, null, ""));
    }
}