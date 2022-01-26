import { HANDLE_USER_FALIOUR, HANDLE_USER_REQUEST, HANDLE_USER_SUCCESS } from "./authentication.types";
export const fetchuserRequest = () => {
    return {
        type: HANDLE_USER_REQUEST
    }
}

export const fetchuserSuccess = (response) => {
    return {
        type: HANDLE_USER_SUCCESS,
        payload: response
    }
}

export const fetchuserError = (response) => {
    return {
        type: HANDLE_USER_FALIOUR,
        payload: response
    }
}