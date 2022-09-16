import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsTextInput } from './GdsTextInput';

interface GdsTextInputControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
}

const GdsTextInputControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
}: GdsTextInputControlProps) => (
  <GdsTextInput
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
  />
);

export default withJsonFormsControlProps(GdsTextInputControl);
