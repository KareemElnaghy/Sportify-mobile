import { PMHome } from "@/PMs/Home/HomePM";

import { styles } from "./HomeStyles";
import {
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import Calender from "@/assets/svgs/calender.svg";
import Baseball from "@/assets/svgs/baseball.svg";
import Gym from "@/assets/svgs/gymbuddy.svg";
import Finder from "@/assets/svgs/partyfinder.svg";
import Profile from "@/assets/svgs/profile.svg";
// import { KeyboardAvoidingView, Platform } from "react-native";

interface propsType {
	pm: PMHome;
}

export default function HomeView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<View style = {styles.container}>
				<Profile width={38.25} height={38.25}/>
				<Text style={styles.header}>Hi, {pm.username}!</Text>
			</View>

			<View 
				style={{ ...styles.sub_container, ...styles.sub_container_top_left}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.Bookings();
					}}
				>
					<Calender width={45} height={45}/>
					<Text style={styles.list_text}>Bookings</Text>
				</TouchableOpacity>
			</View>

			<View 
				style={{ ...styles.sub_container, ...styles.sub_container_top_right}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.PeerTraining();
					}}
				>
					<Baseball width={45} height={45}/>
					<Text style={styles.list_text}>Peer Training</Text>
				</TouchableOpacity>
			</View>

			<View 
				style={{ ...styles.sub_container, ...styles.sub_container_bottom_left}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.GymBuddy();
					}}
				>
					<Gym width={45} height={45}/>
					<Text style={styles.list_text}>Gym Buddies</Text>
				</TouchableOpacity>
			</View>

			<View 
				style={{ ...styles.sub_container, ...styles.sub_container_bottom_right}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.PartyFinder();
					}}
				>
					<Finder width={45} height={45}/>
					<Text style={styles.list_text}>Party Finder</Text>
				</TouchableOpacity>
			</View>

			<View 
				style={{ ...styles.courts_container, ...styles.first}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.ViewCourts();
					}}
				>
					<Text style={styles.list_text}>View Courts</Text>
				</TouchableOpacity>
			</View>

			<View 
				style={{ ...styles.courts_container, ...styles.second}}
			>
				<TouchableOpacity
					onPress={() => {
						pm.UpcomingReservations();
					}}
				>

					<Text style={styles.list_text}>Upcoming Reservations</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
