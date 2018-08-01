import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import './sass/styles.scss';

const theme = createMuiTheme({});

render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
