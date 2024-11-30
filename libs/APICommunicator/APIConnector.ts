import APIResponse from "@/types/APIResponse";
import { hashObject } from "../Utils/Hasher";
import { delay } from "../Utils/Delay";
import {
	constructURLFromBase,
	FetchParameters,
} from "../Utils/URLParameterization";
import { getAuthModel } from "@/Models/General/AuthModel";
import { getFailureModel } from "@/Models/General/FailureModel";

const baseURL = process.env.EXPO_PUBLIC_BASE_URL || "";
const requestDelay = 100;
const maxAPIRetyCount = Number(process.env.EXPO_PUBLIC_MAX_API_RETRY) || 1;

function constructURL(path: string, parameters?: FetchParameters): string {
	return constructURLFromBase(baseURL, path, parameters);
}

interface APIConnectorType {
	headers: HeadersInit | undefined;
	activeRequests: {
		[hashedRequest: string]: [string, Promise<any>];
	};

	handleMultiRequests: (
		hashedRequest: string,
		requestId: string,
		res: Promise<any>
	) => void;

	call: (
		method: string,
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any,
		retryCount?: number,
		noFails?: boolean
	) => Promise<APIResponse<any>> | never;

	get: (
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null
	) => Promise<APIResponse<any>> | never;

	post: (
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	) => Promise<APIResponse<any>> | never;

	postNoFails: (
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	) => Promise<APIResponse<any>> | never;

	put: (
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	) => Promise<APIResponse<any>> | never;

	delete: (
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	) => Promise<APIResponse<any>> | never;
}

interface CallRequest {
	method: string;
	path: string;
	parameters?: FetchParameters;
	headers?: HeadersInit | null;
	body?: any;
}

export const APIConnector: APIConnectorType = {
	headers: {},

	activeRequests: {},

	handleMultiRequests: (
		hashedRequest: string,
		requestId: string,
		res: Promise<any>
	) => {
		APIConnector.activeRequests[hashedRequest] = [requestId, res];
	},

	async call(
		method: string,
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any,
		retryCount?: number,
		noFails: boolean = false
	): Promise<APIResponse<any>> {
		if (retryCount === undefined) retryCount = maxAPIRetyCount;
		if (retryCount <= 0) throw "Out of Retries";

		const reqObj: CallRequest = {
			method: method,
			path: path,
			parameters: parameters,
			headers: headers,
			body: body,
		};
		const hashedRequest = await hashObject(reqObj);
		const hashedId = await hashObject(new Date());

		const url = constructURL(path, parameters);
		let ReqHeaders: HeadersInit | undefined;
		if (headers === undefined) {
			ReqHeaders = APIConnector.headers;
		} else if (headers === null) {
			ReqHeaders = undefined;
		} else {
			ReqHeaders = headers;
		}
		const auth = getAuthModel();
		const user = await auth.getUser();
		if (user.isAuth) {
			if (ReqHeaders !== undefined && !("authorization" in ReqHeaders)) {
				ReqHeaders = { ...ReqHeaders, authoriaztion: `Bearer ${user.token}` };
			}
		}

		const options: RequestInit = {
			method: method,
			headers: ReqHeaders,
			body: body ? JSON.stringify(body) : undefined,
		};

		const response: Promise<APIResponse<any>> = new Promise(
			async (resolve, reject) => {
				await delay(requestDelay);

				if (APIConnector.activeRequests[hashedRequest][0] != hashedId) {
					const res = await APIConnector.activeRequests[hashedRequest][1];
					resolve(res);
					return;
				} else {
					let isFail = false;
					let res: Response | undefined = undefined;
					try {
						res = await fetch(url, options);
						if (res.status >= 400) isFail = true;
					} catch (err) {
						isFail = true;
					}

					if (isFail || !res) {
						// repeat call

						try {
							const res = await APIConnector.call(
								reqObj.method,
								reqObj.path,
								reqObj.parameters,
								reqObj.headers,
								reqObj.body,
								retryCount - 1
							);
						} catch {
							// call Failure Model to handle
							// might be network error
							if (!noFails) getFailureModel().onCallFail();
							throw "Failed to call";
						}
					} else {
						const resBody = (await res.json()) as APIResponse<any>;
						if (
							resBody.status == "ERROR" &&
							"errorMessage" in resBody.result &&
							resBody.result["errorMessage"] == "Authentication Invalid"
						) {
							// call fail model to handle lack of auth
							if (!noFails) getFailureModel().onAuthFail();
							throw "Auth Invalid";
						}

						resolve(resBody);
					}
					return;
				}
			}
		);
		APIConnector.handleMultiRequests(hashedRequest, hashedId, response);

		return response;
	},

	async get(
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null
	): Promise<APIResponse<any>> {
		return await APIConnector.call("GET", path, parameters, headers, undefined);
	},

	async post(
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<APIResponse<any>> {
		return await APIConnector.call("POST", path, parameters, headers, body);
	},

	async postNoFails(
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<APIResponse<any>> {
		return await APIConnector.call(
			"POST",
			path,
			parameters,
			headers,
			body,
			1,
			true
		);
	},

	async put(
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<APIResponse<any>> {
		return await APIConnector.call("PUT", path, parameters, headers, body);
	},

	async delete(
		path: string,
		parameters?: FetchParameters,
		headers?: HeadersInit | null,
		body?: any
	): Promise<APIResponse<any>> {
		return await APIConnector.call("DELETE", path, parameters, headers, body);
	},
};
