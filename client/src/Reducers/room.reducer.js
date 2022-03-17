import { constances as ACTIONS } from "../Constances";

const initialState = {
    rooms: [
        { id: 0, name: 'my room' },
        { id: 1, name: 'another room' },
        { id: 2, name: 'another another room' }
    ],
    curr_room: undefined,
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
                curr_room: action.room,
                new_messages_rooms: state.new_messages_rooms.filter(rooms => rooms.id !== action.room.id)
            }

        case ACTIONS.ROOM_NEW_MESSAGES:
            return {
                ...state,
                new_messages_rooms: [{ id: action.room_id, message: action.new_message }, ...state.new_messages_rooms]
            }

        default: return state
    }
}
