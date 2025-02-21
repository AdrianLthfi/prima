import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import backgroundImg from './img/background.png';
import pkssLogo from './img/pkss-logo.png';
import { default as primaSeaLogo1, default as primaSeaLogo2 } from './img/prima-sea-logo2.png';

const LoginPage = () => {
    const [personalNumber, setPersonalNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            alert("Please complete the CAPTCHA.");
            return;
        }

        if (personalNumber === '56419085' && password === 'adrian') {
            console.log('Login data:', personalNumber, password);
            navigate('/Primasea');
        } else {
            alert("Invalid credentials or captcha.");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleCaptchaChange = (value) => {
        if (value) {
            setCaptchaVerified(true);
        }
    };

    return (
        <div className="login-container">
            <div className="background-image">
                <img src={backgroundImg} alt="Background" className="background-img" />
            </div>
            <div className="login-card">
                <div className="logo-container">
                    <img src={primaSeaLogo1} alt="Prima SEA" className="logo1" />
                </div>
                <img src={primaSeaLogo2} alt="Prima SEA" className="logo2" />
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="personalNumber">Personal Number/NIP</label>
                        <input
                            type="text"
                            id="personalNumber"
                            value={personalNumber}
                            onChange={(e) => setPersonalNumber(e.target.value)}
                            placeholder="Enter Your Personal Number/NIP"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-container">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your Password"
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <div className="input-group-cap">
                        <label htmlFor="captcha">Captcha</label>
                        <div className="captcha-container">
                            <HCaptcha
                                sitekey="14c2c018-4726-4c6c-9508-089afe489592"
                                onVerify={handleCaptchaChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="login-btn">Log in</button>
                    <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                </form>

                <div className="pkss-logo-container">
                    <img src={pkssLogo} alt="PKSS Logo" className="pkss-logo" />
                </div>

                <footer>
                    <p>Copyright 2025 © PT Prima Karya Sarana Sejahtera</p>
                    <span>All rights reserved. | Kebijakan Privasi</span>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;