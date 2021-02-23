import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import TimeTable from './Components/TimeTable';
import AppWrapper from './Components/AppWrapper';
import Controls from './Components/Controls';

import { fonts, globalStyles, globalVariables } from './shared/ui-constants';

import 'normalize.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Global styles={fonts} />
        <Global styles={globalStyles} />
        <Global styles={globalVariables} />
        <AppWrapper>
          <>
            <Controls />
            <TimeTable />
          </>
        </AppWrapper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
