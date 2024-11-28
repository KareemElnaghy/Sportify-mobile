import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";

import { styles } from "./CourtsListStyles";
import { View } from "react-native";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
