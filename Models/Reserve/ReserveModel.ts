import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { PMReserve } from "@/PMs/Reserve/ReservePM";

export interface ReservePageParams extends pageParamsObj {}

export interface ReserveModel {
	setup: (params: ReservePageParams | {}) => Promise<void>;
}

export function getReserveModel(pm: () => PMReserve): ReserveModel {
	const model: ReserveModel = {
		setup: async (params: ReservePageParams | {}) => {},
	};

	return model;
}
