import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Welcome to our website! We are passionate about delivering the best services and experiences to our users. Our mission is to make your life easier with innovative solutions and exceptional support.
      </p>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses by providing high-quality tools and services that make a real difference. We believe in innovation, integrity, and excellence.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a group of dedicated professionals who bring diverse skills and expertise to the table. Together, we strive to achieve greatness and create value for our users.
          </p>
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
