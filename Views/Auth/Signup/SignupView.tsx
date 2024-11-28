import { PMSignup } from "@/PMs/Auth/SignupPM";

import { styles } from "./SignupStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMSignup;
}

export default function SignupView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
