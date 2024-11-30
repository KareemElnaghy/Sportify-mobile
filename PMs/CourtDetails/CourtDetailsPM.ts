interface CourtObj {
    courtDetails: string;
    courtName: string;
    courtLocation: string;
}

export interface PMCourtDetails {
    courtDetails: CourtObj;
    onBack: () => void;
    onBook: () => void;
    onNavigate: () => void;
}

export const default_PMCourtDetails: PMCourtDetails = {
    courtDetails: {
        courtDetails: "",
        courtName: "",
        courtLocation: ""
    },
    onBack: () => {},
    onBook: () => {},
    onNavigate: () => {}
};
