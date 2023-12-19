import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faCogs,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import SkillComponent from './SkillComponent';
import ExperienceList from './ExperienceList';
import EducationalDetails from './EducationalDetails';
import { getAuthToken } from '../../utils/authUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OnboardingForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([{
    degreeName: '',
    schoolName: '',
    timePeriod: '',
  }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    setLoading(true);
const userId = localStorage.getItem('userId');
    try {
      // Form data to be sent to the backend
      const formData = {
        user:userId,
        firstName,
        lastName,
        phoneNumber,
        email,
        skills,
        experience,
        education,
      };

      // Make a POST request to the backend API
     
      const token = getAuthToken();
      const response = await fetch('https://remote-engine-ohgy.onrender.com/developers/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Show a success toast
        toast.success('Form submitted successfully!');
      } else {
        // Handle errors or display error messages
        const responseData = await response.json();
        setError(responseData.message || 'Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Internal server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <Div>
      <h2>Developer Onboarding</h2>
      <StyledForm onSubmit={handleSubmit}>
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

        <Label>
          <FontAwesomeIcon icon={faCogs} />
          Skills:
          <SkillComponent 
          setSkills={setSkills}
           />
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
        {error && <ErrorDiv>{error}</ErrorDiv>}
       
        <SubmitButton type="submit" disabled={loading}>
          <FontAwesomeIcon icon={faCogs} />
          {loading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </StyledForm>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
     
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
const ErrorDiv = styled.div`
  color: red;
  margin-bottom: 10px;
`;
const StyledForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
align-items:center;

  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  svg {
    margin-right: 8px;
  }
`;
export default OnboardingForm;
