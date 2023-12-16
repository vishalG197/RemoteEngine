// OnboardingForm.js

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ExperienceList from './ExperienceList';
import { fetchSkills, submitOnboardingData } from '../services/developer'; // Adjust service file paths based on your actual structure

const OnboardingForm = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    skills: [],
    experiences: {
      education: [],
      professional: [],
    },
  });

  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    // Fetch skills when the component mounts
    const fetchAllSkills = async () => {
      try {
        const skills = await fetchSkills();
        setAllSkills(skills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchAllSkills();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillChange = (selectedSkills) => {
    setFormData((prevData) => ({ ...prevData, skills: selectedSkills }));
  };

  const handleExperienceChange = (experiences) => {
    setFormData((prevData) => ({ ...prevData, experiences }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have a service function for submitting onboarding data
      await submitOnboardingData(formData);
      history.push('/dashboard'); // Redirect to the dashboard after successful onboarding
    } catch (error) {
      console.error('Error submitting onboarding data:', error);
    }
  };

  return (
    <div>
      <h2>Developer Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Skills:
          <select
            multiple
            name="skills"
            value={formData.skills}
            onChange={(e) => handleSkillChange(Array.from(e.target.selectedOptions, (option) => option.value))}
            required
          >
            {allSkills.map((skill) => (
              <option key={skill._id} value={skill._id}>
                {skill.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <ExperienceList onChange={handleExperienceChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OnboardingForm;
