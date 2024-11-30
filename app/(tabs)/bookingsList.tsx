import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMBookingsList,
	PMBookingsList,
} from "@/PMs/BookingsList/BookingsListPM";
import {
	BookingsPageParams,
	getBookingsListModel,
} from "@/Models/BookingsList/BookingsListModel";
import BookingsListView from "@/Views/BookingsList/BookingsListView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function BookingsListPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMBookingsList>(
		default_PMBookingsList
	);
	const params = routerNav.getParams<BookingsPageParams>();
	const model = useMemo(() => {
		const model = getBookingsListModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <BookingsListView pm={pm} />;
}
