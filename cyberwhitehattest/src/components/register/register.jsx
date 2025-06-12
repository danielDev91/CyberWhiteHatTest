import React from "react";
import '../register/registerstyle.css';
import logo from '../../assets/bunnylogo.png';

export default function Register() {
  return (
    <div className="register-container">
      <div className="left-section">
        <img src={logo} alt="Logo" className="register-logo" />
        <h2 className="register-heading">OI OI</h2>
        <p className="register-description">Create your username</p>
      </div>

      <div className="right-section">
        <input
          type="text"
          placeholder="Enter username"
          className="register-input"
        />
        <button className="register-button">Next</button>
      </div>
    </div>
  );
}