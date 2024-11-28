import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import {
	getSidebarModel,
	SidebarModel,
} from "@/Models/Components/SidebarModel";
import { getHeaderModel, HeaderModel } from "@/Models/Components/HeaderModel";
import PartyPost from "@/types/PartyPost";
import {
	addPartyPost,
	getPartyPosts,
	removePartyPost,
	updatePartyPost,
} from "@/libs/APICommunicator/PartyPosts/PartyPostsAPI";
import { PartyPostsListData } from "@/libs/APICommunicator/PartyPosts/PartyPostsDTO";
import { newPartyData } from "@/Views/PartyPosts/Components/AddParty";
import { PostDetails } from "@/Views/PartyPosts/Components/EditParty";

export interface PartyPostsListModel {
	sidebarModel: SidebarModel | null;
	headerModel: HeaderModel | null;

	fetchedParams: {
		page: number;
		records: number;
		searchQuery: string;
	};

	partyPostssData: PartyPost[];
	setup: () => Promise<void>;

	fetchData: (isForceUpdate?: boolean) => Promise<void>;

	onPageChange: () => void;

	onRecordsPerPageChange: () => void;

	onSearch: () => void;

	onAddParty: (partyData: newPartyData) => Promise<void>;
	onEditParty: (partyData: PostDetails) => Promise<void>;
	onDelete: (index: number) => Promise<void>;
	onDeleteSelected: () => Promise<void>;
}

export function getPartyPostsListModel(
	pm: () => PMPartyPostsList,
	router: any
): PartyPostsListModel {
	const model: PartyPostsListModel = {
		partyPostssData: [],
		sidebarModel: null,
		headerModel: null,
		fetchedParams: {
			page: 0,
			records: 0,
			searchQuery: "",
		},
		setup: async () => {
			if (!model.sidebarModel)
				model.sidebarModel = getSidebarModel(pm, router, 4);
			model.sidebarModel.setup();

			if (!model.headerModel) model.headerModel = getHeaderModel(pm, model);
			model.headerModel.setup();

			pm().onAddParty = model.onAddParty;
			pm().onEditParty = model.onEditParty;
			pm().onDelete = model.onDelete;
			pm().onDeleteSelected = model.onDeleteSelected;

			model.fetchData();

			// setTimeout(() => {
			// 	pm().partyPostsList = [
			// 		{
			// 			id: 0,
			// 			ownerEmail: "1",
			// 			member: "another person",
			// 			eventName: "Wow",
			// 			sport: "Football",
			// 			location: "Basily",
			// 			description: "another thing",
			// 			startTime: new Date("2024-11-05T00:00:00Z"),
			// 			endTime: new Date("2024-11-05T00:00:00Z"),
			// 		},
			// 		{
			// 			id: 1,
			// 			ownerEmail: "2",
			// 			member: "7",
			// 			eventName: "Hello",
			// 			sport: "BasketBall",
			// 			location: "Artoc",
			// 			description: "smth",
			// 			startTime: new Date("2024-11-05T00:00:00Z"),
			// 			endTime: new Date("2024-11-05T00:00:00Z"),
			// 		},
			// 	];
			// }, 1000);
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

			const { partyPostsCount, partyPostsList }: PartyPostsListData =
				await getPartyPosts({
					page: page,
					recordsPerPage: recordsPerPage,
					searchQuery: searchQuery,
				});
			model.partyPostssData = partyPostsList;
			pm().partyPostsList = model.partyPostssData;

			model.fetchedParams = {
				page: page,
				records: recordsPerPage,
				searchQuery: searchQuery,
			};

			const pagesCount =
				partyPostsCount > 0 ? Math.ceil(partyPostsCount / recordsPerPage) : 1;
			if (model.headerModel) model.headerModel.setPagesCount(pagesCount);
			if (model.headerModel) model.headerModel.setCurrentPage(page);
		},
		onPageChange: function (): void {
			model.fetchData();
		},
		onRecordsPerPageChange: function (): void {
			model.fetchData();
		},
		onSearch: function (): void {
			model.fetchData();
		},
		onAddParty: async (partyData: newPartyData) => {
			const newParty = await addPartyPost({
				party: {
					ownerEmail: "",
					sport: "",
					eventName: partyData.name,
					startTime: new Date(partyData.meetingTime),
				},
			});
			model.fetchData(true);
		},
		onEditParty: async (partyData: PostDetails) => {
			const EditedParty = await updatePartyPost({
				party: partyData,
			});
			model.fetchData(true);
		},
		onDelete: async (index: number) => {
			const ids = [pm().partyPostsList[index].id];

			const res = await removePartyPost({
				partyIds: ids,
			});
			model.fetchData(true);
		},

		onDeleteSelected: async () => {
			const selectedPartys = pm().partyPostsList.filter(
				(v, i) => pm().currentSelection[i]
			);
			const selectedIds: number[] = selectedPartys.map((v) => v.id);

			const res = await removePartyPost({
				partyIds: selectedIds,
			});
			model.fetchData(true);
		},
	};

	return model;
}
