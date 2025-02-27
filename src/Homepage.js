import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="navbar">
          <nav>
            <ul>
              <li><Link to="https://pkss.co.id/main/">Homepage</Link></li>
              <li><Link to="https://recruitment.ptpkss.com/">Career</Link></li>
              <li><Link to="https://pkss.co.id/about//vision-mision/">Vision and Mission</Link></li>
              <li><Link to="https://pkss.co.id/contact-us/">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <video autoPlay muted loop id="background-video">
        <source src={require('./img/video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <main>
        <div className="hero">
          <h1>Building the Future of Professional Indonesian Human Resources.</h1>
          <p>We are committed to providing reliable Human Resources services and the best solutions for your company.</p>
          <div className="cta-buttons">
            <Link to="/loginpage">Log In</Link>
            <Link to="/primaseaumum">PrimaSEA Chat</Link>
          </div>
        </div>
      </main>
      <footer>
        <div className="logo-marquee">
          <div className="marquee">
            <img src={require('./img/1.png')} alt="#"/>
            <img src={require('./img/2.png')} alt="#"/>
            <img src={require('./img/3.png')} alt="#"/>
            <img src={require('./img/4.png')} alt="#"/>
            <img src={require('./img/5.png')} alt="#"/>
            <img src={require('./img/6.png')} alt="#"/>
            <img src={require('./img/7.png')} alt="#"/>
            <img src={require('./img/8.png')} alt="#"/>
            <img src={require('./img/9.png')} alt="#"/>
            <img src={require('./img/10.png')} alt="#"/>
            <img src={require('./img/11.png')} alt="#"/>
            <img src={require('./img/12.png')} alt="#"/>
            <img src={require('./img/13.png')} alt="#"/>
            <img src={require('./img/14.png')} alt="#"/>
            <img src={require('./img/15.png')} alt="#"/>
            <img src={require('./img/16.png')} alt="#"/>
            <img src={require('./img/17.png')} alt="#"/>
            <img src={require('./img/18.png')} alt="#"/>
            <img src={require('./img/19.png')} alt="#"/>
            <img src={require('./img/20.png')} alt="#"/>
            <img src={require('./img/21.png')} alt="#"/>
            <img src={require('./img/22.png')} alt="#"/>
            <img src={require('./img/23.png')} alt="#"/>
            <img src={require('./img/24.png')} alt="#"/>
            <img src={require('./img/25.png')} alt="#"/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
