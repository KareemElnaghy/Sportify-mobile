import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flexDirection: "row",
		position: "absolute",
		top: 80,
		left: 20,
	},
	header: {
		fontSize: 30,
		paddingLeft: 10, // Added padding to the left
	},
	sub_container: {
		height: 120,
		width: 170,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 20,
		padding: 15,
		backgroundColor: "#374C7A",
		position: "absolute",
	},
	sub_container_top_left: {
		top: 170,
		left: 20,
	},
	sub_container_top_right: {
		top: 170,
		right: 20,
	},
	sub_container_bottom_left: {
		bottom: 400,
		left: 20,
	},
	sub_container_bottom_right: {
		bottom: 400,
		right: 20,
	},
	list_text: {
		fontSize: 20,
		color: "white",
	},
	courts_container: {
		height: 90,
		width: 350,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#374C7A",
		position: "absolute",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	first: {	
		top: 480,
	},
	second: {
		bottom: 150,		
	},
});
