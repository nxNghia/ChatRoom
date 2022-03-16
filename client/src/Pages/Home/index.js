import {
    Box,
    Container
} from "@material-ui/core";
import ContactList from "../../Components/ContactList";
import MessageWindow from "../../Components/MessageWindow";
import Topbar from "../../Components/Topbar";
import UserList from "../../Components/UserList";

import './style.css';

const Home = () => {
    return (
        <Container className="home" maxWidth='xl'>
            <Topbar />
            <Box className="home-container">
                <Box className="left-panel">
                    <ContactList />
                </Box>
                <Box className="center-panel">
                    <MessageWindow />
                </Box>
                <Box className="right-panel">
                    <UserList />
                </Box>
            </Box>
        </Container>
    )
}

export default Home;