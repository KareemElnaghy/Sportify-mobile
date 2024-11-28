export interface PMAdminLogin {
	email: string;
	onEmailChange: () => void;
	password: string;
	onPasswordChange: () => void;
	onLOGIN: () => void;
	rememberme: boolean;
	onRememberChange: () => void;
}

export const default_PMAdminLogin: PMAdminLogin = {
	email: "",
	onEmailChange: () => {},
	password: "",
	onPasswordChange: () => {},
	onLOGIN: () => {},
	rememberme: false,
	onRememberChange: () => {},
};
