import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { routerNav } from "@/libs/Utils/RouterLib";
import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";

export interface CourtDetailsParams extends pageParamsObj {}

export interface CourtDetailsModel {
  setup: (params: CourtDetailsParams | {}) => Promise<void>;
  onBack: () => void;
  onBook: () => void;
  onNavigate: () => void;
}

export function getCourtDetailsModel(
  pm: () => PMCourtDetails
): CourtDetailsModel {
  const model: CourtDetailsModel = {
    setup: async (params: CourtDetailsParams) => {
      pm().courtDetails = {
        courtDetails: "Court Details",
        courtName: "Court Name",
        courtLocation: "Court Location",
      };
      pm().onBack = model.onBack;
      pm().onBook = model.onBook;
      pm().onNavigate = model.onNavigate;
    },
    onBack: function (): void {
      routerNav.push("home");
    },
    onNavigate: function (): void {
      routerNav.push("reserve");
    },
    onBook: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  return model;
}
