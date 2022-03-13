import axios from "axios";

import { constances as ACTIONS } from "../Constances";

export const fetchRooms = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/rooms/fetch', { withCredentials: true });

            dispatch({
                type: ACTIONS.ROOM_FETCH,
                rooms: response.data.rooms
            })

            if (response.data.rooms.length !== 0) {
                dispatch({
                    type: ACTIONS.MESSAGE_FETCH,
                    messages: response.data.rooms[0].messages
                })

                dispatch({
                    type: ACTIONS.ROOM_SWITCH,
                    curr_room_id: response.data.rooms[0]._id
                })
            }
        }
        catch
        {
            dispatch({
                type: ACTIONS.ROOM_FETCH_ERROR
            })
        }
    }
}

export const switchRoom = (room_id) => {

}