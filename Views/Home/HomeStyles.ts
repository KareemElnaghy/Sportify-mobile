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
		height: 100,
		width: 170,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#374C7A",
		position: "absolute",
	},
	sub_container_top_left: {
		top: 190,
		left: 20,
	},
	sub_container_top_right: {
		top: 190,
		right: 20,
	},
	sub_container_bottom_left: {
		bottom: 420,
		left: 20,
	},
	sub_container_bottom_right: {
		bottom: 420,
		right: 20,
	},
	list_text: {
		fontSize: 20,
		color: "white",
	},
	courts_container: {
		height: 80,
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
		top: 470,
	},
	second: {
		bottom: 190,		
	},
});
