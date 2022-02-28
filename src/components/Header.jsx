import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';

const Header = () => (
  <nav>
    <img
      src={logo}
      alt="Planets logo"
      style={{ height: '40px', width: '40px' }}
    />
    <ul className="nav-list">
      <li>
        <NavLink to="/" exact activeClassName="active" className="nav-item">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/mission" exact activeClassName="active" className="nav-item">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeClassName="active" className="nav-item">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
