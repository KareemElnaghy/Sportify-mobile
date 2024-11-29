export interface PMSettings {
    username: string;
    EditProfile: () => void;
    ChangePassword: () => void;
    About: () => void;
    Logout: () => void;
    HelpSupport: () => void;
    Location: () => void;
}

export const default_PMSettings: PMSettings = {
    username: "",
    EditProfile: () => {},
    ChangePassword: () => {},
    About: () => {},
    Logout: () => {},
    HelpSupport: () => {},
    Location: () => {},
};
