import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', description: 'A modern and responsive web app for managing tasks.' },
    { title: 'Project 2', description: 'E-commerce platform with secure payment integration.' },
    { title: 'Project 3', description: 'Mobile app for seamless food delivery and tracking.' },
    { title: 'Project 4', description: 'Cloud-based storage system with user-friendly UI.' },
    { title: 'Project 5', description: 'Portfolio website with creative animations and design.' },
    { title: 'Project 6', description: 'Digital marketing dashboard for tracking campaigns.' },
    { title: 'Project 7', description: 'Real-time chat application with robust security.' },
    { title: 'Project 8', description: 'SEO optimization tool for improving web visibility.' },
    { title: 'Project 9', description: 'Weather forecasting app with live updates.' },
  ];

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-heading">Our Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
