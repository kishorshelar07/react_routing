import React from 'react';  // Importing React library
import './Contact.css';  // Importing the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">  {/* Main container for the Contact page */}
      <h1 className="contact-heading">Get in Touch</h1>  {/* Heading for the Contact section */}
      
      <p className="contact-description">
        We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
      </p>  {/* Description of the Contact page */}
      
      <div className="contact-details">  {/* Section displaying contact information */}
        <h3>Contact Information:</h3>  {/* Subheading for contact details */}
        <ul>  {/* List of contact methods */}
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>  {/* Email link */}
          <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>  {/* Phone link */}
          <li>Address: 123 Main Street, Cityville, Country</li>  {/* Physical address */}
        </ul>
      </div>
      
      <form className="contact-form">  {/* Form for submitting messages */}
        <h3>Send Us a Message</h3>  {/* Subheading for the form */}
        
        {/* Input field for the user's name */}
        <input type="text" placeholder="Your Name" required />
        
        {/* Input field for the user's email */}
        <input type="email" placeholder="Your Email" required />
        
        {/* Textarea for the user's message */}
        <textarea placeholder="Your Message" rows="5" required></textarea>
        
        {/* Submit button for the form */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;  // Export the Contact component for use in other parts of the application
