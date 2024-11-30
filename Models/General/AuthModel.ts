import { AuthUtils } from "@/libs/Utils/Authutils";
import { StorageHandler } from "@/libs/Utils/Storage";
import { UserAccount } from "@/types/Auth";

// stateless
export interface AuthModel {
	setup: () => Promise<void>;

	setToken: (
		accessToken: string | null,
		renewalToken?: string | null
	) => Promise<void>;

	getToken: () => Promise<string | null>;

	getRenewalToken: () => Promise<string | null>;

	getUser: () => Promise<UserAccount>;

	logout: () => Promise<void>;
}

const model: AuthModel = {
	setup: async () => {},

	setToken: async (
		accessToken: string | null,
		renewalToken: string | null = null
	): Promise<void> => {
		if (accessToken != "" && accessToken != null) {
			await StorageHandler.setItem("accessToken", accessToken);
		} else {
			await StorageHandler.removeItem("accessToken");
		}
		if (renewalToken === undefined) return;
		if (renewalToken != "" && renewalToken != null) {
			await StorageHandler.setItem("renewalToken", renewalToken);
		} else {
			await StorageHandler.removeItem("renewalToken");
		}
	},

	getToken: async (): Promise<string | null> => {
		const token = await StorageHandler.getItem("accessToken");
		return token;
	},

	getRenewalToken: async (): Promise<string | null> => {
		const token = await StorageHandler.getItem("renewalToken");
		return token;
	},

	getUser: async (): Promise<UserAccount> => {
		const token = await model.getToken();
		return AuthUtils.getUser(token);
	},

	logout: async () => {
		await StorageHandler.removeItem("accessToken");
		await StorageHandler.removeItem("renewalToken");
	},
};

export function getAuthModel(): AuthModel {
	return model;
}
