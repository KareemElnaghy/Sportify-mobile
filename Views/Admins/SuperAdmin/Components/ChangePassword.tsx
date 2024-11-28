import React, { FormEvent, useEffect, useState } from "react";
import Popup from "@/Views/Components/Popup";

export interface ChangePasswordDetails {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

interface Props {
    onClose: () => void;
    onSubmit: (passwordData: ChangePasswordDetails) => Promise<void>;
}

export default function ChangePasswordForm({onClose, onSubmit,}: Props) 
{
    const [formData, setFormData] = useState<ChangePasswordDetails>({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        onSubmit(formData);
        onClose(); // Close the pop-up after submit
        setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" }); // Clear form fields after submission
    };

    return(
        <>
            <Popup title="Change Admin Password" onSubmit={handleSubmit} onClose={onClose}>
                <div className="top-section">
                    <div className="popup-formInput">
                        <label htmlFor="oldPassword">Old Password:</label>
                        <input
                            type="text"
                            id="oldPassword"
                            value={formData.oldPassword}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, oldPassword: e.target.value }))
                            }
                            required
                        />
                    </div>

                    <div className="popup-formInput">
                        <label htmlFor="newPassword">New Password:</label>
                        <input
                            type="text"
                            id="newPassword"
                            value={formData.newPassword}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
                            }
                            required
                        />
                    </div>

                    <div className="popup-formInput">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="text"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                            }
                            required
                        />
                    </div>
                </div>
                <div className="bottom-actions">
                    <button type="submit" className="popup-btnAction">
                        Update Password
                    </button>
                </div>
            </Popup>
        </>
    );
}