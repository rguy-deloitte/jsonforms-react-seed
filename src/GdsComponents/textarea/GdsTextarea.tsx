import React from 'react';
import { FormGroup, TextArea } from 'govuk-react';

interface GdsTextareaProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
}

export const GdsTextarea: React.FC<GdsTextareaProps> = ({
  value,
  updateValue,
  label,
  uischema,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateValue(e.target.value);
  };

  return (
    <div id='#/properties/gdsTextarea' className='gdsTextarea'>
      <FormGroup>
        <TextArea
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            placeholder: uischema.placeholder ? uischema.placeholder : '',
            value: value ? value : '',
            onChange: inputChange,
          }}
        >
          {label}
        </TextArea>
      </FormGroup>
    </div>
  );
};
