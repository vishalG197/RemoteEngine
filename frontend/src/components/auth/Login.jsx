// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login service function
      const response = await login({ email, password });

      // Handle successful login
      console.log('Login successful!', response);

      // Redirect to the desired page (e.g., dashboard)
      history.push('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
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
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
