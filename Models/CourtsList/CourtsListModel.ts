import { pageParamsObj } from "@/libs/Utils/RouterLib";
import { routerNav } from "@/libs/Utils/RouterLib";
import { PMCourtsList } from "@/PMs/CourtsList/CourtsListPM";
import Court from "@/types/Court";
import { getCourts } from "@/libs/APICommunicator/Courts/CourtsAPI";
import { CourtsListData } from "@/libs/APICommunicator/Courts/CourtsDTO";

export interface CourtsPageParams extends pageParamsObj {}

export interface CourtsListModel {
  setup: (params: CourtsPageParams | {}) => Promise<void>;
  ViewCourt: () => void;
  booking: (index: number) => void;
  onBack: () => void;
  courtsList: Court[];
  fetchData: () => Promise<void>;
  fetchedParams: {
    page: number;
    records: number;
    searchQuery: string;
  };
}

export function getCourtsListModel(pm: () => PMCourtsList): CourtsListModel {
  const model: CourtsListModel = {
    setup: async (params: CourtsPageParams) => {
      pm().ViewCourt = model.ViewCourt;
      pm().booking = model.booking;
      pm().onBack = model.onBack;
      model.fetchData();
    },
    fetchData: async () => {
      const { courtsCount, courtsList }: CourtsListData = await getCourts({
        page: model.fetchedParams.page,
        recordsPerPage: model.fetchedParams.records,
        searchQuery: model.fetchedParams.searchQuery,
      });
      model.courtsList = courtsList;
      pm().courtsList = model.courtsList;
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
    courtsList: [],
    fetchedParams: {
      page: 1,
      records: 10,
      searchQuery: "",
    },
  };

  return model;
}
