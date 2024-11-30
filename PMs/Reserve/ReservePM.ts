export interface PMReserve {
    onConfirm: () => void;
    onBack: () => void;
    onDatePress: (day: { dateString: string; day: number; month: number; year: number }) => void; 
    courtName: string;
}

export const default_PMReserve: PMReserve = {
    onDatePress: () => {},
    onConfirm: () => {},
    onBack: () => {},
    courtName: "",
};
