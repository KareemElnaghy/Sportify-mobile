export default interface Message {
	id: number;
	senderEmail: string;
	receiverEmail: string;
	date: Date;
	content: string;
}
