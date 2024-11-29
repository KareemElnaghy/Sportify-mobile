import Admin from "@/types/Admin";

export type AdminDTO = {
	email: string;
	first_name: string | null;
	last_name: string | null;
};

export const AdminsListDTOExtractor = (api_response: any[]): AdminDTO[] => {
	return api_response as AdminDTO[];
};

export const AdminsListDTOTransformer = (dto_object: AdminDTO[]): Admin[] => {
	return dto_object.map((c) => ({
		email: c.email,
		firstName: c.first_name || "",
		lastName: c.last_name || "",
	}));
};

export const AdminsItemsDTOExtractor = (api_response: any[]): AdminDTO[] => {
	return api_response as AdminDTO[];
};

export const AdminsItemsDTOTransformer = (dto_object: AdminDTO[]): Admin[] => {
	return dto_object.map((a) => ({
		email: a.email || "",
		firstName: a.first_name || "",
		lastName: a.last_name || "",
	}));
};

export const AdminDTOExtractor = (api_response: any): AdminDTO => {
	return api_response as AdminDTO;
};

export const AdminDTOTransformer = (dto_object: AdminDTO): Admin => {
	return {
		email: dto_object.email || "",
		firstName: dto_object.first_name || "",
		lastName: dto_object.last_name || "",
	};
};
