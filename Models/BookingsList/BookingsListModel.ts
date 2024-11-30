import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { PMBookingsList } from "@/PMs/BookingsList/BookingsListPM";
import { routerNav } from "@/libs/Utils/RouterLib";

export interface BookingsPageParams extends pageParamsObj {}

export interface BookingsListModel {
  setup: (params: BookingsPageParams | {}) => Promise<void>;
  onBack: () => void;
  onRebook: (index: number) => void;
}

export function getBookingsListModel(
  pm: () => PMBookingsList
): BookingsListModel {
  const model: BookingsListModel = {
    setup: async (params: BookingsPageParams) => {
      pm().bookingsList = [];
      pm().onBack = model.onBack;
      pm().onRebook = model.onRebook;
    },
    onBack: function (): void {
      routerNav.push("home");
    },
    onRebook: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  return model;
}
