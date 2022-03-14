import { Box, InputAdornment } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import RoomController from "../RoomController";
import TextBubble from "../TextBubble";
import InputForm from "../InputForm";

import "./style.css";

const MessageWindow = () => {
    const input = {
        endAdornment: (
            <InputAdornment position="end">
                <SendIcon color="primary" className="send-icon" />
            </InputAdornment>
        )
    }

    return (
        <Box className="message-window">
           <RoomController />
           <Box className="texts-container">
               {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <TextBubble key={item} self={item % 2 === 0} />)}
           </Box>
           <Box className="input-field">
               <Box>
                    <InputForm placeholder="..." addition={{...input}} />
               </Box>
           </Box>
        </Box>
    )
}

export default MessageWindow;