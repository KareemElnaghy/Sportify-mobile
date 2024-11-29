export interface PMHome {
    username: string;
    Bookings: () => void;
    PeerTraining: () => void;
    GymBuddy: () => void;
    PartyFinder: () => void;
    ViewCourts: () => void;
    UpcomingReservations: () => void;

}

export const default_PMHome: PMHome = {
    username: "",
    Bookings: () => {},
    PeerTraining: () => {},
    GymBuddy: () => {},
    PartyFinder: () => {},
    ViewCourts: () => {},
    UpcomingReservations: () => {},
};
