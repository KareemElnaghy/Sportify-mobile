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
