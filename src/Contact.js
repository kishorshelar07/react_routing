import React from 'react';
import './Contact.css'; // Importing CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get in Touch</h1>
      <p className="contact-description">
        We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
      </p>
      <div className="contact-details">
        <h3>Contact Information:</h3>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
          <li>Address: 123 Main Street, Cityville, Country</li>
        </ul>
      </div>
      <form className="contact-form">
        <h3>Send Us a Message</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
