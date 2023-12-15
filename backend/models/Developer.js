

const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  
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
