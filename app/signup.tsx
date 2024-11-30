import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMSignup, PMSignup } from "@/PMs/Auth/SignupPM";
import { getSignupModel } from "@/Models/Auth/SignupModel";
import SignupView from "@/Views/Auth/Signup/SignupView";

export default function LoginPage() {
	const { obj: pm, ref: pmRef } = useStateObject<PMSignup>(default_PMSignup);
	const model = useMemo(() => {
		const model = getSignupModel(pmRef);
		model.setup();
		return model;
	}, []);

	return <SignupView pm={pm} />;
}
