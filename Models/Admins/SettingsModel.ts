import { PMAdminSettings } from "@/PMs/Admins/Settings/SettingsPM";

export interface AdminSettingsModel {
	setup: () => Promise<void>;
}

export function getAdminSettingsModel(pm: PMAdminSettings): AdminSettingsModel {
	const model: AdminSettingsModel = {
		setup: async () => {},
	};

	return model;
}
