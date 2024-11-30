import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
	useEffect(() => {
		setTimeout(() => {
			// router.navigate("/login");
			router.navigate("/(tabs)/home");
		}, 10);
	});

	return (
		// @ts-ignore
		<></>
	);
}
