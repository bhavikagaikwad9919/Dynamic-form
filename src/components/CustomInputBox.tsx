import { ErrorMessage, useField } from "formik"

interface Props {
    name: string;
    type: string;
    placeholder?: string;
    [x: string]: any
}

export const CustomInputBox = (props: Props) => {

    const [field] = useField(props)

    return (
        <>
        <label className="label_check">
            <div>{props.label}</div>
            <textarea {...field} {...props}></textarea>
            
            <ErrorMessage name={props.name} component="span" className="error" />
        </label>
        </>
    )
}
