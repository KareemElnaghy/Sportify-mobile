import { PMLogin } from "@/PMs/Auth/LoginPM";
import { Router } from "expo-router";

export interface LoginModel {
	setup: () => Promise<void>;
	onLogin: () => void;
}

export function getLoginModel(pm: () => PMLogin, router: Router): LoginModel {
	const model: LoginModel = {
		setup: async () => {
			pm().onLOGIN = model.onLogin;
		},
		onLogin: () => {
			router.push("/(tabs)/home");
		},
	};

	return model;
}
