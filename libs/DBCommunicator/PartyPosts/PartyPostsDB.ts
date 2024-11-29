import PartyPost, {
	NewPartyPost,
	NewPartyPostIncomplete,
} from "@/types/PartyPost";
import prisma from "../prisma";
import {
	PartyPostDTOExtractor,
	PartyPostDTOTransformer,
	PartyPostsItemsDTOExtractor,
	PartyPostsItemsDTOTransformer,
	PartyPostsListDTOExtractor,
	PartyPostsListDTOTransformer,
} from "./PartyPostsDTO";

interface getPartyPostsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getPartyPost(
	data: getPartyPostsData
): Promise<PartyPost[]> {
	if (data.searchQuery == null) {
		const response = await prisma.partyPost.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = PartyPostsListDTOExtractor(response);
		const result = PartyPostsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.partyPost.findMany({
		where: {
			OR: [{ event_name: { contains: data.searchQuery, mode: "insensitive" } }],
		},
		orderBy: {
			event_name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = PartyPostsListDTOExtractor(response);
	const result = PartyPostsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getPartyPostsSize(): Promise<number> {
	const response = await prisma.partyPost.count();
	return response;
}

interface getPartyPostsItemsData {
	partyIds: PartyPost["id"][];
}

export async function db_getPartyPostItems(
	data: getPartyPostsItemsData
): Promise<PartyPost[]> {
	const response = await prisma.partyPost.findMany({
		where: {
			id: {
				in: data.partyIds,
			},
		},
	});
	const responseDTO = PartyPostsItemsDTOExtractor(response);
	const result = PartyPostsItemsDTOTransformer(responseDTO);
	return result;
}

interface addPartyPostsData {
	party: NewPartyPost;
}

export async function db_addPartyPost(
	data: addPartyPostsData
): Promise<PartyPost> {
	const response = await prisma.partyPost.create({
		data: {
			id: 15,
			owner_email: data.party.ownerEmail,
			event_name: data.party.eventName,
			sport: data.party.sport,
			court: data.party.location,
			start_time: data.party.startTime,
			end_time: data.party.endTime,
		},
	});
	const responseDTO = PartyPostDTOExtractor(response);
	const result = PartyPostDTOTransformer(responseDTO);
	return result;
}

interface editPartyPostsData {
	party: NewPartyPostIncomplete;
}

export async function db_editPartyPost(
	data: editPartyPostsData
): Promise<PartyPost> {
	const { id, ...updatedata } = data.party;
	const response = await prisma.partyPost.update({
		where: {
			id: id,
		},
		data: updatedata,
	});
	const responseDTO = PartyPostDTOExtractor(response);
	const result = PartyPostDTOTransformer(responseDTO);
	return result;
}

interface deletePartyPostsData {
	partyIds: PartyPost["id"][];
}

export async function db_deletePartyPost(
	data: deletePartyPostsData
): Promise<boolean> {
	const response = await prisma.partyPost.deleteMany({
		where: {
			id: {
				in: data.partyIds,
			},
		},
	});

	if (response.count >= data.partyIds.length) return true;
	else return false;
}
