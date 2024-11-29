import { PMHome } from "@/PMs/Home/HomePM";
import { Router } from "expo-router";

export interface HomeModel {
	setup: () => Promise<void>;

	Bookings: () => void;
	PeerTraining: () => void;
	GymBuddy: () => void;
	PartyFinder: () => void;
	ViewCourts: () => void;
	UpcomingReservations: () => void;
}

export function getHomeModel(pm: () => PMHome, router: Router): HomeModel {
	const model: HomeModel = {
		setup: async () => {
			pm().Bookings = model.Bookings;
			pm().PeerTraining = model.PeerTraining;
			pm().GymBuddy = model.GymBuddy;
			pm().PartyFinder = model.PartyFinder;
			pm().ViewCourts = model.ViewCourts;
			pm().UpcomingReservations = model.UpcomingReservations;
		},
		Bookings: function (): void {
			throw new Error("Function not implemented.");
		},
		PeerTraining: function (): void {
			throw new Error("Function not implemented.");
		},
		GymBuddy: function (): void {
			throw new Error("Function not implemented.");
		},
		PartyFinder: function (): void {
			throw new Error("Function not implemented.");
		},
		ViewCourts: function (): void {
			router.push("/(tabs)/courtsList");
		},
		UpcomingReservations: function (): void {
			throw new Error("Function not implemented.");
		},
	};

	return model;
}
