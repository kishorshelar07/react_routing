import React from 'react';  // Importing React library
import { Link } from 'react-router-dom';  // Importing Link from react-router-dom for navigation
import './Sidebar.css';  // Importing the CSS file for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>  {/* Sidebar container with dynamic classes based on isOpen */}
      
      {/* Toggle Button */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>  {/* Icon changes based on isOpen */}
      </button><br/><br/><hr/>

      <div className="sidebar-content">
        {/* Navigation Links */}
        <nav>
          <Link to="/">  {/* Link to Home page */}
            <i className="bi bi-house"></i>  {/* Home icon */}
            {isOpen && <span>Home</span>}  {/* Display text 'Home' if isOpen is true */}
          </Link>
          <Link to="/about">  {/* Link to About page */}
            <i className="bi bi-person"></i>  {/* About icon */}
            {isOpen && <span>About</span>}  {/* Display text 'About' if isOpen is true */}
          </Link>
          <Link to="/services">  {/* Link to Services page */}
            <i className="bi bi-gear"></i>  {/* Services icon */}
            {isOpen && <span>Services</span>}  {/* Display text 'Services' if isOpen is true */}
          </Link>
          <Link to="/portfolio">  {/* Link to Portfolio page */}
            <i className="bi bi-grid"></i>  {/* Portfolio icon */}
            {isOpen && <span>Portfolio</span>}  {/* Display text 'Portfolio' if isOpen is true */}
          </Link>
          <Link to="/team">  {/* Link to Team page */}
            <i className="bi bi-people"></i>  {/* Team icon */}
            {isOpen && <span>Team</span>}  {/* Display text 'Team' if isOpen is true */}
          </Link>
          <Link to="/contact">  {/* Link to Contact page */}
            <i className="bi bi-envelope"></i>  {/* Contact icon */}
            {isOpen && <span>Contact</span>}  {/* Display text 'Contact' if isOpen is true */}
          </Link>
          <Link to="/faq">  {/* Link to FAQ page */}
            <i className="bi bi-question-circle"></i>  {/* FAQ icon */}
            {isOpen && <span>FAQ</span>}  {/* Display text 'FAQ' if isOpen is true */}
          </Link>
          <Link to="/blog">  {/* Link to Blog page */}
            <i className="bi bi-journal"></i>  {/* Blog icon */}
            {isOpen && <span>Blog</span>}  {/* Display text 'Blog' if isOpen is true */}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;  // Export the Sidebar component for use in other parts of the app
