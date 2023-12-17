import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import EducationItem from './EducationItem';

const EducationalExperience = ({ education, setEducation }) => {
  const addEducation = () => {
    const newEducation = {
      degreeName: '',
      schoolName: '',
      timePeriod: '',
    };
    setEducation([...education, newEducation]);
  };

  const handleEducationChange = (index, updatedEducation) => {
    const updatedEducationList = [...education];
    updatedEducationList[index] = updatedEducation;
    setEducation(updatedEducationList);
  };

  const removeEducation = (index) => {
    const updatedEducationList = education.filter((_, i) => i !== index);
    setEducation(updatedEducationList);
  };

  return (
    <StyledEducationalExperience>
      {education.map((edu, index) => (
        <EducationItem
          key={index}
          index={index}
          education={edu}
          onChange={handleEducationChange}
          onRemove={removeEducation}
        />
      ))}
      <AddButton type="button" onClick={addEducation}>
        <FontAwesomeIcon icon={faPlus} />
      Add Eduction
      </AddButton>
    </StyledEducationalExperience>
  );
};

const StyledEducationalExperience = styled.div`
  margin-bottom: 20px;
`;

const AddButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;

export default EducationalExperience;
