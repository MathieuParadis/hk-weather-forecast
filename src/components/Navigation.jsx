// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// ASSETS IMPORTS
import logo from '../assets/logos/Disco-weather-logo.svg';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const refreshPage = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate("/");
    }
  }

  return (
    <div className="navigation d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img className="logo" src={logo} alt="MP logo" onClick={refreshPage}/>
        <h3 className="ms-3 mb-0">Disco Weather</h3>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <NavLink exact="true" to="/" className="navlink">Home</NavLink>
        <NavLink exact="true" to="/current-weather" className="navlink">Current weather</NavLink>
        <NavLink exact="true" to="/forecast" className="navlink">Forecast</NavLink>
        <NavLink exact="true" to="/sun-moon-times" className="navlink">Sunrise/Sunset times</NavLink>
        <NavLink exact="true" to="/tide-tables" className="navlink">Tide tables</NavLink>
      </div>
    </div>
  );
};

export default Navigation;