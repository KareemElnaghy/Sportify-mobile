import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMHome, PMHome } from "@/PMs/Home/HomePM";
import { getHomeModel } from "@/Models/Home/HomeModel";
import HomeView from "@/Views/Home/HomeView";
import { router } from "expo-router";

export default function HomePage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMHome>(default_PMHome);
	const model = useMemo(() => {
		const model = getHomeModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <HomeView pm={pm} />;
}
