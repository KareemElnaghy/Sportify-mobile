import { useStateObject } from "@/hooks/useStateObject";
import { useMemo } from "react";
import { default_PMSettings, PMSettings } from "@/PMs/Settings/SettingsPM";
import {
	getSettingsModel,
	SettingsModel,
	SettingsPageParams,
} from "@/Models/Settings/SettingsModel";
import SettingsView from "@/Views/Settings/SettingsView";
import { routerNav } from "@/libs/Utils/RouterLib";

export default function SettingsPage() {
	const { obj: pm, ref: pmRef } =
		useStateObject<PMSettings>(default_PMSettings);
	const params = routerNav.getParams<SettingsPageParams>();
	const model = useMemo(() => {
		const model = getSettingsModel(pmRef);
		model.setup(params);
		return model;
	}, []);

	return <SettingsView pm={pm} />;
}
