import Court, { NewCourt } from "@/types/Court";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import { default_PMHeader, PMHeader } from "@/PMs/Components/HeaderPM";
import { newCourtData } from "@/Views/Courts/Components/AddCourt";

export interface PMCourtsList {
	courtsList: Court[];
	//sidebar
	pmSidebar: PMSidebar;
	// header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;

	// add court
	onAddCourt: (court: newCourtData) => void;

	onDelete: (index: number) => void;
	onDeleteSelected: () => void;
}

export const default_PMCourtsList: PMCourtsList = {
	courtsList: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	// header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},

	// add court
	onAddCourt: (court: newCourtData) => {},

	// delete
	onDelete: () => {},
	onDeleteSelected: () => {},
};
