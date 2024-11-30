import { routerNav } from "@/libs/Utils/RouterLib";
import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";
import { router } from "expo-router";

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
			pm().courtDetails = {
				courtDetails: "Court Details",
				courtName: "Court Name",
				courtLocation: "Court Location",
			};
			pm().onBack = model.onBack;
			pm().onBook = model.onBook;
			pm().onNavigate = model.onNavigate;
		},
		onBack: function (): void {
			routerNav.push("home");
		},
		onBook: function (): void {
			router
		},
		onNavigate: function (): void {
			routerNav.push("reserve");
		},
	};

	return model;
}
