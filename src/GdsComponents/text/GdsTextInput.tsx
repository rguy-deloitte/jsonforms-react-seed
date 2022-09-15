import React from 'react';
import { FormGroup, InputField } from 'govuk-react';

interface GdsTextInputProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
}

export const GdsTextInput: React.FC<GdsTextInputProps> = ({
  value,
  updateValue,
  label,
  uischema,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };

  return (
    <div id='#/properties/gdsTextInput' className='gdsTextInput'>
      <FormGroup>
        <InputField
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            placeholder: uischema.placeholder ? uischema.placeholder : '',
            value: value ? value : '',
            onChange: inputChange,
            type: uischema.options
              ? uischema.options.inputType
                ? uischema.options.inputType
                : 'text'
              : 'text',
          }}
        >
          {label}
        </InputField>
      </FormGroup>
    </div>
  );
};
