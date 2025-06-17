import React, { useState } from "react";
import "../login/loginstyle.css";
import logo from "../../assets/bunnylogo.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        navigate("/pagetest");
      } else {
        const errorData = await response.json();
        alert(errorData.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-left">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2>OI OI</h2>
        <p>Please enter your login data</p>
      </div>

      <div className="login-right">
        <input
          required
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="access-button-container">
          <button className="access-button" onClick={handleLogin}>
            Access
          </button>
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
