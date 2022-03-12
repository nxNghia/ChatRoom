import { constances as ACTIONS } from "../Constances";

const initialState = {
    cached: [],
    curr_room_id: undefined,
    messages: []
}

export const messegeReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.MESSAGE_SEND:
            return {
                ...state
            }

        case ACTIONS.MESSAGE_RECEIVE:
            return {
                ...state,
                messages: [...state.messages, action.new_message]
            }

        case ACTIONS.MESSAGE_FETCH:
            return {
                ...state,
                curr_room_id: action.curr_room_id,
                messages: action.messages
            }

        case ACTIONS.MESSAGE_SAVE:
            return {
                ...state,
                cached: [...state.cached, { id: state.curr_room_id, messages: state.messages }]
            }

        default: return state;
    }
}