import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

import { styles } from "./BookingsListStyles";
import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMBookingsList;
}

export default function BookingsListView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		></KeyboardAvoidingView>
	);
}
