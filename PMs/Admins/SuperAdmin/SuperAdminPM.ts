import { default_PMHeader, PMHeader } from "@/PMs/Components/HeaderPM";
import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";
import Admin from "@/types/Admin";
import { newAdminData } from "@/Views/Admins/SuperAdmin/Components/AddAdmin";
import { ChangePasswordDetails } from "@/Views/Admins/SuperAdmin/Components/ChangePassword";

export interface PMSuperAdmin {
	adminslist: Admin[];
	//sidebar
	pmSidebar: PMSidebar;
	//header
	pmHeader: PMHeader;
	//selection
	currentSelection: boolean[];
	onSelectionChanged: () => void;
	//add admin
	onAddAdmin: (admin: newAdminData) => void;
	//edit admin password
	onAdminEdit: (passwordData: ChangePasswordDetails) => void;
	//delete
	onDeleteAdmin: (index: number) => void;
	onDeleteSelected: () => void;
}

export const default_PMSuperAdmin: PMSuperAdmin = {
	adminslist: [],
	//sidebar
	pmSidebar: default_PMSidebar,
	//header
	pmHeader: default_PMHeader,
	//selection
	currentSelection: [],
	onSelectionChanged: () => {},
	//add admin
	onAddAdmin: (admin: newAdminData) => {},
	//edit admin password
	onAdminEdit: (passwordData: ChangePasswordDetails) => {},
	//delete
	onDeleteAdmin: (index: number) => {},
	onDeleteSelected: () => {},
};
