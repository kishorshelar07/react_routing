import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1 className="portfolio-heading">Our Portfolio</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
        <div className="portfolio-item">Project 4</div>
      </div>
    </div>
  );
};

export default Portfolio;
