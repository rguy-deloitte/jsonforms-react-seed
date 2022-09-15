import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsRadio } from './GdsRadio';

interface GdsRadioControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
}

const GdsRadioControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
}: GdsRadioControlProps) => (
  <GdsRadio
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
  />
);

export default withJsonFormsControlProps(GdsRadioControl);
