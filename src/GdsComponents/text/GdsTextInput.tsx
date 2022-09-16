import React, { useState } from 'react';
import { FormGroup, InputField } from 'govuk-react';

interface GdsTextInputProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
}

export const GdsTextInput: React.FC<GdsTextInputProps> = ({
  value,
  updateValue,
  label,
  uischema,
  errors,
}) => {
  const [data, setData] = useState<any>({ touched: false });
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };
  const inputTouch = () => {
    setData({ touched: true });
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
            onBlur: inputTouch,
            type: uischema.options
              ? uischema.options.inputType
                ? uischema.options.inputType
                : 'text'
              : 'text',
          }}
          meta={{
            error: errors,
            touched: data.touched,
          }}
        >
          {label}
        </InputField>
      </FormGroup>
    </div>
  );
};
