import React from "react";
import "./nav-bar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav_wrapper container">
        <div className="nav_wrapper_left">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="nav_menu">
            <NavLink to="/about-us">
              <p>About us</p>
            </NavLink>
            <NavLink to="#">
              <p>Training</p>
            </NavLink>
            <NavLink to="#">
              <p>Recipes</p>
            </NavLink>
            <NavLink to="#">
              <p>Blog</p>
            </NavLink>
          </div>
        </div>
        <div className="nav_wrapper_right">
          <p className="sign_in_btn">Sign in</p>
          <button className="main_btn">
            <p>Register</p>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
