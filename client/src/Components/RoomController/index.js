import { Box, IconButton, Modal, Typography, Backdrop, Fade } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpIcon from '@material-ui/icons/Help';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useState } from "react";
import { useSelector } from "react-redux";

import { currRoomSelector } from "../../Selectors/room.selector";
import Information from "./Modals/infoModal";
import "./style.css";

const RoomController = () => {
    const [showModal, setShowModal] = useState(false);
    const curr_room = useSelector(currRoomSelector);

    const modalClickHandle = () => {
        setShowModal(!showModal);
    }

    const closeModalHandle = () => setShowModal(false);

    return (
        <Box className="room-controller">
            <Box className="room-title">
                <Typography variant="h5">{curr_room.name}</Typography>
            </Box>
            <Box>
                <IconButton onClick={modalClickHandle}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={modalClickHandle}>
                    <HelpIcon />
                </IconButton>
                <IconButton onClick={modalClickHandle}>
                    <DeleteForeverIcon />
                </IconButton>
            </Box>
            <Modal
                open={showModal}
                onClose={closeModalHandle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 250
                }}
            >
                <Fade in={showModal}>
                    <Box className="modal-container">
                        <Information />
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}

export default RoomController;