import { PMAdminLogin } from "@/PMs/Admins/AdminLogin/AdminLoginPM";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface AdminLoginModel {
	setup: () => Promise<void>;
	onLogin: () => void;
}

export function getAdminLoginModel(
	pm: () => PMAdminLogin,
	router: AppRouterInstance
): AdminLoginModel {
	const model: AdminLoginModel = {
		setup: async () => {
			pm().onLOGIN = model.onLogin;
		},
		onLogin: () => {
			router.push("/admin/superadmin");
		},
	};

	return model;
}
