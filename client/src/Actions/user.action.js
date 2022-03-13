import axios from "axios";

import { constances as ACTIONS } from "../Constances";

export const authorized = () => {
    return async dispatch => {
        const response = await axios.get('/user/authorized', { withCredentials: true });

        dispatch({
            type: ACTIONS.USER_AUTHORIZED,
            authorized: response.data.authorized,
            user: response.data.user
        });
    }
}

export const signin = (params = {}) => {
    return async dispatch => {
        try
        {
            await axios.post('/user/signin', { email: params.email, password: params.password });
            dispatch({
                type: ACTIONS.USER_SIGNIN,
            });
            dispatch(authorized());
        }
        catch
        {
            dispatch({
                type: ACTIONS.USER_SIGNIN_ERROR
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        await axios.post('/user/signout', { withCredentials: true });

        dispatch({
            type: ACTIONS.USER_SIGNOUT
        });
    }
}

export const signup = (params = {}) => {
    return async dispatch => {
        try
        {
            await axios.post('/user/signup', { email: params.email, password: params.password, username: params.username });
            
            dispatch({
                type: ACTIONS.USER_SIGNUP
            });
            dispatch(authorized());
        }
        catch
        {
            dispatch({
                type: ACTIONS.USER_SIGNUP_ERROR
            })
        }
    }
}

export const profile_update = (params = {}) => {
    return async dispatch => {
        try
        {
            const response = await axios.post('/user/update', { email: params.email, password: params.password, username: params.username }, { withCredentials: true });

            dispatch({
                type: ACTIONS.USER_PROFILE_UPDATE,
                user: response.data.user
            });
        }
        catch
        {
            dispatch({
                type: ACTIONS.USER_PROFILE_UPDATE_ERROR
            });
        }
    }
}
