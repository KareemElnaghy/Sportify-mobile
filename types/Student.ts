import { RequirePartials } from "@/libs/Utils/Typing";

export default interface Student {
	email: string;
	firstName: string;
	lastName: string;
	photoLink: string | null;
	isTrainer: boolean;
	phoneNumber: string;
	isBanned: boolean;
}

type requiredNewStudentAttributes = "email" | "firstName" | "lastName";
export type NewStudent = RequirePartials<Student, requiredNewStudentAttributes>;

// export type NewCourtIncomplete = Partial<NewCourt>;
export type NewStudentIncomplete = RequirePartials<Student, "email">;
