import Court, { NewCourt, NewCourtIncomplete } from "@/types/Court";
import prisma from "../prisma";
import {
	CourtDTOExtractor,
	CourtDTOTransformer,
	CourtsItemsDTOExtractor,
	CourtsItemsDTOTransformer,
	CourtsListDTOExtractor,
	CourtsListDTOTransformer,
} from "./CourtsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getCourts(data: getCourtsData): Promise<Court[]> {
	if (data.searchQuery == null) {
		const response = await prisma.court.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = CourtsListDTOExtractor(response);
		const result = CourtsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.court.findMany({
		where: {
			OR: [
				{ name: { contains: data.searchQuery, mode: "insensitive" } },
				// { description: { contains: data.searchQuery, mode: "insensitive" } },
				// { sport: { contains: data.searchQuery, mode: "insensitive" } },
				// { location: { contains: data.searchQuery, mode: "insensitive" } },
			],
		},
		orderBy: {
			name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = CourtsListDTOExtractor(response);
	const result = CourtsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getCourtsSize(): Promise<number> {
	const response = await prisma.court.count();
	return response;
}

interface getCourtsItemsData {
	courtIds: Court["id"][];
}

export async function db_getCourtItems(
	data: getCourtsItemsData
): Promise<Court[]> {
	const response = await prisma.court.findMany({
		where: {
			id: {
				in: data.courtIds,
			},
		},
	});
	const responseDTO = CourtsItemsDTOExtractor(response);
	const result = CourtsItemsDTOTransformer(responseDTO);
	return result;
}

interface addCourtsData {
	court: NewCourt;
}

export async function db_addCourt(data: addCourtsData): Promise<Court> {
	const response = await prisma.court.create({
		data: {
			id: 15, // FIXME:
			name: data.court.name,
			sport: data.court.sport,
			location: data.court.location ?? "",
			description: data.court.description ?? "",
		},
	});
	const responseDTO = CourtDTOExtractor(response);
	const result = CourtDTOTransformer(responseDTO);
	return result;
}

interface editCourtsData {
	court: NewCourtIncomplete;
}

export async function db_editCourt(data: editCourtsData): Promise<Court> {
	const { id, ...updatedata } = data.court;
	const response = await prisma.court.update({
		where: {
			id: id,
		},
		data: updatedata,
	});
	const responseDTO = CourtDTOExtractor(response);
	const result = CourtDTOTransformer(responseDTO);
	return result;
}

interface deleteCourtsData {
	courtIds: Court["id"][];
}

export async function db_deleteCourt(data: deleteCourtsData): Promise<boolean> {
	const response = await prisma.court.deleteMany({
		where: {
			id: {
				in: data.courtIds,
			},
		},
	});

	if (response.count >= data.courtIds.length) return true;
	else return false;
}
