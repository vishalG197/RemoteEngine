import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import authService from '../../services/auth';
import styled from 'styled-components';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: '',
    password: '',
    isDeveloper: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Set loading to true on button click
      setLoading(true);

      // Call the registration service
      const response = await authService.register(formData);

      // Assuming the backend returns a token upon successful registration
      const { token, userId } = response;

      // Save the token and userId to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // Redirect to the onboarding page or dashboard based on user type
      if (formData.isDeveloper) {
        navigate("./onboarding");
      } else {
        navigate("./dashboard");
      }
    } catch (error) {
      // Handle registration error (display error message, etc.)
      console.error('Registration failed', error);
    } finally {
      // Set loading back to false after API request completes
      setLoading(false);
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


        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
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