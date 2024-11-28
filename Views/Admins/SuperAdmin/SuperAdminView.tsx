import { PMSuperAdmin } from "@/PMs/Admins/SuperAdmin/SuperAdminPM";
import { useEffect, useState } from "react";

import "./SuperAdminStyle.css";
import Sidebar from "@/Views/Components/Sidebar";
import AdminList from "@/Views/Admins/SuperAdmin/Components/AdminList";
import AddAdminForm, {
	newAdminData,
} from "@/Views/Admins/SuperAdmin/Components/AddAdmin";
import ChangePasswordForm, {
	ChangePasswordDetails,
} from "@/Views/Admins/SuperAdmin/Components/ChangePassword";
import Header from "@/Views/Components/Header";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";
import { getHeaderPM } from "@/PMs/Components/HeaderPM";

interface propsType {
	pm: PMSuperAdmin;
}

export default function SuperAdminView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Admins List";
	});

	const [isChangePasswordPopupOpen, setIsChangePasswordPopupOpen] =
		useState(false);
	const [isAddAdminPopupOpen, setIsAddAdminPopupOpen] = useState(false);

	useEffect(() => {
		queueMicrotask(() => {
			pm.currentSelection = Array(pm.adminslist.length).fill(false);
		});
	}, [pm.adminslist]);

	const openEditPasswordPopup = () => {
		setIsChangePasswordPopupOpen(true);
	};

	const handleDeleteSelected = () => {
		pm.onDeleteSelected();
	};

	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			{isAddAdminPopupOpen && (
				<AddAdminForm
					onClose={() => {
						setIsAddAdminPopupOpen(false);
					}}
					onSubmit={async (adminData: newAdminData) => {
						pm.onAddAdmin(adminData);
					}}
				/>
			)}

			{isChangePasswordPopupOpen && (
				<ChangePasswordForm
					onClose={() => {
						setIsChangePasswordPopupOpen(false);
					}}
					onSubmit={async (passwordData: ChangePasswordDetails) => {
						// pm.onAddAdmin();
					}}
				/>
			)}

			<div className="main-content">
				<Header pm={getHeaderPM(pm)} pageTitle={"Admins List"} />
				<button
					className="add-admin-btn"
					onClick={() => {
						setIsAddAdminPopupOpen(true);
					}}
				>
					ADD NEW ADMIN +{" "}
				</button>
				<button
					className="delete-selected-btn"
					onClick={() => {
						handleDeleteSelected();
					}}
				>
					DELETE SELECTED
				</button>
				<AdminList pm={pm} openEditPasswordPopup={openEditPasswordPopup} />
			</div>
		</div>
	);
}
