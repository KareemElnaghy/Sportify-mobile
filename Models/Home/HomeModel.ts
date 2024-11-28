import { PMHome } from "@/PMs/Home/HomePM";
import { Router } from "expo-router";

export interface HomeModel {
	setup: () => Promise<void>;
}

export function getHomeModel(pm: () => PMHome, router: Router): HomeModel {
	const model: HomeModel = {
		setup: async () => {},
	};

	return model;
}
