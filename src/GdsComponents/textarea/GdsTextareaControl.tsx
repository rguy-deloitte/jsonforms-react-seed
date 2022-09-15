import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsTextarea } from './GdsTextarea';

interface GdsTextareaControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
}

const GdsTextareaControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
}: GdsTextareaControlProps) => (
  <GdsTextarea
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
  />
);

export default withJsonFormsControlProps(GdsTextareaControl);
