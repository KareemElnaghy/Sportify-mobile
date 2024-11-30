import { PMReserve } from "@/PMs/Reserve/ReservePM";
import { Calendar } from "react-native-calendars";
import React, { useState } from "react";
import { styles } from "./ReserveStyles";
import {
	KeyboardAvoidingView,
	Platform,
	Image,
	TextInput,
	Text,
	TouchableOpacity,
	View,
	FlatList,
  } from "react-native";
// import { KeyboardAvoidingView, Platform } from "react-native";
import Back from "@/assets/svgs/back.svg";

interface propsType {
	pm: PMReserve;
}


export default function ReserveView({ pm }: propsType) {
	const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
	// Define the time slots
	const timeSlots = [
		"5:00 pm - 6:00 pm",
		"6:00 pm - 7:00 pm",
		"7:00 pm - 8:00 pm",
		"8:00 pm - 9:00 pm",
		"9:00 pm - 10:00 pm",
		"10:00 pm - 11:00 pm",
		"11:00 pm - 12:00 am",
	];
	
	const handleSlotPress = (slot: string) => {
		setSelectedSlot(slot);
	};

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
			
			<Text style={styles.title_txt}>Reservation</Text>
			<Text style={styles.court_Name}>{pm.courtName}</Text>
			<Text style={styles.reserve_txt}>Select a date:</Text>
			
			<View style={styles.calendar_container}>
				<Calendar
					current={new Date().toISOString().split("T")[0]}
					minDate={new Date().toISOString().split("T")[0]}
					maxDate={new Date(new Date().setDate(new Date().getDate() + 7))
					.toISOString()
					.split("T")[0]}
					onDayPress={(day: { dateString: string; day: number; month: number; year: number }) => {
					console.log("selected day", day);
					}}
					hideExtraDays={true}
					disableMonthChange={false}
					firstDay={1}
					renderArrow={(direction: 'left' | 'right') => (
						<Text style={styles.arrow}>{direction === "left" ? "‹" : "›"}</Text>
					)}
					renderHeader={(date: Date) => 
					(
						<View style={styles.header}>
							<Text style={styles.headerText}>
							{date.toDateString().split(" ")[1]} {date.getFullYear()}
							
							</Text>
						</View>
					)}
					enableSwipeMonths
					theme={{
						textDayFontFamily: 'System', // You can change to custom font if needed
						textDayFontWeight: 'normal', // Ensure normal font weight for days
						textDayStyle: { color: 'black' }, // Set the day text color to black
						textMonthFontFamily: 'System',
						textMonthFontWeight: 'bold',
						selectedDayBackgroundColor: 'blue', // Change selected day background color
						todayTextColor: 'blue', // Change today's date text color
					}}
				/>
			</View>

			<View style={styles.container}>
				<Text style={styles.date_txt}>Select a time:</Text>
				<FlatList 
					data={timeSlots}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={[
								styles.slot,
								selectedSlot === item && styles.selectedSlot, 
							]}
							onPress={() => handleSlotPress(item)}
						>
						<Text
							style={[
							styles.slotText,
							selectedSlot === item && styles.selectedSlotText, 
							]}
						>
							{item}
						</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
			<TouchableOpacity style={styles.book_btn} onPress={pm.onConfirm}>
				<Text style={styles.book_btn_text}>Confirm Booking</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}
