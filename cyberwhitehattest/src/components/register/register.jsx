import React from "react";
import '../register/registerstyle.css';
import logo from '../../assets/bunnylogo.png';

export default function Register() {
  return (
    <div className="register-container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="register-logo" />
      </div>
      <div className="form-section">
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



