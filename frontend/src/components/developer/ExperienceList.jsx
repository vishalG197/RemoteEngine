// Experience.js

import React, { useState } from 'react';
import SkillComponent from './SkillComponent'; // Import your SkillComponent
import { v4 as uuidv4 } from 'uuid'; // Use a library like uuid to generate unique IDs

const Experience = ({ setEducation }) => {
  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      company: '',
      techStack: '',
      skillsUsed: [],
      timePeriod: '',
    },
  ]);

  const handleInputChange = (index, key, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][key] = value;
    setExperiences(updatedExperiences);
  };

  const handleSkillChange = (index, selectedSkills) => {
    // Extract the objectId values from the selected skills and pass them to setEducation
    const skillObjectIds = selectedSkills.map((skill) => skill.value);
    setEducation(index, skillObjectIds);

    // Update the skillsUsed field in the experiences array
    const updatedExperiences = [...experiences];
    updatedExperiences[index].skillsUsed = selectedSkills;
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { id: uuidv4(), company: '', techStack: '', skillsUsed: [], timePeriod: '' }]);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperiences = experiences.filter((experience) => experience.id !== id);
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={experience.id}>
          <label>
            Company:
            <input
              type="text"
              value={experience.company}
              onChange={(e) => handleInputChange(index, 'company', e.target.value)}
            />
          </label>
          <br />

          <label>
            Tech Stack:
            <input
              type="text"
              value={experience.techStack}
              onChange={(e) => handleInputChange(index, 'techStack', e.target.value)}
            />
          </label>
          <br />

          <label>
            Skills Used:
            <SkillComponent
              selectedSkills={experience.skillsUsed}
              onChange={(selectedSkills) => handleSkillChange(index, selectedSkills)}
            />
          </label>
          <br />

          {/* Add other fields (timePeriod, etc.) similarly */}

          <button type="button" onClick={() => handleRemoveExperience(experience.id)}>
            Remove Experience
          </button>
          <hr />
        </div>
      ))}

      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
