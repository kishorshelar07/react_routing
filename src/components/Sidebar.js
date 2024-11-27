import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Sidebar content (links and title) */}
      <div className={`sidebar-content ${isOpen ? 'visible' : 'hidden'}`}>
        <h2 className="sidebar-title"></h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>

      {/* Toggle Button (Fixed on the top-right corner of the sidebar) */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>
    </div>
  );
};

export default Sidebar;
