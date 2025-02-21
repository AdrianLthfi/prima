import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css';
import backgroundImg from './img/background1.png';
import logo from './img/logo.png';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setMessage('Please enter your email address.');
    } else {
      setMessage('A password reset link has been sent to your email!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="background-overlay">
        <img src={backgroundImg} alt="Background" className="background-img" />
      </div>
      <div className="forgot-password-container">
        <div className="logo">
          <img src={logo} alt="Prima SEA" />
        </div>
        <h1>Forgot Password?</h1>
        <p>Enter your email address</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <button type="submit" className="forgot-password-btn">Reset Password</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
