import { PMSignup } from "@/PMs/Auth/SignupPM";

export interface SignupModel {
	setup: () => Promise<void>;
}

export function getSignupModel(pm: () => PMSignup): SignupModel {
	const model: SignupModel = {
		setup: async () => {},
	};

	return model;
}
