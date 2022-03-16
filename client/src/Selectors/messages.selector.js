import { createSelector } from "reselect";

const getMessages = state => state.messageReducer.messages || [];

export const messagesSelector = createSelector(
    getMessages,
    messages => messages
)