import { PMSignup } from "@/PMs/Auth/SignupPM";

import { styles } from "./SignupStyles";
import { View } from "react-native";

interface propsType {
	pm: PMSignup;
}

export default function SignupView({ pm }: propsType) {
	return <View style={styles.main_container}></View>;
}
