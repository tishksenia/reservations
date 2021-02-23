import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';

import TimeTable from './Components/TimeTable';
import AppWrapper from './Components/AppWrapper';

import 'normalize.css';
import Button from './Components/Button';

const globalStyles = css`
  /* latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  /* cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(http://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2)
      format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }

  body {
    font-family: Roboto, serif;
    background: var(--app-background);
    color: var(--font-color);
  }
`;

const globalVariables = css`
  html {
    --font-color: #242424;
    --app-background: #f1f1f1;
    --light-gray: #cecece;
    --dark-gray: #707070;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Global styles={globalStyles} />
        <Global styles={globalVariables} />
        <AppWrapper>
          <>
            <Button>Day</Button>
            <Button>Month</Button>
            <Button>Week</Button>
            <TimeTable />
          </>
        </AppWrapper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
