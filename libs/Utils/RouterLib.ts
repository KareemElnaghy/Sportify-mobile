import { LoginPageParams } from "@/Models/Auth/LoginModel";
import { SignupPageParams } from "@/Models/Auth/SignupModel";
import { BookingsPageParams } from "@/Models/BookingsList/BookingsListModel";
import { CourtDetailsParams } from "@/Models/CourtDetails/CourtDetailsModel";
import { CourtsPageParams } from "@/Models/CourtsList/CourtsListModel";
import { HomePageParams } from "@/Models/Home/HomeModel";
import { ReservePageParams } from "@/Models/Reserve/ReserveModel";
import { SettingsPageParams } from "@/Models/Settings/SettingsModel";
import {
  Href,
  router,
  UnknownOutputParams,
  useLocalSearchParams,
} from "expo-router";

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

type PageIdsMapType = {
  [Id in PageId]: Href;
};

const pageMapTable: PageIdsMapType = {
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

export interface pageParamsObj {
  [key: string]: any;
}

type PageParams = undefined | HomePageParams;

interface RouterNav {
  getHref: (pageId: PageId) => Href;

  push: (pageId: PageId) => void;
  goAndReset: (pageId: PageId) => void;
  back: () => void;

  pushWithParams: <T extends PageParams>(pageId: PageId, params: T) => void;

  getParams: <T extends PageParams>() => T | {};

  goLogin: (params: LoginPageParams) => void;
  goSignup: (params: SignupPageParams) => void;
  goHome: (params: HomePageParams) => void;
  goBookings: (params: BookingsPageParams) => void;
  goCourts: (params: CourtsPageParams) => void;
  goCourtDetails: (params: CourtDetailsParams) => void;
  goReserve: (params: ReservePageParams) => void;
  goSettings: (params: SettingsPageParams) => void;
}

export const routerNav: RouterNav = {
  getHref: (pageId: PageId) => {
    return pageMapTable[pageId];
  },

  push: (pageId: PageId) => {
    const href = routerNav.getHref(pageId);
    router.push(href);
  },
  goAndReset: (pageId: PageId): void => {
    const href = routerNav.getHref(pageId);

    try {
      if (router.canGoBack()) router.dismissAll();

      router.replace(href);
    } catch {}
  },

  back: (): void => {
    router.back();
  },

  pushWithParams: <T extends PageParams>(pageId: PageId, params: T): void => {
    const href = routerNav.getHref(pageId);
    const flatParams = { value: JSON.stringify(params) };

    router.push({ pathname: href as any, params: flatParams });
  },

  getParams: <T extends UnknownOutputParams>(): T | {} => {
    const params = useLocalSearchParams<T>();
    if (params == undefined || !("value" in params)) return {};
    return JSON.parse(params.value as any);
  },

  goLogin: function (params: LoginPageParams): void {
    routerNav.pushWithParams("login", params);
  },
  goSignup: function (params: SignupPageParams): void {
    routerNav.pushWithParams("signup", params);
  },
  goHome: function (params: HomePageParams): void {
    routerNav.pushWithParams("home", params);
  },
  goBookings: function (params: BookingsPageParams): void {
    routerNav.pushWithParams("bookings", params);
  },
  goCourts: function (params: CourtsPageParams): void {
    routerNav.pushWithParams("courts", params);
  },
  goCourtDetails: function (params: CourtDetailsParams): void {
    routerNav.pushWithParams("courtDetails", params);
  },
  goReserve: function (params: ReservePageParams): void {
    routerNav.pushWithParams("reserve", params);
  },
  goSettings: function (params: SettingsPageParams): void {
    routerNav.pushWithParams("settings", params);
  },
};
