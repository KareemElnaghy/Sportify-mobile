import { PMSignup } from "@/PMs/Auth/SignupPM";
import { Router } from "expo-router";

export interface SignupModel {
	setup: () => Promise<void>;
}

export function getSignupModel(
	pm: () => PMSignup,
	router: Router
): SignupModel {
	const model: SignupModel = {
		setup: async () => {},
	};

	return model;
}
