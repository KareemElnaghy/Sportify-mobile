export interface UserAccount {
	isAuth: boolean;
	token: string | null;
	email: string;
	role: string;
}
export const noAuth: UserAccount = {
	isAuth: false,
	token: null,
	email: "",
	role: "",
};
