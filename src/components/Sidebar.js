import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  return (
    <div>
     
  {/* Navbar */}
      <nav className="navbar">
        <button className="navbar-toggle-btn" onClick={toggleSidebar}>
          {/* <i className="bi bi-list"></i> */}
        </button>
        <h1 className="navbar-title">My App</h1>
      </nav>
      {/* Sidebar */}
   
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Toggle Button */}
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
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
     
    </div>
  );
};

export default Sidebar;
