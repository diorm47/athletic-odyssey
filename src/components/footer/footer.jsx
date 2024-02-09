import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper container">
        <div className="footer_wrapper_left">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <p>
            Elevate your journey to <br /> a healthier, happier you.
          </p>
        </div>
        <div className="footer_wrapper_right">
          <div>
            <h4>Programs</h4>
            <NavLink to="/">
              <p>Training</p>
            </NavLink>
            <NavLink to="/">
              <p>Workout Videos</p>
            </NavLink>
          </div>
          <div>
            <h4>About</h4>
            <NavLink to="/about-us">
              <p>About us</p>
            </NavLink>
            <NavLink to="/">
              <p>Blog</p>
            </NavLink>
          </div>
          <div>
            <h4>Health</h4>
            <NavLink to="/">
              <p>Fitness</p>
            </NavLink>
            <NavLink to="/">
              <p>Health Recipes</p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="copyright ">
        <div className="container">
          <p>© Copyright 2024. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
