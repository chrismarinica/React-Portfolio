import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css"; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;


