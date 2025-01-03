import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	layout:{
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#E5E5E5",
		top: 90,
		width: "100%",
	},
	title:{
		top: 65,
		right: 150,
	},
	title_txt:{
		top: 80,
		fontSize: 28,
		fontWeight: "600",
		fontFamily: "Poppins",
		paddingBottom: 0,
	},
	container:{
		height: 120,
		width: 350,
		borderWidth: 1,
		borderColor: "#374C7A",
		borderRadius: 20,
		padding: 10,
		backgroundColor: "#374C7A",
		left: 20,
		paddingBottom: 0,
	},
	container_top: {
		bottom: 100,
	},
	court_data: {	
		color: "white",
		fontSize: 15,
		fontFamily: "Poppins",
		paddingBottom: 5,
	},
	complete: {
		paddingTop: 10,
		height: 30,
		width: 100,
		color: "#1DC642",
		fontSize: 15,	
		fontWeight: "bold",
		fontFamily: "Poppins",
		left: 50,
	},
	cancelled: {
		paddingTop: 10,
		height: 30,
		width: 100,
		color: "#F04438",
		fontSize: 15,	
		fontWeight: "bold",
		fontFamily: "Poppins",
		left: 50,
	},
	rebook_txt:{
		fontSize: 15,
		fontWeight: "bold",
		fontFamily: "Poppins",
		paddingBottom: 10,
		color: "#4A86DF",
		right: 80,
		top: 10,
	},
	options:{
		flexDirection: "row",
		justifyContent: "space-between",
	},
	container_next:{
		bottom: 90,
	},
	container_third:{
		bottom: 80,
	},
	container_forth:{
		bottom: 70,
	}
});
