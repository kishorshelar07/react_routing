import React from 'react';  // Importing React library
import './Home.css';  // Importing the CSS file for styling

// FeatureItem component to display individual feature details
const FeatureItem = ({ title, description }) => (
  <div className="feature-item">  {/* Container for each feature item */}
    <h3>{title}</h3>  {/* Displaying the title of the feature */}
    <p>{description}</p>  {/* Displaying the description of the feature */}
  </div>
);

const Home = () => {
  // Array of feature objects with titles and descriptions
  const features = [
    { title: "Quality Services", description: "From web development to digital marketing, we deliver top-notch services." },
    { title: "Expert Team", description: "Our team of professionals ensures that your projects are handled with care." },
    { title: "Customer Support", description: "We are here for you 24/7 to resolve any issues and answer your queries." },
    { title: "Innovative Solutions", description: "We create unique and innovative solutions to meet your business needs." },
    { title: "Affordable Pricing", description: "Get the best value for your investment with our competitive pricing." },
    { title: "On-Time Delivery", description: "We ensure that your projects are completed on time, every time." }
  ];

  return (
    <div className="home-page">  {/* Main container for the home page */}
      
      {/* Hero section with welcome message and call-to-action button */}
      <div className="hero-section">
        <h1>Welcome to Our Website</h1>  {/* Main heading for the hero section */}
        <p>
          We offer amazing services to help you achieve your goals. Explore our
          portfolio, meet our team, and learn more about what we can do for you!
        </p>  {/* Subheading with additional details about the company */}
        <button className="cta-button">Get Started</button>  {/* Call-to-action button */}
      </div>

      {/* Features section showcasing different services */}
      <div className="features-section">
        <h2>What We Offer</h2>  {/* Subheading for the features section */}
        <div className="features">
          {/* Loop through the features array and render each feature using FeatureItem component */}
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}  // Use index as the unique key for each feature
              title={feature.title}  // Pass the title of the feature as prop
              description={feature.description}  // Pass the description of the feature as prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;  // Export the Home component for use in other parts of the app
