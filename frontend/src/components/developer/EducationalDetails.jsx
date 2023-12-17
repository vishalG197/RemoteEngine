import React from 'react';
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
    <div>
      {education.map((edu, index) => (
        <EducationItem
          key={index}
          index={index}
          education={edu}
          onChange={handleEducationChange}
          onRemove={removeEducation}
        />
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationalExperience;
