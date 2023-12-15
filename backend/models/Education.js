const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const educationSchema = new Schema({
  degreeName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: String, 
    required: true,
  },
});


const Education = mongoose.model('Education', educationSchema);


module.exports = Education;
