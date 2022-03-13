import { Avatar, Box, Typography } from "@material-ui/core";

import "./style.css";

const ContactItem = ({ contactItem={} }) => {
    return (
        <Box className="contact-item-container">
            <Avatar>T</Avatar>
            <Box className="contact-basic-info">
                <Typography variant="h6">{contactItem.name}</Typography>
                <Typography variant="h7">New messages</Typography>
            </Box>
        </Box>
    )
}

export default ContactItem;