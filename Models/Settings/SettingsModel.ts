import { PMSettings } from "@/PMs/Settings/SettingsPM";
import { Router } from "expo-router";

export interface SettingsModel {
	setup: () => Promise<void>;
}

export function getSettingsModel(
	pm: () => PMSettings,
	router: Router
): SettingsModel {
	const model: SettingsModel = {
		setup: async () => {},
	};

	return model;
}
