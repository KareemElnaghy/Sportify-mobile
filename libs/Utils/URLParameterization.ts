import { NextRequest } from "next/server";

export type FetchParameters = {
	[key: string]: string | string[];
};

export type FlattenedParameters = {
	[key: string]: string;
};

export function flattenParameters(
	parameters: FetchParameters
): FlattenedParameters {
	const flattenedParameters: { [key: keyof typeof parameters]: string } = {};
	for (const [key, value] of Object.entries(parameters)) {
		if (Array.isArray(value)) {
			flattenedParameters[key] = value.join(";");
		} else {
			flattenedParameters[key] = value;
		}
	}
	return flattenedParameters;
}

export function constructURLFromBase(
	baseURL: string,
	path: string,
	parameters?: FetchParameters
): string {
	if (!path.startsWith("/")) {
		path = "/" + path;
	}
	let url = baseURL + path;
	if (parameters) {
		const flattenedParameters = flattenParameters(parameters);

		url = url + "?" + new URLSearchParams(flattenedParameters).toString();
	}
	return url;
}

export function verboseParameter(param: string): string | string[] {
	if (param.includes(";")) return param.split(";");
	else return param;
}

export function typecaseParams<T>(
	param: string[],
	castfn: (v: string) => T
): T[] {
	// return param as T[];
	return param.map((v) => castfn(v));
}

export function extractSingleParam(
	req: NextRequest,
	paramName: string
): string | null {
	const res = extractParams(req, paramName);
	if (res == null) return null;
	if (typeof res == "string") return res;
	return res[0];
}

export function extractListParams(
	req: NextRequest,
	paramName: string
): string[] {
	const res = extractParams(req, paramName);
	if (res == null) return [];
	if (typeof res == "string") return [res];
	return res;
}

function extractParams(req: NextRequest, paramName: string) {
	const params: string[] = req.nextUrl.searchParams.getAll(paramName);
	let res: string[] = [];
	for (let i = 0; i < params.length; i++) {
		const tmp = verboseParameter(params[i]);
		if (Array.isArray(tmp)) res = [...res, ...tmp];
		else res.push(tmp);
	}
	if (res.length == 0) return null;
	if (res.length == 1) return res[0];
	return res;
}
