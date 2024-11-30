import * as jose from "jose";

import { createId } from "../Utils/UUID";
import { ValidateFunction, ValidateSchema } from "../Utils/TypeValidator";

const secretKey = process.env.JWT_SECRETKEY || "";
const currentTokenVersion = process.env.JWT_TOKENVERSION || "";
const accessExpiryDuration = process.env.JWT_ACCESSEXPIRYDURATION || "";
const renewalExpiryDuration = process.env.JWT_RENEWALEXPIRYDURATION || "";

const jwtConfig = {
	secret: new TextEncoder().encode(secretKey),
};

const validateToken = ValidateSchema({
	tokenVersion: "string",
	id: "string",
	tokenType: "string",
	body: "object",
	iat: "number",
	exp: "number",
});

type AccessBodySchema = {
	username: "string";
	role: "string";
};
const validateAccessBody = ValidateSchema<AccessBodySchema>({
	username: "string",
	role: "string",
});

type RenewalBodySchema = {
	username: "string";
};
const validateRenewalBody = ValidateSchema<RenewalBodySchema>({
	username: "string",
});

type BodyValidatorsType = {
	[key in TokenTypes]: ValidateFunction<any>;
};
const bodyValidators: BodyValidatorsType = {
	Access: validateAccessBody,
	Renewal: validateRenewalBody,
};

type TokenTypes = keyof JWTBody;

interface JWTBody {
	Access: {
		username: string;
		role: string;
	};
	Renewal: {
		username: string;
	};
}

export interface TokenStruct<T extends TokenTypes> {
	tokenVersion: string;
	id: string;
	tokenType: T;
	body: JWTBody[T];
	iat: number;
	exp: number;
}

interface JWTHandlerType {
	sign: <T extends TokenTypes>(
		tokenType: T,
		body: JWTBody[T],
		expiryDuration: number | string
	) => Promise<string>;

	signAccess: (body: JWTBody["Access"]) => Promise<string>;
	signRenewal: (body: JWTBody["Renewal"]) => Promise<string>;

	decode: (token: string) => any;
	verify: <T extends TokenTypes>(
		tokenType: T,
		token: string
	) => Promise<TokenStruct<T> | null>;
}

export const jwtHandler: JWTHandlerType = {
	sign: async function <T extends TokenTypes>(
		tokenType: T,
		body: JWTBody[T],
		expiryDuration: number | string
	): Promise<string> {
		const payload: Omit<Omit<TokenStruct<T>, "exp">, "iat"> = {
			tokenVersion: currentTokenVersion,
			tokenType: tokenType,
			id: createId(),
			body: body,
		};
		const token = await new jose.SignJWT(payload)
			.setProtectedHeader({ alg: "HS256" }) // algorithm
			.setIssuedAt(new Date())
			.setExpirationTime(expiryDuration)
			.sign(jwtConfig.secret);
		return token;
	},

	signAccess: async function (body: JWTBody["Access"]): Promise<string> {
		return await jwtHandler.sign("Access", body, accessExpiryDuration);
	},

	signRenewal: async function (body: JWTBody["Renewal"]): Promise<string> {
		return await jwtHandler.sign("Renewal", body, renewalExpiryDuration);
	},

	decode: function (token: string): any {
		let res;
		try {
			res = jose.decodeJwt<any>(token);
			if (res == null) throw "Invalid Token";
		} catch {
			throw "Invalid Token";
		}
		return res;
	},
	verify: async function <T extends TokenTypes>(
		tokenType: T,
		token: string
	): Promise<TokenStruct<T> | null> {
		let tmpDecoded;
		try {
			tmpDecoded = (await jose.jwtVerify(token, jwtConfig.secret)).payload; // check signature and exp
		} catch (err) {
			return null;
		}

		if (typeof tmpDecoded == "string") return null; // check format
		if (!validateToken(tmpDecoded)) return null; // check format
		tmpDecoded = tmpDecoded as any as TokenStruct<TokenTypes>;

		const decoded: TokenStruct<TokenTypes> = {
			tokenVersion: tmpDecoded.tokenVersion,
			tokenType: tmpDecoded.tokenType,
			id: tmpDecoded.id,
			body: tmpDecoded.body,
			iat: tmpDecoded.iat,
			exp: tmpDecoded.exp,
		};

		if (decoded.tokenVersion != currentTokenVersion) return null; // check version
		if (decoded.tokenType !== tokenType) return null; // check tokenType

		// check format
		if (!bodyValidators[tokenType](decoded.body)) return null;

		return decoded as TokenStruct<T>;
	},
};
