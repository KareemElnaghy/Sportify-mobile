import { Court } from "@/types/Court";

export interface CourtDTO {
	Name: string;
	id: string;
}
export type CourtsListDTO = CourtDTO[];

export const CourtsListDTOExtractor = (api_response: any): CourtsListDTO => {
	return [];
};

export const CourtsListDTOTransformer = (
	dto_object: CourtsListDTO
): Court[] => {
	return [];
};
