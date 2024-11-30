import { routerNav } from "@/libs/Utils/RouterLib";
import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

export interface BookingsListModel {
	setup: () => Promise<void>;
	onBack: () => void;
	onRebook: (index: number) => void;
}

export function getBookingsListModel(
	pm: () => PMBookingsList
): BookingsListModel {
	const model: BookingsListModel = {
		setup: async () => {
			pm().bookingsList = [];
			pm().onBack = model.onBack;
			pm().onRebook = model.onRebook;
		},
		onBack: function (): void {
			routerNav.push("home");
		},
	};

	return model;
}
