import { PMHome } from "@/PMs/Home/HomePM";

import { styles } from "./HomeStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMHome;
}

export default function HomeView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
