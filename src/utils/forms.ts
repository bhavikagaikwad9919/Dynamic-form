
export interface InputProps {
    type: 'text' | 'radio-group' | 'email' | 'password' | 'select' | 'checkbox' | 'textbox' | 'date' | 'number'
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

export const forms: { [x: string]: InputProps[] } =
{
    login: [

        {
            type: "number",
            name: "clientNum",
            label: "Enter Client Number",
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
            label: "Enter Matter Name",
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
        },
        // {
        //     type: "text",
        //     name: "name",
        //     placeholder: "Full Name",
        //     value: "",
        //     validations: [
        //         {
        //             type: "minLength",
        //             value: 3,
        //             message: "Min. 3 characters",
        //         },
        //         {
        //             type: "required",
        //             message: "Full Name is required"
        //         },
        //     ],

        // },
        // {
        //     type: "email",
        //     name: "email",
        //     placeholder: "E-mail",
        //     value: "",
        //     validations: [
        //         {
        //             type: "required",
        //             message: "Email is required"
        //         },
        //         {
        //             type: "isEmail",
        //             message: "Email no valid"
        //         }
        //     ],

        // },
        // {
        //     type: "password",
        //     name: "password",
        //     placeholder: "Password",
        //     value: "",
        //     validations: [
        //         {
        //             type: "required",
        //             message: "Password is required"
        //         }
        //     ],

        // },
        // {
        //     type: "select",
        //     name: "type",
        //     label: "Your house type is: ",
        //     value: "",
        //     options: [
        //         {
        //             value: "apartment",
        //             desc: "Apartment",
        //         },
        //         {
        //             value: "duplex",
        //             desc: "Duplex"
        //         },
        //         {
        //             value: "home",
        //             desc: "Home"
        //         },
        //         {
        //             value: "other",
        //             desc: "Other"
        //         }
        //     ],
        //     validations: [
        //         {
        //             type: "required",
        //             message: "This is required"
        //         }
        //     ]
        // },
        // {
        //     type: "radio-group",
        //     name: "applicable",
        //     label: "Which one(s) is applicable to you right now? ",
        //     value: "",
        //     options: [
        //         {
        //             value: 'homeowner',
        //             desc: "Homeowner"
        //         },
        //         {

        //             value: "renter",
        //             desc: "Renter"
        //         },
        //         {

        //             value: "Living with other, paying rent",
        //             desc: "Living with other, paying rent"
        //         },
        //     ],
        //     validations: [
        //         {
        //             type: "required",
        //             message: "This is required"
        //         }
        //     ]
        // },
        // {
        //     type: "radio-group",
        //     name: "consideration",
        //     label: "Would you consider to move from your current home or apartment? ",
        //     value: "",
        //     options: [
        //         {
        //             value: 'yes',
        //             desc: "yes"
        //         },
        //         {

        //             value: "no",
        //             desc: "no"
        //         }
        //     ],
        //     validations: [
        //         {
        //             type: "required",
        //             message: "This is required"
        //         }
        //     ]
        // },
        // {
        //     type: "textbox",
        //     name: "reason",
        //     placeholder: "Type here",
        //     value: "",
        //     label: "Why do you consider to move?",
        //     validations: [
        //         {
        //             type: "minLength",
        //             value: 10,
        //             message: "Min. 10 characters",
        //         },
        //         {
        //             type: "required",
        //             message: "This is required"
        //         },
        //     ],

        // },
        // {
        //     type: "checkbox",
        //     name: "terms",
        //     typeValue: "boolean",
        //     label: "Terms and Conditions",
        //     value: false,
        //     validations: [
        //         {
        //             type: "isTrue",
        //             message: "Accept the terms!"
        //         }
        //     ]
        // },
    ],

}