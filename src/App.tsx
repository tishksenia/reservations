import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';

import TimeTable from './Components/TimeTable';
import AppWrapper from './Components/AppWrapper';
import Controls from './Components/Controls';

import { fonts, globalStyles, globalVariables } from './shared/ui-constants';

import store from './store/store';

import 'normalize.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
