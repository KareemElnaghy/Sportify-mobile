import { PMSettings } from "@/PMs/Settings/SettingsPM";

import { styles } from "./SettingsStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMSettings;
}

export default function SettingsView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
