import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMCourtsList,
	PMCourtsList,
} from "@/PMs/CourtsList/CourtsListPM";
import { getCourtsListModel } from "@/Models/CourtsList/CourtsListModel";
import CourtsListView from "@/Views/CourtsList/CourtsListView";

export default function CourtsListPage() {
	const { obj: pm, ref: pmRef } =
		useStateObject<PMCourtsList>(default_PMCourtsList);
	const model = useMemo(() => {
		const model = getCourtsListModel(pmRef);
		model.setup();
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
