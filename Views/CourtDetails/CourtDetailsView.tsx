import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

import { styles } from "./CourtDetailsStyles";
import {
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Back from "@/assets/svgs/back.svg";
import Location from "@/assets/svgs/location.svg";

// import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMCourtDetails;
}

export default function CourtDetailsView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<View 
				style={styles.upper }
			>
				<TouchableOpacity 
					onPress = {() => {
					pm.onBack();
					}}
				>
					<Back style = {styles.back} stroke = "black" width={38.25} height={38.25} />
				</TouchableOpacity>
			</View>

			<Text style = {styles.court_name}>{pm.courtDetails.courtName}</Text>

			<View style = {styles.location}>
				<Location stroke="black" width={20} height={20} />
				<Text style={styles.court_location}>
					{pm.courtDetails.courtLocation}
				</Text>
			</View>

			<Text style = {styles.court_data}>{pm.courtDetails.courtDetails}</Text>

			<TouchableOpacity style={styles.book_btn} onPress={pm.onBook}>
				<Text style={styles.book_btn_text}>Book Now</Text>
			</TouchableOpacity>

		</KeyboardAvoidingView>
	);
}
