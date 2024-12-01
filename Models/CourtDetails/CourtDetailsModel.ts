import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { routerNav } from "@/libs/Utils/RouterLib";
import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";
import Court from "@/types/Court";

export interface CourtDetailsParams extends pageParamsObj {
  court: Court;
}

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
    setup: async (params: CourtDetailsParams | {}) => {
      if (
        (typeof params == "object" && Object.keys(params).length == 0) ||
        params === {}
      )
        throw "Invalid parameter";
      pm().courtDetails = params.court;
      pm().onBack = model.onBack;
      pm().onBook = model.onBook;
      pm().onNavigate = model.onNavigate;
    },
    onBack: function (): void {
      routerNav.back();
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
