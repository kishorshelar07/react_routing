import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-list">
        <div className="team-member">
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <h3>Mark Johnson</h3>
          <p>Marketing Head</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
