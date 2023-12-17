import React from 'react';

const EducationItem = ({ index, education, onChange, onRemove }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...education, [name]: value });
  };

  return (
    <div>
      <label>
        Degree Name:
        <input
          type="text"
          name="degreeName"
          value={education.degreeName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Time Period:
        <input
          type="text"
          name="timePeriod"
          value={education.timePeriod}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="button" onClick={() => onRemove(index)}>
        Remove Education
      </button>
    </div>
  );
};

export default EducationItem;
