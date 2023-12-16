// ExperienceList.js

import React from 'react';

const ExperienceList = ({ experiences }) => {
  return (
    <div>
      <h2>Experiences</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <p>{experience.title}</p>
          <p>{experience.institution}</p>
          <p>{experience.timePeriod}</p>
          {/* Additional details specific to education or professional experience */}
          {experience.type === 'education' && (
            <p>Degree: {experience.degree}</p>
          )}
          {experience.type === 'professional' && (
            <p>Tech Stack: {experience.techStack}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
