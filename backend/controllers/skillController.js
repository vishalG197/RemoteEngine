const Skill = require('../models/Skill');

const getAllSkills = async (req, res) => {
  const { search } = req.query; // Use req.query to get the query parameter

  try {
    // Use a regular expression to perform a case-insensitive search
    const skills = await Skill.find({ name: { $regex: new RegExp(search, 'i') } });

    res.json({ skills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllSkills,
};
