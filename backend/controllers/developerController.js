const Developer = require('../models/Developer');

const submitOnboarding = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, skills, experience, education } = req.body;

    // Create a new developer
    const newDeveloper = new Developer({
      firstName,
      lastName,
      phoneNumber,
      email,
      skills,
      experience,
      education,
    });

    await newDeveloper.save();

    res.status(201).json({ message: 'Onboarding details submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  submitOnboarding,
};
