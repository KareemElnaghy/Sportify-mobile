import { getProxyOnAttribute } from "@/hooks/useStateObject";

export interface PMHeader {
	pagesCount: number;
	currentPage: number;

	onPageChange: () => void;

	currentRecordsPerPage: number;
	onRecordsPerPageChange: () => void;

	currentSearchQuery: string;
	onSearchQueryChange: () => void;
}

export const default_PMHeader: PMHeader = {
	pagesCount: 1,
	currentPage: 1,
	onPageChange: () => {},

	currentRecordsPerPage: 10,
	onRecordsPerPageChange: () => {},

	currentSearchQuery: "",
	onSearchQueryChange: () => {},
};

export function getHeaderPM<T extends { pmHeader: PMHeader }>(pm: T): PMHeader {
	return getProxyOnAttribute(pm, pm.pmHeader, "pmHeader");
}
