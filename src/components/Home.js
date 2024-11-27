import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>
          We offer amazing services to help you achieve your goals. Explore our
          portfolio, meet our team, and learn more about what we can do for you!
        </p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="features-section">
        <h2>What We Offer</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Quality Services</h3>
            <p>
              From web development to digital marketing, we deliver top-notch services.
            </p>
          </div>
          <div className="feature-item">
            <h3>Expert Team</h3>
            <p>
              Our team of professionals ensures that your projects are handled with care.
            </p>
          </div>
          <div className="feature-item">
            <h3>Customer Support</h3>
            <p>
              We are here for you 24/7 to resolve any issues and answer your queries.
            </p>
          </div>
        </div>
        <br/>
        <div className="features">
          <div className="feature-item">
            <h3>Quality Services</h3>
            <p>
              From web development to digital marketing, we deliver top-notch services.
            </p>
          </div>
          <div className="feature-item">
            <h3>Expert Team</h3>
            <p>
              Our team of professionals ensures that your projects are handled with care.
            </p>
          </div>
          <div className="feature-item">
            <h3>Customer Support</h3>
            <p>
              We are here for you 24/7 to resolve any issues and answer your queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
