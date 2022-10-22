import { EventEmitter } from "events";
import Collection from "../classes/Collection";
import { Gateway } from "./Gateway";
import ClientSettings from "./ClientSettings";
export default class Client extends EventEmitter {
    constructor() {
        super(...arguments);
        this.guilds = new Collection();
        this.users = new Collection();
        this.ws = new Gateway();
        this.csettings = new ClientSettings();
        this.settings = {};
        this.userdata = {};
    }
    get token() { return this.ws.token; }
    set token(value) { this.ws.token = value; }
    open() {
        this.ws.open();
    }
    close() {
        this.ws.close();
    }
}
console.log("hello world");
