import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMSignup, PMSignup } from "@/PMs/Auth/SignupPM";
import { getSignupModel, SignupPageParams } from "@/Models/Auth/SignupModel";
import SignupView from "@/Views/Auth/Signup/SignupView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function SignupPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMSignup>(default_PMSignup);
	const params = routerNav.getParams<SignupPageParams>();
	const model = useMemo(() => {
		const model = getSignupModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <SignupView pm={pm} />;
}
