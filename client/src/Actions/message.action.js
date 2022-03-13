import axios from "axios";

import { constances as ACTIONS } from "../Constances";

export const sendMessage = (message = '') => {
    return async dispatch => {
        // socket.emit('msg-send', { msg: message })

        dispatch({
            type: ACTIONS.MESSAGE_SEND
        });
    }
}

export const receiveMessage = (messageInstance = {}) => {
    return dispatch => {
        dispatch({
            type: ACTIONS.MESSAGE_RECEIVE,
            new_message: messageInstance
        })
    }
}

export const fetchMessage = (messages = {}, curr_room_id) => {
    return dispatch => {
        dispatch({
            type: ACTIONS.MESSAGE_FETCH,
            messages
        })
    }
}

export const saveMessage = (curr_room_id) => {
    return dispatch => {
        dispatch({
            type: ACTIONS.MESSAGE_SAVE,
            curr_room_id
        })
    }
}
