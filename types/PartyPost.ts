import { RequirePartials } from "@/libs/Utils/Typing";

export default interface PartyPost {
	id: number;
	ownerEmail: string;
	eventName: string;
	sport: string;
	location: string;
	startTime: Date;
	endTime: Date;
}

type requiredNewPartyPostAttributes = "ownerEmail" | "eventName" | "sport";
export type NewPartyPost = RequirePartials<
	Omit<PartyPost, "id">,
	requiredNewPartyPostAttributes
>;

// export type NewCourtIncomplete = Partial<NewCourt>;
export type NewPartyPostIncomplete = RequirePartials<PartyPost, "id">;
