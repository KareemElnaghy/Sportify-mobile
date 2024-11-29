import APIResponse from "@/types/APIResponse";
import Admin from "@/types/Admin";

interface AdminsListDTO {
	adminsCount: number;
	adminsList: Admin[];
}

export interface AdminsListData {
	adminsCount: number;
	adminsList: Admin[];
}

export const AdminDTOExtractor = (
	api_response: APIResponse<any>
): AdminsListDTO => {
	return api_response.result as AdminsListDTO;
};

export const AdminDTOTransformer = (
	dto_object: AdminsListDTO
): AdminsListData => {
	return dto_object;
};

interface AdminsItemDTO {
	adminsList: Admin[];
}

export interface AdminsItemData {
	adminsList: Admin[];
}

export const AdminsItemDTOExtractor = (
	api_response: APIResponse<any>
): AdminsItemDTO => {
	return api_response.result as AdminsItemDTO;
};

export const AdminsItemDTOTransformer = (
	dto_object: AdminsItemDTO
): AdminsItemData => {
	return dto_object;
};

interface NewAdminDTO {
	admin: Admin;
}

export interface NewAdminData {
	admin: Admin;
}

export const NewAdminDTOExtractor = (
	api_response: APIResponse<any>
): NewAdminDTO => {
	return api_response.result as NewAdminDTO;
};

export const NewAdminDTOTransformer = (
	dto_object: NewAdminDTO
): NewAdminData => {
	return dto_object;
};

interface UpdatedAdminDTO {
	admin: Admin;
}

export interface UpdatedAdminData {
	admin: Admin;
}

export const UpdatedAdminDTOExtractor = (
	api_response: APIResponse<any>
): UpdatedAdminDTO => {
	return api_response.result as UpdatedAdminDTO;
};

export const UpdatedAdminDTOTransformer = (
	dto_object: UpdatedAdminDTO
): UpdatedAdminData => {
	return dto_object;
};

type RemoveAdminsDTO = "SUCCESS" | "FAIL";

export type RemoveAdminsData = boolean;

export const AdminRemoveExtractor = (
	api_response: APIResponse<any>
): RemoveAdminsDTO => {
	return api_response.result as RemoveAdminsDTO;
};

export const AdminRemoveDTOTransformer = (
	dto_object: RemoveAdminsDTO
): RemoveAdminsData => {
	return dto_object == "SUCCESS";
};
