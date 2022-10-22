import axios from "axios";
import { snowflake } from "../types";

// refer to https://github.com/derailedapp/ekranoplan for api docs
// refer to https://github.com/derailedapp/derailed-gateway if api docs doesn't answer your question
// refer to https://github.com/derailedapp/derailed-api if api docs doesn't seem to be working and hope that it's up to date

const BASE_URL = "https://derailed.one/api/";

interface req_body {
	method: string,
	url: string,
	headers?: any,
	data?: any,
}

export default class API {
    static async request(method: string, route: string, token: string | null, data: object | null = null, userdata: object | null = null, headers: object | null = null){
		let req: req_body = {
			method,
			url: BASE_URL + route
		}

		if (!data)
			req.data = data

		if (!userdata)
			if (!req.data)
				req.data = {}
			req.data = { ...req.data, ...userdata };

		if (!headers)
			req.headers = headers
		
		if (!token){
			if (!("headers" in req))
				req.headers = {};
			req.headers.Authorization = token;
		}

		return await axios.request(req);
    };

	static async get_user(user_id: snowflake, token: string){
		return await this.request("GET", `users/${user_id}`, token);
	}

	static async get_guild(guild_id: snowflake, token: string){
		return await this.request("GET", `guilds/${guild_id}`, token);
	}

	static async get_guild_tracks(guild_id: snowflake, token: string){
		return await this.request("POST", `/guilds/${guild_id}/tracks`, token)
	}

	static async get_member(guild_id: snowflake, member_id: snowflake, token: string){
		return await this.request("GET", `guilds/${guild_id}/members/${member_id}`, token);
	}

	static async ban_member(guild_id: snowflake, member_id: snowflake, token: string){
		return await this.request("PATCH", `guilds/${guild_id}/members/${member_id}/ban`, token);
	}

	static async get_track(track_id: snowflake, token: string){
		return await this.request("GET", `tracks/${track_id}`, token);
	}

}