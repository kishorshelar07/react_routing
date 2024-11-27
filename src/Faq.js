import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>What services do you offer?</h3>
        <p>We provide web development, app development, and digital marketing services.</p>
      </div>
      <div className="faq-item">
        <h3>How can I contact you?</h3>
        <p>You can reach us via email at support@example.com or call us at +123456789.</p>
      </div>
    </div>
  );
};

export default FAQ;
