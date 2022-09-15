import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsTextInput } from './GdsTextInput';

interface GdsTextInputControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
}

const GdsTextInputControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
}: GdsTextInputControlProps) => (
  <GdsTextInput
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
  />
);

export default withJsonFormsControlProps(GdsTextInputControl);
