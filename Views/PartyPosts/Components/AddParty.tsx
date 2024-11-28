import React, { FormEvent, useState } from "react";
import Popup from "@/Views/Components/Popup";

export interface newPartyData {
	name: string;
	maxLimit: number;
	meetingTime: string;
}

interface Props {
	onClose: () => void;
	onSubmit: (partyData: newPartyData) => Promise<void>;
}

export default function AddPartyForm({ onClose, onSubmit }: Props) {
	const [formData, setFormData] = useState<newPartyData>({
		name: "",
		maxLimit: 0,
		meetingTime: "10:00",
	});

	const handleSubmit = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		onClose(); // Close the pop-up after submit
		onSubmit(formData);
		setFormData({ name: "", maxLimit: 0, meetingTime: "" }); // Clear form fields after submission
	};

	return (
		<>
			<Popup title="Add Party" onSubmit={handleSubmit} onClose={onClose}>
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

					<div className="popup-formInput">
						<label htmlFor="maxLimit">Max Limit:</label>
						<input
							type="number"
							id="maxLimit"
							value={formData.maxLimit}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									maxLimit: parseInt(e.target.value),
								}))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="meetingTime">Meeting Time:</label>
						<input
							type="time"
							id="meetingTime"
							value={formData.meetingTime}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									meetingTime: e.target.value,
								}))
							}
							required
						/>
					</div>
				</div>
				<div className="bottom-actions">
					<button type="submit" className="popup-btnAction">
						Add Party
					</button>
				</div>
			</Popup>
		</>
	);
}
