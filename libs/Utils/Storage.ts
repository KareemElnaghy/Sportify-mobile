import * as SecureStore from "expo-secure-store";

export type StorageKey =
	| "accessToken"
	| "renewalToken"
	| "isRememberMe"
	| "rememberEmail"
	| "rememberPassword";

type MultiSet = {
	[key in StorageKey]?:
		| string
		| {
				reqAuth: boolean;
				value: string;
		  };
};

interface StorageHandlerType {
	setItems: (values: MultiSet) => Promise<boolean>;
	setItem: (
		key: StorageKey,
		value: string,
		requireAuth?: boolean
	) => Promise<boolean>;
	getItem: (key: StorageKey) => Promise<string | null>;
	removeItem: (key: StorageKey) => Promise<boolean>;
}

export const StorageHandler: StorageHandlerType = {
	setItems: async (values: MultiSet): Promise<boolean> => {
		try {
			for (const key in values) {
				const value = values[key as StorageKey];
				if (value === undefined) continue;
				let reqAuth: boolean = false;
				let val: string = "";
				if (typeof value === "string") {
					reqAuth = false;
					val = value;
				} else {
					reqAuth = value.reqAuth;
					val = value.value;
				}

				await StorageHandler.setItem(key as StorageKey, val, reqAuth);
			}
			return true;
		} catch {
			return false;
		}
	},

	setItem: async (
		key: StorageKey,
		value: string,
		requireAuth: boolean = false
	): Promise<boolean> => {
		if (value == "") return StorageHandler.removeItem(key);

		try {
			await SecureStore.setItemAsync(key, value, {
				requireAuthentication: requireAuth,
			});
			return true;
		} catch {
			return false;
		}
	},

	getItem: async (key: StorageKey): Promise<string | null> => {
		try {
			return await SecureStore.getItemAsync(key);
		} catch {
			return null;
		}
	},

	removeItem: async (key: StorageKey): Promise<boolean> => {
		try {
			await SecureStore.deleteItemAsync(key);
			return true;
		} catch {
			return false;
		}
	},
};
