import { TextField } from "@material-ui/core";
import { useState } from "react";

import "./style.css";

const InputForm = ({ placeholder='', addition=null, submitHandle }) => {
    const [textValue, setTextValue] = useState('');
    
    const submit = () => {
        submitHandle(textValue);
        setTextValue('');
    }

    return (
        <form
            className="input-form"
            autoComplete="off"
            noValidate
            onSubmit={e => e.preventDefault()}
        >
            <TextField
                size="small"
                variant="outlined"
                placeholder={placeholder}
                InputProps={addition && addition(submit)}
                value={textValue}
                onChange={e => setTextValue(e.target.value)}
                onKeyUp={e => {
                    if (e.key === 'Enter')
                        submit()
                }}
            />
        </form>
    )
}

export default InputForm;