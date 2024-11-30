import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

export interface CourtDetailsModel {
	setup: () => Promise<void>;
}

export function getCourtDetailsModel(
	pm: () => PMCourtDetails
): CourtDetailsModel {
	const model: CourtDetailsModel = {
		setup: async () => {},
	};

	return model;
}
