import Court from "@/types/Court";

export interface PMCourtDetails {
  courtDetails: Court;
  onBack: () => void;
  onBook: () => void;
  onNavigate: () => void;
}

export const default_PMCourtDetails: PMCourtDetails = {
  courtDetails: {
    name: "",
    id: 0,
    sport: "",
    location: "",
    description: "",
    capacity: 0,
  },
  onBack: () => {},
  onBook: () => {},
  onNavigate: () => {},
};
