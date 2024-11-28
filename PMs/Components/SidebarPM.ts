import { getProxyOnAttribute } from "@/hooks/useStateObject";

export interface PMSidebar {
	iconPaths: string[];
	linkNames: string[];
	currentActive: number;
	onLinkFollowed: (index: number) => void;
}

export const default_PMSidebar: PMSidebar = {
	iconPaths: [],
	linkNames: [],
	currentActive: 0,
	onLinkFollowed: (index: number) => {},
};

export function getSidebarPM<T extends { pmSidebar: PMSidebar }>(
	pm: T
): PMSidebar {
	return getProxyOnAttribute(pm, pm.pmSidebar, "pmSidebar");
}
