import { PMCourtDetails } from "@/PMs/CourtDetails/CourtDetailsPM";
import { routerNav } from "@/libs/Utils/RouterLib";

export interface CourtDetailsModel {
  setup: () => Promise<void>;
  onBack: () => void;
  onBook: () => void;
  onNavigate: () => void;
}

export function getCourtDetailsModel(
  pm: () => PMCourtDetails
): CourtDetailsModel {
  const model: CourtDetailsModel = {
    setup: async () => {
      pm().onBack = model.onBack;
      pm().onBook = model.onBook;
      pm().onNavigate = model.onNavigate;
    },
    onBack: function (): void {
      routerNav.push("courts");
    },
    onBook: function (): void {
      routerNav.push("reserve");
    },
    onNavigate: function (): void {
      routerNav.push("courtDetails");
    },
  };

  return model;
}
