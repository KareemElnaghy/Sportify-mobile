export interface PMLogin {
	email: string;
	onEmailChange: () => void;
	password: string;
	onPasswordChange: () => void;
	onLOGIN: () => void;
	rememberme: boolean;
	onRememberChange: () => void;
}

export const default_PMLogin: PMLogin = {
	email: "",
	onEmailChange: () => {},
	password: "",
	onPasswordChange: () => {},
	onLOGIN: () => {},
	rememberme: false,
	onRememberChange: () => {},
};
