import Student from "@/types/Student";
import { APIConnector } from "../APIConnector";
import {
	RemoveStudentData,
	StudentsItemData,
	StudentsItemDTOExtractor,
	StudentsItemDTOTransformer,
	StudentsListData,
	StudentsListDTOExtractor,
	StudentsListDTOTransformer,
} from "./StudentsDTO";

interface getStudentsListData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}

export async function getStudents(
	data: getStudentsListData
): Promise<StudentsListData> {
	const response = await APIConnector.get("/api/students/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }),
	});
	const responseDTO = StudentsListDTOExtractor(response);
	const result = StudentsListDTOTransformer(responseDTO);
	return result;
}

interface getStudentsItemData {
	studentEmails: Student["email"][];
}

export async function getStudentItems(
	data: getStudentsItemData
): Promise<StudentsItemData> {
	const response = await APIConnector.get("/api/students", {
		studentEmails: data.studentEmails,
	});
	const responseDTO = StudentsItemDTOExtractor(response);
	const result = StudentsItemDTOTransformer(responseDTO);
	return result;
}

interface deleteStudentsData {
	isBanned: boolean;
	studentEmails: Student["email"][];
}

export async function removeStudent(
	data: deleteStudentsData
): Promise<RemoveStudentData> {
	const response = await APIConnector.delete(
		"api/students",
		{},
		{},
		{ isBanned: data.isBanned, studentEmails: data.studentEmails }
	);
	return true;
}
