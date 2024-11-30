import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMHome, PMHome } from "@/PMs/Home/HomePM";
import { getHomeModel, HomePageParams } from "@/Models/Home/HomeModel";
import HomeView from "@/Views/Home/HomeView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function HomePage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMHome>(default_PMHome);
	const params = routerNav.getParams<HomePageParams>();
	const model = useMemo(() => {
		const model = getHomeModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <HomeView pm={pm} />;
}
