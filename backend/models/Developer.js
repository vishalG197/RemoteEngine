const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const developerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    match: /^\+[0-9]{1,15}$/,
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  }],
  education: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Education', 
  }],
  professionalExperiences: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProfessionalExperience',
  }],
}, {
  timestamps: true, 
});

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;
