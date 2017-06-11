import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from './../img/flash.png';

const Nav = () => {
  console.log('blah');
  return (
    <ul className="nav">
      <li>
        <img
          src={logo}
          className="nav-logo"
          alt="logo"
        />
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/articles">
          Articles
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
