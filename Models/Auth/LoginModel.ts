import { PMLogin } from "@/PMs/Auth/LoginPM";
import { Router } from "expo-router";

export interface LoginModel {
	setup: () => Promise<void>;
	onLogin: () => void;
	onSignup: () => void;
}

export function getLoginModel(pm: () => PMLogin, router: Router): LoginModel {
	const model: LoginModel = {
		setup: async () => {
			pm().onLOGIN = model.onLogin;
			pm().onSIGNUP = model.onSignup;
		},
		onLogin: () => {
			router.push("/(tabs)/home");
		},
		onSignup: () => {
			router.push("/signup");
		},
	};

	return model;
}
