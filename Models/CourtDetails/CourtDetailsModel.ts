import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";
import { Router } from "expo-router";

export interface CourtDetailsModel {
	setup: () => Promise<void>;
}

export function getCourtDetailsModel(
	pm: () => PMCourtDetails,
	router: Router
): CourtDetailsModel {
	const model: CourtDetailsModel = {
		setup: async () => {},
	};

	return model;
}
