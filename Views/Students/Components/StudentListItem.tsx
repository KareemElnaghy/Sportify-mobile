import Student from "@/types/Student";

interface StudentListProps {
	student: Student;
	selectionValue: boolean;
	onSelectionChange: (val: boolean) => void;
}

export default function StudentListItem({
	student,
	selectionValue,
	onSelectionChange,
}: StudentListProps) {
	return (
		<tr key={student.email}>
			<td>
				<input
					type="checkbox"
					checked={Boolean(selectionValue)}
					onChange={(e) => {
						onSelectionChange(e.target.checked);
					}}
				/>
			</td>
			<td>
				{student.firstName} {student.lastName}
			</td>
			<td>{student.email}</td>
			<td className={student.isBanned ? "status-banned" : "status-active"}>
				{student.isBanned ? "Banned" : "Active"}
			</td>
			<td>
				<button className={`ban-btn ${student.isBanned ? "disabled" : ""}`}>
					BAN
				</button>
				<button className={`unban-btn ${!student.isBanned ? "disabled" : ""}`}>
					UNBAN
				</button>
			</td>
		</tr>
	);
}
