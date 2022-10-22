var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const BASE_URL = "https://derailed.one/api/";
export default class API {
    static request(method, route, data, headers, token) {
        return __awaiter(this, void 0, void 0, function* () {
            let req = {
                method,
                url: BASE_URL + route
            };
            if (data !== null)
                req["data"] = data;
            if (headers !== null)
                req["headers"] = headers;
            if (token !== null) {
                if (!("headers" in req))
                    req.headers = {};
                req.headers["Authorization"] = token;
            }
            return yield axios.request(req);
        });
    }
    ;
}
