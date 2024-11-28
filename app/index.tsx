import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMLogin, PMLogin } from "@/PMs/Auth/LoginPM";
import { getLoginModel } from "@/Models/Auth/LoginModel";
import LoginView from "@/Views/Auth/Login/LoginView";
import { router } from "expo-router";

export default function LoginPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMLogin>(default_PMLogin);
	const model = useMemo(() => {
		const model = getLoginModel(pmRef, router);
		model.setup();
		return model;
	}, []);

	return <LoginView pm={pm} />;
}
