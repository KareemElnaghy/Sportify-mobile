import { PMHeader } from "@/PMs/Components/HeaderPM";

interface PageWithHeader {
	pmHeader: PMHeader;
}

interface ParentModel {
	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;
}

export interface HeaderModel {
	setup: () => Promise<void>;
	onPageChange: () => void;
	onRecordsPerPageChange: () => void;
	onSearch: () => void;

	setPagesCount: (newPagesCount: number) => void;
	setCurrentPage: (newCurrentPage: number) => void;
}

export function getHeaderModel<T extends PageWithHeader, S extends ParentModel>(
	pagePM: () => T,
	parentModel: S
): HeaderModel {
	const model: HeaderModel = {
		setup: async () => {
			const newHeaderPM: PMHeader = pagePM().pmHeader;
			newHeaderPM.onPageChange = model.onPageChange;
			newHeaderPM.onRecordsPerPageChange = model.onRecordsPerPageChange;
			newHeaderPM.onSearchQueryChange = model.onSearch;
			pagePM().pmHeader = newHeaderPM;
		},
		onPageChange: () => {
			parentModel.onPageChange();
		},
		onRecordsPerPageChange: () => {
			parentModel.onRecordsPerPageChange();
		},
		onSearch: () => {
			parentModel.onSearch();
		},

		setPagesCount: (newPagesCount: number) => {
			const newHeaderPM: PMHeader = pagePM().pmHeader;
			newHeaderPM.pagesCount = newPagesCount;
			pagePM().pmHeader = newHeaderPM;
			// possibly clear the currentPage to 1
		},
		setCurrentPage: (newCurrentPage: number) => {
			pagePM().pmHeader = { ...pagePM().pmHeader, currentPage: newCurrentPage };
		},
	};

	return model;
}
