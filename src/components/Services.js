import React from 'react';  // Importing React library
import './Services.css';  // Importing the CSS file for styling

const Services = () => {
  // Array of services with title, description, and call-to-action
  const services = [
    { title: 'Web Development', description: 'We build modern and responsive websites tailored to your needs.' },
    { title: 'Mobile App Development', description: 'Create seamless and high-performing mobile applications.' },
    { title: 'Digital Marketing', description: 'Grow your business with targeted marketing strategies.' },
    { title: 'SEO Optimization', description: 'Improve your website’s visibility on search engines.' },
    { title: 'UI/UX Design', description: 'Design user-friendly interfaces with great aesthetics.' },
    { title: 'Cloud Solutions', description: 'Scalable cloud computing solutions for your business.' },
    { title: 'E-commerce Development', description: 'Build secure and scalable e-commerce platforms.' },
    { title: 'Content Writing', description: 'Engaging and SEO-friendly content for your website.' },
    { title: 'Cybersecurity', description: 'Protect your digital assets with robust security measures.' },
  ];

  return (
    <div className="services-page">  {/* Main container for the Services page */}
      <h1 className="services-heading">Our Services</h1>  {/* Heading for the Services section */}
      
      <div className="services-list">  {/* Container for the list of services */}
        {/* Loop through the services array and render each service */}
        {services.map((service, index) => (
          <div className="service-item" key={index}>  {/* Each service item with a unique key */}
            <h3>{service.title}</h3>  {/* Display the title of the service */}
            <p>{service.description}</p>  {/* Display the description of the service */}
            <button className="cta-btn">Learn More</button>  {/* Button to learn more about the service */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;  // Export the Services component for use in other parts of the app
