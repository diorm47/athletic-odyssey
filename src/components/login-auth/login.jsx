import React from "react";
import "./login-auth.css";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";

function LoginModal({ setLoginModal, setAuthModal }) {
  const goToAuth = () => {
    setLoginModal(false);
    setAuthModal(true);
  };
  return (
    <>
      <div className="overline" onClick={() => setLoginModal(false)}></div>
      <div className="modal_wrapper">
        <div className="modal_wrapper_top">
          <p>LOGIN</p>
          <Exit onClick={() => setLoginModal(false)} />
        </div>
        <h1>Welcome back!</h1>
        <div className="modal_wrapper_desc">
          <p></p>
          <p onClick={goToAuth}>New user?Sign Up Here</p>
        </div>
        <div className="modal_wrapper_form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="main_btn">
            <p>Login</p>
          </button>
        </div>
        <div className="login_google_btn">
          <div className="ot_lines">
            <div></div>
            <p>or</p>
            <div></div>
          </div>
          <button>
            <p>Login with Google</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
