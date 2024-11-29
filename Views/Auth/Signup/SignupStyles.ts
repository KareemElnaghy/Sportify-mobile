import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "#374C7A",
		flex: 1, // Take up the whole screen
		justifyContent: "center",
		gap: 20,
		alignItems: "center",
	},
	sportifyLogo: {
		// backgroundColor: "white",
		width: "70%",
		height: 250,
	},
	text_input: {
		backgroundColor: "white",
		color: "black",

		width: "75%",
		borderRadius: 12,
		padding: 10,

		fontSize: 18,
	},
	password_input_bounding_box: {
		flexDirection: "row", 
		justifyContent: "center",
		alignItems: "center",
	},

	text_input_password: {
		// backgroundColor: "green", 
		flex: 1,
		color: "black",
		fontSize: 18,
	},
	terms_msg_txt: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
	signup_btn: {
		backgroundColor: "#4067EC",
		padding: 15,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		width: 200,
	},
	signup_btn_text: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	

});
