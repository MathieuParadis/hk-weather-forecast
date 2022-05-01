// CONFIG IMPORTS
import React, {useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
    <div className="navigation-mobile d-md-none fixed-bottom">
      {/* <NavLink exact="true" to={navElement.navlink} className="navlink">
        <div className="card-content p-2">
          <img src={navElement.img} alt={navElement.title + " icon"} className="illustration align-self-center" />
          <h4 className="fw-bold text-center mb-0 pt-2">{navElement.title}</h4>
        </div>
      </NavLink> */}
      trwer
    </div>
  );
};

export default NavigationMobile;