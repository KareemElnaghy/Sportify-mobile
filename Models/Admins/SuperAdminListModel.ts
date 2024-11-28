import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import Admin from "@/types/Admin";
import { getSidebarModel, SidebarModel } from "../Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "../Components/HeaderModel";
import { AdminsListData } from "@/libs/APICommunicator/Admins/AdminsDTO";
import {
	addAdmin,
	getAdmins,
	removeAdmin,
} from "@/libs/APICommunicator/Admins/AdminsAPI";
import { newAdminData } from "@/Views/Admins/SuperAdmin/Components/AddAdmin";
import { ChangePasswordDetails } from "@/Views/Admins/SuperAdmin/Components/ChangePassword";

export interface SuperAdminModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	fetchedParams: {
		page: number;
		records: number;
		searchQuery: string;
	};

	adminsData: Admin[];
	setup: () => Promise<void>;

	fetchData: (isForceUpdate?: boolean) => Promise<void>;

	onAddAdmin: (admin: newAdminData) => Promise<void>;
	onAdminEdit: (passwordData: ChangePasswordDetails) => Promise<void>;
	onDelete: (index: number) => Promise<void>;
	onDeleteSelected: () => Promise<void>;

	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;
}

export function getSuperAdminModel(
	pm: () => PMSuperAdmin,
	router: any
): SuperAdminModel {
	const model: SuperAdminModel = {
		sidebarModel: null,
		headerModel: null,

		fetchedParams: {
			page: 0,
			records: 0,
			searchQuery: "",
		},

		adminsData: [], // write API to get admins but get only certain data,
		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 1);
			model.sidebarModel.setup();

			// pm.pmSidebar.linkNames = [
			// 	"Dashboard",
			// 	"Admins",
			// 	"Email",
			// 	"Profile",
			// 	"Settings",
			// ];
			// pm.pmSidebar.currentActive = 1;

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
			model.headerModel.setup();

			pm().onAddAdmin = model.onAddAdmin;
			pm().onAdminEdit = model.onAdminEdit;
			pm().onDeleteAdmin = model.onDelete;
			pm().onDeleteSelected = model.onDeleteSelected;

			model.fetchData();
		},

		fetchData: async function (isForceUpdate?: boolean): Promise<void> {
			const page = pm().pmHeader.currentPage;
			const recordsPerPage = pm().pmHeader.currentRecordsPerPage;
			const searchQuery = pm().pmHeader.currentSearchQuery;

			if (
				!isForceUpdate &&
				page == model.fetchedParams.page &&
				recordsPerPage == model.fetchedParams.records &&
				searchQuery == model.fetchedParams.searchQuery
			)
				return;

			const { adminsCount, adminsList }: AdminsListData = await getAdmins({
				page: page,
				recordsPerPage: recordsPerPage,
				searchQuery: searchQuery,
			});
			model.adminsData = adminsList;
			pm().adminslist = model.adminsData;

			model.fetchedParams = {
				page: page,
				records: recordsPerPage,
				searchQuery: searchQuery,
			};

			const pagesCount =
				adminsCount > 0 ? Math.ceil(adminsCount / recordsPerPage) : 1;
			if (model.headerModel) model.headerModel.setPagesCount(pagesCount);
			if (model.headerModel) model.headerModel.setCurrentPage(page);

			// const dummyData: Admin[] = [
			// 	{
			// 		email: "alice.johnson@example.com",
			// 		firstName: "Alice",
			// 		lastName: "Johnson",
			// 	},
			// 	{
			// 		email: "john.smith@example.com",
			// 		firstName: "John",
			// 		lastName: "Smith",
			// 	},
			// ];
		},

		onAddAdmin: async (admin: newAdminData) => {
			//query to add Admin to DB
			const newAdmin = await addAdmin({ admin: admin });

			//query to pull new admins
			model.fetchData(true);
		},
		onAdminEdit: async (passwordData: ChangePasswordDetails) => {
			// TODO: call api
		},

		onDelete: async (index: number) => {
			const emails = [pm().adminslist[index].email];

			const res = await removeAdmin({
				adminEmails: emails,
			});
			model.fetchData(true);
		},

		onDeleteSelected: async () => {
			const selectedAdmins = pm().adminslist.filter(
				(v, i) => pm().currentSelection[i]
			);
			const selectedEmails: string[] = selectedAdmins.map((v) => v.email);

			const res = await removeAdmin({
				adminEmails: selectedEmails,
			});
			model.fetchData(true);
		},

		onPageChange: () => {
			model.fetchData();
		},
		onRecordsPerPageChange: () => {
			model.fetchData();
		},
		onSearch: () => {
			model.fetchData();
		},
	};

	return model;
}
