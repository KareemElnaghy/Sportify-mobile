export default interface CourtReservation {
	id: number;
	courtID: number;
	userEmail: string;
	startTime: Date;
	endTime: Date;
}
