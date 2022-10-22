import Track from "./Track";
import Role from "./Role";
import Collection from "./Collection";
import { snowflake } from "../types";

export default class Guild {
    guild_id?: snowflake
    name?: string
    tracks?: Collection<string, Track> = new Collection<string, Track>();
    roles?: Collection<string, Role> = new Collection<string, Role>();

    constructor(data?: Guild){
        if(data) Object.assign(this, data);
    }
}