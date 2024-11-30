import Court from "@/types/Court";

export interface PMCourtsList {
  courtsList: Court[];
  ViewCourt: (court: Court) => void;
  booking: (index: number) => void;
  onBack: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
  courtsList: [],
  ViewCourt: () => {},
  booking: () => {},
  onBack: () => {},
};
