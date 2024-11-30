import { Role } from "./Authorization/Roles";

export interface UserAccount {
	isAuth: boolean;
	token: string | null;
	email: string;
	role: Role;
}
export const noAuth: UserAccount = {
	isAuth: false,
	token: null,
	email: "",
	role: "NoAuth",
};
