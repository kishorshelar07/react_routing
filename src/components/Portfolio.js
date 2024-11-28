import React from 'react';  // Importing React library
import './Portfolio.css';  // Importing the CSS file for styling

const Portfolio = () => {
  // Array of projects with title and description
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
    <div className="portfolio-page">  {/* Main container for the Portfolio page */}
      <h1 className="portfolio-heading">Our Portfolio</h1>  {/* Heading for the Portfolio section */}
      
      <div className="portfolio-grid">  {/* Container for displaying the portfolio items */}
        {/* Loop through the projects array and render each project */}
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>  {/* Each portfolio item with a unique key */}
            <h3>{project.title}</h3>  {/* Display the title of the project */}
            <p>{project.description}</p>  {/* Display the description of the project */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;  // Export the Portfolio component for use in other parts of the app
