import React, { FormEvent, useState } from "react";
import Popup from "@/Views/Components/Popup";

export interface newAdminData {
	email: string;
	firstName: string;
	lastName: string;
}

interface Props {
	onClose: () => void;
	onSubmit: (adminData: newAdminData) => Promise<void>;
}

export default function AddAdminForm({ onClose, onSubmit }: Props) {
	const [formData, setFormData] = useState<newAdminData>({
		email: "",
		firstName: "",
		lastName: "",
	});

	const handleSubmit = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		const submissionData: newAdminData = formData;
		onClose(); // Close the pop-up after submit
		onSubmit(submissionData);
		setFormData({ email: "", firstName: "", lastName: "" }); // Clear form fields after submission
	};

	return (
		<>
			<Popup title="Add Admin" onSubmit={handleSubmit} onClose={onClose}>
				<div className="top-section">
					<div className="popup-formInput">
						<label htmlFor="email">AUC Email:</label>
						<input
							type="email"
							id="email"
							value={formData.email}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, email: e.target.value }))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="name">First Name:</label>
						<input
							type="text"
							id="name"
							value={formData.firstName}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, firstName: e.target.value }))
							}
							required
						/>
					</div>

					<div className="popup-formInput">
						<label htmlFor="name">Last Name:</label>
						<input
							type="text"
							id="name"
							value={formData.lastName}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, lastName: e.target.value }))
							}
							required
						/>
					</div>
				</div>
				<div className="bottom-actions">
					<button type="submit" className="popup-btnAction">
						Add Admin
					</button>
				</div>
			</Popup>
		</>
	);
}
