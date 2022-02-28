import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul className="nav-list">
      <li>
        <NavLink exact to="/" activeClassName="active">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/mission" activeClassName="active">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
