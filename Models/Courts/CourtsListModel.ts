import Court from "@/types/Court";
import {
	addCourt,
	getCourts,
	removeCourt,
} from "@/libs/APICommunicator/Courts/CourtsAPI";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import {
	getSidebarModel,
	SidebarModel,
} from "@/Models/Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "@/Models/Components/HeaderModel";
import { CourtsListData } from "@/libs/APICommunicator/Courts/CourtsDTO";
import { newCourtData } from "@/Views/Courts/Components/AddCourt";

export interface CourtsListModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	fetchedParams: {
		page: number;
		records: number;
		searchQuery: string;
	};

	courtsData: Court[];
	setup: () => Promise<void>;

	fetchData: (isForceUpdate?: boolean) => Promise<void>;

	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;

	onAddCourt: (court: newCourtData) => void;

	onDelete: (index: number) => Promise<void>;
	onDeleteSelected: () => Promise<void>;
}

export function getCourtsListModel(
	pm: () => PMCourtsList,
	router: any
): CourtsListModel {
	const model: CourtsListModel = {
		courtsData: [],
		sidebarModel: null,
		headerModel: null,

		fetchedParams: {
			page: 0,
			records: 0,
			searchQuery: "",
		},

		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 3);
			model.sidebarModel.setup();

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
			model.headerModel.setup();

			pm().onAddCourt = model.onAddCourt;
			pm().onDelete = model.onDelete;
			pm().onDeleteSelected = model.onDeleteSelected;

			model.fetchData();
		},

		fetchData: async (isForceUpdate: boolean = false) => {
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

			const { courtsCount, courtsList }: CourtsListData = await getCourts({
				page: page,
				recordsPerPage: recordsPerPage,
				searchQuery: searchQuery,
			});
			model.courtsData = courtsList;
			pm().courtsList = model.courtsData;

			model.fetchedParams = {
				page: page,
				records: recordsPerPage,
				searchQuery: searchQuery,
			};

			const pagesCount =
				courtsCount > 0 ? Math.ceil(courtsCount / recordsPerPage) : 1;
			if (model.headerModel) model.headerModel.setPagesCount(pagesCount);
			if (model.headerModel) model.headerModel.setCurrentPage(page);
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

		onAddCourt: async (court: newCourtData) => {
			const newCourt = await addCourt({ court: court });
			model.fetchData(true);
		},

		onDelete: async (index: number) => {
			const ids = [pm().courtsList[index].id];

			const res = await removeCourt({
				courtIds: ids,
			});
			model.fetchData(true);
		},

		onDeleteSelected: async () => {
			const selectedCourts = pm().courtsList.filter(
				(v, i) => pm().currentSelection[i]
			);
			const selectedIds: number[] = selectedCourts.map((v) => v.id);

			const res = await removeCourt({
				courtIds: selectedIds,
			});
			model.fetchData(true);
		},
	};

	return model;
}
