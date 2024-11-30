import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";

export interface BookingsPageParams extends pageParamsObj {}

export interface BookingsListModel {
	setup: (params: BookingsPageParams | {}) => Promise<void>;
}

export function getBookingsListModel(
	pm: () => PMBookingsList
): BookingsListModel {
	const model: BookingsListModel = {
		setup: async (params: BookingsPageParams) => {},
	};

	return model;
}
