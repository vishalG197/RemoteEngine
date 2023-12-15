// Import required modules
const mongoose = require('mongoose');

// Define the ProfessionalExperience schema
const professionalExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String], // An array of technologies used during the experience
    required: true,
  },
  skillsUsed: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }], // Reference to skills from the predefined skill schema
    required: true,
  },
  timePeriod: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
  },
});


const ProfessionalExperience = mongoose.model('ProfessionalExperience', professionalExperienceSchema);

module.exports = ProfessionalExperience;
