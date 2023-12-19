const mongoose = require('mongoose');

const professionalExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  skillsUsed: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
    required: true,
  },
  timePeriod: {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      validate: {
        validator: function (endDate) {
          return !this.startDate || !endDate || this.startDate < endDate;
        },
        message: 'End date must be after the start date.',
      },
    },
  }
});

const ProfessionalExperience = mongoose.model('ProfessionalExperience', professionalExperienceSchema);

module.exports = ProfessionalExperience;
