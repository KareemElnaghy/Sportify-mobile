import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

import { styles } from "./CourtDetailsStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMCourtDetails;
}

export default function CourtDetailsView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
