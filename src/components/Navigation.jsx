// CONFIG IMPORTS
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact="true" to="/" className="navlink">Home</NavLink>
      <NavLink exact="true" to="/current-weather" className="navlink">Current weather</NavLink>
      <NavLink exact="true" to="/forecast" className="navlink">Forecast</NavLink>
      <NavLink exact="true" to="/sun-moon-times" className="navlink">Sunrise/Sunset times</NavLink>
    </div>
  );
};

export default Navigation;