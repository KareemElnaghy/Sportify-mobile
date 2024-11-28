import { MutableRefObject } from "react";

export interface PMTest {
	someModelVal: string;
	someViewVal: string;
	onChange: () => void;

	callTriger: () => void;
}

export const default_PMTest: PMTest = {
	someModelVal: "",
	someViewVal: "",
	onChange: () => {},

	callTriger: () => {},
};
