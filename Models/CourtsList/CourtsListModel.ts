import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { routerNav } from "@/libs/Utils/RouterLib";
import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";

export interface CourtsPageParams extends pageParamsObj {}

export interface CourtsListModel {
  setup: (params: CourtsPageParams | {}) => Promise<void>;
  ViewCourt: () => void;
  booking: (index: number) => void;
  onBack: () => void;
}

export function getCourtsListModel(pm: () => PMCourtsList): CourtsListModel {
  const model: CourtsListModel = {
    setup: async (params: CourtsPageParams) => {
      pm().ViewCourt = model.ViewCourt;
      pm().booking = model.booking;
      pm().onBack = model.onBack;
    },
    ViewCourt: function (): void {
      routerNav.push("courtDetails");
    },
    booking: function (index: number): void {
      routerNav.push("reserve");
    },
    onBack: function (): void {
      routerNav.push("home");
    },
  };

  return model;
}
