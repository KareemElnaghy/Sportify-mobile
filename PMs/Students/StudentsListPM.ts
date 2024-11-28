import Student from "@/types/Student";
import { default_PMSidebar, PMSidebar } from "../Components/SidebarPM";
import { default_PMHeader, PMHeader } from "../Components/HeaderPM";

export interface PMStudentList {
	studentsList: Student[];
	//sidebar
	pmSidebar: PMSidebar;
	// header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;

	onBanSelected: (isBanned: boolean) => void;
}

export const default_PMStudentList: PMStudentList = {
	studentsList: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	// header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},
	onBanSelected: (isBanned: boolean) => {},
};
