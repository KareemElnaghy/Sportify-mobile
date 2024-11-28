import { default_PMSidebar, PMSidebar } from "@/PMs/Components/SidebarPM";

export interface PMAdminSettings {
    pmSidebar: PMSidebar;
    username: string;
    email: string;
    password: string;
    fullName: string;
    title: string;
    onUpdateProfile: () => void;

}

export const default_PMAdminSettings: PMAdminSettings = {
    pmSidebar: default_PMSidebar,
    onUpdateProfile: () => {},
    username: "",
    email: "",
    password: "",
    fullName: "",
    title: "",
};
