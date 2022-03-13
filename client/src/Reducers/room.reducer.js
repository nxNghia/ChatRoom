import { constances as ACTIONS } from "../Constances";

const initialState = {
    rooms: [],
    curr_room_id: undefined,
    new_messages_rooms: [],
    error: false
}

export const roomReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ACTIONS.ROOM_FETCH:
            return {
                ...state,
                rooms: action.rooms,
                error: false
            }

        case ACTIONS.ROOM_FETCH_ERROR:
            return {
                ...state,
                error: true
            }

        case ACTIONS.ROOM_SWITCH:
            return {
                ...state,
                curr_room_id: action.curr_room_id,
                new_messages_rooms: state.new_messages_rooms.filter(rooms => rooms.id !== action.curr_room_id)
            }

        case ACTIONS.ROOM_NEW_MESSAGES:
            return {
                ...state,
                new_messages_rooms: [{ id: action.room_id, message: action.new_message }, ...state.new_messages_rooms]
            }

        default: return state
    }
}
