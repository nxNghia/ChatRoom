import { Box, IconButton, Typography } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import HelpIcon from '@material-ui/icons/Help';

import "./style.css";

const RoomController = () => {
    return (
        <Box className="room-controller">
            <Box className="room-title">
                <Typography variant="h5">Title</Typography>
            </Box>
            <Box>
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <HelpIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default RoomController;