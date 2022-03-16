import { combineReducers } from "redux";

import { userReducer } from "./user.reducer";
import { messageReducer } from "./message.reducer";
import { roomReducer } from "./room.reducer";

export default combineReducers({
    userReducer,
    messageReducer,
    roomReducer
})