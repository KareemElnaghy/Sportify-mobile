import prisma from "../prisma";
import Student, { NewStudent, NewStudentIncomplete } from "@/types/Student";
import {
	StudentDTOExtractor,
	StudentDTOTransformer,
	StudentsItemsDTOExtractor,
	StudentsItemsDTOTransformer,
	StudentsListDTOExtractor,
	StudentsListDTOTransformer,
} from "./StudentsDTO";

interface getCourtsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getStudents(data: getCourtsData): Promise<Student[]> {
	if (data.searchQuery == null) {
		const response = await prisma.student.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = StudentsListDTOExtractor(response);
		const result = StudentsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.student.findMany({
		where: {
			OR: [
				{ first_name: { contains: data.searchQuery, mode: "insensitive" } },
				{ last_name: { contains: data.searchQuery, mode: "insensitive" } },
			],
		},
		orderBy: {
			first_name: "asc",
			last_name: "asc",
		},
		skip: (data.page - 1) * data.recordsPerPage,
		take: data.recordsPerPage,
	});
	const responseDTO = StudentsListDTOExtractor(response);
	const result = StudentsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getStudentsSize(): Promise<number> {
	const response = await prisma.student.count();
	return response;
}

interface getStudentsItemsData {
	studentEmails: Student["email"][];
}

export async function db_getStudentItems(
	data: getStudentsItemsData
): Promise<Student[]> {
	const response = await prisma.student.findMany({
		where: {
			email: {
				in: data.studentEmails,
			},
		},
	});
	const responseDTO = StudentsItemsDTOExtractor(response);
	const result = StudentsItemsDTOTransformer(responseDTO);
	return result;
}

interface addStudentsData {
	student: NewStudent;
}

export async function db_addStudent(data: addStudentsData): Promise<Student> {
	const response = await prisma.student.create({
		data: {
			email: data.student.email,
			first_name: data.student.firstName,
			last_name: data.student.lastName,
			photo_link: null,
			is_trainer: false,
			phone_number: "",
			is_banned: false,
		},
	});
	const responseDTO = StudentDTOExtractor(response);
	const result = StudentDTOTransformer(responseDTO);
	return result;
}

interface editStudentsData {
	student: NewStudentIncomplete;
}

export async function db_editStudent(data: editStudentsData): Promise<Student> {
	const { email, ...updatedata } = data.student;
	const response = await prisma.admin.update({
		where: {
			email: email,
		},
		data: updatedata,
	});
	const responseDTO = StudentDTOExtractor(response);
	const result = StudentDTOTransformer(responseDTO);
	return result;
}

interface deleteStudentsData {
	isBanned: boolean;
	studentEmails: Student["email"][];
}

export async function db_banStudent(
	data: deleteStudentsData
): Promise<boolean> {
	const response = await prisma.student.updateMany({
		where: {
			email: {
				in: data.studentEmails,
			},
		},
		data: {
			is_banned: data.isBanned,
		},
	});

	if (response.count >= data.studentEmails.length) return true;
	else return false;
}
