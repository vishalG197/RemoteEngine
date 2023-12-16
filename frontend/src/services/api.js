// api.js

const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'; // Update with your actual backend URL

const headers = {
  'Content-Type': 'application/json',
  // Add any other headers you may need, e.g., Authorization header for JWT
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const api = {
  // Authentication APIs
  register: (userData) =>
    fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers,
      body: JSON.stringify(userData),
    }).then(handleResponse),

  login: (userData) =>
    fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify(userData),
    }).then(handleResponse),

  // Developer APIs
  submitOnboarding: (onboardingData, token) =>
    fetch(`${BASE_URL}/api/developer/onboarding`, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(onboardingData),
    }).then(handleResponse),

  // Skill APIs
  getSkills: () =>
    fetch(`${BASE_URL}/api/skills`, {
      method: 'GET',
      headers,
    }).then(handleResponse),
};
