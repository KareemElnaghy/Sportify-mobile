import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

export interface CourtDetailsModel {
	setup: () => Promise<void>;
	onBack: () => void;
	onBook: () => void;
	onNavigate: () => void;
}

export function getCourtDetailsModel(
	pm: () => PMCourtDetails
): CourtDetailsModel {
	const model: CourtDetailsModel = {
		setup: async () => {
			pm().onBack = model.onBack;
			pm().onBook = model.onBook;
			pm().onNavigate = model.onNavigate;
		},
		onBack: function (): void {
			router.push("/(tabs)/courtsList");
		},
		onBook: function (): void {
			router.push("/(tabs)/reserve");
		},
		onNavigate: function (): void {
			router.push("/(tabs)/courtDetails");
		},
	};

	return model;
}
