import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading on submit

    // YOUR CREDENTIALS: service_id, template_id, form_current, public_key
    emailjs
      .sendForm(
        'service_bkckhfy', 
        'template_rlfe0lm', 
        form.current, 
        { publicKey: 'LVlbNC2v8k3KcyCPs' }
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); // Clears the form fields after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        },
      );
  };

  return (
    <div id='contact' className='contact-container'>
      
      <div className="contact-box">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="section-title">
            <h1>Get in touch</h1>
            <div className="title-underline"></div>
          </div>
          
          <div className="contact-details">
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>loisagulto26@gmail.com</p>
            </div>

            <div className="contact-info-item">
              <h3>Phone</h3>
              <p>+63 9311255164</p>
            </div>

            <div className="contact-info-item">
              <h3>Address</h3>
              <p>Bulacan, Philippines</p>
            </div>
          </div>

          <div className="contact-socials">
            <p>Follow us</p>
            {/* Add your social icons here if needed */}
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="contact-right">
          {/* Linked the ref and onSubmit handler here */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              {/* IMPORTANT: The 'name' attribute must match {{name}} in your EmailJS template */}
              <input type="text" name="user_name" placeholder="Your full name" required />
            </div>
            
            <div className="form-row">
              {/* IMPORTANT: The 'name' attribute must match {{email}} in your EmailJS template */}
              <input type="email" name="user_email" placeholder="Your email address" required />
            </div>

            <div className="form-row">
              {/* IMPORTANT: The 'name' attribute must match {{message}} in your EmailJS template */}
              <textarea name="message" rows="6" placeholder="Write something..." required></textarea>
            </div>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact;