import APIResponse from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";

interface PartyPostsListDTO {
	partyPostsCount: number;
	partyPostsList: PartyPost[];
}

export interface PartyPostsListData {
	partyPostsCount: number;
	partyPostsList: PartyPost[];
}

export const PartyPostsListDTOExtractor = (
	api_response: APIResponse<any>
): PartyPostsListDTO => {
	return api_response.result as PartyPostsListDTO;
};

export const PartyPostsListDTOTransformer = (
	dto_object: PartyPostsListDTO
): PartyPostsListData => {
	return dto_object;
};

interface PartyPostsItemDTO {
	partyPostsList: PartyPost[];
}

export interface PartyPostsItemData {
	partyPostsList: PartyPost[];
}

export const PartyPostsItemDTOExtractor = (
	api_response: APIResponse<any>
): PartyPostsItemDTO => {
	return api_response.result as PartyPostsItemDTO;
};

export const PartyPostsItemDTOTransformer = (
	dto_object: PartyPostsItemDTO
): PartyPostsItemData => {
	return dto_object;
};

interface NewPartyPostDTO {
	partyPost: PartyPost;
}

export interface NewPartyPostData {
	partyPost: PartyPost;
}

export const NewPartyPostDTOExtractor = (
	api_response: APIResponse<any>
): NewPartyPostDTO => {
	return api_response.result as NewPartyPostDTO;
};

export const NewPartyPostDTOTransformer = (
	dto_object: NewPartyPostDTO
): NewPartyPostData => {
	return dto_object;
};

interface UpdatedPartyPostDTO {
	partyPost: PartyPost;
}

export interface UpdatedPartyPostData {
	partyPost: PartyPost;
}

export const UpdatedPartyPostDTOExtractor = (
	api_response: APIResponse<any>
): UpdatedPartyPostDTO => {
	return api_response.result as UpdatedPartyPostDTO;
};

export const UpdatedPartyPostDTOTransformer = (
	dto_object: UpdatedPartyPostDTO
): UpdatedPartyPostData => {
	return dto_object;
};

type RemovePartyPostDTO = "SUCCESS" | "FAIL";

export type RemovePartyPostData = boolean;

export const RemovedPartyPostDTOExtractor = (
	api_response: APIResponse<any>
): RemovePartyPostDTO => {
	return api_response.result as RemovePartyPostDTO;
};

export const RemovedPartyPostDTOTransformer = (
	dto_object: RemovePartyPostDTO
): RemovePartyPostData => {
	return dto_object == "SUCCESS";
};
