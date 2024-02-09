import React from "react";
import "./login-auth.css";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";

function AuthModal({ setLoginModal, setAuthModal }) {
  const goToLogin = () => {
    setLoginModal(true);
    setAuthModal(false);
  };
  return (
    <>
      <div className="overline" onClick={() => setAuthModal(false)}></div>
      <div className="modal_wrapper">
        <div className="modal_wrapper_top">
          <p>SIGN UP</p>
          <Exit onClick={() => setAuthModal(false)} />
        </div>
        <h1>See workouts & More!</h1>
        <div className="modal_wrapper_desc">
          <p>Start your fitness journey today</p>
          <p onClick={goToLogin}>Existing user?</p>
        </div>
        <div className="modal_wrapper_form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-enter Password" />
          <button className="main_btn">
            {" "}
            <p>Create Account</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
