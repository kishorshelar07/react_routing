import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">My Website</h2>
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
  );
};

export default Sidebar;
