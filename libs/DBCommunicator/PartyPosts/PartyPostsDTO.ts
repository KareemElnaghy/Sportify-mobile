import Court from "@/types/Court";
import PartyPost from "@/types/PartyPost";

export type PartyPostDTO = {
	id: number;
	owner_email: string | null;
	member: string | null;
	event_name: string | null;
	sport: string | null;
	court: string | null;
	start_time: Date | null;
	end_time: Date | null;
};

export const PartyPostsListDTOExtractor = (
	api_response: any[]
): PartyPostDTO[] => {
	return api_response as PartyPostDTO[];
};

export const PartyPostsListDTOTransformer = (
	dto_object: PartyPostDTO[]
): PartyPost[] => {
	return dto_object.map<PartyPost>((c) => ({
		id: c.id,
		ownerEmail: c.owner_email || "",
		member: c.member || "",
		eventName: c.event_name || "",
		sport: c.sport || "",
		location: c.court || "",
		description: "",
		startTime: c.start_time || new Date(), // FIXME: possible nulls should be visible
		endTime: c.end_time || new Date(),
	}));
};

export const PartyPostsItemsDTOExtractor = (
	api_response: any[]
): PartyPostDTO[] => {
	return api_response as PartyPostDTO[];
};

export const PartyPostsItemsDTOTransformer = (
	dto_object: PartyPostDTO[]
): PartyPost[] => {
	return dto_object.map((p) => ({
		id: p.id || 0,
		ownerEmail: p.owner_email || "",
		eventName: p.event_name || "",
		sport: p.sport || "",
		location: p.court || "",
		description: "",
		startTime: p.start_time || new Date(),
		endTime: p.end_time || new Date(),
	}));
};

export const PartyPostDTOExtractor = (api_response: any): PartyPostDTO => {
	return api_response as PartyPostDTO;
};

export const PartyPostDTOTransformer = (
	dto_object: PartyPostDTO
): PartyPost => {
	return {
		id: dto_object.id || 0,
		ownerEmail: dto_object.owner_email || "",
		eventName: dto_object.event_name || "",
		sport: dto_object.sport || "",
		location: dto_object.court || "",
		startTime: dto_object.start_time || new Date(),
		endTime: dto_object.end_time || new Date(),
	};
};
