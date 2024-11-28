import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";
import { useEffect, useState } from "react";

import "./PartyPostsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import PartyPostsList from "@/Views/PartyPosts/Components/PartyPostsList";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";
import Header from "@/Views/Components/Header";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";
import EditPartyForm, { PostDetails } from "./Components/EditParty";
import PartyPost from "@/types/PartyPost";
import AddPartyForm, { newPartyData } from "./Components/AddParty";

interface propsType {
	pm: PMPartyPostsList;
}

export default function PartyPostsListView({ pm }: propsType) {
	const [isEditPartyPopupOpen, setIsEditPartyPopupOpen] =
		useState<null | PartyPost>(null);

	useEffect(() => {
		document.title = "Party Posts List";
	});

	useEffect(() => {
		queueMicrotask(() => {
			pm.currentSelection = Array(pm.partyPostsList.length).fill(false);
		});
	}, [pm.partyPostsList]);

	const openEditPopupWithPost = (post: PartyPost) => {
		setIsEditPartyPopupOpen(post);
	};
	const [isAddPartyPopupOpen, setIsAddPartyPopupOpen] = useState(false);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			{isEditPartyPopupOpen != null && (
				<EditPartyForm
					initialData={isEditPartyPopupOpen}
					onClose={() => {
						setIsEditPartyPopupOpen(null);
					}}
					onSubmit={async (partyData: PostDetails) => {
						pm.onEditParty(partyData);
					}}
				/>
			)}

			{isAddPartyPopupOpen && (
				<AddPartyForm
					onClose={() => {
						setIsAddPartyPopupOpen(false);
					}}
					onSubmit={async (partyData: newPartyData) => {
						pm.onAddParty(partyData);
					}}
				/>
			)}

			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle="Party Posts List" />
				<button
					className="add-party-btn"
					onClick={() => {
						setIsAddPartyPopupOpen(true);
					}}
				>
					ADD NEW PARTY +{" "}
				</button>
				<button
					className="delete-selected-btn"
					onClick={() => {
						pm.onDeleteSelected();
					}}
				>
					DELETE SELECTED
				</button>
				<PartyPostsList pm={pm} openEditPopupWithPost={openEditPopupWithPost} />
			</div>
		</div>
	);
}
