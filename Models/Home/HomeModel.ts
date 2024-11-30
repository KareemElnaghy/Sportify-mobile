import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { routerNav } from "@/libs/Utils/RouterLib";
import { PMHome } from "@/PMs/Home/HomePM";

export interface HomePageParams extends pageParamsObj {}

export interface HomeModel {
  setup: () => Promise<void>;

  Bookings: () => void;
  PeerTraining: () => void;
  GymBuddy: () => void;
  PartyFinder: () => void;
  ViewCourts: () => void;
  UpcomingReservations: () => void;
}

export function getHomeModel(pm: () => PMHome): HomeModel {
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
      routerNav.push("bookings");
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
      routerNav.push("courts");
    },
    UpcomingReservations: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  return model;
}
