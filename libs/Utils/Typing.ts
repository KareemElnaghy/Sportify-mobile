export type RequirePartials<T, k extends keyof T> = Partial<T> & Pick<T, k>;
