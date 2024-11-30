import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

export interface BookingsListModel {
	setup: () => Promise<void>;
}

export function getBookingsListModel(
	pm: () => PMBookingsList
): BookingsListModel {
	const model: BookingsListModel = {
		setup: async () => {},
	};

	return model;
}
