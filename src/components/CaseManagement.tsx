import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CustomDateInput } from './CustomDateInput';
import { getInputs } from '../utils';
import { CustomSelect } from './CustomSelect';
import { CustomNumberInput } from './CustomNumberInput';
import { CustomTextInput } from './CustomInput';
import { Layout } from './Layout';
import { Formik } from 'formik';
import { Form } from 'react-router-dom';

interface JsonObject {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  options?: Option[];
}

interface Option {
  label: string;
  value: string;
  desc: string; 
}
const CaseManagement = () => {
  const [json, setJson] = useState<JsonObject[]>([]);
  const [jsonNumber, setJsonNumber] = useState<JsonObject[]>([]);
  const [jsonDate, setJsonDate] = useState<JsonObject[]>([]);
  // const [isValidJson, setIsValidJson] = useState(true);
  const [jsonSelect, setJsonSelect] = useState<JsonObject[]>([]);

  const handleJsonNumber = () => {
    const newJsonNumber:JsonObject  = {
      type: 'number',
      name: 'ClientRefNum',
      placeholder: 'Enter Client Reference Number',
      value: ''
    };
    setJsonNumber(prevJsonNumber => [...prevJsonNumber, newJsonNumber]);
  };

  const handleJsonDateAssigned = () => {
    const newJsonDate:JsonObject  = {
      type: 'date',
      name: 'DateAssigned',
      placeholder: 'Enter Date Assigned',
      value: ''
    };
    setJsonDate(prevJsonDate => [...prevJsonDate, newJsonDate]);
  };

  const handleJsonDropdown = () => {
    const newJsonSelect: JsonObject = {
      type: 'select',
      name: 'Status',
      placeholder: 'Matter Status',
      value: '',
      options: [
        { label: 'Pending', value: 'pending', desc: 'pending' },
        { label: 'Selected', value: 'selected', desc: 'selected' },
        { label: 'Closed', value: 'closed', desc: 'closed' }
      ]
    };
    setJsonSelect(prevJsonSelect => [...prevJsonSelect, newJsonSelect]);
  };

const handlecliref = ()=>{
  handleJsonNumber();
}
const handleJsonNumberAndDateAssigned = () => {
  setJsonNumber([]);
  setJsonDate([]);
  setJsonSelect([]);
  handleJsonNumber();
  handleJsonDateAssigned();
};

const handleclirefnummattersta = () => {
  setJsonNumber([]);
  setJsonDate([]);
  setJsonSelect([]);
  handleJsonNumber();
  handleJsonDropdown();
};

const handlerefnumdatesat = () => {
  setJsonNumber([]);
  setJsonDate([]);
  setJsonSelect([]);
  handleJsonNumber();
  handleJsonDateAssigned();
  handleJsonDropdown();
};

  const handleClearAll = () => {
    setJsonNumber([]);
    setJsonDate([]);
    setJsonSelect([]);
  };
  // const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   const { value } = e.target;

  //   try {
  //     const parsedJson = JSON.parse(value);
  //     if (Array.isArray(parsedJson)) {
  //       setJsonNumber(parsedJson.filter((item: JsonObject) => item.type === "number"));
  //       setJsonDate(parsedJson.filter((item: JsonObject) => item.type === "date"));
  //       setJsonSelect(parsedJson.filter((item: JsonObject) => item.type === "select"));
  //       setIsValidJson(true);
  //     } else {
  //       setIsValidJson(false);
  //     }
  //   } catch (error) {
  //     setIsValidJson(false);
  //   }
  // };

  const { initialValues, inputs, validationSchema } = getInputs("login");

  return (
    <>   
     <button className="clear-button" onClick={handleClearAll}>
    Clear All
  </button>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
       
      <Box
        sx={{
          boxShadow: 2,
          width: '50%',
          height: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          p: 2,
          m: 1,
          borderRadius: 2,
          textAlign: 'left',
          fontSize: '0.875rem',
          fontWeight: '700',
          overflow: 'auto'
        }}
      >
        <div className='jsonText'>Select right dynamic button option to generate input JSON</div>
        <button className="fancy-buttonDynamic" onClick={handlecliref}>Client Reference Number</button>
        <button className="fancy-buttonDynamic" onClick={handleJsonNumberAndDateAssigned}> Client Reference Number + Date Assigned</button>
        <button className="fancy-buttonDynamic" onClick={handleclirefnummattersta}>Client Reference Number + Matter Status</button>     
        <button className="fancy-buttonDynamic" onClick={handlerefnumdatesat}>Client Reference Number + Date Assigned + Matter Status</button>


    

        <TextField
          label="JSON Input"
          multiline
          rows={20}
          value={JSON.stringify([...jsonNumber, ...jsonDate, ...jsonSelect], null, 2)}
          // onChange={handleJsonChange}
          variant="outlined"
          fullWidth
          margin="normal"
          // error={!isValidJson}
          // helperText={!isValidJson && "Invalid JSON"}
        />
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          width: '50%',
          height: 'auto',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          p: 2,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <div>
        </div>
        <div className='jsonText'>Preview of Static + Dynamic fields

          <h3 className='fieldname'>Case Management Fields</h3>

          <Layout title="">
      <Formik
        {...{ initialValues, validationSchema }}
        onSubmit={(values: any) => {
          console.log(values, "values");
        }}
      >
        {() => (
          <Form noValidate>
            {inputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                case "select":
                  return <CustomSelect key={name} label={props.label!} name={name} options={props.options!}/>;
                
                  case "number":
                    return<CustomNumberInput key={name} name={name} placeholder={props.placeholder} type={type}/>;
                    case "date":
                      return <CustomDateInput key={name} name={name} placeholder={props.placeholder} type={type}/>;

                default:
                  return <CustomTextInput key={name} name={name} placeholder={props.placeholder} type={type} style={{minWidth:"100%"}}/>;
              }
            })}
    {[...json, ...jsonNumber, ...jsonDate, ...jsonSelect].map((item, index) => (
                    <div key={index}>
                      {item.type === 'date' ? (
                        <CustomDateInput
                          name={`date-${index}`}
                          placeholder={item.placeholder}
                        />
                      ) : item.type === 'select' ? (
                        <CustomSelect
                        name={`select-${index}`}
                        label={item.placeholder}
                        options={item.options || []}
                      />
                      ) : (
                        <TextField
                          name={`field-${index}`}
                          style={{marginBottom:"10px"}}
                          placeholder={item.placeholder}
                          value={item.value}
                          onChange={(e) => {
                            const newJsonArray = [...json, ...jsonNumber, ...jsonDate, ...jsonSelect];
                            newJsonArray[index].value = e.target.value;
                            if (item.type === 'text') {
                              setJson(newJsonArray.filter(item => item.type === 'text'));
                            } else if (item.type === 'number') {
                              setJsonNumber(newJsonArray.filter(item => item.type === 'number'));
                            } else if (item.type === 'date') {
                              setJsonDate(newJsonArray.filter(item => item.type === 'date'));
                            } else if (item.type === 'select') {
                              setJsonSelect(newJsonArray.filter(item => item.type === 'select'));
                            }
                          }}
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          {...(item.type === 'number' && { type: 'number' })}
                          inputProps={{ ...(item.type === 'number' && { inputMode: 'numeric' }) }}
                        />
                      )}
                    </div>
                  ))}
                </Form>
              )}
      </Formik>
    </Layout>
       
        </div>
      </Box>
    </div>
    </>
  );
}

export default CaseManagement;
