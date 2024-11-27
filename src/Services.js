import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>We build modern and responsive websites tailored to your needs.</p>
        </div>
        <div className="service-item">
          <h3>Mobile App Development</h3>
          <p>Create seamless and high-performing mobile applications.</p>
        </div>
        <div className="service-item">
          <h3>Digital Marketing</h3>
          <p>Grow your business with targeted marketing strategies.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
