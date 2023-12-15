const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  name: { type: String, unique: true, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  professionalExperiences: [{ type: Schema.Types.ObjectId, ref: 'User.professionalExperience' }],
  // Additional properties if needed
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
