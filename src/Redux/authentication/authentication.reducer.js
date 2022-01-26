import { HANDLE_USER_FALIOUR, HANDLE_USER_REQUEST, HANDLE_USER_SUCCESS } from "./authentication.types";

const initialState = {
    loading: false,
    token: '',
    status: '',
    message: '',
    user: null
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case HANDLE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
                status: action.payload.token ? "success" : "",
                message: action.payload.token ? "successfully log in" : ""
            }
        case HANDLE_USER_FALIOUR:
            return {
                ...state,
                loading: false,
                status: "error",
                message: action.payload
            }
        default:
            return state
    }
}