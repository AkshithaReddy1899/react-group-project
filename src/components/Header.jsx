import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

const Header = () => (
  <nav>
    <img
      className="App-logo"
      src={logo}
      alt="logo"
      style={{ height: '40px', width: '40px' }}
    />
    <ul className="nav-list">
      <li>
        <NavLink to="/" activeclassname="active" className="nav-item">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/mission" activeclassname="active" className="nav-item">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeclassname="active" className="nav-item">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
