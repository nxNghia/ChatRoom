import { TextField } from "@material-ui/core";


const InputField = ({ label='' }) => {
    return (
        <form className="input-field" autoComplete="off" noValidate>
            <TextField id="outlined-basic" label={label} />
        </form>
    )
}

export default InputField;
