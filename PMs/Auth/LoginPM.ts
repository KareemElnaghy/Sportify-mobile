export interface PMLogin {
	email: string;
	onEmailChange: () => void;
	password: string;
	onPasswordChange: () => void;
	rememberme: boolean;
	onRememberChange: () => void;
	onLOGIN: () => void;
	onSIGNUP: () => void;
}

export const default_PMLogin: PMLogin = {
	email: "",
	onEmailChange: () => {},
	password: "",
	onPasswordChange: () => {},
	rememberme: false,
	onRememberChange: () => {},
	onLOGIN: () => {},
	onSIGNUP: () => {},
};
