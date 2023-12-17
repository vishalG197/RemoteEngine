const Skill = require('../models/Skill');

const getAllSkill = async (req, res) => {
  const { query } = req.params; // Assuming the query parameter is in the URL params

  try {
    // Use a regular expression to perform a case-insensitive search
    const skills = await Skill.find({ name: { $regex: new RegExp(query, 'i') } });

    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllSkill,
};
