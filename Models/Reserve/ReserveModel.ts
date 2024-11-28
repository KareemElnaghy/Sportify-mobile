import { PMReserve } from "@/PMs/Reserve/ReservePM";
import { Router } from "expo-router";

export interface ReserveModel {
	setup: () => Promise<void>;
}

export function getReserveModel(
	pm: () => PMReserve,
	router: Router
): ReserveModel {
	const model: ReserveModel = {
		setup: async () => {},
	};

	return model;
}
