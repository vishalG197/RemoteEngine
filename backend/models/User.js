const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'developer'], required: true },
  firstName: String,
  lastName: String,
  phoneNumber: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  professionalExperience: [
    {
      companyName: String,
      techStack: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
      timePeriod: String,
    },
  ],
  educationalExperience: [
    {
      degreeName: String,
      schoolName: String,
      timePeriod: String,
    },
  ],
  // Additional properties if needed
});

// Additional methods or hooks can be added here

const User = mongoose.model('User', userSchema);

module.exports = User;
