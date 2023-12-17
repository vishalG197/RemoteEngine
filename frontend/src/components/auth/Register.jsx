// Register.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import authService from '../../services/auth';
import styled from 'styled-components';

const Register = () => {
  const history = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: '',
    password: '',
    isDeveloper: true, // Default value for isDeveloper
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Call the registration service
      const response = await authService.register(formData);

      // Assuming the backend returns a token upon successful registration
      const { token } = response.data;

      // Save the token to localStorage or cookies
      localStorage.setItem('token', token);

      // Redirect to the onboarding page (adjust the route based on your app structure)
      // history.push('/onboarding');
    } catch (error) {
      // Handle registration error (display error message, etc.)
      console.error('Registration failed', error);
    }
  };

  return (
    <StyledDiv>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Radio button for isDeveloper */}
        <label>
          Are you a Developer?
          <input
            type="radio"
            name="isDeveloper"
            value={true}
            checked={formData.isDeveloper}
            onChange={handleChange}
          />
          Yes
          <input
            type="radio"
            name="isDeveloper"
            value={false}
            checked={!formData.isDeveloper}
            onChange={handleChange}
          />
          No
        </label>

        {/* Add other registration fields here */}

        <button type="submit">Register</button>
      </form>
    </StyledDiv>
  );
};

export default Register;

const StyledDiv = styled.div`
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;

  h2 {
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    /* Styling for radio buttons */
    input[type="radio"] {
      margin-right: 5px;
    }

    button {
      background-color: #d23ddf;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
