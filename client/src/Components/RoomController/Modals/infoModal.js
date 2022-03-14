import { Box, Typography } from "@material-ui/core"

const Information = () => {
    return (
        <Box>
            <Box>
                <Typography>
                    Title
                </Typography>
            </Box>
            <Box>
                <ul>
                    {[1, 2, 3, 4].map(item => <li key={item}>{item}</li>)}
                </ul>
            </Box>
        </Box>
    )
}

export default Information;