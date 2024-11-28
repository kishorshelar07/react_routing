import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO' },
    { name: 'Jane Smith', role: 'Lead Developer' },
    { name: 'Mark Johnson', role: 'Marketing Head' },
    { name: 'Emily Davis', role: 'UI/UX Designer' },
    { name: 'Michael Brown', role: 'Finance Manager' },
    { name: 'Sarah Wilson', role: 'Content Strategist' },
  ];

  return (
    <div className="team-page">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="team-avatar">
              <div className="avatar-placeholder">{member.name[0]}</div>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
