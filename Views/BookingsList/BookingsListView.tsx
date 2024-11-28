import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

import { styles } from "./BookingsListStyles";
import { View } from "react-native";

interface propsType {
	pm: PMBookingsList;
}

export default function BookingsListView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
