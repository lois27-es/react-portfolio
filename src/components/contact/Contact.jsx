import React from "react";
import "./Contact.css";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        {/* Left side */}
        <div className="contact-left">
          <h2>Get in touch</h2>

          <p><strong>Email:</strong><br />reactportfolio@gmail.com</p>
          <p><strong>Phone:</strong><br />+63 911255164</p>
          <p>
            <strong>Address:</strong><br />
            PH, MANILA
          </p>

          <div className="contact-socials">
            <p>Follow us</p>
            <div className="social-icons">
              <FaYoutube />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
        </div>

        {/* Right side (form) */}
        <div className="contact-right">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your full name" required />
              <input type="email" placeholder="Your email address" required />
            </div>
            <textarea placeholder="Write something...." rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

