// Register.js

import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import authService from '../../services/auth';


const Register = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Add other registration fields here
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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

        {/* Add other registration fields here */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
