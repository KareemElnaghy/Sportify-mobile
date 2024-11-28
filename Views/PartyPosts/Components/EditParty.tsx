import React, { FormEvent, useEffect, useState } from "react";
import Popup from "@/Views/Components/Popup";
import PartyPost from "@/types/PartyPost";

export interface PostDetails {
	id: number;
	name: string;
	signUps: number;
	location: string;
	capacity: number;
}

interface Props {
	initialData: PartyPost;
	onClose: () => void;
	onSubmit: (partyData: PostDetails) => Promise<void>;
}

export default function EditPartyForm({
	initialData,
	onClose,
	onSubmit,
}: Props) {
	const [formData, setFormData] = useState<PostDetails>({
		id: 0,
		name: "",
		signUps: 0,
		location: "",
		capacity: 0,
	});

	useEffect(() => {
		setFormData({
			id: initialData.id,
			name: initialData.sport,
			signUps: 0,
			location: initialData.location,
			capacity: 0, // TODO: Add capacity to PartyPost type
		});
	}, []);

	const handleSubmit = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		onSubmit(formData);
		onClose(); // Close the pop-up after submit
		setFormData({ id: 0, name: "", signUps: 0, location: "", capacity: 0 }); // Clear form fields after submission
	};

	return (
		<>
			<Popup title="Post Details" onSubmit={handleSubmit} onClose={onClose}>
				<div className="top-section">
					<div className="popup-formInput">
						<label htmlFor="name">Sport Name:</label>
						<input
							type="text"
							id="name"
							value={formData.name}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, name: e.target.value }))
							}
							required
						/>
					</div>

					{/* <div className="popup-formInput">
						<label htmlFor="signUps">Current SignUps:</label>
						<input
							type="number"
                            id="signUps"
                            value={signUps}
                            onChange={(e) => setSignUps(Number(e.target.value))}
                            required
						/>
					</div> */}

					<div className="popup-formInput">
						<label htmlFor="location">Court Location:</label>
						<input
							type="text"
							id="location"
							value={formData.location}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, name: e.target.value }))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="capacity">Party Capacity:</label>
						<input
							type="number"
							id="capacity"
							value={formData.capacity}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, name: e.target.value }))
							}
							required
						/>
					</div>
				</div>
				<div className="bottom-actions">
					<button type="submit" className="popup-btnAction">
						Save Changes
					</button>
				</div>
			</Popup>
		</>
	);
}
