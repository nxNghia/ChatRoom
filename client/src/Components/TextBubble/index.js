import { Box, Button, IconButton, Modal, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ReplyIcon from '@material-ui/icons/Reply';
import { useState } from "react";
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import "./style.css";

const TextBubble = ({self = false, message = {}}) => {
    const [enter, setEnter] = useState(false);
    const [remove, setRemove] = useState(false);
    const [showEmoji, setShowEmoji] = useState(false);

    const mouseLeaveHandle = () => {
        setEnter(false);
        setShowEmoji(false);
    }

    const removeClickHandle = () => {
        setRemove(true);
        setEnter(false);
    }

    const cancelClickHandle = () => {
        setRemove(false);
    }

    const removeHandle = () => {
        setRemove(false);
    }

    return (
        <Box className={ self ? 'bubble-area-self' : 'bubble-area' } onMouseEnter={() => setEnter(true)} onMouseLeave={mouseLeaveHandle} >
            <Typography className="text-bubble">
                {message.content}
            </Typography>
            {enter && <Box className="text-control">
                <Box className="emoji-container">
                    {showEmoji && <Box className="emoji-list">
                        <FavoriteIcon color="secondary" />
                        <ThumbUpAltIcon color="primary" />
                        <ThumbDownIcon color="primary" />
                    </Box>}
                    <IconButton onClick={() => setShowEmoji(!showEmoji)}>
                        <EmojiEmotionsIcon />
                    </IconButton>
                </Box>
                <IconButton>
                    <ReplyIcon />
                </IconButton>
                <IconButton onClick={removeClickHandle}>
                    <DeleteIcon />
                </IconButton>
            </Box>}
            <Modal
                open={remove}
                onClose={() => setRemove(false)}
            >
                <Box className="confirm-box">
                    <Typography>Delete this message ?</Typography>
                    <Box className="control-box">
                        <Button color="secondary" variant="contained" onClick={cancelClickHandle} >
                            <ClearIcon />
                            Cancel
                        </Button>
                        <Button color="primary" variant="contained" onClick={removeHandle} >
                            <DeleteForeverIcon />
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default TextBubble;