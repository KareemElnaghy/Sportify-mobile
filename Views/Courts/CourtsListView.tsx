import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import { useEffect, useState } from "react";

import "./CourtsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import Header from "@/Views/Components/Header";
import Courtslist from "@/Views/Courts/Components/Courtslist";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";
import AddCourtForm, { newCourtData } from "@/Views/Courts/Components/AddCourt";

interface propsType {
	pm: PMCourtsList;
}

export default function CourtsListView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Courts List";
	});

	const [isAddCourtPopupOpen, setIsAddCourtPopupOpen] = useState(false);
	useEffect(() => {
		queueMicrotask(() => {
			pm.currentSelection = Array(pm.courtsList.length).fill(false);
		});
	}, [pm.courtsList]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			{isAddCourtPopupOpen && (
				<AddCourtForm
					onClose={() => {
						setIsAddCourtPopupOpen(false);
					}}
					onSubmit={async (courtData: newCourtData) => {
						pm.onAddCourt(courtData);
					}}
				/>
			)}

			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle={"Courts List"} />
				<button
					className="add-court-btn"
					onClick={() => {
						setIsAddCourtPopupOpen(true);
					}}
				>
					ADD NEW COURT +{" "}
				</button>
				<button
					className="delete-selected-btn"
					onClick={() => {
						pm.onDeleteSelected();
					}}
				>
					DELETE SELECTED
				</button>
				<Courtslist pm={pm} />
			</div>
		</div>
	);
}
