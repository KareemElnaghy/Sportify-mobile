import { RequirePartials } from "@/libs/Utils/Typing";

export default interface Admin {
	email: string;
	firstName: string;
	lastName: string;
}

type requiredNewAdminAttributes = "email";
export type NewAdmin = RequirePartials<Admin, requiredNewAdminAttributes>;

type requiredNewAdminIncompleteAttributes = "email";
export type NewAdminIncomplete = RequirePartials<
	Admin,
	requiredNewAdminIncompleteAttributes
>;
