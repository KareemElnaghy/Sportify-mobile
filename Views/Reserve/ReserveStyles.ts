import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,				
	},
	title:{
		top: 65,
		right: 150,
	},
	title_txt:{
		top: 20,
		fontSize: 28,
		fontWeight: "600",
		fontFamily: "Poppins",
		paddingBottom: 0,
	},
	court_Name:{
		fontSize: 16.5,
		fontWeight: "600", // Use numeric value for fontWeight
		fontFamily: "Poppins",
		top: 20,
		color: "#007AFF",
	},
	reserve_txt:{
		fontSize: 14,
		fontWeight: "400", // Use numeric value for fontWeight
		fontFamily: "Poppins",
		paddingBottom: 10,
		top: 20,
	},
	date_txt:{
		fontSize: 14,
		fontWeight: "400", // Use numeric value for fontWeight
		fontFamily: "Poppins",
		paddingBottom: 10,
	},
	calendar_container: {
		borderRadius: 16, 
		overflow: "hidden", 
		borderWidth: 1,
		borderColor: "black", 
		backgroundColor: "white", 
		width: 367, 
		height: 360, 
		top: 10,
	},
	header: {
		color: "black",
		alignItems: "center",
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
		color: "black",
	},
	arrow:{
		fontSize: 24,
		color: "#007AFF", 
	},
	container: {
		alignItems: "center",
		backgroundColor: "#fff",
		top: 10,
		height: 148,
		paddingBottom: 10,
	},
	slot: {
		borderColor: "#000",
		borderRadius: 4,
		paddingVertical: 10,
		width: 367,
		alignSelf: "center",
		backgroundColor: "#f9f9f9",
	},
	selectedSlot: {
		backgroundColor: "#d3d3d3", 
	},
	slotText: {
		textAlign: "center",
		color: "#000",
		fontSize: 14,
	},
	selectedSlotText: {
		fontWeight: "bold",
	},
	book_btn: {	
		borderColor: "green",
		backgroundColor: "#00742E",
		padding: 15,
		borderRadius: 12,
		alignItems: "center",
		width: 250,
		position: "absolute",
		bottom: 100,
	},
	book_btn_text: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
});
