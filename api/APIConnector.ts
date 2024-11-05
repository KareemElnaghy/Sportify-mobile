const baseURL = "http://localhost:3000";

export interface APIResponseObj {
	status: "OK" | "ERROR";
}
export type APIResponse = Promise<APIResponseObj>;

type fetchParameters = {
	[key: string]: string;
};

function constructURL(path: string, parameters?: fetchParameters): string {
	if (!path.startsWith("/")) {
		path = "/" + path;
	}
	let url = baseURL + path;
	if (parameters) {
		url = url + "?" + new URLSearchParams(parameters).toString();
	}
	return url;
}

export const APIConnector = {
	headers: {},

	async call(
		method: string,
		path: string,
		parameters?: fetchParameters,
		headers?: HeadersInit | null,
		body?: any
	) {
		const url = constructURL(path, parameters);
		let ReqHeaders;
		if (headers === undefined) {
			ReqHeaders = APIConnector.headers;
		} else if (headers === null) {
			ReqHeaders = undefined;
		} else {
			ReqHeaders = headers;
		}
		const options: RequestInit = {
			method: method,
			headers: ReqHeaders,
			body: body ? JSON.stringify(body) : undefined,
		};
		const res = await fetch(url, options);
		const resBody = await res.json();

		return resBody;
	},

	async get(
		path: string,
		parameters?: fetchParameters,
		headers?: HeadersInit | null
	): Promise<any> {
		return await APIConnector.call("GET", path, parameters, headers, undefined);
	},

	async post(
		path: string,
		parameters?: fetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<any> {
		return await APIConnector.call("POST", path, parameters, headers, body);
	},

	async put(
		path: string,
		parameters?: fetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<any> {
		return await APIConnector.call("PUT", path, parameters, headers, body);
	},

	async delete(
		path: string,
		parameters?: fetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<any> {
		return await APIConnector.call("DELETE", path, parameters, headers, body);
	},
};
