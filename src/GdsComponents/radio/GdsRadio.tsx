import React from 'react';
import { Fieldset, FormGroup, Radio } from 'govuk-react';

interface GdsRadioProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
}

export const GdsRadio: React.FC<GdsRadioProps> = ({
  value,
  updateValue,
  label,
  uischema,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };

  return (
    <div id='#/properties/gdsRadio' className='gdsRadio'>
      <FormGroup>
        <Fieldset>
          <Fieldset.Legend size='LARGE'>{label}</Fieldset.Legend>
          {uischema.options.items.map((radio: any, index: number) => (
            <Radio
              key={uischema.options.id + index.toString()}
              name={uischema.options.id}
              value={radio.value}
              onChange={inputChange}
              checked={radio.value === value}
            >
              {radio.label}
            </Radio>
          ))}
        </Fieldset>
      </FormGroup>
    </div>
  );
};
