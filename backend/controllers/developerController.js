const Developer = require('../models/Developer');
const Skill = require('../models/Skill');

// Controller to handle developer onboarding
const onboardingController = {
  // Endpoint to submit onboarding details
  submitOnboarding: async (req, res) => {
    try {
      // Extract developer details from the request body
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        skills,
        professionalExperiences,
        educationalExperiences,
      } = req.body;

      // Check if the developer already exists based on the email
      const existingDeveloper = await Developer.findOne({ email });

      if (existingDeveloper) {
        return res.status(400).json({ error: 'Developer with this email already exists.' });
      }

      // Create a new developer instance
      const newDeveloper = new Developer({
        firstName,
        lastName,
        phoneNumber,
        email,
        skills,
        professionalExperiences,
        educationalExperiences,
      });

      // Save the developer to the database
      const savedDeveloper = await newDeveloper.save();

      // Update skills with references to the developer
      await Skill.updateMany(
        { _id: { $in: skills } },
        { $addToSet: { developers: savedDeveloper._id } }
      );

      // Return success response
      res.status(201).json(savedDeveloper);
    } catch (error) {
      console.error('Error submitting onboarding details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Other developer-related controller methods can be added here
};

module.exports = onboardingController;
