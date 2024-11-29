import APIResponse from "@/types/APIResponse";
import Student from "@/types/Student";

interface StudentsListDTO {
	studentsCount: number;
	studentsList: Student[];
}

export interface StudentsListData {
	studentsCount: number;
	studentsList: Student[];
}

export const StudentsListDTOExtractor = (
	api_response: APIResponse<any>
): StudentsListDTO => {
	return api_response.result as StudentsListDTO;
};

export const StudentsListDTOTransformer = (
	dto_object: StudentsListDTO
): StudentsListData => {
	return dto_object;
};

interface StudentsItemDTO {
	studentsList: Student[];
}

export interface StudentsItemData {
	studentsList: Student[];
}

export const StudentsItemDTOExtractor = (
	api_response: APIResponse<any>
): StudentsItemDTO => {
	return api_response.result as StudentsItemDTO;
};

export const StudentsItemDTOTransformer = (
	dto_object: StudentsItemDTO
): StudentsItemData => {
	return dto_object;
};

type RemoveStudentDTO = "SUCCESS" | "FAIL";

export type RemoveStudentData = boolean;

export const RemovedStudentDTOExtractor = (
	api_response: APIResponse<any>
): RemoveStudentDTO => {
	return api_response.result as RemoveStudentDTO;
};

export const RemovedCourtDTOTransformer = (
	dto_object: RemoveStudentDTO
): RemoveStudentData => {
	return dto_object == "SUCCESS";
};
