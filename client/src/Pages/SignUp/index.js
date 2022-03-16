import {
    Box,
    Container
} from "@material-ui/core";
import InputField from "../../Components/InputField";
import Submit from "../../Components/Submit";
import './style.css';

const SignUp = () => {
    return (
        <Container className="sign-up" maxWidth='xl'>
            <Box className="sign-up-container">
                <div className="top-text">
                    <h1>SIGN UP</h1>
                </div>                
                <InputField label="Username"/>
                <InputField label="Password"/>
                <InputField label="Confirm Password"/>
                <Submit value="SIGN UP"/>
                <div className="bottom-text">
                    Already have an account? <a href="#">Sign in</a>
                </div>
            </Box>
        </Container>
    )
}

export default SignUp;
