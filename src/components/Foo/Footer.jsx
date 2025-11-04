import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    const templateParams = {
      subscriber_email: email, // must match your EmailJS variable
    };

    emailjs
      .send(
        "service_bkckhfy",        
        "template_co93c2s",   
        templateParams,
        "LVlbNC2v8k3KcyCPs"         
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("🎉 Thank you for subscribing!");
          setEmail("");
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to subscribe. Please try again.");
        }
      );
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Aspiring Front-End Developer and Web Designer with four years of BSIT experience,
            eager to create impactful digital experiences.
          </p>
        </div>

        <div className="footer-top-right">
          <form className="footer-email-input" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="footer-subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2025 Geraldine Lois Agulto. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
