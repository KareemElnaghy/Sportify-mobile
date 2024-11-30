import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { PMSignup } from "@/PMs/Auth/SignupPM";

export interface SignupPageParams extends pageParamsObj {}

export interface SignupModel {
	setup: (params: SignupPageParams | {}) => Promise<void>;
}

export function getSignupModel(pm: () => PMSignup): SignupModel {
	const model: SignupModel = {
		setup: async (params: SignupPageParams | {}) => {},
	};

	return model;
}
