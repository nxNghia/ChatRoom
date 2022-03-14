import { Box, InputAdornment } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

import { messagesSelector } from "../../Selectors/messages.selector";
import { userInfoSelector } from "../../Selectors/user.selector";
import RoomController from "../RoomController";
import TextBubble from "../TextBubble";
import InputForm from "../InputForm";
import { receiveMessage, sendMessage } from "../../Actions/message.action";

import "./style.css";

const MessageWindow = () => {
    const bottomRef = useRef(null);
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);
    const userInfo = useSelector(userInfoSelector);
    
    const submitHandle = (text) => {
        const message_instance = {
            id: messages.length + 1,
            author: userInfo.id,
            content: text
        };
        
        dispatch(receiveMessage(message_instance));
    }
    
    const input = (handle) => ({
        endAdornment: (
            <InputAdornment position="end">
                <SendIcon
                    color="primary"
                    className="send-icon"
                    onClick={handle}
                />
            </InputAdornment>
        )
    });

    useEffect(() => {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box className="message-window">
           <RoomController />
           <Box className="texts-container">
               {messages.map(item => <TextBubble key={item.id} self={item.author === userInfo.id} message={item} />)}
               <Box ref={bottomRef} />
           </Box>
           <Box className="input-field">
               <Box>
                    <InputForm placeholder="..." addition={input} submitHandle={submitHandle} />
               </Box>
           </Box>
        </Box>
    )
}

export default MessageWindow;