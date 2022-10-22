import {EventEmitter} from "events";
import Collection from "../classes/Collection";
import Guild from "../classes/Guild";
import User from "../classes/User";
import { Gateway } from "./Gateway";
import ClientSettings from "./ClientSettings";

export default class Client extends EventEmitter {

    guilds: Collection<string, Guild> = new Collection<string, Guild>();
    users: Collection<string, User> = new Collection<string, User>();
    ws: Gateway = new Gateway();

    csettings: ClientSettings = new ClientSettings();

	settings = {}
	userdata = {}

    get token(){ return this.ws.token }
    set token(value: string | null){ this.ws.token = value }

    open(){
        this.ws.open();
    }

    close(){
        this.ws.close();
    }
}
console.log("hello world");