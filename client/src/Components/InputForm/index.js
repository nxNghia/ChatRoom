import { TextField } from "@material-ui/core";

import "./style.css";

const InputForm = ({ placeholder='' }) => {
    return (
        <form className="input-form" autoComplete="off" noValidate>
            <TextField size="small" variant="outlined" placeholder={placeholder} />
        </form>
    )
}

export default InputForm;