// src/services/skill.js

const API_BASE_URL = 'http://localhost:3001'; // Update with your actual backend URL

// Function to fetch all skills from the backend
export const getAllSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/skills`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch skills');
    }

    return data.skills;
  } catch (error) {
    console.error('Error fetching skills:', error.message);
    throw error;
  }
};

// Additional functions for handling skills can be added here, e.g., adding a new skill, updating a skill, etc.
// You can follow a similar structure with async/await and fetch.

// Example: Function to add a new skill
export const addNewSkill = async (newSkill) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any authentication headers if needed
        // 'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ skill: newSkill }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to add new skill');
    }

    return data;
  } catch (error) {
    console.error('Error adding new skill:', error.message);
    throw error;
  }
};
