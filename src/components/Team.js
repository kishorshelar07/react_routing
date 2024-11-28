import React from 'react';
import './Team.css';  // Importing CSS file for styling the component

const Team = () => {
  // Array of team members with name and role
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
      {/* Main heading for the team section */}
      <h1 className="team-heading">Meet Our Team</h1>
      
      {/* List of team members */}
      <div className="team-list">
        {/* Mapping through each team member in the array */}
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            {/* Avatar section, displaying the first letter of the member's name */}
            <div className="team-avatar">
              <div className="avatar-placeholder">{member.name[0]}</div>
            </div>
            
            {/* Display the member's name */}
            <h3>{member.name}</h3>
            
            {/* Display the member's role */}
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
