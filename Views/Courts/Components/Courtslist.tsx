import React, { useEffect, useState } from "react";
import "./CourtsListStyle.css";
import { PMCourtsList } from "@/PMs/Courts/CourtsListPM";
import Court from "@/types/Court";
import CourtsListItem from "./CourtsListItem";
import { useUpdateEffect } from "@/hooks/useUpdateEffect";

interface CourtsListProps {
	pm: PMCourtsList;
}

export default function CourtsList({ pm }: CourtsListProps) {
	const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

	useEffect(() => {
		const isAllSelected =
			pm.currentSelection.filter(Boolean).length == pm.courtsList.length;

		setSelectAllCheckbox(isAllSelected);
	}, [pm.currentSelection]);

	const handleSelectAll = (e: any) => {
		if (selectAllCheckbox) {
			pm.currentSelection = Array(pm.courtsList.length).fill(false);
		} else {
			pm.currentSelection = Array(pm.courtsList.length).fill(true);
		}

		pm.onSelectionChanged();
	};

	const handleSelectionChange = (index: number, newVal: boolean) => {
		let newCurrentSelection = [...pm.currentSelection];
		newCurrentSelection[index] = newVal;
		pm.currentSelection = newCurrentSelection;

		pm.onSelectionChanged();
	};

	useUpdateEffect(() => {
		pm.onSelectionChanged();
	}, [pm.currentSelection]);

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
					<th>Court Name</th>
					<th>Court Details</th>
					{/* <th>Action</th> */}
				</tr>
			</thead>
			<tbody>
				{pm.courtsList.map((court: Court, index: number) => (
					<CourtsListItem
						key={court.id}
						court={court}
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
