import { RequirePartials } from "@/libs/Utils/Typing";

export default interface Court {
	name: string;
	id: number;
	sport: string;
	location: string;
	description: string;
	capacity: number;
}

type requiredNewCourtAttributes = "name" | "sport" | "capacity";
export type NewCourt = RequirePartials<
	Omit<Court, "id">,
	requiredNewCourtAttributes
>;

// export type NewCourtIncomplete = Partial<NewCourt>;
export type NewCourtIncomplete = RequirePartials<Court, "id">;
