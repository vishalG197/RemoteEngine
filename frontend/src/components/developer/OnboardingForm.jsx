// DeveloperOnboardingPage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCogs, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import SkillComponent from './SkillComponent';
import ExperienceList from './ExperienceList';
import EducationalDetails from './EducationalDetails';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Form data to be sent to the backend
      const formData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        skills,
        experience,
        education,
      };
console.log(formData);
      // Make a POST request to the backend API
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Redirect to a success page or perform any other actions
        console.log('Form submitted successfully!');
      } else {
        // Handle errors or display error messages
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Div>
      <h2>Developer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          <FontAwesomeIcon icon={faUser} />
          First Name:
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Label>
        <Label>
          <FontAwesomeIcon icon={faUser} />
          Last Name:
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Label>
        <Label>
          <FontAwesomeIcon icon={faPhone} />
          Phone Number:
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Label>
        <Label>
          <FontAwesomeIcon icon={faEnvelope} />
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>

        {/* Additional input fields can be added here */}

        {/* Skills (using a multi-select library, e.g., react-select) */}
        <Label>
          <FontAwesomeIcon icon={faCogs} />
          Skills:
          <SkillComponent selectedSkills={skills} onChange={handleSkillsChange} />
        </Label>

        {/* Professional Experience */}
        <Label>
          <FontAwesomeIcon icon={faBriefcase} />
          Professional Experience:
          <ExperienceList experiences={experience} onChange={handleExperienceChange} />
        </Label>

        {/* Educational Experience */}
        <Label>
          <FontAwesomeIcon icon={faGraduationCap} />
          Educational Experience:
          <EducationalDetails education={education} setEducation={setEducation} />
        </Label>

        <Button type="submit">
          <FontAwesomeIcon icon={faCogs} />
          Submit
        </Button>
      </form>
    </Div>
  );
};

const Div = styled.div`
  /* Add your CSS styles here */
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;

  svg {
    margin-right: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;

export default OnboardingForm;
