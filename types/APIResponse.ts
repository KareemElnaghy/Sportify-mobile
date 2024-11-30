import { NextResponse } from "next/server";

export default interface APIResponse<T> {
    status: "OK" | "ERROR";

    result: T
}

export type NextAPIRes<T> = Promise<NextResponse<APIResponse<T>>>

export function getOkResponse<T>(data: T): APIResponse<T> {
    return {
        status: "OK",
        result: data
    }
}

export function getErrorResponse<T>(data: T): APIResponse<T> {
    return {
        status: "ERROR",
        result: data
    }
}