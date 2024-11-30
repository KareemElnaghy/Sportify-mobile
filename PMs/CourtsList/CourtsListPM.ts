interface CourtObj{
    courtName: string;
    courtLocation: string;
    availability: string;
    isAvailable: boolean;
}

export interface PMCourtsList {
    courtsList: CourtObj[];
    ViewCourt: () => void;
    booking: (index : number) => void; 
    onBack: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
    courtsList: [],
    ViewCourt: () => {},
    booking: () => {},
    onBack: () => {}
};
