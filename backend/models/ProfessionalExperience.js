import React, { useState } from 'react';
import SkillComponent from './SkillComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCode, faCogs, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Experience = ({ setEducation }) => {
  const [experiences, setExperiences] = useState([
    {
      id: uuidv4(),
      company: '',
      techStack: '',
      skillsUsed: [],
      timePeriod: {
        startDate: '',
        endDate: '',
      },
    },
  ]);

  const handleInputChange = (index, key, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][key] = value;
    setExperiences(updatedExperiences);
  };

  const handleSkillChange = (index, selectedSkills) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index].skillsUsed = selectedSkills;
    setExperiences(updatedExperiences);
    setEducation(updatedExperiences); // Send the updated form data to the parent
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { id: uuidv4(), company: '', techStack: '', skillsUsed: [], timePeriod: { startDate: '', endDate: '' } }]);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperiences = experiences.filter((experience) => experience.id !== id);
    setExperiences(updatedExperiences);
    setEducation(updatedExperiences); // Send the updated form data to the parent
  };

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={experience.id}>
          <Label>
            <FontAwesomeIcon icon={faBuilding} />
            Company:
            <Input
              type="text"
              value={experience.company}
              onChange={(e) => handleInputChange(index, 'company', e.target.value)}
            />
          </Label>
          <br />

          <Label>
            <FontAwesomeIcon icon={faCode} />
            Tech Stack:
            <Input
              type="text"
              value={experience.techStack}
              onChange={(e) => handleInputChange(index, 'techStack', e.target.value)}
            />
          </Label>
          <br />

          <Label>
            <FontAwesomeIcon icon={faCogs} />
            Skills Used:
            <SkillComponent
              selectedSkills={experience.skillsUsed}
              onChange={(selectedSkills) => handleSkillChange(index, selectedSkills)}
            />
          </Label>
          <br />

          {/* Add other fields (timePeriod, etc.) similarly */}
          {/* For simplicity, I'm adding text inputs for startDate and endDate here. You can customize it based on your needs. */}
          <Label>
            Start Date:
            <Input
              type="text"
              value={experience.timePeriod.startDate}
              onChange={(e) => handleInputChange(index, 'timePeriod.startDate', e.target.value)}
            />
          </Label>
          <Label>
            End Date:
            <Input
              type="text"
              value={experience.timePeriod.endDate}
              onChange={(e) => handleInputChange(index, 'timePeriod.endDate', e.target.value)}
            />
          </Label>

          <Button type="button" onClick={() => handleRemoveExperience(experience.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
            {/* Remove Experience */}
          </Button>
          <hr />
        </div>
      ))}

      <Button type="button" onClick={handleAddExperience}>
        Add Experience
      </Button>
    </div>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  svg {
    margin-right: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #35dc4e;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
`;

export default Experience;
