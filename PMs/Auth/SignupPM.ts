export interface PMSignup {
    email: string;
    onEmailChange: () => void;
    password: string;
    onPasswordChange: () => void;
    username: string;
    onUsernameChange: () => void;
    fullname: string;
    onFullnameChange: () => void;
    confirmPassword: string;
    onConfirmPasswordChange: () => void;
    onSIGNUP: () => void;
}

export const default_PMSignup: PMSignup = {
    email: "",
    onEmailChange: () => {},
    password: "",
    onPasswordChange: () => {},
    username: "",
    onUsernameChange: () => {},
    fullname: "",
    onFullnameChange: () => {},
    confirmPassword: "",
    onConfirmPasswordChange: () => {},
    onSIGNUP: () => {},
};
