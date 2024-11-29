import PartyPost, {
	NewPartyPost,
	NewPartyPostIncomplete,
} from "@/types/PartyPost";
import { APIConnector } from "../APIConnector";
import {
	NewPartyPostData,
	NewPartyPostDTOExtractor,
	NewPartyPostDTOTransformer,
	PartyPostsItemData,
	PartyPostsItemDTOTransformer,
	PartyPostsListData,
	PartyPostsListDTOExtractor,
	PartyPostsListDTOTransformer,
	RemovedPartyPostDTOExtractor,
	RemovedPartyPostDTOTransformer,
	RemovePartyPostData,
	UpdatedPartyPostData,
	UpdatedPartyPostDTOExtractor,
	UpdatedPartyPostDTOTransformer,
} from "./PartyPostsDTO";

const endpoints = {
	list: "/api/partyPosts/list",
	default: "/api/partyPosts",
};

interface getPartyPostsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getPartyPosts(
	data: getPartyPostsData
): Promise<PartyPostsListData> {
	const response = await APIConnector.get(endpoints.list, {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }), // optional param only added if not empty
	});
	const responseDTO = PartyPostsListDTOExtractor(response);
	const result = PartyPostsListDTOTransformer(responseDTO);
	return result;
}

interface getPartyPostsItemData {
	partyIds: PartyPost["id"][];
}

export async function getPartyPostItems(
	data: getPartyPostsItemData
): Promise<PartyPostsItemData> {
	const response = await APIConnector.get(endpoints.default, {
		partyIds: data.partyIds.map((id) => `${id}`),
	});
	const responseDTO = PartyPostsListDTOExtractor(response);
	const result = PartyPostsItemDTOTransformer(responseDTO);
	return result;
}

interface addPartyPostData {
	party: NewPartyPost;
}

export async function addPartyPost(
	data: addPartyPostData
): Promise<NewPartyPostData> {
	const response = await APIConnector.post(
		endpoints.default,
		{},
		{},
		{
			ownerEmail: data.party.ownerEmail,
			eventName: data.party.eventName,
			sport: data.party.sport,
			...(data.party.location && { location: data.party.location }),
			...(data.party.startTime && { startTime: data.party.startTime }),
			...(data.party.endTime && { endTime: data.party.endTime }),
		}
	);
	const responseDTO = NewPartyPostDTOExtractor(response);
	const result = NewPartyPostDTOTransformer(responseDTO);
	return result;
}

interface updatePartyPostData {
	party: NewPartyPostIncomplete;
}

export async function updatePartyPost(
	data: updatePartyPostData
): Promise<UpdatedPartyPostData> {
	const response = await APIConnector.put(
		endpoints.default,
		{},
		{},
		{
			id: data.party.id,
			...(data.party.ownerEmail && { ownerEmail: data.party.ownerEmail }),
			...(data.party.eventName && { eventName: data.party.eventName }),
			...(data.party.sport && { sport: data.party.sport }),
			...(data.party.location && { location: data.party.location }),
			...(data.party.startTime && { startTime: data.party.startTime }),
			...(data.party.endTime && { endTime: data.party.endTime }),
		}
	);
	const responseDTO = UpdatedPartyPostDTOExtractor(response);
	const result = UpdatedPartyPostDTOTransformer(responseDTO);
	return result;
}

interface deletePartyPostsData {
	partyIds: PartyPost["id"][];
}

export async function removePartyPost(
	data: deletePartyPostsData
): Promise<RemovePartyPostData> {
	const response = await APIConnector.delete(
		endpoints.default,
		{},
		{},
		{ partyIds: data.partyIds }
	);
	const responseDTO = RemovedPartyPostDTOExtractor(response);
	const result = RemovedPartyPostDTOTransformer(responseDTO);
	return result;
}
