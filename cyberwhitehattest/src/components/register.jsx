import React, { useState } from "react";
import "./register/register.css"; // Keep for custom styles
import bunnylogo from '../assets/bunnylogo.png'; // Your logo

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
        <div className="global-container">
            <div className="login-page">
                <header className="header">
                    <div className="nav-left">
                        <span className="nav-item">Source Files</span>
                        <span className="nav-item">Tools</span>
                        <span className="nav-item">Community</span>
                    </div>
                    <button className="get-started-btn">GET STARTED</button>
                </header>

                <div className="main-content">
                    <div className="left-panel">
                        <img src={bunnylogo} alt="Cyber Bunny Logo" className="bunny-logo" />
                        <p className="code-text">0101</p>
                        <p className="login-prompt">Please enter your login data.</p>
                    </div>

                    <div className="right-panel">
                        <input
                            type="text"
                            placeholder="USERNAME"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-box"
                        />
                        <div className="password-row">
                            <input
                                type="text"
                                placeholder="Generated Password"
                                value={password}
                                readOnly
                                className="input-box"
                            />
                            <button onClick={copyToClipboard} className="copy-button">Copy</button>
                        </div>
                        <button className="access-btn">ACCESS</button>
                        <div className="links">
                            <a href="#">don’t have an account →</a>
                            <a href="#">can’t sign in →</a>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="footer-left">
                        <span className="footer-logo">CyberWhiteArch</span>
                        <div className="contact-info">
                            <p>cyberwhitearch@hack.com</p>
                            <p>crewsupport@hack.com</p>
                            <p>+33 0 00 00 00</p>
                            <p>GMT+3 9:00–17:00</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-links">
                            <a href="#">Home</a>
                            <a href="#">Source Files</a>
                            <a href="#">Tools</a>
                            <a href="#">Community</a>
                            <a href="#">Profile</a>
                            <a href="#">Our Telegram →</a>
                            <a href="#">GitHub Projects →</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Register;
