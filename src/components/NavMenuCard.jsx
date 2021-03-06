// CONFIG IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenuCard = ({navElement}) => {
  return (
    <div className="nav-menu-card py-3 pointer">
      <NavLink exact="true" to={navElement.navlink} className="navlink">
        <div className="card-content p-2">
          <img src={navElement.img} alt={navElement.title + " icon"} className="illustration align-self-center" />
          <h4 className="fw-bold text-center mb-0 pt-2">{navElement.title}</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default NavMenuCard;