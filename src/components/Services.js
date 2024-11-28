import React from 'react';
import './Services.css';

const Services = () => {
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
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="cta-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
