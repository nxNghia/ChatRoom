import { Box, TextField } from "@material-ui/core";
import ContactItem from "../ContactItem";
import InputForm from "../InputForm";
import "./style.css";

const UserList  = () => {
    return (
        <Box className="users-container">
            <Box className="search-field">
                <InputForm placeholder="Search user..." />
            </Box>
            <Box className="users-list-container">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => <ContactItem key={item} contactItem={{name: 'Test'}} />)}
            </Box>
        </Box>
    )
}

export default UserList;