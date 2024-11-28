import { useEffect, useRef } from "react";

export function useUpdateEffect(effect: () => void, dependencies: any[]) {
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		return effect();
	}, dependencies);
}
