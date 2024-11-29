import { PMSettings } from "@/PMs/Settings/SettingsPM";

import { styles } from "./SettingsStyles";
import { 
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
 } from "react-native";

// import { KeyboardAvoidingView, Platform } from "react-native";
import profile from "@/assets/svgs/profile.svg";
import lock from "@/assets/svgs/lock.svg";
import shield from "@/assets/svgs/shield.svg";
import location from "@/assets/svgs/location.svg";
import help from "@/assets/svgs/help.svg";
import logout from "@/assets/svgs/logout.svg";


interface propsType {
	pm: PMSettings;
}

export default function SettingsView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<Text style = {styles.header}>Settings</Text>

			








		</KeyboardAvoidingView>
	);
}
