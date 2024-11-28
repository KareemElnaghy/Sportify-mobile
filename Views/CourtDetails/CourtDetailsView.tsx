import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

import { styles } from "./CourtDetailsStyles";
import { View } from "react-native";

interface propsType {
	pm: PMCourtDetails;
}

export default function CourtDetailsView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
