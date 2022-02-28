import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/mission">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
