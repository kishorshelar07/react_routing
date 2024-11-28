import React from 'react';
import './Home.css';

const FeatureItem = ({ title, description }) => (
  <div className="feature-item">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Home = () => {
  const features = [
    { title: "Quality Services", description: "From web development to digital marketing, we deliver top-notch services." },
    { title: "Expert Team", description: "Our team of professionals ensures that your projects are handled with care." },
    { title: "Customer Support", description: "We are here for you 24/7 to resolve any issues and answer your queries." },
    { title: "Innovative Solutions", description: "We create unique and innovative solutions to meet your business needs." },
    { title: "Affordable Pricing", description: "Get the best value for your investment with our competitive pricing." },
    { title: "On-Time Delivery", description: "We ensure that your projects are completed on time, every time." }
  ];

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
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
