import { Box, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import ContactItem from "../ContactItem";
import { useSelector } from "react-redux";

import { roomsListSelector } from "../../Selectors/room.selector";
import InputForm from "../InputForm";
import "./style.css";

const ContactList = () => {
    const rooms = useSelector(roomsListSelector);

    return (
        <Box className="contact-container">
            <Box className="contact-controller">
                <InputForm placeholder="Search room..." />
            </Box>
            <Button variant="contained" color="secondary" className="add-button">
                <AddIcon />
                Add
            </Button>
            <Box className="contacts-list">
                {rooms.map(room => <ContactItem key={room.id} contactItem={{id: room.id, name: room.name}} />)}
            </Box>
        </Box>
    )
}

export default ContactList;
