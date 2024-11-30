import { PMSettings } from "@/PMs/Settings/SettingsPM";

export interface SettingsModel {
	setup: () => Promise<void>;
	username: string;
	EditProfile: () => void;
	ChangePassword: () => void;
	About: () => void;
	Logout: () => void;
	HelpSupport: () => void;
	Location: () => void;
}
export function getSettingsModel(pm: () => PMSettings): SettingsModel {
	const model: SettingsModel = {
		setup: async () => {
			pm().username = model.username;
			pm().EditProfile = model.EditProfile;
			pm().ChangePassword = model.ChangePassword;
			pm().About = model.About;
			pm().Logout = model.Logout;
			pm().HelpSupport = model.HelpSupport;
			pm().Location = model.Location;
		},
		EditProfile: () => {},
		username: "",
		ChangePassword: function (): void {
			throw new Error("Function not implemented.");
		},
		About: function (): void {
			throw new Error("Function not implemented.");
		},
		Logout: function (): void {
			throw new Error("Function not implemented.");
		},
		HelpSupport: function (): void {
			throw new Error("Function not implemented.");
		},
		Location: function (): void {
			throw new Error("Function not implemented.");
		},
	};

	return model;
}
