import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header:{
		color: "back",
		fontWeight: "bold",
		position: "absolute", 
		top: 90,
		left: 30,
		fontSize: 30,
	},
	
	list_item: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	list_icon: {
		marginRight: 10,
	},
	list_text: {
		fontSize: 18,
		color: "black",
	},
	container: {
		flex : 1,
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	username_text: {
		fontSize: 20,
		color: "black",
	},

});
