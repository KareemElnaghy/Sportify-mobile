import Admin, { NewAdmin, NewAdminIncomplete } from "@/types/Admin";
import prisma from "../prisma";
import {
	AdminDTOExtractor,
	AdminDTOTransformer,
	AdminsItemsDTOExtractor,
	AdminsItemsDTOTransformer,
	AdminsListDTOExtractor,
	AdminsListDTOTransformer,
} from "./AdminsDTO";

interface getAdminsData {
	page: number;
	recordsPerPage: number;
	searchQuery: string | null;
}

export async function db_getAdmins(data: getAdminsData): Promise<Admin[]> {
	if (data.searchQuery == null) {
		const response = await prisma.admin.findMany({
			skip: (data.page - 1) * data.recordsPerPage,
			take: data.recordsPerPage,
		});
		const responseDTO = AdminsListDTOExtractor(response);
		const result = AdminsListDTOTransformer(responseDTO);
		return result;
	}

	const response = await prisma.admin.findMany({
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
	const responseDTO = AdminsListDTOExtractor(response);
	const result = AdminsListDTOTransformer(responseDTO);
	return result;
}

export async function db_getAdminsSize(): Promise<number> {
	const response = await prisma.admin.count();
	return response;
}

interface getAdminsItemsData {
	adminEmails: Admin["email"][];
}

export async function db_getAdminItems(
	data: getAdminsItemsData
): Promise<Admin[]> {
	const response = await prisma.admin.findMany({
		where: {
			email: {
				in: data.adminEmails,
			},
		},
	});
	const responseDTO = AdminsItemsDTOExtractor(response);
	const result = AdminsItemsDTOTransformer(responseDTO);
	return result;
}

interface addAdminsData {
	admin: NewAdmin;
}

export async function db_addAdmin(data: addAdminsData): Promise<Admin> {
	const response = await prisma.admin.create({
		data: {
			email: data.admin.email,
			first_name: data.admin.firstName,
			last_name: data.admin.lastName,
			pass_hash: "",
			is_super: false,
		},
	});
	const responseDTO = AdminDTOExtractor(response);
	const result = AdminDTOTransformer(responseDTO);
	return result;
}

interface editAdminsData {
	admin: NewAdminIncomplete;
}

export async function db_editAdmin(data: editAdminsData): Promise<Admin> {
	const { email, ...updatedata } = data.admin;
	const response = await prisma.admin.update({
		where: {
			email: email,
		},
		data: updatedata,
	});
	const responseDTO = AdminDTOExtractor(response);
	const result = AdminDTOTransformer(responseDTO);
	return result;
}

interface deleteAdminsData {
	adminEmails: Admin["email"][];
}

export async function db_deleteAdmin(data: deleteAdminsData): Promise<boolean> {
	const response = await prisma.admin.deleteMany({
		where: {
			email: {
				in: data.adminEmails,
			},
		},
	});

	if (response.count >= data.adminEmails.length) return true;
	else return false;
}
