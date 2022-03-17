import { createSelector } from "reselect";

const getRoomsList = state => state.roomReducer.rooms || [];
const getCurrRoom = state => state.roomReducer.curr_room;

export const roomsListSelector = createSelector(
    getRoomsList,
    rooms => rooms
)

export const currRoomSelector = createSelector(
    getCurrRoom,
    room => room
)