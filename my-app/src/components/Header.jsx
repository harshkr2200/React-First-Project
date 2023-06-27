import React from "react";
import { NavLink } from "react-router-dom";
import "../Style/Style_Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="box">
        <div className="nav_box">
          <span className="nav_logo">Osl</span>
          <menu>
            <ul className="list_item">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/github">Github</NavLink>
              </li>
            </ul>
          </menu>
        </div>
      </div>
    </nav>
  );
};
export default Header;
