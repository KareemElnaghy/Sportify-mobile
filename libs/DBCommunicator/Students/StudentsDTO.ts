// import APIResponse from "@/types/APIResponse";
// import Court from "@/types/Court";
// import Student from "@/types/Student";

// type StudentDTO = Student;

// export const StudentsListDTOExtractor = (
// 	api_response: APIResponse<any>
// ): Student[] => {
// 	return api_response.result as Student[];
// };

// export const StudentsListDTOTransformer = (
// 	dto_object: StudentDTO[]
// ): Student[] => {
// 	return dto_object;
// };

import Student from "@/types/Student";

export type StudentDTO = {
	email: string;
	first_name: string | null;
	last_name: string | null;
	photo_link: string | null;
	is_trainer: boolean | null;
	phone_number: string | null;
	pass_hash: string | null;
	is_banned: boolean | null;
};

export const StudentsListDTOExtractor = (api_response: any[]): StudentDTO[] => {
	return api_response as StudentDTO[];
};

export const StudentsListDTOTransformer = (
	dto_object: StudentDTO[]
): Student[] => {
	return dto_object.map((s) => ({
		email: s.email,
		firstName: s.first_name || "",
		lastName: s.last_name || "",
		photoLink: s.photo_link || "",
		isTrainer: s.is_trainer || false,
		phoneNumber: s.phone_number || "",
		isBanned: s.is_banned || false,
	}));
};

export const StudentsItemsDTOExtractor = (
	api_response: any[]
): StudentDTO[] => {
	return api_response as StudentDTO[];
};

export const StudentsItemsDTOTransformer = (
	dto_object: StudentDTO[]
): Student[] => {
	return dto_object.map((s) => ({
		email: s.email || "",
		firstName: s.first_name || "",
		lastName: s.last_name || "",

		photoLink: s.photo_link || null,
		isTrainer: s.is_trainer || false,
		phoneNumber: s.phone_number || "",
		isBanned: s.is_banned || false,
	}));
};

export const StudentDTOExtractor = (api_response: any): StudentDTO => {
	return api_response as StudentDTO;
};

export const StudentDTOTransformer = (dto_object: StudentDTO): Student => {
	return {
		email: dto_object.email || "",
		firstName: dto_object.first_name || "",
		lastName: dto_object.last_name || "",
		photoLink: dto_object.photo_link || null,
		isTrainer: dto_object.is_trainer || false,
		phoneNumber: dto_object.phone_number || "",
		isBanned: dto_object.is_banned || false,
	};
};
