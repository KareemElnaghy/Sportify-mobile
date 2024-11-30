import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMReserve, PMReserve } from "@/PMs/Reserve/ReservePM";
import {
	getReserveModel,
	ReservePageParams,
} from "@/Models/Reserve/ReserveModel";
import ReserveView from "@/Views/Reserve/ReserveView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function ReservePage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMReserve>(default_PMReserve);
	const params = routerNav.getParams<ReservePageParams>();
	const model = useMemo(() => {
		const model = getReserveModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <ReserveView pm={pm} />;
}
