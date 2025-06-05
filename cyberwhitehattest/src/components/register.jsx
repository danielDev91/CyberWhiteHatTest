import React, { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(generatePassword());

    function generatePassword() {
        return Math.random().toString(36).slice(-8);
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(password);
        alert("Password Copied!");
    }

    return (
        <div className="register-container">
            <div className="left-section">
                <img src="cyberwhitehattest/src/assets/bunnylogo.png" alt="" />
                <p>OIOI</p>
                <p>Please enter your login data</p>
                <button onClick={copyToClipboard} className="copy-button">Copy</button>
            </div>
            <div className="right-section">
                <input 
                    type="text" 
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input 
                    type="text"
                    placeholder="Generated Password"
                    value={password}
                    readOnly
                    className="input-field"
                />
            </div>
        </div>
    );
};

export default Register;