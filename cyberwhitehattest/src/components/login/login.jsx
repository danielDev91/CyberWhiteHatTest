import React from "react";
import '../login/loginstyle.css';
import logo from '../../assets/bunnylogo.png';
import Register from "../register/register";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo-left">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>OI OI</h2>
        <p>Please enter your login data</p>
      </div>

      <div className="login-right">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        {/* Access Button */}
        <div className="access-button-container">
          <button className="access-button">Access</button>
        </div>

        <div className="login-links">
          <div className="login-link-block">
            <div className="arrow-icon">↗</div>
            <Link to="/register">Don't have an account?</Link>
          </div>
          <div className="login-link-block">
            <div className="arrow-icon">↗</div>
            <a href="#">Can't sign in?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
