import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './js/Board';
import Nav from './js/Nav';

import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';

const Blog = () => (
  <div>
    <Nav />
    <Board />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
