import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";
import { Router } from "expo-router";

export interface BookingsListModel {
	setup: () => Promise<void>;
}

export function getBookingsListModel(
	pm: () => PMBookingsList,
	router: Router
): BookingsListModel {
	const model: BookingsListModel = {
		setup: async () => {},
	};

	return model;
}
