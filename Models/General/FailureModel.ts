import { routerNav } from "@/libs/Utils/RouterLib";
import { getAuthModel } from "./AuthModel";
import { reLoginAPI } from "@/libs/APICommunicator/Auth/LoginAPI";

// stateless
export interface FailureModel {
	setup: () => Promise<void>;

	onCallFail: () => Promise<void>;

	onAuthFail: () => Promise<void>;
}

let model: FailureModel | undefined = undefined;

export function getFailureModel(): FailureModel {
	if (model) return model;
	model = {
		setup: async () => {},

		onCallFail: async () => {
			console.log("failed to call");
			// alert user
		},

		onAuthFail: async () => {
			// accessToken fail

			// try renewalToken
			// handle login call
			const token = await getAuthModel().getRenewalToken();
			if (token !== null) {
				try {
					const res = await reLoginAPI({
						renewalToken: token,
					});

					if (res.isSuccess) {
						await getAuthModel().setToken(
							res.accessToken || null,
							res.renewalToken || null
						);

						// continue previous call
						return;
					}
				} catch {}
			}

			// logout
			await getAuthModel().logout();

			// direct to login page
			routerNav.goAndReset("login");
		},
	};

	return model;
}
