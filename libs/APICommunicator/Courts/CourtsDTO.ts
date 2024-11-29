import APIResponse from "@/types/APIResponse";
import Court from "@/types/Court";

interface CourtsListDTO {
	courtsCount: number;
	courtsList: Court[];
}

export interface CourtsListData {
	courtsCount: number;
	courtsList: Court[];
}

export const CourtsListDTOExtractor = (
	api_response: APIResponse<any>
): CourtsListDTO => {
	return api_response.result as CourtsListDTO;
};

export const CourtsListDTOTransformer = (
	dto_object: CourtsListDTO
): CourtsListData => {
	return dto_object;
};

interface CourtsItemDTO {
	courtsList: Court[];
}

export interface CourtsItemData {
	courtsList: Court[];
}

export const CourtsItemDTOExtractor = (
	api_response: APIResponse<any>
): CourtsItemDTO => {
	return api_response.result as CourtsItemDTO;
};

export const CourtsItemDTOTransformer = (
	dto_object: CourtsItemDTO
): CourtsItemData => {
	return dto_object;
};

interface NewCourtDTO {
	court: Court;
}

export interface NewCourtData {
	court: Court;
}

export const NewCourtDTOExtractor = (
	api_response: APIResponse<any>
): NewCourtDTO => {
	return api_response.result as NewCourtDTO;
};

export const NewCourtDTOTransformer = (
	dto_object: NewCourtDTO
): NewCourtData => {
	return dto_object;
};

interface UpdatedCourtDTO {
	court: Court;
}

export interface UpdatedCourtData {
	court: Court;
}

export const UpdatedCourtDTOExtractor = (
	api_response: APIResponse<any>
): UpdatedCourtDTO => {
	return api_response.result as UpdatedCourtDTO;
};

export const UpdatedCourtDTOTransformer = (
	dto_object: UpdatedCourtDTO
): UpdatedCourtData => {
	return dto_object;
};

type RemoveCourtDTO = "SUCCESS" | "FAIL";

export type RemoveCourtData = boolean;

export const RemovedCourtDTOExtractor = (
	api_response: APIResponse<any>
): RemoveCourtDTO => {
	return api_response.result as RemoveCourtDTO;
};

export const RemovedCourtDTOTransformer = (
	dto_object: RemoveCourtDTO
): RemoveCourtData => {
	return dto_object == "SUCCESS";
};
