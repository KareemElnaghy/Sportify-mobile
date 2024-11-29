import Admin, { NewAdmin, NewAdminIncomplete } from "@/types/Admin";
import { APIConnector } from "@/libs/APICommunicator/APIConnector";
import {
	AdminDTOExtractor,
	AdminDTOTransformer,
	AdminsItemData,
	AdminsItemDTOExtractor,
	AdminsItemDTOTransformer,
	AdminsListData,
	NewAdminData,
	NewAdminDTOExtractor,
	NewAdminDTOTransformer,
	RemoveAdminsData,
	UpdatedAdminDTOExtractor,
	UpdatedAdminDTOTransformer,
} from "./AdminsDTO";

interface getAdminsListData {
	page: number;
	recordsPerPage: number;
	searchQuery: string;
}
export async function getAdmins(
	data: getAdminsListData
): Promise<AdminsListData> {
	const response = await APIConnector.get("/api/adminAccounts/list", {
		page: `${data.page}`,
		recordsPerPage: `${data.recordsPerPage}`,
		...(data.searchQuery != "" && { searchQuery: data.searchQuery }),
	});
	const responseDTO = AdminDTOExtractor(response);
	const result = AdminDTOTransformer(responseDTO);
	return result;
}

interface getAdminsItemData {
	adminEmails: Admin["email"][];
}

export async function getAdminItems(
	data: getAdminsItemData
): Promise<AdminsItemData> {
	const response = await APIConnector.get("/api/adminAccounts", {
		studentEmails: data.adminEmails,
	});
	const responseDTO = AdminsItemDTOExtractor(response);
	const result = AdminsItemDTOTransformer(responseDTO);
	return result;
}

interface addAdminData {
	admin: NewAdmin;
}

export async function addAdmin(data: addAdminData): Promise<NewAdminData> {
	const response = await APIConnector.post(
		"/api/adminAccounts",
		{},
		{},
		{
			email: data.admin.email,
			firstName: data.admin.firstName,
			lastName: data.admin.lastName,
		}
	);
	const responseDTO = NewAdminDTOExtractor(response);
	const result = NewAdminDTOTransformer(responseDTO);
	return result;
}

interface updateAdminData {
	admin: NewAdminIncomplete;
}

export async function updateAdmin(
	data: updateAdminData
): Promise<NewAdminData> {
	const response = await APIConnector.put(
		"api/adminAccounts",
		{},
		{},
		{
			admin: data.admin,
		}
	);
	const responseDTO = UpdatedAdminDTOExtractor(response);
	const result = UpdatedAdminDTOTransformer(responseDTO);
	return result;
}

interface deleteAdminsData {
	adminEmails: Admin["email"][];
}

export async function removeAdmin(
	data: deleteAdminsData
): Promise<RemoveAdminsData> {
	const response = await APIConnector.delete(
		"api/adminAccounts",
		{},
		{},
		{ adminEmails: data.adminEmails }
	);
	return true;
}
