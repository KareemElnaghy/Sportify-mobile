import PartyPost from "@/types/PartyPost";
import { useEffect, useState } from "react";
import Image from "next/image";
import EditPartyForm, {
	PostDetails,
} from "@/Views/PartyPosts/Components/EditParty";

interface PartyPostsListItemProps {
	post: PartyPost;
	openEditPopupWithPost: () => void;
	selectionValue: boolean;
	onSelectionChange: (val: boolean) => void;
	onDelete: () => void;
}

export default function PartyPostsListItem({
	post,
	openEditPopupWithPost,
	selectionValue,
	onSelectionChange,
	onDelete,
}: PartyPostsListItemProps) {
	return (
		<tr>
			<td>
				<input
					type="checkbox"
					checked={Boolean(selectionValue)}
					onChange={(e) => {
						onSelectionChange(e.target.checked);
					}}
				/>
			</td>
			<td>{post.sport}</td>
			<td>5</td>
			<td>9</td>
			<td>{post.startTime.toString()}</td>
			<td>
				<button
					className="edit-btn"
					onClick={() => {
						openEditPopupWithPost();
					}}
				>
					<Image src="/edit.svg" alt="edit" width={30} height={30} />
				</button>
				<button
					className="delete-btn"
					onClick={() => {
						onDelete();
					}}
				>
					<Image src="/delete.svg" alt="delete" width={30} height={30} />
				</button>
			</td>
		</tr>
	);
}
