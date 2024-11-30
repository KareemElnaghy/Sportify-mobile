import { PMReserve } from "@/PMs/Reserve/ReservePM";

export interface ReserveModel {
	setup: () => Promise<void>;
	

}

export function getReserveModel(pm: () => PMReserve): ReserveModel {
	const model: ReserveModel = {
		setup: async () => {},
	};

	return model;
}
