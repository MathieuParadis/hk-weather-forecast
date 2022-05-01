// CONFIG IMPORTS
import React, {useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// ASSETS IMPORTS
import logo from '../assets/logos/Disco-weather-logo.svg';

const NavigationMobile = () => {
  const location = useLocation();

  const hideComponentOnHomepage = () => {
    const navMobile = document.querySelector(".navigation-mobile");
    if (location.pathname === '/') {
      navMobile.classList.add('d-none');
    } else {
      navMobile.classList.remove('d-none');
    }
  }

  useEffect(() => {
    hideComponentOnHomepage();
  }, [location]);

  return (
    <div className="navigation-mobile d-md-none fixed-bottom d-flex">
      <NavLink exact="true" to="/current-weather" className="current-weather-section col-3 d-flex justify-content-center p-0"></NavLink>
      <NavLink exact="true" to="/forecast" className="forecast-section col-3 d-flex justify-content-center p-0"></NavLink>
      <NavLink exact="true" to="/sun-moon-charts" className="sun-moon-section col-3 d-flex justify-content-center p-0"></NavLink>
      <NavLink exact="true" to="/tide-tables" className="tide-section col-3 d-flex justify-content-center p-0"></NavLink>
    </div>
  );
};

export default NavigationMobile;