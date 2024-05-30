// components/Navigation.js
import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import './Navigation.css'; // Import the CSS file
import logo from './logo.png';

const Navigation = () => {
  const { keycloak } = useKeycloak();

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li> <img src={logo} alt="" /> </li>
        <li className="nav-item">Dashboard</li>
        <li  className="nav-item" onClick={handleLogout}>Logout</li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
