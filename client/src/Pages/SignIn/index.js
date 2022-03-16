import {
    Box,
    Container,
    Button
} from "@material-ui/core";
import InputField from "../../Components/InputField";
import Submit from "../../Components/Submit";
import './style.css';

const SignIn = () => {
    return (
        <Container className="sign-in" maxWidth='xl'>
            <Box className="sign-in-container">
                <div className="top-text">
                    <h1>SIGN IN</h1>
                </div>                
                <InputField label="Username"/>
                <InputField label="Password"/>
                <div>
                    <a href="#">Forgot password?</a>
                </div>
                <Submit value="SIGN IN"/>
                <div className="bottom-text">
                    Don't have account ? <a href="#">Sign up</a>
                </div>
            </Box>
        </Container>
    )
}

export default SignIn;
