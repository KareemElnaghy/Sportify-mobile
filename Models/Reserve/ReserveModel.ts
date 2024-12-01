import { pageParamsObj, routerNav } from "@/libs/Utils/RouterLib";
import { PMReserve } from "@/PMs/Reserve/ReservePM";

export interface ReservePageParams extends pageParamsObj {}

export interface ReserveModel {
  setup: (params: ReservePageParams | {}) => Promise<void>;
  onBack: () => void;
}

export function getReserveModel(pm: () => PMReserve): ReserveModel {
  const model: ReserveModel = {
    setup: async (params: ReservePageParams | {}) => {
      pm().onBack = model.onBack;
    },
    onBack: function (): void {
      routerNav.back();
    },
  };

  return model;
}
