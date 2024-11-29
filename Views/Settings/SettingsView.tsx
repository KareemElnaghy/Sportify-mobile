import { PMSettings } from "@/PMs/Settings/SettingsPM";

import { styles } from "./SettingsStyles";
import { 
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
 } from "react-native";

// import { KeyboardAvoidingView, Platform } from "react-native";
import Profile from "@/assets/svgs/profile.svg";
import Lock from "@/assets/svgs/lock.svg";
import Shield from "@/assets/svgs/shield.svg";
import Location from "@/assets/svgs/location.svg";
import Help from "@/assets/svgs/help.svg";
import Logout from "@/assets/svgs/logout.svg";


interface propsType {
	pm: PMSettings;
}

export default function SettingsView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<Text style = {styles.header}>Settings</Text>

			<View style={styles.container}>
				<Text style={styles.username_text}>{pm.username}</Text>
				<TouchableOpacity>
					<Profile style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>Edit Profile</Text>

					<Lock style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>Change Password</Text>

					<Shield style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>About</Text>

					<Location style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>Location</Text>

					<Help style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>Help & Support</Text>

					<Logout style = {styles.list_icon}width={30} height={30} />
					<Text style={styles.list_text}>Logout</Text>
				</TouchableOpacity>

				
				
			</View>










		</KeyboardAvoidingView>
	);
}
