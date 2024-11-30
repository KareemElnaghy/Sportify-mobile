import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import {
	default_PMCourtDetails,
	PMCourtDetails,
} from "@/PMs/CourtDetails/CourtDetailsPM";
import { getCourtDetailsModel } from "@/Models/CourtDetails/CourtDetailsModel";
import CourtDetailsView from "@/Views/CourtDetails/CourtDetailsView";

export default function CourtDetailsPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMCourtDetails>(
		default_PMCourtDetails
	);
	const model = useMemo(() => {
		const model = getCourtDetailsModel(pmRef);
		model.setup();
		return model;
	}, []);

	return <CourtDetailsView pm={pm} />;
}
