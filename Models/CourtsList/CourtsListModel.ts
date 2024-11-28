import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";
import { Router } from "expo-router";

export interface CourtsListModel {
	setup: () => Promise<void>;
}

export function getCourtsListModel(
	pm: () => PMCourtsList,
	router: Router
): CourtsListModel {
	const model: CourtsListModel = {
		setup: async () => {},
	};

	return model;
}
