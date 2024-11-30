import { Href, router } from "expo-router";

export type PageId =
	| "login"
	| "signup"
	| "home"
	| "bookings"
	| "courts"
	| "courtDetails"
	| "reserve"
	| "settings"
	| "homeTest"
	| "explore";

type PageIdsType = {
	[Id in PageId]: Href;
};

const pageMapTable: PageIdsType = {
	login: "/",
	signup: "/signup",
	home: "/(tabs)/home",
	bookings: "/(tabs)/bookingsList",
	courts: "/(tabs)/courtsList",
	courtDetails: "/(tabs)/courtDetails",
	reserve: "/(tabs)/reserve",
	settings: "/settings",
	homeTest: "/(tabs)/homeTest",
	explore: "/(tabs)/explore",
};

interface RouterNav {
	getHref: (pageId: PageId) => Href;

	push: (pageId: PageId) => void;
	goAndReset: (pageId: PageId) => void;
}

export const routerNav: RouterNav = {
	getHref: (pageId: PageId) => {
		return pageMapTable[pageId];
	},

	push: (pageId: PageId) => {
		const href = routerNav.getHref(pageId);
		router.push(href);
	},
	goAndReset: function (pageId: PageId): void {
		const href = routerNav.getHref(pageId);

		try {
			if (router.canGoBack()) router.dismissAll();
			router.replace(href);
		} catch {}
	},
};
