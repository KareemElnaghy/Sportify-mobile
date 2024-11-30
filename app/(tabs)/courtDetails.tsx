import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMCourtDetails,
	PMCourtDetails,
} from "@/PMs/CourtDetails/CourtDetailsPM";
import {
	CourtDetailsParams,
	getCourtDetailsModel,
} from "@/Models/CourtDetails/CourtDetailsModel";
import CourtDetailsView from "@/Views/CourtDetails/CourtDetailsView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function CourtDetailsPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMCourtDetails>(
		default_PMCourtDetails
	);
	const params = routerNav.getParams<CourtDetailsParams>();
	const model = useMemo(() => {
		const model = getCourtDetailsModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <CourtDetailsView pm={pm} />;
}
