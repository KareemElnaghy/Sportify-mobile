import { PMSidebar } from "@/PMs/Components/SidebarPM";

interface PageWithSidebar {
	pmSidebar: PMSidebar;
}

export interface SidebarModel {
	setup: () => Promise<void>;
	onLinkFollowed: (index: number) => void;
}

export function getSidebarModel<T extends PageWithSidebar>(
	pagePM: () => T,
	router: any,
	currentActive: number
): SidebarModel {
	const model: SidebarModel = {
		setup: async () => {
			const newSidebarPM: PMSidebar = pagePM().pmSidebar;
			newSidebarPM.iconPaths = [
				"/home.svg",
				"/admins.svg",
				"/students-list.svg",
				"/checkbox.svg",
				"/checkbox.svg",
				"/checkbox.svg",
				"/mail.svg",
				"/settings.svg",
				"/logout.svg",
			];
			newSidebarPM.linkNames = [
				"Dashboard",
				"Admins",
				"Students List",
				"Courts List",
				"Party Posts List",
				"Reservations List",
				"Email",
				"Settings",
				"Log Out",
			];
			newSidebarPM.currentActive = currentActive;
			newSidebarPM.onLinkFollowed = model.onLinkFollowed;
			pagePM().pmSidebar = newSidebarPM;
		},
		onLinkFollowed: (index: number) => {
			// fill the routing
			switch (pagePM().pmSidebar.linkNames[index]) {
				case "Admins":
					router.push("/admin/superadmin");
					break;
				case "Students List":
					router.push("/admin/students");
					break;
				case "Courts List":
					router.push("/admin/courts");
					break;
				case "Party Posts List":
					router.push("/admin/partyposts");
					break;

				default:
					break;
			}
		},
	};

	return model;
}
