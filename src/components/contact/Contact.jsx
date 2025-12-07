import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkckhfy", 
        "template_k5axpbd", 
        form.current,
        "LVlbNC2v8k3KcyCPs" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p><strong>Email:</strong><br />loisagulto26@gmail.com</p>
          <p><strong>Phone:</strong><br />+63 9311255164</p>
          <p><strong>Address:</strong><br />PH, MANILA</p>
          <div className="contact-socials">
            <p>Follow us</p>
          </div>
        </div>

       
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your full name" required />
              <input type="email" name="email" placeholder="Your email address" required />
            </div>
            <textarea name="message" placeholder="Write something...." rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
