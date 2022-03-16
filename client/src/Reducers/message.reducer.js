import { constances as ACTIONS } from "../Constances";

const initialState = {
    cached: [],
    messages: []
}

export const messageReducer = (state = initialState, action) => {
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
                messages: action.messages
            }

        case ACTIONS.MESSAGE_SAVE:
            const index = state.cached.findIndex(saved_messages_group => saved_messages_group.id === action.curr_room_id);
            
            return {
                ...state,
                cached: index === -1 ? 
                    [...state.cached, { id: action.curr_room_id, messages: state.messages }] : 
                    state.cached.map(saved_messages_group => 
                            saved_messages_group.id === action.curr_room_id ? 
                            { ...saved_messages_group, messages: [...saved_messages_group.messages, action.new_message] } : 
                            saved_messages_group
                        )
            }

        case ACTIONS.MESSAGE_DELETE:
            return {
                ...state,
                messages: state.messages.filter(message => message.id === action.message_id)
            }

        case ACTIONS.MESSAGE_READ_PENDING:
            return {
                ...state,
                cached: state.cached.map(item => item.id === action.room_id ? { ...item, messages: [...item.messages, action.new_message] } : item)
            }

        default: return state;
    }
}
