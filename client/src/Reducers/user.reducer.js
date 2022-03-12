import { constances as ACTIONS } from "../Constances";

const initialState = {

}

export const userReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.USER_AUTHORIZED:
            return {
                ...state,
                authorized: action.authorized,
                user: action.user,
                error: false
            }

        case ACTIONS.USER_SIGNIN:
            return {
                ...state,
                authorized: true,
                error: false
            }

        case ACTIONS.USER_SIGNIN_ERROR:
            return {
                ...state,
                authorized: false,
                error: true
            }

        case ACTIONS.USER_SIGNOUT:
            return {
                ...state,
                authorized: false,
                error: false
            }

        case ACTIONS.USER_SIGNUP:
            return {
                ...state,
                authorized: true,
                error: false
            }

        case ACTIONS.USER_SIGNUP_ERROR:
            return {
                ...state,
                authorized: false,
                error: true
            }

        case ACTIONS.USER_PROFILE_UPDATE:
            return {
                ...state,
                user: action.user,
                error: false
            }

        case ACTIONS.USER_PROFILE_UPDATE_ERROR:
            return {
                ...state,
                error: true
            }

        default: return state;
    }
}