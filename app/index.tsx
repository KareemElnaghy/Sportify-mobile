import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMLogin, PMLogin } from "@/PMs/Auth/LoginPM";
import { getLoginModel, LoginPageParams } from "@/Models/Auth/LoginModel";
import LoginView from "@/Views/Auth/Login/LoginView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function LoginPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMLogin>(default_PMLogin);
	const params = routerNav.getParams<LoginPageParams>();
	const model = useMemo(() => {
		const model = getLoginModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <LoginView pm={pm} />;
}
