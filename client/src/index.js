import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './js/Board';
import Home from './js/Home';
import Nav from './js/Nav';
import AddNewPost from './js/AddNewPost';
import Post from './js/Post';

import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';

const Blog = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/posts" component={Board} />
    <Route exact path="/new-post" component={AddNewPost} />
    <Route path="/posts/:postId" component={Post} />

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
