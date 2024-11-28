import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";

import { styles } from "./CourtsListStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
