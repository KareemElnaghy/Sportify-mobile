import { PMHome } from "@/PMs/Home/HomePM";

export interface HomeModel {
	setup: () => Promise<void>;
}

export function getHomeModel(pm: () => PMHome): HomeModel {
	const model: HomeModel = {
		setup: async () => {},
	};

	return model;
}
