const express = require('express');
const router = express.Router();
const Developer = require('../models/Developer');

// Middleware for JWT authentication
const authenticateJWT = require('../middlewares/authenticationMiddleware');

// Route to get developer details (example: /api/developers/:id)
router.get('/:id', authenticateJWT, async (req, res) => {
  try {
    // Retrieve developer details from the database based on the user ID in the JWT
    const developer = await Developer.findOne({ user: req.user.id })
      .populate('education') // Assuming you have a reference to education in the Developer model
      .populate('professionalExperiences.skills'); // Assuming you have a reference to skills in the ProfessionalExperience model

    if (!developer) {
      return res.status(404).json({ message: 'Developer not found' });
    }

    res.status(200).json(developer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to submit developer onboarding details (example: /api/developers/onboard)
router.post('/onboard', authenticateJWT, async (req, res) => {
  const { firstName, lastName, phoneNumber, skills, experiences, educations } = req.body;

  try {
    // Create a new developer instance with the provided details
    const newDeveloper = new Developer({
      user: req.user.id,
      firstName,
      lastName,
      phoneNumber,
      skills,
      education: educations, // Assuming you have a reference to education in the Developer model
      professionalExperiences: experiences,
    });

    // Save the developer to the database
    const savedDeveloper = await newDeveloper.save();

    res.status(201).json(savedDeveloper);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
