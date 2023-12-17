import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faCalendarAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const EducationItem = ({ index, education, onChange, onRemove }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...education, [name]: value });
  };

  return (
    <StyledEducationItem>
      <Label>
        <FontAwesomeIcon icon={faGraduationCap} />
        Degree Name:
        <Input
          type="text"
          name="degreeName"
          value={education.degreeName}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        <FontAwesomeIcon icon={faUniversity} />
        School Name:
        <Input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Label>
        <FontAwesomeIcon icon={faCalendarAlt} />
        Time Period:
        <Input
          type="text"
          name="timePeriod"
          value={education.timePeriod}
          onChange={handleChange}
        />
      </Label>
      <br />

      <Button type="button" onClick={() => onRemove(index)}>
        <FontAwesomeIcon icon={faTrashAlt} />
        {/* Remove Education */}
      </Button>
    </StyledEducationItem>
  );
};

const StyledEducationItem = styled.div`
  margin-bottom: 20px;
`;

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
  background-color: #dc3545;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
`;

export default EducationItem;
