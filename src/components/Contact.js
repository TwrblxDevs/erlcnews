// ContactUs.js

import React from 'react';
import './css/ContactUs.css'; // Adjust the path based on your file structure

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, feel free to reach out to us using the form below.</p>

      <form action="mailto:therblxgod@gmail.com" method="post" encType="text/plain">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
