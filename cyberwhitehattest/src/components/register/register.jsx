import React, { useEffect, useState } from "react";
import '../register/registerstyle.css';
import logo from '../../assets/bunnylogo.png';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const navigate = useNavigate();

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let pass = '';
    for (let i = 0; i < 19; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setGeneratedPassword(generatePassword());
        setStep(3);
      }, 2000); // simulate loading
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (username.trim() !== '') {
      setStep(2);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  const registerUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username, 
          password: generatedPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('User registered successfully!');
        navigate('/login');
      } else {
        alert('Error: ' + data.msg);
      }
    } catch (error) {
      alert('Server error. Try again later.');
    }
  };

  return (
    <div className="register-fullscreen">
      <img src={logo} alt="Logo" className="register-logo" />

      {step === 1 && (
        <>
          <h2 className="register-heading">OI OI</h2>
          <p className="register-description">Create your username</p>
          <input
            required
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />
          <button className="register-button" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="register-heading">OI OI</h2>
          <p className="register-description">Please wait a brief moment...</p>
          <p className="register-description">The password is being requested</p>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="register-heading">OI OI</h2>
          <p className="register-description">Your secure password below</p>
          <p className="register-description">Please copy your password and save somewhere secure. <b>We recommend keepass.</b></p>
          <div className="password-display">
            <button className="copy-button" onClick={handleCopy}>
              Copy
            </button>
            <span className="password-text">{generatedPassword}</span>
          </div>
          <button className="register-button access-button" onClick={registerUser}>Access</button>
        </>
      )}
    </div>
  );
}