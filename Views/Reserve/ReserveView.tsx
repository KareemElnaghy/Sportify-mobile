import { PMReserve } from "@/PMs/Reserve/ReservePM";

import { styles } from "./ReserveStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMReserve;
}

export default function ReserveView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
