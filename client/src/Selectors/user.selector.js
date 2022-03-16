import { createSelector } from "reselect";

const getUserInfo = state => state.userReducer.user;

export const userInfoSelector = createSelector(
    getUserInfo,
    info => info
)