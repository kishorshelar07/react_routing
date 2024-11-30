import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate component
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import FAQ from './components/Faq';
import Blog from './components/Blog';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import './App.css';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Pass state to Sidebar */}      
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home is the default route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          {/* You can also add a fallback route if needed */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirects to Home if no route matches */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
