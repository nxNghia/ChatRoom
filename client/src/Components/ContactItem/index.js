import { Avatar, Box, Typography } from "@material-ui/core";
import { switchRoom } from "../../Actions/room.action";
import { useDispatch } from "react-redux";

import "./style.css";

const ContactItem = ({ contactItem={} }) => {
    const dispatch = useDispatch();

    const switchRoomHandle = () => {
        dispatch(switchRoom(contactItem));
    }

    return (
        <Box className="contact-item-container" onClick={switchRoomHandle}>
            <Avatar>T</Avatar>
            <Box className="contact-basic-info">
                <Typography variant="h6">{contactItem.name}</Typography>
                <Typography>New messages</Typography>
            </Box>
        </Box>
    )
}

export default ContactItem;