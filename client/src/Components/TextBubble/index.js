import { Box, Typography } from "@material-ui/core";
import "./style.css";

const TextBubble = ({self = false}) => {
    return (
        <Box className={ self ? 'bubble-area-self' : 'bubble-area' }>
            <Typography className="text-bubble">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit, est a dictum malesuada, 
                est erat bibendum odio, nec fringilla orci orci id diam. Nunc volutpat ac velit quis consequat.
            </Typography>
        </Box>
    )
}

export default TextBubble;