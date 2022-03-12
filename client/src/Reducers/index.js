import { combineReducers } from "redux";

import { userReducer } from "./user.reducer";
import { messegeReducer } from "./messege.reducer";

export default combineReducers({
    userReducer,
    messegeReducer
})