import { Box, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import ContactItem from "../ContactItem";

import InputForm from "../InputForm";
import "./style.css";

const ContactList = () => {
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => <ContactItem key={index} contactItem={{name: "Test"}} />)}
            </Box>
        </Box>
    )
}

export default ContactList;
