import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ErrorMessage, useField } from 'formik';

interface Props {
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomDateInput = ({ name, placeholder, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);

console.log(meta)
  return (
    <div style={{minWidth:"100%", marginTop:"10px"}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          {...field}
          {...props}
          name={name}
          value={field.value || null}
          onChange={(date) => helpers.setValue(date)}
          {...props}
        />
      </LocalizationProvider>
      <ErrorMessage name={name} component="span" className="error" />
    </div>

  );
};
