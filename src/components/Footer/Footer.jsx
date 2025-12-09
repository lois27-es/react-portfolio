import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        
        <div className="footer-top">
          
          <div className="footer-top-left">
            <p>
              Aspiring Front-End Developer and Web Designer with four years of 
              BSIT experience, eager to create impactful digital experiences.
            </p>
          </div>

          <div className="footer-top-right">
            <div className="footer-email-container">
              <input type="email" placeholder="Enter your email" />
              <button className="footer-subscribe-btn">Subscribe</button>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2025 Geraldine Lois Agulto. All rights reserved.
          </p>
          <div className="footer-links">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
