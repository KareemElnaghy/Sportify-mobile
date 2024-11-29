import { APIConnector } from "@/libs/APICommunicator/APIConnector";

interface loginReqData {
	username: string;
	password: string;
}

interface LoginRes {
	isSuccess: boolean;
	accessToken: string | null;
}

export async function loginAdmin(data: loginReqData): Promise<LoginRes> {
	const passwordHash = data.password;
	const response = await APIConnector.post(
		"/api/login/admin",
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
		};
	}

	return {
		isSuccess: true,
		accessToken:
			"accessToken" in response.result ? response.result["accessToken"] : null,
	};
}
