import React, { useEffect, useState } from "react";
import "./StudentListStyle.css";
import { PMStudentList } from "@/PMs/Students/StudentsListPM";
import Student from "@/types/Student";
import StudentListItem from "@/Views/Students/Components/StudentListItem";

interface StudentListProps {
	pm: PMStudentList;
}

// export default function StudentList({
export default function StudentList({ pm }: StudentListProps) {
	const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

	useEffect(() => {
		const isAllSelected =
			pm.currentSelection.filter(Boolean).length == pm.studentsList.length;

		setSelectAllCheckbox(isAllSelected);
	}, [pm.currentSelection]);

	const handleSelectAll = (e: any) => {
		if (selectAllCheckbox) {
			pm.currentSelection = Array(pm.studentsList.length).fill(false);
		} else {
			pm.currentSelection = Array(pm.studentsList.length).fill(true);
		}

		setSelectAllCheckbox(e.target.checked);
	};

	const handleSelectionChange = (index: number, newVal: boolean) => {
		let newCurrentSelection = [...pm.currentSelection];
		newCurrentSelection[index] = newVal;
		pm.currentSelection = newCurrentSelection;

		pm.onSelectionChanged();
	};
	return (
		<table>
			<thead>
				<tr>
					<th>
						<input
							type="checkbox"
							checked={selectAllCheckbox}
							onChange={handleSelectAll}
						/>
					</th>
					<th>Full Name</th>
					<th>AUC Email</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{pm.studentsList.map((student: Student, index: number) => (
					<StudentListItem
						key={student.email}
						student={student}
						selectionValue={pm.currentSelection[index]}
						onSelectionChange={(newVal) => {
							handleSelectionChange(index, newVal);
						}}
					/>
				))}
			</tbody>
		</table>
	);
}
