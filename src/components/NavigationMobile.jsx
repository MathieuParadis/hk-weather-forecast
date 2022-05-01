// CONFIG IMPORTS
import React, {useEffect} from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

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
      <NavLink exact="true" to="/current-weather" className={(location.pathname === "/current-weather"  ? 'current-weather-section col-3 d-flex justify-content-center p-0 current-weather-section-active' : 'current-weather-section col-3 d-flex justify-content-center p-0')}></NavLink>
      <NavLink exact="true" to="/forecast" className={(location.pathname === "/forecast"  ? 'forecast-section col-3 d-flex justify-content-center p-0 forecast-section-active' : 'forecast-section col-3 d-flex justify-content-center p-0')}></NavLink>
      <NavLink exact="true" to="/sun-moon-charts" className={(location.pathname === "/sun-moon-chart"  ? 'sun-moon-section col-3 d-flex justify-content-center p-0 sun-moon-section-active' : 'sun-moon-section col-3 d-flex justify-content-center p-0')}></NavLink>
      <NavLink exact="true" to="/tide-tables" className={(location.pathname === "/tide-tables"  ? 'tide-section col-3 d-flex justify-content-center p-0 tide-section-active' : 'tide-section col-3 d-flex justify-content-center p-0')}></NavLink>
    </div>
  );
};

export default NavigationMobile;