// DeveloperOnboardingPage.js

import React, { useState } from 'react';
import styled from 'styled-components';

// Import your custom components
import SkillComponent from './SkillComponent'; // Make sure to adjust the path based on your project structure
import ExperienceList from './ExperienceList'; // Adjust the path accordingly
import EducationalDetails from './EducationalDetails'; // Adjust the path accordingly

const OnboardingForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const handleSkillsChange = (selectedSkills) => {
    setSkills(selectedSkills);
  };

  const handleExperienceChange = (newExperience) => {
    setExperience(newExperience);
  };

  const handleEducationChange = (newEducation) => {
    setEducation(newEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, send data to the backend API
    // You can use the services/api.js file to make API calls
  };

  return (
    <Div>
      <h2>Developer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />

        {/* ... Other input fields for last name, phone number, and email ... */}

        {/* Skills (using a multi-select library, e.g., react-select) */}
        <label>
          Skills:
          <SkillComponent selectedSkills={skills} onChange={handleSkillsChange} />
        </label>
        <br />

        {/* Professional Experience */}
        <label>
          Professional Experience:
          <ExperienceList
            experiences={experience}
            onChange={handleExperienceChange}
          />
        </label>
        <br />

        {/* Educational Experience */}
        <label>
          Educational Experience:
          <EducationalDetails
            education={education}
            onChange={handleEducationChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </Div>
  );
};

export default OnboardingForm;

const Div = styled.div`
  /* Add your CSS styles here */
  
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

