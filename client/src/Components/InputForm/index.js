import { TextField } from "@material-ui/core";

import "./style.css";

const InputForm = ({ placeholder='', addition={} }) => {
    return (
        <form className="input-form" autoComplete="off" noValidate>
            <TextField
                size="small"
                variant="outlined"
                placeholder={placeholder}
                InputProps={{...addition}}
            />
        </form>
    )
}

export default InputForm;