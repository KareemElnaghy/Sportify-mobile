import { APIConnector } from "@/libs/APICommunicator/APIConnector";

interface loginReqData {
	username: string;
	password: string;
}

interface LoginRes {
	isSuccess: boolean;
	accessToken: string | null;
	renewalToken: string | null;
}

export async function loginAPI(data: loginReqData): Promise<LoginRes> {
	const passwordHash = data.password;
	const response = await APIConnector.post(
		"/api/login",
		{},
		{},
		{
			username: data.username,
			passwordHash: passwordHash,
		}
	);

	if (response.result == "ERROR") {
		return {
			isSuccess: false,
			accessToken: null,
			renewalToken: null,
		};
	}

	return {
		isSuccess: true,
		accessToken:
			"accessToken" in response.result ? response.result["accessToken"] : null,
		renewalToken:
			"renewalToken" in response.result
				? response.result["renewalToken"]
				: null,
	};
}

interface reLoginReqData {
	renewalToken: string;
}

export async function reLoginAPI(data: reLoginReqData): Promise<LoginRes> {
	const response = await APIConnector.postNoFails(
		"/api/login",
		{},
		{},
		{
			renewalToken: data.renewalToken,
		}
	);

	if (response.result == "ERROR") {
		return {
			isSuccess: false,
			accessToken: null,
			renewalToken: null,
		};
	}

	return {
		isSuccess: true,
		accessToken:
			"accessToken" in response.result ? response.result["accessToken"] : null,
		renewalToken:
			"renewalToken" in response.result
				? response.result["renewalToken"]
				: null,
	};
}
