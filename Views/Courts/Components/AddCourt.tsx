import React, { FormEvent, useState } from "react";
import Popup from "@/Views/Components/Popup";

export interface newCourtData {
	name: string;
	location: string;
	sport: string;
	capacity: number;
}

interface Props {
	onClose: () => void;
	onSubmit: (courtData: newCourtData) => Promise<void>;
}

export default function AddCourtForm({ onClose, onSubmit }: Props) {
	const [formData, setFormData] = useState<newCourtData>({
		name: "",
		location: "",
		sport: "",
		capacity: 0,
	});

	const handleSubmit = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		onClose();
		onSubmit(formData);
		setFormData({ name: "", location: "", sport: "", capacity: 0 });
	};

	return (
		<>
			<Popup title="Add Court" onSubmit={handleSubmit} onClose={onClose}>
				<div className="top-section">
					<div className="popup-formInput">
						<label htmlFor="name">Court Name:</label>
						<input
							type="text"
							value={formData.name}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, name: e.target.value }))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="email">Sport Name:</label>
						<input
							type="text"
							value={formData.sport}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, sport: e.target.value }))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="email">Maximum Capacity:</label>
						<input
							type="number"
							value={formData.capacity}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									maxCapacity: Number(e.target.value),
								}))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="email">Location:</label>
						<input
							type="text"
							value={formData.location}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, location: e.target.value }))
							}
							required
						/>
					</div>
				</div>
				<div className="bottom-actions">
					<button type="submit" className="popup-btnAction">
						Add Court
					</button>
				</div>
			</Popup>
		</>
	);
}
