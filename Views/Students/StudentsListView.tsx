import { PMStudentList } from "@/PMs/Students/StudentsListPM";
import { useEffect } from "react";

import "./StudentsListStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import StudentList from "@/Views/Students/Components/StudentList";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";
import Header from "@/Views/Components/Header";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";

interface propsType {
	pm: PMStudentList;
}

export default function StudentsListView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Students List";
	});

	useEffect(() => {
		queueMicrotask(() => {
			pm.currentSelection = Array(pm.studentsList.length).fill(false);
		});
	}, [pm.studentsList]);

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle="Students List" />
				<button
					className="delete-selected-btn"
					onClick={() => {
						pm.onBanSelected(true); // FIXME: dynamic bool
					}}
				>
					BAN SELECTED
				</button>
				<StudentList pm={pm} />
			</div>
		</div>
	);
}
