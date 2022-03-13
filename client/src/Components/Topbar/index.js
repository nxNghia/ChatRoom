import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core"

import "./style.css";

const Topbar = () => {
    return (
        <AppBar position="static" className="top-bar">
            <Toolbar>
                <Typography variant="h6">
                    Chat
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar;