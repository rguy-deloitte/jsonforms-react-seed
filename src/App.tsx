import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';

import GdsRadioControl from './GdsComponents/radio/GdsRadioControl';
import gdsRadioTester from './GdsComponents/radio/GdsRadioTester';

import GdsTextInputControl from './GdsComponents/text/GdsTextInputControl';
import gdsTextInputTester from './GdsComponents/text/GdsTextInputTester';

import GdsTextareaControl from './GdsComponents/textarea/GdsTextareaControl';
import gdsTextareaTester from './GdsComponents/textarea/GdsTextareaTester';

import { Fieldset, Page, Footer, Main, TopNav } from 'govuk-react';

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

const App = () => {
  const [data, setData] = useState<any>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const clearData = () => {
    setData({});
  };

  return (
    <Fragment>
      <Page
        header={
          <TopNav>
            <TopNav.NavLink href='/'>Homepage</TopNav.NavLink>
            <TopNav.NavLink href='/form'>Form</TopNav.NavLink>
          </TopNav>
        }
        footer={<Footer></Footer>}
      >
        <Main>
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
              onChange={({ errors, data }) => setData(data)}
            />
          </Fieldset>
          <pre id='boundData'>{stringifiedData}</pre>
        </Main>
      </Page>
    </Fragment>
  );
};

export default App;
