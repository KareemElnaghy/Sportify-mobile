import { useEffect } from "react";
import "./AdminSettingsStyle.css";
import { PMAdminSettings } from "@/PMs/Admins/Settings/SettingsPM";
import Sidebar from "@/Views/Components/Sidebar";
import { getSidebarPM } from "@/PMs/Components/SidebarPM";

interface propsType {
	pm: PMAdminSettings;
}

export default function AdminSettingsView({ pm }: propsType) {
	useEffect(() => {
		document.title = "Admin Settings";
	});
	return (
		<div className="container">
			<Sidebar pm={getSidebarPM(pm)} />
			<div className="main-content">
				
			</div>
		</div>
	);
	
}

