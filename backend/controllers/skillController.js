// skillController.js

const Skill = require('../models/Skill');

// Create a new skill
exports.createSkill = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the skill already exists
    const existingSkill = await Skill.findOne({ name });

    if (existingSkill) {
      return res.status(400).json({ error: 'Skill already exists' });
    }

    // Create a new skill
    const newSkill = new Skill({ name });
    await newSkill.save();

    res.status(201).json(newSkill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all skills
exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific skill by ID
exports.getSkillById = async (req, res) => {
  try {
    const { skillId } = req.params;

    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a skill by ID
exports.updateSkill = async (req, res) => {
  try {
    const { skillId } = req.params;
    const { name } = req.body;

    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    // Update the skill
    skill.name = name;
    await skill.save();

    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a skill by ID
exports.deleteSkill = async (req, res) => {
  try {
    const { skillId } = req.params;

    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    // Remove the skill
    await skill.remove();

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
