export default interface Competition {
	id: number;
	name: string;
	adminEmail: string;
	sport: string;
	location: string;
	description: string;
	startTime: Date;
	endTime: Date;
}
