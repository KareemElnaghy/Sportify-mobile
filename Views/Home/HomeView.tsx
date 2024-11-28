import { PMHome } from "@/PMs/Home/HomePM";

import { styles } from "./HomeStyles";
import { Text, View } from "react-native";

interface propsType {
	pm: PMHome;
}

export default function HomeView({ pm }: propsType) {
	return (
		<View style={styles.main_container}>
			<Text>My Home</Text>
		</View>
	);
}
