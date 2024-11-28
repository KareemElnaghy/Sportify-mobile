import { PMReserve } from "@/PMs/Reserve/ReservePM";

import { styles } from "./ReserveStyles";
import { View } from "react-native";

interface propsType {
	pm: PMReserve;
}

export default function ReserveView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
