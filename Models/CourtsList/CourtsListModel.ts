import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";

export interface CourtsListModel {
	setup: () => Promise<void>;
}

export function getCourtsListModel(pm: () => PMCourtsList): CourtsListModel {
	const model: CourtsListModel = {
		setup: async () => {},
	};

	return model;
}
