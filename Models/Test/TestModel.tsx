import { PMTest } from "@/PMs/Test/TestPM";
import { useEffect, useMemo } from "react";

// interface TestModelProps {
// 	pm: PMTest;
// }

// export function TestModel({ pm }: TestModelProps) {
// 	// setup
// 	useEffect(() => {
// 		pm.callTriger = onCallTriger;
// 		pm.onChange = onChange;
// 	}, []);

// 	const onCallTriger = useMemo(
// 		() => () => {
// 			console.log("trigered");
// 		},
// 		[pm]
// 	);

// 	// onSomeViewValChanged
// 	function onChange() {
// 		console.log("change");
// 		console.log(pm);
// 		console.log("here", pm.someModelVal, pm.someViewVal);
// 		console.log("done");

// 		pm.someModelVal = "wow";
// 	}

// 	console.log("model", pm);

// 	return <></>;
// }

export interface TestModel {
	setup: () => Promise<void>;

	onChange: () => void;
}

export function getTestModel(pm: () => PMTest): TestModel {
	const model: TestModel = {
		setup: async () => {
			pm().onChange = model.onChange;
		},

		onChange: () => {
			pm().someModelVal = "wow";
		},
	};

	return model;
}
