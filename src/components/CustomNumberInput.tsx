import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomNumberInput = (props: Props) => {

    const [field] = useField(props)

    return (
        <div>
            <TextField {...field} {...props} type="number" label={props.label} variant="outlined"
fullWidth  style={{marginBottom:"10px"}}
/>
            <ErrorMessage name={props.name} component="span" className="error" />
        </div>
    )
}
