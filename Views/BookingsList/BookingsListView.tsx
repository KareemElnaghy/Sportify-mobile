import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

import { styles } from "./BookingsListStyles";
<<<<<<< HEAD
import { KeyboardAvoidingView, Platform } from "react-native";
import { pageParamsObj } from "@/libs/Utils/RouterLib";
=======
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
// import { KeyboardAvoidingView, Platform } from "react-native";
>>>>>>> frontend

interface propsType {
	pm: PMBookingsList;
}

export default function BookingsListView({ pm }: propsType) {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.main_container}
		>
			<View style = {styles.title}>	
				<TouchableOpacity
					onPress = {() => {
						pm.onBack();
					}}
				>
					<Back width={38.25} height={38.25} />
				</TouchableOpacity>
			</View>
			<Text style={styles.title_txt}>My Bookings</Text>
			
			<View style={styles.layout}>
				<View
					style={{ ...styles.container, ...styles.container_top }}
				>	
					{pm.bookingsList && pm.bookingsList.length > 0 && (
					<>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtName}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtLocation}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].date}, {pm.bookingsList[0].time}</Text>
						<View style={styles.options}>
							<Text style={
								pm.bookingsList[0].isCompleted ? styles.complete : styles.cancelled
							}>
								{pm.bookingsList[0].isCompleted ? "Completed" : "Cancelled"}
							</Text>
							<TouchableOpacity
								onPress={() => {
									pm.onRebook(0);
								}}
							>
								<Text style={styles.rebook_txt}>Rebook</Text>
							</TouchableOpacity>
						</View>
					</>
					)}
				</View>

				<View
					style={{ ...styles.container, ...styles.container_next }}
				>	
					{pm.bookingsList && pm.bookingsList.length > 0 && (
					<>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtName}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtLocation}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].date}, {pm.bookingsList[0].time}</Text>
						<View style={styles.options}>
							<Text style={
								pm.bookingsList[0].isCompleted ? styles.complete : styles.cancelled
							}>
								{pm.bookingsList[0].isCompleted ? "Completed" : "Cancelled"}
							</Text>
							<TouchableOpacity
								onPress={() => {
									pm.onRebook(0);
								}}
							>
								<Text style={styles.rebook_txt}>Rebook</Text>
							</TouchableOpacity>
						</View>
					</>
					)}
				</View>

				<View
					style={{ ...styles.container, ...styles.container_third }}
				>	
					{pm.bookingsList && pm.bookingsList.length > 0 && (
					<>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtName}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtLocation}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].date}, {pm.bookingsList[0].time}</Text>
						<View style={styles.options}>
							<Text style={
								pm.bookingsList[0].isCompleted ? styles.complete : styles.cancelled
							}>
								{pm.bookingsList[0].isCompleted ? "Completed" : "Cancelled"}
							</Text>
							<TouchableOpacity
								onPress={() => {
									pm.onRebook(0);
								}}
							>
								<Text style={styles.rebook_txt}>Rebook</Text>
							</TouchableOpacity>
						</View>
					</>
					)}
				</View>

				<View
					style={{ ...styles.container, ...styles.container_forth }}
				>	
					{pm.bookingsList && pm.bookingsList.length > 0 && (
					<>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtName}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].courtLocation}</Text>
						<Text style={styles.court_data}>{pm.bookingsList[0].date}, {pm.bookingsList[0].time}</Text>
						<View style={styles.options}>
							<Text style={
								pm.bookingsList[0].isCompleted ? styles.complete : styles.cancelled
							}>
								{pm.bookingsList[0].isCompleted ? "Completed" : "Cancelled"}
							</Text>
							<TouchableOpacity
								onPress={() => {
									pm.onRebook(0);
								}}
							>
								<Text style={styles.rebook_txt}>Rebook</Text>
							</TouchableOpacity>
						</View>
					</>
					)}
				</View>
			</View>











		</KeyboardAvoidingView>
	);
}
