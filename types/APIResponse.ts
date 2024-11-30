export default interface APIResponse<T> {
	status: "OK" | "ERROR";

	result: T;
}
