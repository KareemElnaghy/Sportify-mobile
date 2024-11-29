export type Schema =
	| "string"
	| "number"
	| "boolean"
	| "array"
	| "object"
	| [Schema]
	| { [key: string]: Schema };

export type ValidateFunction<T extends Schema> = (data: any) => boolean;

const primitiveTypes: Schema[] = ["string", "number", "boolean"];
const complexTypes: Schema[] = ["array", "object"];

function compareTypes(data: any, schema: Schema): boolean {
	if (primitiveTypes.includes(schema)) {
		// primitive
		return typeof data == schema;
	} else if (complexTypes.includes(schema)) {
		if (schema == "array" && Array.isArray(data)) return true;
		else if (schema == "object" && data instanceof Object) return true;
		return false;
	} else if (typeof data == "object") {
		if (Array.isArray(schema)) {
			if (!Array.isArray(data)) return false;
			if (data.length < schema.length) return false;
			for (let i = 0; i < schema.length; i++) {
				if (!compareTypes(data[i], schema[i])) return false;
			}
		} else if (schema instanceof Object) {
			for (const key in schema) {
				if (!(key in data)) return false;

				if (!compareTypes(data[key], schema[key])) return false;
			}
		}
	}
	return true;
}

export function ValidateSchema<T extends Schema>(
	schema: T
): ValidateFunction<T> {
	return (data: any) => {
		return compareTypes(data, schema);
	};
}
