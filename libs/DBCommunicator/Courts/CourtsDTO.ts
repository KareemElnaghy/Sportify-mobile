import Court from "@/types/Court";

export type CourtDTO = {
	name: string | null;
	id: number;
	sport: string | null;
	capacity: number | null;
	location: string | null;
	description: string | null;
};

export const CourtsListDTOExtractor = (api_response: any[]): CourtDTO[] => {
	return api_response as CourtDTO[];
};

export const CourtsListDTOTransformer = (dto_object: CourtDTO[]): Court[] => {
	return dto_object.map((c) => ({
		name: c.name || "",
		id: c.id,
		sport: c.sport || "",
		capacity: c.capacity || 0,
		location: c.location || "",
		description: c.description || "",
	}));
};

export const CourtsItemsDTOExtractor = (api_response: any[]): CourtDTO[] => {
	return api_response as CourtDTO[];
};

export const CourtsItemsDTOTransformer = (dto_object: CourtDTO[]): Court[] => {
	return dto_object.map((c) => ({
		name: c.name || "",
		id: c.id,
		sport: c.sport || "",
		capacity: c.capacity || 0,
		location: c.location || "",
		description: c.description || "",
	}));
};

export const CourtDTOExtractor = (api_response: any): CourtDTO => {
	return api_response as CourtDTO;
};

export const CourtDTOTransformer = (dto_object: CourtDTO): Court => {
	return {
		name: dto_object.name || "",
		id: dto_object.id,
		sport: dto_object.sport || "",
		capacity: dto_object.capacity || 0,
		location: dto_object.location || "",
		description: dto_object.description || "",
	};
};
