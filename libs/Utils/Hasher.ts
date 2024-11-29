// const crypto = require("crypto");
import crypto from "crypto";

export function hashObject(obj: any) {
	const str = JSON.stringify(obj);
	const hash = crypto.createHash("sha256");
	hash.update(str);
	return hash.digest("hex");
}
