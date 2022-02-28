import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

const Header = () => (
  <nav>
    <img
      src={logo}
      alt="Planets logo"
      style={{ height: '80px', width: '80px' }}
    />
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
