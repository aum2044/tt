// ContactUs.js
import React from 'react';
import '../style/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form action="mailto:aum20444@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;