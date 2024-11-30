interface CourtData{
    courtName: string;
    courtLocation: string;
    date: string;
    time: string;
    isCompleted: boolean;
}
export interface PMBookingsList {
    bookingsList: CourtData[];
    onBack: () => void;
    onRebook: (index : number) => void; 
}

export const default_PMBookingsList: PMBookingsList = {
    bookingsList: [],
    onBack: () => {},
    onRebook: () => {},
};
