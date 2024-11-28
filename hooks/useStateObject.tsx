"use client";

import { useState, useMemo, useRef, MutableRefObject, useEffect } from "react";
// import { flushSync } from "react-dom";

// export type ShallowState<T> = {
// 	[P in keyof T]: Readonly<T[P]>;
// };

export function useStateObject<S extends object>(
	initialState: S | (() => S)
): { obj: S; ref: () => S } {
	const [state, setState] = useState(initialState);
	const ObjRef = useRef(state);

	useEffect(() => {
		ObjRef.current = prox.obj;
	}, [state]);

	const prox = useMemo(() => {
		const res = new Proxy<S>(state, {
			set: (target: S, prop: string | symbol, value: any) => {
				// Only really care about setting state, so do a partial set based on the key
				setState((prevState: S) => ({ ...prevState, [prop]: value }));
				// flushSync(() => {
				// 	setState((prevState: S) => ({ ...prevState, [prop]: value }));
				// });
				return true;
			},
			get: (target: S, p: string | symbol) => {
				return state[p as keyof S];
			},
		});

		return { obj: res, ref: () => ObjRef.current };
	}, [state, setState]);
	return prox;
}

export function getProxyOnAttribute<S extends Object, T extends Object>(
	parent: S,
	child: T,
	attributeName: string
): T {
	return new Proxy(child, {
		set: (target: T, prop: string | symbol, value: any) => {
			parent[attributeName as keyof S] = { ...target, [prop]: value } as any;
			return true;
		},
		get: (target: T, p: string | symbol) => {
			return (parent[attributeName as keyof S] as T)[p as keyof T];
		},
	});
}
