import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Sidebar content */}
       {/* Toggle Button */}
       <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button><br/>
      <div className="sidebar-content">
        
        <nav>
          <Link to="/">
            <i className="bi bi-house"></i>
            {isOpen && <span>Home</span>}
          </Link>
          <Link to="/about">
            <i className="bi bi-person"></i>
            {isOpen && <span>About</span>}
          </Link>
          <Link to="/services">
            <i className="bi bi-gear"></i>
            {isOpen && <span>Services</span>}
          </Link>
          <Link to="/portfolio">
            <i className="bi bi-grid"></i>
            {isOpen && <span>Portfolio</span>}
          </Link>
          <Link to="/team">
            <i className="bi bi-people"></i>
            {isOpen && <span>Team</span>}
          </Link>
          <Link to="/contact">
            <i className="bi bi-envelope"></i>
            {isOpen && <span>Contact</span>}
          </Link>
          <Link to="/faq">
            <i className="bi bi-question-circle"></i>
            {isOpen && <span>FAQ</span>}
          </Link>
          <Link to="/blog">
            <i className="bi bi-journal"></i>
            {isOpen && <span>Blog</span>}
          </Link>
        </nav>
      </div>

     
    </div>
  );
};

export default Sidebar;
