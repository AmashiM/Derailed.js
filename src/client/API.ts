import axios from "axios";

// refer to https://github.com/derailedapp/ekranoplan for api docs
// refer to https://github.com/derailedapp/derailed-gateway if api docs doesn't answer your question
// refer to https://github.com/derailedapp/derailed-api if api docs doesn't seem to be working and hope that it's up to date

const BASE_URL = "https://derailed.one/api/";

export default class API {
    static async request(method: string, route: string, data: object | null, headers: object | null, token: string | null){
		let req = {
			method,
			url: BASE_URL + route
		}

		if (data !== null)
			req["data"] = data

		if (headers !== null)
			req["headers"] = headers
		
		if (token !== null){
			if (!("headers" in req))
				req["headers"] = {};
			req["headers"]["Authorization"] = token;
		}

		return await axios.request(req);
    };
}