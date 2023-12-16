// src/services/auth.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your backend API base URL

const setAuthToken = (token) => {
  if (token) {
    // Set the Authorization header for every request if a token is present
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the Authorization header if no token is present
    delete axios.defaults.headers.common['Authorization'];
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    const { token } = response.data;
    setAuthToken(token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logout = () => {
  setAuthToken(null);
  // Additional logic for logout if needed
};

export default {
  register,
  login,
  logout,
  setAuthToken,
};
