import { PMSettings } from "@/PMs/Settings/SettingsPM";
import { Router } from "expo-router";

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

export function getSettingsModel(
  pm: () => PMSettings,
  router: Router
): SettingsModel {
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
	EditProfile: () 
  };

  return model;
}
