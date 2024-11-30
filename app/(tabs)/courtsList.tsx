import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMCourtsList,
	PMCourtsList,
} from "@/PMs/CourtsList/CourtsListPM";
import {
	CourtsPageParams,
	getCourtsListModel,
} from "@/Models/CourtsList/CourtsListModel";
import CourtsListView from "@/Views/CourtsList/CourtsListView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function CourtsListPage() {
	const { obj: pm, ref: pmRef } =
		useStateObject<PMCourtsList>(default_PMCourtsList);
	const params = routerNav.getParams<CourtsPageParams>();
	const model = useMemo(() => {
		const model = getCourtsListModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <CourtsListView pm={pm} />;
}
