import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "#374C7A",
		flex: 1, // Take up the whole screen
		gap: 20, // Spacing between elements
		justifyContent: "center",
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
		height: 45,
	},

	text_input_password: {
		// backgroundColor: "green", 
		flex: 1,
		color: "black",
		fontSize: 18,
	},

	remember_me: {
		flexDirection: "row",
		gap: 20,
		justifyContent: "center",
		alignItems: "center",
	},

	remember_me_text: {
		color: "white",
		fontWeight: "bold",
	},

	login_btn: {
		backgroundColor: "#4067EC",
		padding: 15,

		borderRadius: 12,

		justifyContent: "center",
		alignItems: "center",

		width: 200,
	},

	login_btn_text: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},

	signup_msg: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

		textAlign: "center",
	},

	signup_msg_txt: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
	},

	signup_btn: {
		justifyContent: "center",
		alignItems: "center",
	},

	signup_btn_txt: {
		color: "#80AFFF",
		fontWeight: "bold",
		fontSize: 14,
	},
});
