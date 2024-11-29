import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start", // Align items to the left
		gap: 20,
	},
	header: {
		color: "black",
		fontWeight: "bold",
		position: "absolute",
		top: 80,
		left: 30,
		fontSize: 35,
	},
	username_text: {
		alignSelf: "center", // Center align the username
		padding: 10,
		fontSize: 30,
		color: "black",
		fontWeight: "bold",
	},
	list_text: {
		fontSize: 25,
		color: "black",
	},
	items:{
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		gap: 10,
		left: 30,
	},
	container:{
		gap: 20,
	}
});
