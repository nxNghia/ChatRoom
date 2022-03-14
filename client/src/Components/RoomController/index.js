import { Box, IconButton, Modal, Typography, Backdrop, Fade } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpIcon from '@material-ui/icons/Help';
import { useState } from "react";
import Information from "./Modals/infoModal";

import "./style.css";

const RoomController = () => {
    const [showModal, setShowModal] = useState(false);

    const modalClickHandle = () => {
        setShowModal(!showModal);
    }

    const closeModalHandle = () => setShowModal(false);

    return (
        <Box className="room-controller">
            <Box className="room-title">
                <Typography variant="h5">Title</Typography>
            </Box>
            <Box>
                <IconButton onClick={modalClickHandle}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={modalClickHandle}>
                    <HelpIcon />
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