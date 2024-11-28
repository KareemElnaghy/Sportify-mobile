import { PMSettings } from "@/PMs/Settings/SettingsPM";

import { styles } from "./SettingsStyles";
import { View } from "react-native";

interface propsType {
	pm: PMSettings;
}

export default function SettingsView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
