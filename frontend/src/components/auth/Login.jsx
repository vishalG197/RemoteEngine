// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth';
import styled from 'styled-components'; // Import styled-components

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Set loading to true on button click
      setLoading(true);

      // Call the login service function
      const response = await authService.login({ email, password });

      // Handle successful login
      console.log('Login successful!', response);

      // Redirect to the desired page (e.g., dashboard)
      navigate("/onboarding");

      // Save the token and userId to localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      // Set loading back to false after API request completes
      setLoading(false);
    }
  };

  return (
    <StyledDiv>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        </div>
      </form>
    </StyledDiv>
  );
};

export default Login;

// Apply styled CSS using the classname
const StyledDiv = styled.div`
  // Add your CSS styles here
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
  marging-left:25%;
  h2 {
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 10px;

      label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        width:100%;
        background-color: #dc3be8;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
`;
