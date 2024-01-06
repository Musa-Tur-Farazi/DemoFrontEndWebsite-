import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="text-and-email-box">
          <div className="subscribe-box">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="image-container">
          <img src="./Image2.png" alt="Footer Image" />
        </div>
      </div>
      <div className="social-logos">
        <img src="./gmail-logo.png" alt="Gmail" />
        <img src="./twitter-logo.png" alt="Twitter" />
        <img src="./instagram-logo.png" alt="Instagram" />
      <div className="company-logo">
        <p>pti.</p>
      </div>
      <div className="copyright-line">
        <p>Copyright&copy;Tripp.All rights reserved.</p>
      </div>
      </div>
    </div>
  );
  
};

export default Footer;
