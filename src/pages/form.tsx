import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from '../schema.json';
import uischema from '../uischema.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import { Fieldset, Button } from 'govuk-react';

import GdsRadioControl from '../GdsComponents/radio/GdsRadioControl';
import gdsRadioTester from '../GdsComponents/radio/GdsRadioTester';

import GdsTextInputControl from '../GdsComponents/text/GdsTextInputControl';
import gdsTextInputTester from '../GdsComponents/text/GdsTextInputTester';

import GdsTextareaControl from '../GdsComponents/textarea/GdsTextareaControl';
import gdsTextareaTester from '../GdsComponents/textarea/GdsTextareaTester';

const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  strict: false,
});
addFormats(ajv);

const initialData = {
  username: 'NeilMc',
};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: gdsRadioTester, renderer: GdsRadioControl },
  { tester: gdsTextInputTester, renderer: GdsTextInputControl },
  { tester: gdsTextareaTester, renderer: GdsTextareaControl },
];

const Form = () => {
  const [data, setData] = useState<any>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const clearData = () => {
    setData({});
  };
  return (
    <Fragment>
      <Fieldset>
        <Fieldset.Legend isPageHeading size='XLARGE'>
          Form
        </Fieldset.Legend>
        <JsonForms
          schema={schema}
          uischema={uischema}
          data={data}
          renderers={renderers}
          cells={materialCells}
          onChange={({ errors, data }) => {
            setData(data);
          }}
          validationMode='ValidateAndShow'
        />
      </Fieldset>
      <pre id='boundData'>{stringifiedData}</pre>
      <Button onClick={clearData}>Clear data</Button>
    </Fragment>
  );
};

export default Form;
