export interface InputProps {
    type: 'text' | 'textbox' | 'date' | 'number'
    name: string
    value: string | number | boolean
    validations: Validation[]
    placeholder?: string
    typeValue?: 'string' | 'boolean'
    label?: string
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue'
    value?: string | number | boolean
    message: string
}

export const dynamicforms: { [x: string]: InputProps[] } =
{
    project: [
        {
            type: "number",
            name: "clientNum",
            placeholder: "Enter Client Number",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Client Number is required"
                }
            ]
        },
        {
            type: "number",
            name: "matterNum",
            placeholder: "Enter Matter Number",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Matter Number is required"
                }
            ]
        },
        {
            type: "text",
            name: "matterName",
            placeholder: "Enter Matter Name",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Matter Name is required"
                }
            ]
        },
        {
            type: "date",
            name: "dateFiled",
            placeholder: "Enter Date Filed",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Date Filed is required"
                }
            ]
        },
        {
            type: "date",
            name: "dateServed",
            placeholder: "Enter Date Served",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Date Served is required"
                }
            ]
        }
    ]
}