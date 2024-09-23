import { Form, Formik } from "formik";
import { CustomCheckBox, CustomRadioGroup, CustomTextInput, CustomSelect, CustomInputBox, Layout } from "../components";
import { getInputs } from "../utils";
import { useNavigate } from "react-router-dom";
import { CustomNumberInput } from "../components/CustomNumberInput";
import { CustomDateInput } from "../components/CustomDateInput";

const { initialValues, inputs, validationSchema } = getInputs("login");

export const CaseDynamic = () => {
  let navigate = useNavigate();
  return (
    <Layout title="">
      <Formik
        {...{ initialValues, validationSchema }}
        onSubmit={(values: any) => {
          console.log(values, "values");
          navigate("/review", { state: { values } });
        }}
      >
        {() => (
          <Form noValidate>
            {inputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                case "select":
                  return <CustomSelect key={name} label={props.label!} name={name} options={props.options!} />;

                case "radio-group":
                  return <CustomRadioGroup label={props.label!} name={name} options={props.options!} key={name} />;
                case "checkbox":
                  return <CustomCheckBox label={props.label!} key={name} name={name} />;
                case "textbox":
                  return <CustomInputBox label={props.label} key={name} name={name} type={type} placeholder={props.placeholder} />;
                  case "number":
                    return<CustomNumberInput key={name} name={name} placeholder={props.placeholder} type={type} />;
                    case "date":
                      return <CustomDateInput key={name} name={name} placeholder={props.placeholder} type={type} />;

                default:
                  return <CustomTextInput key={name} name={name} placeholder={props.placeholder} type={type} />;
              }
            })}

            <button className="btn btn_submit" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};
