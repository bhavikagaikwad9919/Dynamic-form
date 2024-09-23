import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomTextInput = (props: Props) => {

    const [field] = useField(props)

    return (
        <div>
        
            <TextField
            style={{marginBottom:"10px"}}
           variant="outlined"
fullWidth

{...field} {...props}
/>
            <ErrorMessage name={props.name} component="span" className="error" />
        </div>



    )
}
