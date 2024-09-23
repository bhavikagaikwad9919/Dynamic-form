import { ErrorMessage, useField } from 'formik';
import { Select, MenuItem } from '@mui/material';

interface Props {
  options: Opt[];
  label: string;
  name: string;
  [x: string]: any;
}

type Opt = { value: string | number; desc: string };

export const CustomSelect = ({ label, options, ...props }: Props) => {
  const [field, meta] = useField(props);
  console.log(meta)

  return (
    <div  style={{marginTop:"10px"}}>
      <div className="select">
        <label htmlFor={props.name || props.id}>{label}</label>
        <Select
          {...field}
          {...props}
          placeholder='Select Status'
          value={field.value || ''}
          onChange={(e) => {
            const { value } = e.target;
            field.onChange({ target: { name: field.name, value } });
          }}
        >
          <MenuItem value="">--- Select ---</MenuItem>
          {options.map(({ desc, value }) => (
            <MenuItem key={value} value={value}>
              {desc}
            </MenuItem>
          ))}
        </Select>
      </div>
      <ErrorMessage name={props.name} component="span" className="error" />
    </div>
  );
};
