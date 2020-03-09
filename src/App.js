/* eslint-disable import/order */
import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import NavbarContainer from './Containers/NavbarContainer';
import Router from './Router';

import './App.css';
import themeObject from './utills/themes';

const theme = createMuiTheme(themeObject);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <NavbarContainer />
        <Router />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
