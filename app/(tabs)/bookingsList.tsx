import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMBookingsList,
	PMBookingsList,
} from "@/PMs/BookingsList/BookingsListPM";
import { getBookingsListModel } from "@/Models/BookingsList/BookingsListModel";
import BookingsListView from "@/Views/BookingsList/BookingsListView";
import { router } from "expo-router";

export default function BookingsListPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMBookingsList>(
		default_PMBookingsList
	);
	const model = useMemo(() => {
		const model = getBookingsListModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <BookingsListView pm={pm} />;
}
