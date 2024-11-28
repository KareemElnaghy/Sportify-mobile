import PartyPost from "@/types/PartyPost";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import { default_PMHeader, PMHeader } from "../Components/HeaderPM";
import { newPartyData } from "@/Views/PartyPosts/Components/AddParty";
import { PostDetails } from "@/Views/PartyPosts/Components/EditParty";
export interface PMPartyPostsList {
	partyPostsList: PartyPost[];
	//sidebar
	pmSidebar: PMSidebar;
	// header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;

	onAddParty: (partyData: newPartyData) => void;
	onEditParty: (partyData: PostDetails) => void;
	onDelete: (index: number) => void;
	onDeleteSelected: () => void;
}

export const default_PMPartyPostsList: PMPartyPostsList = {
	partyPostsList: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	// header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},

	onAddParty: (partyData: newPartyData) => {},
	onEditParty: (partyData: PostDetails) => {},
	onDelete: (index: number) => {},
	onDeleteSelected: () => {},
};
