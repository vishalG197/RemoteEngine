// frontend/src/services/developer.js

import api from './api';

const developerService = {
  // Submit developer onboarding details
  submitOnboarding: async (onboardingData) => {
    try {
      const response = await api.post('/developers/onboard', onboardingData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Fetch developer details by ID (if needed)
  getDeveloperDetails: async (developerId) => {
    try {
      const response = await api.get(`/developers/${developerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Other developer-related functions can be added here based on your requirements
};

export default developerService;
